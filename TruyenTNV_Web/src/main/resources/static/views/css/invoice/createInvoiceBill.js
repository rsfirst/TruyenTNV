app_vnm.factory('createInvoiceBill', function($http, $translate) {
	return {
        getListStaff : function(shopId, callback) {
            var url = eim_url + "/bs/invoice/getPanelStaffList?shopId=" + shopId;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },
        getListBillTransactionInvoice : function(status, mdn, cusName, fromDate, toDate, staffId, shopId, callback) {
            var url = eim_url + "/bs/invoice/getBillTransactionInvoice?status=" + status + "&mdn=" + mdn + "&cusName=" + cusName + "&fromDate=" + fromDate
                + "&toDate=" + toDate + "&staffId=" + staffId + "&shopId=" + shopId;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },
        getBillTransactionCInvoice : function(status, mdn, cusName, fromDate, toDate, staffId, shopId, callback) {
            var url = eim_url + "/bs/invoice/getBillTransactionCInvoice?status=" + status + "&mdn=" + mdn + "&cusName=" + cusName + "&fromDate=" + fromDate
                + "&toDate=" + toDate + "&staffId=" + staffId + "&shopId=" + shopId;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },
        printBillTransactionCInvoice : function(billInvoice,shopCode, callback) {
            var url = eim_url + "/bs/invoice/printBillTransactionCInvoice?shopCode=" + shopCode;
            $http.post(url, billInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
        printBillTransactionCInvoiceChange : function(billInvoice,shopCode, callback) {
            var url = eim_url + "/bs/invoice/printBillTransactionCInvoiceChange?shopCode=" + shopCode;
            $http.post(url, billInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
        destroyBillTransactionCInvoice : function(billInvoice,shopCode, shopType, shopId, callback) {
            var url = eim_url + "/bs/invoice/destroyBillTransactionCInvoice?shopCode=" + shopCode + "&shopType=" + shopType + "&shopId=" + shopId;
            $http.post(url, billInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
        createBillTransactionCInvoice : function(billInvoice,shopCode, shopId, callback) {
            var url = eim_url + "/bs/invoice/createBillTransactionCInvoice?shopCode=" + shopCode + "&shopId=" + shopId;
            $http.post(url, billInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
	}
});

app_vnm.controller('ctrl-createInvoiceBill', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,createInvoiceBill) {
	
	$scope.model = {};
    $scope.listStatus = [{
        'code' : 'ALL',
        'name' : 'Tất cả'
    }, {
        'code' : '0',
        'name' : 'Chưa lập HĐ'
    }, {
        'code' : '1',
        'name' : 'Đã lập HĐ'
    }, {
        'code' : '2',
        'name' : 'Đã in HĐ'
    }, {
        'code' : '3',
        'name' : 'Đã lập phiếu thu'
    }, {
        'code' : '4',
        'name' : 'Đã hủy'
    }];
    $scope.model.statusSearch =$scope.listStatus[0];
    $scope.model.creater = {};
    $scope.listStaff =[];
    $scope.model.searchMdn = '';
    $scope.model.searchCustomerName = '';
    $scope.model.disableBtnCreate = true;
    $scope.model.disableBtnDestroy = true;
    $scope.model.disableBtnPrint = true;
    $scope.model.disableBtnPrintChange = true;

    $scope.tableBillTrans = new NgTableParams({}, {
        dataset : []
    });
    var listInvoice = [];
    $scope.model.invoiceSelected = {};

    $scope.getThisInvoice = function(item) {
        $scope.model.invoiceSelected = item;

        if (item.status == "0"){
            $scope.model.disableBtnCreate = false;
            $scope.model.disableBtnDestroy = false;
            $scope.model.disableBtnPrint = true;
            $scope.model.disableBtnPrintChange = true;
        } else if (item.status == "1"){
            $scope.model.disableBtnCreate = true;
            $scope.model.disableBtnDestroy = false;
            $scope.model.disableBtnPrint = false;
            $scope.model.disableBtnPrintChange = false;
        } else if (item.status == "2"){
            $scope.model.disableBtnCreate = true;
            $scope.model.disableBtnDestroy = false;
            $scope.model.disableBtnPrint = false;
            $scope.model.disableBtnPrintChange = false;
        } else {
            $scope.model.disableBtnCreate = true;
            $scope.model.disableBtnDestroy = true;
            $scope.model.disableBtnPrint = true;
            $scope.model.disableBtnPrintChange = true;
        }
    }

    $scope.openLinkCInvoice = function(url) {
        $window.open(url);
    }

    $scope.searchTransBill = function() {
        $scope.model.disableBtnCreate = true;
        $scope.model.disableBtnDestroy = true;
        $scope.model.disableBtnPrint = true;
        $scope.model.disableBtnPrintChange = true;
        $scope.model.invoiceSelected = {};
        listInvoice = [];
        $scope.tableBillTrans = new NgTableParams({}, {
            dataset : listInvoice
        });

        if ($("#fromDate").val() != '' && $("#toDate").val() != '') {
            if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
                bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc!");
                return;
            }
        } else {
            bootbox.alert("Không được để trống [Từ ngày] hoặc [Đến ngày]!");
            return;
        }
        if($scope.model.searchMdn!=null && $scope.model.searchMdn!=undefined && 
        		$scope.model.searchMdn!="" && !isNumbericInteger($scope.model.searchMdn)){
			bootbox.alert("Truong [So thue bao] phai la so");
			return ;
		}
        if ($scope.model.searchMdn!=""&& $scope.model.searchMdn.length<10|| $scope.model.searchMdn.length>11) {
        	 bootbox.alert("Chieu dai sdt khong duoc nho hon 10 hoac lon hon 11 ky tu");
        	 return;
        }
        var strStatus = $scope.model.statusSearch.code;
        var strMdn = '';
        if ($scope.model.searchMdn == 0){
            var strMdn = '';
        } else {
            var strMdn = StringUtilNVL($scope.model.searchMdn);
        }
        var strCusName = $scope.model.searchCustomerName.replace(/%/g,"-");;
        var strFromDate = $("#fromDate").val();
        var strToDate = $("#toDate").val();
        var strStaffId = $scope.model.creater.staffId;
        var strShopId = $localStorage.clientContext.shop.shopId;

        App.blockUI({
            target : "#createInvoiceBill",
            boxed : true,
            message : 'Loading...'
        });

        if (strStatus == '0' || strStatus =='ALL'){
            createInvoiceBill.getListBillTransactionInvoice(strStatus, strMdn , strCusName, strFromDate, strToDate, strStaffId, strShopId, function(result) {
                if (result.status == "0" && result.messages ){
                    bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
                    App.unblockUI("#createInvoiceBill");
                } else {
                    if (result.length > 0) {
                        listInvoice = result;
                        $scope.tableBillTrans = new NgTableParams({}, {
                            dataset : listInvoice
                        });
                        App.unblockUI("#createInvoiceBill");
                    } else {
                        bootbox.alert("Không tìm thấy hóa đơn!");
                        App.unblockUI("#createInvoiceBill");
                    }
                }
            });
        } else {
            createInvoiceBill.getBillTransactionCInvoice(strStatus, strMdn , strCusName, strFromDate, strToDate, strStaffId, strShopId, function(result) {
                if (result.status == "0" && result.messages ){
                    bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
                    App.unblockUI("#createInvoiceBill");
                } else {
                    if (result.length > 0) {
                        listInvoice = result;
                        $scope.tableBillTrans = new NgTableParams({}, {
                            dataset: listInvoice
                        });
                        App.unblockUI("#createInvoiceBill");
                    } else {
                        bootbox.alert("Không tìm thấy hóa đơn!");
                        App.unblockUI("#createInvoiceBill");
                    }
                }
            });
        }
    }

    $scope.printBillCInvoice = function() {
        if (!$scope.model.invoiceSelected){
            bootbox.alert("Chưa chọn hóa đơn để in hóa đơn điện tử vui lòng thử lại");
            return;
        }
        App.blockUI({
            target : "#createInvoiceBill",
            boxed : true,
            message : 'Loading...'
        });
        var strShopCode =$localStorage.clientContext.shop.shopCode;
        createInvoiceBill.printBillTransactionCInvoice($scope.model.invoiceSelected, strShopCode, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình in hóa đơn điện tử! Lỗi: " + result.messages);
                App.unblockUI("#createInvoiceBill");
            } else {
                if (result.linkPrint.length > 0) {
                    $scope.openLinkCInvoice(result.linkPrint);
                    bootbox.alert("In hóa đơn điện tử thành công.");
                    App.unblockUI("#createInvoiceBill");
                    $scope.model.invoiceSelected.status = "2";
                    $scope.model.invoiceSelected.statusName = "Đã in HĐ";
                    var indexSelect = listInvoice.indexOf($scope.model.invoiceSelected);
                    listInvoice.splice(indexSelect,1,$scope.model.invoiceSelected);
                    $scope.tableBillTrans = new NgTableParams({}, {
                        dataset : listInvoice
                    });
                    $scope.getThisInvoice($scope.model.invoiceSelected);
                } else {
                    bootbox.alert("In hóa đơn điện tử không thành công.");
                    App.unblockUI("#createInvoiceBill");
                }
            }
        });
    }

    $scope.printBillCInvoiceChange = function() {
        if (!$scope.model.invoiceSelected){
            bootbox.alert("Chưa chọn hóa đơn để in hóa đơn chuyển đổi vui lòng thử lại");
            return;
        }
        App.blockUI({
            target : "#createInvoiceBill",
            boxed : true,
            message : 'Loading...'
        });
        var strShopCode =$localStorage.clientContext.shop.shopCode;
        createInvoiceBill.printBillTransactionCInvoiceChange($scope.model.invoiceSelected, strShopCode, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình in hóa đơn chuyển đổi! Lỗi: " + result.messages);
                App.unblockUI("#createInvoiceBill");
            } else {
                if (result.linkPrint.length > 0) {
                    $scope.openLinkCInvoice(result.linkPrint);
                    bootbox.alert("In hóa đơn chuyển đổi thành công.");
                    App.unblockUI("#createInvoiceBill");
                    $scope.getThisInvoice($scope.model.invoiceSelected);
                } else {
                    bootbox.alert("In hóa đơn chuyển đổi không thành công.");
                    App.unblockUI("#createInvoiceBill");
                }
            }
        });
    }

    $scope.destroyBillTrans = function() {
        if (!$scope.model.invoiceSelected){
            bootbox.alert("Chưa chọn hóa đơn/giao dịch để hủy vui lòng thử lại");
            return;
        }
        App.blockUI({
            target : "#createInvoiceBill",
            boxed : true,
            message : 'Loading...'
        });
        var strShopCode =$localStorage.clientContext.shop.shopCode;
        var strShopType =$localStorage.clientContext.shop.shopType;
        var strShopId =$localStorage.clientContext.shop.shopId;
        createInvoiceBill.destroyBillTransactionCInvoice($scope.model.invoiceSelected, strShopCode, strShopType, strShopId, function(result) {
            if (result.status == "1"  ){
                bootbox.alert("Hủy thành công!");
                App.unblockUI("#createInvoiceBill");
                $scope.model.invoiceSelected.status = "4";
                $scope.model.invoiceSelected.statusName = "Đã hủy";
                var indexSelect = listInvoice.indexOf($scope.model.invoiceSelected);
                listInvoice.splice(indexSelect,1,$scope.model.invoiceSelected);
                $scope.tableBillTrans = new NgTableParams({}, {
                    dataset : listInvoice
                });
                $scope.getThisInvoice($scope.model.invoiceSelected);
            } else {
                bootbox.alert("Xảy ra lỗi trong quá trình hủy! Lỗi: " + result.messages);
                App.unblockUI("#createInvoiceBill");
            }
        });
    }

    $scope.createBillInvoice = function() {
        if (!$scope.model.invoiceSelected){
            bootbox.alert("Chưa chọn giao dịch để tạo hóa đơn điện tử vui lòng thử lại");
            return;
        }
        App.blockUI({
            target : "#createInvoiceBill",
            boxed : true,
            message : 'Loading...'
        });
        var strShopCode =$localStorage.clientContext.shop.shopCode;
        var strShopId =$localStorage.clientContext.shop.shopId;
        createInvoiceBill.createBillTransactionCInvoice($scope.model.invoiceSelected, strShopCode, strShopId, function(result) {
            if (result.status == "1"  ){
                App.unblockUI("#createInvoiceBill");
                $scope.model.invoiceSelected.status = "1";
                $scope.model.invoiceSelected.statusName = "Đã lập hóa đơn";
                $scope.model.invoiceSelected.invoiceNo = result.messages;
                var indexSelect = listInvoice.indexOf($scope.model.invoiceSelected);
                listInvoice.splice(indexSelect,1,$scope.model.invoiceSelected);
                $scope.tableBillTrans = new NgTableParams({}, {
                    dataset : listInvoice
                });
                $scope.getThisInvoice($scope.model.invoiceSelected);
                bootbox.confirm({
                    message: "Tạo hóa đơn điện tử thành công! Bạn có muốn in luôn hóa đơn điện tử không?",
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
                            $scope.printBillCInvoice();
                        }
                    }
                });
            } else {
                bootbox.alert("Xảy ra lỗi trong quá trình tạo hóa đơn điện tử! Lỗi: " + result.messages);
                App.unblockUI("#createInvoiceBill");
            }
        });
    }

    $scope.getStaffList = function() {
        $scope.listStaff = [];
        App.blockUI({
            target : "#createInvoiceBill",
            boxed : true,
            message : 'Loading...'
        });
        var staffId = $localStorage.clientContext.shop.staffId;
        var shopId = $localStorage.clientContext.shop.shopId;
        createInvoiceBill.getListStaff(shopId, function(result) {
            if (result.length > 0) {
                $scope.listStaff = result;
                $scope.model.creater = $scope.listStaff.find(x => x.staffId === staffId);
                App.unblockUI("#createInvoiceBill");
            } else {
                $scope.listStaff = [];
                bootbox.alert("Không tìm thấy dữ liệu shop!");
                App.unblockUI("#createInvoiceBill");
            }
        });
    }

	var initialize = function () {
        $scope.getStaffList();
        var date = new Date();
        $scope.model.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.model.toDate = $filter('date')(new Date(), 'dd/MM/yyyy');
	}

	initialize();
});

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

