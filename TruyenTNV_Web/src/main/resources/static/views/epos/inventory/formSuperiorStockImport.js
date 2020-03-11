app_vnm.factory('formStockView', function($http, $translate) {
	return {
		/*get list trạng thái*/
		getListStatus: function(data, callback) {
			var url = eim_url + "/epos/getValueDomainByType";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListReasonSource: function(data, callback) {
			var url = eim_url + "/epos/getListReason";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
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
		getSerialIntransaction : function(data, callback) {
			var url = eim_url + '/epos/FormSuperiorStockImport/getSerialIntransaction';
			$http.post(url, data).success(callback)
			.error(function(data, status, headers, config) {
						closeOverLay();
						bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		importSuperiorTransaction : function(data, callback) {
			var url = eim_url + '/epos/FormSuperiorStockImport/ImportTransaction';
			$http.post(url, data).success(callback)
			.error(function(data, status, headers, config) {
						closeOverLay();
						bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getTemplateValue";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
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
		}
	}
});

var ROW_NOT_SELECTED = -1;

app_vnm.controller('ctr-formSuperiorStockImport', function($scope, $rootScope,
		$translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage,
		formStockView) {
	
	window.document.title = $translate.instant('vnm.formSuperiorStockImport.label.stock.info');
	$scope.ReasonSource = [];
	$scope.fileSuccess=[];
	
	$scope.model = {};
	$scope.model.endDate = moment().format('DD/MM/YYYY');
	
	$scope.itemGoodSelected = ROW_NOT_SELECTED;
	
	$scope.disableBtnImportAndPrint = true;
	$scope.disableBtnPrint = true;
	//create table mat hang
	function createDataTableGoods(dataItem) {
		oTableItem = $('#tableListItem').DataTable({
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
		    "order": [[ 0, "desc" ]],
		    "select": {
		    	style: 'single',
		        info: false
		    },
			"columns" : [ 
	              {"mData":"cmdCode", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"cmdDate", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"cmdStatusStr", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-75' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"reasonStr", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
				  {"mData":"cmdNote", "render": function(data, type, row){
					  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
					  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }}
	            ],
	            "fnInitComplete" : function(oSettings, json) {
	            	
	            	var table = $('#tableListItem').DataTable();
										
	            	if ($scope.itemGoodSelected !=ROW_NOT_SELECTED && $scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined){
            			table.rows().every( function () {
            			    var d = this.data();
            			    if($scope.itemGoodSelected.cmdCode == d.cmdCode){
            			    	console.log(d);
            			    	table.rows(this).nodes().to$().addClass( 'selected' );
            			    }
            			} );
	            	}else{
	            		var dataRowSelected = table.row( 0 ).data();
	            		$scope.itemGoodSelected = dataRowSelected;
	            		table.rows( 0 ).nodes().to$().addClass( 'selected' );
	            	}
	            	
	            	
		            $scope.getStockTransactionDetailFn($scope.itemGoodSelected);
		            
		            if ($scope.itemGoodSelected !=ROW_NOT_SELECTED && $scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined){
			        	if($scope.itemGoodSelected.cmdStatus == '0') {
			        		$scope.disableBtnImportAndPrint = false;
			        		$scope.disableBtnPrint = true;
			        	}else{
			        		$scope.disableBtnImportAndPrint = true;
			        		$scope.disableBtnPrint = false;
			        	}
					} else {
						$scope.disableBtnDetail = true;
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
				    },
					"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
	            }
		});
				
		$('#tableListItem tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {
				$scope.disableBtnDetail = true;
	            $(this).removeClass('selected');
	            var rowData = oTableItem.row( this ).data();
	            $scope.itemGoodSelected = rowData;
	            
	        	oTableItem.$('tr.selected').removeClass('selected');
	            $(this).addClass('selected');

	            $scope.getStockTransactionDetailFn(rowData);
	            
	            if ($scope.itemGoodSelected !=ROW_NOT_SELECTED){
		        	if($scope.itemGoodSelected.cmdStatus == '0') {
		        		$scope.disableBtnImportAndPrint = false;
		        		$scope.disableBtnPrint = true;
		        	}else{
		        		$scope.disableBtnImportAndPrint = true;
		        		$scope.disableBtnPrint = false;
		        	}
				} else {
					$scope.disableBtnDetail = true;
				}
		 } );
		
	}
	
	function createDataTableListSerialNotFound(dataItem){

		oTableItemSerialNotFound = $('#tableListSerialNotFound').DataTable({
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
		    "order": [[ 0, "desc" ]],
		    "select": {
		    	style: 'single',
		        info: false
		    },
			"columns" : [ 
	              {"mData":"fromSerial", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ data + "'>" + data + "</div>";
	 	          }}
	            ],
	            "fnInitComplete" : function(oSettings, json) {},
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
				    },
					"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
	            }
		});
				
	}
	
	//create Danh muc hang
	$scope.itemGoodQuantitySelected = ROW_NOT_SELECTED;
	$scope.disableBtnDetail = true;
	
	function createDataTableListGoodItem(dataItem) {
		oTableItemQuantity = $('#tableQuantityItem').DataTable({
			"data": dataItem,
			"destroy" : true,
			"autoWidth": true,
			"bPaginate": true,
			"select": true,
			"bSort" : false,
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
	            "createdRow": function (row, data, rowIndex) {
            		if(rowIndex == 0 || rowIndex == '0'){
            			$(row).addClass('selected');
            			$scope.itemGoodQuantitySelected = data;
    	    	        if ($scope.itemGoodSelected !=ROW_NOT_SELECTED && $scope.itemGoodQuantitySelected != ROW_NOT_SELECTED){
    	    	        	
    	    	        	if($scope.itemGoodQuantitySelected.checkSerial == '1' ||
    	    	        			$scope.itemGoodQuantitySelected.type == '1') {
    	    	        		$scope.disableBtnDetail = false;
    	    	        	}else{
    	    	        		$scope.disableBtnDetail = true;
    	    	        	}
    	    			} else {
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
				    },
					"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
	            }
		});
		
		$('#tableQuantityItem tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
            $(this).removeClass('selected');
            var rowData = oTableItemQuantity.row( this ).data();
            oTableItemQuantity.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            $scope.itemGoodQuantitySelected = rowData;
	        if ($scope.itemGoodSelected !=ROW_NOT_SELECTED && $scope.itemGoodQuantitySelected != ROW_NOT_SELECTED){
	        	
	        	if($scope.itemGoodQuantitySelected.checkSerial == '1' ||
	        			$scope.itemGoodQuantitySelected.type == '1') {
	        		$scope.disableBtnDetail = false;
	        	}else{
	        		$scope.disableBtnDetail = true;
	        	}
			} else {
				$scope.disableBtnDetail = true;
			}
		});
	}

	//table danh sach serial popup
	function createDataTableSerialList(dataItem2) {
		var index=1;
		oTableListSerial = $('#example2').DataTable({
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
		    "select": {
		        style: 'os',
		        info: false
		    },
		    "autoWidth": true,
		    "paginationType" : "full_numbers",
		    "columnDefs":[
		    	{
	                "targets": [ 0 ],
	                "visible": false,
	                "searchable": false
	            }
		    ],
			"columns" : [ 
	              {"mData":"from_serial", "render": function(data, type, row){
		 	        	 return data==null ? "" : index++;
	 	          }},
	              {"mData":"fromSerial", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"toSerial", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
				  {"mData":"quantity", "render": function(data, type, row){
		 	        	 return data==null ? "" :data;
	 	          }}
	            ],
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sSearch": LABEL_SEARCH,
					"sLengthMenu":"_MENU_",
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    },
					"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
	            }
		});
		
		oTableListSerial.on( "select", function( e, dt, type, indexes ) {
	        var rowData2 = oTableListSerial.rows( indexes ).data().toArray();
	        $scope.itemGoodSelectedSerialList = rowData2[0];
	    });
	}
	
	//danh sach ly do
	$scope.getListReasonSourceFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.type = "6";
		dataInput.status = "1";
		dataInput.code = "NCT";
		
		formStockView.getListReasonSource(dataInput, function(result) {
			$scope.getListStatusFn();
			closeOverLay();
			$scope.ReasonSource = result;
			$scope.model.reason = $scope.ReasonSource[0];
		});
	}
	
	
	//load combobox trang thai
	$scope.getListStatusFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.type = "74";
		
		formStockView.getListStatus(dataInput, function(result) {
			closeOverLay();
			
			resetTable();
			
			$scope.ListStatusSource = result;
			$scope.model.status = $scope.ListStatusSource[0].code;
		});
	}
	
	$scope.loadDefault = function() {
		
		var sessionValue = {
			"sessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
			"sessionShopType" : $localStorage.clientContext.shop.shopType,
			"isForm" : "1",
		 };

		formStockView.getExistedStates(function(resultStates) {
			if (resultStates != null && resultStates != undefined && 
					resultStates.status != '0' && resultStates.length > 0) {
				$scope.lstStatesForm = resultStates;
			}
		});
		
		var resourceCodeForm = {
				"code" : "",
				"name" : "",
			}
		
		 formStockView.getExistedGoodsGroups(resourceCodeForm,function(resultListGoodGroup) {
			 $scope.lstGoodGroupForm = resultListGoodGroup;
			 
		 });
		
	}
	
	//OnUpLoad
	var uploaderListDetail = $scope.uploaderListDetail = new FileUploader({
		url: eim_url+'/epos/inventory/getListSerianFromFile'
	});
	

	// on item upload error
	uploaderListDetail.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
		
		$scope.model.linkFile = '';
		$scope.model.fromNumber='';
		$scope.model.toNumber='';
		$scope.model.quantity='';
		uploaderListDetail.clearQueue();
		$scope.disabledUploadAllFile=true;
		$scope.fileSuccess=[];
		return;
	}
	
	uploaderListDetail.onAfterAddingAll = function(items){
		overLoading("Uploading...");
		if(items!=null){
			uploaderListDetail.uploadAll();	
		}
	} 
	// Another user-defined filter set max file size
	uploaderListDetail.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		if(fileExtValue.toUpperCase() !="xlsx".toUpperCase() && fileExtValue.toUpperCase()!="xls".toUpperCase() ){
    			var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0009');
    			bootboxAlertFocus(TEMPLATE_ERROR, "", $translate.instant("vnm.lable.vnm.name"), "");
    			return false;
    		}
    		return true;
        }
    });
	
	// set data before upload for each item
	uploaderListDetail.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.model.linkFile = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	// on item upload success
	uploaderListDetail.onSuccessItem = function (fileItem, response, status, headers) {
		if (response.length > 0) {
			$scope.fileSuccess = [];
			for(var i =0; i< response.length; i++) {
				$scope.fileSuccess.push(response[i]);
			}
		} 
		else
		{
			bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
			$scope.model.linkFile = '';
			$scope.model.fromNumber='';
			$scope.model.toNumber='';
			$scope.model.quantity='';
			uploaderListDetail.clearQueue();
			$scope.disabledUploadAllFile=true;
			$scope.fileSuccess=[];
			closeOverLay();
			return;
		}

		closeOverLay();
	}
	
	$scope.addFile = function(){
		if(''===$scope.model.linkFile ||undefined==$scope.model.linkFile)
		{
			bootbox
				.alert($translate
						.instant('vnm.dialogButtonDetail.inputFile'
								));
			return;
		}
		else
			{
				if($scope.fileSuccess.length>0)
				{
					$scope.model.fromNumber=$scope.fileSuccess[0].fromSerial;
					$scope.model.toNumber=$scope.fileSuccess[$scope.fileSuccess.length-1].fromSerial;
					$scope.model.quantity=$scope.fileSuccess.length;
					$scope.disabledUploadAllFile=false;
				}
				else
				{
					bootbox
					.alert($translate
							.instant('vnm.dialogButtonDetail.isEmptyFile'
									));
					return;
				}
			}
		
	}
	
	//ham dong y: danh sach serial vao he thong
	$scope.acceptListTransactionIntoGoogFn = function(){
		var zIndexDialogModal = $("#dialogButtonDetail").css("z-index");
		$("#dialogButtonDetail").css('zIndex',100);
		
		overLoading();
		var dataListSerial = {};
		
		dataListSerial.stockId = $scope.itemGoodSelected.stockTransId;
		dataListSerial.goodId = $scope.itemGoodQuantitySelected.goodsId;
		dataListSerial.stateId  = $scope.itemGoodQuantitySelected.stateId;
		
		formStockView.getSerialIntransaction(dataListSerial,function(result) {
			$("#dialogButtonDetail").css('zIndex',zIndexDialogModal);
			closeOverLay();
			if (result.status == '0' && result.status != undefined) {
				
			} else {
				bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.success'
				).replace('%quantity',$scope.fileSuccess.length), "", $translate.instant("vnm.lable.vnm.name"), "");
			}
		
		});
	}

	$scope.confirmAddFileOK = function() {
		overLoading();
    	$scope.disabledUploadAllFile=true;
    	$scope.model.goodQuantity = $scope.fileSuccess.length;
		if ($scope.itemGoodSelected !=null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.goodsId != '') {
			closeOverLay();
			$scope.itemGoodSelected.lstTransactionSerial = $scope.fileSuccess;
			$scope.acceptListTransactionIntoGoogFn();
		} else {
			$scope.itemGoodSelected.lstTransactionSerial = [];
		}    	
    	
	}
	
	$scope.dialogActionBack = function(){
		closeOverLay();
		App.unblockUI("#contentMain");
		$scope.disabledUploadAllFile=true;
		$scope.hideModalFunction("dialogButtonDetail");
	}
	
	$scope.closeModalListSerialNotFound = function(){
		closeOverLay();
		App.unblockUI("#contentMain");
		$scope.hideModalFunction("modalSerialListNotFound");
	}
	
	$scope.confirmAddFileNOK = function() {
		closeOverLay();
	}
	
	$scope.uploadAllFile =  function(uploaderIn){
		overLoading();
		bootboxConfirm($translate.instant("vnm.common.btn.add"), $translate.instant("vnm.FormStockImportFromPartner.messageAccept"),
					$scope.confirmAddFileOK, $scope.confirmAddFileNOK);
		
	}
	
	//check disabled button serail & load file
	$scope.checkDisabledButtonSerialAndFile = function(){
		
	}
	
	$scope.resetModalLoadFileSerial = function(){
		$scope.model.linkFile = "";
		$scope.model.fromNumber = "";
		$scope.model.toNumber = "";
		$scope.model.quantity = "";
		uploaderListDetail.clearQueue();
	}
	
	$scope.getListSerialData = function(){
		overLoading();
		var dataListSerial = {};
		
		dataListSerial.stockId = $scope.itemGoodSelected.stockTransId;
		dataListSerial.goodId = $scope.itemGoodQuantitySelected.goodsId;
		dataListSerial.stateId  = $scope.itemGoodQuantitySelected.stateId;
		
		formStockView.getSerialIntransaction(dataListSerial, function(result) {
			closeOverLay();
			// tong so serial
			var quantityX = 0;
			if (result != null && result != undefined && result.length > 0) {
				for (var i = 0; i < result.length; i++) {
					var iQuantity = parseInt(result[i].quantity == '' ? '0' : result[i].quantity);
					quantityX += iQuantity;
				}
			}
			$scope.model.ddTotal = quantityX;
			
			createDataTableSerialList(result);
			$scope.showModalFunction("modalSerialList");
		});
	}
	
	
	//mo popup serial
	$scope.openPopupListSerial = function(){
		$scope.getListSerialData();
	}
	
	//function load file serial
	$scope.btnOnclickLoadFileSerial = function(){
		$scope.resetModalLoadFileSerial();
		
		$scope.showModalFunction("dialogButtonDetail");
	}
	
	//set lai du lieu sau khi import
	$scope.setListAfterImport = function(rowSelected){
		for(var i = 0; i< $scope.listItemBallot.length;i++){
			if( $scope.listItemBallot[i].cmdCode == rowSelected.cmdCode){
				$scope.listItemBallot[i].cmdStatus = '1';
				$scope.listItemBallot[i].cmdStatusStr = $scope.ListStatusSource[1].name; 
			}
		}
		$scope.listItemBallot = setDataOutTableBallot($scope.listItemBallot);
		createDataTableGoods($scope.listItemBallot);
	}
	
	//function import
	$scope.importSuperiorConfirmFn = function(){
		bootboxConfirm($translate.instant("vnm.common.btn.add"), $translate.instant("vnm.formSuperiorStockImport.mess.confirmInput"),
				$scope.importSuperiorFunction, $scope.confirmAddFileNOK);
	}

	$scope.importSuperiorFunction = function(){
		if($scope.itemGoodSelected == ROW_NOT_SELECTED){
			return 0;
		}
		
		overLoading();
		var dataImportInput =  $scope.itemGoodSelected;
		dataImportInput.execStaffId = $localStorage.clientContext.id;
		
		formStockView.importSuperiorTransaction(dataImportInput,function(result) {

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
				if(result.status == '1' || result.status == 1){
					$scope.disableBtnImportAndPrint = true;
					$scope.disableBtnPrint = false;
					$scope.setListAfterImport($scope.itemGoodSelected);
					bootboxAlertFocus($translate.instant('vnm.formSuperiorStockImport.mess.Success'), "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			}
		});
		
	}
	
	$scope.printFn = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		var templateValueSearch = {
			"code" : StringUtilNVL($scope.itemGoodSelected.stockTransId),
			"name" : $localStorage.clientContext.sessionStockID,
		}
		formStockView.getTemplateValue(templateValueSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					var templateValue = result[0];
					var strDeliverStockName = "";
					if (templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined && templateValue.deliveyShopCode != '') {
						strDeliverStockName = templateValue.deliveyShopCode + " - " + templateValue.deliveyShopName;
					}
					
					var ReportInput = {
						"stockTransId" : StringUtilNVL(templateValue.stockTransId),
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
						"fileTempName" : 'TemplateFormSuperiorStockImport',
						"fileType" : '.xlsx'
					};

					formStockView.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
		});
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
	
	function initializeForm(){
		$scope.list = [];
		$scope.disableBtnDetail = true;
		$scope.getListReasonSourceFn();
		$scope.loadDefault();
	}
	
	function resetTable(){
		$scope.list = [];
		$scope.itemGoodSelected = ROW_NOT_SELECTED;
		createDataTableGoods($scope.list);
		createDataTableListGoodItem($scope.list);
	}
	
	initializeForm();
	
	//data danh sách mặt hàng gán cho shop
	var STOCK_ID = $localStorage.clientContext.sessionStockID;
	
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
	
	//set data output table phieu
	function setDataOutTableBallot(listData){
		for(var i =0; i< listData.length; i++){
			if(listData[i] != undefined && listData[i] != null){
				if(listData[i].cmdStatus == '1'){
					listData[i].cmdStatusStr = $scope.ListStatusSource[1].name; 
				}else{
					listData[i].cmdStatusStr = $scope.ListStatusSource[0].name; 
				}
			}
		}
		return listData;
	}
	
	$scope.goodNameTable = "";
	$scope.goodCodeTable = "";
	
	//set data cho table danh sach mat hang
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
	
	$scope.searchListStockTransFn = function() {

		overLoading("loading...");		
		var dataSearchInput = {};
		
		$scope.disableBtnImportAndPrint = true;
		$scope.disableBtnPrint = true;
		$scope.disableBtnDetail = true;
		$scope.list = [];
		createDataTableListGoodItem($scope.list);
		
		$scope.itemGoodSelected = ROW_NOT_SELECTED;
		$scope.itemGoodQuantitySelected = ROW_NOT_SELECTED;

		var stockTransInput = {};
		var pCmdPeriodInput = {};
		//
		stockTransInput.reasonId = StringUtilNVL($scope.model.reason.reasonId);
		stockTransInput.inspectCmdCode = StringUtilNVL($scope.model.billCode);
		stockTransInput.inspectCmdStatus = StringUtilNVL($scope.model.status);
		stockTransInput.stockId = STOCK_ID
		stockTransInput.type = '2';
		
		stockTransInput.cmdStatus 	= "3"; // stock_transaction.status
		stockTransInput.cmdNote 	= "3"; // transaction_action.TYPE
		stockTransInput.inspectCmdName = "AL";
		stockTransInput.resourceCode = $localStorage.clientContext.sessionResourceCode;
		if($localStorage.clientContext.stockParent != null){
			stockTransInput.delivererStockId = $localStorage.clientContext.stockParent.stockId;
		}else{
			stockTransInput.delivererStockId = $localStorage.clientContext.stockParent;
		}
		
		pCmdPeriodInput.fromDate = StringUtilNVL($("#startDate").val());
		pCmdPeriodInput.toDate	= StringUtilNVL($("#endDate").val());
		
		
		dataSearchInput.pStockTrans = stockTransInput;
		dataSearchInput.pCmdPeriod = pCmdPeriodInput;
		
		formStockView.getStockTransExec(dataSearchInput,function(result) {

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
					bootboxAlertFocus($translate.instant('vnm.formStockView.mess.search.result.emtpy'), "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				$scope.listItemBallot = setDataOutTableBallot(result);
				createDataTableGoods($scope.listItemBallot);
			}
		});

	}
	
	//tim kiem du lieu phieu
	$scope.getStockTransactionDetailFn = function (rowData){
		if(rowData == undefined || rowData == null){
			return 0;
		}
		
		var dataInput = {};
		dataInput.stockId = rowData.stockTransId;
		
		formStockView.getStockTransactionDetail(dataInput,function(result) {
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
					bootboxAlertFocus($translate.instant('vnm.formStockView.mess.search.result.emtpy'), "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				result = setDataOutPutTableListGoodItem(result);
				
				createDataTableListGoodItem(result);
			}
		});
	}

	//Upload file
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
					
					App.blockUI({
						target : "#contentMain",
						boxed : true,
						message : 'Loading...'
					});
					
					
					overLoading();
					var dataListSerial = {};
					
					dataListSerial.stockId = $scope.itemGoodSelected.stockTransId;
					dataListSerial.goodId = $scope.itemGoodQuantitySelected.goodsId;
					dataListSerial.stateId  = $scope.itemGoodQuantitySelected.stateId;
					
					formStockView.getSerialIntransaction(dataListSerial,function(result) {
						$("#dialogButtonDetail").css('zIndex',zIndexDialogModal);
						closeOverLay();
						if (result.status == '0' && result.status != undefined) {
							
						} else {
							
							var vtSerialNotFound = [];
							var check = false;
							for(var i=0;i< $scope.fileSuccess.length; i++)
							{
								
								var serialObj = $scope.fileSuccess[i];
								check=false;
								
								for(var k=0;k<result.length;k++)
								{
									var serialDB = result[k];
									if(serialDB.fromSerial.localeCompare(serialObj.fromSerial)<=0 && serialDB.toSerial.localeCompare(serialObj.fromSerial)>=0)
									{
										check=true;
										break;
									}
								}
								if(!check)
								{
									vtSerialNotFound.push(serialObj);
								}
								
								console.log(vtSerialNotFound);
							}
							
						}
						if(vtSerialNotFound.length > 0){
							$scope.hideModalFunction("dialogButtonDetail");
							//hien thi danh sach serial k co
							createDataTableListSerialNotFound(vtSerialNotFound)
							$scope.showModalFunction("modalSerialListNotFound");
						}
					});
					
				} else {
					closeOverLay();
				}
			}
		});

	}
	//Download file error
	$scope.btnFSaveErrorFileConfirmOK = function() {
		$scope.downLoadFileError(message);
		$scope.lstTableSerialsSETCTmp = []
	}
	
	$scope.btnFSaveErrorFileConfirmNOK = function(){
		$scope.hideModalFunction("modalAddSerial");
		$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
		$("#modalAddSerial").css('zIndex', zIndexDialogModal);
		closeOverLay();
	}
	$scope.downLoadFileError = function(errorMessage) {
		overLoading("Downloading file error...");
		var objError = {
			'formName' : 'ErrorStockImportFromPartner',
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
	
	// BEGIN REVIEW BLOCK
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
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

