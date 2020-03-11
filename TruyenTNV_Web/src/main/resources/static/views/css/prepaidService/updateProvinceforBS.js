var EMPTY_VALUE = "";
var SELECT_NONE_INDEX = -1;

var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";

app_vnm.factory('updateProvinceService', function($http, $translate) {
	return {
		getListShopByProvinceAndShop : function(data, callback) {
			var url = eim_url + "/bs/Custome/getListShopByProvinceAndShop";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listProvinceForShop : function(callback) {
			var url = eim_url + "/bs/Custome/getListProvinceShop";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		updateProvinceForShop : function(data, callback) {
			var url = eim_url + "/bs/Custome/updateProvinceForBrandedShop";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctr-updateprovinceshop', function($scope, $rootScope,
		$translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage,
		updateProvinceService) {
	
	var MESS_ERROR_PROVINCE_ID_NOT_FOUND = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0005');
	var MESS_ERROR_SHOP_REQUIRED = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0006');
	var MESS_ERROR_PROVINCE_REQUIRED = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0007');
	var MESS_ERROR_SHOP_DUPLICATE = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0008');
	
	$scope.model = {};

	$scope.searchResult = [];
	$scope.ListProvinceSource = [];
	$scope.ListProvinceSourceSearch = [];
	
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

	$scope.loadDefauld = function() {
		overLoading("loading...");

		updateProvinceService.listProvinceForShop(function(result) {
			closeOverLay();
			if (result.status == '0' && result.status != 'undefined') {
				bootbox.alert($translate
						.instant('vnm.messages.validate.prepaid.server.'
								+ result.messages));
			} else {
				
				var LIST_ALL = [{
					proId:"",
					province:"--Select--",
					region:null,
					shop:null
				}];
				
				LIST_ALL.push.apply(LIST_ALL,result);
				
				$scope.ListProvinceSource = result;
				$scope.ListProvinceSourceSearch = LIST_ALL;
			}
		});
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$scope.getListShopByProvinceAndShop = function() {
		overLoading("loading...");
		$scope.searchResult = [];
		$scope.tableParamsSearch = new NgTableParams({}, {
			dataset : $scope.searchResult
		});
		
		$scope.rowHighLightSearch = -1;
		var shopCodeSearchVal = StringUtilNVL($scope.model.shopCodeSearch);
		var provinceSearchVal = StringUtilNVL($scope.model.provinceSearch);
		
		if(shopCodeSearchVal == EMPTY_VALUE && provinceSearchVal == EMPTY_VALUE){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0001'));
			return ;
		}
		
		var searchInput = {};
		searchInput.shopCode = shopCodeSearchVal;
		searchInput.province = provinceSearchVal;
		
		updateProvinceService
		.getListShopByProvinceAndShop(
				searchInput,
				function(result) {

					closeOverLay();
					if (result.status == '0'
							&& result.status != undefined) {
						// KHONG THANH CONG
						bootbox
								.alert($translate
										.instant('vnm.messages.validate.prepaid.server.'
												+ result.messages));

					} else {
						// THANH CONG
						$scope.searchResult = $scope.setProvinceNameForList(result);
						
						$scope.tableParamsSearch = new NgTableParams({}, {
									dataset : $scope.searchResult
						});

					}
				});
	}

	$scope.updateProvinceForShop = function() {
		overLoading("loading...");
		
		$scope.rowHighLightSearch = -1;
		var shopCodeSearchVal = StringUtilNVL($scope.model.shopCodeUpdate);
		var provinceSearchVal = StringUtilNVL($scope.model.provinceUpdate);
	
		var updateInput = {};
		var listUpdateInput = [];
		
		if($scope.dataProvinceForShop.length == 0){
			if(shopCodeSearchVal == EMPTY_VALUE && provinceSearchVal == EMPTY_VALUE){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0002'));
				return ;
			}
			
			if(shopCodeSearchVal == EMPTY_VALUE && provinceSearchVal != EMPTY_VALUE){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0003'));
				return ;
			}
			
			if(shopCodeSearchVal != EMPTY_VALUE && provinceSearchVal == EMPTY_VALUE){
				closeOverLay();
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0004'));
				return ;
			}
			
			updateInput.shopCode = shopCodeSearchVal;
			updateInput.province = provinceSearchVal;
			
			listUpdateInput = [updateInput];
		}else{
			listUpdateInput = $scope.dataProvinceForShop;
		}
		
		updateProvinceService.updateProvinceForShop(
				listUpdateInput,
				function(result) {

					closeOverLay();
					if (result.status == '0'
							&& result.status != undefined) {
						// KHONG THANH CONG
						var MESS_UPDATE_KO = $translate.instant('vnm.messages.validate.prepaid.server.UPDATE_PROVINCE-0006');
						
						if(result.listResult.length == 1){
							var listError = result.listResult[0].listNoteRecord;
							var errorMess = "";
							for(var i =0; i<listError.length; i++){
								errorMess += "<br/> "+listError[i];
							}
							
							bootbox.alert(MESS_UPDATE_KO +errorMess);
							return;
						}else{
							if(result.code != null && result.code != undefined){
								if(result.code == "UPDATE_PROVINCE-0005"){
									bootbox.alert(result.messages);
									$scope.dataProvinceForShop = result.listResult;
									
									$scope.tableParams = new NgTableParams({}, {
										dataset : $scope.dataProvinceForShop
									});
									return;
								}
							}else{
								bootbox.alert(MESS_UPDATE_KO +result.message);
							}
						}

					} else {
						if($scope.dataProvinceForShop.length == 0){
							bootbox.alert($translate.instant('vnm.update_province.mess.update.success'));
						}else{
							$scope.dataProvinceForShop = result.listResult;
							
							$scope.tableParams = new NgTableParams({}, {
								dataset : $scope.dataProvinceForShop
							});
							bootbox.alert($translate.instant('vnm.update_province.mess.updateBatch.success'));
							
						}
						
					}
				});
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
	
	var uploaderProvince = $scope.uploaderProvince = new FileUploader({
		url: eim_url+'/bs/Custome/getListProvinceFromTemplate'
	});
	
//	uploaderProvince.queueLimit = 1;
    
	$scope.dataProvinceForShop = [];
	
	$scope.fileNameListProvinceShop = "";
    
    // Another user-defined filter set max file size
	uploaderProvince.filters.push({
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
	
	$scope.getProvinceNameByProvinceId = function(listProvinceSource, provinceIdIn){
		var provinceNameOut = "";
		for(var i =0; i< listProvinceSource.length; i++){
			var proId = StringUtilNVL(listProvinceSource[i].proId);
			var provinceId = StringUtilNVL(provinceIdIn);
			if(provinceId == proId){
				provinceNameOut = StringUtilNVL(listProvinceSource[i].province);
				break;
			}
		}
		return provinceNameOut;
	}
	
	//set province name for template
	$scope.setProvinceNameForList = function(listProvinceShop){

		for(var i =0; i< listProvinceShop.length; i++){
			var provId = StringUtilNVL(listProvinceShop[i].province)
			var provinceName = $scope.getProvinceNameByProvinceId($scope.ListProvinceSource, provId);
			listProvinceShop[i].provinceName = provinceName;
			if(StringUtilNVL(provinceName) == EMPTY_VALUE){
				listProvinceShop[i].errorStatus = MESS_ERROR_PROVINCE_ID_NOT_FOUND;
			}
		}
		
		return listProvinceShop ;
	}
	
	//validate list province template
	$scope.validateProvinceTemplate = function(listProvinceShop){
		var listProvinceShopCheck = [];
		
		for(var i =0; i< listProvinceShop.length; i++){
			var provId = StringUtilNVL(listProvinceShop[i].province)
			var shopCode = StringUtilNVL(listProvinceShop[i].shopCode)
			var statusUpdate = StringUtilNVL(listProvinceShop[i].statusUpdate);
			
			listProvinceShop[i].listNoteRecord = [];
			
			if(shopCode == EMPTY_VALUE){
				listProvinceShop[i].listNoteRecord.push(MESS_ERROR_SHOP_REQUIRED)
			}
			
			if(provId == EMPTY_VALUE){
				listProvinceShop[i].listNoteRecord.push(MESS_ERROR_PROVINCE_REQUIRED)
			}

			if(shopCode != EMPTY_VALUE && provId != EMPTY_VALUE){
				var provinceName = $scope.getProvinceNameByProvinceId($scope.ListProvinceSource, provId);
				listProvinceShop[i].provinceName = provinceName;
				if(StringUtilNVL(provinceName) == EMPTY_VALUE){
					listProvinceShop[i].listNoteRecord.push(MESS_ERROR_PROVINCE_ID_NOT_FOUND);
				}
				
				if(listProvinceShopCheck.length == 0){
					listProvinceShopCheck.push(shopCode);
				}else{
					if($.inArray(shopCode, listProvinceShopCheck)> SELECT_NONE_INDEX){
						listProvinceShop[i].listNoteRecord.push(MESS_ERROR_SHOP_DUPLICATE);
					}else{
						listProvinceShopCheck.push(shopCode);
					}
				}
			}
		}
		
		return listProvinceShop ;
	}
	
	$scope.uploadFileTemplateProvince = function(uploaderListIn, event){
		$scope.removeAllItemListProvince();
	}
	
	$scope.removeAllItemListProvince =  function(){
		// xóa danh sách tỉnh thành theo shop
		$scope.dataProvinceForShop = [];
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataProvinceForShop
		});
		
		// xóa file name
		$scope.fileNameListProvinceShop = "";
		$scope.model.shopCodeUpdate = "";
		$scope.model.provinceUpdate = "";
    	
		uploaderProvince.clearQueue();
	}
	
	$scope.removeAllItem =  function(){
		$scope.dataProvinceForShop = [];
		uploaderProvince.clearQueue();
		$scope.fileNameListProvinceShop = "";
		$scope.model.shopCodeUpdate = "";
		$scope.model.provinceUpdate = "";
		
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataProvinceForShop
		});
	}
	
	// set data before upload for each item
	uploaderProvince.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.fileNameListProvinceShop = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	// on item upload success
	uploaderProvince.onSuccessItem = function (fileItem, response, status, headers) {
		
		$scope.dataProvinceForShop = $scope.setProvinceNameForList(response);
		$scope.dataProvinceForShop = $scope.validateProvinceTemplate(response);
		
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataProvinceForShop
		});
		
		closeOverLay();
	};
	
	// on item upload error
	uploaderProvince.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		bootbox.alert("Có lỗi xảy ra trong quá trình upload danh sách thuê bao.");
	}
	
	uploaderProvince.onAfterAddingAll = function(items){
		if(items!=null){
			uploaderProvince.uploadAll();	
		}
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
	
	$scope.downloadFileTemplateServer = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_Update_Province.xlsx";
    	attachFile.folder = "Template_Update_Province.xlsx";
    	dowloadFile(attachFile);
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
