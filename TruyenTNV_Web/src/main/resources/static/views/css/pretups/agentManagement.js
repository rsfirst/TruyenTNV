app_vnm.factory('ctk_agentManagement', function($http, $translate) {
	return {
        getAgentByMsisdn : function(msisdn, isParent, callback) {
            var url = eim_url + "/bs/pretups/getAgentByIsdn?msisdn="+ msisdn + "&isParent=" + isParent;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        getListProvince : function(callback) {
            var url = eim_url + "/bs/pretups/getAgentProvince";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        getListCentre : function(callback) {
            var url = eim_url + "/bs/pretups/getAgentCentre";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        getListType : function(callback) {
            var url = eim_url + "/bs/pretups/getAgentType";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        getListLevel : function(callback) {
            var url = eim_url + "/bs/pretups/getAgentLevel";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        getListDistrict : function(provinceId, callback) {
            var url = eim_url + "/bs/pretups/getAgentDistrict?provinceId="+ provinceId;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        getListCommune : function(districtId, callback) {
            var url = eim_url + "/bs/pretups/getAgentCommune?districtId="+ districtId;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        addNewAgent : function(data,  callback) {
            var url = eim_url + "/bs/pretups/actionAddNewAgent";
            $http.post(url, data).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        updateAgent : function(changeSapCode, changeStatus, data,  callback) {
            var url = eim_url + "/bs/pretups/actionUpdateAgent?changeSapCode=" + changeSapCode + "&changeStatus=" + changeStatus;
            $http.post(url, data).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
        deleteAgent : function(data,  callback) {
            var url = eim_url + "/bs/pretups/actionDeleteAgent";
            $http.post(url, data).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#agentManagement");
            });
        },
	}
});

app_vnm.controller('ctrl-agentManagement', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,ctk_agentManagement) {
	
	$scope.model = {};
    $scope.tableChildAgent = new NgTableParams({}, {
        dataset : []
    });
    $scope.model.agentSelected = {};
    $scope.model.agentSelectedBackup = {};
    $scope.model.showAdd = true;
    $scope.model.isEdit = false;

    $scope.regionList = [ {
        'code' : '1',
        'name' : 'Miền Bắc',
        'nameEn' : 'Northern'
    }, {
        'code' : '2',
        'name' : 'Miền Trung',
        'nameEn' : 'Central'
    }, {
        'code' : '3',
        'name' : 'Miền Nam',
        'nameEn' : 'Southward'
    } ];

    $scope.statusList = [  {
        'code' : '1',
        'name' : 'Đang hoạt động',
    }, {
        'code' : '2',
        'name' : 'Đã khóa',
    } ];

    $scope.listProvince = [];
    $scope.listCommune = [];
    $scope.listDistrict = [];
    $scope.listCentre = [];
    $scope.listType = [];
    $scope.listLevel = [];

    var checkLoad = 0;

    //getListProvince
    $scope.getListProvince = function () {
        ctk_agentManagement.getListProvince(function(result) {
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
            } else {
                $scope.listProvince = result;
            }
            checkLoad--;
        });
    }

    //getListCentre
    $scope.getListCentre = function () {
        ctk_agentManagement.getListCentre(function(result) {
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
            } else {
                $scope.listCentre = result;
            }
            checkLoad--;
        });
    }

    //getListType
    $scope.getListType = function () {
        ctk_agentManagement.getListType(function(result) {
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
            } else {
                $scope.listType = result;
            }
            checkLoad--;
        });
    }

    //getListLevel
    $scope.getListLevel = function () {
        ctk_agentManagement.getListLevel(function(result) {
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
            } else {
                $scope.listLevel = result;
            }
            checkLoad--;
        });
    }

    //getListDistrict
    $scope.getListDistrict = function (provinceId) {
        ctk_agentManagement.getListDistrict(provinceId, function(result) {
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
            } else {
                $scope.listDistrict = result;
            }
            checkLoad--;
        });
    }

    //getListCommune
    $scope.getListCommune = function (districtId) {
        ctk_agentManagement.getListCommune(districtId, function(result) {
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
            } else {
                $scope.listCommune = result;
            }
            checkLoad--;
        });
    }

    $scope.$watch(function () {
        return checkLoad;
    }, function (check) {
        if (check == 0) {
            closeOverLay();
        }
    });

    var clearData = function () {

        $scope.listCommune = [];
        $scope.listDistrict = [];

        $scope.model.selectedRegion = {};
        $scope.model.selectedStatus = {};
        $scope.model.selectedCentre = {};
        $scope.model.selectedLevel = {};
        $scope.model.selectedStatus = {};
        $scope.model.selectedProvince = {};

        $scope.model.selectedDistrict = {};
        $scope.model.selectedCommune = {};

        $scope.model.checkReceiveEmail = false;
    }

    var disableDefaultAgent = function () {
        $scope.model.disableMsisdn = false;
        $scope.model.disableIccid = true;
        $scope.model.disableTradeName = true;
        $scope.model.disableOwnerName = true;
        $scope.model.disableSapCode = true;
        $scope.model.disableCentre = true;
        $scope.model.disableCreateDate = true;
        $scope.model.disableLastModified = true;
        $scope.model.disableParentIsdn = true;
        $scope.model.disableParentName = true;
        $scope.model.disableAgentLevel = true;
        $scope.model.disableAgentStatus = true;
        $scope.model.disableBirthDate = true;
        $scope.model.disableReceiveEmailReport = true;
        $scope.model.disableEmail = true;
        $scope.model.disableProvince = true;
        $scope.model.disableRegion = true;
        $scope.model.disableDistrict = true;
        $scope.model.disableCommune = true;
        $scope.model.disableOutletAddress = true;
        $scope.model.disableTaxCode = true;
        $scope.model.disableContactNo = true;
        $scope.model.disableSecureQuestion = true;
        $scope.model.disableIdNo = true;
        $scope.model.disableAgentType = true;
        $scope.model.disableDateIssue = true;
        $scope.model.disablePlaceIssue = true;
        $scope.model.disableReason = true;
        $scope.model.disableBtnSearchParent = true;
    }


    var initialize = function () {
        overLoading("loading...");
        var date = new Date();
        $scope.model.agentSelected = {};
        $scope.model.agentSelectedBackup = {};

        clearData();
        disableDefaultAgent();

        checkLoad = 4;
        $scope.getListLevel();
        $scope.getListCentre();
        $scope.getListProvince();
        $scope.getListType();
    }

    initialize();

    $scope.getIndexCentre = function (arr, item) {
        return arr.findIndex(x => x.centreId.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexLevel = function (arr, item) {
        return arr.findIndex(x => x.value.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexStatus = function (arr, item) {
        return arr.findIndex(x => x.code.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexProvince = function (arr, item) {
        return arr.findIndex(x => x.provinceId.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexRegion = function (arr, item) {
        return arr.findIndex(x => x.code.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexType = function (arr, item) {
        return arr.findIndex(x => x.value.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexDistrictAgent = function (arr, item) {
        return arr.findIndex(x => x.districtId.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexCommuneAgent = function (arr, item) {
        return arr.findIndex(x => x.communeId.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.fillDataForm = function (item) {
        if (item.receiveReportByMail == "1"){
            $scope.model.checkReceiveEmail = true;
        } else {
            $scope.model.checkReceiveEmail = false;
        }
        //get centre
        if (item.centreId != null && item.centreId != "") {
            $scope.model.selectedCentre = $scope.listCentre[$scope.getIndexCentre($scope.listCentre,item.centreId)];
        } else {
            $scope.model.selectedCentre = {};
        }
        //get level
        if (item.usercatcode != null && item.usercatcode != "") {
            $scope.model.selectedLevel = $scope.listLevel[$scope.getIndexLevel($scope.listLevel,item.usercatcode)];
        } else {
            $scope.model.selectedLevel = {};
        }

        //get status
        if (item.status != null && item.status != "") {
            $scope.model.selectedStatus = $scope.statusList[$scope.getIndexStatus($scope.statusList,item.status)];
        } else {
            $scope.model.selectedStatus = {};
        }

        //get type
        if (item.type != null && item.type != "") {
            $scope.model.selectedType = $scope.listType[$scope.getIndexType($scope.listType,item.type)];
        } else {
            $scope.model.selectedType = {};
        }

        //get province
        if (item.province != null && item.province != "") {
            $scope.model.selectedProvince = $scope.listProvince[$scope.getIndexProvince($scope.listProvince,item.province)];
        } else {
            $scope.model.selectedProvince = {};
        }

        //get region
        if ($scope.model.selectedProvince.regionId != null && $scope.model.selectedProvince.regionId != "") {
            $scope.model.selectedRegion = $scope.regionList[$scope.getIndexRegion($scope.regionList,$scope.model.selectedProvince.regionId)];
        } else {
            $scope.model.selectedRegion = {};
        }

        //get district
        if ($scope.model.selectedProvince.provinceId != null && $scope.model.selectedProvince.provinceId != "") {
            overLoading("loading...");
            checkLoad++;
            $scope.getListDistrict($scope.model.selectedProvince.provinceId);

            //set district
            if (item.district != null && item.district != "") {
                $scope.model.selectedDistrict = {
                    centreId: null,
                    centreName: null,
                    communeId: null,
                    communeName: null,
                    districtId: item.district,
                    districtName: item.district,
                    provinceId: null,
                    provinceName: null,
                    regionId: null,
                    regionName: null,
                };
            } else {
                $scope.model.selectedDistrict = {};
            }
        } else {
            $scope.model.selectedDistrict = {};
        }

        //get commune
        if ($scope.model.selectedDistrict.districtId != null && $scope.model.selectedDistrict.districtId != "") {
            overLoading("loading...");
            checkLoad++;
            $scope.getListCommune($scope.model.selectedDistrict.districtId);
            //set commune
            if (item.commune != null && item.commune != "") {
                $scope.model.selectedCommune = {
                    centreId: null,
                    centreName: null,
                    communeId: item.commune,
                    communeName: item.commune,
                    districtId: null,
                    districtName: null,
                    provinceId: null,
                    provinceName: null,
                    regionId: null,
                    regionName: null,
                };
            } else {
                $scope.model.selectedCommune = {};
            }
        } else {
            $scope.model.selectedCommune = {};
        }
    }

    $scope.changeProvince = function () {
        $scope.model.selectedRegion = $scope.regionList[$scope.getIndexRegion($scope.regionList,$scope.model.selectedProvince.regionId)];
        $scope.model.selectedCentre = $scope.listCentre[$scope.getIndexCentre($scope.listCentre,$scope.model.selectedProvince.centreId)];

        overLoading("loading...");
        checkLoad++;
        $scope.getListDistrict($scope.model.selectedProvince.provinceId);
        $scope.model.selectedDistrict = {};

        $scope.listCommune = [];
        $scope.model.selectedCommune = {};
    }

    $scope.changeDistrict = function () {
        overLoading("loading...");
        checkLoad++;
        $scope.getListCommune($scope.model.selectedDistrict.districtId);
        $scope.model.selectedCommune = {};
    }

    $scope.searchAgent = function () {
        var msisdnSearch = StringUtilNVLWithDefault($scope.model.agentSelected.msisdn,"");
        if (msisdnSearch == ""){
            bootbox.alert("Chưa nhập số thuê bao để tìm kiếm!");
            return;
        }
        App.blockUI({
            target : "#agentManagement",
            boxed : true,
            message : 'Loading...'
        });

        var isParent = false;
        ctk_agentManagement.getAgentByMsisdn(msisdnSearch, isParent, function(result) {
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
            } else {
                if (result.agentId != null && result.agentId != "") {
                    $scope.model.agentSelected = result;
                    $scope.tableChildAgent = new NgTableParams({}, {
                        dataset : $scope.model.agentSelected.listChildAgent
                    });

                    $scope.fillDataForm($scope.model.agentSelected);
                } else {
                    bootbox.alert("Không tìm thấy dữ liệu!");
                }
            }
            App.unblockUI("#agentManagement");
        });
    }

    var disableForAdd = function () {
        $scope.model.disableMsisdn = false;
        $scope.model.disableIccid = false;
        $scope.model.disableTradeName = false;
        $scope.model.disableOwnerName = false;
        $scope.model.disableSapCode = false;
        $scope.model.disableCentre = true;
        $scope.model.disableCreateDate = false;
        $scope.model.disableLastModified = false;
        $scope.model.disableParentIsdn = false;
        $scope.model.disableParentName = true;
        $scope.model.disableAgentLevel = false;
        $scope.model.disableAgentStatus = true;
        $scope.model.disableBirthDate = false;
        $scope.model.disableReceiveEmailReport = false;
        $scope.model.disableEmail = false;
        $scope.model.disableProvince = false;
        $scope.model.disableRegion = true;
        $scope.model.disableDistrict = false;
        $scope.model.disableCommune = false;
        $scope.model.disableOutletAddress = false;
        $scope.model.disableTaxCode = false;
        $scope.model.disableContactNo = false;
        $scope.model.disableSecureQuestion = false;
        $scope.model.disableIdNo = false;
        $scope.model.disableAgentType = false;
        $scope.model.disableDateIssue = false;
        $scope.model.disablePlaceIssue = false;
        $scope.model.disableReason = false;

        $scope.model.disableBtnSearchParent = false;
    }

    var disableForEdit = function () {
        if ($scope.model.agentSelected.status == "1"){
            $scope.model.disableMsisdn = true;
            $scope.model.disableIccid = true;
            $scope.model.disableTradeName = false;
            $scope.model.disableOwnerName = false;
            $scope.model.disableSapCode = false;
            $scope.model.disableCentre = true;
            $scope.model.disableCreateDate = false;
            $scope.model.disableLastModified = true;
            $scope.model.disableParentIsdn = false;
            $scope.model.disableParentName = true;
            $scope.model.disableAgentLevel = false;
            $scope.model.disableAgentStatus = false;
            $scope.model.disableBirthDate = false;
            $scope.model.disableReceiveEmailReport = false;
            $scope.model.disableEmail = false;
            $scope.model.disableProvince = false;
            $scope.model.disableRegion = true;
            $scope.model.disableDistrict = false;
            $scope.model.disableCommune = false;
            $scope.model.disableOutletAddress = false;
            $scope.model.disableTaxCode = false;
            $scope.model.disableContactNo = false;
            $scope.model.disableSecureQuestion = false;
            $scope.model.disableIdNo = false;
            $scope.model.disableAgentType = false;
            $scope.model.disableDateIssue = false;
            $scope.model.disablePlaceIssue = false;
            $scope.model.disableReason = false;
            $scope.model.disableBtnSearchParent = false;
        } else {
            $scope.model.disableMsisdn = true;
            $scope.model.disableIccid = true;
            $scope.model.disableTradeName = true;
            $scope.model.disableOwnerName = true;
            $scope.model.disableSapCode = true;
            $scope.model.disableCentre = true;
            $scope.model.disableCreateDate = true;
            $scope.model.disableLastModified = true;
            $scope.model.disableParentIsdn = true;
            $scope.model.disableParentName = true;
            $scope.model.disableAgentLevel = false;
            $scope.model.disableAgentStatus = false;
            $scope.model.disableBirthDate = true;
            $scope.model.disableReceiveEmailReport = true;
            $scope.model.disableEmail = true;
            $scope.model.disableProvince = false;
            $scope.model.disableRegion = true;
            $scope.model.disableDistrict = false;
            $scope.model.disableCommune = false;
            $scope.model.disableOutletAddress = false;
            $scope.model.disableTaxCode = true;
            $scope.model.disableContactNo = true;
            $scope.model.disableSecureQuestion = true;
            $scope.model.disableIdNo = false;
            $scope.model.disableAgentType = true;
            $scope.model.disableDateIssue = false;
            $scope.model.disablePlaceIssue = false;
            $scope.model.disableReason = false;
            $scope.model.disableBtnSearchParent = true;
        }
    }

    $scope.addNewAgent = function () {
        $scope.model.showAdd = false;
        disableForAdd();
        $scope.model.agentSelectedBackup = angular.copy($scope.model.agentSelected);
        $scope.model.agentSelected = {};

        var date = new Date();
        $scope.model.agentSelected.createDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.model.agentSelected.lastModified = $filter('date')(new Date(), 'dd/MM/yyyy');

        $scope.model.selectedProvince = {};
        $scope.model.selectedDistrict = {};
        $scope.model.selectedCommune = {};
        $scope.model.selectedRegion = {};
        $scope.model.selectedCentre = {};

        $scope.model.selectedLevel = $scope.listLevel[0];
        $scope.model.selectedStatus = $scope.statusList[0];
        $scope.model.selectedType = $scope.listType[0];

        $scope.tableChildAgent = new NgTableParams({}, {
            dataset : []
        });
    }

    $scope.editAgent = function () {
        if ($scope.model.agentSelected.agentId == null || $scope.model.agentSelected.agentId == ""){
            bootbox.alert("Chưa chọn đại lý để sửa, vui lòng thử lại!");
            return;
        }
        $scope.model.showAdd = false;
        $scope.model.isEdit = true;
        disableForEdit();
        $scope.model.agentSelectedBackup = angular.copy($scope.model.agentSelected);
    }

    var validForAdd = function (){
        if (StringUtilNVLWithDefault($scope.model.agentSelected.msisdn, "") == "") {
            bootbox.alert("Trường [Số thuê bao] bắt buộc nhập liệu!");
            return false;
        }
        if (StringUtilNVLWithDefault($scope.model.agentSelected.iccid, "") == "") {
            bootbox.alert("Trường [Số ICCID] bắt buộc nhập liệu!");
            return false;
        }
        if (StringUtilNVLWithDefault($scope.model.agentSelected.tradeName, "") == "") {
            bootbox.alert("Trường [Tên thương mại] bắt buộc nhập liệu!");
            return false;
        }
        if (StringUtilNVLWithDefault($scope.model.agentSelected.ownerName, "") == "") {
            bootbox.alert("Trường [Tên chủ sở hữu] bắt buộc nhập liệu!");
            return false;
        }
        if (StringUtilNVLWithDefault($scope.model.agentSelected.sapCode, "") == "") {
            bootbox.alert("Trường [Mã đại lý] bắt buộc nhập liệu!");
            return false;
        }
        if (StringUtilNVLWithDefault($scope.model.selectedCentre.centreId, "") == "") {
            bootbox.alert("Trường [Trung tâm] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.centreId = StringUtilNVLWithDefault($scope.model.selectedCentre.centreId, "");

        if (StringUtilNVLWithDefault($("#createDate").val(), "") == "") {
            bootbox.alert("Trường [Ngày tạo] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.createDate = StringUtilNVLWithDefault($("#createDate").val(), "");

        if (StringUtilNVLWithDefault($("#lastModified").val(), "") == "") {
            bootbox.alert("Trường [Ngày thay đổi] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.lastModified = StringUtilNVLWithDefault($("#lastModified").val(), "");

        if (StringUtilNVLWithDefault($scope.model.agentSelected.parentAgent.msisdn, "") == "") {
            bootbox.alert("Trường [Số thuê bao đại lý cấp trên] bắt buộc nhập liệu!");
            return false;
        }
        if (StringUtilNVLWithDefault($scope.model.agentSelected.parentAgent.ownerName, "") == "" || StringUtilNVLWithDefault($scope.model.agentSelected.parentAgent.agentId, "") == "") {
            bootbox.alert("Trường [Tên đại lý cấp trên] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.parentId = StringUtilNVLWithDefault($scope.model.agentSelected.parentAgent.agentId, "");

        if (StringUtilNVLWithDefault($scope.model.selectedLevel.value, "") == "") {
            bootbox.alert("Trường [Cấp đại lý] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.usercatcode = StringUtilNVLWithDefault($scope.model.selectedLevel.value, "");

        // if ($scope.isEdit){
        //     if ($scope.model.agentSelected.usercatcode != $scope.model.agentSelectedBackup.usercatcode){
        //         bootbox.alert("Bạn không thể thay đổi cấp đại lý khi chưa thay đổi đại lý cấp trên!");
        //     }
        // }

        if ($scope.model.checkReceiveEmail && StringUtilNVLWithDefault($scope.model.agentSelected.email, "") == ""){
            bootbox.alert("Đã chọn nhận báo cáo qua email bắt buộc phải nhập trường [Email]");
            return false;
        }

        if (StringUtilNVLWithDefault($scope.model.selectedStatus.code, "") == "") {
            bootbox.alert("Trường [Trạng thái] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.status = StringUtilNVLWithDefault($scope.model.selectedStatus.code, "");
        $scope.model.agentSelected.birthDate = StringUtilNVLWithDefault($("#birthDate").val(), "");

        if (StringUtilNVLWithDefault($scope.model.selectedProvince.provinceName, "") == "") {
            bootbox.alert("Trường [Tỉnh] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.province = StringUtilNVLWithDefault($scope.model.selectedProvince.provinceName, "");

        if (StringUtilNVLWithDefault($scope.model.selectedDistrict.districtName, "") == "") {
            bootbox.alert("Trường [Huyện] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.district = StringUtilNVLWithDefault($scope.model.selectedDistrict.districtName, "");

        if (StringUtilNVLWithDefault($scope.model.selectedCommune.communeName, "") == "") {
            bootbox.alert("Trường [Phường/Xã] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.commune = StringUtilNVLWithDefault($scope.model.selectedCommune.communeName, "");

        if (StringUtilNVLWithDefault($scope.model.agentSelected.idNo, "") == "") {
            bootbox.alert("Trường [CMT] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.idNo = StringUtilNVLWithDefault($scope.model.agentSelected.idNo, "");
        if ($scope.model.agentSelected.idNo.length < 8 ) {
            bootbox.alert("Độ dài CMT phải lớn hơn hoặc bằng 8 ký tự");
            return false;
        }
        if (StringUtilNVLWithDefault($scope.model.selectedType.value, "") == "") {
            bootbox.alert("Trường [Loại đại lý] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.type = StringUtilNVLWithDefault($scope.model.selectedType.value, "");

        if (StringUtilNVLWithDefault($("#dateIssue").val(), "") == "") {
            bootbox.alert("Trường [Ngày cấp] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.dateIssue = StringUtilNVLWithDefault($("#dateIssue").val(), "");

        if (StringUtilNVLWithDefault($scope.model.agentSelected.placeIssue, "") == "") {
            bootbox.alert("Trường [Nơi cấp] bắt buộc nhập liệu!");
            return false;
        }
        $scope.model.agentSelected.placeIssue = StringUtilNVLWithDefault($scope.model.agentSelected.placeIssue, "");
        if ($scope.model.agentSelected.placeIssue.length < 5) {
            bootbox.alert("Độ dài [Nơi cấp] ít nhất là 5 ký tự.");
            return false;
        }

        if ($scope.model.checkReceiveEmail){
            $scope.model.agentSelected.receiveReportByMail = "1";
        } else {
            $scope.model.agentSelected.receiveReportByMail = "0";
            $scope.model.agentSelected.email = "";
        }

        $scope.model.agentSelected.regionId = $scope.model.selectedProvince.regionId;

        return true;
    }

    var finishAdd = function (){
        $scope.model.showAdd = true;
        $scope.model.isEdit = false;
        disableDefaultAgent();

        $scope.tableChildAgent = new NgTableParams({}, {
            dataset : $scope.model.agentSelected.listChildAgent
        });
    }

    var finishEdit = function (){
        $scope.model.showAdd = true;
        $scope.model.isEdit = false;
        disableDefaultAgent();
    }

    $scope.commitAccept = function () {
        //
        if ($scope.model.isEdit){
            //edit
            if (validForAdd()){
                var changeSapCode = false;
                var changeStatus = false;

                if ($scope.model.agentSelected.sapCode != $scope.model.agentSelectedBackup.sapCode){
                    changeSapCode = true;
                }

                if ($scope.model.agentSelected.status != $scope.model.agentSelectedBackup.status){
                    changeStatus = true;
                }

                App.blockUI({
                    target : "#agentManagement",
                    boxed : true,
                    message : 'Loading...'
                });
                var lstAgentUpdate = [];
                lstAgentUpdate.push($scope.model.agentSelectedBackup);
                lstAgentUpdate.push($scope.model.agentSelected);

                ctk_agentManagement.updateAgent(changeSapCode, changeStatus, lstAgentUpdate, function(result) {
                    if (result.status == "0" && result.messages){
                        bootbox.alert("Xảy ra lỗi trong quá trình cập nhật đại lý!\nLỗi: " + result.messages);
                    } else {
                        if (result.agentId != null && result.agentId != "") {
                            bootbox.alert("Cập nhật đại lý thành công!");
                            $scope.model.agentSelected = result;
                            $scope.fillDataForm($scope.model.agentSelected);
                            finishEdit();
                        }
                    }
                    App.unblockUI("#agentManagement");
                });
            } else {
                return;
            }
        } else {
            //add
            if (validForAdd()){
                App.blockUI({
                    target : "#agentManagement",
                    boxed : true,
                    message : 'Loading...'
                });
                ctk_agentManagement.addNewAgent($scope.model.agentSelected, function(result) {
                    if (result.status == "0" && result.messages){
                        bootbox.alert("Xảy ra lỗi trong quá trình tạo đại lý!\nLỗi: " + result.messages);
                    } else {
                        if (result.agentId != null && result.agentId != "") {
                            bootbox.alert("Tạo đại lý thành công!");
                            $scope.model.agentSelected = result;
                            $scope.fillDataForm($scope.model.agentSelected);
                            finishAdd();
                        }
                    }
                    App.unblockUI("#agentManagement");
                });
            } else {
                return;
            }
        }
    }

    $scope.cancelCommit = function () {
        bootbox.confirm({
            message: "Chưa lưu lại thông tin. Bạn có muốn thoát?",
            buttons: {
                confirm: {
                    label: 'Đồng ý',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Từ chối',
                    className: 'btn-danger'
                }
            },
            callback: function (result)
            {
                if(result)
                {
                    $scope.model.showAdd = true;
                    $scope.model.isEdit = false;
                    $scope.model.agentSelected = angular.copy($scope.model.agentSelectedBackup);
                    $scope.model.agentSelectedBackup = {};
                    $scope.fillDataForm($scope.model.agentSelected);
                    disableDefaultAgent();
                }
            }
        });
    }

    $scope.deleteAgent = function () {
        if ($scope.model.agentSelected.agentId == null || $scope.model.agentSelected.agentId == ""){
            bootbox.alert("Chưa chọn đại lý để xóa, vui lòng thử lại!");
            return;
        }
        bootbox.confirm({
            message: "Bạn có thực sự muốn xóa đại lý này?",
            buttons: {
                confirm: {
                    label: 'Đồng ý',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Từ chối',
                    className: 'btn-danger'
                }
            },
            callback: function (result)
            {
                if(result)
                {
                    App.blockUI({
                        target : "#agentManagement",
                        boxed : true,
                        message : 'Loading...'
                    });
                    ctk_agentManagement.deleteAgent($scope.model.agentSelected, function(result) {
                        if (result.status == "0" && result.messages){
                            bootbox.alert("Xảy ra lỗi trong quá trình xóa đại lý!\nLỗi: " + result.messages);
                        } else {
                            bootbox.alert("Xóa đại lý thành công!");
                            $scope.model.agentSelected = {};
                        }
                        App.unblockUI("#agentManagement");
                    });
                }
            }
        });
    }
    
    $scope.searchParentByMsisdn = function () {
        var msisdnSearchParent = StringUtilNVLWithDefault($scope.model.agentSelected.parentAgent.msisdn,"");
        if (msisdnSearchParent == ""){
            bootbox.alert("Chưa nhập số thuê bao đại lý cấp trên để tìm kiếm!");
            return;
        }
        App.blockUI({
            target : "#agentManagement",
            boxed : true,
            message : 'Loading...'
        });
        var isParent = true;
        ctk_agentManagement.getAgentByMsisdn(msisdnSearchParent, isParent, function(result) {
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm số thuê bao đại lý cấp trên! Lỗi: " + result.messages);
            } else {
                if (result.agentId != null && result.agentId != "") {
                    $scope.model.agentSelected.parentAgent = result;
                } else {
                    bootbox.alert("Không tìm thấy dữ liệu đại lý cấp trên!");
                }
            }
            App.unblockUI("#agentManagement");
        });
    }
});

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}
function StringUtilNVLWithDefault(val, defaultValue) {
    if (val == '' || val == undefined || val == null)
        return defaultValue;
    return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}