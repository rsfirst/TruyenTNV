app_vnm.factory('prepaidBS', function($http, $translate) {
	return {
		searchTransaction : function(data, callback) {
			var url = eim_url + "/bs/category/delete_cos_reject?id="+data;
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,prepaidBS) {
	
	$scope.model = {};

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

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
	$scope.model.status = 'Giữ số';

	// BEGIN validate input

	$scope.model.serialNew='';

	// BEGIN LOAD IMAGE table 1
	$scope.model.fileAttachments = [];

	var uploader = $scope.uploader = new FileUploader({
		url: eim_url + "/bs/Custome/uploadImage"
	});
	// config uploader
	uploader.queueLimit = 12;
	// Another user-defined filter
	uploader.filters.push({
		'name': 'enforceMaxFileSize',
		'fn': function (item,options) { 
			var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';  
			if('|jpg|png|jpeg|bmp|gif|'.indexOf(type) == -1){ 
				var fileName = item.name; 
				$scope.messages = "Tệp tin "+fileName+" không hợp lệ.";
				App.notifyDanger($scope.messages);
				return false;
			}else{
				var sizeFile = item.size;
				if(sizeFile <=10485760){
					return true;
				}else{
					var fileName = item.name;
					// var message = messageSizeErrorClient.replace(/###/,
					// fileName);
					$scope.messages = "Dung lượng tệp "+fileName+" không được vượt quá 10MB";
					App.notifyDanger($scope.messages);
					return false;
				}
			}
		}
	});
	 
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

