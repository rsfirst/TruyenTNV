app_vnm.factory('FormSuperiorGoodImport', function($http, $translate) {
	return {
		onSearch : function(data,callback) {
			var url = eim_url + "/epos/inventory/SearchSuperiorGoodImport";
			$http.post(url, data).success(callback)
	            .error(function(data, status, headers, config) {
	                closeOverLay();
	                bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
	            });
		},
		getStockTransExec : function(data, callback) {
			var url = eim_url + '/epos/FormSuperiorStockImport/getStockTransactionsList';
			$http.post(url, data).success(callback)
			.error(function(data, status, headers, config) {
						closeOverLay();
						bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getExistedStates : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedStates";
			$http.post(url).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
					});
		},
		getExistedGoodsGroups : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoods";
			$http.post(url, data).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
					});
		},
		getStockTransactionDetail : function(data, callback) {
			var url = eim_url + '/epos/FormSuperiorStockImport/getStockTransactionDetail';
			$http.post(url, data).success(callback)
			.error(function(data, status, headers, config) {
						closeOverLay();
						bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onInsert : function(data,callback) {
			var url = eim_url + "/epos/inventory/insertSuperiorGoodImport";
			$http.post(url, data).success(callback)
	            .error(function(data, status, headers, config) {
	                closeOverLay();
	                bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
	            });
		},
		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getTemplateValue";
			$http.post(url, data).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootboxAlertFocus(data, "");
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
		onSearchGetSerialList : function(data,callback) {
			var url = eim_url + "/epos/inventory/getSerialFormSuperiorGoodImport";
			$http.post(url, data).success(callback)
	            .error(function(data, status, headers, config) {
	                closeOverLay();
	                bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
	            });
		},
	}
});

