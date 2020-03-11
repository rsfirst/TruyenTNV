
var messageUploading  = "Loading...";

var MAX_LENGTH_RECORD_TABLE_MSISDN  = 100;

var MIN_LENGTH_MSISDN  = 9;
var MAX_LENGTH_MSISDN  = 10;

var EMTPY_VALUE_ERROR_CODE  = 505;
var SERVICE_SOAP_ERROR_CODE = 506;

var CODE_SUBSCRIBER_PORIN_KO = 90022;
var CODE_SUBSCRIBER_NOT_IN_DONOR = 90023;

var NUMBER_REVERSED_OK = 90024

var NUMBER_REVERSED_ERROR = 90004;

var SEND_NOTIFICATOIN_OK;
var SEND_NOTIFICATOIN_KO;

var SUBSCRIBER_NUMBER_NOT_IN_NETWORK;

var SUBSCRIBER_REVERSING;
var SUBSCRIBER_REVERSED;

var MESS_SUBSCRIBER_PORIN_KO;

var MIN_MAX_MSISDN_ERROR;
var MSISDN_NUMBER_REQUIRED;

var MSISDN_EMTY_REQUIRED;
var MSISDN_EXIST_ERROR;

var MAX_MSISDN_LIST;
var NETWORK_DONOR_REQUIRED;

var MESSAGE_HEADER_CONFIRM_NOTIFICATION; 
var CONFIRM_MESSAGE_NOTIFICATION; 
	
var EMPTY_VAL = "";
var DOCUMENT_TYPE = "DOC_RETURN_FILE";
var BREAK_LINE = '\n';

var VALIDATE_LIST_SUBSCRIBER_OK = 90029; 
var MESS_LIST_MSISDN_VALIDATE_KO ;

var UPLOAD_FILE_TEMPLATE_REQUIRED;

