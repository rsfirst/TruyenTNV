app_vnm.factory('preOrderChannel', function($http, $translate) {
	return {
		/*duytk10 test /////////////////// */
		searchGroupMnpOrderChannel : function(data, callback) {
			var url = eim_url + "/bs/channel/search_group_mnp_order_channel";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createGroupMnpOrderChannel : function(data, callback) {
			var url = eim_url + "/bs/channel/create_group_mnp_order_channel";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		updateGroupMnpOrderChannel : function(data, callback) {
			var url = eim_url + "/bs/channel/update_group_mnp_order_channel";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		deleteGroupMnpOrderChannel : function(data, callback) {
			var url = eim_url + "/bs/channel/delete_group_mnp_order_channel";
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

app_vnm.controller('ctrl-preOrderChannel', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,preOrderChannel) {
	
	$scope.model = {};

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}
	
	getListNumberSpecTypeOrderChannel =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/channel/list_spec_num_group_order_channel";
		 $http.get(url).success(function (datastatus){
			$scope.tableParamsListCosRejectOrderChannel = new NgTableParams({}, {
				dataset : datastatus
			});
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	
    $scope.NumberTypeSourceOrderChannel  = [
    	{ 'Id': '', 'Title': '-chọn-' },
    	{ 'Id': '0', 'Title': 'Hết hiệu lực' },
    	{ 'Id': '1', 'Title': 'Hiệu lực' }
    ];
    $scope.model.numberTypeOrderChannel=$scope.NumberTypeSourceOrderChannel[0].Id;
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
 getListNumberSpecTypeOrderChannel();
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
	 $scope.onSearchGroupMnpOrderChannel  = function(){
	    	var dataSearch = {
	    			"code" : StringUtilNVL($scope.model.mnpCodeChannel ),
					"name" : StringUtilNVL($scope.model.mnpNameChannel),
					"status" : StringUtilNVL($scope.model.numberTypeOrderChannel),
	    	};
	    	preOrderChannel.searchGroupMnpOrderChannel(dataSearch, function(result) {
	    		if(result == '' || result == 'undefined'){
	    			bootbox.alert('Kênh không tồn tại !');
	    			closeOverLay();
	    			return 0;
	    		}
				if(result.status == '0' && result.status != 'undefined'){
					/*bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));*/
				}else {
					$scope.listGroupMdnReject = [];
					if (result.length > 0) {
						$scope.listGroupMdnReject = result;
						$scope.tableParamsListCosRejectOrderChannel = new NgTableParams({}, {
							dataset : result
						});
					}
				}
				closeOverLay();
			});
	    }
	$scope.onInsertMnpOrderChannel  = function(){
		overLoading("Loading...");
		if($scope.model.mnpCodeChannel == undefined || $scope.model.mnpCodeChannel == ""){
			bootbox.alert('Bạn hãy nhập mã kênh !');
			closeOverLay();
			return 0;
		}
    	if($scope.model.mnpCodeChannel.length >20){
			bootbox.alert('Mã kênh không được quá 20 ký tự !');
			closeOverLay();
			return 0;
		}
		if($scope.model.mnpNameChannel == undefined || $scope.model.mnpNameChannel == ""){
			bootbox.alert('Bạn hãy nhập tên kênh !');
			closeOverLay();
			return 0;
		}
		if($scope.model.mnpNameChannel.length >173){
			bootbox.alert('Tên kênh không được quá 200 ký tự !');
			closeOverLay();
			return 0;
		}
		if($scope.model.numberTypeOrderChannel == undefined || $scope.model.numberTypeOrderChannel == ""){
			bootbox.alert('Bạn hãy chọn Trạng thái !');
			closeOverLay();
			return 0;
		}
		if($scope.model.mnpDescription !=''&& $scope.model.mnpDescription !=undefined){
			if($scope.model.mnpDescription.length >441){
				bootbox.alert('Mô tả kênh không được quá 500 ký tự !');
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
				"code" : StringUtilNVL($scope.model.mnpCodeChannel ),
				"name" : StringUtilNVL($scope.model.mnpNameChannel),
				"description" : StringUtilNVL($scope.model.mnpDescription),
				"status" : StringUtilNVL($scope.model.numberTypeOrderChannel),
		};
		
		preOrderChannel.createGroupMnpOrderChannel(dataInsert, function(result) {
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
					bootbox.alert($translate.instant('Thêm kênh tiếp nhận không thành công mã Kênh đã tồn tại !'));
				}else{
					bootbox.alert($translate.instant('Thêm kênh tiếp nhận PRE-ORDER thành công !'));
					$scope.model.mnpCodeChannel ="";
					$scope.model.mnpNameChannel ="";
					$scope.model.mnpDescription ="";
					$scope.model.numberTypeOrderChannel ="";
				}
//				$scope.model.objectNumberType = null;
				getListNumberSpecTypeOrderChannel();
			}
			closeOverLay();
		});
	}
	 $scope.confirmDeleteMnp = function(item){
	    	$scope.model.cosDelete = item;
	    	var messConfirm = $translate.instant('Bạn có chắc chắn muốn  xóa Kênh tiếp nhận không?');
	    	var header = $translate.instant('Kênh tiếp nhận Pre-order');
	    	bootboxConfirm(header, messConfirm, $scope.removeItemRejectMnp, $scope.confirmKO);
	    }
	    
	    $scope.removeItemRejectMnp  = function(){
	    	overLoading("Loading...");
	   	
	    	var dataDelete = {
	    			"id": StringUtilNVL($scope.model.cosDelete.id),
	    	};
	    	
	    	preOrderChannel.deleteGroupMnpOrderChannel(dataDelete, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					bootbox.alert($translate.instant('Kênh đã được sử dụng không thể xóa !'));
				}else {
					bootbox.alert($translate.instant('Xóa kênh thành công !'));
					/*$scope.onSearch();*/
					getListNumberSpecTypeOrderChannel();
				}
				closeOverLay();
			});
	    }
	    
	    $scope.confirmEditMnp  = function(item){
	    	$scope.model.mnpEditChannel = item;
				$scope.model.mnpCodeChannel =$scope.model.mnpEditChannel.code;
				$scope.model.mnpNameChannel =$scope.model.mnpEditChannel.name;
				$scope.model.mnpDescription =$scope.model.mnpEditChannel.description
				$scope.model.numberTypeOrderChannel =$scope.model.mnpEditChannel.status;
				$scope.model.idOrderChannel=$scope.model.mnpEditChannel.id;
				$("#luu").css("display","");
				$("#them").css("display","none");
				
			/*bootboxConfirm( $scope.exditOrderStatus, $scope.confirmKO);*/
		}
	    	onExitMnpOrderChannel = function(){
				$scope.model.mnpCodeChannel ="";
				$scope.model.mnpNameChannel ="";
				$scope.model.mnpDescription ="";
				$scope.model.numberTypeOrderChannel ="";
				$scope.model.idOrderChannel="";
				$("#luu").css("display","none");
				$("#them").css("display","");
		}
	    	
	    	 $scope.onExitedMnpOrderChannel  = function(){
	    		 onExitMnpOrderChannel();
	    	 }
	    $scope.onUpdateMnpOrderChannel  = function(){
	    	overLoading("Loading...");
	    	if($scope.model.mnpCodeChannel == undefined || $scope.model.mnpCodeChannel == ""){
				bootbox.alert('Bạn hãy nhập mã kênh !');
				closeOverLay();
				return 0;
			}
	    	if($scope.model.mnpCodeChannel.length >20){
				bootbox.alert('Mã kênh không được quá 20 ký tự !');
				closeOverLay();
				return 0;
			}
			if($scope.model.mnpNameChannel == undefined || $scope.model.mnpNameChannel == ""){
				bootbox.alert('Bạn hãy nhập tên kênh !');
				closeOverLay();
				return 0;
			}
			if($scope.model.mnpNameChannel.length >173){
				bootbox.alert('Tên kênh không được quá 200 ký tự !');
				closeOverLay();
				return 0;
			}
			if($scope.model.numberTypeOrderChannel == undefined || $scope.model.numberTypeOrderChannel == ""){
				bootbox.alert('Bạn hãy chọn Trạng thái !');
				closeOverLay();
				return 0;
			}
			if($scope.model.mnpDescription !=''&& $scope.model.mnpDescription !=undefined){
				if($scope.model.mnpDescription.length >441){
					bootbox.alert('Mô tả kênh không được quá 500 ký tự !');
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
	    			"id" : StringUtilNVL($scope.model.idOrderChannel ),
	    			"code" : StringUtilNVL($scope.model.mnpCodeChannel ),
					"name" : StringUtilNVL($scope.model.mnpNameChannel),
					"description" : StringUtilNVL($scope.model.mnpDescription),
					"status" : StringUtilNVL($scope.model.numberTypeOrderChannel),
			};
	    	preOrderChannel.updateGroupMnpOrderChannel(dataUpdate, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					bootbox.alert($translate.instant('vnm.category_group_mdn.mess.delete.cos.success')+ result.messages);
				}else {
					
					if(result.code == MNP_CATEGORY_COS_ITEM_EXIST){
						bootbox.alert($translate.instant('Update không thành công mã Kênh đã tồn tại !'));
					}else{
						bootbox.alert('Chỉnh sửa thành công!');
						getListNumberSpecTypeOrderChannel();
						onExitMnpOrderChannel();
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

