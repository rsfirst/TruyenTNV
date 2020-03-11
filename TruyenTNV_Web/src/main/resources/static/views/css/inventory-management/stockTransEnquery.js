app_vnm.factory('ctk_stockTransEnquery', function($http, $translate) {
	// Khoi tao interface
	return {
		initListStockDeliver : function(shopId, callback) {
			var url = eim_url + "/bs/Stock/getListReceivingStock?shopId=" + shopId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockTransEnqueryContent");
				bootbox.alert(
						$translate.instant('vnm.messages.error.connection'));
			}); 
		},
		initListStock : function(shopId, callback) {
			var url = eim_url + "/bs/Stock/getListStock?shopId=" + shopId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockTransEnqueryContent");
				bootbox.alert(
						$translate.instant('vnm.messages.error.connection'));
			}); 
		},
		initListReason : function(callback) {
			var url = eim_url + "/bs/Stock/getListReasonStock";
			$http.get(url).success(callback).error(function (callback)
					{
				App.unblockUI("#stockTransEnqueryContent");
				bootbox.alert(
						$translate.instant('vnm.messages.error.connection'));
					}); 
		},
		onSearchStockTrans : function(delivererStockID, stockID, reasonID, inspectCmdStatus, type, inspectCmdCode, fromDate, toDate,shopId,rowBegin,rowEnd, callback) {
			var url = eim_url + "/bs/Stock/searchStockTrans?delivererStockID=" + delivererStockID + '&stockID=' + stockID + '&reasonID=' + 
			reasonID + '&inspectCmdStatus=' + inspectCmdStatus + '&type=' + type + '&inspectCmdCode=' + inspectCmdCode + '&fromDate=' + fromDate + '&toDate=' + toDate+ '&shopId=' + shopId+ '&rowBegin=' + rowBegin+ '&rowEnd=' + rowEnd;
			$http.get(url).success(callback).error(function (callback)
					{
				App.unblockUI("#stockTransEnqueryContent");
				bootbox.alert(
						$translate.instant('vnm.messages.error.connection'));
					}); 
		},
		getDetailStockTrans : function(stockTransId, callback) {
			var url = eim_url + "/bs/Stock/getDetailStockTrans?stockTransId=" + stockTransId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockTransEnqueryContent");
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			}); 
		},
		getStockSerial : function(stockTransId, goodId, stateId, callback) {
			var url = eim_url + "/bs/Stock/getStockSerial?stockTransId=" + stockTransId + '&goodId=' + goodId + '&stateId=' + stateId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#stockTransEnqueryContent");
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			}); 
		},
		getTotalNumberRecords : function(delivererStockID, stockID, reasonID, inspectCmdStatus, type, inspectCmdCode, fromDate, toDate,shopId, callback) {
			var url = eim_url + "/bs/Stock/getTotalNumberRecords?delivererStockID=" + delivererStockID + '&stockID=' + stockID + '&reasonID=' + 
			reasonID + '&inspectCmdStatus=' + inspectCmdStatus + '&type=' + type + '&inspectCmdCode=' + inspectCmdCode + '&fromDate=' + fromDate + '&toDate=' + toDate+ '&shopId=' + shopId;
			$http.get(url).success(callback).error(function (callback)
					{
				App.unblockUI("#stockTransEnqueryContent");
				bootbox.alert(
						$translate.instant('vnm.messages.error.connection'));
					}); 
		}
	}
});
app_vnm.controller('ctrl-stockTransEnquery', function($scope, $rootScope,
		$translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, NgTableParams, $localStorage, $element,
		ctk_stockTransEnquery) {
	
	$scope.model = {};
	//let map = new Map<string, string>(); 
	var delivererStockID= "";
	var stockID= "";
	var reasonID= "";
	var inspectCmdStatus= "";
	var type= "";
	var inspectCmdCode= "";
	var fromDate = "";
	var toDate= "";
	var shopId= "";
	$scope.getInputSearch = function(){
		delivererStockID= "";
		stockID= "";
		reasonID= "";
		inspectCmdStatus= "";
		type= "";
		inspectCmdCode= "";
		fromDate = "";
		toDate= "";
		shopId= "";
		if($scope.model.stock.selected != undefined){
			stockID = StringUtilNVLWithDefault($scope.model.stock.selected.stockId, "");
		}
		if($scope.model.receiveStock.selected != undefined){
			delivererStockID = StringUtilNVLWithDefault($scope.model.receiveStock.selected.stockId, "");
		}
		if($scope.model.reason.selected != undefined){
			reasonID = StringUtilNVLWithDefault($scope.model.reason.selected.reasonId, "");
		}
		if($scope.model.status.selected != undefined){
			inspectCmdStatus = StringUtilNVLWithDefault($scope.model.status.selected.code, "");
		}
		if($scope.model.transType.selected != undefined){
			type = StringUtilNVLWithDefault($scope.model.transType.selected.code, "");
		}
		inspectCmdCode = StringUtilNVLWithDefault($scope.model.inspectCmdCode, "");
		fromDate =  StringUtilNVLWithDefault($("#fromDate").val(), "");
		toDate = StringUtilNVLWithDefault($("#toDate").val(), "");
		shopId = StringUtilNVLWithDefault($localStorage.clientContext.shop.shopId,"");
	}
	//PHAN TRANG SERVER
	
    $scope.currentPageList = 0;
    $scope.totalItems = 0;
    $scope.model.currentPage = 1;

    $scope.maxSize = 10;// Limit number for pagination display number.  
    $scope.totalCount = 0;
    $scope.pageIndex = 1;// Current page number. First page is 1.-->  
    $scope.pageSizeSelected = 5;// Maximum number of items per page.  

    	
	//block
	var checkLoad = 0;
	$scope.tblStockItems = 0;
	$scope.showViewGoods = false;
	$scope.tblStockDetailItems = 0;
	$scope.tblStockSerialItems = 0;
	overLoading("loading...");
	$scope.listReceiveStock = [];
	$scope.listStock = [];
	$scope.shopName = $localStorage.clientContext.shop.shopName;

	$scope.loadDefauld = function() {
		// TODO:
	}
	var initialize = function() {
		$scope.loadDefauld();
	}
	initialize();
	
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {
				toDate : {
					isDate : true,
					checkFromToDate : true
				},
				fromDate : {
					isDate : true
				}
			},
			messages : {
				toDate : {
					isDate : "Ngày kết thúc không đúng định dạng!",
					checkFromToDate : "Ngày bắt đầu không được lớn hơn ngày kết thúc!"
				},
				fromDate : {
					isDate : "Ngày bắt đầu không đúng định dạng!"
				}
			}
		}
	
	//init_list_stock_Delivery
	ctk_stockTransEnquery.initListStockDeliver($localStorage.clientContext.shop.shopId, function(result){
		App.blockUI({
			target : "#stockTransEnqueryContent",
			boxed : true,
			message : 'loading...'
		});
		$scope.model.stockCode = $localStorage.clientContext.shop.shopCode;
		$scope.model.stockName = $localStorage.clientContext.shop.shopName;
		$scope.model.receiveStock ={};
		$scope.model.receiveStock.selected ={};
		if (result.length > 0){
			$scope.listReceiveStock = result;
		}
		App.unblockUI("#stockTransEnqueryContent");
		checkLoad++;
	});
	//init_list_Stock
	ctk_stockTransEnquery.initListStock($localStorage.clientContext.shop.shopId, function(result){
		App.blockUI({
			target : "#stockTransEnqueryContent",
			boxed : true,
			message : 'loading...'
		});
		$scope.model.stockCode = $localStorage.clientContext.shop.shopCode;
		$scope.model.stockName = $localStorage.clientContext.shop.shopName;
		$scope.model.stock ={};
		$scope.model.stock.selected ={};
		if (result.length > 0){
			$scope.listStock = result;
		}
		App.unblockUI("#stockTransEnqueryContent");
		checkLoad++;
	});
	//init list reason
	ctk_stockTransEnquery.initListReason(function(result){
		App.blockUI({
			target : "#stockTransEnqueryContent",
			boxed : true,
			message : 'loading...'
		});
		$scope.model.reason ={};
		$scope.model.reason.selected ={};
		if (result.length > 0){
			$scope.listReason = result;
		}
		App.unblockUI("#stockTransEnqueryContent");
		checkLoad++;
	});
	
	//init_stock_transaction_type
	$scope.model.transType= {};
	$scope.model.transType.selected = {};
	$scope.listTransType = [ {
		'code' : '1',
		'name' : 'Xuất'
	}, {
		'code' : '2',
		'name' : 'Nhập'
	} ];
	//init_stock_transaction_type
	$scope.model.status= {};
	$scope.model.status.selected = {};
	$scope.listStatus = [ {
		'code' : '0',
		'name' : 'Chưa duyệt'
	}, {
		'code' : '1',
		'name' : 'Đã duyệt'
	}
	/*, {
		'code' : '2',
		'name' : 'Từ chối'
	}, {
		'code' : '3',
		'name' : 'Đã hủy'
	}*/
	];
	$scope.model.toDate = getCurrentDate();
	if (angular.isDefined($scope.model.fromDate) && $scope.model.fromDate !== null && $scope.model.fromDate.length > 6)
		fromDate = $filter('date')(new Date(parseInt($scope.model.fromDate.substr(6))), 'DD/MM/YYYY');

	if (angular.isDefined($scope.model.toDate) && $scope.model.toDate !== null && $scope.model.toDate.length > 6) {
		var dateFo = new Date(parseInt($scope.model.toDate.substr(6)));
		var tm = moment(dateFo).add(1, 'days').toDate();
		todate = $filter('date')(tm, 'DD/MM/YYYY');
	}

	//closeOverLay_when_load_completed 
	$scope.$watch(function() {
	      return checkLoad;
	    }, function(check) {
	    	if (check ==3 ){
	    		closeOverLay();
	    	}
	    });
	
    $scope.pageChanged = function () {
    	App.blockUI({
   			target : "#stockTransEnqueryContent",
   			boxed : true,
   			message : 'loading...'
   		});
		$scope.getInputSearch();
		$scope.dataTable = [];
		var rowBegin = $scope.maxSize
				* ($scope.model.currentPage - 1) + 1;
		var rowEnd = rowBegin + $scope.maxSize -1;

       //Query 
       ctk_stockTransEnquery.onSearchStockTrans(delivererStockID, stockID, reasonID, inspectCmdStatus, type, inspectCmdCode,fromDate ,toDate,shopId,rowBegin,rowEnd,  function(result) {
			$scope.totalCount = result.code;
			if (result.status == "0" && result.messages !=null){
				bootbox.alert("Xảy ra lỗi khi thực hiện tìm kiếm: " + result.messages);
				
			} else if (result.listResult.length > 0) {
				$scope.dataTable = result.listResult;
			}
			App.unblockUI("#stockTransEnqueryContent");
		});

    };
    
    //This method is calling from dropDown  
    $scope.changePageSize = function () {  
        $scope.pageIndex = 1;  
        
    }; 
    
	$scope.onSearch = function() {
			if ($scope.frm_stockTransEnquery.validate()) {
				$scope.showViewGoods = false;
				$scope.tblStockDetailItems = 0;
				$scope.tblStockSerialItems = 0;
				$scope.tblStockDetail = new NgTableParams({}, {
					dataset : []
				});
				$scope.tblStockItems = 0;
				$scope.tblStock = new NgTableParams({}, {
					dataset : []
				});
				App.blockUI({
					target : "#stockTransEnqueryContent",
					boxed : true,
					message : 'loading...'
				});

				$scope.pageChanged();
				closeOverLay();
				$scope.getDetailStockTrans = function(item) {
				$scope.showViewGoods = false;
				$scope.tblStockDetailItems = 0;
				$scope.tblGoodDetail = new NgTableParams({}, {
					dataset : []
				});
				$scope.selectedTrans = item;
				$scope.tblStockDetail = new NgTableParams({}, {
					dataset : []
				});
				App.blockUI({
					target : "#stockTransEnqueryContent",
					boxed : true,
					message : 'Loading...'
				});
				ctk_stockTransEnquery.getDetailStockTrans(item.stockTransId, function(detailList) {
					if (StringUtilNVLWithDefault(detailList.status, '0') != '0') {
						App.unblockUI("#stockTransEnqueryContent");
						$scope.tblStockDetail = new NgTableParams({}, {
							dataset : []
						});
						bootbox.alert("Lỗi khi thực hiện xem thông tin đơn hàng: " + detailList.messages);
					} else {
						$scope.tblStockDetail = new NgTableParams({page:1,count:5}, {
							dataset : detailList
						});
						App.unblockUI("#stockTransEnqueryContent");
					}
					$scope.tblStockDetailItems = detailList.length;
				});
			}
		}
	}
	
	$scope.getDetailGood = function(item) {
		$scope.showViewGoods = true;
		$scope.tblStockSerialItems = 0;
		$scope.selectedGood = item;
		$scope.tblGoodDetail = new NgTableParams({}, {
			dataset : []
		});
		App.blockUI({
			target : "#stockTransEnqueryContent",
			boxed : true,
			message : 'Loading...'
		});
		ctk_stockTransEnquery.getStockSerial(item.stockTransId, item.goodsId, item.stateId, function(detailList) {
			if (StringUtilNVLWithDefault(detailList.status, '0') != '0') {
				App.unblockUI("#stockTransEnqueryContent");
				$scope.tblGoodDetail = new NgTableParams({}, {
					dataset : []
				});
				bootbox.alert("Lỗi khi thực hiện xem chi tiết hàng: " + detailList.messages);
			} else {
				$scope.tblGoodDetail = new NgTableParams({page:1,count:5}, {
					dataset : detailList
				});
				App.unblockUI("#stockTransEnqueryContent");
			}
			$scope.tblStockSerialItems = detailList.length;
		});
	}
	
	// BEGIN validate input
	$.validator.addMethod("isDate", function(value, element) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;
		var valueDate = $.trim(value);
		return moment(valueDate, 'DD/MM/YYYY', true).isValid();
	}, "");

	$.validator.addMethod("checkFromToDate", function(value, element) {
		if (value === "")
			return true;
		if ($.trim(value) == "")
			return true;

		if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment(value, "DD/MM/YYYY")) {
			return false
		}
		return true;
	}, "");
	
});
function getPositionOfObject(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem === arrDes[x]) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
function getPositionOfObjectByValue(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem.value === arrDes[x].value) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
function clearFillData(data) {
	data = "";
}
function getCurrentDate(){
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
	today = dd + '/' + mm + '/' + yyyy;
	return today;
}
function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}
