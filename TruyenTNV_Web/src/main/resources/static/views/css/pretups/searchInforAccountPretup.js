var SELECT_NONE_INDEX  = -1;
var NUMBER_COUNT_DISABLED_EFORM_HD  = 4;
var BREAK_LINE = "<br/>";

app_vnm.factory('searchAccountInfo', function($http, $translate) {
	return {
        searchAccountInfo : function(userInput, callback) {
            var url = eim_url + "/bs/pretups/searchAccount";
            $http.post(url, userInput).success(callback).error(
                function(callback) {
                    bootbox.alert($translate
                        .instant('vnm.messages.error.connection'));
                });
        }
	}
});

app_vnm.controller('ctrl-prepaid-search', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,searchAccountInfo) {
	
	$scope.model = {};
	
	var SHOPCODE = $localStorage.clientContext.shop.shopCode;
	
	$scope.isDisCreatePanel = true;
	
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

	$scope.loadDefauld = function() {
	}
	
	
	var initialize = function () {
		$scope.loadDefauld();
	}

	initialize();
	
	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;

    //validate
    validate = function(){

        if(StringUtilNVL($scope.model.msisdnNumber) == EMPTY_VALUE){
            bootbox.alert("Hãy nhập số điện thoại!");
            return false;
        }
        if(StringUtilNVL($scope.model.mPin) == EMPTY_VALUE){
            bootbox.alert("Hãy nhập số mPin!");
            return false;
        }
        return true;
    }
    //submit
    $scope.onSubmitToSearch = function(){
    	if (validate()){
        var userInput={};

        userInput.msisdn = $scope.model.msisdnNumber;
        userInput.pin=$scope.model.mPin;
        userInput.remarks = $localStorage.clientContext.shop.staffId;

        App.blockUI({
            target : "#searchInforAccountPretup",
            boxed : true,
            message : 'Loading...'
        });

        searchAccountInfo.searchAccountInfo(userInput, function(result) {
            if(result.payload.err=='0'){
                bootbox.alert("Bạn không có quyền tra cứu thông tin tài khoản của đại lý này!");
			} else if (result.payload.err=='1'){
                bootbox.alert("Không tìm thấy thông tin số thuê bao!");
            } else if(result.payload.status!="200")
            	{
            	if(result.payload.status=='7015') {
                    bootbox.alert("Đã nhập sai mPin!");
                } else if (result.payload.status=='7065') {
                    bootbox.alert("Truoc khi thuc hien bat ky giao dich nao, truoc tien hay thay doi ma PIN da dat lai / het han cua ban.!");
                }else if (result.payload.status=='2003') {
                    bootbox.alert("Xin loi, ban tam thoi cam su dung dich vu nay. Vui long lien he voi dich vu khach hang.!");
                }
                else
                	{
                	 bootbox.alert("Đã có lỗi mời kiểm tra lại! STATUS_EROR: "+result.payload.status);
                	}
            }else {
            	if(result.payload.balance==""||result.payload.balance==undefined){
            		$scope.model.currentBalance = (result.payload.balance);
            	}else{
            		$scope.model.currentBalance = (result.payload.balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            	}
                
                $scope.model.agencyCode = result.payload.accId;
                if(result.payload.balance==""||result.payload.balance==undefined){
                	$scope.model.realBalance = (result.payload.balance);
                }else{
                	$scope.model.realBalance = (result.payload.balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                }
                $scope.model.createDate = result.payload.dateCre;
                $scope.model.openDate = result.payload.dateOpen;
                $scope.model.smallLimit = '0';
            }
            
            
            App.unblockUI("#searchInforAccountPretup");
        });
        console.log($scope.tableDataResult);
    }
    }

});

