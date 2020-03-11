var EMPTY_VALUE = "";
var MAX_LENGTH_MSISDN = 11;
var MIN_LENGTH_MSISDN = 10;
var SELECT_NONE_INDEX = -1;

var TYPE_SERVICE_CHANGE_SIM = '1';
var TYPE_SERVICE_UPDATE_CUSTOMER_INFO = '3';

var oldValueTypeOfService = "";

app_vnm.factory('updatePrepaid', function($http,  $translate) {
	return {
		country : function(callback) {
			var url = eim_url + "/bs/Custome/listCountry";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		customer : function(callback) {
			var url = eim_url + "/bs/Custome/listCustomerType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		province : function(callback) {
			var url = eim_url + "/bs/Custome/listProvince";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		district : function(data, callback) {
			var url = eim_url + "/bs/Custome/listDistrict?proId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		searchInformationSubscriber : function(data, callback) {
			var url = eim_url + "/bs/Custome/getSubInfoUpdatePrepaid?mdn=" + data;
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		verifyNumberSubscriberDB : function(data, callback) {
			var url = eim_url + "/bs/Custome/verifySubscriberHistory";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		updatePrepaidCustomer : function(data, callback) {
			var url = eim_url + "/bs/Custome/updatePrepaidCustomer";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createNewSecretCodeDB : function(data, callback) {
			var url = eim_url + "/bs/Custome/createNewSecretNumber?msisdnIn="+data;
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		verifyNumberSubscriberDBWith1Number : function(data, callback) {
			var url = eim_url + "/bs/Custome/verifySubscriberHistoryWith1Number";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
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
		}
	}
});

app_vnm.controller('ctrl-prepaidSV', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,updatePrepaid) {
	
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
	
	$scope.isShowSubscriberInfor = false;
	$scope.isShowVerifySubscriber = false;
	$scope.isShowUpdateCusInfo = false;
	
	$scope.customer_id_output = "";
	
	var listMSISDNVerifyHist = [];
	var customerTypeSearch="";
	// 1190
	inputData = function(){
		$scope.model.lastName = "Hùng";
		$scope.model.firstName = "Đàm";
		$scope.model.cardId = "085454754";
		$scope.model.planceOfIssue = "CA HA NOI";
		$("#dateOfIssue").val("07/07/2009");
		$("#birthday").val("07/07/2000");
		$scope.model.address = "Cau giay Ha Noi";
	}
	
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
				// as
				subFirstName : {
					required: true,
					maxlength : 50,
					EmptyValue:true
				},
				subLastName : {
					required: true,
					maxlength : 50,
					EmptyValue:true
				},
				subIdCard : {
					required: true,
					EmptyValue:true,
					maxlength : 15,
					minlength : 8
				},
				subAddress : {
					required: true,
					EmptyValue:true,
					maxlength : 80,
					minlength : 5
				},
				subPlanceOfIssue : {
					minlength : 5,
					required: true,
					EmptyValue:true
				},
				subDateOfIssue : {
					required: true,
					EmptyValue:true,
					isDate:true,
					lessthancurrentdate:true,
					requiredlessthanyear: 15
				},
				subBirthday : {
					required: true,
					EmptyValue:true,
					isDate:true,
					check14to100Age: true					
				},
				subCountry: {
					required: true,
					EmptyValue:true
				},
				subMdnNew : {
					maxlength : 11,
					minlength : 10
				},
				subSerialNew : {
					maxlength : 20
				},
				subNewSIM : {
					required: true,
					maxlength : 20
				},
				subCusTypeCardDk: {
					required: true,
					maxlength : 15
				},
				tax: {
					required: true,
					maxlength : 15
				},
				companyName: {
					required: true,
					maxlength : 150
				},
				subUserType: {
					required: true,
					maxlength: 4
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
				// as
				subLastName : {
					required: "Bạn cần nhập tên họ.",
					EmptyValue: "Bạn cần nhập tên họ.",
					maxlength : "Tên họ không nhiều hơn 50 ký tự."
				},
				subFirstName : {
					required: "Bạn cần nhập tên gọi.",
					EmptyValue: "Bạn cần nhập tên gọi.",
					maxlength : "Tên gọi không nhiều hơn 50 ký tự."
				},
				subIdCard : {
					required: "Bạn cần nhập số giấy tờ tuỳ thân.",
					EmptyValue:"Bạn cần nhập số giấy tờ tuỳ thân.",
					maxlength : "Số giấy tờ tuỳ thân không nhiều hơn 15 ký tự",
				},
				subAddress : {
					required: "Bạn cần nhập địa chỉ.",
					EmptyValue:"Bạn cần nhập địa chỉ.",
					maxlength : "Địa chỉ không nhiều hơn 80 ký tự",
					minlength : "Địa chỉ không ít hơn 5 ký tự"
				},
				subPlanceOfIssue:{
					required: "Yêu cầu nhập Nơi cấp",
					EmptyValue: "Yêu cầu nhập Nơi cấp",
					minlength : "Nơi cấp CMT không ít hơn 5 ký tự"
				},
				subDateOfIssue:{
					required: "Yêu cầu nhập Ngày cấp",
					EmptyValue: "Yêu cầu nhập Ngày cấp",
					isDate:"Ngày cấp không đúng định dạng",
					lessthancurrentdate:"Ngày cấp phải nhỏ hơn ngày hiện tại",
					requiredlessthanyear: "CMT đã hết hạn"
				},
				subBirthday:{
					required: "Yêu cầu nhập Ngày sinh",
					EmptyValue: "Yêu cầu nhập Ngày sinh",
					isDate:"Ngày sinh không đúng định dạng",
					check14to100Age: "Bạn chỉ được đăng ký từ 14 - 100 tuổi"
				},
				subMdnNew : {
					minlength : "Số điện thoại không ít hơn 10 số.",
					maxlength : "Số điện thoại không nhiều hơn 11 số."
				},
				subSerialNew : {
					maxlength : "Số SIM không nhiều hơn 20 số."
				},
				subNewSIM : {
					required: "Yêu cầu nhập số SIM mới.",
					maxlength : "Số SIM không nhiều hơn 20 số."
				},
				subCusTypeCardDk: {
					required: "Yêu cầu nhập Loại giấy tờ đăng ký.",
					maxlength : "Loại giấy chứng nhận không quá 15 ký tự."
				},
				tax: {
					required: "Yêu cầu nhập Số giấy tờ tổ chức.",
					maxlength : "Số giấy tờ không quá 15 ký tự."
				},
				companyName: {
					required: "Yêu cầu nhập Tên công ty.",
					maxlength : "Tên công ty không quá 150 ký tự."
				},
				subUserType: {
					required: "Yêu cầu nhập Tên công ty.",
					maxlength: "Số giấy tờ không quá 4 ký tự."
				}
			}
	}

	$scope.listSex = [ {
		'Id' : '1',
		'Title' : 'Nữ'
	}, {
		'Id' : '0',
		'Title' : 'Nam'
	} ];

	// caott2
	$scope.listCustomerTypeNew = [ {
		'customerId' : '1',
		'customer' : 'Cá nhân'
	}, {
		'customerId' : '2',
		'customer' : 'Tổ chức'
	} ];
	$scope.listSubUserTypeCN = [ {
		'subUserTypeId' : 'CN01',
		'subUserTypeName' : 'Cho bản thân'
	}, {
		'subUserTypeId' : 'CN02',
		'subUserTypeName' : 'Cho người được giám hộ'
	},{
		'subUserTypeId' : 'CN03',
		'subUserTypeName' : 'Cho thiết bị'
	} ];
	$scope.listSubUserTypeTC = [{
		'subUserTypeId' : 'TC01',
		'subUserTypeName' : 'Cho các cá nhân thuộc tổ chức'
	}, {
		'subUserTypeId' : 'TC02',
		'subUserTypeName' : 'Cho thiết bị'
	} ];
	$scope.listCusTypeCard = [ {
		'cusTypeCardId' : '01',
		'cusTypeCardName' : 'Chứng minh thư'
	}, {
		'cusTypeCardId' : '02',
		'cusTypeCardName' : 'Hộ chiếu'
	}, {
		'cusTypeCardId' : '03',
		'cusTypeCardName' : 'Thẻ căn cước'
	} ];
	$scope.listSubPaymentType = [ {
		'subPaymentTypeId' : 'TT',
		'subPaymentTypeName' : 'Trả trước'
	}, {
		'subPaymentTypeId' : 'TS',
		'subPaymentTypeName' : 'Trả sau'
	} ];
	$scope.listTypeCardCompany = [ {
		'typeCardCompanyId' : '1',
		'typeCardCompanyName' : 'Quyết định thành lập'
	}, {
		'typeCardCompanyId' : '2',
		'typeCardCompanyName' : 'Giấy chứng nhận đăng ký kinh doanh và đăng ký thuế'
	}, {
		'typeCardCompanyId' : '3',
		'typeCardCompanyName' : 'Giấy phép đầu tư'
	}, {
		'typeCardCompanyId' : '4',
		'typeCardCompanyName' : 'Giấy chứng nhận đăng ký doanh nghiệp'
	} ];
	//
	
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
    
    
    // 1190
    setValueTest =  function (){
    	$scope.model.formChangeSim.fullName = "DAM NGUYEN HUNG";
    	$scope.model.formChangeSim.address = "HUU LUNG, LANG SON";
    	$scope.model.formChangeSim.phoneNumber = "01689926953";
    	$scope.model.formChangeSim.cardId = "08212115";
    	$scope.model.formChangeSim.placeOfIssue = "CA LANG SON";
    	
    	$("#changeSimBirthDay").val("07/03/1990");
    	$("#changeSimDateOfIssue").val("07/03/2008");
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
    
	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		updatePrepaid.country(function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listCountry = result;
				updatePrepaid.province(function(result) {
					if(result.status == '0' && result.status != 'undefined'){
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						$scope.listProvince = result;
						updatePrepaid.customer(function(result) {
							if(result.status == '0' && result.status != 'undefined'){
								bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
							}else {
								App.unblockUI("#contentMain");
								$scope.listCustomerType = result;
								$scope.model.customerType = $scope.listCustomerType[0].customerId;
								showTheCustomerType($scope, $scope.model.customerType, true);
								
								$scope.tableParamImage = new NgTableParams({}, {
									dataset : $scope.DocumentTypeSourceOriginal
								});
							}
						});
					}
				});
			}
		});
	}

	var initialize = function () {
		$scope.loadDefauld();
	}

	initialize();
	
	$scope.updateDistrict = function(id) {
		updatePrepaid.district(id, function(result) {
			$scope.listDistrict = result;
		});
		$scope.model.district = "";
	}
	
	$scope.updateDistrictSub = function(id) {
		updatePrepaid.district(id, function(result) {
			$scope.listSubDistrict = result;
		});
		$scope.model.subDistrict = "";
	}

	$scope.updateCustomerType = function(id) {
		$scope.removeAllItem();
		showTheCustomerType($scope, id, true, false);

		// reset field by customer type
		if(id == 1){
			$scope.model.companyName = "";
			$scope.model.tax = "";
			$scope.listSubUserType = $scope.listSubUserTypeCN;
			$scope.model.subUserType = $scope.listSubUserType[0];
		}else if(id == 2){
			$scope.listSubUserType = $scope.listSubUserTypeTC;
			$scope.model.subUserType = $scope.listSubUserType[0]; 
			$scope.model.companyName = "";
			$scope.model.tax = "";
			$scope.model.province = "";
			$scope.model.district = "";
		}
		$scope.model.typeCardCompany = "";
		
		
		$scope.tableParamImage = new NgTableParams({}, {
			dataset : $scope.DocumentTypeSourceOriginal
		});
	}

	$scope.enterFunctionSearch = function($scope){
		$scope.searchInformationSubscriber();
	}
	
	$scope.searchInformationSubscriber = function() {
		overLoading("loading...");
		
		OLD_SIM_NUMER = "";
		
		$scope.isShowSubscriberInfor = false;
		$scope.isShowVerifySubscriber = false;
		$scope.isShowUpdateCusInfo = false;
		
		$scope.isShowChangeSIM = false; 
		
		$scope.model.typeOfService = "";
		
		$scope.clearNumberVerifySubscriber();
		$scope.resetFormResultSubscriberInfor();
		
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
				
		updatePrepaid.searchInformationSubscriber(msisdnInput, function(result) {
			
			closeOverLay();
			if(result.status == '0' && result.status != undefined){
				
				if(result.messages == "UPDATE_PREPAID-003"){
					$scope.isShowSubscriberInfor = true;
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					var subscriberInfo = result.listResult[0];
					$scope.setValueSearchResult(subscriberInfo);
					return;
				}
				
				if(result.code == "UPDATE_PREPAID-020"){
					bootbox.alert(result.messages);
					return;
				}
				
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				
			}else {
				
				$scope.isShowSubscriberInfor = true;
				$scope.isShowVerifySubscriber = true;
				
				$scope.setValueSearchResult(result);
				customerTypeSearch="";
				customerTypeSearch=result.customerType;
			}
			if(result.statusNumber == true){
				$scope.checkNumDisable = true;
				$scope.checkNumDisableCusType=true;
			}else{
				$scope.checkNumDisable = false;
				if("1"==customerTypeSearch)
					{
						$scope.checkNumDisableCusType=true;
					}
				else
					{
					$scope.checkNumDisableCusType=false;
					}			
			}
		});
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
// $scope.isShowSubscriberInfor = false;
// $scope.isShowVerifySubscriber = false;
		
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
	
	$scope.clearFormUpdateCus = function(){
		$scope.model.customerType = "";
		$scope.model.lastName = "";
		$scope.model.firstName = "";
		$scope.model.cardId = "";
		$scope.model.planceOfIssue = "";
		$scope.model.dateOfIssue = "";
		$scope.model.birthday = "";
		$scope.model.sex = "";
		$scope.model.country = "";
		$scope.model.companyName= "";
		$scope.model.tax = "";
		$scope.model.address = "";
		$scope.model.province = "";
		$scope.model.district = "";
		$scope.model.secretNumber = "";
		$scope.model.shtNumber = "";
		
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
		
		$scope.listDistrict = [];
		
		$scope.model.fileAttachments = [];
		$scope.DistrictSource = [];
		$scope.removeAllItem();
		uploader.clearQueue();	
		$scope.model.customerType = $scope.listCustomerType[0].customerId;
		showTheCustomerType($scope, $scope.model.customerType, true, false);
		
		$scope.tableParamImage = new NgTableParams({}, {
			dataset : $scope.DocumentTypeSourceOriginal
		});
		 
	}
	
	$scope.updateInformationCustomer = function() {

		if($scope.model.customerType == ""){
			bootbox.alert( "Bạn phải chọn loại khách hàng.");
			return;
		}
		
		if ($scope.frm_prepaid.validate()) {
			var cust_img = "";
			var bus_permit_no_img1 = "";
			var contract_CUS_img1 = "";
			var contract_CUS_img2 = "";
			var authorized_img = "";
			var img_id = "";
			var img_id_2 = "";
			var contract_SUB_img1 = "";
			var contract_SUB_img2 = "";
			var fileID = "";
			var file_id_2 = "";
		  	var imgCmgs = "";
			var parent_img = "";
			var bus_permit_no_img2 = "";
		  	
			for(var i = 0; i < $scope.model.fileAttachments.length; i ++){
				if($scope.model.fileAttachments[i].attachmentType == '1'){
					authorized_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '2'){
					bus_permit_no_img1 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '3'){
					contract_CUS_img1 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '4'){
					contract_CUS_img2 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '5'){
					cust_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '6'){
					img_id = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '7'){
					img_id_2 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '8'){
					contract_SUB_img1 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '9'){
					contract_SUB_img2 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '10'){
					fileID = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '11'){
					file_id_2 = $scope.model.fileAttachments[i].fileName;
				}
				
				if($scope.model.fileAttachments[i].attachmentType == '12'){
					imgCmgs = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '13'){
					parent_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '14'){
					bus_permit_no_img2 = $scope.model.fileAttachments[i].fileName;
				}
			}
			
			var SubsearchInfor = {
					"customerId" : StringUtilNVL($scope.customerId),
					"subscriberId" : StringUtilNVL($scope.subId),
					"msisdn" : StringUtilNVL($scope.model.searchMdn),
					"listMsisdnCall": listMSISDNVerifyHist,
					"idCard" : $scope.model.cardIdInfo
			};
			
			var shtNumberVal = StringUtilNVL($scope.model.shtNumber);
			var secretCodeVal = StringUtilNVL($scope.model.secretNumber);
			var subUseType=$scope.model.subUserType.subUserTypeId;
			if(subUseType==undefined)
			{
				subUseType=$scope.model.subUserType;
			}
			 if($scope.model.customerType =='2'){
				 var CustomerResponse = {
					 "firstName" : $scope.model.subFirstName,// ten ho
					 "lastName" : $scope.model.subLastName,// ten goi
					 "type_card": $scope.model.subCusTypeCard,// loai giay to tuy than
					 "idCard" : $scope.model.subIdCard,// so giay to tuy than || CMT
					 "placeOfIssue" : $scope.model.subPlanceOfIssue,// noi cap
					 "dateOfIssue" : $("#subDateOfIssue").val(),// ngay cap
					 "dob" : $("#subBirthday").val(),// ngay sinh
					 "gender" : $scope.model.subSex,// gioi tinh
					 "country" : $scope.model.subCountry,// quoc tich
					 "companyName" : $scope.model.companyName,// ten cty
					 "province" : $scope.model.subProvince,// tinh thanh
					 "district" : $scope.model.subDistrict,// quan huyen
					 "address" : $scope.model.subAddress,// dia chi
					 "cust_img" : cust_img,
					 "bus_permit_no_img1" : bus_permit_no_img1,
					 "authorized_img" : authorized_img,
					 "img_id" : img_id,
					 "img_id_2" : img_id_2,
					 "shopid" : $localStorage.clientContext.shopId,
					 "type_card_company": $scope.model.typeCardCompany,// loai giay to to chuc
					 "taxCode" : $scope.model.tax,// so giay to to chuc
					 "contract_CUS_img1" : contract_CUS_img1,
					 "contract_CUS_img2" : contract_CUS_img2,
					 "authorized_img" : authorized_img,
					 "img_id" : img_id,
					 "cos" : $scope.model.cos,
					 "mdn" : $scope.model.mdnNew,
					 "serial" : $scope.model.serialNew,
					 "contract_SUB_img1" : contract_SUB_img1,
					 "contract_SUB_img2" : contract_SUB_img2,
					 "fileID" : fileID,
					 "file_id_2" : file_id_2,
			 		 "imgCmgs" : imgCmgs,
					 "shtNumber" : shtNumberVal,
					 "secretCode": secretCodeVal,
					 "subSearchOutput" : SubsearchInfor,
					 "shopCode" : $localStorage.clientContext.shop.shopCode,
					 "staffCode": $localStorage.clientContext.shop.staffCode,
					 "type_card_company": $scope.model.typeCardCompany,// loai giay to to chuc
					 "taxCode" : $scope.model.tax,// so giay to to chuc
					 "customerType" : $scope.model.customerType,
					 "type_card": $scope.model.subCusTypeCard,// loai giay to tuy than
					 "subUserType" : subUseType,
					 "subPaymentType" : $scope.model.subPaymentType,
					 "address_company" : $scope.model.subAddressCompany,
					 "bus_permit_no_img2" : bus_permit_no_img2,
					 "parent_img" : parent_img
				  };
				
			}else{
				var CustomerResponse = {
						"dob" : $("#birthday").val(),
						"idCard" : $scope.model.cardId,
						"country" : $scope.model.country,
						"province" : $scope.model.province,
						"district" : $scope.model.district,
						"address" : $scope.model.address,
						"companyName" : $scope.model.companyName,
						"firstName" : $scope.model.firstName,
						"lastName" : $scope.model.lastName,
						"placeOfIssue" : $scope.model.planceOfIssue,
						"dateOfIssue" : $("#dateOfIssue").val(),
						"customerType" : $scope.model.customerType,
						"taxCode" : $scope.model.tax,
						"gender" : $scope.model.sex,
						"cust_img" : cust_img,
						"shopid" : $localStorage.clientContext.shopId,
						"bus_permit_no_img1" : bus_permit_no_img1,
						"contract_CUS_img1" : contract_CUS_img1,
						"contract_CUS_img2" : contract_CUS_img2,
						"authorized_img" : authorized_img,
						"img_id" : img_id,
						"img_id_2" : img_id_2,
						"cos" : $scope.model.cos,
						"mdn" : $scope.model.mdnNew,
						"serial" : $scope.model.serialNew,
						"contract_SUB_img1" : contract_SUB_img1,
						"contract_SUB_img2" : contract_SUB_img2,
						"fileID" : fileID,
						"file_id_2" : file_id_2,
						"imgCmgs" : imgCmgs,
						"shtNumber" : shtNumberVal,
						"secretCode": secretCodeVal,
						"subSearchOutput" : SubsearchInfor,
						"type_card_company": $scope.model.typeCardCompany,// loai giay to to chuc
						"taxCode" : $scope.model.tax,// so giay to to chuc
						"subUserType" : subUseType,
						"subPaymentType" : $scope.model.subPaymentType == undefined ? '' : StringUtilNVL($scope.model.subPaymentType),
						"shopCode" : $localStorage.clientContext.shop.shopCode,
						"staffCode": $localStorage.clientContext.shop.staffCode,
						"type_card": $scope.model.cusTypeCard, // loai giay to tuy than
						"bus_permit_no_img2" : bus_permit_no_img2,
						"parent_img" : parent_img
				};
			}

			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});

			updatePrepaid.updatePrepaidCustomer(CustomerResponse, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					$scope.removeAllItem();
					App.unblockUI("#contentMain");
					if(result.code == 'UPDATE_PREPAID-022'){
						var message = $translate.instant('vnm.messages.validate.prepaid.server.' + result.code);
						var message = message.replace(/###/, result.messages);
						bootbox.alert($translate.instant(message));
					}else{
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));	
					}
					
				}else {
					$scope.removeAllItem();
					App.unblockUI("#contentMain");
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}
			});
		}
	}
	
	// method for radio button change
	$scope.typeOfServiceChange = function(e){
		$scope.isShowVerifySubscriber = false;
		
		$scope.resetAllShowPanel();
		$scope.clearNumberVerifySubscriber();
		
		var typeOfService = StringUtilNVL(e.target.value);
		
		if(typeOfService == TYPE_SERVICE_UPDATE_CUSTOMER_INFO){
			overLoading("loading...");
			var msisdnInputSpecial = StringUtilNVL($scope.model.searchMdn); 
			updatePrepaid.verifyNumberSpecialDB(msisdnInputSpecial, function(result) {
				closeOverLay();
				if(result.status == '0' && result.status != undefined){
									
					if(result.code == "UPDATE_PREPAID-020"){
						bootbox.alert( result.messages);
						return;
					}
					
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					
				}else {
					$scope.isShowVerifySubscriber = true;
					initialize();
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

		// 1 Thay Sim
		if(typeOfService == TYPE_SERVICE_CHANGE_SIM){
			$scope.verifyChangeSIM(dataVerifyNumberHist);
		}
		// 2. Chuyen chu quyen
		
		// 3. Cap nhat thong tin thue bao
		else if(typeOfService == TYPE_SERVICE_UPDATE_CUSTOMER_INFO){
			$scope.verifyUpdateCustomerInfo(dataVerifyNumberHist);
		}else{
			closeOverLay();
		}
		
	}
	
	
	$scope.verifyUpdateCustomerInfo = function(dataVerifyNumberHist){
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
		
		$scope.clearFormUpdateCus();
		
		updatePrepaid.verifyNumberSubscriberDB(dataVerifyNumberHist, function(result) {
			closeOverLay();
			if(result.status != undefined && result.status != null &&
			  result.status == '1' ){
				$scope.isShowUpdateCusInfo = true;

				if (result.code != null && result.code != "") {
					$scope.model.shtNumber = result.code;
					$scope.model.customerType=customerTypeSearch;
					$scope.updateCustomerType(customerTypeSearch);
					showTheCustomerType($scope, $scope.model.customerType, true, false);
					
					$scope.tableParamImage = new NgTableParams({}, {
						dataset : $scope.DocumentTypeSourceOriginal
					});
				}
				
			}else {
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}
		});
	}
	
	$scope.verifyChangeSIM = function(dataVerifyNumberHist){
		updatePrepaid.verifyNumberSubscriberDB(dataVerifyNumberHist, function(result) {
			closeOverLay();
			if(result.status != undefined && result.status != null &&
			  result.status == '1' ){
				$scope.isShowChangeSIM = true;
				
			}else {
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}
		});
	}
	
	$scope.createSecretNumber = function(){
		var msisdnIn = StringUtilNVL($scope.model.searchMdn);
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		updatePrepaid.createNewSecretCodeDB(msisdnIn, function(result) {
			
			if(result.status == '0' && result.status != 'undefined'){
				$scope.removeAllItem();
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.removeAllItem();
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}
		});
	}
	
	function resetImg($scope){
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
		$scope.parent_img = "";
		$scope.bus_permit_no_img2 = "";
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
	
	$scope.setValueCusSub = function(item) {
		if(item.status == '0' && item.status != 'undefined'){
			App.unblockUI("#contentMain");
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + item.messages));
		}else {
			$scope.model.customerType = item[0].customerType;
			$scope.model.firstName = item[0].firstName;
			$scope.model.lastName = item[0].lastName;
			$scope.model.cardId = item[0].idCard;
			$scope.model.planceOfIssue = item[0].placeOfIssue;
			$scope.model.dateOfIssue = item[0].dateOfIssue.substring(0, 10);
			$scope.model.birthday = item[0].dob.substring(0, 10);
			$scope.model.sex = item[0].gender;
			if (item[0].country != "") {
				$scope.model.country = item[0].country;
			}
			$scope.model.companyName = item[0].companyName;
			$scope.model.tax = item[0].taxCode;
			if (item[0].province != "") {
				$scope.model.province = item[0].province;
				updatePrepaid.district(item[0].province, function(result) {
					$scope.listDistrict = result;
				});
			}
			if (item[0].district != "") {
				$scope.model.district = item[0].district;
			}
			$scope.model.address = item[0].address;
			// set value for mastery
			$scope.model.customerTypeMastery = item[0].customerType;
			$scope.model.nameMastery = item[0].fullName;
			$scope.model.cardIdMastery = item[0].idCard;
		}
	}
	
	 $scope.isImage = function(ext) {
			if (ext) {
				return ext.toUpperCase() == "JPG" || ext.toUpperCase() == "PNG";
			}
		}

		$scope.uploadedFilePreview = function(element) {
			
			$scope.$apply(function($scope) {
				
				$scope.files = element.files;
				if ($scope.files[0] == undefined) return;
				
				var elementId = element.id;
				var imagePreviewID = $scope.getDocumentSourceById(elementId);
				
				var idAttachMentValDelete = StringUtilNVL($scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentVal);
				if(StringUtilNVL(idAttachMentValDelete) != ""){
					removeItemQueueById(uploader, idAttachMentValDelete);
					$scope.removeElementAttachmenById(idAttachMentValDelete);
				}
				
				var sizeFile = $scope.files[0].size;
				var fileName = $scope.files[0].name;
				
				
	        	if(sizeFile > MAX_FILE_LENGTH){
	        		var MESS_MAX_SIZE_IMAGE_ITEM = $translate.instant('vnm.mnp_message.common.upload.max.size.item.image.file');
	        		var message = MESS_MAX_SIZE_IMAGE_ITEM.replace(/###/, setStrongLabel(fileName));
	        		bootbox.alert(message);
	        		
	        		return false;
	        	}
	        	
				var fileExtValue = fileName.split(".").pop();
				 
				if('|jpg|png|jpeg|bmp|gif|'.indexOf(fileExtValue.toLowerCase()) == -1){ 
					return false;
				}else{
					if(sizeFile <=10485760){
						
					}else{
						return false;
					}
				}
				
				// create id imange in queue uploader
				idAttachMentVal = $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentVal = "";
				idAttachMentTypeInput = $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentTypeInput = "";
				  
				idAttachMentVal 		= $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentVal = createTimeStamp();
				idAttachMentTypeInput 	= $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentTypeInput = elementId;
				
				// icon preview
				var fileReader = new FileReader();
				
				$scope.DocumentTypeSourceOriginal[imagePreviewID].fileName = fileName;
				$scope.DocumentTypeSourceOriginal[imagePreviewID].fileExt = fileExtValue;
				$scope.DocumentTypeSourceOriginal[imagePreviewID].imagePreview = null;
				$scope.DocumentTypeSourceOriginal[imagePreviewID].fileSize = sizeFile;
				
				fileReader.readAsDataURL(document
						.getElementById(elementId).files[0]);
				
				fileReader.onload = function(oFREvent) {
					$timeout(function() {
						$scope.DocumentTypeSourceOriginal[imagePreviewID].imagePreview = oFREvent.target.result;
					});
				};
			});
		}
			
		$scope.deleteImage = function(element) {
			var elementId = element.item.Id;
			var fileNameSelector = "fileNameImage"+elementId;
			
			var idDeleteQueue = element.item.idAttachMentVal;
			
			var imagePreviewID = $scope.getDocumentSourceById(elementId);
			
			$scope.DocumentTypeSourceOriginal[imagePreviewID].imagePreview = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].fileExt = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].fileName = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].fileSize = null;
			
			$scope.DocumentTypeSourceOriginal[imagePreviewID].isCancel = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].isSuccess = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].isError = null;
			
			// reset file value input
			$('[name='+fileNameSelector+']').val(null);
			
			// remove image preview
			var idRemoveVal = $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentVal;
			
			removeItemQueueById(uploader,idRemoveVal);		
			
			$scope.removeElementAttachmenById(idRemoveVal);

		}

		$scope.imgZoom = function(event) {
			$('.imagepreviewZoom').attr('src', $(event)[0].target.src);
			$('#imagemodal').modal('show');   
		}
		
		$scope.getDocumentSourceById = function(elementIdInput){
			var documentOutPut;
			for(var i =0; i< $scope.DocumentTypeSourceOriginal.length; i++){
				if($scope.DocumentTypeSourceOriginal[i].Id == elementIdInput){
					documentOutPut =  i;
					break;
				}
			}
			return documentOutPut;
		}
		
		$scope.getDocumentSourceByIdClient = function(idClient){
			var documentOutPut;
			for(var i =0; i< $scope.DocumentTypeSourceOriginal.length; i++){
				if($scope.DocumentTypeSourceOriginal[i].idAttachMentVal == idClient){
					documentOutPut = $scope.DocumentTypeSourceOriginal[i];
					break;
				}
			}
			return documentOutPut;
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

	// BEGIN LOAD IMAGE table 1
	$scope.model.fileAttachments = [];

	var uploader = $scope.uploader = new FileUploader({
		url: eim_url + "/bs/Custome/uploadImage"
	});
	// config uploader
	uploader.queueLimit = 20;
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

	uploader.onAfterAddingFile = function(item){
    	item.attachMentIdClient = idAttachMentVal;
    	item.documentType = idAttachMentTypeInput;
    	
    	// remove file not image
    	if(item != null && item._file!=null && item._file.name !=null){
    		var fileName = item._file.name;
    		var fileExtValue = fileName.split(".").pop();
			if(!$scope.isImage(fileExtValue)){
				item.remove();
			}
    	}
    } 
	
	uploader.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.model.fileAttachments.push(response);
		
		var sourceElement =  $scope.getDocumentSourceByIdClient(fileItem.attachMentIdClient);
		sourceElement.isCancel = fileItem.isCancel;
		sourceElement.isSuccess = fileItem.isSuccess;
		sourceElement.isError = fileItem.isError;
		
		fileItem.disabledAttachType = true;
	};

	uploader.onErrorItem = function (fileItem, response, status, headers) {
		// bootbox.alert("Có lỗi xảy ra trong quá trình upload file.");
		var sourceElement =  $scope.getDocumentSourceByIdClient(fileItem.attachMentIdClient);
		sourceElement.isCancel = fileItem.isCancel;
		sourceElement.isSuccess = fileItem.isSuccess;
		sourceElement.isError = fileItem.isError;
		
		fileItem.disabledAttachType = true;
	}

	uploader.onBeforeUploadItem  = function(item){
		item.headers = {
				Authorization: 'Bearer ' + $localStorage.clientContext.token
		};

		var identityDocType = StringUtilNVL(item.documentType);
		
		var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);
		var form_data = new FormData();
		form_data.append("identityDocType", item.documentType);
		form_data.append("attachMentIdClient", attachMentIdClient);
		item.formData.push(form_data);

	}

	$scope.uploadAllFile =  function(uploaderIn){
		checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
		if(!checkListTotalSize){
			bootbox.alert("Tổng dung lượng FILE phải nhỏ hơn 5MB ");
			return 0;
		}else{
			uploader.uploadAll();	
		}
	}

	$scope.removeElementAttachmenByItem =  function(item){
		item.isSuccess = false;
		item.isCancel= false;
		item.isError = false;
		item.isReady = false;
		item.isUploading = false;
		item.isSuccess= false;

		angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
			if(objectAttact.attachMentIdClient == item.attachMentIdClient){
				$scope.model.fileAttachments.splice(index,1);   
			}
		});

		item.remove();
	}

	// remove element in list post to server by item
	$scope.removeElementAttachmenById =  function(idAttachMent){
		angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
			if(objectAttact.attachMentIdClient == idAttachMent){
				$scope.model.fileAttachments.splice(index,1);   
			}
		});
	}

	$scope.removeAllItem =  function(){
		$scope.model.fileAttachments = [];
		uploader.clearQueue();
		var isAvailableCountry = false;
		if((StringUtilNVL($scope.model.customerType) == '2') && (StringUtilNVL($scope.model.country)!="")){
			isAvailableCountry = true;
		}
		
		showTheCustomerType($scope, $scope.model.customerType, true, isAvailableCountry);
		$scope.tableParamImage = new NgTableParams({}, {
			dataset : $scope.DocumentTypeSourceOriginal
		});
	}
	
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
			
