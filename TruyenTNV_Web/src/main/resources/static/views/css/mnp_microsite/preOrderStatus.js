app_vnm.factory('preOrderStatus', function($http, $translate) {
	return {
		/*duytk10 test /////////////////// */
		searchGroupMnpOrderStatus : function(data, callback) {
			var url = eim_url + "/bs/status/search_group_mnp_order_status";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createGroupMnpOrderStatus : function(data, callback) {
			var url = eim_url + "/bs/status/create_group_mnp_order_status";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		updateGroupMnpOrderStatus : function(data, callback) {
			var url = eim_url + "/bs/status/update_group_mnp_order_status";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		deleteGroupMnpOrderStatus : function(data, callback) {
			var url = eim_url + "/bs//status/delete_group_mnp_order_status";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	/*===========----------------*/
	}
});

var NUMBER_TYPE_PREPAID = "1";
var NUMBER_TYPE_POSTPAID = "2";

var MNP_CATEGORY_COS_ITEM_EXIST = 90037;
var MNP_CATEGORY_VALIDATE_FAIL = 90040;

app_vnm.controller('ctrl-preOrderStatus', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,preOrderStatus) {
	
	$scope.model = {};

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}
	
	getListNumberSpecTypeOrderStatus =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/status/list_spec_num_group_order_status";
		 $http.get(url).success(function (datastatus){
			$scope.tableParamsListCosRejectOrderStatus = new NgTableParams({}, {
				dataset : datastatus
			});
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	
    $scope.NumberTypeSourceOrderStatus  = [
    	{ 'Id': '', 'Title': '-Chọn-' },
    	{ 'Id': '0', 'Title': 'Hết hiệu lực' },
    	{ 'Id': '1', 'Title': 'Hiệu lực' }
    ];
    $scope.model.numberTypeOrderStatus=$scope.NumberTypeSourceOrderStatus[0].id;
    /*$scope.onNumberTypeChange = function(){
    	console.log("model.objectNumberType = "+$scope.model.objectNumberType);
    	$scope.model.packageModel = null;
    	
    	if( $scope.model.objectNumberType== NUMBER_TYPE_PREPAID){
    		getListNumberSpecType();
    	}else if( $scope.model.objectNumberType == NUMBER_TYPE_POSTPAID){
    		getListGetListPackagePostpaid();
    	}
    }*/
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
//getListNumberSpecType();
 getListNumberSpecTypeOrderStatus();
//$scope.onSearch();
	
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
	/*duytk10 test /////////////////////*/
	 $scope.onSearchGroupMnpOrderStatus  = function(){
	    	var dataSearch = {
	    			"code" : StringUtilNVL($scope.model.mnpCodeStatus ),
					"name" : StringUtilNVL($scope.model.mnpNameStatus),
					"status" : StringUtilNVL($scope.model.numberTypeOrderStatus),
	    	};
	    	preOrderStatus.searchGroupMnpOrderStatus(dataSearch, function(result) {
	    		if(result == '' || result == 'undefined'){
	    			bootbox.alert('Trạng thái không tồn tại !');
	    			closeOverLay();
	    			return 0;
	    		}
				if(result.status == '0' && result.status != 'undefined'){
					/*bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));*/
				}else {
					$scope.listGroupMdnReject = [];
					if (result.length > 0) {
						$scope.listGroupMdnReject = result;
						$scope.tableParamsListCosRejectOrderStatus = new NgTableParams({}, {
							dataset : result
						});
					}
				}
				closeOverLay();
			});
	    }
	$scope.onInsertMnpOrderStatus  = function(){
		overLoading("Loading...");
		if($scope.model.mnpCodeStatus == undefined || $scope.model.mnpCodeStatus == ""){
			bootbox.alert('Bạn hãy nhập mã trạng thái !');
			closeOverLay();
			return 0;
		}
		if($scope.model.mnpCodeStatus.length >20){
			bootbox.alert('Mã trạng thái không được quá 20 ký tự !');
			closeOverLay();
			return 0;
		}
		if($scope.model.mnpNameStatus == undefined || $scope.model.mnpNameStatus == ""){
			bootbox.alert('Bạn hãy nhập tên trạng thái !');
			closeOverLay();
			return 0;
		}
		if($scope.model.mnpNameStatus.length >173){
			bootbox.alert('Tên trạng thái không được quá 200 ký tự !');
			closeOverLay();
			return 0;
		}
		if($scope.model.numberTypeOrderStatus == undefined || $scope.model.numberTypeOrderStatus == ""){
			bootbox.alert('Bạn hãy chọn loại trạng thái !');
			closeOverLay();
			return 0;
		}
		
		if($scope.model.mnpDescription !=""&& $scope.model.mnpDescription !=undefined){
			if($scope.model.mnpDescription.length >441){
				bootbox.alert('Mô tả trạng thái không được quá 500 ký tự !');
				closeOverLay();
				return 0;
			}
		}else{
		/*	if($scope.model.objectNumberType.code == ''){
				bootbox.alert($translate.instant('vnm.category_group_mdn.mess.cos.required'));
	    		closeOverLay();
	    		return 0;
			}*/
		}
		var dataInsert = {
				"code" : StringUtilNVL($scope.model.mnpCodeStatus ),
				"name" : StringUtilNVL($scope.model.mnpNameStatus),
				"description" : StringUtilNVL($scope.model.mnpDescription),
				"status" : StringUtilNVL($scope.model.numberTypeOrderStatus),
		};
		
		preOrderStatus.createGroupMnpOrderStatus(dataInsert, function(result) {
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
					bootbox.alert($translate.instant('Thêm Trạng thái của pre-order không thành công mã Trạng thái đã tồn tại !'));
				}else{
					bootbox.alert($translate.instant('Thêm Trạng thái tiếp nhận PRE-ORDER thành công !'));
					$scope.model.mnpCodeStatus ="";
					$scope.model.mnpNameStatus ="";
					$scope.model.mnpDescription ="";
					$scope.model.numberTypeOrderStatus ="";
				}
//				$scope.model.objectNumberType = null;
				getListNumberSpecTypeOrderStatus();
			}
			closeOverLay();
		});
	}
	 $scope.confirmDeleteMnp = function(item){
	    	$scope.model.cosDelete = item;
	    	var messConfirm = $translate.instant('Bạn có muốn xóa trạng thái ra khỏi danh sách ?');
	    	var header = $translate.instant('Trạng thái của Pre-order');
	    	bootboxConfirm(header, messConfirm, $scope.removePreOrderMnp, $scope.confirmKO);
	    }
	    
	    $scope.removePreOrderMnp  = function(){
	    	overLoading("Loading...");
	   	
	    	var dataDelete = {
	    			"id": StringUtilNVL($scope.model.cosDelete.id),
	    	};
	    	
	    	preOrderStatus.deleteGroupMnpOrderStatus(dataDelete, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					bootbox.alert($translate.instant('Trạng thái đã được sử dụng không thể xóa !'));
				}else {
					if(result.code == MNP_CATEGORY_COS_ITEM_EXIST){
						bootbox.alert($translate.instant(' Trạng thái đã được sử dụng không thể xóa !'));
					}else{
					bootbox.alert($translate.instant('Xóa trạng thái thành công !'));
					/*$scope.onSearch();*/
					getListNumberSpecTypeOrderStatus();
					}
				}
				closeOverLay();
			});
	    }
	    
	    $scope.confirmEditMnp  = function(item){
	    	$scope.model.mnpEditstatus = item;
				$scope.model.mnpCodeStatus =$scope.model.mnpEditstatus.code;
				$scope.model.mnpNameStatus =$scope.model.mnpEditstatus.name;
				$scope.model.mnpDescription =$scope.model.mnpEditstatus.description
				$scope.model.numberTypeOrderStatus =$scope.model.mnpEditstatus.status;
				$scope.model.idOrderStatus=$scope.model.mnpEditstatus.id;
				$("#luu").css("display","");
				$("#them").css("display","none");
				
			/*bootboxConfirm( $scope.exditOrderStatus, $scope.confirmKO);*/
		}
	    	onExitMnpOrderStatus = function(){
				$scope.model.mnpCodeStatus ="";
				$scope.model.mnpNameStatus ="";
				$scope.model.mnpDescription ="";
				$scope.model.numberTypeOrderStatus ="";
				$scope.model.idOrderStatus="";
				$("#luu").css("display","none");
				$("#them").css("display","");
		}
	    	
	    	 $scope.onExitedMnpOrderStatus  = function(){
	    		 onExitMnpOrderStatus();
	    	 }
	    $scope.onUpdateMnpOrderStatus  = function(){
	    	overLoading("Loading...");
	    	if($scope.model.mnpCodeStatus == undefined || $scope.model.mnpCodeStatus == ""){
				bootbox.alert('Bạn hãy nhập mã trạng thái !');
				closeOverLay();
				return 0;
			}
			if($scope.model.mnpCodeStatus.length >20){
				bootbox.alert('Mã trạng thái không được quá 20 ký tự !');
				closeOverLay();
				return 0;
			}
			if($scope.model.mnpNameStatus == undefined || $scope.model.mnpNameStatus == ""){
				bootbox.alert('Bạn hãy nhập tên trạng thái !');
				closeOverLay();
				return 0;
			}
			if($scope.model.mnpNameStatus.length >200){
				bootbox.alert('Tên trạng thái không được quá 200 ký tự !');
				closeOverLay();
				return 0;
			}
			if($scope.model.numberTypeOrderStatus == undefined || $scope.model.numberTypeOrderStatus == ""){
				bootbox.alert('Bạn hãy chọn loại trạng thái !');
				closeOverLay();
				return 0;
			}
			if($scope.model.mnpDescription !=""&& $scope.model.mnpDescription !=undefined){
				if($scope.model.mnpDescription.length >500){
					bootbox.alert('Mô tả trạng thái không được quá 500 ký tự !');
					closeOverLay();
					return 0;
				}
			}else{
			/*	if($scope.model.objectNumberType.code == ''){
					bootbox.alert($translate.instant('vnm.category_group_mdn.mess.cos.required'));
		    		closeOverLay();
		    		return 0;
				}*/
			}
	    	var dataUpdate = {
	    			"id" : StringUtilNVL($scope.model.idOrderStatus ),
	    			"code" : StringUtilNVL($scope.model.mnpCodeStatus ),
					"name" : StringUtilNVL($scope.model.mnpNameStatus),
					"description" : StringUtilNVL($scope.model.mnpDescription),
					"status" : StringUtilNVL($scope.model.numberTypeOrderStatus),
			};
	    	preOrderStatus.updateGroupMnpOrderStatus(dataUpdate, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					bootbox.alert($translate.instant('vnm.category_group_mdn.mess.delete.cos.success')+ result.messages);
				}else {
					if(result.code == MNP_CATEGORY_COS_ITEM_EXIST){
						bootbox.alert($translate.instant('Chỉnh sửa Trạng thái không thành công mã trạng thái đã tồn tại!'));
					}else{
					bootbox.alert('Chỉnh sửa Trạng thái thành công!');
					getListNumberSpecTypeOrderStatus();
					onExitMnpOrderStatus();
					}
				}
				closeOverLay();
			});
	    }
	/*-----------------------------------*/
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

