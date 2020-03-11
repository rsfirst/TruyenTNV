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

app_vnm.factory('listMultiShopGoods', function($http, $translate) {
	return {
		/*get list trạng thái*/
		getlistStateService: function(callback) {
			var url = eim_url + "/bs/StockView/getListState";
			$http.get(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getStockTreeService : function(data, callback) {
			var url = eim_url + "/bs/StockView/getStocksTree?shopId=" + data;
			$http.get(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Nguồn hàng*/
		getListStaffResourceService : function(callback) {
			var url = eim_url + '/bs/StockView/getListResourceCode';
			$http.get(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Loại hàng hóa*/
		getListInternalStockService : function( callback) {
			var url = eim_url + '/bs/StockView/getListInternalStock';
			$http.get(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Tìm kiếm theo kho cửa hàng*/
		getListDataGoodsInStockService : function(data, callback) {
			var url = eim_url + '/bs/StockView/searchGoodsInStock';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Load chi tiết số lượng từng mặt hàng */
		getListDataGoodsInStockDetailService : function(data, callback) {
			var url = eim_url + '/bs/StockView/searchCountDetailGoodInStock';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Tìm kiếm theo [Kho cửa hàng và nhân viên]*/
		getListDataGoodsInStockAndStaffService : function(data, callback) {
			var url = eim_url + '/bs/StockView/searchGoodsInStockAndStaff';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*Load chi tiết số lượng từng mặt hàng */
		getListDataGoodsInStockAndStaffDetailService : function(data, callback) {
			var url = eim_url + '/bs/StockView/searchCountDetailGoodInStockAndStaff';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*tìm kiếm theo 1 serial sim*/
		getListDataOneSerialService : function( data, callback) {
			var url = eim_url + '/bs/StockView/searchStockSingleSerial';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		/*tìm kiếm theo dải serial sim*/
		getListDataRangeSerialService : function(data, callback) {
			var url = eim_url + '/bs/StockView/searchStockStripSerial';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctr-listMultiShopGoods', function($scope, $rootScope,
		$translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage,
		listMultiShopGoods) {
	
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

	var SHOP_ID = $localStorage.clientContext.shopId;

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
		listMultiShopGoods.getListInternalStockService(function(result) {
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
		listMultiShopGoods.getListStaffResourceService(function(result) {
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
			}
		});
	}
	
	$scope.getlistStateFunction = function() {

		overLoading("loading...");
		
		listMultiShopGoods.getlistStateService(function(result) {

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
		
		var shopIdInput = $scope.shopId = StringUtilNVL($localStorage.clientContext.shop.shopId);
		listMultiShopGoods.getStockTreeService(shopIdInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
				
				$scope.checkStockTreeEmpty = true;
	
			} else {
				closeOverLay();
				
				$scope.listStockTreeMenu = result;
//				$scope.listStockTreeMenu = $scope.fakeMenu(result);
				
				if($scope.listStockTreeMenu.length ==0){
					$scope.checkStockTreeEmpty = true;
				}else{
					$scope.checkStockTreeEmpty = false;
				}
				console.log("$scope.checkStockTreeEmpty = "+$scope.checkStockTreeEmpty);
				
				$scope.listMenuLevelOne = $scope.getMenuFirstLevel($scope.listStockTreeMenu);
				$scope.listMenuLevelOne = $scope.setDataMenuIconPlus($scope.listMenuLevelOne);
				
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
	
	
	//tạo fake menu nhiều lớp
	$scope.fakeMenu = function(listMenu){
		for(var i =0;i<listMenu.length;i++){
			listMenu[i].name = i +"-"+ listMenu[i].name+"";
			if(i<100){
				listMenu[i].level = 1;
			} else if( i<200 && i>100){
				listMenu[i].level = 2;
				if(i<130 && i>100){
					listMenu[i].parentNodeCode = listMenu[0].nodeCode;
				}
				if(i<160 && i>130){
					listMenu[i].parentNodeCode = listMenu[1].nodeCode;
				}
				if(i<200 && i>160){
					listMenu[i].parentNodeCode = listMenu[2].nodeCode;
				}
			}else if( i<300 && i>200){
				listMenu[i].level = 3;
				if(i<230 && i>200){
					listMenu[i].parentNodeCode = listMenu[131].nodeCode;
				}
				if(i<260 && i>230){
					listMenu[i].parentNodeCode = listMenu[132].nodeCode;
				}
				if(i<300 && i>260){
					listMenu[i].parentNodeCode = listMenu[133].nodeCode;
				}
				
			}else if( i<500 && i>400){
				listMenu[i].level = 4;
				if(i<430 && i>400){
					listMenu[i].parentNodeCode = listMenu[201].nodeCode;
				}
				if(i<460 && i>430){
					listMenu[i].parentNodeCode = listMenu[202].nodeCode;
				}
				if(i<500 && i>460){
					listMenu[i].parentNodeCode = listMenu[203].nodeCode;
				}
			}else if( i<600 && i>500){
				listMenu[i].level = 5;
				listMenu[i].parentNodeCode = listMenu[401].nodeCode;
			}
		}
		
		return listMenu;
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

//    $(document).on("click","#left ul.nav li.parent > a > span.sign", function(){
//        $(this).find('i:first').toggleClass("glyphicon glyphicon-minus");      
//    }); 
    
    // Open Le current menu
//    $("#left ul.nav li.parent.active > a > span.sign").find('i:first').addClass("icon-minus");
//    $("#left ul.nav li.current").parents('ul.children').addClass("in");
	
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
		
		$scope.rowGoodItemHighLight = SELECT_NONE_INDEX; 
		$scope.rowGoodItemDetailHighLight = SELECT_NONE_INDEX;
		
		$scope.resetFormStockGood();
		$scope.resetFormSearchSerialSim();
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
		
		listMultiShopGoods.getListDataGoodsInStockService(dataSearchInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				
				if(result.length == 0){
					bootbox.alert($translate.instant('vnm.form_stock_information.mess.search.result.emtpy'));
				}
				
				$scope.dataTableGoodItem = $scope.setListOutDataTableGoodItem(result);
				$scope.tableParamsGoodItem = new NgTableParams({}, {
					dataset : $scope.dataTableGoodItem
				});
				
			}
		});
		
	}
	
	//load chi tiết số lượng mặt hàng
	$scope.getListDataGoodsDetailFunction = function(item){
		
		$scope.getRowItemHighLightFunction(item);
		
		$scope.resetFormSearchSerialSim();
		
		$scope.dataTableGoodItemDetail = [];
		$scope.tableParamsGoodItemDetail = new NgTableParams({}, {
			dataset : $scope.dataTableGoodItemDetail
		});
		
		var dataSearchInput = {};
		dataSearchInput.internalStockId = StringUtilNVL($scope.model.stockInternalType);
		dataSearchInput.goodsId = StringUtilNVL(item.goodId)
		dataSearchInput.stockId = StringUtilNVL($scope.STOCK_ID);
		dataSearchInput.shopId = StringUtilNVL($scope.SHOP_ID);
		
		if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK){
			$scope.getListDataGoodsInStockDetailFunction(dataSearchInput);
		} else if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK_AND_STAFF){
			$scope.getListDataGoodsInStockAndStaffDetailFunction(dataSearchInput);
		} 
	}
	

	
	//search chi tiết list mặt hàng theo kho cửa hàng
	$scope.getListDataGoodsInStockDetailFunction = function(dataSearchInput){

		
		listMultiShopGoods.getListDataGoodsInStockDetailService(dataSearchInput,function(result) {

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
				$scope.tableParamsGoodItemDetail = new NgTableParams({}, {
					dataset : $scope.tableParamsGoodItemDetail
				});
				
			}
		});
	}
	
	$scope.getListDataGoodsInStockAndStaffDetailFunction = function(dataSearchInput){
		
		listMultiShopGoods.getListDataGoodsInStockAndStaffDetailService(dataSearchInput,function(result) {

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
				$scope.tableParamsGoodItemDetail = new NgTableParams({}, {
					dataset : $scope.tableParamsGoodItemDetail
				});
				
			}
		});
	
	}
	
	
	//search list mặt hàng theo kho cửa hàng và nhân viên
	$scope.getListDataGoodsInStockAndStaffFunction = function(dataSearchInput){
		
		listMultiShopGoods.getListDataGoodsInStockAndStaffService(dataSearchInput,function(result) {

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
				if(result.length == 0){
					bootbox.alert($translate.instant('vnm.form_stock_information.mess.search.result.emtpy'));
				}
				
				$scope.dataTableGoodItem = $scope.setListOutDataTableGoodItem(result);
				$scope.tableParamsGoodItem = new NgTableParams({}, {
					dataset : $scope.dataTableGoodItem
				});
			}
		});
	}
	
	$scope.searchListGoodFunction = function() {
		if($scope.STOCK_ID == EMPTY_VALUE){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_stock_information.mess.required.stock'));
			return
		}
		$scope.rowGoodItemHighLight = SELECT_NONE_INDEX; 
		$scope.rowGoodItemDetailHighLight = SELECT_NONE_INDEX;
		overLoading("loading...");
		
		$scope.dataTableGoodItem = [];
		$scope.tableParamsGoodItem = new NgTableParams({}, {
			dataset : $scope.dataTableGoodItem
		});
		
		$scope.dataTableGoodItemDetail = [];
		$scope.tableParamsGoodItemDetail = new NgTableParams({}, {
			dataset : $scope.dataTableGoodItemDetail
		});
		
		//validate input 
		if((StringUtilNVL($scope.model.resourceCode) == EMPTY_VALUE)
				|| (StringUtilNVL($scope.model.stockInternalType) == EMPTY_VALUE)){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_stock_information.mess.search.required.good.and.resource'));
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
			$scope.getListDataGoodsInStockFunction(dataSearchInput);
		} else if(StringUtilNVL($scope.model.stockTypeSearch) == TYPE_SEARCH_STOCK_AND_STAFF){
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
			
			if( StringUtilNVL(goodItem.checkSerial) == SERIAL_CODE_OK){
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
//		$scope.getListStaffResourceFunction();
//		$scope.getListInternalStockFunction();
//		$scope.getlistStateFunction();
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();
	
	$scope.stockTypeChangeFn = function(val){
		if(val != EMPTY_VALUE){
			$scope.resetFormStockGood();
			$scope.resetFormSearchSerialSim();
			
			if(val == TYPE_SEARCH_STOCK){
				$scope.M_PARAM03_STOCK = "-2";
			}
			else {
				$scope.M_PARAM03_STOCK = $scope.SHOP_ID.toString();
			}
		}
	}
	
	$scope.resetFormStockGood = function(){
		
//		$scope.model.resourceCode = "";
//		$scope.model.stockInternalType = "";
		$scope.model.goodCode = "";
		$scope.model.goodName = "";
		
		$scope.dataTableGoodItem = [];
		$scope.tableParamsGoodItem = new NgTableParams({}, {
			dataset : $scope.dataTableGoodItem
		});
		
		$scope.dataTableGoodItemDetail = [];
		$scope.tableParamsGoodItemDetail = new NgTableParams({}, {
			dataset : $scope.dataTableGoodItemDetail
		});
		
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
		listMultiShopGoods.getListDataOneSerialService(dataSearchInput,function(result) {

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
					bootbox.alert($translate.instant('vnm.form_stock_information.mess.search.result.emtpy'));
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
		
		listMultiShopGoods.getListDataRangeSerialService(dataSearchInput,function(result) {

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
					bootbox.alert($translate.instant('vnm.form_stock_information.mess.search.result.emtpy'));
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
			bootbox.alert($translate.instant('vnm.form_stock_information.mess.required.stock'));
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
				"fileTempName" : 'report_stock_serial_BS',
				"fileType" : '.xlsx'
		};
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		listMultiShopGoods.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
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
			bootbox.alert($translate.instant('vnm.form_stock_information.mess.good.item.search.required'));
			return
		}
		
		if($scope.rowGoodItemDetailHighLight == SELECT_NONE_INDEX){
			bootbox.alert($translate.instant('vnm.form_stock_information.mess.good.item.detail.search.required'));
			return
		}
		
		
		//validate input 
		if((StringUtilNVL($scope.model.serialStart) == EMPTY_VALUE)
				|| (StringUtilNVL($scope.model.serialEnd) == EMPTY_VALUE)){
			bootbox.alert($translate.instant('vnm.form_stock_information.mess.search.required.serial.star.end'));
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
		
	// BEGIN REVIEW BLOCK
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
	}

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
		url: eim_url+'/bs/Category/getListShopFromTemplate'
	});
	
//	uploaderListShop.queueLimit = 1;
    
	$scope.dataListShopTemplate = [];
	
	$scope.fileNameListProvinceShop = "";
	
	var myVar = setInterval(setFirstMenuSelected, 1000);

	function setFirstMenuSelected() {
		TIME_STOP_INTERVAL = TIME_STOP_INTERVAL + 1000;
		
		$("#"+FIRST_MENU+SPAN_ID_TEXT).click();
		if(FIRST_MENU != EMPTY_VALUE || TIME_STOP_INTERVAL >3000){
			 clearInterval(myVar);
		}
	}

	
});

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
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

