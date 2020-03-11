// shopType : Loại cửa hàng, Status : Trạng thái , Agent : Kho nhập , Reason: Lý do, ResourceCode: Nguồn hàng
var ROW_NOT_SELECTED=-1;

var EXPORT_PARTNER = "ExportPartner";

app_vnm.factory('fctRenewWarrantyNumber', function($http, $translate) {
	return {
		getResourceCode: function(callback){
			var url = eim_url + "/epos/inventory/ExportToDealer/getResourceCode";
			$http.post(url).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
					});
			
		},
		getInternalStock: function(callback){
			var url = eim_url + "/epos/inventory/ExportToDealer/getInternalStock";
			$http.post(url).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
					});
			
		},
		getLovReceiverAgent : function (data,callback){
			var url=eim_url+"/epos/inventory/RenewWarrantyNumber/getLowReceiverAgent";
			$http.post(url,data).success(callback)
			.error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status+" "+ $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReason :function(callback){
			var url=eim_url+"/epos/inventory/RenewWarrantyNumber/getReason";
			$http.post(url).success(callback)
			.error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status+ " "+ $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getLovStaff :function (data,callback){
			var url=eim_url+"/epos/inventory/RenewWarrantyNumber/getLowStaff";
			$http.post(url,data).success(callback)
			.error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status+""+$translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getWarrantyActionList :function (data,callback){
			var url=eim_url+"/epos/inventory/RenewWarrantyNumber/searchWarrantyActionList";
			$http.post(url,data).success(callback)
			.error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status+""+$translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getRenewWarrantyNumberStateList: function(callback){
			var url=eim_url+"/epos/inventory/RenewWarrantyNumber/getStateList";
			$http.post(url).success(callback)
			.error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status+ " "+ $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getRenewWarrantyNumberGoodList:function(callback){
			var url=eim_url+"/epos/inventory/RenewWarrantyNumber/getGoodList";
			$http.post(url).success(callback)
			.error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status+ " "+ $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getTemplateWarrantyValue : function(data, callback){
			var url=eim_url+ "/epos/inventory/RenewWarrantyNumber/getTeamplateWarantyValue";
			$http.post(url,data).success(callback).error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status + " " +$translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
				
			});
			
		},
		validateInput :function(data,callback){
			var url=eim_url+ "/epos/inventory/RenewWarrantyNumber/validateInput";
			$http.post(url,data).success(callback).error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status + " " +$translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
				
			});
		},
		
		RenewWarranty :function(data,callback){
			var url=eim_url+ "/epos/inventory/RenewWarrantyNumber/renewWarrantySuccess";
			$http.post(url,data).success(callback).error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status + " " +$translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
				
			});
		},
		reGetWarrantyActionList :function (data,callback){
			var url=eim_url+"/epos/inventory/RenewWarrantyNumber/insertItemListWarranty";
			$http.post(url,data).success(callback)
			.error(function(data,status,header,config){
				closeOverLay();
				bootboxAlertFocus(status+""+$translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		
		
		
		//BÙI NGỌC DUY
	

		onOkAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/pnlTransactionGoodsDetail/onAction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getVctResourceList : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getVctResourceList";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getInternalStock : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getInternalStock";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getExistedStates : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedStates";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getExistedGoodsGroups : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoodsGroups";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getExistedGoods : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getStocksTree : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStocksTree";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getGoodsListByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsListByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getGoodsQuantityByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsQuantityByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getStockSerialByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/RennewWarrantyNumber/getListSerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		generateNewWarrantyNo : function(data, callback) {
			var url = eim_url + "/epos/inventory/RenewWarrantyNumber/generateWarrantyNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
				$("#modalAddSerial").css('zIndex', zIndexDialogModal);
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getSerialListInStock : function(data, callback) {
			var url = eim_url + "/epos/inventory/RenewWarrantyNumber/getFile";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		}

		

	}
		
})
var ROW_NOT_SELECTED=-1;
app_vnm.controller('RenewWarrantyNumberController',
			function($scope, $rootScope, $translate, $compile, $timeout,
					$uibModal, $location, $window, FileUploader, $filter,
					$http, NgTableParams, $localStorage, fctRenewWarrantyNumber) {
	
	$scope.disableDetails=true;
	$scope.limitCbb=10;
	$scope.model={}
	$scope.listLowAgent=[];
	$scope.listReceiverAgent=[];
	$scope.listReason=[];
	$scope.disabledLowAgent=true;
	$scope.listLowStaff=[];
	$scope.showButtonSupplyAndPrint=true;
	$scope.disablePrint=true;
	$scope.disableAdd=true;

	var momentObj = moment(new Date());
	var momentString = momentObj.format('DD/MM/YYYY');
	$scope.model.dtFromDate = momentString;
	
	
	$scope.listStatesList=[];
	$scope.lstGoodsForm=[];
	$scope.listGoodsList=[];

	$scope.disableAdd=true;
	$scope.showBtnAddEditDelete=true;
	$scope.isDisabledBtnAdd=true;
	$scope.isDisabledBtnEdit=true;
	$scope.isDisabledBtnDelete=true;
	
	//Button xem chi tiet
	$scope.disableAddViewDetail=true;
	//Button xem kho
	$scope.disabledViewStock=true;
	$scope.disableDetail=true;
	
	
	//BÙi ĐÌnh Đạt

	//load StateList
	$scope.getRenewWarrantyNumberStateList=function()
	{
	
		fctRenewWarrantyNumber.getRenewWarrantyNumberStateList(function(result){
			if (result !=null && result.length>0)
			{
				$scope.listStatesList= result;
				$scope.model.statesForm=$scope.listStatesList[0];
				$scope.getLovReceiverAgent();
			}
		});
	};
	//load  GoodsList 
	$scope.getRenewWarrantyNumberGoodList=function()
	{
		fctRenewWarrantyNumber.getRenewWarrantyNumberGoodList(function(result){
			overLoading();
			if (result !=null && result.length>0)
			{
				//$scope.lstGoodsForm= result;
				
				$scope.getRenewWarrantyNumberStateList();
				closeOverLay();
				
			}
		});
	};
	$scope.listGoodsList=$scope.lstGoodsForm;
	//load GoodsList and StateList
	$scope.getGoodListAndStateList=function()
	{
		overLoading();
		$scope.getRenewWarrantyNumberGoodList();
	}

	//load combobox
	//Đàm Nguyên Hùng
	$scope.lstGoodsForm=[];
	$scope.loadLstGoodsForm = function() {
	 var x=$scope.model.resourceCodeForm;
		var resourceCodeForm = {
			"code" :$scope.model.resourceCodeForm.code,
			"name" : "",
			"formName":"NewWarrantyNo"
		}
		fctRenewWarrantyNumber.getExistedGoods(resourceCodeForm, function(result) {
			if (result != null && result != undefined && result.status != '0' && result.length > 0) {
				$scope.lstGoodsForm = result;
				 $scope.getRenewWarrantyNumberStateList();
			}
		});
	}
	$scope.onChooseResourceCodeForm = function() {
		$scope.loadLstGoodsForm();
	}
	//Bùi ĐÌnh Đạt
	 $scope.getResourceCode= function()
	    {
		fctRenewWarrantyNumber.getResourceCode(function(result){
	    		if (result !=null && result.length>0)
	    			{
	    				$scope.listResourceCode= result;
	    				$scope.model.resourceCodeForm=$scope.listResourceCode[0];
	    				$scope.resourceCode=$scope.listResourceCode[0].code;
	    				$scope.loadLstGoodsForm();
	    			}
	    	});
	    };
	  
	    $scope.getInternalStock= function ()
	    {
	    	fctRenewWarrantyNumber.getInternalStock(function(result){
	    		if (result !=null && result.length>0)
    			{
	    			$scope.listInternalStock= result;
		    		$scope.model.stockInternalTypeForm=$scope.listInternalStock[0];
		    		$scope.getResourceCode();
    			}
	    	
	    		
	    	});
	    };
	    $scope.getReason=function()
	    {
	    	fctRenewWarrantyNumber.getReason(function(result){
	    		if (result !=null && result.length>0)
    			{
	    			$scope.listReason= result;
		    		$scope.model.lowReason=$scope.listReason[0];
		    		 $scope.getInternalStock();
    			}
	    	
	    		
	    	});
	    	
	    };
	   
		$scope.getLovReceiverAgent=function(){
		   var data=$localStorage.clientContext.shop.shopId;
		
		  
			fctRenewWarrantyNumber.getLovReceiverAgent(data,function(result){
				if (result !=null && result.length>0)
    			{
					$scope.listReceiverAgent=result;
				//	$scope.model.lowReceiverAgent=$scope.listReceiverAgent[0];
					$scope.model.receiverAgentCode=$scope.listReceiverAgent[0].code;
					$scope.model.receiverAgentName = $scope.listReceiverAgent[0].name;
					$scope.model.receiverAgentStockId = $scope.listReceiverAgent[0].stockId;
					
				

					
    			}
	    	
				
			});
		};
		
		// COMMBOBOX UPDATE
		$("#fShopCode").keyup(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == '120') {
				$scope.showModalFunction("modalListShop");
				createDataTableListShop($scope.listReceiverAgent);
			} else {
				if ($scope.model.receiverAgentCode == '') {
					$scope.model.receiverAgentName = '';
					$scope.model.receiverAgentStockId = '';
				}
				if ($scope.model.receiverAgentCode!='' || $scope.model.receiverAgentCode!=null)
					{
						for(var i=0; i<$scope.listReceiverAgent.length; i++)
							{
								if ($scope.model.receiverAgentCode.toUpperCase()==$scope.listReceiverAgent[i].code.toUpperCase())
									{
									$scope.model.receiverAgentCode=$scope.listReceiverAgent[i].code;
									$scope.model.receiverAgentName = $scope.listReceiverAgent[i].name;
									$scope.model.receiverAgentStockId = $scope.listReceiverAgent[i].stockId;
									break;
									}
							}
					}
			}
		});
		// create table mat hang
		function createDataTableListShop(dataItem) {
			oTableFListSerial = $('#tblListShop').DataTable({
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
						return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
					}
				}, {
					"mData" : "name",
					"render" : function(data, type, row) {
						return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
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
				}
			});

			$('#tblListShop tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
				$(this).removeClass('selected');
				var rowData = oTableFListSerial.row(this).data();
				oTableFListSerial.$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
				$scope.itemSelectedListShop = rowData;
			});
		}

		$scope.updateFormShop = function() {
			$scope.model.receiverAgentCode=$scope.itemSelectedListShop.code;
			$scope.model.receiverAgentName = $scope.itemSelectedListShop.name;
			$scope.model.receiverAgentStockId = $scope.itemSelectedListShop.stockId;
			// $scope.model.agentName = $scope.itemSelectedListShop.name;
			document.getElementById('fShopCode').title = $scope.model.receiverAgentCode;
			document.getElementById('fShopName').title = $scope.model.receiverAgentName;
			$scope.hideModalFunction("modalListShop");

		}
		$scope.dialogListShopActionBack = function() {
			$scope.hideModalFunction("modalListShop");
		}
		// END COMBOBOX UPDATE
		
		 $scope.getLovStaff=function()
		    {
		    	var data=$localStorage.clientContext.shop.shopId;
		    	fctRenewWarrantyNumber.getLovStaff(data,function(result){
					if (result !=null && result.length>0)
	    			{
						$scope.listLowStaff=result;
						//$scope.listLowStaff.unshift({staffId :null, code:"",name:"Tất cả-",value:null});
						
						//$scope.model.lowStaff=$scope.listLowStaff[0];
						$scope.getReason();
						
						closeOverLay();
						var isNull=[];
						createDataTableOne(isNull); 
						
						createDataTableTwo(isNull);

						
	    			}
		    	
		    });
		    }
		 
		//COMMBOBOX STAFF UPDATE
			$("#fStaffCode").keyup(function(e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				if (code == '120') {
					$scope.showModalFunction("modalListStaff");
					createDataTableListStaff($scope.listLowStaff);
					

					

				}else {
					if($scope.model.staffCode == '')
						{
						$scope.model.staffName2 = '';
						$scope.model.staffId = '';
						$scope.model.staffCode = '';
						$scope.model.staffValue='';
						}
					if ($scope.model.staffCode!='' || $scope.model.staffCode!=null)
					{
						for(var i=0; i<$scope.listLowStaff.length; i++)
							{
								if ($scope.model.staffCode.toUpperCase()==$scope.listLowStaff[i].code.toUpperCase())
									{
									$scope.model.staffCode = $scope.listLowStaff[i].code;
									$scope.model.staffName2 = $scope.listLowStaff[i].name;
									$scope.model.staffId = $scope.listLowStaff[i].staffId;
									$scope.model.staffValue=$scope.listLowStaff[i].value;
									break;
									}
							}
					}
				}
			});
			// create table mat hang
			function createDataTableListStaff(dataItem) {
				oTableFListSerial2 = $('#tblListStaff').DataTable({
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
					"order" :[],
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
							return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
						}
					}, {
						"mData" : "name",
						"render" : function(data, type, row) {
							return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
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
					}
				});

				$('#tblListStaff tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
					$(this).removeClass('selected');
					var rowData = oTableFListSerial2.row(this).data();
					oTableFListSerial2.$('tr.selected').removeClass('selected');
					$(this).addClass('selected');
					$scope.itemSelectedListStaff = rowData;
				});
			}
			
			$scope.updateFormStaff = function() {			
				$scope.model.staffCode = $scope.itemSelectedListStaff.code;
				$scope.model.staffName2 = $scope.itemSelectedListStaff.name;
				$scope.model.staffId = $scope.itemSelectedListStaff.staffId;
				$scope.model.staffValue=$scope.itemSelectedListStaff.value;
				document.getElementById('fStaffCode').title = $scope.model.staffCode;
				document.getElementById('fStaffName').title = $scope.model.staffName;
				$scope.hideModalFunction("modalListStaff");
			}
			$scope.dialogListStaffActionBack = function() {
				$scope.hideModalFunction("modalListStaff");
			}
		//END COMBOBOX STAFF UPDATE
		
	
			$scope.loadDefault=function()
			{
				
				  overLoading();
				
				  var SessionShopCode = $localStorage.clientContext.shop.shopCode;
				  var SessionShopName = $localStorage.clientContext.shop.shopName;
				  var SessionStockShopId = $localStorage.clientContext.sessionStockID;
				  var x={shopCode : SessionShopCode, shopName :SessionShopName, stockShopId:SessionStockShopId}
				  $scope.listLowAgent.push(x);
				$scope.model.lowAgent=$scope.listLowAgent[0];
				$scope.getLovStaff();
				$scope.disabledLowReceiverAgent=true;
				$scope.disabledLowStaff=true;
				$scope.disabledStaffName=true;
				$scope.disabledDtFromDate=true;
				$scope.disabledLowAgent=true;
				$scope.disabledReason=true;
				$scope.showAcceptCancelAdd=false;
				$('#pnlButtonAction').css('display', 'block');
				$('#pnlButtonOK').css('display', 'none');
				
			
				
			};
			//Load Default Form
			$scope.loadDefault();
		
		
		//onSearch
		// Tìm kiếm.....
		
		//click tim kiếm
		$scope.btnOnSearch=function()
		{
			$scope.showButtonAcceptSearch=true;
			$scope.disabledSearch=true;
			// enble  các cbb cần thiết
			$scope.disabledLowReceiverAgent=false;
			$scope.disabledLowStaff=false;
			$scope.disabledStaffName=false;
			$scope.disabledDtFromDate=false;
			$scope.disabledReason=false;
			$scope.showButtonSupplyAndPrint=false;
			
		}
		//click bỏ qua  
		$scope.btnCancelSearch=function()
		{
			$scope.disabledSearch=false;
			$scope.showButtonSupplyAndPrint=true;
			$scope.showButtonAcceptSearch=false;
			$scope.disabledLowStaff=true;
			$scope.disabledStaffName=true;
			$scope.disabledDtFromDate=true;
			$scope.disabledLowAgent=true;
			$scope.disabledReason=true;
			$scope.disabledLowReceiverAgent=true;
			//////////////////////////////////
		
		
			


		}
		
		// click chấp nhận tìm kiếm
		$scope.listWarrantyAction=[];
		$scope.btnAcceptSearch=function()
		{
			if($scope.model.staffName==undefined)
			{
			$scope.model.staffName="";
			}
		var data={
				"reasonId":$scope.model.lowReason.reasonId,
				"stockId" : $localStorage.clientContext.sessionStockID,
				"delivererStockId":$scope.model.receiverAgentStockId,
				"createDatetime":$('#fromDate').val(),
				"fromStaffId":$scope.model.staffId,
				"staffName":$scope.model.staffName
		}
		overLoading();
		fctRenewWarrantyNumber.getWarrantyActionList(data,function(result){
			if (result !=null && result.length>0)
			{
				//load stateList va goodslist
				$scope.getGoodListAndStateList();
				//
				$scope.listWarrantyAction=result;
				$scope.selectedItem=result[0];
					
					
				createDataTableOne($scope.listWarrantyAction); 
				$scope.listWarrantyDetail=$scope.listWarrantyAction[0].listWarrantyDetail; //$scope.listWarrantyDetail: danh sach du lieu cho tableTwo
				createDataTableTwo($scope.listWarrantyDetail);
				
				$scope.selectedItem=result[0];
				 $scope.warrantyActionId= $scope.selectedItem.warActionId;
				
				//load pnl detail 
				 $scope.model.quantity=$scope.listWarrantyDetail[0].quantityIssue;
				 $scope.getCbbGoods($scope.listWarrantyDetail[0].goodsId);
			     $scope.getCbbStateStatus($scope.listWarrantyDetail[0].stateId);
			     $scope.disablePrint=false;
			     // Enable và disable các trường cần thiết
			     	$scope.disabledLowReceiverAgent=true;
					$scope.disabledLowStaff=true;
					$scope.disabledStaffName=true;
					$scope.disabledDtFromDate=true;
					$scope.disabledLowAgent=true;
					$scope.disabledReason=true;
					$scope.disabledSearch=false;
					$scope.showButtonAcceptSearch=false;
					$scope.showButtonSupplyAndPrint=true;
					

				closeOverLay();
				
			}
			else{
				bootboxAlertFocus($translate.instant('vnm.RenewWarrantyNumber.label.bootbox.errorsearch'), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			}
	});
		};
		$scope.listWarrantyAction=[];
		
		//load table detail khi lần đầu search
		
		$scope.getStaffNamebyStaffId=function(staffId)
		{
			var staffName="";
			for(var i=0; i<$scope.listLowStaff.length; i++)
				{
					if(staffId==$scope.listLowStaff[i].staffId)
						{
							staffName=$scope.listLowStaff[i].name;
						}
				}
			return staffName;
		}
		
		 $scope.selectedItem={};
		 $scope.listWarrantyDetail=[];
		function createDataTableOne(dataItem){
			
			oTableItemXXXXX= $('#tableOne').DataTable({
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
			    "order":[],
			    "select": {
			    	style: 'single',
			        info: false
			    },
		        "scrollX": true,
				"columns" : [ 
		              {"mData":"stockId", "render": function(data, type, row){
		            	  x = $scope.model.lowAgent.shopName == null ? '' : $scope.model.lowAgent.shopName;
		            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ x + "'>" + x + "</div>";
		 	          }},
		              {"mData":"delivererStockId", "render": function(data, type, row){
		            	  x =$scope.model.receiverAgentName == null ? '' : $scope.model.receiverAgentName;
		            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ x + "'>" + x + "</div>";
		 	          }},
		              {"mData":"fromStaffId", "render": function(data, type, row){
		            	  x = $scope.getStaffNamebyStaffId(data) == null ? '' : $scope.getStaffNamebyStaffId(data);
		            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ x + "'>" + x + "</div>";
		 	          }},
		 	         {"mData":"toStaffName", "render": function(data, type, row){
		            	  x = data == null ? '' : data;
		            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ x + "'>" + x + "</div>";
		 	          }},
		              {"mData":"reasonId", "render": function(data, type, row){
		            	  x = $scope.model.lowReason.name== null ? '' : $scope.model.lowReason.name;
		            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+x + "'>" + x + "</div>";
		 	          }},
		 	         {"mData":"createDateTime", "render": function(data, type, row){
		           	  x = data == null ? '' :data;
		           	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ x + "'>" + x + "</div>";
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
		            },
		            "createdRow" : function(row, data, rowIndex) {
		            
							if (rowIndex == 0 || rowIndex == '0') {
								$(row).addClass('selected');
							}
						
							
					}
		            
		            
			});
			$('#tableOne tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
		        $(this).removeClass('selected');
		        var rowData = oTableItemXXXXX.row( this ).data();
		        $scope.selectedItem=rowData;
		        $scope.listWarrantyDetail= $scope.selectedItem.listWarrantyDetail;
		        createDataTableTwo( $scope.listWarrantyDetail);
		        oTableItemXXXXX.$('tr.selected').removeClass('selected');
		        $(this).addClass('selected');
		        //load dữ liệu lên pnt Detail
		        $scope.model.quantity=$scope.selectedItem.listWarrantyDetail[0].quantityIssue;
		        $scope.getCbbGoods($scope.selectedItem.listWarrantyDetail[0].goodsId);
		        $scope.getCbbStateStatus($scope.selectedItem.listWarrantyDetail[0].stateId);
		        // lẤY WARRANTY_ACTION_ID ĐỂ IN
		        $scope.warrantyActionId= $scope.selectedItem.warActionId;

		       
			    
		 } );
			

		}
		
		//lấy goods code cho table danh muc hang
		$scope.getGoodsCode=function(goodsId)
		{
			var goodsCode="";
			for(var i=0; i<$scope.lstGoodsForm.length; i++)
				{
					if($scope.lstGoodsForm[i].goodsId==goodsId)
						{
						goodsCode=$scope.lstGoodsForm[i].goodsCode;
						}
						
				}
			return goodsCode;
		};
		//lấy goods Name cho tabel danh muc hang
		$scope.getGoodsName=function(goodsId)
		{
			var goodsName="";
			for(var i=0; i<$scope.lstGoodsForm.length; i++)
				{
					if($scope.lstGoodsForm[i].goodsId==goodsId)
						{
						goodsName=$scope.lstGoodsForm[i].name;
						}
						
				}
			return goodsName;
		};
		// Lấy unitName cho table danh mục hàng
		$scope.getUnitName=function(goodsId)
		{
			var unitName="";
			for(var i=0; i<$scope.lstGoodsForm.length; i++)
			{
				if($scope.lstGoodsForm[i].goodsId==goodsId)
					{
					unitName=$scope.lstGoodsForm[i].unitName;
					}
					
			}
			return unitName;
		}
		// lấy state Name cho table danh muc hang
		$scope.getStateName=function(stateId)
		{
			var stateName="";
			for(var i=0; i<$scope.listStatesList.length; i++)
				{
				if($scope.listStatesList[i].stateId==stateId)
					{
						stateName=$scope.listStatesList[i].name;
					}
				}
			return stateName;
		}
	//table goods detail
		
function createDataTableTwo(dataItem){
			
			oTableItemXXQ= $('#tableTwo').DataTable({
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
			    "order":[],
			    "select": {
			    	style: 'single',
			        info: false
			    },
		        "scrollX": true,
				"columns" : [ 
		              {"mData":"goodsId", "render": function(data, type, row){
		            	 x = $scope.getGoodsCode(data) == null ? '' : $scope.getGoodsCode(data);
		            	  
		            	//  x = data == null ? '' : data;
		            	  return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+ x + "'>" + x + "</div>";
		 	          }},
		              {"mData":"goodsId", "render": function(data, type, row){
		            	x = $scope.getGoodsName(data) == null ? '' : $scope.getGoodsName(data);
		            	 // x = data == null ? '' : data;
		            	  return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+ x + "'>" + x + "</div>";
		 	          }},
		              {"mData":"stateId", "render": function(data, type, row){
		            	  x = $scope.getStateName(data) == null ? '' : $scope.getStateName(data);
		            	 // x = data == null ? '' : data;
		            	  return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+ x + "'>" + x + "</div>";
		 	          }},
		 	         {"mData":"goodsId", "render": function(data, type, row){
		            	  x = $scope.getUnitName(data) == null ? '' : $scope.getUnitName(data);
		            	  return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+ x + "'>" + x + "</div>";
		 	          }},
		              {"mData":"quantityIssue", "render": function(data, type, row){
		            	  x = data== null ? '' : data;
		            	  return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+x + "'>" + x + "</div>";
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
		            },
		            "createdRow" : function(row, data, rowIndex) {
			            
						if (rowIndex == 0 || rowIndex == '0') {
							$(row).addClass('selected');
						}
					
						
				}
			});
			$('#tableTwo tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
		        $(this).removeClass('selected');
		        var rowData = oTableItemXXQ.row( this ).data();
		        $scope.goodForTransactionSelected=rowData;
		        oTableItemXXQ.$('tr.selected').removeClass('selected');
		        $(this).addClass('selected');
		        
		        //load dữ liệu lên pnl detail
		        $scope.model.quantity=rowData.quantityIssue;
		        $scope.getCbbGoods(rowData.goodsId);
		        $scope.getCbbStateStatus(rowData.stateId);
			    
		 } );

		}

//Lấy dự liệu cho cbb mặt hàng theo bảng tableTwo
$scope.getCbbGoods=function(goodsId)
{
	for(var i=0; i<$scope.lstGoodsForm.length; i++)
	{
		if($scope.lstGoodsForm[i].goodsId==goodsId)
			{
			$scope.model.goodsForm=$scope.lstGoodsForm[i];
			}
			
	}
}
//Lấy dữ liệu cho cbb trạng thái theo bảng tableTwo
$scope.getCbbStateStatus=function(stateId)
{
	for(var i=0; i<$scope.listStatesList.length; i++)
	{
	if($scope.listStatesList[i].stateId==stateId)
		{
			$scope.model.statesForm=$scope.listStatesList[i];
		}
	}
}
		
// CHức năng in

$scope.btnPrintWarrantyOnclick= function()
{
	App.blockUI({
		target : "#contentMain",
		boxed : true,
		message : 'loading...'
	});

	var templateWarrantyValueSearch =  $scope.selectedItem;
		
	fctRenewWarrantyNumber.getTemplateWarrantyValue(templateWarrantyValueSearch, function(result) {
		if (result != null && result != undefined) {
			
				var date= new Date()
				var datemoment = moment(dateReport);
				var dateReport = momentObj.format('DD/MM/YYYY');
				
					var ReportWarranty = {
					"strShopName" : result[0],
					"strDeliverShopName" : result[1],
					"strWarrantyActionCode" :  $scope.warrantyActionId,
					"dateReport" : dateReport,
					"fileTempName" : 'WarrantyReceiptReportVN',
					"fileType" : '.xlsx'
				};

					fctRenewWarrantyNumber.exportFile(encodeURI(JSON.stringify(ReportWarranty)), function(result, status, header, config) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMain");
						bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages,"", $translate.instant("vnm.lable.vnm.name"), ""));
					} else {
						App.unblockUI("#contentMain");
						download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
					}
				});
			}
		
	});
	
}
// Chức năng cấp lại




