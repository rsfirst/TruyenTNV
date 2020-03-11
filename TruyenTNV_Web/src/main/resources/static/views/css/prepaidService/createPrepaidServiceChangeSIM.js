var EMPTY_VALUE = "";
var MAX_LENGTH_MSISDN = 11;
var MIN_LENGTH_MSISDN = 10;
var SELECT_NONE_INDEX = -1;

var TYPE_SERVICE_CHANGE_SIM = '1';
var TYPE_SERVICE_UPDATE_CUSTOMER_INFO = '3';

var STATUS_APPROVED = '2';

var oldValueTypeOfService = "";

app_vnm.factory('createServiceChangeSIM', function($http, $translate) {
	return {
		searchInformationSubscriber : function(data, callback) {
			var url = eim_url + "/bs/Custome/getSubInfoChangeSIMPrepaid?mdn=" + data;
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		verifyNumberSubscriberDB : function(data, callback) {
			var url = eim_url + "/bs/Custome/verifySubscriberHistoryChangeSim";
			$http.post(url, data).success(callback);
		},
		verifyNumberSubscriberDBWith1Number : function(data, callback) {
			var url = eim_url + "/bs/Custome/verifySubscriberHistoryWith1Number";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getListReasonChangeSIM : function(callback) {
			var url = eim_url + "/bs/Custome/getListReasonChangeSIM";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		verifyNumberSpecialDB : function(data, callback) {
			var url = eim_url + "/bs/Custome/verifyNumberSpecial?mdn=" + data;
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		changeSIM : function(data, callback) {
			var url = eim_url + "/bs/Custome/changeSIMPrepaid";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		verifyIDCard : function(data, callback) {
			var url = eim_url + "/bs/Custome/verifyIDCard";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getListChangeServiceView : function(data, callback) {
			var url = eim_url + "/bs/Custome/actionSearchRequestChangeServiceForView";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctr-prepaidChangeSIM', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,createServiceChangeSIM) {
	
	$scope.model = {};
	$scope.searchResult = [];
	$scope.customerId = "";	
	$scope.subId = "";
	var listSub = [];
	var lisCus = [];
	$scope.itemSelected = [];
	$scope.selMdn = "";
	$scope.cust_img = "";
	$scope.contract_img2_Body = "";
	$scope.contract_img1_Body = "";
	$scope.authorized_img_Body = "";
	$scope.bus_permit_no_img1_Body = "";
	$scope.imgBody = "";
	$scope.imgID_2_Body = "";
	$scope.fileBody = "";
	$scope.file_id_2_Body = "";
	$scope.contract_img2_Body_SUB = "";
	$scope.contract_img1_Body_SUB = "";
	$scope.isNewCus = true;
	var OLD_SIM_NUMER = "";
	$scope.isdnCallStatus="";
	$scope.isShowSubscriberInfor = false;
	$scope.isShowVerifySubscriber = false;
	$scope.isShowUpdateCusInfo = false;
	
	$scope.isShowInformationChangeSim = false;
	
	$scope.isShowSecondInfomation = false;
	
//	$scope.isDisabledReasonChangeSim = false;
	
	$scope.isChangeSIMBtnDisabled = false;
	
	$scope.customer_id_output = "";
	
	var listMSISDNVerifyHist = [];
	
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {
				customerType :{
					required: true,
					EmptyValue:true
				},
				firstName : {
					required: true,
					maxlengthcustom : 50,
					EmptyValue:true
				},
				lastName : {
					required: true,
					maxlengthcustom : 50,
					EmptyValue:true
				},
				cardId : {
					EmptyValue:true,
					maxlengthcustom : 15,
					minlengthcustom : 8
				},
				address : {
					required: true,
					EmptyValue:true,
					maxlengthcustom : 80,
					minlengthcustom : 5
				},
				planceOfIssue : {
					minlengthcustom : 5,
					required: true,
					EmptyValue:true
				},
				dateOfIssue : {
					required: true,
					EmptyValue:true,
					isDate:true,
					lessthancurrentdate:true,
					requiredlessthanyear: 15
				},
				birthday : {
					required: true,
					EmptyValue:true,
					isDate:true,
					check14to100Age: true					
				},
				country: {
					required: true,
					EmptyValue:true
				},
				mdnNew : {
					EmptyValue: true,
					requiredNumber: true,
					maxlengthcustom : MAX_LENGTH_MSISDN,
					minlengthcustom : MIN_LENGTH_MSISDN
				},
				serialNew : {
					EmptyValue: true,
					requiredNumber: true,
					minlengthcustom: 8,
					maxlengthcustom : 20
				},
				ShtNumber:{
					EmptyValue:true,
					requiredNumber: true,
					maxlengthcustom : MAX_LENGTH_MSISDN,
					minlengthcustom : MIN_LENGTH_MSISDN
				},
				SecretNumber:{
					EmptyValue: true
				},
				ChangeSimFullName: {
					EmptyValue: true,
					maxlengthcustom : 50,
				},
				ChangeSimBirthDay: {
					EmptyValue:true,
					isDate:true,
					check14to100Age: true			
				},
				ChangeSimAddress: {
					EmptyValue:true,
					maxlengthcustom : 80,
					minlengthcustom : 5
				},
				ChangeSimPhoneNumber: {
					EmptyValue:true,
					requiredNumber: true,
					maxlengthcustom : MAX_LENGTH_MSISDN,
					minlengthcustom : MIN_LENGTH_MSISDN
				},
				ChangeSimCardId:{
					EmptyValue:true,
					maxlengthcustom : 15,
					minlengthcustom : 8
				},
				ChangeSimPlaceOfIssue : {
					EmptyValue:true,
					minlengthcustom : 5
				},
				ChangeSimDateOfIssue : {
					EmptyValue:true,
					isDate:true,
					lessthancurrentdate:true,
					requiredlessthanyear: 15
				},
				ChangeSimNumberSimNew:{
					EmptyValue: true,
					requiredNumber: true,
					minlengthcustom: 20,
					maxlengthcustom : 20
				}
			},
			messages : {
				lastName : {
					required: "Bạn cần nhập tên họ.",
					EmptyValue: "Bạn cần nhập tên họ.",
					maxlengthcustom : "Tên họ không nhiều hơn 25 ký tự."
				},
				firstName : {
					required: "Bạn cần nhập tên gọi.",
					EmptyValue: "Bạn cần nhập tên gọi.",
					maxlengthcustom : "Tên gọi không nhiều hơn 25 ký tự."
				},
				cardId : {
					EmptyValue:"Bạn cần nhập CMT.",
					maxlengthcustom : "CMT không nhiều hơn 15 ký tự",
					minlengthcustom : "CMT không ít hơn 8 ký tự"
				},
				address : {
					required: "Bạn cần nhập địa chỉ.",
					EmptyValue:"Bạn cần nhập địa chỉ.",
					maxlengthcustom : "Địa chỉ không nhiều hơn 80 ký tự",
					minlengthcustom : "Địa chỉ không ít hơn 5 ký tự"
				},
				planceOfIssue:{
					required: "Yêu cầu nhập Nơi cấp",
					EmptyValue: "Yêu cầu nhập Nơi cấp",
					minlengthcustom : "Nơi cấp CMT không ít hơn 5 ký tự"
				},
				dateOfIssue:{
					required: "Yêu cầu nhập Ngày cấp",
					EmptyValue: "Yêu cầu nhập Ngày cấp",
					isDate:"Ngày cấp không đúng định dạng",
					lessthancurrentdate:"Ngày cấp phải nhỏ hơn ngày hiện tại",
					requiredlessthanyear: "CMT đã hết hạn"
				},
				birthday:{
					required: "Yêu cầu nhập Ngày sinh",
					EmptyValue: "Yêu cầu nhập Ngày sinh",
					isDate:"Ngày sinh không đúng định dạng",
					check14to100Age: "KH không được nhỏ hơn 14 tuổi và lớn hơn 100 tuổi!"
				},
				mdnNew : {
					EmptyValue: "Yêu cầu nhập Số thuê bao",
					requiredNumber: "Số thuê bao chỉ bao gồm ký tự số.",
					minlengthcustom : "Số điện thoại không ít hơn 10 số.",
					maxlengthcustom : "Số điện thoại không nhiều hơn 11 số."
				},
				serialNew : {
					EmptyValue: "Yêu cầu nhập Số SIM",
					requiredNumber: "Số SIM chỉ bao gồm ký tự số.",
					maxlengthcustom : "Số SIM không nhiều hơn 20 số.",
					minlengthcustom: "Số SIM không nhỏ hơn 8 số.",
				},
				ShtNumber : {
					EmptyValue: "Yêu cầu nhập đại lý nhận hoa hồng",
					requiredNumber: "Đại lý nhận hoa hồng chỉ bao gồm ký tự số.",
					minlengthcustom : "Đại lý nhận hoa hồng không ít hơn 10 số.",
					maxlengthcustom : "Đại lý nhận hoa hồng không nhiều hơn 11 số."
				},
				SecretNumber : {
					EmptyValue: "Yêu cầu nhập mã bí mật"
				},
				ChangeSimFullName: {
					EmptyValue:"Bạn cần nhập tên khách hàng",
					maxlengthcustom : "Tên khách hàng không quá 50."
				},
				ChangeSimBirthDay: {
					EmptyValue: "Yêu cầu nhập Ngày sinh",
					isDate:"Ngày sinh không đúng định dạng",
					check14to100Age: "KH không được nhỏ hơn 14 tuổi và lớn hơn 100 tuổi!"
				},
				ChangeSimAddress: {
					EmptyValue:"Bạn cần nhập địa chỉ.",
					maxlengthcustom : "Địa chỉ không nhiều hơn 80 ký tự",
					minlengthcustom : "Địa chỉ không ít hơn 5 ký tự"
				},
				ChangeSimPhoneNumber: {
					EmptyValue: "Yêu cầu nhập số điện thoại",
					requiredNumber: "Số điện thoại chỉ bao gồm ký tự số.",
					minlengthcustom : "Số điện thoại không ít hơn 10 số.",
					maxlengthcustom : "Số điện thoại không nhiều hơn 11 số."
				},
				ChangeSimCardId:{
					EmptyValue:"Bạn cần nhập CMT.",
					maxlengthcustom : "CMT không nhiều hơn 15 ký tự",
					minlengthcustom : "CMT không ít hơn 8 ký tự"
				},
				ChangeSimPlaceOfIssue : {
					EmptyValue: "Yêu cầu nhập Nơi cấp",
					minlengthcustom : "Nơi cấp CMT không ít hơn 5 ký tự"
				},
				ChangeSimDateOfIssue : {
					EmptyValue: "Yêu cầu nhập Ngày cấp",
					isDate:"Ngày cấp không đúng định dạng",
					lessthancurrentdate:"Ngày cấp phải nhỏ hơn ngày hiện tại",
					requiredlessthanyear: "CMT đã hết hạn"
				},
				ChangeSimNumberSimNew:{
					EmptyValue: "Yêu cầu nhập Số SIM",
					requiredNumber: "Số SIM chỉ bao gồm ký tự số.",
					maxlengthcustom : "Số SIM không nhiều hơn 20 số.",
					minlengthcustom: "Số SIM không nhỏ hơn 20 số.",
				}
			}
	}

    //1190 
    setValueTest =  function (){
    	$scope.model.formChangeSim.fullName = "DAM NGUYEN HUNG";
    	$scope.model.formChangeSim.address = "HUU LUNG, LANG SON";
    	$scope.model.formChangeSim.phoneNumber = "01689926953";
    	$scope.model.formChangeSim.cardId = "08212115";
    	$scope.model.formChangeSim.placeOfIssue = "CA LANG SON";
    	
    	$("#changeSimBirthDay").val("07/03/1990");
    	$("#changeSimDateOfIssue").val("07/03/2008");
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

    $scope.msisdnShowExpand = true;
    $scope.expandFunction = function(){
    	$scope.msisdnShowExpand = true;
    }
    
    $scope.collapseFunction = function(){
    	$scope.msisdnShowExpand = false;
    	
    	$scope.model.msisdnCheckFour="";
    	$scope.model.msisdnCheckFive="";
    	$scope.model.msisdnCheckSix="";

    	$scope.model.msisdnCheckSeven="";
    	$scope.model.msisdnCheckEight="";
    	
    	$scope.model.msisdnCheckNine="";
    	$scope.model.msisdnCheckTen="";
    }
    
	var initialize = function () {
		$scope.loadDefauld();
	}
	
	$scope.enterFunctionSearch = function($scope){
		$scope.searchInformationSubscriber();
	}
	
	$scope.getRowHighLight = function(item) {
		$scope.rowHighlightRequestService = item;
	}

	$scope.getListChangeServiceForview = function() {
		var msisdnInput = StringUtilNVL($scope.model.searchMdn);
		var statusVal = StringUtilNVL($scope.model.statusRequest);
		var startDateVal = StringUtilNVL($("#idStartDate").val());
		var endDateVal = StringUtilNVL($("#idEndDate").val());
		
		if(msisdnInput == EMPTY_VALUE){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-003'));
			return;
		}
		if(!isNumbericInteger(msisdnInput)){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-002'));
			return;
		}
		
		var searchInput  = {
				"serviceCode":"1",
				"msisdn":msisdnInput,
				"status":statusVal,
				"createFromDate":startDateVal,
				"createToDate": endDateVal
		}
		overLoading("loading...");

		createServiceChangeSIM.getListChangeServiceView(searchInput, function(result) {
			
			closeOverLay();
			if(result.status == '0' && result.status != undefined){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.resultSearch = result;
				
				for(var i =0; i< $scope.resultSearch.length; i++){
					var searchElement = $scope.resultSearch[i];
					var simInformation = $scope.setInforSimSecondDetail(searchElement.description);
					
					var statusService = StringUtilNVL(searchElement.status);
					
					if(statusService == STATUS_APPROVED){
						searchElement.oldSimNumber = simInformation.oldSim;
						searchElement.newSimNumber = simInformation.newSim;
					}else{
						searchElement.oldSimNumber = "";
						searchElement.newSimNumber = "";
					}
					
				}
				
				$scope.tableParams = new NgTableParams(
						{}, {
							dataset : $scope.resultSearch
						});
			}
		});

	}
	
	//BEGIN BLOCK DETAIL REQUEST
	$scope.clearFormDetailRequest = function(){
		$scope.model.detail_RequestId = "";
		$scope.model.detail_Creater = "";
		$scope.model.detail_CreateDate = "";
		
		$scope.model.detail_UserExecution = "";
		$scope.model.detail_DateExecution = "";
		$scope.model.detail_CusFullName = "";
		
		$scope.model.detail_BirthDay = "";
		$scope.model.detail_Address = "";
		$scope.model.detail_PhoneNumber = "";
		
		$scope.model.detail_IssueNumber = "";
		$scope.model.detail_IssuePlace = "";
		$scope.model.detail_IssueDate = "";
		
		$scope.model.detail_UserReject = "";
		$scope.model.detail_DateReject = "";
		$scope.model.detail_ReasonReject = "";
		
		$scope.model.detail_UserReview = "";
		$scope.model.detail_DateReview = "";
		$scope.model.detail_ReasonReview = "";
		
		$scope.model.detail_InforVerify = "";
		$scope.model.detail_InforChange = "";
		
		$scope.model.detail_oldSim = "";
		$scope.model.detail_newSim = "";
		
	}
	
	$scope.searchInformationSubscriber = function() {
		
		OLD_SIM_NUMER = "";
		
		$scope.rowHighlightRequestService = -1;
		$scope.resultSearch = [];
		
		$scope.tableParams = new NgTableParams(
		{}, {
			dataset : $scope.resultSearch
		});
		
		$scope.isShowSubscriberInfor = false;
		$scope.isShowVerifySubscriber = false;
		$scope.isShowUpdateCusInfo = false;

		$scope.isShowChangeSIM = false; 
		
		$scope.model.typeOfService = "";
		
		$scope.clearNumberVerifySubscriber();
		$scope.resetFormResultSubscriberInfor();

		$scope.clearInfomartionChangeSIM();
		
		$scope.isChangeSIMBtnDisabled = true;
		
		$scope.clearFormSecondInfo();
		
		var msisdnInput = StringUtilNVL($scope.model.searchMdn);
		if(msisdnInput == EMPTY_VALUE){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-003'));
			return;
		}
		if(!isNumbericInteger(msisdnInput)){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-002'));
			return;
		}
		
		if(msisdnInput.length >MAX_LENGTH_MSISDN || msisdnInput.length <MIN_LENGTH_MSISDN){
			closeOverLay();
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-001'));
			return;
		}
		overLoading("loading...");
		
		createServiceChangeSIM.searchInformationSubscriber(msisdnInput, function(result) {
			
			closeOverLay();
			if(result.status == '0' && result.status != undefined){
				
				if(result.messages == "UPDATE_PREPAID-003"){
					$scope.isShowSubscriberInfor = true;
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					var subscriberInfo = result.listResult[0];
					$scope.setValueSearchResult(subscriberInfo);
					return;
				}
								
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				
			}else {
				
				$scope.isShowSubscriberInfor = true;
				$scope.isShowVerifySubscriber = true;
				
				$scope.isShowSecondInfomation = true;
				
				$scope.setValueSearchResult(result);

				$scope.model.formChangeSim = {};
				
				$scope.model.formChangeSim.numberSimOld = OLD_SIM_NUMER;
				
				$scope.isChangeSIMBtnDisabled = false;
				$scope.isShowChangeSIM = true;
				overLoading("loading...");

				createServiceChangeSIM.getListReasonChangeSIM(function(result) {
					closeOverLay();

					if(result.status == '0' && result.status != 'undefined'){
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						$scope.listReason = result;
						$scope.isShowVerifySubscriber = true;
						App.unblockUI("#contentMain");
					}
				});
				
				$scope.getListChangeServiceForview();
			}
		});
	}
	
	//set value detail request change services
	$scope.setValueDetailChangeService = function(item){
		$scope.model.detail_RequestId = item.requestId;
		$scope.model.detail_Creater = item.creater;
		$scope.model.detail_CreateDate = item.createDate ;
		
		$scope.model.detail_UserExecution = item.executer;
		$scope.model.detail_DateExecution = item.executeDate;
		$scope.model.detail_CusFullName = item.customerName;
		
		$scope.model.detail_BirthDay = item.birthdate;
		$scope.model.detail_Address = item.address;
		$scope.model.detail_PhoneNumber = item.phone;
		
		$scope.model.detail_IssueNumber = item.idcard;
		$scope.model.detail_IssuePlace = item.placeissue;
		$scope.model.detail_IssueDate = item.dateissue;
//		
		$scope.model.detail_UserReject = item.approver;
		$scope.model.detail_DateReject = item.approveDate;
		$scope.model.detail_ReasonReject = item.cmt;
//		
		$scope.model.detail_UserReview = item.reviewer;
		$scope.model.detail_DateReview = item.review_date;
		$scope.model.detail_ReasonReview = item.review_reason;
		
		$scope.model.detail_InforVerify = item.mdnsVerify;
		$scope.model.detail_InforChange = item.description;
		
		
		
		var statusService = StringUtilNVL(item.status);
		
		if(statusService == STATUS_APPROVED){
			var simInformation = $scope.setInforSimSecondDetail(item.description);
			$scope.model.detail_oldSim = simInformation.oldSim;
			$scope.model.detail_newSim = simInformation.newSim;
		}else{
			$scope.model.detail_oldSim = "";
			$scope.model.detail_newSim = "";
		}
				
	}
	
	//open popup detail
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
	}
	
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}
	
    $scope.detailInformationTBLChangeService = function(item, index){
   	 $scope.getRowHighLight(item);
   	 $scope.clearFormDetailRequest();
   	 $scope.isShowInformationDetail = true;
   	 
   	 $scope.setValueDetailChangeService(item);
   	
   	 $scope.showModalFunction("modalDetailChangeRequest");
   };
   
   $scope.setInforSimSecondDetail = function(strInfo){
		$scope.model.detailSimSecond_reason = "";
		$scope.model.detailSimSecond_numberSimOld = "";
		$scope.model.detailSimSecond_numberSimNew = "";
		
		var simInformation = {};
		
		simInformation.oldSim = "";
		simInformation.newSim = "";
		simInformation.reason = "";
		
		if(strInfo.indexOf("SIM cu:")>-1){
			simInformation.oldSim = strInfo.substring(strInfo.indexOf("SIM cu:") + 7,strInfo.indexOf("SIM moi:"));
		}
			
		if((strInfo.indexOf("SIM moi:")>-1) && (strInfo.indexOf("Ly do:")>-1)){
			simInformation.newSim = strInfo.substring(strInfo.indexOf("SIM moi:") + 8,strInfo.indexOf("Ly do:"));
		}else{
			simInformation.newSim = strInfo.substring(strInfo.indexOf("SIM moi:") + 8,strInfo.length);
		}
		
		if(strInfo.indexOf("Ly do:")>-1){
			simInformation.reason = strInfo.substring(strInfo.indexOf("Ly do:") + 7,strInfo.length);
		}
		
		return simInformation;
		
	}
	$scope.setValueSearchResult = function(result){
		if(result!=null && result != undefined){
			$scope.model.msisdnType = "Thuê bao trả trước";
			$scope.model.statusMsisdn = result.currentState;
			$scope.model.cardIdInfo = result.idCard;
			$scope.customer_id_output = result.customerId;
			
			$scope.customerId = result.customerId;
			$scope.subId = result.subscriberId;
			
			OLD_SIM_NUMER = result.simNumber;
		}
	}
	
	$scope.resetFormResultSubscriberInfor = function(){
		$scope.model.msisdnType = "";
		$scope.model.statusMsisdn = "";
		$scope.model.cardIdInfo = "";
		$scope.customer_id_output  = "";
		$scope.customerId = "";
		$scope.subId = "";
		OLD_SIM_NUMER = "";
	}
	
	$scope.resetAllShowPanel = function(){
//		$scope.isShowSubscriberInfor = false;
//		$scope.isShowVerifySubscriber = false;
		
		$scope.isShowUpdateCusInfo = false;
		$scope.isShowChangeSIM = false;	
	}
	
	$scope.isShowSubscriberInfor = false;
	$scope.resetAllShowPanel();
	
	$scope.clearNumberVerifySubscriber = function(){
			
			$scope.model.msisdnCheckOne="";
			$scope.model.msisdnCheckTwo="";
			$scope.model.msisdnCheckThree="";
			
			$scope.model.msisdnCheckFour="";
	    	$scope.model.msisdnCheckFive="";
	    	$scope.model.msisdnCheckSix="";

	    	$scope.model.msisdnCheckSeven="";
	    	$scope.model.msisdnCheckEight="";
	    	
	    	$scope.model.msisdnCheckNine="";
	    	$scope.model.msisdnCheckTen="";
	    	$("#tableVerifySubscriber").find('.verifyMsisdn').remove();
	}
	
	$scope.clearFormSecondInfo = function(){
		$scope.model.formChangeSim_dateOfRegistration = "";
		$scope.model.formChangeSim_lastCardLoaded = "";
		$scope.model.formChangeSim_mainAccount = "";
		$scope.model.checkBoxSecondInfo = "";
		
		$scope.isDisLastCardLoaded = true;
		$scope.isDisDateOfRegistration = true;
		$scope.isDisMainAccount = true;
	}
	
	$scope.openFormSecondInfo = function(){
		$scope.model.formChangeSim_dateOfRegistration = "";
		$scope.model.formChangeSim_lastCardLoaded = "";
		$scope.model.formChangeSim_mainAccount = "";
		
		$scope.isDisLastCardLoaded = false;
		$scope.isDisDateOfRegistration = false;
		$scope.isDisMainAccount = false;
	}
	
	$scope.onclickSecondCheckBox = function(){
		if(!$scope.model.checkBoxSecondInfo){
			$scope.clearFormSecondInfo();
		}else{
			$scope.openFormSecondInfo();
		}
	}
	
	$scope.changeSIM = function(){
		var reasonChangeSim = StringUtilNVL($scope.model.formChangeSim.reason);

		if($scope.frm_prepaid.validate()){
			
			if(reasonChangeSim == ""){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.PREPAID_CHANGE_SIM-001'));
				return;
			}
			
			//thông tin phụ
			var secondInfomationModel = {};
			
			secondInfomationModel.typeOfCheckBox = StringUtilNVL($scope.model.checkBoxSecondInfo);
			secondInfomationModel.dateOfRegistration = StringUtilNVL($("#idDateOfRegistration").val());
			secondInfomationModel.lastCardLoaded = StringUtilNVL($scope.model.formChangeSim_lastCardLoaded);
			secondInfomationModel.mainAccount  = StringUtilNVL($scope.model.formChangeSim_mainAccount);
			
			//thông tin khách hàng
			var customerObject = {};
			customerObject.fullName = StringUtilNVL($scope.model.formChangeSim.fullName);
			customerObject.dob = StringUtilNVL($("#changeSimBirthDay").val());
			
			customerObject.address = StringUtilNVL($scope.model.formChangeSim.address);
			customerObject.phoneNumber = StringUtilNVL($scope.model.formChangeSim.phoneNumber);
			
			customerObject.idCard = StringUtilNVL($scope.model.formChangeSim.cardId);
			customerObject.placeOfIssue = StringUtilNVL($scope.model.formChangeSim.placeOfIssue);
			
			customerObject.dateOfIssue = StringUtilNVL($("#changeSimDateOfIssue").val());
			
			var changeSIMInput = {
					"mdn" : StringUtilNVL($scope.model.searchMdn),
					"oldSerial" : StringUtilNVL($scope.model.formChangeSim.numberSimOld),
					"newSerial" : StringUtilNVL($scope.model.formChangeSim.numberSimNew),
					"reasonId" : StringUtilNVL($scope.model.formChangeSim.reason),
					"shopId" : $localStorage.clientContext.shopId,
					"listMsisdnCall": listMSISDNVerifyHist,
					"secondInfomationModel": secondInfomationModel,
					"customer" : customerObject,
					"isdnCallStatus" : StringUtilNVL($scope.isdnCallStatus)
			};

			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			createServiceChangeSIM.changeSIM(changeSIMInput, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					App.unblockUI("#contentMain");
					if(result.code != null && result.code != ""){
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.code)+ result.messages);
						return;
					}
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}else if(result.status != 'undefined' && result.status == '1'){
					$scope.model.reason = -1;
					$scope.model.newSIM = "";
					App.unblockUI("#contentMain");
					$scope.isChangeSIMBtnDisabled = true;
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}
			});
		
		}
	}
	
	$scope.checkNumberVerifySubscriber = function() {
		overLoading("loading...");
		
		$scope.isShowUpdateCusInfo = false;
		
		if(!$scope.checkNumberVerifyHistoryClient()){
			closeOverLay();
			return;
		}
		
		var dataVerifyNumberHist = {};
		dataVerifyNumberHist.msisdn  = StringUtilNVL($scope.model.searchMdn);
		dataVerifyNumberHist.listMsisdnCall = listMSISDNVerifyHist;
		dataVerifyNumberHist.customerId = StringUtilNVL($scope.customer_id_output);
		dataVerifyNumberHist.shopId = StringUtilNVL($localStorage.clientContext.shop.shopId);
		dataVerifyNumberHist.staffId = StringUtilNVL($localStorage.clientContext.shop.staffId);

		var typeOfService = StringUtilNVL($scope.model.typeOfService);

		$scope.verifyChangeSIM(dataVerifyNumberHist);

	}
	
	$scope.verifyChangeSIM = function(dataVerifyNumberHist){
		createServiceChangeSIM.verifyNumberSubscriberDB(dataVerifyNumberHist, function(result) {
			closeOverLay();
			if(result.status != undefined && result.status != null &&
			  result.status == '1' ){
				$scope.isShowChangeSIM = true;
				
			}else {
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}
		});
	}
	
	$scope.clearInfomartionChangeSIM = function(){
		$("#idShowInformationChangeSim").hide();
		$scope.isShowInformationChangeSim = false;
		
		if($scope.model != undefined){
			if($scope.model.formChangeSim != undefined){
				
				if($scope.model.formChangeSim.numberSimNew != undefined){
					$scope.model.formChangeSim.numberSimNew = "";
				}
				if($scope.model.formChangeSim.reason != undefined){
					$scope.model.formChangeSim.reason = "";
				}
			}
		}
		
	}
	
	$scope.verifyIdChangeSIM = function(){
		
		$scope.clearInfomartionChangeSIM();
		$scope.isdnCallStatus="FAIL";
		var listNumberVerifyTemp = $scope.getListVerifyHistoryClient();
		
		if($scope.frm_prepaid.validate()){
					
			if(listNumberVerifyTemp.length>0){
				if(!$scope.checkNumberVerifyHistoryClient()){
					closeOverLay();
					return;
				}
			}
			
			var customerObject = {};
			customerObject.idCard = StringUtilNVL($scope.model.formChangeSim.cardId);
			
			var secondInfomationModel = {};
			
			secondInfomationModel.typeOfCheckBox = StringUtilNVL($scope.model.checkBoxSecondInfo);
			secondInfomationModel.dateOfRegistration = StringUtilNVL($("#idDateOfRegistration").val());
			secondInfomationModel.lastCardLoaded = StringUtilNVL($scope.model.formChangeSim_lastCardLoaded);
			secondInfomationModel.mainAccount  = StringUtilNVL($scope.model.formChangeSim_mainAccount);
			
			var verifyIdCardInput = {
					"mdn" : StringUtilNVL($scope.model.searchMdn),
					"customer": customerObject,
					"secondInfomationModel": secondInfomationModel,
					"listMsisdnCall": listNumberVerifyTemp
			};

			overLoading("Đang tạo yêu cầu...");
			
			createServiceChangeSIM.verifyIDCard(verifyIdCardInput, function(result) {
				closeOverLay();
				if(result.status != undefined && result.status != null &&
					result.status == '1' ){
					$scope.isShowInformationChangeSim = true;
					$("#idShowInformationChangeSim").show();
					if(result.messages!=undefined&&result.messages!=null)
						{
							$scope.isdnCallStatus="SUCCESS";
						}
				}else {
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}
			});
		}
	}
	
	$scope.getListVerifyHistoryClient = function(){
		var listMSISDNVerifyHistTemp = [];
		
		var number1 = StringUtilNVL($scope.model.msisdnCheckOne);
		var number2 = StringUtilNVL($scope.model.msisdnCheckTwo);
		var number3 = StringUtilNVL($scope.model.msisdnCheckThree);
		var number4 = StringUtilNVL($scope.model.msisdnCheckFour);
		var number5 = StringUtilNVL($scope.model.msisdnCheckFive);
		
		var number6 = StringUtilNVL($scope.model.msisdnCheckSix);
		var number7 = StringUtilNVL($scope.model.msisdnCheckSeven);
		var number8 = StringUtilNVL($scope.model.msisdnCheckEight);
		var number9 = StringUtilNVL($scope.model.msisdnCheckNine);
		var number10 = StringUtilNVL($scope.model.msisdnCheckTen);
		
		if( number1 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number1);
		}
		
		if( number2 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number2);
		}
		
		if( number3 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number3);
		}
		
		if( number4 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number4);
		}
		
		if( number5 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number5);
		}
		
		if( number6 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number6);
		}
		
		if( number7 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number7);
		}
		
		if( number8 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number8);
		}
		
		if( number9 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number9);
		}
		
		if( number10 != EMPTY_VALUE){
			listMSISDNVerifyHistTemp.push(number10);
		}
		
		return listMSISDNVerifyHistTemp;
	}
	
	$scope.checkNumberVerifyHistoryClient = function(){
		listMSISDNVerifyHist = [];
		
		var number1 = StringUtilNVL($scope.model.msisdnCheckOne);
		var number2 = StringUtilNVL($scope.model.msisdnCheckTwo);
		var number3 = StringUtilNVL($scope.model.msisdnCheckThree);
		var number4 = StringUtilNVL($scope.model.msisdnCheckFour);
		var number5 = StringUtilNVL($scope.model.msisdnCheckFive);
		
		var number6 = StringUtilNVL($scope.model.msisdnCheckSix);
		var number7 = StringUtilNVL($scope.model.msisdnCheckSeven);
		var number8 = StringUtilNVL($scope.model.msisdnCheckEight);
		var number9 = StringUtilNVL($scope.model.msisdnCheckNine);
		var number10 = StringUtilNVL($scope.model.msisdnCheckTen);
		
		
		var MESS_NUMBER_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-005');
		var MESS_NUMBER_LENGTH_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-006');
		var MESS_NUMBER_EXIST_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-007');
		
		if( number1 != EMPTY_VALUE){
			if(!isNumbericInteger(number1)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 1);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number1.length >MAX_LENGTH_MSISDN || number1.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/, 1);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number1, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 1);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			listMSISDNVerifyHist.push(number1);
		}
		
		if( number2 != EMPTY_VALUE){
			if(!isNumbericInteger(number2)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 2);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number2.length >MAX_LENGTH_MSISDN || number2.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/, 2);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number2, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 2);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			listMSISDNVerifyHist.push(number2);
		}
		if( number3 != EMPTY_VALUE){
			if(!isNumbericInteger(number3)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 3);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number3.length >MAX_LENGTH_MSISDN || number3.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/, 3);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number3, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 3);
				bootbox.alert($translate.instant(message));
				return false;
			}
			listMSISDNVerifyHist.push(number3);
		}
		if( number4 != EMPTY_VALUE){
			if(!isNumbericInteger(number4)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 4);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number4.length >MAX_LENGTH_MSISDN || number4.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/, 4);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number4, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 4);
				bootbox.alert($translate.instant(message));
				return false;
			}
			listMSISDNVerifyHist.push(number4);
		}
		
		if( number5 != EMPTY_VALUE){
			if(!isNumbericInteger(number5)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 5);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number5.length >MAX_LENGTH_MSISDN || number5.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/,5);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number5, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 5);
				bootbox.alert($translate.instant(message));
				return false;
			}
			listMSISDNVerifyHist.push(number5);
		}
		
		if( number6 != EMPTY_VALUE){
			if(!isNumbericInteger(number6)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 6);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number6.length >MAX_LENGTH_MSISDN || number6.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/,6);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number6, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 6);
				bootbox.alert($translate.instant(message));
				return false;
			}
			listMSISDNVerifyHist.push(number6);
		}
		
		if( number7 != EMPTY_VALUE){
			if(!isNumbericInteger(number7)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 6);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number7.length >MAX_LENGTH_MSISDN || number7.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/,6);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number7, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 7);
				bootbox.alert($translate.instant(message));
				return false;
			}
			listMSISDNVerifyHist.push(number7);
		}
		
		if( number8 != EMPTY_VALUE){
			if(!isNumbericInteger(number8)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 8);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number8.length >MAX_LENGTH_MSISDN || number8.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/,8);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number8, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 8);
				bootbox.alert($translate.instant(message));
				return false;
			}
			listMSISDNVerifyHist.push(number8);
		}
		
		if( number9 != EMPTY_VALUE){
			if(!isNumbericInteger(number9)){
				var message = MESS_NUMBER_ERROR.replace(/###/, 8);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number9.length >MAX_LENGTH_MSISDN || number9.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/,8);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number9, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 9);
				bootbox.alert($translate.instant(message));
				return false;
			}
			listMSISDNVerifyHist.push(number9);
		}
		
		if( number10 != EMPTY_VALUE){
			if(!isNumbericInteger(number10)){
				var message = MESS_NUMBER_ERROR.replace(/###/, MIN_LENGTH_MSISDN);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if(number10.length >MAX_LENGTH_MSISDN || number10.length <MIN_LENGTH_MSISDN){
				var message = MESS_NUMBER_LENGTH_ERROR.replace(/###/,MIN_LENGTH_MSISDN);
				bootbox.alert($translate.instant(message));
				return false;
			}
			
			if($.inArray(number10, listMSISDNVerifyHist)> SELECT_NONE_INDEX){
				var message = MESS_NUMBER_EXIST_ERROR.replace(/###/, 10);
				bootbox.alert($translate.instant(message));
				return false;
			}
			listMSISDNVerifyHist.push(number10);
		}
		
		if(listMSISDNVerifyHist.length<3){
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-004'));
			return false;
		}
		return true;
	}

	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;
	$scope.model.status = 'Giữ số';

	// BEGIN validate input
	$.validator.addMethod("isDate", function (value, element) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;
		var valueDate = $.trim(value);
		return moment(valueDate, 'DD/MM/YYYY',true).isValid();
	}, "");

	$.validator.addMethod("lessthancurrentdate", function (value, element) {
		if (value === "") return true;
		if($.trim(value)=="") return true;
		var today = moment();
		return (moment(today, "DD/MM/YYYY") > moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("requiredlessthanyear", function (value, element, options) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;

		var today = moment().add(-options, 'years');
		return (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("check14to100Age", function (value, element) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;

		var today = moment().add(-14, 'years');
		if (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY")){
			return false;
		};
		var today1 = moment().add(-100, 'years');
		if (moment(today1, "DD/MM/YYYY") >= moment(value, "DD/MM/YYYY")){
			return false;
		};
		return true;
	}, "");
	
	$.validator.addMethod("EmptyValue", function (value, element) {
		if (value == undefined || value=="") return false;
		if($.trim(value)=="") return false;
		return true;
	}, "");

	$.validator.addMethod("requiredNumber", function (value, element) {
		if (value == undefined || value=="") return false;
		var valueTrim = $.trim(value);
		if(valueTrim == "") return false;

		if(isNumbericInteger(valueTrim)){
			return true;
		}else{
			return false;
		}
		return true;
	}, "");

	$scope.model.serialNew='';

	$scope.outFocusFunction = function(e){
		overLoading("loading...");

		var parent =  $(e.target).parent().parent();
		
		parent.find('.verifyMsisdn').remove();
		
		var formElement = e.target.parentNode.parentNode;
		var tempFalse = '<label class="verifyMsisdn control-label col-md-15"> <span class="red">'
			+'<i class="glyphicon glyphicon-remove"/></span></label>';
		
		var tempTrue = '<label class="verifyMsisdn control-label col-md-15"> <span class="text-success">'
			+'<i class="glyphicon glyphicon-ok" /></span></label>';
		
		var isdn = e.target.value;
		if (isdn != ''){
			
//		if(!isNumbericInteger(isdn)){
//			e.target.value = '';
//			closeOverLay();
//			return ;
//		}
		
		var dataVerifyNumberHist = {};
		dataVerifyNumberHist.msisdn  = StringUtilNVL($scope.model.searchMdn);
		dataVerifyNumberHist.msisdnCall = isdn;
		
		createServiceChangeSIM.verifyNumberSubscriberDBWith1Number(dataVerifyNumberHist, function(result) {
			
			closeOverLay();
			if (result.status == '1') 
			{
				parent.append(tempTrue);
			} else if ((result.status == '0') && (result.code != 'UPDATE_PREPAID-015')) {
				parent.append(tempFalse);
			} else if((result.status == '0') && (result.code == 'UPDATE_PREPAID-015')) {
				parent.append('');
			} 
		});

		} else {
			parent.find('.verifyMsisdn').remove();
			closeOverLay();
		}
	}
	
	$scope.RequestStatusSource = [ 
		{
			'Id' : '',
			'Title' : 'ALL'
		},{
			'Id' : '0',
			'Title' : 'Tạo mới'
		}, {
			'Id' : '1',
			'Title' : 'Từ chối'
		}, {
			'Id' : '2',
			'Title' : 'Đã thực hiện'
		}, {
			'Id' : '3',
			'Title' : 'Hủy'
		}, {
			'Id' : '4',
			'Title' : 'Đã cộng hoa hồng'
		}, {
			'Id' : '5',
			'Title' : 'Đã review'
		},

		];
	 
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

