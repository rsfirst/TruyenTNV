var EMPTY_VALUE = "";
var SELECT_NONE_INDEX = -1;
var STATUS_DUPLICATE = 2;
var STATUS_OK = 1;

var TYPE_SEARCH_STOCK = "STOCK";
var TYPE_SEARCH_STOCK_AND_STAFF = "STOCK_AND_STAFF";

var WARRANTY_CODE_OK = "1";
var WARRANTY_TEXT_OK = "Có";

var WARRANTY_CODE_KO = "0";
var WARRANTY_TEXT_KO = "Không";

var SERIAL_CODE_OK = "1";
var SERIAL_TEXT_OK = "Có";

var SERIAL_CODE_KO = "0";
var SERIAL_TEXT_KO = "Không";

var TYPE_SEARCH_SERIAL_ONE= "ONE_SERIAL";
var TYPE_SEARCH_SERIAL_RANGE= "RANGE_SERIAL";

var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";

var MENU_LEVEL_ONE = 1;

var SPAN_ID_TEXT = "_SPAN_ID"; 

var FIRST_MENU = "";
var TIME_STOP_INTERVAL  = 0;
var myVar;

app_vnm.factory('formStockView', function($http, $translate) {
	return {
		/*get list trạng thái*/
		getlistStateService: function(callback) {
			var url = eim_url + "/epos/StockView/getListState";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getStockTreeService : function(data, callback) {
			var url = eim_url + "/epos/FormStockView/GetStocksTree";
			$http.post(url, data).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
					});
		},
		/*Nguồn hàng*/
		getListStaffResourceService : function(callback) {
			var url = eim_url + '/epos/StockView/getListResourceCode';
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Loại hàng hóa*/
		getListInternalStockService : function( callback) {
			var url = eim_url + '/epos/StockView/getListInternalStock';
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Tìm kiếm theo kho cửa hàng*/
		getListDataGoodsInStockService : function(data, callback) {
			var url = eim_url + '/epos/StockView/searchGoodsInStock';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Load chi tiết số lượng từng mặt hàng */
		getListDataGoodsInStockDetailService : function(data, callback) {
			var url = eim_url + '/epos/StockView/searchCountDetailGoodInStock';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Tìm kiếm theo [Kho cửa hàng và nhân viên]*/
		getListDataGoodsInStockAndStaffService : function(data, callback) {
			var url = eim_url + '/epos/StockView/searchGoodsInStockAndStaff';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Load chi tiết số lượng từng mặt hàng */
		getListDataGoodsInStockAndStaffDetailService : function(data, callback) {
			var url = eim_url + '/epos/StockView/searchCountDetailGoodInStockAndStaff';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*tìm kiếm theo 1 serial sim*/
		getListDataOneSerialService : function( data, callback) {
			var url = eim_url + '/epos/StockView/searchStockSingleSerial';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*tìm kiếm theo dải serial sim*/
		getListDataRangeSerialService : function(data, callback) {
			var url = eim_url + '/epos/StockView/searchStockStripSerial';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		//TIM KIEM SERIAL 
		getStockSerialByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormStockView/getStockSerialByConditionStockView";
			$http.post(url, data).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
					});
		},
		
		getListStaffByShopIdAndType : function(data, callback) {
			var url = eim_url + "/epos/FormStockView/getListStaffByShopAndType";
			$http.post(url, data).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
					});
		},
		/*Load danh sach hang dinh kem */
		getListGoodAttachByGood : function(data, callback) {
			var url = eim_url + '/epos/StockView/getListGoodAttachByGood';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});

app_vnm.controller('ctr-formStockView', function($scope, $rootScope,
		$translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage,
		formStockView) {
	
	window.document.title = $translate.instant('vnm.formStockView.label.stock.info');
	
	$scope.itemGoodSelected = [];
	$scope.isDisStaffCode = false;
	
	//danh sach nhan vien theo kho hang
	$scope.StaffSource = [];
	$scope.getListStaffByShopIdAndTypeFn = function(shopId) {
		overLoading("loading...");
		var dataInput = {};
		dataInput.shopId = shopId;

		$scope.ReasonSource = [];
		formStockView.getListStaffByShopIdAndType(dataInput, function(result) {
			closeOverLay();
			$scope.StaffSource = result;
			$scope.model.fromStaff = $scope.StaffSource[0];
		});
	}
	
	$scope.getListStaffByShopIdFn = function(){
		var shopId = $scope.model.stock.shopStaffId;
		$scope.getListStaffByShopIdAndTypeFn(SHOP_ID);
	}
	
	//create table mat hang
	var oTableListItem = null;
	function createDataTableGoods(dataItem) {
		oTableListItem = $('#tableListItem').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : true,
		    "info":true,
		    "select": {
		    	style: 'single',
		        info: false
		    },
            "scrollX": true,
			"columns" : [ 
	              {"mData":"goodCode", "render": function(data, type, row){
	            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"goodName", "render": function(data, type, row){
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"ggName", "render": function(data, type, row){
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"unitName", "render": function(data, type, row){
	            	  return "<div data-toggle='tooltip' class='text-wrap width-75' title='"+ data + "'>" + data + "</div>";
	 	          }},
				  {"mData":"checkSerialStr", "render": function(data, type, row){
					  if(data == null || data == undefined){
						  data = "";
					  }
					  return "<div data-toggle='tooltip' class='text-wrap width-75' title='"+ data + "'>" + data + "</div>";
	 	          }},									  
				  {"mData":"checkWarrantyStr", "render": function(data, type, row){
					  return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+ data + "'>" + data + "</div>";
	 	          }},
				  {"mData":"notes", "render": function(data, type, row){
					  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }}
	            ],
	            "createdRow": function (row, data, rowIndex) {
	            },
	            "fnInitComplete" : function(oSettings, json) {
	            	var table = $('#tableListItem').DataTable();
					table.rows( 0 ).nodes().to$().addClass( 'selected' );
					var dataRowSelected = table.row( 0 ).data();
					$scope.itemGoodSelected = dataRowSelected;
					if(dataRowSelected != undefined && dataRowSelected!= null){
						$scope.getListDataGoodsDetailFunction(dataRowSelected);
					}
				},
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sLengthMenu" : "_MENU_",
					"sSearch" : LABEL_SEARCH,
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    }
	            }
		});
				
		$('#tableListItem tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
	            $(this).removeClass('selected');
	            var rowData = oTableListItem.row( this ).data();
	            $scope.itemGoodSelected = rowData;
	            
	            oTableListItem.$('tr.selected').removeClass('selected');
	            $(this).addClass('selected');
	            $scope.getListDataGoodsDetailFunction(rowData);
	            $scope.getListAttachGood(rowData);
		 } );
		
	}
	

	//create table danh sach hang dinh kem
	function createDataTableListGoodAttachMent(dataItem) {
		oTableItem = $('#tableListItemAttach').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : true,
		    "info":true,
		    "select": {
		    	style: 'single',
		        info: false
		    },
            "scrollX": true,
			"columns" : [ 
	              {"mData":"goodCode", "render": function(data, type, row){
	            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"goodName", "render": function(data, type, row){
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"startDateTime", "render": function(data, type, row){
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"endDateTime", "render": function(data, type, row){
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }}
	            ],
	            "createdRow": function (row, data, rowIndex) {
	            },
	            "fnInitComplete" : function(oSettings, json) {

				},
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sLengthMenu" : "_MENU_",
					"sSearch" : LABEL_SEARCH,
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    }
	            }
		});		
	}
	
	//create table so luong
	$scope.itemGoodQuantitySelected = {};
	$scope.disableBtnDetail = true;
	function createDataTableQuantityItem(dataItem) {
		oTableItemQuantity = $('#tableQuantityItem').DataTable({
			"data": dataItem,
			"destroy" : true,
			"autoWidth": true,
			"bPaginate": true,
			"select": true,
			"bSort" : false,
			"paginationType" : "full_numbers",
			"columns" : [ 
	              {"mData":"stateStr", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"quantityIssue", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"quantityEffect", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"quantityRemain", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }}
	            ],
	            "fnInitComplete" : function(oSettings, json) {
	            	var table = $('#tableQuantityItem').DataTable();
					table.rows( 0 ).nodes().to$().addClass( 'selected' );
					var dataRowSelected = table.row( 0 ).data();
		            $scope.itemGoodQuantitySelected = dataRowSelected;
			        if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1' &&
			        		$scope.itemGoodQuantitySelected != null && $scope.itemGoodQuantitySelected != undefined && $scope.itemGoodQuantitySelected.quantityEffect > 0) {
			        	$scope.disableBtnDetail = false;
					} else {
						if($scope.checkStaffAvailable()){
							$scope.disableBtnDetail = false;
						}else{
							$scope.disableBtnDetail = true;
						}
					}
				},
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sLengthMenu" : "_MENU_",
					"sSearch" : LABEL_SEARCH,
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    }
	            }
		});
		
		$('#tableQuantityItem tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
            $(this).removeClass('selected');
            var rowData = oTableItemQuantity.row( this ).data();
            oTableItemQuantity.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            $scope.itemGoodQuantitySelected = rowData;
	        if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1' &&
	        		$scope.itemGoodQuantitySelected != null && $scope.itemGoodQuantitySelected != undefined && $scope.itemGoodQuantitySelected.quantityEffect > 0) {
	        	$scope.disableBtnDetail = false;
			} else {
				if($scope.checkStaffAvailable()){
					$scope.disableBtnDetail = false;
				}else{
					$scope.disableBtnDetail = true;
				}
			}
		});
	}
	
	//Tao bang theo serial don le
	function createTableDDSerialSingle(dataItem) {
		oTableDDSerialSingle = $('#tableDDSerialSingle').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : true,
		    "info":true,
		    "select": {
		    	style: 'single',
		        info: false
		    },
            "scrollX": true,
            "scrollY": 220,
			"columns" : [ 
	              {"mData":"toSerial", "render": function(data, type, row){
	            	  	return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"warrantyNo", "render": function(data, type, row){
	            	  	return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	            ],
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sLengthMenu": "_MENU_",
					"sSearch": LABEL_SEARCH,
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    }
	            }
		});
	}
	
	//tao bang theo list serial
	function createTableDDSerialStrip(dataItem) {
		oTableDDSerialStrip = $('#tableDDSerialStrip').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : true,
		    "info":true,
		    "select": {
		    	style: 'single',
		        info: false
		    },
            "scrollX": true,
            "scrollY": 230,
			"columns" : [ 
	              {"mData":"fromSerial", "render": function(data, type, row){
	            	  	return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"toSerial", "render": function(data, type, row){
	            	  	return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	 	          {"mData":"quantity", "render": function(data, type, row){
	 	        	  	return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
 	          }},
	            ],
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sLengthMenu": "_MENU_",
					"sSearch": LABEL_SEARCH,
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    }
	            }
		});
	}
	
	function initializeForm(){
		$scope.list = [];
		$scope.disableBtnDetail = true;
		
	}
	
	function resetTable(){
		$scope.list = [];
		createDataTableGoods($scope.list);
		createDataTableQuantityItem($scope.list);
	}
	
	initializeForm();
	
	//NG_REPEAT PAGING
	$scope.currentPageList = {};
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.q = '';
    
    $scope.checkStockTreeEmpty = false; 
    
    $scope.getData = function () {
        // needed for the pagination calc
        // https://docs.angularjs.org/api/ng/filter/filter
        return $filter('filter')($scope.data, $scope.q)
       /* 
         // manual filter
         // if u used this, remove the filter from html, remove above line and replace data with getData()
         
          var arr = [];
          if($scope.q == '') {
              arr = $scope.data;
          } else {
              for(var ea in $scope.data) {
                  if($scope.data[ea].indexOf($scope.q) > -1) {
                      arr.push( $scope.data[ea] );
                  }
              }
          }
          return arr;
         */
      }
    
    $scope.getData2 = function (list) {
    	return list.length;
    }
    
    $scope.numberOfPages=function(listData){
        return Math.ceil(listData.length/$scope.pageSize);                
    }
    
    for (var i=0; i<200; i++) {
        $scope.data.push("Item "+i);
    }
    //END TEST NG_REPEAT
	    
	var MESS_ERROR_SHOP_CODE_NOT_FOUND = $translate.instant('vnm.form_multi_shop_goods.mess.list.shop.item.not.found');
	
	var NUMBER_ERROR_SHOP_CODE = $translate.instant('vnm.form_multi_shop_goods.mess.list.shop.item.count.error');

	var MESS_ERROR_SHOP_DUPLICATE = $translate.instant('vnm.form_multi_shop_goods.mess.list.shop.item.duplicate');
	
	$scope.model = {};
	$scope.table = {};
	$scope.model.stockTypeSearch = TYPE_SEARCH_STOCK;
	$scope.model.serialSimTypeSearch = TYPE_SEARCH_SERIAL_ONE;
	
	$scope.rowGoodItemHighLight = SELECT_NONE_INDEX; 
	$scope.rowGoodItemDetailHighLight = SELECT_NONE_INDEX;
	
	$scope.STOCK_ID = "";
	$scope.SHOP_ID = "";
	$scope.M_PARAM03_STOCK = "-2";
	
	//data danh sách mặt hàng gán cho shop

	//shop va stock dang nhap
	var LOGGED_SHOP_ID = $localStorage.clientContext.shopId;
	var LOGGED_STOCK_ID = $localStorage.clientContext.sessionStockID;

	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			customerType : {
				required : true,
				EmptyValue : true
			}
		},
		messages : {}
	}
	
	$scope.getListInternalStockFunction = function() {
		overLoading("loading...");
		formStockView.getListInternalStockService(function(result) {
			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
			} else {
				$scope.ListInternalStockResource = result;
				$scope.model.stockInternalType = $scope.ListInternalStockResource[0].internalStockId;
			}
		});
	}
	
	$scope.getRowItemHighLightFunction = function(item) {
		$scope.rowGoodItemHighLight = item;
	}
	
	$scope.getRowItemHighLightDetailFunction = function(item) {
		$scope.rowGoodItemDetailHighLight = item;
		$scope.resetFormSearchSerialSim();
	}
	
	$scope.getListStaffResourceFunction = function() {
		overLoading("loading...");
		formStockView.getListStaffResourceService(function(result) {
			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
			} else {
				closeOverLay();
				$scope.ListStaffResource = result;
				$scope.model.resourceCode = $scope.ListStaffResource[0].code;
				myVar = setInterval(setFirstMenuSelected, 1000);
			}
		});
	}
	
	$scope.getlistStateFunction = function() {

		overLoading("loading...");
		
		formStockView.getlistStateService(function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				closeOverLay();
				$scope.StateSource = result;
			}
		});
	
	}
	
	$scope.getStockTreeFunction = function() {
		TIME_STOP_INTERVAL = 0;
		overLoading("loading...");
		
		var dataInput ={
				"shopId": $scope.shopId = StringUtilNVL($localStorage.clientContext.shop.shopId),			
			} 
		formStockView.getStockTreeService(dataInput,function(result) {

			createDataTableListGoodAttachMent([]);
			closeOverLay();
			//create table first
			resetTable();
			
			if (result.status == '0'
					&& result.status != undefined) {
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
				
				$scope.checkStockTreeEmpty = true;
	
			} else {
				closeOverLay();
				
				$scope.listStockTreeMenu = result;
				
				if($scope.listStockTreeMenu.length ==0){
					$scope.checkStockTreeEmpty = true;
				}else{
					$scope.checkStockTreeEmpty = false;
				}
				
				$scope.listMenuLevelOne = $scope.listStockTreeMenu;
				$scope.StockSource = result;
				$scope.model.stock = $scope.listMenuLevelOne[0];
				
				//khoi tao gia tri shop
				if($scope.model.stock != undefined && $scope.model.stock != null){
					$scope.model.stockCode = $scope.model.stock.code;
					$scope.model.stockName = $scope.model.stock.name;
					$scope.STOCK_ID = $scope.model.stock.stockId;
					$scope.SHOP_ID = $scope.model.stock.shopStaffId;
					$scope.getListStaffByShopIdAndTypeFn($scope.SHOP_ID);
				}
				
				if($scope.listMenuLevelOne.length > 0){
					FIRST_MENU = $scope.listMenuLevelOne[0].nodeCode;
				}
				
				$scope.tableListStockTreeMenu = new NgTableParams({}, {
					dataset : $scope.listMenuLevelOne
				});
				
				$scope.getListStaffResourceFunction();
				$scope.getListInternalStockFunction();
				$scope.getlistStateFunction();
			}
		});
	}
	
	//check disbaled khi co nhan vien
	$scope.checkStaffAvailable = function(){
		if(StringUtilNVL($scope.model.staffCode) != ''){
			return true;
		}
		return false;
	}
	
	
	$scope.getMenuFirstLevel = function(listMenu){
		var listMenuOutPut = [];
		var menuLevel = 0 ;
		
		if(listMenu.length >0){
			menuLevel = listMenu[0].level;
		}
		
		for(var i =0;i<listMenu.length; i++){
			if(listMenu[i].level < menuLevel){
				listMenuOutPut = [];
				listMenuOutPut.push(listMenu[i]);
			}else if(listMenu[i].level == menuLevel){
				listMenuOutPut.push(listMenu[i]);
			}
		}
		
		return listMenuOutPut;
	}
	
	//set hiển thị menu icon plus
	$scope.setDataMenuIconPlus = function(listMenuInput){
		for(var i = 0; i <listMenuInput.length; i++){
			
			var nodeCode = listMenuInput[i].nodeCode;
			 if($scope.checkParentHaveChildrenMenu(nodeCode)){
				 listMenuInput[i].isIconShow = true;
			  }else{
				  listMenuInput[i].isIconShow = false;
			  }			 
		}
		
		return listMenuInput;
	}
	
	//CHECK XEM MENU CO MENU CON
	$scope.checkParentHaveChildrenMenu = function(nodeCode){
		var listMenuChilDren = [];
		
		var listMenu  = $scope.listStockTreeMenu;
		
		for(var i =0;i<listMenu.length; i++){
			if(listMenu[i].parentNodeCode == nodeCode){
				listMenuChilDren.push(listMenu[i]);
			}
		}
		if(listMenuChilDren.length > 0){
			return true;
		}
		return false;
		
	}
	
	$scope.getMenuChildrenByParentCode = function(listMenu, nodeCode){
		var listMenuChilDren = [];
		
		for(var i =0;i<listMenu.length; i++){
			if(listMenu[i].parentNodeCode == nodeCode){
				listMenuChilDren.push(listMenu[i]);
			}
		}
		return listMenuChilDren;
		
	}

	////// Dialog chi tiet trong dialog xem kho
	$scope.lstTableSerials = [];
	$scope.btnDetailOnClick = function() {
		$scope.model.ddFromSerial = '';
		$scope.model.ddToSerial = '';
		$scope.model.ddQuantity = $scope.itemGoodQuantitySelected.quantityRemain;
		$('#divTableDDSerialSingle').css('display','block');
		$('#divTableDDSerialStrip').css('display','none');
		$scope.model.ddSerialTypeSearch = "single";
		$scope.lstTableSerials = [];
		createTableDDSerialSingle($scope.lstTableSerials)
		$scope.showModalFunction("modalSerialList");
	}
	
	$scope.listSubMenu =[];
	$scope.tableChildrenMenu = {};
	$scope.iconOnClick = function(varThis){
		  var parentNodeCode = varThis.id;

		  //nếu không có menu con thì return
		  if(!$scope.checkParentHaveChildrenMenu(parentNodeCode)){
			  return 0;
		  }
		  
	      var id = varThis.id+'Sub';
	      var tableName = id.replace(/[-!@#$%^&*]/g, "");

	      var listNameRepeate = "tableChildrenMenu."+tableName;
	      
	      $scope.tableChildrenMenu[tableName+''] = $scope.getMenuChildrenByParentCode($scope.listStockTreeMenu, parentNodeCode);

	      $scope.tableChildrenMenu[tableName+''] = $scope.setDataMenuIconPlus($scope.tableChildrenMenu[tableName+'']);
	      
				
	    var numberOfPage = $scope.numberOfPages($scope.tableChildrenMenu[tableName+'']);
	    $scope.currentPageList[tableName+""] = 0;
	    	    
		var liElement = 
  	    	'<div> <li '
  	    	+'ng-repeat="item in '+listNameRepeate+' | filter:q | startFrom: currentPageList.'+tableName+'*pageSize | limitTo:pageSize" '
  		  	+'class="item-1 deeper parent active"><a class="" '
  		  	+'href="#"> <span data-toggle="collapse" '
  		  	+'data-parent="#menu-group-1" id="{{item.nodeCode}}" '
  		  	+'onclick="angular.element(this).scope().iconOnClick(this);" '
  		  	+'href="#sub-item-1" class="sign"> '
  		  	+' <div ng-if="item.isIconShow"> ' 
  		  	+' <i '
  			+'class="icon-plus icon-white"></i> '
  			+'</div> '
  		  	+' <div ng-if="!item.isIconShow"> ' 
  		  	+' <i '
  			+'class="glyphicon glyphicon-none"></i> '
  			+'</div> '
  			+'</span> <span class="lbl" '
  			+'id = "{{item.nodeCode}}+'+SPAN_ID_TEXT+'" '
  			+'ng-click="clickMenuItem($event, item)">{{item.code}} {{item.name}}</span> '
  			+'</a> '
  			+' <ul class="children nav-child unstyled small collapse" '
  			+'id="{{item.nodeCode}}Sub"> </div>'
  			+'</li> '
  			+'<div ng-show="'+listNameRepeate+ '.length > pageSize " ' 
  			+'class = "divButtonPaging" >'
  			+'<button ng-disabled="currentPageList.'+tableName+' == 0" '
  			+' class = "classButtonPaging" '
  			+'ng-click="currentPageList.'+tableName+'= currentPageList.'+tableName+'-1">Previous</button> '
  			+'<span class = "numberPerPage">{{currentPageList.'+tableName+'+1}}/'+numberOfPage +'</span>'
  			+'<button '
  			+' class = "classButtonPaging" '
//  			+'ng-disabled="currentPageList.'+tableName+' >= getData2('+listNameRepeate+').length/pageSize - 1" '
  			+'ng-disabled="checkDisabledButtonNext('+listNameRepeate+',currentPageList.'+tableName+' )" '
  			+'ng-click="currentPageList.'+tableName+'=currentPageList.'+tableName+'+1">Next</button> '
  			
  			+'</div> '
  			+' </div>'
  			;
  	      
	      angular.element($("#"+id)).html($compile(
	    		  liElement
	    		  )($scope));
	      
		
//	      angular.element($("#"+id)).html($compile(
//	    	'<li class="item-2 deeper parent active"><a '
//	    	+'class="" href="#"> <span data-toggle="collapse" '
//		  	+'data-parent="#menu-group-1" href="#sub-item-2" '
//		  	+'class="sign"><i class="icon-plus icon-white"></i></span> '
//		  	+'<span class="lbl">Menu 1</span> '
//		  	+'</a></li>'
//	      )($scope));
	      
	      
//	      angular.element($("#"+id)).html($compile(menuSubItem)($scope));
//	      angular.element($("#TEST_ID")).html($compile(menuSubItem)($scope));
	      
//			$scope.table['Table1'] = new NgTableParams({}, {
//				dataset : $scope.listSubMenu,
//				page: 1,   // show first page
//		        count: 5
//			});
			
			
	      $(varThis).find('i:first').toggleClass("glyphicon glyphicon-minus");
	      $("#"+id).toggleClass("in");
	      
	}
	
	$scope.checkDisabledButtonNext = function(listData, currentPage){
		
		var numberOfPage = (listData.length/$scope.pageSize)
		if(currentPage+1 >= numberOfPage){
			return true;
		}
		return false;
	}

	$scope.clickMenuItem = function(event, item){
		$('.currentactive').removeClass('currentactive');
		$(event.target).addClass( "currentactive" );
		$scope.STOCK_ID = StringUtilNVL(item.stockId);
		$scope.SHOP_ID = StringUtilNVL(item.shopStaffId);
		
		
		initializeForm();
		resetTable();
		
//		$scope.resetFormStockGood();
//		$scope.resetFormSearchSerialSim();
		//1190 $scope.searchListGoodFunction();
		
	}
	
	
	$scope.getHTMLSubMenu = function(listSubMenu){
		var htmlSubMenu = "";
		for(var i =0; i<listSubMenu.length; i++){
			if(listSubMenu[i] !=null){
				htmlSubMenu = htmlSubMenu+ '<li class="item-2 deeper parent active"><a '
		    	+'class="" href="#"> <span data-toggle="collapse" '
			  	+'data-parent="#menu-group-1" href="#sub-item-2" '
			  	+'class="sign"><i class="icon-plus icon-white"></i></span> '
			  	+'<span class="lbl"> ' + listSubMenu[i].name + '</span> '
			  	+'</a></li> '
			}
		}
		return htmlSubMenu;
	}
	
	//search list mặt hàng theo kho cửa hàng
	$scope.getListDataGoodsInStockFunction = function(dataSearchInput){
		
		formStockView.getListDataGoodsInStockService(dataSearchInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				
				/*if(result.length == 0){
					bootbox.alert($translate.instant('vnm.formStockView.mess.search.result.emtpy'));
				}*/
				
				$scope.dataTableGoodItem = $scope.setListOutDataTableGoodItem(result);
				
				createDataTableGoods($scope.dataTableGoodItem);
			}
		});
		
	}
	
	//load chi tiết số lượng mặt hàng
	$scope.getListDataGoodsDetailFunction = function(item){
		
		$scope.getRowItemHighLightFunction(item);
		
		$scope.resetFormSearchSerialSim();
		
		var dataSearchInput = {};
		dataSearchInput.internalStockId = StringUtilNVL($scope.model.stockInternalType);
		dataSearchInput.goodsId = StringUtilNVL(item.goodId);
		dataSearchInput.stockId = StringUtilNVL($scope.STOCK_ID);
		dataSearchInput.shopId = StringUtilNVL($scope.SHOP_ID);
		
		if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK){
			$scope.getListDataGoodsInStockDetailFunction(dataSearchInput);
		} else if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK_AND_STAFF){
			$scope.getListDataGoodsInStockAndStaffDetailFunction(dataSearchInput);
		} 
	}
	
	//load danh sach hang dinh kem
	$scope.getListAttachGood = function(item){
		var dataSearchAttach = {};
		dataSearchAttach.goodId = item.goodId;
		formStockView.getListGoodAttachByGood(dataSearchAttach,function(result) {
			createDataTableListGoodAttachMent(result);
		});
	}
	
	//search chi tiết list mặt hàng theo kho cửa hàng
	$scope.getListDataGoodsInStockDetailFunction = function(dataSearchInput){
		
		formStockView.getListDataGoodsInStockDetailService(dataSearchInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				$scope.tableParamsGoodItemDetail = $scope.setListOutDataTableGoodItemDetail(result);
				createDataTableQuantityItem($scope.tableParamsGoodItemDetail);
			}
		});
	}
	
	$scope.getListDataGoodsInStockAndStaffDetailFunction = function(dataSearchInput){
		
		formStockView.getListDataGoodsInStockAndStaffDetailService(dataSearchInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				$scope.tableParamsGoodItemDetail = $scope.setListOutDataTableGoodItemDetail(result);
				createDataTableQuantityItem($scope.tableParamsGoodItemDetail);
			}
		});
	
	}
	
	
	//search list mặt hàng theo kho cửa hàng và nhân viên
	$scope.getListDataGoodsInStockAndStaffFunction = function(dataSearchInput){
		
		formStockView.getListDataGoodsInStockAndStaffService(dataSearchInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				closeOverLay();
				closeOverLay();
				/*if(result.length == 0){
					bootbox.alert($translate.instant('vnm.formStockView.mess.search.result.emtpy'));
				}*/
				
				$scope.dataTableGoodItem = $scope.setListOutDataTableGoodItem(result);
				
				createDataTableGoods($scope.dataTableGoodItem);
			}
		});
	}
	
	$scope.searchListGoodFunction = function() {
		if(StringUtilNVL($scope.model.staffId)!= ''){
			
		}else{
			if($scope.STOCK_ID == EMPTY_VALUE){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.formStockView.mess.required.stock'));
				return
			}
		}
		
		overLoading("loading...");
		
		//validate input
		 if((StringUtilNVL($scope.model.resourceCode) == EMPTY_VALUE)
				|| (StringUtilNVL($scope.model.stockInternalType) == EMPTY_VALUE)){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.formStockView.mess.search.required.good.and.resource'));
			return
		}
		
		var dataSearchInput = {};
		dataSearchInput.resourceCode = StringUtilNVL($scope.model.resourceCode);
		dataSearchInput.internalStockId = StringUtilNVL($scope.model.stockInternalType);
		
		dataSearchInput.goodCode = StringUtilNVL($scope.model.goodCode)
		dataSearchInput.goodName = StringUtilNVL($scope.model.goodName)
		//1190 fake data
		dataSearchInput.stockId = StringUtilNVL($scope.STOCK_ID);
		dataSearchInput.shopId = StringUtilNVL($scope.SHOP_ID);
		
		if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK){
			//Tim kiem theo kho cua hang
			if ($scope.model.staffCode != undefined && $scope.model.staffCode != '') {
				if(StringUtilNVL($scope.model.staffId)!= ''){
					dataSearchInput.shopId = StringUtilNVL($scope.SHOP_ID);
				}
				dataSearchInput.staffId = $scope.model.staffId;
			}else{
				dataSearchInput.staffId = "";
			}
			
			
			$scope.getListDataGoodsInStockFunction(dataSearchInput);
			
		} else if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK_AND_STAFF){
			//Tim kiem theo kho cua hang va nhan vien
			$scope.getListDataGoodsInStockAndStaffFunction(dataSearchInput);
		} 
	}
	
	
	//set data output cho danh sách mặt hàng
	$scope.setListOutDataTableGoodItem = function(listGoodItem){
		for(var i = 0; i< listGoodItem.length ; i++){
			var goodItem = listGoodItem[i];
			if( StringUtilNVL(goodItem.checkWarranty) == WARRANTY_CODE_OK){
				goodItem.checkWarrantyStr = WARRANTY_TEXT_OK;
			}
			
			if( StringUtilNVL(goodItem.checkWarranty) == WARRANTY_CODE_KO){
				goodItem.checkWarrantyStr = WARRANTY_TEXT_KO;
			}
			
			if( StringUtilNVL(goodItem.checkSerial) == SERIAL_CODE_OK){
				goodItem.checkSerialStr = SERIAL_TEXT_OK;
			}
			
			if( StringUtilNVL(goodItem.checkSerial) == SERIAL_CODE_KO){
				goodItem.checkSerialStr = SERIAL_TEXT_KO;
			}
			
		}
		return listGoodItem;
	}
	
	//set data output danh sách số lượng
	$scope.setListOutDataTableGoodItemDetail = function(listGoodItemDetail){
		for(var i =0; i<listGoodItemDetail.length;i++){
			var goodItemDetail = listGoodItemDetail[i];
			var stateId = StringUtilNVL(goodItemDetail.stateId);
			var stateStr = $scope.getTextStateByStateId($scope.StateSource, stateId);
			var id = createTimeStamp()+i;
			goodItemDetail.stateStr = stateStr;
			goodItemDetail.id = id;
		}
		return listGoodItemDetail;
	}
	
	$scope.checkShowFormDetail = function(){
		var resultCheck = false;
		if($scope.rowGoodItemDetailHighLight != SELECT_NONE_INDEX){
			if($scope.rowGoodItemDetailHighLight.quantityEffect > 0|| 
			   $scope.rowGoodItemDetailHighLight.quantityIssue  > 0|| 
			   $scope.rowGoodItemDetailHighLight.quantityRemain > 0 ){
				resultCheck = true;
			}
		}
		
		return resultCheck;
	}
	
	$scope.getTextStateByStateId = function(listState, stateId){
		var stateText = "";
		for(var i =0; i<listState.length;i++){
			if(StringUtilNVL(listState[i].stateId) == stateId){
				stateText= listState[i].name;
				break;
			}
		}
		return stateText;
	}
	$scope.loadDefauld = function() {
		overLoading("loading...");
		$scope.getStockTreeFunction();
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();
	
	$scope.stockTypeChangeFn = function(val){
		initializeForm();
		resetTable();
		if(val != EMPTY_VALUE){
			if(val == TYPE_SEARCH_STOCK){
				$scope.M_PARAM03_STOCK = "-2";
			}
			else {
				$scope.M_PARAM03_STOCK = $scope.SHOP_ID.toString();
			}
			
			//1190 $scope.searchListGoodFunction();
		}
		
		if($scope.model.stockTypeSearch == 'STOCK_AND_STAFF'){
			$scope.model.staffCode = '';
			$scope.model.staffName = '';
			$scope.isDisStaffCode = true;
		}else{
			$scope.isDisStaffCode = false;
		}
	}
	
	$scope.onChooseResourceCode = function() {
		initializeForm();
		resetTable();
		//1190 $scope.searchListGoodFunction();
	}
	
	$scope.onChooseInternalStock = function() {
		initializeForm();
		resetTable();
		//1190 $scope.searchListGoodFunction();
	}
	
	var timerid;
	//filter theo ma mh
	$("#goodCodeId").on("input", function(e) {
	  var value = $(this).val();
	  if ($(this).data("lastval") != value) {

	    $(this).data("lastval", value);
	    clearTimeout(timerid);

	    timerid = setTimeout(function() {
	    	$scope.list = [];
	    	oTableItem.$('tr.selected').removeClass('selected');
	    	createDataTableQuantityItem($scope.list);
	    	$scope.filterGoodsCode(value);
	    }, 500);
	  };
	});
	
	$scope.filterGoodsCode = function(value) {
		oTableItem.column(0).search(value).draw() ;
	}
	
	//filter heo ten mat hang
	$("#goodNameId").on("input", function(e) {
		  var value = $(this).val();
		  if ($(this).data("lastval") != value) {

		    $(this).data("lastval", value);
		    clearTimeout(timerid);

		    timerid = setTimeout(function() {
		    	$scope.list = [];
		    	oTableItem.$('tr.selected').removeClass('selected');
		    	createDataTableQuantityItem($scope.list);
		    	$scope.filterGoodsName(value);
		    }, 500);
		  };
		});
	
	$scope.filterGoodsName = function(value) {
		oTableItem.column(1).search(value).draw() ;
	}

	
	$scope.resetFormStockGood = function(){
		
//		$scope.model.resourceCode = "";
//		$scope.model.stockInternalType = "";
		$scope.model.goodCode = "";
		$scope.model.goodName = "";		
	}
	
	$scope.serialSimTypeSearchFn = function(val){
		if(val != EMPTY_VALUE){
			$scope.resetFormSearchSerialSim();
			
			
			$scope.dataTableSearchRangeSim = [];
			$scope.tableParamsSearchRangeSim = new NgTableParams({}, {
				dataset : $scope.dataTableSearchRangeSim
			});
			
			$scope.dataTableSearchOneSim = [];
			$scope.tableParamsSearchOneSim = new NgTableParams({}, {
				dataset : $scope.dataTableSearchOneSim
			});
		}
	}
	
	$scope.resetFormSearchSerialSim = function(){
		$scope.model.serialStart = "";
		$scope.model.serialEnd = "";
		$scope.model.numberOfSerial = "";
		
		$scope.dataTableSearchOneSim = [];
		$scope.tableParamsSearchOneSim = new NgTableParams({}, {
			dataset : $scope.dataTableSearchOneSim
		});
		
		$scope.dataTableSearchRangeSim = [];
		$scope.tableParamsSearchRangeSim = new NgTableParams({}, {
			dataset : $scope.dataTableSearchRangeSim
		});
	}
	
	//Tìm theo 1 serial sim 
	$scope.getListDataOneSerialFunction = function(dataSearchInput) {
		overLoading("loading...");
		formStockView.getListDataOneSerialService(dataSearchInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				closeOverLay();
				if(result.length == 0){
					bootbox.alert($translate.instant('vnm.formStockView.mess.search.result.emtpy'));
				}
				
				$scope.dataTableSearchOneSim = result;
				$scope.tableParamsSearchOneSim = new NgTableParams({}, {
					dataset : $scope.dataTableSearchOneSim
				});
			}
		});
		
	
	}
	
	//Tìm theo dải serial sim 
	$scope.getListDataRangeSerialFunction = function(dataSearchInput) {
		
		overLoading("loading...");
		
		dataSearchInput.stockId = StringUtilNVL($scope.STOCK_ID);
		dataSearchInput.goodsId = StringUtilNVL($scope.rowGoodItemHighLight.goodId);
		
		formStockView.getListDataRangeSerialService(dataSearchInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				closeOverLay();
				if(result.length == 0){
					bootbox.alert($translate.instant('vnm.formStockView.mess.search.result.emtpy'));
				}
				
				$scope.dataTableSearchRangeSim = result;
				$scope.tableParamsSearchRangeSim = new NgTableParams({}, {
					dataset : $scope.dataTableSearchRangeSim
				});
			}
		});
		
	}

	$scope.exportfileFunction = function() {
		if($scope.STOCK_ID == EMPTY_VALUE){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.formStockView.mess.required.stock'));
			return
		}
		
		if($scope.model.stockTypeSearch == TYPE_SEARCH_STOCK){
			$scope.M_PARAM03_STOCK = "-2";
		}
		else {
			$scope.M_PARAM03_STOCK = $scope.SHOP_ID.toString();
		}
		
		var ReportInput = {
				"m_param01" : $scope.SHOP_ID.toString(),
				"m_param02" : $scope.STOCK_ID.toString(),
				"m_param03" : $scope.M_PARAM03_STOCK.toString(),  
				"fileTempName" : 'ReportFormStockView',
				"fileType" : '.xlsx'
		};
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		formStockView.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				App.unblockUI("#contentMain");
				download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
			}
		});

	}
	
	$scope.searchSerialSimDetail = function() {
		
		if($scope.rowGoodItemHighLight == SELECT_NONE_INDEX){
			bootbox.alert($translate.instant('vnm.formStockView.mess.good.item.search.required'));
			return
		}
		
		if($scope.rowGoodItemDetailHighLight == SELECT_NONE_INDEX){
			bootbox.alert($translate.instant('vnm.formStockView.mess.good.item.detail.search.required'));
			return
		}
		
		
		//validate input 
		if((StringUtilNVL($scope.model.serialStart) == EMPTY_VALUE)
				|| (StringUtilNVL($scope.model.serialEnd) == EMPTY_VALUE)){
			bootbox.alert($translate.instant('vnm.formStockView.mess.search.required.serial.star.end'));
			return
		}
		
		var dataSearchInput = {};
		dataSearchInput.stateId = StringUtilNVL($scope.rowGoodItemDetailHighLight.stateId);
		
		dataSearchInput.fromSerial = StringUtilNVL($scope.model.serialStart);
		dataSearchInput.toSerial = StringUtilNVL($scope.model.serialEnd);
		dataSearchInput.maxRowNum = StringUtilNVL($scope.model.numberOfSerial);
		dataSearchInput.internalStockId = StringUtilNVL($scope.model.stockInternalType);
	
		dataSearchInput.stockId = StringUtilNVL($scope.STOCK_ID);
		dataSearchInput.goodsId = StringUtilNVL($scope.rowGoodItemHighLight.goodId);
		
		if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK){
			dataSearchInput.shopId ='';
		} else if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK_AND_STAFF){
			dataSearchInput.shopId = StringUtilNVL($scope.SHOP_ID);
		}
		
		if(StringUtilNVL($scope.model.serialSimTypeSearch) == TYPE_SEARCH_SERIAL_ONE){
			$scope.getListDataOneSerialFunction(dataSearchInput);
		} else if(StringUtilNVL($scope.model.serialSimTypeSearch) == TYPE_SEARCH_SERIAL_RANGE){
			$scope.getListDataRangeSerialFunction(dataSearchInput);
		} 
	}
	
	$scope.serialTypeChangeFn = function(item) {
		$scope.lstTableSerials = [];
		$scope.fillDataDDTableSerial($scope.lstTableSerials);
	}
	
	//Btn tim kiem click
	$scope.onddSearchSerialClick = function() {
		if ($scope.model.ddFromSerial == null || $scope.model.ddFromSerial == undefined || $scope.model.ddFromSerial == '') {
			bootbox.alert($translate.instant('vnm.stock_export_to_center.from.serial.empty'));
			return;
		}
		if ($scope.model.ddToSerial == null || $scope.model.ddToSerial == undefined || $scope.model.ddToSerial == '') {
			bootbox.alert($translate.instant('vnm.stock_export_to_center.to.serial.empty'));
			return;
		}
		var serialSearch = {
			"goodsId" : $scope.itemGoodSelected.goodId,
			"stateId" : $scope.itemGoodQuantitySelected.stateId,
			"internalStockId" : $scope.model.stockInternalType,
			"fromSerial" : $scope.model.ddFromSerial,
			"toSerial" : StringUtilNVL($scope.model.ddToSerial).toUpperCase(),
			"quantity" : $scope.model.ddQuantity,
			"isCheckQtyIssue" : "1",
			"stockId" : $localStorage.clientContext.sessionStockID,
			"typeSerialSearch" : $scope.model.ddSerialTypeSearch,
		}
		
		if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK){
			//Tim kiem theo kho cua hang
			if ($scope.model.staffCode != undefined && $scope.model.staffCode != '') {
				if(StringUtilNVL($scope.model.staffId)!= ''){
					serialSearch.shopId =StringUtilNVL($scope.SHOP_ID);
				}
				serialSearch.staffId = $scope.model.staffId;
			}else{
				serialSearch.staffId = "";
			}
		} 
		
		formStockView.getStockSerialByCondition(serialSearch, function(result) {
			if (result != null && result != undefined && result.length > 0) {
				$scope.lstTableSerials = result;
				$scope.fillDataDDTableSerial($scope.lstTableSerials);
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerial(lstNull);
				bootbox.alert($translate.instant('vnm.stock_export_to_center.error.no.data'));
			}
		});
	}
	
	//loai tim kiem
	$scope.fillDataDDTableSerial = function(dataItem) {
		if ($scope.model.ddSerialTypeSearch == 'single') {
			$('#divTableDDSerialSingle').css('display','block');
			$('#divTableDDSerialStrip').css('display','none');
			createTableDDSerialSingle(dataItem);
		} else {
			$('#divTableDDSerialSingle').css('display','none');
			$('#divTableDDSerialStrip').css('display','block');
			createTableDDSerialStrip(dataItem);
		}
		
		var quantityX = 0;
		if (dataItem != null && dataItem != undefined && dataItem.length>0) {
			for (var i=0; i<dataItem.length; i++) {
				var iQuantity = parseInt(dataItem[i].quantity == '' ? '0' : dataItem[i].quantity);
				quantityX += iQuantity;
			}
		}
		$scope.model.ddTotal = quantityX;
	}
	
	// BEGIN REVIEW BLOCK
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
			
			$("#tblListShop_filter input").focus();
		});
	}
	
	$('#modalSerialList').on('shown.bs.modal', function (e) {
        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });

	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}

	// END BLOCK DETAIL SECOND

	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;

	$.validator.addMethod("EmptyValue", function(value, element) {
		if (value == undefined || value == "")
			return false;
		if ($.trim(value) == "")
			return false;
		return true;
	}, "");
	
	var uploaderListShop = $scope.uploaderListShop = new FileUploader({
		url: eim_url+'/epos/Category/getListShopFromTemplate'
	});
	