$scope.btnSupplyAgainOnClick=function() //click cấp lại
{
	$scope.showButtonAccept=true;
	$scope.showButtonAcceptSearch=false;
	$scope.showButtonSupplyAndPrint=false;
	$scope.disabledReason=false;
	$scope.disabledDtFromDate=true;
	$scope.disabledLowStaff=true;
	$scope.disabledLowReceiverAgent=false;
	$scope.disabledStaffName=false;

	$scope.model.dtFromDate = momentString;
	//$scope.model.lowStaff=$scope.listLowStaff[1];
	$scope.model.staffName2 = $scope.listLowStaff[0].name;
	$scope.model.staffId = $scope.listLowStaff[0].staffId;
	$scope.model.staffCode = $scope.listLowStaff[0].code;
	$scope.model.staffValue=$scope.listLowStaff[0].value;
	$scope.disabledSearch=true;
	$scope.disableAdd=true;
	$scope.listWarrantyDetail=[];
	
	
	createDataTableTwo($scope.listWarrantyDetail);
	$scope.showBtnAddEditDelete=true;	
	// hiển thị các button trong pnl detail
	$scope.showBtnAddEditDelete=true;
	$scope.showAcceptCancelAdd=false
	
	$scope.isDisabledBtnAdd=false;
	$scope.disabledViewStock=false;
	$scope.lstGoodForTransaction=[];
	$scope.resetGoodsAdd();

}


