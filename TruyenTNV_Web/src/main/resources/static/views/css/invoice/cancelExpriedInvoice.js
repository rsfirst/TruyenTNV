app_vnm.factory('cancelExpriedInvoice', function($http, $translate) {
	return {
        getBillInvoiceByStatus : function(shopId, fromDate, toDate, status , staffId, callback) {
            var url = eim_url + "/bs/invoice/getExpriedBillCInvoice?shopId=" + shopId + "&fromDate=" + fromDate + "&toDate=" + toDate + "&status=" + status + "&staffId=" + staffId;
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
	}
});

app_vnm.controller('ctrl-cancelExpriedInvoice', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,cancelExpriedInvoice) {
	
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
        'code' : '8',
        'name' : 'Đã in lại'
    } ];

    $scope.model.disableDestroy = false;

    $scope.model.status = {};
    $scope.model.status.selected = {};
    $scope.model.status.selected = $scope.listStatus[0];
    $scope.model.checkAll = {
        checked: false
    };

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
            target : "#cancelExpriedInvoice",
            boxed : true,
            message : 'Loading...'
        });
        var shopId = $localStorage.clientContext.shop.shopId;
        var strFromDate = $("#fromDate").val();
        var strToDate = $("#toDate").val();
        var strStatus = $scope.model.status.selected.code;
        var staffId = $localStorage.clientContext.shop.staffId;

        cancelExpriedInvoice.getBillInvoiceByStatus(shopId, strFromDate, strToDate, strStatus, staffId, function(invoiceList) {
            if (invoiceList.status == "0" && invoiceList.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + invoiceList.messages);
                App.unblockUI("#cancelExpriedInvoice");
            } else {
                if (invoiceList.length > 0) {
                    listInvoice = invoiceList;
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    App.unblockUI("#cancelExpriedInvoice");
                } else {
                    listInvoice = [];
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    bootbox.alert("Không tìm thấy dữ liệu!");
                    App.unblockUI("#cancelExpriedInvoice");
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
            target : "#cancelExpriedInvoice",
            boxed : true,
            message : 'Loading...'
        });
        var shopCode = $localStorage.clientContext.shop.shopCode;
        var strFromDate = $("#fromDate").val();
        var strToDate = $("#toDate").val();
        var strStatus = $scope.model.status.selected.code;
        var staffId = $localStorage.clientContext.shop.staffId;

        cancelExpriedInvoice.destroyCinvoice(listInvoice, staffId, shopCode, function(result) {
            if (result.status == "0" && result.messages ){
                bootbox.alert("Xảy ra lỗi trong quá trình hủy! Lỗi: " + result.messages);
                App.unblockUI("#cancelExpriedInvoice");
            } else {
                if (result.length > 0) {
                    listInvoice = result;
                    $scope.tableInvoice = new NgTableParams({}, {
                        dataset: listInvoice
                    });
                    bootbox.alert("Hoàn tất quá trình hủy. Vui lòng xem kết quả hủy chi tiết ở cột [Kết quả hủy]!");
                    App.unblockUI("#cancelExpriedInvoice");
                } else {
                    bootbox.alert("Xảy ra lỗi trong quá trình hủy!" + result.messages);
                    App.unblockUI("#cancelExpriedInvoice");
                }
            }
        });
    }

    $scope.selectStatus = function(item){
        if (item.code != '2' ){
            $scope.model.disableDestroy = true;
        } else {
            $scope.model.disableDestroy = false;
            $scope.model.checkAll.checked = false;
        }
        $scope.searchInvoice();
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

