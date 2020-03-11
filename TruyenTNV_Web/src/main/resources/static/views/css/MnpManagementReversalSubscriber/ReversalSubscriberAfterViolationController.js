//var  eim_url = "http://10.6.2.41:6060";  
var ROW_NONE_INDEX = -1;
var CHECK_BOX_MODEL = "checkBoxModel";
var messageUploading  = "Uploading";
var DOCUMENT_TYPE = "DOC_REVERSAL_FILE";
var EMPTY_VALUE  = "";

var SEND_REVERSAL_REQUEST_CODE_OK = 90011;
var SEND_REVERSAL_SERIAL_SIM_CODE_KO = 90016
var SEND_REVERSAL_SERIAL_SIM_CODE_KO_MESS;

var MESSAGE_HEADER_CONFIRM_REVERSAL_VIOLATION = "Nhận số hoàn trả sau hậu kiểm";
var CONFIRM_MESSAGE_REVERSAL_VIOLATION = "Bạn có đồng ý gửi yêu cầu hoàn trả số ?";
var MAX_LENGTH_SERIAL_SIM = 20;
var MIN_LENGTH_SERIAL_SIM = 19;

var VNM_STATUS_REVERSED = "REVERSED";
app_vnm.controller('ctr-return-subscriber-after-violation', function ($scope, 
		$rootScope ,$translate,$compile,$timeout,
		$uibModal, $location, 
		$window,FileUploader, $filter, $http, NgTableParams,
		$localStorage) {	
	
	$scope.listSubscriberSaveStatus = [];
	$scope.searchResultSubscriberInfo = [];
	
	var LIST_SUBSCRIBER_REQUIRED = $translate.instant('vnm.mnp_message.reversal_vnm.mess.list.subscriber.required');
	var MESS_NPR_REVERSED = $translate.instant('vnm.mnp_message.reversal_vnm.mess.npr.reversed');
	
	var SERIAL_SIM_VALIDATE_KO = $translate.instant('vnm.mnp_message.reversal_vnm.mess.number.serial.sim.number.error');
	var SERIAL_SIM_NUMBER_REQUIRED = $translate.instant('vnm.mnp_message.reversal_vnm.mess.number.serial.sim.number.required');
	var SERIAL_SIM_REQUIRED = $translate.instant('vnm.mnp_message.reversal_vnm.mess.number.serial.required');
	var SERIAL_SIM_LENGTH_REQUIRED = $translate.instant('vnm.mnp_message.reversal_vnm.mess.number.serial.sim.length.error');
	
	SEND_REVERSAL_SERIAL_SIM_CODE_KO_MESS = $translate.instant('vnm.mnp_message.reversal_vnm.mess.serial.sim.error');
	
	var SEND_REVERSAL_REQUEST_OK = $translate.instant('vnm.mnp_message.reversal_vnm.mess.send.cch.success');
	
	getListNetworkType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceNetwork";
		$scope.DonorSource = [];
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
		$scope.rowHighlightNPR = ROW_NONE_INDEX;
		$scope.rowCheckboxSelected = [];
		$scope.removeAllItem();
		var url = eim_url + "/bs/reversal_subscriber/reversal_subscriber_after_violation";
		$http.post(url, data).success(function(result) {
			
			$scope.searchResultNPRReceive = result;
			if ($scope.searchResultNPRReceive.length > 0) {
				
				$scope.tableParams = new NgTableParams({}, {
					dataset : $scope.searchResultNPRReceive
				});
				
				closeOverLay();
			} else {
				closeOverLay();
				bootbox.alert("Không tìm thấy dữ liệu");
			}
		}).error(function(data) {
			closeOverLay();
		});
	}
	
	reversalRequestAfterViolation = function(data) {
		overLoading("Loading...");
		var url = eim_url + "/bs/reversal_subscriber/reversal_request_after_violation";
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
			
			bootbox.alert("Có lỗi trong quá trình gửi yêu cầu hoàn trả số. Lỗi: " + response.message);
			closeOverLay();
		});
	}
	
	$scope.rowHighlightNPR = ROW_NONE_INDEX;
	$scope.getNprHighlight = function(item) {
		$scope.rowHighlightNPR = item;
	}
	
	searchListSubscriberInfo = function(data, item) {
		overLoading("Loading...");
		$scope.removeAllItem();
		$scope.getNprHighlight(item);
		var url = eim_url + "/bs/reversal_subscriber/reversal_list_subscriber_after_violation";
		$http.post(url, data).success(function(result) {
			$scope.searchResultSubscriberInfo = result;
			if ($scope.searchResultSubscriberInfo.length > 0) {
				$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
					dataset : $scope.searchResultSubscriberInfo
				});
				closeOverLay();
			} else {
				closeOverLay();
				bootbox.alert("Danh sách thuê bao không hợp lệ");
			}
		}).error(function(data) {
			closeOverLay();
		});
	}

	// init data
	getListNetworkType();
	
	$scope.model={};  
