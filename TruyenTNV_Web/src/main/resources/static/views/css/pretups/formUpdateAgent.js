app_vnm.factory('updateAgent', function ($http, $translate) {
    return {
        submitData: function (param, callback) {
            var url = eim_url + "/bs/agent/submitData";
            $http.post(url, param).success(callback).error(function (callback) {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#updateAgent");
            });
        },
    }
});
app_vnm.controller('updateAgentController', function ($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
                                                      NgTableParams, $localStorage, updateAgent) {

    $scope.listImport = [];
    $scope.listAgent = [];
    $scope.model = {};
    $scope.model.fileName = "";

    $scope.downloadTemplate = function () {
        var attachFile = {};
        attachFile.fileName = "Template_Update_dai_ly_theo_lo.xlsx";
        attachFile.folder = "Template_Update_dai_ly_theo_lo.xlsx";
        dowloadFile(attachFile);
    };

    dowloadFile = function (data) {
        overLoading("Downloading file mẫu...");
        var url = eim_url + '/bs/downLoadFileTemplate';
        $http.post(url, data, {
            responseType: 'arraybuffer'
        }).success(function (response, status, headers, config) {
            overLoading("Downloading file mẫu...");
            download(new Blob([response]), headers('FileNameDownload'), headers["content-type"]);
            closeOverLay();
        }).error(function (data) {
            bootbox.alert(FILE_DOWNLOAD + " " + data.message);
            closeOverLay();
        });
    };

    var uploader = $scope.uploader = new FileUploader({
        url: eim_url + '/bs/agent/getListFromFileTemplate'
    });

    uploader.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
            var fileName = item.name;
            var sizeFile = item.size;
            var fileExtValue = fileName.split(".").pop();

            if (fileExtValue.toUpperCase() != "xlsx".toUpperCase() && fileExtValue.toUpperCase() != "xls".toUpperCase()) {
                var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0009');
                bootbox.alert(TEMPLATE_ERROR);
                return false;
            }
            return true;
        }
    });

    uploader.onBeforeUploadItem = function (item) {
        overLoading();
        $scope.model.fileName = item._file.name;

        item.headers = {
            Authorization: 'Bearer ' + $localStorage.clientContext.token
        };
        var form_data = new FormData();
        item.formData.push(form_data);
    };

    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        $scope.listImport = $scope.listImport.concat(response);
        if ($scope.listImport.length>1000){
            bootbox.alert("File xử lý không được vượt quá 1000 dòng");
            $scope.listImport = [];
        } else if ($scope.listImport.length<1) {
            bootbox.alert("File không có dữ liệu");
        } else {
            $scope.listAgent = [];
            for (var i in $scope.listImport){
                var item = $scope.listImport[i];
                $scope.listAgent.push($scope.arrToObject(item));
            }
            $scope.tableAgent = new NgTableParams({}, {
                dataset : $scope.listAgent
            });
            bootbox.alert("Upload file thành công.");
        }
        closeOverLay();
    };

    uploader.onErrorItem = function (fileItem, response, status, headers) {
        closeOverLay();
        bootbox.alert("Có lỗi xảy ra trong quá trình upload danh sách thuê bao.");
    };

    uploader.onAfterAddingAll = function (items) {
        if (items != null) {
            uploader.uploadAll();
        }
    };

    $scope.uploadFile = function (uploaderListIn, event) {
        $scope.listImport = [];
        uploader.clearQueue();
    };

    $scope.submitData = function(){
        App.blockUI({
            target : "#updateAgent",
            boxed : true,
            message : 'Loading...'
        });
        var request = $scope.listImport;
        // {
        //     "In.vAgent": $scope.listImport,
        // };
        updateAgent.submitData(request, function (result) {
            if (result.status == "0" && result.messages) {
                bootbox.alert("Xảy ra lỗi trong quá trình submitData! Lỗi: " + result.messages);
            } else {
                if (result['Out.Message'] != null && result['Out.Message'] != '') {
                    bootbox.alert(result['Out.Message']);
                }
                if (result['Out.Data'] != null && result['Out.Data'] != '') {
                    // $scope.writeFile(result['Out.File']);
                    var data = result['Out.Data'];
                    $scope.listAgent = [];
                    var suc = 0;
                    for (var i in data){
                        var item = data[i];
                        $scope.listAgent.push($scope.arrToObject(item));
                        var pArray = item.split(",");
                        var errorMessage = pArray[20];
                        if (errorMessage!=undefined && errorMessage.trim()=='0'){
                            suc++;
                        }
                    }
                    $scope.tableAgent = new NgTableParams({}, {
                        dataset : $scope.listAgent
                    });
                    if (suc<$scope.listAgent.length){
                        bootbox.alert("Thực hiện cập nhật thành công "
                            + suc + "/"
                            + $scope.listAgent.length+" bản ghi. Xem trạng thái lỗi trong danh sách");
                    }else {
                        bootbox.alert("Cập nhật thành công");
                    }
                }
            }
            App.unblockUI("#updateAgent");
        });
    };

    $scope.ExportDataTable = function(){
        var dataStr = "";
        for (var i in $scope.listAgent){
            var item = $scope.listAgent[i];
            dataStr += $scope.objectToStrCsv(item) + "\n";
            // dataStr += item + "\n";
        }
        $scope.exportError(dataStr);
    };

    $scope.objectToStrCsv = function(obj){
        var str = "";
        str += obj['strAgentType'] + ",";
        str += obj['strTradeName'] + ",";
        str += ((obj['strTin']!='')?"'":"") + obj['strTin'] + ",";
        str += obj['strOwnerName'] + ",";
        str += obj['strSecureQuest'] + ",";
        str += obj['strBirthDate'] + ",";
        str += ((obj['strContactNo']!='')?"'":"") + obj['strContactNo'] + ",";
        str += obj['strOutletAddress'] + ",";
        str += ((obj['strReportByEmail']!='')?"'":"") + obj['strReportByEmail'] + ",";
        str += obj['strEmail'] + ",";
        str += obj['strProvince'] + ",";
        str += obj['strDistrict'] + ",";
        str += ((obj['strIdNo']!='')?"'":"") + obj['strIdNo'] + ",";
        str += obj['strDateIssue'] + ",";
        str += obj['strPlaceIssue'] + ",";
        str += obj['strWard'] + ",";
        str += ((obj['parentIsdn']!='')?"'":"") + obj['parentIsdn'] + ",";
        str += obj['agentLevel'] + ",";
        str += ((obj['strMSISDN']!='')?"'":"") + obj['strMSISDN'] + ",";
        str += ((obj['strICCID']!='')?"'":"") + obj['strICCID'] + ",";
        str += obj['errorMessage'];
        return str;
    };

    $scope.arrToObject = function(strAgent){
        var pArray = strAgent.split(",");
        var data = {};
        data['strAgentType'] = pArray[0];
        data['strTradeName'] = pArray[1];
        data['strTin'] = pArray[2];
        data['strOwnerName'] = pArray[3];
        data['strSecureQuest'] = pArray[4];
        data['strBirthDate'] = pArray[5];
        data['strContactNo'] = pArray[6];
        data['strOutletAddress'] = pArray[7];
        data['strReportByEmail'] = pArray[8];
        data['strEmail'] = pArray[9];
        data['strProvince'] = pArray[10];
        data['strDistrict'] = pArray[11];
        data['strIdNo'] = pArray[12];
        data['strDateIssue'] = pArray[13];
        data['strPlaceIssue'] = pArray[14];
        data['strWard'] = pArray[15];
        data['parentIsdn'] = pArray[16];
        data['agentLevel'] = pArray[17];
        data['strMSISDN'] = pArray[18];
        data['strICCID'] = pArray[19];
        var errorMessage = pArray[20];
        if (errorMessage==undefined || errorMessage.trim()==''){
            data['errorMessage'] = 'Chưa thực hiện';
        }else if (errorMessage.trim()=='0'){
            data['errorMessage'] = 'Thành công';
        }else {
            errorMessage = pArray.slice(20, pArray.length).join(",");
            errorMessage = errorMessage.trim().substring(1);
            if (errorMessage.startsWith(";")){
                errorMessage = errorMessage.substring(1);
            }
            data['errorMessage'] = errorMessage;

        }
        return data;
    };

    $scope.exportError = function(dataStr){
        var header = "Loại đại lý,Tên kinh doanh,Mã số thuế,Tên chủ sở hữu,Câu hỏi bí mật," +
            "Ngày sinh,Số liên lạc,ĐC kinh doanh,Nhận báo cáo qua email,Email,Tỉnh,Huyện,CMTND," +
            "Ngày cấp,Nơi cấp,Phường/Xã,Số thuê bao cha,Cấp đại lý,Số thuê bao,Số ICCID,Trạng thái lỗi";
        header += "\n";
        $scope.writeFile(header + dataStr);
    };

    $scope.writeFile = function(data){
        var filename = "Ket_qua_Update_dai_ly_theo_lo.csv";
        var blob = new Blob(["\uFEFF" + data], {type: 'text/plain;charset=utf-8'});
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        } else{
            var e = document.createEvent('MouseEvents'),
                a = document.createElement('a');
            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        }
    };

});