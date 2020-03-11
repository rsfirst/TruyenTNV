var TAB_HEADER_NPR;
var TAB_HEADER_CUS; 
var ALERT_TITLE;

var MESS_TOTAL_SIZE_ERROR ;
var MESS_MAX_SIZE_ITEM ;
var MESS_MAX_SIZE_IMAGE_ITEM;

var UPLOAD_FILE_ERROR; 

var MAX_FILE_UPLOAD_MESS ;
var MAX_FILE_CUS_UPLOAD_MESS;

var MAX_TOTAL_FILE_UPLOAD;
var MESS_CUS_IMAGE_REQUIRED;

var REGISTRATION_NPR_SUCCESS;
var REGISTRATION_NPR_LIST_ERROR ;

var messageUploading  = "Uploading";
var MESS_LOADING_CREATE_NPR;
var checkListTotalSize = false;

var PRIVATE_TYPE_DOC_ERROR = "PRIVATE_KO";
var FOREIGN_TYPE_DOC_ERROR = "FOREIGN_KO";
var COMPANY_TYPE_DOC_ERROR = "COMPANY_KO";

var PRIVATE_CUSTOMER_TYPE_ERROR_MESS;
var FOREIGN_CUSTOMER_TYPE_ERROR_MESS;
var COMPANY_CUSTOMER_TYPE_ERROR_MESS;

var CONFIRM_MESSAGE_PORT_IN;
var MESSAGE_CUSTOMER_EXIST_SYSTEM ;
var MESSAGE_COMPANY_EXIST_SYSTEM ;

var ERROR_MES_KO_FILE;
var ERROR_MES_KO_PACKAGE;

var TYPE_DOC_CMND      	= "NPR_CMT";
var TYPE_DOC_HOCHIEU    = "NPR_HC";
var TYPE_DOC_THECANCUOC = "NPR_TCC";
var TYPE_DOC_THITHUC 	= "NPR_VISA";

var TYPE_DOC_GPKD      	= "NPR_GPKD";
var TYPE_DOC_QDTL    	= "NPR_QDTL";
var TYPE_DOC_MASOTHUE 	= "NPR_MASOTHUE";

var TYPE_DOC_VANBAN_DNO = "NPR_XACNHAN_DNO";
var TYPE_DOC_PHIEU_DKCM = "NPR_DKCM";
var TYPE_DOC_LOAI_KHAC 	= "NPR_LOAIKHAC";

var ACCOUNT_TYPE_PREPAID = "Prepaid";
var ACCOUNT_TYPE_POSTPAID = "Postpaid";

var RECEIPIENT_VNM = "05";
var MAX_YEAR_DOCUMENT = -15;

var MIN_YEAR_BIRTHDAY = -14;
var MAX_YEAR_BIRTHDAY = -100;

var MIN_LENGTH_ADDRESS = 5;

var MAX_LENGTH_DNO_CONTRACT_NUMBER = 15;
var MIN_LENGTH_DNO_CONTRACT_NUMBER = 2;

var ACCOUNT_TYPE_PREPAID_ERROR = "PREPAID_KO";
var ACCOUNT_TYPE_POSTPAID_ERROR = "POSTPAID_KO";

var TYPE_IMG_CMT1 = "CUS_CMT1";
var TYPE_IMG_CMT2 = "CUS_CMT2";
var TYPE_IMG_HD1  = "CUS_HD1";
var TYPE_IMG_HD2  = "CUS_HD2";
var TYPE_IMG_GPKD = "CUS_GPKD";
var TYPE_IMG_KH   = "CUS_KH";
var TYPE_IMG_HS1  = "CUS_HS1";
var TYPE_IMG_HS2  = "CUS_HS2";
var TYPE_IMG_GUQ  = "CUS_GUQ";

var KO_FILE_ERROR_CODE = 500;
var KO_PACKAGE_TYPE_CODE = 501;

var EMTPY_VALUE_ERROR_CODE  = 505;
var SERVICE_SOAP_ERROR_CODE = 506;

var CUSTOMER_TYPE_PRIVATE 			= "1";
var CUSTOMER_TYPE_FOREIGN 			= "2";
var CUSTOMER_TYPE_COMPANY 			= "3";
var CUSTOMER_TYPE_STAFT 			= "4";

var DOC_TYPE_CMND = "01";
var DOC_TYPE_HOCHIEU = "02";
var DOC_TYPE_THECANCUOC = "03";
var DOC_TYPE_GPKG = "04";
var DOC_TYPE_QDTL = "05";
var DOC_TYPE_MASOTHUE = "06";
var DOC_TYPE_HOKHAU = "07";

var SELECT_NONE_INDEX = -1;

var MAX_LENGTH_SUBSCRIBER_NUMBER = 10;
var MIN_LENGTH_SUBSCRIBER_NUMBER = 9;

var MAX_LENGTH_SERIAL_SIM = 20;
var MIN_LENGTH_SERIAL_SIM = 19;

var MIN_LENGTH_DOC_IDENTITY_NUMBER = 8;
var MAX_LENGTH_DOC_IDENTITY_NUMBER = 15;

var CUSTOMER_EXIS_EPOS = 90019;
var COMPANY_EXIS_EPOS = 90025;

var CUSTOMER_FOREIGN_EXIST_EPOS = 90026;
var MESS_CUSTOMER_FOREIGN_EXIST_EPOS;

var CUSTOMER_PRIVATE_EXIST_EPOS = 90027;
var MESS_CUSTOMER_PRIVATE_EXIST_EPOS;

var SUBSCRIBER_NUMBER_ACTIVE_EPOS = 90028;
var MESS_SUBSCRIBER_NUMBER_ACTIVE_EPOS;

var listFieldNPRNotValidated = "";
var listFieldCUSNotValidated = "";

var BREAK_LINE = "<br/>";

