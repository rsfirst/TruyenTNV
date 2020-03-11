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

var DOWNLOAD_ERROR = "Có lỗi xảy ra trong quá trình download file !";

var TAB_NPR_LINK = "thong-tin-chuyen-mang";

app_vnm.controller('ctrl-portout', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$localStorage, $http, NgTableParams) {
	
	// message
	PAGE_HEADER = $translate.instant('vnm.mnp_message.mnp_portout.page.title');

	CONFIRM_MESSAGE_ACCEPT_PORTOUT = $translate.instant('vnm.mnp_message.mnp_portout.mess.confirm.accept.port.out');

	CONFIRM_MESSAGE_REJECT_PORTOUT = $translate.instant('vnm.mnp_message.mnp_portout.mess.confirm.reject.port.out');

	REASON_REJECT_REQUIRED = $translate.instant('vnm.mnp_message.mnp_portout.mess.reason.reject.required');

	REASON_VIOLATIN_REQUIRED = $translate.instant('vnm.mnp_message.mnp_portout.mess.reason.violation.required');

	MESS_REQUIRED_VIOLATION_NPR_BY_APPROVE_NPR = $translate.instant('vnm.mnp_message.mnp_portout.mess.required.approve.violation.by.approve.npr');

	MESS_NPR_MESSAGE_ACCEPT_CODE_OK = $translate.instant('vnm.mnp_message.mnp_portout.mess.send.accept.success');

	MESS_NPR_MESSAGE_ACCEPT_CODE_KO = $translate.instant('vnm.mnp_message.mnp_portout.mess.send.accept.error');

	MESS_NPR_MESSAGE_REJECT_CODE_OK = $translate.instant('vnm.mnp_message.mnp_portout.mess.send.reject.success');

	MESS_NPR_MESSAGE_REJECT_CODE_KO = $translate.instant('vnm.mnp_message.mnp_portout.mess.send.reject.error');

	DATA_NOT_FOUND_PORT_OUT = $translate.instant('vnm.mnp_message.mnp_portout.data.port.out.not.found');

	CONDITION_SEARCH_REQUIRED = $translate.instant('vnm.mnp_message.mnp_portout.search.one.conditional.required');

	START_DATE_END_DATE_ERROR = $translate.instant('vnm.mnp_message.mnp_portout.search.date.start.end.error');

	MESSAGE_ALERT_START_DATE = $translate.instant('vnm.mnp_message.mnp_portout.search.date.start.error');

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

	$scope.item = "";
	
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
		var url = eim_url + "/bs/mnp_port_out/list_subscriber";
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
			closeOverLay();
		});
	}

	// send confirm accept portout service
	sendConfirmAcceptPortOutService = function(data) {
		var url = eim_url + "/bs/mnp_port_out/send_accept_portout";
		$http.post(url, data).success(function(response) {
			if (response != undefined && response != null && response.code == NPR_MESSAGE_ACCEPT_CODE_OK) {
				bootbox.alert(MESS_NPR_MESSAGE_ACCEPT_CODE_OK);
				closeOverLay();
			}
			closeOverLay();
		}).error(function(response) {
			bootbox.alert(MESS_NPR_MESSAGE_ACCEPT_CODE_KO + " " + response.message);
			closeOverLay();
		});
	}

	// send confirm reject portout service
	sendConfirmRejectPortOutService = function(data) {
		var url = eim_url + "/bs/mnp_port_out/send_reject_portout";
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

	// on approve npr change
	// if approve npr = approve, set rejectReason = empty
	$scope.onApproveNPRChange = function() {
		if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_ACCEPT) {
			$scope.model.rejectReason = EMPTY_VALUE;
			// disabled reason reject
			$scope.approvedViolation = false;
			$scope.rejectReasonDis = true;
			document.getElementById("rejectReasonId").style.height = "24px";
		}

		if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_REJECT) {
			$scope.model.rejectReason = EMPTY_VALUE;
			$scope.model.violationReason = EMPTY_VALUE;
			// disabled reason reject
			$scope.rejectReasonDis = false;
			document.getElementById("rejectReasonId").style.height = "20%";
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

	$scope.onclickTabDanhSach = function(){
		if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_ACCEPT) {
			document.getElementById("rejectReasonId").style.height = "24px";
		}else if( StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_REJECT){
			document.getElementById("rejectReasonId").style.height = "24%";
		}
	}
	
	// view information portout detail
	$scope.viewInformationPortOutDetail = function(item) {
		
		$scope.rowHighlightNPRPortOut = SELECT_NONE_INDEX;
		$scope.rowHighlightSubscriber = SELECT_NONE_INDEX;

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

	//lay ly do tu choi chuyen mang tu id
	$scope.getReasontextById = function(listReasonSource, reasonId){
		var reasonText = '';
		for(var i = 0; i< listReasonSource.length; i ++){
			if(listReasonSource[i].Id == reasonId){
				reasonText = listReasonSource[i].TitleFull;
				break;
			}
		}
		if(reasonText.length >0){
			return '+' + reasonText;
		}else{
			return '';
		}
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
			}else{
				listSubscriberPorout[i].approveViolationStr = EMPTY_VALUE;
			}

			// set text violation reason
			if (listSubscriberPorout[i].violationReason == VIOLATION_REASON_HUK01) {
				listSubscriberPorout[i].violationReasonStr = VIOLATION_REASON_HUK01_TEXT;
			} else if (StringUtilNVL(listSubscriberPorout[i].violationReason) == VIOLATION_REASON_HUK02) {
				listSubscriberPorout[i].violationReasonStr = VIOLATION_REASON_HUK02_TEXT;
			}else{
				listSubscriberPorout[i].violationReasonStr = EMPTY_VALUE;
			}
			
			var listRejectReasonText = [];
			if(listSubscriberPorout[i].rejectReason!=undefined && listSubscriberPorout[i].rejectReason != null){
				var listRejectReason = listSubscriberPorout[i].rejectReason.split(",");
				for(var j=0; j<listRejectReason.length; j++){
					var reasonText = $scope.getReasontextById($scope.RejectSource, listRejectReason[j]);
					listRejectReasonText.push(reasonText);
				}
			}
			listSubscriberPorout[i].listRejectReasonText = listRejectReasonText;
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
	
	$scope.setRejectReasonFromList = function(listReasonReject){
		var reasonReject = "";
		for(var i =0; i<listReasonReject.length; i++){

			if(listReasonReject[i]!=null && listReasonReject[i] !=undefined){
				reasonReject = reasonReject+","; 
			}
		}
		if(reasonReject.endsWith(",")){
			reasonReject = StringUtilNVL(reasonReject.substring(0,reasonReject.lastIndexOf(",")));
		}
		return reasonReject;
	}

	// edit subscriber information
	$scope.editInformationPortOut = function() {
		if ($scope.rowHighlightSubscriber != SELECT_NONE_INDEX) {
			$scope.setDisabledForDataSubscriber(false);
			$scope.isOpenBtnUpdate = true;
		}
		
		if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_ACCEPT) {
			$scope.rejectReasonDis = true;
			$scope.approvedViolation = false;
		}else if( StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_REJECT){
			$scope.rejectReasonDis = false;
			$scope.approvedViolation = true;
		}
		
	}

	$scope.updateItemSubscriberPortOut = function() {
		if ($scope.rowHighlightSubscriber != SELECT_NONE_INDEX) {

			var checkReasonReject = $scope.checkReasonReject($scope.model.approveNPR, $scope.model.rejectReason)
			if (checkReasonReject) {
				bootbox.alert(REASON_REJECT_REQUIRED);
				return;
			}

			if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_ACCEPT) {
				if (StringUtilNVL($scope.model.approveViolation) == EMPTY_VALUE) {
					bootbox.alert(MESS_REQUIRED_VIOLATION_NPR_BY_APPROVE_NPR);
					return;
				}

			}

			var checkReasonViolation = $scope.checkReasonViolation($scope.model.approveViolation, $scope.model.violationReason)
			if (checkReasonViolation) {
				bootbox.alert(REASON_VIOLATIN_REQUIRED);
				return;
			}

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
		}
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
			if (reasonReject.length==0) {
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
		bootboxConfirm(PAGE_HEADER, CONFIRM_MESSAGE_ACCEPT_PORTOUT, $scope.confirmAcceptPortOut, $scope.confirmKO);
	}

	$scope.confirmAcceptPortOut = function() {
		overLoading("Loading...");
		var transactionIdInput = StringUtilNVL($scope.rowHighlightNPRPortOut.cchTransId);
		var dataAcceptConfirm = {
			"transactionID" : transactionIdInput,
			"listNprSubscribers" : $scope.dataTableSubscriberPortOut
		}
		sendConfirmAcceptPortOutService(dataAcceptConfirm);
	}

	$scope.onclickConfirmRejectPortOut = function() {
		bootboxConfirm(PAGE_HEADER, CONFIRM_MESSAGE_REJECT_PORTOUT, $scope.confirmRejectPortOut, $scope.confirmKO);
	}

	$scope.confirmRejectPortOut = function() {
		overLoading("Loading...");
		var transactionIdInput = StringUtilNVL($scope.rowHighlightNPRPortOut.cchTransId);
		var dataRejectConfirm = {
			"transactionID" : transactionIdInput,
			"listNprSubscribers" : $scope.dataTableSubscriberPortOut
		}
		sendConfirmRejectPortOutService(dataRejectConfirm);
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
		
		if (StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_ACCEPT) {
			document.getElementById("rejectReasonId").style.height = "24px";
		}else if( StringUtilNVL($scope.model.approveNPR) == APPROVE_NPR_REJECT){
			document.getElementById("rejectReasonId").style.height = "24%";
		}

		$scope.approvedViolation = isDis;
		$scope.reasonViolationDis = true;
	}

	$scope.setDisabledForDataSubscriber(true);

	$scope.bootboxAlertReloadPage = function(title, message) {
		bootbox.alert({
			size : "medium",
			title : title,
			message : message,
			callback : function() {
				$scope.resetAllFormPrepaid($scope);
			}
		})
	}

	$scope.ApproveSource = [ {
		'Id' : 'APPROVED',
		'Title' : 'Có hậu kiểm'
	}, {
		'Id' : 'REJECT',
		'Title' : 'Không hậu kiểm'
	}, ];

	$scope.ApproveNPRSource = [ {
		'Id' : 'APPROVED',
		'Title' : 'Đồng ý'
	}, {
		'Id' : 'REJECT',
		'Title' : 'Từ chối'
	}, ];

	$scope.RejectSource = [
			{
				'Id' : 'DNO02',
				'TitleSelected' : '02.Số Chứng minh thư nhân dân, Ngày cấp, Nơi cấp ',
				'Title' : [ "02.Số Chứng minh thư nhân dân, Ngày cấp, Nơi cấp ", "chủ thuê bao/ cá nhân đại diện tổ chức dùng để đăng ",
						"ký thông tin thuê bao tại DNO không đúng ", "với  số CMTND chủ thuê bao dùng để đăng ký chuyển mạng" ],
						'TitleFull':'02.Số Chứng minh thư nhân dân, Ngày cấp, Nơi cấp chủ thuê bao/ cá nhân đại diện tổ chức dùng để đăng ký thông tin thuê bao tại DNO không đúng với số CMTND chủ thuê bao dùng để đăng ký chuyển mạng.'
			},
			{
				'Id' : 'DNO03',
				'TitleSelected' : '03.Số Hộ chiếu, Ngày cấp, Nơi cấp chủ thuê bao ',
				'Title' : [ "03.Số Hộ chiếu, Ngày cấp, Nơi cấp chủ thuê bao/cá nhân ", "đại diện tổ chức dùng để đăng ký thông tin thuê bao tại ",
						"DNO không đúng với  số Hộ chiếu chủ thuê bao dùng để đăng ký chuyển mạng" ],
				'TitleFull':'Số Hộ chiếu, Ngày cấp, Nơi cấp chủ thuê bao/ cá nhân đại diện tổ chức dùng để đăng ký thông tin thuê bao tại DNO không đúng với  số Hộ chiếu chủ thuê bao dùng để đăng ký chuyển mạng.'
			},
			{
				'Id' : 'DNO04',
				'TitleSelected' : '04.Số Thẻ căn cước, Ngày cấp, Nơi cấp chủ thuê bao/ ',
				'Title' : [ "04.Số Thẻ căn cước, Ngày cấp, Nơi cấp chủ thuê bao/ ", "cá nhân đại diện tổ chức dùng để đăng ký thông tin thuê bao ",
						"tại DNO không đúng với  ", "số Thẻ căn cước chủ thuê bao dùng để đăng ký chuyển mạng.", ],
				'TitleFull':'04.Số Thẻ căn cước, Ngày cấp, Nơi cấp chủ thuê bao/ cá nhân đại diện tổ chức dùng để đăng ký thông tin thuê bao tại DNO không đúng với  số Thẻ căn cước chủ thuê bao dùng để đăng ký chuyển mạng.'
			},
			{
				'Id' : 'DNO05',
				'TitleSelected' : '05.Quyết định thành lập/Giấy chứng nhận đăng ký',
				'Title' : [ "05.Quyết định thành lập/Giấy chứng nhận đăng ký", "kinh doanh/giấy phép thành lập/giấy phép hoạt ",
						"động của tổ chức đã đăng ký thông tin thuê bao tại ", "DNO không khớp với thông tin thuê bao dùng để đăng ", "ký chuyển mạng." ],
				'TitleFull':'05.Quyết định thành lập/Giấy chứng nhận đăng ký kinh doanh/giấy phép thành lập/giấy phép hoạt động của tổ chức đã đăng ký thông tin thuê bao tại DNO không khớp với thông tin thuê bao dùng để đăng ký chuyển mạng.'
			},
			{
				'Id' : 'DNO06',
				'TitleSelected' : '06.Số thuê bao không ở trong trạng thái hoạt động ',
				'Title' : [ "06.Số thuê bao không ở trong trạng thái hoạt động ", "2 chiều của DNO." ],
				'TitleFull':'06.Số thuê bao không ở trong trạng thái hoạt động 2 chiều của DNO.'
			},
			{
				'Id' : 'DNO07',
				'TitleSelected' : '07.Vi phạm hợp đồng cung cấp và sử dụng dịch vụ viễn ',
				'Title' : [ "07.Vi phạm hợp đồng cung cấp và sử dụng dịch vụ viễn ", "thông hoặc điều kiện giao dịch chung/ các cam kết đã ", "ký với DNO." ],
				'TitleFull':'07.Vi phạm hợp đồng cung cấp và sử dụng dịch vụ viễn thông hoặc điều kiện giao dịch chung/ các cam kết đã ký với DNO.'
			},
			{
				'Id' : 'DNO08',
				'TitleSelected' : '08.Thuê bao còn nợ cước ',
				'Title' : [ "08.Thuê bao còn nợ cước." ],
				'TitleFull':'08.Thuê bao còn nợ cước.'
			},
			{
				'Id' : 'DNO09',
				'TitleSelected' : '09.Cước nóng của thuê bao trả sau tại DNO ',
				'Title' : [ "09.Cước nóng của thuê bao trả sau tại DNO ", "lớn hơn X đồng." ],
				'TitleFull':'09.Cước nóng của thuê bao trả sau tại DNO lớn hơn X đồng.'
			},
			{
				'Id' : 'DNO10',
				'TitleSelected' : '10.Thuê bao đang sử dụng dịch vụ chuyển vùng quốc tế; ',
				'Title' : [ "10.+ Thuê bao đang sử dụng dịch vụ chuyển vùng quốc tế; ", "Hoặc thuê bao ngừng sử dụng dịch vụ chuyển vùng quốc tế  ",
						"đến thời điểm đăng ký chuyển mạng nhỏ hơn 60 ngày" ],
				'TitleFull':'10.Thuê bao đang sử dụng dịch vụ chuyển vùng quốc tế; + Hoặc thuê bao ngừng sử dụng dịch vụ chuyển vùng quốc tế đến thời điểm đăng ký chuyển mạng nhỏ hơn 60 ngày'
			},
			{
				'Id' : 'DNO11',
				'TitleSelected' : '11.Thuê bao đang treo dịch vụ vì các lý do đặc biệt về ',
				'Title' : [ "11.Thuê bao đang treo dịch vụ vì các lý do đặc biệt về ", "pháp lý như: số thuê bao đang bị tranh chấp, bị truy tố,",
						" rao vặt trái phép, SMS spam." ],
				'TitleFull':'11.Thuê bao đang treo dịch vụ vì các lý do đặc biệt về pháp lý như: số thuê bao đang bị tranh chấp, bị truy tố, rao vặt trái phép, SMS spam.'
			}, {
				'Id' : 'DNO12',
				'TitleSelected' : '12.Đang trong quá trình tranh chấp hoặc thực hiện ',
				'Title' : [ "12.Đang trong quá trình tranh chấp hoặc thực hiện ", "chuyển quyền sở hữu số thuê bao di động.", ],
				'TitleFull':'12.Đang trong quá trình tranh chấp hoặc thực hiện chuyển quyền sở hữu số thuê bao di động.'
			}, {
				'Id' : 'DNO14',
				'TitleSelected' : '14.Các số thuê bao trong 1 YCCM không cùng thuộc 1 hợp đồng',
				'Title' : [ "14.Các số thuê bao trong 1 YCCM không cùng ", "thuộc 1 hợp đồng" ],
				'TitleFull':'14.Các số thuê bao trong 1 YCCM không cùng thuộc 1 hợp đồng'
			}, {
				'Id' : 'DNO15',
				'TitleSelected' : '15.Danh sách các số MSISDNs chuyển mạng chỉ là',
				'Title' : [ "15.Danh sách các số MSISDNs chuyển mạng chỉ là", " 1 phần của hợp đồng Khách hàng đã ký với DNO." ],
				'TitleFull':'15.Danh sách các số MSISDNs chuyển mạng chỉ là 1 phần của hợp đồng Khách hàng đã ký với DNO.'
			},
			{
				'Id' : 'DNO16',
				'TitleSelected' : '16.Thuê bao hòa mạng lần đầu tại nhà mạng gốc',
				'Title' : [ "16.Thuê bao hòa mạng lần đầu tại nhà mạng gốc chưa ","hoạt động đủ 06 tháng" ],
				'TitleFull':'16.Thuê bao hòa mạng lần đầu tại nhà mạng gốc chưa hoạt động đủ 06 tháng'
			},
			
			];

	$scope.ViolationReasonSource = [ {
		'Id' : 'HUK01',
		'Title' : 'HT thanh toán Bill cước tổng'
	}, {
		'Id' : 'HUK02',
		'Title' : 'HT thanh lý hợp đồng'
	} ];

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