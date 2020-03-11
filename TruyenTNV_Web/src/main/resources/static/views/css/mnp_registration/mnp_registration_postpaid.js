
var messageSizeError = "THÔNG TIN CHUYỂN MẠNG: Tổng dung lượng FILE phải nhỏ hơn 10MB";
var messageSizeErrorClient = "FILE ### phải nhỏ hơn 10MB";

var messageFileRequireNPR = "THÔNG TIN CHUYỂN MẠNG: Yêu cầu UPLOAD file";
var messageFileRequireCustomerInfor = "THÔNG TIN KHÁCH HÀNG VÀ THUÊ BAO: Yêu cầu UPLOAD file ảnh";

var messageUploading  = "Uploading";
var MESS_LOADING_CREATE_NPR;

var messageLoadingCreateNPR = "Đang khởi tạo yêu cầu chuyển mạng";
var checkListTotalSize = false;

var PRIVATE_TYPE_DOC_ERROR = "PRIVATE_KO";
var FOREIGN_TYPE_DOC_ERROR = "FOREIGN_KO";
var COMPANY_TYPE_DOC_ERROR = "COMPANY_KO";

var CUSTOMER_TYPE_PRIVATE 			= "1";
var CUSTOMER_TYPE_FOREIGN 			= "1";
var CUSTOMER_TYPE_COMPANY 			= "2";
var CUSTOMER_TYPE_STAFT 			= "2";

var DOC_TYPE_CMND = "01";
var DOC_TYPE_HOCHIEU = "02";
var DOC_TYPE_THECANCUOC = "03";
var DOC_TYPE_GPKG = "04";
var DOC_TYPE_QDTL = "05";
var DOC_TYPE_MASOTHUE = "06";
var DOC_TYPE_HOKHAU = "07";

var PRIVATE_TYPE_DOC_ERROR_MESSAGE ="THÔNG TIN KHÁCH HÀNG VÀ THUÊ BAO: Khách hàng cá nhân phải nhập đủ : Ảnh CMT1 + Ảnh KH";
var FOREIGN_TYPE_DOC_ERROR_MESSAGE ="THÔNG TIN KHÁCH HÀNG VÀ THUÊ BAO: Khách hàng người nước ngoài phải nhập đủ : Ảnh CMT1 + Ảnh KH";
var COMPANY_TYPE_DOC_ERROR_MESSAGE ="THÔNG TIN KHÁCH HÀNG VÀ THUÊ BAO: Khách hàng doanh nghiệp phải nhập đủ : Ảnh CMT1 + Ảnh KH + Ảnh GPKD + Ảnh HĐ1";

var TYPE_DOC_CMND      	= "NPR_CMT";
var TYPE_DOC_HOCHIEU    = "NPR_HC";
var TYPE_DOC_THECANCUOC = "NPR_TCC";
var TYPE_DOC_THITHUC 	= "NPR_VISA";
var TYPE_DOC_VANBAN_DNO = "NPR_XACNHAN_DNO";
var TYPE_DOC_PHIEU_DKCM = "NPR_DKCM";
var TYPE_DOC_LOAI_KHAC 	= "NPR_LOAIKHAC";

var ACCOUNT_TYPE_PREPAID = "Prepaid";
var ACCOUNT_TYPE_POSTPAID = "Postpaid";

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

var TYPE_CONSUMER = "CONSUMER";
var TYPE_CORPORATE = "CORPORATE";
var TYPE_FAMILY = "FAMILY";


var PREPAID_ERROR_MESSAGE  = "THÔNG TIN CHUYỂN MẠNG: Khách hàng trả trước phải upload file CMND, Thẻ căn cước hoặc hộ chiếu";
var POSTPAID_ERROR_MESSAGE = "THÔNG TIN CHUYỂN MẠNG: Khách hàng trả sau phải upload file CMND, Cam kết với DNO, HĐ với DNO";

var MIN_LENGTH_DOC_IDENTITY_NUMBER = 8;
var MAX_LENGTH_DOC_IDENTITY_NUMBER = 15;
var SELECT_NONE_INDEX = -1;

var RECEIPIENT_VNM = "05";
var MAX_YEAR_DOCUMENT = -15;

var MIN_YEAR_BIRTHDAY = -14;
var MAX_YEAR_BIRTHDAY = -100;

var MIN_LENGTH_ADDRESS = 5;
var MAX_TAX_CODE_LENGTH = 30;

var MAX_LENGTH_DNO_CONTRACT_NUMBER = 15;
var MIN_LENGTH_DNO_CONTRACT_NUMBER = 2;

var PREPAID_NPR_HEADER;
var CONFIRM_MESSAGE_PORT_IN;
var TAB_HEADER_NPR;
var TAB_HEADER_PARENT;
var TAB_HEADER_SUBSCRIBER;
var ALERT_TITLE;

var KO_FILE_ERROR_CODE = 500;
var KO_PACKAGE_TYPE_CODE = 501;

var EMTPY_VALUE_ERROR_CODE  = 505;
var SERVICE_SOAP_ERROR_CODE = 506;

var CUSTOMER_EXIS_EPOS = 90019;
var COMPANY_EXIS_EPOS = 90025;

var CUSTOMER_FOREIGN_EXIST_EPOS = 90026;
var MESS_CUSTOMER_FOREIGN_EXIST_EPOS;

var CUSTOMER_PRIVATE_EXIST_EPOS = 90027;
var MESS_CUSTOMER_PRIVATE_EXIST_EPOS;

var SUBSCRIBER_NUMBER_ACTIVE_EPOS = 90028;
var MESS_SUBSCRIBER_NUMBER_ACTIVE_EPOS;

var REGISTRATION_NPR_SUCCESS;
var REGISTRATION_NPR_LIST_ERROR;

var MESSAGE_CUSTOMER_EXIST_SYSTEM ;
var MESSAGE_COMPANY_EXIST_SYSTEM ;

var MAX_LENGTH_SERIAL_SIM = 20;
var MIN_LENGTH_SERIAL_SIM = 19;

var old_customer_type = "";
var BREAK_LINE = "<br/>";
overLoading("Loading...");