overLoading("Loading...");
app_vnm.factory('prepaidBundle', function($http, $translate) {
	return {
		search : function(data, callback) {
			var url = eim_url + "/bs/Customer/search_bundle";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		openViewIMGChangeService : function(data, callback) {
			var url = eim_url + "/bs/Customer/get_img_bundle";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});

app_vnm.controller('ctrl-ticket', function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal, $location, $window,FileUploader,$filter, $localStorage, $http, NgTableParams, prepaidBundle) {	
	
	// message
	var PREPAID_NPR_HEADER = $translate.instant('vnm.mnp_message.registration.prepaid.info.alert.title.port.in');
	
	TAB_HEADER_NPR = $translate.instant('vnm.mnp_message.registration.prepaid.info.tab.header.npr');
	TAB_HEADER_CUS = $translate.instant('vnm.mnp_message.registration.prepaid.info.tab.header.customer'); 
	
	MAX_FILE_UPLOAD_MESS = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.file.max.length');
	MAX_FILE_CUS_UPLOAD_MESS = $translate.instant('vnm.mnp_message.registration.prepaid.info.cus.file.max.length');
	MAX_TOTAL_FILE_UPLOAD = $translate.instant('vnm.mnp_message.registration.prepaid.info.file.total.file.size');;
	
	MESS_CUS_IMAGE_REQUIRED = $translate.instant('vnm.mnp_message.registration.prepaid.info.file.cus.image.required');
	REGISTRATION_NPR_SUCCESS  = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.send.npr.success');
	REGISTRATION_NPR_LIST_ERROR  = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.send.npr.error');
	MESS_LOADING_CREATE_NPR = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.loading.create.npr');

	PRIVATE_CUSTOMER_TYPE_ERROR_MESS = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.private.customer.image.error');
	FOREIGN_CUSTOMER_TYPE_ERROR_MESS = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.foreign.customer.image.error');
	COMPANY_CUSTOMER_TYPE_ERROR_MESS = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.company.customer.image.error');
	
	CONFIRM_MESSAGE_PORT_IN = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.mes.confirm.create.npr');
	MESSAGE_CUSTOMER_EXIST_SYSTEM = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.mes.customer.exist');
	MESSAGE_COMPANY_EXIST_SYSTEM = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.mes.company.exist');
	
	ERROR_MES_KO_FILE = $translate.instant('vnm.mnp_message.common.upload.file.server.return');
	ERROR_MES_KO_PACKAGE = $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.error');
	
	ALERT_TITLE = $translate.instant('vnm.mnp_message.common.alert.title');
	
	UPLOAD_FILE_ERROR = $translate.instant('vnm.mnp_message.common.upload.file.error');
	MESS_TOTAL_SIZE_ERROR = $translate.instant('vnm.mnp_message.common.upload.max.size.total.file');
	
	MESS_MAX_SIZE_ITEM = $translate.instant('vnm.mnp_message.common.upload.max.size.item.file');
	MESS_MAX_SIZE_IMAGE_ITEM = $translate.instant('vnm.mnp_message.common.upload.max.size.item.image.file');
	
	MESS_CUSTOMER_FOREIGN_EXIST_EPOS = $translate.instant('vnm.mnp_message.registration.prepaid.info.cus.foreign.exist');
	MESS_CUSTOMER_PRIVATE_EXIST_EPOS = $translate.instant('vnm.mnp_message.registration.prepaid.info.cus.private.exist');
	MESS_SUBSCRIBER_NUMBER_ACTIVE_EPOS = $translate.instant('vnm.mnp_message.registration.prepaid.info.subscriber.active');
		
	var nprFormDataInput;
	
	// test value 1190
	setValueFormTest =  function () {
		$scope.model.fullName = "Dam Nguyen Hung";
		$scope.model.documentNumber = "8794654548";
		$scope.model.documentIssuePlace = "Huu Lung, Lang Son";
		$scope.model.email  = "dnhung@gmail.com";
		$scope.model.address  = "Huu Lung, Lang Son";
		
		$scope.model.reprentativeName = "Dam Nguyen Hung REPREN";
		$scope.model.representativeDocNumber = "0821215959";
		$scope.model.representativePosition = "Dev";
		$scope.model.subDataNumber = "841689926956";
		$scope.model.dnoContractNumber = "DNOC0980";
		$scope.model.comments = "Note Comment";
		
		// customer
		$scope.model.fullNameCustomer = "Dam Nguyen Hung Cus";
		$scope.model.documentNumberCustomer = "68695959595";
		$scope.model.documentIssuePlaceCustomer  = "Huu Lung Cus, Lang Son";
		$scope.model.companyName ="FIS_FTU";
		$scope.model.taxIdentificationNumber = "FIS03092";
		$scope.model.addressCustomer  = "Sơn trà, Đà nẵng";
		$scope.model.numberSIM = "89840507179010007005"
		$scope.model.addressCustomer  = "Huu Lung, Lang Son";
		$scope.model.DocumentIssueDate = "25/10/2017";
		$scope.model.surnameCustomer = "Dam Nguyen";
		$scope.model.nameCustomer = "Hung";
	}
	
	setMandatoryFieldNPR($scope, true);
//	setMandatoryAccountType($scope, false);
	
	setMandatoryFieldCustomer($scope, true);
	
	// set get shopname and staffID
    $scope.shopNameCustomer = StringUtilNVL($localStorage.clientContext.shop.shopName);
    $scope.shopCode = StringUtilNVL($localStorage.clientContext.shop.shopCode);
    $scope.shopId = StringUtilNVL($localStorage.clientContext.shop.shopId);
    
    $scope.staffCode  = StringUtilNVL($localStorage.clientContext.shop.staffCode);
    $scope.staffId = StringUtilNVL($localStorage.clientContext.shop.staffId);
	
	$scope.listMessage = [];
	
	$scope.cust_img = "";
	$scope.contract_img2_Body = "";
	$scope.contract_img1_Body = "";
	$scope.authorized_img_Body = "";
	$scope.bus_permit_no_img1_Body = "";
	$scope.img_imgId = "";
	$scope.imgID_2_Body = "";
	$scope.fileBody = "";
	$scope.file_id_2_Body = "";
	$scope.contract_img2_Body_SUB = "";
	$scope.contract_img1_Body_SUB = "";
	
	$scope.modelSearch = {};
	
    checkCustomerExistInSystem =  function (documentNumber) {
    	overLoading("Loading...");
    	var customerType = StringUtilNVL($scope.model.customerTypeNPR);
    	
		var url =eim_url+"/bs/npr/check_customer_exist?docNumberCustomer="+StringUtilNVL(documentNumber)+"&customerTypeIn="+customerType;
		 $http.get(url).success(function (response){
			 
			 if(response != undefined && response != null && response.code == CUSTOMER_EXIS_EPOS){
				 bootboxConfirm(PREPAID_NPR_HEADER, MESSAGE_CUSTOMER_EXIST_SYSTEM, $scope.confirmCreateNPROK, $scope.confirmKO);
			 }else if(response != undefined && response != null && response.code == CUSTOMER_FOREIGN_EXIST_EPOS){
				 bootbox.alert(MESS_CUSTOMER_FOREIGN_EXIST_EPOS);
				 closeOverLay();
			 }else if(response != undefined && response != null && response.code == CUSTOMER_PRIVATE_EXIST_EPOS){
				 bootbox.alert(MESS_CUSTOMER_PRIVATE_EXIST_EPOS);
				 closeOverLay();
			 }else{
				 $scope.confirmCreateNPROK();
			 }
			
		 }).error(function (response){
			 closeOverLay();
			 bootbox.alert(REGISTRATION_NPR_LIST_ERROR + ' '+response.message);
		 });
    }
    
    checkCustomerCompanyExistInSystem =  function (taxCodeIn) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/npr/check_company_exist?taxcode="+taxCodeIn;
		 $http.get(url).success(function (response){
			 
			 if(response != undefined && response != null && response.code == COMPANY_EXIS_EPOS){
				 bootboxConfirm(PREPAID_NPR_HEADER, MESSAGE_COMPANY_EXIST_SYSTEM, $scope.confirmCreateNPROK, $scope.confirmKO);
			 }else{
				 $scope.confirmCreateNPROK();
			 }
			
		 }).error(function (response){
			 closeOverLay();
			 bootbox.alert(REGISTRATION_NPR_LIST_ERROR + ' '+response.message);
		 });
    }
    
    checkSubscriberNumberIsActiveInEpos =  function (msisdnIn) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/npr/check_subscriber_number_active?msisdn="+msisdnIn;
		 $http.get(url).success(function (response){
			 
			 if(response != undefined && response != null && response.code == SUBSCRIBER_NUMBER_ACTIVE_EPOS){
				 bootbox.alert(MESS_SUBSCRIBER_NUMBER_ACTIVE_EPOS);
				 closeOverLay();
			 }else{
				 createNprFunctionService(nprFormDataInput)
			 }
			
		 }).error(function (response){
			 closeOverLay();
			 bootbox.alert(REGISTRATION_NPR_LIST_ERROR + ' '+response.message);
		 });
    }
    
	createNprFunctionService =  function (data) {
		overLoading(MESS_LOADING_CREATE_NPR);
    	var urlCreateNPR =eim_url+"/bs/registration/create_ticket_npr_prepaid_bundle";
    	$http.post(urlCreateNPR,data).success(function (response){
    		 
    		 var transactionID = response.message;
    		 $scope.bootboxAlertReloadPage(ALERT_TITLE, REGISTRATION_NPR_SUCCESS+transactionID);
    		 closeOverLay();
    		
    	 }).error(function (response){
    		 if(response!=null && response!= undefined && response.code == EMTPY_VALUE_ERROR_CODE){
				 var textMessage = "";
    			 for(var i = 0 ; i < response.listResult.length; i ++){
    				 textMessage += response.listResult[i] + BREAK_LINE; 
				 }
				 
    			 bootboxAlertInformation(ALERT_TITLE, textMessage);
     			 closeOverLay();
     			 return ;
     		 }
    		 
    		 if(response!=null && response!= undefined && response.code == SERVICE_SOAP_ERROR_CODE){
    			 var message = response.message;
    			 bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(REGISTRATION_NPR_LIST_ERROR, message));
    			 
    			 closeOverLay();
    			 return ;
    		 }
    		 closeOverLay();
    		 bootbox.alert(REGISTRATION_NPR_LIST_ERROR + ' '+response.message);
    	 });
    }
	
  getListProvince =  function () {
	  overLoading("Loading...");
		var url =eim_url+"/bs/SourceProvince";
		 $http.get(url).success(function (data){
			 $scope.ProvinceSource = data;
			 $scope.ProvinceSourceCustomer = data;
			 closeOverLay();
			 
		 }).error(function (response){
			 closeOverLay();
		 });
    }
  
    getListDistrict =  function (provId) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
				$scope.DistrictSource = data;
				$scope.model.district = $scope.DistrictSource[SELECT_NONE_INDEX];
				closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDistrictCustomer =  function (provId) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourceCustomer = data;
			 $scope.model.districtCustomer = $scope.DistrictSourceCustomer[SELECT_NONE_INDEX];
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetPackageType =  function (provId) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourcePackage";
		 $http.get(url).success(function (data){
			 $scope.PackageTypeSource = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetPackageTypeView =  function () {
    	console.log("getListGetPackageTypeView");
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourcePackagePrepaidApDomain";
		 $http.get(url).success(function (data){
			 $scope.PackageTypeSourcePrepaidApDomain = data;
			 console.log("getListGetPackageTypeView"+ data);
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListCountry =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceCountry";
		 $http.get(url).success(function (data){
			 $scope.CitizenSource = data;
			 
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListCustomerType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceCustomer";
		 $http.get(url).success(function (data){
			 $scope.CustomerTypeSource = data;
			 $scope.model.customerTypeNPR = $scope.CustomerTypeSource[0].idCustomer;
			 $scope.model.customerType = $scope.CustomerTypeSource[0].idCustomer;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    };
    
    
    getListNetworkType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceNetwork";
		 $http.get(url).success(function (data){
			 if(data != undefined && data != null){
				 if(data.length != 0){
					 $scope.DonorSource = data;
				 }
			 }
			 
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDocumentType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceDocument";
		 $http.get(url).success(function (data){
			 $scope.IdentityTypeSource = [];
			 for (var i=0; i<data.length; i++) {
				 if (data[i].documentType == '01' || data[i].documentType == '03' || data[i].documentType == '06') {
					 $scope.IdentityTypeSource.push(data[i]);
				 }
			 }
			 
			 $scope.IdentityTypeSourcePrivate = getListDocumentTypeByCustomer($scope.IdentityTypeSource,CUSTOMER_TYPE_PRIVATE);
			 $scope.IdentityTypeSourceCompany = getListDocumentTypeByCustomer($scope.IdentityTypeSource,CUSTOMER_TYPE_COMPANY);
			 
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDocumentTypeByCustomer = function(data, customerType){
    	var documentSourceOut = [];
    	if(customerType == CUSTOMER_TYPE_PRIVATE || customerType == CUSTOMER_TYPE_FOREIGN){
    		for(var i = 0; i <data.length; i++){
    			if(data[i].documentType == DOC_TYPE_CMND){
    				documentSourceOut.push(data[i]);
    			}
    			
    			if(data[i].documentType == DOC_TYPE_HOCHIEU){
    				documentSourceOut.push(data[i]);
    			}
    			
    			if(data[i].documentType == DOC_TYPE_THECANCUOC){
    				documentSourceOut.push(data[i]);
    			}
    		}
    		
    		return documentSourceOut;
    	}
    	
    	if(customerType == CUSTOMER_TYPE_COMPANY){
    		for(var j = 0; j <data.length; j++){
    			if(data[j].documentType == DOC_TYPE_GPKG){
    				documentSourceOut.push(data[j]);
    			}
    			
    			if(data[j].documentType == DOC_TYPE_QDTL){
    				documentSourceOut.push(data[j]);
    			}
    			
    			if(data[j].documentType == DOC_TYPE_MASOTHUE){
    				documentSourceOut.push(data[j]);
    			}
    		}
    		return documentSourceOut;
    	}
    }
    
    
    // get list data province, package, country,customer tyep, network,
    getListProvince();
    getListGetPackageType();
    getListGetPackageTypeView();
	getListCountry();
// getListCustomerType();
	getListNetworkType();
	getListDocumentType();
	
    $scope.onCountryChange = function(){
    	if($scope.model.citizen!=""){
    		removeErrorClassElement("idCitizenDiv");
    		$scope.model.citizenCustomer = $scope.model.citizen;
    		
    		if($scope.model.citizenCustomer!=""){
        		removeErrorClassElement("CitizenCustomerDiv");
        	}
    	}
    }
	
    $scope.onCountryChangeCustomer =  function(){
    	if($scope.model.citizenCustomer!=""){
    		removeErrorClassElement("CitizenCustomerDiv");
    	}
    }
    
    $scope.onProvinceChange = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.district = "";
    	if($scope.model.province.proId!=""){
    		removeErrorClassElement("idSelectDivProvince");
    		getListDistrict($scope.model.province.proId);
    		
    		$scope.model.provinceCustomer = $scope.model.province;
    		removeErrorClassElement("ProvinceCustomerDiv");
    		getListDistrictCustomer($scope.model.provinceCustomer.proId);
    	}
    }
        
    $scope.onDistrictChange = function(){
    	var districtNPR = StringUtilNVL(checkModelVisible($scope.model.district)?"": 
    		StringUtilNVL($scope.model.district.districtName));
    	
    	if(districtNPR != ""){
    		$scope.model.districtCustomer = $scope.model.district;
    		removeErrorClassElement("divDistrictId");
    		removeErrorClassElement("DistrictCustomerDiv");
    	}
    }
    
    $scope.onCustomerNPRChange = function(){
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
    	if(customerTypeNPR != EMPTY_VALUE){
    		$scope.model.customerType = customerTypeNPR;
        	
    		$scope.copyNameCustomer();
    		$scope.copyValueDocumentType();
    		
    		$scope.onChangeValueByCustomerType();
    		
    		removeErrorClassElement("idCustomerTypeNPRDiv");
    		removeErrorClassElement("idDivCustomerTypeCustomer");
    		
    		$scope.model.documentType = ""; 
    		
    		// set mandatory by customertype
    		setMandatoryFieldNPR($scope, true, customerTypeNPR);
    		setMandatoryFieldCustomer($scope, true, customerTypeNPR);
    		
    		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE || customerTypeNPR == CUSTOMER_TYPE_COMPANY ){
    			var citizenVietNam = null;
    			$scope.model.documentNumberCustomer = ""
				$scope.model.taxIdentificationNumber = "";
    			
    			for(var i = 0 ; i <$scope.CitizenSource.length; i ++){
    				if($scope.CitizenSource[i].countryId == 238){
    					citizenVietNam = $scope.CitizenSource[i];
    					break;
    				}
    			}
    			if(citizenVietNam != null){
    				$scope.model.citizen  = citizenVietNam;
    				$scope.model.citizenCustomer = citizenVietNam;
    				removeErrorClassElement("idCitizenDiv");
    				removeErrorClassElement("CitizenCustomerDiv");
    			}
    			
    			// set document type by customer type
    			if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
    				$scope.model.documentNumberCustomer = $scope.model.documentNumber;
    				$scope.IdentityTypeSource = $scope.IdentityTypeSourcePrivate;
    			}
    			
    			if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
    				if(StringUtilNVL($scope.model.documentType)== DOC_TYPE_MASOTHUE){
    					$scope.model.taxIdentificationNumber == $scope.model.documentNumber;
    				}
    				
    				$scope.IdentityTypeSource = $scope.IdentityTypeSourceCompany;
    			}
    			
    		}else if(customerTypeNPR == CUSTOMER_TYPE_FOREIGN) {
    			$scope.IdentityTypeSource = $scope.IdentityTypeSourcePrivate;
				
    			removeErrorClassElement("idSelectDivProvince");
	        	removeErrorClassElement("divDistrictId");
	        	
	        	removeErrorClassElement("ProvinceCustomerDiv");
	        	removeErrorClassElement("DistrictCustomerDiv");
	        	
    			$scope.model.documentType = "";
    			$scope.model.citizen = $scope.CitizenSource[-1];
    			$scope.model.citizenCustomer = $scope.CitizenSource[-1];
    		}
    	}
    }
    
    $scope.onCustomerChange = function(){
    	if(StringUtilNVL($scope.model.customerType) != EMPTY_VALUE){
    		removeErrorClassElement("idDivCustomerTypeCustomer");
    	}
    	
    	var customerType = StringUtilNVL($scope.model.customerType);
    	if(customerType == CUSTOMER_TYPE_FOREIGN) {
    		removeErrorClassElement("ProvinceCustomerDiv");
    		removeErrorClassElement("DistrictCustomerDiv");
    	}
    	$scope.model.customerTypeNPR = $scope.model.customerType;
    	$scope.onCustomerNPRChange();
    	setMandatoryFieldCustomer($scope, true, customerType);
    }
    
    $scope.onDocumentTypeNPRChange = function(){
    	var documentTypeNPR = StringUtilNVL($scope.model.documentType);
    	if(documentTypeNPR != EMPTY_VALUE){
    		$scope.copyValueDocumentType();
    		$scope.onChangeValueByCustomerType();
    		removeErrorClassElement("idDocumentTypeDiv");
    	}
    }
    
    $scope.onDonorNPRChange = function(){
    	var modelDonorVal = StringUtilNVL($scope.model.donor);
    	if(modelDonorVal != EMPTY_VALUE){
    		removeErrorClassElement("idDonorDiv");
    	}
    }
    
    $scope.onAccountTypeNPRChange = function(){
    	var modelAccountTypeVal = StringUtilNVL($scope.model.accountType);
    	if(modelAccountTypeVal != EMPTY_VALUE){
    		removeErrorClassElement("idAccountTypeDiv");
    	}
//    	if(modelAccountTypeVal == ACCOUNT_TYPE_POSTPAID){
//    		setMandatoryAccountType($scope, true);
//    	}else{
//    		setMandatoryAccountType($scope, false);
//    	}
    }
    
    $scope.onGenderCustomerChange = function(){
    	var modelGenderTypeVal = StringUtilNVL($scope.model.genderType);
    	if(modelGenderTypeVal != EMPTY_VALUE){
    		removeErrorClassElement("idGenderDiv");
    	}
    }
    
    $scope.onPackageTypeCustomerChange = function(){
    	var modelPackageType = StringUtilNVL($scope.model.packageType);
    	if(modelPackageType != EMPTY_VALUE){
    		removeErrorClassElement("idPackageTypeDiv");
    	}
    }
    
    $scope.onSelectedDistrictCustomer = function(){
    	var modelDistrictCustomerVal = StringUtilNVL($scope.model.districtCustomer);
    	if(modelDistrictCustomerVal != EMPTY_VALUE){
    		removeErrorClassElement("DistrictCustomerDiv");
    	}
    }
    
    
    $scope.onSelectedChangeProvinceCustomer = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.districtCustomer = "";
    	if($scope.model.provinceCustomer.proId!=""){
    		removeErrorClassElement("ProvinceCustomerDiv");
        	getListDistrictCustomer($scope.model.provinceCustomer.proId);
    	}
    }
    
	 $scope.model={};  
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	FullName: {
        		EmptyValue:true,
// isletterwithlength: true,
        		maxlengthcustom: 80
            },
            DocumentNumber: {
            	EmptyValue:true,
                requirewithoption:DOC_TYPE_CMND,
                maxlengthcustom: 15,
                minlengthwithdata: 2,
                isletterandnumber: true
            },
            DocumentIssueDate: {
            	EmptyValue:true,
                isDate:true,
                lessthancurrentdate:true,
                requiredlessthanyearcmt:MAX_YEAR_DOCUMENT
            },
            DocumentIssuePlace: {
            	EmptyValueForeignNPR:CUSTOMER_TYPE_FOREIGN,
                //minlengthcustomernpr: CUSTOMER_TYPE_FOREIGN,
                maxlengthcustom: 80,
//                isletterandnumberwithspace: true
            },
            Citizen: {
            	required: true,
            	EmptyValue:true
            },
            SubdataDNONumber:{
            	EmptyValue:true,
            	requiredNumber: true,
            	maxlengthcustom: MAX_LENGTH_SUBSCRIBER_NUMBER,
            	minlengthwithdata: MIN_LENGTH_SUBSCRIBER_NUMBER
            },
            DnoContractNumber:{
//            	EmptyValueOptions: ACCOUNT_TYPE_POSTPAID,
            	isletterandnumber: true,
            	maxlengthcustom: 15,
            	minlengthwithdata: 2
            },
            SubDNOContractDateRes:{
//            	EmptyValueOptions: ACCOUNT_TYPE_POSTPAID,
            	isDateOptions: true,
            	lessthancurrentdate:true
            },
            Email: {
                email:true,
                maxlengthcustom: 80
            },
            Address:{
            	EmptyValueForeignNPR:CUSTOMER_TYPE_FOREIGN,
            	minlengthcustomernpr: CUSTOMER_TYPE_FOREIGN,
            	maxlengthcustom: 500,
//            	isletterandnumberwithspace: true
            },
            ReprentativeName:{
//            	isletterwithlength: true,
        		maxlengthcustom: 80
            },
            RepresentativePosition: {
            },
            RepresentativeDocNumber:{
            },
            RepresentativeDocDate: {
                isDate: true,
                lessthancurrentdate:true,
                requiredlessthanyear:15
            },
            SurNameCustomer:{
            	EmptyValue:true,
//            	isletterwithlength: true,
        		maxlengthcustom: 80
            },
            NameCustomer:{
            	EmptyValue:true,
            },
			DocumentNumberCustomer:{
				EmptyValue:true,
				requirewithoption:DOC_TYPE_CMND,
				isletterandnumber: true
			},
			DocumentIssuePlaceCustomer:{
				EmptyValueForeignSubscriber: CUSTOMER_TYPE_FOREIGN,
				minlengthcustomersubscriber: CUSTOMER_TYPE_FOREIGN,
//				isletterandnumberwithspace: true
			},
			DocumentIssueDateCustomer:{
				EmptyValue:true,
                isDate:true,
                lessthancurrentdate:true,
                requiredlessthanyear: 15
			},
			CustomerBirthDay:{
				EmptyValue:true,
				isDate:true,
				requiredbirthday: true
			},
			CompanyName:{
				EmptyValueCustomer:"3",
			},
			TaxIdentificationNumber:{
				EmptyValueCustomer:"3",
			},
			AddressCustomer:{
				EmptyValueForeignSubscriber: CUSTOMER_TYPE_FOREIGN,
				minlengthcustomersubscriber: CUSTOMER_TYPE_FOREIGN,
//				isletterandnumberwithspace: true
			 },
			SubScriberCustomerNumber:{
            	EmptyValue:true,
            	requiredNumber: true,
            	maxlengthcustom: MAX_LENGTH_SUBSCRIBER_NUMBER,
            	minlengthwithdata: MIN_LENGTH_SUBSCRIBER_NUMBER
			},
	        NumberSIM:{
            	EmptyValue:true,
            	requiredNumber: true,
            	maxlengthcustom: MAX_LENGTH_SERIAL_SIM,
            	minlengthwithdata: MIN_LENGTH_SERIAL_SIM
	        }	
        },
        messages: {
        	FullName: {
        		EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.emptyvalue'),
//        		isletterwithlength: $translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.letter.required'),
        		maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.maxlength')
            },
            DocumentNumber: {
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.number.emptyvalue'),
                requirewithoption: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.number.requirewithoption'),
                maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.number.maxlength'),
                minlengthwithdata: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.number.minlength'),
                isletterandnumber:$translate.instant('vnm.mnp_message.registration.prepaid.validate.document.number.letter.required'),
            },
            DocumentIssueDate: {
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.emptyvalue'),
                isDate:  $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.isdate'),
                lessthancurrentdate: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.lessthancurrentdate'),
                requiredlessthanyearcmt: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.requiredlessthanyearcmt')
            },
            DocumentIssuePlace: {
            	EmptyValueForeignNPR: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.emptyvalue'),
            	//minlengthcustomernpr: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.minlength'),
            	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.maxlength'),
//            	isletterandnumberwithspace: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.letter.required'),
            },
	        SubdataDNONumber:{
	        	EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.emptyvalue'),
	        	requiredNumber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.required.number'),
	        	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.maxlength'),
	        	minlengthwithdata: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.minlength')
	        },
	        DnoContractNumber:{
//	        	EmptyValueOptions: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.emptyvalue'),
	        	isletterandnumber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.letter.required'),
	        	maxlengthcustom: 		   $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.maxlength'),
	        	minlengthwithdata: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.minlength'),
	        },
	        
	        SubDNOContractDateRes:{
	        	EmptyValueOptions: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.emptyvalue'),
	        	isDateOptions: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.isdate'),
	        	lessthancurrentdate: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.lessthancurrentdate')
	        },
	        
	        Email:{
	            email: 		$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.email'),
	            maxlengthcustom:  $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.email.maxlength'),
		    },
		    
            Address:{
            	EmptyValueForeignNPR: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.emptyvalue'),
                minlengthcustomernpr: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.minlength'),
                maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.maxlength'),
//                isletterandnumberwithspace : $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.letter.requried'),
	         },
	        ReprentativeName:{
//               isletterwithlength: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.name.letter.required'),
               maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.name.maxlength')
	            }, 
	        RepresentativePosition:{
	            },
            RepresentativeDocNumber:{
	            }, 
            RepresentativeDocDate:{
                isDate: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.doc.date.isdate'),
                lessthancurrentdate: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.doc.date.lessthancurrentdate'),
                requiredlessthanyear: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.doc.date.requiredlessthanyear')
	         },
            SurNameCustomer:{
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.surname.emptyvalue'),
//            	isletterwithlength: $translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.letter.required'),
            	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.maxlength'),
            },
            NameCustomer:{
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.name.emptyvalue')
            },
			DocumentNumberCustomer:{
				EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.number.emptyvalue'),
				requirewithoption: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.number.length'),
				isletterandnumber:$translate.instant('vnm.mnp_message.registration.prepaid.validate.document.number.letter.required'),
            },
			DocumentIssuePlaceCustomer:{
				EmptyValueForeignSubscriber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.place.empty'),
                minlengthcustomersubscriber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.place.minlength'),
//                isletterandnumberwithspace: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.letter.required'),
            },
			DocumentIssueDateCustomer:{
                EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.date.empty'),
                isDate: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.date.isDate'),
                lessthancurrentdate: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.date.lessthancurrentdate'),
                requiredlessthanyear: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.date.requiredlessthanyear')
            },
			CustomerBirthDay:{
				EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.birthday.empty'),
				isDate:$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.birthday.isdate'),
				requiredbirthday: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.birthday.maxminage')
            },
            CompanyName:{
            	EmptyValueCustomer: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.company.name.empty'),
            },
            TaxIdentificationNumber:{
            	EmptyValueCustomer: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.tax.code.empty'),
            },
			AddressCustomer:{
				EmptyValueForeignSubscriber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.address.empty'),
                minlengthcustomersubscriber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.address.minlength'),
//                isletterandnumberwithspace : $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.letter.requried'),
            },
			SubScriberCustomerNumber:{
				EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.emptyvalue'),
	        	requiredNumber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.required.number'),
	        	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.maxlength'),
	        	minlengthwithdata: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.minlength')
            },
			NumberSIM:{
                EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.empty'),
                requiredNumber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.number'),
                maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.maxlenth'),
                minlengthwithdata: $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.minlength')
                	
            }
	      }
	    } 
    
	 // Validate method custom
    $.validator.addMethod("requirewithoption", function (value, element, options) {
    	var valueLenght = $.trim(value.toString()).length;
    	if (StringUtilNVL($scope.model.documentType).toString() === DOC_TYPE_CMND) {
    		// check CMT nho hon 8 va nho hon 15
           if(valueLenght< MIN_LENGTH_DOC_IDENTITY_NUMBER || valueLenght> MAX_LENGTH_DOC_IDENTITY_NUMBER) {
        	   return false;
           }else{
        	   return true;
           }
        }else{
        	return true;
        }
	    	
	 }, "");
    
	 $.validator.addMethod("isletterwithlength", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(!isLetterAndSpaceUnicode(value.toString())){
				 return false;
			 }
		 }
		 return true;
	 }, "");
	 
	 $.validator.addMethod("isletterandnumber", function (value, element) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(!isLetterAndNumber(value.toString())){
				 return false;
			 }
		 }
		 return true;
	 }, "");
	 
	 $.validator.addMethod("isletterandnumberwithspace", function (value, element) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(!isLetterAndNumberWithSpace(value.toString())){
				 return false;
			 }	 
		 }
		 return true;
	 }, "");
	 
	 $.validator.addMethod("minlengthwithdata", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(valueLenght<options) return false;
		 }
		 return true;
	 }, "");
	  
	 $.validator.addMethod("minlengthcustomernpr", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(StringUtilNVL($scope.model.customerTypeNPR) != options && valueLenght < 5 ) return false;
		 return true;
	    }, "");
	 
	 $.validator.addMethod("minlengthcustomersubscriber", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(StringUtilNVL($scope.model.customerType) != options && valueLenght < 5 ) return false;
		 return true;
	    }, "");
	 
	 $.validator.addMethod("lessthancurrentdate", function (value, element) {
        if (value === "") return true;
        if($.trim(value)=="") return true;
        var today = moment();
        return (moment(today, "DD/MM/YYYY") > moment(value, "DD/MM/YYYY"));
     }, "");
	 
	 $.validator.addMethod("requiredbirthday", function (value, element ) {
	        if (value === "") return true;
	        var birthDay = moment(value, "DD/MM/YYYY")
	        var minYearBirthday = moment().add(MIN_YEAR_BIRTHDAY, 'years');
	        var maxYearBirthday = moment().add(MAX_YEAR_BIRTHDAY, 'years');
	        
	        if((birthDay > minYearBirthday) || (birthDay < maxYearBirthday)){
	        	return false;
	        }
	        return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValueOptions", function (value, element, options) {
		 if($scope.model.accountType != undefined && $scope.model.accountType == options){
		        if (value == undefined || value=="") return false;
		        if($.trim(value)=="") return false;
		 }
		 return true;
	 }, "");
	 
	 $.validator.addMethod("maxlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght >  options) return false;
		 return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValueDocumentType", function (value, element, options) {
		 if(StringUtilNVL($scope.model.documentType) == options){
		        if (value == undefined || value=="") return false;
		        if($.trim(value)=="") return false;
		 }
		 return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValueCustomer", function (value, element, options) {
		 if($scope.model.customerType == options){
		        if (value == undefined || value=="") return false;
		        if($.trim(value)=="") return false;
		 }
		 return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValueForeignNPR", function (value, element, options) {
	        var valueLenght = $.trim(value.toString()).length;
			if(StringUtilNVL($scope.model.customerTypeNPR) != options && valueLenght == 0 ) return false;
			return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValueForeignSubscriber", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(StringUtilNVL($scope.model.customerType) != options && valueLenght == 0 ) return false;
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
	 
	 $.validator.addMethod("requiredgreaterthanyear", function (value, element, options) {
	        if (value === "") return true;
	        var today = moment().add(-options, 'years');
	        return (moment(today, "DD/MM/YYYY") >= moment(value, "DD/MM/YYYY"));
	 }, "");
	    
	 $.validator.addMethod("requiredlessthanyear", function (value, element, options) {
	        if (value == undefined || value=="") return true;
	        if($.trim(value)=="") return true;
	        
	        var today = moment().add(-options, 'years');
	        return (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY"));
	  }, "");
	 
	 $.validator.addMethod("requiredlessthanyearcmt", function (value, element, options) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;
		        
		if($scope.model.documentType == DOC_TYPE_CMND || $scope.model.documentType == DOC_TYPE_THECANCUOC){
		        var today = moment().add(MAX_YEAR_DOCUMENT, 'years');
		        return (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY"));
	     }      
		 return true;
	  }, "");
	 
	  $.validator.addMethod("isDateOptions", function (value, element) {
	        if (value == undefined || value=="") return true;
	        if($.trim(value)=="") return true;
	        var valueDate = $.trim(value);
	        return moment(valueDate, 'DD/MM/YYYY',true).isValid();
	        
		}, "");
		   
	   $.validator.addMethod("isDate", function (value, element) {
			 if (value == undefined || value=="") return true;
		     if($.trim(value)=="") return true;
			 var valueDate = $.trim(value);
			 return moment(valueDate, 'DD/MM/YYYY',true).isValid();
	    }, "");
	// End Validate method custom
	   
    $scope.CitizenSource  = [
    ]; 
    
    $scope.ProvinceSource  = []; 
    
    $scope.AccountTypeDNOSource  = [
        { 'Id': 'Prepaid', 'Title': 'Trả trước' },
        { 'Id': 'Postpaid', 'Title': 'Trả sau' } 
    ];
    
    $scope.DocumentTypeSource  = [
        { 'Id': 'NPR_CMT', 'Title': 'CMND' },
        { 'Id': 'NPR_HC', 'Title': 'Hộ chiếu' },
        { 'Id': 'NPR_TCC', 'Title': 'Thẻ căn cước' },
        { 'Id': 'NPR_VISA', 'Title': 'Thị thực' },
        
        { 'Id': 'NPR_GPKD', 'Title': 'Giấy phép kinh doanh' },
        { 'Id': 'NPR_QDTL', 'Title': 'Quyết định thành lập' },
        { 'Id': 'NPR_MASOTHUE', 'Title': 'Mã số thuế' },
        
        { 'Id': 'NPR_XACNHAN_DNO', 'Title': 'Văn bản xác nhận của DNO'},
        { 'Id': 'NPR_DKCM', 'Title': 'Phiếu đăng ký chuyển mạng'},
        { 'Id': 'NPR_LOAIKHAC', 'Title': 'Loại khác'}
    ];
       
    $scope.CustomerTypeSource  = [
        { 'Id': '1', 'Title': 'Cá nhân' },
        { 'Id': '2', 'Title': 'Người nước ngoài' },
        { 'Id': '3', 'Title': 'Công ty' }
    ];
    
    $scope.GenderTypeSource  = [
        { 'Id': '0', 'Title': 'Nam' },
        { 'Id': '1', 'Title': 'Nữ' }
    ];
    
    $scope.PackageTypeSource  = [];
    $scope.model.fileAttachments = [];
  // End set data source select box
    
// UPLOADER CREATE NPR
    
    var uploader = $scope.uploader = new FileUploader({
        url: eim_url+'/bs/npr/upload'
    });
    
  // config uploader set limit queue
    
    uploader.queueLimit = 10;
    
    // Another user-defined filter set max file size
    uploader.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	
        	var sizeFile = item.size;
        	item.name = ConvertFileNameNoneUTF8(item.name);
        	if(item.name.length > MNP_MAX_FILE_NAME_UPLOAD){
        		var fileName = item.name;
        		
        		var MESS_MAX_FILE_NAME_ITEM = $translate.instant('vnm.mnp_message.registration.prepaid.validate.max.length.file.name.required'),        		
        		MESS_MAX_FILE_NAME_ITEM = MESS_MAX_FILE_NAME_ITEM.replace(/###/, setStrongLabel(fileName));
        		bootbox.alert(MESS_MAX_FILE_NAME_ITEM);
        		return false;
        	}
        	
        	/*if(sizeFile > MNP_MAX_FILE_SIZE){
        		var fileName = item.name;
        		
        		var MESS_MAX_SIZE_UPLOAD = $translate.instant('vnm.common.npr.max.file.size.required'),        		
        		MESS_MAX_SIZE_UPLOAD = MESS_MAX_SIZE_UPLOAD.replace(/###/, setStrongLabel(fileName));
        		bootbox.alert(MESS_MAX_SIZE_UPLOAD);
        		return false;
        	}*/
        	
        	if(sizeFile <= MAX_TOTAL_FILE_LENGTH_BYTE){
        		return true;
        	}else{
        		var fileName = item.name;
        		var message = MESS_MAX_SIZE_ITEM.replace(/###/, setStrongLabel(fileName));
        		
        		bootboxAlertTitle(TAB_HEADER_NPR, message);
        		
        		return false;
        	}
        }
    });
    
    uploader.onAfterAddingFile = function(item){
    	item._file.name = ConvertFileNameNoneUTF8(item.file.name);
    	item.file.name = ConvertFileNameNoneUTF8(item.file.name);
    }
    
    // check dung luong file va toi da 10 file
    uploader.onAfterAddingAll = function(items){
    	var lengthOfqueue = uploader.queue.length;
    	if(lengthOfqueue > MAX_FILE_UPLOADER){
    		bootboxAlertTitle(TAB_HEADER_NPR, MAX_FILE_UPLOAD_MESS);
    		uploader.removeFromQueue(MAX_FILE_UPLOADER);
    	}
    	
    	var checkListTotalSize = getTotalSizeListFileUpload(uploader);
    	if(!checkListTotalSize){
    		bootboxAlertTitle(TAB_HEADER_NPR, MAX_TOTAL_FILE_UPLOAD);
    		uploader.removeFromQueue(lengthOfqueue-1);
    	}
    } 
    
    // set data before upload for each item
    uploader.onBeforeUploadItem  = function(item){
    	overLoading();
    	var identityDocType = StringUtilNVL(item.documentType);
    	var identityDocNote = StringUtilNVL(item.identityDocNote);
    	
    	item.attachMentIdClient = createTimeStamp();
    	var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);
    	
    	// set token
        item.headers = {
	       Authorization: 'Bearer '+ $localStorage.clientContext.token
	     };
        
        var form_data = new FormData();
        form_data.append("identityDocType", identityDocType);
        form_data.append("identityDocNote", identityDocNote);
        form_data.append("attachMentIdClient", attachMentIdClient);
        
        var fileNameInput = ConvertFileNameNoneUTF8(item._file.name);
        form_data.append("fileNameInput", fileNameInput);
        
    	item.formData.push(form_data);
    }
    
    // on item upload success
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
    	$scope.model.fileAttachments.push(response);
    };
    
    // on item upload error
    uploader.onErrorItem = function (fileItem, response, status, headers) {
    	closeOverLay();
    	bootbox.alert(UPLOAD_FILE_ERROR);
    }
    
    $scope.uploadAllFile =  function(uploaderIn){
    	overLoading(messageUploading);
    	checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
    	if(!checkListTotalSize){
    		bootboxAlertTitle(TAB_HEADER_NPR, MESS_TOTAL_SIZE_ERROR);
    		
    		closeOverLay();
    		return 0;
    	}else{
    		uploaderIn.uploadAll();	
    		uploaderIn.onCompleteAll = function () {
    			 closeOverLay();
    		 }
    	}
    }
    
    //check attachment upload by required fileType
    //return true if file with type in uploader
    $scope.checkAttachMentUploadByType = function(uploader, fileType){
    	var resultCheck = false;
    	for(var i = 0; i < uploader.queue.length; i ++){
    		if(uploader.queue[i].documentType == fileType){
    			resultCheck = true;
    			break;
    		}
    	}
    	return resultCheck;
    }
    
  // remove element in list post to server by item
    $scope.removeElementAttachmenByItem =  function(item){
    	angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
    	   if(objectAttact.attachMentIdClient == item.attachMentIdClient){
    	        $scope.model.fileAttachments.splice(index,1);   
    	   }
    	});
    	
    	item.remove();
    }
    
  // remove element in list post to server by item
    $scope.removeElementAttachmenById =  function(listFileAttach, idAttachMent){
    	// $scope.model.fileAttachments
    	angular.forEach( listFileAttach, function(objectAttact, index){
    	   if(objectAttact.attachMentIdClient == idAttachMent){
    		   listFileAttach.splice(index,1);   
    	   }
    	});
    }
    
    $scope.removeAllItem =  function(){
    	$scope.model.fileAttachments = [];
    	uploader.clearQueue()
    }
    
    $scope.changeStatusFile =  function(item){
    }