//	uploaderListShop.queueLimit = 1;
    
	$scope.dataListShopTemplate = [];
	
	$scope.fileNameListProvinceShop = "";
	
	function setFirstMenuSelected() {
		TIME_STOP_INTERVAL = TIME_STOP_INTERVAL + 1000;
		
		$("#"+FIRST_MENU+SPAN_ID_TEXT).click();
		if(FIRST_MENU != EMPTY_VALUE || TIME_STOP_INTERVAL >3000){
			 clearInterval(myVar);
		}
	}

	//BEGIN F9 STOCK
	// create table danh muc shop
	function createDataTableListShop(dataItem) {
		oTableFListShop = $('#tblListShop').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"order" : [],
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "250",
			"columns" : [ {
				"mData" : "code",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			} ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sSearch" : LABEL_SEARCH,
				"sLengthMenu" : "_MENU_",
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"oSearch": {"sSearch": $scope.initSearchShop},
			"createdRow" : function(row, data, rowIndex) {
				if ($scope.itemSelectedListShop != undefined && $scope.itemSelectedListShop != null) {
					if ($scope.itemSelectedListShop.code == data.code) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
			}
		});

		$('#tblListShop tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListShop.row(this).data();
			oTableFListShop.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListShop = rowData;
		});
	}
	
	//danh muc nhan vien
	function createDataTableListStaff(dataItem) {
		oTableFListStaff = $('#tblListStaff').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"order" : [],
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "250",
			"columns" : [ {
				"mData" : "code",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			} ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sSearch" : LABEL_SEARCH,
				"sLengthMenu" : "_MENU_",
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"oSearch": {"sSearch": $scope.initSearchShop},
			"createdRow" : function(row, data, rowIndex) {
				if ($scope.itemSelectedListShop != undefined && $scope.itemSelectedListShop != null) {
					if ($scope.itemSelectedListShop.code == data.code) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
			}
		});

		$('#tblListStaff tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListStaff.row(this).data();
			oTableFListStaff.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListShop = rowData;
		});
	}
	
	//shop code
	$scope.onblurShopCode = function() {
		$scope.nameFnOKF9 = 'updateFormStock';
		$scope.lstShops = $scope.StockSource;
		if ($scope.model.stockCode != undefined && $scope.model.stockCode != '') {
			var isSearch = false;
			var isFirst = true;
			for (var i=0; i<$scope.lstShops.length; i++) {
				if ($scope.lstShops[i].code.toUpperCase() == $scope.model.stockCode.trim().toUpperCase()) {
					$scope.itemSelectedListShop = $scope.lstShops[i];
					$scope.updateFormShop();
					isSearch = true;
					break;
				} else if (isFirst && ($scope.lstShops[i].code.toUpperCase().includes($scope.model.stockCode.trim().toUpperCase()) ||
								$scope.lstShops[i].name.toUpperCase().includes($scope.model.stockCode.trim().toUpperCase()))) {
					$scope.itemSelectedListShop = $scope.lstShops[i];
					isFirst = false;
				}
			}
			if (!isSearch) {
				$scope.initSearchShop = $scope.model.stockCode;
				$scope.model.stockCode = '';
				$scope.model.stockName = '';
				
				$scope.showModalFunction("modalListShop");
				createDataTableListShop($scope.lstShops);
			}
		}else{
			$scope.itemSelectedListShop = $scope.lstShops[0];
			$scope.model.stockCode = '';
			$scope.model.stockName = '';
			
			
			$scope.initSearchShop = $scope.model.stockCode;
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.lstShops);
		}
	}
	
	$scope.dialogListShopActionBack = function() {
		$scope.hideModalFunction("modalListShop");
		if ($scope.model.fShopName != undefined && $scope.model.fShopName.trim() == '') {
			angular.element(document.getElementById("fShopCode")).focus();
		}
	}
	
	//BTN BO qua danh sach nhan vien
	$scope.dialogListStaffActionBack = function() {
		$scope.hideModalFunction("modalListStaff");
	}
	
	
   $scope.updateFormShop = function (){
	    var name = $scope.nameFnOKF9;
        if(angular.isFunction($scope[name]))
           $scope[name]();
    }
   
	
   //f9 stock
   $("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		
		$scope.nameFnOKF9 = 'updateFormStock';
		if (code == '120') {
			$(this).blur();
		}
		
	    if (e.type == 'blur') {
	    	$scope.onblurShopCode();
	    }
	});
   
   //f9 nhan vien
   $("#fStaffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		
		$scope.nameFnOKF9 = 'updateFormStaff';
		if (code == '120') {
			$(this).blur();
		}
		
	    if (e.type == 'blur') {
	    	$scope.onblurStaffCode();
	    }
	});
   
	$scope.updateFormStock = function() {
		$scope.model.stock = $scope.itemSelectedListShop;
		$scope.model.stockCode = $scope.itemSelectedListShop.code;
		$scope.model.fShopStockId = $scope.itemSelectedListShop.stockId;
		
		$scope.STOCK_ID = StringUtilNVL($scope.itemSelectedListShop.stockId);
		$scope.SHOP_ID = StringUtilNVL($scope.itemSelectedListShop.shopStaffId);
		
		$scope.getListStaffByShopIdAndTypeFn($scope.SHOP_ID);
		
		$scope.model.stockName = $scope.itemSelectedListShop.name;
		document.getElementById('fShopCode').title = $scope.model.toStockCode;
		document.getElementById('fShopName').title = $scope.model.toStockName;
		$scope.hideModalFunction("modalListShop");
	}
	//nhan vien
	$scope.onblurStaffCode = function() {
		$scope.nameFnOKF9 = 'updateFormStaff';
		$scope.lstShops = $scope.StaffSource;
		if ($scope.model.staffCode != undefined && $scope.model.staffCode != '') {
			var isSearch = false;
			var isFirst = true;
			for (var i=0; i<$scope.lstShops.length; i++) {
				if ($scope.lstShops[i].code.toUpperCase() == $scope.model.staffCode.trim().toUpperCase()) {
					$scope.itemSelectedListShop = $scope.lstShops[i];
					$scope.updateFormShop();
					isSearch = true;
					break;
				} else if (isFirst && ($scope.lstShops[i].code.toUpperCase().includes($scope.model.staffCode.trim().toUpperCase()) ||
								$scope.lstShops[i].name.toUpperCase().includes($scope.model.staffCode.trim().toUpperCase()))) {
					$scope.itemSelectedListShop = $scope.lstShops[i];
					isFirst = false;
				}
			}
			if (!isSearch) {
				$scope.initSearchShop = $scope.model.staffCode;
				$scope.model.staffCode = '';
				$scope.model.staffName = '';
				$scope.showModalFunction("modalListStaff");
				createDataTableListStaff($scope.lstShops);
			}
		}else{
			$scope.initSearchShop = $scope.model.staffCode;
			$scope.model.staffCode = '';
			$scope.model.staffName = '';
			$scope.itemSelectedListShop = $scope.lstShops[0];
			$scope.showModalFunction("modalListStaff");
			createDataTableListStaff($scope.lstShops);
		}
	}
	//update nhan vien
	$scope.updateFormStaff = function() {
		$scope.model.staff = $scope.itemSelectedListShop;
		$scope.model.staffCode = $scope.itemSelectedListShop.code;
		$scope.model.staffName = $scope.itemSelectedListShop.name;
		$scope.model.staffId = $scope.itemSelectedListShop.staffId;
		
		document.getElementById('fShopCode').title = $scope.model.staffCode;
		document.getElementById('fShopName').title = $scope.model.staffName;
		$scope.hideModalFunction("modalListStaff");
	}
});

app_vnm.filter('startFrom', function() {
  return function(input, start) {
      start = +start; //parse to int
      return input.slice(start);
  }
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

