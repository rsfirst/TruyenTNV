var ROW_NONE_INDEX = -1;
var EMTPY_VALUE_ERROR_CODE  = 505;

var SERVICE_SOAP_ERROR_CODE = 506;

var MAX_LENGTH_RECORD_TABLE_MSISDN  = 100;
var LIST_SUBSCRIBER_NOT_FOUND = "Không tìm thấy bản tin chuyển mạng";
var TRANS_MSISND_REQUIRED = "Yêu cầu nhập số thuê bao hoặc mã yccm !";

var DATA_RETURN_OK = "Đã gửi yêu cầu trả số về nhà mạng gốc đến cục viễn thông ! Mã yêu cầu : ";

var DATA_RETURN_ERROR = "Lỗi khi gửi bản tin !. Lỗi : ";
var SEND_RETURN_REQUEST_KO = "Gửi yêu cầu hoàn trả không thành công";

var MAX_MSISDN_TABLE = "Danh sách số thuê bao tối đa 100 số !";
var MSISDN_EXIST = "Số thuê bao đã tồn tại trong danh sách hoàn trả số";
var MSISDN_REQUIRED = "Xin hãy chọn thuê bao để hoàn trả về nhà mạng gốc!";

var MSISDN_DESTROY_KO = 90014;
var MSISDN_DESTROY_KO_MESS = "Số thuê bao chưa hủy trên hệ thống Vietnamobile !";

var MESSAGE_HEADER_CONFIRM_RETURN_REQUEST = "Trả số về nhà mạng gốc "; 
var CONFIRM_MESSAGE_RETURN_REQUEST = "Bạn có đồng ý gửi yêu cầu trả số về nhà mạng gốc tới cục viễn thông ?";


var NPR_MESSAGE_NP_PROCESSING = "PROCESSING";
var NP_RETURN_COMPLETED = "COMPLETED";
var EMPTY_VALUE  = "";