// END UPLOADER CREATE NPR

    var idAttachMentVal = null;
    var idAttachMentTypeInput = null;
    
    var uploaderCustomer = $scope.uploaderCustomer = new FileUploader({
        url: eim_url+'/bs/npr/uploadImage'
    });
    
    $scope.model.fileAttachmentsCustomer = [];
    uploaderCustomer.queueLimit = 11;
    
    uploaderCustomer.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	
        	var sizeFile = item.size;
        	if(sizeFile <=1048576){
        		return true;
        	}else{
        		return false;
        	}
        }
    });
    
    // check dung luong file va toi da 11 file
    uploaderCustomer.onAfterAddingAll = function(items){
    	
    } 
    
    uploaderCustomer.onErrorItem = function (fileItem, response, status, headers) {
		if(response!= undefined && response!=null){
			if(response.code == "FILE_IMAGE_CONTENT_ERROR"){
				var fileName = response.messages;
				var message  = $translate.instant('vnm.messages.validate.prepaid.server.PREPAID-FILE-CONTENT-ERROR');
				message = message.replace(/###/, fileName);
				bootbox.alert(message);
			}
		}else{			
			bootbox.alert($translate.instant('vnm.mnp_message.common.upload.file.error'));
		}
	}
    
    uploaderCustomer.onBeforeUploadItem  = function(item){
    	overLoading();
    	var identityDocType = StringUtilNVL(item.documentType);
    	var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);

    	// set token
        item.headers = {
	       Authorization: 'Bearer '+ $localStorage.clientContext.token
	     };
        
        var form_data = new FormData();
        form_data.append("identityDocType", identityDocType);
        form_data.append("attachMentIdClient", attachMentIdClient);
        
        var fileNameInput = ConvertFileNameNoneUTF8(item._file.name);
        form_data.append("fileNameInput", fileNameInput);
        
    	item.formData.push(form_data);
    } 
    
    uploaderCustomer.onSuccessItem = function (fileItem, response, status, headers) {
        $scope.model.fileAttachmentsCustomer.push(response);
    }
    
    uploaderCustomer.onAfterAddingFile = function(item){
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
    
    // update note and type of attachment npr
    $scope.updateListAttachMent = function(uploaderInput, listAttachMents){
    	for(var i =0; i< uploaderInput.queue.length; i++){
    		var item = uploaderInput.queue[i];
    		var documentType = item.documentType;
    		var documentNote = item.identityDocNote;
    		if(item.isSuccess){
    			var attachMentIdClient = item.attachMentIdClient;
    			setValueAttachMentList(listAttachMents, attachMentIdClient,documentType, documentNote);
    		}
    	}
    }
    
    // get attachemnet and set note and type by attachment id
    function setValueAttachMentList(listAttachMents, attachMentIdClientInput,
    		attachmentTypeInput, attachNoteInput){
    	for(var i =0; i<listAttachMents.length; i ++){
    		var attachMentID = listAttachMents[i].attachMentIdClient;
    		if(attachMentID == attachMentIdClientInput){
    			listAttachMents[i].attachmentType = attachmentTypeInput;
    			listAttachMents[i].note = attachNoteInput;
    		}
    	}
    }
    
    $scope.searchDataPortIn = function() {
    	
    	if( $scope.modelSearch.searchMdn !=null && $scope.modelSearch.searchMdn!= undefined && $scope.modelSearch.searchMdn != ''){
    		var isMdmNumber = isNumbericInteger($scope.modelSearch.searchMdn);
        	if(!isMdmNumber){
        		bootbox.alert($translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.required.number'));
        		return;
        	}
        	
    		if($scope.modelSearch.searchMdn.length>MIN_LENGTH_SUBSCRIBER_NUMBER){
    			bootbox.alert($translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.maxlength'));
    			return;
    		}
    	}
    	
		var searchInput = {
				"mdn" : $scope.modelSearch.searchMdn,
				"name" : $scope.modelSearch.searchName,
				"docType" : $scope.modelSearch.documentTypeSearch,
				"docNumber" : $scope.modelSearch.searchCardId,
				"shopId" : $localStorage.clientContext.shopId,
		};
		
		overLoading("searching...");
    	prepaidBundle.search(searchInput, function(result) {
    		closeOverLay();
    		if(result.code == 'ERROR_PREPAID_BUNDLE'){
    			var textMessage = "";
    			for(var i =0; i< result.listResult.length; i++){
       				textMessage += result.listResult[i] + BREAK_LINE; 
    			}
    			bootbox.alert(textMessage);
    			return;
    		}
    		
			if(result.length > 0){
				$scope.searchResult = result;
				$scope.tableInfoCusSub = new NgTableParams({}, {
					dataset : result
				});
				$scope.itemCusSubSelected = result[0];
				$scope.getInfoCusSub($scope.itemCusSubSelected);
				App.unblockUI("#contentMain");
			}
			else {
				App.unblockUI("#contentMain");
				bootbox.alert("Không tìm thấy dữ liệu!");
			}
		});
    }
    
    $scope.itemCusSubSelected = null;
    $scope.getInfoCusSub = function(item) {
    	
    	$scope.resetAllFormPrepaid($scope);
    	$scope.itemCusSubSelected = item;
    	
    	$scope.model.fullName = item.fullName;
    	$scope.model.documentIssueDate = item.dateOfIssue;
    	$scope.model.documentIssuePlace = item.placeOfIssue;
    	$scope.model.customerTypeNPR = item.customerType;
    	if ($scope.model.documentType == '06') {
    		$scope.model.documentNumber = item.taxCode;
    		$scope.model.documentNumberCustomer = item.taxCode;
    	} if ($scope.model.documentType == '03') {
    		$scope.model.documentNumber = item.idCard;
    		$scope.model.documentNumberCustomer = item.idCard;
    	} else {	
    		$scope.model.documentType = '01';
    		$scope.model.documentNumber = item.idCard;
    		$scope.model.documentNumberCustomer = item.idCard;
    	}
    	$scope.model.citizen = item.country
    	$scope.model.email = '';
    	$scope.model.address = item.address;

    	for (var i=0; i<$scope.ProvinceSource.length; i++) {
    		if ($scope.ProvinceSource[i].provinceName == item.province) {
    			$scope.model.province = $scope.ProvinceSource[i];
    			$scope.model.provinceCustomer = $scope.ProvinceSource[i];
    			var url =eim_url+"/bs/SourceDistrict?provinceId="+$scope.ProvinceSource[i].proId;
    			 $http.get(url).success(function (data){
    					$scope.DistrictSource = data;
    					for (var i=0; i<$scope.DistrictSource.length; i++) {
    			    		if ($scope.DistrictSource[i].districtName == item.district) {
    			    			$scope.model.district = $scope.DistrictSource[i];
    			    			$scope.model.districtCustomer = $scope.DistrictSource[i];
    			    			break;
    			    		}
    			    	}
    			 }).error(function (response){
    				bootbox.alert("Không tìm thấy dữ liệu!");
    			 });
    			break;
    		}
    	}
    	
    	$scope.model.customerType = item.customerType
    	$scope.model.surnameCustomer = item.lastName;
    	$scope.model.nameCustomer = item.firstName;
    	$scope.model.documentIssuePlaceCustomer = item.placeOfIssue;
    	$scope.model.documentIssueDateCustomer = item.dateOfIssue;
    	$scope.model.customerBirthDay = item.dob;
    	$scope.model.genderType = item.gender;
    	for (var i=0; i<$scope.CitizenSource.length; i++) {
    		if ($scope.CitizenSource[i].countryName == item.country) {
    			$scope.model.citizenCustomer = $scope.CitizenSource[i];
    			$scope.model.citizen = $scope.CitizenSource[i];
    			removeErrorClassElement("idCitizenDiv");
				removeErrorClassElement("CitizenCustomerDiv");
    			break;
    		}
    	}
    	$scope.model.companyName = item.companyName;
    	$scope.model.taxIdentificationNumber = item.taxCode;
    	$scope.model.addressCustomer = item.address;
//    	$scope.model.subDataNumber = item.mdn;
    	$scope.model.numberSIM = item.serial;
    	for (var i=0; i<$scope.PackageTypeSource.length; i++) {
    		if ($scope.PackageTypeSource[i].value == item.cos) {
    			$scope.model.packageType = $scope.PackageTypeSource[i].value;
    			break;
    		}
    	}
    	
    	//get image in db
    	$scope.getImageById(item);
    	
    }
    
    function resetImg($scope){
    	$scope.cust_img = "";
    	$scope.contract_img2_Body = "";
    	$scope.contract_img1_Body = "";
    	$scope.authorized_img_Body = "";
    	$scope.bus_permit_no_img1_Body = "";
    	$scope.img_imgId = "";
    	$scope.imgID_2_Body = "";
    	$scope.fileBody = "";
    	$scope.file_id_2_Body = "";
    	$scope.contract_img2_Body_SUB = "";
    	$scope.contract_img1_Body_SUB = "";
    	
		uploaderCustomer.clearQueue();
		$scope.resetAllImagePreview()
    }
    
    function dataURLtoFile(dataurl, filename) {
    	var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    	    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    	    while(n--){
    	        u8arr[n] = bstr.charCodeAt(n);
    	    }
    	    return new File([u8arr], filename, {type:mime});
    }
    
    $scope.getImageById = function(itemData){
    	prepaidBundle.openViewIMGChangeService(itemData, function(result) {
			// closeOverLay();
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				var iTime = 0;
				
				//ảnh cmt mặt 1
				if(result.imgId != "" && result.imgId != null){
					iTime = iTime+2;
					
					$scope.img_imgId = result.imgId;
					var dataFileImgId = 'data:image/png;base64, ' +$scope.img_imgId;
					var fileImgId = dataURLtoFile(dataFileImgId, 'Anh_CMT1.png');

					idAttachMentVal = createTimeStamp() + iTime;
					idAttachMentTypeInput = 'CUS_CMT1';
					
			    	fileImgId.attachMentIdClient = createTimeStamp();
					$scope.uploaderCustomer.addToQueue(fileImgId);
				}
				
				//ảnh cmt mặt 2
				if(result.imgId2 != "" && result.imgId2 != null){
					iTime = iTime+2;
					$scope.imgID_2_Body = result.imgId2;
					var dataFileImgId = 'data:image/png;base64, ' +$scope.imgID_2_Body;
					var fileImgId = dataURLtoFile(dataFileImgId, 'Anh_CMT2.png');

					idAttachMentVal = createTimeStamp()+ iTime;
					idAttachMentTypeInput = 'CUS_CMT2';
					
			    	fileImgId.attachMentIdClient = createTimeStamp();
					$scope.uploaderCustomer.addToQueue(fileImgId);
				}
				
				//ảnh kh
				if(result.custImg != "" && result.custImg != null){
					iTime = iTime+2;
					$scope.cust_img = result.custImg;
					var dataFileImgId = 'data:image/png;base64, ' +$scope.cust_img;
					var fileCusImg = dataURLtoFile(dataFileImgId, 'Anh_KH.png');
					
					idAttachMentVal = createTimeStamp()+ iTime;
					idAttachMentTypeInput = 'CUS_KH';
					
					fileCusImg.attachMentIdClient = createTimeStamp();
					$scope.uploaderCustomer.addToQueue(fileCusImg);
				}
				
				//ảnh gấy ủy quyền
				if(result.authorizedImg != "" && result.authorizedImg != null){
					iTime = iTime+2;
					$scope.authorized_img_Body = result.authorizedImg;
					var dataFileImgId = 'data:image/png;base64, ' +$scope.authorized_img_Body;
					var fileCusImg = dataURLtoFile(dataFileImgId, 'Anh_GUQ.png');
					
					idAttachMentVal = createTimeStamp()+ iTime;
					idAttachMentTypeInput = 'CUS_GUQ';
					
					fileCusImg.attachMentIdClient = createTimeStamp();
					$scope.uploaderCustomer.addToQueue(fileCusImg);
				}
				
				//Ảnh GPKD
				if(result.busPermitNoImg1 != "" && result.busPermitNoImg1 != null){
					iTime = iTime+2;
					$scope.bus_permit_no_img1_Body = result.busPermitNoImg1;
					var dataFileImgId = 'data:image/png;base64, ' +$scope.bus_permit_no_img1_Body;
					var fileCusImg = dataURLtoFile(dataFileImgId, 'Anh_GPKD.png');
					
					idAttachMentVal = createTimeStamp()+ iTime;
					idAttachMentTypeInput = 'CUS_GPKD';
					
					fileCusImg.attachMentIdClient = createTimeStamp();
					$scope.uploaderCustomer.addToQueue(fileCusImg);
				}
				
				//ảnh hợp đồng 1
				if(result.contractImg1 != "" && result.contractImg1 != null){
					iTime = iTime+2;
					$scope.contract_img1_Body = result.contractImg1;
					var dataFileImgId = 'data:image/png;base64, ' +$scope.contract_img1_Body;
					var fileImgId = dataURLtoFile(dataFileImgId, 'Anh_HD1.png');

					idAttachMentVal = createTimeStamp()+ iTime;
					idAttachMentTypeInput = 'CUS_HD1';
					
			    	fileImgId.attachMentIdClient = createTimeStamp();
					$scope.uploaderCustomer.addToQueue(fileImgId);
				}
				
				//ảnh hợp đồng 2
				if(result.contractImg2 != "" && result.contractImg2 != null){
					iTime = iTime+2;
					
					$scope.contract_img2_Body = result.contractImg2;
					var dataFileImgId = 'data:image/png;base64, ' +$scope.contract_img2_Body;
					var fileImgId = dataURLtoFile(dataFileImgId, 'Anh_HD2.png');
			    	
			    	idAttachMentVal = createTimeStamp()+ iTime;
					idAttachMentTypeInput = 'CUS_HD2';
					
			    	fileImgId.attachMentIdClient = createTimeStamp();
					$scope.uploaderCustomer.addToQueue(fileImgId);
				}
				
			}

		});
    }
    $scope.onclickConfirmSave = function(){
    	bootboxConfirm(PREPAID_NPR_HEADER, CONFIRM_MESSAGE_PORT_IN, $scope.confirmOK, $scope.confirmKO);
    }
    
    $scope.save = function () {
    	
    var isFormValidated = validateAllForm($scope, $translate);
    if ($scope.frm_registration_prepaid.validate() && isFormValidated) {
    	var checkFileCustomerAlreadyUpload = false;
    	
    	var checkTotalFileSize = false;
    	var checkAllFileUploaded = false;
    	
    	var checkAllFileFileCustomerUploaded = false;
    	var checkAllFileCustomerUploaded = false;
    	    	
    	// check thong tin file thong tin khach hang
    	if(uploaderCustomer.queue.length==0){
    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_CUS, MESS_CUS_IMAGE_REQUIRED));
    		checkFileCustomerAlreadyUpload = false;
    		return 0;
    	}else{
    		checkFileCustomerAlreadyUpload = true;
    	}
    	
    	// check size list upload dkcm
    	checkListTotalSize = getTotalSizeListFileUpload(uploader);
    	if(!checkListTotalSize){
    		bootboxAlertTitle(TAB_HEADER_NPR, MESS_TOTAL_SIZE_ERROR);
    		checkTotalFileSize = false;
    		return 0;
    	}else{
    		checkTotalFileSize = true;
    	}
    	
      	var accountType = StringUtilNVL($scope.model.accountType);
    	
    	var customerType = StringUtilNVL($scope.model.customerType);
    	var typeOfCustomerError = checkTypeDocUploadRequireCustomer(uploaderCustomer,customerType);
    	
    	if(typeOfCustomerError ==PRIVATE_TYPE_DOC_ERROR){   		
    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_CUS, PRIVATE_CUSTOMER_TYPE_ERROR_MESS));
    		return false;
    		
    	}else if(typeOfCustomerError == FOREIGN_TYPE_DOC_ERROR){
    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_CUS, FOREIGN_CUSTOMER_TYPE_ERROR_MESS));
    		return false;
    		
    	}else if(typeOfCustomerError == COMPANY_TYPE_DOC_ERROR){
    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_CUS, COMPANY_CUSTOMER_TYPE_ERROR_MESS));
    		return false;
    	}
    	
    	if(customerType == CUSTOMER_TYPE_PRIVATE || customerType == CUSTOMER_TYPE_FOREIGN){
    		var documentNumber = StringUtilNVL($scope.model.documentNumberCustomer);
    		checkCustomerExistInSystem(documentNumber);
    	}else{
    		var taxCode = StringUtilNVL($scope.model.taxIdentificationNumber);
    		checkCustomerCompanyExistInSystem(taxCode);
    	}
    }
  }
  
  $scope.uploadFileBeforeCreatedNPR = function(){
		var checkFileAllisUploaded = true;
	  	if(uploader.queue.length > 0){
	  		checkFileAllisUploaded = checkAllFileOfQueueUploaded(uploader);
	  	}
  		var checkFileAllisUploadedCus = checkAllFileOfQueueUploaded(uploaderCustomer);
  	
  		if (checkFileAllisUploaded == false && checkFileAllisUploadedCus == false) {
	   		 // call only uploader 1: uploaderCustomer is in success
				// uploader1
  		uploadAllItemByList(uploader);
  		
	     }else if(checkFileAllisUploaded == false && checkFileAllisUploadedCus != false){
	    	 uploadAllItemByList(uploader);
	    	 
	     }else if(checkFileAllisUploaded != false && checkFileAllisUploadedCus == false){
	    	 uploadAllItemByList(uploaderCustomer);
	    	 
	     }else{
	    	 $scope.prepareCreateNPR();	
	     }
  	
	   	 // check all file in create npr uploaded
      	uploader.onCompleteAll = function () {
         	var checkFileAllisUpload = checkAllFileOfQueueUploaded(uploader);
         	if(!checkFileAllisUpload){
         		checkAllFileUploaded = false;
         		bootbox.alert(UPLOAD_FILE_ERROR);
         		closeOverLay();
         		return 0;
         	}else{
         		var checkFileAllisUploadedCus = checkAllFileOfQueueUploaded(uploaderCustomer);
         		if(checkFileAllisUploadedCus == true){
             			$scope.prepareCreateNPR();	
             		}
         		uploadAllItemByList(uploaderCustomer);
             		checkAllFileUploaded = true;
             		closeOverLay();
         	}
       };
       
      // check all file in customer uploaded
  	uploaderCustomer.onCompleteAll = function () {
  		var checkFileCustomerAllisUpload = checkAllFileOfQueueUploaded(uploaderCustomer);
         	if(!checkFileCustomerAllisUpload){
         		checkAllFileCustomerUploaded = false;
         		bootbox.alert(UPLOAD_FILE_ERROR);
         		closeOverLay();
         		return 0;
         	}else{
         		checkAllFileCustomerUploaded = true;
         		$scope.prepareCreateNPR();
         	}
     };
  }
  
  $scope.prepareCreateNPR = function (){
    	overLoading();
    	
    	var checkFileAllisUpload = checkAllFileOfQueueUploaded(uploader);
    	var checkFileAllisUpload2 = checkAllFileOfQueueUploaded(uploaderCustomer);
    	if(!checkFileAllisUpload || !checkFileAllisUpload2){
       		closeOverLay();
       		bootbox.alert(UPLOAD_FILE_ERROR);
    		return 0;
    	}
    	var msisdnIn = StringUtilNVL($scope.model.subDataNumber);
    	
      	var countryNameNPR = StringUtilNVL(checkModelVisible($scope.model.citizen)?"": 
    		StringUtilNVL($scope.model.citizen.countryName));
    	
    	var districtNPR = StringUtilNVL(checkModelVisible($scope.model.district)?"": 
    		StringUtilNVL($scope.model.district.districtName));
    	
    	var provinceNPR = StringUtilNVL(checkModelVisible($scope.model.province)?"": 
    		StringUtilNVL($scope.model.province.provinceName));
    	
    	var districtCustomer = StringUtilNVL(checkModelVisible($scope.model.districtCustomer)?"": 
    		StringUtilNVL($scope.model.districtCustomer.districtName));
    	
    	var provinceCustomer = StringUtilNVL(checkModelVisible($scope.model.provinceCustomer)?"": 
    		StringUtilNVL($scope.model.provinceCustomer.provinceName));
    	
    	var countryNameCustomer = StringUtilNVL(checkModelVisible($scope.model.citizenCustomer)?"": 
    		StringUtilNVL($scope.model.citizenCustomer.countryName));
    	
    	$scope.model.receipient = RECEIPIENT_VNM;
    	$scope.updateListAttachMent(uploader, $scope.model.fileAttachments);
    	var provisioningCustomerInfor = {
    			"address" : StringUtilNVL($scope.model.addressCustomer),
    			"birthday" : StringUtilNVL($("#CustomerBirthDay").val()),
    			"companyName" : StringUtilNVL($scope.model.companyName),
    			"district" : districtCustomer,				
    			"province" : provinceCustomer,
				"country": countryNameCustomer,
				"customerType": StringUtilNVL($scope.model.customerType),
    			"gender" : StringUtilNVL($scope.model.genderType),
				"docIssueDate" :StringUtilNVL($("#DocumentIssueDateCustomer").val()),
				"docIssuePlace" : StringUtilNVL($scope.model.documentIssuePlaceCustomer),
				"docNumber" : StringUtilNVL($scope.model.documentNumberCustomer),
				"name": StringUtilNVL($scope.model.nameCustomer),
				"surname": StringUtilNVL($scope.model.surnameCustomer),
				"taxIdentificationNumber" : StringUtilNVL($scope.model.taxIdentificationNumber),
				"shopCode": $scope.shopCode,
    			"staffId":  $scope.staffId,
    			"shopId" : $scope.shopId
    		 }
    	
    	var violationInfo = {
		    	"msisdn" : msisdnIn,
		    	"packageType" : StringUtilNVL($scope.model.packageType),
		    	"primary" : "Y",
		    	"serialSim" : StringUtilNVL($scope.model.numberSIM),
		    	"subscriberName": getNameSubscriber($scope.model.surnameCustomer, $scope.model.nameCustomer),
		    	"customerType": StringUtilNVL($scope.model.customerType),
		    	"accountType": StringUtilNVL($scope.model.accountType)
    	}
    	
    	var provisioningSubscriberInfo = {
		    	"msisdn" : msisdnIn,
		    	"packageType" : StringUtilNVL($scope.model.packageType),
		    	"primary" : "Y",
		    	"serialSim" : StringUtilNVL($scope.model.numberSIM),
		    	"subscriberName": getNameSubscriber($scope.model.surnameCustomer, $scope.model.nameCustomer),
		    	"customerType": StringUtilNVL($scope.model.customerType),
		    	"accountType": StringUtilNVL($scope.model.accountType),
		    	"accountTypeDNO": StringUtilNVL($scope.model.accountType)
    	}

    	nprFormDataInput = {
    			"accountType"  : StringUtilNVL($scope.model.accountType),
    			"comments"  : StringUtilNVL($scope.model.comments),
    			"country"  : countryNameNPR ,
    			"district"  : districtNPR,
    			"donor" :StringUtilNVL($scope.model.donor) ,
    			"province"  : provinceNPR ,
    			"receipient" : StringUtilNVL($scope.model.receipient) ,
    			"subType"  : StringUtilNVL($scope.model.customerTypeNPR),
    			"subdataAddress"  : StringUtilNVL($scope.model.address),
    			"subdataContactNumber"  : msisdnIn,
    			"subdataDnoContractDateRes"  : StringUtilNVL($("#subDNOContractDateRes").val()) ,
    			"subdataDnoContractNumber"  : StringUtilNVL($scope.model.dnoContractNumber),
    			"subdataDocIssueDate"  : StringUtilNVL($("#documentIssueDate").val()),
    			"subdataDocIssuePlace"  : StringUtilNVL($scope.model.documentIssuePlace),
    			"subdataDocNumber"  : StringUtilNVL($scope.model.documentNumber),
    			"subdataDocType"  : StringUtilNVL($scope.model.documentType),
    			"subdataEmail"  : StringUtilNVL($scope.model.email),
    			"subdataNprRegistrationName"  : StringUtilNVL($scope.model.fullName),
    			"subdataRepDocNumber"  :  StringUtilNVL($scope.model.representativeDocNumber),
    			"subdataRepIssueDate"  : StringUtilNVL($("#RepresentativeDocDate").val()) ,
    			"subdataRepPosition"  : StringUtilNVL($scope.model.representativePosition),
    			"subdataSubReprentative"  : StringUtilNVL($scope.model.reprentativeName),
    			"subdataSubscriberName"  : StringUtilNVL($scope.model.fullName),
    			"attachmentData"  : $scope.model.fileAttachments ,
    			"attachmentDataCustomer"  : $scope.model.fileAttachmentsCustomer ,
    			"nprSubscribers"  : [violationInfo] ,
    			"provisioningCustomerInfos"  : [provisioningCustomerInfor] ,
    			"provisioningSubscriberInfos"  : [provisioningSubscriberInfo]
    	};
    	
    	checkSubscriberNumberIsActiveInEpos(msisdnIn);
    }
  
  	$scope.confirmOK = function(){
  		$scope.save();
  	}
  	
  	$scope.confirmCreateNPROK = function(){
  		$scope.uploadFileBeforeCreatedNPR();
  	}
  	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.isImage = function(ext) {
		if (ext) {
			return ext.toUpperCase() == "JPG" || ext.toUpperCase() == "PNG";
		}
	}
    
	$scope.uploadedFilePreview = function(element, imagePreview, fileExt, attachMentIdIn, attachMentType) {
		
		var idRemove = $("#"+attachMentIdIn).val();
		var attachMentType = $("#"+attachMentType).val();
		
		$scope.$apply(function($scope) {
			$scope.files = element.files;
			if ($scope.files[0] == undefined) return;
			
			removeItemQueueById(uploaderCustomer, idRemove);
			
			var sizeFile = $scope.files[0].size;
			var fileName = $scope.files[0].name;
			
        	if(sizeFile > MAX_FILE_LENGTH){
        		var message = MESS_MAX_SIZE_IMAGE_ITEM.replace(/###/, setStrongLabel(fileName));
        		bootboxAlertTitle(TAB_HEADER_CUS, message);
        		
        		return false;
        	}
        	
			var fileExtValue = fileName.split(".").pop();
			
			$scope.model[fileExt] = fileExtValue;
			
			// create id imange in queue uploader
			idAttachMentVal = "";
			idAttachMentTypeInput = "";
			
			idAttachMentVal = createTimeStamp();
			idAttachMentTypeInput = attachMentType;
			
			$("#"+attachMentIdIn).val(idAttachMentVal);
			
			// icon preview
				var fileReader = new FileReader();
				$scope.model[imagePreview] = null;
				fileReader.readAsDataURL(document
						.getElementById(element.id).files[0]);
				
				fileReader.onload = function(oFREvent) {
					$timeout(function() {
						$scope.model[imagePreview] = oFREvent.target.result;
					});
				};
			});
	}
		
	$scope.deleteImage = function(idFileImange, imageExtId, idRemoveIn) {
		// remove file image by id
		$("#"+idFileImange).val("");
		// remove image preview
		$scope.model[imageExtId]=null;
		var idRemoveVal = $("#"+idRemoveIn).val();
		removeItemQueueById(uploaderCustomer,idRemoveVal);
		$scope.removeElementAttachmenById($scope.model.fileAttachmentsCustomer, idRemoveVal);
	}
	
	$scope.resetAllImagePreview = function(){
		$("#btnFileUploadCMT1").val("");
		$("#btnFileUploadCMT2").val("");
		$("#btnFileUploadHD1").val("");
		
		$("#btnFileUploadHD2").val("");
		$("#btnFileUploadGPKD").val("");
		$("#btnFileUploadKH").val("");
		
		$("#btnFileUploadHS1").val("");
		$("#btnFileUploadHS2").val("");
		$("#btnFileUploadGUQ").val("");
		
		$("#btnFileUploadSUB_HD1").val("");
		$("#btnFileUploadSUB_HD2").val("");
		
	}
	
	$scope.copyValueToOtherInput = function(elementModel, elementModelDepen) {
		$scope.model[elementModelDepen] = $scope.model[elementModel];
	};
	
	$scope.copyValueDocumentType = function() {
		$scope.model.documentNumberCustomer = "";
		$scope.model.taxIdentificationNumber = "";
		
		var documentType = StringUtilNVL($scope.model.documentType);
		
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			if(documentType == DOC_TYPE_MASOTHUE){
				$scope.model.taxIdentificationNumber = $scope.model.documentNumber;
			}
		}
		
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE || customerTypeNPR == CUSTOMER_TYPE_FOREIGN){
			$scope.model.documentNumberCustomer = $scope.model.documentNumber;
		}
		
	};
	
	$scope.copyValueByCustomerType = function(elementModel, elementModelDepen) {
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE || customerTypeNPR == CUSTOMER_TYPE_FOREIGN){
			$scope.model[elementModelDepen] = $scope.model[elementModel];
		}
	};
	
	$scope.onChangeValueByCustomerType = function(){
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE || customerTypeNPR == CUSTOMER_TYPE_FOREIGN){
			$scope.model.documentIssueDateCustomer = $scope.model.documentIssueDate;
			$scope.model.documentIssuePlaceCustomer = $scope.model.documentIssuePlace;
		}else if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			$scope.model.documentIssueDateCustomer = "";
			$scope.model.documentIssuePlaceCustomer = "";
		
		}
	}
    
	$scope.$watch('model.documentIssueDate', function() {
    	$scope.model.documentIssueDateCustomer = $scope.model.documentIssueDate;
	});
    
	$scope.copyNameCustomer = function() {
		$scope.model.companyName = "";
		$scope.model.surnameCustomer = "";
		$scope.model.nameCustomer = "";
		
		if(StringUtilNVL($scope.model.customerTypeNPR) == CUSTOMER_TYPE_COMPANY){
			$scope.model.companyName = $scope.model.fullName;
			var objectName = separateName(StringUtilNVL($scope.model.reprentativeName));
			
			$scope.model.surnameCustomer = objectName.firstName;
			$scope.model.nameCustomer = objectName.lastName;
		}else if(StringUtilNVL($scope.model.customerTypeNPR) == CUSTOMER_TYPE_PRIVATE
				|| StringUtilNVL($scope.model.customerTypeNPR) == CUSTOMER_TYPE_FOREIGN){
			var objectName = separateName(StringUtilNVL($scope.model.fullName));
			
			$scope.model.surnameCustomer = objectName.firstName;
			$scope.model.nameCustomer = objectName.lastName;
		}
	};
	
	$scope.showAlert = function(idModal, message){
		$('#'+idModal).modal('show');
		$("#messageInfo").text(message);
	}
	
	$scope.showAlertConfirm = function(idModal, message){
		$('#'+idModal).modal('show');
		$("#messageInfoConfirm").text(message);
	}
	
	$scope.showAlertList = function(idModal, messageInfoHeader){
		$('#'+idModal).modal('show');
		
		$("#messageInfoHeader").html("<strong>"+messageInfoHeader+"</strong>");
	}
	
	$scope.imgZoom = function(event) {
		$('.imagepreviewZoom').attr('src', $(event)[0].target.src);
		$('#imagemodal').modal('show');   
	}
	
	$scope.resetAllFormPrepaid = function($scope){
		$scope.model = {};
		$scope.listMessage = [];
		$scope.model.fileAttachments = [];
		$scope.model.fileAttachmentsCustomer = [];
		$scope.DistrictSource = [];
		$scope.DistrictSourceCustomer = [];
		uploader.clearQueue();
		uploaderCustomer.clearQueue();
		$scope.resetAllImagePreview();
		resetImg($scope);
		$scope.itemCusSubSelected = null;
	}
	
	$scope.bootboxAlertReloadPage = function(title, message){
		bootbox.alert({ 
			  size: "medium",
			  title: title,
			  message: message, 
			  callback: function(){ 
				  $scope.resetAllFormPrepaid($scope);
				 }
			})
		}
	
});


