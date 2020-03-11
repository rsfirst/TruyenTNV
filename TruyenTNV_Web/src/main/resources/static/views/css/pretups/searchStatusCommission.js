var SELECT_NONE_INDEX  = -1;
var NUMBER_COUNT_DISABLED_EFORM_HD  = 4;
var BREAK_LINE = "<br/>";

app_vnm.factory('cashTransfer', function($http, $translate) {
	return {
		getAgencyInfo : function(data, callback) {
			var url = eim_url + "/bs/StatusCommission/getListCommission";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		}
	}
});

app_vnm.controller('ctrl-prepaid', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,cashTransfer) {
	
	$scope.model = {};
	
	var SHOPCODE = $localStorage.clientContext.shop.shopCode;
	
	$scope.isDisCreatePanel = true;
	
	$scope.model.searchFromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
	$scope.model.searchToDate = $filter('date')(new Date(), 'dd/MM/yyyy');
	
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
	
	
	$scope.setDataOutputListCommissionStatus = function(listStatusCommission){
		for(var i =0; i< listStatusCommission.length;i++){
			//Trang thai giao dich
			if(listStatusCommission[i].transType =="1"){
				listStatusCommission[i].transTypeText = "Đăng ký TT";
			}else if(listStatusCommission[i].transType =="2"){
				listStatusCommission[i].transTypeText = "Đấu mới TB";
			}else if(listStatusCommission[i].transType =="3"){
				listStatusCommission[i].transTypeText = "Chưa xác định";
			}
			
			//topup comm text
			if(listStatusCommission[i].topCommStatus =="0"){
				listStatusCommission[i].topCommStatusText = "Chưa nhận";
			}else if(listStatusCommission[i].topCommStatus =="1"){
				listStatusCommission[i].topCommStatusText = "Đã nhận";
			}else if(listStatusCommission[i].topCommStatus =="2"){
				listStatusCommission[i].topCommStatusText = "Chưa xác định";
			}
			
			//active comm text
			if(listStatusCommission[i].actCommStatus =="0"){
				listStatusCommission[i].actCommStatusText = "Chưa nhận";
			}else if(listStatusCommission[i].actCommStatus =="1"){
				listStatusCommission[i].actCommStatusText = "Đã nhận";
			}else if(listStatusCommission[i].actCommStatus =="2"){
				listStatusCommission[i].actCommStatusText = "Chưa xác định";
			}
		}
		
		return listStatusCommission;
	}
	
	$scope.searchListCommissionFn = function(){
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		$scope.searchResult = [];
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.searchResult
		});
		
		var searchInput = {};
		searchInput.isdn =  StringUtilNVL($scope.model.isdnNumber);
		searchInput.stk =  StringUtilNVL($scope.model.stkNumber);
		searchInput.fromDate = StringUtilNVL($("#SearchFromDate").val());
		searchInput.toDate	=  StringUtilNVL($("#SearchToDate").val());
		
		cashTransfer.getAgencyInfo(searchInput, function(result) {
			App.unblockUI("#contentMain");
			if(result!= undefined && result !=null && result!="" && result.status!="0"){
				if(result.listResult.length > 0){
					$scope.searchResult = $scope.setDataOutputListCommissionStatus(result.listResult);
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.searchResult
					});
				}else{
					bootbox.alert($translate.instant('vnm.search_status_commission.mess.account.info.not.found'));
				}
			}
			else {
				if(result.messages != ""){
					bootbox.alert($translate.instant('vnm.search_status_commission.mess.'+result.messages));
				}else{
					bootbox.alert($translate.instant('vnm.search_status_commission.mess.account.info.not.found'));
				}
			}
		});
	}
	
	

});

