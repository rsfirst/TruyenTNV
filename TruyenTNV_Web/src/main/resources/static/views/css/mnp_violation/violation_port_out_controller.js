//var eim_url = "http://10.6.2.41:6060";
var EMPTY_VALUE = "";

var VIOLATION_UNCOMPLETE = "01";
var VIOLATION_COMPLETE = "02";

var VIOLATION_NRP_UNCOMPLETE = "VIOLATION";
var VIOLATION_NRP_COMPLETE = "CLEAR";
var VIOLATION_REVERSED = "REVERSED";

var FLAG_VIOLATION = "Y";
var FLAG_NONE_VIOLATION = "N";

var VIOLATION_NONE_INDEX = -1;

var VIOLATION_ACTION_RETURN = "01";
var VIOLATION_ACTION_RETURN_COMPLETE = "02";
var VIOLATION_ACTION_RETURN_OK = "03";

var VIOLATION_STATUS_ACCEPT_REVERSED= "03";

var VIOLATION_STATUS_MODEL = "nprStatusModel";
var EMTPY_VALUE_ERROR_CODE = 505;

var UPDATE_DB_STATUS_OK = 90001;

var UPDATE_DB_STATUS_KO = 90002;

var MESSAGE_HEADER_CONFIRM_VIOLATION = "Bản tin hậu kiểm số chuyển đi";
var CONFIRM_MESSAGE_SEND_VIOLATION = "Bạn có đồng ý gửi bản tin hậu kiẻm thuê bao chuyển mạng đi ?";

var CONFIRM_MESSAGE_UPDATE_VIOLATION = "Bạn có đồng cập nhật dữ liệu hậu kiểm cho thuê bao chuyển mạng đi ?";

var TYPE_NP_COMMITMENT_CHECKING = 'NP Commitment Checking';
var TYPE_NP_VIOLATION_CHECKING = 'NP Violation Checking';

var DOCUMENT_TYPE = "RNO_VIOLATION_FILE";

var PREPAID_NPR_HEADER = "Bản tin hậu kiểm";
var MESS_FORCE_ERROR = "Giao dịch chuyển mạng là trường hợp FORCE CASE. Bạn có muốn tiếp tục gửi tin?";

var VIOLATION_RESPONSE_FORCE_CASE = 90033;

var BREAK_LINE = "<br/>";