// if(!isNumbericInteger(isdn)){
// e.target.value = '';
// closeOverLay();
// return ;
// }
		
		var dataVerifyNumberHist = {};
		dataVerifyNumberHist.msisdn  = StringUtilNVL($scope.model.searchMdn);
		dataVerifyNumberHist.msisdnCall = isdn;
		
		updatePrepaid.verifyNumberSubscriberDBWith1Number(dataVerifyNumberHist, function(result) {
			
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

function checkAllFileUploaded(uploader){
	var checkFileAllisUpload = true;
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		var itemStatus = item.isSuccess;
		if(!itemStatus){
			checkFileAllisUpload = false
			break;
		}
	}
	return checkFileAllisUpload;
}

// get total size of list file upload
function getTotalSizeListFileUpload(uploaderIn){
	var listFileTotalSizeByte = 0;
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
		var fileSize = item.file.size;
		listFileTotalSizeByte += fileSize;
	}
	var listFileTotalSizeMB = listFileTotalSizeByte/1024/1024;
	if(listFileTotalSizeMB >5){
		return true;
	}

	return true;
}

// remove file in queue by id
function removeItemQueueById(uploader, attachMentIdClient){
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		if(item.attachMentIdClient == attachMentIdClient){
			item.remove();	
		}
	}
}