app_vnm.controller('ctrl-sub-return-dno', function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal,
		$location, $window,$filter, $localStorage, $http, FileUploader , NgTableParams) {	
	
	SEND_NOTIFICATOIN_OK = $translate.instant('vnm.mnp_message.return_dno.send.notification.ok');
	SEND_NOTIFICATOIN_KO = $translate.instant('vnm.mnp_message.return_dno.send.notification.error');
	SUBSCRIBER_NUMBER_NOT_IN_NETWORK = $translate.instant('vnm.mnp_message.return_dno.msisdn.not.in.network');
	
	SUBSCRIBER_REVERSING = $translate.instant('vnm.mnp_message.return_dno.subscriber.returning');
	SUBSCRIBER_REVERSED = $translate.instant('vnm.mnp_message.return_dno.subscriber.returned');
	MESS_SUBSCRIBER_PORIN_KO = $translate.instant('vnm.mnp_message.return_dno.subscriber.not.in.vnm');
	
	MIN_MAX_MSISDN_ERROR = $translate.instant('vnm.mnp_message.common.max.min.subscriber.number');
	MSISDN_NUMBER_REQUIRED = $translate.instant('vnm.mnp_message.return_dno.msisdn.numberic.required');
	MSISDN_EMTY_REQUIRED = $translate.instant('vnm.mnp_message.return_dno.msisdn.empty.required');
	
	MSISDN_EXIST_ERROR = $translate.instant('vnm.mnp_message.return_dno.msisdn.exist.table');
	MAX_MSISDN_LIST = $translate.instant('vnm.mnp_message.return_dno.msisdn.max.length.table');
	
	NETWORK_DONOR_REQUIRED = $translate.instant('vnm.mnp_message.return_dno.network.operator.required');
	MESSAGE_HEADER_CONFIRM_NOTIFICATION = $translate.instant('vnm.mnp_message.return_dno.mess.header.confirm');
	CONFIRM_MESSAGE_NOTIFICATION = $translate.instant('vnm.mnp_message.return_dno.mess.confirm.send.notification');
	
	MESS_LIST_MSISDN_VALIDATE_KO  = $translate.instant('vnm.mnp_message.return_dno.list.subscriber.validate.ko');
	
	UPLOAD_FILE_TEMPLATE_REQUIRED = $translate.instant('vnm.mnp_message.common.upload.file.template.excel.required');
	
	$scope.listMSISDI = [];
	
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
	
	checkSubscriberInDB = function(data) {
		var url = eim_url + "/bs/sub_return/check_subscriber";
		$http.post(url, data).success(function (result){
			
    		var id = createTimeStamp();
    		var msisdnObj = { 
        			'id':id, 
        			'msisdn': data.msisdn
        	};
    		
	    	$scope.listMSISDI.push(msisdnObj);
	    	$scope.tableListMSDI = new NgTableParams({}, {
				dataset : $scope.listMSISDI
			});
	    	
	    	$("#idMsisdn").val("");
			closeOverLay();
		}).error(function (result){
			closeOverLay();
			var msisdn = data.msisdn;
			
			if(result.code == CODE_SUBSCRIBER_NOT_IN_DONOR){
				var messageNotFound = SUBSCRIBER_NUMBER_NOT_IN_NETWORK.replace(/###/, msisdn);
				var donorNetWorkName = getDNONetworkTitleById($scope.DonorSource , data.dnoNetwork);
				
				var messageAll = messageNotFound.replace(/AAA/, donorNetWorkName);
				bootbox.alert(messageAll);
				return ; 
			}
			
			if(result.code == CODE_SUBSCRIBER_PORIN_KO){
				
				var messMsisdnNotFound = MESS_SUBSCRIBER_PORIN_KO.replace(/###/, msisdn);
				bootbox.alert(messMsisdnNotFound);
				return ; 
			}
			
			if(result.code == NUMBER_REVERSED_ERROR){
				bootbox.alert(SUBSCRIBER_REVERSING);
				return ; 
			}
			
			if(result.code == NUMBER_REVERSED_OK){
				var messSubscriberReversed = SUBSCRIBER_REVERSED.replace(/###/, msisdn);
				
				bootbox.alert(messSubscriberReversed);
				return ; 
			}
					
			if("403" == result.status){
				bootbox.alert(result.status + " : " + result.message);
			} else {
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			}
			
    	});
	}
	
	// donor change, reset table
	$scope.onDonorChange = function(){
		
		$scope.listMSISDI =  [];
    	$scope.tableListMSDI = new NgTableParams({}, {
			dataset : $scope.listMSISDI
		});
    	
	}
	
	sendSubReturnNotificationService = function(data) {
		var url = eim_url + "/bs/sub_return/sub_return_dno_notification";
		$http.post(url, data).success(function (result){
			bootbox.alert(SEND_NOTIFICATOIN_OK + ' '+ result.message);
			closeOverLay();
		}).error(function (result){
			closeOverLay();
			if("403" == result.status){
				bootbox.alert(result.status + " : " + result.message);
			} else {
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			}
    	});
	}
	
    // BEGIN UPLOADER GET LIST SUBSCRIBER TEMPLATE
    var uploaderListSubscriber = $scope.uploaderListSubscriber = new FileUploader({
        url: eim_url+"/bs/sub_return/list_subscriber_template"
    });
    
    // Another user-defined filter set max file size
    uploaderListSubscriber.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		if(fileExtValue.toUpperCase() !="xlsx".toUpperCase() && fileExtValue.toUpperCase()!="xls".toUpperCase() ){
    			bootbox.alert(UPLOAD_FILE_TEMPLATE_REQUIRED);
    			return false;
    		}
    		return true;
        }
    });
	
    uploaderListSubscriber.queueLimit = 1;
    $scope.dataSubscriberTemplate = [];
    
    // set data before upload for each item
    uploaderListSubscriber.onBeforeUploadItem  = function(item){
    	overLoading();
        item.headers = {
	       Authorization: 'Bearer '+ $localStorage.clientContext.token
	     };
        
        var DONOR_NETWORK = StringUtilNVL($scope.model.donor);
        
        var form_data = new FormData();
        form_data.append("donorInput", DONOR_NETWORK);
        
    	item.formData.push(form_data);
    }
    
    // on item upload success
    $scope.isListSubscriberError = false;
    uploaderListSubscriber.onSuccessItem = function (fileItem, response, status, headers) {
    	
    	if(response.code == VALIDATE_LIST_SUBSCRIBER_OK){
        	$scope.dataSubscriberTemplate = response.listResult;
        	
        	$scope.listMSISDI  = $scope.concateListSubscriberTemplateWithForm($scope.dataSubscriberTemplate, $scope.listMSISDI)

        	$scope.tableListMSDI = new NgTableParams({}, {
				dataset : $scope.listMSISDI
			});
	    	
        	bootbox.alert(MESS_LIST_MSISDN_VALIDATE_KO);

        	closeOverLay();
    		return ;
    	}
    	
    	$scope.listMSISDI  = $scope.concateListSubscriberTemplateWithForm(response, $scope.listMSISDI)

    	$scope.tableListMSDI = new NgTableParams({}, {
			dataset : $scope.listMSISDI
		});
    	closeOverLay();
    };
    
    // on item upload error
    uploaderListSubscriber.onErrorItem = function (fileItem, response, status, headers) {
    	closeOverLay();
    }
    
    uploaderListSubscriber.onAfterAddingAll = function(items){
    	if(items!=null){
    		uploaderListSubscriber.uploadAll();	
    	}
	}
    
    // END UPLOADER GET LIST SUBSCRIBER TEMPLATE
    getListNetworkType();
    
	 $scope.model={};  
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	SubscriberName: {
                required: true,
                maxlength: 255
            } 
        },
        messages: {
        	SubscriberName: {
                required:$translate.instant('vnm.messages.validate.subscriberName.required'), 
                maxlength: "Tên thuê bao không vượt quá 255 ký tự."
            } 
	    } 
	
	 }
           
    $scope.SubReturnReason  = [
        { 'Id': 'REV01', 'Title': 'Không hoàn thành hậu kiểm với DNO' },
        { 'Id': 'REV02', 'Title': 'Khiếu nại của Khách hàng/ Thuê bao' },
        { 'Id': 'REV03', 'Title': 'Yêu cầu đặc biệt từ cơ quan quản lý pháp luật' },
        { 'Id': 'REV04', 'Title': 'Lỗi kỹ thuật của hệ thống chuyển mạng' },
        { 'Id': 'REV05', 'Title': 'CCH, RNO, DNO đã cùng đồng ý Reversal' }
    ]; 
    
    // UPLOADER CREATE NPR
    var uploader = $scope.uploader = new FileUploader({
        url: eim_url+'/bs/npr/upload'
    });
    $scope.model.fileAttachments = [];
    
    // config uploader set limit queue
    uploader.queueLimit = 11;
    
    uploader.onAfterAddingAll = function(items){
    	var lengthOfqueue = uploader.queue.length;
    	if(lengthOfqueue > MAX_FILE_UPLOADER){
    		
    		bootbox.alert($translate.instant('vnm.mnp_message.return_dno.max.number.file.upload'));
    	 	uploader.removeFromQueue(MAX_FILE_UPLOADER);
    	}
    	
    	var checkListTotalSize = getTotalSizeListFileUpload(uploader);
    	if(!checkListTotalSize){
    		bootbox.alert($translate.instant('vnm.mnp_message.common.upload.max.size.total.file'));
    		uploader.removeFromQueue(lengthOfqueue-1);
    	}
    }
    
    // set data before upload for each item
    uploader.onBeforeUploadItem  = function(item){
    	overLoading();
    	var identityDocType = StringUtilNVL(DOCUMENT_TYPE);
    	
    	item.attachMentIdClient = createTimeStamp();
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
    
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        $scope.model.fileAttachments.push(response);
    };
    
    $scope.uploadAllFile =  function(uploaderIn){
    	overLoading(messageUploading);
    	
    	checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
    	if(!checkListTotalSize){
    		bootbox.alert($translate.instant('vnm.mnp_message.common.upload.max.size.total.file'));
    		closeOverLay();
    		return 0;
    	}else{
    		uploaderIn.uploadAll();	
    		uploaderIn.onCompleteAll = function () {
        		var listSubscriberNumber = getListSubscriberNumber($scope.listMSISDI);
        		var dataSubReturnNotification = {
    					"dnoNetwork": $scope.model.donor,
    					"reasonReturn": $scope.model.subReturnReason,
    					"comments": $scope.model.comments,
    					"listSubscriber": listSubscriberNumber, 
    					"lisAttachMents": $scope.model.fileAttachments
        		}
        		
    			sendSubReturnNotificationService(dataSubReturnNotification);
    		 }
    	}
    }
    
    $scope.addSubscriberNumber = function () {
    	overLoading("Kiểm tra số thuê bao...");
    	$scope.listSubcriberNumber = [];
    	var subScriber = StringUtilNVL($("#idMsisdn").val());
    	var donorInput = StringUtilNVL($scope.model.donor);
    	
    	if(donorInput == EMPTY_VAL){
    		bootbox.alert(NETWORK_DONOR_REQUIRED);
    		closeOverLay();
    		return ;
    	}
    	
    	if($scope.listMSISDI.length >= MAX_LENGTH_RECORD_TABLE_MSISDN){
    		bootbox.alert(MAX_MSISDN_LIST);
    		closeOverLay();
    		return ;
    	}

    	var isNumber = validateSubscriberNumber(subScriber);
    	if(!isNumber){
    		closeOverLay();
    		return ;
    	}
    	
    	var isMSISDNContain = checkSubscriberInListMSISDN($scope.listMSISDI, subScriber);
    	if(isMSISDNContain){
    		bootbox.alert(MSISDN_EXIST_ERROR);
    		closeOverLay();
    	}
    	
    	if(subScriber != EMPTY_VAL && !isMSISDNContain){
    		
    		var dataCheckNumber = {
					"dnoNetwork": donorInput,
					"msisdn": subScriber
    		}
    		checkSubscriberInDB(dataCheckNumber);
    	}
    }
    
    $scope.addSubscriberNumberFormTemplate = function($event){
    	uploaderListSubscriber.clearQueue();
    	
    	var donorInput = StringUtilNVL($scope.model.donor);
    	if(donorInput == EMPTY_VAL){
    		bootbox.alert(NETWORK_DONOR_REQUIRED);
    		closeOverLay();
    		$event.preventDefault();
    		return ;
    	}
    }
    
    $scope.deleteMSISDN = function(item){
		var index = -1;		

		for( var i = 0; i < $scope.listMSISDI.length; i++ ) {
			if( $scope.listMSISDI[i].id == item.id ) {
				index = i;
				break;
			}
		}
		
		$scope.listMSISDI.splice( index, 1 );
//		$scope.tableListMSDI.data.splice( index, 1 );
		
    	$scope.tableListMSDI = new NgTableParams({}, {
			dataset : $scope.listMSISDI
		});
    }
    
    $scope.removeAllIListSubscriber =  function(){
    	$scope.listMSISDI = [];
    	
    	$scope.tableListMSDI = new NgTableParams({}, {
			dataset : $scope.listMSISDI
		});
    }
   
    $scope.onclickConfirmSubReturnRequest = function(){
    	bootboxConfirm(MESSAGE_HEADER_CONFIRM_NOTIFICATION, CONFIRM_MESSAGE_NOTIFICATION, $scope.confirmOK, $scope.confirmKO);
    }
    
    $scope.sendSubreturnNotification = function () {
    	overLoading("Loading...");
    	    	
    	if($scope.listMSISDI.length == 0){
    		closeOverLay();
    		bootbox.alert($translate.instant('vnm.mnp_message.return_dno.list.subscriber.required'));
    		return ;
    	}
    	
    	if($scope.listMSISDI.length > MAX_LENGTH_RECORD_TABLE_MSISDN){
    		bootbox.alert(MAX_MSISDN_LIST);
    		closeOverLay();
    		return ;
    	}
    	
    	
    	$scope.isListSubscriberError =  $scope.checkListSubscriberHasError($scope.listMSISDI);
    	if($scope.isListSubscriberError){
    		bootbox.alert(MESS_LIST_MSISDN_VALIDATE_KO);
    		closeOverLay();
    		return ;
    	}
    	
    	if(!checkAllFileOfQueueUploaded(uploader)){
    		$scope.uploadAllFile(uploader);
    	}else{
    		var listSubscriberNumber = getListSubscriberNumber($scope.listMSISDI);
    		var dataSubReturnNotification = {
					"dnoNetwork": $scope.model.donor,
					"reasonReturn": $scope.model.subReturnReason,
					"comments": $scope.model.comments,
					"listSubscriber": listSubscriberNumber, 
					"lisAttachMents": $scope.model.fileAttachments
    		}
    		
    		sendSubReturnNotificationService(dataSubReturnNotification);
    	}
    }
    
  	$scope.confirmOK = function(){
  		$scope.sendSubreturnNotification();
  	}
  	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.removeAllItem =  function(){
    	$scope.model.fileAttachments = [];
    	uploader.clearQueue()
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
    
    $scope.concateListSubscriberTemplateWithForm = function(listSubscriberTemp, listSubscriberForm){
    	var listOutPut = [];
    	var idIncreament = 1;
    	
    	if(listSubscriberForm.length > 0 ){
    		
    		for(var j=0; j < listSubscriberForm.length; j++){
    			if(listSubscriberForm[j] != null){
    				var msisdn = StringUtilNVL(formatMsisdnWithoutZero(listSubscriberForm[j].msisdn));
    				var note = StringUtilNVL(listSubscriberForm[j].note);
    			
    				var idSubscriberForm = '';
    				idSubscriberForm = createTimeStamp()+idIncreament;
    				
    				var subscriberElement = {
    						"id":idSubscriberForm, 
    		    			"msisdn":msisdn,
    		    			"note":note
    		    	};
    				idIncreament++;
    				listOutPut.push(subscriberElement);
    			}
    		}
    		
    	}
    	
    	if(listSubscriberTemp.length >0){
    		for(var i=0; i < listSubscriberTemp.length;i++){
    			if(listSubscriberTemp[i] != null){
    				var msisdn = StringUtilNVL(formatMsisdnWithoutZero(listSubscriberTemp[i].msisdn));
    				var note = StringUtilNVL(listSubscriberTemp[i].note);
    				
    				var idSubcriberTemp = '';
    				idSubcriberTemp = createTimeStamp()+idIncreament;
    				
    				var isMSISDNContain = checkSubscriberInListMSISDN(listSubscriberForm, msisdn);
    				
    				if(isMSISDNContain){
    					note += BREAK_LINE + "+"+MSISDN_EXIST_ERROR;
    					$scope.isListSubscriberError = true;
    		    	}
    				
    		    	var subscriberElement = {
    		    			"id":idSubcriberTemp, 
    		    			"msisdn":msisdn,
    		    			"note":note
    		    	};
    		    	idIncreament++;
    				listOutPut.push(subscriberElement);
    			}
    		}
    	}
    	return listOutPut;
    }
    
    $scope.checkListSubscriberHasError = function(listSubscriber){
    	var resultError = false;
    	for(var i = 0; i < listSubscriber.length; i++){
    		var noteElement = StringUtilNVL(listSubscriber[i].note);
    		
    		if(noteElement != ""){
    			resultError = true;
    			break;
    		}
    	}
    	
    	return resultError;
    }
});

