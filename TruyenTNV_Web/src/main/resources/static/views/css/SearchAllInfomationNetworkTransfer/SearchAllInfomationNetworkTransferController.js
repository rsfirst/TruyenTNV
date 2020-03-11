var EMPTY_VALUE = "";
var NPR_SUBSCRIBER_PORTIN_VISIBLE 	= '01';
var NPR_SUBSCRIBER_PORTOUT_VISIBLE 	= '02';
var NPR_CANCEL_RNO_VISIBLE 				= '03';
var NPR_CANCEL_DNO_VISIBLE 				= '04';
var REVERSAL_NUMBER_DNO_VISIBLE 	= '05';

var RECEIVE_NUMBER_VNM_VISIBLE 			= '06';
var REVERSAL_ORIGINAL_NETWORK_VISIBLE 	= '07';
var RECOVERY_NUMBER_VNM_VISIBLE 		= '08';

var EMPTY_VALUE_MESSAGE_CODE = 90000;

var MESSAGE_ALERT_TRANSACTION_ID  = "Không tìm thấy mã YCCM !";

var DATA_NOT_FOUND_PORT_IN  = "Không tìm thấy dữ liệu chuyển mạng đến !";
var DATA_NOT_FOUND_PORT_OUT  = "Không tìm thấy dữ liệu chuyển mạng đi !";
var DATA_NOT_FOUND_RNO_CANCEL  = "Không tìm thấy dữ liệu hủy chuyển mạng đến !";
var DATA_NOT_FOUND_DNO_CANCEL  = "Không tìm thấy dữ liệu hủy chuyển mạng đi !";

var DATA_NOT_FOUND_REVERSAL_DNO  = "Không tìm thấy dữ liệu trả số về DNO !";
var DATA_NOT_FOUND_REVERSAL_VNM  = "Không tìm thấy dữ liệu nhận số về VNM !";
var DATA_NOT_FOUND_RETURN_ORIGINAL_NETWORK  = "Không tìm thấy dữ liệu trả số về nhà mạng gốc !";
var DATA_NOT_FOUND_RETURN_NUMBER_VNM = "Không tìm thấy dữ liệu thu hồi số về VNM !";

var MESSAGE_ALERT_START_DATE = "Từ ngày bắt đầu không được lớn hơn ngày hiện tại ! ";
var DOWNLOAD_ERROR = "Có lỗi xảy ra trong quá trình download file !";

var START_DATE_END_DATE_ERROR = "Ngày bắt đầu tìm kiếm phải nhỏ hơn ngày kết thúc ! Nhập lại ngày tìm kiếm";

var TYPE_SEARCH_REQUIRED = "Nhập loại tra cứu !";
var CONDITION_SEARCH_REQUIRED = "Nhập ít nhất một điều kiện tìm kiếm !";

var ROW_NONE_INDEX = -1;

var MODAL_LIST_NPR_PORT_IN = "modalListNPRPortIn";
var MODAL_LIST_NPR_PORT_OUT = "modalListNPRPortOut";
var MODAL_NPR_CANCEL_POPUP = "modalNPRCancelPopup";

var ATTACHMENT_TYPE_NPT = "NPR_";
var ATTACHMENT_TYPE_CUS = "CUS_";

var listImageCustomerPortIn = [];

var oldValueSelectBoxTypeSearch = "";

var ACCOUNT_TYPE_POSTPAID = "Postpaid";
var ACCOUNT_TYPE_PREPAID = "Prepaid";

var MSISDN_REJECT_TEXT 	= "Thuộc DS số không được chuyển mạng";
var COS_REJECT_TEXT 		= "Thuộc DS gói cước không được chuyển mạng";
var GROUP_REJECT_TEXT 	= "Thuộc DS loại số không được chuyển mạng";

