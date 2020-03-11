var EMPTY_VALUE = "";
var SELECT_NONE_INDEX = -1;
var STATUS_DUPLICATE = 2;
var STATUS_OK = 1;

var GOOD_ITEM_TYPE_ALL = "ALL";
var GOOD_ITEM_TYPE_SIM = "SIM";
var GOOD_ITEM_TYPE_CARD = "CARD";
var GOOD_ITEM_TYPE_AIRTIME = "AIRTIME";
var GOOD_ITEM_TYPE_EVOUCHER = "EVOUCHER";

var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";

app_vnm.factory('listMultiShopGoods', function($http, $translate) {
	return {
		getListItemByItemType : function(data, callback) {
			var url = eim_url + "/bs/Category/getListGoodForMulti?goodType=" + data;
			$http.get(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getShopCodeDBWith1Shop : function(data, callback) {
			var url = eim_url + "/bs/Category/getShopByCode"
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		addMultiGoodShopService : function(data, callback) {
			var url = eim_url + "/bs/Category/addMultiShopGood";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctr-listMultiShopGoods', function($scope, $rootScope,
		$translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage,
		listMultiShopGoods) {
	
	var MESS_ERROR_SHOP_CODE_NOT_FOUND = $translate.instant('vnm.form_multi_shop_goods.mess.list.shop.item.not.found');
	var NUMBER_ERROR_SHOP_CODE = $translate.instant('vnm.form_multi_shop_goods.mess.list.shop.item.count.error');

	var MESS_ERROR_SHOP_DUPLICATE = $translate.instant('vnm.form_multi_shop_goods.mess.list.shop.item.duplicate');
	
	$scope.model = {};
	$scope.model.goodItemType = GOOD_ITEM_TYPE_SIM;
	//data danh sách mặt hàng gán cho shop
	$scope.dataTableParamsGoodItemForAssignment = [];
	$scope.dataTableParamsGoodItemForAssignmentToAdd = [];
	$scope.dataTableParamsGoodItemForAssignmentToRemove = [];
	
	$scope.searchResult = [];
	$scope.ListProvinceSource = [];
	$scope.ListProvinceSourceSearch = [];
	
	$scope.model.checkboxListGoodItemAssign = false
	$scope.model.checkboxListGoodItem = false;
	
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

	$scope.getListItemByItemType = function() {
		overLoading("loading...");
		$scope.searchResult = [];
		$scope.tableParamsSearch = new NgTableParams({}, {
			dataset : $scope.searchResult
		});
		
		var goodItemTypeSearch = StringUtilNVL($scope.model.goodItemType);
		
		listMultiShopGoods.getListItemByItemType(goodItemTypeSearch,function(result) {

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
				$scope.dataTableGoodItem = $scope.setCheckBoxForList(result, false);
				
				$scope.tableParamsGoodItem = new NgTableParams({}, {
							dataset : $scope.dataTableGoodItem
				});

			}
		});
	}

	//get shop by code
	
	$scope.outFocusFunction = function(e){
		overLoading("loading...");
		
		$scope.model.ShopCodeObject = {};
		$scope.model.shopNameIndividual = "";
		var shopCodeIndividual = StringUtilNVL($scope.model.shopCodeIndividual);
		
		if(shopCodeIndividual == EMPTY_VALUE){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_multi_shop_goods.mess.shop.code.required'));
			return;
		}
		
		var isShopCodeExist = $scope.checkShopCodExistsInTemplate($scope.dataListShopTemplate, shopCodeIndividual);
		if(isShopCodeExist){
			closeOverLay();
			$scope.model.shopNameIndividual = "";
			bootbox.alert($translate.instant('vnm.form_multi_shop_goods.mess.shop.code.duplicate'));
			return;
		}
		
		var shopModel = {};
		shopModel.shopCode = shopCodeIndividual;
		listMultiShopGoods.getShopCodeDBWith1Shop(shopModel,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox
						.alert($translate
								.instant('vnm.messages.validate.prepaid.server.'
										+ result.messages));
	
			} else {
				$scope.model.ShopCodeObject = result;
				var status = result.status;
				if(status == SELECT_NONE_INDEX){
					//set error mess
					bootbox.alert(MESS_ERROR_SHOP_CODE_NOT_FOUND);
					return;
				}
				if(status == STATUS_OK){
					$scope.model.shopNameIndividual = result.name;
					return;
				}
			}
		});
		
	}
	
	$scope.getShopCodeDBWith1ShopFunction = function() {
		overLoading("loading...");
		
		$scope.model.shopNameIndividual = "";
		var shopCodeIndividual = StringUtilNVL($scope.model.shopCodeIndividual);
		
		if(shopCodeIndividual == EMPTY_VALUE){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_multi_shop_goods.mess.shop.code.required'));
			return;
		}
		
		var isShopCodeExist = $scope.checkShopCodExistsInTemplate($scope.dataListShopTemplate, shopCodeIndividual);
		if(isShopCodeExist){
			closeOverLay();
			$scope.model.shopNameIndividual = "";
			bootbox.alert($translate.instant('vnm.form_multi_shop_goods.mess.shop.code.duplicate'));
			return;
		}
		
		closeOverLay();
		var status = $scope.model.ShopCodeObject.status;
		if(status == SELECT_NONE_INDEX){
			//set error mess
			bootbox.alert(MESS_ERROR_SHOP_CODE_NOT_FOUND);
			return;
		}
		if(status == STATUS_OK){
			$scope.model.shopNameIndividual = $scope.model.ShopCodeObject.name;
			$scope.dataListShopTemplate.push($scope.model.ShopCodeObject);
			
			$scope.tableListShopTemplate = new NgTableParams({}, {
				dataset : $scope.dataListShopTemplate
			});
			return;
		}
		
	}
	
	$scope.addMultiGoodShopFunction = function() {
		
		$scope.dataTableShopItemAssignmentResult  = [];
		$scope.tableParamsShopItemAssignmentResult = new NgTableParams({}, {
			dataset : $scope.dataTableShopItemAssignmentResult
		});
		
		$scope.dataTableGoodItemAssignmentResult = [];
		$scope.tableParamsGoodItemAssignmentResult = new NgTableParams({}, {
			dataset : $scope.dataTableGoodItemAssignmentResult
		});
		
		if($scope.dataListShopTemplate.length ==0){
			bootbox.alert(status + " " + $translate.instant('vnm.form_multi_shop_goods.mess.list.shop.empty'));
			return 0;
		}
		
		if($scope.dataTableParamsGoodItemForAssignment.length ==0){
			bootbox.alert(status + " " + $translate.instant('vnm.form_multi_shop_goods.mess.list.good.item.empty'));
			return 0;
		}
		
		var listShopCodeCorrect = $scope.getListShopCodeItemCorrect($scope.dataListShopTemplate);
		
		if(listShopCodeCorrect.length ==0){
			bootbox.alert(status + " " + $translate.instant('vnm.form_multi_shop_goods.mess.list.good.shop.code.correct.empty'));
			return 0;
		}
		
		if($scope.dataTableParamsGoodItemForAssignment.length ==0){
			bootbox.alert(status + " " + $translate.instant('vnm.form_multi_shop_goods.mess.list.good.item.empty'));
			return 0;
		}
		
		overLoading("loading...");
		
		var dataAssignMent = {};
		
		//danh sách cửa hàng
		dataAssignMent.lstShop = listShopCodeCorrect;
		//danh sach mặt hàng
		dataAssignMent.lstGood = $scope.dataTableParamsGoodItemForAssignment;
		
		listMultiShopGoods.addMultiGoodShopService(dataAssignMent,function(result) {

				closeOverLay();
				if (result.status == '0'
						&& result.status != undefined) {
					// KHONG THANH CONG
					bootbox
							.alert($translate
									.instant('vnm.messages.validate.prepaid.server.'
											+ result.messages));

				} else {
					bootbox.alert($translate
							.instant('vnm.form_multi_shop_goods.mess.add.multi.shop.ok'));

					$scope.dataTableShopItemAssignmentResult = dataAssignMent.lstShop;
					$scope.tableParamsShopItemAssignmentResult = new NgTableParams({}, {
						dataset : $scope.dataTableShopItemAssignmentResult
					});
					
					$scope.dataTableGoodItemAssignmentResult = dataAssignMent.lstGood;
					$scope.tableParamsGoodItemAssignmentResult = new NgTableParams({}, {
						dataset : $scope.dataTableGoodItemAssignmentResult
					});
					
				}
			});
	}
	
	//set checkbox cho table
	$scope.setCheckBoxForList = function(listData, typeCheckBox){
		for(var i =0; i < listData.length; i++){
			listData[i].typeCheckBox = typeCheckBox;
			listData[i].typeCheckBoxExist = typeCheckBox;
		}
		return listData;
	}
	
	$scope.loadDefauld = function() {
		overLoading("loading...");

		$scope.getListItemByItemType();
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();
	
	//click checkbox header list good item ment
	$scope.checkAllAdd = function(){
		$scope.dataTableParamsGoodItemForAssignmentToAdd = [];
		angular.forEach($scope.dataTableGoodItem, function(item) {
			
			item.typeCheckBox = $scope.model.checkboxListGoodItem;
			
			if ($scope.model.checkboxListGoodItem) {
				$scope.dataTableParamsGoodItemForAssignmentToAdd.push(item);
			}
		})
	}
	
	//click checkbox header list good item assign ment
	$scope.checkAllAddGoodItemAssignMent = function(){
		$scope.dataTableParamsGoodItemForAssignmentToRemove = [];
		angular.forEach($scope.dataTableParamsGoodItemForAssignment, function(item) {
			
			item.typeCheckBox = $scope.model.checkboxListGoodItemAssign;
			
			if ($scope.model.checkboxListGoodItemAssign) {
				$scope.dataTableParamsGoodItemForAssignmentToRemove.push(item);
			}
		})
	}
	
	//check all row in table checked
	// return false is not checked
	// return true is all row checked
	$scope.isAllRowChecked = function(listDataTable){
		var resultCheck = false;
		
		if(listDataTable.length == 0){
			return false;
		}
		var countRowCheck = 0;
		for(var i =0; i<listDataTable.length; i++){
			if(listDataTable[i].typeCheckBox == true){
				countRowCheck++;
			}
		}
		
		if(countRowCheck == listDataTable.length){
			resultCheck = true;
		}
		return resultCheck;
	}
	
	//onclick checkbox table list good item
	$scope.selectOrRemoveGoodItem = function(item) {
				
		var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataTableGoodItem);
		if(isHeaderGoodItem){
			$scope.model.checkboxListGoodItem = true;
		}else{
			$scope.model.checkboxListGoodItem = false;
		}
		
		if(item.typeCheckBox == true){
			//TODO add to list
			$scope.dataTableParamsGoodItemForAssignmentToAdd.push(item);
		}else{
			//remove to list
			removeListGoodItemByItem($scope.dataTableParamsGoodItemForAssignmentToAdd, item);
		}
	}
	
	//onclick checkbox table list good item to assign
	$scope.selectOrRemoveGoodItemGoodAssignMent = function(item) {

		var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataTableParamsGoodItemForAssignment);
		if(isHeaderGoodItem){
			$scope.model.checkboxListGoodItemAssign = true;
		}else{
			$scope.model.checkboxListGoodItemAssign = false;
		}
		
		if(item.typeCheckBox == true){
			//TODO add to list
			$scope.dataTableParamsGoodItemForAssignmentToRemove.push(item);
		}else{
			//remove to list
			removeListGoodItemByItem($scope.dataTableParamsGoodItemForAssignmentToRemove, item);
		}
	}

	function removeListGoodItemByItem(listGoodItem, item) {
		var index = checkItemExistInListGoodItem(listGoodItem, item);
		if(index!= -1){
			listGoodItem.splice( index, 1 );
		}
		
		return listGoodItem;
	}
	
	//check item đã tồn tại trong danh sách mặt hàng
	function checkItemExistInListGoodItem(listGoodItem, item){
		var index = -1;		
		for( var i = 0; i < listGoodItem.length; i++ ) {
			if( listGoodItem[i].goodCode == item.goodCode ) {
				index = i;
				break;
			}
		}
		return index;
	}
	

	//btn thêm list cho danh sách mặt hàng gán cho shop
	$scope.btnAddGoodItemAssigment = function() {
		
		$scope.dataTableParamsGoodItemForAssignment = $scope.addListCheckedToListGoodItem($scope.dataTableParamsGoodItemForAssignment,
				$scope.dataTableParamsGoodItemForAssignmentToAdd);
		
		//set check box false
		$scope.dataTableParamsGoodItemForAssignment = $scope.setCheckBoxForList($scope.dataTableParamsGoodItemForAssignment, false);
		
		$scope.tableParamsGoodItemForAssignment = new NgTableParams({}, {
			dataset : $scope.dataTableParamsGoodItemForAssignment
		});
	}
	
	//btn remove list cho danh sách mặt hàng gán cho shop
	$scope.btnRemoveGoodItemAssigment = function(){
		
		$scope.dataTableParamsGoodItemForAssignment = $scope.removeListCheckedToListGoodItem($scope.dataTableParamsGoodItemForAssignment,
				$scope.dataTableParamsGoodItemForAssignmentToRemove);
		
		$scope.tableParamsGoodItemForAssignment = new NgTableParams({}, {
			dataset : $scope.dataTableParamsGoodItemForAssignment
		});
		
		var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataTableParamsGoodItemForAssignment);
		if(isHeaderGoodItem){
			$scope.model.checkboxListGoodItemAssign = true;
		}else{
			$scope.model.checkboxListGoodItemAssign = false;
		}
	}
	
	$scope.accountTypeChangeFn = function(val){
		$scope.dataTableParamsGoodItemForAssignmentToAdd = [];
		if(val != EMPTY_VALUE){
			$scope.dataTableGoodItem = [];
			$scope.tableParamsGoodItem = new NgTableParams({}, {
						dataset : $scope.dataTableGoodItem
			});

			$scope.getListItemByItemType();
		}
	}
	
	$scope.addListCheckedToListGoodItem = function(listGoodItem, listTemp){
		var listGoodItemResult = [];
		for(var i=0; i< listTemp.length; i++){
			var index = checkItemExistInListGoodItem(listGoodItem, listTemp[i]);
			if(index == SELECT_NONE_INDEX){
				var itemTemp = listTemp[i];
				itemTemp.id = createTimeStamp()+ itemTemp.goodId;
				listGoodItem.push(itemTemp);
			}
		}
		listGoodItemResult = angular.copy(listGoodItem);
		return listGoodItemResult;
	}
	
	$scope.removeListCheckedToListGoodItem = function(listGoodItem, listTemp){
		for(var i=0; i< listTemp.length; i++){
			var itemTemp = listTemp[i];
			var index = checkItemExistInListGoodItem(listGoodItem, itemTemp);
			if(index != SELECT_NONE_INDEX){
				listGoodItem.splice( index, 1 );
			}
		}
		return listGoodItem;
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
    
    // Another user-defined filter set max file size
	uploaderListShop.filters.push({
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
	
	//lấy danh sách shop code ok
	$scope.getListShopCodeItemCorrect = function(listShopTemplate){
		var listShopTemplateResult = [];
		
		for(var i =0; i< listShopTemplate.length; i++){
			var status = StringUtilNVL(listShopTemplate[i].status)
			//set error mess
			if(status == STATUS_OK){
				listShopTemplateResult.push(listShopTemplate[i]);
			}
		}
		
		return listShopTemplateResult ;
	}
	
	//xóa bản ghi trong bảng mã cửa hàng
	$scope.deleteShopCodeByItem = function(item){
		var index = -1;		

		for( var i = 0; i < $scope.dataListShopTemplate.length; i++ ) {
			if( $scope.dataListShopTemplate[i].idRecord == item.idRecord ) {
				index = i;
				break;
			}
		}
		
		$scope.dataListShopTemplate.splice( index, 1 );
		
		$scope.tableListShopTemplate = new NgTableParams({}, {
			dataset : $scope.dataListShopTemplate
		});
	}
	
	//set province name for template
	$scope.setDataOutPutForListShopCode = function(listShopTemplate){

		for(var i =0; i< listShopTemplate.length; i++){
			var status = StringUtilNVL(listShopTemplate[i].status)
			
			//create id client
			var idRecord = createTimeStamp() + i;
			listShopTemplate[i].idRecord = idRecord;
			
			//set error mess
			if(status == SELECT_NONE_INDEX){
				listShopTemplate[i].errorStatus = MESS_ERROR_SHOP_CODE_NOT_FOUND;
			}
			
			if(status == STATUS_DUPLICATE){
				listShopTemplate[i].errorStatus = MESS_ERROR_SHOP_DUPLICATE;
			}
		}
		
		return listShopTemplate ;
	}
	
	//validate list province template
	$scope.countShopCodeCorrect = function(listShopTemplate){
		var countErrorRecord = 0;
		
		for(var i =0; i< listShopTemplate.length; i++){
			var errorStatus = StringUtilNVL(listShopTemplate[i].errorStatus)
			
			if(errorStatus != EMPTY_VALUE){
				countErrorRecord++;
			}
		}
		
		return countErrorRecord ;
	}
	
	$scope.uploadFileTemplateProvince = function(uploaderListIn, event){
		$scope.removeAllItemListShop();
	}
	
	$scope.removeAllItemListShop =  function(){
		// xóa danh sách tỉnh thành theo shop
		$scope.dataListShopTemplate = [];
		$scope.tableListShopTemplate = new NgTableParams({}, {
			dataset : $scope.dataListShopTemplate
		});
		
		// xóa file name
		$scope.fileNameListProvinceShop = "";
		$scope.model.shopCodeIndividual = "";
		
		$scope.dataTableParamsGoodItemForAssignmentToAdd = [];
		$scope.dataTableParamsGoodItemForAssignmentToRemove = [];
		
		$scope.dataTableParamsGoodItemForAssignment = [];
		$scope.tableParamsGoodItemForAssignment = new NgTableParams({}, {
			dataset : $scope.dataTableParamsGoodItemForAssignment
		});
		
		$scope.dataTableShopItemAssignmentResult  = [];
		$scope.tableParamsShopItemAssignmentResult = new NgTableParams({}, {
			dataset : $scope.dataTableShopItemAssignmentResult
		});
		
		$scope.dataTableGoodItemAssignmentResult = [];
		$scope.tableParamsGoodItemAssignmentResult = new NgTableParams({}, {
			dataset : $scope.dataTableGoodItemAssignmentResult
		});
		
		$scope.getListItemByItemType();
		uploaderListShop.clearQueue();
	}
	
	// set data before upload for each item
	uploaderListShop.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.fileNameListProvinceShop = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	// on item upload success
	uploaderListShop.onSuccessItem = function (fileItem, response, status, headers) {
		
		$scope.dataListShopTemplate = $scope.validateListShopCodeTemplate(response);
		$scope.dataListShopTemplate = $scope.setDataOutPutForListShopCode(response);
		
		var countErrorShopCode = $scope.countShopCodeCorrect($scope.dataListShopTemplate);
		var totalListShopTemplate = $scope.dataListShopTemplate.length;
		if(countErrorShopCode > 0){
			//bootbox.alert( (totalListShopTemplate-countErrorShopCode) +"/"+totalListShopTemplate+" "+ NUMBER_ERROR_SHOP_CODE );
			bootbox.alert( (countErrorShopCode) +"/"+totalListShopTemplate+" "+ NUMBER_ERROR_SHOP_CODE );
		}
		
		$scope.tableListShopTemplate = new NgTableParams({}, {
			dataset : $scope.dataListShopTemplate
		});
		
		closeOverLay();
	};
	
	//check shopcode exist in table
	//return true if exist in table
	$scope.checkShopCodExistsInTemplate = function(listShopCodeTemplate, shopCode){
		var isShopCodeExist = false;
		for(var i =0; i< listShopCodeTemplate.length; i++){
			if(StringUtilNVL(listShopCodeTemplate[i].shopCode.toUpperCase()) == StringUtilNVL(shopCode).toUpperCase()){
				isShopCodeExist = true;
				break;
			}
		}
		return isShopCodeExist;
	}
	
	//validate list shopcode template
	$scope.validateListShopCodeTemplate = function(listProvinceShop){
		var listProvinceShopCheck = [];
		
		for(var i =0; i< listProvinceShop.length; i++){
			var shopCode = StringUtilNVL(listProvinceShop[i].shop_Id)
			
			if(shopCode != EMPTY_VALUE){
				if(listProvinceShopCheck.length == 0){
					listProvinceShopCheck.push(shopCode);
				}else{
					if($.inArray(shopCode, listProvinceShopCheck)> SELECT_NONE_INDEX){
						listProvinceShop[i].errorStatus = MESS_ERROR_SHOP_DUPLICATE;
						listProvinceShop[i].status = STATUS_DUPLICATE;
					}else{
						listProvinceShopCheck.push(shopCode);
					}
				}
			}
		}
		
		return listProvinceShop ;
	}
	
	// on item upload error
	uploaderListShop.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		bootbox.alert("Có lỗi xảy ra trong quá trình upload danh sách thuê bao.");
	}
	
	uploaderListShop.onAfterAddingAll = function(items){
		overLoading("Uploading...");
		if(items!=null){
			uploaderListShop.uploadAll();	
		}
	} 
	
	downloadFile = function(data) {
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
    	attachFile.fileName = "Template_Multi_ShopGood.xlsx";
    	attachFile.folder = "Template_Multi_ShopGood.xlsx";
    	downloadFile(attachFile);
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
