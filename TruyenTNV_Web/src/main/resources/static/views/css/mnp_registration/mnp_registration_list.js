
var TAB_HEADER_NPR;
var TAB_HEADER_PREPAID;
var TAB_HEADER_POSTPAID;
var ALERT_TITLE;

var MESS_TOTAL_SIZE_ERROR;
var MESS_ITEM_SIZE_ERROR;

var MESS_FILE_TEMPLATE_PREPAID_REQUIRED;

var MESS_FILE_IMAGE_REQUIRED_PREPAID;
var MESS_FILE_TEMPLATE_POSTPAID_REQUIRED;

var REGISTRATION_NPR_LIST_SUCCESS;
var REGISTRATION_NPR_LIST_ERROR;

var MIN_LENGTH_DOC_IDENTITY_NUMBER = 8;
var MAX_LENGTH_DOC_IDENTITY_NUMBER = 15;

var MAX_LENGTH_DNO_CONTRACT_NUMBER = 15;
var MIN_LENGTH_DNO_CONTRACT_NUMBER = 2;

var MIN_LENGTH_ADDRESS = 5;
var MAX_TAX_CODE_LENGTH = 30;

var MESS_UPLOADING  = "Uploading";
var MESS_CREATE_NPR_LOADING = "Đang khởi tạo yêu cầu chuyển mạng";
var checkListTotalSize = false;

var PRIVATE_TYPE_DOC_ERROR = "PRIVATE_KO";
var FOREIGN_TYPE_DOC_ERROR = "FOREIGN_KO";
var COMPANY_TYPE_DOC_ERROR = "COMPANY_KO";

var TYPE_CONSUMER = "CONSUMER";
var TYPE_CORPORATE = "CORPORATE";
var TYPE_FAMILY = "FAMILY";

var MESSAGE_LIST_SUBSCRIBER_PREPAID_REQUIRE;
var MESSAGE_LIST_SUBSCRIBER_POSTPAID_REQUIRE;
var MESS_FILE_IMAGE_REQUIRED_POSTPAID;

var MESSAGE_LIST_SUBSCRIBER_PREPAID_VALIDATE_ERROR;
var MESSAGE_LIST_SUBSCRIBER_POSTPAID_VALIDATE_ERROR;

var MESSAGE_LIST_IMAGE_PREPAID_REQUIRE = "Chọn file ảnh tương ứng với file template!";
var MESSAGE_LIST_IMAGE_POSTPAID_REQUIRE = "Chọn file ảnh tương ứng với file template!";

var MESSAGE_LIST_IMAGE_PREPAID_ERROR;
var MESSAGE_LIST_IMAGE_POSTPAID_ERROR;

var MESSAGE_LIST_SUBSCRIBER_PREPAID_ERROR = "Có lỗi xảy ra trong quá trình upload danh sách thuê bao.";

var MESSAGE_PACKAGE_TYPE_ERROR_PREPAID ="Gói cước không hợp lệ, hay chọn gói cước";
var MESSAGE_PACKAGE_TYPE_ERROR_POSTPAID ="Gói cước không hợp lệ, hay chọn gói cước";

var MESSAGE_VALIDATE_PREPAID ="Yêu cầu nhập đủ Tỉnh/Thành, Quận/Huyện, Gói cước";

var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";

var UPLOAD_FILE_TEMPLATE_ERROR;

var FILE_IMAGE_UPLOAD;
var MESS_MSISDN_IN_TEMPLATE_REQUIRED;

var MESSAGE_CUSTOMER_EXIST_SYSTEM ;
var MESSAGE_COMPANY_EXIST_SYSTEM; 

var SELECT_NONE_INDEX = -1;

var MAX_LENGTH_SUBSCRIBER_NUMBER = 10;
var MIN_LENGTH_SUBSCRIBER_NUMBER = 9;
/*var CUSTOMER_TYPE_PRIVATE 			= "1";
var CUSTOMER_TYPE_FOREIGN 			= "2";
var CUSTOMER_TYPE_COMPANY 			= "3";
var CUSTOMER_TYPE_STAFT 			= "4";*/
//DatBD2
var CUSTOMER_TYPE_PRIVATE 			= "1";
var CUSTOMER_TYPE_FOREIGN 			= "1";
var CUSTOMER_TYPE_COMPANY 			= "2";
var CUSTOMER_TYPE_STAFT 			= "2";
//end
var TYPE_DOC_CMND      	= "NPR_CMT";
var TYPE_DOC_HOCHIEU    = "NPR_HC";
var TYPE_DOC_THECANCUOC = "NPR_TCC";
var TYPE_DOC_THITHUC 	= "NPR_VISA";
var TYPE_DOC_VANBAN_DNO = "NPR_XACNHAN_DNO";
var TYPE_DOC_PHIEU_DKCM = "NPR_DKCM";
var TYPE_DOC_LOAI_KHAC 	= "NPR_LOAIKHAC";

var ACCOUNT_TYPE_PREPAID = "Prepaid";
var ACCOUNT_TYPE_POSTPAID = "Postpaid";

var ACCOUNT_PREPAID_POSTPAID = "Prepaid_Postpaid";

var ACCOUNT_TYPE_PREPAID_ERROR = "PREPAID_KO";
var ACCOUNT_TYPE_POSTPAID_ERROR = "POSTPAID_KO";

var EMPTY_VALUE = "";

var DOC_TYPE_CMND = "01";
var DOC_TYPE_HOCHIEU = "02";
var DOC_TYPE_THECANCUOC = "03";
var DOC_TYPE_GPKG = "04";
var DOC_TYPE_QDTL = "05";
var DOC_TYPE_MASOTHUE = "06";
var DOC_TYPE_HOKHAU = "07";

var KO_FILE_ERROR_CODE = 500
var KO_PACKAGE_TYPE_CODE = 501;
var EMTPY_VALUE_ERROR_CODE  = 505;

var VALIDATE_LIST_CUSTOMER_KO = 90018;
var MAX_LENGTH_TEM_PRIV_RECORD_ERROR = 90020;
var MAX_LENGTH_TEM_COM_RECORD_ERROR = 90021;

var TEMPLATE_REQUIRED_CUSTOMER_TYPE_COMPANY_ERROR = 90034;

var KO_ATTACH_FILE_ERROR_CODE = 504;
var PRIMARY_NUMBER_ERROR = 90035;

var TYPE_IMG_CMT1 = "CUS_CMT1";
var TYPE_IMG_CMT2 = "CUS_CMT2";
var TYPE_IMG_HD1  = "CUS_HD1";
var TYPE_IMG_HD2  = "CUS_HD2";
var TYPE_IMG_GPKD = "CUS_GPKD";
var TYPE_IMG_KH   = "CUS_KH";
var TYPE_IMG_HS1  = "CUS_HS1";
var TYPE_IMG_HS2  = "CUS_HS2";
var TYPE_IMG_GUQ  = "CUS_GUQ";

var NAME_IMG_CMT1 = "Chứng minh thư 1";
var NAME_IMG_CMT2 = "Chứng minh thư 2";
var NAME_IMG_HD1  = "Hợp đồng 1";
var NAME_IMG_HD2  = "Hợp đồng 2";
var NAME_IMG_GPKD = "GP Kinh doanh";
var NAME_IMG_KH   = "Ảnh KH";
var NAME_IMG_HS1  = "Ảnh HS1";
var NAME_IMG_HS2  = "Ảnh HS2";
var NAME_IMG_GUQ  = "Ảnh GUQ";


var MAX_LENGTH_SUBSCRIBER_NUMBER = 10;
var MIN_LENGTH_SUBSCRIBER_NUMBER = 9;

var MAX_LENGTH_SERIAL_SIM = 20;
var MIN_LENGTH_SERIAL_SIM = 19;

var MAX_YEAR_DOCUMENT = -15;

var MIN_YEAR_BIRTHDAY = -14;
var MAX_YEAR_BIRTHDAY = -100;

var MIN_YEAR_BIRTHDAY_POSTPAID = -18;

var listFileNameTemplateExcel = [];

var CONFIRM_MESSAGE_PORT_IN;
var PREPAID_NPR_HEADER;
var MESS_MAX_SIZE_IMAGE_ITEM;
var LIST_FIELD_NPR_NOT_VALIDATE = "";
var LIST_FIELD_PREPAID_VALIDATED = "";

var CUSTOMER_EXIS_EPOS = 90019;
var COMPANY_EXIS_EPOS = 90025;

var CUSTOMER_FOREIGN_EXIST_EPOS = 90026;
var MESS_CUSTOMER_FOREIGN_EXIST_EPOS;

var CUSTOMER_PRIVATE_EXIST_EPOS = 90027;
var MESS_CUSTOMER_PRIVATE_EXIST_EPOS;
var MESS_CUSTOMER_PRIVATE_EXIST_POSTPAID;
var MESSAGE_COMPANY_EXIST_SYSTEM_POSTPAID;

var BREAK_LINE = "<br/>";

overLoading("Loading...");