function overLoading(message){
	App.blockUI({
		message: message
	});
	$(".blockOverlay").css("background-color", "#000000");
	$(this).css("opacity", "1");
}

function closeOverLay(){
	$.unblockUI();
}

function  getNameSubscriber(firstName, lastName){
	var result = StringUtilNVL(firstName)+" "+StringUtilNVL(lastName);
	return result;
}


// check all item in queue success :
// + false when all file not upload success
// + true when all file upload success
function checkAllFileOfQueueUploaded(uploaderIn){
	var checkFileAllisUpload = true;
	
// if(uploaderIn.queue.length == 0){
// checkFileAllisUpload = false;
// }
	
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
		var itemStatus = item.isSuccess;
		if(!itemStatus){
			checkFileAllisUpload = false
			break;
		}
	}
	return checkFileAllisUpload;
}

// upload all item by list
function uploadAllItemByList(uploaderIn){
	var checkFileAllisUpload = true;
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
		var itemStatus = item.isSuccess;
		if(!itemStatus){
			item.upload();
		}
	}
}

// get total size of list file upload
// return false if total file in queue greater than 10MB
// else return true
function getTotalSizeListFileUpload(uploaderIn){
	var listFileTotalSizeByte = 0;
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
		var fileSize = item.file.size;
		listFileTotalSizeByte += fileSize;
	}
	var listFileTotalSizeMB = listFileTotalSizeByte/1024/1024;
	if(listFileTotalSizeMB > MAX_TOTAL_FILE_LENGTH_MEGABYTE){
		return false;
	}
	
	return true;
}

