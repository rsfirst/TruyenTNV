app_vnm.factory('replaceBillOfSaleInvoice', function($http, $translate) {
	return {
        getListShop : function(shopId, callback) {
            var url = eim_url + "/bs/invoice/getPanelShopList?shopId=" + shopId;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },
        getListStaff : function(shopId, callback) {
            var url = eim_url + "/bs/invoice/getPanelStaffList?shopId=" + shopId;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },
        getListReplaceHeaderCInvoice : function(shopId, staffId, cusName, invoiceStatus, fromDate, toDate, callback) {
            var url = eim_url + "/bs/invoice/getReplaceHeaderCInvoice?shopId=" + shopId + "&staffId=" + staffId + "&cusName=" + cusName + "&invoiceStatus=" + invoiceStatus
                + "&fromDate=" + fromDate + "&toDate=" + toDate ;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
            });
        },
        callUpdateReplaceHeaderCInvoice : function(headerInvoice,shopCode, staffId, callback) {
            var url = eim_url + "/bs/invoice/replaceHeaderCInvoice?shopCode=" + shopCode + "&staffId=" + staffId;
            $http.post(url, headerInvoice).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
            });
        },
	}
});

app_vnm.controller('ctrl-replaceBillOfSaleInvoice', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,replaceBillOfSaleInvoice) {
	
	$scope.model = {};
    $scope.listShop =[];
    $scope.listStaff =[];
    $scope.model.creater = {};
    $scope.model.shop = {};
    $scope.model.shop.selected = {};
    $scope.model.customerName = "";
    $scope.listStatus = [ {
        'code' : '1',
        'name' : 'HĐ gốc'
    }, {
        'code' : '4',
        'name' : 'HĐ thay thế'
    }, {
        'code' : '5',
        'name' : 'HĐ bị thay thế'
    }];
    $scope.model.statusSearch =$scope.listStatus[0];

    $scope.tableInvoice = new NgTableParams({}, {
        dataset : []
    });
    var listInvoice = [];

    $scope.model.invoiceSelected = {};

    $scope.model.disableChange = true;
    $scope.model.disableBtnChange = false;
    $scope.model.disableBtnUpdateReplace = false;

    $scope.changeInfo = function() {
        $scope.model.disableChange = false;
        $scope.model.disableBtnChange = true;
    }

    $scope.getThisInvoice = function(item) {
        $scope.model.invoiceSelected = item;
        $scope.model.disableChange = true;

        if (item.cInvoice.invoiceStatus == "5"){
            $scope.model.disableBtnChange = true;
            $scope.model.disableBtnUpdateReplace = true;
        } else {
            $scope.model.disableBtnChange = false;
            $scope.model.disableBtnUpdateReplace = false;
        }
    }

    $scope.getShopList = function() {
        $scope.listShop = [];
        App.blockUI({
            target : "#replaceBillOfSaleInvoice",
            boxed : true,
            message : 'Loading...'
        });
        var shopId = $localStorage.clientContext.shop.shopId;
        replaceBillOfSaleInvoice.getListShop(shopId, function(result) {
            if (result.length > 0) {
                $scope.listShop = result;
                $scope.model.shop.selected = $scope.listShop.find(x => x.shopId === shopId);
                App.unblockUI("#replaceBillOfSaleInvoice");
            } else {
                $scope.listShop = [];
                bootbox.alert("Không tìm thấy dữ liệu shop!");
                App.unblockUI("#replaceBillOfSaleInvoice");
            }
        });
    }

    $scope.getStaffList = function() {
        $scope.listStaff = [];
        App.blockUI({
            target : "#replaceBillOfSaleInvoice",
            boxed : true,
            message : 'Loading...'
        });
        var staffId = $localStorage.clientContext.shop.staffId;
        var shopId = $localStorage.clientContext.shop.shopId;
        replaceBillOfSaleInvoice.getListStaff(shopId, function(result) {
            if (result.length > 0) {
                $scope.listStaff = result;
                $scope.model.creater = $scope.listStaff.find(x => x.staffId === staffId);
                App.unblockUI("#replaceBillOfSaleInvoice");
            } else {
                $scope.listStaff = [];
                bootbox.alert("Không tìm thấy dữ liệu shop!");
                App.unblockUI("#replaceBillOfSaleInvoice");
            }
        });
    }

    var initialize = function () {
        $scope.getShopList();
        $scope.getStaffList();
        var date = new Date();
        $scope.model.searchFromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.model.searchToDate = $filter('date')(new Date(), 'dd/MM/yyyy');
    }

    initialize();

    $scope.searchReplaceInvoice = function() {
        $scope.model.disableChange = true;
        $scope.model.disableBtnChange = true;
        $scope.model.disableBtnUpdateReplace = true;
        $scope.model.invoiceSelected = {};
        listInvoice = [];
        $scope.tableInvoice = new NgTableParams({}, {
            dataset : listInvoice
        });

        if ($("#searchFromDate").val() != '' && $("#searchToDate").val() != '') {
            if (moment($("#searchFromDate").val(), "DD/MM/YYYY") > moment($("#searchToDate").val(), "DD/MM/YYYY")) {
                bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc!");
                return;
            }
        } else {
            bootbox.alert("Không được để trống [Từ ngày] hoặc [Đến ngày]!");
            return;
        }
        var strShopId = $scope.model.shop.selected.shopId;
        var strStaffId = $scope.model.creater.staffId;
        var strCusName = $scope.model.customerName;
        var strStatus = $scope.model.statusSearch.code;
        var strFromDate = $("#searchFromDate").val();
        var strToDate = $("#searchToDate").val();
        App.blockUI({
            target : "#replaceBillOfSaleInvoice",
            boxed : true,
            message : 'Loading...'
        });
        replaceBillOfSaleInvoice.getListReplaceHeaderCInvoice(strShopId, strStaffId , strCusName, strStatus, strFromDate, strToDate, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
                App.unblockUI("#replaceBillOfSaleInvoice");
            } else {
                if (result.length > 0) {
                    listInvoice = result;
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    App.unblockUI("#replaceBillOfSaleInvoice");
                } else {
                    bootbox.alert("Không tìm thấy hóa đơn!");
                    App.unblockUI("#replaceBillOfSaleInvoice");
                }
            }
        });
    }

    $scope.updateReplaceInvoice = function() {
        if ($("#detailFromDate").val() != '' && $("#detailToDate").val() != '') {
            if (moment($("#detailFromDate").val(), "DD/MM/YYYY") > moment($("#detailToDate").val(), "DD/MM/YYYY")) {
                bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc!");
                return;
            }
        } else {
            bootbox.alert("Không được để trống [Từ ngày] hoặc [Đến ngày] của hóa đơn!");
            return;
        }
        if (!$scope.model.invoiceSelected){
            bootbox.alert("Chưa chọn hóa đơn để thay thế, vui lòng thử lại");
            return;
        }
        if ($scope.model.invoiceSelected.status == "4"){
            bootbox.alert("Bạn không thể thay thế bản ghi đang ở trạng thái hủy !");
            return;
        }
        App.blockUI({
            target : "#replaceBillOfSaleInvoice",
            boxed : true,
            message : 'Loading...'
        });

        var shopCode = $localStorage.clientContext.shop.shopCode;
        var staffId = $localStorage.clientContext.shop.staffId;
        replaceBillOfSaleInvoice.callUpdateReplaceHeaderCInvoice($scope.model.invoiceSelected , shopCode, staffId, function(result) {
            if (result.status == "1") {
                bootbox.alert("Thay thế hóa đơn thành công!");
                App.unblockUI("#replaceBillOfSaleInvoice");
                listInvoice.splice(listInvoice.indexOf($scope.model.invoiceSelected),1);
                $scope.tableInvoice = new NgTableParams({}, {
                    dataset : listInvoice
                });
            } else {
                if (result.messages){
                    bootbox.alert("Thay thế hóa đơn không thành công. Lỗi: " + result.messages);
                }
                else {
                    bootbox.alert("Thay thế hóa đơn không thành công." );
                }
                App.unblockUI("#replaceBillOfSaleInvoice");
            }
        });
    }

    $scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;
	 
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