$scope.btnCancel=function() //click bỏ qua của cấp lại
{
	$scope.showButtonAccept=false;
	$scope.showButtonSupplyAndPrint=true;
	$scope.disabledSearch=false;
	$scope.disabledLowReceiverAgent=true;
	$scope.disabledLowStaff=true;
	$scope.disabledStaffName=true;
	$scope.disabledDtFromDate=true;
	$scope.disabledLowAgent=true;
	$scope.disabledReason=true;
	$scope.disableAdd=true;
	$scope.showBtnAddEditDelete=true;
	$scope.showAcceptCancelAdd=false
	
	$scope.isDisabledBtnAdd=true;
	$scope.disabledViewStock=true;
	
	//////////////////////////////
	$scope.btnCancelOnclick();
	
	

}

$scope.btnAddOnclick = function() {
	$scope.typeAction = 'ADD';
	$scope.resetPanelAddGoods();
	if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
		$scope.disableAddx = false;
	}
	$scope.disableAddChooseGoods = false;
	if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined) {
		$scope.disableAddViewDetail = false;
	}

	if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined
			&& ($scope.goodForTransactionSelected.goodsId != null || $scope.goodForTransactionSelected.goodsId != undefined)) {
		$scope.resetGoodsAdd();
	}
	$('#pnlButtonAction').css('display', 'none');
	$('#pnlButtonOK').css('display', 'block');
}

/*$scope.btnAddOnclick=function() // THêm
{
	$scope.showBtnAddEditDelete=false;
	$scope.showAcceptCancelAdd=true;
	$scope.disableAdd=false;
}
*/


$scope.btnAcceptCaplai=function()
{	
	
	bootboxConfirm($translate.instant("vnm.RenewWarrantyNumber.label.bootboxconfirm"), $translate.instant("vnm.RenewWarrantyNumber.label.bootboxconfirmOk"),
			$scope.confirmAcceptOK, $scope.confirmCancelOK);
	
}
$scope.confirmCancelOK= function()
{
	return false;
}




$scope.confirmAcceptOK=function() 
{
	if($scope.model.lowReason==null){
		bootboxAlertFocus($translate.instant('vnm.RenewWarrantyNumber.label.bootbox.emtyreason'),"", $translate.instant("vnm.lable.vnm.name"), "");
		return false;
	}
	else if($scope.lstGoodForTransaction.length==0)
	{
		bootboxAlertFocus($translate.instant('vnm.RenewWarrantyNumber.label.bootbox.resultimport'),"", $translate.instant("vnm.lable.vnm.name"), "");
		return false;
	}
	else{

		overLoading();
		var type="";
		if ($scope.model.lowReason.code=="CTBH")
			{
				type="1";
			}
		else if($scope.model.lowReason.code=="CHBH")
			{
			    type="2";
			}
		var data = {
				"stockId" : $localStorage.clientContext.sessionStockID,
				"fromStaffId":$scope.model.staffId,
				"delivererStockId":$scope.model.receiverAgentStockId,
				"reasonId":$scope.model.lowReason.reasonId,
				"staffName":$scope.model.staffName,
				"createDatetime":$('#fromDate').val(),
				"type":type,
				"listWarActionGoodsList":$scope.lstGoodForTransaction,
				}
		
		fctRenewWarrantyNumber.RenewWarranty(data,function(result){
			if (result !=null && result!=-1)
				{
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.RenewWarrantyNumber.label.bootbox.ok'),"", $translate.instant("vnm.lable.vnm.name"), "");
				 $scope.warrantyActionId=result;
				 
				 	fctRenewWarrantyNumber.reGetWarrantyActionList($scope.warrantyActionId,function(result){
				 		if (result !=null&& result.length>0)
				 			{
				 			$scope.listWarrantyAction.push(result[0]);
							createDataTableOne($scope.listWarrantyAction);
				 			}
					 
				 	});
				
				}
			else
				{
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.RenewWarrantyNumber.label.bootbox.error'),"", $translate.instant("vnm.lable.vnm.name"), "");
				}
		});
		$scope.showButtonAcceptSearch=false;
		$scope.showButtonSupplyAndPrint=true;
		$scope.disabledLowReceiverAgent=true;
		$scope.disabledLowStaff=true;
		$scope.disabledStaffName=true;
		$scope.disabledDtFromDate=true;
		$scope.disabledLowAgent=true;
		$scope.disabledReason=true;
		$scope.showAcceptCancelAdd=false;
		$scope.showButtonAccept=false;
		$('#pnlButtonAction').css('display', 'block');
		$('#pnlButtonOK').css('display', 'none');
		$scope.isDisabledBtnAdd=true;
		$scope.isDisabledBtnEdit=true;	
		$scope.isDisabledBtnDelete=true;
		$scope.disabledViewStock=true;
		$scope.disablePrint=false;
		
		
		$scope.selectedItem={stockId: $localStorage.clientContext.sessionStockID, delivererStockId:$scope.model.receiverAgentStockId};
		
	}
}
	













//BÙI NGỌC DUY
$scope.onChooseGoodsForm = function() {
	$scope.model.goodsFormName = $scope.model.goodsForm.name;
	$scope.disableAddViewDetail = false;
	$scope.refreshDetailSerialForGoods();
}

$scope.getFullGoodsList=function()
{
	fctRenewWarrantyNumber.getRenewWarrantyNumberGoodList(function(result){
		if (result !=null && result.length>0)
		{
			//$scope.lstGoodsForm= result;
		}
	});
};

//
$scope.typeAction = '';
$scope.lstGoodForTransaction = [];
$scope.goodForTransactionSelected = {};
// button Them
$scope.btnAddOnclick = function() {
	$scope.typeAction = 'ADD';
	$scope.resetPanelAddGoods();
	if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
		$scope.disableAddx = false;
	}
	$scope.disableAddChooseGoods = false;
	$scope.disableAddViewDetail = true;

	if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined
			&& ($scope.goodForTransactionSelected.goodsId != null || $scope.goodForTransactionSelected.goodsId != undefined)) {
		$scope.resetGoodsAdd();
	}
	$('#pnlButtonAction').css('display', 'none');
	$('#pnlButtonOK').css('display', 'block');
}

// button Them khi chon xong serial
$scope.btnAddOnclickClone = function() {
	$scope.typeAction = 'ADD';
	$scope.resetPanelAddGoods();
	if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
		$scope.disableAddx = false;
	}
	$scope.disableAddChooseGoods = false;
	if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != undefined) {
		$scope.disableAddViewDetail = false;
	}

	$('#pnlButtonAction').css('display', 'none');
	$('#pnlButtonOK').css('display', 'block');
}

