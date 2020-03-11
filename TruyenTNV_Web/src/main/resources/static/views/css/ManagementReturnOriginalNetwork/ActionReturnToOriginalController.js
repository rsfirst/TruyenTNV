
var ROW_NONE_INDEX = -1;
var EMTPY_VALUE_ERROR_CODE  = 505;
var SUBSCRIBER_REVERSED_COMPLETED = 90008;
var MAX_LENGTH_RECORD_TABLE_MSISDN = 100;

var NPR_MESSAGE_NP_PROCESSING = "PROCESSING";

var NP_RETURN_COMPLETED = "COMPLETED";
var MSISDN_REQUIRED = "Xin hãy chọn thuê bao để hoàn trả về nhà mạng gốc!";
var MAX_LIST_MSISDN = "Danh sách số thuê bao tối đa 100 số !";

var MSISDN_EXIST = "Số thuê bao đã tồn tại trong danh sách hoàn trả số";
var DATA_NOT_FOUND = "Không tìm thấy dữ liệu";
var SEARCH_DATA_ERROR = "Có lỗi xảy ra trong quá trình tím kiếm dữ liệu !";

var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";
var LIST_MSISDN_ERROR = "Danh sách thuê bao không hợp lệ !";

var SEND_RETURN_REQUEST_OK = "Đã gửi yêu cầu hoàn trả số đến cục viễn thông ! Mã yêu cầu hoàn trả : ";
var SEND_RETURN_REQUEST_KO = "Lỗi. Không gửi được yêu cầu hoàn trả đến cục viễn thông ! ";

var MSISDN_DESTROY_KO = 90014;
var MSISDN_DESTROY_KO_MESS = "Số thuê bao chưa hủy trên hệ thống Vietnamobile. Hãy chọn số khác !";

var MESSAGE_HEADER_CONFIRM_ACTION_RETURN_REQUEST = "Xử lý thông báo trả số về nhà mạng gốc "; 
var CONFIRM_MESSAGE_ACTION_RETURN_REQUEST = "Bạn có đồng ý gửi yêu cầu trả số về nhà mạng gốc tới cục viễn thông ?";