app_vnm.controller('ctr-list-paid', function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal, $location, 
		$window,FileUploader,$filter, $localStorage, $http, NgTableParams) {	
	
	TAB_HEADER_NPR = $translate.instant('vnm.mnp_message.registration.npr_list.info.tab.npr.header');
	TAB_HEADER_PREPAID = $translate.instant('vnm.mnp_message.registration.npr_list.info.tab.npr.header.prepaid');
	
	TAB_HEADER_POSTPAID  = $translate.instant('vnm.mnp_message.registration.npr_list.info.tab.npr.header.postpaid');
	MESS_TOTAL_SIZE_ERROR  = $translate.instant('vnm.mnp_message.common.upload.max.size.total.file');
	MESS_ITEM_SIZE_ERROR = $translate.instant('vnm.mnp_message.common.upload.max.size.item.file');
	
	FILE_IMAGE_UPLOAD = $translate.instant('vnm.mnp_message.registration.npr_list.upload.file.image.required');
	MESS_MSISDN_IN_TEMPLATE_REQUIRED = $translate.instant('vnm.mnp_message.registration.npr_list.file.template.prepaid.msisdn.required');
	
	MESSAGE_LIST_SUBSCRIBER_PREPAID_REQUIRE = $translate.instant('vnm.mnp_message.registration.npr_list.file.template.prepaid.required');
	MESSAGE_LIST_SUBSCRIBER_POSTPAID_REQUIRE = $translate.instant('vnm.mnp_message.registration.npr_list.file.template.postpaid.required');
	MESS_FILE_IMAGE_REQUIRED_POSTPAID = $translate.instant('vnm.mnp_message.registration.npr_list.file.image.postpaid.required');
	
	MESSAGE_LIST_SUBSCRIBER_PREPAID_VALIDATE_ERROR = $translate.instant('vnm.mnp_message.registration.npr_list.data.list.subscriber.prepaid.validate.error');
	MESSAGE_LIST_SUBSCRIBER_POSTPAID_VALIDATE_ERROR  = $translate.instant('vnm.mnp_message.registration.npr_list.data.list.subscriber.postpaid.validate.error');
	MESSAGE_LIST_IMAGE_PREPAID_ERROR = $translate.instant('vnm.mnp_message.registration.npr_list.data.image.prepaid.no.matching.template');
	MESSAGE_LIST_IMAGE_POSTPAID_ERROR = $translate.instant('vnm.mnp_message.registration.npr_list.data.image.postpaid.no.matching.template');
	
	UPLOAD_FILE_TEMPLATE_ERROR = $translate.instant('vnm.mnp_message.common.upload.file.template.excel.required');
	MESS_FILE_TEMPLATE_PREPAID_REQUIRED = $translate.instant('vnm.mnp_message.common.upload.file.template.excel.required');
	
	MESS_FILE_IMAGE_REQUIRED_PREPAID = $translate.instant('vnm.mnp_message.registration.npr_list.file.image.prepaid.required');
	
	MESS_FILE_TEMPLATE_POSTPAID_REQUIRED = $translate.instant('vnm.mnp_message.common.upload.file.template.excel.required');
	
	REGISTRATION_NPR_LIST_SUCCESS = $translate.instant('vnm.mnp_message.registration.npr_list.send.registration.success');
	REGISTRATION_NPR_LIST_ERROR = $translate.instant('vnm.mnp_message.registration.npr_list.send.registration.fail');
	
	MESS_CUSTOMER_FOREIGN_EXIST_EPOS = $translate.instant('vnm.mnp_message.registration.npr_list.mess.customer.foreign.exist.epos');
	MESS_CUSTOMER_PRIVATE_EXIST_EPOS = $translate.instant('vnm.mnp_message.registration.npr_list.mess.customer.private.exist.epos');
	MESS_CUSTOMER_PRIVATE_EXIST_POSTPAID = $translate.instant('vnm.mnp_message.registration.postpaid.info.cus.private.exist');
	MESSAGE_COMPANY_EXIST_SYSTEM_POSTPAID = $translate.instant('vnm.mnp_message.registration.postpaid.info.npr.mes.company.exist');
	
	ALERT_TITLE = $translate.instant('vnm.mnp_message.common.alert.title');
	
	// message
	PREPAID_NPR_HEADER = $translate.instant('vnm.mnp_message.registration.npr_list.info.alert.title.port.in');
	CONFIRM_MESSAGE_PORT_IN = $translate.instant('vnm.mnp_message.registration.npr_list.info.npr.mes.confirm.create.npr');
	MESS_MAX_SIZE_IMAGE_ITEM = $translate.instant('vnm.mnp_message.common.upload.max.size.item.image.file');
	
	MESSAGE_CUSTOMER_EXIST_SYSTEM = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.mes.customer.exist');
	MESSAGE_COMPANY_EXIST_SYSTEM = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.mes.company.exist');
	
	// set get shopname and staffID
	$scope.model = {};
	$scope.model.postpaid = {};
    $scope.shopNameCustomer = StringUtilNVL($localStorage.clientContext.shop.shopName);
    $scope.shopCode = StringUtilNVL($localStorage.clientContext.shop.shopCode);
    $scope.shopId = StringUtilNVL($localStorage.clientContext.shop.shopId);
    
    $scope.staffCode  = StringUtilNVL($localStorage.clientContext.shop.staffCode);
    $scope.staffId = StringUtilNVL($localStorage.clientContext.shop.staffId);
    
	setMandatoryFieldNPR($scope, true);
	setMandatoryFieldCustomer($scope, true);
	setMandatoryFieldPostPaid($scope, true, CUSTOMER_TYPE_PRIVATE);
	//DatBD2
	$scope.lstSubPayMentType=[
    	{ 'Id': 'TT', 'Title': 'Trả trước' },
        { 'Id': 'TS', 'Title': 'Trả sau' }
    ];
	$scope.model.subPaymentType=$scope.lstSubPayMentType[0].Id;
	//end
	//download file template
	dowloadFile = function(data) {
		overLoading("Downloading file mẫu...");
		var url = eim_url + '/bs/downLoadFileTemplate';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]) , headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert(FILE_DOWNLOAD+ " "+ data.message);
			closeOverLay();
		});
	}
	
	$scope.downloadFileTemplatePrepaid = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_Chuyen_Mang_Theo_Danh_Sach_Tra_Truoc.xlsx";
    	attachFile.folder = "Template_Chuyen_Mang_Theo_Danh_Sach_Tra_Truoc.xlsx";
    	dowloadFile(attachFile);
    }
	
	$scope.downloadFileTemplatePostPaid = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_Chuyen_Mang_Theo_Danh_Sach_Tra_Sau.xlsx";
    	attachFile.folder = "Template_Chuyen_Mang_Theo_Danh_Sach_Tra_Sau.xlsx";
    	dowloadFile(attachFile);
    }
	
	createListNprPrepaid =  function (data) {
    	var urlCreateNPR =eim_url+"/bs/registration/create_ticket_npr_list_prepaid";
    	$http.post(urlCreateNPR,data).success(function (response){
    		 var transactionID = response.message;
    		 bootbox.alert(REGISTRATION_NPR_LIST_SUCCESS +transactionID);
    		 closeOverLay();
    		
    	 }).error(function (response){
    		 if( response!= undefined && response!=null && response.code == KO_ATTACH_FILE_ERROR_CODE ){
    			 bootbox.alert(response.message);
    			 closeOverLay();
    			 return ;
    		 }
    		 if( response!= undefined && response!=null && response.code == PRIMARY_NUMBER_ERROR ){
    			 bootbox.alert(response.message);
    			 closeOverLay();
    			 return ;
    		 }
    		 
    		 closeOverLay();
    		 bootbox.alert(REGISTRATION_NPR_LIST_ERROR + response.message);
    	 });
    }
	
	createListNprPostpaid =  function (data) {
    	var urlCreateNPR =eim_url+"/bs/registration/create_ticket_npr_list_postpaid";
    	$http.post(urlCreateNPR,data).success(function (response){    		     		 
    		 var transactionID = response.message;
    		 bootbox.alert(REGISTRATION_NPR_LIST_SUCCESS +transactionID);
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
    		 
    		 if( response!= undefined && response!=null && response.code == PRIMARY_NUMBER_ERROR ){
    			 bootbox.alert(MESS_MSISDN_IN_TEMPLATE_REQUIRED);
    			 closeOverLay();
    			 return ;
    		 }
    		 
    		 closeOverLay();
    		 bootbox.alert(REGISTRATION_NPR_LIST_ERROR + ' '+response.message);
    	 });
    }
	
  getListProvince =  function () {
		var url =eim_url+"/bs/SourceProvince";
		 $http.get(url).success(function (data){
			 $scope.ProvinceSource = data;

			 getListGetListPackage();
		 }).error(function (data){
			 closeOverLay();
		 });
    }
  
  getListNetworkType =  function () {
  	overLoading("Loading...");
		var url =eim_url+"/bs/SourceNetwork";
		 $http.get(url).success(function (data){
			 if(data != undefined && data != null){
				 if(data.length != 0){
					 $scope.DonorSource = data;
				 }
			 }
			 
			 getListDocumentType();
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
  
    getListDistrict =  function (provId) {
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
				$scope.DistrictSource = data;
				$scope.model.district = $scope.DistrictSource[SELECT_NONE_INDEX];
				closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
  //KHC list quận huyện địa chỉ nơi ở
    getListDistrictParentAddress =  function (provId, listOutput) {
    	var test = [];
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourceParentAddress = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    //KHCHA list quận huyện địa chỉ cước
    getListParentPriceDistrict =  function (provId) {
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourcePrice = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDistrictPreAddress =  function (provId) {
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourcePreAddress = data;
			 $scope.model.preDistrict = $scope.DistrictSourcePreAddress[SELECT_NONE_INDEX];
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDistrictAddress =  function (provId) {
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourceAddress = data;
			 $scope.model.addDistrict = $scope.DistrictSourceAddress[0];
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDistrictPrice =  function (provId) {
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourcePrice = data;
			 $scope.model.priceDistrict = $scope.DistrictSourcePrice[0];
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetListPackage =  function (provId) {
		var url =eim_url+"/bs/SourcePackagePostpaid";
		 $http.get(url).success(function (data){
			 $scope.PackageTypeSource = data;
//			 $scope.model.postpaid.PackageType = $scope.PackageTypeSource[0].value;
			 
			 getListGetPackagePrepaid();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetPackagePrepaid =  function (provId) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourcePackage";
		 $http.get(url).success(function (data){
			 $scope.PackageTypeSourcePrepaid = data;
			 
			 getListGetListCountry();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    $scope.onPackageTypePostpaidChange = function(){
    	var modelPackageType = StringUtilNVL($scope.model.postpaid.PackageType);
    	if(modelPackageType != EMPTY_VALUE){
    		removeErrorClassElement("idPackageTypeDiv");
    	}
    }
    
    getListCountrySourcePostpaid =  function (provId) {
		var url =eim_url+"/bs/SourceCountryPostpaid";
		 $http.get(url).success(function (data){
			 $scope.CountryPostpaidSource = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetListCountry =  function () {
		var url =eim_url+"/bs/SourceCountry";
		 $http.get(url).success(function (data){
			 $scope.CountrySource = data;
			 
			 getListNetworkType();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDocumentType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceDocument";
		 $http.get(url).success(function (data){
			 $scope.IdentityTypeSource = data;
			 
			 $scope.IdentityTypeSourcePrivate = getListDocumentTypeByCustomer(data,CUSTOMER_TYPE_PRIVATE);
			 $scope.IdentityTypeSourceCompany = getListDocumentTypeByCustomer(data,CUSTOMER_TYPE_COMPANY);
			 
			 getListLevelCustomer();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    //danh sach phân khúc khách hàng theo loại khách hàng
    getListCustomerLevelByCustomer = function(data, customerType){
    	var documentSourceOut = [];
    	if(customerType == CUSTOMER_TYPE_PRIVATE){
    		for(var i = 0; i <data.length; i++){
    			if(data[i].type == TYPE_FAMILY){
    				documentSourceOut.push(data[i]);
    			}
    		}
    		
    		return documentSourceOut;
    	}
    	
    	if(customerType == CUSTOMER_TYPE_COMPANY){
    		for(var j = 0; j <data.length; j++){
    			if(data[j].type == TYPE_CORPORATE){
    				documentSourceOut.push(data[j]);
    			}
    		}
    		return documentSourceOut;
    	}
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
    
    getListLevelCustomer =  function () {
  	  overLoading("Loading...");
  		var url =eim_url+"/bs/SourceLevelCustomer";
  		 $http.get(url).success(function (data){
  			 $scope.LevelCustomerSourcePrivate = getListCustomerLevelByCustomer(data,CUSTOMER_TYPE_PRIVATE);
  			 $scope.LevelCustomerSourceCompany = getListCustomerLevelByCustomer(data,CUSTOMER_TYPE_COMPANY);
  			 
  			 getListCountrySourcePostpaid();
  			 closeOverLay();
  		 }).error(function (response){
  			 closeOverLay();
  		 });
  }
    
    // GET LIST DATA PROVINCE, PACKAGE, COUNTRY,
    getListProvince();
	
	checkCustomerExistInSystemPostpaid =  function (idNum, taxCode) {
    	overLoading("Loading...");
    	var customerType = StringUtilNVL($scope.model.customerTypeNPR);
    	
		var url =eim_url+"/bs/npr/check_customer_exist_postpaid?idNum="+StringUtilNVL(idNum)+"&taxCode="+taxCode+"&customerTypeIn="+customerType;
		 $http.get(url).success(function (response){
			 
			 if(response != undefined && response != null && response.code == CUSTOMER_PRIVATE_EXIST_EPOS){
				 bootboxConfirm(PREPAID_NPR_HEADER, MESS_CUSTOMER_PRIVATE_EXIST_POSTPAID, $scope.confirmCreateNPROK, $scope.confirmKO);
			 }
			 else if(response != undefined && response != null && response.code == COMPANY_EXIS_EPOS){
				 bootboxConfirm(PREPAID_NPR_HEADER, MESSAGE_COMPANY_EXIST_SYSTEM_POSTPAID, $scope.confirmCreateNPROK, $scope.confirmKO);
			 }else{
				 $scope.confirmCreateNPROK();
			 }
			
		 }).error(function (response){
			 closeOverLay();
			 bootbox.alert(REGISTRATION_NPR_LIST_ERROR + ' '+response.message);
		 });
    }
	
	checkCustomerExistInSystemPrepaid =  function (documentNumber,typeCard) {
    	overLoading("Loading...");
    	var customerType = StringUtilNVL($scope.model.customerTypeNPR);
    
		var url =eim_url+"/bs/npr/check_customer_exist?docNumberCustomer="+StringUtilNVL(documentNumber)+"&customerTypeIn="+customerType+"&typeCard="+typeCard;
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
    
    $scope.onProvinceChange = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.district = "";
    	if($scope.model.province.proId!=""){
    		$scope.model.preProvince = $scope.model.province;
    		getListDistrict($scope.model.province.proId);
    		removeErrorClassElement("idSelectDivProvince");
    		removeErrorClassElement("idSelectDivPreProvince");
    	}
    }
    
    $scope.onDonorNPRChange = function(){
    	var modelDonorVal = StringUtilNVL($scope.model.donor);
    	if(modelDonorVal != EMPTY_VALUE){
    		removeErrorClassElement("idDonorDiv");
    	}
    }
    
    $scope.onSelectedChangeProvinceAdd = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.postAddDistrict = "";
    	getListDistrictAddress($scope.model.postAddProvince.proId);
    }
    
    $scope.onDistrictChange = function(){
    	var districtNPR = StringUtilNVL(checkModelVisible($scope.model.district)?"": 
    		StringUtilNVL($scope.model.district.districtName));
    	
    	if(districtNPR != ""){
    		$scope.model.preDistrict = $scope.model.district;
    		removeErrorClassElement("divDistrictId");
    		removeErrorClassElement("divDistrictIdPrePaid");
    	}
    }
    
    $scope.onPreDistrictChange = function(){
    	var modelPreDistrict = StringUtilNVL($scope.model.preDistrict);
    	if(modelPreDistrict != EMPTY_VALUE){
    		removeErrorClassElement("divDistrictIdPrePaid");
    	}
    }
    
    $scope.onSelectedChangeProvincePrice = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.postPriceDistrict = "";
    	
    	getListDistrictPrice($scope.model.postPriceProvince.proId);
    }
    
    $scope.onPreCustomerChange = function(){
    	if($scope.model.preCustomerType!= EMPTY_VALUE){
    		
    		// khi thay doi loai khach hang, xoa du lieu danh sach thue bao tra
			// truoc
    		$scope.removeAllItemListPrePaid();
    		
    		removeErrorClassElement("idPreCustomerType");
    	}
    	
    	if($scope.model.preCustomerType != CUSTOMER_TYPE_COMPANY){
    		removeErrorClassElement("IdPreComanyName");
    		removeErrorClassElement("IdPreTaxIdentificationNumber");
    	}
    	
    	var customerTypePre = StringUtilNVL($scope.model.preCustomerType);
    	if(customerTypePre == CUSTOMER_TYPE_FOREIGN) {
    		removeErrorClassElement("idSelectDivPreProvince");
    		removeErrorClassElement("divDistrictIdPrePaid");
    	}
    	$scope.model.customerTypeNPR = $scope.model.preCustomerType;
    	$scope.onCustomerNPRChange();
    
    }
    
    $scope.onSelectedPreProvince = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.preDistrict = "";
    	
    	if($scope.model.preProvince.proId!=""){
    		getListDistrictPreAddress($scope.model.preProvince.proId);
    		removeErrorClassElement("idSelectDivPreProvince");
    	}
    }
    
    $scope.onSelectedPrePackageType = function(){
    	if($scope.model.citizen!=""){
    		if($scope.model.prePackageType!=""){
        		removeErrorClassElement("idDivPackagePrepaid");
        	}
    	}
    }
    
    $scope.onCountryChange = function(){
    	if($scope.model.citizen!=""){
    		removeErrorClassElement("idCitizenDiv");
// $scope.model.citizenCustomer = $scope.model.citizen;
    		
    		if($scope.model.citizenCustomer!=""){
        		removeErrorClassElement("CitizenCustomerDiv");
        	}
    	}
    }
    
    $scope.copyNameCustomer = function() {
    	if($scope.model.accountTypeVNM == ACCOUNT_TYPE_PREPAID){
    		$scope.model.preComanyName = "";
    		
    		if(StringUtilNVL($scope.model.customerTypeNPR) == CUSTOMER_TYPE_COMPANY){
    			$scope.model.preComanyName = $scope.model.fullName;
    		}
    	}
		
    	if($scope.model.accountTypeVNM == ACCOUNT_TYPE_POSTPAID){
    		$scope.model.postpaid.parCompanyName = "";
    		$scope.model.postpaid.parSurname = "";
    		$scope.model.postpaid.parName = "";
    		
    		if(StringUtilNVL($scope.model.customerTypeNPR) == CUSTOMER_TYPE_COMPANY){
    			$scope.model.postpaid.parCompanyName = $scope.model.fullName;
    			var objectName = separateName(StringUtilNVL($scope.model.reprentativeName));
    			
    			$scope.model.postpaid.parSurname = objectName.firstName;
    			$scope.model.postpaid.parName = objectName.lastName;
    		}else if(StringUtilNVL($scope.model.customerTypeNPR) == CUSTOMER_TYPE_PRIVATE){
    			var objectName = separateName(StringUtilNVL($scope.model.fullName));
    			
    			$scope.model.postpaid.parSurname = objectName.firstName;
    			$scope.model.postpaid.parName = objectName.lastName;
    		}
    	}
	};
	
    $scope.onCustomerNPRChange = function(){
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
    	$scope.model.documentType = "";
    	$scope.model.documentNumber = "";
    	$scope.model.documentIssueDate = "";
    	$scope.model.documentIssuePlace = "";
    	
    	$scope.LevelCustomerSource  = [];
    	$scope.model.postpaid.levelCustomer = "";
    	
    	//reset thong tin chugn minh thu, ngay cap...
    	$scope.model.postpaid.parDocumentIssuePlace = "";
    	$scope.model.postpaid.parDocumentNumber = "";
    	$scope.model.postpaid.parDocumentIssueDate = "";
    	
    	$scope.copyNameCustomer();
    	if(customerTypeNPR != EMPTY_VALUE){
    		$scope.model.preCustomerType = customerTypeNPR;
        	
        	if($scope.model.preCustomerType != CUSTOMER_TYPE_COMPANY){
        		removeErrorClassElement("IdPreComanyName");
        		removeErrorClassElement("IdPreTaxIdentificationNumber");
        	}
        	
    		removeErrorClassElement("idCustomerTypeNPRDiv");
    		removeErrorClassElement("idPreCustomerType");
    		removeErrorClassElement("idCustomerTypePar");
    		
    		// khi thay doi loai khach hang, xoa du lieu danh sach thue bao tra
			// truoc
    		$scope.removeAllItemListPrePaid();
    		$scope.removeAllItemListPostPaid();
    		
    		setMandatoryFieldNPR($scope, true, customerTypeNPR);
    		setMandatoryFieldCustomer($scope, true, customerTypeNPR);
    		
    		setMandatoryFieldPostPaid($scope, true, customerTypeNPR);
    		
    		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE || customerTypeNPR == CUSTOMER_TYPE_COMPANY ){

    			var citizenVietNam = null;
    			for(var i = 0 ; i <$scope.CountrySource.length; i ++){
    				if($scope.CountrySource[i].countryId == 238){
    					citizenVietNam = $scope.CountrySource[i];
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
    				$scope.IdentityTypeSource = $scope.IdentityTypeSourcePrivate;
    				$scope.LevelCustomerSource = $scope.LevelCustomerSourcePrivate;
    			}
    			
    			if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
    				if(StringUtilNVL($scope.model.documentType)== DOC_TYPE_MASOTHUE){
    					$scope.model.preTaxIdentificationNumber == $scope.model.documentNumber;
    				}
    				$scope.IdentityTypeSource = $scope.IdentityTypeSourceCompany;
    				$scope.LevelCustomerSource = $scope.LevelCustomerSourceCompany;
    			}
    			
    		}else if(customerTypeNPR == CUSTOMER_TYPE_FOREIGN) {
    			$scope.IdentityTypeSource = $scope.IdentityTypeSourcePrivate;
    			
    			$scope.model.documentType = "";
    			$scope.model.citizen = $scope.CountrySource[-1];
    			
    			removeErrorClassElement("idSelectDivProvince");
	        	removeErrorClassElement("divDistrictId");
	        	
	        	removeErrorClassElement("idSelectDivPreProvince");
	        	removeErrorClassElement("divDistrictIdPrePaid");
    		}
    	}
    	
    	//DatBD2
    	if($scope.model.customerTypeNPR=="1") //Cá nhân
    		{
    		$scope.showTypeCardCompany=false;
    		$scope.lstSubUseType=[
    	    	{ 'Id': 'CN01', 'Title': 'Cho bản thân' },
    	        { 'Id': 'CN02', 'Title': 'Cho người được giám hộ' },
    	        { 'Id': 'CN03', 'Title': 'Cho thiết bị' }
    	        ]
       	
    		}
    	else //Tổ Chức
    		{
    		$scope.showTypeCardCompany=true;
    		  $scope.lstSubUseType=[
    		    	 
      	        { 'Id': 'TC01', 'Title': 'Cho các cá nhân thuộc tổ chức' },
      	        { 'Id': 'TC02', 'Title': 'Cho thiết bị' }   	
      	        ];
    		  
    		  $scope.lstTypeCardCompany=[
    		    	{ 'Id': '1', 'Title': 'Quyết định thành lập' },
    		        { 'Id': '2', 'Title': 'Giấy chứng nhận đăng ký kinh doanh và đăng ký thuế' },
    		        { 'Id': '3', 'Title': 'Giấy phép đầu tư' },
    		        { 'Id': '4', 'Title': 'Giấy chứng nhận đăng ký doanh nghiệp' },
    		    ];
    		}
    	//end
    }
    
    //DatBD2
    $scope.nameTypeCard= function (id){
    	var nameType="";
    	if(id=='01'){
    		nameType="Chứng minh thư";
    	}
    	else if(id=='02')
    	{
    		nameType="Hộ chiếu";
    	}
    	else if(id=='03'){
    		nameType="Thẻ căn cước";
    	}
    	else if(id==''|| id==null){
    		nameType="";
    	}
    	else
    		nameType="Không xác định";
    	return nameType;
    }
    //end
    $scope.onDocumentTypeNPRChange = function(){
    	var documentTypeNPR = StringUtilNVL($scope.model.documentType);
    	if(documentTypeNPR != EMPTY_VALUE){
    		$scope.copyValueDocumentType();
    		removeErrorClassElement("idDocumentTypeDiv");
    	}
    }
    
    
  //DatBD2
    $scope.validateSubDataNumber=function(){
    	
    	if($scope.model.subDataNumber!=null ||$scope.model.subDataNumber!="")
    		{
    			if($scope.model.subDataNumber.substr(0,1)!="0")
    				{
    					bootbox.alert("Số thuê bao phải bắt đầu bằng 0");
    					$scope.model.subDataNumber="";
    				}    		
    		}
    	
    }
    //end
    //PARENT ON CHANGE
  //on customer level change
	$scope.onCustomerLevelChange = function(){
		removeErrorClassElement("idLevelCustomerPar");
		removeErrorClassElement("idLevelCustomerSub");
	}
	
    $scope.onGenderParentChange = function(){
    	var modelGenderTypeVal = StringUtilNVL($scope.model.postpaid.parGenderType);
    	if(modelGenderTypeVal != EMPTY_VALUE){
    		removeErrorClassElement("idGenderDiv");
    	}
    }
    $scope.onParentCountryChange = function(){
    	removeErrorClassElement("idParentCountryDiv");
    }
    
  //KHCHA Địa chỉ nơi ở : quận huyện onchange
    $scope.onSelectedParentAddDistrictChange = function(){
    	removeErrorClassElement("idDivPostalParentDistrict");
    	removeErrorClassElement("idDivParPriceDistrict");
    	if($scope.model.postpaid.parAddProvince == $scope.model.postpaid.parPriceProvince){
    		$scope.model.postpaid.parPriceDistrict = $scope.model.postpaid.parAddDistrict;
    	}
    }
    
    //KHCHA Địa chỉ thông báo cước : quận huyện onchange
    $scope.onSelectedParentPriceDistrictChange = function(){
    	removeErrorClassElement("idDivParPriceDistrict")
    }
    
  //KHCHA Địa chỉ nơi ở :Tỉnh thành onchange 
    $scope.onSelectedChangeParentAddProvince = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.postpaid.parAddDistrict = "";
    	
    	$scope.model.postpaid.parAddRegion = $scope.model.postpaid.parAddProvince.region;
    	
    	//copy dia chi tinh thanh cho cac loai dia chi
		$scope.model.postpaid.parPriceProvince = $scope.model.postpaid.parAddProvince;
		$scope.model.subBillAddProvince = $scope.model.postpaid.parAddProvince;
		$scope.model.subNotiAddProvince = $scope.model.postpaid.parAddProvince;
		
		removeErrorClassElement("idDivPostalParentProvince");
    	removeErrorClassElement("idDivPostalParentProvince");
    	removeErrorClassElement("idDivPostalParentProvince");

//		getListDistrictParentAddress($scope.model.postpaid.parAddProvince.proId);
    	 var url =eim_url+"/bs/SourceDistrict?provinceId="+$scope.model.postpaid.parAddProvince.proId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourceParentAddress = data;
			 
//			 getListParentPriceDistrict($scope.model.postpaid.parAddProvince.proId);
			 var url =eim_url+"/bs/SourceDistrict?provinceId="+$scope.model.postpaid.parAddProvince.proId;
			 $http.get(url).success(function (data){
				 $scope.DistrictSourcePrice = data;
				 
//				 $scope.onSelectedChangeParentProvincePrice();
				    var messageText = "Loading data province";
			    	$scope.model.postpaid.parPriceDistrict = "";
			    	$scope.model.postpaid.parPriceRegion = $scope.model.postpaid.parPriceProvince.region;
			    	overLoading(messageText);
			    	removeErrorClassElement("idDivParPriceProvince");
			    	
//			    	getListParentPriceDistrict($scope.model.postpaid.parPriceProvince.proId);
			    	 var url =eim_url+"/bs/SourceDistrict?provinceId="+$scope.model.postpaid.parPriceProvince.proId;
					 $http.get(url).success(function (data){
						 $scope.DistrictSourcePrice = data;
						 closeOverLay();
					 }).error(function (response){
						 closeOverLay();
					 });
			 }).error(function (response){
				 closeOverLay();
			 });
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    //KHCHA Địa chỉ thông báo cước Tỉnh thành onchange 
    $scope.onSelectedChangeParentProvincePrice = function(){
    	var messageText = "Loading data province";
    	
    	$scope.model.postpaid.parPriceDistrict = "";
    	$scope.model.postpaid.parPriceRegion = $scope.model.postpaid.parPriceProvince.region;
    	
    	overLoading(messageText);
    	getListParentPriceDistrict($scope.model.postpaid.parPriceProvince.proId);
    	removeErrorClassElement("idDivParPriceProvince");
    	
    }
    
    //KHCHA Địa chỉ nơi ở: phường xã,toa nha, so duong
    $scope.$watch('model.postpaid.parAddTown', function() {
    	$scope.model.postpaid.parPriceTown = $scope.model.postpaid.parAddTown;
    });
    
    $scope.$watch('model.postpaid.parAddRoad', function() {
    	$scope.model.postpaid.parPriceRoad = $scope.model.postpaid.parAddRoad;
    });
    
    $scope.$watch('model.postpaid.parAddNumberHome', function() {
    	$scope.model.postpaid.parPriceNumberHome = $scope.model.postpaid.parAddNumberHome;
    });
    
    $scope.$watch('model.postpaid.parAddBuildingName', function() {
    	$scope.model.postpaid.parPriceBuildingName = $scope.model.postpaid.parAddBuildingName;
    });
    
    $scope.$watch('model.postpaid.parAddRoomNumber', function() {
    	$scope.model.postpaid.parPriceRoomNumber = $scope.model.postpaid.parAddRoomNumber;
    });
   
	 $scope.model={};  
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	FullName: {
        		EmptyValue:true,
//        		isletterwithlength: true,
        		maxlengthcustom: 80
            },
            NPRegistrationName: {
                required: true,
                maxlengthcustom: 255
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
//                minlengthcustomernpr: CUSTOMER_TYPE_FOREIGN,
                maxlengthcustom: 80,
                //isletterandnumberwithspace: true
            },
            Citizen: {
            	EmptyValue:true,
            	required: true
            },
            SubscriberRepresentative: {
            	EmptyValue:true,
                required: true
            },
            SubdataDNONumber:{
            	EmptyValue:true,
            	requiredNumber: true,
            	maxlengthcustom: MAX_LENGTH_SUBSCRIBER_NUMBER,
            	minlengthwithdata: MIN_LENGTH_SUBSCRIBER_NUMBER
            },
            DnoContractNumber:{
            	EmptyValueOptions: ACCOUNT_TYPE_POSTPAID,
            	isletterandnumber: true,
            	maxlengthcustom: MAX_LENGTH_DNO_CONTRACT_NUMBER,
            	minlengthwithdata: MIN_LENGTH_DNO_CONTRACT_NUMBER
            },
            SubDNOContractDateRes:{
            	EmptyValueOptions: ACCOUNT_TYPE_POSTPAID,
            	isDate: true,
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
            	//isletterandnumberwithspace: true
            },
            Province:{
            	EmptyValue: true,
                required: true
            },
            ReprentativeName:{
// EmptyValueDocumentType: DOC_TYPE_GPKG
            },
            RepresentativePosition: {
// EmptyValueDocumentType: DOC_TYPE_GPKG
            },
            RepresentativeDocNumber:{
// EmptyValueDocumentType: DOC_TYPE_GPKG
            },
            RepresentativeDocDate: {
                isDate: true,
                lessthancurrentdate:true,
                requiredlessthanyear:15
            },
            ParentSurname:{
            	EmptyValue:true
            },
            ParentName:{
            	EmptyValue:true
            },
            ParentPhoneNumber:{
            	EmptyValue:true,
            	requiredNumber: true
            },
            ParentEmail:{
            	EmptyValue:true,
//                email: true,
                maxlengthcustom: 80 ,
	        },
			ParentDocumentNumber:{
            	EmptyValue:true,
                requirewithoption:DOC_TYPE_CMND,
                maxlengthcustom: 15,
                minlengthwithdata: 8,
                isletterandnumber: true
			},
			ParentDocumentIssuePlace: {
            	EmptyValueForeignNPR:CUSTOMER_TYPE_FOREIGN,
                minlengthcustomernpr: CUSTOMER_TYPE_FOREIGN,
                maxlengthcustom: 80,
                //isletterandnumberwithspace: true
            },
            ParentBirthDay:{
				EmptyValue:true,
				isDate:true,
				requiredbirthday: true
			},
			ParentDocumentIssueDate: {
            	EmptyValue:true,
                isDate:true,
                lessthancurrentdate:true,
                requiredlessthanyear:15
			},
			ParentCompanyName :{
				EmptyValueByCustomerType:CUSTOMER_TYPE_COMPANY,
			},
			ParentTaxcode :{
				EmptyValueByCustomerType:CUSTOMER_TYPE_COMPANY,
				maxlengthcustom: MAX_TAX_CODE_LENGTH,
			},
			ParentAddTown :{
				EmptyValue:true,
			},
			ParentAddRoad : {
				EmptyValue:true,
			},
			ParentPriceRoad: {
				EmptyValue:true,
			},
			ParPriceTown: {
				EmptyValue:true,
			},
			AddressCustomer:{
				EmptyValue:true,
                minlengthcustomersubscriber: CUSTOMER_TYPE_FOREIGN
			 },
			SubScriberCustomerNumber:{
				EmptyValue:true,
                required: true,
                maxlengthcustom: 255
			},
	        NumberSIM:{
	        	EmptyValue:true,
	            required: true,
	            maxlengthcustom: 255
	        },	
			// Begin validate list prepaid
// PreComanyName:{
// EmptyValueOptionsPreCustomer: CUSTOMER_TYPE_COMPANY
// },
// PreTaxIdentificationNumber:{
// EmptyValueOptionsPreCustomer: CUSTOMER_TYPE_COMPANY
// },
	        PreAddress:{
	        	EmptyValue:true,
	        	minlengthcustomersubscriber: CUSTOMER_TYPE_FOREIGN
	        }
			// End validate list prepaid
        },
        messages: {
        	FullName: {
        		EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.emptyvalue'),
//        		isletterwithlength: $translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.letter.required'),
        		maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.maxlength')
            },
            NPRegistrationName: {
                required: "Yêu cầu nhập tên đăng ký NP",
                maxlengthcustom: "Tên đăng ký NP không vượt quá 255 ký tự."
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
//            	minlengthcustomernpr: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.minlength'),
            	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.maxlength'),
            	//isletterandnumberwithspace: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.letter.required'),
            },
            Citizen: {
            	EmptyValue:"Yêu cầu nhập quốc tịch"
            },
            SubscriberRepresentative: {
                required: "Yêu cầu nhập tên đại diện thuê bao",
                maxlengthcustom: "Tên đại diện thuê bao không vượt quá 255 ký tự."
	            },
            SubdataDNONumber:{
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.emptyvalue'),
	        	requiredNumber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.required.number')
	        
	        },
	        DnoContractNumber:{
	        	EmptyValueOptions: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.emptyvalue'),
	        	isletterandnumber: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.letter.required'),
	        	maxlengthcustom: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.maxlength'),
	        	minlengthwithdata: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.minlength'),
	        },
	        Comments:{
	        	required: "Yêu cầu nhập ghi chú",
	        	EmptyValue: "Yêu cầu nhập ghi chú"
	        },
	        SubDNOContractDateRes:{
	        	EmptyValueOptions: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.emptyvalue'),
	        	isDate: 		$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.isdate'),
	        	lessthancurrentdate:$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.lessthancurrentdate')
	        },
	        Email:{
	        	email: 				$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.email'),
                maxlengthcustom:  	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.email.maxlength'),
		    },
            Address:{
            	EmptyValueForeignNPR:$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.emptyvalue'),
                minlengthcustomernpr: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.minlength'),
                maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.maxlength'),
                //isletterandnumberwithspace : $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.letter.requried'),
	            },
	        Province:{
	            required: "Yêu cầu nhập địa chỉ",
	            maxlengthcustom: "Địa chỉ không đúng định dạng."
	            }, 
		            
	        ReprentativeName:{
	        	EmptyValueDocumentType: "Yêu cầu nhập người đại diện"
	            }, 
	        RepresentativePosition:{
	        	EmptyValueDocumentType: "Yêu cầu nhập Chức vụ"
	            },
            RepresentativeDocNumber:{
            	EmptyValueDocumentType: "Yêu cầu nhập số giấy tờ người đại diện"
            }, 
            RepresentativeDocDate:{
            	isDate: 			 $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.doc.date.isdate'),
                lessthancurrentdate: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.doc.date.lessthancurrentdate'),
                requiredlessthanyear:$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.doc.date.requiredlessthanyear')
	         },
            ParentSurname:{
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.surname.required')
            },
            ParentName:{
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.name.required')
            },
            ParentPhoneNumber:{
            	EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required'),
            	requiredNumber: $translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required.number'),
            },
            ParentEmail:{
            	EmptyValue:			$translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email.required'),
//                email: 				$translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email'),
                maxlengthcustom:  	$translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email.maxlength'),
	        },
			ParentDocumentNumber:{
				EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.required'),
                requirewithoption: $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.number.requirewithoption'),
                maxlengthcustom: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.maxlength'),
                minlengthwithdata: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.minlength'),
                isletterandnumber:$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.letter.required'),
            },
            ParentDocumentIssuePlace: {
            	EmptyValueForeignNPR: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.emptyvalue'),
            	minlengthcustomernpr: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.minlength'),
            	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.maxlength'),
            	//isletterandnumberwithspace: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.letter.required'),
            },
            ParentBirthDay:{
				EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.empty'),
				isDate:$translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.isdate'),
				requiredbirthday: $translate.instant('vnm.mnp_message.registration.postpaid.validate.birthday.maxminage')
            },
			ParentDocumentIssueDate: {
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.required'),
                isDate:  $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.isdate'),
                lessthancurrentdate: $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.lessthancurrentdate'),
                requiredlessthanyear: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.date.required.less.than.yearcmt')
			},
			ParentTaxcode :{
				EmptyValueByCustomerType:$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.required'),
				maxlengthcustom: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.max.length')
			},
			ParentCompanyName :{
				EmptyValueByCustomerType:$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.company.name.required'),
			},
			ParentAddTown :{
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required')
			},
			ParentAddRoad : {
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required')
			},
			ParPriceTown: {
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required')
			},
			ParentPriceRoad : {
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required')
			},
         // Begin validate list prepaid
            PreAddress:{
                EmptyValue: "Yêu cầu nhập địa chỉ",
                minlengthcustomersubscriber: "Địa chỉ không ít hơn 5 ký tự"
            }
         // End validate list prepaid
	      }
	    } 

    
	 // Validate method custom
    $.validator.addMethod("requirewithoption", function (value, element, options) {
    	if (StringUtilNVL($scope.model.documentType).toString() === DOC_TYPE_CMND) {
	    		// check CMT nho hon 8 va nho hon 15
	           var valueLenght = $.trim(value.toString()).length;
	           
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
	 
	 $.validator.addMethod("minlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght<options) return false;
		 return true;
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
	 
	 $.validator.addMethod("lessthancurrentdate", function (value, element) {
        if (value === "") return true;
        if($.trim(value)=="") return true;
        var today = moment();
        return (moment(today, "DD/MM/YYYY") > moment(value, "DD/MM/YYYY"));
     }, "");
	 
	 $.validator.addMethod("EmptyValueDocumentType", function (value, element, options) {
		 if($scope.model.documentType == options){
		        if (value == undefined || value=="") return false;
		        if($.trim(value)=="") return false;
		 }
		 return true;
	 }, "");
	 
    $.validator.addMethod("EmptyValueByCustomerType", function (value, element, options) {
        var valueLenght = $.trim(value.toString()).length;
		if(StringUtilNVL($scope.model.customerTypeNPR) == options && valueLenght == 0 ) return false;
		return true;
    }, "");
	    
	 $.validator.addMethod("EmptyValueForeignNPR", function (value, element, options) {
        var valueLenght = $.trim(value.toString()).length;
		if(StringUtilNVL($scope.model.customerTypeNPR) != options && valueLenght == 0 ) return false;
		return true;
	 }, "");
	    
	 $.validator.addMethod("minlengthcustomernpr", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(StringUtilNVL($scope.model.customerTypeNPR) != options && valueLenght < 5 ) return false;
		 return true;
	    }, "");
	 
	 $.validator.addMethod("requiredbirthday", function (value, element ) {
	        if (value === "") return true;
	        var birthDay = moment(value, "DD/MM/YYYY")
	        var minYearBirthday = moment().add(MIN_YEAR_BIRTHDAY_POSTPAID, 'years');
	        var maxYearBirthday = moment().add(MAX_YEAR_BIRTHDAY, 'years');
	        
	        if((birthDay > minYearBirthday) || (birthDay < maxYearBirthday)){
	        	return false;
	        }
	        return true;
	 }, "");
	 $.validator.addMethod("minlengthcustomersubscriber", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(StringUtilNVL($scope.model.preCustomerType) != options && valueLenght < 5 ) return false;
		 return true;
	    }, "");
	 
	 $.validator.addMethod("maxlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght >  options) return false;
		 return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValueOptions", function (value, element, options) {
// if($scope.model.accountTypeVNM == options){
// if (value == undefined || value=="") return false;
// if($.trim(value)=="") return false;
// }
		 
		 return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValueOptionsCompany", function (value, element, options) {
		 if($scope.model.postCustomerType == options){
		        if (value == undefined || value=="") return false;
		        if($.trim(value)=="") return false;
		 }
		 return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValueOptionsPreCustomer", function (value, element, options) {
		 if($scope.model.preCustomerType == options){
		        if (value == undefined || value=="") return false;
		        if($.trim(value)=="") return false;
		        return true;
		 }
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
	// END VALIDATE METHOD CUSTOM
	          
	$scope.RegionSource = [
		 { 'Id': '1', 'Title': 'Miền bắc' },
		 { 'Id': '2', 'Title': 'Miền trung' },
		 { 'Id': '3', 'Title': 'Miền nam' }
	];
    
    $scope.CountrySource  = [
    ]; 
    
    $scope.ProvinceSource  = []; 
    
    $scope.AccountTypeDNOSource  = [
        { 'Id': 'Prepaid', 'Title': 'Trả trước' },
        { 'Id': 'Postpaid', 'Title': 'Trả sau' },
        { 'Id': 'Prepaid_Postpaid', 'Title': 'Trả trước & Trả sau' },
    ];
    
    $scope.DocumentTypeSource  = [
        { 'Id': 'NPR_CMT', 'Title': 'CMND' },
        { 'Id': 'NPR_HC', 'Title': 'Hộ chiếu' },
        { 'Id': 'NPR_TCC', 'Title': 'Thẻ căn cước' },
        { 'Id': 'NPR_VISA', 'Title': 'Thị thực' },
        { 'Id': 'NPR_XACNHAN_DNO', 'Title': 'Văn bản xác nhận của DNO'},
        { 'Id': 'NPR_DKCM', 'Title': 'Phiếu đăng ký chuyển mạng'},
        { 'Id': 'NPR_LOAIKHAC', 'Title': 'Loại khác'}
    ];
    
    
    //DatBD2
    $scope.CustomerTypeSource  = [
        { 'Id': '1', 'Title': 'Cá nhân' },
     
        { 'Id': '2', 'Title': 'Tổ chức' }
    ];
    
    $scope.CustomerTypeSourcePrepaid  = [
        { 'Id': '1', 'Title': 'Cá nhân' },
        { 'Id': '2', 'Title': 'Tổ chức' }
    ];
    
    $scope.CustomerTypeSourcePostpaid  = [
        { 'Id': '1', 'Title': 'Cá nhân' },
        { 'Id': '2', 'Title': 'Tổ chức' }
    ];
    
    $scope.GenderTypeSource  = [
        { 'Id': '0', 'Title': 'Nam' },
        { 'Id': '1', 'Title': 'Nữ' }
    ];
    
    $scope.PaymentsLevelSource = [
    		 { 'Id': '1', 'Title': '1.000.000' },
    	     { 'Id': '2', 'Title': '2.000.000' }
    ];
    
    $scope.PaymentsLevelSource = [
			 { 'Id': '1', 'Title': 'Visa' },
		     { 'Id': '2', 'Title': 'Thẻ nội địa' }
	];
    $scope.AddressPaymentsSource = [
			 { 'Id': '1', 'Title': 'Nhà riêng' },
		     { 'Id': '2', 'Title': 'Cơ quan' }
	];
    $scope.BankNameSource = [
			 { 'Id': '1', 'Title': 'Vietcombank' },
		     { 'Id': '2', 'Title': 'Vietinbank' }
	];
    $scope.CosNotiTypeSource = [
			 { 'Id': '1', 'Title': 'Loại TBC 1' },
		     { 'Id': '2', 'Title': 'Loại TBC 2' }
	];
    
    $scope.PackageTypeSource  = [];
    $scope.PackageTypeSourcePrepaid  = [];
    
    $scope.model.fileAttachments = [];
  // End set data source select box
    
    // UPLOADER CREATE NPR
    var uploader = $scope.uploader = new FileUploader({
        url: eim_url+'/bs/npr/upload'
    });
    
    // CONFIG UPLOADER SET LIMIT QUEUE
    uploader.queueLimit = 10;
    
    // ANOTHER USER-DEFINED FILTER SET MAX FILE SIZE
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
        	
        	var sizeFile = item.size;
        	if(sizeFile <= MAX_TOTAL_FILE_LENGTH_BYTE){
        		return true;
        	}else{
        		var fileName = item.name;
        		var message = MESS_ITEM_SIZE_ERROR.replace(/###/, fileName);
        		 bootbox.alert(message);
        		return false;
        	}
        }
    });
    
    uploader.onAfterAddingFile = function(item){
    	item._file.name = ConvertFileNameNoneUTF8(item.file.name);
    	item.file.name = ConvertFileNameNoneUTF8(item.file.name);
    }
    
    uploader.onAfterAddingAll = function(items){
    	var lengthOfqueue = uploader.queue.length;
    	if(lengthOfqueue > MAX_FILE_UPLOADER){
    		bootbox.alert($translate.instant('vnm.mnp_message.common.max.number.file.upload'));
    	 	uploader.removeFromQueue(MAX_FILE_UPLOADER);
    	}
    	
    	var checkListTotalSize = getTotalSizeListFileUpload(uploader);
    	if(!checkListTotalSize){
    		bootbox.alert(MESS_TOTAL_SIZE_ERROR);
    		
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
    	 //bootbox.alert("Có lỗi xảy ra trong quá trình upload file.");
    }
    
    /* BEGIN UPLOAD LIST SUBSCRIBER PREPAID */
    var uploaderListPrepaid = $scope.uploaderListPrepaid = new FileUploader({
        url: eim_url+'/bs/npr/listsubscriber'
    });
    
    $scope.fileNameTemplatePrePaid = "";
    $scope.isDisabledListImagePrePaidSpan = true;
    
    uploaderListPrepaid.queueLimit = 1;
    $scope.dataSubscriberPreTemplate = [];
    
    // Another user-defined filter set max file size
    uploaderListPrepaid.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		if(fileExtValue.toUpperCase() !="xlsx".toUpperCase() && fileExtValue.toUpperCase()!="xls".toUpperCase() ){
    			bootboxAlertTitle(TAB_HEADER_PREPAID,UPLOAD_FILE_TEMPLATE_ERROR);
    			return false;
    		}
    		
        	if(sizeFile <= MAX_TOTAL_FILE_LENGTH_BYTE){
        		return true;
        	}else{
        		var message = MESS_ITEM_SIZE_ERROR.replace(/###/, fileName);
        		 bootbox.alert(message);
        		return false;
        	}
        }
    });
    
    
  // set data before upload for each item
    uploaderListPrepaid.onBeforeUploadItem  = function(item){
    	overLoading();
    	$scope.fileNameTemplatePrePaid = item._file.name;
        item.headers = {
	       Authorization: 'Bearer '+ $localStorage.clientContext.token
	     };
        var PACKAGE_TYPE_PREPAID = StringUtilNVL($scope.model.prePackageType);
        
        var customerType = StringUtilNVL($scope.model.preCustomerType);
        
    	var provincePrepaid = StringUtilNVL(checkModelVisible($scope.model.preProvince)?"": 
    		StringUtilNVL($scope.model.preProvince.provinceName));
    	
    	var districtPrepaid = StringUtilNVL(checkModelVisible($scope.model.preDistrict)?"": 
    		StringUtilNVL($scope.model.preDistrict.districtName));
    	
    	
		
        var form_data = new FormData();
        form_data.append("accountTypeRequest", ACCOUNT_TYPE_PREPAID);
        form_data.append("packageTypeRequest", PACKAGE_TYPE_PREPAID);
        
        form_data.append("province", provincePrepaid);
        form_data.append("district", districtPrepaid);
        form_data.append("customerType", customerType);
        //DatBD2
        form_data.append("subUseType" , $scope.model.subUseType);
        form_data.append("typeCardCompany", StringUtilNVL($scope.model.typeCardCompany));
        form_data.append("taxCode", $scope.model.preTaxIdentificationNumber);
        form_data.append("shopCode",StringUtilNVL($localStorage.clientContext.shop.shopCode));
        form_data.append("staffCode",StringUtilNVL($localStorage.clientContext.shop.staffCode));
        form_data.append("subPaymentType",StringUtilNVL($scope.model.subPaymentType));
        //end
        var fileNameInput = ConvertFileNameNoneUTF8(item._file.name);
        form_data.append("fileNameInput", fileNameInput);
        
    	item.formData.push(form_data);
    }

    uploaderListPrepaid.onAfterAddingFile = function (item){
    }
    
    $scope.removeAllItemListPrePaid =  function(){
    	// xóa danh sách thuê bao trả trước
    	$scope.dataSubscriberPreTemplate = [];
    	uploaderListPrepaid.clearQueue();
    	
    	// remove list image
    	$("#btnUploaderListImagePrePaid").attr('disabled', 'disabled');
    	$("#spanUploaderListImagePrePaid").attr('disabled', 'disabled');
    	$scope.isDisabledListImagePrePaidSpan = true;
    	
    	// xóa file name
    	$scope.fileNameTemplatePrePaid = "";
    	
    	// xóa danh sách ảnh thuê bao trả trước
    	$scope.listFileImageUploadedPrepaid = [];
    	uploaderListImagePrePaid.clearQueue();
    }
    
    // on item upload success
    $scope.isListSubscriberError = false;
    uploaderListPrepaid.onSuccessItem = function (fileItem, response, status, headers) {
    	
    	if(response.code == VALIDATE_LIST_CUSTOMER_KO){
        	$scope.dataSubscriberPreTemplate = response.listResult;
        	$scope.tableParams = new NgTableParams({}, {
    			dataset : $scope.dataSubscriberPreTemplate
    		});
        	$scope.isListSubscriberError = true;
        	
        	bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_PREPAID, MESSAGE_LIST_SUBSCRIBER_PREPAID_VALIDATE_ERROR));
        	
        	closeOverLay();
    		return ;
    	}
    	
    	$scope.isListSubscriberError = false;
    	
    	$scope.dataSubscriberPreTemplate = response;
    	$scope.tableParams = new NgTableParams({}, {
			dataset : response
		});
    	
    	$("#btnUploaderListImagePrePaid").removeAttr("disabled");
    	$("#spanUploaderListImagePrePaid").removeAttr("disabled");
    	$scope.isDisabledListImagePrePaidSpan = false;
    	closeOverLay();
    };
    
    // on item upload error
    uploaderListPrepaid.onErrorItem = function (fileItem, response, status, headers) {
    	closeOverLay();
    	$scope.fileNameTemplatePrePaid = "";
    	if(response.code== KO_PACKAGE_TYPE_CODE){
    		bootbox.alert(MESSAGE_PACKAGE_TYPE_ERROR_PREPAID);
    		return ;
    	}
    	
    	if(response.code== MAX_LENGTH_TEM_PRIV_RECORD_ERROR){
    		bootbox.alert(response.message);
    		return ;
    	}
    	
    	if(response.code== MAX_LENGTH_TEM_COM_RECORD_ERROR){
    		bootbox.alert(response.message);
    		return ;
    	}
    	
    	if(response.code== TEMPLATE_REQUIRED_CUSTOMER_TYPE_COMPANY_ERROR){
    		bootbox.alert(response.message);
    		return ;
    	}
    	
    	bootbox.alert(MESSAGE_LIST_SUBSCRIBER_PREPAID_ERROR);
    }
    uploaderListPrepaid.onAfterAddingAll = function(items){
    	if(items!=null){
    		uploaderListPrepaid.uploadAll();	
    	}
	} 
    
    /* END UPLOAD LIST SUBSCRIBER PREPAID */
    
    /* ==BEGIN UPLOAD LIST IMAGE PREPAID== */
    var uploaderListImagePrePaid = $scope.uploaderListImagePrePaid = new FileUploader({
        url: eim_url+'/bs/npr/uploadImage'
    });
    
    $scope.listFileImageUploadedPrepaid = [];
    
    uploaderListImagePrePaid.filters.push({
        'name': 'typeImage',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		var isImageFile = $scope.isImage(fileExtValue);
    		if(!isImageFile){
        		bootboxAlertTitle(TAB_HEADER_PREPAID,FILE_IMAGE_UPLOAD);
    			return false;
    		}
    		 
        	if(sizeFile <= MAX_FILE_LENGTH){
        		return true;
        	}else{
        		var message = MESS_MAX_SIZE_IMAGE_ITEM.replace(/###/, setStrongLabel(fileName));
        		
        		bootboxAlertTitle(TAB_HEADER_PREPAID, message);
        		
        		return false;
        	}
        }
    });
    
    uploaderListImagePrePaid.onAfterAddingFile = function(item){
		var fileName = ConvertFileNameNoneUTF8(item._file.name);
		
		var objectAttachMent = getAttachmentImageByName($scope.dataSubscriberPreTemplate,$scope.ImageSource, fileName);
		
		if(objectAttachMent!=null){
			item.attachmentType = objectAttachMent.attachmentType;
			item.attachMentIdClient = objectAttachMent.attachMentIdClient;
		}
	}
        
	 // set data before upload for each item
	uploaderListImagePrePaid.onBeforeUploadItem  = function(item){
    	overLoading();
    	var identityDocType = StringUtilNVL(item.attachmentType);
    	var identityDocNote = StringUtilNVL(item.identityDocNote);
    	
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
	uploaderListImagePrePaid.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.listFileImageUploadedPrepaid.push(response);
	};
    
    // on item upload error
    uploaderListImagePrePaid.onErrorItem = function (fileItem, response, status, headers) {
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
    
    $scope.removeItemListImagePrepaid = function(item, indexItem){
    	item.remove();
    }
    
    $scope.removeAllItemListImagePrePaid =  function(){
    	 $scope.listFileImageUploadedPrepaid = [];
    	 uploaderListImagePrePaid.clearQueue()
    }
    
    /* END UPLOAD LIST IMAGE PREPAID */
    
    /* BEGIN UPLOAD LIST SUBSCRIBER POSTPAID */
    var uploaderListPostpaid = $scope.uploaderListPostpaid = new FileUploader({
        url: eim_url+'/bs/npr/listsubscriberpostpaid'
    });
    
    $scope.fileNameTemplatePostPaid = "";
    uploaderListPostpaid.queueLimit = 1;
    $scope.isDisabledListImagePostPaidSpan = true;
    $scope.dataSubscriberPostTemplate = [];
    
    // Another user-defined filter set max file size
    uploaderListPostpaid.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		if(fileExtValue!="xlsx"){
    			bootbox.alert("File template là file excel xlsx");
    			return false;
    		}
    		
        	if(sizeFile <= MAX_TOTAL_FILE_LENGTH_BYTE){
        		return true;
        	}else{
        		var message = MESS_ITEM_SIZE_ERROR.replace(/###/, fileName);
        		bootbox.alert(message);
        		return false;
        	}
        }
    });
    
    //lấy giá trị text theo value
    $scope.getTextByValueOfCmGlModel = function(listCMGLModel, valueInput){
    	var textOutput = "";
    	for(var i =0;i <listCMGLModel.length; i++){
    		if(StringUtilNVL(listCMGLModel[i].glCodeValueEn) == StringUtilNVL(valueInput)){
    			textOutput = listCMGLModel[i].glCodeValueVn;
    			break;
    		} 
    	}
    	
    	return textOutput;
    }
    
  // set data before upload for each item
    uploaderListPostpaid.onBeforeUploadItem  = function(item){
    	overLoading();
    	$scope.fileNameTemplatePostPaid = item._file.name;
        item.headers = {
	       Authorization: 'Bearer '+ $localStorage.clientContext.token
	     };
        
        var customerType = StringUtilNVL($scope.model.customerTypeNPR);
        
        var PACKAGE_TYPE_POSTPAID = StringUtilNVL($scope.model.postpaid.PackageType);
        var CUSTOMER_SEGMENT_POSTPAID = StringUtilNVL($scope.model.postpaid.levelCustomer);
        
        var parentPhoneNumber = StringUtilNVL($scope.model.postpaid.parPhoneNumber);
		var parentBirthDay = StringUtilNVL($("#ParentBirthDay").val());
		var parentDocumentNumber = StringUtilNVL($scope.model.postpaid.parDocumentNumber);
		
		var parentDocumentIssuePlace = StringUtilNVL($scope.model.postpaid.parDocumentIssuePlace);
		var parentDocumentIssueDate = StringUtilNVL($("#ParentDocumentIssueDate").val());
		var parentCountry = StringUtilNVL($scope.model.postpaid.parCountry);
		var parentCountryText = $scope.getTextByValueOfCmGlModel($scope.CountryPostpaidSource,StringUtilNVL($scope.model.postpaid.parCountry));
		
		var parentEmail = StringUtilNVL($scope.model.postpaid.parEmail);
		var parentTaxcode = StringUtilNVL($scope.model.postpaid.parTaxcode);
		var parentCompanyName = StringUtilNVL($scope.model.postpaid.parCompanyName);
		var parGenderType = StringUtilNVL($scope.model.postpaid.parGenderType);
		
		//set địa chỉ nơi ở trong file template
		var billDistrictVal = StringUtilNVL(checkModelVisible($scope.model.postpaid.parAddDistrict)?"": 
    		StringUtilNVL($scope.model.postpaid.parAddDistrict.districtName));
    	
    	var billProvinceVal = StringUtilNVL(checkModelVisible($scope.model.postpaid.parAddProvince)?"": 
    		StringUtilNVL($scope.model.postpaid.parAddProvince.provinceName));
    	
    	var billRegion = StringUtilNVL($scope.model.postpaid.parAddRegion);
    	var billTown = StringUtilNVL($scope.model.postpaid.parAddTown);
    	var billRoad = StringUtilNVL($scope.model.postpaid.parAddRoad);
    	var billNumberHome = StringUtilNVL($scope.model.postpaid.parAddNumberHome);
    	var billBuildingName = StringUtilNVL($scope.model.postpaid.parAddBuildingName);
    	var billRoomNumber = StringUtilNVL($scope.model.postpaid.parAddRoomNumber);
	    
    	//set địa chỉ hoa đơn trong file template
		var postaDistrictVal = StringUtilNVL(checkModelVisible($scope.model.postpaid.parPriceDistrict)?"": 
    		StringUtilNVL($scope.model.postpaid.parPriceDistrict.districtName));
    	
    	var postaProvinceVal = StringUtilNVL(checkModelVisible($scope.model.postpaid.parPriceProvince)?"": 
    		StringUtilNVL($scope.model.postpaid.parPriceProvince.provinceName));
    	
    	var postaRegion = StringUtilNVL($scope.model.postpaid.parPriceRegion);
    	var postaTown = StringUtilNVL($scope.model.postpaid.parPriceTown);
    	var postaRoad = StringUtilNVL($scope.model.postpaid.parPriceRoad);
    	var postaNumberHome = StringUtilNVL($scope.model.postpaid.parPriceNumberHome);
    	var postaBuildingName = StringUtilNVL($scope.model.postpaid.parPriceBuildingName);
    	var postaRoomNumber = StringUtilNVL($scope.model.postpaid.parPriceRoomNumber);
    	
        var form_data = new FormData();
        //DatBD2
        form_data.append("subUseType" , $scope.model.subUseType);
        form_data.append("typeCardCompany", StringUtilNVL($scope.model.typeCardCompany));
        form_data.append("taxCode", $scope.model.preTaxIdentificationNumber);
        form_data.append("shopCode",StringUtilNVL($localStorage.clientContext.shop.shopCode));
        form_data.append("staffCode",StringUtilNVL($localStorage.clientContext.shop.staffCode));
        form_data.append("subPaymentType",StringUtilNVL($scope.model.subPaymentType));
        //end
        form_data.append("customerType", customerType);
        form_data.append("accountTypeRequest", ACCOUNT_TYPE_POSTPAID);
        form_data.append("packageTypeRequest", PACKAGE_TYPE_POSTPAID);
        form_data.append("customerSegment", CUSTOMER_SEGMENT_POSTPAID);
        
        form_data.append("parentPhoneNumber", parentPhoneNumber);
        form_data.append("parentBirthDay", parentBirthDay);
        form_data.append("parentDocumentNumber", parentDocumentNumber);
        
        form_data.append("parentDocumentIssuePlace", parentDocumentIssuePlace);
        form_data.append("parentDocumentIssueDate", parentDocumentIssueDate);
        form_data.append("parentCountry", parentCountry);
        form_data.append("parentCountryText", parentCountryText);
        
        form_data.append("parentEmail", parentEmail);
        form_data.append("parentTaxcode", parentTaxcode);
        form_data.append("parentCompanyName", parentCompanyName);
        form_data.append("parGenderType", parGenderType);
        
        //dia chi noi o
        form_data.append("billRegion", billRegion);
        form_data.append("billProvince", billProvinceVal);
        form_data.append("billDistrict", billDistrictVal);
        form_data.append("billTown", billTown);
        form_data.append("billRoad", billRoad);
        
        form_data.append("billNumberHome", billNumberHome);
        form_data.append("billBuildingName", billBuildingName);
        form_data.append("billRoomNumber", billRoomNumber);
        
        //dia chi thong bao cuoc
        form_data.append("postaProvince", postaProvinceVal);
        form_data.append("postaDistrict", postaDistrictVal);
        form_data.append("postaRegion", postaRegion);
        form_data.append("postaTown", postaTown);
        form_data.append("postaRoad", postaRoad);
        
        form_data.append("postaNumberHome", postaNumberHome);
        form_data.append("postaBuildingName", postaBuildingName);
        form_data.append("postaRoomNumber", postaRoomNumber);
        
        var fileNameInput = ConvertFileNameNoneUTF8(item._file.name);
        form_data.append("fileNameInput", fileNameInput);
        
    	item.formData.push(form_data);
    }
    
    // on item list postpaid upload success
    $scope.isListPostpaidTemplateError = false;
    uploaderListPostpaid.onSuccessItem = function (fileItem, response, status, headers) {
    	
    	if(response.code == VALIDATE_LIST_CUSTOMER_KO){
        	$scope.dataSubscriberPostTemplate = response.listResult;
        	
        	$scope.dataSubscriberPostTemplateTable = $scope.converListPostpaidCustomerPresent(response.listResult);
        	
        	$scope.tableParamsPostPaid = new NgTableParams({}, {
    			dataset : $scope.dataSubscriberPostTemplateTable
    		});
        	
        	$scope.isListPostpaidTemplateError = true;
        	
        	bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_POSTPAID, MESSAGE_LIST_SUBSCRIBER_POSTPAID_VALIDATE_ERROR));
        	
        	closeOverLay();
    		return ;
    	}
    	
    	$scope.isListPostpaidTemplateError = false;
    	
    	$scope.dataSubscriberPostTemplate = response;
    	$scope.dataSubscriberPostTemplateTable = $scope.converListPostpaidCustomerPresent(response);
    	
    	$scope.tableParamsPostPaid = new NgTableParams({}, {
			dataset : $scope.dataSubscriberPostTemplateTable
		});
    	
    	closeOverLay();
    };
    
    $scope.converListPostpaidCustomerPresent = function(listPostpaidTemplate){
    	var listPostPaidCustomerOut = [];
    	for(var i =0; i< listPostpaidTemplate.length; i++){
    		var postpaidElement = {};
    		var fatherElement = listPostpaidTemplate[i];
    		
    		var personInformessageDB = fatherElement.personInfoMessage;
    		var postalAddressDataDB = fatherElement.postalAddressData;
    		var billingAddressDataDB = fatherElement.billingAddressData;
    		   		
    		postpaidElement.billType = StringUtilNVL(fatherElement.billType);
    		postpaidElement.paymentMethod = StringUtilNVL(fatherElement.paymentMethod);
    		postpaidElement.paymentType = StringUtilNVL(fatherElement.paymentType);
    		
    		postpaidElement.billTypeStr = StringUtilNVL(fatherElement.billTypeStr);
    		postpaidElement.paymentMethodStr = StringUtilNVL(fatherElement.paymentMethodStr);
    		postpaidElement.paymentTypeStr = StringUtilNVL(fatherElement.paymentTypeStr);
    		
    		postpaidElement.listNoteRecord = fatherElement.listNoteRecord;
    		var listProvisioningSubscriberDB = fatherElement.proSubscriberList;
    		
    		if(personInformessageDB != null){
    			postpaidElement.birthDate  		=  StringUtilNVL(personInformessageDB.birthDate);
    			postpaidElement.birthDateStr 	=  StringUtilNVL(personInformessageDB.birthDateStr); 
    			postpaidElement.bussinessLincense  =  StringUtilNVL(personInformessageDB.bussinessLincense);
    			postpaidElement.companyName  	=  StringUtilNVL(personInformessageDB.companyName);
    			postpaidElement.contactNumber  	=  StringUtilNVL(personInformessageDB.contactNumber);
    			postpaidElement.custLang  		=  StringUtilNVL(personInformessageDB.custLang);
    			postpaidElement.custLangStr  	=  StringUtilNVL(personInformessageDB.custLangStr);
    			postpaidElement.custType  		=  StringUtilNVL(personInformessageDB.custType);
    			postpaidElement.customerSegment =  StringUtilNVL(personInformessageDB.customerSegment);
    			postpaidElement.dateOfIssue  	=  StringUtilNVL(personInformessageDB.dateOfIssue);
    			postpaidElement.dateOfIssueStr 	= StringUtilNVL(personInformessageDB.dateOfIssueStr);
    			postpaidElement.emailAddress 	= StringUtilNVL(personInformessageDB.emailAddress);
    			postpaidElement.fullName 		= StringUtilNVL(personInformessageDB.fullName);
    			postpaidElement.firstName 		= StringUtilNVL(personInformessageDB.firstName);
    			postpaidElement.gender 			= StringUtilNVL(personInformessageDB.gender);
    			postpaidElement.genderStr 			= StringUtilNVL(personInformessageDB.genderStr);
    			postpaidElement.idNumber 		= StringUtilNVL(personInformessageDB.idNumber);
    			postpaidElement.lastName 		= StringUtilNVL(personInformessageDB.lastName);
    			postpaidElement.packetType 		= StringUtilNVL(personInformessageDB.packetType);
    			postpaidElement.placeOfIssue 	= StringUtilNVL(personInformessageDB.placeOfIssue);
    			postpaidElement.taxCode 		= StringUtilNVL(personInformessageDB.taxCode);
    		}
    		
    		if(listProvisioningSubscriberDB.length >0){
    			var provisioningSubscriberDB  = listProvisioningSubscriberDB[0];
    			if(provisioningSubscriberDB != null){
    				postpaidElement.msisdn = StringUtilNVL(provisioningSubscriberDB.msisdn) ;
        			postpaidElement.packageName = StringUtilNVL(provisioningSubscriberDB.packageName);
        			
        			postpaidElement.serialSim = StringUtilNVL(provisioningSubscriberDB.serialSim) ;
        			postpaidElement.accountTypeDNO = StringUtilNVL(provisioningSubscriberDB.accountTypeDNO) ;
        			postpaidElement.accountTypeDNOStr = StringUtilNVL(provisioningSubscriberDB.accountTypeDNOStr) ;
    			}
    		}

    		if(postalAddressDataDB != null){
    			postpaidElement.postalAddressLine 	= StringUtilNVL(postalAddressDataDB.postalAddressLine);
    			postpaidElement.postalBuildingName 	= StringUtilNVL(postalAddressDataDB.postalBuildingName);
    			postpaidElement.postalCountry 		= StringUtilNVL(postalAddressDataDB.postalCountry);
    			postpaidElement.postalDistrict 		= StringUtilNVL(postalAddressDataDB.postalDistrict);
    			postpaidElement.postalNumberHome 	= StringUtilNVL(postalAddressDataDB.postalNumberHome);
    			postpaidElement.postalProvince 		= StringUtilNVL(postalAddressDataDB.postalProvince);
    			postpaidElement.postalRegion 		= StringUtilNVL(postalAddressDataDB.postalRegion);
    			postpaidElement.postalRoad 			= StringUtilNVL(postalAddressDataDB.postalRoad);
    			postpaidElement.postalRoomNumber 	= StringUtilNVL(postalAddressDataDB.postalRoomNumber);
    			postpaidElement.postalTow 			= StringUtilNVL(postalAddressDataDB.postalTow);
    		}
    		if(billingAddressDataDB != null){
    			postpaidElement.billAddressLine 		= StringUtilNVL(billingAddressDataDB.billAddressLine);
    			postpaidElement.billBuildingName 		= StringUtilNVL(billingAddressDataDB.billBuildingName);
    			postpaidElement.billCountry 			= StringUtilNVL(billingAddressDataDB.billCountry);
    			postpaidElement.billDistrict 			= StringUtilNVL(billingAddressDataDB.billDistrict);
    			postpaidElement.billNumberHome 			= StringUtilNVL(billingAddressDataDB.billNumberHome);
    			postpaidElement.billProvince 			= StringUtilNVL(billingAddressDataDB.billProvince);
    			postpaidElement.billRegion 				= StringUtilNVL(billingAddressDataDB.billRegion);
    			postpaidElement.billRoad 				= StringUtilNVL(billingAddressDataDB.billRoad);
    			postpaidElement.billRoomNumber 			= StringUtilNVL(billingAddressDataDB.billRoomNumber);
    			postpaidElement.billTow 				= StringUtilNVL(billingAddressDataDB.billTow);
    		}
    		listPostPaidCustomerOut.push(postpaidElement);
    	}
    	return listPostPaidCustomerOut;
    }
    // on item upload error
    uploaderListPostpaid.onErrorItem = function (fileItem, response, status, headers) {
    	closeOverLay();
    	var message = "";
    	if(response.code== KO_PACKAGE_TYPE_CODE){
    		bootbox.alert(MESSAGE_PACKAGE_TYPE_ERROR_POSTPAID);
    		return ;
    	}
    	
    	if(response.code== MAX_LENGTH_TEM_PRIV_RECORD_ERROR){
    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_POSTPAID, response.message));
    		return ;
    	}
    	
    	if(response.code== MAX_LENGTH_TEM_COM_RECORD_ERROR){
    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_POSTPAID, response.message));
    		return ;
    	}
    	
    	$scope.fileNameTemplatePostPaid = "";
    	bootbox.alert(MESSAGE_LIST_SUBSCRIBER_PREPAID_ERROR);
    }
    
    uploaderListPostpaid.onAfterAddingAll = function(items){
    	if(items!=null){
    		uploaderListPostpaid.uploadAll();	
    	}
    }
    
    $scope.removeAllItemListPostPaid =  function(){
    	// xóa danh sách thuê bao trả sau
    	$scope.dataSubscriberPostTemplate = [];
    	uploaderListPostpaid.clearQueue();
    	
    	// remove file name
    	$scope.fileNameTemplatePostPaid = "";
    }
    
    /* END UPLOAD LIST SUBSCRIBER POSTPAID */
    
    /* BEGIN UPLOAD LIST IMAGE POSTPAID */
    var uploaderListImagePostPaid = $scope.uploaderListImagePostPaid = new FileUploader({
        url: eim_url+'/bs/npr/uploadImage'
    });
    
    $scope.listFileImageUploadedPostpaid = [];
    
    uploaderListImagePostPaid.filters.push({
        'name': 'typeImage',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		var isImageFile = $scope.isImage(fileExtValue);
    		if(!isImageFile){
    			bootbox.alert("Upload file PNG or JPG");
    			return false;
    		}
    		 
        	if(sizeFile <= MAX_TOTAL_FILE_LENGTH_BYTE){
        		return true;
        	}else{
        		var message = MESS_ITEM_SIZE_ERROR.replace(/###/, fileName);
        		bootbox.alert(message);
        		return false;
        	}
        }
    });
   
    uploaderListImagePostPaid.onAfterAddingAll = function(items){
	} 
	
    uploaderListImagePostPaid.onAfterAddingFile = function(item){
		var fileName = item._file.name;
		var objectAttachMent = getAttachmentImageByName($scope.dataSubscriberPostTemplate,$scope.ImageSource, fileName);
		
		if(objectAttachMent!=null){
			item.attachmentType = objectAttachMent.attachmentType;
			item.attachMentIdClient = objectAttachMent.attachMentIdClient;
		}

	}
	
	 // set data before upload for each item
    uploaderListImagePostPaid.onBeforeUploadItem  = function(item){
    	overLoading();
    	var identityDocType = StringUtilNVL(item.attachmentType);
    	var identityDocNote = StringUtilNVL(item.identityDocNote);
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
    uploaderListImagePostPaid.onSuccessItem = function (fileItem, response, status, headers) {
    		$scope.listFileImageUploadedPostpaid.push(response);
    };
    
    // on item upload error
    uploaderListImagePostPaid.onErrorItem = function (fileItem, response, status, headers) {
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
    
    $scope.removeItemListImagePostpaid = function(item, indexItem){
    	item.remove();
    }
    
    $scope.removeAllItemListImagePostPaid =  function(){
    	$scope.listFileImageUploadedPostpaid = [];
    	uploaderListImagePostPaid.clearQueue()
    }
    
    /* END UPLOAD LIST IMAGE POSTPAID */
    
    $scope.uploadAllFileListImagePre =  function(uploaderIn){
		// CHECK LIST IMAGE MAP CORRESPONDING WITH IMAGE IN FILE TEMPLATE
		// PREPAID
		 var checkListImagePrepaid = $scope.checkImageCorrespondingWithTemplate(uploaderListImagePrePaid, $scope.dataSubscriberPreTemplate);
		 if(!checkListImagePrepaid){
			 bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_PREPAID, MESSAGE_LIST_IMAGE_PREPAID_ERROR));
     		return ;
     	}
    	 
    	uploaderIn.uploadAll();	
		uploaderIn.onCompleteAll = function () {
			 closeOverLay();
		 }
    }
    
    $scope.uploadAllFileListImagePost =  function(uploaderIn){
   		// CHECK LIST IMAGE MAP CORRESPONDING WITH IMAGE IN FILE TEMPLATE
		// POSTPAID
    	var checkListImagePostpaid = $scope.checkImageCorrespondingWithTemplate(uploaderListImagePostPaid, $scope.dataSubscriberPostTemplate);
    	if(!checkListImagePostpaid){
    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_POSTPAID, MESSAGE_LIST_IMAGE_POSTPAID_ERROR));
    		return ;
    	}
   	 
    	uploaderIn.uploadAll();	
		uploaderIn.onCompleteAll = function () {
			 closeOverLay();
		 }
   }
    
    $scope.uploadAllFile =  function(uploaderIn){
    	overLoading(MESS_UPLOADING);
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
    
    
    $scope.checkPackageTypePrepaid = function(obj){
    	var resultCheckPackageType = true;
    	
    	var idButtonImageGetData = obj.target.id;
	   	 if(idButtonImageGetData == "btnListSubscriberUploaderPrePaid"){
	   		var validatePrepaidForm = validateListPrepaid($scope);
	   		if(!validatePrepaidForm){
	   			closeOverLay();
	   			resultCheckPackageType =  false;
	   		}
	     }
	   	 return resultCheckPackageType;
    }
    
    $scope.checkDataPostpaid = function(obj){
    	
    	var resultCheckPackageType = true;
    	var listFieldPARNotValidated = "";
    	
    	listFieldPARNotValidated = "<strong>"+ TAB_HEADER_POSTPAID +"</strong>"+BREAK_LINE;
    	TEXT_CHECK_PAR_VALIDATED = listFieldPARNotValidated;
    	
    	var idButtonImageGetData = obj.target.id;
	   	if(idButtonImageGetData == "btnListSubscriberUploaderPostPaid"){
	   		
	   		var countryMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.country.required')
	   		var messProvinceRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.province.required');
	   		var messDistrictRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.district.required');
	   		
	   		var customerType = StringUtilNVL($scope.model.customerTypeNPR);
	   		
	   		if(!StringUtilNVLIsNotEmpty(customerType)){
	   			closeOverLay();
	   			var customerTypeMess = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.customer.type.required');
	   			listFieldPARNotValidated += "+ "+ customerTypeMess +BREAK_LINE;
	   			
	   			resultCheckPackageType =  false;
	   		}
	   		
	   		var packagePostpaid = StringUtilNVL($scope.model.postpaid.PackageType);
	   		if(!StringUtilNVLIsNotEmpty(packagePostpaid)){
	   			
	   			var packageTypeRequeired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.required')
	   			listFieldPARNotValidated += "+ "+ packageTypeRequeired +BREAK_LINE;
	   			resultCheckPackageType =  false;
	   		}
	   		
	   		var customerLevel = StringUtilNVL($scope.model.postpaid.levelCustomer);
	   		if(!StringUtilNVLIsNotEmpty(customerLevel)){
	   			var levelCustomerMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.cus.level.required');
	   			listFieldPARNotValidated += "+ "+ levelCustomerMessRequired +BREAK_LINE;
	   			resultCheckPackageType =  false;
	   		}
	   		
	   		var parentPhoneNumber = StringUtilNVL($scope.model.postpaid.parPhoneNumber);
			if(!StringUtilNVLIsNotEmpty(parentPhoneNumber)){
				listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required') +BREAK_LINE;
				resultCheckPackageType =  false;
			}else if(StringUtilNVLIsNotEmpty(parentPhoneNumber)){
				if(!isNumbericInteger(parentPhoneNumber)){
					listFieldPARNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required.number') +BREAK_LINE;
					resultCheckPackageType =  false;
				}
			}
			
			var parentBirthDay = StringUtilNVL($("#ParentBirthDay").val());

			if(!StringUtilNVLIsNotEmpty(parentBirthDay)){
				resultCheckPackageType =  false;
				listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.empty') +BREAK_LINE;
			}else{
				if(StringUtilNVLIsNotEmpty(parentBirthDay) && !isDateValidate(parentBirthDay)){
					listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.isdate') +BREAK_LINE;
					resultCheckPackageType =  false;
				}else if(!validateBirthDay(parentBirthDay)){
					resultCheckPackageType =  false;
					listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.birthday.maxminage') +BREAK_LINE;			
				}
			}
			
			var parentDocumentNumber = StringUtilNVL($scope.model.postpaid.parDocumentNumber);

			if(!StringUtilNVLIsNotEmpty(parentDocumentNumber)){
				listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.required') +BREAK_LINE;
				resultCheckPackageType =  false;
			} else if(StringUtilNVLIsNotEmpty(parentDocumentNumber) && parentDocumentNumber.length <8){
				listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.minlength') +BREAK_LINE;
				result =  false;
			}else if(StringUtilNVLIsNotEmpty(parentDocumentNumber) && parentDocumentNumber.length >15){
				listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.maxlength') +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			var parentDocumentIssuePlace = StringUtilNVL($scope.model.postpaid.parDocumentIssuePlace);
			if(!StringUtilNVLIsNotEmpty(parentDocumentIssuePlace)){
				listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.place.emptyvalue') +BREAK_LINE;
				resultCheckPackageType =  false;
			}else if(StringUtilNVLIsNotEmpty(parentDocumentIssuePlace) && parentDocumentIssuePlace.length <5){
				listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.minlength')+BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			var parentDocumentIssueDate = StringUtilNVL($("#ParentDocumentIssueDate").val());
			if(!StringUtilNVLIsNotEmpty(parentDocumentIssueDate)){
				listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.required') +BREAK_LINE;
				resultCheckPackageType =  false;
			}else if(!validateDocumentIssueDate(parentDocumentIssueDate)){
				listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.date.popup') +BREAK_LINE;
				resultCheckPackageType =  false;
			}else{
				if(checkDateGreaterThanYear(parentDocumentIssueDate, PRESENT_YEAR)){
					listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.lessthancurrentdate') +BREAK_LINE;
					resultCheckPackageType =  false;
				}
			}
			
			var parentCountry = StringUtilNVL($scope.model.postpaid.parCountry);
			if(!StringUtilNVLIsNotEmpty(parentCountry)){
				setErrorClassElement("idParentCountryDiv", countryMessRequired);
				listFieldPARNotValidated += "+ "+countryMessRequired +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			var parentEmail = StringUtilNVL($scope.model.postpaid.parEmail);
			if(!StringUtilNVLIsNotEmpty(parentEmail)){
				listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email.required') +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			var parentTaxcode = StringUtilNVL($scope.model.postpaid.parTaxcode);
			if(customerType == CUSTOMER_TYPE_COMPANY){
				var parentCompanyName = StringUtilNVL($scope.model.postpaid.parCompanyName);
				if(!StringUtilNVLIsNotEmpty(parentCompanyName)){
					listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.company.name.required') +BREAK_LINE;
					resultCheckPackageType =  false;
				}
				
				if(!StringUtilNVLIsNotEmpty(parentTaxcode)){
					listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.required') +BREAK_LINE;
					resultCheckPackageType =  false;
				}
			}
			
			if(StringUtilNVLIsNotEmpty(parentTaxcode) && parentTaxcode.length > MAX_TAX_CODE_LENGTH){
				listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.max.length') +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			var parGenderType = StringUtilNVL($scope.model.postpaid.parGenderType);
			if(!StringUtilNVLIsNotEmpty(parGenderType)){
				var genderMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.gender.required')
				
				setErrorClassElement("idGenderDiv", genderMessRequired);
				listFieldPARNotValidated += "+ "+genderMessRequired +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			//Nơi ở Tỉnh thành phố
			var addressPostal = $translate.instant('vnm.mnp_message.registration.postpaid.posta.address.title');
			var notiBillingAddressTitle = $translate.instant('vnm.mnp_message.registration.postpaid.noti.bill.address.title');
			var billingAddressTitle = $translate.instant('vnm.mnp_message.registration.postpaid.sub.billing.addres.title');
			
			var parentAddProvince = StringUtilNVL($scope.model.postpaid.parAddProvince);
			if(!StringUtilNVLIsNotEmpty(parentAddProvince)){
				setErrorClassElement("idDivPostalParentProvince", messProvinceRequired);
				listFieldPARNotValidated += "+ "+addressPostal +" :"+ messProvinceRequired +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			//Nơi ở  quận huyện
			var parentAddProvince = StringUtilNVL($scope.model.postpaid.parAddDistrict);
			if(!StringUtilNVLIsNotEmpty(parentAddProvince)){
				setErrorClassElement("idDivPostalParentDistrict", messDistrictRequired);
				
				listFieldPARNotValidated += "+ "+addressPostal +" :"+  messDistrictRequired +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			//Nơi ở Phường xã
			var parentAddTown = StringUtilNVL($scope.model.postpaid.parAddTown);
			if(!StringUtilNVLIsNotEmpty(parentAddTown)){
				var messParentAddTownRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required');
				
				listFieldPARNotValidated += "+ "+addressPostal +" :"+ messParentAddTownRequired +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			//Nơi ở Đường
			var parentAddRoad = StringUtilNVL($scope.model.postpaid.parAddRoad);
			if(!StringUtilNVLIsNotEmpty(parentAddRoad)){
				var messParentAddRoadRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required');
				
				listFieldPARNotValidated += "+ "+addressPostal +" :"+ messParentAddRoadRequired +BREAK_LINE;
				resultCheckPackageType =  false;
			}
			
			
	   		if(!resultCheckPackageType){
	   			bootboxAlertInformation(ALERT_TITLE, listFieldPARNotValidated);
	   		}
	   	}
	   	 return resultCheckPackageType;
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
    }
    
    $scope.changeStatusFile =  function(item){
// item.isSuccess = false;
// item.isCancel= false;
// item.isError = false;
// item.isReady = false;
// item.isUploading = false;
// item.isSuccess= false;
    }
// END UPLOADER CREATE NPR

    var idAttachMentVal = null;
    var idAttachMentTypeInput = null;
    
    
    $scope.cancel = function () {
         return 1;
    }
    
    $scope.checkValid = function(obj){
    	if(obj== undefined || obj==null || obj=="") return true;
    	return false;
    }
    
	$scope.resetFormPrepaid = function(){
		$scope.model.preCustomerType = "";
		$scope.model.preProvince = "";
		$scope.model.preDistrict = "";
		$scope.model.preComanyName = "";
		$scope.model.preTaxIdentificationNumber = "";
		$scope.model.preAddress = "";
		$scope.model.prePackageType = "";
		$scope.removeAllItemListPrePaid();
	}
	
	$scope.resetFormPostpaid = function(){
		$scope.model.postpaid = {};
		$scope.DistrictSourceParentAddress = [];
		$scope.DistrictSourcePrice = [];
		$scope.removeAllItemListPostPaid();
	}
    
    $scope.accountTypeChangeFn = function(val){
    	$scope.model.customerTypeNPR = "";
    	$scope.model.documentType = "";
    	
    	$scope.LevelCustomerSource  = [];
//    	$scope.model.postpaid.levelCustomer = "";
    	
    	$scope.CustomerTypeSource = [];
    	$scope.IdentityTypeSource = [];
    	
    	if(val == ACCOUNT_TYPE_PREPAID){
    		$("#idTabListPostpaid").hide();
    		$("#idTabListPrepaid").show();
    		$scope.resetFormPostpaid();
    		$scope.CustomerTypeSource = $scope.CustomerTypeSourcePrepaid;
    	}else if(val == ACCOUNT_TYPE_POSTPAID){
    		$("#idTabListPrepaid").hide();
    		$("#idTabListPostpaid").show();
    		$scope.CustomerTypeSource = $scope.CustomerTypeSourcePostpaid;
    		$scope.resetFormPrepaid();
    		$scope.copyNameCustomer();
    	}else if(val == ACCOUNT_PREPAID_POSTPAID){
    		$("#idTabListPrepaid").show();
    		$("#idTabListPostpaid").show();
    	}
    	
    }
    
	 $scope.model.accountTypeVNM = ACCOUNT_TYPE_PREPAID;
	 $scope.accountTypeChangeFn(ACCOUNT_TYPE_PREPAID);
	 
    $scope.onclickConfirmSave = function(){
    	bootboxConfirm(PREPAID_NPR_HEADER, CONFIRM_MESSAGE_PORT_IN, $scope.confirmOK, $scope.confirmKO);
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
  	
	$scope.save = function () {
	  	
		var isValidateAllForm = validateAllForm($scope, $translate);
	    if ($scope.frm_registration_list.validate() && isValidateAllForm) {
	    	
	    	var isFileUploadedSuccess = $scope.checkAllFilePageUploaded();
	    	if(!isFileUploadedSuccess){
		   		return false;
	    	}
	    		   	
	    	var checkFileAlreadyUpload = false;
	    	var checkFileCustomerAlreadyUpload = false;
	    	
	    	var checkTotalFileSize = false;
	    	var checkAllFileUploaded = false;
	    	
	    	var checkAllFileFileCustomerUploaded = false;
	    	var checkAllFileCustomerUploaded = false;
	    	    	
	    	var customerType = StringUtilNVL($scope.model.customerTypeNPR);
	    	// check size list upload dkcm
	    	checkListTotalSize = getTotalSizeListFileUpload(uploader);
	    	if(!checkListTotalSize){
	    		bootbox.alert(MESS_TOTAL_SIZE_ERROR);
	    		checkTotalFileSize = false;
	    		return 0;
	    	}else{
	    		checkTotalFileSize = true;
	    	}
	    	
	    	var msisdnTabNPR = StringUtilNVL($scope.model.subDataNumber);
	    	/* BEGIN CHECK FILE UPLOAD LIST BEFORE COMMIT */
	    	if(isAccountTypePrepaid($scope.model.accountTypeVNM)){
	        	if($scope.isListSubscriberError){
	        		bootboxAlertTitle(TAB_HEADER_PREPAID,MESSAGE_LIST_SUBSCRIBER_PREPAID_VALIDATE_ERROR);
	        		return ;
	        	}
	        	
	        	if(customerType == CUSTOMER_TYPE_COMPANY){
	        		var msisdnCompanyPrimary = getMsisdnWithCustomerType($scope.dataSubscriberPreTemplate,CUSTOMER_TYPE_COMPANY);
	    	   		//DatBD2
	        		var valid= validateMsisdnForm($scope.dataSubscriberPreTemplate,msisdnTabNPR);
	        		/*if(msisdnTabNPR != msisdnCompanyPrimary){
	        			bootboxAlertTitle(TAB_HEADER_PREPAID,"Số thuê bao trên form thông tin chuyển mạng phải giống số thuê bao trong danh sách với loại khách hàng là công ty.");
	        			return ;
	        		}*/
	        		if(valid==false)
	        			{
	        			bootboxAlertTitle(TAB_HEADER_PREPAID,"Số thuê bao trên form thông tin chuyển mạng phải giống số thuê bao trong danh sách với loại khách hàng là công ty.");
	        			return ;
	        			}
	        		
	        		var countCustomerCompany = countCustomerTypeInListCustomer($scope.dataSubscriberPreTemplate, CUSTOMER_TYPE_COMPANY);
	        		/*if(countCustomerCompany > 1){
	        			bootboxAlertTitle(TAB_HEADER_PREPAID,"Với loại KH là công ty: Trong danh sách thuê bao chỉ được có duy nhất 1 KH là loại công ty");
	        			return ;
	        		}else if(countCustomerCompany == 0 ){
	        			bootboxAlertTitle(TAB_HEADER_PREPAID,"Với loại KH là công ty: trong danh sách thuê bao phải có 1 KH là loại công ty.");
	        			return ;
	        		}*/
	        	}
	        	
	    		// CHECK REQUIRE LIST SUBSCRIBER PREPAID
	        	if($scope.dataSubscriberPreTemplate.length == 0){
	        		bootboxAlertTitle(TAB_HEADER_PREPAID,MESSAGE_LIST_SUBSCRIBER_PREPAID_REQUIRE);
	        		
	        		return ;
	        	}
	        	
	        	 // check subscriber number in tab npr in list template
		   		var listMSISDNFromTemplate = getListMSISDNFromListCustomer($scope.dataSubscriberPreTemplate);
		   		
		   		if((msisdnTabNPR != EMPTY_VALUE) && (customerType == CUSTOMER_TYPE_PRIVATE || customerType == CUSTOMER_TYPE_FOREIGN)){
		   			var isMsisdnInListTemplate = $.inArray(msisdnTabNPR, listMSISDNFromTemplate) > -1;
		   			if(!isMsisdnInListTemplate){
		   				bootboxAlertTitle(TAB_HEADER_PREPAID, MESS_MSISDN_IN_TEMPLATE_REQUIRED);
		   				return ;
		   			}
		   		}
		   		
		   		if(customerType == CUSTOMER_TYPE_PRIVATE || customerType == CUSTOMER_TYPE_FOREIGN){
		   			var textValidateDataFormAndnTemplate = validateDataFormAndTemplatePrepaidPrivate(
		   					$scope.dataSubscriberPreTemplate, 
		   					StringUtilNVL($scope.model.fullName),
		   					StringUtilNVL($scope.model.documentNumber),
		   					StringUtilNVL($scope.model.documentIssuePlace),
		   					StringUtilNVL($("#documentIssueDate").val()),
		   					StringUtilNVL($scope.model.documentType));
		   					
		   					
		   			if(textValidateDataFormAndnTemplate != EMPTY_VALUE){
		   				bootboxAlertTitle(TAB_HEADER_PREPAID, textValidateDataFormAndnTemplate);
		   				return ;
		   			}
		   		}
		   		
		   		// CHECK REQUIRE LIST IMAGE SUBSCRIBER POST
		    	if(uploaderListImagePrePaid.queue.length == 0){
		    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_PREPAID, MESS_FILE_IMAGE_REQUIRED_PREPAID));
		    		closeOverLay();
		    		return ;
		    	}
	
	    	}
	    	
	    	if(isAccountTypePostpaid($scope.model.accountTypeVNM)){
	        	// check require list subscriber post
	        	if($scope.dataSubscriberPostTemplate.length == 0){
	        		bootbox.alert(MESSAGE_LIST_SUBSCRIBER_POSTPAID_REQUIRE);
	        		return ;
	        	}
	        	
	        	if($scope.isListPostpaidTemplateError){
	        		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_POSTPAID, MESSAGE_LIST_SUBSCRIBER_POSTPAID_VALIDATE_ERROR));
	        		return ;
	        	}
	        	
	        	 // check subscriber number in tab npr in list template
		   		var listMSISDNFromTemplatePostpaid = getListMSISDNFromListCustomer($scope.dataSubscriberPostTemplateTable);
		   		
		   		if((msisdnTabNPR != EMPTY_VALUE) && (customerType == CUSTOMER_TYPE_PRIVATE || customerType == CUSTOMER_TYPE_FOREIGN)){
		   			var isMsisdnInListTemplate = $.inArray(msisdnTabNPR, listMSISDNFromTemplatePostpaid) > -1;
		   			if(!isMsisdnInListTemplate){
		   				bootboxAlertTitle(TAB_HEADER_POSTPAID, MESS_MSISDN_IN_TEMPLATE_REQUIRED);
		   				return ;
		   			}
		   		}
	        	
	        	// CHECK REQUIRE LIST IMAGE SUBSCRIBER POST
	        	/*if(uploaderListImagePostPaid.queue.length == 0){
	        		bootbox.alert(MESSAGE_LIST_IMAGE_POSTPAID_REQUIRE);
	        		return ;
	        	}*/
	        	
	        	// CHECK LIST IMAGE MAP CORRESPONDING WITH IMAGE IN FILE TEMPLATE
				// POSTPAID
		   		/* var checkListImagePostpaid = $scope.checkImageCorrespondingWithTemplate(uploaderListImagePostPaid, $scope.dataSubscriberPostTemplate);
		   		 if(!checkListImagePostpaid){
		   			bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_POSTPAID, MESSAGE_LIST_IMAGE_POSTPAID_ERROR));
		   	     	return ;
		   	     }*/
	    	}
	    	/* END CHECK FILE UPLOAD LIST BEFORE COMMIT */
	    	
	    	if(isAccountTypePrepaid($scope.model.accountTypeVNM)){
	    		if(customerType == CUSTOMER_TYPE_PRIVATE || customerType == CUSTOMER_TYPE_FOREIGN){
		    		var documentNumber = StringUtilNVL($scope.model.documentNumber);
		    		var typeCard=StringUtilNVL($scope.model.documentType);
		    		
		    		checkCustomerExistInSystemPrepaid(documentNumber,typeCard);
		    	}else{
		    		var taxCode = StringUtilNVL($scope.model.preTaxIdentificationNumber);
		    		checkCustomerCompanyExistInSystem(taxCode);
		    	}
	    	}
	    	
	    	if(isAccountTypePostpaid($scope.model.accountTypeVNM)){
				if(customerType == CUSTOMER_TYPE_PRIVATE){
					var idNum = StringUtilNVL($scope.model.postpaid.parDocumentNumber);
					var taxCode = "";
					checkCustomerExistInSystemPostpaid(idNum, taxCode); 
				}else{ 
					var idNum = "";
					var taxCode = StringUtilNVL($scope.model.postpaid.parTaxcode);
					checkCustomerExistInSystemPostpaid(idNum, taxCode); 
				}
	    	}
	    }
	}
  
	$scope.uploadFileBeforeCreatedNPR = function(){
		
    	// CHECK LIST IMAGE MAP CORRESPONDING WITH IMAGE IN FILE TEMPLATE
		// PREPAID
		if(isAccountTypePrepaid($scope.model.accountTypeVNM)){
			 var checkListImagePrepaid = $scope.checkImageCorrespondingWithTemplate(uploaderListImagePrePaid, $scope.dataSubscriberPreTemplate);
	   		 if(!checkListImagePrepaid){
	   			bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_PREPAID, MESSAGE_LIST_IMAGE_PREPAID_ERROR));
	   			closeOverLay();
	   	     	return ;
	   	     }
		}
   		
   		 
		var checkFileAllisUploaded = true;
      	if(uploader.queue.length > 0){
      		checkFileAllisUploaded = checkAllFileOfQueueUploaded(uploader);
      	}
      	
    	if (checkFileAllisUploaded == false ) {
	   		 // call only uploader 1: uploaderCustomer is in success
				// uploader1
    		uploadAllItemByList(uploader);
    		
	     }else {
	    	 $scope.callCreateNPR();	
	     }
    	
	   	 // check all file in create npr uploaded
        uploader.onCompleteAll = function () {
           	var checkFileAllisUpload = checkAllFileOfQueueUploaded(uploader);
           	if(!checkFileAllisUpload){
           		checkAllFileUploaded = false;
           		bootbox.alert("ĐKCM: Có lỗi xảy ra trong quá trình upload file.");
           		closeOverLay();
           		return 0;
           	}else{
           		$scope.callCreateNPR();	
               	checkAllFileUploaded = true;
           	}
         };
	}
	
	
	//DatBD2
  $scope.callCreateNPR = function (){
    	overLoading();
    	if($scope.isListSubscriberError){
    		closeOverLay();
    		bootboxAlertTitle(TAB_HEADER_PREPAID,MESSAGE_LIST_SUBSCRIBER_PREPAID_VALIDATE_ERROR);
    	}
    	var checkFileAllisUpload = checkAllFileOfQueueUploaded(uploader);

    	if(!checkFileAllisUpload){
       		closeOverLay();
       		bootbox.alert("Có lỗi xảy ra trong quá trình upload file.");
    		return 0;
    	}
    	
      	var countryNameNPR = StringUtilNVL(checkModelVisible($scope.model.citizen)?"": 
    		StringUtilNVL($scope.model.citizen.countryName));
    	
    	var districtNPR = StringUtilNVL(checkModelVisible($scope.model.district)?"": 
    		StringUtilNVL($scope.model.district.districtName));
    	
    	var provinceNPR = StringUtilNVL(checkModelVisible($scope.model.province)?"": 
    		StringUtilNVL($scope.model.province.provinceName));
    	
    	var postPriceDistrictRepre = StringUtilNVL(checkModelVisible($scope.model.postPriceDistrict)?"": 
    		StringUtilNVL($scope.model.postPriceDistrict.districtName));
    		
    	var postPriceProvince = StringUtilNVL(checkModelVisible($scope.model.postPriceProvince)?"": 
    		StringUtilNVL($scope.model.postPriceProvince.provinceName));
    	
    	var addDistrictVal = StringUtilNVL(checkModelVisible($scope.model.postAddDistrict)?"": 
    		StringUtilNVL($scope.model.postAddDistrict.districtName));
    		
    	var addProvinceVal = StringUtilNVL(checkModelVisible($scope.model.postAddProvince)?"": 
    		StringUtilNVL($scope.model.postAddProvince.provinceName));
    	
    	var provisioningRepresentInfoRequest = {
    			"addBuildingName" : $scope.model.postAddBuildingName,
    			"addDistrict" : addDistrictVal,
    			"addNumberHome" : $scope.model.postAddNumberHome,
    			"addProvince" : addProvinceVal,
    			"addRegion" : $scope.model.postAddRegion,
    			"addRoad" : $scope.model.postAddRoad,
    			"addRoomNumber" : $scope.model.postAddRoomNumber,
    			"addTown" : $scope.model.postAddTown,
    			"addressPayments" : $scope.model.postAddressPayments,
    			"bankName" : $scope.model.postBanhName,
    			"birthday" : StringUtilNVL($("#PostBirthDay").val()),
    			"career" : $scope.model.postCareer,
    			"cellPhone" : $scope.model.postCellPhoneNumber,
    			"companyPhone" : $scope.model.postCompanyPhoneNumber,
    			"country" : $scope.model.postCountryLanguage,
    			"customerType" : $scope.model.postCustomerType,
    			"docDate" : StringUtilNVL($("#PostDocumentIssueDate").val()),
    			"docNumber" : $scope.model.postDocumentNumber,
    			"docPlace" : $scope.model.postDocumentIssuePlace,
    			"email" : $scope.model.postEmail,
    			"faxNumber" : $scope.model.postFaxNumber,
    			"gender" : $scope.model.postGenderType ,
    			"homePhone" : $scope.model.postHomePhoneNumber,
    			"name" : $scope.model.postName,
    			"packageNotiType" : $scope.model.postCosNotiType,
    			"packageType" : $scope.model.postPackageType,
    			"password" : $scope.model.postPassword,
    			"paymentLevels" : $scope.model.postPaymentsLevel,
    			"paymentsType" : $scope.model.postPaymentsType,
    			"priceAddBuildingName" : $scope.model.postPriceBuildingName,
    			"priceAddDistrict" : postPriceDistrictRepre,
    			"priceAddNumberHome" : $scope.model.postPriceNumberHome,
    			"priceAddProvince" : postPriceProvince,
    			"priceAddRegion" : $scope.model.postPriceRegion,
    			"priceAddRoad" : $scope.model.postPriceRoad,
    			"priceAddRoomNumber" : $scope.model.postPriceRoomNumber,
    			"priceAddTown" : $scope.model.postPriceTown,
    			"repreName" : $scope.model.postNamePresent,
    			"residentRegistrationBook" : $scope.model.postResidentRegistrationBook,
    			"salary" : $scope.model.postSalary,
    			"surname" : $scope.model.postSurname,
    			"taxIdentificationNumber" : $scope.model.postTaxIdentificationNumberRep
    	};
    	
    	var listNprSubscribersVal = {
    			"accountType" : StringUtilNVL($scope.model.accountType),
    			"msisdn" : StringUtilNVL(formatMsisdnWithoutZero($scope.model.subDataNumber)),
    			"packageType" : StringUtilNVL($scope.model.postpaid.PackageType),
    			"subscriberName": StringUtilNVL($scope.model.fullName), // đơn
																		// lẻ
																		// lấy
																		// tên
																		// thông
																		// tin
																		// tab
																		// chuyển
																		// mạng
    			"sim" : StringUtilNVL($scope.model.numberSIM),
    			"primary" : "Y"
    	}
    	
    	var customerType = $scope.model.customerTypeNPR;
    	
    	var listPrepaidSubscriberConverted = [];
    	// check list private or company
    	// if customer is private :list have 1 cus - many sub
    	if( customerType == CUSTOMER_TYPE_PRIVATE || customerType == CUSTOMER_TYPE_FOREIGN){
    		var listPreSubPrivate = $scope.convertListPresubscriberPrivate($scope.dataSubscriberPreTemplate);
    		listPrepaidSubscriberConverted.push(listPreSubPrivate);
    		
    	}else if(customerType == CUSTOMER_TYPE_COMPANY){
        	// if customer is company :list have many cus - many sub
    		var listPreSubCompany = $scope.convertListPresubscriberCompany($scope.dataSubscriberPreTemplate);
    		for(var m =0; m< listPreSubCompany.length;m++ ){
    			listPrepaidSubscriberConverted.push(listPreSubCompany[m]);
    		}
    	}
    	
    	var listCustomerInforPrepaid = [];
    	
    	var listAttachMentCustomerInfo = $scope.concatenateListData($scope.listFileImageUploadedPrepaid, $scope.listFileImageUploadedPostpaid);
    	listCustomerInforPrepaid = $scope.replaceAttachmentDataInSubscriber(listPrepaidSubscriberConverted,listAttachMentCustomerInfo);
    	
    	$scope.updateListAttachMent(uploader, $scope.model.fileAttachments);
    	
    	var districtParentAdd = StringUtilNVL(checkModelVisible($scope.model.postpaid.parAddDistrict)?"": 
    		StringUtilNVL($scope.model.postpaid.parAddDistrict.districtName));
    	
    	var provinceParentAdd = StringUtilNVL(checkModelVisible($scope.model.postpaid.parAddProvince)?"": 
    		StringUtilNVL($scope.model.postpaid.parAddProvince.provinceName));
    	
    	var districtParentPrice = StringUtilNVL(checkModelVisible($scope.model.postpaid.parPriceDistrict)?"": 
    		StringUtilNVL($scope.model.postpaid.parPriceDistrict.districtName));
    	
    	var provinceParentPrice = StringUtilNVL(checkModelVisible($scope.model.postpaid.parPriceProvince)?"": 
    		StringUtilNVL($scope.model.postpaid.parAddProvince.provinceName));
    	
    	var parentCountryName =  StringUtilNVL($scope.model.postpaid.parCountry);
    	
    	var parentBillingAddressDataModelval = {
    		    "billRegion": 		StringUtilNVL($scope.model.postpaid.parAddRegion),
    		    "billProvince": 	provinceParentAdd,
    		    "billDistrict":  	districtParentAdd,
    		    "billAddressLine": 	StringUtilNVL($scope.model.postpaid.parAddRoad),
    		    "billCountry" : 	StringUtilNVL(parentCountryName),
    		    "billTow" : 		StringUtilNVL($scope.model.postpaid.parAddTown),
    		    "billRoad": 		StringUtilNVL($scope.model.postpaid.parAddRoad),
    		    "billNumberHome": 	StringUtilNVL($scope.model.postpaid.parAddNumberHome),
    		    "billBuildingName": StringUtilNVL($scope.model.postpaid.parAddBuildingName),
    		    "billRoomNumber": 	StringUtilNVL($scope.model.postpaid.parAddRoomNumber)
    	};
    	
    	var parentPostalAddressDataModelVal = {
    		    "postalRegion" 	:	StringUtilNVL($scope.model.postpaid.parPriceRegion),
    		    "postalProvince":	provinceParentPrice,
    		    "postalDistrict":	districtParentPrice,
    		    "postalAddressLine":StringUtilNVL($scope.model.postpaid.parPriceRoad),
    		    "postalCountry" :	StringUtilNVL(parentCountryName),
    		    "postalTow" : 		StringUtilNVL($scope.model.postpaid.parPriceTown),
    		    "postalRoad": 		StringUtilNVL($scope.model.postpaid.parPriceRoad),
    		    "postalNumberHome" : StringUtilNVL($scope.model.postpaid.parPriceNumberHome),
    		    "postalBuildingName" : StringUtilNVL($scope.model.postpaid.parPriceBuildingName),
    		    "postalRoomNumber": 	StringUtilNVL($scope.model.postpaid.parPriceRoomNumber)
    		    
    	}
    	
    	var parentPersonInfoDataModelVal = {
    			"custType" : StringUtilNVL($scope.model.customerTypeNPR),
    		    "customerSegment" : StringUtilNVL($scope.model.postpaid.levelCustomer),
    		    "companyName" : StringUtilNVL($scope.model.postpaid.parCompanyName),
    		    "firstName" : StringUtilNVL($scope.model.postpaid.parSurname),
    		    "lastName" : StringUtilNVL($scope.model.postpaid.parName),
    		    "gender" : StringUtilNVL($scope.model.postpaid.parGenderType),
    		    "birthDate" : StringUtilNVL($("#ParentBirthDay").val()),
    		    "idNumber" : StringUtilNVL($scope.model.postpaid.parDocumentNumber),
    		    "placeOfIssue" : StringUtilNVL($scope.model.postpaid.parDocumentIssuePlace),
    		    "dateOfIssue" : StringUtilNVL($("#ParentDocumentIssueDate").val()),
    		    "emailAddress" : StringUtilNVL($scope.model.postpaid.parEmail),
    		    "contactNumber" :StringUtilNVL($scope.model.postpaid.parPhoneNumber),
    		    "custLang" :  parentCountryName,
    		    "packetType" :StringUtilNVL($scope.model.postpaid.PackageType),
    		    "taxCode" : StringUtilNVL($scope.model.postpaid.parTaxcode)
    	}
    	
    	var postpaidModel = {
    		    "childrenInfor" :$scope.dataSubscriberPostTemplate,
    		    "billingAddressData" : parentBillingAddressDataModelval,
    		    "postalAddressData"  : parentPostalAddressDataModelVal,
    		    "personInfoData"	 : parentPersonInfoDataModelVal
    	}
    	
    	//DatBD2
    	if(listCustomerInforPrepaid != undefined && listCustomerInforPrepaid.length > 0 && 
    			listCustomerInforPrepaid[0].customerType=="2")
    		{
    			for(var i=0; i<listCustomerInforPrepaid.length;i++)
    				{
    					listCustomerInforPrepaid[i].addressCompany=StringUtilNVL($scope.model.preAddress);
    					listCustomerInforPrepaid[i].address=$scope.dataSubscriberPreTemplate[i].address;
    				}
    		}
    	
    	var nprFormDataInput = {
    			"accountType"  : StringUtilNVL($scope.model.accountType),
    			"accountTypeVNM":  StringUtilNVL($scope.model.accountTypeVNM),
    			"comments"  : StringUtilNVL($scope.model.comments),
    			"country"  : countryNameNPR ,
    			"district"  : districtNPR,
    			"donor" :StringUtilNVL($scope.model.donor) ,
    			"forceCase"  : "1" ,
    			"noType" :"RNO" ,
    			"nprType" :"NPR" ,
    			"province"  : provinceNPR ,
    			"subType"  : StringUtilNVL($scope.model.customerTypeNPR),
    			"subdataAddress"  : StringUtilNVL($scope.model.address),
    			"subdataContactNumber"  : StringUtilNVL(formatMsisdnWithoutZero($scope.model.subDataNumber)),
    			"subdataDnoContractDateRes"  : StringUtilNVL($("#subDNOContractDateRes").val()) ,
    			"subdataDnoContractNumber"  : StringUtilNVL($scope.model.dnoContractNumber),
    			"subdataDocIssueDate"  : StringUtilNVL($("#documentIssueDate").val()),
    			"subdataDocIssuePlace"  : StringUtilNVL($scope.model.documentIssuePlace),
    			"subdataDocNumber"  : StringUtilNVL($scope.model.documentNumber),
    			"subdataDocType"  : StringUtilNVL($scope.model.documentType),
    			"subdataEmail"  : StringUtilNVL($scope.model.email),
    			"subdataNprRegistrationName"  : StringUtilNVL($scope.model.reprentativeName),
    			"subdataRepDocNumber"  :  StringUtilNVL($scope.model.representativeDocNumber),
    			"subdataRepIssueDate"  : StringUtilNVL($("#RepresentativeDocDate").val()) ,
    			"subdataRepPosition"  : StringUtilNVL($scope.model.representativePosition),
    			"subdataSubReprentative"  : StringUtilNVL($scope.model.reprentativeName),
    			"subdataSubscriberName"  : StringUtilNVL($scope.model.fullName),
    			"violationFlag"  : "0" , // hashcode for tesst
    			"attachmentData"  : $scope.model.fileAttachments ,
    			"nprSubscribers"  : [listNprSubscribersVal],
    			"provisioningCustomerInfos"  : listCustomerInforPrepaid,
    			"postPaidInformation" : [postpaidModel]
    	};
    	
    	overLoading(MESS_CREATE_NPR_LOADING);
    	
    	if(isAccountTypePrepaid($scope.model.accountTypeVNM)){
    		createListNprPrepaid(nprFormDataInput);
    	}
    	
    	if(isAccountTypePostpaid($scope.model.accountTypeVNM)){
    		createListNprPostpaid(nprFormDataInput);
    	}
    }
  
    $scope.onChange = function(files) {
		$scope.fileExt = $("#testFile").val().split(".").pop();
	}

    $scope.isImage = function(ext) {
		if (ext) {
			return ext.toUpperCase() == "jpg".toUpperCase() || ext.toUpperCase() == "png".toUpperCase();
		}
	}
	
	$scope.copyValueDocumentType = function() {
		//TRA TRUOC
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_PREPAID){
			$scope.model.preTaxIdentificationNumber = "";
			
			var documentType = StringUtilNVL($scope.model.documentType);
			if(documentType == DOC_TYPE_MASOTHUE){
				$scope.model.preTaxIdentificationNumber = $scope.model.documentNumber;
			}
		}
		
		//TRA SAU
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_POSTPAID){
			$scope.model.postpaid.parTaxcode = "";
			var documentType = StringUtilNVL($scope.model.documentType);
			if(documentType == DOC_TYPE_MASOTHUE){
				$scope.model.postpaid.parDocumentNumber = "";
				$scope.model.postpaid.parTaxcode = $scope.model.documentNumber;
			}
		}
		
	};
	
	$scope.$watch('model.fullName', function(){
		var objectName = separateName(StringUtilNVL($scope.model.fullName));
		
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_POSTPAID){
			if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
				$scope.model.postpaid.parSurname = objectName.firstName;
				$scope.model.postpaid.parName = objectName.lastName;
			}if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
				$scope.model.postpaid.parSurname = "";
				$scope.model.postpaid.parName = "";
			}
		}
		
	});
	
	
	$scope.$watch('model.documentIssueDate', function(){
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_PREPAID){
			
		}
		
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_POSTPAID){
			$scope.model.postpaid.parDocumentIssueDate = $scope.model.documentIssueDate;
		}
	});
	
	$scope.$watch('model.documentIssuePlace', function() {
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_PREPAID){
			
		}
		
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_POSTPAID){
			$scope.model.postpaid.parDocumentIssuePlace = $scope.model.documentIssuePlace;
		}
	});

	$scope.$watch('model.documentNumber', function() {
		var documentType = StringUtilNVL($scope.model.documentType);
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_PREPAID){
			
		}
				
		//TRA SAU
		if($scope.model.accountTypeVNM == ACCOUNT_TYPE_POSTPAID){
			$scope.model.postpaid.parTaxcode = "";
			
			if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
				if(documentType == DOC_TYPE_MASOTHUE){
					$scope.model.postpaid.parDocumentNumber = "";
					$scope.model.postpaid.parTaxcode = $scope.model.documentNumber;
				}
			}
					
			if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
				$scope.model.postpaid.parDocumentNumber = $scope.model.documentNumber;
			}
			
		}
		
	});
	
	
    $scope.updateListAttachMent = function(uploaderInput, listAttachMents){
    	for(var i =0; i< uploaderInput.queue.length; i++){
    		var item = uploaderInput.queue[i];
    		if(item.isSuccess){
    			var documentType = item.documentType;
    			var documentNote = item.identityDocNote;
    			var attachMentIdClient = item.attachMentIdClient;
    			$scope.setValueAttachMentList(listAttachMents, attachMentIdClient,documentType, documentNote);
    		}
    	}
    }
    
	$scope.setValueAttachMentList = function(listAttachMents, attachMentIdClientInput,
    		attachmentTypeInput, attachNoteInput){
    	for(var i =0; i<listAttachMents.length; i ++){
    		var attachMentID = listAttachMents[i].attachMentIdClient;
    		if(attachMentID == attachMentIdClientInput){
    			listAttachMents[i].attachmentType = attachmentTypeInput;
    			listAttachMents[i].note = attachNoteInput;
    			listAttachMents[i].note = attachNoteInput;
    		}
    	}
    }
    
    // check ảnh tương ứng với file template
    $scope.checkImageCorrespondingWithTemplate = function(uploaderListImage, dataSubscriberTemplate){
    	var resultCheck = true;
    	
    	var listFileNameImage = $filter('orderBy')(getListFileNameUploader(uploaderListImage), false);
    	var listFileTemplateFile = $filter('orderBy')(getListFileNameImageFromListTemplate(dataSubscriberTemplate), false);
    	
    	if(!compareTwoListString(listFileNameImage, listFileTemplateFile)){
    		resultCheck = false;
    	}
    	return resultCheck;
    }
    
    // check all file in page uploaded successfull
    $scope.checkAllFilePageUploaded = function() {
    	var isFileNPRUploaded =  checkAllFileOfQueueUploaded(uploader);
    	var isAllListSubscriberPrepaidUploaded = checkAllFileOfQueueUploaded(uploaderListPrepaid);
    	var isAllListImagePrepaidUploaded = checkAllFileOfQueueUploaded(uploaderListImagePrePaid);

    	var isAllListSubscriberPostpaidUploaded = checkAllFileOfQueueUploaded(uploaderListPostpaid);
    	var isAllListImagePostpaidUploaded = checkAllFileOfQueueUploaded(uploaderListImagePostPaid);
    	    	
    	if(isAccountTypePrepaid($scope.model.accountTypeVNM)){
        	if(!isAllListSubscriberPrepaidUploaded){
        		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_PREPAID, MESS_FILE_TEMPLATE_PREPAID_REQUIRED));
        		return false;
        	}
        	
	    	if(!isAllListImagePrepaidUploaded){
	    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_PREPAID, MESS_FILE_IMAGE_REQUIRED_PREPAID));
	    		return false;
	    	}
    	}
    	
    	if(isAccountTypePostpaid($scope.model.accountTypeVNM)){
	    	if(!isAllListSubscriberPostpaidUploaded){
	    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_POSTPAID, MESS_FILE_TEMPLATE_POSTPAID_REQUIRED));
	    		
	    		return false;
	    	}
	    	
	    	if(!isAllListImagePostpaidUploaded){
	    		bootboxAlertInformation(ALERT_TITLE, setStrongLabelWithTitle(TAB_HEADER_POSTPAID, MESS_FILE_IMAGE_REQUIRED_POSTPAID));
	    		return false;
	    	}
    	
    	}

    	return true;
    }
    
	$scope.onFilesSelected = function(files) {};
		
	$scope.copyValueToOtherInput = function(elementModel, elementModelDepen) {
		$scope.model[elementModelDepen] = $scope.model[elementModel];
	};
	
	$scope.concatenateListData = function(listInputOne, listInputTwo){
		var listTotalResult = [];
		for(var i = 0; i <listInputOne.length; i ++){
			listTotalResult.push(listInputOne[i])
		}
		
		for(var j = 0; j < listInputTwo.length; j ++){
			listTotalResult.push(listInputTwo[j])
		}
		
		return listTotalResult;
	}
	
	
	// Thay file attachment trong listCustomer bang file Attachment uploaded
	$scope.replaceAttachmentDataInSubscriber = function(listTotalCustomerInfo, listAttachmentDataInput){
		for(var i =0;i<listTotalCustomerInfo.length; i++){
			var customerInfoElem = listTotalCustomerInfo[i];
			if(customerInfoElem!= undefined && customerInfoElem!=null){
				var listAttachMentDataCustomer = customerInfoElem.listAttachMentData
				
				for(var j =0 ;j <listAttachMentDataCustomer.length; j++){
					if(listAttachMentDataCustomer[j]!= undefined && listAttachMentDataCustomer[j]!=null){
							var fileNameCus = StringUtilNVL(listAttachMentDataCustomer[j].fileName);
							var attachmentTypeCus = StringUtilNVL(listAttachMentDataCustomer[j].attachmentType);
							var attachMentIdClientCus = StringUtilNVL(listAttachMentDataCustomer[j].attachMentIdClient);
							
							// compare list attachment input
							for(var m=0;m<listAttachmentDataInput.length; m++){
								var fileNameInput = StringUtilNVL(listAttachmentDataInput[m].fileName);
								
								if(ConvertFileNameNoneUTF8(fileNameCus) == (fileNameInput)){
									listAttachMentDataCustomer[j] = listAttachmentDataInput[m];
								}
							}
					}
				}
			}
		}
		return listTotalCustomerInfo;
	}
	// check open file template excel
	$scope.uploadFileTemplateSubscriber = function(uploaderListIn, $event){
    	var idButtonImageGetData = $event.target.id;
	   	 if(idButtonImageGetData == "btnListSubscriberUploaderPrePaid"){
	   		 $scope.removeAllItemListPrePaid();
	    	 	if(!$scope.checkPackageTypePrepaid($event)){
	       	 		$event.preventDefault();
	       	 		return;
	       	 	}
	   	 }
	   	 
	   	if(idButtonImageGetData == "btnListSubscriberUploaderPostPaid"){
	   		$scope.removeAllItemListPostPaid();
	   		if(!$scope.checkDataPostpaid($event)){
       	 		$event.preventDefault();
       	 		return;
       	 	}
	   	 }
	}
	
	
	$scope.showAlert = function(idModal, message){
		$('#'+idModal).modal('show');
		$("#messageInfo").text(message);
	}
	
	$scope.showAlertList = function(idModal, messageInfoHeader){
		$('#'+idModal).modal('show');
		
		$("#messageInfoHeader").html("<strong>"+messageInfoHeader+"</strong>");
	}
	
    $scope.removeErrorClassElementOption = function(event, divElementId){
    	var inputValue = $.trim(event.target.value);
    	var preCustomerType = StringUtilNVL($scope.model.preCustomerType);
    	
		if(preCustomerType == CUSTOMER_TYPE_COMPANY && inputValue != EMPTY_VALUE){
			removeErrorClassElement(divElementId);
		}
    }
    
    // convert list subscriber with customer type private
    $scope.convertListPresubscriberPrivate = function(listPreSubscriber){
    	var subscriberElementOut = {};
    	
    	var listNPRSubscriber = [];
    	var listAttachmentDataTemp = [];
    	
    	if(listPreSubscriber.length >0){
    		subscriberElementOut =angular.copy(listPreSubscriber[0]);
    	}

    	for(var i =0; i < listPreSubscriber.length; i++){
    		var presubElement = listPreSubscriber[i];
    		if(presubElement != null){
    			for(var j =0; j< presubElement.listProvisioningSubscriberInfo.length; j++){
    				var provisioningSubElement =  presubElement.listProvisioningSubscriberInfo[j];
    				listNPRSubscriber.push(provisioningSubElement);
    			}
    		}
    	}
    	
    	listAttachmentDataTemp = getListAttachmentPrivateTemplate(listPreSubscriber);
    	subscriberElementOut.listAttachMentData = listAttachmentDataTemp;
    	
    	subscriberElementOut.listProvisioningSubscriberInfo = listNPRSubscriber;
    	// set value following by form
    	var provincePrepaid = StringUtilNVL(checkModelVisible($scope.model.preProvince)?"": 
    		StringUtilNVL($scope.model.preProvince.provinceName));
    	
    	var districtPrepaid = StringUtilNVL(checkModelVisible($scope.model.preDistrict)?"": 
    		StringUtilNVL($scope.model.preDistrict.districtName));
    	
    	var countryNameNPR = StringUtilNVL(checkModelVisible($scope.model.citizen)?"": 
    		StringUtilNVL($scope.model.citizen.countryName));
    	
    	subscriberElementOut.country = countryNameNPR;
    	subscriberElementOut.province = provincePrepaid;
    	subscriberElementOut.district = districtPrepaid;
    	
    	subscriberElementOut.shopCode = StringUtilNVL($localStorage.clientContext.shop.shopCode);
    	
    	subscriberElementOut.taxIdentificationNumber = StringUtilNVL($scope.model.preTaxIdentificationNumber);
    	subscriberElementOut.address =  StringUtilNVL($scope.model.preAddress);
    	
    	subscriberElementOut.docIssueDate	= StringUtilNVL($("#documentIssueDate").val());
    	subscriberElementOut.docIssueDateStrTemp	= StringUtilNVL($("#documentIssueDate").val());
    	
    	subscriberElementOut.docNumber 		= StringUtilNVL($scope.model.documentNumber);
    	subscriberElementOut.docIssuePlace 	= StringUtilNVL($scope.model.documentIssuePlace);
    	
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
    	
// if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE || customerTypeNPR ==
// CUSTOMER_TYPE_FOREIGN){
		var objectName = separateName($scope.model.fullName);
		subscriberElementOut.surname = objectName.firstName;
		subscriberElementOut.name = objectName.lastName;
// }
		
    	subscriberElementOut.companyName = StringUtilNVL($scope.model.preComanyName);
    	subscriberElementOut.packageType = StringUtilNVL($scope.model.prePackageType);
    	
    	subscriberElementOut.shopCode = StringUtilNVL($scope.shopCode);
    	
    	return subscriberElementOut;
    }
    
 // convert list subscriber with customer type company
    $scope.convertListPresubscriberCompany = function(listPreSubscriber){
    	
    	var shopCode = $localStorage.clientContext.shop.shopCode;
    	
    	var listPreSubscriberOutput =angular.copy(listPreSubscriber);

    	// set value following by form
    	var provincePrepaid = StringUtilNVL(checkModelVisible($scope.model.preProvince)?"": 
    		StringUtilNVL($scope.model.preProvince.provinceName));
    	
    	var districtPrepaid = StringUtilNVL(checkModelVisible($scope.model.preDistrict)?"": 
    		StringUtilNVL($scope.model.preDistrict.districtName));
    	
    	var countryNameNPR = StringUtilNVL(checkModelVisible($scope.model.citizen)?"": 
    		StringUtilNVL($scope.model.citizen.countryName));
    	
    	for(var i = 0; i<listPreSubscriberOutput.length; i++){
    		var subscriberElement = listPreSubscriberOutput[i];
    		if(subscriberElement != undefined && subscriberElement != null){
    	    	subscriberElement.country = countryNameNPR;
    	    	subscriberElement.province = provincePrepaid;
    	    	subscriberElement.district = districtPrepaid;
    	    	
    	    	subscriberElement.shopCode = StringUtilNVL(shopCode);
    	    	subscriberElement.taxIdentificationNumber = StringUtilNVL($scope.model.preTaxIdentificationNumber);
    	    	subscriberElement.address =  StringUtilNVL($scope.model.preAddress);
    	    	
    	    	subscriberElement.companyName = StringUtilNVL($scope.model.preComanyName);
    	    	subscriberElement.packageType = StringUtilNVL($scope.model.prePackageType);
    	    	subscriberElement.shopCode = StringUtilNVL($scope.shopCode);
    	    	
    			var objectName = separateName(listPreSubscriberOutput[i].subscriberName);
    			subscriberElement.surname = objectName.firstName;
    			subscriberElement.name = objectName.lastName;
    			
    		}
    	}
    	
    	return listPreSubscriberOutput;
    }
    
    $scope.resetAllFormList = function($scope){
		 $scope.model = {};
		 $scope.removeAllItemListPrePaid();
		 $scope.removeAllItemListPostPaid();
		 $scope.model.fileAttachments = [];
		 uploader.clearQueue();
  	 }
  	
});


