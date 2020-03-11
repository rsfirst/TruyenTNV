
var EMTPY_VALUE_ERROR_CODE  = 505;

var EMPTY_VALUE_MESSAGE_CODE = 90000;

var CANCEL_001 = 'CANCEL_001';
var CANCEL_002 = 'CANCEL_002';
var CANCEL_003 = 'CANCEL_003';
var CANCEL_004 = 'CANCEL_004';
var CANCEL_005 = 'CANCEL_005';
var CANCEL_006 = 'CANCEL_006';
var CANCEL_007 = 'CANCEL_007';
var CANCEL_008 = 'CANCEL_008';
var CANCEL_009 = 'CANCEL_009';
var CANCEL_010 = 'CANCEL_010';
var CANCEL_011 = 'CANCEL_011';
var CANCEL_012 = 'CANCEL_012';
var CANCEL_013 = 'CANCEL_013';

var MIN_LENGTH_MSISDN  = 9;
var MAX_LENGTH_MSISDN  = 10;

var MESS_DATA_NOT_FOUND;
var MESS_SEARCH_CANCEL_ERROR ;

var EMPTY_VALUE = "";

var TRANS_MSISDN_REQUERIED;
var DOWNLOAD_ERROR;

var CANCEL_SEND_SUCCESS;
var CANCEL_SEND_ERROR;

var UPLOAD_FILE_ERROR;
var MAX_MIN_MSISDN_ERROR;
var MSI_NUMBER_ERROR;

var DATA_CANCEL_ERROR;
var CANCEL_REASON_REQUIRED;

