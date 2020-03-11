var EMPTY_VALUE = "";
var MAX_LENGTH_MSISDN = 11;
var MIN_LENGTH_MSISDN = 10;
var SELECT_NONE_INDEX = -1;

var TYPE_SERVICE_CHANGE_SIM = '1';
var TYPE_SERVICE_UPDATE_CUSTOMER_INFO = '3';

var STATUS_APPROVED = '2';

var oldValueTypeOfService = "";

app_vnm.factory('transferOfOwnerShip', function($http, $translate) {
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
		verifyNumberSubscriberDBNew : function(data, callback) {
			var url = eim_url + "/bs/Custome/verifySubscriberHistory";
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
			var url = eim_url + "/bs/Custome/actionSearchRequesTranferOfOwnership";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
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
		
		updatePrepaidCustomer : function(data, callback) {
			var url = eim_url + "/bs/Custome/transferOfOwnershipPrepaid";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
	}
});

app_vnm.controller('ctrl-transferOfOwnerShip', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,transferOfOwnerShip) {
	
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
	
	$scope.isShowInformationChangeSim = false;
	
	$scope.isShowSecondInfomation = false;
	
	
	$scope.isChangeSIMBtnDisabled = false;
	
	
	$scope.customer_id_output = "";
	
	var listMSISDNVerifyHist = [];
	var idAttachMentTypeInput = null;
	
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
// mdnNew : {
// EmptyValue: true,
// requiredNumber: true,
// maxlengthcustom : MAX_LENGTH_MSISDN,
// minlengthcustom : MIN_LENGTH_MSISDN
// },
// serialNew : {
// EmptyValue: true,
// requiredNumber: true,
// minlengthcustom: 8,
// maxlengthcustom : 20
// },
// ShtNumber:{
// EmptyValue:true,
// requiredNumber: true,
// maxlengthcustom : MAX_LENGTH_MSISDN,
// minlengthcustom : MIN_LENGTH_MSISDN
// },
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
				// as
				addresscompany: {
					required: true,
					maxlength : 150,
					EmptyValue:true
				},
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
					EmptyValue:"Bạn cần nhập số giấy tờ tùy thân.",
					maxlengthcustom : "số giấy tờ tùy thân không nhiều hơn 15 ký tự",
					minlengthcustom : "số giấy tờ tùy thân không ít hơn 8 ký tự"
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
					EmptyValue:"Bạn cần nhập số giấy tờ tùy thân.",
					maxlengthcustom : "số giấy tờ tùy thân không nhiều hơn 15 ký tự",
					minlengthcustom : "số giấy tờ tùy thân không ít hơn 8 ký tự"
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
				// as
				addresscompany : {
					required: "Bạn cần nhập địa chỉ công ty.",
					EmptyValue: "Bạn cần nhập địa chỉ công ty.",
					maxlength : "Địa chỉ công ty không nhiều hơn 150 ký tự."
				},
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
	// duytk10
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
	// BEGIN validate input
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
	
	$scope.outFocusFunction = function(e) {
		overLoading("loading...");
		
		var parent =  $(e.target).parent().parent();
		
		parent.find('.verifyMsisdn').remove();
		
		var formElement = e.target.parentNode.parentNode;
		
		var tempFalse = '<label class="verifyMsisdn control-label col-md-15"> <span class="red">'
			+'<i class="glyphicon glyphicon-remove"/></span></label>';
		
		var tempTrue = '<label class="verifyMsisdn control-label col-md-15"> <span class="text-success">'
			+'<i class="glyphicon glyphicon-ok" /></span></label>';
		
		var isdn = e.target.value;
		if (isdn != '') {
			
			var dataVerifyNumberHist = {};
			dataVerifyNumberHist.msisdn  = StringUtilNVL($scope.model.searchMdn);
			dataVerifyNumberHist.msisdnCall = isdn;
			
			
// transferOfOwnerShip.verifyNumberSubscriberDBNew(dataVerifyNumberHist, function(result) {
			transferOfOwnerShip.verifyNumberSubscriberDBWith1Number(dataVerifyNumberHist, function(result) { 
				
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
		}else {
			parent.find('.verifyMsisdn').remove();
			closeOverLay();
		}
	}
	
	transferOfOwnerShip.country(function (result) {
		if(result.status == "0" && result.status != 'undefined'){
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
		}else {
			$scope.listCountry = result;
			transferOfOwnerShip.province(function (result) {
				if(result.status == "0" && result.status != 'undefined'){
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}else {
					$scope.listProvince = result;
					transferOfOwnerShip.customer(function (result) {
						if(result.status == "0" && result.status != 'undefined'){
							bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
						}else{
							App.unblockUI("#contentMain");
							$scope.listCustomerType = result;
							$scope.model.customerType = $scope.listCustomerType[0].customerId;
							showTheCustomerType($scope, $scope.model.customerType, true);
							
							$scope.tableParamImage = new NgTableParams({}, {
								dataset : $scope.DocumentTypeSourceOriginal
							});
						}
					})
				}
			})
		}
	});
	
	$scope.msisdnShowExpand = true;
	
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
	
	$scope.listSex = [ {
		'Id' : '0',
		'Title' : 'Nữ'
	}, {
		'Id' : '1',
		'Title' : 'Nam'
	} ];
	
	$scope.updateCustomerType = function(id) {
		$scope.removeAllItem();
		showTheCustomerType($scope, id, true, false);

		// reset field by customer type
		if(id == 1){
			$scope.model.companyName = "";
			$scope.model.tax = "";
		}else if(id == 2){
			$scope.model.companyName = "";
			$scope.model.tax = "";
			$scope.model.province = "";
			$scope.model.district = "";
		}
		
		
		$scope.tableParamImage = new NgTableParams({}, {
			dataset : $scope.DocumentTypeSourceOriginal
		});
	};
	
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
	        		var message = MESS_MAX_SIZE_IMAGE_ITEM.replace(/###/, setStrongLabel(fileName));
	        		bootboxAlertTitle(TAB_HEADER_CUS, message);
	        		
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

	
	// BEGIN LOAD IMAGE table 1
	$scope.model.fileAttachments = [];

	var uploader = $scope.uploader = new FileUploader({
		url: eim_url + "/bs/Custome/uploadImage"
	});
	// config uploader
	uploader.queueLimit = 20;
	// Another user-defined filter
	
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
	
	$scope.uploadAllFile =  function(uploaderIn){
		checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
		if(!checkListTotalSize){
			bootbox.alert("Tổng dung lượng FILE phải nhỏ hơn 5MB ");
			return 0;
		}else{
			uploader.uploadAll();	
		}
	}
	
	$scope.removeElementAttachmenById =  function(idAttachMent){
		angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
			if(objectAttact.attachMentIdClient == idAttachMent){
				$scope.model.fileAttachments.splice(index,1);   
			}
		});
	}
	
	uploader.onAfterAddingFile = function(item){
    	item.attachMentIdClient = idAttachMentVal;
    	item.documentType = idAttachMentTypeInput;
    	
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
	
	
	$scope.removeAllItem =  function(){
		$scope.model.fileAttachments = [];
		uploader.clearQueue();
		var isAvailableCountry = false;
		if((StringUtilNVL($scope.model.customerType) == "2") && ((StringUtilNVL($scope.model.country)!=""))){
			isAvailableCountry = true;
		}
		showTheCustomerType($scope, $scope.model.customerType, true, isAvailableCountry);
		$scope.tableParamImage = new NgTableParams({}, {
			dataset : $scope.DocumentTypeSourceOriginal
		});
	}
	
	$scope.enterFunctionSearch = function($scope){
		$scope.searchInformationSubscriber();
	}
	
	$scope.searchInformationSubscriber = function(){
	
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

// $scope.clearInfomartionChangeSIM();
		
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
		transferOfOwnerShip.searchInformationSubscriber(msisdnInput, function(result) {
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

				$scope.isShowChangeSIM = true;
				
				$scope.setValueSearchResult(result);
				
				$scope.getListChangeServiceForview();
				
			}
		});
			
	}
	
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
	
	$scope.resetFormResultSubscriberInfor = function(){
		$scope.model.msisdnType = "";
		$scope.model.statusMsisdn = "";
		$scope.model.cardIdInfo = "";
		$scope.customer_id_output  = "";
		$scope.customerId = "";
		$scope.subId = "";
		OLD_SIM_NUMER = "";
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
	
	$scope.getListChangeServiceForview = function() {
		var msisdnInput = StringUtilNVL($scope.model.searchMdn);
		var statusVal = StringUtilNVL($scope.model.statusRequest);
		var startDateVal = StringUtilNVL($("#idStartDate").val());
		var endDateVal = StringUtilNVL($("#idEndDate").val());
		
		if(msisdnInput == EMPTY_VALUE){
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-003'));
			return;
		}
		if(!isNumbericInteger(msisdnInput)){
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-002'));
			return;
		}
		
		var searchInput  = {
				"serviceCode":"2",
				"msisdn":msisdnInput,
				"status":statusVal,
				"createFromDate":startDateVal,
				"createToDate": endDateVal
		}
		overLoading("loading...");

		transferOfOwnerShip.getListChangeServiceView(searchInput, function(result) {
			 
			closeOverLay();
			if(result.status == '0' && result.status != undefined){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.resultSearch = result;
				for(var i=0;i<result.length;i++){
					if("0"== result[i].msisdn.substring(0,1)){
						result[i].msisdn="84"+result[i].msisdn.substring(1);
					}
				}
				$scope.tableParams = new NgTableParams(
						{}, {
							dataset : $scope.resultSearch
						});
			}
		});
	}
	
	$scope.getRowHighLight = function(item) {
		$scope.rowHighlightRequestService = item;
	}
	
	$scope.detailInformationTBLChangeService = function(item, index){
	   	 $scope.getRowHighLight(item);
	   	 $scope.clearFormDetailRequest();
	   	 $scope.isShowInformationDetail = true;
	   	 
	   	 $scope.setValueDetailChangeService(item);
	   	
	   	 $scope.showModalFunction("modalDetailChangeRequest");
	};
	

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
		
	}
	
	// set value detail request change services
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
		
// if(statusService == STATUS_APPROVED){
// var simInformation = $scope.setInforSimSecondDetail(item.description);
// $scope.model.detail_oldSim = simInformation.oldSim;
// $scope.model.detail_newSim = simInformation.newSim;
// }else{
// $scope.model.detail_oldSim = "";
// $scope.model.detail_newSim = "";
// }
				
	}
	
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
	}
	
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}
	
	$scope.verifyIdChange = function(){
// $scope.clearInfomartionChangeSIM();
		
		
		  var listNumberVerifyTemp = $scope.getListVerifyHistoryClient();
		  
		  if($scope.frm_prepaid.validate()){
		  
		  if(listNumberVerifyTemp.length>0){ if(!$scope.checkNumberVerifyHistoryClient()){ closeOverLay(); return; } }
		  
		  var customerObject = {}; customerObject.idCard = StringUtilNVL($scope.model.formChangeSim.cardId);
		  
		  var secondInfomationModel = {};
		  
		  secondInfomationModel.typeOfCheckBox = StringUtilNVL($scope.model.checkBoxSecondInfo); secondInfomationModel.dateOfRegistration =
		  StringUtilNVL($("#idDateOfRegistration").val()); secondInfomationModel.lastCardLoaded = StringUtilNVL($scope.model.formChangeSim_lastCardLoaded);
		  secondInfomationModel.mainAccount = StringUtilNVL($scope.model.formChangeSim_mainAccount);
		 
		  var verifyIdCardInput = { "mdn" : StringUtilNVL($scope.model.searchMdn), "customer": customerObject, "secondInfomationModel": secondInfomationModel,
		  "listMsisdnCall": listNumberVerifyTemp };
		  
		  overLoading("Đang tạo yêu cầu...");
		  
		  transferOfOwnerShip.verifyIDCard(verifyIdCardInput, function(result) { closeOverLay(); if(result.status != undefined && result.status != null &&
		  result.status == '1' ){ $scope.isShowUpdateCusInfo = true; // $("#idShowInformationChangeSim").show();
		  
		  }else { bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages)); } }); }
		 
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
	
	$scope.updateInformationCustomer = function() {
		
		if($scope.model.customerType == ""||$scope.model.customerType == undefined){
			bootbox.alert( "Bạn phải chọn loại khách hàng.");
			return;
		}
		
		if("1" == $scope.model.customerType){
			if($scope.model.cusTypeCard==""||$scope.model.cusTypeCard==undefined){
				bootbox.alert( "Bạn phải chọn loại giấy tờ tùy thân !");
				return;
			}
			if($scope.model.sex ==""||$scope.model.sex==undefined){
				bootbox.alert( "Bạn phải chọn giới tính !");
				return;
			}
			if($scope.model.province ==""||$scope.model.province==undefined){
				bootbox.alert( "Bạn phải chọn Tỉnh thành !");
				return;
			}
			if($scope.model.district ==""||$scope.model.district==undefined){
				bootbox.alert( "Bạn phải chọn quận huyện !");
				return;
			}
		}else{
			if($scope.model.typeCardCompany ==""||$scope.model.typeCardCompany==undefined){
				bootbox.alert( "Bạn phải chọn loại giấy tờ tồ chức !");
				return;
			}
			if($scope.model.sex ==""||$scope.model.sex==undefined){
				bootbox.alert( "Bạn phải chọn giới tính !");
				return;
			}
			if($scope.model.province ==""||$scope.model.province==undefined){
				bootbox.alert( "Bạn phải chọn Tỉnh thành !");
				return;
			}
			if($scope.model.district ==""||$scope.model.district==undefined){
				bootbox.alert( "Bạn phải chọn quận huyện !");
				return;
			}
			if($scope.model.subCusTypeCard==""||$scope.model.subCusTypeCard==undefined){
				bootbox.alert( "Bạn phải chọn loại giấy tờ tùy thân khách hàng con !");
				return;
			}
			if($scope.model.subSex ==""||$scope.model.subSex==undefined){
				bootbox.alert( "Bạn phải chọn giới tính khách hàng con !");
				return;
			}
			if($scope.model.subProvince ==""||$scope.model.subProvince==undefined){
				bootbox.alert( "Bạn phải chọn Tỉnh thành khách hàng con !");
				return;
			}
			if($scope.model.subDistrict ==""||$scope.model.subDistrict==undefined){
				bootbox.alert( "Bạn phải chọn quận huyện khách hàng con !");
				return;
			}
		}
		
		if ($scope.frm_prepaid.validate()) {
			
			var cust_img = "";
			var bus_permit_no_img1 = "";
			var bus_permit_no_img2 = "";
			var parent_img="";
			var parent_cust_img="";
			var contract_CUS_img1 = "";
			var contract_CUS_img2 = "";
			var authorized_img = "";
			var img_id = "";
			var img_id_2 = "";
			var parentimg_id = "";
			var parentimg_id2 = "";
			var contract_SUB_img1 = "";
			var contract_SUB_img2 = "";
			var fileID = "";
			var file_id_2 = "";
			var old_idno_img = "";
			var old_idno_2_img= "";
			var ck_img = "";
			var imgCmgs = "";
			
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
					old_idno_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '13'){
					old_idno_2_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '14'){
					ck_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '15'){
					imgCmgs = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '16'){
					parentimg_id = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '17'){
					parentimg_id2 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '18'){
					bus_permit_no_img2 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '19'){
					parent_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '20'){
					parent_cust_img = $scope.model.fileAttachments[i].fileName;
				}
			}
			if($scope.model.customerType =="2"){
				if(parentimg_id==""||parentimg_id==undefined){
					bootbox.alert( "Bạn phải nhập ảnh cmt đại diện 1 !");
					return;
				}
				if(parentimg_id2==""||parentimg_id2==undefined){
					bootbox.alert( "Bạn phải nhập ảnh cmt đại diện 2 !");
					return;
				}
				if(bus_permit_no_img1==""||bus_permit_no_img1==undefined){
					bootbox.alert( "Bạn phải nhập ảnh giấy phép kinh doanh mặt 1 !");
					return;
				}
				if(bus_permit_no_img2==""||bus_permit_no_img2==undefined){
					bootbox.alert( "Bạn phải nhập ảnh giấy phép kinh doanh mặt 2 !");
					return;
				}
				if(parent_img==""||parent_img==undefined){
					bootbox.alert( "Bạn phải nhập ảnh DSKH con !");
					return;
				}
				if(parent_cust_img==""||parent_cust_img==undefined){
					bootbox.alert( "Bạn phải nhập ảnh KH đại diện !");
					return;
				}
				if(contract_CUS_img1==""||contract_CUS_img1==undefined){
					bootbox.alert( "Bạn phải nhập ảnh hồ đồng khách hàng mặt 1 !");
					return;
				}
				if(contract_CUS_img2==""||contract_CUS_img2==undefined){
					bootbox.alert( "Bạn nhập ảnh hợp đông khách hàng mặt 2 !");
					return; 
				}
			}

			// thông tin phụ
			var secondInfomationModel = {};
			
			secondInfomationModel.typeOfCheckBox = StringUtilNVL($scope.model.checkBoxSecondInfo);
			secondInfomationModel.dateOfRegistration = StringUtilNVL($("#idDateOfRegistration").val());
			secondInfomationModel.lastCardLoaded = StringUtilNVL($scope.model.formChangeSim_lastCardLoaded);
			secondInfomationModel.mainAccount  = StringUtilNVL($scope.model.formChangeSim_mainAccount);
			
			
			// thông tin khách hàng
			var customerObject = {};
			customerObject.fullName = StringUtilNVL($scope.model.formChangeSim.fullName);
			customerObject.dob = StringUtilNVL($("#changeSimBirthDay").val());
			
			customerObject.address = StringUtilNVL($scope.model.formChangeSim.address);
			customerObject.phoneNumber = StringUtilNVL($scope.model.formChangeSim.phoneNumber);
			
			customerObject.idCard = StringUtilNVL($scope.model.formChangeSim.cardId);
			customerObject.placeOfIssue = StringUtilNVL($scope.model.formChangeSim.placeOfIssue);
			
			customerObject.dateOfIssue = StringUtilNVL($("#changeSimDateOfIssue").val());
			
			var SubsearchInfor = {
					"customerId" : StringUtilNVL($scope.customerId),
					"subscriberId" : StringUtilNVL($scope.subId),
					"msisdn" : StringUtilNVL($scope.model.searchMdn),
					"listMsisdnCall": listMSISDNVerifyHist
			};
			
			var shtNumberVal = StringUtilNVL($scope.model.shtNumber);
			
			
			if($scope.model.customerType == "1"){
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
						"old_idno_img" : old_idno_img,
						"old_idno_2_img" : old_idno_2_img,
						"ck_img" : ck_img,
						"shtNumber" : shtNumberVal,
						"imgCmgs": imgCmgs,
						"subSearchOutput" : SubsearchInfor,
						"type_card_company": StringUtilNVL($scope.model.typeCardCompany),
						"type_card": StringUtilNVL($scope.model.cusTypeCard),
				};
			}else{
				var CustomerResponse = {
						"dob" : $("#birthday").val()+"__"+$("#subBirthday").val(),
						"idCard" : $scope.model.cardId+"__"+$scope.model.subIdCard,
						"country" : $scope.model.country+"__"+$scope.model.subCountry,
						"province" : $scope.model.province+"__"+$scope.model.subProvince,
						"district" : $scope.model.district+"__"+$scope.model.subDistrict,
						"address" : $scope.model.address+"__"+$scope.model.subAddress,
						"companyName" : $scope.model.companyName,
						"firstName" : $scope.model.firstName+"__"+$scope.model.subFirstName,
						"lastName" : $scope.model.lastName+"__"+$scope.model.subLastName,
						"placeOfIssue" : $scope.model.planceOfIssue+"__"+$scope.model.subPlanceOfIssue,
						"dateOfIssue" : $("#dateOfIssue").val()+"__"+$("#subDateOfIssue").val(),
						"customerType" : $scope.model.customerType,
						"taxCode" : $scope.model.tax,
						"gender" : $scope.model.sex+"__"+$scope.model.subSex,
						"cust_img" : parent_cust_img+"__"+cust_img,
						"shopid" : $localStorage.clientContext.shopId,
						"bus_permit_no_img1" : bus_permit_no_img1,
						"bus_permit_no_img2" : bus_permit_no_img2,
						"parent_img" : parent_img,
						"contract_CUS_img1" : contract_CUS_img1,
						"contract_CUS_img2" : contract_CUS_img2,
						"authorized_img" : authorized_img,
						"img_id" : parentimg_id+"__"+img_id,
						"img_id_2" : parentimg_id2+"__"+img_id_2,
						"cos" : $scope.model.cos,
						"mdn" : $scope.model.mdnNew,
						"serial" : $scope.model.serialNew,
						"contract_SUB_img1" : contract_SUB_img1,
						"contract_SUB_img2" : contract_SUB_img2,
						"fileID" : fileID,
						"file_id_2" : file_id_2,
						"old_idno_img" : old_idno_img,
						"old_idno_2_img" : old_idno_2_img,
						"ck_img" : ck_img,
						"shtNumber" : shtNumberVal,
						"imgCmgs": imgCmgs,
						"subSearchOutput" : SubsearchInfor,
						"type_card_company": StringUtilNVL($scope.model.typeCardCompany),
						"address_company": StringUtilNVL($scope.model.addresscompany),
						"type_card":StringUtilNVL($scope.model.cusTypeCard+"__"+$scope.model.subCusTypeCard),
				};
			}
			
			
			var transferOwerShipInput = {
					"secondInfomationModel": secondInfomationModel,
					"customer" : customerObject,
					"rsObject" : CustomerResponse
			};
			
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			
			transferOfOwnerShip.updatePrepaidCustomer(transferOwerShipInput, function(result) {
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
	}
	
	$scope.updateDistrict = function(id) {
		transferOfOwnerShip.district(id, function(result) {
			$scope.listDistrict = result;
			$scope.sublistDistrict = result;
		});
		$scope.model.district = "";
	}
	$scope.subupdateDistrict = function(id) {
		transferOfOwnerShip.district(id, function(result) {
			$scope.sublistDistrict = result;
		});
		$scope.model.subDistrict = "";
	}
	$scope.openFormSecondInfo = function(){
		$scope.model.formChangeSim_dateOfRegistration = "";
		$scope.model.formChangeSim_lastCardLoaded = "";
		$scope.model.formChangeSim_mainAccount = "";
		
		$scope.isDisLastCardLoaded = false;
		$scope.isDisDateOfRegistration = false;
		$scope.isDisMainAccount = false;
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
	
	$scope.onclickSecondCheckBox = function(){
		if(!$scope.model.checkBoxSecondInfo){
			$scope.clearFormSecondInfo();
		}else{
			$scope.openFormSecondInfo();
		}
	}
	$scope.checkblurFirstName = function (){
		$scope.model.subFirstName = $scope.model.firstName ;
	}
	$scope.checkblurLastName = function (){
		$scope.model.subLastName = $scope.model.lastName;
	}
	$scope.checkblurSex = function (){
		$scope.model.subSex = $scope.model.sex;
	}
	/*$scope.checkblurCounty = function (){
		$scope.model.subCountry = $scope.model.country;
	}*/
	$scope.checkblurProvince = function (){
		;
		for(var i=0;i<$scope.listProvince.length;i++){
			if($scope.model.province==$scope.listProvince[i].proId){
				$scope.model.subProvince=$scope.listProvince[i].proId;
				break;
			}
		}
	}
	$scope.checkblurAddress = function (){
		$scope.model.subAddress = $scope.model.address;
	}
	$scope.checkblurDistrict = function (){
		for(var i=0;i<$scope.listDistrict.length;i++){
			if($scope.model.district==$scope.listDistrict[i].disId){
				$scope.model.subDistrict=$scope.listDistrict[i].disId;
				break;
			}
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

function removeItemQueueById(uploader, attachMentIdClient){
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		if(item.attachMentIdClient == attachMentIdClient){
			item.remove();	
		}
	}
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

function showTheCustomerType($scope, id, isEdit, isAvailableCountry){

	if (id == "1") {
		if(isEdit){
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
		}
		$scope.DocumentTypeSource = [ {
			'Id' : '5',
			'Title' : 'Ảnh khách hàng',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
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
		}, {
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
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMT chính chủ',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '13',
			'Title' : 'Ảnh CMT chính chủ 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '14',
			'Title' : 'Ảnh giấy CK',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '15',
			'Title' : 'Ảnh CKCMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		} ];

	/* $scope.listSubUserType = $scope.listSubUserTypeCN; */
		$scope.customerTypeCardDisabledForm = false;
		$scope.cardIdDisabledForm = false;
		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
		$scope.showSubParent = false;
		$("#addresscompany1").css("display","none");
	} else if (id == "2") {
		if(isEdit){
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
					$scope.model.subCountry = value.countryId;
				}
			});
		}
				
		$scope.DocumentTypeSource = [ {
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '2',
			'Title' : 'Ảnh giấy phép kinh doanh mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '18',
			'Title' : 'Ảnh giấy phép kinh doanh mặt 2',
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
			'Id' : '16',
			'Title' : 'Ảnh CMT đại diện mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		} ,{
			'Id' : '17',
			'Title' : 'Ảnh CMT đại diện mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '20',
			'Title' : 'Ảnh Khách hàng đại diện',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '19',
			'Title' : 'Ảnh DSKH con',
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
		}, {
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
		}, {
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
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMT chính chủ',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '13',
			'Title' : 'Ảnh CMT chính chủ 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '14',
			'Title' : 'Ảnh giấy CK',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '15',
			'Title' : 'Ảnh CKCMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}];
				$scope.showSubParent = true;
				$scope.customerTypeCardDisabledForm = false;
				$scope.companyNameDisabledForm=false;
				$scope.taxCodeDisabledForm=false;
				$scope.cardIdDisabledForm = false;
				$scope.planceDisabledFormNew=false;
				$("#addresscompany1").css("display","block");
	}else if (id == "3") {
		if(isEdit){
			$scope.model.country = -1;
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
		}
		$scope.DocumentTypeSource = [ {
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '2',
			'Title' : 'Ảnh giấy phép kinh doanh',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
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
		}, {
			'Id' : '5',
			'Title' : 'Ảnh khách hàng',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
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
		}, {
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
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMT chính chủ',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '13',
			'Title' : 'Ảnh CMT chính chủ 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '14',
			'Title' : 'Ảnh giấy CK',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '15',
			'Title' : 'Ảnh CKCMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}  ];
		$scope.companyNameDisabledForm = false;
		$scope.taxCodeDisabledForm = false;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;
	} else {
		if(isEdit){
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
		}
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
		}, {
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
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMT chính chủ',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '13',
			'Title' : 'Ảnh CMT chính chủ 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '14',
			'Title' : 'Ảnh giấy CK',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		} ,{
			'Id' : '15',
			'Title' : 'Ảnh CKCMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		} ];

		$scope.companyNameDisabledForm = false;
		$scope.taxCodeDisabledForm = false;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;
		
	}
	$scope.DocumentTypeSourceOriginal = angular.copy($scope.DocumentTypeSource);
		
}