function overLoading(message){
	App.blockUI({
		message: message
	});
	$(".blockOverlay").css("background-color", "#000000");
	$(this).css("opacity", "1");
}

// check field is not empty
// return true if field not empty
// return false if field empty
function StringUtilNVLIsNotEmpty(val){
	if(val==undefined || val == null || $.trim(val)=="") return false;
	return true;
}

function checkModelVisible(model){
	if(model==undefined || model == null) return true;
	return false;
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

// check all item in queue success :
// + false when all file not upload success
// + true when all file upload success
function checkAllFileOfQueueUploaded(uploaderIn){
	var checkFileAllisUpload = true;
// if(uploaderIn.queue.length == 0){
// checkFileAllisUpload = false;
// }
	for(var i =0; i< uploaderIn.queue.length; i++){
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
function checkTypeDocUploadRequireByAccountType(uploaderIn, accountType){

	var listFileDocType = getListFileDocumentType(uploaderIn);
	// package is prepaid(trả trước)
	if(accountType == ACCOUNT_TYPE_PREPAID){
		// check if document type CMT1 AND KH1
		var checkPrivateCMND = $.inArray(TYPE_DOC_CMND, listFileDocType)>-1;
		var checkPrivateHoChieu = $.inArray(TYPE_DOC_HOCHIEU, listFileDocType)> -1;
		var checkPrivateTheCanCuoc = $.inArray(TYPE_DOC_THECANCUOC, listFileDocType)> -1;
		
		if(checkPrivateCMND ==false && checkPrivateHoChieu == false && checkPrivateTheCanCuoc == false){
			return ACCOUNT_TYPE_PREPAID_ERROR;
		}
	}
	
	// package is postpaid(trả sau)
	if(accountType == ACCOUNT_TYPE_POSTPAID){
		// check if document type CMT1 AND KH1
		var checkPrivateCMND = $.inArray(TYPE_DOC_CMND, listFileDocType)>-1;
		var checkPrivateHoChieu = $.inArray(TYPE_DOC_HOCHIEU, listFileDocType)> -1;
		
		var checkPrivateTheCanCuoc = $.inArray(TYPE_DOC_THECANCUOC, listFileDocType)> -1;
		var checkPrivateTheVanBanDNO = $.inArray(TYPE_DOC_VANBAN_DNO, listFileDocType)> -1;
		
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
		var itemType = item.attachmentType+"";
		listTypeDocument.push(itemType)
	}
	return listTypeDocument;
}

// get list document type from uploader
function getListFileNameUploader(uploaderIn){
	var listTypeName = [];
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
		var itemFileName = ConvertFileNameNoneUTF8(item._file.name+"");
		listTypeName.push(itemFileName)
	}
	return listTypeName;
}


// get file type from file name
function getAttachmentImageByName(listSubscriber, ImageSource, imageName){
	
	var  listFileTemplate = null;
	var listFileTemplate  = getListFileImageFromListTemplate(listSubscriber);
	for(var i = 0; i<listFileTemplate.length; i++){
		if(listFileTemplate[i]!= undefined && listFileTemplate[i]!=null){
			if(listFileTemplate[i].fileName == imageName){
				return listFileTemplate[i]
			}
		}
	}
	return listFileTemplate;
}

// get attachment file from list subscriber by attachment id
/*function getAttachmentFileImageById(listSubscriber, attachMentId){
	
	var  listFileTemplate = null;
	var listFileTemplate  = getListFileImageFromListTemplate(listSubscriber);
	for(var i = 0; i<listFileTemplate.length; i++){
		if(listFileTemplate[i]!= undefined && listFileTemplate[i]!=null){
			if(listFileTemplate[i].fileName == attachMentId){
				return listFileTemplate[i]
			}
		}
	}
	return listFileTemplate;
}*/

// get list type from list subscriber
function getListFileImageFromListTemplate(listSubscriber){
	var listFileTemplate = [];
	for(var i = 0; i<listSubscriber.length; i++){
		if(listSubscriber[i]!= undefined && listSubscriber[i]!=null){
			var attachMentData = listSubscriber[i].listAttachMentData;
			
			for(var j =0 ;j <attachMentData.length; j++){
				if(attachMentData[j]!= undefined && attachMentData[j]!=null){
						var fileName = ConvertFileNameNoneUTF8(StringUtilNVL(attachMentData[j].fileName));
						var attachmentType = StringUtilNVL(attachMentData[j].attachmentType);
						var attachMentIdClient = StringUtilNVL(attachMentData[j].attachMentIdClient);
						
						if(fileName!="" && attachmentType!=""){
							var fileObject = {
									'attachmentType': attachmentType, 
									'fileName': fileName,
									"attachMentIdClient":attachMentIdClient
									};
							listFileTemplate.push(fileObject);
						}
				}
			}
			
		}
	}
	return listFileTemplate;
}

// get list file Name from list subscriber
function getListFileNameImageFromListTemplate(listSubscriber){
	var listFileNameTemplate = [];
	for(var i = 0; i<listSubscriber.length; i++){
		if(listSubscriber[i]!= undefined && listSubscriber[i]!=null){
			var attachMentData = listSubscriber[i].listAttachMentData;
			
			for(var j =0 ;j <attachMentData.length; j++){
				if(attachMentData[j]!= undefined && attachMentData[j]!=null){
						var fileName = ConvertFileNameNoneUTF8(StringUtilNVL(attachMentData[j].fileName));
						var attachmentType = StringUtilNVL(attachMentData[j].attachmentType);
						// get file name push to list
						if(fileName!=""){
							var checkFileNameExist = $.inArray(fileName, listFileNameTemplate) > SELECT_NONE_INDEX;
							if(!checkFileNameExist){
								listFileNameTemplate.push(fileName)
							}
						}
				}
			}
			
		}
	}
	return listFileNameTemplate;
}


// get list attacment private
function getListAttachmentPrivateTemplate(listSubscriber){
	var listAttachMentOutput = [];
	
	var listFileNameTemplate = [];
	for(var i = 0; i<listSubscriber.length; i++){
		if(listSubscriber[i]!= undefined && listSubscriber[i]!=null){
			var attachMentData = listSubscriber[i].listAttachMentData;
			
			for(var j =0 ;j <attachMentData.length; j++){
				if(attachMentData[j]!= undefined && attachMentData[j]!=null){
						var fileName = ConvertFileNameNoneUTF8(StringUtilNVL(attachMentData[j].fileName));
						var attachmentType = StringUtilNVL(attachMentData[j].attachmentType);
						// get file name push to list
						if(fileName!=""){
							var checkFileNameExist = $.inArray(fileName, listFileNameTemplate) > SELECT_NONE_INDEX;
							if(!checkFileNameExist){
								listFileNameTemplate.push(fileName);
								listAttachMentOutput.push(attachMentData[j]);
							}
						}
				}
			}
			
		}
	}
	return listAttachMentOutput;
}

// get file type from image id
function getNameImageFromType(listSourceImage , imageType){
	for(var i = 0; i<listSourceImage.length; i ++ ){
		if(listSourceImage[i].Id == imageType){
			return listSourceImage[i].Title;
		}
	}
}


// compare list string: return false if 2 list not equal
function compareTwoListString(listStringOne, listStringTwo){
	if(listStringOne.length == 0 || listStringTwo.length==0 ){
		return false;
	}
	
	if(listStringOne.length != listStringTwo.length){
		return false;
	}
	
	if(JSON.stringify(listStringOne) === JSON.stringify(listStringTwo)){
		return true;
	}else{
		return false;
	};
}

function getListMSISDNFromListCustomer(listCustomerInput){
	var listSubscriberNumberOut = [];
	for(var i =0; i <listCustomerInput.length; i++){
		if(listCustomerInput[i] != null){
			var msisdn = StringUtilNVL(listCustomerInput[i].msisdn);
			if(msisdn != EMPTY_VALUE){
				//DatBD2
				//msisdn = formatMsisdnWithoutZero(msisdn);
				//end
				listSubscriberNumberOut.push(msisdn);
			}
		}
	}
	return listSubscriberNumberOut;
}

//get msisdn from list subscriber by customer type
function getMsisdnWithCustomerType(listCustomerInput, customerTypeInput){
	var msisdnOutput = [];
	for(var i =0; i <listCustomerInput.length; i++){
		if(listCustomerInput[i] != null){
			var msisdn = StringUtilNVL(listCustomerInput[i].msisdn);
			var customerType = StringUtilNVL(listCustomerInput[i].customerType);
			
			if(msisdn != EMPTY_VALUE && customerType == customerTypeInput){
				msisdnOutput = msisdn;
				break;
			}
		}
	}
	return msisdnOutput;
}

//validate số thuê bao phải giống số thuê bao trong file với khách hàng là tổ chức
//DatBD2
function validateMsisdnForm(listCustomerInput,x)
{
	var dem=0;
	for (var i=1; i<listCustomerInput.length; i++){
		if (x==listCustomerInput[i].msisdn)
			{
				dem++;
			}
	}
	if (dem==0)
		return false;
	else
		return true;
}
//end
function checkFormHaveError(){
	   return $("div").hasClass("has-error");
	   
}
// check all form validated
function validateAllForm($scope, $translate){
	var result = true;
	
	var result = true;
	
	var TEXT_CHECK_NPR_VALIDATED = "";
	var TEXT_CHECK_CUS_VALIDATED = "";
	
	var listFieldPARNotValidated = "";
	
	LIST_FIELD_NPR_NOT_VALIDATE = "<strong>"+ TAB_HEADER_NPR +"</strong>"+BREAK_LINE;
	
	LIST_FIELD_PREPAID_VALIDATED = "<strong>"+ TAB_HEADER_PREPAID +"</strong>"+BREAK_LINE;
	
	listFieldPARNotValidated = "<strong>"+ TAB_HEADER_POSTPAID+"</strong>"+BREAK_LINE;
	TEXT_CHECK_PAR_VALIDATED = listFieldPARNotValidated;
	
	TEXT_CHECK_CUS_VALIDATED = LIST_FIELD_PREPAID_VALIDATED;
	
	TEXT_CHECK_NPR_VALIDATED = LIST_FIELD_NPR_NOT_VALIDATE;
	
	var countryMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.country.required')
	var messProvinceRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.province.required');
	var messDistrictRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.district.required');
	
	// THONG TIN CHUYEN MANG
	var fullName = StringUtilNVL($scope.model.fullName);
	if(!StringUtilNVLIsNotEmpty(fullName)){
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+$translate.instant('vnm.mnp_message.registration.prepaid.validate.fullname.emptyvalue') +BREAK_LINE;
		result =  false;
	}
	
	var documentType = StringUtilNVL($scope.model.documentType);
	if(!StringUtilNVLIsNotEmpty(documentType)){
		var documentTypeRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.type.required');
		
		setErrorClassElement("idDocumentTypeDiv", documentTypeRequired);
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ documentTypeRequired +BREAK_LINE;
		result =  false;
	}
	
	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
	if(!StringUtilNVLIsNotEmpty(customerTypeNPR)){
		var customerTypeMess = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.customer.type.required');
		var customerTypeMessPostpaid = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.customer.type.required');
		
		setErrorClassElement("idCustomerTypeNPRDiv", customerTypeMess);
		setErrorClassElement("idCustomerTypePar", customerTypeMessPostpaid);
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+customerTypeMess +BREAK_LINE;
		result =  false;
	}
	
	var documentNumber = StringUtilNVL($scope.model.documentNumber);
	if(!StringUtilNVLIsNotEmpty(documentNumber)){
		var documentNumberRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.number.emptyvalue');
		
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+documentNumberRequired+BREAK_LINE;
		result =  false;
	}
	
	var documentIssueDate = StringUtilNVL($("#documentIssueDate").val());
	if(!StringUtilNVLIsNotEmpty(documentIssueDate)){
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+$translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.emptyvalue') +BREAK_LINE;
		result =  false;
	}else if(documentType == DOC_TYPE_CMND || documentType == DOC_TYPE_HOCHIEU || documentType == DOC_TYPE_THECANCUOC){
		if(!validateDocumentIssueDate(documentIssueDate)){
			LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.popup') +BREAK_LINE;
			result =  false;
		}
	}else{
		if(checkDateGreaterThanYear(documentIssueDate, PRESENT_YEAR)){
			LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.lessthancurrentdate') +BREAK_LINE;
			result =  false;
		}
	}
	
	if(StringUtilNVLIsNotEmpty(documentIssueDate) && !isDateValidate(documentIssueDate)){
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.date.isdate') +BREAK_LINE;
		result =  false;
	}
	
	var documentIssuePlace = StringUtilNVL($scope.model.documentIssuePlace);
	if(!StringUtilNVLIsNotEmpty(documentIssuePlace)){
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.emptyvalue') +BREAK_LINE;
		result =  false;
	}
	
	var citizen = StringUtilNVL(checkModelVisible($scope.model.citizen)?"": 
		StringUtilNVL($scope.model.citizen.countryName));
	if(!StringUtilNVLIsNotEmpty(citizen)){
		var messCountryRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.country.required');
		setErrorClassElement("idCitizenDiv", messCountryRequired);
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ messCountryRequired +BREAK_LINE;
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
			LIST_FIELD_NPR_NOT_VALIDATE += "+ "+messProvinceRequired +BREAK_LINE;
			result =  false;
		}
	}
	
	var district = StringUtilNVL(checkModelVisible($scope.model.district)?"": 
		StringUtilNVL($scope.model.district.districtName));
	if(!StringUtilNVLIsNotEmpty(district)){
		if($scope.model.customerTypeNPR == CUSTOMER_TYPE_PRIVATE || $scope.model.customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			var messDistrictRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.district.required');
			setErrorClassElement("divDistrictId", messDistrictRequired);
			LIST_FIELD_NPR_NOT_VALIDATE += "+ " +messDistrictRequired +BREAK_LINE;
			result =  false;
		}
	}
	
	var address = StringUtilNVL($scope.model.address);
	if(!StringUtilNVLIsNotEmpty(address)){
		var messageAddressRuired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.emptyvalue');
		
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+messageAddressRuired +BREAK_LINE;
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
			
			LIST_FIELD_NPR_NOT_VALIDATE += "+ "+documentRepresentDateMess +BREAK_LINE;
			result =  false;
		}
		
		if(!isDateValidate(representativeDocDate)){
			LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.doc.date.isdate') +BREAK_LINE;
			result =  false;
		}
	}
	
	var donor = StringUtilNVL($scope.model.donor);
	if(!StringUtilNVLIsNotEmpty(donor)){
		var donorMessRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.donor.required');
		
		setErrorClassElement("idDonorDiv", donorMessRequired);
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+donorMessRequired +BREAK_LINE;
		result =  false;
	}
	
	var subDataNumber = StringUtilNVL($scope.model.subDataNumber);
	if(!StringUtilNVLIsNotEmpty(subDataNumber)){
		var messSubNumber = $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.emptyvalue');
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ messSubNumber +BREAK_LINE;
		result =  false;
	}/*else if(!validateMSISDN(subDataNumber)){
		result =  false;
		var messMaxMinRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.popup.maxminlength');
		
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ messMaxMinRequired +BREAK_LINE;
	}*/
	
	var accountType = StringUtilNVL($scope.model.accountType);
	/* 1190 comment check loai thue bao
	if(!StringUtilNVLIsNotEmpty(accountType)){
		var messAccountTypeRequired = $translate.instant('vnm.mnp_message.registration.prepaid.validate.npr.accountype.required');
		
		setErrorClassElement("idAccountTypeDiv", messAccountTypeRequired);
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ messAccountTypeRequired +BREAK_LINE;
		result =  false;
	}*/
	
	var subDNOContractDateRes = StringUtilNVL($("#subDNOContractDateRes").val());
	var dnoContractNumber = StringUtilNVL($scope.model.dnoContractNumber);
	/*if(accountType == ACCOUNT_TYPE_POSTPAID){
		if(!StringUtilNVLIsNotEmpty(dnoContractNumber)){
			LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.emptyvalue') +BREAK_LINE;
			result =  false;
		}
		
		if(!StringUtilNVLIsNotEmpty(subDNOContractDateRes)){
			LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.date.emptyvalue') +BREAK_LINE;
			result =  false;
		}
		
	}*/
	
	if(StringUtilNVLIsNotEmpty(dnoContractNumber) && dnoContractNumber.length < MIN_LENGTH_DNO_CONTRACT_NUMBER){
		result =  false;
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.minlength') +BREAK_LINE;
	}else if(StringUtilNVLIsNotEmpty(dnoContractNumber) && dnoContractNumber.length >MAX_LENGTH_DNO_CONTRACT_NUMBER){
		result =  false;
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.maxlength') +BREAK_LINE;
	}else if(StringUtilNVLIsNotEmpty(dnoContractNumber) && (!isLetterAndNumber(dnoContractNumber))){
		result =  false;
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.letter.required') +BREAK_LINE;
	 }
	
	if(StringUtilNVLIsNotEmpty(subDNOContractDateRes) && !isDateValidate(subDNOContractDateRes)){
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.date.isdate') +BREAK_LINE;
		result =  false;
	}
	
	if(StringUtilNVLIsNotEmpty(subDNOContractDateRes) && checkDateGreaterThanYear(subDNOContractDateRes, PRESENT_YEAR)){
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.date.lessthancurrentdate') +BREAK_LINE;
		result =  false;
	}
	
	var comments = StringUtilNVL($scope.model.comments);
	if(!StringUtilNVLIsNotEmpty(comments)){
	}
	
	//validate file dinh kem chuyen mang
	if( $scope.uploader.queue.length != undefined && $scope.uploader.queue.length != null
			&& $scope.uploader.queue.length ==0){
		LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.file.npr.attach.required') +BREAK_LINE;
		result =  false;
	}
	
	if( $scope.uploader.queue.length != undefined && $scope.uploader.queue.length != null
			&& $scope.uploader.queue.length !=0){
		
		var resultCheckFileType = $scope.checkAttachMentUploadByType($scope.uploader, TYPE_DOC_PHIEU_DKCM);
		
		if(!resultCheckFileType){
			LIST_FIELD_NPR_NOT_VALIDATE += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.file.npr.document.register.required') +BREAK_LINE;
			result =  false;
		}
	}
	
	if(StringUtilNVL($scope.model.accountTypeVNM) == ACCOUNT_TYPE_PREPAID){

		// THONG TIN DANH SACH TRA TRUOC
		var customerType = StringUtilNVL($scope.model.preCustomerType);
		if(!StringUtilNVLIsNotEmpty(customerType)){
			var customerTypeCusMes = $translate.instant('vnm.mnp_message.registration.npr_list.validate.cus.customer.type.required');
			LIST_FIELD_PREPAID_VALIDATED += "+ "+ customerTypeCusMes +BREAK_LINE;
			result =  false;
		}
		
		var companyNamePre = StringUtilNVL($scope.model.preComanyName);
		if(!StringUtilNVLIsNotEmpty(companyNamePre)){
			if(customerType  == CUSTOMER_TYPE_COMPANY){
				result =  false;
				LIST_FIELD_PREPAID_VALIDATED += "+ "+ $translate.instant('vnm.mnp_message.registration.npr_list.validate.cus.company.name.empty') +BREAK_LINE;
			}
		}
		
		var taxIdentificationNumberPre = StringUtilNVL($scope.model.preTaxIdentificationNumber);
		if(!StringUtilNVLIsNotEmpty(taxIdentificationNumberPre)){
			if(customerType  == CUSTOMER_TYPE_COMPANY){
				result =  false;
				LIST_FIELD_PREPAID_VALIDATED += "+ "+ $translate.instant('vnm.mnp_message.registration.npr_list.validate.cus.tax.code.empty') +BREAK_LINE;
			}
		}
		
		var provincePre = StringUtilNVL(checkModelVisible($scope.model.preProvince)?"": 
			StringUtilNVL($scope.model.preProvince.provinceName));
		if(!StringUtilNVLIsNotEmpty(provincePre)){
			if($scope.model.preCustomerType == CUSTOMER_TYPE_PRIVATE || $scope.model.preCustomerType == CUSTOMER_TYPE_COMPANY){
				var messProvinceRequired = $translate.instant('vnm.mnp_message.registration.npr_list.validate.npr.province.required');
				LIST_FIELD_PREPAID_VALIDATED += "+ "+messProvinceRequired +BREAK_LINE;
				result =  false;
			}
		}
		
		var districtPre = StringUtilNVL(checkModelVisible($scope.model.preDistrict)?"": 
			StringUtilNVL($scope.model.preDistrict.districtName));
		if(!StringUtilNVLIsNotEmpty(districtPre)){
			if($scope.model.preCustomerType == CUSTOMER_TYPE_PRIVATE || $scope.model.preCustomerType == CUSTOMER_TYPE_COMPANY){
				var messDistrictRequired = $translate.instant('vnm.mnp_message.registration.npr_list.validate.npr.district.required');
				LIST_FIELD_PREPAID_VALIDATED += "+ " +messDistrictRequired +BREAK_LINE;
				result =  false;
			}
		}
		
		var addressPre = StringUtilNVL($scope.model.preAddress);
		if(!StringUtilNVLIsNotEmpty(addressPre)){
			var messageAddressRuired = $translate.instant('vnm.mnp_message.registration.npr_list.validate.sub.data.address.emptyvalue');
			LIST_FIELD_PREPAID_VALIDATED += "+ "+messageAddressRuired +BREAK_LINE;
			result =  false;
		}
		
		var packageTypePre = StringUtilNVL($scope.model.prePackageType);
		if(!StringUtilNVLIsNotEmpty(packageTypePre)){
			LIST_FIELD_PREPAID_VALIDATED += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.required') +BREAK_LINE;
			result =  false;
		}
	}else if(StringUtilNVL($scope.model.accountTypeVNM) == ACCOUNT_TYPE_POSTPAID){
		var parSurname = StringUtilNVL($scope.model.postpaid.parSurname);
		if(!StringUtilNVLIsNotEmpty(parSurname)){
			listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.surname.required') +BREAK_LINE;
			result =  false;
		}
		
		var levelCustomer = StringUtilNVL($scope.model.postpaid.levelCustomer);
		if(!StringUtilNVLIsNotEmpty(levelCustomer)){
			var levelCustomerMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.cus.level.required');
			
			setErrorClassElement("idLevelCustomerPar", levelCustomerMessRequired);
			setErrorClassElement("idLevelCustomerSub", levelCustomerMessRequired);
			listFieldPARNotValidated += "+ "+levelCustomerMessRequired +BREAK_LINE;
			result =  false;
		}

		var parName = StringUtilNVL($scope.model.postpaid.parName);
		if(!StringUtilNVLIsNotEmpty(parName)){
			listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.name.required') +BREAK_LINE;
			result =  false;
		}
		
		var parentPhoneNumber = StringUtilNVL($scope.model.postpaid.parPhoneNumber);
		if(!StringUtilNVLIsNotEmpty(parentPhoneNumber)){
			listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required') +BREAK_LINE;
			result =  false;
		}else if(StringUtilNVLIsNotEmpty(parentPhoneNumber)){
			if(!isNumbericInteger(parentPhoneNumber)){
				listFieldPARNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required.number') +BREAK_LINE;
				result =  false;
			}
		}
		
		var parentBirthDay = StringUtilNVL($("#ParentBirthDay").val());

		if(!StringUtilNVLIsNotEmpty(parentBirthDay)){
			result =  false;
			listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.empty') +BREAK_LINE;
		}else{
			if(StringUtilNVLIsNotEmpty(parentBirthDay) && !isDateValidate(parentBirthDay)){
				listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.isdate') +BREAK_LINE;
				result =  false;
			}else if(!validateBirthDay(parentBirthDay)){
				result =  false;
				listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.birthday.maxminage') +BREAK_LINE;			
			}
		}
		
		var parentDocumentNumber = StringUtilNVL($scope.model.postpaid.parDocumentNumber);

		if(!StringUtilNVLIsNotEmpty(parentDocumentNumber)){
			listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.required') +BREAK_LINE;
			result =  false;
		} else if(StringUtilNVLIsNotEmpty(parentDocumentNumber) && parentDocumentNumber.length <8){
			listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.minlength') +BREAK_LINE;
			result =  false;
		}else if(StringUtilNVLIsNotEmpty(parentDocumentNumber) && parentDocumentNumber.length >15){
			listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.maxlength') +BREAK_LINE;
			result =  false;
		}
		
		var parentDocumentIssuePlace = StringUtilNVL($scope.model.postpaid.parDocumentIssuePlace);
		if(!StringUtilNVLIsNotEmpty(parentDocumentIssuePlace)){
			listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.place.emptyvalue') +BREAK_LINE;
			result =  false;
		}else if(StringUtilNVLIsNotEmpty(parentDocumentIssuePlace) && parentDocumentIssuePlace.length <5){
			listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.minlength')+BREAK_LINE;
			result =  false;
		}
		
		var parentDocumentIssueDate = StringUtilNVL($("#ParentDocumentIssueDate").val());
		if(!StringUtilNVLIsNotEmpty(parentDocumentIssueDate)){
			listFieldPARNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.required') +BREAK_LINE;
			result =  false;
		}else if(!validateDocumentIssueDate(parentDocumentIssueDate)){
			listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.date.popup') +BREAK_LINE;
			result =  false;
		}else{
			if(checkDateGreaterThanYear(parentDocumentIssueDate, PRESENT_YEAR)){
				listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.lessthancurrentdate') +BREAK_LINE;
				result =  false;
			}
		}
		
		var parentCountry = StringUtilNVL($scope.model.postpaid.parCountry);
		if(!StringUtilNVLIsNotEmpty(parentCountry)){
			setErrorClassElement("idParentCountryDiv", countryMessRequired);
			listFieldPARNotValidated += "+ "+countryMessRequired +BREAK_LINE;
			result =  false;
		}
		
		var parentEmail = StringUtilNVL($scope.model.postpaid.parEmail);
		if(!StringUtilNVLIsNotEmpty(parentEmail)){
			listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email.required') +BREAK_LINE;
			result =  false;
		}
		
		var parentTaxcode = StringUtilNVL($scope.model.postpaid.parTaxcode);
		if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			var parentCompanyName = StringUtilNVL($scope.model.postpaid.parCompanyName);
			if(!StringUtilNVLIsNotEmpty(parentCompanyName)){
				listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.company.name.required') +BREAK_LINE;
				result =  false;
			}
			
			if(!StringUtilNVLIsNotEmpty(parentTaxcode)){
				listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.required') +BREAK_LINE;
				result =  false;
			}
		}
		if(StringUtilNVLIsNotEmpty(parentTaxcode) && parentTaxcode.length > MAX_TAX_CODE_LENGTH){
			listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.max.length') +BREAK_LINE;
			result =  false;
		}
		
		var parGenderType = StringUtilNVL($scope.model.postpaid.parGenderType);
		if(!StringUtilNVLIsNotEmpty(parGenderType)){
			var genderMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.gender.required')
			
			setErrorClassElement("idGenderDiv", genderMessRequired);
			listFieldPARNotValidated += "+ "+genderMessRequired +BREAK_LINE;
			result =  false;
		}
		
		var packageType = StringUtilNVL($scope.model.postpaid.PackageType);
		if(!StringUtilNVLIsNotEmpty(packageType)){
			setErrorClassElement("idPackageTypeDiv", $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.required'));
			listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.required') +BREAK_LINE;
			result =  false;
		}
		
		//Nơi ở Tỉnh thành phố
		var addressPostal = $translate.instant('vnm.mnp_message.registration.postpaid.posta.address.title');
		var notiBillingAddressTitle = $translate.instant('vnm.mnp_message.registration.postpaid.noti.bill.address.title');
		var billingAddressTitle = $translate.instant('vnm.mnp_message.registration.postpaid.sub.billing.addres.title');
		
		var parentAddProvince = StringUtilNVL($scope.model.postpaid.parAddProvince);
		if(!StringUtilNVLIsNotEmpty(parentAddProvince)){
			setErrorClassElement("idDivPostalParentProvince", messProvinceRequired);
			listFieldPARNotValidated += "+ "+addressPostal +" :"+ messProvinceRequired +BREAK_LINE;
			result =  false;
		}
		
		//Nơi ở  quận huyện
		var parentAddProvince = StringUtilNVL($scope.model.postpaid.parAddDistrict);
		if(!StringUtilNVLIsNotEmpty(parentAddProvince)){
			setErrorClassElement("idDivPostalParentDistrict", messDistrictRequired);
			
			listFieldPARNotValidated += "+ "+addressPostal +" :"+  messDistrictRequired +BREAK_LINE;
			result =  false;
		}
		
		//Nơi ở Phường xã
		var parentAddTown = StringUtilNVL($scope.model.postpaid.parAddTown);
		if(!StringUtilNVLIsNotEmpty(parentAddTown)){
			var messParentAddTownRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required');
			
			listFieldPARNotValidated += "+ "+addressPostal +" :"+ messParentAddTownRequired +BREAK_LINE;
			result =  false;
		}
		
		//Nơi ở Đường
		var parentAddRoad = StringUtilNVL($scope.model.postpaid.parAddRoad);
		if(!StringUtilNVLIsNotEmpty(parentAddRoad)){
			var messParentAddRoadRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required');
			
			listFieldPARNotValidated += "+ "+addressPostal +" :"+ messParentAddRoadRequired +BREAK_LINE;
			result =  false;
		}
		
		//TBC Tỉnh/Thành
		var parentPriceProvince = StringUtilNVL($scope.model.postpaid.parPriceProvince);
		if(!StringUtilNVLIsNotEmpty(parentAddProvince)){
			setErrorClassElement("idDivParPriceProvince", messProvinceRequired);
			listFieldPARNotValidated += "+ "+notiBillingAddressTitle +" :"+ messProvinceRequired +BREAK_LINE;
			result =  false;
		}
		
		//TBC quận huyện
		var parentPriceDistrict = StringUtilNVL($scope.model.postpaid.parPriceDistrict);
		if(!StringUtilNVLIsNotEmpty(parentPriceDistrict)){
			setErrorClassElement("idDivParPriceDistrict", messDistrictRequired);
			listFieldPARNotValidated += "+ "+notiBillingAddressTitle +" :"+  messDistrictRequired +BREAK_LINE;
			result =  false;
		}
		
		//TBC Phường xã
		var parentPriceTown = StringUtilNVL($scope.model.postpaid.parPriceTown);
		if(!StringUtilNVLIsNotEmpty(parentPriceTown)){
			var messParentPriceTownRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required');
			
			listFieldPARNotValidated += "+ "+notiBillingAddressTitle +" :"+ messParentPriceTownRequired +BREAK_LINE;
			result =  false;
		}
		
		//TBC Đường
		var parentPriceRoad = StringUtilNVL($scope.model.postpaid.parPriceRoad);
		if(!StringUtilNVLIsNotEmpty(parentPriceRoad)){
			var messParentPriceRoadRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required');
			
			listFieldPARNotValidated += "+ "+notiBillingAddressTitle +" :"+ messParentPriceRoadRequired +BREAK_LINE;
			result =  false;
		}
		
	}
	
	
	if(isAccountTypePrepaid($scope.model.accountTypeVNM)){
		validateListPrepaid($scope);
	}
	
	if(!result){
		var listMessageValidateAll = "";
		if(TEXT_CHECK_NPR_VALIDATED != LIST_FIELD_NPR_NOT_VALIDATE){
			listMessageValidateAll += LIST_FIELD_NPR_NOT_VALIDATE; 
		}
		
		if(TEXT_CHECK_CUS_VALIDATED != LIST_FIELD_PREPAID_VALIDATED){
			listMessageValidateAll += LIST_FIELD_PREPAID_VALIDATED; 
		}
		
		if(TEXT_CHECK_PAR_VALIDATED != listFieldPARNotValidated){
			listMessageValidateAll += listFieldPARNotValidated; 
		}
		
		bootboxAlertInformation(ALERT_TITLE, listMessageValidateAll);
	}
	
	return result;
}