// Button Sua
$scope.btnEditOnclick = function() {
	if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined) {
		$scope.disableAdd = false;
		$scope.disableAddChooseGoods = true;
		$scope.disableAddViewDetail = false;
		$scope.typeAction = 'EDIT';
		$('#pnlButtonAction').css('display', 'none');
		$('#pnlButtonOK').css('display', 'block');
	}
}

// Button Xoa
$scope.btnDeleteOnclick = function() {
	$scope.typeAction = 'DELETE';
	bootboxConfirm($translate.instant("vnm.common.btn.delete"), $translate.instant("vnm.messages.confirm.delete"),
			$scope.confirmDeleteGoodsForTransOK, $scope.confirmDeleteGoodsForTransNOK);
}

// Xac nhan xoa
$scope.confirmDeleteGoodsForTransOK = function() {
	angular.forEach($scope.lstGoodForTransaction, function(objectGoodsTrans, indexS) {
		if (objectGoodsTrans.goodsId == $scope.goodForTransactionSelected.goodsId
				&& objectGoodsTrans.stateId == $scope.goodForTransactionSelected.stateId) {
			$scope.lstGoodForTransaction.splice(indexS, 1);
		}
	});

	if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
		$scope.isDisabledBtnEdit = true;
		$scope.isDisabledBtnDelete = true;
		$scope.goodForTransactionSelected = {};
		$scope.resetGoodsAdd();

	} else {
		$scope.goodForTransactionSelected = $scope.lstGoodForTransaction[0];
		$scope.onSelectGoodsForAdd();
	}
	$scope.listWarrantyDetail=$scope.lstGoodForTransaction[0];
	createDataTableTwo($scope.lstGoodForTransaction);
}

// Xac nhan khong xoa
$scope.confirmDeleteGoodsForTransNOK = function() {

}

// Button Chap nhan
$scope.btnOkOnclick = function() {
	var transGood = {
		"stockId" : $localStorage.clientContext.sessionStockID,
		"goods" : $scope.model.goodsForm,
		"internalStock" : $scope.model.stockInternalTypeForm,
		"state" : $scope.model.statesForm,
		"radio" : "state",
		"typeAction" : $scope.typeAction,
		"goodsQuantity" : $scope.model.goodQuantity,
		"strFromSerialClicked" : EXPORT_PARTNER,
		"mblnIsFormStockImport" : false,
		"type" : "0",
		"notes" : $scope.model.goodNote,
		"mblnInputToIssue" : true,
		"lstGoodsTransaction" : $scope.lstGoodForTransaction,
		"resourceSelected" : $scope.model.resourceCodeForm,
		"goodTransSelected" : $scope.goodForTransactionSelected,
	}

	fctRenewWarrantyNumber.onOkAction(transGood, function(result) {
		if (result != null && result != undefined) {
			if (result.status == '0') {
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + result.messages), "goodsQuantity",
						$translate.instant("vnm.lable.vnm.name"), "");
			} else if (result.length > 0) {
				$scope.lstGoodForTransaction = result;
				$scope.goodForTransactionSelected = $scope.lstGoodForTransaction[result.length - 1];
				createDataTableTwo($scope.lstGoodForTransaction);
				///Đang sửa
				
			

				if ($scope.typeAction == 'ADD') {
					$scope.resetPanelAddGoods();
					$scope.resetGoodsAdd();
					$scope.isDisabledBtnEdit = false;
					$scope.isDisabledBtnDelete = false;
				} else if ($scope.typeAction == 'EDIT') {
					$scope.disableAdd = true;
					$scope.disableAddChooseGoods = true;
					$scope.disableAddx = true;
					$scope.disableAddViewDetail = true;

					$('#pnlButtonAction').css('display', 'block');
					$('#pnlButtonOK').css('display', 'none');
				}
			}
		}
	});
}

// reset panel button
$scope.resetPanelAddGoods = function() {
	$scope.disableAdd = false;
	$scope.disableAddChooseGoods = false;
	$scope.disableAddx = true;
	$scope.disableAddViewDetail = true;
}

// reset mat hang da chon
$scope.resetGoodsAdd = function() {
	$scope.model.goodsForm = {};
	$scope.model.goodsFormName = '';
	$scope.model.goodQuantity = '';
	$scope.model.goodNote = '';
}

// Button Bo qua
$scope.btnCancelOnclick = function() {
	$scope.typeAction = 'NONE';
	$scope.disableAdd = true;
	$scope.disableAddChooseGoods = true;
	$scope.disableAddx = true;
	$scope.disableAddViewDetail = true;
	if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
		$scope.onSelectGoodsForAdd();
	} else {
		$scope.resetGoodsAdd();
	}

	$('#pnlButtonAction').css('display', 'block');
	$('#pnlButtonOK').css('display', 'none');
}

// create table mat hang tren form
function createTableGoodsSave(dataItem) {
	oTableItemXY = $('#tableGoodsForm').DataTable(
			{
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
				"order":[],
				"info" : true,
				"select" : {
					style : 'single',
					info : false
				},
				"scrollX" : true,
				"columns" : [ {
					"mData" : "goodsCode",
					"render" : function(data, type, row) {
						x = data == null ? '' : data;
						return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
					}
				}, {
					"mData" : "name",
					"render" : function(data, type, row) {
						x = data == null ? '' : data;
						return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
					}
				}, {
					"mData" : "stateName",
					"render" : function(data, type, row) {
						x = data == null ? '' : data;
						return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
					}
				}, {
					"mData" : "unitName",
					"render" : function(data, type, row) {
						x = data == null ? '' : data;
						return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
					}
				}, {
					"mData" : "quantity",
					"render" : function(data, type, row) {
						x = data == null ? '' : data;
						return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
					}
				}, ],
				"oLanguage" : {
					"sInfo" : TOTAL_RECORD + "_TOTAL_",
					"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
					"sInfoEmpty" : "",
					"sInfoFiltered" : "",
					"sLengthMenu" : "_MENU_",
					"sSearch" : LABEL_SEARCH,
					"oPaginate" : {
						"sFirst" : FIRST_PAGE,
						"sLast" : LAST_PAGE,
						"sNext" : NEXT_PAGE,
						"sPrevious" : PREV_PAGE,
					},
					"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
				},
				"createdRow" : function(row, data, rowIndex) {
					if ($scope.goodForTransactionSelected != ROW_NOT_SELECTED) {
						if ($scope.goodForTransactionSelected.goodsCode == data.goodsCode
								&& $scope.goodForTransactionSelected.stateId == data.stateId) {
							$(row).addClass('selected');
						}
					} else {
						if (rowIndex == 0 || rowIndex == '0') {
							$(row).addClass('selected');
						}
					}
				}
			});

	$('#tableGoodsForm tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
		$(this).removeClass('selected');
		var rowData = oTableItemXY.row(this).data();
		oTableItemXY.$('tr.selected').removeClass('selected');
		$(this).addClass('selected');
		$scope.goodForTransactionSelected = rowData;
		if ($scope.disableAdd) {
			$scope.onSelectGoodsForAdd();
		}
	});
}

// Chon mat hang va so luong trong dialog xem kho
$scope.onSelectGoodsForAdd = function() {
	$scope.model.resourceCodeForm = $scope.goodForTransactionSelected.resourceSelected;
	$scope.model.stockInternalTypeForm = $scope.goodForTransactionSelected.internalStockSelected;
	$scope.model.goodsForm = $scope.goodForTransactionSelected.goodsSelected;
	$scope.model.goodsFormName = $scope.goodForTransactionSelected.goodsSelected != undefined ? $scope.goodForTransactionSelected.goodsSelected.name
			: '';
	$scope.model.statesForm = $scope.goodForTransactionSelected.stateSelected;
	$scope.model.goodQuantity = $scope.goodForTransactionSelected.quantity;
	$scope.model.goodNote = $scope.goodForTransactionSelected.notes;
}


///
//Dialog xem kho
var x = $localStorage.clientContext.shop.shopCode;
var y = $localStorage.clientContext.shop.shopName;
$scope.lstCurrentStock = [ {
	'code' : x,
	'name' : y
}, ];
$scope.pStocksTree = [];
$scope.pGoodsList = []; // Danh sach mat hang trong dialog khi chon Tat ca
$scope.pGoodsGroupsList = [];
$scope.pStatesList = [];
$scope.lstGoodsResource = []; // Nguon hang tren dialog
$scope.lstInternalStock = []; // Loai hang hoa tren dialog
$scope.lstTableGoods = []; // Danh sach mat hang hien thi len bang
$scope.quantities = []; // Danh sach so luong hien thi len bang
$scope.lstTableGoodsFilter = []; // Danh sach mat hang hien thi len bang

// create table mat hang
$scope.itemGoodSelected = {};
function createDataTableGoods(dataItem) {
	oTableItem = $('#tableItem').DataTable({
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
		"order":[],
		"info" : true,
		"select" : {
			style : 'single',
			info : false
		},
		"scrollX" : true,
		"scrollY" : "200",
		"columns" : [ {
			"mData" : "goodsCode",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "name",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "goodsGroupId",
			"render" : function(data, type, row) {
				var name = (data == null ? "" : $scope.getGoodsGroupName(data));
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + name + "'>" + name + "</div>";
			}
		}, {
			"mData" : "unitName",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "checkSerial",
			"render" : function(data, type, row) {
				var name = (data == null ? "" : (data == '1' ? "Có" : "Không"));
				return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + name + "'>" + name + "</div>";
			}
		}, {
			"mData" : "checkWarranty",
			"render" : function(data, type, row) {
				var name = (data == null ? "" : (data == '1' ? "Có" : "Không"));
				return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + name + "'>" + name + "</div>";
			}
		}, {
			"mData" : "notes",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
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
		"createdRow" : function(row, data, rowIndex) {
			if ($scope.itemGoodSelected != ROW_NOT_SELECTED) {
				if ($scope.itemGoodSelected.goodsCode == data.goodsCode) {
					$(row).addClass('selected');
				}
			} else {
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			}
		}
	});

	$('#tableItem tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
		$(this).removeClass('selected');
		var rowData = oTableItem.row(this).data();
		oTableItem.$('tr.selected').removeClass('selected');
		$(this).addClass('selected');
		$scope.itemGoodSelected = rowData;
		if ($scope.model.currentStock != null && $scope.model.currentStock != undefined) {
			$scope.createDataTableGoodsQuantitiesByGoodsId(rowData.goodsId);
		}
	});
}

// Lay ten nhom hang
$scope.getGoodsGroupName = function(goodsGroupId) {
	var name = '';
	if ($scope.pGoodsGroupsList != null && $scope.pGoodsGroupsList != undefined && $scope.pGoodsGroupsList.length > 0) {
		for (var i = 0; i < $scope.pGoodsGroupsList.length; i++) {
			if (goodsGroupId == $scope.pGoodsGroupsList[i].goodsGroupId) {
				name = $scope.pGoodsGroupsList[i].name;
				break;
			}
		}
	}
	return name;
}

// create table so luong
$scope.itemGoodQuantitySelected = {};
$scope.disableBtnDetail = true;
function createDataTableGoodsQuantities(dataItem) {
	oTableItemX = $('#tableQuantity').DataTable({
		"responsive" : true,
		"destroy" : true,
		"paginationType" : "full_numbers",
		"data" : dataItem,
		"processing" : false,
		"serverSide" : false,
		"bFilter" : false,
		"paging" : false,
		"bLengthChange" : false,
		"bPaginate" : true,
		"bSort" : false,
		"order":[],
		"info" : true,
		"select" : {
			style : 'single',
			info : false
		},
		"scrollX" : true,
		"columns" : [ {
			"mData" : "stateName",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "quantityIssue",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "quantityEffect",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "quantityRemain",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, ],
		"oLanguage" : {
			"sInfo" : '',
			"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
			"sInfoEmpty" : "",
			"sInfoFiltered" : "",
			"sLengthMenu" : "_MENU_",
			"sSearch" : '',
			"oPaginate" : {
				"sFirst" : '',
				"sLast" : '',
				"sNext" : '',
				"sPrevious" : '',
			},
			"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
		},
		"createdRow" : function(row, data, rowIndex) {
			if ($scope.itemGoodQuantitySelected != ROW_NOT_SELECTED) {
				if ($scope.itemGoodQuantitySelected.goodsId == data.goodsId && $scope.itemGoodQuantitySelected.stateId == data.stateId) {
					$(row).addClass('selected');
				}
			} else {
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			}
		}
	});

	$('#tableQuantity tbody').off().on(
			'click',
			'tr',
			function(e, dt, type, indexes) {
				$(this).removeClass('selected');
				var rowData = oTableItemX.row(this).data();
				oTableItemX.$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
				$scope.itemGoodQuantitySelected = rowData;
				if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1'
						&& $scope.itemGoodQuantitySelected != null && $scope.itemGoodQuantitySelected != undefined
						&& $scope.itemGoodQuantitySelected.quantityEffect > 0) {
					$scope.disableBtnDetail = false;
				} else {
					$scope.disableBtnDetail = true;
				}
			});
}

// create table so luong
$scope.createDataTableGoodsQuantitiesByGoodsId = function(goodsId) {
	var cond = {
		"stockId" : $localStorage.clientContext.sessionStockID,
		"goodsId" : goodsId,
		"internalStock" : $scope.model.stockInternalType.code,
		"radio" : $scope.model.stockTypeSearch,
	};

	fctRenewWarrantyNumber.getGoodsQuantityByCondition(cond, function(result) {
		if (result != null && result != undefined) {
			if (result.status == '0') {
				bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
			} else {
				$scope.quantities = result;
				// Bang so luong ...
				$scope.itemGoodQuantitySelected = $scope.quantities[0];
				createDataTableGoodsQuantities($scope.quantities);

				if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1'
						&& $scope.itemGoodQuantitySelected != null && $scope.itemGoodQuantitySelected != undefined
						&& $scope.itemGoodQuantitySelected.quantityEffect > 0) {
					$scope.disableBtnDetail = false;
				} else {
					$scope.disableBtnDetail = true;
				}

				// Tinh tong thuc te
				var mintSumEffect = 0;
				for (var i = 0; i < result.length; i++) {
					mintSumEffect += parseInt(result[i].quantityEffect);
				}
				$scope.model.total = mintSumEffect;
			}
		}
	});
}