app_vnm.controller('ctrl-return-original-network', 
	function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal,
			$location, $window,$filter, $localStorage, 
			$http, FileUploader , NgTableParams) {	
	
	searchListSubscriber = function(data) {
		overLoading("Loading...");
		$scope.searchResultSubscriberInfo = [];
		$scope.dataTableSubscriberReversalOriginal = [];
		
		$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
			dataset : $scope.searchResultSubscriberInfo
		});
		
		var url = eim_url + "/bs/return_request/list_subscriber_return";
		$http.post(url, data).success(function(result) {
			$scope.searchResultSubscriberInfo = result;

			setReversalStatusSubscriber($scope.searchResultSubscriberInfo);
			
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
	   		 if(data!=null && data!= undefined && data.code == EMTPY_VALUE_ERROR_CODE){
	   			bootbox.alert(TRANS_MSISND_REQUIRED);
	  			closeOverLay();
	  			return ;
	  		 }
	   		 closeOverLay();
		});
	}
	
	sendReversalRequestOriginalNetwork = function(data) {
		overLoading("Loading...");
		
		var url = eim_url + "/bs/return_request/send_return_request";
		$http.post(url, data).success(function(result) {
			bootbox.alert(DATA_RETURN_OK+ ' ' +result.message);
			closeOverLay();
		}).error(function(result) {
	   		 if(result!=null && result!= undefined && result.code == EMTPY_VALUE_ERROR_CODE){
	   			bootbox.alert(DATA_RETURN_ERROR + ' '+ result.message);
	  			closeOverLay();
	  			return ;
	  		 }
	   		 
    		 if(result!=null && result!= undefined && result.code == SERVICE_SOAP_ERROR_CODE){
    			 bootbox.alert(SEND_RETURN_REQUEST_KO+ ' '+ result.message);
    			 closeOverLay();
    			 return ;
    		 }
    		 
    		 bootbox.alert(SEND_RETURN_REQUEST_KO+ ' '+ result);
    		 
			closeOverLay();
		});
	}
	
	checkNumberDestroyToReversal = function(data) {
		overLoading("loading...");
		var msisdn = StringUtilNVL(data.msisdn);
		
		var url = eim_url + "/bs/return_request/check_msisdn_destroy?msisdn="+msisdn;
		$http.post(url, data).success(function(result) {
			if(result.code == MSISDN_DESTROY_KO){
				closeOverLay();
				bootbox.alert(MSISDN_DESTROY_KO_MESS);
				return;
			}
			$scope.dataTableSubscriberReversalOriginal.push(data);
	 		
			$scope.tableParamsSubscriberReversalOriginal = new NgTableParams({}, {
	 			dataset : $scope.dataTableSubscriberReversalOriginal
	 		});
			closeOverLay();
		}).error(function(data) {
			closeOverLay();
		});
	}
	
	 $scope.model={};  
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	msisdn: {
//                required: true,
//                maxlength: 15
            },
            statusReturn: {
//                required: true,
//                maxlength: 255
            },
            StartDate: {
//                required: true,
//                maxlength: 11
            },
            EndDate: {
//                required: true,
//                maxlength: 11
            }
        },
        messages: {
        	msisdn: {
	                required:" Yêu cầu nhập số thuê bao", 
	                maxlength: "Số thuê bao nhỏ hơn 10 ký tự."
	            },
	            statusReturn: {
	                required: "Yêu cầu nhập trạng thái hoàn trả",
	                maxlength: "Trạng thái hoàn trả không đúng"
	            },
	            StartDate: {
	                required: "Yêu cầu nhập ngày bắt đầu",
	                maxlength: "Ngày không đúng định dạng."
	            },
	            EndDate: {
	            	 required: "Yêu cầu nhập ngày bắt đầu",
		                maxlength: "Ngày không đúng định dạng."
	            }
	        }
	    } 
	    $scope.StatusReturnSource  = [
	    	{ 'Id': '01', 'Title': 'Chưa hoàn trả' },
	        { 'Id': '02', 'Title': 'Đã hoàn trả' },
	        { 'Id': '03', 'Title': 'Tất cả' },
	    ];
	 
	 $scope.searchListSubscriber = function() {
	 		$scope.searchResultSubscriberInfo = [];
	 		
	 		var msisdn = StringUtilNVL($("#idMsisdn").val());
	 		
	 		var transactionID = $scope.model.transactionId;
	 		if(!$scope.isFromValidate()){
	 			return;
	 		}
	 		
	 		var nprInput = {
	 			"msisdn" : msisdn,
	 			"transactionID" : transactionID
	 		};
	 		searchListSubscriber(nprInput);
	 	}
    
	//set trang thai da hoac dang hoan tra
	setReversalStatusSubscriber = function(listSubscriberInput){
		for(var i = 0; i< listSubscriberInput.length; i++){
			var subscriberElement = listSubscriberInput[i];
			
			if(subscriberElement.statusReversal == NPR_MESSAGE_NP_PROCESSING){
				subscriberElement.statusReversalStr = 'Đang hoàn trả';
				subscriberElement.statusReversal = true;
				
			}else if(subscriberElement.statusReversal == NP_RETURN_COMPLETED ){
				subscriberElement.statusReversalStr = 'Đã hoàn trả';
				subscriberElement.statusReversal = true;
			}else{
				subscriberElement.statusReversalStr = 'Chưa hoàn trả';
				subscriberElement.statusReversal = false;
			}
			
		}
	}
		
    $scope.onclickConfirmReturnOriginalRequest = function(){
    	bootboxConfirm(MESSAGE_HEADER_CONFIRM_RETURN_REQUEST, CONFIRM_MESSAGE_RETURN_REQUEST, $scope.confirmOK, $scope.confirmKO);
    }
    
    $scope.reversalListSubscriberToOriginalNetwork = function(){
    	
		var listNprSubscribers = []
		if($scope.dataTableSubscriberReversalOriginal != undefined){
			listNprSubscribers = $scope.getListNprSubscriber($scope.dataTableSubscriberReversalOriginal);
		}
		
		var dataInput = {
				comments: $scope.model.comments,
				listNprSubscribers : listNprSubscribers
		};
		
		if(listNprSubscribers.length ==0){
			bootbox.alert(MSISDN_REQUIRED);
			return ;
		}
		
		sendReversalRequestOriginalNetwork(dataInput);
    }
    
  	$scope.confirmOK = function(){
  		$scope.reversalListSubscriberToOriginalNetwork();
  	}
  	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.addNumberToListReversalOriginal = function(item){
    	
    	if($scope.dataTableSubscriberReversalOriginal.length >= MAX_LENGTH_RECORD_TABLE_MSISDN ){
    		bootbox.alert(MAX_MSISDN_TABLE);
    		return;
    	}
    	
    	var isSubscriberExist = $scope.checkSubscriberExist(item);
    	if(isSubscriberExist){
    		bootbox.alert(MSISDN_EXIST)
    		return;
    	}else{
    		checkNumberDestroyToReversal(item);
    	}
 		
    }
    
    $scope.deleteNumberToListReversalOriginal = function(item){
    	
 		angular.forEach( $scope.dataTableSubscriberReversalOriginal, function(objectRow, index){
      	   if(objectRow.nprSubscriberId == item.nprSubscriberId){
      	        $scope.dataTableSubscriberReversalOriginal.splice(index,1);   
      	   }
      	});
     	
 		$scope.tableParamsSubscriberReversalOriginal = new NgTableParams({}, {
 			dataset : $scope.dataTableSubscriberReversalOriginal
 		});
 		
    }
    
    $scope.getListNprSubscriber = function(tableParamsSubscriberReversalOriginal){
    	var listNprSubscriber = [];
    	for(var i = 0 ; i< tableParamsSubscriberReversalOriginal.length; i ++ ){
    		var nprElement = {
    				nprSubscriberId: tableParamsSubscriberReversalOriginal[i].nprSubscriberId,
    				msisdn: tableParamsSubscriberReversalOriginal[i].msisdn
    		};
    		listNprSubscriber.push(nprElement);
    	}
    	return listNprSubscriber;
    }
    
    $scope.checkSubscriberExist = function(item){
    	var isSubscriberExist = false;
    	for(var i = 0 ; i< $scope.dataTableSubscriberReversalOriginal.length; i ++ ){
    		if(item.nprSubscriberId == $scope.dataTableSubscriberReversalOriginal[i].nprSubscriberId
    				&& item.msisdn == $scope.dataTableSubscriberReversalOriginal[i].msisdn){
    			isSubscriberExist = true;
    			break;
    		}
    		
    	}
    	return isSubscriberExist;
    }
    
    $scope.isFromValidate = function(){
    	var transactionId = StringUtilNVL($scope.model.transactionId);

    	var msisdn = StringUtilNVL($("#idMsisdn").val());
    	
    	if(msisdn == EMPTY_VALUE && transactionId == EMPTY_VALUE){
    		bootbox.alert(TRANS_MSISND_REQUIRED);
    		return false;
    	}
    	
    	return true;
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

//check field is not empty
//return true if field not empty
//return false if field empty
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