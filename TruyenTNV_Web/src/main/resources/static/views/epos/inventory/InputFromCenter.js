app_vnm.factory('inputFromCenter', function($http, $translate) {
	return {
		
		getAllStockShop : function(callback) {
			var url = eim_url + "/epos/inventory/getValueShopInputfrom";
			$http.post(url).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
					});
		},
		onSearchInputForm : function(data,callback) {
			var url = eim_url + "/epos/inventory/getTableSearchShopInputfrom";
			$http.post(url, data).success(callback)
	            .error(function(data, status, headers, config) {
	                closeOverLay();
	                bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
	            });
		},
		onSearchDetailsList : function(data,callback) {
			var url = eim_url + "/epos/inventory/getTableSearchSearchDetailsList";
			$http.post(url, data).success(callback)
	            .error(function(data, status, headers, config) {
	                closeOverLay();
	                bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
	            });
		},
		onSearchGetSerialList : function(data,callback) {
			var url = eim_url + "/epos/inventory/getTableSearchSerialList";
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
		onInsertInputForm : function(data,callback) {
			var url = eim_url + "/epos/inventory/insertListInputFromCenter";
			$http.post(url, data).success(callback)
	            .error(function(data, status, headers, config) {
	                closeOverLay();
	                bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
	            });
		},
	}
});

