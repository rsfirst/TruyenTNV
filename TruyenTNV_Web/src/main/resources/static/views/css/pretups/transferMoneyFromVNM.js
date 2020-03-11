var SELECT_NONE_INDEX  = -1;
var NUMBER_COUNT_DISABLED_EFORM_HD  = 4;
var BREAK_LINE = "<br/>";

app_vnm.factory('cashTransfer', function($http, $translate) {
	return {
		searchCashTransfer : function(data, callback) {
			var url = eim_url + "/bs/CashTransferVnm/listCashTransfer";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		listCenter : function(callback) {
			var url = eim_url + "/bs/CashTransferVnm/listCenter";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		getAgencyInfo : function(data, callback) {
			var url = eim_url + "/bs/CashTransferVnm/getAgencyInfo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		createCashTransfer : function(data, callback) {
			var url = eim_url + "/bs/CashTransferVnm/createCashTransfer";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		approveCashTransfer : function(data, callback) {
			var url = eim_url + "/bs/CashTransferVnm/approveCashTransfer";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		rejectCashTransfer : function(data, callback) {
			var url = eim_url + "/bs/CashTransferVnm/rejectCashTransfer";
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
	$scope.searchResult = [];
	
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		cashTransfer.listCenter(function(result) {
			App.unblockUI("#contentMain");
			$scope.CenterSource =  $scope.setDataCenterSource(result);
			$scope.model.saleUnit = $scope.CenterSource[0].description;
		})
	}
	
	$scope.setDataCenterSource = function(listSource){
		var listSourceOut = [];
		for(var i =0; i < listSource.length;i++){
			listSource[i].description = "Trung tâm "+(listSource[i].name);
			listSourceOut.push(listSource[i]);
		}
		return listSourceOut;
	}
	
	var initialize = function () {
		$scope.loadDefauld();
	}

	initialize();
	
	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;

	$scope.validateSearch = function(){
		
		if(!StringUtilNVLIsNotEmpty($("#SearchFromDate").val())){
			bootbox.alert($translate.instant('vnm.common.field.required')+ $translate.instant('vnm.transfer_money_vnm.label.from.date'));
			return false;
		}
		
		if(!StringUtilNVLIsNotEmpty($("#SearchToDate").val())){
			bootbox.alert($translate.instant('vnm.common.field.required')+ $translate.instant('vnm.transfer_money_vnm.label.to.date'));
			return false;
		}
		return true;
		
		
	}
	
	$scope.searchFunction = function(){
		
		if(!$scope.validateSearch()){
			return 0;
		}
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		var searchInput = {};
		searchInput.fromDate =  StringUtilNVL($("#SearchFromDate").val());
		searchInput.toDate =  StringUtilNVL($("#SearchToDate").val());
		searchInput.status = StringUtilNVL($scope.model.searchStatus);
		
		cashTransfer.searchCashTransfer(searchInput, function(result) {
			App.unblockUI("#contentMain");
			if(result!= undefined && result !=null && result.status != '0'){
				if(result.listResult.length > 0){
					
					$scope.tableSub = new NgTableParams({}, {
					});

					$scope.searchResult = result.listResult;
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.searchResult
					});
				}
				else {
					bootbox.alert($translate.instant('vnm.common.data.not.found'));
				}
			}else{
				bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.'+result.messages));
			}
			
		});
	}
	
	$scope.changeStatusRecordTransferTable = function(idRecord, status){
		for(var i=0; i<$scope.searchResult.length; i++){
			console.log($scope.searchResult[i]);
		}
	}
	
	$scope.resetCreatePanel = function(){
		$scope.isDisCreatePanel = true;
		$scope.model.orderCode = "";
		$("#OrderDate").val("");
		$scope.model.amountMoneyTransfer = "";
		$scope.model.discount = "";
		$scope.model.paymentMethod = "";
		$scope.model.numberContract = "";
	
		$("#DateContract").val("");
		$scope.model.receiver = "";
		$scope.model.idCard = "";
		$("#IssueDate").val("");
		$scope.model.issuePlace = "";
		
	}
	
	
	$scope.getAgencyInfoFn = function(){
		
		if(!StringUtilNVLIsNotEmpty($scope.model.msisdnNumber)){
			bootbox.alert($translate.instant('vnm.common.field.required')+ $translate.instant('vnm.transfer_money_vnm.label.msisdn.number'));
			return false;
		}
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		var searchInput = {};
		searchInput.msisdn =  StringUtilNVL($scope.model.msisdnNumber);
		
		$scope.resetAgencyInfo();
		
		cashTransfer.getAgencyInfo(searchInput, function(result) {
			App.unblockUI("#contentMain");
			if(result!= undefined && result !=null && result!=""){
				$scope.setAgencyInfo(result);
				$scope.isDisCreatePanel = false;
				App.unblockUI("#contentMain");
			}
			else {
				bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.agency.info.not.found'));
			}
		});
	}

	$scope.validateCreateCash = function(){
		var result = true;
		
		//begin validate agency info
		if(!StringUtilNVLIsNotEmpty($scope.model.msisdnNumber)){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.agency.info.required'));
			return false;
		}
		
		if(!StringUtilNVLIsNotEmpty($scope.model.infoMsisdnNumber)){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.agency.info.required'));
			return false;
		}
		
		if(!StringUtilNVLIsNotEmpty($scope.model.NameAgency)){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.agency.info.required'));
			return false;
		}
		
		if(!StringUtilNVLIsNotEmpty($scope.model.infoOwner)){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.agency.info.required'));
			return false;
		}
		
		if(!StringUtilNVLIsNotEmpty($scope.model.agencyCode)){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.agency.info.required'));
			return false;
		}
		//end validate agency info
		
		if(!StringUtilNVLIsNotEmpty($scope.model.orderCode)){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.item.code.required'));
			return false;
		}
		
		if(!StringUtilNVLIsNotEmpty($("#OrderDate").val())){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.item.date.required'));
			return false;
		}
		
		if(!StringUtilNVLIsNotEmpty($scope.model.amountMoneyTransfer)){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.money.amount.transfer'));
			return  false;
		}
		
		if(!StringUtilNVLIsNotEmpty($scope.model.saleUnit)){
			bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.center.shop.required'));
			return false;
		}

		return true;
	}
	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
  	$scope.checkVisiblBtnAction = function(status){
  		console.log("checkVisiblBtnAction");
  		if(status == 1 || status == '1'){
  			return true;
  		}
  		return false;
  	}
  	
  	$scope.prepareCreateCashTransferFn = function(){

		if(!$scope.validateCreateCash()){
			return 0;
		}
		
		var MESSAGE_CONFIRM_ETOPUP = $translate.instant('vnm.transfer_money_vnm.mess.confirm.create.cash.transfer');
			;
		MESSAGE_CONFIRM_ETOPUP+= BREAK_LINE;
		
		if(StringUtilNVLIsNotEmpty($scope.model.msisdnNumber)){
			MESSAGE_CONFIRM_ETOPUP+= "Số thuê bao *: "+StringUtilNVL($scope.model.msisdnNumber)+ BREAK_LINE;
		}
		
		if(!StringUtilNVLIsNotEmpty($scope.model.NameAgency)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.name.agency')+": " + StringUtilNVL($scope.model.NameAgency)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.orderCode)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.order.code') +"*: "+StringUtilNVL($scope.model.orderCode)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($("#OrderDate").val())){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.order.date') +"*: "+StringUtilNVL($("#OrderDate").val())+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.amountMoneyTransfer)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.amount.money.transfer') +"*: "+StringUtilNVL($scope.model.amountMoneyTransfer)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.discount)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.discount') +": "+StringUtilNVL($scope.model.discount)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.discount)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.sale.unit') +"*: "+StringUtilNVL($scope.model.saleUnit)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.paymentMethod)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.payment.method') +": "+StringUtilNVL($scope.model.paymentMethod)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.numberContract)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.number.contract') +": "+StringUtilNVL($scope.model.numberContract)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($("#DateContract").val())){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.date.contract') +": "+StringUtilNVL($("#DateContract").val())+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.receiver)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.receiver') +": "+StringUtilNVL($scope.model.receiver)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.idCard)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.id.card') +": "+StringUtilNVL($scope.model.idCard)+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($("#IssueDate").val())){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.issue.date') +": "+StringUtilNVL($("#IssueDate").val())+ BREAK_LINE;
		}
		
		if(StringUtilNVLIsNotEmpty($scope.model.issuePlace)){
			MESSAGE_CONFIRM_ETOPUP+= $translate.instant('vnm.transfer_money_vnm.label.issue.place') +": "+StringUtilNVL($scope.model.issuePlace)+ BREAK_LINE;
		}
		
		bootboxConfirm('Vietnamobile Etopup',MESSAGE_CONFIRM_ETOPUP, $scope.createCashTransferFn, $scope.confirmKO);
  	}
  	
	$scope.createCashTransferFn = function(){		
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		var dataCreate = {};
		dataCreate.msisdn = StringUtilNVL($scope.model.msisdnNumber);//So dien thoai
		dataCreate.itemCode = StringUtilNVL($scope.model.orderCode);//ma don hang
		dataCreate.dateLOPDate = StringUtilNVL($("#OrderDate").val()); //ngay don hang
		dataCreate.transAmount = StringUtilNVL($scope.model.amountMoneyTransfer); //luong tien chuyen
		dataCreate.numCommission = StringUtilNVL($scope.model.discount);//HH/CK
		dataCreate.centreId = StringUtilNVL($scope.model.saleUnit);//don vi ban hang
		
		dataCreate.paymentMethod = StringUtilNVL($scope.model.paymentMethod);//phuong thuc thanh toan
		dataCreate.contractNo = StringUtilNVL($scope.model.numberContract);// So hop dong
		dataCreate.contractDate = StringUtilNVL($("#DateContract").val());//Ngay hop dong
		dataCreate.receipient = StringUtilNVL($scope.model.receiver); //nguoi nhan
		
		dataCreate.idCard = StringUtilNVL($scope.model.idCard); // so cmt
		dataCreate.issueDate = StringUtilNVL($("#IssueDate").val());// ngay cap
		dataCreate.issuePlace = StringUtilNVL($scope.model.issuePlace);// noi cap
				
				
		cashTransfer.createCashTransfer(dataCreate, function(result) {
			
			App.unblockUI("#contentMain");
			
			if(result!= undefined && result !=null && result.status != '0'){
				$scope.resetCreatePanel();
				bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.create.cash.transfer.success')+result.messages);
			}
			else {
				bootbox.alert(bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.'+result.messages)));
			}
		});
	}

	$scope.resetAgencyInfo = function(){
		$scope.model.infoMsisdnNumber = "";
		$scope.model.NameAgency = "";
		$scope.model.infoOwner = "";
		$scope.model.agencyCode = "";
	}
	
	$scope.setAgencyInfo = function(agencyInfo){
		$scope.model.infoMsisdnNumber = $scope.model.msisdnNumber;
		$scope.model.NameAgency = agencyInfo.tradeName;
		$scope.model.infoOwner = agencyInfo.ownerName;
		$scope.model.agencyCode = agencyInfo.sapCode;
		
	}
	
	$scope.preparedApproveCashTranferMoneyFn = function(item){
		$scope.dataApprove = item;
		var MESSAGE_CONFIRM_APPROVE = $translate.instant('vnm.transfer_money_vnm.mess.confirm.execute.money');
		bootboxConfirm('Vietnamobile Etopup',MESSAGE_CONFIRM_APPROVE, $scope.approveCashTranferMoneyFn, $scope.confirmKO);
	}
	
	$scope.approveCashTranferMoneyFn = function(){
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		cashTransfer.approveCashTransfer($scope.dataApprove, function(result) {
			App.unblockUI("#contentMain");
			if(result!= undefined && result !=null && result.status != '0'){
				if(result.messages == "SUCCESS"){
					bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.approve.cash.transfer.success'));
					$scope.dataApprove.processStatus="3";
				}else{
					bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.approve.cash.transfer.fail'));
					$scope.dataApprove.result="Thuc hien loi : "+result.messages;
				}
			}
			else {
				bootbox.alert(result.messages);
			}
		});
		
	}
	
	$scope.preparedRejectCashTranferMoneyFn = function(item){
		$scope.dataReject = item;
		var MESSAGE_CONFIRM_REJECT = $translate.instant('vnm.transfer_money_vnm.mess.confirm.reject.money');
		bootboxConfirm('Vietnamobile Etopup',MESSAGE_CONFIRM_REJECT, $scope.rejectCashTranferMoneyFn, $scope.confirmKO);
	}
	
	$scope.rejectCashTranferMoneyFn = function(){
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		cashTransfer.rejectCashTransfer($scope.dataReject, function(result) {
			App.unblockUI("#contentMain");
			if(result!= undefined && result !=null && result.status != '0'){
				bootbox.alert($translate.instant('vnm.transfer_money_vnm.mess.reject.cash.transfer.success'));
				$scope.dataReject.processStatus="9";
			}
			else {
				bootbox.alert(result.messages);
			}
		});
		
	}
	
	
	$scope.StatusSource = [ {
		'Id' : '1',
		'Title' : 'Chưa xử lý'
	}, {
		'Id' : '3',
		'Title' : 'Đã xử lý'
	} ,
	{
		'Id' : '9',
		'Title' : 'Bị từ chối'
	} ];

});