// Button xem kho
$scope.viewStock = function() {
	overLoading();
	//Đạt thêm
	$scope.getFullGoodsList();
	//BND
	fctRenewWarrantyNumber.getInternalStock(function(result6) {
		if (result6 != null && result6 != undefined && result6.status != '0') {
			$scope.lstInternalStock = result6;
		} else {
			$scope.lstInternalStock = [];
		}

		var sessionValue = {
			"SessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
			"SessionShopType" : $localStorage.clientContext.shop.shopType,
			"isForm" : "0",
		};
		fctRenewWarrantyNumber.getVctResourceList(sessionValue, function(result5) {
			if (result5 != null && result5 != undefined && result5.status != '0') {
				$scope.lstGoodsResource = result5;
			} else {
				$scope.lstGoodsResource = [];
			}

			fctRenewWarrantyNumber.getExistedStates(function(result) {
				if (result != null && result != undefined && result.status != '0') {
					$scope.pStatesList = result;
				} else {
					$scope.pStatesList = [];
				}

				fctRenewWarrantyNumber.getExistedGoodsGroups(function(result1) {
					if (result1 != null && result1 != undefined && result1.status != '0') {
						$scope.pGoodsGroupsList = result1;
					} else {
						$scope.pGoodsGroupsList = [];
					}

					var resourceCodeForm = {
						"code" : $scope.model.resourceCodeForm.code,
						"name" : "",
						"formName":"NewWarrantyNo",
					}
					fctRenewWarrantyNumber.getExistedGoods(resourceCodeForm, function(result2) {
						if (result2 != null && result2 != undefined && result2.status != '0') {
							$scope.pGoodsList = result2;
						} else {
							$scope.pGoodsList = [];
						}

						$scope.lstTableGoodsFilter = $scope.pGoodsList;
						var shopStaff = {
							"code" : $localStorage.clientContext.sessionStockID,
							"name" : "",
						};
						fctRenewWarrantyNumber.getStocksTree(shopStaff, function(result3) {
							if (result3 != null && result3 != undefined & result3.status != '0') {
								$scope.pStocksTree = result3;
							} else {
								$scope.pStocksTree = [];
							}

							$scope.model.stockTypeSearch = 'all';
							$scope.model.currentStock = $scope.lstCurrentStock[0];
							$scope.model.currentStockName = $scope.model.currentStock.name;

							if ($scope.lstGoodsResource != null && $scope.lstGoodsResource != undefined
									&& $scope.lstGoodsResource.length > 0) {
								$scope.model.resourceCode = $scope.lstGoodsResource[0];
							}
							if ($scope.lstInternalStock != null && $scope.lstInternalStock != undefined
									&& $scope.lstInternalStock.length > 0) {
								$scope.model.stockInternalType = $scope.lstInternalStock[0];
							}

							if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined
									&& $scope.model.goodsForm.goodsId != null && $scope.model.goodsForm.goodsId != undefined
									&& $scope.model.goodsForm.goodsId != '') {
								$scope.lstTableGoods = [];
								for (i = 0; i < $scope.pGoodsList.length; i++) {
									if ($scope.pGoodsList[i].goodsId == $scope.model.goodsForm.goodsId) {
										$scope.lstTableGoods.push($scope.pGoodsList[i]);
										$scope.model.goodCode = $scope.pGoodsList[i].goodsCode;
										$scope.model.goodName = $scope.pGoodsList[i].name;
										break;
									}
								}
							} else {
								$scope.lstTableGoods = $scope.pGoodsList;
							}

							if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
								$scope.itemGoodSelected = $scope.lstTableGoods[0];
								createDataTableGoods($scope.lstTableGoods);
								$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
							} else {
								var lstNull = [];
								createDataTableGoods(lstNull);
								$scope.itemGoodSelected = {};
								createDataTableGoodsQuantities(lstNull);
								$scope.itemGoodQuantitySelected = {};
								$scope.disableBtnDetail = true;
							}

							if ($scope.disableAddChooseGoods && !$scope.disableAdd) {
								$scope.disableBtnInput = true;
							} else {
								$scope.disableBtnInput = false;
							}

							$scope.showModalFunction("modalStockInfo");
							closeOverLay();
						});
					});
				});
			});
		});
	});
}

// show popup
$scope.showModalFunction = function(idModal) {
	$('#' + idModal).modal('show');
	$('#' + idModal).on('shown.bs.modal', function(e) {
		$.fn.dataTable.tables({
			visible : true,
			api : true
		}).columns.adjust();
	});
}

// hide popup
$scope.hideModalFunction = function(idModal) {
	$('#' + idModal).modal('hide');
}

// set Ten khi chon mat hang
$scope.onChooseCurrentStock = function() {
	$scope.model.currentStockName = $scope.model.currentStock.name;
}

// su kien khi chon radio
$scope.stockTypeChangeFn = function(val) {
	if (val == 'all') {
		$scope.lstTableGoods = $scope.lstGoodsForm;
		$scope.lstTableGoodsFilter = $scope.lstTableGoods;
		if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
			$scope.itemGoodSelected = $scope.lstTableGoods[0];
			createDataTableGoods($scope.lstTableGoods);
			$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
		} else {
			var lstNull = [];
			createDataTableGoods(lstNull);
			$scope.itemGoodSelected = {};
			createDataTableGoodsQuantities(lstNull);
			$scope.itemGoodQuantitySelected = {};
			$scope.disableBtnDetail = true;
		}
	} else {
		$scope.getGoodsListByCondition(val)
	}
}

// su kien khi cho loai hang hoa
$scope.onChooseInternalStock = function() {
	if ($scope.model.stockTypeSearch == 'all') {
		$scope.lstTableGoods = $scope.lstGoodsForm;
		$scope.lstTableGoodsFilter = $scope.lstTableGoods;
		if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
			$scope.itemGoodSelected = $scope.lstTableGoods[0];
			createDataTableGoods($scope.lstTableGoods);
			$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
		} else {
			var lstNull = [];
			createDataTableGoods(lstNull);
			$scope.itemGoodSelected = {};
			createDataTableGoodsQuantities(lstNull);
			$scope.itemGoodQuantitySelected = {};
			$scope.disableBtnDetail = true;
		}
	} else {
		$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
	}
}

// su kien khi chon nguon hang
$scope.onChooseResourceCode = function() {
	$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
}

// Lay danh sach hang hoa theo dieu kien
$scope.getGoodsListByCondition = function(radio) {
	var cond = {
		"stockId" : $localStorage.clientContext.sessionStockID,
		"resourceCode" : $scope.model.resourceCode.code,
		"internalStock" : $scope.model.stockInternalType.code,
		"checkWarranty" : "true",
		"radio" : radio,
		"shopId" : $localStorage.clientContext.shopId,
	};

	fctRenewWarrantyNumber.getGoodsListByCondition(cond, function(result) {
		if (result != null && result != undefined) {
			if (result.status == '0') {
				bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
			} else if (result.length > 0) {
				$scope.lstTableGoods = result;
				$scope.lstTableGoodsFilter = $scope.lstTableGoods;
				$scope.itemGoodSelected = $scope.lstTableGoods[0];
				createDataTableGoods($scope.lstTableGoods);
				$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
			} else {
				var lstNull = [];
				createDataTableGoods(lstNull);
				$scope.itemGoodSelected = {};
				createDataTableGoodsQuantities(lstNull);
				$scope.itemGoodQuantitySelected = {};
				$scope.disableBtnDetail = true;
			}
		} else {
			var lstNull = [];
			createDataTableGoods(lstNull);
			$scope.itemGoodSelected = {};
			createDataTableGoodsQuantities(lstNull);
			$scope.itemGoodQuantitySelected = {};
			$scope.disableBtnDetail = true;
		}
	});
}

// filter theo ma MH + ten MH
$scope.filterGoods = function() {
	if ($scope.lstTableGoodsFilter != null && $scope.lstTableGoodsFilter != undefined && $scope.lstTableGoodsFilter.length > 0) {
		var lstTemp = [];
		if ($scope.model.goodCode != null && $scope.model.goodCode != undefined && $scope.model.goodCode != '') {
			for (var i = 0; i < $scope.lstTableGoodsFilter.length; i++) {
				if ($scope.lstTableGoodsFilter[i].goodsCode.toUpperCase().indexOf($scope.model.goodCode.trim().toUpperCase()) >= 0) {
					if ($scope.model.goodName != null && $scope.model.goodName != undefined && $scope.model.goodName != '') {
						if ($scope.lstTableGoodsFilter[i].name.toUpperCase().indexOf($scope.model.goodName.trim().toUpperCase()) >= 0) {
							lstTemp.push($scope.lstTableGoodsFilter[i]);
						}
					} else {
						lstTemp.push($scope.lstTableGoodsFilter[i]);
					}
				}
			}
		} else {
			for (var i = 0; i < $scope.lstTableGoodsFilter.length; i++) {
				if ($scope.model.goodName != null && $scope.model.goodName != undefined && $scope.model.goodName != '') {
					if ($scope.lstTableGoodsFilter[i].name.toUpperCase().indexOf($scope.model.goodName.trim().toUpperCase()) >= 0) {
						lstTemp.push($scope.lstTableGoodsFilter[i]);
					}
				} else {
					lstTemp.push($scope.lstTableGoodsFilter[i]);
				}
			}
		}
	}

	if (lstTemp.length > 0) {
		createDataTableGoods(lstTemp);
		$scope.itemGoodSelected = lstTemp[0];
		$scope.createDataTableGoodsQuantitiesByGoodsId(lstTemp[0].goodsId)
	} else {
		var lstNull = [];
		createDataTableGoods(lstNull);
		$scope.itemGoodSelected = {};
		createDataTableGoodsQuantities(lstNull);
		$scope.itemGoodQuantitySelected = {};
		$scope.disableBtnDetail = true;
	}
}

