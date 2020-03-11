app_vnm.factory('FormStockExportForCustomerByBatch', function($http, $translate) {
	return {
		checkDataUploadFile : function(data,callback) {
			var url = eim_url + "/epos/inventory/checkDataUploadFileCustomerByBatch";
			$http.post(url, data).success(callback)
	            .error(function(data, status, headers, config) {
	                closeOverLay();
					bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
	            });
		},
		onInsert : function(data,callback) {
			var url = eim_url + "/epos/inventory/onInsertUploadFileCustomerByBatch";
			$http.post(url, data).success(callback)
	            .error(function(data, status, headers, config) {
	                closeOverLay();
					bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
	            });
		},
	}
});

app_vnm.controller('ctrl-FormStockExportForCustomerByBatch',
 		function($scope, $rootScope, $translate, $compile, $timeout,
				$uibModal, $location, $window, FileUploader, $filter,
				$http, NgTableParams, $localStorage, FormStockExportForCustomerByBatch){
	
	$scope.model = {};
	$scope.GetTableSearchStockShop = [];
	$scope.loadDefault = function() {
		overLoading();
		createTableUpdatefileCustomerByBatch($scope.GetTableSearchStockShop);
		closeOverLay();
	}
	var initialize = function() {
		$scope.loadDefault();
	}
    
	initialize();
	
	$scope.statusCustomerByBatch=[
		{'Id':'0','Title':'Chưa thực hiện'},
		{'Id':'1','Title':'Thực hiện thành công'},
		{'Id':'2','Title':'Thực hiện lỗi'}
	]
	$scope.model.Status=$scope.statusCustomerByBatch[0].Title;
	$scope.itemSelectedCmdStock = {};
	function createTableUpdatefileCustomerByBatch(dataItem) {
		oTableItem = $('#UpdatefileCustomerByBatch').DataTable({
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
		   "order": [],
		    "info":true,
		    "select": {
		        style: 'os',
		        info: false
		    },
		    "autoWidth": true,
		    "paginationType" : "full_numbers",
			"columns" : [ 
	              {"mData":"stockDeliverer", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"serial", "render": function(data, type, row){
		 	        	 return data==null ? "" : data;
	 	          }},
	              {"mData":"status", "render": function(data, type, row){
		 	        	 return data==null ? "Thực hiện lỗi" : (data == '2' ? "Thực hiện lỗi" : (data == '1' ? "Thực hiện thành công": "Chưa thực hiện"));
	 	          }},
	              {"mData":"descrition", "render": function(data, type, row){
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
		$('#UpdatefileCustomerByBatch tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {		 
            $(this).removeClass('selected');
            var rowData = oTableItem.row( this ).data();
            $scope.itemSelected1 = rowData;
        	oTableItem.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
           /* $scope.getStockTransactionDetailFn(rowData);*/
			$scope.model.StockDeliverer=$scope.itemSelected1.stockDeliverer;
			
			$scope.model.Serial=$scope.itemSelected1.serial;
			if($scope.itemSelected1.status == null){
				$scope.model.Status=$scope.statusCustomerByBatch[2].Title;
			}else{
				$scope.model.Status=$scope.statusCustomerByBatch[$scope.itemSelected1.status].Title;
			}
			$scope.model.Descrition=$scope.itemSelected1.descrition;
		});
	}
	// OnUpLoad
	var uploaderListDetail = $scope.uploaderListDetail = new FileUploader({
		url : eim_url + '/epos/inventory/uploadFileFormStockExportForCustomerByBatch'
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
		/*$scope.model.linkFile = item._file.name;*/
		item.headers = {
			Authorization : 'Bearer ' + $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	uploaderListDetail.onAfterAddingAll = function(items) {
		overLoading("Uploading...");
		if (items != null) {
			uploaderListDetail.uploadAll();
		}
	}
	// on item upload success
	uploaderListDetail.onSuccessItem = function(fileItem, response, status, headers) {
		if (response.length > 0) {
			$scope.lstFileSucess = response;
			checkDataUploadfile($scope.lstFileSucess);
		} else {
			bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
			$scope.model.StockDeliverer="";
			$scope.model.Serial="";
			closeOverLay();
			return;
		}

		closeOverLay();
	}
	// on item upload error
	uploaderListDetail.onErrorItem = function(fileItem, response, status, headers) {
		closeOverLay();
		bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");

		return;
	}
	function checkDataUploadfile(data) {
		overLoading();
		var dataCheck={
			"lisdatacheck" :data,
		}
		FormStockExportForCustomerByBatch.checkDataUploadFile(dataCheck,function(result1){
			if (result1 != null && result1 != undefined) {
				$scope.listdatacheck =result1;
				if($scope.listdatacheck.length>0){
					for(var i=0;i<$scope.listdatacheck.length;i++){
						if($scope.listdatacheck[i].status==null){
							$scope.listdatacheck[i].status="2";
							$scope.listdatacheck[i].descrition="Serial không tồn tại";
						}
					}
				}
				
				$scope.itemSelected=$scope.listdatacheck[0];
				
				$scope.model.BatchId=$scope.listdatacheck[0].batchId;
				
				$scope.model.StockDeliverer=$scope.listdatacheck[0].stockDeliverer;
				
				$scope.model.Serial=$scope.listdatacheck[0].serial;
				if($scope.listdatacheck[0].status == null){
					$scope.model.Status=$scope.statusCustomerByBatch[2].Title;
				}else{
					$scope.model.Status=$scope.statusCustomerByBatch[$scope.listdatacheck[0].status].Title;
				}
				$scope.model.Descrition=$scope.listdatacheck[0].descrition;
				$scope.model.Total="";
				createTableUpdatefileCustomerByBatch($scope.listdatacheck);
			}else{
				bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onSearch"), "", $translate.instant("vnm.lable.vnm.name"), "");

			}
			closeOverLay();
		});
	}
	
	$scope.btnInsert =function(){
		if($scope.listdatacheck !=null){
		    	var messConfirm = $translate.instant("vnm.FormStockExportForCustomerByBatch.mess.messConfirm");
		    	var header = $translate.instant("vnm.FormStockExportForCustomerByBatch.mess.header");
		    	bootboxConfirm(header, messConfirm, $scope.Save, $scope.confirmKO);
		}else{
			bootboxAlertFocus($translate.instant("vnm.FormStockExportForCustomerByBatch.mess.error.insert"), "", $translate.instant("vnm.lable.vnm.name"), "");

		}
	}
	$scope.Save = function (){
		overLoading();
		var dataInsert ={
				"lisdatacheck" :$scope.listdatacheck,
			};
		FormStockExportForCustomerByBatch.onInsert(dataInsert,function(result){
			if(result == null){
				bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onsave4"), "", $translate.instant("vnm.lable.vnm.name"), "");

				return;
			}
			if (result.status == '0') {
				bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");

			} else if (result != null && result != undefined) {
				$scope.listdatacheck =result;
				$scope.itemSelected=$scope.listdatacheck[0];
				
				$scope.model.BatchId=$scope.listdatacheck[0].batchId;
				
				$scope.model.StockDeliverer=$scope.listdatacheck[0].stockDeliverer;
				
				$scope.model.Serial=$scope.listdatacheck[0].serial;
				if($scope.listdatacheck[0].status == null){
					$scope.model.Status=$scope.statusCustomerByBatch[2].Title;
				}else{
					$scope.model.Status=$scope.statusCustomerByBatch[$scope.listdatacheck[0].status].Title;
				}
				$scope.model.Descrition=$scope.listdatacheck[0].descrition;
				var cout=0;
				for(var i=0;i<$scope.listdatacheck.length ; i++){
					if($scope.listdatacheck[i].status==1){
						cout++;
					}
				}
				bootboxAlertFocus("thực hiện thành công: "+cout+"/"+$scope.listdatacheck.length+" bản ghi !", "", $translate.instant("vnm.lable.vnm.name"), "");

				$scope.model.Total=cout+"/"+$scope.listdatacheck.length;
				createTableUpdatefileCustomerByBatch($scope.listdatacheck);
			}else{
				bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onSearch"), "", $translate.instant("vnm.lable.vnm.name"), "");

				
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