function isAccountTypePrepaid(accountType){
	if(accountType == ACCOUNT_TYPE_PREPAID ){
		return true;
	}
	return false;
}

function isAccountTypePostpaid(accountType){
	if(accountType == ACCOUNT_TYPE_POSTPAID){
		return true;
	}
	return false;
}

function validateListPrepaid($scope){
	var result = true;
	
	var preCustomerType = StringUtilNVL($scope.model.preCustomerType);
	if(!StringUtilNVLIsNotEmpty(preCustomerType)){
		setErrorClassElement("idPreCustomerType", "Yêu cầu nhập loại khách hàng!");
		result =  false;
	}
	
	var preCompanyName = StringUtilNVL($scope.model.preComanyName);
	if(preCustomerType == CUSTOMER_TYPE_COMPANY && preCompanyName == EMPTY_VALUE){
		setErrorClassElement("IdPreComanyName", "Yêu cầu nhập tên công ty!");
		result =  false;
	}
	
	var preTaxIden = StringUtilNVL($scope.model.preTaxIdentificationNumber);
	if(preCustomerType == CUSTOMER_TYPE_COMPANY && preTaxIden == EMPTY_VALUE){
		setErrorClassElement("IdPreTaxIdentificationNumber", "Yêu cầu nhập mã số thuế!");
		result =  false;
	}
	
	var provincePre = StringUtilNVL(checkModelVisible($scope.model.preProvince)?"": 
		StringUtilNVL($scope.model.preProvince.provinceName));
	if(!StringUtilNVLIsNotEmpty(provincePre)){
		
		if($scope.model.preCustomerType == CUSTOMER_TYPE_PRIVATE || $scope.model.preCustomerType == CUSTOMER_TYPE_COMPANY){
			setErrorClassElement("idSelectDivPreProvince", "Yêu cầu nhập Tỉnh/Thành Phố");
			result =  false;
		}
	}
	
	var districtPre = StringUtilNVL(checkModelVisible($scope.model.preDistrict)?"": 
		StringUtilNVL($scope.model.preDistrict.districtName));
	if(!StringUtilNVLIsNotEmpty(districtPre)){
		if($scope.model.preCustomerType == CUSTOMER_TYPE_PRIVATE || $scope.model.preCustomerType == CUSTOMER_TYPE_COMPANY){
			setErrorClassElement("divDistrictIdPrePaid", "Yêu cầu nhập Quận/Huyện");
			result =  false;
		}
	}
	
	var packageTypePrepaid = StringUtilNVL($scope.model.prePackageType);
	if(!StringUtilNVLIsNotEmpty(packageTypePrepaid)){
		setErrorClassElement("idDivPackagePrepaid", "Yêu cầu nhập gói cước");
		result =  false;
	}
	return result;
}