app_vnm.controller('ctrl-FormSuperiorGoodImport',
		function($scope, $rootScope, $translate, $compile, $timeout,
				$uibModal, $location, $window, FileUploader, $filter,
				$http, NgTableParams, $localStorage, FormSuperiorGoodImport){
	
	$scope.model = {};
	/*$scope.GetTableSearchStockShop = [];*/
    $scope.StatusInputFom  = [
    	{ 'Id': '0', 'Title': 'Chưa nhập' },
    	{ 'Id': '1', 'Title': 'Đã nhập' },
    ];
    $scope.model.StatusInputFom=$scope.StatusInputFom[0].Id;
    
    $scope.model.ReasonCodeInputFom="NTC";
    $scope.model.ReasonNameInputFom=$translate.instant('vnm.FormSuperiorGoodImport.page.title');
    var checkserch=0;
	var checkserch2=0;
    var d = new Date();
    var date=d.getDate();
    if(date<10){
    	date="0"+date;
    }
    var month=d.getMonth()+1;
    if(month<10){
    	month="0"+month;
    }
    var today=date+"/"+month+"/"+d.getFullYear();
    $scope.model.searchToDate=today;
    
	var initialize = function() {
		overLoading();
		window.document.title = $translate.instant('vnm.FormSuperiorGoodImport.page.title');
		FormSuperiorGoodImport.getExistedStates(function(resultStates) {
			if (resultStates != null && resultStates != undefined && 
					resultStates.status != '0' && resultStates.length > 0) {
				
				console.log(resultStates);
				$scope.lstStatesForm = resultStates;
			}
		});
		
		var resourceCodeForm = {
				"code" : "",
				"name" : "",
			}
		
		FormSuperiorGoodImport.getExistedGoodsGroups(resourceCodeForm,function(resultListGoodGroup) {
			 console.log(resultListGoodGroup);
			 $scope.lstGoodGroupForm = resultListGoodGroup;
			 createDataTableEducation($scope.datatableEducation);
			 createDataTableDetailsList($scope.GetTableSearchDetailsList);
			 closeOverLay();
		 });
		
	}
	var ROW_NOT_SELECTED = -1;
	var STOCK_ID = $localStorage.clientContext.sessionStockID;
	$scope.itemGoodQuantitySelected = ROW_NOT_SELECTED;
	/*$scope.itemGoodSelected = ROW_NOT_SELECTED;*/
	$scope.disableBtnserian = true;
	$scope.disableBtnPrint = true;
	initialize();
    
    $scope.itemSelectedCmdStock = {};
	function createDataTableEducation(dataItem) {
		oTableItem = $('#example').DataTable({
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
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "200",
			"columns" : [ 
	              {"mData":"cmdCode", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"cmdDate", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"cmdStatus", "render": function(data, type, row){
		 	        	 return data==null ? "" : (data == '1' ? "Đã nhập" : "Chưa nhập");
	 	          }},
	              {"mData":"reasonId", "render": function(data, type, row){
		 	        	 return data==null ? "" : (data == '602' ? "Nhập lại hàng bị cấp trên từ chối" : "");
	 	          }},
				  {"mData":"cmdNote", "render": function(data, type, row){
		 	        	 return data==null ? "" :data;
	 	          }}
	            ],
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sSearch": LABEL_SEARCH,
					"sLengthMenu":"_MENU_",
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
		$('#example tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
            $(this).removeClass('selected');
            var rowData = oTableItem.row( this ).data();
            $scope.itemGoodSelected = rowData;
            
        	oTableItem.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            if(rowData.cmdStatus==1){
            	$scope.disableBtnPrint = false;
            }else{
            	$scope.disableBtnPrint = true;
            }
            $scope.getStockTransactionDetailFn(rowData);
		});
	}
    
    $scope.itemGoodSelectedDetailsList = {};
	function createDataTableDetailsList(dataItem1) {
		oTableItem1 = $('#example1').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem1,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : true,
		    "info":true,
		    "order": [[ 0, "desc" ]],
		    "select": {
		        style: 'os',
		        info: false
		    },
		    "autoWidth": true,
		    "paginationType" : "full_numbers",
		    "columns" : [ 
	              {"mData":"goodsCodeStr", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"goodNameStr", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"stateText", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"unitName", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	 	         {"mData":"quantityIssue", "render": function(data, type, row){
	 	        	 return data==null ? "" : data;
	 	         }}
	            ],
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
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
		$('#example1 tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
            $(this).removeClass('selected');
            var rowData1 = oTableItem1.row( this ).data();
            $scope.itemGoodSelectedDetailsList = rowData1;
            oTableItem1.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            $scope.checkserial();
           /* $scope.onSearchGetSerialList();
	        $scope.showModalFunction("modalSerialList");*/
	 });
	}
	 $scope.checkserial=function(){
		 overLoading();
        var data ={
				"stock_trans_id":$scope.itemGoodSelectedDetailsList.stockTransId,
				"goods_id":$scope.itemGoodSelectedDetailsList.goodsId,
				"state_id":$scope.itemGoodSelectedDetailsList.stateId,
			}
		FormSuperiorGoodImport.onSearchGetSerialList(data,function(result){
				if (result != null && result != undefined) {
					if (result.status == '0') {
						bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
					} else if(result.length > 0){
						$scope.GetTableSearchSerialShop = result;
						var quantityX = 0;
						if ($scope.GetTableSearchSerialShop != null && $scope.GetTableSearchSerialShop != undefined && $scope.GetTableSearchSerialShop.length > 0) {
							for (var i = 0; i < $scope.GetTableSearchSerialShop.length; i++) {
								var iQuantity = parseInt($scope.GetTableSearchSerialShop[i].quantity == '' ? '0' : $scope.GetTableSearchSerialShop[i].quantity);
								quantityX += iQuantity;
							}
						}
						$scope.model.ddTotal = quantityX;
						createDataTableSerialList($scope.GetTableSearchSerialShop);
						$scope.disableBtnserian = false;
					}else{
						$scope.disableBtnserian = true;
						$scope.itemGoodSelectedDetailsList= result;
						createDataTableSerialList($scope.itemGoodSelectedDetailsList);
						$scope.model.ddTotal = "0";
						
					}
				}else{
					/*bootbox.alert($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onSearch"));*/
					$scope.GetTableSearchSerialShop = result;
					createDataTableSerialList($scope.GetTableSearchSerialShop);
					$scope.model.ddTotal = "0";
					$scope.disableBtnserian = true;
					/*$scope.showModalFunction("modalSerialList");*/
				}
				closeOverLay();
			});
	}
	
	$scope.itemGoodSelectedSerialList = {};
	function createDataTableSerialList(dataItem2) {
		var index=1;
		oTableItem2 = $('#example2').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem2,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : true,
		    "info":true,
		    "order": [],
		    "select": {
		        style: 'os',
		        info: false
		    },
		    "autoWidth": true,
		    "paginationType" : "full_numbers",
			"columns" : [ 
	              {"mData":"from_serial", "render": function(data, type, row){
		 	        	 return data==null ? "" : index++;
	 	          }},
	              {"mData":"from_serial", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"to_serial", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
				  {"mData":"quantity", "render": function(data, type, row){
		 	        	 return data==null ? "" :data;
	 	          }}
	            ],
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sSearch": LABEL_SEARCH,
					"sLengthMenu":"_MENU_",
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
		
		$('#example2 tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
            $(this).removeClass('selected');
            oTableItem1.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
	    });
		
	}
	function getGoodCodeAndName(goodId){
		for(var i=0; i<$scope.lstGoodGroupForm.length;i++){
			if($scope.lstGoodGroupForm[i]!= null){
				if($scope.lstGoodGroupForm[i].goodsId == goodId){
					return $scope.lstGoodGroupForm[i];
				}
			}
		}
		return null;
	}
	function getTextState(stateId){
		for(var i=0; i<$scope.lstStatesForm.length;i++){
			if($scope.lstStatesForm[i]!= null){
				if($scope.lstStatesForm[i].stateId == stateId){
					return $scope.lstStatesForm[i].name;
				}
			}
		}
		return "";
	}
	function setDataOutPutTableListGoodItem(listGoodsItem){
		for(var i =0; i< listGoodsItem.length; i++){
			if(listGoodsItem[i] != undefined && listGoodsItem[i] != null){

				var goodModel = getGoodCodeAndName(listGoodsItem[i].goodsId);
				if(goodModel != null){
					listGoodsItem[i].goodsCodeStr = goodModel.goodsCode;
					listGoodsItem[i].goodNameStr = goodModel.name;
					listGoodsItem[i].unitName = goodModel.unitName;
				}
				
				var stateText = getTextState(listGoodsItem[i].stateId);
				listGoodsItem[i].stateText = stateText;
			}
		}
		return listGoodsItem;
	}
	$scope.getStockTransactionDetailFn = function (rowData){
		overLoading();
		var dataInput = {};
		dataInput.stockId = rowData.stockTransId;
		
		FormSuperiorGoodImport.getStockTransactionDetail(dataInput,function(result) {
			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
				checkserch2=0
			} else {
				/*if(result.length == 0){
					if( checkserch2==0){
						bootbox.alert($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onSearch"));
						checkserch2=0
						return;
					}
					
				}*/
				result = setDataOutPutTableListGoodItem(result);
				createDataTableDetailsList(result);
				$scope.itemGoodSelectedDetailsList=result[0];
				if(result.length > 0){
				$scope.checkserial();
				}else{
					$scope.disableBtnserian = true;
					$scope.itemGoodSelectedDetailsList= result;
					createDataTableSerialList($scope.itemGoodSelectedDetailsList);
					$scope.model.ddTotal = "0";
				}
			}
			closeOverLay();
		});
	}
	$scope.btnSave =function(){
		if($scope.itemGoodSelected !=null){
			if($scope.itemGoodSelected.stockTransId !=null){
				if($scope.itemGoodSelected.cmdStatus==0){
			    	var messConfirm = $translate.instant($translate.instant("vnm.FormSuperiorGoodImport.mess.confim"));
			    	var header = $translate.instant($translate.instant("vnm.FormSuperiorGoodImport.page.title"));
			    	bootboxConfirm(header, messConfirm, $scope.insert, $scope.confirmKO);
				}
			}else{
				bootboxAlertFocus($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onsave1"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			}
		}else{
			bootboxAlertFocus($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onsave1"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

		}
		
	}
	//set lai du lieu sau khi import
	$scope.setListAfterImport = function(rowSelected){
		overLoading();
		for(var i = 0; i< $scope.datatableEducation.length;i++){
			if( $scope.datatableEducation[i].cmdCode == rowSelected.cmdCode){
				$scope.datatableEducation[i].cmdStatus = '1';
				$scope.datatableEducation[i].reasonId='';
				/*$scope.datatableEducation[i].cmdStatusStr = $scope.datatableEducation[1].name; */
			}
		}
		/*$scope.listItemBallot = setDataOutTableBallot($scope.listItemBallot);*/
		createDataTableEducation($scope.datatableEducation);
		/*createDataTableGoods($scope.listItemBallot);*/
		closeOverLay();
	}
	
	$scope.insert = function (){
		overLoading();
		var dataInsert ={
				"stock_trans_id": $scope.itemGoodSelected.stockTransId,
				"exec_staff_id":$localStorage.clientContext.shop.staffId,
			};
		FormSuperiorGoodImport.onInsert(dataInsert,function(result){
			if (result.status == '0') {
				bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

			} else if(result == '1'){
				
				$scope.disableBtnPrint = false;
				$scope.setListAfterImport($scope.itemGoodSelected);
				/*bootbox.alert($translate.instant('vnm.formSuperiorStockImport.mess.Success'));*/
				bootboxAlertFocus($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onsave2"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			}else{
				bootboxAlertFocus($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onsave3"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

				return;
			}
			closeOverLay();
		});
	}
	$scope.btnSerial = function(){
		$scope.showModalFunction("modalSerialList");
		/*if($scope.itemGoodSelectedDetailsList == null){
			bootbox.alert($translate.instant("vnm.FormSuperiorGoodImport.mess.error.serial"));
			return;
		}*/
		
	}
	$scope.btnFPrintOnclick = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		var templateValueSearch = {
			"code" : $scope.itemGoodSelected.stockTransId,
			"name" : $localStorage.clientContext.sessionStockID,
		}
		FormSuperiorGoodImport.getTemplateValue(templateValueSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

				} else if (result.length > 0) {
					var templateValue = result[0];
					var strDeliverStockName = "";
					if(templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined && templateValue.deliveyShopCode != '') {
						strDeliverStockName = templateValue.deliveyShopCode + " - " + templateValue.deliveyShopName;
					}
					var ReportInput = {
						"stockTransId" : $scope.itemGoodSelected.stockTransId,
						"strShopName1" : StringUtilNVL(templateValue.shopName1),
						"strShopCode" : StringUtilNVL(templateValue.shopCode),
						"strShopName" : StringUtilNVL(templateValue.shopName),
						"strShopAddress" : StringUtilNVL(templateValue.shopAddress),
						"strShopTel" : StringUtilNVL(templateValue.shopTel),
						"strShopFax" : StringUtilNVL(templateValue.shopFax),
						"strDeliveyShopCode" : StringUtilNVL(templateValue.deliveyShopCode),
						"strDeliveyShopName" : StringUtilNVL(templateValue.deliveyShopName),
						"strDeliveyShopAddress" : StringUtilNVL(templateValue.deliveyShopAddress),
						"strActionCode" : StringUtilNVL(templateValue.actionCode),
						"strActionDate" : StringUtilNVL(templateValue.actionDate),
						"strReasonName" : StringUtilNVL(templateValue.reasonName),
						"strActionStaff" : StringUtilNVL(templateValue.actionStaff),
						"strActionNote" : StringUtilNVL(templateValue.actionNote),
						"strInternalStockName" : StringUtilNVL(templateValue.internalStockName),
						"strDeliverStockName" : StringUtilNVL(strDeliverStockName),
						"fileTempName" : 'TemplateReportExportImport',
						"fileType" : '.xlsx'
					};
					
					FormSuperiorGoodImport.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
		});
	}
	$scope.showModalFunction = function(idModal) {
	    $('#' + idModal).modal('show');
	}
	$scope.hideModalFunction = function(idModal) {
	    $('#' + idModal).modal('hide');
	}
	$scope.confirmKO = function(){
		closeOverLay();
	}
	function isDate(txtDate)
	{
	  var currVal = txtDate;
	  if(currVal == '')
	    return false;
	  
	  //Declare Regex  
	  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; 
	  var dtArray = currVal.match(rxDatePattern); // is format OK?
	 
	  if (dtArray == null)
	     return false;
	 
	//Checks for dd/mm/yyyy format.
	    dtDay = dtArray[1];
	    dtMonth= dtArray[3];
	    dtYear = dtArray[5];  
	 
	  if (dtMonth < 1 || dtMonth > 12)
	      return false;
	  else if (dtDay < 1 || dtDay> 31)
	      return false;
	  else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
	      return false;
	  else if (dtMonth == 2)
	  {
	     var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
	     if (dtDay> 29 || (dtDay ==29 && !isleap))
	          return false;
	  }
	  return true;
	}
	$scope.checkfromdate=function(){
		if($("#fromDate").val()!=null && $("#fromDate").val()!=""){
			if(!isDate($("#fromDate").val())){
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				 $("#fromDate").val("");
				return;
			}
		}
		
	}
	$scope.checktodate=function(){
		if($("#toDate").val()!=null && $("#toDate").val()!=""){
			if(!isDate($("#toDate").val())){
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				 $("#toDate").val("");
				return;
			}
		}
	}
	$scope.onSearch = function() {

		overLoading("loading...");
		if($("#toDate").val()!=null && $("#toDate").val()!=""){
			if($("#fromDate").val() !=null){
				var intfromdate = ($("#fromDate").val());
				var inttodate = ($("#toDate").val());
				if(moment(intfromdate,"DD/MMM/YYYY") > moment(inttodate,"DD/MMM/YYYY")){
					bootboxAlertFocus("Từ ngày phải nhỏ hơn đến ngày !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				}
			}
		}
		var dataSearchInput = {};
		/*$scope.disableBtnImportAndPrint = true;
		$scope.disableBtnPrint = true;
		$scope.disableBtnDetail = true;*/
		/*$scope.list = [];
		createDataTableListGoodItem($scope.list);*/
		
		/*$scope.itemGoodSelected = ROW_NOT_SELECTED;*/
		$scope.itemGoodQuantitySelected = ROW_NOT_SELECTED;

		var stockTransInput = {};
		var pCmdPeriodInput = {};
		//
		stockTransInput.reasonId = StringUtilNVL("602");
		stockTransInput.inspectCmdCode = StringUtilNVL($scope.model.Formcode);
		stockTransInput.inspectCmdStatus = StringUtilNVL("0");
		stockTransInput.stockId = STOCK_ID
		stockTransInput.type = '2';
		
		stockTransInput.cmdStatus 	= "1"; // stock_transaction.status
		stockTransInput.cmdNote 	= "1"; // transaction_action.TYPE
		stockTransInput.inspectCmdName = "AL";
		stockTransInput.resourceCode = $localStorage.clientContext.sessionResourceCode;
		if($localStorage.clientContext.stockParent != null){
			stockTransInput.delivererStockId = $localStorage.clientContext.stockParent.stockId;
		}else{
			stockTransInput.delivererStockId = $localStorage.clientContext.stockParent;
		}
		
		pCmdPeriodInput.fromDate = StringUtilNVL($("#fromDate").val());
		pCmdPeriodInput.toDate	= StringUtilNVL($("#toDate").val());
		
		
		dataSearchInput.pStockTrans = stockTransInput;
		dataSearchInput.pCmdPeriod = pCmdPeriodInput;
		
		FormSuperiorGoodImport.getStockTransExec(dataSearchInput,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				if(checkserch==0){
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
				}
	
			} else {
				closeOverLay();
				if(result.length == 0){
					if(checkserch==0){
						bootboxAlertFocus($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onSearch"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
						$scope.datatableEducation=result;
						createDataTableEducation($scope.datatableEducation);
						createDataTableDetailsList(result);
						return;
					}
					/*$scope.list = [];
					$scope.getStockTransactionDetailFn($scope.list);*/
				}
				if(result.length > 0){
					$scope.datatableEducation=result;
					createDataTableEducation($scope.datatableEducation);
					if($scope.datatableEducation != null){
						$scope.getStockTransactionDetailFn($scope.datatableEducation[0]);
					}
					if($scope.itemGoodSelectedDetailsList !=null){
						$scope.checkserial();
					}
					
				}
				
			}
			closeOverLay();
		});

	}
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