app_vnm.controller('ctr-violation-portout', function($scope, $rootScope, $translate,
		$compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $localStorage, $http, NgTableParams) {
	
	$scope.tableListSubscriberPopupResult = [];
	$scope.isDisabledReversed = false;
	
	$scope.dataTableAttacmentType = [];
	
	$scope.CHECK_FORCE_CASE = "N";
	
	searchNPRViolation = function(data) {
		var url = eim_url + "/bs/violation/data_violation_portout";
		$http.post(url, data).success(function(result) {
			$scope.searchResult = result;
			if ($scope.searchResult.length > 0) {
				// set item.violationsStatusNpr
				$scope.setViolationsStatusNpr($scope.searchResult);

				$scope.tableParams = new NgTableParams({}, {
					dataset : $scope.searchResult
				});
				
				if($scope.rowHighlightNPR != VIOLATION_NONE_INDEX){
					$scope.getListSubscriberInfo($scope.rowHighlightNPR);
				}
				closeOverLay();
			} else {
				closeOverLay();
				bootbox.alert("Không tìm thấy dữ liệu");
			}
		}).error(function(data) {
			closeOverLay();
			if("403" == data.status){
				bootbox.alert(data.status + " : " + data.message);
			} else {
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			}
		});
	}

	searchListNprActionAudit = function() {
		overLoading("Loading...");
		if ($scope.rowHighlightNPR == VIOLATION_NONE_INDEX) {
			bootbox.alert("Nhap du lieu");
			closeOverLay();
			return;
		}
		
		var data = {
			"transactionId":$scope.rowHighlightNPR.cchTransId,
			"nprId" : $scope.rowHighlightNPR.nprId
		};

		var url = eim_url + "/bs/violation/list_npg_request_log_violation";
		$http.post(url, data).success(function(result) {
			$scope.searchNPRNewsResult = result;
			if ($scope.searchNPRNewsResult.length > 0) {
				$scope.tableParamsNPRActionAudit = new NgTableParams({}, {
					dataset : result
				});
				closeOverLay();
			} else {
				closeOverLay();
//				bootbox.alert("Không tìm thấy dữ liệu");
			}
		}).error(function(data) {
			closeOverLay();
		});
	}

	searchListSubscriberInfo = function(data, item) {
		
		overLoading("Loading...");
		$scope.getNprHighlight(item);
		var url = eim_url + "/bs/violation/data_subscriber_portout";
		$http.post(url, data).success(function(result) {
			$scope.searchResultSubscriberInfo = $scope.setDataSubscriber(result);
			
			if ($scope.searchResultSubscriberInfo.length > 0) {
				$scope.tableParamsSubscriberInfo = new NgTableParams({}, {
					dataset : $scope.searchResultSubscriberInfo
				});

				$scope.changeAllSubscriberComplete(item);
				searchListNprActionAudit();
			} else {
				closeOverLay();
			}
		}).error(function(data) {
			closeOverLay();
		});
	}

	
	$scope.setDataSubscriber = function(listSubscriber){
		
		if($scope.isDisabledReversed){
			for(var i =0; i<listSubscriber.length;i++){
				listSubscriber[i].isDisabled = $scope.isDisabledReversed;
			}			
		}else{
			
			for(var i =0; i<listSubscriber.length;i++){
				if(listSubscriber[i].violationStatus == 'NONE'){
					listSubscriber[i].isDisabled = true;	
				}
				
			}
		}
		return listSubscriber;
		
	}
	
	updateNPRViolationPortout = function(data) {
		var url = eim_url + "/bs/violation/update_violation_portout";
		var nprViolationDataInput = {
			"transactionId" : $scope.model.transactionID,
			"msisdn" : $scope.model.msisdn,
			"startDate" : StringUtilNVL($("#startDate").val()),
			"endDate" : StringUtilNVL($("#endDate").val())
		};

		$http.post(url, data).success(function(result) {
			if (result.code == EMTPY_VALUE_ERROR_CODE) {
				bootbox.alert("Dữ liệu update không hợp lệ. Hãy nhập lại.");
				closeOverLay();
				return;
			}

			if (result.code == UPDATE_DB_STATUS_OK) {
				bootbox.alert("Cập nhật dữ liệu hậu kiểm thuê bao chuyển đi thành công!");
				closeOverLay();
				return;
			}
			
			if (result.code == UPDATE_DB_STATUS_KO) {
				bootbox.alert("Cập nhật dữ liệu hậu kiểm thuê bao chuyển đi không thành công!");
				closeOverLay();
				return;
			}
			
			searchNPRViolation(nprViolationDataInput);
			closeOverLay();
		}).error(function(response) {
			if (response.code == EMTPY_VALUE_ERROR_CODE) {
				
				var messageAlert = "";
				var listCodeMess = response.listResult;
				for(var i=0; i < listCodeMess.length ; i++){
					var messServer = "+ "+ $translate.instant('vnm.mnp_message.mnp_violation_port_out.'+listCodeMess[i]);
					messageAlert = messageAlert + BREAK_LINE + messServer ;
				}
				
				
				bootbox.alert(messageAlert);
				closeOverLay();
				return;
			}
			closeOverLay();
		});
	}

	callViolationCommitmentChecking = function(data) {
		var url = '';
		 
		data.checkForceCase = $scope.CHECK_FORCE_CASE;
		
		if($scope.modelTypeButtonViolation == TYPE_NP_COMMITMENT_CHECKING){
			url = eim_url + "/bs/violation/violation/commitment_checking";
		}
		
		if($scope.modelTypeButtonViolation == TYPE_NP_VIOLATION_CHECKING){
			url = eim_url + "/bs/violation/violation_violation_checking";
		}
		
		$http.post(url, data).success(function(result) {
			if($scope.rowHighlightNPR != VIOLATION_NONE_INDEX){
				$scope.getListSubscriberInfo($scope.rowHighlightNPR);
			}
			
			if(result != undefined && result != null && result.code == VIOLATION_RESPONSE_FORCE_CASE){
				 bootboxConfirm(PREPAID_NPR_HEADER, MESS_FORCE_ERROR, $scope.confirmCreateNPROK, $scope.confirmKO);
				 return;
			}
			 
			bootbox.alert("Gửi bản tin hậu kiểm thành công."+result.message);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert("Lỗi trong quá trình gửi bản tin hậu kiểm."+data.message);
			closeOverLay();
		});
	}

  	$scope.confirmCreateNPROK = function(){
  		$scope.CHECK_FORCE_CASE = "Y";
  		callViolationCommitmentChecking($scope.rowHighlightNPR);
  	}
  	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
	$scope.checkViolationStatusReversed = function(item){
		if(item.vnmViolationStatus == VIOLATION_STATUS_ACCEPT_REVERSED){
			return true;
		}else{
			return false;
		}
	}
	
	$scope.showPopupListSubscriber = function(idModal, data) {
		$scope.tableListSubscriberPopupResult = data;
		$scope.tableListSubscriberPopup = new NgTableParams({}, {
			dataset : data
		});
		$('#' + idModal).modal('show');
	}

	$scope.viewListSubscriberPopup = function(item) {
		var listSubscriberPopup = $scope
				.getListSubscriberViolation(item.nprSubscribers);
		$scope.showPopupListSubscriber("modalListSubscriberViolation",
				listSubscriberPopup);
	}

	$scope.getListSubscriberViolation = function(nprSubscribers) {
		var listSubscriberViolation = [];
		for (var i = 0; i < nprSubscribers.length; i++) {
			if (nprSubscribers[i].violationFlag == FLAG_VIOLATION) {
				listSubscriberViolation.push(nprSubscribers[i]);
			}
		}

		return listSubscriberViolation;
	}

	$scope.setViolationsStatusNpr = function(listNPR) {
		for (var i = 0; i < listNPR.length; i++) {
			listNPR[i].violationsStatusNpr = VIOLATION_STATUS_MODEL
					+ listNPR[i].cchTransId;
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
			bootbox.alert("Có lỗi xảy ra trong quá trình download file !");
			closeOverLay();
		});
	}

	$scope.model = {};
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			transactionID : {
			// required: true,
			// maxlength: 15
			},
			trangThaiHauKiem : {
			// required: true,
			// maxlength: 255
			},
			msisdn : {
			// required: true,
			// maxlength: 11
			},
			ttThuchien : {
			// required: true,
			// maxlength: 255
			},
			ngayDangKyChuyenMang : {
			// required: true,
			// maxlength: 11
			},
			ngayDKCMDen : {
			// required: true,
			// maxlength: 11
			},

			soCmt : {
			// required: true,
			// maxlength: 15
			}
		},
		messages : {
			transactionID : {
				required : " Yêu cầu nhập TransactionID",
				maxlength : "TransactionID 15 ký tự."
			},
			trangThaiHauKiem : {
				required : "Yêu cầu nhập trạng thái hậu kiểm",
				maxlength : "Trạng thái hậu kiểm 255 ký tự."
			},
			msisdn : {
				required : "Yêu cầu nhập số MSISDN",
				maxlength : "MSISDN không vượt quá 11 ký tự."
			},
			ttThuchien : {
				required : "Yêu cầu nhập ngày trạng thái thực hiện",
				maxlength : "Trạng thái thực hiện không vượt quá 255 ký tự."
			},
			ngayDangKyChuyenMang : {
				required : "Yêu cầu nhập ngày",
				maxlength : "Ngày không đúng định dạng."
			},
			ngayDKCMDen : {
				required : "Yêu cầu nhập ngày",
				maxlength : "Ngày không đúng định dạng."
			}
		}
	}
	$scope.ViolationStatusSource = [ {
		'Id' : '01','Title' : 'Hậu kiểm'	},
		{'Id' : '02','Title' : 'Hoàn Thành'}];

	$scope.ViolationReasonSource = [ {
		'Id' : 'HUK01','Title' : 'HT thanh toán Bill cước tổng'	},
		{'Id' : 'HUK02','Title' : 'HT thanh lý hợp đồng'} ];

	$scope.ViolationActionSource = [
		{'Id' : '01', 'Title' : 'Đang hậu kiểm'},
		{'Id' : '02', 'Title' : 'Hoàn thành'}
	];
	
	$scope.ViolationActionSourceTest = [
		{'Id' : 'CLEAR', 'Title' : 'Hoàn thành'},
		{'Id' : 'VIOLATION', 'Title' : 'Hậu kiểm'}, 
		{'Id' : 'REVERSED', 'Title' : 'Đã hoàn trả'}
	];
	
	$scope.ViolationActionSourceSave = [
		{'Id' : '00', 'Title' : 'Hậu kiểm'},
		{'Id' : '01', 'Title' : 'Hoàn thành'}, 
		{'Id' : '02', 'Title' : 'Duyệt'}
	];
	
	$scope.ViolationActionSearchSource = [
		{'Id' : 'CLEAR', 'Title' : 'Hoàn thành'}, 
		{'Id' : 'REVERSED', 'Title' : 'Đã hoàn trả'},
		{'Id' : 'VIOLATION', 'Title' : 'Hậu kiểm'},
		{'Id' : 'ALL', 'Title' : 'Tất cả'}
	];

	$scope.LyDoSource = [ {
		'Id' : '1',
		'Title' : 'Nợ cước'
	}, {
		'Id' : '2',
		'Title' : 'TL HĐ'
	} ];

	$scope.model.fileAttachments = [];
	var uploader = $scope.uploader = new FileUploader({
		url : eim_url + '/bs/ticket/upload'
	});

	uploader.onSuccessItem = function(fileItem, response, status, headers) {
		$scope.model.fileAttachments.push(response);
	};

	$scope.cancel = function() {

	}

	$scope.downloadFileAttachMent = function(attachFile) {
		dowloadFile(attachFile);
	}

	$scope.confirmUpdateViolationStatus = function() {
		overLoading("Loading...");
		var nprInputViolation = $scope.rowHighlightNPR;
		nprInputViolation.nprSubscribers = $scope.searchResultSubscriberInfo

		updateNPRViolationPortout(nprInputViolation);
	}

	$scope.rowHighlightNPR = VIOLATION_NONE_INDEX;
	$scope.getNprHighlight = function(item) {
		$scope.rowHighlightNPR = item;
	}

	$scope.getListSubscriberInfo = function(item) {

		$scope.isDisabledReversed = false;
		$scope.CHECK_FORCE_CASE = "N";
		
		if(item.vnmViolationStatus == VIOLATION_REVERSED){
			$scope.isDisabledReversed = true;
		}
		$scope.searchNPRNewsResult = []
		var nrpID = item.nprId;

		var nprInput = {
			"nprId" : nrpID
		};
		
		$scope.dataTableAttacmentType = $scope.getListAttachMentViolation(item.attachmentData);
		
		$scope.dataTableAttacmentType = $scope.sorListAttachMentByDate($scope.dataTableAttacmentType);
		
		$scope.tableAttacmentType = new NgTableParams({}, {
			dataset : $scope.dataTableAttacmentType
		});
		
		searchListSubscriberInfo(nprInput, item);
	}

	//lấy file hậu kiểm
	$scope.getListAttachMentViolation = function(listAttachMent){
		var listAttachmentOut = [];
		for(var i =0; i <listAttachMent.length; i++){
			if(StringUtilNVL(listAttachMent[i].attachmentType) ==DOCUMENT_TYPE){
				listAttachmentOut.push(listAttachMent[i]);
			}
		}
		return listAttachmentOut;
	}
	
	$scope.onViolationStatusChange = function(item) {
		if (item.cchTransId == $scope.rowHighlightNPR.cchTransId) {
			$scope.changeAllSubscriberComplete(item);
			return;
		}
//		else {
//			$scope.getListSubscriberInfo(item);
//		}
	}

	// chuyển toàn bộ danh sách thuê bao thành đã hoàn thành,
	// nếu yccm = duyệt
	$scope.changeAllSubscriberComplete = function(item) {
		if (item.violationsStatusNpr == VIOLATION_ACTION_RETURN_COMPLETE) {
			$scope.setAllRowViolationStatus();
		}
	}

	// nếu toàn bộ danh sách thuê bao đã hoàn thành,
	// chuyển trạng thái yccm thành duyệt
	$scope.onSubscriberViolationStatusChange = function(item) {
		var checkAllRowViolationDone = $scope.checkAllViolationDone();
		if (checkAllRowViolationDone) {
//			$scope.rowHighlightNPR.violationsStatusNpr = VIOLATION_COMPLETE;
			$scope.rowHighlightNPR.vnmViolationStatus = VIOLATION_NRP_COMPLETE;
		} else {
//			$scope.rowHighlightNPR.violationsStatusNpr = VIOLATION_UNCOMPLETE;
			$scope.rowHighlightNPR.vnmViolationStatus = VIOLATION_NRP_UNCOMPLETE;
					
		}
	}

	$scope.onSubscriberViolationReasonChange = function(item) {
	}

	$scope.checkAllViolationDisabled = function(item) {
		if (item.violationsStatusNpr == VIOLATION_ACTION_RETURN_COMPLETE) {
			return true;
		}
		return false;
	}

	//1190
	$scope.checkViolationStatusSubscriber = function(item) {
		if (item.violationStatusIndex == VIOLATION_COMPLETE 
				&& item.vnmViolationStatus == VIOLATION_COMPLETE 
				&& $scope.searchResultSubscriberInfo.length > 0) {
			return true;
		}
		return false;
	}

	$scope.setAllRowViolationStatus = function() {
		for (var i = 0; i < $scope.searchResultSubscriberInfo.length; i++) {
			var nprSubscriber = $scope.searchResultSubscriberInfo[i];
			nprSubscriber.violationStatusIndex = VIOLATION_COMPLETE;
		}
	}

	$scope.checkAllViolationDone = function() {
		var isVioloationComplete = true;

		if ($scope.searchResultSubscriberInfo.length == 0) {
			isVioloationComplete = false;
		}

		for (var i = 0; i < $scope.searchResultSubscriberInfo.length; i++) {
			var nprSubscriber = $scope.searchResultSubscriberInfo[i];
			
			if(nprSubscriber.violationStatus != 'NONE'){
				if (nprSubscriber.violationStatusIndex != VIOLATION_COMPLETE) {
					isVioloationComplete = false;
					return isVioloationComplete;
				}
			}
		}
		return isVioloationComplete;
	}

	$scope.searchViolationPortOut = function() {
		
		$scope.searchResult = [];
		$scope.searchResultSubscriberInfo = [];
		$scope.searchNPRNewsResult = [];
		
		$scope.dataTableAttacmentType = [];
		
		$scope.tableAttacmentType = new NgTableParams({}, {
			dataset : $scope.dataTableAttacmentType
		});
		
		var isFormValidate = $scope.validateFormSearchValidation();
		
		if (isFormValidate) {
			overLoading("Loading...");
			var nprViolationDataInput = {
				"transactionId" : StringUtilNVL($scope.model.transactionID),
				"msisdn" : StringUtilNVL($scope.model.msisdn),
				"violationStatus": StringUtilNVL($scope.model.violationActionStatus),
				"startDate" : StringUtilNVL($("#startDate").val()),
				"endDate" : StringUtilNVL($("#endDate").val())
			};
			$scope.rowHighlightNPR = VIOLATION_NONE_INDEX;
			searchNPRViolation(nprViolationDataInput);
		}
	}

	$scope.updateViolationStatus = function(){
    	bootboxConfirm(MESSAGE_HEADER_CONFIRM_VIOLATION, CONFIRM_MESSAGE_UPDATE_VIOLATION, $scope.confirmUpdateViolationStatus, $scope.confirmKO);
    }
	
    $scope.callViolationCommitment = function(typeRequestViolation){
    	$scope.modelTypeButtonViolation = typeRequestViolation;
    	bootboxConfirm(MESSAGE_HEADER_CONFIRM_VIOLATION, CONFIRM_MESSAGE_SEND_VIOLATION, $scope.confirmSendViolationPortOut, $scope.confirmKO);
    }
    
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
	$scope.confirmSendViolationPortOut = function() {
		overLoading("Loading...");
		callViolationCommitmentChecking($scope.rowHighlightNPR);
	}

	$scope.validateFormSearchValidation = function() {
		if (StringUtilNVL($scope.model.transactionID) == EMPTY_VALUE
				&& StringUtilNVL($scope.model.msisdn) == EMPTY_VALUE
				&& StringUtilNVL($scope.model.violationActionStatus) == EMPTY_VALUE
				&& StringUtilNVL($("#startDate").val()) == EMPTY_VALUE
				&& StringUtilNVL($("#endDate").val()) == EMPTY_VALUE) {
			bootbox.alert("Nhập thông tin tìm kiếm");
			return false
		}else{
			var isDateAfter = checkDateIsAfterDate($("#startDate").val(), $("#endDate").val());
			if(!isDateAfter){
				bootbox.alert("Ngày bắt đầu tìm kiếm phải nhỏ hơn ngày kết thúc !");
				return false
			}
		}
		
		var msisdnVal = StringUtilNVL($scope.model.msisdn);
		if(msisdnVal != EMPTY_VALUE && !isNumbericInteger(msisdnVal)){
			bootbox.alert("Số thuê bao chỉ bao gồm ký tự số !");
			return false
		}
		return true;
	}

	
	$scope.sorListAttachMentByDate = function(listAttachMent){
		var attachMentSortableByDate = [];
		for (var attachMent in listAttachMent) {
		    attachMentSortableByDate.push(listAttachMent[attachMent]);
		}

		attachMentSortableByDate.sort(function(a, b) {
		    var aDate = new Date(a.createdDate);
			var bDate = new Date(b.createdDate);
		    return bDate.getTime() - aDate.getTime();
		});
		
		return attachMentSortableByDate;
	}
});

app_vnm.directive('uiSelectRequired',
		function() {
			return {
				require : 'ngModel',
				link : function(scope, elm, attrs, ctrl) {
					ctrl.$validators.uiSelectRequired = function(modelValue,
							viewValue) {
						return modelValue && modelValue.length;
					};
				}
			};
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

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}
