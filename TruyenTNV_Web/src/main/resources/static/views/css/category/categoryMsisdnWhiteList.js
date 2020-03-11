app_vnm.factory('categoryCosFac', function($http, $translate) {
	return {
		listMsisdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/list_msisdn_white_list";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createMsisdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/create_msisdn_white_list";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		deleteMsisdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/delete_msisdn_white_list";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});
var FILE_DOWNLOAD="Có lỗi xảy ra khi download file"
var EMPTY_VALUE = "";
var NUMBER_TYPE_PREPAID = "1";
var NUMBER_TYPE_POSTPAID = "2";
var ENTER_ONE_ROW = "\r\n"
	
var INSERT_UPDATE_SUCCESS = "1";

var MNP_CATEGORY_COS_ITEM_EXIST = 90037;
var MAX_LENGTH_FILE=5000;

app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,categoryCosFac) {
	
	$scope.model = {};

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

	var uploader = $scope.uploader = new FileUploader({
		url: eim_url+'/bs/category/list_msisdn_reject_template'
	});
	
	uploader.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		if(fileExtValue.toUpperCase() !="xlsx".toUpperCase() && fileExtValue.toUpperCase()!="xls".toUpperCase() ){
    			var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0009');
    			bootbox.alert(TEMPLATE_ERROR);
    			return false;
    		}
    		return true;
        }
    });

	
	$scope.dataMsisdnRejectTemplate = [];
	$scope.tableParamsListMsisdnTemplate = new NgTableParams({}, {
		dataset : $scope.dataMsisdnRejectTemplate
	});
	
	$scope.uploadFileTemplateProvince = function(uploaderListIn, event){
		$scope.removeAllItemListProvince();
	}
	
	$scope.removeAllItemListProvince =  function(){
		// xóa danh sách tỉnh thành theo shop
		$scope.dataMsisdnRejectTemplate = [];
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataMsisdnRejectTemplate
		});
		
		// xóa file name
		$scope.fileNameListProvinceShop = "";
		$scope.model.msisdnNumber = "";
		$scope.model.numberType = "";
    	
		uploader.clearQueue();
	}
	
	$scope.removeAllItem =  function(){
		$scope.dataMsisdnRejectTemplate = [];
		uploader.clearQueue();
		
		// xóa file name
		$scope.fileNameListProvinceShop = "";
		$scope.model.msisdnNumber = "";
		$scope.model.numberType = "";
		$scope.dataMsisdnRejectTemplate = [];
		$scope.tableParamsListMsisdnTemplate = new NgTableParams({}, {
			dataset : $scope.dataMsisdnRejectTemplate
		});
	}
	
	// set data before upload for each item
	uploader.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.fileNameListProvinceShop = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	// on item upload success
	uploader.onSuccessItem = function (fileItem, response, status, headers) {
		
//		$scope.dataMsisdnRejectTemplate = $scope.setProvinceNameForList(response);
//		$scope.dataMsisdnRejectTemplate = $scope.validateProvinceTemplate(response);
		$scope.dataMsisdnRejectTemplate = response;
		if($scope.dataMsisdnRejectTemplate.length>MAX_LENGTH_FILE){
			bootbox.alert("Số lượng bản ghi trong file không được quá "+ String(MAX_LENGTH_FILE)+" . Mời chọn lại file upload!");
			$scope.removeAllItem();
		}
		else{
			$scope.tableParamsListMsisdnTemplate = new NgTableParams({}, {
				dataset : $scope.dataMsisdnRejectTemplate
			});
		}
		
		
		closeOverLay();
	};
	
	// on item upload error
	uploader.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		bootbox.alert("Có lỗi xảy ra trong quá trình upload danh sách thuê bao.");
	}
	
	uploader.onAfterAddingAll = function(items){
		if(items!=null){
			uploader.uploadAll();	
		}
	} 
	
    $scope.NumberTypeSource  = [
    	{ 'Id': '', 'Title': 'Tất cả' },
    	{ 'Id': '1', 'Title': 'Trả trước' },
    	{ 'Id': '2', 'Title': 'Trả sau' }
    ];
    
    $scope.onNumberTypeChange = function(){
    }
    
    function setListMsisdnRejectOutput (listCosReject){
    	for(var i = 0; i < listCosReject.length; i++){
    		if(listCosReject[i].msisdnType == '1'){
    			listCosReject[i].msisdnTypeStr = "Trả trước";
    		}
    		if(listCosReject[i].msisdnType == '2'){
    			listCosReject[i].msisdnTypeStr = "Trả sau";
    		}
    	}
    	return listCosReject;
    }
    
    $scope.onSearch  = function(){
    	
    	var dataSearch = {
    			"msisdnType":StringUtilNVL($scope.model.numberType),
    			"msisdn":StringUtilNVL($scope.model.msisdnNumber),
    			"comments" : StringUtilNVL($scope.model.comments),
    			"department": StringUtilNVL($scope.model.department)
    	};
    	overLoading();
    	categoryCosFac.listMsisdnReject(dataSearch, function(result) {
    		closeOverLay();
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listMsisdnReject = [];
				if(result != undefined && result !=null){
					$scope.listMsisdnReject = setListMsisdnRejectOutput(result);
					if (result.length > 0) {
						$scope.listMsisdnReject = result;
						$scope.tableParamsListMsisdnReject = new NgTableParams({}, {
							dataset : result
						});
					}else{
						$scope.tableParamsListMsisdnReject = new NgTableParams({}, {
							dataset : $scope.listMsisdnReject
						});
					}
				}
				
			}
			App.unblockUI("#contentMain");
		});
    }
    
    $scope.onInsertMsisdnReject  = function(){
    	
		var updateInput = {};
		var dataInsert = [];
		
    	if($scope.dataMsisdnRejectTemplate.length == 0){
    		var msisdnNumber = StringUtilNVL($scope.model.msisdnNumber);
    		var msisdnType = StringUtilNVL($scope.model.numberType);
    		
			if(msisdnNumber == EMPTY_VALUE && msisdnType == EMPTY_VALUE){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.msisdn.and.type.required'));
				return ;
			}
			
			if(msisdnNumber == EMPTY_VALUE && msisdnType != EMPTY_VALUE){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.msisdn.number.required'));
				return ;
			}
			
			if(msisdnNumber != EMPTY_VALUE && msisdnType == EMPTY_VALUE){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.msisdn.type.required'));
				return ;
			}

			if(!isNumbericInteger(msisdnNumber)){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.msisdn.number.required.number'));
				return ;
			}
			
			if(msisdnNumber.length >10 ||  msisdnNumber.length <9){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.msisdn.number.max.length'));
				return ;
			}
			
			if(msisdnType == NUMBER_TYPE_PREPAID){
				updateInput.msisdnTypeStr = "Trả trước"; 
			}else if(msisdnType == NUMBER_TYPE_POSTPAID){
				updateInput.msisdnTypeStr = "Trả sau";
			}
			
			updateInput.msisdn = msisdnNumber;
			updateInput.msisdnType = msisdnType;
			
			updateInput.comments = StringUtilNVL($scope.model.comments);
			updateInput.department = StringUtilNVL($scope.model.department);
			//DatBD2 update CreateUser
			updateInput.createUser=StringUtilNVL($localStorage.clientContext.shop.staffCode);
			//end
			dataInsert = [updateInput];
		}else{
			dataInsert = $scope.dataMsisdnRejectTemplate;
			//DatBD2 update
			for(var i=0; i<dataInsert.length;i++)
    		{
    			dataInsert[i].createUser=StringUtilNVL($localStorage.clientContext.shop.staffCode);
    		}
			//end
		}
    	
    	
    	
    	overLoading("Loading...");
    	categoryCosFac.createMsisdnReject(dataInsert, function(result) {
    		closeOverLay();
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				
				var messSuccess = $translate.instant('vnm.category_msisdn_reject.mess.insert.cos.success');        		
				messSuccess = messSuccess.replace(/###/, result.message);
						
				if($scope.dataMsisdnRejectTemplate.length!=0){
					bootbox.alert(messSuccess);
					$scope.dataMsisdnRejectTemplate = setListMsisdnRejectOutput(result.listResult);
					$scope.tableParamsListMsisdnTemplate = new NgTableParams({}, {
						dataset : $scope.dataMsisdnRejectTemplate
					});
					$scope.model.numberType = "";
					$scope.model.msisdnNumber = "";
				}else{
					if(result.listResult[0].status == INSERT_UPDATE_SUCCESS){
						bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.insert.individual.success'));
					}else{
						var messIndividual = result.listResult[0].note+"";
						bootbox.alert(messIndividual);						
					}
				}

				$scope.onSearch();
			}
			App.unblockUI("#contentMain");
		});
    }
	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.confirmDeleteMsisdn = function(item){
    	$scope.model.msisdnDelete = item;
    	var messConfirm = $translate.instant('vnm.category_msisdn_reject.mess.confirm.delete.cos');
    	var header = $translate.instant('Danh mục số white List');
    	bootboxConfirm(header, messConfirm, $scope.removeItemMsisdnReject, $scope.confirmKO);
    }
    
    $scope.removeItemMsisdnReject  = function(){
    	overLoading("Loading...");
    	var dataDelete = {
    			"id":StringUtilNVL($scope.model.msisdnDelete.id),
    			"msisdn": StringUtilNVL($scope.model.msisdnDelete.msisdn),
				"msisdnType" : StringUtilNVL($scope.model.msisdnDelete.cos),
    	};
    	
    	categoryCosFac.deleteMsisdnReject(dataDelete, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.delete.msisdn.fail')+ result.messages);
			}else {
				bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.delete.msisdn.success'));
				$scope.model.numberType = "";
				$scope.model.msisdnNumber = "";
				$scope.onSearch(); //DatBD2
			}
			closeOverLay();
		});
    }
    
	$scope.onSearch(); //DatBD2
	
	 $.validator.addMethod("EmptyValue", function (value, element) {
	        if (value == undefined || value=="") return false;
	        if($.trim(value)=="") return false;
	        return true;
	 }, "");
	 
	 $.validator.addMethod("maxlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght >  options) return false;
		 return true;
	 }, "");
	 
	$.validator.addMethod("minlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(valueLenght<options) return false;
		 }
		 return true;
	 }, "");
	
	var idAttachMentVal = null;
    var idAttachMentTypeInput = null;

	var initialize = function () {
	}

	initialize();

	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;

	$scope.downloadFileTemplateServer = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_List_MSISDN_White_List.xlsx";
    	attachFile.folder = "Template_List_MSISDN_White_List.xlsx";
    	dowloadFile(attachFile);
    }
	
	dowloadFile = function(data) {
		overLoading("Downloading file mẫu...");
		var url = eim_url + '/bs/downLoadFileTemplate';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]) , headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert(FILE_DOWNLOAD);
			closeOverLay();
		});
	}
	// BEGIN validate input
	
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

