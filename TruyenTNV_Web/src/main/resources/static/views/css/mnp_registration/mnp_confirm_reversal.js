var CONFIRM_MESSAGE_ACCEPT_PORTOUT;
var CONFIRM_MESSAGE_REJECT_PORTOUT;

var PAGE_HEADER;

var EMPTY_VALUE = "";

var SELECT_NONE_INDEX = -1;

var APPROVE_NPR_ACCEPT = "APPROVED";
var APPROVE_NPR_ACCEPT_TEXT = "Đồng ý";

var APPROVE_NPR_REJECT = "REJECT";
var APPROVE_NPR_REJECT_TEXT = "Từ chối";

var APPROVE_VIOLATION_ACCEPT = "APPROVED";
var APPROVE_VIOLATION_ACCEPT_TEXT = "Có hậu kiểm";

var APPROVE_VIOLATION_REJECT = "REJECT";
var APPROVE_VIOLATION_REJECT_TEXT = "Không hậu kiểm";

var VIOLATION_REASON_HUK01 = "HUK01";
var VIOLATION_REASON_HUK01_TEXT = "HT thanh toán Bill cước tổng";

var VIOLATION_REASON_HUK02 = "HUK02";
var VIOLATION_REASON_HUK02_TEXT = "HT thanh lý hợp đồng";

var BREAK_LINE = "<br/>";
var START_DATE_END_DATE_ERROR;
var MESSAGE_ALERT_START_DATE;
var CONDITION_SEARCH_REQUIRED;
var DATA_NOT_FOUND_PORT_OUT;

var REASON_REJECT_REQUIRED;
var REASON_VIOLATIN_REQUIRED;

var MESS_REQUIRED_VIOLATION_NPR_BY_APPROVE_NPR;

var NPR_MESSAGE_ACCEPT_CODE_OK = 90030;
var MESS_NPR_MESSAGE_ACCEPT_CODE_OK;
var MESS_NPR_MESSAGE_ACCEPT_CODE_KO;

var NPR_MESSAGE_REJECT_CODE_OK = 90031;
var MESS_NPR_MESSAGE_REJECT_CODE_OK;
var MESS_NPR_MESSAGE_REJECT_CODE_KO;
var MAX_FILE_UPLOAD_MESS;
var DOWNLOAD_ERROR = "Có lỗi xảy ra trong quá trình download file !";
var MAX_TOTAL_FILE_UPLOAD;
var TAB_NPR_LINK = "thong-tin-khach-hang-va-thue-bao";

var DOCUMENT_TYPE = "DOC_REVERSAL_FILE";
var ACCEPT_REVERSAL_ALERT = 90036;
var FORCE_CONFIRM_MESSAGE_ACCEPT_PORTOUT ;