// remove file in queue by id
function removeItemQueueById(uploader, attachMentIdClient){
	var checkFileAllisUpload = true;
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		if(item.attachMentIdClient == attachMentIdClient){
			item.remove();	
		}
	}
}

// validate file upload by customer type
function checkTypeDocUploadRequireCustomer(uploaderIn, typeCustomer){
	
	var listFileDocType = getListFileDocumentType(uploaderIn);
	
	var checkFileHS1 = $.inArray(TYPE_IMG_HS1, listFileDocType)> SELECT_NONE_INDEX;
	var checkFileHS2 = $.inArray(TYPE_IMG_HS2, listFileDocType)> SELECT_NONE_INDEX;
	
	var isFileHSSelected = false;
	if(checkFileHS1 == true || checkFileHS2 == true){
		isFileHSSelected = true;
	}
	
	// check cutomer is individual
	if(typeCustomer == CUSTOMER_TYPE_PRIVATE){
		// check if document type CMT1 AND KH1
		var checkPrivateCMT1 = $.inArray(TYPE_IMG_CMT1, listFileDocType)> SELECT_NONE_INDEX;
		var checkPrivateKH = $.inArray(TYPE_IMG_KH, listFileDocType)> SELECT_NONE_INDEX;
		
		if(checkPrivateKH == false || checkPrivateCMT1 == false || isFileHSSelected == false){
			return PRIVATE_TYPE_DOC_ERROR;
		}
	}
	
	if(typeCustomer == CUSTOMER_TYPE_FOREIGN){
		// check if document type CMT1 AND KH1
		var checkPrivateCMT1 = $.inArray(TYPE_IMG_CMT1, listFileDocType)>SELECT_NONE_INDEX;
		var checkPrivateKH = $.inArray(TYPE_IMG_KH, listFileDocType)> SELECT_NONE_INDEX;
		
		if(checkPrivateKH ==false || checkPrivateCMT1 == false ||  isFileHSSelected == false){
			return FOREIGN_TYPE_DOC_ERROR;
		}
	}
	
	if(typeCustomer == CUSTOMER_TYPE_COMPANY){
		// check if document type CMT1 AND KH1
		var checkPrivateCMT1 = $.inArray(TYPE_IMG_CMT1, listFileDocType)>SELECT_NONE_INDEX;
		var checkPrivateKH = $.inArray(TYPE_IMG_KH, listFileDocType)> SELECT_NONE_INDEX;
		
		var checkPrivateGPKD = $.inArray(TYPE_IMG_GPKD, listFileDocType)> SELECT_NONE_INDEX;
		var checkPrivateHD1 = $.inArray(TYPE_IMG_HD1, listFileDocType)> SELECT_NONE_INDEX;
		
		if(checkPrivateKH ==false || checkPrivateCMT1 == false
				|| checkPrivateGPKD ==false || checkPrivateHD1 == false ||  isFileHSSelected == false){
			return COMPANY_TYPE_DOC_ERROR;
		}
	}
}

