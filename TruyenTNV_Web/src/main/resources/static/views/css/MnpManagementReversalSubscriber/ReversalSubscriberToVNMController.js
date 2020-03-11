//var  eim_url = "http://10.6.2.41:6060";  
var ROW_NONE_INDEX = -1;
var CHECK_BOX_MODEL = "checkBoxModel";
var messageUploading  = "Uploading";
var DOCUMENT_TYPE = "DOC_REVERSAL_FILE";

var EMPTY_VALUE = "";
var NUMBER_REVERSED_ERROR = 90004;
var NUMBER_REVERSED_ERROR_MESSAGE;

var SEND_REVERSAL_REQUEST_CODE_OK = 90011;
var SEND_REVERSAL_SERIAL_SIM_CODE_KO = 90016
var SEND_REVERSAL_SERIAL_SIM_CODE_KO_MESS;

var SEND_REVERSAL_REQUEST_OK;
var SEND_REVERSAL_REQUEST_KO ;

var DATA_NOT_FOUND;
var LIST_SUBSCRIBER_NOT_FOUND;

var MAX_FILE_UPLOAD ;
var MAX_TOTAL_FILE_MESS;

var SEARCH_CONDITION ;
var DATE_START_END_MESS;

var NUMBER_REQUIRED;
var LIST_SUBSCRIBER_REQUIRED;

var SERIAL_SIM_VALIDATE_KO;
var SERIAL_SIM_NUMBER_REQUIRED;

var SERIAL_SIM_REQUIRED;
var SERIAL_SIM_LENGTH_REQUIRED;

var MESSAGE_HEADER_CONFIRM_REVERSAL;
var CONFIRM_MESSAGE_REVERSAL;

var MAX_LENGTH_SERIAL_SIM = 20;
var MIN_LENGTH_SERIAL_SIM = 19;

var REASON_REV01 = "REV01";