app_vnm.controller('ctrl-portout', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$localStorage, $http, NgTableParams) {
	//
	// message
	PAGE_HEADER = $translate.instant('vnm.mnp_message.confirm_reversal.page.title');
	
	CONFIRM_MESSAGE_REJECT_PORTOUT = $translate.instant('vnm.mnp_message.confirm_reversal.mess.confirm.reject.port.out');

	MAX_FILE_UPLOAD_MESS = $translate.instant('vnm.mnp_message.registration.prepaid.info.npr.file.max.length');
	
	CONFIRM_MESSAGE_ACCEPT_PORTOUT = $translate.instant('vnm.mnp_message.confirm_reversal.mess.confirm.accept.port.out');

	CONFIRM_MESSAGE_ACCEPT_PORTOUT = $translate.instant('vnm.mnp_message.confirm_reversal.mess.confirm.accept.port.out');
	
	FORCE_CONFIRM_MESSAGE_ACCEPT_PORTOUT = $translate.instant('vnm.mnp_message.confirm_reversal.mess.force.confirm.accept.port.out');

	REASON_REJECT_REQUIRED = $translate.instant('vnm.mnp_message.confirm_reversal.mess.reason.reject.required');

	REASON_VIOLATIN_REQUIRED = $translate.instant('vnm.mnp_message.confirm_reversal.mess.reason.violation.required');

	MESS_REQUIRED_VIOLATION_NPR_BY_APPROVE_NPR = $translate.instant('vnm.mnp_message.confirm_reversal.mess.required.approve.violation.by.approve.npr');

	MESS_NPR_MESSAGE_ACCEPT_CODE_OK = $translate.instant('vnm.mnp_message.confirm_reversal.mess.send.accept.success');

	MESS_NPR_MESSAGE_ACCEPT_CODE_KO = $translate.instant('vnm.mnp_message.confirm_reversal.mess.send.accept.error');

	MESS_NPR_MESSAGE_REJECT_CODE_OK = $translate.instant('vnm.mnp_message.confirm_reversal.mess.send.reject.success');

	MESS_NPR_MESSAGE_REJECT_CODE_KO = $translate.instant('vnm.mnp_message.confirm_reversal.mess.send.reject.error');

	DATA_NOT_FOUND_PORT_OUT = $translate.instant('vnm.mnp_message.confirm_reversal.data.port.out.not.found');

	CONDITION_SEARCH_REQUIRED = $translate.instant('vnm.mnp_message.confirm_reversal.search.one.conditional.required');

	START_DATE_END_DATE_ERROR = $translate.instant('vnm.mnp_message.confirm_reversal.search.date.start.end.error');

	MESSAGE_ALERT_START_DATE = $translate.instant('vnm.mnp_message.confirm_reversal.search.date.start.error');

	MAX_TOTAL_FILE_UPLOAD = $translate.instant('vnm.mnp_message.registration.prepaid.info.file.total.file.size');;
	
	var BTN_SEND_OK = $translate.instant('vnm.form_mnp.mnp_confirm_reversal.npr.btn.send.ok');
	var BTN_SEND_CANCEL = $translate.instant('vnm.form_mnp.mnp_confirm_reversal.npr.btn.send.cancel');
	
	var nprFormDataInput;

	$scope.rowHighlightNPRPortOut = SELECT_NONE_INDEX;
	$scope.rowHighlightSubscriber = SELECT_NONE_INDEX;

	$scope.isOpenBtnEdit = false;
	$scope.isOpenBtnUpdate = false;

	$scope.isOpenBtnAcceptAll = false;
	$scope.isOpenBtnNoneViolationAll = false;

	$scope.dataTableSubscriberPortOut = [];

	// set get shopname and staffID
	$scope.shopNameCustomer = StringUtilNVL($localStorage.clientContext.shop.shopName);
	$scope.shopCode = StringUtilNVL($localStorage.clientContext.shop.shopCode);
	$scope.shopId = StringUtilNVL($localStorage.clientContext.shop.shopId);

	$scope.staffCode = StringUtilNVL($localStorage.clientContext.shop.staffCode);
	$scope.staffId = StringUtilNVL($localStorage.clientContext.shop.staffId);

	$scope.model = {};

	getListNetworkType = function() {
		overLoading("Loading...");
		var url = eim_url + "/bs/SourceNetwork";
		$http.get(url).success(function(data) {
			if (data != undefined && data != null) {
				if (data.length != 0) {
					$scope.DonorSource = data;
				}
			}

			closeOverLay();
		}).error(function(response) {
			closeOverLay();
		});
	}

	// danh sách bản tin chuyển mạng đi
	searchListTransferNetworkPortOut = function(data) {
		var url = eim_url + "/bs/mnp_confirm_reversal/list_subscriber";
		$http.post(url, data).success(function(result) {
			$scope.dataTableNPRPortOut = result;
			if ($scope.dataTableNPRPortOut.length > 0) {

				$scope.tableParamsNPRPortOut = new NgTableParams({}, {
					dataset : result
				});
				closeOverLay();
			} else {
				closeOverLay();
				bootbox.alert(DATA_NOT_FOUND_PORT_OUT);
			}
		}).error(function(response) {
			if("403" == response.status){
				bootbox.alert(response.status + " : " + response.message);
			} else {
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			}
			closeOverLay();
		});
	}

	// send confirm accept portout service
	sendConfirmAcceptPortOutService = function(data) {
		var url = eim_url + "/bs/mnp_confirm_reversal/send_accept_reversal";
		$http.post(url, data).success(function(response) {
			if (response != undefined && response != null && response.code == NPR_MESSAGE_ACCEPT_CODE_OK) {
				bootbox.alert(MESS_NPR_MESSAGE_ACCEPT_CODE_OK);
				closeOverLay();
			}
			closeOverLay();
		}).error(function(response) {
			if(response.code == ACCEPT_REVERSAL_ALERT){
				var messageAlert = "";
				var listCodeMess = response.listResult;
				for(var i=0; i < listCodeMess.length ; i++){
					var messServer = "+ "+ $translate.instant('vnm.mnp_message.confirm_reversal.mess.server.'+listCodeMess[i]);
					messageAlert = messageAlert + BREAK_LINE + messServer ;
				}
				
				$scope.isForceAccept = "true";
// bootboxConfirm(PAGE_HEADER, FORCE_CONFIRM_MESSAGE_ACCEPT_PORTOUT + messageAlert, $scope.confirmAcceptPortOut, $scope.confirmKO);
				bootboxConfirmWithTextButton(PAGE_HEADER, FORCE_CONFIRM_MESSAGE_ACCEPT_PORTOUT + messageAlert, $scope.confirmAcceptPortOut, $scope.confirmKO,BTN_SEND_OK
						,BTN_SEND_CANCEL);
				
				closeOverLay();
				return;
			}
			
			bootbox.alert(MESS_NPR_MESSAGE_ACCEPT_CODE_KO + " " + response.message);
			closeOverLay();
		});
	}

	// send confirm reject portout service
	sendConfirmRejectPortOutService = function(data) {
		var url = eim_url + "/bs/mnp_confirm_reversal/send_reject_reversal";
		$http.post(url, data).success(function(response) {
			if (response != undefined && response != null && response.code == NPR_MESSAGE_REJECT_CODE_OK) {
				bootbox.alert(MESS_NPR_MESSAGE_REJECT_CODE_OK);
				closeOverLay();
			}
			closeOverLay();
		}).error(function(response) {
			bootbox.alert(MESS_NPR_MESSAGE_REJECT_CODE_KO + " " + response.message);
			closeOverLay();
		});
	}

	getListNetworkType();

	dowloadFile = function(data) {
		overLoading("Loading...");
		var url = eim_url + '/bs/downloadFile';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert(DOWNLOAD_ERROR);
			closeOverLay();
		});
	}

	$scope.downloadFileAttachMent = function(attachFile) {
		dowloadFile(attachFile);
	}
	
	$scope.model.fileAttachments = [];

	var uploader = $scope.uploader = new FileUploader({
		 url: eim_url+'/bs/npr/upload'
	});

  // config uploader set limit queue
    
    uploader.queueLimit = 11;
    
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
        	
        	if(sizeFile <= MAX_TOTAL_FILE_LENGTH_BYTE){
        		return true;
        	}else{
        		var fileName = item.name;
        		var message = MESS_MAX_SIZE_ITEM.replace(/###/, setStrongLabel(fileName));
        		
        		bootbox.alert(message);
        		
        		return false;
        	}
        }
    });
    
    $scope.removeAllItem =  function(){
    	$scope.model.fileAttachments = [];
    	uploader.clearQueue()
    }
    
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
    
    // check dung luong file va toi da 10 file
    uploader.onAfterAddingAll = function(items){
    	var lengthOfqueue = uploader.queue.length;
    	if(lengthOfqueue > MAX_FILE_UPLOADER){
    		bootbox.alert(MAX_FILE_UPLOAD_MESS);
    		uploader.removeFromQueue(MAX_FILE_UPLOADER);
    	}
    	
    	var checkListTotalSize = getTotalSizeListFileUpload(uploader);
    	if(!checkListTotalSize){
    		bootbox.alert(MAX_TOTAL_FILE_UPLOAD);
    		uploader.removeFromQueue(lengthOfqueue-1);
    	}
    } 
    
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
    }
    
    uploader.onAfterAddingFile = function(item){
    	item._file.name = ConvertFileNameNoneUTF8(item.file.name);
    	item.file.name = ConvertFileNameNoneUTF8(item.file.name);
    } 
    
	// on approve npr change
	// if approve npr = approve, set rejectReason = empty
	$scope.onApproveNPRChange = function() {
		if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_ACCEPT) {
			$scope.model.rejectReason = EMPTY_VALUE;
			// disabled reason reject
			$scope.approvedViolation = false;
			$scope.rejectReasonDis = true;
		}

		if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_REJECT) {
			$scope.model.rejectReason = EMPTY_VALUE;
			// disabled reason reject
			$scope.rejectReasonDis = false;
			$scope.model.approveViolation = "";
			$scope.approvedViolation = true;
		}

	}

	// on approve violation change
	// if approve violation = reject, set Reason Violation = empty
	$scope.onApproveViolationChange = function() {
		if (StringUtilNVL($scope.model.approveViolation) == APPROVE_NPR_ACCEPT) {
			// disabled reason violation
			$scope.reasonViolationDis = false;
		}

		if (StringUtilNVL($scope.model.approveViolation) == APPROVE_NPR_REJECT) {
			// disabled reason violation
			$scope.model.violationReason = EMPTY_VALUE;
			$scope.reasonViolationDis = true;
		}

	}

	$scope.searchListNPRPortOut = function() {

		$scope.rowHighlightNPRPortOut = SELECT_NONE_INDEX;
		$scope.rowHighlightSubscriber = SELECT_NONE_INDEX;

		$scope.isOpenBtnEdit = false;
		$scope.isOpenBtnUpdate = false;

		$scope.isOpenBtnAcceptAll = false;
		$scope.isOpenBtnNoneViolationAll = false;

		$scope.dataTableNPRPortOut = [];

		$scope.resetTabInformationPortOut();

		$scope.nprDetailSelectedPortOutModal = null;
		$scope.dataTableSubscriberPortOut = [];
		$scope.tableSubscriberPortOut = new NgTableParams({}, {
			dataset : $scope.setAllRowValueSubscriberPortout($scope.dataTableSubscriberPortOut)
		});

		activaTab(TAB_NPR_LINK);

		var msisdn = StringUtilNVL($scope.model.msisdn);
		var transactionId = StringUtilNVL($scope.model.transactionID);
		var receiveNetwork = StringUtilNVL($scope.model.receiveNetwork);

		var startDateIn = StringUtilNVL($("#startDateID").val());
		var endDateIn = StringUtilNVL($("#endDateID").val());

		if (transactionId == EMPTY_VALUE && msisdn == EMPTY_VALUE && receiveNetwork == EMPTY_VALUE && startDateIn == EMPTY_VALUE && endDateIn == EMPTY_VALUE) {
			bootbox.alert(CONDITION_SEARCH_REQUIRED);
			return;
		} else {

			var today = moment();
			if (startDateIn != EMPTY_VALUE) {
				var startDateInCompare = moment(startDateIn, "DD/MM/YYYY");
				if (startDateInCompare > today) {
					bootbox.alert(MESSAGE_ALERT_START_DATE);
					return false
				}
			}

			var isDateAfter = checkDateIsAfterDate($("#startDateID").val(), $("#endDateID").val());
			if (!isDateAfter) {
				bootbox.alert(START_DATE_END_DATE_ERROR);
				return false
			}
		}

		if ($scope.frm_registration_prepaid.validate()) {
			overLoading("Loading...");
			var searchInput = {
				"transactionID" : transactionId,
				"msisdn" : msisdn,
				"receipient" : receiveNetwork,
				"startDate" : startDateIn,
				"endDate" : endDateIn
			};
		}
		searchListTransferNetworkPortOut(searchInput);
	}

	$scope.getNprHighlightSubscriber = function(item) {
		$scope.isOpenBtnEdit = true;
		$scope.rowHighlightSubscriber = item;
	}

	$scope.getNprHighlightPortOut = function(item) {
		$scope.rowHighlightNPRPortOut = item;
	}

	// view information portout detail
	$scope.viewInformationPortOutDetail = function(item) {
		$scope.rowHighlightNPRPortOut = SELECT_NONE_INDEX;
		$scope.rowHighlightSubscriber = SELECT_NONE_INDEX;
		$scope.model.commentsAccept = "";

		$scope.isOpenBtnUpdate = false;
		$scope.isOpenBtnEdit = false;

		$scope.isOpenBtnAcceptAll = true;
		$scope.isOpenBtnNoneViolationAll = true;

		$scope.resetTabInformationPortOut();
		$scope.setDisabledForDataSubscriber(true);

		$scope.getNprHighlightPortOut(item);
		$scope.nprDetailSelectedPortOutModal = item;

		$scope.dataAttachmentPortOut = item.attachmentData;

		$scope.tableAttachmentDataPortOutDetail = new NgTableParams({}, {
			dataset : $scope.dataAttachmentPortOut
		});

		activaTab(TAB_NPR_LINK);

		$scope.dataTableSubscriberPortOut = angular.copy(item.nprSubscribers);
		$scope.dataTableSubscriberPortOut = $scope.setAllRowValueSubscriberPortout($scope.dataTableSubscriberPortOut);
		$scope.tableSubscriberPortOut = new NgTableParams({}, {
			dataset : $scope.dataTableSubscriberPortOut
		});
	}

	// change id to text to present in form
	$scope.setAllRowValueSubscriberPortout = function(listSubscriberPorout) {
		for (var i = 0; i < listSubscriberPorout.length; i++) {
			// set text approve npr
			if (listSubscriberPorout[i].approvedNPR == APPROVE_NPR_ACCEPT) {
				listSubscriberPorout[i].approvedNPRStr = APPROVE_NPR_ACCEPT_TEXT;
			} else if (StringUtilNVL(listSubscriberPorout[i].approvedNPR) == APPROVE_NPR_REJECT) {
				listSubscriberPorout[i].approvedNPRStr = APPROVE_NPR_REJECT_TEXT;
			}

			// set text approve violation
			if (listSubscriberPorout[i].approveViolation == APPROVE_NPR_ACCEPT) {
				listSubscriberPorout[i].approveViolationStr = APPROVE_VIOLATION_ACCEPT_TEXT;
			} else if (StringUtilNVL(listSubscriberPorout[i].approveViolation) == APPROVE_NPR_REJECT) {
				listSubscriberPorout[i].approveViolationStr = APPROVE_VIOLATION_REJECT_TEXT;
			}

			// set text violation reason
			if (listSubscriberPorout[i].violationReason == VIOLATION_REASON_HUK01) {
				listSubscriberPorout[i].violationReasonStr = VIOLATION_REASON_HUK01_TEXT;
			} else if (StringUtilNVL(listSubscriberPorout[i].violationReason) == VIOLATION_REASON_HUK02) {
				listSubscriberPorout[i].violationReasonStr = VIOLATION_REASON_HUK02_TEXT;
			}
		}

		return listSubscriberPorout;
	}

	// view subscriber detail set value of row into form
	$scope.viewSubscriberDetail = function(item) {
		$scope.resetTabInformationPortOut();
		$scope.setValueForTabPortOut(item);

		$scope.isOpenBtnUpdate = false;

		$scope.rowHighlightSubscriber = SELECT_NONE_INDEX;
		$scope.getNprHighlightSubscriber(item);
		$scope.setDisabledForDataSubscriber(true);
	}

	// set value for tab information by item
	$scope.setValueForTabPortOut = function(item) {
		$scope.model.subscriberNumber = StringUtilNVL(item.msisdn);
		$scope.model.accountType = StringUtilNVL(item.accountTypeStr);

		$scope.model.approveNPR = StringUtilNVL(item.approvedNPR);
		$scope.model.rejectReason = StringUtilNVL(item.rejectReason);

		$scope.model.approveViolation = StringUtilNVL(item.approveViolation);
		$scope.model.violationReason = StringUtilNVL(item.violationReason);
	}

	// edit subscriber information
	$scope.editInformationPortOut = function() {
		if ($scope.rowHighlightSubscriber != SELECT_NONE_INDEX) {
			$scope.setDisabledForDataSubscriber(false);
			$scope.isOpenBtnUpdate = true;
		}
	}

	$scope.updateItemSubscriberPortOut = function() {
		if ($scope.rowHighlightSubscriber != SELECT_NONE_INDEX) {

			var checkReasonReject = $scope.checkReasonReject($scope.model.approveNPR, $scope.model.rejectReason)
			if (checkReasonReject) {
				bootbox.alert(REASON_REJECT_REQUIRED);
				return;
			}

			/*
			 * if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_ACCEPT) { if (StringUtilNVL($scope.model.approveViolation) == EMPTY_VALUE) {
			 * bootbox.alert(MESS_REQUIRED_VIOLATION_NPR_BY_APPROVE_NPR); return; } }
			 * 
			 * var checkReasonViolation = $scope.checkReasonViolation($scope.model.approveViolation, $scope.model.violationReason) if (checkReasonViolation) {
			 * bootbox.alert(REASON_VIOLATIN_REQUIRED); return; }
			 */

			var formValue = {
				"approvedNPR" : StringUtilNVL($scope.model.approveNPR),
				"rejectReason" : StringUtilNVL($scope.model.rejectReason),
				"approveViolation" : StringUtilNVL($scope.model.approveViolation),
				"violationReason" : StringUtilNVL($scope.model.violationReason)
			};

			$scope.dataTableSubscriberPortOut = $scope.updateListSubscriberByItem($scope.dataTableSubscriberPortOut, formValue);
			$scope.dataTableSubscriberPortOut = $scope.setAllRowValueSubscriberPortout($scope.dataTableSubscriberPortOut);
			$scope.tableSubscriberPortOut = new NgTableParams({}, {
				dataset : $scope.dataTableSubscriberPortOut
			});

			$scope.isOpenBtnUpdate = false;
			$scope.setDisabledForDataSubscriber(true);
			
			// check disabled button reject
			var isButtonRejectDisabled = $scope.checkEnableBtnSendReject();
			
			if(isButtonRejectDisabled){
				$scope.removeAllItem();
			}
		}
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
	
	// update one item listsubscriber by value of form
	$scope.updateListSubscriberByItem = function(listSubscriberIn, formValue) {
		var nprSubscriberIdSelected = StringUtilNVL($scope.rowHighlightSubscriber.nprSubscriberId);

		if (listSubscriberIn.length > 0) {
			for (var i = 0; i < listSubscriberIn.length; i++) {
				var nprSubscriberId = StringUtilNVL(listSubscriberIn[i].nprSubscriberId);
				if (nprSubscriberIdSelected == nprSubscriberId) {
					listSubscriberIn[i].approvedNPR = StringUtilNVL(formValue.approvedNPR);
					listSubscriberIn[i].rejectReason = StringUtilNVL(formValue.rejectReason);
					listSubscriberIn[i].approveViolation = StringUtilNVL(formValue.approveViolation);
					listSubscriberIn[i].violationReason = StringUtilNVL(formValue.violationReason);
				}
			}
		}

		return listSubscriberIn;
	}

	$scope.updateAcceptAllPortOut = function() {
		// reset form subscriber
		$scope.rowHighlightSubscriber = SELECT_NONE_INDEX;
		$scope.resetTabInformationPortOut();

		$scope.dataTableSubscriberPortOut = $scope.updateAcceptAllPortOutListSubscriber($scope.dataTableSubscriberPortOut);
		$scope.tableSubscriberPortOut = new NgTableParams({}, {
			dataset : $scope.setAllRowValueSubscriberPortout($scope.dataTableSubscriberPortOut)
		});
	}

	// function check enabled btn send accept request
	$scope.checkEnableBtnSendAccept = function() {

		var checkEnableBtnResult = true;
		if ($scope.dataTableSubscriberPortOut.length == 0) {
			checkEnableBtnResult = false;
		}

		for (var i = 0; i < $scope.dataTableSubscriberPortOut.length; i++) {
			var rejectApprove = StringUtilNVL($scope.dataTableSubscriberPortOut[i].approvedNPR);
			if (rejectApprove != APPROVE_NPR_ACCEPT) {
				checkEnableBtnResult = false;
				break;
			}
		}
		return checkEnableBtnResult;
	}

	// function check enabled btn send reject request
	$scope.checkEnableBtnSendReject = function() {

		var checkEnableBtnResult = true;
		if ($scope.dataTableSubscriberPortOut.length == 0) {
			checkEnableBtnResult = false;
		}

		for (var i = 0; i < $scope.dataTableSubscriberPortOut.length; i++) {
			var rejectApprove = StringUtilNVL($scope.dataTableSubscriberPortOut[i].approvedNPR);
			if (rejectApprove != APPROVE_NPR_REJECT) {
				checkEnableBtnResult = false;
				break;
			}
		}
		return checkEnableBtnResult;
	}

	// update all accept port out for list subscriber
	$scope.updateAcceptAllPortOutListSubscriber = function(listSubscriberIn) {

		if (listSubscriberIn.length > 0) {
			for (var i = 0; i < listSubscriberIn.length; i++) {
				listSubscriberIn[i].approvedNPR = StringUtilNVL(APPROVE_NPR_ACCEPT);
				listSubscriberIn[i].approvedNPRStr = APPROVE_NPR_ACCEPT_TEXT;

				listSubscriberIn[i].rejectReason = EMPTY_VALUE;
				listSubscriberIn[i].rejectReasonStr = EMPTY_VALUE;
			}
		}

		return listSubscriberIn;
	}

	$scope.updateNoneViolationAllPortOut = function() {
		// reset form subscriber
		$scope.rowHighlightSubscriber = SELECT_NONE_INDEX;
		$scope.resetTabInformationPortOut();

		$scope.dataTableSubscriberPortOut = $scope.updateNoneViolationAllPortOutListSubscriber($scope.dataTableSubscriberPortOut);
		$scope.tableSubscriberPortOut = new NgTableParams({}, {
			dataset : $scope.setAllRowValueSubscriberPortout($scope.dataTableSubscriberPortOut)
		});
	}

	// update all violation port out for list subscriber
	$scope.updateNoneViolationAllPortOutListSubscriber = function(listSubscriberIn) {

		if (listSubscriberIn.length > 0) {
			for (var i = 0; i < listSubscriberIn.length; i++) {

				listSubscriberIn[i].approvedNPRStr = APPROVE_NPR_ACCEPT_TEXT;
				listSubscriberIn[i].approvedNPR = APPROVE_NPR_ACCEPT

				listSubscriberIn[i].approveViolation = APPROVE_VIOLATION_REJECT;
				listSubscriberIn[i].approveViolationStr = EMPTY_VALUE;

				listSubscriberIn[i].violationReason = EMPTY_VALUE;
				listSubscriberIn[i].violationReasonStr = EMPTY_VALUE;
			}
		}

		return listSubscriberIn;
	}
	// check all subscriber approve
	$scope.checkAllSubscriberApprove = function(listSubscriberIn) {
		var isAllSubscriberApprove = true;
		if (listSubscriberIn.lenght > 0) {
			for (var i = 0; i < listSubscriberIn.length; i++) {
				if (StringUtilNVL(listSubscriberIn[i].approvedNPR) != APPROVE_NPR_ACCEPT) {
					isAllSubscriberApprove = false;
					break;
				}
			}
		} else {
			isAllSubscriberApprove = false;
		}
		return isAllSubscriberApprove;
	}

	// check reason reject if approve npr reject
	// return true if approve npr = reject, reason = empty
	// else return false
	$scope.checkReasonReject = function(approveType, reasonReject) {
		var checkReasonRejectResult = false;
		if (StringUtilNVL(approveType) == APPROVE_NPR_REJECT) {
			if (StringUtilNVL(reasonReject) == EMPTY_VALUE) {
				checkReasonRejectResult = true;
			}
		}
		return checkReasonRejectResult;
	}

	// check reason reject if approve npr reject
	// return true if approve violation = approve, reason = empty
	// else return false
	$scope.checkReasonViolation = function(approveViolationType, reasonViolation) {
		var checkReasonViolationResult = false;
		if (StringUtilNVL(approveViolationType) == APPROVE_VIOLATION_ACCEPT) {
			if (StringUtilNVL(reasonViolation) == EMPTY_VALUE) {
				checkReasonViolationResult = true;
			}
		}
		return checkReasonViolationResult;
	}

	var idAttachMentVal = null;
	var idAttachMentTypeInput = null;

	$scope.uploadFileBeforeCreatedNPR = function() {
	}

	$scope.prepareCreateNPR = function() {
	}

	$scope.onclickConfirmAcceptPortOut = function() {
		$scope.isForceAccept = "false";
		bootboxConfirmWithTextButton(PAGE_HEADER, CONFIRM_MESSAGE_ACCEPT_PORTOUT, $scope.confirmAcceptPortOut, $scope.confirmKO, BTN_SEND_OK
				,BTN_SEND_CANCEL);
	}

	$scope.confirmAcceptPortOut = function() {
		overLoading("Loading...");
		var transactionIdInput = StringUtilNVL($scope.rowHighlightNPRPortOut.cchTransId);
		var originalCchTransIdIn = StringUtilNVL($scope.rowHighlightNPRPortOut.originalCchTransId);
		
		var dataAcceptConfirm = {
			"transactionID" : transactionIdInput,
			"checkForceAccept" : $scope.isForceAccept,
			"listNprSubscribers" : $scope.dataTableSubscriberPortOut,
			"comments":StringUtilNVL($scope.model.commentsAccept),
			"npr": $scope.rowHighlightNPRPortOut,
			
		}
		sendConfirmAcceptPortOutService(dataAcceptConfirm);
	}

	$scope.onclickConfirmRejectPortOut = function() {
		bootboxConfirmWithTextButton(PAGE_HEADER, CONFIRM_MESSAGE_REJECT_PORTOUT, $scope.confirmRejectPortOut, $scope.confirmKO, BTN_SEND_OK,BTN_SEND_CANCEL);
	}

	$scope.confirmRejectPortOut = function() {
		overLoading("Loading...");
		var transactionIdInput = StringUtilNVL($scope.rowHighlightNPRPortOut.cchTransId);
		
		var checkFileAllisUploaded = true;
	  	if(uploader.queue.length > 0){
	  		checkFileAllisUploaded = checkAllFileOfQueueUploaded(uploader);
	  	}
	  	
	  	if(checkFileAllisUploaded == false){
	  		uploadAllItemByList(uploader);
	  	}else{
			var dataRejectConfirm = {
					"transactionID" : transactionIdInput,
					"listNprSubscribers" : $scope.dataTableSubscriberPortOut,
					"comments":StringUtilNVL($scope.model.commentsAccept),
					"listAttachMentData": $scope.model.fileAttachments 
				}
				sendConfirmRejectPortOutService(dataRejectConfirm);
	  	}
  		
  		 // check all file in create npr uploaded
      	uploader.onCompleteAll = function () {
    		var dataRejectConfirm = {
    				"transactionID" : transactionIdInput,
    				"listNprSubscribers" : $scope.dataTableSubscriberPortOut,
    				"comments":StringUtilNVL($scope.model.commentsAccept),
    				"listAttachMentData": $scope.model.fileAttachments 
    			}
    			sendConfirmRejectPortOutService(dataRejectConfirm);
      	};

	}
	
	$scope.confirmKO = function() {
		closeOverLay();
	}

	$scope.resetTabInformationPortOut = function() {
		$scope.model.subscriberNumber = EMPTY_VALUE;
		$scope.model.accountType = EMPTY_VALUE;

		$scope.model.approveNPR = EMPTY_VALUE;
		$scope.model.approveViolation = EMPTY_VALUE;

		$scope.model.rejectReason = EMPTY_VALUE;
		$scope.model.violationReason = EMPTY_VALUE;
		$scope.setDisabledForDataSubscriber(true);

		$scope.isOpenBtnUpdate = false;
		$scope.isOpenBtnEdit = false;
	}

	$scope.setDisabledForDataSubscriber = function(isDis) {
		$scope.subscriberNumberDis = true;
		$scope.accountTypeDis = true;

		$scope.approvedNprDis = isDis;
		$scope.rejectReasonDis = true;

		$scope.approvedViolation = isDis;
		$scope.reasonViolationDis = true;
	}

	$scope.setDisabledForDataSubscriber(true);



	$scope.ApproveNPRSource = [ {
		'Id' : 'APPROVED',
		'Title' : 'Đồng ý'
	}, {
		'Id' : 'REJECT',
		'Title' : 'Từ chối'
	}, ];

	$scope.RejectSource = [
		{
			'Id' : 'RNOREV01',
			'TitleSelected' : '01.Danh sách thuê bao không hoàn thành hậu kiểm không đúng ',
			'Title' : [ "01.Danh sách thuê bao không hoàn thành ", "hậu kiểm không đúng." ]
		}];


});

function overLoading(message) {
	App.blockUI({
		message : message
	});
	$(".blockOverlay").css("background-color", "#000000");
	$(this).css("opacity", "1");
}

function bootboxAlertInformation(title, message) {
	bootbox.alert({
		size : "medium",
		title : title,
		message : message,
		callback : function() {
		}
	})
}

function setStrongLabelWithTitle(titleIn, messageIn) {

	var result = "<div align='center'> " + "<strong> " + titleIn + "</strong> " + BREAK_LINE + messageIn + "</div>";
	return result;
}

function setStrongLabel(messageIn) {
	var result = "<strong> " + messageIn + "</strong> ";
	return result;
}

function activaTab(tabId) {
	$('.nav-tabs a[href="#' + tabId + '"]').tab('show');
};

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