// validate file upload by customer type
function checkTypeDocUploadRequireByAccountType(uploaderIn, accountType){

	var listFileDocType = getListFileDocumentType(uploaderIn);
	// package is prepaid(trả trước)
	if(accountType == ACCOUNT_TYPE_PREPAID){
		// check if document type CMT1 AND KH1
		var checkPrivateCMND = $.inArray(TYPE_DOC_CMND, listFileDocType)>SELECT_NONE_INDEX;
		var checkPrivateHoChieu = $.inArray(TYPE_DOC_HOCHIEU, listFileDocType)> SELECT_NONE_INDEX;
		var checkPrivateTheCanCuoc = $.inArray(TYPE_DOC_THECANCUOC, listFileDocType)> SELECT_NONE_INDEX;
		
		if(checkPrivateCMND ==false && checkPrivateHoChieu == false && checkPrivateTheCanCuoc == false){
			return ACCOUNT_TYPE_PREPAID_ERROR;
		}
	}
	
	// package is postpaid(trả sau)
	if(accountType == ACCOUNT_TYPE_POSTPAID){
		// check if document type CMT1 AND KH1
		var checkPrivateCMND = $.inArray(TYPE_DOC_CMND, listFileDocType)>SELECT_NONE_INDEX;
		var checkPrivateHoChieu = $.inArray(TYPE_DOC_HOCHIEU, listFileDocType)> SELECT_NONE_INDEX;
		
		var checkPrivateTheCanCuoc = $.inArray(TYPE_DOC_THECANCUOC, listFileDocType)> SELECT_NONE_INDEX;
		var checkPrivateTheVanBanDNO = $.inArray(TYPE_DOC_VANBAN_DNO, listFileDocType)> SELECT_NONE_INDEX;
		
		if(checkPrivateCMND ==false && checkPrivateHoChieu == false 
		  && checkPrivateTheCanCuoc == false &&checkPrivateTheVanBanDNO == false){
			return ACCOUNT_TYPE_POSTPAID_ERROR;
		}
	}
	
}	

