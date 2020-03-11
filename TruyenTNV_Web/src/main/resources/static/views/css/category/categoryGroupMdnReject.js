app_vnm.factory('categoryCosFac', function($http, $translate) {
	return {
		listGroupMdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/list_group_mdn_reject";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createGroupMdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/create_group_mdn_reject";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		deleteGroupMdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/delete_group_mdn_reject";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

var NUMBER_TYPE_PREPAID = "1";
var NUMBER_TYPE_POSTPAID = "2";

var MNP_CATEGORY_COS_ITEM_EXIST = 90037;
var MNP_CATEGORY_VALIDATE_FAIL = 90040;

app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,categoryCosFac) {
	
	$scope.model = {};

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

    getListNumberSpecType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/category/list_spec_num_group";
		 $http.get(url).success(function (data){
			 for(var i =0;i<data.length; i++){
				 data[i].nameStr = data[i].code;
			 }
			 
			 var obj = {};
			 obj.code = ''
			 obj.nameStr = 'Tất cả';
			 data.splice(0,0,obj);
			 $scope.GroupSpecNumSource = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	
    $scope.NumberTypeSource  = [
    	{ 'Id': '1', 'Title': 'Trả trước' },
    	{ 'Id': '2', 'Title': 'Trả sau' }
    ];
    
/*    $scope.onNumberTypeChange = function(){
    	console.log("model.objectNumberType = "+$scope.model.objectNumberType);
    	$scope.model.packageModel = null;
    	
    	if( $scope.model.objectNumberType== NUMBER_TYPE_PREPAID){
    		getListNumberSpecType();
    	}else if( $scope.model.objectNumberType == NUMBER_TYPE_POSTPAID){
    		getListGetListPackagePostpaid();
    	}
    }*/
    
    $scope.onSearch  = function(){
    	
    	var dataSearch = {
    			"groupId":"",
    			"msisdnGroup":""
    	};
    	
    	if($scope.model.objectNumberType != undefined && $scope.model.objectNumberType != null){
        	dataSearch = {
    				"groupId" : StringUtilNVL($scope.model.objectNumberType.groupId),
    				"msisdnGroup" : StringUtilNVL($scope.model.objectNumberType.code),
        	};
    	}
    	
    	categoryCosFac.listGroupMdnReject(dataSearch, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listGroupMdnReject = [];
				if (result.length > 0) {
					$scope.listGroupMdnReject = result;
					$scope.tableParamsListCosReject = new NgTableParams({}, {
						dataset : result
					});
				}else{
					$scope.tableParamsListCosReject = new NgTableParams({}, {
						dataset : $scope.listGroupMdnReject
					});
//					bootbox.alert($translate.instant('vnm.category_group_mdn.mess.nodata.cos.found'));	
				}
			}
			closeOverLay();
		});
    }
    
    $scope.onInsertCosReject  = function(){
    	overLoading("Loading...");
    	if($scope.model.objectNumberType == undefined || $scope.model.objectNumberType == null){
    		bootbox.alert($translate.instant('vnm.category_group_mdn.mess.cos.required'));
    		closeOverLay();
    		return 0;
    	}else{
    	/*	if($scope.model.objectNumberType.code == ''){
    			bootbox.alert($translate.instant('vnm.category_group_mdn.mess.cos.required'));
        		closeOverLay();
        		return 0;
    		}*/
    	}
    	
    	var dataInsert = {
				"groupId" : StringUtilNVL($scope.model.objectNumberType.groupId),
				"msisdnGroup" : StringUtilNVL($scope.model.objectNumberType.code),
    	};
    	
    	categoryCosFac.createGroupMdnReject(dataInsert, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				if(result.code = MNP_CATEGORY_VALIDATE_FAIL ){
					bootbox.alert($translate.instant('vnm.category_group_mdn.mess.cos.required'));
					closeOverLay();
					return;	
				}
				closeOverLay();
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				
				if(result.code == MNP_CATEGORY_COS_ITEM_EXIST){
					bootbox.alert($translate.instant('vnm.category_group_mdn.mess.cos.exist'));
				}else{
					bootbox.alert($translate.instant('vnm.category_group_mdn.mess.insert.cos.success'));
				}
//				$scope.model.objectNumberType = null;
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
    	var messConfirm = $translate.instant('vnm.category_group_mdn.mess.confirm.delete.cos');
    	var header = $translate.instant('vnm.category_group_mdn.page.title');
    	bootboxConfirm(header, messConfirm, $scope.removeItemRejectCos, $scope.confirmKO);
    }
    
    $scope.removeItemRejectCos  = function(){
    	overLoading("Loading...");
   	
    	var dataDelete = {
    			"id": StringUtilNVL($scope.model.cosDelete.id),
				"groupId" : StringUtilNVL($scope.model.cosDelete.groupId),
				"msisdnGroup" : StringUtilNVL($scope.model.cosDelete.msisdnGroup),
    	};
    	
    	categoryCosFac.deleteGroupMdnReject(dataDelete, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.category_group_mdn.mess.delete.cos.success')+ result.messages);
			}else {
				bootbox.alert($translate.instant('vnm.category_group_mdn.mess.delete.cos.success'));
				$scope.onSearch();
			}
			closeOverLay();
		});
    }
    
    getListNumberSpecType();
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

