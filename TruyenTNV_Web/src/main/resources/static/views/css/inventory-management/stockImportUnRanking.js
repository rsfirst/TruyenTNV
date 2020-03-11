app_vnm.factory('ctk_stockImportUnRanking', function($http, $translate) {
	return {
		confirmReceivedTrans : function(stockTransId, staffId, callback) {
			var url = eim_url + "/bs/Stock/confirmStockTrans?stockTransId="+stockTransId + '&staffId=' + staffId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockImportUnRanking");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		initListStock : function(shopId, shopCode, blCreate, callback) {
			var url = eim_url + "/bs/Stock/getListStockExport?shopId=" + shopId + "&shopCode=" + shopCode + "&blCreate=" + blCreate;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockImportUnRanking");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		initListReason : function(codeReason, callback) {
			var url = eim_url + "/bs/Stock/getListReason?code="+codeReason;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockImportUnRanking");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		initListStatus : function(typeStatus, callback) {
			var url = eim_url + "/bs/Stock/getListStatus?type="+typeStatus;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockImportUnRanking");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		getTrans : function(actionCode, shopImportId, stockDeliver, execStatus, reasonId, strFromDate, strToDate, callback) {
				var url = eim_url + "/bs/Stock/getListStockTrans?actionCode=" + actionCode + '&shopImportId=' + shopImportId + '&stockDeliver=' + 
				stockDeliver + '&execStatus=' + execStatus + '&reasonId=' + reasonId + '&fromDate=' + strFromDate + '&toDate=' + strToDate;
				$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockImportUnRanking");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		getTransDetail : function(stockTransId, callback) {
			var url = eim_url + "/bs/Stock/getDetailTrans?stockTransId=" + stockTransId;
			$http.get(url).success(callback).error(function (callback)
		{
			App.unblockUI("#stockImportUnRanking");
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
		}); 
	}
	}
});