app_vnm.controller('ctr-reversal-sub-vnm', function ($scope, 
		$rootScope ,$translate,$compile,$timeout,
		$uibModal, $location, 
		$window,FileUploader, $filter, $http, NgTableParams,
		$localStorage) {
	
	NUMBER_REVERSED_ERROR_MESSAGE = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.trans.in.reversaling');
	
	SEND_REVERSAL_SERIAL_SIM_CODE_KO_MESS
	= $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.serial.sim.error');
	
	SEND_REVERSAL_REQUEST_OK = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.send.cch.success');
	
	SEND_REVERSAL_REQUEST_KO = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.send.cch.error');
	
	DATA_NOT_FOUND = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.search.data.not.found');
	
	LIST_SUBSCRIBER_NOT_FOUND = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.list.subscriber.not.found');
	
	MAX_FILE_UPLOAD = $translate
	.instant('vnm.mnp_message.common.max.number.file.upload');
	
	MAX_TOTAL_FILE_MESS = $translate
	.instant('vnm.mnp_message.common.upload.max.size.total.file');
	
	SEARCH_CONDITION = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.one.condition.required');
	
	DATE_START_END_MESS = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.search.date.start.end.error');
	
	NUMBER_REQUIRED = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.number.msisdn.number.required');
	
	LIST_SUBSCRIBER_REQUIRED = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.list.subscriber.required');
	
	SERIAL_SIM_VALIDATE_KO = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.number.serial.sim.number.error');
	
	SERIAL_SIM_NUMBER_REQUIRED = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.number.serial.sim.number.required');
	
	SERIAL_SIM_REQUIRED = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.number.serial.required');
	
	SERIAL_SIM_LENGTH_REQUIRED = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.number.serial.sim.length.error');
	
	MESSAGE_HEADER_CONFIRM_REVERSAL = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.form.name');
	
	CONFIRM_MESSAGE_REVERSAL = $translate
	.instant('vnm.mnp_message.reversal_vnm.mess.confirm.send.cch');
	
	$scope.listSubscriberSaveStatus = [];
	$scope.searchResultSubscriberInfo = [];
	
	getListNetworkType =  function () {
    	overLoading("Loading...");
    	$scope.DonorSource = [];
    	
    	var url =eim_url+"/bs/SourceNetwork";
		 $http.get(url).success(function (data){
			 if(data != undefined && data != null){
				 if(data.length != 0){
					 $scope.DonorSource = data;
				 }
			 }
			 
			 var selectedAll = {
					 networkId: "ALL",
					 networkName: "Tất cả nhà mạng"
			 }
			 $scope.DonorSource.push(selectedAll);
			 
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	
	searchListNPRReceive = function(data) {
		overLoading("Loading...");
		
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.searchResultNPRReceive
		});
		
		var url = eim_url + "/bs/reversal_subscriber/reversal_subscriber";
		$http.post(url, data).success(function(result) {
			
			$scope.searchResultNPRReceive = result;
			if ($scope.searchResultNPRReceive.length > 0) {
				// set item.violationsStatusNpr
				// $scope.setRowIndexCheckBox($scope.searchResultNPRReceive);
				$scope.tableParams = new NgTableParams({}, {
					dataset : $scope.searchResultNPRReceive
				});
				closeOverLay();
			} else {
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND);
			}
		}).error(function(data) {
			closeOverLay();
			if(data.code == NUMBER_REVERSED_ERROR){
				bootbox.alert(data.message);
				return ; 
			}
		});
	}
	
	reversalRequestFunction = function(data) {
		overLoading("Loading...");
		var url = eim_url + "/bs/reversal_subscriber/send_reversal_request";
		$http.post(url, data).success(function(response) {
			bootbox.alert(SEND_REVERSAL_REQUEST_OK+ ' '+response.message);
			closeOverLay();
		}).error(function(response) {
			
			if(response.code == SEND_REVERSAL_SERIAL_SIM_CODE_KO){
				$scope.searchResultSubscriberInfo = response.listResult;
				bootbox.alert(SEND_REVERSAL_SERIAL_SIM_CODE_KO_MESS);
				
				if ($scope.searchResultSubscriberInfo.length > 0) {
					$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
						dataset : $scope.searchResultSubscriberInfo
					});
					closeOverLay();
				}
				return;
			}
			
			bootbox.alert(SEND_REVERSAL_REQUEST_KO + ' '+response.message);
			closeOverLay();
		});
	}
	
	$scope.rowHighlightNPR = ROW_NONE_INDEX;
	$scope.getNprHighlight = function(item) {
		$scope.rowHighlightNPR = item;
	}
	
	searchListSubscriberInfo = function(data, item, checkCallDb) {
		overLoading("Loading...");

		if(checkCallDb){
			$scope.listSubscriberSaveStatus = [];
		}
		
		$scope.getNprHighlight(item);
		var url = eim_url + "/bs/reversal_subscriber/reversal_list_subscriber";
		$http.post(url, data).success(function(result) {
			
			
			$scope.searchResultSubscriberInfo = result;
			$scope.searchResultSubscriberInfo = $scope.copySerialSim($scope.searchResultSubscriberInfo, $scope.listSubscriberSaveStatus);
			if ($scope.searchResultSubscriberInfo.length > 0) {
				$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
					dataset : $scope.searchResultSubscriberInfo
				});
				closeOverLay();
			} else {
				closeOverLay();
				bootbox.alert(LIST_SUBSCRIBER_NOT_FOUND);
			}
		}).error(function(data) {
			closeOverLay();
		});
	}

	// init data
	getListNetworkType();
	
	$scope.model={};  
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	transactionID: {
// required: true,
// maxlength: 15
            },
            msisdn: {
// required: true,
// maxlength: 255
            },
            StartDate: {
// required: true,
// maxlength: 11
            },
            EndDate: {
// required: true,
// maxlength: 11
            }
        },
        messages: {
	        	transactionID: {
	                required:" Yêu cầu nhập transactionID"
	            },
	            msisdn: {
	                required: "Yêu cầu nhập msisdn",
	                maxlength: "msisdn 10 ký tự."
	            },
	            StartDate: {
	                required: "Yêu cầu nhập ngày bắt đầu"
	            },
	            EndDate: {
	                required: "Yêu cầu nhập ngày tháng"
	            }
	        }
	    } 
	 
	    $scope.SubReturnReason  = [
	    	/*{ 'Id': 'REV01', 'Title': 'Không hoàn thành hậu kiểm với DNO' },*/
	        { 'Id': 'REV02', 'Title': 'Khiếu nại của Khách hàng/ Thuê bao' },
	        { 'Id': 'REV03', 'Title': 'Yêu cầu đặc biệt từ cơ quan quản lý pháp luật' },
	        { 'Id': 'REV04', 'Title': 'Lỗi kỹ thuật của hệ thống chuyển mạng' },
	        {'Id':'REV05','Title':'CCH,RNO, DNO đã cùng đồng ý Reversal' }
	    ];