// get list document type from uploader
function getListFileDocumentType(uploaderIn){
	var listTypeDocument = [];
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
// var itemType = item.identityDocType+"";
		var itemType = item.documentType+"";
		listTypeDocument.push(itemType)
	}
	return listTypeDocument;
}

// check all form validated
function validateAllForm($scope, $translate){
	var result = true;
	
	var TEXT_CHECK_NPR_VALIDATED = "";
	var TEXT_CHECK_CUS_VALIDATED = "";
	
	listFieldNPRNotValidated = "";
	listFieldNPRNotValidated = "<strong>"+ TAB_HEADER_NPR +"</strong>"+BREAK_LINE;
	TEXT_CHECK_NPR_VALIDATED = listFieldNPRNotValidated;
	
	listFieldCUSNotValidated = "<strong>"+ TAB_HEADER_CUS +"</strong>"+BREAK_LINE;
	TEXT_CHECK_CUS_VALIDATED = listFieldCUSNotValidated;
	
	// THONG TIN CHUYEN MANG
	var fullName = StringUtilNVL($scope.model.fullName);
	if(!StringUtilNVLIsNotEmpty(fullName)){
		listFieldNPRNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.emptyvalue') +BREAK_LINE;
		result =  false;
	}
	
	var documentType = StringUtilNVL($scope.model.documentType);
	if(!StringUtilNVLIsNotEmpty(documentType)){
		var documentTypeRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.type.required');
		
		setErrorClassElement("idDocumentTypeDiv", documentTypeRequired);
		listFieldNPRNotValidated += "+ "+ documentTypeRequired +BREAK_LINE;
		result =  false;
	}
	
	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
	if(!StringUtilNVLIsNotEmpty(customerTypeNPR)){
		var customerTypeMess = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.customer.type.required');
		
		setErrorClassElement("idCustomerTypeNPRDiv", customerTypeMess);
		listFieldNPRNotValidated += "+ "+customerTypeMess +BREAK_LINE;
		result =  false;
	}
	
	var documentNumber = StringUtilNVL($scope.model.documentNumber);
	if(!StringUtilNVLIsNotEmpty(documentNumber)){
		var documentNumberRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.number.emptyvalue');
		
		listFieldNPRNotValidated += "+ "+documentNumberRequired+BREAK_LINE;
		result =  false;
	}
	
	var documentIssueDate = StringUtilNVL($("#documentIssueDate").val());
	if(!StringUtilNVLIsNotEmpty(documentIssueDate)){
		listFieldNPRNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.emptyvalue') +BREAK_LINE;
		result =  false;
	}else if(documentType == DOC_TYPE_CMND || documentType == DOC_TYPE_HOCHIEU || documentType == DOC_TYPE_THECANCUOC){
		if(!validateDocumentIssueDate(documentIssueDate)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.popup') +BREAK_LINE;
			result =  false;
		}
	}else{
		if(checkDateGreaterThanYear(documentIssueDate, PRESENT_YEAR)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.lessthancurrentdate') +BREAK_LINE;
			result =  false;
		}
	}
	
	if(StringUtilNVLIsNotEmpty(documentIssueDate) && !isDateValidate(documentIssueDate)){
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.isdate') +BREAK_LINE;
		result =  false;
	}
	
	var documentIssuePlace = StringUtilNVL($scope.model.documentIssuePlace);
	if(!StringUtilNVLIsNotEmpty(documentIssuePlace)){
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.emptyvalue') +BREAK_LINE;
		result =  false;
	}
	
	var citizen = StringUtilNVL(checkModelVisible($scope.model.citizen)?"": 
		StringUtilNVL($scope.model.citizen.countryName));
	if(!StringUtilNVLIsNotEmpty(citizen)){
		var messCountryRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.country.required');
		setErrorClassElement("idCitizenDiv", messCountryRequired);
		listFieldNPRNotValidated += "+ "+ messCountryRequired +BREAK_LINE;
		result =  false;
	}
	
	var email = StringUtilNVL($scope.model.email);
	if(!StringUtilNVLIsNotEmpty(email)){
	}
	
	var province = StringUtilNVL(checkModelVisible($scope.model.province)?"": 
		StringUtilNVL($scope.model.province.provinceName));
	if(!StringUtilNVLIsNotEmpty(province)){
		if($scope.model.customerTypeNPR == CUSTOMER_TYPE_PRIVATE || $scope.model.customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			var messProvinceRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.province.required');
			setErrorClassElement("idSelectDivProvince", messProvinceRequired);
			listFieldNPRNotValidated += "+ "+messProvinceRequired +BREAK_LINE;
			result =  false;
		}
	}
	
	var district = StringUtilNVL(checkModelVisible($scope.model.district)?"": 
		StringUtilNVL($scope.model.district.districtName));
	if(!StringUtilNVLIsNotEmpty(district)){
		if($scope.model.customerTypeNPR == CUSTOMER_TYPE_PRIVATE || $scope.model.customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			var messDistrictRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.district.required');
			setErrorClassElement("divDistrictId", messDistrictRequired);
			listFieldNPRNotValidated += "+ " +messDistrictRequired +BREAK_LINE;
			result =  false;
		}
	}
	
	var address = StringUtilNVL($scope.model.address);
	if(!StringUtilNVLIsNotEmpty(address)){
		var messageAddressRuired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.emptyvalue');
		
		listFieldNPRNotValidated += "+ "+messageAddressRuired +BREAK_LINE;
		result =  false;
	}
	
	var reprentativeName = StringUtilNVL($scope.model.reprentativeName);
	if(!StringUtilNVLIsNotEmpty(reprentativeName)){
	}
	
	var representativePosition = StringUtilNVL($scope.model.representativePosition);
	if(!StringUtilNVLIsNotEmpty(representativePosition)){
	}
	
	var representativeDocNumber = StringUtilNVL($scope.model.representativeDocNumber);
	if(!StringUtilNVLIsNotEmpty(representativeDocNumber)){
	}
	
	/*
	 * var representativeDocDate =
	 * StringUtilNVL($scope.model.representativeDocDate);
	 */
	var representativeDocDate = StringUtilNVL($("#RepresentativeDocDate").val());
	if(StringUtilNVLIsNotEmpty(representativeDocDate)){
		if(!validateDocumentIssueDate(representativeDocDate)){
			var documentRepresentDateMess = $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.popup.required');
			
			listFieldNPRNotValidated += "+ "+documentRepresentDateMess +BREAK_LINE;
			result =  false;
		}
		
		if(!isDateValidate(representativeDocDate)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.doc.date.isdate') +BREAK_LINE;
			result =  false;
		}
	}
	
	var donor = StringUtilNVL($scope.model.donor);
	if(!StringUtilNVLIsNotEmpty(donor)){
		var donorMessRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.donor.required');
		
		setErrorClassElement("idDonorDiv", donorMessRequired);
		listFieldNPRNotValidated += "+ "+donorMessRequired +BREAK_LINE;
		result =  false;
	}
	
	var subDataNumber = StringUtilNVL($scope.model.subDataNumber);
	if(!StringUtilNVLIsNotEmpty(subDataNumber)){
		var messSubNumber = $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.emptyvalue');
		listFieldNPRNotValidated += "+ "+ messSubNumber +BREAK_LINE;
		result =  false;
	}else if(!validateMSISDN(subDataNumber)){
		result =  false;
		var messMaxMinRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.popup.maxminlength');
		
		listFieldNPRNotValidated += "+ "+ messMaxMinRequired +BREAK_LINE;
	}
	
	var accountType = StringUtilNVL($scope.model.accountType);
	if(!StringUtilNVLIsNotEmpty(accountType)){
		var messAccountTypeRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.accountype.required');
		
		setErrorClassElement("idAccountTypeDiv", messAccountTypeRequired);
		listFieldNPRNotValidated += "+ "+ messAccountTypeRequired +BREAK_LINE;
		result =  false;
	}
	
	var subDNOContractDateRes = StringUtilNVL($("#subDNOContractDateRes").val());
	var dnoContractNumber = StringUtilNVL($scope.model.dnoContractNumber);
	if(accountType == ACCOUNT_TYPE_POSTPAID){
		/*if(!StringUtilNVLIsNotEmpty(dnoContractNumber)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.emptyvalue') +BREAK_LINE;
			result =  false;
		}
		
		if(!StringUtilNVLIsNotEmpty(subDNOContractDateRes)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.date.emptyvalue') +BREAK_LINE;
			result =  false;
		}*/
		
	}
	
	if(StringUtilNVLIsNotEmpty(dnoContractNumber) && dnoContractNumber.length < MIN_LENGTH_DNO_CONTRACT_NUMBER){
		result =  false;
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.minlength') +BREAK_LINE;
	}else if(StringUtilNVLIsNotEmpty(dnoContractNumber) && dnoContractNumber.length >MAX_LENGTH_DNO_CONTRACT_NUMBER){
		result =  false;
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.maxlength') +BREAK_LINE;
	}else if(StringUtilNVLIsNotEmpty(dnoContractNumber) && (!isLetterAndNumber(dnoContractNumber))){
		result =  false;
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.letter.required') +BREAK_LINE;
	 }
	
	if(StringUtilNVLIsNotEmpty(subDNOContractDateRes) && !isDateValidate(subDNOContractDateRes)){
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.date.isdate') +BREAK_LINE;
		result =  false;
	}
	
	if(StringUtilNVLIsNotEmpty(subDNOContractDateRes) && checkDateGreaterThanYear(subDNOContractDateRes, PRESENT_YEAR)){
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.date.lessthancurrentdate') +BREAK_LINE;
		result =  false;
	}
	
	//validate file dinh kem chuyen mang
	if( $scope.uploader.queue.length != undefined && $scope.uploader.queue.length != null
			&& $scope.uploader.queue.length ==0){
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.file.npr.attach.required') +BREAK_LINE;
		result =  false;
	}
	
	if( $scope.uploader.queue.length != undefined && $scope.uploader.queue.length != null
			&& $scope.uploader.queue.length !=0){
		
		var resultCheckFileType = $scope.checkAttachMentUploadByType($scope.uploader, TYPE_DOC_PHIEU_DKCM);
		
		if(!resultCheckFileType){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.file.npr.document.register.required') +BREAK_LINE;
			result =  false;
		}
	}
	
	var comments = StringUtilNVL($scope.model.comments);
	if(!StringUtilNVLIsNotEmpty(comments)){
	}
	
	// THONG TIN KHACH HANG VA THUE BAO
	var customerType = StringUtilNVL($scope.model.customerType);
	if(!StringUtilNVLIsNotEmpty(customerType)){
		var customerTypeCusMes = $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.customer.type.required');
		
		setErrorClassElement("idDivCustomerTypeCustomer", customerTypeCusMes);
		listFieldCUSNotValidated += "+ "+ customerTypeCusMes +BREAK_LINE;
		result =  false;
	}
	
	var surnameCustomer = StringUtilNVL($scope.model.surnameCustomer);
	if(!StringUtilNVLIsNotEmpty(surnameCustomer)){
		
		listFieldCUSNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.surname.emptyvalue') +BREAK_LINE;
		result =  false;
	}
	
	var nameCustomer = StringUtilNVL($scope.model.nameCustomer);
	if(!StringUtilNVLIsNotEmpty(nameCustomer)){
		result =  false;
		listFieldCUSNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.name.emptyvalue') +BREAK_LINE;
	}
	
	var documentNumberCustomer = StringUtilNVL($scope.model.documentNumberCustomer);
	if(!StringUtilNVLIsNotEmpty(documentNumberCustomer)){
		result =  false;
		listFieldCUSNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.number.emptyvalue')+ BREAK_LINE;
	}
	
	var documentIssuePlaceCustomer = StringUtilNVL($scope.model.documentIssuePlaceCustomer);
	if(!StringUtilNVLIsNotEmpty(documentIssuePlaceCustomer)){
		result =  false;
		listFieldCUSNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.place.empty') +BREAK_LINE;
	}else if(documentIssuePlaceCustomer.length < 5){
		result =  false;
		listFieldCUSNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.place.minlength') +BREAK_LINE;
	}
	
	var documentIssueDateCustomer = StringUtilNVL($("#DocumentIssueDateCustomer").val());
	if(!StringUtilNVLIsNotEmpty(documentIssueDateCustomer)){
		result =  false;
		listFieldCUSNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.date.empty') +BREAK_LINE;
	}else if(!validateDocumentIssueDate(documentIssueDateCustomer)){
		result =  false;
		listFieldCUSNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.date.popup') +BREAK_LINE;
	}else if(StringUtilNVLIsNotEmpty(documentIssueDateCustomer) && !isDateValidate(documentIssueDateCustomer)){
		listFieldCUSNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.document.issue.date.isDate') +BREAK_LINE;
		result =  false;
	}
	

	
	var customerBirthDay = StringUtilNVL($("#CustomerBirthDay").val());
	if(!StringUtilNVLIsNotEmpty(customerBirthDay)){
		result =  false;
		listFieldCUSNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.birthday.empty') +BREAK_LINE;
	}else{
		if(StringUtilNVLIsNotEmpty(customerBirthDay) && !isDateValidate(customerBirthDay)){
			listFieldCUSNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.birthday.isdate') +BREAK_LINE;
			result =  false;
		}else if(!validateBirthDay(customerBirthDay)){
			result =  false;
			listFieldCUSNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.birthday.maxminage') +BREAK_LINE;			
		}
	}
	
	var genderType = StringUtilNVL($scope.model.genderType);
	if(!StringUtilNVLIsNotEmpty(genderType)){
		var genderMessRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.gender.required')
		
		setErrorClassElement("idGenderDiv", genderMessRequired);
		listFieldCUSNotValidated += "+ "+genderMessRequired +BREAK_LINE;
		result =  false;
	}
	
	var citizenCustomer = StringUtilNVL(checkModelVisible($scope.model.citizenCustomer)?"": 
		StringUtilNVL($scope.model.citizenCustomer.countryName));
	if(!StringUtilNVLIsNotEmpty(citizenCustomer)){
		var countryMessRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.country.required')
		
		setErrorClassElement("CitizenCustomerDiv", countryMessRequired);
		listFieldCUSNotValidated += "+ "+ countryMessRequired +BREAK_LINE;
		result =  false;
	}
	
	var companyName = StringUtilNVL($scope.model.companyName);
	if(!StringUtilNVLIsNotEmpty(companyName)){
		if(customerType  == CUSTOMER_TYPE_COMPANY){
			result =  false;
			listFieldCUSNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.company.name.empty') +BREAK_LINE;
		}
	}
	
	var taxIdentificationNumber = StringUtilNVL($scope.model.taxIdentificationNumber);
	if(!StringUtilNVLIsNotEmpty(taxIdentificationNumber)){
		if(customerType  == CUSTOMER_TYPE_COMPANY){
			result =  false;
			listFieldCUSNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.tax.code.empty') +BREAK_LINE;
		}
	}
	
	var provinceCustomer = StringUtilNVL(checkModelVisible($scope.model.provinceCustomer)?"": 
		StringUtilNVL($scope.model.provinceCustomer.provinceName));
	if(!StringUtilNVLIsNotEmpty(provinceCustomer)){
		if($scope.model.customerType == CUSTOMER_TYPE_PRIVATE || $scope.model.customerType == CUSTOMER_TYPE_COMPANY){
			var provinceMesRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.province.required');
			setErrorClassElement("ProvinceCustomerDiv", provinceMesRequired);
			listFieldCUSNotValidated += "+ " + provinceMesRequired +BREAK_LINE;
			result =  false;
		}
	}
	
	var districtCustomer = StringUtilNVL(checkModelVisible($scope.model.districtCustomer)?"": 
		StringUtilNVL($scope.model.districtCustomer.districtName));
	if(!StringUtilNVLIsNotEmpty(districtCustomer)){
		if($scope.model.customerType == CUSTOMER_TYPE_PRIVATE || $scope.model.customerType == CUSTOMER_TYPE_COMPANY){
			var districtMesRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.district.required');
			setErrorClassElement("DistrictCustomerDiv", districtMesRequired);
			listFieldCUSNotValidated += "+ "+ districtMesRequired +BREAK_LINE;
			result =  false;
		}
	}
	
	var addressCustomer = StringUtilNVL($scope.model.addressCustomer);
	if(!StringUtilNVLIsNotEmpty(addressCustomer)){
		result =  false;
		listFieldCUSNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.address.empty') +BREAK_LINE;
	}
	
	var shopNameCustomer = StringUtilNVL($scope.shopNameCustomer);
	if(!StringUtilNVLIsNotEmpty(shopNameCustomer)){
	}
	
	var packageType = StringUtilNVL($scope.model.packageType);
	if(!StringUtilNVLIsNotEmpty(packageType)){
		setErrorClassElement("idPackageTypeDiv", $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.required'));
		listFieldCUSNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.required') +BREAK_LINE;
		result =  false;
	}
	
	var subDataNumber = StringUtilNVL($scope.model.subDataNumber);
	if(!StringUtilNVLIsNotEmpty(subDataNumber)){
		result =  false;
		listFieldCUSNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.emptyvalue') +BREAK_LINE;
	}
	
	var numberSIM = StringUtilNVL($scope.model.numberSIM);
	if(!StringUtilNVLIsNotEmpty(numberSIM)){
		result =  false;
		listFieldCUSNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.empty') +BREAK_LINE;
	}
	
	if(!result){
		if(TEXT_CHECK_NPR_VALIDATED != listFieldNPRNotValidated 
				&& TEXT_CHECK_CUS_VALIDATED != listFieldCUSNotValidated){
			bootboxAlertInformation(ALERT_TITLE, listFieldNPRNotValidated+ BREAK_LINE + listFieldCUSNotValidated);
		}else if(TEXT_CHECK_NPR_VALIDATED != listFieldNPRNotValidated 
				&& TEXT_CHECK_CUS_VALIDATED == listFieldCUSNotValidated){
			bootboxAlertInformation(ALERT_TITLE, listFieldNPRNotValidated);
		} else if(TEXT_CHECK_NPR_VALIDATED == listFieldNPRNotValidated 
				&& TEXT_CHECK_CUS_VALIDATED != listFieldCUSNotValidated){
			bootboxAlertInformation(ALERT_TITLE, listFieldCUSNotValidated);
		}
	}
	
	return result;
}

function setMandatoryAccountType($scope, isDis){
	$scope.dnoContractNumberNPR = isDis;
	$scope.dnoContractDateNPR = isDis;
}

function setMandatoryFieldNPR($scope, isDis, customerTypeIn){
	$scope.customerTypeNPR = isDis;
	$scope.fullNameNPR = isDis;
	
	$scope.documentIssueTypeNPR = isDis;
	$scope.documentIssueNumberNPR = isDis;
	
	$scope.documentIssueDateNPR = isDis;
	$scope.documentIssuePlaceNPR = isDis;
	
	$scope.countryNPR = isDis;
	
	if(StringUtilNVL(customerTypeIn) == CUSTOMER_TYPE_FOREIGN){
		$scope.provinceNPR = false;
		$scope.districtNPR = false;
	}else{
		$scope.provinceNPR = isDis;
		$scope.districtNPR = isDis;
	}
	
	$scope.addressNPR = isDis;
	
	$scope.donorNPR = isDis;
	$scope.subscriberNumberNPR = isDis;
	
	$scope.accountTypeNPR = isDis;
	
}

function setMandatoryFieldCustomer($scope, isDis, customerTypeIn){
	$scope.customerTypeCus = isDis;
	$scope.surNameCus = isDis;
	
	$scope.nameCus = isDis;
	$scope.documentIssueNumberCus = isDis;
	
	$scope.documentIssueDateCus = isDis;
	$scope.documentIssuePlaceCus = isDis;
	
	$scope.birthDayCus = isDis;
	$scope.genderCus = isDis;
	$scope.countryCus = isDis;
	
	$scope.companyNameCus = isDis;
	$scope.taxCodeCus = isDis;
	$scope.provinceCus = isDis;
	$scope.districtCus = isDis;
	
	if(StringUtilNVL(customerTypeIn) == CUSTOMER_TYPE_PRIVATE){
		$scope.companyNameCus = false;
		$scope.taxCodeCus = false;
	}else if(StringUtilNVL(customerTypeIn) == CUSTOMER_TYPE_FOREIGN){
		$scope.companyNameCus = false;
		$scope.taxCodeCus = false;
		$scope.provinceCus = false;
		$scope.districtCus = false;
	}else if(StringUtilNVL(customerTypeIn) == CUSTOMER_TYPE_COMPANY){
		$scope.companyNameCus = true;
		$scope.taxCodeCus = true;
	}else{
		$scope.companyNameCus = false;
		$scope.taxCodeCus = false;
	}
	
	$scope.addressCus = isDis;
	$scope.shopCodeCus = isDis;
	$scope.packageTypeCus = isDis;
	
	$scope.subscriberNumberSub = isDis;
	$scope.serialSimSub = isDis;
	
}
