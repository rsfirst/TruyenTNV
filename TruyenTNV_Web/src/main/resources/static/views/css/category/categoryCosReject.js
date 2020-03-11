app_vnm.factory('categoryCosFac', function($http, $translate) {
	return {
		listCosReject : function(data, callback) {
			var url = eim_url + "/bs/category/list_cos_reject";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createCosReject : function(data, callback) {
			var url = eim_url + "/bs/category/create_cos_reject";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		deleteCosReject : function(data, callback) {
			var url = eim_url + "/bs/category/delete_cos_reject";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

var NUMBER_TYPE_PREPAID = "1";
var NUMBER_TYPE_POSTPAID = "2";

var EMTPY_VALUE_ERROR_CODE = 505;
var MNP_CATEGORY_COS_ITEM_EXIST = 90037;

app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,categoryCosFac) {
	
	$scope.model = {};

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

    getListGetPackageType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourcePackagePrepaidCosReject";
		 $http.get(url).success(function (data){
			 var obj = {};
			 obj.value = ''
			 obj.name = 'Tất cả';
			 data.splice(0,0,obj);
			 
			 $scope.PackageTypeSource = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	
    getListGetListPackagePostpaid =  function () {
		var url =eim_url+"/bs/SourcePackagePostpaid";
		 $http.get(url).success(function (data){
			 var obj = {};
			 obj.value = ''
			 obj.name = 'Tất cả';
			 data.splice(0,0,obj);
			 
			 $scope.PackageTypeSource = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    $scope.NumberTypeSource  = [
    	{ 'Id': '', 'Title': 'Tất cả' },
    	{ 'Id': '1', 'Title': 'Trả trước' },
    	{ 'Id': '2', 'Title': 'Trả sau' }
    ];
    
    $scope.onNumberTypeChange = function(){
    	console.log("model.numberType = "+$scope.model.numberType);
    	$scope.PackageTypeSource = [];
    	$scope.model.packageModel = null;
    	
    	if( $scope.model.numberType== NUMBER_TYPE_PREPAID){
    		getListGetPackageType();
    	}else if( $scope.model.numberType == NUMBER_TYPE_POSTPAID){
    		getListGetListPackagePostpaid();
    	}
    }
    
    function setListCosRejectOutput (listCosReject){
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
    			"cos":"",
    			"cosName":"",
    			"msisdnType": ""
    	};
    	
    	if($scope.model.packageModel != undefined && $scope.model.packageModel != null){
    		dataSearch.cos = StringUtilNVL($scope.model.packageModel.value),
    		dataSearch.cosName = StringUtilNVL($scope.model.packageModel.name)
    	}
    	dataSearch.msisdnType = StringUtilNVL($scope.model.numberType)
    	categoryCosFac.listCosReject(dataSearch, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listCosReject = [];
				if (result.length > 0) {
					$scope.listCosReject = setListCosRejectOutput(result);
					$scope.tableParamsListCosReject = new NgTableParams({}, {
						dataset : $scope.listCosReject
					});
				}else{
					$scope.tableParamsListCosReject = new NgTableParams({}, {
						dataset : $scope.listCosReject
					});
				}
			}
			App.unblockUI("#contentMain");
		});
    }
    
    $scope.onInsertCosReject  = function(){
    	
    	if(StringUtilNVL($scope.model.numberType)== ''){
    		bootbox.alert($translate.instant('vnm.category_cos.mess.msisdn.type.required'));
    		return 0;
    	}
    	
    	if($scope.model.packageModel == undefined || $scope.model.packageModel == null){
    		bootbox.alert($translate.instant('vnm.category_cos.mess.cos.required'));
    		return 0;
    	}else{
      		if($scope.model.packageModel.value == ''){
    			bootbox.alert($translate.instant('vnm.category_cos.mess.cos.required'));
    			return 0;
    		}
    	}
    	
    	overLoading("Loading...");
    	var dataInsert = {
    			"msisdnType":StringUtilNVL($scope.model.numberType),
				"cos" : StringUtilNVL($scope.model.packageModel.value),
				"cosName" : StringUtilNVL($scope.model.packageModel.name),
				"msisdnType":StringUtilNVL($scope.model.numberType),
    	};
    	
    	categoryCosFac.createCosReject(dataInsert, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				if(result.code == MNP_CATEGORY_COS_ITEM_EXIST){
					bootbox.alert($translate.instant('vnm.category_cos.mess.cos.exist'));
				}
				else if(result.code == EMTPY_VALUE_ERROR_CODE){
					var listCodeMess = result.listResult;
					var messageAlert = "";	
					for(var i=0; i < listCodeMess.length ; i++){
						var messServer = "+ "+ $translate.instant('vnm.category_cos.'+listCodeMess[i]);
						messageAlert = messageAlert + messServer + BREAK_LINE;
					}
					
					bootbox.alert(messageAlert);
				}else{
					bootbox.alert($translate.instant('vnm.category_cos.mess.insert.cos.success'));
				}
//				$scope.model.packageModel = null;
//				$scope.model.numberType = null;
				$scope.onSearch();
			}
			closeOverLay();
		});
    }
	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.confirmDeleteCos = function(item){
    	$scope.model.cosDelete = item;
    	var messConfirm = $translate.instant('vnm.category_cos.mess.confirm.delete.cos');
    	var header = $translate.instant('vnm.category_cos.page.title');
    	bootboxConfirm(header, messConfirm, $scope.removeItemRejectCos, $scope.confirmKO);
    }
    
    $scope.removeItemRejectCos  = function(){
    	overLoading("Loading...");
    	var dataDelete = {
    			"id": StringUtilNVL($scope.model.cosDelete.id),
				"cos" : StringUtilNVL($scope.model.cosDelete.cos),
				"cosName" : StringUtilNVL($scope.model.cosDelete.cosName),
    	};
    	
    	categoryCosFac.deleteCosReject(dataDelete, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.category_cos.mess.delete.cos.fail')+ result.messages);
			}else {
				bootbox.alert($translate.instant('vnm.category_cos.mess.delete.cos.success'));
//				$scope.model.packageModel = null;
				$scope.onSearch();
			}
			closeOverLay();
		});
    }
    
//    getListGetPackageType();
	$scope.onSearch();
	
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