// $scope.validationOptions = {
// debounce: 1500,
// preValidateFormElements: true,
// rules: {
// transactionID: {
// required: true,
// maxlength: 20
// },
// msisdn: {
// required: true,
// maxlength: 11
// },
// StartDate: {
// required: true,
// maxlength: 11
// },
// EndDate: {
// required: true,
// maxlength: 11
// }
// },
// messages: {
// transactionID: {
// required:" Yêu cầu nhập transactionID"
// },
// msisdn: {
// required: "Yêu cầu nhập msisdn",
// maxlength: "msisdn 10 ký tự."
// },
// StartDate: {
// required: "Yêu cầu nhập ngày bắt đầu"
// },
// EndDate: {
// required: "Yêu cầu nhập ngày tháng"
// }
// }
// }
 
		$scope.ViolationActionSearchSource = [
			{'Id' : '01', 'Title' : 'YC hoàn trả'}, 
			{'Id' : '03', 'Title' : 'Đã hoàn trả'},
			{'Id' : '04', 'Title' : 'Tất cả'}
		];
		
    $scope.model.fileAttachments = [];
    var uploader = $scope.uploader = new FileUploader({
    	url: eim_url+'/bs/npr/upload'
    });
    
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
    	item._file.name = ConvertFileNameNoneUTF8(item.file.name);
    	item.file.name = ConvertFileNameNoneUTF8(item.file.name);
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
    
   $scope.searchListNPRReceive = function(){
	   $scope.searchResultSubscriberInfo = [];
	   $scope.searchResultNPRReceive = [];
	   $scope.tableParams = new NgTableParams({}, {
			dataset : $scope.searchResultNPRReceive
		});
	   
	   $scope.searchResultSubscriberInfo = [];
	   $scope.tableParamsSubscriberInfo = new NgTableParams({}, {
			dataset : $scope.searchResultSubscriberInfo
		});
	   
	   var isFormValidate = $scope.isValidateFormSearch();
 	   if(isFormValidate){
 		  var nprSearchData = {
 					"transactionID" 	:  StringUtilNVL($scope.model.transactionID),
 					"msisdn" 			:  StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn)),
 					"receipient"    	:  StringUtilNVL($scope.model.receiveNetwork),
 					/*"statusNPRRequest"  :  StringUtilNVL($scope.model.violationActionStatus),*/
 					"startDate" 		:  StringUtilNVL($("#startDateID").val()),
 					"endDate" 			:  StringUtilNVL($("#endDateID").val())
 				};
 			
 		   searchListNPRReceive(nprSearchData);
 	   }
   }
   
	$scope.getListSubscriberInfo = function(item) {
		
		$scope.searchResultSubscriberInfo = [];
		var nrpID = item.nprId;
		var transactionID = item.originalCchTransId;
		
		var nprInput = {
			"nprId" : nrpID,
			"transactionID" : transactionID
		};
		searchListSubscriberInfo(nprInput, item);
	}
	
    $scope.onclickConfirmReversalVioaltion = function(){
    	bootboxConfirm(MESSAGE_HEADER_CONFIRM_REVERSAL_VIOLATION, CONFIRM_MESSAGE_REVERSAL_VIOLATION, $scope.confirmOK, $scope.confirmKO);
    }
    
	$scope.sendRequestReturnSubscriber = function(){

		
		if(StringUtilNVL($scope.rowHighlightNPR.vnmViolationStatus) == VNM_STATUS_REVERSED){
			bootbox.alert(MESS_NPR_REVERSED);
			closeOverLay();
 			return;
 		}

		var isFormReversalValidate = $scope.validateFormReversalRequest();
 		if(!isFormReversalValidate){
 			closeOverLay();
 			return;
 		}
 		
 		
 		
 		var nprId = $scope.rowHighlightNPR.nprId;
		var listNprSubscribers = $scope.searchResultSubscriberInfo;
		var listAttachMentData = $scope.model.fileAttachments;
		var listNPRReversal = {
				nprId: nprId,
				listNprSubscribers : listNprSubscribers,
				comments: StringUtilNVL($scope.model.comments),
				listAttachMentData : listAttachMentData
		};
		
    	if(uploader.queue.length > 0){
    		if(!checkAllFileOfQueueUploaded(uploader)){
        		$scope.uploadAllFile(uploader);
        	}else{
        		listNPRReversal.listAttachMentData = listAttachMentData;
        		reversalRequestAfterViolation(listNPRReversal);
        	}
    	}else{
    		reversalRequestAfterViolation(listNPRReversal);
    	}
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
    
  	$scope.confirmOK = function(){
  		$scope.sendRequestReturnSubscriber();
  	}
  	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
	$scope.uploadAllFile =  function(uploaderIn){
    	overLoading(messageUploading);
    	checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
    	if(!checkListTotalSize){
    		bootbox.alert("Tông dung lượng file nhỏ hơn 6MB");
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
	    				comments: StringUtilNVL($scope.model.comments),
	    				listNprSubscribers : listNprSubscribers,
	    				listAttachMentData : listAttachMentData
	    		};
	    			    		
	    		reversalRequestAfterViolation(listNPRReversal);
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
				/*&& StringUtilNVL($scope.model.violationActionStatus) == EMPTY_VALUE*/
				&& StringUtilNVL($("#startDateID").val()) == EMPTY_VALUE
				&& StringUtilNVL($("#endDateID").val()) == EMPTY_VALUE) {
			bootbox.alert("Nhập thông tin tìm kiếm");
			return false
		}else{
			var isDateAfter = checkDateIsAfterDate($("#startDateID").val(), $("#endDateID").val());
			if(!isDateAfter){
				bootbox.alert("Ngày bắt đầu tìm kiếm phải nhỏ hơn ngày kết thúc !");
				return false
			}
		}
    	
		var msisdnVal = StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn));
		if(msisdnVal != EMPTY_VALUE && !isNumbericInteger(msisdnVal)){
			bootbox.alert("Số thuê bao chỉ bao gồm ký tự số !");
			return false
		}
		return true;
    }
    
});
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
		checkFileAllisUpload =  false;
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

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}