app_vnm.controller('ctrl-stockImportUnRanking', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, NgTableParams, $localStorage, ctk_stockImportUnRanking) {
	
	$scope.model = {};
	$scope.listStock = [];
	$scope.listReason = [];
	$scope.listStatus = [];
	$scope.totalTrans = 0;
	$scope.eposMsg = [ $translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.unapproved'),
			$translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.approved') ];
	$scope.totalDetail = 0;
	$scope.isSelect = true;
	$scope.selectedTrans = null;
	
	
	var todate = '';
	var fromDate = '';
	var poCode = '';
	
	$scope.model.toDate = getNow_ddMMyy();

	if (angular.isDefined($scope.model.fromDate) && $scope.model.fromDate !== null && $scope.model.fromDate.length > 6)
		fromDate = $filter('date')(new Date(parseInt($scope.model.fromDate.substr(6))), 'yyyy-MM-dd');

	if (angular.isDefined($scope.model.toDate) && $scope.model.toDate !== null && $scope.model.toDate.length > 6) {
		var dateFo = new Date(parseInt($scope.model.toDate.substr(6)));
		var tm = moment(dateFo).add(1, 'days').toDate();
		todate = $filter('date')(tm, 'yyyy-MM-dd');
	}
	
	var checkLoad = 0;
	overLoading("loading...");
	
	ctk_stockImportUnRanking.initListStock($localStorage.clientContext.shop.shopId, $localStorage.clientContext.shop.shopCode, false, function(dataStock) {
		$scope.model.stock ={};
		$scope.model.stock.selected ={};
		if (dataStock.length > 0){
			$scope.listStock = dataStock;
//			$scope.model.stock ={};
//			$scope.model.stock.selected = dataStock[0];
		}
		App.unblockUI("#stockImportUnRanking");
		checkLoad++;
	});
	
	ctk_stockImportUnRanking.initListReason("NCB", function(dataReason) {
		$scope.model.reason = {};
		$scope.model.reason.selected = {};
		if (dataReason.length > 0){
			$scope.listReason = dataReason;
			$scope.model.reason.selected = dataReason[0];
		}
		App.unblockUI("#stockImportUnRanking");
		checkLoad++;
	});
	
	ctk_stockImportUnRanking.initListStatus("74", function(dataStatus) {
		$scope.model.status = {};
		$scope.model.status.selected = {};
		if (dataStatus.length > 0){
			$scope.listStatus = dataStatus;
			$scope.model.status.selected = dataStatus[0];
		}
		App.unblockUI("#stockImportUnRanking");
		checkLoad++;
	});
	
	$scope.$watch(function() {
      return checkLoad;
    }, function(check) {
    	if (check ==3 ){
    		closeOverLay();
    	}
    });
	
	$scope.$watch(function() {
      return $scope.selectedTrans;
    }, function(check) {
    	if (check != null && check != ''){
    		$scope.isSelect = false;
    	} else {
    		$scope.isSelect = true;
    	}
    });

	$scope.searchTrans = function() {
		$scope.tableTrans = new NgTableParams({}, {
			dataset : []
		});
		$scope.tableTransDetail = new NgTableParams({}, {
			dataset : []
		});
		$scope.selectedTrans = null;
		App.blockUI({
			target : "#stockImportUnRanking",
			boxed : true,
			message : 'Loading...'
		});
		var actionCode = StringUtilNVLWithDefault($scope.model.actionCode, "");
		var shopImportId = $localStorage.clientContext.shop.shopId;
		var stockDeliver = StringUtilNVLWithDefault($scope.model.stock.selected.stockId, -1);
		var execStatus = StringUtilNVLWithDefault($scope.model.status.selected.code, "");
		var reasonId = StringUtilNVLWithDefault($scope.model.reason.selected.reasonId, -1);
		var strFromDate = StringUtilNVLWithDefault($("#fromDate").val(), "");
		var strToDate = StringUtilNVLWithDefault($("#toDate").val(), "");


		ctk_stockImportUnRanking.getTrans(actionCode, shopImportId, stockDeliver, execStatus, reasonId, strFromDate, strToDate, function(stockTransList) {
			if (stockTransList.status == "0" && stockTransList.messages !=null){
				bootbox.alert("Xảy ra lỗi khi thực hiện tìm kiếm: " + stockTransList.messages);
			} else if (stockTransList.length > 0) {
				$scope.tableTrans = new NgTableParams({}, {
					dataset : stockTransList
				});
				$scope.totalTrans = stockTransList.length;
			}
			App.unblockUI("#stockImportUnRanking");
		});
	}
	
	$scope.getDetailTrans = function(item) {
		$scope.selectedTrans = item;
		$scope.tableTransDetail = new NgTableParams({}, {
			dataset : []
		});
		App.blockUI({
			target : "#stockImportUnRanking",
			boxed : true,
			message : 'Loading...'
		});
		ctk_stockImportUnRanking.getTransDetail(item.stockTransId, function(detailList) {
			if (StringUtilNVLWithDefault(detailList.status, '0') != '0') {
				App.unblockUI("#stockImportUnRanking");
				$scope.tableTransDetail = new NgTableParams({}, {
					dataset : []
				});
				bootbox.alert("Lỗi khi thực hiện xem chi tiết đơn hàng: " + detailList.messages);
			} else {
				$scope.tableTransDetail = new NgTableParams({}, {
					dataset : detailList
				});
				App.unblockUI("#stockImportUnRanking");
			}
			$scope.totalDetail = detailList.length;
		});
	}

	$scope.checkStartEndDate = function(startDate, endDate) {
		$scope.errMessage = '';
		var curDate = new Date();

		if (new Date(startDate) > new Date(endDate)) {
			$scope.errMessage = 'End Date should be greater than start date';
			return false;
		}
		if (new Date(startDate) < curDate) {
			$scope.errMessage = 'Start date should not be before today.';
			return false;
		}
	};
	
	$scope.confirm = function() {
		App.blockUI({
			target : "#stockImportUnRanking",
			boxed : true,
			message : 'Loading...'
		});
		if ($scope.selectedTrans) {
			if ($scope.selectedTrans.cmdStatus == '0') {
				ctk_stockImportUnRanking.confirmReceivedTrans($scope.selectedTrans.stockTransId,
						$localStorage.clientContext.shop.staffId, function(response) {
							$scope.selectedTrans = null;
							if (StringUtilNVLWithDefault(response.status, 'ERR') == 'ERR') {
								App.unblockUI("#stockImportUnRanking");
								bootbox.alert("Lỗi khi thực hiện nhập: "+ response.messages);
							} else {
								App.unblockUI("#stockImportUnRanking");
								bootbox.alert("Thực hiện nhập đơn hàng thành công!");
								searchTrans();
							}
						});
			} else {
				App.unblockUI("#stockImportUnRanking");
				bootbox.alert("Vui lòng chọn đơn hàng có trạng thái chưa nhập!");
			}
		} else {
			App.unblockUI("#stockImportUnRanking");
			bootbox.alert("Chưa chọn đơn hàng để nhập!");
		}
	}
});
function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}
function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}
function getNow_ddMMyy(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; // January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = dd + '-' + mm + '-' + yyyy;
	
	return today;
}