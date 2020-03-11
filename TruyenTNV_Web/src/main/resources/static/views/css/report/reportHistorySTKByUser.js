app_vnm.factory('reportHistorySTKByUser', function ($http, $translate) {
    return {

        listRecord: function (msisdn, startDate, endDate, callback) {
            var url = eim_url + "/bs/report/getListRecord?msisdn=" + msisdn + "&startDate=" + startDate + "&endDate=" + endDate;
            $http.post(url).success(callback).error(function (callback) {
                closeOverLay();
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },

        getDDK: function (msisdn, startDate, endDate, callback) {
            var url = eim_url + "/bs/report/getDDK?msisdn=" + msisdn + "&startDate=" + startDate + "&endDate=" + endDate;
            $http.put(url).success(callback).error(function (callback) {
                closeOverLay();
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },

        getTotal: function (msisdn, startDate, endDate, callback) {
            var url = eim_url + "/bs/report/getTotal?msisdn=" + msisdn + "&startDate=" + startDate + "&endDate=" + endDate;
            $http.put(url).success(callback).error(function (callback) {
                closeOverLay();
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },

        checkMSISDN: function (shopId, msisdn, callback) {
            var url = eim_url + "/bs/report/checkMsisdn?shopId=" + shopId + "&msisdn=" + msisdn;
            $http.post(url).success(callback).error(function (callback) {
                closeOverLay();
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },

        getAgentName: function (msisdn, callback) {
            var url = eim_url + "/bs/report/getAgentName2?msisdn=" + msisdn;
            $http.put(url).success(callback).error(function (callback) {
                closeOverLay();
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },

        exportFile: function (data, callback) {
            var url = eim_url + "/bs/report/exportFileHistorySTKByUser?reportInput=" + data;
            $http.get(url, {
                responseType: 'arraybuffer'
            }).success(callback).error(function (data, status, headers, config) {
                App.unblockUI("#contentMain");
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        }
    }
});

app_vnm.controller('ctrl-reportHistorySTKByUser', function ($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
                                                            $filter, $http, NgTableParams, $localStorage, reportHistorySTKByUser) {

    $scope.model = {};
    var ddk = 0;
    var agentName = "";
    $scope.listRecord = [];
    $scope.validationOptions = {
        debounce: 1500,
        preValidateFormElements: true,
        rules: {
            toDate: {
                isDate: true,
                checkFromToDate: true
            },
            fromDate: {
                isDate: true
            },
            msisdn: {
                required: true,
                EmptyValue: true,
                maxlength: 11
            }
        },
        messages: {
            toDate: {
                isDate: "Ngày bắt đầu không đúng định dạng",
                checkFromToDate: "Ngày bắt đầu không được lớn hơn ngày kết thúc!"
            },
            fromDate: {
                isDate: "Ngày kết thúc không đúng định dạng"
            },
            msisdn: {
                required: "Bạn cần nhập Số điện thoại.",
                EmptyValue: "Bạn cần nhập Số điện thoại.",
                maxlength: "Số điện thoại không nhiều hơn 11 ký tự."
            }
        }
    }

    $scope.exportfile = function () {
        if ($scope.frm_reportHistorySTKByUser.validate()) {
            if ($scope.checkNumber()) {
                if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
                    if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
                        bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc 1!");
                        return;
                    }
                }

                var tmpMsisdn = "";

                if ($scope.model.msisdn.startsWith("0")) {
                    tmpMsisdn = $scope.model.msisdn.substring(1, $scope.model.msisdn.length);
                } else if ($scope.model.msisdn.startsWith("84") && $scope.model.msisdn.length > 9) {
                    tmpMsisdn = $scope.model.msisdn.substring(2, $scope.model.msisdn.length);
                } else if ($scope.model.msisdn.startsWith("+84")) {
                    tmpMsisdn = $scope.model.msisdn.substring(3, $scope.model.msisdn.length);
                } else {
                    tmpMsisdn = $scope.model.msisdn;
                }
                reportHistorySTKByUser.getAgentName(tmpMsisdn, function (result) {
                    agentName = result.messages;
                });
                reportHistorySTKByUser.checkMSISDN($localStorage.clientContext.shop.shopId, tmpMsisdn, function (result) {
                    if (result != null) {
                        if (result.messages != "1") {
                            bootbox.alert("Số thuê bao không thuộc tài khoản đăng nhập!");
                            closeOverLay();
                            return;
                        } else {
                            var startDate = $("#fromDate").val();
                            var endDate = $("#toDate").val();
                            reportHistorySTKByUser.listRecord(tmpMsisdn, startDate, endDate, function (result) {
                                if (result != null) {
                                    $scope.listRecord = result;
                                }
                                App.unblockUI("#agentManagement");
                                if ($scope.listRecord.length == 0) {
                                    reportHistorySTKByUser.getDDK(tmpMsisdn, startDate, endDate, function (result) {
                                        if (result != null) {
                                            ddk = result;
                                            var totalDebit = 0;
                                            var totalCredit = 0;
                                            var soDu = ddk + totalDebit - totalCredit;

                                            var ReportInput = {
                                                "p_msisdn": tmpMsisdn,
                                                "p_startDate": $("#fromDate").val(),
                                                "p_agentName": agentName,
                                                "p_endDate": $("#toDate").val(),
                                                "p_sodudauky": soDu.toString(),
                                                "p_sotiendanhan": totalCredit.toString(),
                                                "p_sotiendaban": totalDebit.toString(),
                                                "p_soduhieuluc": ddk.toString(),
                                                "fileTempName": 'templateReportHistoryOfSTK',
                                                "fileType": '.xlsx'
                                            };

                                            App.blockUI({
                                                target: "#contentMain",
                                                boxed: true,
                                                message: 'loading...'
                                            });

                                            reportHistorySTKByUser.exportFile(encodeURI(JSON.stringify(ReportInput)), function (result, status, header, config) {
                                                if (result.status == '0' && result.status != 'undefined') {
                                                    App.unblockUI("#contentMain");
                                                    bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
                                                } else {
                                                    App.unblockUI("#contentMain");
                                                    download(new Blob([result]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
                                                }
                                            });

                                        }
                                        App.unblockUI("#agentManagement");
                                    });
                                } else {
                                    if (tmpMsisdn == $scope.listRecord[0].senderMsisdn || "0" + tmpMsisdn == $scope.listRecord[0].senderMsisdn) {
                                        ddk = Number($scope.listRecord[0].sendNewBal);
                                    } else {
                                        ddk = Number($scope.listRecord[0].rcvrNewBal);
                                    }

                                    reportHistorySTKByUser.getTotal(tmpMsisdn, startDate, endDate, function (result) {
                                        if (result != null) {
                                            if (result.messages != null && result.messages != "") {
                                                var arrTotal = result.messages.split('###');
                                                var totalDebit = Number(arrTotal[0]);
                                                var totalCredit = Number(arrTotal[1]);
                                                var soDu = ddk + totalDebit - totalCredit;

                                                var ReportInput = {
                                                    "p_msisdn": tmpMsisdn,
                                                    "p_agentName": agentName,
                                                    "p_startDate": $("#fromDate").val(),
                                                    "p_endDate": $("#toDate").val(),
                                                    "p_sodudauky": soDu.toString(),
                                                    "p_sotiendanhan": totalCredit.toString(),
                                                    "p_sotiendaban": totalDebit.toString(),
                                                    "p_soduhieuluc": ddk.toString(),
                                                    "fileTempName": 'templateReportHistoryOfSTK',
                                                    "fileType": '.xlsx'
                                                };

                                                App.blockUI({
                                                    target: "#contentMain",
                                                    boxed: true,
                                                    message: 'loading...'
                                                });

                                                reportHistorySTKByUser.exportFile(encodeURI(JSON.stringify(ReportInput)), function (result, status, header, config) {
                                                    if (result.status == '0' && result.status != 'undefined') {
                                                        App.unblockUI("#contentMain");
                                                        bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
                                                    } else {
                                                        App.unblockUI("#contentMain");
                                                        download(new Blob([result]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
                                                    }
                                                });
                                            }
                                        }
                                    });


                                }

                            });
                        }
                    }
                });


            } else {
                bootbox.alert("Bạn phải nhập khoảng thời gian tạo báo cáo!");
            }
        }
    }

    $scope.checkNumber = function () {
        var tmp = true;
        if (!angular.isDefined($scope.model.fromDate) || !angular.isDefined($scope.model.toDate)) {
            tmp = false;
        }
        return tmp;
    }

    // BEGIN validate input
    $.validator.addMethod("isDate", function (value, element) {
        if (value == undefined || value == "")
            return true;
        if ($.trim(value) == "")
            return true;
        var valueDate = $.trim(value);
        return moment(valueDate, 'DD/MM/YYYY', true).isValid();
    }, "");

    $.validator.addMethod("checkFromToDate", function (value, element) {
        if (value === "")
            return true;
        if ($.trim(value) == "")
            return true;

        if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment(value, "DD/MM/YYYY")) {
            return false
        }
        return true;
    }, "");

    $.validator.addMethod("EmptyValue", function (value, element) {
        if (value == undefined || value == "")
            return false;
        if ($.trim(value) == "")
            return false;
        return true;
    }, "");
});

function StringUtilNVL(val) {
    if (val == undefined || val == null)
        return "";
    return $.trim(val);
}

function createTimeStamp() {
    var theMoment = moment();
    var millisTimeStamp = theMoment.valueOf();
    return millisTimeStamp;
}