// Button Nhap trong dialog xem kho
$scope.btnSaveOnClick = function() {
	var isExist = false
	if ($scope.lstGoodsForm != null && $scope.lstGoodsForm != undefined && $scope.lstGoodsForm.length > 0) {
		for (var i = 0; i < $scope.lstGoodsForm.length; i++) {
			if ($scope.lstGoodsForm[i].goodsId == $scope.itemGoodSelected.goodsId) {
				isExist = true;
				break;
			}
		}
	}
	if (isExist) {
		$scope.model.goodsForm = $scope.itemGoodSelected;
		if ($scope.lstStatesForm != null && $scope.lstStatesForm != undefined && $scope.lstStatesForm.length > 0) {
			for (var i = 0; i < $scope.lstStatesForm.length; i++) {
				if ($scope.lstStatesForm[i].stateId == $scope.itemGoodQuantitySelected.stateId) {
					$scope.model.statesForm = $scope.lstStatesForm[i];
				}
			}
		}
		$scope.onChooseGoodsForm();
		$scope.btnAddOnclickClone();
	} else {
		bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.choose.right.goods'), "", $translate
				.instant("vnm.lable.vnm.name"), "");
		$scope.disableAdd = false;
		$scope.disableAddx = false;
		$scope.disableAddViewDetail = false;
		$scope.disableAddChooseGoods = false;
		$scope.refreshDetailSerialForGoods();

		$('#pnlButtonAction').css('display', 'none');
		$('#pnlButtonOK').css('display', 'block');
	}
	$scope.typeAction = 'ADD';
	$scope.hideModalFunction("modalStockInfo");
}

$scope.refreshDetailSerialForGoods = function() {
	$scope.lstSerialSETCTmp = [];
	$scope.lstSerialSETC = [];
	$scope.lstTableSerialsSETC = [];
	$scope.lstTableSerialsSETCTmp = [];
	$scope.fileSuccess = []
	$scope.lstSerialSETCInStock = [];
	$scope.model.fromSerial = '';
	$scope.model.toSerial = '';
	$scope.model.quantity = '';
	$scope.model.goodsForm.lstTransactionSerial = [];
	createTableDDSerialSingleSETC($scope.lstTableSerialsSETC);
	createTableDDSerialSingleSETC2($scope.lstSerialSETC);
}
// //// Dialog chi tiet trong dialog xem kho
$scope.lstTableSerials = [];
// Button chi tiet
$scope.btnDetailOnClick = function() {
	$scope.model.ddFromSerial = '';
	$scope.model.ddToSerial = '';
	$scope.model.ddQuantity = $scope.itemGoodQuantitySelected.quantityRemain;
	$('#divTableDDSerialSingle').css('display', 'block');
	$('#divTableDDSerialStrip').css('display', 'none');
	$scope.model.ddSerialTypeSearch = "single";
	$scope.lstTableSerials = [];
	createTableDDSerialSingle($scope.lstTableSerials)
	$scope.showModalFunction("modalSerialList");
}

// fill gia tri len table khi chon serial
$scope.serialTypeChangeFn = function(item) {
	$scope.lstTableSerials = [];
	$scope.fillDataDDTableSerial($scope.lstTableSerials);
}

// Tao table serial
function createTableDDSerialSingle(dataItem) {
	oTableDDSerialSingle = $('#tableDDSerialSingle').DataTable({
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
		"order":[],
		"info" : true,
		"select" : {
			style : 'single',
			info : false
		},
		"scrollX" : true,
		"columns" : [ {
			"mData" : "toSerial",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "warrantyNo",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, ],
		"oLanguage" : {
			"sInfo" : TOTAL_RECORD + "_TOTAL_",
			"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
			"sInfoEmpty" : "",
			"sInfoFiltered" : "",
			"sLengthMenu" : "_MENU_",
			"sSearch" : LABEL_SEARCH,
			"oPaginate" : {
				"sFirst" : FIRST_PAGE,
				"sLast" : LAST_PAGE,
				"sNext" : NEXT_PAGE,
				"sPrevious" : PREV_PAGE,
			},
			"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
		}
	});
}

// Tao table serial
function createTableDDSerialStrip(dataItem) {
	oTableDDSerialStrip = $('#tableDDSerialStrip').DataTable({
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
		"order":[],
		"info" : true,
		"select" : {
			style : 'single',
			info : false
		},
		"scrollX" : true,
		"columns" : [ {
			"mData" : "fromSerial",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "toSerial",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "quantity",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, ],
		"oLanguage" : {
			"sInfo" : TOTAL_RECORD + "_TOTAL_",
			"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
			"sInfoEmpty" : "",
			"sInfoFiltered" : "",
			"sLengthMenu" : "_MENU_",
			"sSearch" : LABEL_SEARCH,
			"oPaginate" : {
				"sFirst" : FIRST_PAGE,
				"sLast" : LAST_PAGE,
				"sNext" : NEXT_PAGE,
				"sPrevious" : PREV_PAGE,
			},
			"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
		}
	});
}

// button tim kiem serial
$scope.onddSearchSerialClick = function() {
	if ($scope.model.ddFromSerial == null || $scope.model.ddFromSerial == undefined || $scope.model.ddFromSerial == '') {
		bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"),
				"");
		return;
	}
	if ($scope.model.ddToSerial == null || $scope.model.ddToSerial == undefined || $scope.model.ddToSerial == '') {
		bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"),
				"");
		return;
	}
	var serialSearch = {
		"goodsId" : $scope.itemGoodSelected.goodsId,
		"stateId" : $scope.itemGoodQuantitySelected.stateId,
		"internalStockId" : $scope.model.stockInternalType.code,
		"fromSerial" : $scope.model.ddFromSerial,
		"toSerial" : $scope.model.ddToSerial,
		"quantity" : $scope.model.ddQuantity,
		"isCheckQtyIssue" : "true",
		"stockId" : $localStorage.clientContext.sessionStockID,
		"typeSerialSearch" : $scope.model.ddSerialTypeSearch,
	}

	fctRenewWarrantyNumber.getStockSerialByCondition(serialSearch, function(result) {
		if (result != null && result != undefined) {
			if (result.status == '0') {
				bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
			} else if (result.length > 0) {
				$scope.lstTableSerials = result;
				$scope.fillDataDDTableSerial($scope.lstTableSerials);
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerial(lstNull);
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate
						.instant("vnm.lable.vnm.name"), "");
			}
		} else {
			var lstNull = [];
			$scope.fillDataDDTableSerial(lstNull);
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"),
					"");
		}
	});
}

// tao table serial
$scope.fillDataDDTableSerial = function(dataItem) {
	if ($scope.model.ddSerialTypeSearch == 'single') {
		$('#divTableDDSerialSingle').css('display', 'block');
		$('#divTableDDSerialStrip').css('display', 'none');
		createTableDDSerialSingle(dataItem);
	} else {
		$('#divTableDDSerialSingle').css('display', 'none');
		$('#divTableDDSerialStrip').css('display', 'block');
		createTableDDSerialStrip(dataItem);
	}

	var quantityX = 0;
	if (dataItem != null && dataItem != undefined && dataItem.length > 0) {
		for (var i = 0; i < dataItem.length; i++) {
			var iQuantity = parseInt(dataItem[i].quantity == '' ? '0' : dataItem[i].quantity);
			quantityX += iQuantity;
		}
	}
	$scope.model.ddTotal = quantityX;
}

// Button chi tiet
$scope.viewDetail = function() {
	var lstNull = [];
	$scope.lstSerialSETC = [];
	createTableDDSerialSingleSETC(lstNull);
	if ($scope.typeAction == 'EDIT') {
		if ($scope.itemGoodSelected.lstTransactionSerial != null && $scope.itemGoodSelected.lstTransactionSerial != undefined
				&& $scope.itemGoodSelected.lstTransactionSerial.length > 0) {
			createTableDDSerialSingleSETC2($scope.itemGoodSelected.lstTransactionSerial);
			$scope.model.showRemoveSerial = false;
			$scope.model.goodsForm.lstTransactionSerial.forEach(function(item) {
				$scope.lstSerialSETC.push(Object.assign({}, item))
			});
		} else {
			createTableDDSerialSingleSETC2(lstNull);
			$scope.model.showRemoveSerial = true;
		}
	} else if ($scope.typeAction == 'ADD') {
		if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.lstTransactionSerial != null
				&& $scope.model.goodsForm.lstTransactionSerial != undefined && $scope.model.goodsForm.lstTransactionSerial.length > 0) {
			createTableDDSerialSingleSETC2($scope.model.goodsForm.lstTransactionSerial);
			$scope.model.showRemoveSerial = false;
			$scope.model.goodsForm.lstTransactionSerial.forEach(function(item) {
				$scope.lstSerialSETC.push(Object.assign({}, item))
			});
		} else {
			createTableDDSerialSingleSETC2(lstNull);
			$scope.model.showRemoveSerial = true;
		}
	} else {
		createTableDDSerialSingleSETC2(lstNull);
		$scope.model.showRemoveSerial = true;
	}
	$scope.model.number = $scope.model.goodQuantity;
	$scope.model.showAddSerial = true;
	$scope.showModalFunction("modalStockDetail");
}

$scope.lstSerialSETCTmp = [];
$scope.lstSerialSETC = [];
$scope.lstTableSerialsSETC = [];
$scope.lstTableSerialsSETCTmp = [];
$scope.fileSuccess = []
$scope.lstSerialSETCInStock = [];