app_vnm.controller('ctr-postpaid', function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal, $location, $window,FileUploader,$filter, $localStorage, $http) {	
	
	PREPAID_NPR_HEADER = $translate.instant('vnm.mnp_message.registration.postpaid.info.alert.title.port.in');
	CONFIRM_MESSAGE_PORT_IN = $translate.instant('vnm.mnp_message.registration.postpaid.info.npr.mes.confirm.create.npr');
	TAB_HEADER_NPR = $translate.instant('vnm.mnp_message.registration.postpaid.info.tab.header.npr');
	TAB_HEADER_PARENT = $translate.instant('vnm.mnp_message.registration.postpaid.info.tab.header.parent');
	TAB_HEADER_SUBSCRIBER = $translate.instant('vnm.mnp_message.registration.postpaid.info.tab.header.subscriber');

	ALERT_TITLE = $translate.instant('vnm.mnp_message.common.alert.title');
	
	MESSAGE_CUSTOMER_EXIST_SYSTEM = $translate.instant('vnm.mnp_message.registration.postpaid.info.npr.mes.customer.exist');
	MESSAGE_COMPANY_EXIST_SYSTEM = $translate.instant('vnm.mnp_message.registration.postpaid.info.npr.mes.company.exist');
	
	MESS_CUSTOMER_FOREIGN_EXIST_EPOS = $translate.instant('vnm.mnp_message.registration.postpaid.info.cus.foreign.exist');
	MESS_CUSTOMER_PRIVATE_EXIST_EPOS = $translate.instant('vnm.mnp_message.registration.postpaid.info.cus.private.exist');
	MESS_SUBSCRIBER_NUMBER_ACTIVE_EPOS = $translate.instant('vnm.mnp_message.registration.prepaid.info.subscriber.active');
	
	REGISTRATION_NPR_SUCCESS  = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.send.npr.success');
	REGISTRATION_NPR_LIST_ERROR  = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.send.npr.error');
	MESS_LOADING_CREATE_NPR = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.loading.create.npr');
	
	setMandatoryFieldNPR($scope, true);
//	setMandatoryAccountType($scope, false);
	setMandatoryFieldPostPaid($scope, true, CUSTOMER_TYPE_PRIVATE);
	
    create_npr_function =  function (data) {
    	var urlCreateNPR =eim_url +"/bs/create_ticket_npr";
    	$http.post(urlCreateNPR,data).success(function (data){
    		 if(data.code == 500 && data.message == "KO_FILE"){
    			 closeOverLay();
    			 return ;
    		 }
    		 closeOverLay();
    		
    	 }).error(function (data){
    		 closeOverLay();
    	 });
    }
	
    getListProvince =  function () {
  	  overLoading("Loading...");
  		var url =eim_url +"/bs/SourceProvince";
  		 $http.get(url).success(function (data){
  			 $scope.ProvinceSource = data;
  			 $scope.ProvinceSourceCustomer = data;
  			getListGetListPackage();
  		 }).error(function (response){
  			 closeOverLay();
  		 });
      }
  
    getListLevelCustomer =  function () {
    	  overLoading("Loading...");
    		var url =eim_url +"/bs/SourceLevelCustomer";
    		 $http.get(url).success(function (data){
    			 $scope.LevelCustomerSourcePrivate = getListCustomerLevelByCustomer(data,CUSTOMER_TYPE_PRIVATE);
    			 $scope.LevelCustomerSourceCompany = getListCustomerLevelByCustomer(data,CUSTOMER_TYPE_COMPANY);
    			 
    			 getListPaymentMethod();
    		 }).error(function (response){
    			 closeOverLay();
    		 });
    }
    
    getListPaymentMethod =  function () {
  	  overLoading("Loading...");
  		var url =eim_url +"/bs/SourcePaymentMethod";
  		 $http.get(url).success(function (data){
  			 $scope.PaymentMethodSource = data;
  			 getListPaymentType();
  		 }).error(function (response){
  			 closeOverLay();
  		 });
    }
    
    getListPaymentType =  function () {
    	  overLoading("Loading...");
    		var url =eim_url +"/bs/SourcePaymentType";
    		 $http.get(url).success(function (data){
    			 $scope.PaymentTypeSource = data;
    			 $scope.model.subPaymentsType = data[data.length-1].glCodeValueEn;
    			 
    			 getListBillType();
    		 }).error(function (response){
    			 closeOverLay();
    		 });
     }
    
    getListBillType =  function () {
  	  overLoading("Loading...");
  		var url =eim_url +"/bs/SourceBillType";
  		 $http.get(url).success(function (data){
  			 $scope.BillTypeSource = [];
  			 
  			 $scope.BillTypeSourcePrivate = getListBillTypeByCustomer(data,CUSTOMER_TYPE_PRIVATE);
			 $scope.BillTypeSourceCompany = getListBillTypeByCustomer(data,CUSTOMER_TYPE_COMPANY);
			 
			 getListCountrySourcePostpaid();
  			 
  		 }).error(function (response){
  			 closeOverLay();
  		 });
     }
    //duytk10---------------------------//
	updatePreOrderTrans =  function (transStatus,ISDN) {
    	overLoading("Loading...");
		var url =eim_url +"/bs/updatePreOrderTrans?TRANS_STATUS="+transStatus+"&ISDN="+ISDN;
		 $http.put(url).success(function (data){
				closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	onInsertchGroupMnpOrder = function(transactionID){
	    	overLoading("Loading...");
	    	var dataInsert = {
	    			"preOrderId" : StringUtilNVL($scope.model.checkinsert.iD ),
	    			"transId" : StringUtilNVL(transactionID),
					"rejectReason" : StringUtilNVL(""),
	    	};
			var url =eim_url +"/bs/insertPreOrderTrans";
			 $http.put(url,dataInsert).success(function (response){
				 closeOverLay();
			 }).error(function (response){
				 closeOverLay();
			 });
	    }
	getListDistrict1 =  function (proId,districtId) {
    	overLoading("Loading...");
		var url =eim_url +"/bs/SourceDistrict?provinceId="+proId;
		 $http.get(url).success(function (data){
				$scope.DistrictSource = data;
				for (var i=0; i<$scope.DistrictSource.length; i++) {
					 if ($scope.DistrictSource[i].disId == districtId) {
						 $scope.model.district = $scope.DistrictSource[i];
						$scope.model.parentAddDistrict= $scope.DistrictSource[i];
						 $scope.model.parentPriceDistrict= $scope.DistrictSource[i];
						 $scope.model.subBillAddDistrict=$scope.DistrictSource[i];
						 $scope.model.subNotiAddDistrict=$scope.DistrictSource[i];
						 break;
					 }
				 }
				closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	 $scope.onSearchGroupMnpOrder = function(){
		 var dataSearch = {
	    			"isdn" : StringUtilNVL($scope.model.mnpIsdnPreorder ),
	    			"subType" : StringUtilNVL('Postpaid'),
	    			"status" : StringUtilNVL('2'),
					/*"name" : StringUtilNVL($scope.model.mnpNameChannel),
					"status" : StringUtilNVL($scope.model.numberTypeOrderChannel),*/
	    	};
		 $scope.model.checkinsert ="";
		 searchGroupMnpOrderPrepay(dataSearch, function(result) {
			 bootbox.alert('Số thuê bao không tồn tại Pre-Oder !'); 
			 closeOverLay();
		 });
	 }
	searchGroupMnpOrderPrepay =  function (dataSearch,datastatus) {
    	overLoading("Loading...");
		var url =eim_url +"/bs/npr/search_mnp_order_prepay";
		 $http.put(url,dataSearch).success(function (datastatus){
			 if(datastatus!=""){
				 $scope.model.mnpPreorder =datastatus[0];
				 $scope.model.mnpPreorder =datastatus[0];
				 if($scope.model.mnpPreorder.subType=='Prepaid'){
					 bootbox.alert('số pre-order đang có hình thức hòa mạng là trả Trước !');
					 closeOverLay();
					 return;
				 }
				 if($scope.model.mnpPreorder.status !=2){
					 bootbox.alert('trạng thái số pre_order không hợp lệ. !'); 
					 closeOverLay();
					 return;
				 }
				 if($scope.model.mnpPreorder.ass ==""||$scope.model.mnpPreorder.ass ==null){
					 bootbox.alert('số thuê bao chưa được giao cho nhân viên !'); 
					 closeOverLay();
					 return;
				 }
				 if($scope.model.mnpPreorder.transStatus ==2){
					 bootbox.alert('số thuê bao đã được chuyển mạng !'); 
					 closeOverLay();
					 return;
				 }
				 $scope.model.checkinsert =datastatus[0];
				 $scope.model.fullName=$scope.model.mnpPreorder.nameCustomer;
				 $scope.model.subDataNumber=$scope.model.mnpPreorder.isdn;
				 if($scope.model.mnpPreorder.docType ==01 ||$scope.model.mnpPreorder.docType ==02 
							||$scope.model.mnpPreorder.docType ==03||$scope.model.mnpPreorder.docType ==09 ){
							 $scope.model.customerTypeNPR='1';
							 $scope.onCustomerNPRChange();
						 }else{
							 $scope.model.customerTypeNPR='3';
							 $scope.onCustomerNPRChange(); 
						 }
				 $scope.model.documentType=$scope.model.mnpPreorder.docType;
				 $scope.model.documentNumber=$scope.model.mnpPreorder.docNum;
				 for (var i=0; i<$scope.ProvinceSource.length; i++) {
					 if ($scope.ProvinceSource[i].proId == $scope.model.mnpPreorder.province) {
						 $scope.model.province = $scope.ProvinceSource[i];
						 $scope.model.parentAddProvince = $scope.ProvinceSource[i];
						 $scope.model.parentPriceProvince = $scope.model.province;
						  $scope.onSelectedChangeParentAddProvince();
						 break;
					 }
				 }
				 if($scope.model.mnpPreorder.province !=''){
					 getListDistrict1($scope.model.mnpPreorder.province,$scope.model.mnpPreorder.distinct);
				 }
				 $scope.model.address=$scope.model.mnpPreorder.address;
				//thong tin khach---------------
				 if($scope.model.fullName !=""){
					 var objectName = separateName(StringUtilNVL($scope.model.fullName));
						
						$scope.model.parentSurname = objectName.firstName;
						$scope.model.parentName = objectName.lastName;
				 }
				 $scope.model.parentPhoneNumber=$scope.model.mnpPreorder.isdn;
				 var date = new Date($scope.model.mnpPreorder.bod);
				 var month = (1 + date.getMonth()).toString();
				  month = month.length > 1 ? month : '0' + month;

				  var day = date.getDate().toString();
				  day = day.length > 1 ? day : '0' + day;
				 $scope.model.parentBirthDay=(day) + '/' + month + '/' +  date.getFullYear();
				 $scope.model.parentDocumentNumber=$scope.model.mnpPreorder.docNum;
				 $scope.model.parentAddTown=$scope.model.mnpPreorder.precinct;
				 closeOverLay();
			 }else{
				 bootbox.alert('Số thuê bao không tồn tại Pre-Oder !'); 
				 closeOverLay();
			 }
			 
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    //----------------------------------//
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
    
    getListNetworkType =  function () {
    	overLoading("Loading...");
		var url =eim_url +"/bs/SourceNetwork";
		 $http.get(url).success(function (data){
			 if(data != undefined && data != null){
				 if(data.length != 0){
					 $scope.DonorSource = data;
					 getListDocumentType();
				 } else {
					 closeOverLay();
				 }
			 } else {
				 closeOverLay();
			 }
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
  getListDocumentType =  function () {
  	overLoading("Loading...");
		var url =eim_url +"/bs/SourceDocument";
		 $http.get(url).success(function (data){
			 $scope.IdentityTypeSource = data;
			 
			 $scope.IdentityTypeSourcePrivate = getListDocumentTypeByCustomer(data,CUSTOMER_TYPE_PRIVATE);
			 $scope.IdentityTypeSourceCompany = getListDocumentTypeByCustomer(data,CUSTOMER_TYPE_COMPANY);
			 
			 getListLevelCustomer();
		 }).error(function (response){
			 closeOverLay();
		 });
  }
  
  getListBillTypeByCustomer = function(data, customerType){
	  var documentSourceOut = [];
	  if(customerType == CUSTOMER_TYPE_PRIVATE){
		  for(var i =0; i<data.length; i++){
			  if(data[i].glCodeName == 'BILL_TYPE_FAMILY'){
				  documentSourceOut.push(data[i]);
			  };
		  }
	  }
	  
	  if(customerType == CUSTOMER_TYPE_COMPANY){
		  for(var i =0; i<data.length; i++){
			  if(data[i].glCodeName == 'BILL_TYPE_CORPORATE'){
				  documentSourceOut.push(data[i]);
			  };
		  }
	  }
	  return documentSourceOut;

  }
  
  getListDocumentTypeByCustomer = function(data, customerType){
  	var documentSourceOut = [];
  	if(customerType == CUSTOMER_TYPE_PRIVATE){
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
    //list quận huyện npr  
    getListDistrict =  function (provId) {
    	overLoading("Loading...");
		var url =eim_url +"/bs/SourceDistrict?provinceId="+provId;
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
		var url =eim_url +"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourceParentAddress = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    //KHCHA list quận huyện địa chỉ cước
    getListParentPriceDistrict =  function (provId) {
		var url =eim_url +"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourcePrice = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    //KHCON list quận huyện hoa đơn
    getListSubBillPriceDistrict =  function (provId) {
		var url =eim_url +"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourceSubBillPrice = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
  //KHCON Địa chỉ thông báo cước: list quận huyện
    getListSubNotiDistrict =  function (provId) {
		var url =eim_url +"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourceSubNoti = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetListPackage =  function (provId) {
		var url =eim_url +"/bs/SourcePackagePostpaid";
		 $http.get(url).success(function (data){
			 $scope.PackageTypeSource = data;
			 getListCountry();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListCountrySourcePostpaid =  function (provId) {
		var url =eim_url +"/bs/SourceCountryPostpaid";
		 $http.get(url).success(function (data){
			 $scope.CountryPostpaidSource = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    
    
    getListCountry =  function () {
		var url =eim_url +"/bs/SourceCountry";
		 $http.get(url).success(function (data){
			 $scope.CountrySource = data;
			 getListNetworkType();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    // get list data province, package, country,
    getListProvince();
	
	//on customer level change
	$scope.onCustomerLevelChange = function(){
		removeErrorClassElement("idLevelCustomerPar");
		removeErrorClassElement("idLevelCustomerSub");
		
	}
	
    $scope.onGenderParentChange = function(){
    	var modelGenderTypeVal = StringUtilNVL($scope.model.genderType);
    	if(modelGenderTypeVal != EMPTY_VALUE){
    		removeErrorClassElement("idGenderDiv");
    		removeErrorClassElement("subGenderId");
    	}
    }
    
    $scope.onGenderSubChange = function(){
    	var modelGenderTypeVal = StringUtilNVL($scope.model.subGenderType);
    	if(modelGenderTypeVal != EMPTY_VALUE){
    		removeErrorClassElement("subGenderId");
    	}
    }
    
	// on cusstomer change
    $scope.onCustomerNPRChange = function(){
    	
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
    	if(old_customer_type != customerTypeNPR){
    		if(customerTypeNPR != EMPTY_VALUE){
    			
    			$scope.model.documentNumber = "";
    			$scope.model.documentIssueDate = "";
    			$scope.model.documentIssuePlace = "";
        		$scope.model.documentType = ""; 
        		$scope.model.levelCustomer = ""
        			
        		$scope.model.customerType = customerTypeNPR;
            	
        		$scope.copyNameCustomer();
        		$scope.copyValueDocumentType();
        		
        		$scope.onChangeValueByCustomerType();
        		
        		removeErrorClassElement("idCustomerTypeNPRDiv");
        		removeErrorClassElement("idCustomerTypePar");
        		removeErrorClassElement("idCustomerTypeSub");
        		
        		// set mandatory by customertype
        		setMandatoryFieldNPR($scope, true, customerTypeNPR);
        		setMandatoryFieldPostPaid($scope, true, customerTypeNPR);
        		
        		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE || customerTypeNPR == CUSTOMER_TYPE_COMPANY ){
        			var citizenVietNam = null;
        			$scope.model.documentNumberCustomer = ""
        			
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
        				
        		    	setDisabledByCustomer($scope, true);
        		    	
        				$scope.model.documentNumberCustomer = $scope.model.documentNumber;
        				$scope.IdentityTypeSource = $scope.IdentityTypeSourcePrivate;
        				
        	  			$scope.BillTypeSource = $scope.BillTypeSourcePrivate;
        				
        				$scope.LevelCustomerSource = $scope.LevelCustomerSourcePrivate;
        				//disable taxcode parent and company name
        				
        				$scope.model.parentCompanyName = "";
        				$scope.model.parentTaxcode = "";
        				$scope.model.subTaxcode = "";
        				$scope.model.subCompanyName = "";
        				
        				$scope.isDisParTaxCode = true;
        				$scope.isDisParCompanyName = true;
        			}
        			
        			if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
        		    	setDisabledByCustomer($scope, false);
        		    	
        				if(StringUtilNVL($scope.model.documentType)== DOC_TYPE_MASOTHUE){
        					$scope.model.subTaxcode == $scope.model.documentNumber;
        				}
        				
        				$scope.IdentityTypeSource = $scope.IdentityTypeSourceCompany;
        				$scope.LevelCustomerSource = $scope.LevelCustomerSourceCompany;
        				
        				$scope.BillTypeSource = $scope.BillTypeSourceCompany;
        				
        				//
        				$scope.isDisParTaxCode = false;
        				$scope.isDisParCompanyName = false;
        			}
        		}
        	}
    		old_customer_type = customerTypeNPR;
    	}
    }
    
    $scope.copyValueByCustomerType = function(elementModel, elementModelDepen) {
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model[elementModelDepen] = $scope.model[elementModel];
		}
	};
	
	$scope.$watch('model.documentIssueDate', function() {
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		var documentType = StringUtilNVL($scope.model.documentType);
		
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			if(documentType == DOC_TYPE_CMND || documentType == DOC_TYPE_THECANCUOC){
				$scope.model.parentDocumentIssueDate = $scope.model.documentIssueDate;
				$scope.model.subDateIssue = $scope.model.documentIssueDate;
			}
		}
	});
	
	$scope.$watch('model.documentIssuePlace', function() {
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		var documentType = StringUtilNVL($scope.model.documentType);
		
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			if(documentType == DOC_TYPE_CMND || documentType == DOC_TYPE_THECANCUOC){
		    	$scope.model.parentDocumentIssuePlace = $scope.model.documentIssuePlace;
		    	$scope.model.subDocumentIssuePlace = $scope.model.documentIssuePlace;
			}
		}
	});
	
	$scope.copyNameCustomer = function() {
		
		if(StringUtilNVL($scope.model.customerTypeNPR) == CUSTOMER_TYPE_COMPANY){
			$scope.model.parentSurname = "";
			$scope.model.parentName = "";
			$scope.model.subSurname = "";
			$scope.model.subName = "";
			
			$scope.model.parentTaxcode = "";
			
			$scope.model.parentCompanyName = $scope.model.fullName;
		}else if(StringUtilNVL($scope.model.customerTypeNPR) == CUSTOMER_TYPE_PRIVATE){
			
			$scope.model.companyName = "";
			
			var objectName = separateName(StringUtilNVL($scope.model.fullName));
			
			$scope.model.parentSurname = objectName.firstName;
			$scope.model.parentName = objectName.lastName;
		}
	};
	
	$scope.copyValueDocumentType = function() {
			
		$scope.model.parentTaxcode = "";
		$scope.model.subTaxcode = "";
		
		$scope.model.parentDocumentNumber = "";
		$scope.model.subDocumentNumber    = "";
		
    	$scope.model.parentDocumentIssuePlace = "";
    	$scope.model.subDocumentIssuePlace = "";
    	$scope.model.parentDocumentIssueDate = "";
		$scope.model.subDateIssue = "";
		
		var documentType = StringUtilNVL($scope.model.documentType);
		
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		$scope.model.subTaxcode = "";
		if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			if(documentType == DOC_TYPE_MASOTHUE){
				$scope.model.parentDocumentNumber = "";
				$scope.model.subDocumentNumber    = "";
				
				$scope.model.subTaxcode = $scope.model.documentNumber;
				$scope.model.parentTaxcode = $scope.model.documentNumber;
			}
		}
				
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			if(documentType == DOC_TYPE_CMND || documentType == DOC_TYPE_THECANCUOC){
				
				$scope.model.parentDocumentNumber = $scope.model.documentNumber;
				$scope.model.subDocumentNumber =    $scope.model.documentNumber;
				
		    	$scope.model.parentDocumentIssuePlace = $scope.model.documentIssuePlace;
		    	$scope.model.parentDocumentIssueDate = $scope.model.documentIssueDate;
		    	
			}else {

			}
		}
		
	};
	
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
    	$scope.model.district = "";
    	if($scope.model.province.proId!=""){
    		
    		$scope.model.parentAddProvince = $scope.model.province;
    		$scope.model.parentPriceProvince = $scope.model.province;
    		$scope.model.parentAddDistrict = "";
    		$scope.model.parentPriceDistrict = "";
    		removeErrorClassElement("idSelectDivProvince");
    		removeErrorClassElement("ProvinceCustomerDiv");
    		$scope.model.provinceCustomer = $scope.model.province;
    		
    		
//    		getListDistrict($scope.model.province.proId);
    		overLoading("Loading...");
    		var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.province.proId;
    		 $http.get(url).success(function (data){
    				$scope.DistrictSource = data;
    				$scope.model.district = $scope.DistrictSource[SELECT_NONE_INDEX];
    				
//    				getListDistrictParentAddress($scope.model.province.proId);
    				 var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.province.proId;
    				 $http.get(url).success(function (data){
    					 $scope.DistrictSourceParentAddress = data;
    					 
//    					 getListParentPriceDistrict($scope.model.province.proId);
    					 var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.province.proId;
    					 $http.get(url).success(function (data){
    						 $scope.DistrictSourcePrice = data;
    						 
//    						 $scope.onSelectedChangeParentAddProvince();
    						 var messageText = "Loading data province";
    					     overLoading(messageText);
    					     $scope.model.parentAddDistrict = "";
    					     $scope.model.parentAddRegion = $scope.model.parentAddProvince.region;
    						 $scope.model.parentPriceProvince = $scope.model.parentAddProvince;
    						 $scope.model.subBillAddProvince = $scope.model.parentAddProvince;
    						 $scope.model.subNotiAddProvince = $scope.model.parentAddProvince;
    					     removeErrorClassElement("idDivPostalParentProvince");
    					     removeErrorClassElement("idDivPostalParentProvince");
    					     removeErrorClassElement("idDivPostalParentProvince");
    					     
//    					     getListDistrictParentAddress($scope.model.parentAddProvince.proId);
    					     var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.parentAddProvince.proId;
    						 $http.get(url).success(function (data){
    							 $scope.DistrictSourceParentAddress = data;
    							 
//    							 getListParentPriceDistrict($scope.model.parentAddProvince.proId);
    							 var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.parentAddProvince.proId;
    							 $http.get(url).success(function (data){
    								 $scope.DistrictSourcePrice = data;
    								 
//    								 $scope.onSelectedChangeParentProvincePrice();
    								 var messageText = "Loading data province";
    							     $scope.model.parentPriceDistrict = "";
    							     $scope.model.parentPriceRegion = $scope.model.parentPriceProvince.region;
    							     overLoading(messageText);
    							     $scope.model.subNotiAddProvince = $scope.model.parentPriceProvince;
    							     removeErrorClassElement("idDivParPriceProvince");
    							     
//    							     getListParentPriceDistrict($scope.model.parentPriceProvince.proId);
    							     var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.parentPriceProvince.proId;
    								 $http.get(url).success(function (data){
    									 $scope.DistrictSourcePrice = data;
    									 
//    									 $scope.onSelectedChangeBillSubProvinceAdd();
    									 var messageText = "Loading data province";
    								     $scope.model.subBillAddDistrict = "";
    								     overLoading(messageText);
    								     $scope.model.subBillAddRegion = $scope.model.subBillAddProvince.region;
    								     $scope.model.subNotiAddProvince = $scope.model.subBillAddProvince;
    								     removeErrorClassElement("idDivSubBillProvince");
    								     removeErrorClassElement("idDivSubNotiAddProvince");
    								     
//    								     getListSubBillPriceDistrict($scope.model.subBillAddProvince.proId);
    								     var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.subBillAddProvince.proId;
    									 $http.get(url).success(function (data){
    										 $scope.DistrictSourceSubBillPrice = data;
    										 
//    										 $scope.onSelectedChangeNotiSubProvinceAdd();
    										 var messageText = "Loading data province";
    									     $scope.model.subNotiAddDistrict = "";
    									     removeErrorClassElement("idDivSubNotiAddProvince");
    									     overLoading(messageText);
    									     $scope.model.subNotiAddRegion = $scope.model.subNotiAddProvince.region;
    									     
//    									     getListSubNotiDistrict($scope.model.subNotiAddProvince.proId);
    									     var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.subNotiAddProvince.proId;
    										 $http.get(url).success(function (data){
    											 $scope.DistrictSourceSubNoti = data;
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
    							 }).error(function (response){
    								 closeOverLay();
    							 });
    						 }).error(function (response){
    							 closeOverLay();
    						 });
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
    }
    
    $scope.onParentCountryChange = function(){
    	removeErrorClassElement("idParentCountryDiv");
    	removeErrorClassElement("idSubCountryDiv");
    }
    
    $scope.onSubCountryChange = function(){
    	removeErrorClassElement("idSubCountryDiv");
    }
    
    $scope.onSelectedChangeSubPaymentsMethod = function(){
    	removeErrorClassElement("idDivSubPaymentsMethod");
    }
    
    $scope.onSelectedChangeSubSubPaymentsType = function(){
    	removeErrorClassElement("idDivSubPaymentsType");
    }
    
    $scope.onSelectedChangeSubBillType = function(){
    	removeErrorClassElement("idDivSubBillType");
    }
    
    //NPR quận huyện onchange
    $scope.onDistrictChange = function(){
    	var districtNPR = StringUtilNVL(checkModelVisible($scope.model.district)?"": 
    		StringUtilNVL($scope.model.district.districtName));
    	
    	if(districtNPR != ""){
    		$scope.model.parentAddDistrict = $scope.model.district;
    		$scope.model.parentPriceDistrict = $scope.model.district;
    		
    		$scope.model.subNotiAddDistrict = $scope.model.district;
    		$scope.model.subBillAddDistrict = $scope.model.district;
    		
    		removeErrorClassElement("divDistrictId");
    		removeErrorClassElement("DistrictCustomerDiv");
    		
    		removeErrorClassElement("idDivParPriceDistrict");
    		removeErrorClassElement("idDivSubBillDistrict");
    		removeErrorClassElement("idDivSubNotiAddDistrict");
    		
    		removeErrorClassElement("idDivPostalParentProvince");
    		removeErrorClassElement("idDivPostalParentDistrict");
    	}
    }
    
    //KHCHA Địa chỉ nơi ở : quận huyện onchange
    $scope.onSelectedParentAddDistrictChange = function(){
    	removeErrorClassElement("idDivPostalParentDistrict");
    	removeErrorClassElement("idDivParPriceDistrict");
    	removeErrorClassElement("idDivSubBillDistrict");
    	removeErrorClassElement("idDivSubNotiAddDistrict");
    	
    	if($scope.model.parentAddProvince == $scope.model.parentPriceProvince){
    		$scope.model.parentPriceDistrict = $scope.model.parentAddDistrict;
    	}
    	
    	$scope.model.subBillAddDistrict = $scope.model.parentAddDistrict;
    	$scope.model.subNotiAddDistrict = $scope.model.parentAddDistrict;
    }
    
    //KHCHA Địa chỉ thông báo cước : quận huyện onchange
    $scope.onSelectedParentPriceDistrictChange = function(){
    	removeErrorClassElement("idDivParPriceDistrict")
    	$scope.model.subNotiAddDistrict = $scope.model.parentPriceDistrict;
    }
    
    //KHCON Địa chỉ hóa đơn : quận huyện onchange
    $scope.onSelectedSubAddDistrictChange = function(){
    	removeErrorClassElement("idDivSubBillDistrict");
    	if($scope.model.subBillAddProvince == $scope.model.subNotiAddProvince){
    		$scope.model.subNotiAddDistrict = $scope.model.subBillAddDistrict;
    		removeErrorClassElement("idDivSubNotiAddDistrict");
    	}
    }
    
    $scope.onSelectedChangeNotiSubDistrictAdd = function(){
    	removeErrorClassElement("idDivSubNotiAddDistrict");
    }
    
    
    $scope.$watch('model.parentSurname', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subSurname = $scope.model.parentSurname;
		}
    });

    $scope.$watch('model.parentName', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subName = $scope.model.parentName;
		}
    });
    
    $scope.$watch('model.parentPhoneNumber', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subContactNumber = $scope.model.parentPhoneNumber;
		}
    });
    
    $scope.$watch('model.parentBirthDay', function() {
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		var documentType = StringUtilNVL($scope.model.documentType);
		
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subBirthDay = $scope.model.parentBirthDay;
		}
	});
    
    $scope.$watch('model.genderType', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subGenderType = $scope.model.genderType;
		}
    });
    
    $scope.$watch('model.emailParent', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subEmail = $scope.model.emailParent;
		}
    });
    
    $scope.$watch('model.parentDocumentNumber', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subDocumentNumber = $scope.model.parentDocumentNumber;
		}
    });
    
    $scope.$watch('model.parentDocumentIssueDate', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subDateIssue = $scope.model.parentDocumentIssueDate;
		}
    });
    
    $scope.$watch('model.parentDocumentIssuePlace', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
			$scope.model.subDocumentIssuePlace = $scope.model.parentDocumentIssuePlace;
		}
    });
    
    $scope.$watch('model.parentCompanyName', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			$scope.model.subCompanyName = $scope.model.parentCompanyName;
		}
    });
    
    $scope.$watch('model.parentTaxcode', function() {
    	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			$scope.model.subTaxcode = $scope.model.parentTaxcode;
		}
    });
    
    
    //KHCHA Địa chỉ nơi ở: phường xã,toa nha, so duong
    $scope.$watch('model.parentAddTown', function() {
    	$scope.model.parentPriceTown = $scope.model.parentAddTown;
    	$scope.model.subBillAddTown = $scope.model.parentAddTown;
    	$scope.model.subNotiAddTown = $scope.model.parentAddTown;
    });
    
    $scope.$watch('model.parentAddRoad', function() {
    	$scope.model.parentPriceRoad = $scope.model.parentAddRoad;
    	$scope.model.subBillAddRoad = $scope.model.parentAddRoad;
    	$scope.model.subNotiAddRoad = $scope.model.parentAddRoad;
    });
    
    $scope.$watch('model.parentAddNumberHome', function() {
    	$scope.model.parentPriceNumberHome = $scope.model.parentAddNumberHome;
    	$scope.model.subBillAddNumberHome = $scope.model.parentAddNumberHome;
    	$scope.model.subNotiAddNumberHome = $scope.model.parentAddNumberHome;
    });
    
    $scope.$watch('model.parentAddBuildingName', function() {
    	$scope.model.parentPriceBuildingName = $scope.model.parentAddBuildingName;
    	$scope.model.subBillAddBuildingName = $scope.model.parentAddBuildingName;
    	$scope.model.subNotiAddBuildingName = $scope.model.parentAddBuildingName;
    });
    
    $scope.$watch('model.parentAddRoomNumber', function() {
    	$scope.model.parentPriceRoomNumber = $scope.model.parentAddRoomNumber;
    	$scope.model.subBillAddRoomNumber = $scope.model.parentAddRoomNumber;
    	$scope.model.subNotiAddRoomNumber = $scope.model.parentAddRoomNumber;
    });
    
    //KHCHA Địa chỉ thông báo cước: phường xã onchange
    $scope.$watch('model.parentPriceTown', function() {
    	$scope.model.subNotiAddTown = $scope.model.parentPriceTown;
    });
    
    $scope.$watch('model.parentPriceRoad', function() {
    	$scope.model.subNotiAddRoad = $scope.model.parentPriceRoad;
    });
    
    $scope.$watch('model.parentPriceNumberHome', function() {
    	$scope.model.subNotiAddNumberHome = $scope.model.parentPriceNumberHome;
    });
    
    $scope.$watch('model.parentPriceBuildingName', function() {
    	$scope.model.subNotiAddBuildingName = $scope.model.parentPriceBuildingName;
    });
    
    $scope.$watch('model.parentPriceRoomNumber', function() {
    	$scope.model.subNotiAddRoomNumber = $scope.model.parentPriceRoomNumber
    });
    
    //KHCON Địa chỉ thông báo cước: phường xã onchange
    $scope.$watch('model.subBillAddTown', function() {
    	$scope.model.subNotiAddTown = $scope.model.subBillAddTown;
    });
    
    $scope.$watch('model.subBillAddRoad', function() {
    	$scope.model.subNotiAddRoad = $scope.model.subBillAddRoad;
    });
    
    $scope.$watch('model.subBillAddNumberHome', function() {
    	$scope.model.subNotiAddNumberHome = $scope.model.subBillAddNumberHome;
    });
    
    $scope.$watch('model.subBillAddBuildingName', function() {
    	$scope.model.subNotiAddBuildingName = $scope.model.subBillAddBuildingName;
    });
    
    
    $scope.$watch('model.subBillAddRoomNumber', function() {
    	$scope.model.subNotiAddRoomNumber = $scope.model.subBillAddRoomNumber;
    });
    
    $scope.$watch('model.parentCountry', function() {
    	$scope.model.subCountry = $scope.model.parentCountry;
    });
    
	$scope.onChangeValueByCustomerType = function(){
		var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
		
		if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
//			$scope.model.ParentDocumentIssueDate = $scope.model.documentIssueDate;
//			$scope.model.parentDocumentIssuePlace = $scope.model.documentIssuePlace;
		}else if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
//			$scope.model.parentDocumentIssueDate = "";
//			$scope.model.parentDocumentIssuePlace = "";
		
		}
	}
    
	//KHCHA Địa chỉ nơi ở :Tỉnh thành onchange 
    $scope.onSelectedChangeParentAddProvince = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.parentAddDistrict = "";
    	$scope.model.parentAddRegion = $scope.model.parentAddProvince.region;
		$scope.model.parentPriceProvince = $scope.model.parentAddProvince;
		$scope.model.subBillAddProvince = $scope.model.parentAddProvince;
		$scope.model.subNotiAddProvince = $scope.model.parentAddProvince;
    	removeErrorClassElement("idDivPostalParentProvince");
    	removeErrorClassElement("idDivPostalParentProvince");
    	removeErrorClassElement("idDivPostalParentProvince");
    	
    	
//    	getListDistrictParentAddress($scope.model.parentAddProvince.proId);
    	var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.parentAddProvince.proId;
		 $http.get(url).success(function (data){
			 $scope.DistrictSourceParentAddress = data;
			 
//			 getListParentPriceDistrict($scope.model.parentAddProvince.proId);
			 var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.parentAddProvince.proId;
			 $http.get(url).success(function (data){
				 $scope.DistrictSourcePrice = data;
				 
//				 $scope.onSelectedChangeParentProvincePrice();
				 var messageText = "Loading data province";
			     $scope.model.parentPriceDistrict = "";
			     $scope.model.parentPriceRegion = $scope.model.parentPriceProvince.region;
			     overLoading(messageText);
			     $scope.model.subNotiAddProvince = $scope.model.parentPriceProvince;
			     removeErrorClassElement("idDivParPriceProvince");
			     
//			     $scope.onSelectedChangeNotiSubProvinceAdd();
			     var messageText = "Loading data province";
			     $scope.model.subNotiAddDistrict = "";
			     removeErrorClassElement("idDivSubNotiAddProvince");
			     overLoading(messageText);
			     $scope.model.subNotiAddRegion = $scope.model.subNotiAddProvince.region;
			     
//			     getListSubNotiDistrict($scope.model.subNotiAddProvince.proId);
			     var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.subNotiAddProvince.proId;
				 $http.get(url).success(function (data){
					 $scope.DistrictSourceSubNoti = data;
					 
//				     getListParentPriceDistrict($scope.model.parentPriceProvince.proId);
				     var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.parentPriceProvince.proId;
					 $http.get(url).success(function (data){
						 $scope.DistrictSourcePrice = data;
						 
//						 $scope.onSelectedChangeBillSubProvinceAdd();
						 var messageText = "Loading data province";
					     $scope.model.subBillAddDistrict = "";
					     overLoading(messageText);
					     $scope.model.subBillAddRegion = $scope.model.subBillAddProvince.region;
					     $scope.model.subNotiAddProvince = $scope.model.subBillAddProvince;
					     removeErrorClassElement("idDivSubBillProvince");
					     removeErrorClassElement("idDivSubNotiAddProvince");
					     
//					     getListSubBillPriceDistrict($scope.model.subBillAddProvince.proId);
					     var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.subBillAddProvince.proId;
						 $http.get(url).success(function (data){
							 $scope.DistrictSourceSubBillPrice = data;
							 
//							 $scope.onSelectedChangeNotiSubProvinceAdd();
							 var messageText = "Loading data province";
						     $scope.model.subNotiAddDistrict = "";
						     removeErrorClassElement("idDivSubNotiAddProvince");
						     overLoading(messageText);
						     $scope.model.subNotiAddRegion = $scope.model.subNotiAddProvince.region;
						     
//						     getListSubNotiDistrict($scope.model.subNotiAddProvince.proId);
						     var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.subNotiAddProvince.proId;
							 $http.get(url).success(function (data){
								 $scope.DistrictSourceSubNoti = data;
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
    	$scope.model.parentPriceDistrict = "";
    	$scope.model.parentPriceRegion = $scope.model.parentPriceProvince.region;
    	overLoading(messageText);
    	$scope.model.subNotiAddProvince = $scope.model.parentPriceProvince;
    	removeErrorClassElement("idDivParPriceProvince");
    	
//    	getListParentPriceDistrict($scope.model.parentPriceProvince.proId);
    	var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.parentPriceProvince.proId;
		$http.get(url).success(function (data){
			$scope.DistrictSourcePrice = data;
			 
//			$scope.onSelectedChangeNotiSubProvinceAdd();
			var messageText = "Loading data province";
	    	$scope.model.subNotiAddDistrict = "";
	    	removeErrorClassElement("idDivSubNotiAddProvince");
	    	overLoading(messageText);
	    	$scope.model.subNotiAddRegion = $scope.model.subNotiAddProvince.region;
	    	
//	    	getListSubNotiDistrict($scope.model.subNotiAddProvince.proId);
	    	var url =eim_url +"/bs/SourceDistrict?provinceId="+$scope.model.subNotiAddProvince.proId;
			$http.get(url).success(function (data){
				$scope.DistrictSourceSubNoti = data;
				closeOverLay();
			}).error(function (response){
				closeOverLay();
			});
		}).error(function (response){
			closeOverLay();
		});
    }

    //KHCON Địa chỉ hóa đơn, tỉnh thành onchange
    $scope.onSelectedChangeBillSubProvinceAdd = function(){
    	var messageText = "Loading data province";
    	
//    	if(StringUtilNVL(provId)!= ""){
    		$scope.model.subBillAddDistrict = "";
//    	}
    	overLoading(messageText);
    	$scope.model.subBillAddRegion = $scope.model.subBillAddProvince.region;
    	$scope.model.subNotiAddProvince = $scope.model.subBillAddProvince;
    	getListSubBillPriceDistrict($scope.model.subBillAddProvince.proId);
    	$scope.onSelectedChangeNotiSubProvinceAdd();
    	removeErrorClassElement("idDivSubBillProvince");
    	removeErrorClassElement("idDivSubNotiAddProvince");
    }
    
    //KHCON Địa chỉ thông báo cước, tỉnh thành onchange
    $scope.onSelectedChangeNotiSubProvinceAdd = function(){
    	var messageText = "Loading data province";
//    	if(StringUtilNVL(provId)!= ""){
    		$scope.model.subNotiAddDistrict = "";
//    	}
    	removeErrorClassElement("idDivSubNotiAddProvince");
    	overLoading(messageText);
    	$scope.model.subNotiAddRegion = $scope.model.subNotiAddProvince.region;
    	getListSubNotiDistrict($scope.model.subNotiAddProvince.proId);
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
    	
    	/*if(modelAccountTypeVal == ACCOUNT_TYPE_POSTPAID){
    		setMandatoryAccountType($scope, true);
    	}else{
    		setMandatoryAccountType($scope, false);
    	}*/
    	
    }
    
    $scope.onDocumentTypeNPRChange = function(){
    	var documentTypeNPR = StringUtilNVL($scope.model.documentType);
    	if(documentTypeNPR != EMPTY_VALUE){
    		$scope.copyValueDocumentType();
    		$scope.onChangeValueByCustomerType();
    		removeErrorClassElement("idDocumentTypeDiv");
    	}
    }
    
    $scope.onPackageTypePostpaidChange = function(){
    	var modelPackageType = StringUtilNVL($scope.model.packageType);
    	if(modelPackageType != EMPTY_VALUE){
    		removeErrorClassElement("idPackageTypeDiv");
    	}
    }

	
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
//                isletterandnumberwithspace: true
            },
            SubdataDNONumber:{
            	EmptyValue:true,
            	requiredNumber: true,
            	maxlengthcustom: MAX_LENGTH_SUBSCRIBER_NUMBER,
            	minlengthwithdata: MIN_LENGTH_SUBSCRIBER_NUMBER
            },
            SerialSim:{
            	EmptyValue:true,
            	requiredNumber: true,
            	maxlengthcustom: MAX_LENGTH_SERIAL_SIM,
            	minlengthwithdata: MIN_LENGTH_SERIAL_SIM
            },
            DnoContractNumber:{
//            	EmptyValueOptions: ACCOUNT_TYPE_POSTPAID,
            	isletterandnumber: true,
            	maxlengthcustom: MAX_LENGTH_DNO_CONTRACT_NUMBER,
            	minlengthwithdata: MIN_LENGTH_DNO_CONTRACT_NUMBER
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
            EmailRep:{
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
//                isletterandnumberwithspace: true
            },
			AddressCustomer:{
				EmptyValue:true,
                minlengthcustom: 5
			 },
			SubScriberCustomerNumber:{
				EmptyValue:true,
                maxlength: 255
			},
	        NumberSIM:{
	        	EmptyValue:true,
	            maxlength: 255
	        },
	        SubBirthDay:{
				EmptyValue:true,
				isDate:true,
				requiredbirthday: true		
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
			SubSurname:{
            	EmptyValue:true
            },
            SubName:{
            	EmptyValue:true
            },
            SubDocumentNumber:{
            	EmptyValue:true,
                requirewithoption:DOC_TYPE_CMND,
                maxlengthcustom: 15,
                minlengthwithdata: 8,
                isletterandnumber: true
			},
			SubDocumentIssuePlace: {
            	EmptyValueForeignNPR:CUSTOMER_TYPE_FOREIGN,
                minlengthcustomernpr: CUSTOMER_TYPE_FOREIGN,
                maxlengthcustom: 80,
//                isletterandnumberwithspace: true
            },
            SubDateOfIssue: {
            	EmptyValue:true,
                isDate:true,
                lessthancurrentdate:true,
                requiredlessthanyear:15
			},
			SubEmail:{
            	EmptyValue:true,
//                email: true,
                maxlengthcustom: 80 ,
	        },
			SubContactNumber: {
				EmptyValue:true,
				requiredNumber: true
			},
			SubTaxcode :{
				EmptyValueByCustomerType:CUSTOMER_TYPE_COMPANY,
				maxlengthcustom: MAX_TAX_CODE_LENGTH,
			},
			SubCompanyName: {
				EmptyValueByCustomerType:CUSTOMER_TYPE_COMPANY,
			},
			SubAddTown :{
				EmptyValue:true,
			},
			SubBillAddRoad :{
				EmptyValue:true,
			},
			SubNotiAddTown :{
				EmptyValue:true,
			},
			SubNotiAddRoad :{
				EmptyValue:true,
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
//            	minlengthcustomernpr: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.minlength'),
            	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.maxlength'),
//            	isletterandnumberwithspace: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.letter.required'),
            },
            SubdataDNONumber:{
	        	EmptyValue: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.emptyvalue'),
	        	requiredNumber: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.required.number'),
	        	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.maxlength'),
	        	minlengthwithdata: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.number.minlength')
	        },
	        SerialSim:{
	        	EmptyValue: 		$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.empty'),
                requiredNumber: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.number'),
                maxlengthcustom: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.maxlenth'),
                minlengthwithdata: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.serial.sim.minlength')
	        },
	        DnoContractNumber:{
//	        	EmptyValueOptions: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.emptyvalue'),
	        	isletterandnumber: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.letter.required'),
	        	maxlengthcustom: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.maxlength'),
	        	minlengthwithdata: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.minlength'),
	        },
	        SubDNOContractDateRes:{
//	        	EmptyValueOptions: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.emptyvalue'),
	        	isDateOptions: 		$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.isdate'),
	        	lessthancurrentdate:$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.dno.contract.date.lessthancurrentdate')
	        },
	        Email:{
                email: 				$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.email'),
                maxlengthcustom:  	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.email.maxlength'),
	        },
	        EmailRep:{
	        	email: 				$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.email'),
                maxlengthcustom:  	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.email.maxlength'),
	        },
	        Address:{
            	EmptyValueForeignNPR:$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.emptyvalue'),
                minlengthcustomernpr: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.minlength'),
                maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.maxlength'),
//                isletterandnumberwithspace : $translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.address.letter.requried'),
	         },
	         ReprentativeName:{
//	           isletterwithlength: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.name.letter.required'),
	           maxlengthcustom: 	$translate.instant('vnm.mnp_message.registration.prepaid.validate.sub.data.reprentative.name.maxlength')
	          }, 
	        RepresentativePosition:{
	            },
            RepresentativeDocNumber:{
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
//            	isletterandnumberwithspace: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.letter.required'),
            },
			AddressCustomer:{
                EmptyValue: "Yêu cầu nhập dạng.",
                minlengthcustom: "Địa chỉ không đúng định dạng"
            },
			SubScriberCustomerNumber:{
                EmptyValue: "Yêu cầu nhập dạng."
            },
			NumberSIM:{
                EmptyValue: "Yêu cầu nhập Số sim"
            },
            SubBirthDay:{
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.empty'),
				isDate:$translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.isdate'),
				requiredbirthday: $translate.instant('vnm.mnp_message.registration.postpaid.validate.birthday.maxminage')
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
			SubSurname:{
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.surname.required')
            },
            SubName:{
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.name.required')
            },
            SubDocumentNumber:{
				EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.required'),
                requirewithoption: $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.number.requirewithoption'),
                maxlengthcustom: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.maxlength'),
                minlengthwithdata: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.minlength'),
                isletterandnumber:$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.letter.required'),
            },
            SubDocumentIssuePlace: {
            	EmptyValueForeignNPR: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.emptyvalue'),
            	minlengthcustomernpr: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.minlength'),
            	maxlengthcustom: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.maxlength'),
//            	isletterandnumberwithspace: $translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.letter.required'),
            },
            SubEmail:{
            	EmptyValue:			$translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email.required'),
//                email: 				$translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email'),
                maxlengthcustom:  	$translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email.maxlength'),
	        },
            SubDateOfIssue: {
            	EmptyValue: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.required'),
                isDate:  $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.isdate'),
                lessthancurrentdate: $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.lessthancurrentdate'),
                requiredlessthanyear: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.date.required.less.than.yearcmt')
			},
			SubContactNumber: {
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required'),
            	requiredNumber: $translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required.number'),
			},
			SubTaxcode :{
				EmptyValueByCustomerType:$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.required'),
				maxlengthcustom: $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.max.length')
			},
			SubCompanyName: {
				EmptyValueByCustomerType:$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.company.name.required'),
			},
			SubAddTown :{
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required')
			},
			SubBillAddRoad :{
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required')
			},
			SubNotiAddTown :{
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required')
			},
			SubNotiAddRoad :{
				EmptyValue:$translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required')
			}
	      }
	    } 

    
	 // Validate method custom
	 $.validator.addMethod("isletterwithlength", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(!isLetterAndSpaceUnicode(value.toString())){
				 return false;
			 }
		 }
		 return true;
	 }, "");
	 
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
    
    $.validator.addMethod("maxlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght >  options) return false;
		 return true;
	 }, "");
    
    $.validator.addMethod("minlengthwithdata", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(valueLenght<options) return false;
		 }
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
    
    $.validator.addMethod("isletterandnumberwithspace", function (value, element) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(!isLetterAndNumberWithSpace(value.toString())){
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
    
    $.validator.addMethod("requiredlessthanyearcmt", function (value, element, options) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;
		        
		if($scope.model.documentType == DOC_TYPE_CMND || $scope.model.documentType == DOC_TYPE_THECANCUOC){
		        var today = moment().add(MAX_YEAR_DOCUMENT, 'years');
		        return (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY"));
	     }      
		 return true;
	  }, "");
    
	 $.validator.addMethod("minlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght<options) return false;
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
		 if($scope.model.accountType==options){
		        if (value == undefined || value=="") return false;
		        if($.trim(value)=="") return false;
		 }
		 return true;
	 }, "");
	 
	 $.validator.addMethod("EmptyValue", function (value, element) {
	        if (value == undefined || value=="") return false;
	        if($.trim(value)=="") return false;
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
	// End Validate method custom
	       
    $scope.RegionSource  = [
        { 'Id': '1', 'Title': 'Miền bắc' },
        { 'Id': '2', 'Title': 'Miền trung' },
        { 'Id': '3', 'Title': 'Miền nam' } 
    ]; 
    
    $scope.CountrySource  = [
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
        { 'Id': 'NPR_XACNHAN_DNO', 'Title': 'Văn bản xác nhận của DNO'},
        { 'Id': 'NPR_DKCM', 'Title': 'Phiếu đăng ký chuyển mạng'},
        { 'Id': 'NPR_LOAIKHAC', 'Title': 'Loại khác'}
    ];
    
    $scope.CustomerTypeSource  = [
        { 'Id': '1', 'Title': 'Cá nhân' },
        { 'Id': '2', 'Title': 'Công ty' }
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
        		var message = messageSizeErrorClient.replace(/###/, fileName);
        		bootbox.alert(message);
        		return false;
        	}
        }
    });
    
    uploader.onAfterAddingFile = function(item){
    	item._file.name = ConvertFileNameNoneUTF8(item.file.name);
    	item.file.name = ConvertFileNameNoneUTF8(item.file.name);
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
    	bootbox.alert("Có lỗi xảy ra trong quá trình upload file.");
    }
    
    $scope.uploadAllFile =  function(uploaderIn){
    	overLoading(messageUploading);
    	checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
    	if(!checkListTotalSize){
    		bootbox.alert(messageSizeError);
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
    $scope.removeElementAttachmenById =  function(idAttachMent){
    	angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
    	   if(objectAttact.attachMentIdClient == idAttachMent){
    	        $scope.model.fileAttachments.splice(index,1);   
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
    
    $scope.cancel = function () {
         return 1;
    }
    
    $scope.checkValid = function(obj){
    	if(obj== undefined || obj==null || obj=="") return true;
    	return false;
    }
    
    checkCustomerExistInSystem =  function (idNum, taxCode) {
    	overLoading("Loading...");
    	var customerType = StringUtilNVL($scope.model.customerTypeNPR);
    	
		var url =eim_url +"/bs/npr/check_customer_exist_postpaid?idNum="+StringUtilNVL(idNum)+"&taxCode="+taxCode+"&customerTypeIn="+customerType;
		 $http.get(url).success(function (response){
			 
			 if(response != undefined && response != null && response.code == CUSTOMER_PRIVATE_EXIST_EPOS){
				 bootboxConfirm(PREPAID_NPR_HEADER, MESS_CUSTOMER_PRIVATE_EXIST_EPOS, $scope.confirmCreateNPROK, $scope.confirmKO);
			 }
			 else if(response != undefined && response != null && response.code == COMPANY_EXIS_EPOS){
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
		var url =eim_url +"/bs/npr/check_subscriber_number_active?msisdn="+msisdnIn;
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
    	var urlCreateNPR =eim_url +"/bs/registration/create_ticket_npr_postpaid";
    	$http.post(urlCreateNPR,data).success(function (response){
    		 var transactionID = response.message;
    		 $scope.bootboxAlertReloadPage(ALERT_TITLE, REGISTRATION_NPR_SUCCESS+transactionID);
    		//duytk10 -------------------------------------------------------------------------------------------
    		 if($scope.model.checkinsert !=""&&$scope.model.checkinsert !=undefined){
	    		 if($scope.model.checkinsert.iD !=""&& $scope.model.checkinsert.status!=""){
	    			 $scope.model.subDataNumber=data;
	        		 updatePreOrderTrans(1,$scope.model.subDataNumber.subdataContactNumber);
	    			 onInsertchGroupMnpOrder(transactionID);
	    		 }
    		 }
    		 //--------------------------------------------------------------------------------------------
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
    		 
    		 closeOverLay();
    		 bootbox.alert(REGISTRATION_NPR_LIST_ERROR + ' '+response.message);
    	 });
    }
    
    $scope.onclickConfirmSave = function(){
    	bootboxConfirm(PREPAID_NPR_HEADER, CONFIRM_MESSAGE_PORT_IN, $scope.confirmOK, $scope.confirmKO);
    }
    
  	$scope.confirmOK = function(){
  		$scope.save();
  	}
  	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
  	$scope.save = function () {
    	
  	    var isFormValidated = validateAllForm($scope, $translate);
  	    if ($scope.frm_registration_postpaid.validate() && isFormValidated) {
//  		if(true){
  	    	var checkFileCustomerAlreadyUpload = false;
  	    	
  	    	var checkTotalFileSize = false;
  	    	var checkAllFileUploaded = false;
  	    	
  	    	var checkAllFileFileCustomerUploaded = false;
  	    	var checkAllFileCustomerUploaded = false;
  	    	    	
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
  	    	
			if(customerType == CUSTOMER_TYPE_PRIVATE){
				var idNum = StringUtilNVL($scope.model.parentDocumentNumber);
				var taxCode = "";
				checkCustomerExistInSystem(idNum, taxCode); 
			}else{ 
				var idNum = StringUtilNVL($scope.model.parentDocumentNumber);
				var taxCode = StringUtilNVL($scope.model.subTaxcode);
				checkCustomerExistInSystem(idNum, taxCode); 
			}
			 
//  	    	$scope.confirmCreateNPROK();
  	    }
  	  }
  
  	$scope.confirmCreateNPROK = function(){
  		$scope.uploadFileBeforeCreatedNPR();
  	}
  	
  	 $scope.uploadFileBeforeCreatedNPR = function(){
  		var checkFileAllisUploaded = true;
  	  	if(uploader.queue.length > 0){
  	  		checkFileAllisUploaded = checkAllFileOfQueueUploaded(uploader);
  	  	}
  	  	
  	  	if (checkFileAllisUploaded == false) {
  	  		uploadAllItemByList(uploader);
  	  		
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
         		$scope.prepareCreateNPR();	
               	checkAllFileUploaded = true;
         	}
  	      };
  	  }
  	 
  	$scope.prepareCreateNPR = function (){
    	overLoading();
    	
    	var checkFileAllisUpload = checkAllFileOfQueueUploaded(uploader);
    	if(!checkFileAllisUpload){
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
    	
    	var parentCountryName =  StringUtilNVL($scope.model.parentCountry);
    	
    	var districtParentAdd = StringUtilNVL(checkModelVisible($scope.model.parentAddDistrict)?"": 
    		StringUtilNVL($scope.model.parentAddDistrict.districtName));
    	
    	var provinceParentAdd = StringUtilNVL(checkModelVisible($scope.model.parentAddProvince)?"": 
    		StringUtilNVL($scope.model.parentAddProvince.provinceName));
    	
    	var parentBillingAddressDataModelval = {
    		    "billRegion" 	:	StringUtilNVL($scope.model.parentAddRegion),
    		    "billProvince":	provinceParentAdd,
    		    "billDistrict":	districtParentAdd,
    		    "billAddressLine": StringUtilNVL($scope.model.parentAddRoad),
    		    "billCountry" :	StringUtilNVL(parentCountryName),
    		    "billTow" : StringUtilNVL($scope.model.parentAddTown),
    		    "billRoad": StringUtilNVL($scope.model.parentAddRoad),
    		    "billNumberHome" : StringUtilNVL($scope.model.parentAddNumberHome),
    		    "billBuildingName" : StringUtilNVL($scope.model.parentAddBuildingName),
    		    "billRoomNumber": StringUtilNVL($scope.model.parentAddRoomNumber)
    		    
    	}
    	
    	var districtParentPrice = StringUtilNVL(checkModelVisible($scope.model.parentPriceDistrict)?"": 
    		StringUtilNVL($scope.model.parentPriceDistrict.districtName));
    	
    	var provinceParentPrice = StringUtilNVL(checkModelVisible($scope.model.parentPriceProvince)?"": 
    		StringUtilNVL($scope.model.parentAddProvince.provinceName));
    	
    	var parentPostalAddressDataModelVal = {
    		    "postalRegion": 		StringUtilNVL($scope.model.parentPriceRegion),
    		    "postalProvince": 	provinceParentPrice,
    		    "postalDistrict":  	districtParentPrice,
    		    "postalAddressLine": 	StringUtilNVL($scope.model.parentPriceRoad),
    		    "postalCountry" : 	StringUtilNVL(parentCountryName),
    		    "postalTow" : StringUtilNVL($scope.model.parentPriceTown),
    		    "postalRoad": StringUtilNVL($scope.model.parentPriceRoad),
    		    "postalNumberHome": StringUtilNVL($scope.model.parentPriceNumberHome),
    		    "postalBuildingName": StringUtilNVL($scope.model.parentPriceBuildingName),
    		    "postalRoomNumber": StringUtilNVL($scope.model.parentPriceRoomNumber)
    	};

    	var subCountryName = StringUtilNVL($scope.model.subCountry);
    	
    	var childProvinceBill = StringUtilNVL(checkModelVisible($scope.model.subBillAddProvince)?"": 
    		StringUtilNVL($scope.model.subBillAddProvince.provinceName));
    	
    	var chillDistrictBill = StringUtilNVL(checkModelVisible($scope.model.subBillAddDistrict)?"": 
    		StringUtilNVL($scope.model.subBillAddDistrict.districtName));
    	
    	var childBillingAddressData = {
    		    "billRegion" : StringUtilNVL($scope.model.subBillAddRegion),
    		    "billProvince" : childProvinceBill,
    		    "billDistrict" : chillDistrictBill,
    		    "billAddressLine" : StringUtilNVL($scope.model.subBillAddRoad),
    		    "billCountry" : StringUtilNVL(subCountryName),
    		    "billTow" : StringUtilNVL($scope.model.subBillAddTown),
    		    "billRoad" : StringUtilNVL($scope.model.subBillAddRoad),
    		    "billNumberHome" : StringUtilNVL($scope.model.subBillAddNumberHome),
    		    "billBuildingName" : StringUtilNVL($scope.model.subBillAddBuildingName),
    		    "billRoomNumber": StringUtilNVL($scope.model.subBillAddRoomNumber)
    	};
    	    	
    	var childProvincePostal = StringUtilNVL(checkModelVisible($scope.model.subNotiAddProvince)?"": 
    		StringUtilNVL($scope.model.subNotiAddProvince.provinceName));
    	
    	var chillDistrictPostal = StringUtilNVL(checkModelVisible($scope.model.subNotiAddDistrict)?"": 
    		StringUtilNVL($scope.model.subNotiAddDistrict.districtName));
    	
    	var childPostalAddressDataVal = {
    		    "postalRegion" :StringUtilNVL($scope.model.subNotiAddRegion),
    		    "postalProvince" : childProvincePostal,
    		    "postalDistrict" :chillDistrictPostal,
    		    "postalAddressLine" :StringUtilNVL($scope.model.subNotiAddRoad),
    		    "postalCountry" :StringUtilNVL(subCountryName),
    		    "postalTow" :StringUtilNVL($scope.model.subNotiAddTown),
    		    "postalRoad" :StringUtilNVL($scope.model.subNotiAddRoad),
    		    "postalNumberHome" :StringUtilNVL($scope.model.subNotiAddNumberHome),
    		    "postalBuildingName" :StringUtilNVL($scope.model.subNotiAddBuildingName),
    		    "postalRoomNumber" :StringUtilNVL($scope.model.subNotiAddRoomNumber)
    	};
    	
    	var childPersonInfoMessage = {
    			"custType" :StringUtilNVL($scope.model.customerTypeNPR),
    		    "customerSegment" :StringUtilNVL($scope.model.levelCustomer),
    		    "companyName" :StringUtilNVL($scope.model.subCompanyName),
    		    "firstName" :StringUtilNVL($scope.model.subSurname),
    		    "lastName" :StringUtilNVL($scope.model.subName),
    		    "gender" :StringUtilNVL($scope.model.subGenderType),
    		    "birthDate" :StringUtilNVL($("#SubBirthDay").val()),
    		    "idNumber" :StringUtilNVL($scope.model.subDocumentNumber),
    		    "placeOfIssue" :StringUtilNVL($scope.model.subDocumentIssuePlace),
    		    "dateOfIssue" :StringUtilNVL($("#SubDateOfIssue").val()),
    		    "emailAddress" :StringUtilNVL($scope.model.subEmail),
    		    "taxCode" :StringUtilNVL($scope.model.subTaxcode),
    		    "bussinessLincense" :StringUtilNVL($scope.model.busRegistrationNumber),
    		    "contactNumber" :StringUtilNVL($scope.model.subContactNumber),
    		    "custLang" :StringUtilNVL(subCountryName),
    		    "packetType" :StringUtilNVL($scope.model.packageType)
    	};
    	
    	var childPaymentMethod = {
    			
    	};
    	
    	var provisioningSubscriberInfo = {
		    	"msisdn" : msisdnIn,
		    	"packageType" : StringUtilNVL($scope.model.packageType),
		    	"primary" : "Y",
		    	"serialSim" : StringUtilNVL($scope.model.serialSim),
		    	"subscriberName": getNameSubscriber($scope.model.subSurname, $scope.model.subName),
		    	"customerType": StringUtilNVL($scope.model.customerTypeNPR),
		    	"accountType": StringUtilNVL($scope.model.accountType),
		    	"accountTypeDNO": StringUtilNVL($scope.model.accountType)
    	}
    	
    	var childrenInforModelval = {
    		    "billingAddressData" : childBillingAddressData,
    		    "postalAddressData" : childPostalAddressDataVal,
    		    "personInfoMessage" : childPersonInfoMessage,
    		    "paymentMethod" : StringUtilNVL($scope.model.subPaymentsMethod),
    		    "billType": StringUtilNVL($scope.model.subBillType),
    		    "paymentType" : StringUtilNVL($scope.model.subPaymentsType), 
    		    "proSubscriberList"	 : [provisioningSubscriberInfo]
    	}
    	
      	var countryNameParent = StringUtilNVL($scope.model.parentCountry);
    	
    	var parentPersonInfoDataModelVal = {
    			"custType" : StringUtilNVL($scope.model.customerTypeNPR),
    		    "customerSegment" : StringUtilNVL($scope.model.levelCustomer),
    		    "companyName" : StringUtilNVL($scope.model.parentCompanyName),
    		    "firstName" : StringUtilNVL($scope.model.parentSurname),
    		    "lastName" : StringUtilNVL($scope.model.parentName),
    		    "gender" : StringUtilNVL($scope.model.genderType),
    		    "birthDate" : StringUtilNVL($("#ParentBirthDay").val()),
    		    "idNumber" : StringUtilNVL($scope.model.parentDocumentNumber),
    		    "placeOfIssue" : StringUtilNVL($scope.model.parentDocumentIssuePlace),
    		    "dateOfIssue" : StringUtilNVL($("#ParentDocumentIssueDate").val()),
    		    "contactNumber" :StringUtilNVL($scope.model.parentPhoneNumber),
    		    "emailAddress" : StringUtilNVL($scope.model.emailParent),
    		    "custLang" :  countryNameParent,
    		    "taxCode" : StringUtilNVL($scope.model.parentTaxcode),
    		    "packetType" :StringUtilNVL($scope.model.packageType)
    	}
    	
    	var postpaidModel = {
    		    "childrenInfor" :[childrenInforModelval],
    		    "billingAddressData" : parentBillingAddressDataModelval,
    		    "postalAddressData"  : parentPostalAddressDataModelVal,
    		    "personInfoData"	 : parentPersonInfoDataModelVal
    	}
    	
    	$scope.updateListAttachMent(uploader, $scope.model.fileAttachments);
    	
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
//    			"attachmentDataCustomer"  : $scope.model.fileAttachmentsCustomer ,
//    			"nprSubscribers"  : [violationInfo] ,
//    			"provisioningCustomerInfos"  : [provisioningCustomerInfor] ,
    			"provisioningSubscriberInfos"  : [provisioningSubscriberInfo],
//    			"provisioningRepresentInfos" : [provisioningRepresentInfos],
    			"postPaidInformation" : [postpaidModel]
    	};
    	
    	createNprFunctionService(nprFormDataInput);
    	/*
		 * 1190 checkSubscriberNumberIsActiveInEpos(msisdnIn);
		 */
    	
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
			
			var fileExtValue = $scope.files[0].name.split(".").pop();
			
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
	$scope.copyValueToOtherInput = function(elementModel, elementModelDepen) {
		$scope.model[elementModelDepen] = $scope.model[elementModel];
	};
	
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
	
	$scope.resetAllFormPrepaid = function($scope){
		$scope.model = {};
		$scope.listMessage = [];
		$scope.model.fileAttachments = [];
		
		$scope.DistrictSource = [];
		$scope.DistrictSourceCustomer = [];
		$scope.DistrictSourceParentAddress = [];
		$scope.DistrictSourcePrice = [];
		$scope.DistrictSourceSubNoti = [];
		$scope.DistrictSourceSubBillPrice = [];
		
		uploader.clearQueue();
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
function checkAllFileUploadedFn(uploaderIn){
	var checkFileAllisUpload = true;
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
	// check cutomer is individual
	if(typeCustomer == "PRIVATE"){
		// check if document type CMT1 AND KH1
		var checkPrivateCMT1 = $.inArray(TYPE_IMG_CMT1, listFileDocType)>-1;
		var checkPrivateKH = $.inArray(TYPE_IMG_KH, listFileDocType)> -1;
		if(checkPrivateKH ==false || checkPrivateCMT1 == false){
			return PRIVATE_TYPE_DOC_ERROR;
		}
	}
	
	if(typeCustomer == "FOREIGN"){
		// check if document type CMT1 AND KH1
		var checkPrivateCMT1 = $.inArray(TYPE_IMG_CMT1, listFileDocType)>-1;
		var checkPrivateKH = $.inArray(TYPE_IMG_KH, listFileDocType)> -1;
		
		if(checkPrivateKH ==false || checkPrivateCMT1 == false){
			return FOREIGN_TYPE_DOC_ERROR;
		}
	}
	
	if(typeCustomer == "COMPANY"){
		// check if document type CMT1 AND KH1
		var checkPrivateCMT1 = $.inArray(TYPE_IMG_CMT1, listFileDocType)-1;
		var checkPrivateKH = $.inArray(TYPE_IMG_KH, listFileDocType)> -1;
		
		var checkPrivateGPKD = $.inArray(TYPE_IMG_GPKD, listFileDocType)> -1;
		var checkPrivateHD1 = $.inArray(TYPE_IMG_HD1, listFileDocType)> -1;
		
		if(checkPrivateKH ==false || checkPrivateCMT1 == false
				|| checkPrivateGPKD ==false || checkPrivateHD1 == false){
			return COMPANY_TYPE_DOC_ERROR;
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

function setDisabledByCustomer($scope, isDis){
	
	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
	
	$scope.isDisSubSurName = false;
	$scope.isDisSubName = false;
	$scope.isDisSubGender = isDis;
	
	$scope.isDisSubBirthday = isDis;
	$scope.isDisSubLanguage = isDis;
	$scope.isDisSubEmail = isDis;
	$scope.isDisSubContactNumber = isDis;

	/*$scope.isDisSubCompanyName = isDis;
	$scope.isDisSubTaxCode = isDis;*/
	$scope.isDisSubBusRegistrationNumber = isDis;
	
	$scope.isDisSubNumberIssue = isDis;
	$scope.isDisSubPlaceIssue = isDis;
	$scope.isDisSubDateIssue = isDis;
	if(customerTypeNPR == CUSTOMER_TYPE_PRIVATE){
		$scope.isDisSubNotiAddProvince = false;
		$scope.isDisSubNotiAddDistrict = false;
		$scope.isDisSubNotiAddTown = false;
		$scope.isDisSubNotiAddRoad = false;
		$scope.isDisSubNotiAddNumberHome = false;
		$scope.isDisSubNotiAddBuildingName = false;
		$scope.isDisSubNotiAddRoomNumber = false;
	}else{
		$scope.isDisSubNotiAddProvince = isDis;
		$scope.isDisSubNotiAddDistrict = isDis;
		$scope.isDisSubNotiAddTown = isDis;
		$scope.isDisSubNotiAddRoad = isDis;
		$scope.isDisSubNotiAddNumberHome = isDis;
		$scope.isDisSubNotiAddBuildingName = isDis;
		$scope.isDisSubNotiAddRoomNumber = isDis;
		
	}

	if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
		$scope.isDisSubBillProvince = true;
		$scope.isDisSubBillDistrict = true;
		$scope.isDisSubBillTown = true;
		$scope.isDisSubBillRoad = true;
		$scope.isDisSubBillNumberHome = true;
		$scope.isDisSubBillBuildingName = true;
		$scope.isDisSubBillAddRoomNumber = true;
	}else{
		$scope.isDisSubBillProvince = isDis;
		$scope.isDisSubBillDistrict = isDis;
		$scope.isDisSubBillTown = isDis;
		$scope.isDisSubBillRoad = isDis;
		$scope.isDisSubBillNumberHome = isDis;
		$scope.isDisSubBillBuildingName = isDis;
		$scope.isDisSubBillAddRoomNumber = isDis;
	}
	
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
	
	$scope.provinceNPR = isDis;
	$scope.districtNPR = isDis;
	
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


function validateAllForm($scope, $translate){

	var result = true;
	
	var TEXT_CHECK_NPR_VALIDATED = "";
	var TEXT_CHECK_PAR_VALIDATED = "";
	var TEXT_CHECK_SUB_VALIDATED = "";
		
	var listFieldNPRNotValidated = "";
	var listFieldPARNotValidated = "";
	var listFieldSUBNotValidated = "";
	
	listFieldNPRNotValidated = "<strong>"+ TAB_HEADER_NPR +"</strong>"+BREAK_LINE;
	TEXT_CHECK_NPR_VALIDATED = listFieldNPRNotValidated;
	
	listFieldPARNotValidated = "<strong>"+ TAB_HEADER_PARENT +"</strong>"+BREAK_LINE;
	TEXT_CHECK_PAR_VALIDATED = listFieldPARNotValidated;
	
	listFieldSUBNotValidated = "<strong>"+ TAB_HEADER_SUBSCRIBER +"</strong>"+BREAK_LINE;
	TEXT_CHECK_SUB_VALIDATED = listFieldSUBNotValidated;
	
	var customerTypeNPR = StringUtilNVL($scope.model.customerTypeNPR);
	
	var countryMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.country.required')
	var messProvinceRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.province.required');
	var messDistrictRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.district.required');
	
	// THONG TIN CHUYEN MANG
	var fullName = StringUtilNVL($scope.model.fullName);
	if(!StringUtilNVLIsNotEmpty(fullName)){
		listFieldNPRNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.fullname.emptyvalue') +BREAK_LINE;
		result =  false;
	}
	
	var documentType = StringUtilNVL($scope.model.documentType);
	if(!StringUtilNVLIsNotEmpty(documentType)){
		var documentTypeRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.type.required');
		
		setErrorClassElement("idDocumentTypeDiv", documentTypeRequired);
		listFieldNPRNotValidated += "+ "+ documentTypeRequired +BREAK_LINE;
		result =  false;
	}
	
	if(!StringUtilNVLIsNotEmpty(customerTypeNPR)){
		var customerTypeMess = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.customer.type.required');
		
		setErrorClassElement("idCustomerTypeNPRDiv", customerTypeMess);
		
		setErrorClassElement("idCustomerTypePar", customerTypeMess);
		setErrorClassElement("idCustomerTypeSub", customerTypeMess);
		
		listFieldNPRNotValidated += "+ "+customerTypeMess +BREAK_LINE;
		result =  false;
	}
	
	var documentNumber = StringUtilNVL($scope.model.documentNumber);
	if(!StringUtilNVLIsNotEmpty(documentNumber)){
		var documentNumberRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.number.emptyvalue');
		
		listFieldNPRNotValidated += "+ "+documentNumberRequired+BREAK_LINE;
		result =  false;
	}
	
	var documentIssueDate = StringUtilNVL($("#documentIssueDate").val());
	if(!StringUtilNVLIsNotEmpty(documentIssueDate)){
		listFieldNPRNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.emptyvalue') +BREAK_LINE;
		result =  false;
	}else if(documentType == DOC_TYPE_CMND || documentType == DOC_TYPE_HOCHIEU || documentType == DOC_TYPE_THECANCUOC){
		if(!validateDocumentIssueDate(documentIssueDate)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.popup') +BREAK_LINE;
			result =  false;
		}
	}else{
		if(checkDateGreaterThanYear(documentIssueDate, PRESENT_YEAR)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.lessthancurrentdate') +BREAK_LINE;
			result =  false;
		}
	}
	
	if(StringUtilNVLIsNotEmpty(documentIssueDate) && !isDateValidate(documentIssueDate)){
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.isdate') +BREAK_LINE;
		result =  false;
	}
	
	var documentIssuePlace = StringUtilNVL($scope.model.documentIssuePlace);
	if(!StringUtilNVLIsNotEmpty(documentIssuePlace)){
		listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.place.emptyvalue') +BREAK_LINE;
		result =  false;
	}
	
	var citizen = StringUtilNVL(checkModelVisible($scope.model.citizen)?"": 
		StringUtilNVL($scope.model.citizen.countryName));
	if(!StringUtilNVLIsNotEmpty(citizen)){
		var messCountryRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.country.required');
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
//		if($scope.model.customerTypeNPR == CUSTOMER_TYPE_PRIVATE || $scope.model.customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			setErrorClassElement("idSelectDivProvince", messProvinceRequired);
			listFieldNPRNotValidated += "+ "+messProvinceRequired +BREAK_LINE;
			result =  false;
//		}
	}
	
	var district = StringUtilNVL(checkModelVisible($scope.model.district)?"": 
		StringUtilNVL($scope.model.district.districtName));
	if(!StringUtilNVLIsNotEmpty(district)){
//		if($scope.model.customerTypeNPR == CUSTOMER_TYPE_PRIVATE || $scope.model.customerTypeNPR == CUSTOMER_TYPE_COMPANY){
			setErrorClassElement("divDistrictId", messDistrictRequired);
			listFieldNPRNotValidated += "+ " +messDistrictRequired +BREAK_LINE;
			result =  false;
//		}
	}
	
	var address = StringUtilNVL($scope.model.address);
	if(!StringUtilNVLIsNotEmpty(address)){
		var messageAddressRuired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.address.emptyvalue');
		
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
			var documentRepresentDateMess = $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.reprentative.popup.required');
			
			listFieldNPRNotValidated += "+ "+documentRepresentDateMess +BREAK_LINE;
			result =  false;
		}
		
		if(!isDateValidate(representativeDocDate)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.reprentative.doc.date.isdate') +BREAK_LINE;
			result =  false;
		}
	}
	
	var donor = StringUtilNVL($scope.model.donor);
	if(!StringUtilNVLIsNotEmpty(donor)){
		var donorMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.donor.required');
		
		setErrorClassElement("idDonorDiv", donorMessRequired);
		listFieldNPRNotValidated += "+ "+donorMessRequired +BREAK_LINE;
		result =  false;
	}
	
	var subDataNumber = StringUtilNVL($scope.model.subDataNumber);
	if(!StringUtilNVLIsNotEmpty(subDataNumber)){
		var messSubNumber = $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.number.emptyvalue');
		listFieldNPRNotValidated += "+ "+ messSubNumber +BREAK_LINE;
		result =  false;
	}else if(!validateMSISDN(subDataNumber)){
		result =  false;
		var messMaxMinRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.popup.maxminlength');
		
		listFieldNPRNotValidated += "+ "+ messMaxMinRequired +BREAK_LINE;
	}
	
	var accountType = StringUtilNVL($scope.model.accountType);
	if(!StringUtilNVLIsNotEmpty(accountType)){
		var messAccountTypeRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.accountype.required');
		
		setErrorClassElement("idAccountTypeDiv", messAccountTypeRequired);
		listFieldNPRNotValidated += "+ "+ messAccountTypeRequired +BREAK_LINE;
		result =  false;
	}
	
	var dnoContractNumber = StringUtilNVL($scope.model.dnoContractNumber);
	var subDNOContractDateRes = StringUtilNVL($("#subDNOContractDateRes").val());
	/*if(accountType == ACCOUNT_TYPE_POSTPAID){
		if(!StringUtilNVLIsNotEmpty(dnoContractNumber)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.emptyvalue') +BREAK_LINE;
			result =  false;
		}
		
		if(!StringUtilNVLIsNotEmpty(subDNOContractDateRes)){
			listFieldNPRNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.dno.contract.date.emptyvalue') +BREAK_LINE;
			result =  false;
		}
		
	}*/
	
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
	
	var comments = StringUtilNVL($scope.model.comments);
	if(!StringUtilNVLIsNotEmpty(comments)){
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
	
	// BEGIN THONG TIN KHACH HANG CHA
	var parSurname = StringUtilNVL($scope.model.parentSurname);
	if(!StringUtilNVLIsNotEmpty(parSurname)){
		listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.surname.required') +BREAK_LINE;
		result =  false;
	}
	
	var levelCustomer = StringUtilNVL($scope.model.levelCustomer);
	if(!StringUtilNVLIsNotEmpty(levelCustomer)){
		var levelCustomerMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.cus.level.required');
		
		setErrorClassElement("idLevelCustomerPar", levelCustomerMessRequired);
		setErrorClassElement("idLevelCustomerSub", levelCustomerMessRequired);
		listFieldPARNotValidated += "+ "+levelCustomerMessRequired +BREAK_LINE;
		result =  false;
	}

	var parName = StringUtilNVL($scope.model.parentName);
	if(!StringUtilNVLIsNotEmpty(parName)){
		listFieldPARNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.name.required') +BREAK_LINE;
		result =  false;
	}
	
	var parentPhoneNumber = StringUtilNVL($scope.model.parentPhoneNumber);
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
	
	var parentDocumentNumber = StringUtilNVL($scope.model.parentDocumentNumber);

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
	
	var parentDocumentIssuePlace = StringUtilNVL($scope.model.parentDocumentIssuePlace);
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
	
	var parentCountry = StringUtilNVL($scope.model.parentCountry);
	if(!StringUtilNVLIsNotEmpty(parentCountry)){
		setErrorClassElement("idParentCountryDiv", countryMessRequired);
		listFieldPARNotValidated += "+ "+countryMessRequired +BREAK_LINE;
		result =  false;
	}
	
	var parentEmail = StringUtilNVL($scope.model.emailParent);
	if(!StringUtilNVLIsNotEmpty(parentEmail)){
		listFieldPARNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email.required') +BREAK_LINE;
		result =  false;
	}
	
	var parentTaxcode = StringUtilNVL($scope.model.parentTaxcode);
	if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
		var parentCompanyName = StringUtilNVL($scope.model.parentCompanyName);
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
	
	var parGenderType = StringUtilNVL($scope.model.genderType);
	if(!StringUtilNVLIsNotEmpty(parGenderType)){
		var genderMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.gender.required')
		
		setErrorClassElement("idGenderDiv", genderMessRequired);
		listFieldPARNotValidated += "+ "+genderMessRequired +BREAK_LINE;
		result =  false;
	}
	
	//Nơi ở Tỉnh thành phố
	var addressPostal = $translate.instant('vnm.mnp_message.registration.postpaid.posta.address.title');
	var notiBillingAddressTitle = $translate.instant('vnm.mnp_message.registration.postpaid.noti.bill.address.title');
	var billingAddressTitle = $translate.instant('vnm.mnp_message.registration.postpaid.sub.billing.addres.title');
	
	var parentAddProvince = StringUtilNVL($scope.model.parentAddProvince);
	if(!StringUtilNVLIsNotEmpty(parentAddProvince)){
		setErrorClassElement("idDivPostalParentProvince", messProvinceRequired);
		listFieldPARNotValidated += "+ "+addressPostal +" :"+ messProvinceRequired +BREAK_LINE;
		result =  false;
	}
	
	//Nơi ở  quận huyện
	var parentAddProvince = StringUtilNVL($scope.model.parentAddDistrict);
	if(!StringUtilNVLIsNotEmpty(parentAddProvince)){
		setErrorClassElement("idDivPostalParentDistrict", messDistrictRequired);
		
		listFieldPARNotValidated += "+ "+addressPostal +" :"+  messDistrictRequired +BREAK_LINE;
		result =  false;
	}
	
	//Nơi ở Phường xã
	var parentAddTown = StringUtilNVL($scope.model.parentAddTown);
	if(!StringUtilNVLIsNotEmpty(parentAddTown)){
		var messParentAddTownRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required');
		
		listFieldPARNotValidated += "+ "+addressPostal +" :"+ messParentAddTownRequired +BREAK_LINE;
		result =  false;
	}
	
	//Nơi ở Đường
	var parentAddRoad = StringUtilNVL($scope.model.parentAddRoad);
	if(!StringUtilNVLIsNotEmpty(parentAddRoad)){
		var messParentAddRoadRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required');
		
		listFieldPARNotValidated += "+ "+addressPostal +" :"+ messParentAddRoadRequired +BREAK_LINE;
		result =  false;
	}
	
	//TBC Tỉnh/Thành
	var parentPriceProvince = StringUtilNVL($scope.model.parentPriceProvince);
	if(!StringUtilNVLIsNotEmpty(parentAddProvince)){
		setErrorClassElement("idDivParPriceProvince", messProvinceRequired);
		listFieldPARNotValidated += "+ "+notiBillingAddressTitle +" :"+ messProvinceRequired +BREAK_LINE;
		result =  false;
	}
	
	//TBC quận huyện
	var parentPriceDistrict = StringUtilNVL($scope.model.parentPriceDistrict);
	if(!StringUtilNVLIsNotEmpty(parentPriceDistrict)){
		setErrorClassElement("idDivParPriceDistrict", messDistrictRequired);
		listFieldPARNotValidated += "+ "+notiBillingAddressTitle +" :"+  messDistrictRequired +BREAK_LINE;
		result =  false;
	}
	
	//TBC Phường xã
	var parentPriceTown = StringUtilNVL($scope.model.parentPriceTown);
	if(!StringUtilNVLIsNotEmpty(parentPriceTown)){
		var messParentPriceTownRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required');
		
		listFieldPARNotValidated += "+ "+notiBillingAddressTitle +" :"+ messParentPriceTownRequired +BREAK_LINE;
		result =  false;
	}
	
	//TBC Đường
	var parentPriceRoad = StringUtilNVL($scope.model.parentPriceRoad);
	if(!StringUtilNVLIsNotEmpty(parentPriceRoad)){
		var messParentPriceRoadRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required');
		
		listFieldPARNotValidated += "+ "+notiBillingAddressTitle +" :"+ messParentPriceRoadRequired +BREAK_LINE;
		result =  false;
	}
	
	// END THONG TIN KHACH HANG CHA
	
	
	// BEGIN THONG TIN KHACH HANG CON
	var subSurname = StringUtilNVL($scope.model.subSurname);
	if(!StringUtilNVLIsNotEmpty(subSurname)){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.surname.required') +BREAK_LINE;
		result =  false;
	}
	
	var subName = StringUtilNVL($scope.model.subName);
	if(!StringUtilNVLIsNotEmpty(subName)){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.name.required') +BREAK_LINE;
		result =  false;
	}
	
	var subBirthDay = StringUtilNVL($("#SubBirthDay").val());
	if(!StringUtilNVLIsNotEmpty(subBirthDay)){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.birthday.required') +BREAK_LINE;
		result =  false;
	}else{
		if(StringUtilNVLIsNotEmpty(subBirthDay) && !isDateValidate(subBirthDay)){
			listFieldSUBNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.birthday.isdate') +BREAK_LINE;
			result =  false;
		}else if(!validateBirthDay(subBirthDay)){
			result =  false;
			listFieldSUBNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.birthday.maxminage') +BREAK_LINE;			
		}
	}
	
	var subGenderType = StringUtilNVL($scope.model.subGenderType);
	if(!StringUtilNVLIsNotEmpty(subGenderType)){
		var genderMessRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.gender.required')
		
		setErrorClassElement("subGenderId", genderMessRequired);
		listFieldSUBNotValidated += "+ "+genderMessRequired +BREAK_LINE;
		result =  false;
	}
	
	var subDocumentNumber = StringUtilNVL($scope.model.subDocumentNumber);
	if(!StringUtilNVLIsNotEmpty(subDocumentNumber)){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.required') +BREAK_LINE;
		result =  false;
	} else if(StringUtilNVLIsNotEmpty(subDocumentNumber) && subDocumentNumber.length <8){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.minlength') +BREAK_LINE;
		result =  false;
	}else if(StringUtilNVLIsNotEmpty(subDocumentNumber) && subDocumentNumber.length >15){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.documentnumber.maxlength') +BREAK_LINE;
		result =  false;
	}

	var subDocumentIssuePlace = StringUtilNVL($scope.model.subDocumentIssuePlace);
	if(!StringUtilNVLIsNotEmpty(subDocumentIssuePlace)){
		listFieldSUBNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.place.emptyvalue') +BREAK_LINE;
		result =  false;
	}else if(StringUtilNVLIsNotEmpty(subDocumentIssuePlace) && subDocumentIssuePlace.length <5){
		listFieldSUBNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.prepaid.validate.document.issue.place.minlength'),
		result =  false;
	}
	
	var subDateOfIssue = StringUtilNVL($("#SubDateOfIssue").val());
	if(!StringUtilNVLIsNotEmpty(subDateOfIssue)){
		listFieldSUBNotValidated += "+ " +$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.required') +BREAK_LINE;
		result =  false;
	}else if(!validateDocumentIssueDate(subDateOfIssue)){
		listFieldSUBNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.par.document.issue.date.popup') +BREAK_LINE;
		result =  false;
	}else{
		if(checkDateGreaterThanYear(subDateOfIssue, PRESENT_YEAR)){
			listFieldSUBNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.document.issue.date.lessthancurrentdate') +BREAK_LINE;
			result =  false;
		}
	}
	
	var subContactNumber = StringUtilNVL($scope.model.subContactNumber);
	if(!StringUtilNVLIsNotEmpty(subContactNumber)){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required') +BREAK_LINE;
		result =  false;
	}else if(StringUtilNVLIsNotEmpty(subContactNumber)){
		if(!isNumbericInteger(subContactNumber)){
			listFieldSUBNotValidated += "+ " + $translate.instant('vnm.mnp_message.registration.postpaid.validate.contact.number.required.number') +BREAK_LINE;
			result =  false;
		}
	}
	
	var subCountry = StringUtilNVL($scope.model.subCountry);
	if(!StringUtilNVLIsNotEmpty(subCountry)){
		setErrorClassElement("idSubCountryDiv", countryMessRequired);
		listFieldSUBNotValidated += "+ "+countryMessRequired +BREAK_LINE;
		result =  false;
	}
	
	var subEmail = StringUtilNVL($scope.model.subEmail);
	if(!StringUtilNVLIsNotEmpty(subEmail)){
		listFieldSUBNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.sub.data.email.required') +BREAK_LINE;
		result =  false;
	}
	
	var subTaxcode = StringUtilNVL($scope.model.subTaxcode);
	if(customerTypeNPR == CUSTOMER_TYPE_COMPANY){
		var subCompanyName = StringUtilNVL($scope.model.subCompanyName);
		if(!StringUtilNVLIsNotEmpty(subCompanyName)){
			listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.company.name.required') +BREAK_LINE;
			result =  false;
		}
		
		if(!StringUtilNVLIsNotEmpty(subTaxcode)){
			listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.required') +BREAK_LINE;
			result =  false;
		}
	}
	if(StringUtilNVLIsNotEmpty(subTaxcode) && subTaxcode.length > MAX_TAX_CODE_LENGTH){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.par.tax.code.max.length') +BREAK_LINE;
		result =  false;
	}
	
	var serialSim = StringUtilNVL($scope.model.serialSim);
	if(!StringUtilNVLIsNotEmpty(serialSim)){
		listFieldSUBNotValidated += "+ "+$translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.serial.sim.empty') +BREAK_LINE;
		result =  false;
	}else if(StringUtilNVLIsNotEmpty(serialSim) && (serialSim.length > 20 )){
		listFieldSUBNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.serial.sim.maxlenth') +BREAK_LINE;
		result =  false;
	}else if(StringUtilNVLIsNotEmpty(serialSim) && (serialSim.length <19)){
		listFieldSUBNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.serial.sim.minlength') +BREAK_LINE;
		result =  false;
	}else if(!isNumbericInteger(serialSim)){
		listFieldSUBNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.postpaid.validate.cus.serial.sim.number') +BREAK_LINE;
		result =  false;
    }
	
	var packageType = StringUtilNVL($scope.model.packageType);
	if(!StringUtilNVLIsNotEmpty(packageType)){
		setErrorClassElement("idPackageTypeDiv", $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.required'));
		listFieldSUBNotValidated += "+ "+ $translate.instant('vnm.mnp_message.registration.prepaid.validate.cus.package.type.required') +BREAK_LINE;
		result =  false;
	}
	
	//KHCON Hóa đơn Tỉnh thành phố
	var subBillAddProvince = StringUtilNVL($scope.model.subBillAddProvince);
	if(!StringUtilNVLIsNotEmpty(subBillAddProvince)){
		setErrorClassElement("idDivSubBillProvince", messProvinceRequired);
		listFieldSUBNotValidated += "+ "+billingAddressTitle +" :"+ messProvinceRequired +BREAK_LINE;
		result =  false;
	}
	
	//KHCON Hóa đơn  quận huyện
	var subBillAddDistrict = StringUtilNVL($scope.model.subBillAddDistrict);
	if(!StringUtilNVLIsNotEmpty(subBillAddDistrict)){
		setErrorClassElement("idDivSubBillDistrict", messDistrictRequired);
		listFieldSUBNotValidated += "+ "+billingAddressTitle +" :"+  messDistrictRequired +BREAK_LINE;
		result =  false;
	}
	
	//KHCON Hóa đơn Phường xã
	var subBillAddTown = StringUtilNVL($scope.model.subBillAddTown);
	if(!StringUtilNVLIsNotEmpty(subBillAddTown)){
		var messParentAddTownRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required');
		
		listFieldSUBNotValidated += "+ "+billingAddressTitle +" :"+ messParentAddTownRequired +BREAK_LINE;
		result =  false;
	}
	
	//KHCON Hóa đơn Đường
	var subBillAddRoad = StringUtilNVL($scope.model.subBillAddRoad);
	if(!StringUtilNVLIsNotEmpty(subBillAddRoad)){
		var messParentAddRoadRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required');
		
		listFieldSUBNotValidated += "+ "+billingAddressTitle +" :"+ messParentAddRoadRequired +BREAK_LINE;
		result =  false;
	}
	
	//KHCON TBC Tỉnh thành phố
	var subNotiAddProvince = StringUtilNVL($scope.model.subNotiAddProvince);
	if(!StringUtilNVLIsNotEmpty(subNotiAddProvince)){
		setErrorClassElement("idDivSubNotiAddProvince", messProvinceRequired);
		listFieldSUBNotValidated += "+ "+notiBillingAddressTitle +" :"+ messProvinceRequired +BREAK_LINE;
		result =  false;
	}
	
	//KHCON TBC  quận huyện
	var subNotiAddDistrict = StringUtilNVL($scope.model.subNotiAddDistrict);
	if(!StringUtilNVLIsNotEmpty(subNotiAddDistrict)){
		setErrorClassElement("idDivSubNotiAddDistrict", messDistrictRequired);
		listFieldSUBNotValidated += "+ "+notiBillingAddressTitle +" :"+  messDistrictRequired +BREAK_LINE;
		result =  false;
	}
	
	//KHCON TBC Phường xã
	var subNotiAddTown = StringUtilNVL($scope.model.subNotiAddTown);
	if(!StringUtilNVLIsNotEmpty(subNotiAddTown)){
		var messParentAddTownRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.town.required');
		
		listFieldSUBNotValidated += "+ "+notiBillingAddressTitle +" :"+ messParentAddTownRequired +BREAK_LINE;
		result =  false;
	}
	
	//KHCON TBC Đường
	var subNotiAddRoad = StringUtilNVL($scope.model.subNotiAddRoad);
	if(!StringUtilNVLIsNotEmpty(subNotiAddRoad)){
		var messParentAddRoadRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.road.required');
		
		listFieldSUBNotValidated += "+ "+notiBillingAddressTitle +" :"+ messParentAddRoadRequired +BREAK_LINE;
		result =  false;
	}
	
	var subPaymentsMethod = StringUtilNVL($scope.model.subPaymentsMethod);
	if(!StringUtilNVLIsNotEmpty(subPaymentsMethod)){
		var messHTTTRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.httt.required');
		setErrorClassElement("idDivSubPaymentsMethod", messHTTTRequired);
		listFieldSUBNotValidated += "+ "+ messHTTTRequired +BREAK_LINE;
		result =  false;
	}
	
/*	var subPaymentsType = StringUtilNVL($scope.model.subPaymentsType);
	if(!StringUtilNVLIsNotEmpty(subPaymentsType)){
		var messPaymentTypeRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.payment.type.required');
		setErrorClassElement("idDivSubPaymentsType", messPaymentTypeRequired);
		listFieldSUBNotValidated += "+ "+ messPaymentTypeRequired +BREAK_LINE;
		result =  false;
	}*/
	
	var subBillType = StringUtilNVL($scope.model.subBillType);
	if(!StringUtilNVLIsNotEmpty(subBillType)){
		var messSubBillTypeRequired = $translate.instant('vnm.mnp_message.registration.postpaid.validate.npr.subbill.type.required');
		setErrorClassElement("idDivSubBillType", messSubBillTypeRequired);
		listFieldSUBNotValidated += "+ "+ messSubBillTypeRequired +BREAK_LINE;
		result =  false;
	}
	
	// END THONG TIN KHACH HANG CON
	if(!result){
		var listMessageValidateAll = "";
		if(TEXT_CHECK_NPR_VALIDATED != listFieldNPRNotValidated){
			listMessageValidateAll += listFieldNPRNotValidated; 
		}
		
		if(TEXT_CHECK_PAR_VALIDATED != listFieldPARNotValidated){
			listMessageValidateAll += listFieldPARNotValidated; 
		}
		
		if(TEXT_CHECK_SUB_VALIDATED != listFieldSUBNotValidated){
			listMessageValidateAll += listFieldSUBNotValidated; 
		}
		
		bootboxAlertInformation(ALERT_TITLE, listMessageValidateAll);
	}
		
	return result;
}

// check all item in queue success :
// + false when all file not upload success
// + true when all file upload success
function checkAllFileOfQueueUploaded(uploaderIn){
	var checkFileAllisUpload = true;
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
