app_vnm.factory('chargeMoney', function ($http, $translate) {
    return {
        retailAirtime: function (param, callback) {
            var url = eim_url + "/bs/airtime/retailAirtime";
            $http.post(url, param).success(callback).error(function (callback) {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#chargeMoney");
            });
        },
        rechargeByBatch: function (param, callback) {
            var url = eim_url + "/bs/airtime/rechargeByBatch";
            $http.post(url, param).success(callback).error(function (callback) {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#chargeMoney");
            });
        },
    }
});
app_vnm.controller('chargeMoneyController', function ($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
                                                      NgTableParams, $localStorage, chargeMoney) {
    $scope.model = {};
    $scope.listIsdnImport = [];
    $scope.listIsdn = [];
    $scope.mblnRecharged = true;
    $scope.amountTotal = 0;


    $scope.defaultValue = function () {
        $scope.model.senderISDN = "";
        $scope.model.senderPIN = "";
        $scope.model.receiveISDN = "";
        $scope.model.transferAmount = 0;
        $scope.model.senderISDNBatch = "";
        $scope.model.senderPINBatch = "";
        $scope.model.transferAmountBatch = 0;
    };

    $scope.defaultValue();

    $scope.validateInputEx = function () {
        if ($scope.model.senderISDN.length != 10 && $scope.model.senderISDN.length != 11) {
            bootbox.alert($translate.instant('vnm.charge_money.mess.check.IncorrectFormat')
                .replace("[FIELD]", $translate.instant('vnm.charge_money.label.sender.isdn')));
            return false;
        }

        if ($scope.model.receiveISDN.length != 10 && $scope.model.receiveISDN.length != 11) {
            bootbox.alert($translate.instant('vnm.charge_money.mess.check.IncorrectFormat')
                .replace("[FIELD]", $translate.instant('vnm.charge_money.label.receive.isdn')));
            return false;
        }
        if ($scope.model.transferAmount==0|| $scope.model.transferAmount.replace(/\D/g, '') < 5000 || $scope.model.transferAmount.replace(/\D/g, '') % 1000 != 0 || $scope.model.transferAmount.replace(/\D/g, '') > 500000) {
            bootbox.alert($translate.instant('vnm.charge_money.mess.check.IncorrectAmount'));
            return false;
        }
        return true;
    };

    $scope.validateInputExBatch = function () {
        if ($scope.model.senderISDNBatch.length != 10 && $scope.model.senderISDNBatch.length != 11) {
            bootbox.alert($translate.instant('vnm.charge_money.mess.check.IncorrectFormatBatch')
                .replace("[FIELD]", $translate.instant('vnm.charge_money.label.sender.isdn')));
            return false;
        }

        // if ($scope.listIsdnImport.length != 10 && $scope.listIsdnImport.length != 11) {
        //     bootbox.alert($translate.instant('vnm.charge_money.mess.check.IncorrectFormatBatch')
        //         .replace("[FIELD]", $translate.instant('vnm.charge_money.label.receive.isdn')));
        //     return false;
        // }

        // if ($scope.model.transferAmountBatch < 5000 || $scope.model.transferAmountBatch % 1000 != 0 || $scope.model.transferAmountBatch > 500000) {
        //     bootbox.alert($translate.instant('vnm.charge_money.mess.check.IncorrectAmountBatch'));
        //     return false;
        // }
        return true;
    };

    $scope.onlyNumberAmount1 = function () {
        $scope.model.transferAmount = $scope.model.transferAmount.replace(/\D/g, '');
        $scope.model.transferAmount = $scope.model.transferAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    };
    $scope.onlyNumberAmount2 = function () {
        $scope.model.transferAmountBatch = $scope.model.transferAmountBatch.replace(/\D/g, '');
    };
    $scope.onlyNumberIsdn1 = function () {
        $scope.model.senderISDN = $scope.model.senderISDN.replace(/\D/g, '');
    };
    $scope.onlyNumberIsdn2 = function () {
        $scope.model.receiveISDN = $scope.model.receiveISDN.replace(/\D/g, '');
    };
    $scope.onlyNumberIsdn3 = function () {
        $scope.model.senderISDNBatch = $scope.model.senderISDNBatch.replace(/\D/g, '');
    };

    $scope.transferMoney = function () {
        App.blockUI({
            target : "#chargeMoney",
            boxed : true,
            message : 'Loading...'
        });
        if (!$scope.validateInputEx()) {
            App.unblockUI("#chargeMoney");
            return;
        }
        bootbox.confirm({
            message: $translate.instant('vnm.charge_money.mess.check.ConfirmTransfer')
                .replace("[ISDN]", $scope.model.receiveISDN)
                .replace("[AMOUNT]", $scope.model.transferAmount),
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
            callback: function (result) {
                if (result) {
                    var request = {
                        "IN.SENDER_PIN": $scope.model.senderPIN,
                        "IN.SENDER_ISDN": $scope.model.senderISDN,
                        "IN.RECEIVER_ISDN": $scope.model.receiveISDN,
                        "IN.TRANSFER_AMOUNT": $scope.model.transferAmount.replace(/\D/g, ''),
                        "IN.USER_ID": $localStorage.clientContext.shop.staffId,
                    };
                    chargeMoney.retailAirtime(request, function (result) {
                        if (result.status == "0" && result.messages) {
                            bootbox.alert("Xảy ra lỗi trong quá trình retailAirtime! Lỗi: " + result.messages);
                        } else {
                            if (result['OUT.ERROR_CODE'] != null && result['OUT.ERROR_CODE'] != '') {
                                // if (!result['OUT.ERROR_CODE'].startsWith("API-ERR")) {
                                var mess = $translate.instant('vnm.charge_money.err.' + result['OUT.ERROR_CODE']);
                                if (mess!='vnm.charge_money.err.' + result['OUT.ERROR_CODE']){
                                    bootbox.alert($translate.instant('vnm.charge_money.err.' + result['OUT.ERROR_CODE']));
                                } else {
                                    bootbox.alert(result['OUT.ERROR_CODE'] + ' - ' + result['OUT.ERROR']);
                                }
                            } else if (result['OUT.ERROR'] != null && result['OUT.ERROR'] != '') {
                                bootbox.alert(result['OUT.ERROR']);
                            } else {
                                bootbox.alert($translate.instant('vnm.charge_money.mess.check.SuccessMessage')
                                    .replace("[AMOUNT]", $scope.model.transferAmount)
                                    .replace("[ISDN]", $scope.model.receiveISDN)
                                    .replace("[REMAIN]", result['OUT.MESSAGE']));
                            }
                        }
                        App.unblockUI("#chargeMoney");
                    });
                }else{
                    App.unblockUI("#chargeMoney");
                }
            }
        });

    };

    $scope.downloadTemplate = function () {
        var attachFile = {};
        attachFile.fileName = "Template_Nap_tien_theo_lo.xlsx";
        attachFile.folder = "Template_Nap_tien_theo_lo.xlsx";
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
        url: eim_url + '/bs/airtime/getListISDNFromFileTemplate'
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

        item.headers = {
            Authorization: 'Bearer ' + $localStorage.clientContext.token
        };
        var form_data = new FormData();
        item.formData.push(form_data);
    };

    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        $scope.amountTotal = 0;
        $scope.listIsdnImport = $scope.listIsdnImport.concat(response);
        if ($scope.listIsdnImport.length>1000) {
            bootbox.alert("File xử lý không được vượt quá 1000 dòng");
            $scope.listIsdnImport = [];
        } else if ($scope.listIsdnImport.length<1) {
            bootbox.alert("File không có dữ liệu");
        } else {
            $scope.listIsdn = [];
            for (var i in $scope.listIsdnImport) {
                var item = {};
                var row = $scope.listIsdnImport[i].split(",");
                item['isdn'] = row[0];
                if (row.length>1){
                    item['amount'] = row[1];
                    $scope.amountTotal = eval($scope.amountTotal + "+" + row[1]);
                }
                item['transStatusDetail'] = 'Chưa thực hiện';
                item['errorMessage'] = '';
                $scope.listIsdn.push(item);
            }
            $scope.tableIsdn = new NgTableParams({}, {
                dataset : $scope.listIsdn
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
        $scope.amountTotal = 0;
        $scope.listIsdnImport = [];
        uploader.clearQueue();
    };

    $scope.transferMoneyBatch = function () {
        App.blockUI({
            target : "#chargeMoney",
            boxed : true,
            message : 'Loading...'
        });
        if (!$scope.validateInputExBatch()) {
            App.unblockUI("#chargeMoney");
            return;
        }
        bootbox.confirm({
            message: $translate.instant('vnm.charge_money.mess.check.ConfirmTransferBatch')
                //.replace("[AMOUNT]", $scope.amountTotal)
                .replace("[NUMOF]", $scope.listIsdnImport.length)
                .replace("[TOTALAMOUNT]", $scope.amountTotal),
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
            callback: function (result) {
                if (result) {
                    var request = {
                        "IN.SENDER_PIN": $scope.model.senderPINBatch,
                        "IN.SENDER_ISDN": $scope.model.senderISDNBatch,
                        // "IN.TRANSFER_AMOUNT": $scope.model.transferAmountBatch,
                        "IN.USER_ID": $localStorage.clientContext.shop.staffId,
                        "IN.LIST_ISDN": $scope.listIsdnImport,
                    };
                    chargeMoney.rechargeByBatch(request, function (result) {
                        if (result.status == "0" && result.messages) {
                            bootbox.alert("Xảy ra lỗi trong quá trình rechargeByBatch! Lỗi: " + result.messages);
                        } else {
                            if (result['OUT.ERROR_CODE'] != null && result['OUT.ERROR_CODE'] != '') {
                                bootbox.alert($translate.instant('vnm.charge_money.err.' + result['OUT.ERROR_CODE']));
                            } else if (result['OUT.ERROR'] != null && result['OUT.ERROR'] != '') {
                                bootbox.alert(result['OUT.ERROR']);
                            } else {

                                $scope.listIsdn = result["OUT.LIST_ISDN"];
                                var vlngNumberSucceed = result["OUT.NUMBER_SUCCEED"];
                                var vdblRemainBalance = result["OUT.REMAIN_BALANCE"];
                                $scope.amountTotal = 0;
                                for (var i in $scope.listIsdn) {
                                    var vvctRow = $scope.listIsdn[i];
                                    var vstrErrorCode = vvctRow["errorCode"];
                                    var vstrErrorMessage = vvctRow["errorMessage"];
                                    if (vstrErrorCode != null && vstrErrorCode != '' && vstrErrorCode != undefined) {
                                        var messageError = $translate.instant('vnm.charge_money.err.' + vstrErrorCode);
                                        if (messageError == ('vnm.charge_money.err.' + vstrErrorCode)
                                            && vstrErrorMessage != null && vstrErrorMessage != '' && vstrErrorMessage != undefined) {
                                            vvctRow["errorMessage"] = vstrErrorCode + " - " + vstrErrorMessage;
                                        }else{
                                            vvctRow["errorMessage"] = messageError;
                                        }
                                    }
                                    if (vvctRow["transStatus"]=='0'){
                                        vvctRow["transStatusDetail"] = "Thành công";
                                        $scope.amountTotal = eval($scope.amountTotal + "+" + vvctRow["amount"]);
                                    }else if (vvctRow["transStatus"]=='1'){
                                        vvctRow["transStatusDetail"] = "Thất bại";
                                    }else{
                                        vvctRow["transStatusDetail"] = "Chưa thực hiện";
                                    }
                                }
                                $scope.tableIsdn = new NgTableParams({}, {
                                    dataset : $scope.listIsdn
                                });
                                if (vlngNumberSucceed <= 0) {
                                    bootbox.alert($translate.instant('vnm.charge_money.mess.check.ErrorMessageBatch'));
                                } else {
                                    mblnRecharged = true;
                                    bootbox.alert($translate.instant('vnm.charge_money.mess.check.SuccessMessageBatch')
                                        .replace("[AMOUNT]", $scope.amountTotal)
                                        .replace("[NUMOF]", vlngNumberSucceed)
                                        .replace("[REMAIN]", vdblRemainBalance));
                                }
                            }
                        }
                        App.unblockUI("#chargeMoney");
                    });
                }else{
                    App.unblockUI("#chargeMoney");
                }
            }
        });
    };

    $scope.ExportDataTable = function(){
        var dataStr = "";
        for (var i in $scope.listIsdn){
            var item = $scope.listIsdn[i];
            dataStr += $scope.objectToStrCsv(item) + "\n";
            // dataStr += item + "\n";
        }
        $scope.exportError(dataStr);
    };

    $scope.objectToStrCsv = function(obj){
        var str = "";
        str += ((obj['isdn']!='')?"'":"") + obj['isdn'] + ",";
        str += ((obj['amount']!='')?"'":"") + obj['amount'] + ",";
        str += obj['transStatusDetail'] + ",";
        str += obj['errorMessage'];
        return str;
    };

    $scope.exportError = function(dataStr){
        var header = "Số thuê bao,Số tiền,Trạng thái giao dịch,Chi tiết lỗi";
        header += "\n";
        $scope.writeFile(header + dataStr);
    };

    $scope.writeFile = function(data){
        var filename = "Ket_qua_Nap_tien_theo_lo.csv";
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