app_vnm.controller('ctrl-inputFromCenter',
		function($scope, $rootScope, $translate, $compile, $timeout,
				$uibModal, $location, $window, FileUploader, $filter,
				$http, NgTableParams, $localStorage, inputFromCenter){
	
	$scope.model = {};
	/*$scope.GetTableSearchStockShop = [];*/
    $scope.StatusInputFom  = [
    	{ 'Id': 'All', 'Title': 'Tất cả' },
    	{ 'Id': '0', 'Title': 'Chưa nhập' },
    	{ 'Id': '1', 'Title': 'Đã nhập' }
    ];
   /* $scope.model.StatusInputFom=$scope.StatusInputFom[0].Id;*/
    
    $scope.model.ReasonCodeInputFom="NTT";
    $scope.model.ReasonNameInputFom='Nhập từ kho trung tâm';
    $scope.disableBtnserian=true;
    $scope.disableBtnPrin=true;
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
    
    $scope.getAllStockShop = function() {
    	inputFromCenter.getAllStockShop(function(result) {
    		
			if (result != null && result.length > 0 && result.status !='0') {
				var shopAll = {
						"code" : "",
						"name" : "Tất cả",
					};
				$scope.GetAllNameStockShop.push(shopAll);
					Array.prototype.push.apply($scope.GetAllNameStockShop, result);
				 /*$scope.GetAllNameStockShop = result;*/
				 $scope.model.stockCode=$scope.GetAllNameStockShop[0];
				 createDataTableGoods($scope.GetTableSearchStockShop);
				 createDataTableDetailsList($scope.GetTableSearchDetailsList);
				 createDataTableSerialList($scope.GetTableSearchSerialShop);
				 closeOverLay();
			}
		});
	}
    $scope.GetAllNameStockShop = [];
	$scope.loadDefault = function() {
//		overLoading();
		$scope.getAllStockShop();
		window.document.title = $translate.instant('vnm.InputFromCenter.page.title');
//		closeOverLay();
	}
	$scope.changeStockName = function () {
		document.getElementById('stockCode').title = $scope.model.stockCode.code;
		document.getElementById('stockName').title = $scope.model.stockCode.name;
	}
	
	var initialize = function() {
		overLoading();
		$scope.loadDefault();
//		createDataTableGoods($scope.GetTableSearchStockShop);
	}
	initialize();
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
	//create table mat hang
	$scope.itemSelectedCmdStock = {};
	function createDataTableGoods(dataItem) {
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
		    "order": [],
			"columns" : [ 
	              {"mData":"cmd_code", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"stock_id", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"cmd_date", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"deliverer_stock_id", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
				  {"mData":"exec_date", "render": function(data, type, row){
		 	        	 return data==null ? "" :data;
	 	          }},
				  {"mData":"exec_staff_id", "render": function(data, type, row){
					  return data==null ? "" : data;
	 	          }},
	 	         {"mData":"status", "render": function(data, type, row){
					  return data==null ? "" : (data == '1' ? "Đã nhập" : "Chưa nhập");
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
            $scope.itemSelectedCmdStock = rowData;
            oTableItem.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
	        if(rowData.cmd_code !=null){
	        	if(rowData.status==1){
	        		$scope.disableBtnPrin=false;
	        	}else{
	        		$scope.disableBtnPrin=true;
	        	}
	        	$scope.getStockTransactionDetailFn($scope.itemSelectedCmdStock);
	        }
	 });
	}
	$scope.getStockTransactionDetailFn = function (rowData){
		overLoading();
		var dataSearch ={
				"cmd_code":rowData.cmd_code,
			};
		inputFromCenter.onSearchDetailsList(dataSearch,function(result1){
			if (result1 != null && result1 != undefined) {
				if (result1.status == '0') {
					bootboxAlertFocus(result1.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				} else if(result1.length > 0){
					$scope.GetTableSearchDetailsList = result1;
					createDataTableDetailsList($scope.GetTableSearchDetailsList);
					$scope.itemGoodSelectedDetailsList=$scope.GetTableSearchDetailsList[0];
					 $scope.disableBtnserian=false;
					$scope.onSearchGetSerialList();
				}else{
					/*bootbox.alert($translate.instant("vnm.InputFromCenter.mess.error.onSearch"));*/
					$scope.GetTableSearchDetailsList = result1;
					createDataTableDetailsList($scope.GetTableSearchDetailsList);
					$scope.disableBtnserian=true;
				}
			}else{
				/*bootbox.alert($translate.instant("vnm.InputFromCenter.mess.error.onSearch"));*/
				$scope.GetTableSearchDetailsList = result1;
				createDataTableDetailsList($scope.GetTableSearchDetailsList);
				$scope.disableBtnserian=true;
			}
			closeOverLay();
		});
	}
	$scope.itemGoodSelectedDetailsList = {};
	function createDataTableDetailsList(dataItem1) {
		oTableItem1 = $('#example1').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem1,
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
		    "order": [],
			"columns" : [ 
	              {"mData":"goodsid", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"name", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"primary_unit_of_measure", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	 	         {"mData":"quantity_issue", "render": function(data, type, row){
					  return data==null ? "" : data;
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
		/*
	    });*/$('#example1 tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
            $(this).removeClass('selected');
            var rowData1 = oTableItem1.row( this ).data();
            $scope.itemGoodSelectedDetailsList = rowData1;
            oTableItem1.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
           /* $scope.onSearchGetSerialList();*/
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
		
		oTableItem2.on( "select", function( e, dt, type, indexes ) {
	        /*var rowData2 = oTableItem2.rows( indexes ).data().toArray();
	        $scope.itemGoodSelectedSerialList = rowData2[0];*/
	    });
	}
	var checkserch=0;
	$scope.onSearchInputForm =function(){
		overLoading();
		var xuatkhocode;
		var todate;
		if($("#fromDate").val()!=null && $("#fromDate").val()!=""){
			if(!isDate($("#fromDate").val())){
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				 return;
			}
		}
		if($("#toDate").val()!=null && $("#toDate").val()!=""){
			if(!isDate($("#toDate").val())){
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
		}
		if($("#toDate").val()!=null && $("#toDate").val()!=""){
			if($("#fromDate").val() !=null){
				var intfromdate = ($("#fromDate").val());
				var inttodate = ($("#toDate").val());
				if(moment(intfromdate,"DD/MMM/YYYY") > moment(inttodate,"DD/MMM/YYYY")){
//					bootbox.alert("Từ ngày phải nhỏ hơn đến ngày !");
					bootboxAlertFocus("Từ ngày phải nhỏ hơn hoặc bằng đến ngày !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

					closeOverLay();
					return;
				}
			}
		}
		if($scope.model.StatusInputFom=="All"){
			$scope.model.StatusInputFom="";
		}
		/*if($scope.model.stockCode!="" && $scope.model.stockCode!=undefined){
			xuatkhocode=$scope.model.stockCode.stock_id;
		}else{
			xuatkhocode="";
		}*/
		var dataInput ={
				"sessionStockID":StringUtilNVL($localStorage.clientContext.sessionStockID),
				"shipment": StringUtilNVL($scope.model.shipment),
				"xuatkhocode":StringUtilNVL($scope.model.stockCode.stock_id),
				"status":StringUtilNVL($scope.model.StatusInputFom),
				"fromdate":StringUtilNVL($("#fromDate").val()),
				"todate":StringUtilNVL($("#toDate").val()),
			};
		inputFromCenter.onSearchInputForm(dataInput,function(result){
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

				} else if(result.length > 0){
					$scope.GetTableSearchStockShop = result;
					if($scope.GetTableSearchStockShop.status==1){
		        		$scope.disableBtnPrin=false;
		        	}else{
		        		$scope.disableBtnPrin=true;
		        	}
					createDataTableGoods($scope.GetTableSearchStockShop);
					$scope.itemSelectedCmdStock=$scope.GetTableSearchStockShop[0];
					$scope.getStockTransactionDetailFn($scope.GetTableSearchStockShop[0]);
					
				}else{
					if(checkserch==0){
						bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onSearch"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
						/*bootbox.alert("Không có dữ liệu tìm kiếm thỏa mãn điều kiện !");*/
					}
					$scope.GetTableSearchStockShop = result;
					createDataTableGoods($scope.GetTableSearchStockShop);
					createDataTableDetailsList(result);
				}
			}else{
				if(checkserch==0){
					bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onSearch"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				}
				$scope.GetTableSearchStockShop = result;
				createDataTableGoods($scope.GetTableSearchStockShop);
				createDataTableDetailsList(result);
			}
			checkserch=0;
			closeOverLay();
		});
		
	}
	$scope.onSearchGetSerialList=function (){
		overLoading(); 
		var data ={
			"cmd_code":$scope.itemSelectedCmdStock.cmd_code,
			"goodsid":$scope.itemGoodSelectedDetailsList.goodsid,
		}
		inputFromCenter.onSearchGetSerialList(data,function(result){
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
				    /*$scope.disableBtnserian=false;*/
					/*$scope.showModalFunction("modalSerialList");*/
				}else{
					$scope.GetTableSearchSerialShop = result;
					$scope.model.ddTotal = "0";
					createDataTableSerialList($scope.GetTableSearchSerialShop);
				    /*$scope.disableBtnserian=true;*/
					/*$scope.showModalFunction("modalSerialList");*/
				}
			}else{
				/*bootbox.alert($translate.instant("vnm.InputFromCenter.mess.error.onSearch"));*/
				$scope.model.ddTotal = "0";
				$scope.GetTableSearchSerialShop = result;
				createDataTableSerialList($scope.GetTableSearchSerialShop);
			   /* $scope.disableBtnserian=true;*/
			}
			closeOverLay();
		});
	}
	$scope.btnSerial= function() {
		$scope.onSearchGetSerialList();
		$scope.showModalFunction("modalSerialList");
	}
	$scope.exportfile = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		var templateValueSearch = {
			"code" : $scope.itemSelectedCmdStock.stock_trans_id,
			"name" : $localStorage.clientContext.sessionStockID,
		}
		inputFromCenter.getTemplateValue(templateValueSearch, function(result) {
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
						"stockTransId" : $scope.itemSelectedCmdStock.stock_trans_id,
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
					
					inputFromCenter.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}else{
					App.unblockUI("#contentMain");
					bootboxAlertFocus("Số shipment: "+$scope.itemSelectedCmdStock.cmd_code+ " không đủ thông tin để in !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				}
			}
		});
	}
	$scope.btnSave =function(){
		if($scope.itemSelectedCmdStock.cmd_code !=null){
			if($scope.itemSelectedCmdStock.status==0){
		    	var messConfirm = $translate.instant("vnm.InputFromCenter.mess.confim");
		    	var header = $translate.instant("vnm.InputFromCenter.page.title");
		    	bootboxConfirm(header, messConfirm, $scope.insert, $scope.confirmKO);
			}else{
				bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onsave"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

			}
			
		}else{
			bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onsave2"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

			
		}
	}
	$scope.insert = function (){
		overLoading();
		var dataInsert ={
				"stock_id": $scope.itemSelectedCmdStock.stock_id,
				"deliverer_stock_id":$scope.itemSelectedCmdStock.deliverer_stock_id,
				"exec_staff_id":$scope.itemSelectedCmdStock.exec_staff_id,
				"cmd_code":$scope.itemSelectedCmdStock.cmd_code,
				"exec_staff_name":$scope.itemSelectedCmdStock.exec_staff_name,
				"listGoods":$scope.GetTableSearchDetailsList,
			};
		inputFromCenter.onInsertInputForm(dataInsert,function(result){
			if (result.status == '0') {
				bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

			} else if(result== 1){
				bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onsave3"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

				checkserch=1;
				$scope.onSearchInputForm();
				closeOverLay();
			}else{
				bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onsave4"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

			}
			closeOverLay();
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

