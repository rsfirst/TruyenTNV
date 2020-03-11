app_vnm.factory('cancelReprintInvoice', function($http, $translate) {
	return {
        getReprintBillInvoiceByStatus : function(fromDate, toDate, status , accountNo, isdn, callback) {
            var url = eim_url + "/bs/invoice/getReprintedBillCInvoice?fromDate=" + fromDate + "&toDate=" + toDate + "&status=" + status + "&accountNo=" + accountNo + "&isdn=" + isdn;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },
        destroyCinvoice : function(listInvoice, staffId, shopCode, callback) {
            var url = eim_url + "/bs/invoice/destroyExpriedBillCInvoiceS?staffId=" + staffId + "&shopCode=" + shopCode;
            $http.post(url, listInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
        createCinvoice : function(listInvoice, callback) {
            var url = eim_url + "/bs/invoice/createBillCInvoice";
            $http.post(url, listInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
        approveCinvoice : function(listInvoice, callback) {
            var url = eim_url + "/bs/invoice/approveBillCInvoice";
            $http.post(url, listInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
        rejectCinvoice : function(listInvoice, callback) {
            var url = eim_url + "/bs/invoice/rejectBillCInvoice";
            $http.post(url, listInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
	}
});

app_vnm.controller('ctrl-cancelReprintInvoice', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,cancelReprintInvoice) {

    $scope.model = {};
    $scope.model.iCinvoice = false;
    $scope.tableInvoice = new NgTableParams({}, {
        dataset : []
    });
    var listInvoice = [];

    $scope.listStatus = [ {
        'code' : '2',
        'name' : 'Đã in HĐ'
    }, {
        'code' : '4',
        'name' : 'Đã hủy'
    }, {
        'code' : '5',
        'name' : 'Lập'
    }, {
        'code' : '6',
        'name' : 'Duyệt'
    }, {
        'code' : '8',
        'name' : 'Đã in lại'
    } ];

    $scope.model.disableDestroy = true;
    $scope.model.disableCreate = false;
    $scope.model.disableApprove = true;
    $scope.model.disableReject = true;


    $scope.model.status = {};
    $scope.model.status.selected = {};
    $scope.model.status.selected = $scope.listStatus[0];
    $scope.model.checkAll = {
        checked: false
    };

    $scope.model.msisdn ="";
    $scope.model.accountNumber="";

    var initialize = function () {
        var date = new Date();
        $scope.model.searchFromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.model.searchToDate = $filter('date')(new Date(), 'dd/MM/yyyy');
    }

    initialize();

    $scope.searchInvoice = function() {
        listInvoice = [];
        $scope.tableInvoice = new NgTableParams({}, {
            dataset : listInvoice
        });
        $scope.model.checkAll.checked = false;
        if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
            if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
                bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc!");
                return;
            }
        } else {
            bootbox.alert("Không được để trống [Từ ngày] hoặc [Đến ngày]!");
            return;
        }
        App.blockUI({
            target : "#cancelReprintInvoice",
            boxed : true,
            message : 'Loading...'
        });
        // var shopId = $localStorage.clientContext.shop.shopId;
        var strFromDate = $("#fromDate").val();
        var strToDate = $("#toDate").val();
        var strStatus = $scope.model.status.selected.code;
        // var staffId = $localStorage.clientContext.shop.staffId;
        var strMsisdn = $scope.model.msisdn;
        var strAccountNo = $scope.model.accountNumber;

        cancelReprintInvoice.getReprintBillInvoiceByStatus(strFromDate, strToDate, strStatus, strAccountNo, strMsisdn, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm hóa đơn! Lỗi: " + result.messages);
                App.unblockUI("#cancelReprintInvoice");
            } else {
                if (result.length > 0) {
                    listInvoice = result;
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    App.unblockUI("#cancelReprintInvoice");
                } else {
                    listInvoice = [];
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    bootbox.alert("Không tìm thấy dữ liệu!" );
                    App.unblockUI("#cancelReprintInvoice");
                }
            }
        });

    }

    $scope.destroyInvoice = function() {

        var count = $scope.countSelected();
        if (count===0){
            bootbox.alert("Chưa chọn bản ghi để thực hiện hủy! Vui lòng thử lại.");
            return;
        }
        App.blockUI({
            target : "#cancelReprintInvoice",
            boxed : true,
            message : 'Loading...'
        });
        var shopCode = $localStorage.clientContext.shop.shopCode;
        var strFromDate = $("#fromDate").val();
        var strToDate = $("#toDate").val();
        var strStatus = $scope.model.status.selected.code;
        var staffId = $localStorage.clientContext.shop.staffId;

        cancelReprintInvoice.destroyCinvoice(listInvoice, staffId, shopCode, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình hủy! Lỗi: " + result.messages);
                App.unblockUI("#cancelReprintInvoice");
            } else {
                if (result.length > 0) {
                    listInvoice = result;
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    bootbox.alert("Hoàn tất quá trình hủy. Vui lòng xem kết quả hủy chi tiết ở cột [Kết quả hủy]!");
                    App.unblockUI("#cancelReprintInvoice");
                } else {
                    bootbox.alert("Xảy ra lỗi trong quá trình hủy!" );
                    App.unblockUI("#cancelReprintInvoice");
                }
            }
        });

    }

    $scope.createInvoice = function() {

        var count = $scope.countSelected();
        if (count===0){
            bootbox.alert("Chưa chọn bản ghi để thực hiện lập! Vui lòng thử lại.");
            return;
        }
        App.blockUI({
            target : "#cancelReprintInvoice",
            boxed : true,
            message : 'Loading...'
        });

        cancelReprintInvoice.createCinvoice(listInvoice, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình lập! Lỗi: " + result.messages);
                App.unblockUI("#cancelReprintInvoice");
            } else {
                if (result.length > 0) {
                    listInvoice = result;
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    bootbox.alert("Lập thành công!");
                    App.unblockUI("#cancelReprintInvoice");
                } else {
                    bootbox.alert("Xảy ra lỗi trong quá trình lập!" );
                    App.unblockUI("#cancelReprintInvoice");
                }
            }s
        });

    }

    $scope.approveCinvoice = function() {

        var count = $scope.countSelected();
        if (count===0){
            bootbox.alert("Chưa chọn bản ghi để thực hiện duyệt! Vui lòng thử lại.");
            return;
        }
        App.blockUI({
            target : "#cancelReprintInvoice",
            boxed : true,
            message : 'Loading...'
        });

        cancelReprintInvoice.approveCinvoice(listInvoice, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình duyệt! Lỗi: " + result.messages);
                App.unblockUI("#cancelReprintInvoice");
            } else {
                if (result.length > 0) {
                    listInvoice = result;
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    bootbox.alert("Duyệt thành công!");
                    App.unblockUI("#cancelReprintInvoice");
                } else {
                    bootbox.alert("Xảy ra lỗi trong quá trình duyệt!" );
                    App.unblockUI("#cancelReprintInvoice");
                }
            }
        });
    }

    $scope.rejectCinvoice = function() {

        var count = $scope.countSelected();
        if (count===0){
            bootbox.alert("Chưa chọn bản ghi để thực hiện bỏ duyệt! Vui lòng thử lại.");
            return;
        }
        App.blockUI({
            target : "#cancelReprintInvoice",
            boxed : true,
            message : 'Loading...'
        });

        cancelReprintInvoice.rejectCinvoice(listInvoice, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình bỏ duyệt! Lỗi: " + result.messages);
                App.unblockUI("#cancelReprintInvoice");
            } else {
                if (result.length > 0) {
                    listInvoice = result;
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    bootbox.alert("Bỏ duyệt thành công!");
                    App.unblockUI("#cancelReprintInvoice");
                } else {
                    bootbox.alert("Xảy ra lỗi trong quá trình bỏ duyệt!" );
                    App.unblockUI("#cancelReprintInvoice");
                }
            }
        });

    }

    $scope.selectStatus = function(item){
        if (item.code == '6' ){
            $scope.model.disableDestroy = false;
            $scope.model.disableCreate = true;
            $scope.model.disableApprove = true;
            $scope.model.disableReject = true;
        } else if (item.code == '2' ) {
            $scope.model.disableDestroy = true;
            $scope.model.disableCreate = false;
            $scope.model.disableApprove = true;
            $scope.model.disableReject = true;
        } else if (item.code == '4' ) {
            $scope.model.disableDestroy = true;
            $scope.model.disableCreate = true;
            $scope.model.disableApprove = true;
            $scope.model.disableReject = true;
        } else if (item.code == '5' ) {
            $scope.model.disableDestroy = true;
            $scope.model.disableCreate = true;
            $scope.model.disableApprove = false;
            $scope.model.disableReject = false;
        } else if (item.code == '8' ) {
            $scope.model.disableDestroy = true;
            $scope.model.disableCreate = true;
            $scope.model.disableApprove = true;
            $scope.model.disableReject = true;
        }
    }

    $scope.checkItem = function(item){
        if (!item){
            $scope.model.checkAll.checked = false;
        } else {
            var count = $scope.countSelected();
            if (count == listInvoice.length && listInvoice.length !=0){
                $scope.model.checkAll.checked = true;
            }
        }
    }

    $scope.countSelected = function(){
        var countResult = 0;
        angular.forEach(listInvoice, function(item) {
            if (item.checked){
                countResult++;
            }
        })
        return countResult;
    }

    $scope.checkAllInvoice = function(){
        angular.forEach(listInvoice, function(item) {
            item.checked = $scope.model.checkAll.checked;
        })
    }

    $scope.shopIp = $localStorage.clientContext.shop.shopCode;
    $scope.model.shopName = $localStorage.clientContext.shop.shopName;
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