app_vnm.controller('ctrl-action-return-original-network', 
	function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal,
			$location, $window,$filter, $localStorage, 
			$http, FileUploader , NgTableParams) {	
	
	searchListReversalNotification = function(data) {
		var url = eim_url + "/bs/return_notification_original/list_npr_return_notification";
		$scope.searchResultSubscriberInfo = [];
		$scope.dataTableSubscriberReversalOriginal = [];
		
		$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
			dataset : $scope.searchResultSubscriberInfo
		});
		
 		$scope.tableParamsSubscriberReversalOriginal = new NgTableParams({}, {
 			dataset : $scope.dataTableSubscriberReversalOriginal
 		});
 		
 		$scope.rowHighlightNPR = ROW_NONE_INDEX;
 		
		$http.post(url, data).success(function (result){
			$scope.listNPRNotificationReversal = result;
			if($scope.listNPRNotificationReversal.length>0){
				$scope.tableParams = new NgTableParams({}, {
					dataset : result
				});
				closeOverLay();
			}else{
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND);
			}
		}).error(function (data){
			bootbox.alert(SEARCH_DATA_ERROR);
    		closeOverLay();
    	 });
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
			bootbox.alert(FILE_DOWNLOAD);
			closeOverLay();
		});
	}
	
    $scope.downloadFileAttachMent = function(attachFile){
    	dowloadFile(attachFile);
    }
    
	$scope.rowHighlightNPR = ROW_NONE_INDEX;
	$scope.getNprHighlight = function(item) {
		$scope.rowHighlightNPR = item;
	}
	
	searchListSubscriberInfo = function(data, item) {
		overLoading("Loading...");
		$scope.searchResultSubscriberInfo = [];
		
		$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
			dataset : $scope.searchResultSubscriberInfo
		});
		
		$scope.getNprHighlight(item);
		var url = eim_url + "/bs/return_notification_original/list_subscriber_return_notification";
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
				bootbox.alert(LIST_MSISDN_ERROR);
			}
		}).error(function(data) {
			bootbox.alert(SEARCH_DATA_ERROR);
			closeOverLay();
		});
	}

	/*checkSubscriberReversedInDb = function(data) {
		overLoading("Loading...");
		var url = eim_url + "/bs/return_notification_original/check_subscriber_reversed";
		$http.post(url, data).success(function (result){
			
			if(result.code == SUBSCRIBER_REVERSED_COMPLETED){
				bootbox.alert("Số thuê bao đang trong quá trình hoàn trả. Hãy chọn số khác. ");
				closeOverLay();
				return ; 
			}
			
			$scope.dataTableSubscriberReversalOriginal.push(data);
	    	
	 		$scope.tableParamsSubscriberReversalOriginal = new NgTableParams({}, {
	 			dataset : $scope.dataTableSubscriberReversalOriginal
	 		});
	 		closeOverLay();
	 		
		}).error(function (data){
			closeOverLay();
    	});
	}*/
	
	
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
	
	sendReversalRequestOriginalNetwork = function(data) {
		overLoading("Loading...");
		
		var url = eim_url + "/bs/return_notification_original/send_return_request";
		$http.post(url, data).success(function(result) {
			bootbox.alert(SEND_RETURN_REQUEST_OK+ ' '+result.message);
			$scope.dataTableSubscriberReversalOriginal = [];
	 		$scope.tableParamsSubscriberReversalOriginal = new NgTableParams({}, {
	 			dataset : $scope.dataTableSubscriberReversalOriginal
	 		});
			closeOverLay();
			
		}).error(function(result) {
			
			bootbox.alert(SEND_RETURN_REQUEST_KO+' '+result.message);
			closeOverLay();
		});
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
	
	
	 $scope.model={};  
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	msisdn: {
//                required: true,
//                maxlength: 15
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
	 
    
    $scope.searchListReversalNotification = function () {
		overLoading("Loading...");
		var msisdn = $("#idMsisdn").val();
		var searchInput = {
				"startDate" : StringUtilNVL($("#startDateID").val()),
				"endDate" : StringUtilNVL($("#endDateID").val()),
				"msisdn" : msisdn
			};
		searchListReversalNotification(searchInput);
    }
    
    $scope.onclickConfirmReturnRequest = function(){
    	bootboxConfirm(MESSAGE_HEADER_CONFIRM_ACTION_RETURN_REQUEST, CONFIRM_MESSAGE_ACTION_RETURN_REQUEST, $scope.confirmOK, $scope.confirmKO);
    }
    
    $scope.reversalListSubscriberToOriginalNetwork = function(){
    	
    	var nprId = $scope.rowHighlightNPR.nprId;
    	var cchTransId = $scope.rowHighlightNPR.cchTransId;
		var listNprSubscribers = []
		if($scope.dataTableSubscriberReversalOriginal != undefined){
			listNprSubscribers = $scope.getListNprSubscriber($scope.dataTableSubscriberReversalOriginal);
		}
		
		if(nprId == undefined || nprId == null || listNprSubscribers.length ==0){
			bootbox.alert(MSISDN_REQUIRED);
			return ;
		}
		
		var dataInput = {
				transactionID: cchTransId,
				nprId: nprId,
				comments: $scope.model.comments,
				listNprSubscribers : listNprSubscribers
		};
		
		sendReversalRequestOriginalNetwork(dataInput);
    }
    
  	$scope.confirmOK = function(){
  		$scope.reversalListSubscriberToOriginalNetwork();
  	}
  	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.addNumberToListReversalOriginal = function(item){
    	
    	overLoading("Loading...");
    	
    	if($scope.dataTableSubscriberReversalOriginal.length >= MAX_LENGTH_RECORD_TABLE_MSISDN ){
    		closeOverLay();
    		bootbox.alert(MAX_LIST_MSISDN);
    		return;
    	}
    	closeOverLay();
    	var isSubscriberExist = $scope.checkSubscriberExist(item);
    	if(isSubscriberExist){
    		closeOverLay();
    		bootbox.alert(MSISDN_EXIST);
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