function showTheCustomerType($scope, id, isEdit, isAvailableCountry){

	if (id == "1") {
		if(isEdit){
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
		}
		$scope.listSubUserType = $scope.listSubUserTypeCN;
		$scope.DocumentTypeSource = [ {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '5',
			'Title' : 'Ảnh khách hàng',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '8',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '9',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '10',
			'Title' : 'Ảnh hồ sơ mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '11',
			'Title' : 'Ảnh hồ sơ mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		} ,{
			'Id' : '12',
			'Title' : 'Ảnh CMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}];

		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;
		$scope.customerTypeCardDisabledForm = false;
		$scope.showSubParent = false;
		$scope.cardIdDisabledForm = false;

	} else if (id == "2") {
		if(isEdit){
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.subCountry = value.countryId;
				}
			});
		}
		$scope.listSubUserType = $scope.listSubUserTypeTC;
		$scope.DocumentTypeSource = [{
			'Id' : '2',
			'Title' : 'Ảnh giấy phép kinh doanh mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '14',
			'Title' : 'Ảnh giấy phép kinh doanh mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '5',
			'Title' : 'Ảnh khách hàng',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '10',
			'Title' : 'Ảnh hồ sơ mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '11',
			'Title' : 'Ảnh hồ sơ mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '3',
			'Title' : 'Ảnh hợp đồng khách hàng mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '4',
			'Title' : 'Ảnh hợp đồng khách hàng mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '8',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
				
		},{
			'Id' : '9',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '13',
			'Title' : 'Ảnh danh sách khách hàng con',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}];
		$scope.showSubParent = true;
		$scope.customerTypeCardDisabledForm = true;
		$scope.companyNameDisabledForm = false;
		$scope.taxCodeDisabledForm = false;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;
		$scope.cardIdDisabledForm = true;

	}else if (id == "3") {
		if(isEdit){
			$scope.model.country = -1;
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
		}
		$scope.DocumentTypeSource = [{
			'Id' : '2',
			'Title' : 'Ảnh giấy phép kinh doanh',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '5',
			'Title' : 'Ảnh khách hàng',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '10',
			'Title' : 'Ảnh hồ sơ mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '11',
			'Title' : 'Ảnh hồ sơ mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '3',
			'Title' : 'Ảnh hợp đồng khách hàng mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '4',
			'Title' : 'Ảnh hợp đồng khách hàng mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '8',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
				
		},{
			'Id' : '9',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}];
		$scope.companyNameDisabledForm = false;
		$scope.taxCodeDisabledForm = false;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;
	} else {
		if(isEdit){
			$scope.model.country = -1;
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
		}
		$scope.DocumentTypeSource = [{
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '10',
			'Title' : 'Ảnh hồ sơ mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
				
		},{
			'Id' : '11',
			'Title' : 'Ảnh hồ sơ mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '8',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '9',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}];

		$scope.companyNameDisabledForm = false;
		$scope.taxCodeDisabledForm = false;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;
		
	}
	$scope.DocumentTypeSourceOriginal = angular.copy($scope.DocumentTypeSource);
		
}