var CONFIRM_MESSAGE_CANCEL;
var MESSAGE_HEADER_CONFIRM_CANCEL = "Hủy chuyển mạng ";
var ALERT_TITLE;
var SEPARATE  = "###";
app_vnm.controller('ctr-cancel-npr', function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal, $location,
		$window,FileUploader,$filter, $localStorage, $http, NgTableParams ) {	
	
	ALERT_TITLE = $translate.instant('vnm.mnp_message.common.alert.title');
	
	MESS_DATA_NOT_FOUND  = $translate.instant('vnm.mnp_message.registration.cancel.search.data.not.found');
	
	MESS_SEARCH_CANCEL_ERROR  = $translate.instant('vnm.mnp_message.registration.cancel.search.data.error');

	TRANS_MSISDN_REQUERIED = $translate.instant('vnm.mnp_message.registration.cancel.search.msisdn.trans.required');
	DOWNLOAD_ERROR = $translate.instant('vnm.mnp_message.registration.cancel.download.file.un.success');

	CANCEL_SEND_SUCCESS = $translate.instant('vnm.mnp_message.registration.cancel.send.cancel.request.success');
	
	CANCEL_SEND_ERROR = $translate.instant('vnm.mnp_message.registration.cancel.send.cancel.request.error');

	UPLOAD_FILE_ERROR  = $translate.instant('vnm.mnp_message.common.upload.file.error');
	MAX_MIN_MSISDN_ERROR = $translate.instant('vnm.mnp_message.registration.cancel.search.condition.msisdn.error');
	
	MSI_NUMBER_ERROR = $translate.instant('vnm.mnp_message.registration.cancel.search.condition.msisdn.number.required');

	DATA_CANCEL_ERROR = $translate.instant('vnm.mnp_message.registration.cancel.form.validate.create.cancel.error');
	CANCEL_REASON_REQUIRED = $translate.instant('vnm.mnp_message.registration.cancel.form.cancel.reason.required');

	CONFIRM_MESSAGE_CANCEL = $translate.instant('vnm.mnp_message.registration.cancel.confirm.message.cancel');
	MESSAGE_HEADER_CONFIRM_CANCEL = $translate.instant('vnm.mnp_message.registration.cancel.confirm.header.tilte');
	
	searchNPRCancel = function(data) {
		overLoading("Loading...");
		$scope.resetFormCancel();
		var url = eim_url + "/bs/npr/npr_cancel";
		$http.post(url, data).success(function (result){
			if(result.code == EMPTY_VALUE_MESSAGE_CODE){
				bootbox.alert(MESS_DATA_NOT_FOUND);
			}else{
				$scope.NPRCancel = result;
				$scope.setDataValueForm($scope.NPRCancel);
		    	
				
				$scope.listCustomerCancel = $scope.NPRCancel.provisioningCustomerInfos;
		    	$scope.listSubscriberCancel = $scope.NPRCancel.provisioningSubscriberInfos;
		    	
		    	if($scope.listSubscriberCancel.length >0){
		    		$scope.listSubscriberCancel[0].attachmentData = $scope.NPRCancel.attachmentData;
		    	}
		    	
		    	$scope.tableListSubscriber = new NgTableParams({}, {
					dataset : $scope.listSubscriberCancel
				});
			}
			 closeOverLay();
		}).error(function (data){
			bootbox.alert(MESS_SEARCH_CANCEL_ERROR+ ' '+data.message);
			closeOverLay();
    	 });
	}
	
	dowloadFile = function(data) {
		overLoading("Downloading...");
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
	
	createCancelNPR = function() {
		var numberContact = $("#idNumberContact").val();
		
		var dataCancelNPR = {
				"cchTransactionId" : StringUtilNVL($scope.model.transactionIDInfo),
				"msisdn" : StringUtilNVL($scope.model.presentSubscriberNumber),
				"contactFullname" : StringUtilNVL($scope.model.fullNameContact),
				"contactNumber" : StringUtilNVL(numberContact),
				"contactEmail" : StringUtilNVL($scope.model.emailContact),
				"contactAddress" : StringUtilNVL($scope.model.addressContact),
				"cancelReason":StringUtilNVL($scope.cancelReason),
				"comments" : StringUtilNVL($scope.model.commentsContact),
				"attachmentData" :$scope.listAttachFileNPR
			};
		
		overLoading("Loading cancel npr...");
		var url = eim_url + "/bs/npr/create_npr_cancel";
		$http.post(url, dataCancelNPR).success(function (result){
			 closeOverLay();
			 bootbox.alert(CANCEL_SEND_SUCCESS);
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
			 
			 bootbox.alert(CANCEL_SEND_ERROR +response.message);
			closeOverLay();
    	 });
	}
	
	$scope.resetFormCancel = function(){
		
		$scope.model.fullNameCustomer = "";
		$scope.model.presentSubscriberNumber = "";
		$scope.model.documentType = "";
		$scope.model.documentIssueNumber = "";
		$scope.model.documentIssueDate = "";
		$scope.model.documentIssuePlace = "";
		$scope.model.transactionIDInfo = "";
		$scope.model.createDate = "";
		$scope.model.comments = "";
		
		$scope.model.fullNameContact = "";
		$scope.model.numberContact  = "";
		$scope.model.emailContact  = "";
		$scope.model.addressContact  = "";
		
		$scope.listSubscriberCancel = [];
	}
	
	$scope.listCustomerCancel = [];
	 $scope.model={};  
	 
	 $scope.validationOptionsCanCel = {
			  debounce: 1500,               
			    preValidateFormElements: true,
       rules: {
           FullNameContact: {
           	EmptyValue:true
           },
           NumberContact: {
           	EmptyValue:true,
           	requiredNumber: true,
        	maxlength: MAX_LENGTH_MSISDN,
        	minlength: MIN_LENGTH_MSISDN
           },
           EmailContact: {
        	   email:true
           },
           AddressContact: {
           }
       },
       messages: {
	            FullNameContact: {
	            	EmptyValue: $translate.instant('vnm.mnp_message.registration.cancel.validate.contact.fullname.required')
	            },
	            NumberContact: {
	            	EmptyValue: $translate.instant('vnm.mnp_message.registration.cancel.validate.contact.number.required'),
	            	requiredNumber: $translate.instant('vnm.mnp_message.registration.cancel.validate.contact.number.isnumber'),
		        	maxlength: $translate.instant('vnm.mnp_message.registration.cancel.validate.contact.number.maxlength'),
		        	minlength: $translate.instant('vnm.mnp_message.registration.cancel.validate.contact.number.minlength')
	            },
	            EmailContact: {
	            	email: $translate.instant('vnm.mnp_message.registration.cancel.validate.contact.email.type.required')
	            },
	            AddressContact: {
	            	EmptyValue:  $translate.instant('vnm.mnp_message.registration.cancel.validate.contact.address.required')
	            }
	        }
	    }
	 
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
	 
	// UPLOADER CREATE NPR
 	$scope.fileNameNPR = "";
 	$scope.listAttachFileNPR = [];
 	
    var uploader = $scope.uploader = new FileUploader({
        url: eim_url+'/bs/npr/upload'
    });

    uploader.queueLimit = 1;
    
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
        	return true;
        	
        }
    });
    
    uploader.onAfterAddingFile = function(item){
    	$scope.fileNameNPR = ConvertFileNameNoneUTF8(item._file.name);
	}
    
    uploader.onAfterAddingAll = function(items){
	} 
    
    uploader.onErrorItem = function (fileItem, response, status, headers) {
    	closeOverLay();
    	bootbox.alert(UPLOAD_FILE_ERROR);
    }
    
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.listAttachFileNPR.push(response);
		closeOverLay();
	};
    
	
    //set data before upload for each item
    uploader.onBeforeUploadItem  = function(item){
    	overLoading();
    	var identityDocType = StringUtilNVL("DOC_NPR_006");
    	item.attachMentIdClient = createTimeStamp();
    	var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);
    	//set token
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
    
    $scope.openFileBrowser = function(){
    	$scope.fileNameNPR = "";
    	$scope.listAttachFileNPR = [];
    	uploader.clearQueue()
    }
    
    $scope.searchNPRCancel = function () {
    	var msisdnSearch = $("#isMsisdnSearch").val();
    	
    	if(!StringUtilNVLIsNotEmpty($scope.model.transactionID) 
    		&& !StringUtilNVLIsNotEmpty(msisdnSearch)){
    		bootbox.alert(TRANS_MSISDN_REQUERIED);
    	}else{
    		var msisdnVal = StringUtilNVL(msisdnSearch);
    		if(msisdnVal != EMPTY_VALUE && !isNumbericInteger(msisdnVal)){
    			bootbox.alert(MSI_NUMBER_ERROR);
    			return false
    		}
    		
    		if((msisdnVal != EMPTY_VALUE )&& (msisdnVal.length > MAX_LENGTH_MSISDN || msisdnVal.length < MIN_LENGTH_MSISDN)){
    			bootbox.alert(MAX_MIN_MSISDN_ERROR);
    			return false
    		}
    		
    		overLoading("Loading...");
    		var searchInput = {
    				"transactionId" : $scope.model.transactionID,
    				"msisdn" : msisdnSearch
    		};
    		searchNPRCancel(searchInput);
    	}
    }
    
    $scope.onclickConfirmCancel = function(){
    	bootboxConfirm(MESSAGE_HEADER_CONFIRM_CANCEL, CONFIRM_MESSAGE_CANCEL, $scope.confirmOK, $scope.confirmKO);
    }
    
    $scope.cancelNPRRequest = function () {
    	var isFormValidate = validateFormMnpCancel($scope.NPRCancel);
		if(!isFormValidate){
			bootbox.alert(DATA_CANCEL_ERROR);
			return;
		}
		
    	$scope.cancelReason = "";
    	if ($scope.frm_cancel_npr.validate()) {
    		$scope.cancelReason  = $scope.getCancelReason();
    		if($scope.cancelReason  == ""){
    			bootbox.alert(CANCEL_REASON_REQUIRED);
    			return;
    		}
    		
    		var checkFileAllisUploaded = checkAllFileOfQueueUploaded(uploader);
    		if(!checkFileAllisUploaded){
    			uploadAllItemByList(uploader);
    		}else{
	   			createCancelNPR();
    		}
    		
    		uploader.onCompleteAll = function () {
	   			 closeOverLay();
	   			var checkFileAllisUploaded = checkAllFileOfQueueUploaded(uploader);
	   			if(checkFileAllisUploaded){
	   				createCancelNPR();
	   			}
	   		 }
    		
    	}
    }
    
  	$scope.confirmOK = function(){
  		$scope.cancelNPRRequest();
  	}
  	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.downloadFileAttachMent = function(attachFile){
    	dowloadFile(attachFile);
    }
    
    $scope.getCancelReason = function(){
	    var cancelReason = "";

	    if($scope.checkboxModelReasonValue1 == true){
	    	cancelReason = cancelReason + CANCEL_001 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue2){
	    	cancelReason = cancelReason + CANCEL_002 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue3){
	    	cancelReason = cancelReason + CANCEL_003 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue4){
	    	cancelReason = cancelReason + CANCEL_004 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue5){
	    	cancelReason = cancelReason + CANCEL_005 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue6){
	    	cancelReason = cancelReason + CANCEL_006 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue7){
	    	cancelReason = cancelReason + CANCEL_007 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue8){
	    	cancelReason = cancelReason + CANCEL_008 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue9){
	    	cancelReason = cancelReason + CANCEL_009 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue10){
	    	cancelReason = cancelReason + CANCEL_010 +SEPARATE;
	    }
	    
	    if(($scope.checkboxModelReasonValue11)){
	    	cancelReason = cancelReason + CANCEL_011 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue12){
	    	cancelReason = cancelReason + CANCEL_012 +SEPARATE;
	    }
	    
	    if($scope.checkboxModelReasonValue13){
	    	cancelReason = cancelReason + CANCEL_013 +SEPARATE;
	    }
	    var cancelEndWith = cancelReason.lastIndexOf(SEPARATE);
	    
	    cancelReason = $.trim(cancelReason.substring(0, cancelEndWith));
	    
	    return cancelReason;
    }
    
    $scope.getPrimaryNumber =  function(listSubscriber){
    	var primaryNumber = "";
    	for(var i=0; i< listSubscriber.length;i++){
    		if(listSubscriber[i].primary =='Y'){
    			primaryNumber = listSubscriber[i].msisdn;
    			break;
    		}
    	}
    	
    	return primaryNumber; 
    }
    $scope.setDataValueForm = function(nprData){
    	if(nprData!= undefined && nprData!=null){
    		$scope.model.fullNameCustomer = StringUtilNVL(nprData.subdataSubscriberName);
    		$scope.model.presentSubscriberNumber = $scope.getPrimaryNumber(nprData.nprSubscribers);
    		$scope.model.documentType = StringUtilNVL(nprData.subdataDocTypeStr);
    		$scope.model.documentIssueNumber = StringUtilNVL(nprData.subdataDocNumber);
    		$scope.model.documentIssueDate = StringUtilNVL(nprData.subdataDocIssueDateStr);
    		$scope.model.documentIssuePlace = StringUtilNVL(nprData.subdataDocIssuePlace);
    		$scope.model.transactionIDInfo = StringUtilNVL(nprData.cchTransId);
    		$scope.model.createDate = StringUtilNVL(nprData.createdDateStr);
    		$scope.model.comments = StringUtilNVL(nprData.comments);
    	}
    		
    }
    
    
	$scope.showAlert = function(idModal, message){
		$('#'+idModal).modal('show');
		$("#messageInfo").text(message);
	}
});

function validateFormMnpCancel(nprData){
	var result = true;
	if(nprData == undefined  || nprData == null){
		return false;
	}
	
	var transactionIDInfo = StringUtilNVL(nprData.cchTransId);
	if(!StringUtilNVLIsNotEmpty(transactionIDInfo)){
		result = false; 
	}
	
	return result;
}

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

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

//check field is not empty
//return true if field not empty
//return false if field empty
function StringUtilNVLIsNotEmpty(val){
	if(val==undefined || val == null || $.trim(val)=="") return false;
	return true;
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

//check all item in queue success : 
//+ false when all file not upload success
//+ true when all file upload success
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

//upload all item by list
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