app_vnm.controller('ctr-search-all-infomation', function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal, $location,
		$window,FileUploader,$filter, $http, NgTableParams) {	
	
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
	
	// danh sách bản tin chuyển mạng đến
	searchListTransferNetworkPortIn = function(data) {
		var url = eim_url + "/bs/list_transfer_network_port_in";
		$http.post(url, data).success(function (result){
			$scope.dataTableNPRPortIn = result;
			if($scope.dataTableNPRPortIn.length>0){
				$scope.setResultTypeSearch($scope.model.typeSearch);
				
				$scope.tableParamsNPRPortIn = new NgTableParams({}, {
					dataset : result
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_PORT_IN);
			}
		}).error(function (result){
    		 closeOverLay();
    	 });
	}
	
	// danh sách bản tin chuyển mạng đi
	searchListTransferNetworkPortOut = function(data) {
		var url = eim_url + "/bs/list_transfer_network_port_out";
		$http.post(url, data).success(function (result){
			$scope.dataTableNPRPortOut = result;
			if($scope.dataTableNPRPortOut.length>0){
				$scope.setResultTypeSearch($scope.model.typeSearch);
				
				$scope.tableParamsNPRPortOut = new NgTableParams({}, {
					dataset : result
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_PORT_OUT);
			}
		}).error(function (result){
    		 closeOverLay();
    	 });
	}
	
	// danh sách bản tin hủy chuyển mạng
	searchListNPRCancelRNO = function(data) {
		var url = eim_url + "/bs/list_npr_cancel_rno";
		$http.post(url, data).success(function (result){
			$scope.dataTableRNOCancel = result;
			if($scope.dataTableRNOCancel.length>0){
				$scope.setResultTypeSearch($scope.model.typeSearch);
				
				$scope.tableParamsRNOCancel = new NgTableParams({}, {
					dataset : result
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_RNO_CANCEL);
			}
		}).error(function (result){
    		 closeOverLay();
    	 });
	}
	
	// danh sách bản tin hủy chuyển mạng
	searchListNPRCancelDNO = function(data) {
		var url = eim_url + "/bs/list_npr_cancel_dno";
		$http.post(url, data).success(function (result){
			$scope.dataTableDNOCancel = result;
			if($scope.dataTableDNOCancel.length>0){
				$scope.setResultTypeSearch($scope.model.typeSearch);
				
				$scope.tableParamsDNOCancel = new NgTableParams({}, {
					dataset : result
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_DNO_CANCEL);
			}
		}).error(function (result){
    		 closeOverLay();
    	 });
	}
	
	
	// Chi tiet huy chuyen mang
	searchNPRCancelDetail = function(data, nprId) {
		overLoading("Loading...");
		$scope.model.cancelReasonList = "";
		
		var url = eim_url + "/bs/npr_cancel_detail?cchTransId="+data;
		$http.get(url, data).success(function (result){
			
			closeOverLay();
			$scope.nprDetailAttachMent = {};
			
			$scope.model.cancelReasonList = "";
			if(result != undefined && result != null  && result.code != EMPTY_VALUE_MESSAGE_CODE){
				$scope.nprDetailInfor = result;
				
				$scope.nprDetailAttachMent.fileName = result.attachFileName;
				$scope.nprDetailAttachMent.folder = result.attachFolder;
				
				var reasonDB = result.cancelReason;
				if(reasonDB.length>0){
					var listReasonDB = reasonDB.split("###");
					for(var j = 0; j < listReasonDB.length; j++){
						if(StringUtilNVL(listReasonDB[j]) != EMPTY_VALUE){
							$scope.model.cancelReasonList += ("+ " +listReasonDB[j]+"\r\n")
							
						}
					}
				}
				
			}
			
			searchListNPRActionAudit(nprId, "modalNPRCancelPopup");
			
		}).error(function (result){
    		 closeOverLay();
    		 searchListNPRActionAudit(nprId, "modalNPRCancelPopup");
    	 });
	}
	
	// danh sách trả số về DNO
	searchListNPReversalSubscriberDNO = function(data) {
		var url = eim_url + "/bs/list_reversal_subscriber_dno";
		$http.post(url, data).success(function (result){
			$scope.dataTableNPReversalDNO = result;
			if($scope.dataTableNPReversalDNO.length>0){
				$scope.setResultTypeSearch($scope.model.typeSearch);
				
				$scope.tableParamsNPReversalDNO = new NgTableParams({}, {
					dataset : $scope.dataTableNPReversalDNO
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_REVERSAL_DNO);
			}
		}).error(function (result){
    		 closeOverLay();
    	 });
	}
	
	// danh sách nhận số về VNM
	searchListReversalSubsriberVNM = function(data) {
		var url = eim_url + "/bs/list_reversal_subcriber_vnm";
		$http.post(url, data).success(function (result){

			$scope.dataTableNPReceiveSubscriberVNM = result;
			if($scope.dataTableNPReceiveSubscriberVNM.length>0){
				$scope.setResultTypeSearch($scope.model.typeSearch);
				
				$scope.tableParamsNPReceiveSubscriberVNM = new NgTableParams({}, {
					dataset : $scope.dataTableNPReceiveSubscriberVNM
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_REVERSAL_VNM);
			}
		}).error(function (result){
    		 closeOverLay();
    	 });
	}
	
	// danh sách trả số về nhà mạng gốc
	searchListReturnOrginalNetwork = function(data) {
		var url = eim_url + "/bs/list_return_original_network";
		$http.post(url, data).success(function (result){

			$scope.dataTableReversalOrginalNetwork = result;
			if($scope.dataTableReversalOrginalNetwork.length>0){
				$scope.setResultTypeSearch($scope.model.typeSearch);
				
				$scope.tableParamsReversalOriginalNetwork = new NgTableParams({}, {
					dataset : $scope.dataTableReversalOrginalNetwork
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_RETURN_ORIGINAL_NETWORK);
			}
		}).error(function (result){
    		 closeOverLay();
    	 });
	}
	
	// thu hồi số về VNm
	searchListReturnSubscriberVNM = function(data) {
		var url = eim_url + "/bs/list_return_subscriber_vnm";
		$http.post(url, data).success(function (result){

			$scope.dataTableRecoveryVNM = result;
			if($scope.dataTableRecoveryVNM.length>0){
				$scope.setResultTypeSearch($scope.model.typeSearch);
				
				$scope.tableParamsRecoveryVNM = new NgTableParams({}, {
					dataset : $scope.dataTableRecoveryVNM
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_RETURN_NUMBER_VNM);
			}
		}).error(function (result){
    		 closeOverLay();
    	 });
	}
	
	// Lich su quy trinh chuyen mang
	searchListNPRActionAudit = function(data, idModal) {
		overLoading("Loading...");
		$scope.listActionAuditPortIn = [];
		var url = eim_url + "/bs/list_npr_action_audit?nprId="+data;
		$http.get(url, data).success(function (result){
			
			$scope.listActionAuditPortIn = result;
			
			if ($scope.listActionAuditPortIn.length > 0) {
				$scope.tableParamListActionAuditPortIn = new NgTableParams({}, {
					dataset : $scope.listActionAuditPortIn
				});
			}
			
			closeOverLay();
			var tabActive = "";
			if(idModal == MODAL_LIST_NPR_PORT_IN){
				tabActive = "thong-tin-chuyen-mang-den";
			}else if(idModal == MODAL_LIST_NPR_PORT_OUT){
				tabActive = "thong-tin-chuyen-mang-di";
			}else if(idModal == MODAL_NPR_CANCEL_POPUP){
				tabActive = "huy-chuyen-mang";
			}
			
			$scope.showModalInformationTwoTab(idModal,tabActive );
			
		}).error(function (result){
			if(idModal == MODAL_LIST_NPR_PORT_IN){
				tabActive = "thong-tin-chuyen-mang-den";
			}else if(idModal == MODAL_LIST_NPR_PORT_OUT){
				tabActive = "thong-tin-chuyen-mang-di";
			}else if(idModal == MODAL_NPR_CANCEL_POPUP){
				tabActive = "huy-chuyen-mang";
			}
			
			$scope.showModalInformationTwoTab(idModal);
    		 closeOverLay();
    	 });
	}
	
	//danh sach file dinh kem theo npr id 
	getListAttachmentData = function(data){
		overLoading("Loading...");
		var url = eim_url + "/bs/list_npr_attachment_data?nprId="+data;
		$http.get(url, data).success(function (result){
			$scope.ListAttachmentReversalDNO = result;

			if ($scope.ListAttachmentReversalDNO.length > 0) {
				$scope.tableAttachmentReversalDNO = new NgTableParams({}, {
					dataset : $scope.ListAttachmentReversalDNO
				});
			}
			closeOverLay();
		}).error(function (result){
			closeOverLay();
    	});
	}
	
	
	getListNPRActionAudit = function(data){
		overLoading("Loading...");
		var url = eim_url + "/bs/list_npr_action_audit?nprId="+data;
		$http.get(url, data).success(function (result){
			$scope.nprActionAudit = result;

			if ($scope.nprActionAudit.length > 0) {
				$scope.tableParamListActionAudit = new NgTableParams({}, {
					dataset : $scope.nprActionAudit
				});
			}
			closeOverLay();
		}).error(function (result){
			closeOverLay();
    	});
	}
	
	$scope.getListActionAuditReversalDNO = function(item) {
		var nprID = item.nprId;
		$scope.nprActionAudit = [];
		$scope.rowHighlightNPRActionAudit = item;
		
		var nprInput = {
			"nprId" : nprID
		};
		
		getListNPRActionAudit(nprID);
		getListAttachmentData(nprID);
	}
	
	$scope.getListActionAuditReceiveSubVNM = function(item) {
		var nprID = item.nprId;
		$scope.nprActionAudit = [];
		$scope.rowHighlightNPRActionAuditReceiveSubVNM = item;
		
		var nprInput = {
			"nprId" : nprID
		};
		
		getListNPRActionAudit(nprID);
		getListAttachmentData(nprID);
	}
		
	$scope.getListActionAuditReturnOriginal= function(item) {
		var nprID = item.nprId;
		$scope.nprActionAudit = [];
		$scope.rowHighlightAuditReversalOriginal = item;
		
		var nprInput = {
			"nprId" : nprID
		};
		
		getListNPRActionAudit(nprID);
	}
	
	$scope.getListActionAuditReturnSubscriberVNM= function(item) {
		var nprID = item.nprId;
		$scope.nprActionAudit = [];
		$scope.rowHighlightAuditRecoveryNumber = item;
		
		var nprInput = {
			"nprId" : nprID
		};
		
		getListNPRActionAudit(nprID);
	}
	
	
	dowloadFile = function(data) {
		overLoading("Loading...");
		var url = eim_url + '/bs/downloadFile';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			download(new Blob([ response ]) , headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert(DOWNLOAD_ERROR);
			closeOverLay();
		});
	}
	
	$scope.downloadFileAttachMent = function(attachFile) {
		dowloadFile(attachFile);
	}
	
	getListNetworkType();
	 $scope.model={};  
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	receipient: {
// EmptyValue:true,
                maxlength: 15
            },
            msisdn: {
// EmptyValue:true,
// maxlength: 15
            },
            tuNgayThongBao: {
// EmptyValue:true,
            	isDate: true
            },
            denNgayThongBao: {
// EmptyValue:true,
            	isDate: true
            }
        },
        messages: {
	        	receipient: {
	        		EmptyValue:" Yêu cầu nhập nhà mạng DNO", 
	                maxlength: "Mhà mạng DNO không đúng định dạng."
	            },
	            msisdn: {
	            	EmptyValue: "Yêu cầu nhập Số thuê bao",
	                maxlength: "MSISDN không đúng định dạng"
	            },
	            tuNgayThongBao: {
	            	EmptyValue: "Yêu cầu nhập ngày",
	            	isDate: "Ngày bắt đầu không đúng định dạng."
	            },
	            denNgayThongBao: {
	            	EmptyValue: "Yêu cầu nhập ngày",
	            	isDate: "Ngày kết thúc không đúng định dạng."
	            }
	        }
	    }
	 
		 $.validator.addMethod("EmptyValue", function (value, element) {
		        if (value == undefined || value=="") return false;
		        if($.trim(value)=="") return false;
		        return true;
		 }, "");
	 
		 $.validator.addMethod("isDate", function (value, element) {
			 if (value == undefined || value=="") return true;
		     if($.trim(value)=="") return true;
			 var valueDate = $.trim(value);
			 return moment(valueDate, 'DD/MM/YYYY',true).isValid();
	    }, "");
	 
		 
	    $scope.TypeSearchSource  = [
	    	{ 'Id': '01', 'Title': 'Chuyển mạng đến' },
	        { 'Id': '02', 'Title': 'Chuyển mạng đi' },
	        { 'Id': '03', 'Title': 'Hủy chuyển mạng đến' },
	        { 'Id': '04', 'Title': 'Hủy chuyển mạng đi' },
	        { 'Id': '05', 'Title': 'Trả số về DNO' },
	        { 'Id': '06', 'Title': 'Nhận số về VNM' },
	        { 'Id': '07', 'Title': 'Trả số về NM gốc' },
	        { 'Id': '08', 'Title': 'Thu hồi số về VNM' }
	    ];
		    
	    $scope.GenderTypeSource  = [
	        { 'Id': '0', 'Title': 'Nam' },
	        { 'Id': '1', 'Title': 'Nữ' }
	    ];
	    
	    $scope.RegionSource  = [
	        { 'Id': '1', 'Title': 'Miền bắc' },
	        { 'Id': '2', 'Title': 'Miền trung' },
	        { 'Id': '3', 'Title': 'Miền nam' } 
	    ]; 
	    
	    $scope.StatusSource  = [
	    ];
	    
	    $scope.StatusSourcePortIn  = [
	    	{ 'Id': 'STARTING', 'Title': 'STARTING' },
	    	{ 'Id': 'REJECT', 'Title': 'REJECT' },
	    	{ 'Id': 'COMPLETED', 'Title': 'COMPLETED' },
	        { 'Id': 'CANCELED', 'Title': 'CANCELED' },
	        { 'Id': 'TERMINATION', 'Title': 'TERMINATION' },
	        { 'Id': 'PROCESSING', 'Title': 'PROCESSING' },
	        { 'Id': 'ERROR_NOTIFICATION', 'Title': 'ERROR_NOTIFICATION' },
	        { 'Id': 'FAILED', 'Title': 'FAILED' }
	    ];
	    
	    $scope.StatusSourcePortOut  = [
	    	{ 'Id': 'COMPLETED', 'Title': 'COMPLETED' },
	        { 'Id': 'CANCELED', 'Title': 'CANCELED' },
	        { 'Id': 'TERMINATION', 'Title': 'TERMINATION' },
	        { 'Id': 'PROCESSING', 'Title': 'PROCESSING' },
	        { 'Id': 'STARTING', 'Title': 'STARTING' },
	    	{ 'Id': 'REJECT', 'Title': 'REJECT' },
	        { 'Id': 'ERROR_NOTIFICATION', 'Title': 'ERROR_NOTIFICATION' },
	        { 'Id': 'FAILED', 'Title': 'FAILED' }
	    	
	    ];
	    
	    $scope.StatusSourceCancelIn  = [
	    	{ 'Id': 'CANCEL', 'Title': 'CANCELED' },
	    	{ 'Id': 'ERROR_NOTIFICATION', 'Title': 'ERROR_NOTIFICATION' },
	        { 'Id': 'FAILED', 'Title': 'FAILED' }
	    ];
	    
	    $scope.StatusSourceCancelOut  = [
	    	{ 'Id': 'CANCEL', 'Title': 'CANCELED' },
	        { 'Id': 'FAILED', 'Title': 'FAILED' }
	    ];
	    
	    $scope.StatusSourceReversalDNO  = [
	    	{ 'Id': 'STARTING', 'Title': 'STARTING' },
	    	{ 'Id': 'REJECT', 'Title': 'REJECT' },
	    	{ 'Id': 'COMPLETED', 'Title': 'COMPLETED' },
	        { 'Id': 'CANCELED', 'Title': 'CANCELED' },
	        { 'Id': 'TERMINATION', 'Title': 'TERMINATION' },
	        { 'Id': 'PROCESSING', 'Title': 'PROCESSING' },
	        { 'Id': 'ERROR_NOTIFICATION', 'Title': 'ERROR_NOTIFICATION' },
	        { 'Id': 'FAILED', 'Title': 'FAILED' }
	    ];
	    
	    $scope.StatusSourceReversalVNM  = [
	    	{ 'Id': 'STARTING', 'Title': 'STARTING' },
	    	{ 'Id': 'REJECT', 'Title': 'REJECT' },
	    	{ 'Id': 'COMPLETED', 'Title': 'COMPLETED' },
	        { 'Id': 'CANCELED', 'Title': 'CANCELED' },
	        { 'Id': 'TERMINATION', 'Title': 'TERMINATION' },
	        { 'Id': 'PROCESSING', 'Title': 'PROCESSING' },
	        { 'Id': 'ERROR_NOTIFICATION', 'Title': 'ERROR_NOTIFICATION' },
	        { 'Id': 'FAILED', 'Title': 'FAILED' }
	    ];
	    
	    $scope.StatusSourceReturnOriginal  = [
	    	{ 'Id': 'COMPLETED', 'Title': 'COMPLETED' },
	        { 'Id': 'ERROR_NOTIFICATION', 'Title': 'ERROR_NOTIFICATION' },
	        { 'Id': 'FAILED', 'Title': 'FAILED' }
	    ];
	    
	    $scope.StatusSourceReturnVNM  = [
	    	{ 'Id': 'COMPLETED', 'Title': 'COMPLETED' },
	        { 'Id': 'FAILED', 'Title': 'FAILED' }
	    ];
	    
	    $scope.onTypeSearchChange = function (typeResult) {
	    	var typeResult = StringUtilNVL($scope.model.typeSearch);
	    	$scope.StatusSource = [];
	    	$scope.model.status = "";
	    	
	    	if(StringUtilNVL($scope.model.typeSearch) != StringUtilNVL(oldValueSelectBoxTypeSearch)){
	    		$scope.resetValueFormSearch();
	    	}
	    	
	    	oldValueSelectBoxTypeSearch = $scope.model.typeSearch;
			// 1
	    	if(typeResult == NPR_SUBSCRIBER_PORTIN_VISIBLE){
	    		$scope.StatusSource = $scope.StatusSourcePortIn;
	    	}
	    	// 2
	    	if(typeResult == NPR_SUBSCRIBER_PORTOUT_VISIBLE){
	    		$scope.StatusSource = $scope.StatusSourcePortOut;
	    	}
			
			// 3
			if(typeResult == NPR_CANCEL_RNO_VISIBLE){
				$scope.StatusSource = $scope.StatusSourceCancelIn;
	    	}
			
			if(typeResult == NPR_CANCEL_DNO_VISIBLE){
				$scope.StatusSource = $scope.StatusSourceCancelOut;
	    	}
			
			// 5
			if(typeResult == REVERSAL_NUMBER_DNO_VISIBLE){
				$scope.StatusSource = $scope.StatusSourceReversalDNO;
	    	}
			
			// 6
			if(typeResult == RECEIVE_NUMBER_VNM_VISIBLE){
				$scope.StatusSource = $scope.StatusSourceReversalVNM;
	    	}
	    	
			// 7
			if(typeResult == REVERSAL_ORIGINAL_NETWORK_VISIBLE){
				$scope.StatusSource = $scope.StatusSourceReturnOriginal;
	    	}
			
			// 8
			if(typeResult == RECOVERY_NUMBER_VNM_VISIBLE){
				$scope.StatusSource = $scope.StatusSourceReturnVNM;
	    	}
	    }
	    
    $scope.model.fileAttachments = [];
    $scope.searchALL = function () {
    	$scope.resetAllForm();
    	var typeResult = StringUtilNVL($scope.model.typeSearch);
    	if(typeResult == EMPTY_VALUE){
    		bootbox.alert(TYPE_SEARCH_REQUIRED);
    		return ;
    	}
    	
    	var transactionId = StringUtilNVL($scope.model.transactionID);
    	var msisdn = StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn));
    	var receiveNetwork = StringUtilNVL($scope.model.receiveNetwork);
    	
    	var statusNPR = StringUtilNVL($scope.model.status);
    	
    	var startDateIn = StringUtilNVL($("#startDateID").val());
    	var endDateIn = StringUtilNVL($("#endDateID").val());
    	
    	if(transactionId == EMPTY_VALUE 
    	&& msisdn == EMPTY_VALUE && receiveNetwork == EMPTY_VALUE
    	&& startDateIn == EMPTY_VALUE && endDateIn == EMPTY_VALUE
    	&& statusNPR == EMPTY_VALUE){
    		bootbox.alert(CONDITION_SEARCH_REQUIRED);
    		return ;
    	}else{
    		
    		var today = moment();
    		if(startDateIn != EMPTY_VALUE){
    			var startDateInCompare  = moment(startDateIn, "DD/MM/YYYY");
        		if(startDateInCompare > today){
        			bootbox.alert(MESSAGE_ALERT_START_DATE);
    				return false
        		}
    		}
    		
			var isDateAfter = checkDateIsAfterDate($("#startDateID").val(), $("#endDateID").val());
			if(!isDateAfter){
				bootbox.alert(START_DATE_END_DATE_ERROR);
				return false
			}
		}
    		
    	if ($scope.frm_search_all_information.validate()) {
    		overLoading("Loading...");
	 		var searchInput = {
	 				"transactionID" 	: transactionId,
	 				"msisdn" 			:  msisdn,
	 				"receipient"    	: receiveNetwork,
	 				"startDate" 		: startDateIn,
	 				"endDate" 			: endDateIn,
	 				"statusNPRRequest"	: statusNPR
	 			};
	 		
			if(typeResult == NPR_SUBSCRIBER_PORTIN_VISIBLE){
				searchListTransferNetworkPortIn(searchInput);
			}
			
			if(typeResult == NPR_SUBSCRIBER_PORTOUT_VISIBLE){
				searchListTransferNetworkPortOut(searchInput);
			}
			
			if(typeResult == NPR_CANCEL_RNO_VISIBLE){
				searchListNPRCancelRNO(searchInput);
			}
			
			if(typeResult == NPR_CANCEL_DNO_VISIBLE){
				searchListNPRCancelDNO(searchInput);
			}
			
			if(typeResult == REVERSAL_NUMBER_DNO_VISIBLE){
				searchListNPReversalSubscriberDNO(searchInput);
	    	}
			
			if(typeResult == RECEIVE_NUMBER_VNM_VISIBLE){
				searchListReversalSubsriberVNM(searchInput);
	    	}
			
			if(typeResult == REVERSAL_ORIGINAL_NETWORK_VISIBLE){
				searchListReturnOrginalNetwork(searchInput);
	    	}
			
			if(typeResult == RECOVERY_NUMBER_VNM_VISIBLE){
				searchListReturnSubscriberVNM(searchInput);
	    	}
			
    	}
    }
    
    $scope.getNprHighlightPortIn = function(item) {
		$scope.rowHighlightNPRPortIn = item;
	}
    
    $scope.getNprHighlightPortOut = function(item) {
		$scope.rowHighlightNPRPortOut = item;
	}
    
    $scope.getNprHighlightCancel = function(item) {
		$scope.rowHighlightNPRCancel = item;
	}
    
    $scope.getNprHighlightDNOCancel = function(item) {
		$scope.rowHighlightDNOCancel = item;
	}
    //DatBD2
	$scope.dataSubscriberInforFather={}; 
	$scope.model.showFather=false;
	//end
	$scope.getListSubscriberInfoPortIn = function(item) {

		var nprID = item.nprId;

		var nprInput = {
			"nprId" : nprID
		};
		
		$scope.getNprHighlightPortIn(item);
		
		$scope.dataTableSubscriberPortIn = $scope.getListSubcriberFromNPRById($scope.dataTableNPRPortIn, nprID);
		$scope.dataTableSubscriberPortIn = $scope.setDataOutputSubscriberPortIn(item.nprSubscribers ,$scope.dataTableSubscriberPortIn);
		
		if ($scope.dataTableSubscriberPortIn.length > 0) {
			
			//DatBD2
			if ($scope.model.showFather==true){
				$scope.model.showFather=false;
			}
			
			if(item.provisioningCustomerInfos[0].msisdn==null&&item.provisioningCustomerInfos[0].customerType!='1'){
				$scope.model.showFather=true;
			}
			
			if($scope.dataTableSubscriberPortIn[0].msisdn==null || $scope.dataTableSubscriberPortIn[0].msisdn=='')
				{
				
				$scope.dataSubscriberInforFather=$scope.dataTableSubscriberPortIn[0];
				 $scope.dataTableSubscriberPortIn.splice(0,1);
				}
			//end
			$scope.tableParamListSubscriberPortIn = new NgTableParams({}, {
				dataset : $scope.dataTableSubscriberPortIn
			});
		}
	}
	
	$scope.getListSubscriberInfoPortOut = function(item) {
		var nprID = item.nprId;
		
		var nprInput = {
			"nprId" : nprID
		};
		
		$scope.getNprHighlightPortOut(item);
		
		$scope.dataTableSubscriberPortOut = $scope.getListSubcriberPortOutFromNPRById($scope.dataTableNPRPortOut, nprID);
		$scope.dataTableSubscriberPortOut = $scope.setDataOutputSubscriberPortOut($scope.dataTableSubscriberPortOut);
		
		$scope.getNprHighlightPortIn(item);
		if(item.provisioningCustomerInfos.length >0){
			$scope.customerInforDetailSelected = item.provisioningCustomerInfos[0];
		}
		
		if ($scope.dataTableSubscriberPortOut.length > 0) {
			$scope.tableParamListSubscriberPortOut = new NgTableParams({}, {
				dataset : $scope.dataTableSubscriberPortOut
			});
		}
	}
	
	$scope.getListSubscriberNPRCancel = function(item) {
		var nprID = item.nprId;

		var nprInput = {
			"nprId" : nprID
		};
		
		$scope.getNprHighlightCancel(item);
		
		$scope.dataTableSubscriberNPRCancel = $scope.getListProvisioningSubscriberInfosById($scope.dataTableRNOCancel, nprID);
		
//		if(item.provisioningCustomerInfos.length >0){
//			$scope.customerInforDetailSelected = item.provisioningCustomerInfos[0];
//		}
		
		if ($scope.dataTableSubscriberNPRCancel.length > 0) {
			$scope.tableParamListSubscriberNPRCancel = new NgTableParams({}, {
				dataset : $scope.dataTableSubscriberNPRCancel
			});
		}
	}
	
	$scope.getListSubscriberDNOCancel = function(item) {
		var nprID = item.nprId;

		var nprInput = {
			"nprId" : nprID
		};
		
		$scope.getNprHighlightDNOCancel(item);
		
		$scope.dataTableSubscriberDNOCancel = $scope.getListNPRSubscriberById($scope.dataTableDNOCancel, nprID);
		
//		if(item.provisioningCustomerInfos.length >0){
//			$scope.customerInforDetailSelected = item.provisioningCustomerInfos[0];
//		}
		
		if ($scope.dataTableSubscriberDNOCancel.length > 0) {
			$scope.tableParamListSubscriberDNOCancel = new NgTableParams({}, {
				dataset : $scope.dataTableSubscriberDNOCancel
			});
		}
	}
	
	$scope.getListSubcriberPortOutFromNPRById = function(dataTableNPRInput, nprId){
		var listNPRSubcriber = [];
		for(var i = 0; dataTableNPRInput.length; i++){
			var nprPortInElement = dataTableNPRInput[i];
			if(nprPortInElement.nprId == nprId){
				listNPRSubcriber = nprPortInElement.nprSubscribers;
				break;
			}
		}
		return listNPRSubcriber;
	}
	
	//set text loại từ chối
	$scope.getRejectTypeText = function(rejectType){
		var rejectTypeStr = '';
		if(rejectType == 'MSISDN_REJECT'){
			rejectTypeStr = MSISDN_REJECT_TEXT;
		}
		
		if(rejectType == 'COS_REJECT'){
			rejectTypeStr = COS_REJECT_TEXT;
		}
		
		if(rejectType == 'GROUP_REJECT'){
			rejectTypeStr = GROUP_REJECT_TEXT;
		}
		
		return rejectTypeStr;
	}
	
	//lấy lý do từ chối chuyển mạng theo số điện thoại
	$scope.getRejectReasonByMsisdn = function(listNprSubscriber, msisdn){
		var rejectReason = "";
		for(var i =0; i<listNprSubscriber.length; i++){
			if(msisdn!=null){
				if(listNprSubscriber[i].msisdn == msisdn){
					rejectReason = StringUtilNVL(listNprSubscriber[i].rejectReason);
				}
			}
		}
		
		var listRejectReasonText = [];
		if(StringUtilNVL(rejectReason)!=undefined && StringUtilNVL(rejectReason) != null){
			var listRejectReason = StringUtilNVL(rejectReason).split(",");
			for(var j=0; j<listRejectReason.length; j++){
				if(StringUtilNVL(listRejectReason[j]) != EMPTY_VALUE){
					var objectReasonText = {};
					
					var reasonText = $scope.getTitleReasonById($scope.RejectSource, listRejectReason[j]);
					objectReasonText.reasonText = reasonText;
					objectReasonText.id = j+listRejectReason[j];
					listRejectReasonText.push(objectReasonText);
				}
				
			}
		}
		
		return listRejectReasonText;
	}
	
	//set dữ liệu hiển thị cho tìm kiểm số chuyển mạng đến
	$scope.setDataOutputSubscriberPortIn = function(listNPRSubcriber, listProvisioningSub){
		for(var i = 0; i<listProvisioningSub.length; i++){
			listProvisioningSub[i].listRejectReasonText = $scope.getRejectReasonByMsisdn(listNPRSubcriber, listProvisioningSub[i].msisdn);
		}
		return listProvisioningSub;
	}
	
	//set dữ liệu hiển thị cho tìm kiểm số chuyển mạng đi
	$scope.setDataOutputSubscriberPortOut = function(listNPRSubcriber){
		for(var i = 0; i<listNPRSubcriber.length; i++){
			var reasonId = StringUtilNVL(listNPRSubcriber[i].rejectReason)
			var reasonTitle = $scope.getTitleReasonById($scope.RejectSource, reasonId);
			listNPRSubcriber[i].rejectReasonStr = reasonTitle;
			
			var listRejectReasonText = [];
			if(listNPRSubcriber[i].rejectReason!=undefined && listNPRSubcriber[i].rejectReason != null){
				var listRejectReason = listNPRSubcriber[i].rejectReason.split(",");
				for(var j=0; j<listRejectReason.length; j++){
					if(StringUtilNVL(listRejectReason[j]) != EMPTY_VALUE){
						var objectReasonText = {};
						
						var reasonText = $scope.getTitleReasonById($scope.RejectSource, listRejectReason[j]);
						objectReasonText.reasonText = reasonText;
						objectReasonText.id = j+listRejectReason[j];
						listRejectReasonText.push(objectReasonText);
					}
					
				}
				
				//set loại từ chối
				if(StringUtilNVL(listNPRSubcriber[i].rejectType) != EMPTY_VALUE){
					listNPRSubcriber[i].rejectTypeStr = $scope.getRejectTypeText(listNPRSubcriber[i].rejectType);
				}
			}
			listNPRSubcriber[i].listRejectReasonText = listRejectReasonText;
		}
		return listNPRSubcriber;
	}
	
	$scope.getTitleReasonById = function(listReasonsource, idReason){
		var titleReason = "";
		for(var i = 0; i < listReasonsource.length; i++){
			if(listReasonsource[i].Id == idReason){
				titleReason = listReasonsource[i].Title;
				break;
			}
		}
		
		if(titleReason.length >0){
			return '+' + titleReason;
		}else{
			return '';
		}
	}
	
	$scope.getListSubcriberFromNPRById = function(dataTableNPRInput, nprId){
		var listNPRSubcriber = [];
		for(var i = 0; dataTableNPRInput.length; i++){
			var nprPortInElement = dataTableNPRInput[i];
			if(nprPortInElement.nprId == nprId){
				listNPRSubcriber = nprPortInElement.provisioningSubscriberInfos;
				break;
			}
		}
		return listNPRSubcriber;
	}
	
	// download file huy chuyen mang den
    $scope.downloadFileAttachMent = function(attachFile){
    	dowloadFile(attachFile);
    }
    
    $scope.getListNPRSubscriberById = function(dataTableNPRInput, nprId){
		var listNPRSubscriberOut = [];
		for( var i = 0; dataTableNPRInput.length; i++){
			var nprPortInElement = dataTableNPRInput[i];
			if(nprPortInElement.nprId == nprId){
				listNPRSubscriberOut = nprPortInElement.nprSubscribers;
				if(listNPRSubscriberOut.length > 0){
// listProvisioningSubcriberOut[0].attachmentData =
// nprPortInElement.attachmentData;
				}
				break;
			}
		}
		return listNPRSubscriberOut;
	}
    
	$scope.getListProvisioningSubscriberInfosById = function(dataTableNPRInput, nprId){
		var listProvisioningSubcriberOut = [];
		for( var i = 0; dataTableNPRInput.length; i++){
			var nprPortInElement = dataTableNPRInput[i];
			if(nprPortInElement.nprId == nprId){
				listProvisioningSubcriberOut = nprPortInElement.provisioningSubscriberInfos;
				var listNprSubscribers = nprPortInElement.nprSubscribers;
				if(listProvisioningSubcriberOut.length > 0){
					listProvisioningSubcriberOut[0].attachmentData = nprPortInElement.attachmentData;
					
					if(listNprSubscribers.length>0){
						for(var j = 0; j< listProvisioningSubcriberOut.length; j++){
							var msisdnPro = StringUtilNVL(listProvisioningSubcriberOut[j].msisdn);
							var nprSubElement = $scope.getNPRSubscriberByMSISDN(listNprSubscribers,msisdnPro );
							if(nprSubElement != null){
								listProvisioningSubcriberOut[j].accountTypeDNOStr = nprSubElement.accountTypeStr;
							}
						}
					}
				}
				
				break;
			}
		}
		return listProvisioningSubcriberOut;
	}
	
	$scope.getNPRSubscriberByMSISDN = function(listNPRSubscriber, msisdnIn){
		var nprSubElement = null; 
		for( var i = 0; listNPRSubscriber.length; i++){
			var msisdn = StringUtilNVL(listNPRSubscriber[i].msisdn);
			if(StringUtilNVL(msisdnIn) == msisdn){
				nprSubElement = listNPRSubscriber[i];
				break;
			}
		}
		return nprSubElement;
	}
	
    $scope.viewInformationNPRDetialPortIn = function(item){
    	$scope.nprDetailSelectedModal = item;
    	$scope.dataAttachmentPortIn = $scope.getListAttachMentNPRType(item.attachmentData);
    	
    	$scope.tableAttachmentDataPortInDetail = new NgTableParams({}, {
			dataset : $scope.dataAttachmentPortIn
		});
    	
    	var nprId = item.nprId;
    	searchListNPRActionAudit(nprId, "modalListNPRPortIn");
    }
    
    $scope.viewInformationNPRDetialPortOut = function(item){
    	$scope.nprDetailSelectedPortOutModal = item;
    	
    	$scope.dataAttachmentPortOut = item.attachmentData;
    	
    	$scope.tableAttachmentDataPortOutDetail = new NgTableParams({}, {
			dataset : $scope.dataAttachmentPortOut
		});
    	
    	var nprId = item.nprId;
    	searchListNPRActionAudit(nprId, "modalListNPRPortOut");
    	
    }
    
    $scope.viewInformationNPRCancelDetial = function(item){
    	$scope.nprCancelDetail = item;
    	var cchTransId = item.cchTransId;
    	var nprId = item.nprId;
    	searchNPRCancelDetail(cchTransId,nprId);
    	    	
    }
    
    $scope.viewInformationCustomerDetailPortIn = function(item){
    	
    	var accountTypeDB = StringUtilNVL(item.accountType);
    	var nprElement = $scope.rowHighlightNPRPortIn;
    	$scope.customerInforDetailSelected = {};
    	$scope.parentCustomer = {};
    	var CUS_ID = StringUtilNVL(item.cusId);
    	
    	$scope.subscriberInforselected = item;
    	
    	if(accountTypeDB == ACCOUNT_TYPE_PREPAID){
        	
    		
    		$scope.customerInforDetailSelected = $scope.getListCustomerByCusId(nprElement.provisioningCustomerInfos, CUS_ID);
    		
    		
    		$scope.dataAttachmentCUSPortIn = [];
        	$scope.dataAttachmentCUSPortIn = $scope.getListAttachMentByCustomerId(nprElement.attachmentData, CUS_ID); 
        	
        	$scope.tableAttachmentImageCUSPortIn = new NgTableParams({}, {
    			dataset : $scope.dataAttachmentCUSPortIn
    		});
        	
        	//DatBD2
        	$scope.customerInforDetailSelectedFather=$scope.getListCustomerByCusId(nprElement.provisioningCustomerInfos, StringUtilNVL(nprElement.provisioningCustomerInfos[0].cusId));
        	if (nprElement.provisioningCustomerInfos.length==2){
    			$scope.customerInforDetailSelected=nprElement.provisioningCustomerInfos[1];
    			$scope.customerInforDetailSelectedFather=nprElement.provisioningCustomerInfos[0];
    		}
        	$scope.customerInforDetailSelected.customerTypeStr= $scope.loadCustomerName($scope.customerInforDetailSelected.customerType);
        	$scope.model.subPaymentTypeName= $scope.loadNameSubPaymentType(item.subPaymentType);
        	$scope.model.subUseType=$scope.loadNameSubUseType(item.subUseType);
        	$scope.model.typeCardCompanyName= $scope.loadTypeCardCompanyName($scope.customerInforDetailSelected.typeCardCompany);
        	$scope.model.typeCardName=$scope.loadTypeCardName($scope.customerInforDetailSelected.typeCard);
        	
        	$scope.customerInforDetailSelectedFather.customerTypeStr= $scope.loadCustomerName($scope.customerInforDetailSelectedFather.customerType);
        	$scope.model.subPaymentTypeNameFather=$scope.loadNameSubPaymentType(item.subPaymentType);
        	$scope.model.typeCardNameFather=$scope.loadTypeCardName($scope.customerInforDetailSelectedFather.typeCard);
        	$scope.model.typeCardCompanyNameFather=$scope.loadTypeCardCompanyName($scope.customerInforDetailSelectedFather.typeCardCompany);
        	$scope.model.subUseTypeFather=$scope.loadNameSubUseType($scope.dataSubscriberInforFather.subUseType);
        	
        	if (nprElement.provisioningCustomerInfos.length==2){
    			$scope.customerInforDetailSelected=nprElement.provisioningCustomerInfos[1];
    			$scope.customerInforDetailSelectedFather=nprElement.provisioningCustomerInfos[0];
    		}
        	//end
        	$scope.showPopupNRPDetailPortIn("modalSubcriberDetailInformationPortIn");
    	}
    	
    	if(accountTypeDB == ACCOUNT_TYPE_POSTPAID){
    		$scope.parentCustomer = $scope.getParentModelOfPostpaid(nprElement.provisioningRepresentInfos);
    		$scope.subCustomer = $scope.getSubModelOfPostpaid(nprElement.provisioningRepresentInfos, CUS_ID);
    		
    		$scope.showModalInformationTwoTab("modalSubcriberDetailInformationPortInPostpaid", "parent-customer");
    	}
    }
    
    //DatBD2
    $scope.loadCustomerName=function(id){
    	var name='';
    	if (id=='1'||id=='2')
    		{
    			name="Cá nhân";
    		}
    	else if(id=='3'|| id=='4'){
    		name="Tổ chức";
    	}
    	
    	return name;
    }
    
    $scope.loadNameSubUseType=function (id){
    	var name='';
    	if(id=='CN01'){
    		name='Cho bản thân';
    	}
    	else if(id=='CN02'){
    		name="Cho người được giám hộ";
    	}
    	else if(id=='CN03'){
    		name="Cho thiết bị";
    	}
    	else if(id=='TC01'){
    		name="Cho các cá nhân thuộc tổ chức";
    	}
    	else if(id=='TC02'){
    		name="Cho thiết bị";
    	}
    	
    	return name;
    }
    
    $scope.loadNameSubPaymentType= function (id){
    	var name='';
    	if (id=='TT'){
    		name="Trả trước";
    	}
    	else if(id=='TS'){
    		name="Trả sau";
    	}
    	
    	return name;
    }
    $scope.loadTypeCardCompanyName= function (id){
    	var name='';
    	if(id=='1'){
    		name='Quyết định thành lập';
    	}
    	else if(id=='2'){
    		name='Giấy chứng nhận đăng ký kinh doanh và đăng ký thuế';
    	}
    	else if (id=='3'){
    		name='Giấy phép đầu tư';
    	}
    	else if (id=='4'){
    		name='Giấy chứng nhận đăng ký doanh nghiệp';
    	}
    	return name;
    }
    $scope.loadTypeCardName=function(id){
    	var name='';
    	if(id=='01'){
    		name='Chứng minh thư';
    	}
    	else if (id=='02'){
    		name='Hộ chiếu';
    	}
    	else if( id=='03'){
    		name='Thẻ căn cước';
    	}
    	return name;
    }
    //end
    
    
    $scope.getParentModelOfPostpaid = function(listNprPresentInput){
    	var parentModelOut = {};
    	for(var i =0;i< listNprPresentInput.length; i++){
    		var parentElement = listNprPresentInput[i];
    		
    		if(StringUtilNVL(parentElement.parentRefNumber) == EMPTY_VALUE){
    			parentModelOut = parentElement;
    			break;
    		}
    	}
    	return parentModelOut;
    }
    
    $scope.getSubModelOfPostpaid = function(listNprPresentInput, cusId){
    	var subModelOut = {};
    	for(var i =0;i< listNprPresentInput.length; i++){
    		var parentElement = listNprPresentInput[i];
    		
    		if(StringUtilNVL(parentElement.parentRefNumber) != EMPTY_VALUE){
    			if(StringUtilNVL(parentElement.customerRefNumber) == StringUtilNVL(cusId)){
    				subModelOut = parentElement;
    				break;
    			}
    		}
    	}
    	return subModelOut;
    }
    
  $scope.viewInformationCustomerDetailPortOut = function(item){
    	
    	$scope.subscriberInforselected = item;
    	$scope.showPopupNRPDetailPortIn("modalSubcriberDetailInformationPortOut");
    }
    
	$scope.showPopupNRPDetailPortIn = function(idModal) {
		$('#' + idModal).modal('show');
	}
	   
	$scope.showModalInformation = function(idModal) {
		$('#' + idModal).modal('show');
	}
	
	$scope.showModalInformationTwoTab = function(idModal, idTabActive) {
		activaTab(idTabActive);
		$('#' + idModal).modal('show');
	}
	
    $scope.setResultTypeSearch = function (typeResult) {
    	$scope.resetResultTypeSearch();
		// 1
    	if(typeResult == NPR_SUBSCRIBER_PORTIN_VISIBLE){
    		$scope.nprSubscriberPortInVisible = true;
    	}
    	// 2
    	if(typeResult == NPR_SUBSCRIBER_PORTOUT_VISIBLE){
    		$scope.nprSubscriberPortOutVisible = true;
    	}
		
		// 3
		if(typeResult == NPR_CANCEL_RNO_VISIBLE){
    		$scope.nprCancelRNOVisible = true;
    	}
		
		// 4
		if(typeResult == NPR_CANCEL_DNO_VISIBLE){
    		$scope.nprCancelDNOVisible = true;
    	}
		
		// 5
		if(typeResult == REVERSAL_NUMBER_DNO_VISIBLE){
    		$scope.reversalSubscriberDNOVisible = true;
    	}
		
		// 6
		if(typeResult == RECEIVE_NUMBER_VNM_VISIBLE){
    		$scope.reversalSubscriberVNMVisible = true;
    	}
    	
		// 7
		if(typeResult == REVERSAL_ORIGINAL_NETWORK_VISIBLE){
    		$scope.returnOriginalNetworkVisible = true;
    	}
		
		// 8
		if(typeResult == RECOVERY_NUMBER_VNM_VISIBLE){
    		$scope.returnSubscriberVNMVisible = true;
    	}
    }
    
    
    $scope.resetAllForm = function(){
    	$scope.nprSubscriberPortInVisible = false;
    	$scope.nprSubscriberPortOutVisible = false;
    	$scope.nprCancelRNOVisible = false;
    	$scope.nprCancelDNOVisible = false;
    	
    	$scope.reversalSubscriberDNOVisible = false;
    	
    	$scope.reversalSubscriberVNMVisible = false;
    	$scope.returnOriginalNetworkVisible = false;
    	$scope.returnSubscriberVNMVisible = false;
    	
    	// reset table
    	$scope.dataTableNPRPortIn = [];
    	$scope.dataTableNPRPortOut = [];
    	$scope.dataTableRNOCancel = [];
    	
    	$scope.dataTableDNOCancel = [];
    	$scope.dataTableNPReversalDNO = [];
    	$scope.dataTableNPReceiveSubscriberVNM = [];
    	
    	$scope.dataTableReversalOrginalNetwork = [];
    	$scope.dataTableRecoveryVNM = [];
    	
    	$scope.dataTableSubscriberPortOut = [];
    	$scope.dataTableSubscriberPortIn = [];
    	
    	$scope.dataTableSubscriberNPRCancel = [];
    	$scope.dataTableSubscriberDNOCancel = [];
    	
    	$scope.nprActionAudit = [];
    	$scope.ListAttachmentReversalDNO = [];
    	
    	$scope.rowHighlightNPRPortIn = ROW_NONE_INDEX;
    	$scope.rowHighlightNPRPortOut = ROW_NONE_INDEX;
    	$scope.rowHighlightNPRCancel = ROW_NONE_INDEX;
    	
    	$scope.rowHighlightDNOCancel = ROW_NONE_INDEX;
    	
    	$scope.rowHighlightNPRActionAudit = ROW_NONE_INDEX;
    	$scope.rowHighlightNPRActionAuditReceiveSubVNM = ROW_NONE_INDEX;
    	$scope.rowHighlightAuditReversalOriginal = ROW_NONE_INDEX;
    	$scope.rowHighlightAuditRecoveryNumber = ROW_NONE_INDEX;
    	
    }
    
    $scope.resetResultTypeSearch = function(){
    	$scope.nprSubscriberPortInVisible = false;
    	$scope.nprSubscriberPortOutVisible = false;
    	
    	$scope.nprCancelRNOVisible = false;
    	$scope.nprCancelDNOVisible = false;
    	
    	$scope.reversalSubscriberDNOVisible = false;
    	$scope.reversalSubscriberVNMVisible = false;

    	$scope.returnOriginalNetworkVisible = false;
    	$scope.returnSubscriberVNMVisible = false;
    }
    
    
    $scope.resetValueFormSearch = function(){
    	$scope.model.msisdn = "";
    	$scope.model.transactionID = "";
    	
    	$scope.model.startDate = "";
    	$scope.model.endDate = "";
    	
    	$scope.model.receiveNetwork = "";
    	$scope.model.status = "";
    }
    
    $scope.getListAttachMentNPRType = function(listAttachMent){
    	var listAttachmentNPROut = [];
    	for(var i =0; i < listAttachMent.length; i++){
    		var attachMentType = listAttachMent[i].attachmentType;
    		var cusId = StringUtilNVL(listAttachMent[i].cusId);
    		if(cusId == EMPTY_VALUE && attachMentType.startsWith(ATTACHMENT_TYPE_NPT)){
    			listAttachmentNPROut.push(listAttachMent[i]);
    		}
    	}
    	
    	return listAttachmentNPROut;
    }
    
    $scope.getListAttachMentByCustomerId = function(listAttachMent, cusIdInput){
       	var listAttachmentCusOut = [];
    	for(var i =0; i < listAttachMent.length; i++){
    		var attachMentType = StringUtilNVL(listAttachMent[i].attachmentType);
    		if(attachMentType.startsWith(ATTACHMENT_TYPE_CUS)){
    			if(cusIdInput == EMPTY_VALUE || StringUtilNVL(listAttachMent[i].cusId) == cusIdInput && StringUtilNVL(listAttachMent[i].attachmentType)!="CUS_GPKD2" && StringUtilNVL(listAttachMent[i].attachmentType)!="CUS_HD1" &&StringUtilNVL(listAttachMent[i].attachmentType)!="CUS_HD2"&& StringUtilNVL(listAttachMent[i].attachmentType)!="CUS_DSCN" && StringUtilNVL(listAttachMent[i].attachmentType!="CUS_GPKD")){
    				listAttachmentCusOut.push(listAttachMent[i]);
    			}
    			//DatBD2 update
    			if(StringUtilNVL(listAttachMent[i].cusId)==listAttachMent[1].cusId) //ẢNh của khách hàng cha
    			{
    				listAttachmentCusOut.push(listAttachMent[i]);
    			} 
    			//end
    		}
    	}
    	return listAttachmentCusOut;
    }
    
    $scope.getListCustomerByCusId = function(
			listCustomerInput, cusIdInput) {
		var listCustomerOutput = {};
		for (var i = 0; i < listCustomerInput.length; i++) {
			var customerId = listCustomerInput[i].provisioningCustomerInfoId;
			if (cusIdInput == EMPTY_VALUE
					|| customerId == cusIdInput) {
				listCustomerOutput = (listCustomerInput[i]);
				break;
			}
		}
		return listCustomerOutput;
	}
    
       
    $scope.RejectSource = [
			{
				'Id' : 'DNO02',
				'Title':'02.Số Chứng minh thư nhân dân, Ngày cấp, Nơi cấp chủ thuê bao/ cá nhân đại diện tổ chức dùng để đăng ký thông tin thuê bao tại DNO không đúng với số CMTND chủ thuê bao dùng để đăng ký chuyển mạng.'
			},
			{
				'Id' : 'DNO03',
				'Title':'03.Số Hộ chiếu, Ngày cấp, Nơi cấp chủ thuê bao/ cá nhân đại diện tổ chức dùng để đăng ký thông tin thuê bao tại DNO không đúng với  số Hộ chiếu chủ thuê bao dùng để đăng ký chuyển mạng.'
			},
			{
				'Id' : 'DNO04',
				'Title':'04.Số Thẻ căn cước, Ngày cấp, Nơi cấp chủ thuê bao/ cá nhân đại diện tổ chức dùng để đăng ký thông tin thuê bao tại DNO không đúng với  số Thẻ căn cước chủ thuê bao dùng để đăng ký chuyển mạng.'
			},
			{
				'Id' : 'DNO05',
				'Title':'05.Quyết định thành lập/Giấy chứng nhận đăng ký kinh doanh/giấy phép thành lập/giấy phép hoạt động của tổ chức đã đăng ký thông tin thuê bao tại DNO không khớp với thông tin thuê bao dùng để đăng ký chuyển mạng.'
			},
			{
				'Id' : 'DNO06',
				'Title':'06.Số thuê bao không ở trong trạng thái hoạt động 2 chiều của DNO.'
			},
			{
				'Id' : 'DNO07',
				'Title':'07.Vi phạm hợp đồng cung cấp và sử dụng dịch vụ viễn thông hoặc điều kiện giao dịch chung/ các cam kết đã ký với DNO.'
			},
			{
				'Id' : 'DNO08',
				'Title':'08.Thuê bao còn nợ cước.'
			},
			{
				'Id' : 'DNO09',
				'Title':'09.Cước nóng của thuê bao trả sau tại DNO lớn hơn X đồng.'
			},
			{
				'Id' : 'DNO10',
				'Title':'10.Thuê bao đang sử dụng dịch vụ chuyển vùng quốc tế; + Hoặc thuê bao ngừng sử dụng dịch vụ chuyển vùng quốc tế đến thời điểm đăng ký chuyển mạng nhỏ hơn 60 ngày'
			},
			{
				'Id' : 'DNO11',
				'Title':'11.Thuê bao đang treo dịch vụ vì các lý do đặc biệt về pháp lý như: số thuê bao đang bị tranh chấp, bị truy tố, rao vặt trái phép, SMS spam.'
			}, {
				'Id' : 'DNO12',
				'Title':'12.Đang trong quá trình tranh chấp hoặc thực hiện chuyển quyền sở hữu số thuê bao di động.'
			}, {
				'Id' : 'DNO13',
				'Title':'13.Phát sinh khiếu nại về việc sử dụng dịch vụ đối với DNO.'
			}, {
				'Id' : 'DNO14',
				'Title':'14.Các số thuê bao trong 1 YCCM không cùng thuộc 1 hợp đồng'
			}, {
				'Id' : 'DNO15',
				'Title':'15.Danh sách các số MSISDNs chuyển mạng chỉ là 1 phần của hợp đồng Khách hàng đã ký với DNO.'
			},
			{
				'Id' : 'DNO16',
				'Title':'16.Thuê bao hòa mạng lần đầu tại nhà mạng gốc chưa hoạt động đủ 06 tháng'
			},
		
		];
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

function activaTab(tabId){
    $('.nav-tabs a[href="#' + tabId + '"]').tab('show');
};