// Upload file
var uploaderListDetail = $scope.uploaderListDetail = new FileUploader({
	url : eim_url + '/epos/inventory/getListSerianFromFile'
});
// Another user-defined filter set max file size
uploaderListDetail.filters.push({
	'name' : 'enforceMaxFileSize',
	'fn' : function(item) {
		var fileName = item.name;
		var sizeFile = item.size;
		var fileExtValue = fileName.split(".").pop();

		if (fileExtValue.toUpperCase() != "xlsx".toUpperCase() && fileExtValue.toUpperCase() != "xls".toUpperCase()) {
			var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0009');
			bootboxAlertFocus(TEMPLATE_ERROR, "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		return true;
	}
});

// set data before upload for each item
uploaderListDetail.onBeforeUploadItem = function(item) {
	overLoading();
	$scope.model.linkFile = item._file.name;

	item.headers = {
		Authorization : 'Bearer ' + $localStorage.clientContext.token
	};
	var form_data = new FormData();
	item.formData.push(form_data);
}

// on item upload success
uploaderListDetail.onSuccessItem = function(fileItem, response, status, headers) {
	if (response.length > 0) {
		$scope.fileSuccess = [];
		angular.forEach(response, function(item) {
			$scope.fileSuccess.push(item);
		})
	} else {
		bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
		$scope.model.linkFile = '';
		$scope.model.fromNumber = '';
		$scope.model.toNumber = '';
		$scope.model.quantity = '';
		uploaderListDetail.clearQueue();
		$scope.disabledUploadAllFile = true;
		$scope.fileSuccess = [];
		closeOverLay();
		return;
	}

	closeOverLay();
}

// on item upload error
uploaderListDetail.onErrorItem = function(fileItem, response, status, headers) {
	closeOverLay();
	bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
	$scope.model.linkFile = '';
	$scope.model.fromNumber = '';
	$scope.model.toNumber = '';
	$scope.model.quantity = '';
	uploaderListDetail.clearQueue();
	$scope.disabledUploadAllFile = true;
	$scope.fileSuccess = [];
	return;
}

uploaderListDetail.onAfterAddingAll = function(items) {
	overLoading("Uploading...");
	if (items != null) {
		uploaderListDetail.uploadAll();
	}
}
var zIndexmodalStockDetail = $("#modalStockDetail").css("z-index");
var zIndexDialogModal = $("#modalAddSerial").css("z-index");
$scope.uploadAllFile = function(uploaderIn) {
	overLoading();
	bootbox.confirm({
		message : $translate.instant('vnm.FormStockImportFromPartner.messageAccept'),
		buttons : {
			confirm : {
				label : $translate.instant('vnm.dialogButtonDetail.label.buttonOk'),
				className : 'btn-success'
			},
			cancel : {
				label : $translate.instant('vnm.dialogButtonDetail.label.buttonRject'),
				className : 'btn-danger'
			}
		},
		callback : function(result) {
			if (result) {
				$("#modalStockDetail").css('zIndex', 50);
				$("#modalAddSerial").css('zIndex', 100);

				overLoading();

				var serialSearch = {				
					"lstTransSerial" : $scope.fileSuccess,
					"goodsId" : $scope.model.goodsForm.goodsId,
					"stateId" : $scope.model.statesForm.stateId,
					"internalStockId" : $scope.model.stockInternalTypeForm.code,
					"fromSerial" : $scope.model.fromNumber,
					"toSerial" : $scope.model.toNumber,
					"quantity" : $scope.model.number,
					"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
					"stockId" : $localStorage.clientContext.sessionStockID,
					"typeSerialSearch" : "single",
				}
				// check
				fctRenewWarrantyNumber.getSerialListInStock(serialSearch, function(result) {
					if (result == null || result == undefined || result.status == '0') {
						message = result.messages;
						closeOverLay();
						bootboxConfirm($translate.instant("vnm.ExportStockToPartner.error.import.serial.title"), $translate
								.instant("vnm.ExportStockToPartner.error.import.serial.message"), $scope.btnFSaveErrorFileConfirmOK,
								$scope.btnFSaveErrorFileConfirmNOK);
					} else {
						$scope.lstTableSerialsSETCTmp = result;
						/*Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.fileSuccess);*/
						$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
						$scope.hideModalFunction("modalAddSerial");
						$scope.disabledUploadAllFile = true;
						bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.success').replace('%quantity',
								$scope.fileSuccess.length), "", $translate.instant("vnm.lable.vnm.name"), "");
						$scope.model.showAddSerial = false;
						closeOverLay();
					}
					$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
					$("#modalAddSerial").css('zIndex', zIndexDialogModal);
				});

			} else {
				closeOverLay();
			}
		}
	});

}

$scope.btnFSaveErrorFileConfirmOK = function() {
	$scope.downLoadFileError(message);
	$scope.lstTableSerialsSETCTmp = []
	$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
}
$scope.btnFSaveErrorFileConfirmNOK = function() {
	$scope.hideModalFunction("modalAddSerial");
	$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
	$("#modalAddSerial").css('zIndex', zIndexDialogModal);
	$scope.lstTableSerialsSETCTmp = []
	$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
	closeOverLay();
}
$scope.downLoadFileError = function(errorMessage) {
	overLoading("Downloading file error...");
	var objError = {
		'formName' : 'StockExportToCenter_',
		'message' : errorMessage,
	};
	var url = eim_url + '/epos/inventory/downLoadFileError';
	$http.post(url, objError, {
		responseType : 'arraybuffer'
	}).success(function(response, status, headers, config) {
		overLoading("Downloading file mẫu...");
		download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
		closeOverLay();
	}).error(function(data) {
		bootboxAlertFocus($translate.instant('vnm.messages.validate.500'), "", $translate.instant("vnm.lable.vnm.name"), "");
		closeOverLay();
	});
	$scope.hideModalFunction("modalAddSerial");
}

$scope.checkBarCode = function(item) {
	if (item.typeCheckBox == true) {
		$scope.isNotSearch = true;
	} else {
		$scope.isNotSearch = false;
	}
}

$scope.addFile = function() {
	if ('' === $scope.model.linkFile || undefined == $scope.model.linkFile) {
		bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.inputFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
		return;
	} else {
		if ($scope.fileSuccess.length > 0) {
			var maxSerial = $scope.fileSuccess[0].fromSerial;
			var minSerial = $scope.fileSuccess[0].fromSerial;
			for (var i = 0; i < $scope.fileSuccess.length; i++) {
				if (maxSerial.localeCompare($scope.fileSuccess[i].fromSerial) < 0) {
					maxSerial = $scope.fileSuccess[i].fromSerial;
				}
				if (minSerial.localeCompare($scope.fileSuccess[i].fromSerial) > 0) {
					minSerial = $scope.fileSuccess[i].fromSerial;
				}
			}
			$scope.model.fromNumber = minSerial;
			$scope.model.toNumber = maxSerial;
			$scope.model.quantity = $scope.fileSuccess.length;
			$scope.disabledUploadAllFile = false;
		} else {
			bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
	}

}

$scope.downloadFileTemplateServer = function() {
	var attachFile = {};
	attachFile.fileName = "Template_Upload_Serial.xlsx";
	attachFile.folder = "Template_Upload_Serial.xlsx";
	dowloadFile(attachFile);
}
dowloadFile = function(data) {
	overLoading("Downloading file mẫu...");
	var url = eim_url + '/epos/inventory/downLoadFileTemplate';
	$http.post(url, data, {
		responseType : 'arraybuffer'
	}).success(function(response, status, headers, config) {
		overLoading("Downloading file mẫu...");
		download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
		closeOverLay();
	}).error(function(data) {
		bootboxAlertFocus($translate.instant('vnm.messages.validate.' + data[0]), "", $translate.instant("vnm.lable.vnm.name"), "");
		closeOverLay();
	});
}

$scope.dialogActionBack = function() {

	$scope.model.linkFile = '';
	$scope.model.fromNumber = '';
	$scope.model.toNumber = '';
	$scope.model.quantity = '';
	uploaderListDetail.clearQueue();
	closeOverLay();
	$scope.disabledUploadAllFile = true;
	$scope.fileSuccess = [];
	$scope.hideModalFunction("modalAddSerial");
}

// Button tim kiem
$scope.btnSearchSerial = function() {
	if ($scope.model.fromSerial == null || $scope.model.fromSerial == undefined || $scope.model.fromSerial == '') {
		bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"),
				"");
		return;
	} else if ($scope.model.fromSerial.length > 20) {
		bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.max.length'), "", $translate
				.instant("vnm.lable.vnm.name"), "");
		return;
	}
	if ($scope.model.toSerial == null || $scope.model.toSerial == undefined || $scope.model.toSerial == '') {
		bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"),
				"");
		return;
	} else if ($scope.model.toSerial.length > 20) {
		bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.max.length'), "", $translate
				.instant("vnm.lable.vnm.name"), "");
		return;
	}
	if ($scope.model.number != null && $scope.model.number != undefined && $scope.model.number.length > 5) {
		bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.number.max.length'), "", $translate.instant("vnm.lable.vnm.name"),
				"");
		return;
	}
	var serialSearch = {
		"goodsId" : $scope.model.goodsForm.goodsId,
		"stateId" : $scope.model.statesForm.stateId,
		"internalStockId" : $scope.model.stockInternalTypeForm.code,
		"fromSerial" : $scope.model.fromSerial,
		"toSerial" : $scope.model.toSerial,
		"quantity" : $scope.model.number,
		"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
		"stockId" : $localStorage.clientContext.sessionStockID,
		"typeSerialSearch" : "single",
	}

	fctRenewWarrantyNumber.getStockSerialByCondition(serialSearch, function(result) {
		$scope.lstTableSerialsSETCTmp = [];
		if (result != null && result != undefined) {
			 if (result.length > 0) {
				//Bùi ĐÌnh Đạt
				
				$scope.lstTableSerialsSETC = result;
				
				
				//end Bùi Đình Đạt
				
				Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.lstTableSerialsSETC);
				$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
				$scope.model.showAddSerial = false;
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate
						.instant("vnm.lable.vnm.name"), "");
			}
		} else {
			var lstNull = [];
			$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"),
					"");
		}
	});
}

$scope.searchSingelSerial = function() {
	$scope.lstTableSerialsSETCTmp = [];
	var serialSearch = {
		"goodsId" : $scope.model.goodsForm.goodsId,
		"stateId" : $scope.model.statesForm.stateId,
		"internalStockId" : $scope.model.stockInternalTypeForm.internalStockId,
		"fromSerial" : $scope.model.fromSerial,
		"toSerial" : $scope.model.toSerial,
		"quantity" : $scope.model.number,
		"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
		"stockId" : $localStorage.clientContext.sessionStockID,
	}
	fctRenewWarrantyNumber.getSingelSerialInStock(serialSearch,
			function(result) {
				if (result.status == '0' && result.status != 'undefined') {
					App.unblockUI("#contentMain");
					bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate
							.instant("vnm.lable.vnm.name"), "");

				} else {
					if (result == "") {
						bootboxAlertFocus($translate.instant('vnm.messages.serial.is.not.exists'), "", $translate
								.instant("vnm.lable.vnm.name"), "");
					} else {
						$scope.lstTableSerialsSETC = [];
						$scope.lstTableSerialsSETC.push(result);
						Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.lstTableSerialsSETC);
						$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
						$scope.model.showAddSerial = false;
					}

				}
			});
}

// button them serial
$scope.addSerial = function() {
	if ($scope.lstSerialSETCTmp.length == 0 && $scope.lstTableSerialsSETCTmp.length > 0) {
		$scope.lstSerialSETCTmp.push($scope.lstTableSerialsSETCTmp[0]);
	}
	for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
		for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
			if ($scope.lstSerialSETC[j].fromSerial == $scope.lstSerialSETCTmp[i].fromSerial) {
				bootboxAlertFocus("Số Serial " + $scope.lstSerialSETCTmp[i].fromSerial + " đã có trong danh sách được chuyển", "",
						$translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
		}
	}

	if ($scope.lstSerialSETCTmp.length == 0) {
		bootboxAlertFocus("Chưa chọn Serial", "", $translate.instant("vnm.lable.vnm.name"), "");
		return;
	} else {
		for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
			$scope.lstSerialSETC.push($scope.lstSerialSETCTmp[i]);
			var index = $scope.lstTableSerialsSETCTmp.indexOf($scope.lstSerialSETCTmp[i]);
			$scope.lstTableSerialsSETCTmp.splice(index, 1);
		}
		$scope.lstSerialSETCTmp = [];
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
		if ($scope.lstTableSerialsSETCTmp.length == 0) {
			$scope.model.showAddSerial = true;
		} else {
			$scope.model.showAddSerial = false;
		}
		$scope.model.showRemoveSerial = false;
	}

}