function getDNONetworkTitleById (listNetowrk, idNetwork){
	var netWorkName = "";
	for(var i = 0 ; i<listNetowrk.length; i ++){
		if(listNetowrk[i].networkId== idNetwork){
			netWorkName = listNetowrk[i].networkName;
			break;
		}
	}
	return netWorkName;
}

function validateSubscriberNumber(numberInput){
	var result = true;
	var number = StringUtilNVL(numberInput);
	
	if(!StringUtilNVLIsNotEmpty(numberInput)){
		bootbox.alert(MSISDN_EMTY_REQUIRED);
		return false;
	}
	
	if(!isNumeric(number)){
		bootbox.alert(MSISDN_NUMBER_REQUIRED);
		return false;
	};
	
	if(number.length < MIN_LENGTH_MSISDN || number.length > MAX_LENGTH_MSISDN){
		bootbox.alert(MIN_MAX_MSISDN_ERROR);
		return false;
	}
	return result;
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

// check số đã có trong danh sách
// trả về true nếu số đã tồn tại trong danh sách
function checkSubscriberInListMSISDN(listMSISDN, msisdn){
	for(var i = 0; i <listMSISDN.length; i++){
		if(StringUtilNVL(formatMsisdnWithoutZero(listMSISDN[i].msisdn)) == StringUtilNVL(formatMsisdnWithoutZero(msisdn))){
			return true;
		} 
	}
	return false;
}

function getListSubscriberNumber(listSubcriberNumber){
	var listSubscriberNumber = [];
	for(var i = 0; i <listSubcriberNumber.length; i++){
		listSubscriberNumber.push(listSubcriberNumber[i].msisdn);
	}
	
	return listSubscriberNumber;
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

// check field is not empty
// return true if field not empty
// return false if field empty
function StringUtilNVLIsNotEmpty(val){
	if(val==undefined || val == null || $.trim(val)=="") return false;
	return true;
}

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
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

// check all item in queue success :
// + false when all file not upload success
// + true when all file upload success
function checkAllFileOfQueueUploaded(uploaderIn){
	var checkFileAllisUpload = true;
	
	if(uploaderIn.queue.length == 0){
		checkFileAllisUpload =  true;
	}
	
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