// so sanh gia tri file template va form
function compareValueFormAndTemplateFile(){
	
}

function removeErrorClassElement(divElementId){
	$( "#"+divElementId).removeClass( "has-error" );
    $("#"+divElementId+"-error").remove();
}

function setErrorClassElement(divElementId, divMessageError){
    var strHtml = "";
    var divErrorMessage = divElementId+"-error";
    
    strHtml += "<label id='"+divErrorMessage+"' class='help-block'>";
    strHtml += divMessageError
    strHtml += "</label>";

    if(!$("#"+divElementId).hasClass("has-error")){
    	$("#"+divElementId).addClass("has-error").append(strHtml);
    	$("#"+divErrorMessage).show();
    }
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

function setMandatoryFieldPostPaid($scope, isDis, customerTypeIn){
	
	if(customerTypeIn == CUSTOMER_TYPE_PRIVATE){
		$scope.isMandatoryFieldPrivate = isDis;
		$scope.isMandatoryFieldCompany = false;
	}
	
	if(customerTypeIn == CUSTOMER_TYPE_COMPANY){
		$scope.isMandatoryFieldCompany = isDis;
	}
	
}

function setMandatoryFieldCustomer($scope, isDis, customerTypeIn){
	$scope.customerTypeCus = isDis;
	
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
	$scope.packageTypeCus = isDis;
	
}

function countCustomerTypeInListCustomer(listCustomerIn, customerTypeIn){
	var countCustomertypeOut = 0;
	
	var cusIn = StringUtilNVL(customerTypeIn);
	for(var i =0; i< listCustomerIn.length; i ++){
		var customerListElement = listCustomerIn[i].customerType;
		if(customerListElement == customerTypeIn ){
			countCustomertypeOut += 1;
		}
	}
	
	return countCustomertypeOut;
}

function validateDataFormAndTemplatePrepaidPrivate(listCustomerIn, 
		customerName, documentNumber, 
		docIssuePlace, docIssueDate, documentType){
	
	var textResultCusName = "";
	var textResultDocnumber = "";
	var textResultIssuePlaceName = "";
	var textResultDocIssueDate = "";
	var textResultDocnumberType="";
	var textResultOut = "";
	
	for(var i=0; i <listCustomerIn.length; i ++){
		var customerElement = listCustomerIn[i];
		
		var customerNameElem  = StringUtilNVL(customerElement.subscriberName);
		var docNumberElem  = StringUtilNVL(customerElement.docNumber);
		var docIssuePlaceElem = StringUtilNVL(customerElement.docIssuePlace);
		var docIssueDateElem  = StringUtilNVL(customerElement.docIssueDateStrTemp);
		var typeCardElem=StringUtilNVL(customerElement.typeCard);
		
		if(customerNameElem != EMPTY_VALUE && customerNameElem  != EMPTY_VALUE){
			if(customerNameElem.toLocaleLowerCase() != customerName.toLocaleLowerCase()){
				textResultCusName = "+Tên khách hàng trên form và file template không trùng nhau!"+BREAK_LINE;
			}
		}
		
		if(typeCardElem != EMPTY_VALUE && typeCardElem  != EMPTY_VALUE){
			if(typeCardElem.toLocaleLowerCase() != documentType.toLocaleLowerCase()){
				textResultDocnumberType = "+Loại giấy tờ trên form và file template không trùng nhau!"+BREAK_LINE;
			}
		}
		if(docNumberElem != EMPTY_VALUE && documentNumber  != EMPTY_VALUE){
			if(docNumberElem.toLocaleLowerCase() != documentNumber.toLocaleLowerCase()){
				textResultDocnumber = "+Số giấy tờ trên form và file template không trùng nhau!"+BREAK_LINE;
			}
		}
		
		if(docIssuePlaceElem != EMPTY_VALUE && docIssuePlace  != EMPTY_VALUE){
			if(docIssuePlaceElem.toLocaleLowerCase() != docIssuePlace.toLocaleLowerCase()){
				textResultIssuePlaceName = "+Nơi cấp form và file template không trùng nhau!"+ BREAK_LINE;
			}
		}
		
		if(docIssueDateElem != EMPTY_VALUE && docIssueDate  != EMPTY_VALUE){
			if(docIssueDateElem.toLocaleLowerCase() != docIssueDate.toLocaleLowerCase()){
				textResultDocIssueDate = "+Ngày cấp trên form và file template không trùng nhau!"+BREAK_LINE;
			}
		}
	}
	
	textResultOut = textResultCusName  +textResultDocnumberType + textResultDocnumber+ textResultIssuePlaceName + textResultDocIssueDate;
	return textResultOut;
}