// Them tat ca serial
$scope.addAllSerial = function() {
	for (var i = 0; i < $scope.lstTableSerialsSETCTmp.length; i++) {
		for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
			if ($scope.lstSerialSETC[j].fromSerial == $scope.lstTableSerialsSETCTmp[i].fromSerial) {
				bootboxAlertFocus("Số Serial " + $scope.lstTableSerialsSETCTmp[i].fromSerial + " đã có trong danh sách được chuyển", "",
						$translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
		}
	}
	Array.prototype.push.apply($scope.lstSerialSETC, $scope.lstTableSerialsSETCTmp);
	$scope.lstTableSerialsSETCTmp = [];
	$scope.lstSerialSETCTmp = [];
	$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
	$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
	$scope.model.showAddSerial = true;
	$scope.model.showRemoveSerial = false;
}

// Xoa serial
$scope.removeSerial = function() {
	if ($scope.lstSerialSETCTmp.length == 0 && $scope.lstSerialSETC.length > 0) {
		$scope.lstSerialSETCTmp.push($scope.lstSerialSETC[0]);
	}
	if ($scope.lstSerialSETCTmp.length == 0) {
		bootboxAlertFocus("Chưa chọn Serial", "", $translate.instant("vnm.lable.vnm.name"), "");
		return;
	} else {
		for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
			var index = $scope.lstSerialSETC.indexOf($scope.lstSerialSETCTmp[i]);
			$scope.lstSerialSETC.splice(index, 1);

			var addxx = true;
			for (var j = 0; j < $scope.lstTableSerialsSETCTmp.length; j++) {
				if ($scope.lstSerialSETCTmp[i].fromSerial == $scope.lstTableSerialsSETCTmp[j].fromSerial) {
					addxx = false;
					break;
				}
			}
			if (addxx) {
				$scope.lstTableSerialsSETCTmp.push($scope.lstSerialSETCTmp[i]);
			}
		}
		$scope.lstSerialSETCTmp = [];
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
		if ($scope.lstSerialSETC.length == 0) {
			$scope.model.showRemoveSerial = true;
		}
		$scope.model.showAddSerial = false;
	}

}

// Xoa tat ca serial
$scope.removeAll = function() {
	for (var i = 0; i < $scope.lstSerialSETC.length; i++) {
		var addx = true;
		for (var j = 0; j < $scope.lstTableSerialsSETCTmp.length; j++) {
			if ($scope.lstTableSerialsSETCTmp[j].fromSerial == $scope.lstSerialSETC[i].fromSerial) {
				addx = false;
				break;
			}
		}
		if (addx) {
			$scope.lstTableSerialsSETCTmp.push($scope.lstSerialSETC[i]);
		}
	}
	$scope.lstSerialSETC = [];
	$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
	$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
	$scope.model.showRemoveSerial = true;
	$scope.model.showAddSerial = false;
}
$scope.btnGetOne = function() {

}

$scope.btnAcceptClick = function() {
	if ($scope.lstSerialSETC == null || $scope.lstSerialSETC == undefined || $scope.lstSerialSETC.length <= 0) {
		bootboxAlertFocus($translate.instant("vnm.stock_export_to_center.must.choose.serial"), "",
				$translate.instant("vnm.lable.vnm.name"), "");
		return;
	}
	if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
		$scope.model.goodsForm.lstTransactionSerial = [];
		$scope.lstSerialSETC.forEach(function(item) {
			$scope.model.goodsForm.lstTransactionSerial.push(Object.assign({}, item))
		});
		$scope.model.mdnNumberDetail = $scope.model.goodsForm.lstTransactionSerial.length;
		$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
		$scope.model.showAddSerial = true;
		$scope.model.showRemoveSerial = true;
	} else {
		$scope.model.goodsForm.lstTransactionSerial = [];
	}
	$scope.lstSerialSETC = [];
	$scope.hideModalFunction("modalStockDetail");
}

$scope.btnBackSerial = function() {
	if ($scope.lstSerialSETC != null && $scope.lstSerialSETC != undefined && $scope.model.goodsForm.lstTransactionSerial != null
			&& $scope.model.goodsForm.lstTransactionSerial != undefined
			&& !arraysEqual($scope.lstSerialSETC, $scope.model.goodsForm.lstTransactionSerial)) {
		bootboxConfirm3($translate.instant("vnm.ExportStockToPartner.confirm.add.serial.title"), $translate
				.instant("vnm.ExportStockToPartner.confirm.add.serial.message"), $scope.btnFBackOnclickConfirmOK,
				$scope.btnFBackOnclickConfirmCancel, $scope.btnFBackOnclickConfirmNOK);
	} else {
		$scope.model.fromSerial = '';
		$scope.model.toSerial = '';
		$scope.model.serial = '';
		$scope.model.number = $scope.model.goodQuantity;
		$scope.model.lstTableSerialsSETCTmp = [];
		$scope.model.showAddSerial = false;
		$scope.model.showRemoveSerial = false;
		$scope.hideModalFunction("modalStockDetail");
	}
}

function arraysEqual(a1, a2) {
	return JSON.stringify(a1) == JSON.stringify(a2);
}

$scope.btnFBackOnclickConfirmOK = function() {
	if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
		$scope.model.goodsForm.lstTransactionSerial = [];
		$scope.lstSerialSETC.forEach(function(item) {
			$scope.model.goodsForm.lstTransactionSerial.push(Object.assign({}, item))
		});
		$scope.model.mdnNumberDetail = $scope.model.goodsForm.lstTransactionSerial.length;
		$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
		$scope.model.showAddSerial = true;
		$scope.model.showRemoveSerial = true;
	} else {
		$scope.model.goodsForm.lstTransactionSerial = [];
	}
	$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
	$scope.lstSerialSETC = [];
	$scope.hideModalFunction("modalStockDetail");
}

$scope.btnFBackOnclickConfirmNOK = function() {
	$scope.model.fromSerial = '';
	$scope.model.toSerial = '';
	$scope.model.serial = '';
	$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
	$scope.model.number = $scope.model.goodQuantity;
	$scope.model.lstTableSerialsSETCTmp = [];
	$scope.lstSerialSETC = [];
	$scope.model.showAddSerial = true;
	$scope.model.showRemoveSerial = true;
	$scope.hideModalFunction("modalStockDetail");
}

$scope.btnFBackOnclickConfirmCancel = function() {

}

$scope.fillDataDDTableSerialSETC = function(dataItem) {
	createTableDDSerialSingleSETC(dataItem);
}
$scope.fillDataDDTableSerialSETC2 = function(dataItem) {
	createTableDDSerialSingleSETC2(dataItem);
}
$scope.showModalStockDetail = function() {
	$scope.showModalFunction("modalStockDetail");
}

$scope.showDialogAddFile = function() {
	$scope.model.linkFile = '';
	$scope.model.fromNumber = '';
	$scope.model.toNumber = '';
	$scope.model.quantity = '';
	uploaderListDetail.clearQueue();
	closeOverLay();
	$scope.disabledUploadAllFile = true;
	$scope.fileSuccess = [];
	$scope.showModalFunction("modalAddSerial");
}

$scope.btnAdjustOnclick = function(item) {
	$scope.selectedShipment = item;

}

$scope.viewStockSETC = function() {
	$scope.showModalFunction("modalStockInfo");
}

$scope.viewStockSETCDetail = function() {
	$scope.lstSerialSETCTmp = [];
	$scope.lstSerialSETC = [];
	$scope.lstTableSerialsSETC = [];
	$scope.lstTableSerialsSETCTmp = [];
	$scope.fileSuccess = []
	$scope.lstSerialSETCInStock = [];
	$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
	$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
	$scope.showModalFunction("modalStockDetail");
}
//SINH PHIẾU BH
$scope.btnGenerateWarrantyNo = function(){
	
	zIndexmodalStockDetail = $("#modalStockDetail").css("z-index");
	zIndexDialogModal = $("#modalAddSerial").css("z-index");
	$("#modalStockDetail").css('zIndex', 50);
	$("#modalAddSerial").css('zIndex', 100);
	
	overLoading("loading...");
	
	var listWarrantySerial = $scope.lstSerialSETC;
	fctRenewWarrantyNumber.generateNewWarrantyNo(listWarrantySerial, function(result) {
		$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
		$("#modalAddSerial").css('zIndex', zIndexDialogModal);
		$scope.lstSerialSETC = result;
		createTableDDSerialSingleSETC2($scope.lstSerialSETC);
		closeOverLay();
	});
}

var serialX0;
function createTableDDSerialSingleSETC(dataItem) {
	oTableDDSerialSingleSETC = $('#tblSerialSingle').DataTable({
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
		"bSort" : false,
		"order":[],
		"info" : true,
		"select" : {
			style : 'os',
			info : false
		},
		"autoWidth" : true,
		"paginationType" : "full_numbers",
		"scrollX" : true,
		"columns" : [ {
			"mData" : "toSerial",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "warrantyNo",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, ],
		"oLanguage" : {
			"sInfo" : TOTAL_RECORD + "_TOTAL_",
			"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
			"sInfoEmpty" : "",
			"sInfoFiltered" : "",
			"sLengthMenu" : "_MENU_",
			"sSearch" : LABEL_SEARCH,
			"oPaginate" : {
				"sFirst" : FIRST_PAGE,
				"sLast" : LAST_PAGE,
				"sNext" : NEXT_PAGE,
				"sPrevious" : PREV_PAGE,
			},
			"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
		},
		"createdRow" : function(row, data, rowIndex) {
			if (rowIndex == 0 || rowIndex == '0') {
				$(row).addClass('selected');
				serialX0 = $(row);
			}
		}
	});

	oTableDDSerialSingleSETC.on("select", function(e, dt, type, indexes) {
		$scope.lstSerialSETCTmp = [];
		var rowData = oTableDDSerialSingleSETC.rows(indexes).data().toArray();
		for (var i = 0; i < rowData.length; i++) {
			$scope.lstSerialSETCTmp.push(rowData[i]);
		}
		if (indexes != 0 && indexes != '0') {
			serialX0.removeClass('selected');
		}
	});

}
var serialX1;
function createTableDDSerialSingleSETC2(dataItem) {
	oTableDDSerialSingleSETC2 = $('#tblSerialSingle2').DataTable({
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
		"bSort" : false,
		"order":[],
		"info" : true,
		"select" : {
			style : 'os',
			info : false
		},
		"scrollX" : true,
		"autoWidth" : true,
		"paginationType" : "full_numbers",
		"columns" : [ {
			"mData" : "toSerial",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, {
			"mData" : "warrantyNo",
			"render" : function(data, type, row) {
				x = data == null ? '' : data;
				return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
			}
		}, 
		
		],
		"oLanguage" : {
			"sInfo" : TOTAL_RECORD + "_TOTAL_",
			"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
			"sInfoEmpty" : "",
			"sInfoFiltered" : "",
			"sLengthMenu" : "_MENU_",
			"sSearch" : LABEL_SEARCH,
			"oPaginate" : {
				"sFirst" : FIRST_PAGE,
				"sLast" : LAST_PAGE,
				"sNext" : NEXT_PAGE,
				"sPrevious" : PREV_PAGE,
			},
			"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
		},
		"createdRow" : function(row, data, rowIndex) {
			if (rowIndex == 0 || rowIndex == '0') {
				$(row).addClass('selected');
				serialX1 = $(row);
			}
		}
	});

	oTableDDSerialSingleSETC2.on("select", function(e, dt, type, indexes) {
		$scope.lstSerialSETCTmp = [];
		var rowData = oTableDDSerialSingleSETC2.rows(indexes).data().toArray();
		for (var i = 0; i < rowData.length; i++) {
			$scope.lstSerialSETCTmp.push(rowData[i]);
		}
		if (indexes != 0 && indexes != '0') {
			serialX1.removeClass('selected');
		}
	});
}

// show popup
$scope.showModalFunction = function(idModal) {
	$('#' + idModal).modal('show');
	$('#' + idModal).on('shown.bs.modal', function(e) {
		$.fn.dataTable.tables({
			visible : true,
			api : true
		}).columns.adjust();
		angular.element($("#tblListStaff_filter").find("input")[0]).focus();
		angular.element($("#tblListShop_filter").find("input")[0]).focus();
	});
}

// hide popup
$scope.hideModalFunction = function(idModal) {
	$('#' + idModal).modal('hide');
}



});