// ng-init="model.subReturnReason = SubReturnReason[0].Id"
	 
	 $scope.model.subReturnReason = $scope.SubReturnReason[0].Id;
	 
	 	$scope.onReversalReasonChange = function(){
	 		$scope.checkSubReturnReasonREV01();
	 		
	 		$scope.listSubscriberSaveStatus = angular.copy($scope.searchResultSubscriberInfo);
	 		
	 		if($scope.isSubReturnReasonREV01){
	 			$scope.getListSubscriberInfo($scope.rowHighlightNPR, false);	
	 		}
	 		
	 		$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
	 			dataset : $scope.searchResultSubscriberInfo
	 		});
	 	}
	 
	    $scope.checkSubReturnReasonREV01 = function(){
	    	$scope.isSubReturnReasonREV01 = false;
	    	if($scope.model.subReturnReason == REASON_REV01){
	    		$scope.isSubReturnReasonREV01 = true;
	    	}
	    }
	 
	    $scope.searchListNPRReceive = function(){
	    	$scope.rowHighlightNPR = ROW_NONE_INDEX;
	    	
	 	   $scope.searchResultNPRReceive = [];
	 	   $scope.searchResultSubscriberInfo = [];
	 		$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
	 			dataset : $scope.searchResultSubscriberInfo
	 		});
	 		
	 	   $scope.searchResultSubscriberInfo = [];
		   $scope.tableParamsSubscriberInfo = new NgTableParams({}, {
				dataset : $scope.searchResultSubscriberInfo
			});
		   
	 	   $scope.fileAttachments = [];
	 	   uploader.clearQueue();
	 	   
	 	   var isFormValidate = $scope.isValidateFormSearch();
	 	   if(isFormValidate){
		 		var nprSearchData = {
		 				"transactionID" 	: StringUtilNVL($scope.model.transactionID),
		 				"statusNPRRequest"	: StringUtilNVL($scope.model.statusNPRRequest),
		 				"msisdn" 			: StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn)),
		 				"receipient"    	: StringUtilNVL($scope.model.receiveNetwork),
		 				"startDate" 		: StringUtilNVL($("#startDateID").val()),
		 				"endDate" 			: StringUtilNVL($("#endDateID").val())
		 			};
		 		
		 	   searchListNPRReceive(nprSearchData);
	 	   }
	    }
	    
	 	$scope.getListSubscriberInfo = function(item, checkCallDb) {
		 	   
	 		$scope.searchResultSubscriberInfo = [];
	 		$scope.searchResultNPRReceive = [];
	 		$scope.searchNPRNewsResult = []
	 		$scope.fileAttachments = [];
	 		uploader.clearQueue();
	 		
	 		var nrpID = item.nprId;
	 		var transactionID = item.originalCchTransId;
	 		
	 		var nprInput = {
	 			"nprId" : nrpID,
	 			"transactionID" : transactionID
	 		};
	 		$scope.checkSubReturnReasonREV01();
	 		searchListSubscriberInfo(nprInput, item,checkCallDb);
	 	}
	 	
	    $scope.onclickConfirmReversalRequest = function(){
	    	bootboxConfirm(MESSAGE_HEADER_CONFIRM_REVERSAL, CONFIRM_MESSAGE_REVERSAL, $scope.confirmOK, $scope.confirmKO);
	    }
	    
	 	$scope.sendReversalRequestSubscriber = function(){

	 		var isFormReversalValidate = $scope.validateFormReversalRequest();
	 		if(!isFormReversalValidate){
	 			closeOverLay();
	 			return;
	 		}
	 		
	    	if(!checkAllFileOfQueueUploaded(uploader)){
	    		$scope.uploadAllFile(uploader);
	    	}else{
	    		var nprId = $scope.rowHighlightNPR.nprId;
	    		var listNprSubscribers = $scope.searchResultSubscriberInfo;
	    		var listAttachMentData = $scope.model.fileAttachments;
	    		var listNPRReversal = {
	    				nprId: nprId,
	    				returnReason : StringUtilNVL($scope.model.subReturnReason),
	    				comments: StringUtilNVL($scope.model.comments),
	    				listNprSubscribers : listNprSubscribers,
	    				listAttachMentData : listAttachMentData
	    		};
	    		
	    		reversalRequestFunction(listNPRReversal);
	    	}
	 	}
	 	
	  	$scope.confirmOK = function(){
	  		$scope.sendReversalRequestSubscriber();
	  	}
	  	
	  	$scope.confirmKO = function(){
	  		closeOverLay();
	  	}
	  	
	 	$scope.deleteElementSubscriber = function(item) {
	     	angular.forEach( $scope.searchResultSubscriberInfo, function(objectRow, index){
	      	   if(objectRow.nprSubscriberId == item.nprSubscriberId){
	      	        $scope.searchResultSubscriberInfo.splice(index,1);   
	      	   }
	      	});
	     	
	 		$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
	 			dataset : $scope.searchResultSubscriberInfo
	 		});
	 	}
	 	
    $scope.model.fileAttachments = [];
    var uploader = $scope.uploader = new FileUploader({
    	url: eim_url+'/bs/npr/upload'
    });
    
    $scope.model.fileAttachments = [];
    
    // config uploader set limit queue
    uploader.queueLimit = 11;
      
    // Another user-defined filter set max file size
    uploader.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {

        	item.name = ConvertFileNameNoneUTF8(item.name);
        	if(item.name.length > MNP_MAX_FILE_NAME_UPLOAD){
        		var fileName = item.name;
        		
        		var MESS_MAX_FILE_NAME_ITEM = $translate.instant('vnm.mnp_message.registration.prepaid.validate.max.length.file.name.required'),        		
        		MESS_MAX_FILE_NAME_ITEM = MESS_MAX_FILE_NAME_ITEM.replace(/###/, setStrongLabel(fileName));
        		bootbox.alert(MESS_MAX_FILE_NAME_ITEM);
        		return false;
        	}
        	
        	var sizeFile = item.size;
        	if(sizeFile <= MAX_TOTAL_FILE_LENGTH_BYTE){
        		return true;
        	}else{
        		var fileName = item.name;
        		var message = messageSizeErrorClient.replace(/###/, fileName);
        		$scope.showAlert("dialogAttetion",message);
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
    		bootbox.alert(MAX_FILE_UPLOAD);
    	 	uploader.removeFromQueue(MAX_FILE_UPLOADER);
    	}
    	
    	var checkListTotalSize = getTotalSizeListFileUpload(uploader);
    	if(!checkListTotalSize){
    		bootbox.alert(MAX_TOTAL_FILE_MESS);
    		uploader.removeFromQueue(lengthOfqueue-1);
    	}
    } 
    
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        $scope.model.fileAttachments.push(response);
    };

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
    
    $scope.uploadAllFile =  function(uploaderIn){
    	overLoading(messageUploading);
    	checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
    	if(!checkListTotalSize){
    		bootbox.alert(MAX_TOTAL_FILE_MESS);
    		closeOverLay();
    		return 0;
    	}else{
    		uploaderIn.uploadAll();	
    		uploaderIn.onCompleteAll = function () {
	    		var nprId = $scope.rowHighlightNPR.nprId;
	    		var listNprSubscribers = $scope.searchResultSubscriberInfo;
	    		var listAttachMentData = $scope.model.fileAttachments;

	    		var listNPRReversal = {
	    				nprId: nprId,
	    				returnReason : $scope.model.subReturnReason,
	    				comments: $scope.model.comments,
	    				listNprSubscribers : listNprSubscribers,
	    				listAttachMentData : listAttachMentData
	    		};
	    		
        		reversalRequestFunction(listNPRReversal);
    		 }
    	}
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
    
    $scope.isValidateFormSearch = function(){
    	if (StringUtilNVL($scope.model.transactionID) == EMPTY_VALUE
				&& StringUtilNVL($scope.model.statusNPRRequest) == EMPTY_VALUE
				&& StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn)) == EMPTY_VALUE
				&& StringUtilNVL($scope.model.receiveNetwork) == EMPTY_VALUE
				&& StringUtilNVL($("#startDateID").val()) == EMPTY_VALUE
				&& StringUtilNVL($("#endDateID").val()) == EMPTY_VALUE) {
			bootbox.alert(SEARCH_CONDITION);
			return false
		}else{
			var isDateAfter = checkDateIsAfterDate($("#startDateID").val(), $("#endDateID").val());
			if(!isDateAfter){
				bootbox.alert(DATE_START_END_MESS);
				return false
			}
		}
    	
		var msisdnVal = StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn));
		if(msisdnVal != EMPTY_VALUE && !isNumbericInteger(msisdnVal)){
			bootbox.alert(NUMBER_REQUIRED);
			return false
		}
			
		return true;
    }
    
    // validate gửi yc hoàn trả
    $scope.validateFormReversalRequest = function(){
    	
    	if($scope.searchResultSubscriberInfo.length == 0){
    		bootbox.alert(LIST_SUBSCRIBER_REQUIRED);
    		return false;
    	}
    	
		
		 if(!$scope.validateListSerialNumber($scope.searchResultSubscriberInfo)){
			 bootbox.alert(SERIAL_SIM_VALIDATE_KO);
		 	$scope.tableParamsSubscriberInfo = new NgTableParams({}, { 
		 		dataset :$scope.searchResultSubscriberInfo 
		 	});
		 
		 	return false 
		  }
    	return true;
    }
    
    // return true if all serial sim validate OK.
    // else return true
    $scope.validateListSerialNumber = function(listSerialNumbers){
    	var resultValidateSerial = true;
    	var noteSerialSim = "";
    	
    	for(var i =0; i<listSerialNumbers.length; i ++){
    		var serialSim = StringUtilNVL(listSerialNumbers[i].serialSim);
    		
    		if(serialSim == EMPTY_VALUE){
    			noteSerialSim += SERIAL_SIM_REQUIRED;
    			
    			listSerialNumbers[i].note = SERIAL_SIM_REQUIRED;
    			continue;
    		}
    		
    		if(!isNumbericInteger(serialSim)){
    			noteSerialSim += SERIAL_SIM_NUMBER_REQUIRED;
    			listSerialNumbers[i].note = SERIAL_SIM_NUMBER_REQUIRED;
    			continue;
    		}
    		
    		if(serialSim.length > MAX_LENGTH_SERIAL_SIM || serialSim.length < MIN_LENGTH_SERIAL_SIM){
    			noteSerialSim += SERIAL_SIM_LENGTH_REQUIRED;
    			listSerialNumbers[i].note = SERIAL_SIM_LENGTH_REQUIRED;
    			continue;
    		}
    		
    		listSerialNumbers[i].note = EMPTY_VALUE;
    	}
    	
    	if(StringUtilNVL(noteSerialSim) != EMPTY_VALUE){
    		resultValidateSerial = false;
    	}
    	
    	return resultValidateSerial;
    }
    
    $scope.copySerialSim = function(listSubscriberOriginal, listSubscriberCustom){
    	var listSubscriberOutput = angular.copy(listSubscriberOriginal);
    	if(listSubscriberCustom.length == 0){
    		return listSubscriberOutput;
    	}
    	
    	for(var i = 0; i< listSubscriberOutput.length; i++){
    		var subscriberElement = listSubscriberOutput[i];
    		var msisdn = StringUtilNVL(subscriberElement.msisdn);
    		
    		for(var j = 0; j < listSubscriberCustom.length; j++){
    			if(msisdn == StringUtilNVL(listSubscriberCustom[j].msisdn)){
    				subscriberElement.serialSim = StringUtilNVL(listSubscriberCustom[j].serialSim);
    				break;
    			}
    		}
    	}
    	
    	return listSubscriberOutput;
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
    
});

function overLoading(message) {
	App.blockUI({
		message : message
	});
	$(".blockOverlay").css("background-color", "#000000");
	$(this).css("opacity", "1");
}

function closeOverLay() {
	$.unblockUI();
}
