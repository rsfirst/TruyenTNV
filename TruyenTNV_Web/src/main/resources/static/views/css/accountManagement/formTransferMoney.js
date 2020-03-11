app_vnm.factory('formTranfersMoneyFactory', function($http, $translate) {
	return {
		transferMoney : function(sourceIsdn, mpin, targetIsdn, amount, callback) {
			var url = eim_url + '/bs/accountManagement/transferMoney?sourceIsdn=' + sourceIsdn + '&mpin=' + mpin + '&targetIsdn=' + targetIsdn + '&amount=' + amount;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},

	}

});

app_vnm.controller('formTransferMoney', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,formTranfersMoneyFactory) {
	$scope.model = {};
	$scope.transferMoney = function(){

        var sourceIsdn = StringUtilNVLWithDefault($scope.model.sourceIsdn,"");
        if (sourceIsdn == ""){
            bootbox.alert("Số thuê bao gửi không được để trống!");
            return;
        }
        var mpin = StringUtilNVLWithDefault($scope.model.mpin,"");
        if (mpin == ""){
            bootbox.alert("Mật khẩu đại lý gửi không được để trống!");
            return;
        }
        var targetIsdn = StringUtilNVLWithDefault($scope.model.targetIsdn,"");
        if (targetIsdn == ""){
            bootbox.alert("Số thuê bao nhận không được để trống!");
            return;
        }   
        if($scope.model.amount==""||$scope.model.amount==undefined){
        	var amount = StringUtilNVLWithDefault($scope.model.amount,"");
        }else{
        	var amount = StringUtilNVLWithDefault($scope.model.amount.replace(/\D/g, ''),"");
        }
        if (amount == ""){
            bootbox.alert("Số tiền cần chuyển không được để trống!");
            return;
        }
        if( $scope.model.amount<1)
        {  	   
        	bootbox.alert("Số tiền cần chuyển phải lớn hơn 0!");
        	return;
        }
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		formTranfersMoneyFactory.transferMoney(sourceIsdn, mpin, targetIsdn, amount, function(result) {
			if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình chuyển tiền!<br/>Lỗi: " + result.messages);
            }
            else
            	{
            	 bootbox.alert("Thực hiện chuyển tiền thành công!");
            	}
			App.unblockUI("#contentMain");
		});
		

	}

	$scope.sourceIsdn = function() {
		$scope.model.sourceIsdn = $scope.model.sourceIsdn
				.replace(/\D/g, '');
	}
	$scope.targetIsdn = function() {
		$scope.model.targetIsdn = $scope.model.targetIsdn
				.replace(/\D/g, '');
	}
	$scope.amount = function() {
		$scope.model.amount = $scope.model.amount
				.replace(/\D/g, '');
		$scope.model.amount = $scope.model.amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
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
function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}

