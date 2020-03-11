app_vnm.factory('formChangeAccountFactory', function($http, $translate) {
	return {
		getListReason : function( callback) {
			var url = eim_url + "/bs/accountManagement/getReason";
			
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		
		executeChangeAccount : function(data, callback) {
			var url = eim_url + "/bs/accountManagement/executeChangeAccount";
			
			$http.put(url,data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		

	}

});

app_vnm.controller('formChangeAccount', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,formChangeAccountFactory) {
	$scope.lstReason = [];
	loadReason();
	$scope.model = {};
	$scope.model.strActionType=false;
	$scope.model.actionTypeValue='Điều chỉnh dương';
	function loadReason(){
        App.blockUI({
            target: "#contentMain",
            boxed: true,
            message: 'Loading...'
        });
        formChangeAccountFactory.getListReason(function (result) {
        	  if (result.status == "0" && result.messages){
                  bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
              } else {
                  $scope.lstReason = result;
              }
            App.unblockUI("#contentMain");
        });
     
    }
	
	$scope.changeAccount = function(){

        var receivedIsdn = StringUtilNVLWithDefault($scope.model.strMsisdn,"");
        if (receivedIsdn == ""){
            bootbox.alert("Số nhận không được để trống!");
            return;
        }
        var amount = StringUtilNVLWithDefault($scope.model.strAmount,"");
        if (amount == ""){
            bootbox.alert("Số tiền không được để trống!");
            return;
        }
        if( $scope.model.strAmount<1)
        {  	   
        	bootbox.alert("Số tiền phải lớn hơn 0!");
        	return;
        }
        var reason = StringUtilNVLWithDefault($scope.model.selectedReason,"");
        if (reason == ""){
            bootbox.alert("Lý do không được để trống!");
            return;
        }
        var actionTypeId="";
        var sourceIsdn="";
        var targetIsdn="";
        if(!$scope.model.strActionType)
        	{
        		actionTypeId="0";
        		targetIsdn=$scope.model.strMsisdn;
        		$scope.model.actionTypeValue='Điều chỉnh dương';
        	}
        else
        	{
        		actionTypeId="1";
        		sourceIsdn=$scope.model.strMsisdn;
        		$scope.model.actionTypeValue='Điều chỉnh âm';
        	}
		var ChangeAgentAccountIn={
				"strSourceMsisdn":sourceIsdn,
				"strTargetMsisdn":targetIsdn,
				"strAmount": $scope.model.strAmount.replace(/\D/g, ''),
				"strReason":$scope.model.selectedReason.reasonId,
				"strReasonValue":$scope.model.selectedReason.description,
				"strActionType":actionTypeId,
				"strNote":$scope.model.strNote,
				"strReferNumber":$scope.model.strReferNumber,
				"strUserName":$localStorage.clientContext.username,
				"strHostName":location.hostname,
				"type":'1',
				"process_stutus":'',
				"mpin":''
		}
	        bootbox.confirm({
	            message: "Số thuê bao : "+$scope.model.strMsisdn+" sẽ được : "+$scope.model.actionTypeValue+"<br/>Số tiền : "+$scope.model.strAmount+" Đồng<br/>Lý do : "+$scope.model.selectedReason.description,
	            buttons: {
	                confirm: {
	                    label: 'Đồng ý',
	                    className: 'btn-success'
	                },
	                cancel: {
	                    label: 'Từ chối',
	                    className: 'btn-danger'
	                }
	            },
	            callback: function (result)
	            {
	                if(result)
	                {
	                    App.blockUI({
	                        target : "#contentMain",
	                        boxed : true,
							message : 'Loading...'
											});
											formChangeAccountFactory
													.executeChangeAccount(
															ChangeAgentAccountIn,
															function(result) {
											                    if (result.status == "0" && result.messages){
											                        bootbox.alert("Xảy ra lỗi trong quá trình điều chỉnh tài khoản!<br/>Lỗi: " + result.messages);
											                    }
											                    else
											                    	{
											                    	 bootbox.alert("Điều chỉnh tài khoản thành công!");
											                    	 $scope.model.strMsisdn="";
											                    	 $scope.model.strAmount="";
											                    	 $scope.model.strNote="";
											                    	 $scope.model.strReferNumber="";
											                    	 $scope.model.strActionType=false;
											                    	 $scope.model.actionTypeValue='Điều chỉnh dương';
											                    	}
																App.unblockUI("#contentMain");
															});
										}
									}
								});

					}
					$scope.strMsisdn = function() {
						$scope.model.strMsisdn = $scope.model.strMsisdn
								.replace(/\D/g, '');
					}
					$scope.strAmount = function() {
						$scope.model.strAmount = $scope.model.strAmount
								.replace(/\D/g, '');
						$scope.model.strAmount = $scope.model.strAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
					}
					$scope.changeAcctionValue = function() {
						if(!$scope.model.strActionType)
			        	{
			        		$scope.model.actionTypeValue='Điều chỉnh dương';
			        	}
						else
			        	{
			        		$scope.model.actionTypeValue='Điều chỉnh âm';
			        	}
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
function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}
