var EMPTY_VALUE = "";
var MAX_LENGTH_MSISDN = 11;
var MIN_LENGTH_MSISDN = 10;
var SELECT_NONE_INDEX = -1;

var TYPE_SERVICE_CHANGE_SIM_PREPAID = '1';
var TYPE_SERVICE_UPDATE_CUSTOMER_INFO = '3';
var TYPE_SERVICE_CHANGE_OWNER_PRE_INFO = '2';

var oldValueTypeOfService = "";

var STATUS_APPROVED = "2";

var SERVICE_CODE_CCQ = "2";

app_vnm.factory('approveService', function($http, $translate) {
	return {
		searchRequestChangeService : function(data, callback) {
			var url = eim_url + "/bs/Custome/searchRequestChangeService";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listTypeOfServiceChangeFn : function(callback) {
			var url = eim_url + "/bs/Custome/listTypeOfServiceChange";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
			;
		},
		approveRequetsChangeService : function(data, callback) {
			var url = eim_url + "/bs/Custome/actionApproveRequestChangeService";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
			;
		},
		rejectRequetsChangeService : function(data, callback) {
			var url = eim_url + "/bs/Custome/actionRejectRequestChangeService";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
			;
		},
		reviewRequetsChangeService : function(data, callback) {
			var url = eim_url + "/bs/Custome/actionReviewRequestChangeService";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
			;
		},
		getListStaffByShopId : function(data, callback) {
			var url = eim_url + "/bs/Custome/listStaff?shopId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
			;
		},
		openViewIMGChangeService : function(data, callback) {
			var url = eim_url + "/bs/Custome/getImgChangeService?imgId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createEformService : function(data, callback) {
			var url = eim_url + "/bs/report/exportEForm";
			$http.post(url, data, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctr-prepaidChangeSIM', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, approveService) {
	
	$scope.model = {};

	$scope.ServiceRequestSource = [];

	$scope.searchResult = [];
	$scope.totalItemCount = 0;

	$scope.customer_id_output = "";
	$scope.isShowInformationDetail = false;

	var SHOP_ID = $localStorage.clientContext.shopId;
	var SHOPCODE = $localStorage.clientContext.shop.shopCode;

	var OLD_SIM_NUMER = "";
	var listMSISDNVerifyHist = [];

	$scope.isDisabledBtnEform = true;
	$scope.isDisabledBtnEformCCQ = true;

	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			customerType : {
				required : true,
				EmptyValue : true
			}
		},
		messages : {}
	}

	$scope.loadDefauld = function() {
		overLoading("loading...");

		approveService.listTypeOfServiceChangeFn(function(result) {
			closeOverLay();
			if (result.status == '0' && result.status != 'undefined') {
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				$scope.ServiceRequestSource = [];

				var LIST_ALL = [ {
					name : "ALL",
					code : "",
					type : ""
				} ];
				LIST_ALL.push.apply(LIST_ALL, result);

				$scope.ServiceRequestSource = LIST_ALL;

				// list Staff
				approveService.getListStaffByShopId(SHOP_ID, function(result) {
					closeOverLay();
					if (result.status == '0' && result.status != 'undefined') {
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					} else {
						$scope.CreaterResource = result;
					}

				});
			}
		});
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$.validator.addMethod("EmptyValue", function(value, element) {
		if (value == undefined || value == "")
			return false;
		if ($.trim(value) == "")
			return false;
		return true;
	}, "");

	$.validator.addMethod("maxlengthcustom", function(value, element, options) {
		var valueLenght = $.trim(value.toString()).length;
		if (valueLenght > options)
			return false;
		return true;
	}, "");

	$.validator.addMethod("minlengthcustom", function(value, element, options) {
		var valueLenght = $.trim(value.toString()).length;
		if (valueLenght > 0) {
			if (valueLenght < options)
				return false;
		}
		return true;
	}, "");

	$scope.searchRequestChangeService = function() {
		overLoading("loading...");

		$scope.isDisabledBtnEform = true;
		$scope.isDisabledBtnEformCCQ = true;

		$scope.totalItemCount = 0;

		OLD_SIM_NUMER = "";

		$scope.searchResult = [];

		$scope.rowHighlightRequestService = -1;

		$scope.isShowInformationDetail = false;
		$scope.clearFormDetailRequest();

		var msisdnInput = StringUtilNVL($scope.model.searchMdn);
		if (msisdnInput != "") {
			if (!isNumbericInteger(msisdnInput)) {
				closeOverLay();
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-002'));
				return;
			}

			if (msisdnInput.length > MAX_LENGTH_MSISDN || msisdnInput.length < MIN_LENGTH_MSISDN) {
				closeOverLay();
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PREPAID-001'));
				return;
			}
		}

		var requestSearchIn = {};
		requestSearchIn.msisdn = StringUtilNVL($scope.model.searchMdn);
		requestSearchIn.requestId = StringUtilNVL($scope.model.requestId);
		requestSearchIn.serviceCode = StringUtilNVL($scope.model.typeOfServiceRequest);

		requestSearchIn.createDate = StringUtilNVL($("#idCreateDate").val());
		requestSearchIn.status = StringUtilNVL($scope.model.statusRequest);
		requestSearchIn.creater = StringUtilNVL($scope.model.creater);

		requestSearchIn.groupCreater = StringUtilNVL($scope.model.groupCreate);

		approveService.searchRequestChangeService(requestSearchIn, function(result) {

			closeOverLay();
			if (result.status == '0' && result.status != undefined) {
				// KHONG THANH CONG
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));

			} else {
				// THANH CONG
				$scope.searchResult = result;
				$scope.totalItemCount = result.length;
				for (var i = 0; i < $scope.searchResult.length; i++) {
					var code = $scope.searchResult[i].serviceCode;

					// set status disabled
					var statusRecord = $scope.searchResult[i].status;
					// Trạng thái tạo mới
					if (statusRecord == "0") {
						$scope.searchResult[i].isDisabledApprove = false;
						$scope.searchResult[i].isDisabledReject = false;
						$scope.searchResult[i].isDisabledReview = false;

						$scope.searchResult[i].isDisabledCommission = true;
						$scope.searchResult[i].isDisabledDetail = false;
					}

					// Trạng thái từ chối && HỦY
					if (statusRecord == "1" || statusRecord == "3") {
						$scope.searchResult[i].isDisabledApprove = true;
						$scope.searchResult[i].isDisabledReject = true;
						$scope.searchResult[i].isDisabledReview = true;

						$scope.searchResult[i].isDisabledCommission = true;
						$scope.searchResult[i].isDisabledDetail = true;
					}

					// trạng thái đã review
					if (statusRecord == "2") {

						$scope.searchResult[i].isDisabledApprove = true;
						$scope.searchResult[i].isDisabledReject = true;

						$scope.searchResult[i].isDisabledReview = true;
						$scope.searchResult[i].isDisabledCommission = true;
						$scope.searchResult[i].isDisabledDetail = false;
					}

					// trạng thái đã cộng hoa hồng
					if (statusRecord == "4") {

						$scope.searchResult[i].isDisabledApprove = true;
						$scope.searchResult[i].isDisabledReject = true;

						$scope.searchResult[i].isDisabledReview = true;
						$scope.searchResult[i].isDisabledCommission = false;
						$scope.searchResult[i].isDisabledDetail = false;
					}

					// trạng thái đã review
					if (statusRecord == "5") {
						$scope.searchResult[i].isDisabledApprove = false;
						$scope.searchResult[i].isDisabledReject = false;

						$scope.searchResult[i].isDisabledReview = true;
						$scope.searchResult[i].isDisabledCommission = true;
						$scope.searchResult[i].isDisabledDetail = false;
					}

					var serviceRequestCodeName = $scope.getElementServiceRequestByCode($scope.ServiceRequestSource, code);
					$scope.searchResult[i].serviceCodeStr = serviceRequestCodeName;

				}

				$scope.tableParams = new NgTableParams({}, {
					dataset : $scope.searchResult
				});
			}
		});
	}

	// BEGIN BLOCK DETAIL REQUEST
	$scope.clearFormDetailRequest = function() {
		$scope.model.detail_RequestId = "";
		$scope.model.detail_Creater = "";
		$scope.model.detail_CreateDate = "";

		$scope.model.detail_UserExecution = "";
		$scope.model.detail_DateExecution = "";
		$scope.model.detail_CusFullName = "";

		$scope.model.detail_BirthDay = "";
		$scope.model.detail_Address = "";
		$scope.model.detail_PhoneNumber = "";

		$scope.model.detail_IssueNumber = "";
		$scope.model.detail_IssuePlace = "";
		$scope.model.detail_IssueDate = "";

		$scope.model.detail_UserReject = "";
		$scope.model.detail_DateReject = "";
		$scope.model.detail_ReasonReject = "";

		$scope.model.detail_UserReview = "";
		$scope.model.detail_DateReview = "";
		$scope.model.detail_ReasonReview = "";

		$scope.model.detail_InforVerify = "";
		$scope.model.detail_InforChange = "";
	}

	$scope.setValueFormDetail = function(item) {
		$scope.model.detail_RequestId = item.requestId;
		$scope.model.detail_Creater = item.creater;
		$scope.model.detail_CreateDate = item.createDate;

		$scope.model.detail_UserExecution = item.executer;
		$scope.model.detail_DateExecution = item.executeDate;
		$scope.model.detail_CusFullName = item.customerName;

		$scope.model.detail_BirthDay = item.birthdate;
		$scope.model.detail_Address = item.address;
		$scope.model.detail_PhoneNumber = item.phone;

		$scope.model.detail_IssueNumber = item.idcard;
		$scope.model.detail_IssuePlace = item.placeissue;
		$scope.model.detail_IssueDate = item.dateissue;
		//						
		$scope.model.detail_UserReject = item.approver;
		$scope.model.detail_DateReject = item.approveDate;
		$scope.model.detail_ReasonReject = item.cmt;
		//						
		$scope.model.detail_UserReview = item.reviewer;
		$scope.model.detail_DateReview = item.review_date;
		$scope.model.detail_ReasonReview = item.review_reason;

		$scope.model.detail_InforVerify = item.mdnsVerify;
		$scope.model.detail_InforChange = item.description;
	}

	$scope.getRowHighLight = function(item) {
		$scope.rowHighlightRequestService = item;
	}

	$scope.detailInformationTBLChangeService = function(item, index) {
		$scope.getRowHighLight(item);
		// set trang thai 2 button eform
		$scope.setDisabledEformBtn(item);

		$scope.clearFormDetailRequest();
		$scope.isShowInformationDetail = true;

		$scope.setValueFormDetail(item);
	};

	// END BLOCK DETAIL REQUEST

	// BEGIN BLOCK DETAIL SERVICE CHANGE
	// set value customer infor\
	$scope.setValueCustomerInfor = function(item) {
		$scope.model.cusInfor_requestId = item.requestId;
		$scope.model.cusInfor_Mdn = item.msisdn;

		$scope.model.cusInfor_fullName = item.customerName;
		$scope.model.cusInfor_birthday = item.birthdate;
		$scope.model.cusInfor_address = item.address;
		$scope.model.cusInfor_phoneNumber = item.phone;
		$scope.model.cusInfor_cardId = item.idcard;
		$scope.model.cusInfor_placeOfIssue = item.placeissue;
		$scope.model.cusInfor_dateOfIssue = item.dateissue;

	}

	$scope.setValueMsisdnVerify = function(msisdnVerify) {
		// số xác minh
		var arrayMsisdn = msisdnVerify.split(",");
		for (var i = 0; i < arrayMsisdn.length; i++) {
			$scope.model['msisdnCheck' + (i + 1)] = arrayMsisdn[i];
		}
	}

	$scope.setValueSecondInformationChangeSim = function(msisdnVerify) {

		// String str = "Ngay Sinh: 01/07/1980 The nap: thao TK chinh: 500000";
		$scope.model.checkBoxSecondInfo = true;

		var ngaysinh = msisdnVerify.substring(msisdnVerify.indexOf("Ngay Sinh:") + 11, msisdnVerify.indexOf(" The nap:"));
		var thenap = msisdnVerify.substring(msisdnVerify.indexOf("The nap:") + 9, msisdnVerify.indexOf(" TK chinh:"));
		var taikhoan = msisdnVerify.substring(msisdnVerify.indexOf("TK chinh:") + 10, msisdnVerify.length);

		$scope.model.formChangeSim_dateOfRegistration = ngaysinh;
		$scope.model.formChangeSim_lastCardLoaded = thenap;
		$scope.model.formChangeSim_mainAccount = taikhoan;
	}

	// set value changesim detail popup
	$scope.clearValueChangeSimPopup = function() {
		$scope.model.msisdnCheck1 = "";
		$scope.model.msisdnCheck2 = "";
		$scope.model.msisdnCheck3 = "";
		$scope.model.msisdnCheck4 = "";
		$scope.model.msisdnCheck5 = "";
		$scope.model.msisdnCheck6 = "";
		$scope.model.msisdnCheck7 = "";
		$scope.model.msisdnCheck8 = "";
		$scope.model.msisdnCheck9 = "";
		$scope.model.msisdnCheck10 = "";

		$scope.model.formChangeSim_dateOfRegistration = "";
		$scope.model.formChangeSim_lastCardLoaded = "";
		$scope.model.formChangeSim_mainAccount = "";
		$scope.model.checkBoxSecondInfo = "";

	}
	// set value changesim detail popup
	$scope.setValueDetailChangeSim = function(item) {

		// thông tin thuê bao
		$scope.setValueCustomerInfor(item);
		var mdnVerify = item.mdnsVerify;
		if (mdnVerify != null) {
			if (mdnVerify.indexOf("Ngay Sinh") > -1) {
				// Thông tin phụ
				if (mdnVerify.indexOf("Ngay Sinh") > 0) {
					var strVerificationOwner = mdnVerify.substring(0, mdnVerify.indexOf("Ngay Sinh") - 1);
					var strAddionInfo = mdnVerify.substring(mdnVerify.indexOf("Ngay Sinh"), mdnVerify.length);

					$scope.setValueMsisdnVerify(strVerificationOwner);
					$scope.setValueSecondInformationChangeSim(strAddionInfo);
				}
			} else {
				// số xác minh
				$scope.setValueMsisdnVerify(mdnVerify);
			}
		}
	}

	$scope.detailInformationServiceChange = function(item, index) {
		$scope.getRowHighLight(item);

		if (item.serviceCode != TYPE_SERVICE_CHANGE_SIM_PREPAID && item.serviceCode != TYPE_SERVICE_CHANGE_OWNER_PRE_INFO) {
			closeOverLay();
			bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim và chuyển chủ quyền trả trước");
			return;
		}

		// POPUP CHANGE SIM
		if (item.serviceCode == TYPE_SERVICE_CHANGE_SIM_PREPAID || item.serviceCode == TYPE_SERVICE_CHANGE_OWNER_PRE_INFO) {
			$scope.isDisabledPanel = true;
			$scope.isShowCustomerInfor = true;
			$scope.isShowChangeSIMVerifyHistory = true;
			$scope.showModalFunction("modalChangeSim");
			$scope.clearValueChangeSimPopup();
			$scope.setValueDetailChangeSim(item);
		}
	};
	// END BLOCK DETAIL SERVICE CHANGE

	$scope.approveRequetsChangeService = function(item, index) {

		overLoading("Processing...");

		var requestApprove = {};
		requestApprove.requestId = item.requestId;
		requestApprove.serviceCode = item.serviceCode;
		requestApprove.msisdn = item.msisdn;
		requestApprove.shopId = SHOP_ID;

		if (item.serviceCode != TYPE_SERVICE_CHANGE_SIM_PREPAID && item.serviceCode != TYPE_SERVICE_CHANGE_OWNER_PRE_INFO) {
			closeOverLay();
			bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim và chuyển chủ quyền trả trước.");
			return;
		}

		approveService.approveRequetsChangeService(requestApprove, function(result) {

			closeOverLay();
			if (result.status == '0' && result.status != undefined) {
				// Phê duyệt không thành
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));

			} else {
				// Phê duyệt thành công
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				$scope.searchRequestChangeService();
			}
		});
	}

	// BEGIN REJECT BLOCK
	$scope.openPopupReject = function(item, index) {
		if (item.serviceCode != TYPE_SERVICE_CHANGE_SIM_PREPAID && item.serviceCode != TYPE_SERVICE_CHANGE_OWNER_PRE_INFO) {
			closeOverLay();
			bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim và chuyển chủ quyền trả trước.");
			return;
		}

		$scope.model.popupReasonReject = "";
		$scope.showModalFunction("modalRejectComment");
		$scope.getRowHighLight(item);
	}

	$scope.rejectRequetsChangeService = function() {

		overLoading("Processing...");

		var item = $scope.rowHighlightRequestService;

		var requestApprove = {};
		requestApprove.requestId = item.requestId;
		requestApprove.serviceCode = item.serviceCode;
		requestApprove.msisdn = item.msisdn;
		requestApprove.shopId = SHOP_ID;
		requestApprove.cmt = StringUtilNVL($scope.model.popupReasonReject);

		if (item.serviceCode != TYPE_SERVICE_CHANGE_SIM_PREPAID && item.serviceCode != TYPE_SERVICE_CHANGE_OWNER_PRE_INFO) {
			closeOverLay();
			bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim và chuyển chủ quyền trả trước.");
			return;
		}

		if (StringUtilNVL($scope.model.popupReasonReject) == EMPTY_VALUE) {
			closeOverLay();
			bootbox.alert("Nhập lý do reject.");
			return;
		}

		approveService.rejectRequetsChangeService(requestApprove, function(result) {

			closeOverLay();
			if (result.status == '0' && result.status != undefined) {
				// KHONG THANH CONG
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.ACTION_REJECT-ERROR') + $translate.instant('vnm.messages.validate.prepaid.server.'+result.messages));

			} else {
				// Yêu cầu đã được reject
				$scope.hideModalFunction("modalRejectComment");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				$scope.searchRequestChangeService();
			}
		});
	}

	// END REJECT BLOCK

	// BEGIN REVIEW BLOCK
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
	}

	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}

	$scope.openPopupReview = function(item, index) {

		if (item.serviceCode != TYPE_SERVICE_CHANGE_SIM_PREPAID && item.serviceCode != TYPE_SERVICE_CHANGE_OWNER_PRE_INFO) {
			closeOverLay();
			// bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim trả trước.");
			bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim và chuyển chủ quyền trả trước.");
			return;
		}

		$scope.model.popupReasonReview = "";
		$scope.showModalFunction("modalReviewComment");
		$scope.getRowHighLight(item);
	}

	$scope.execuReviewRequestChangeService = function() {

		var item = $scope.rowHighlightRequestService;

		overLoading("Processing...");

		var reviewModel = {};
		reviewModel.requestId = item.requestId;
		reviewModel.serviceCode = item.serviceCode;
		reviewModel.msisdn = item.msisdn;
		reviewModel.shopId = SHOP_ID;
		reviewModel.review_reason = StringUtilNVL($scope.model.popupReasonReview);

		if (StringUtilNVL($scope.model.popupReasonReview) == EMPTY_VALUE) {
			closeOverLay();
			bootbox.alert("Nhập lý do review.");
			return;
		}

		approveService.reviewRequetsChangeService(reviewModel, function(result) {

			closeOverLay();
			if (result.status == '0' && result.status != undefined) {
				// KHONG THANH CONG
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));

			} else {
				$scope.hideModalFunction("modalReviewComment");

				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				$scope.searchRequestChangeService();
			}
		});
	}
	// END REVIEW BLOCK
	$scope.AddCommissionRequetsChangeService = function(item, index) {
		alert("Add commission");
	}

	// BEGIN BLOCK DETAIL SECOND
	$scope.openDetailSecondForm = function() {
		var item = $scope.rowHighlightRequestService;
		if (item.serviceCode != TYPE_SERVICE_CHANGE_SIM_PREPAID && item.serviceCode != TYPE_SERVICE_CHANGE_OWNER_PRE_INFO) {
			closeOverLay();
			// bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim trả trước.");
			bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim và chuyển chủ quyền trả trước.");
			return;
		}

		if (item.serviceCode == TYPE_SERVICE_CHANGE_SIM_PREPAID) {
			$scope.showModalFunction("modalDetailSimSecond");
			$scope.setInforSimSecondDetail(item.description);
		}
	}

	$scope.setInforSimSecondDetail = function(strInfo) {
		$scope.model.detailSimSecond_reason = "";
		$scope.model.detailSimSecond_numberSimOld = "";
		$scope.model.detailSimSecond_numberSimNew = "";

		var oldSim = "";
		var newSim = "";
		var reason = "";

		if (strInfo.indexOf("SIM cu:") > -1) {
			oldSim = strInfo.substring(strInfo.indexOf("SIM cu:") + 7, strInfo.indexOf("SIM moi:"));
		}

		if ((strInfo.indexOf("SIM moi:") > -1) && (strInfo.indexOf("Ly do:") > -1)) {
			newSim = strInfo.substring(strInfo.indexOf("SIM moi:") + 8, strInfo.indexOf("Ly do:"));
		} else {
			newSim = strInfo.substring(strInfo.indexOf("SIM moi:") + 8, strInfo.length);
		}

		if (strInfo.indexOf("Ly do:") > -1) {
			reason = strInfo.substring(strInfo.indexOf("Ly do:") + 7, strInfo.length);
		}

		$scope.model.detailSimSecond_reason = reason;
		$scope.model.detailSimSecond_numberSimOld = oldSim;
		$scope.model.detailSimSecond_numberSimNew = newSim;

	}

	// END BLOCK DETAIL SECOND

	// BEGIN VIEW IMG
	$scope.openViewIMGChangeService = function(item) {

		// overLoading("Processing...");
		// alert($(this)["0"].$select.selected.Id);
		var selectedId = $(this)["0"].$select.selected.Id;
		$scope.imgId = "";
		var requestViewIMG = {};
		requestViewIMG.requestId = item.requestId;
		requestViewIMG.serviceCode = item.serviceCode;
		requestViewIMG.msisdn = item.msisdn;
		requestViewIMG.shopId = SHOP_ID;

		requestViewIMG.status = StringUtilNVL($scope.model.viewImgRequest);

		/*if (item.serviceCode != TYPE_SERVICE_CHANGE_SIM_PREPAID && item.serviceCode != TYPE_SERVICE_CHANGE_OWNER_PRE_INFO) {
			closeOverLay();
			bootbox.alert("Hiện tại chỉ dùng được chức năng này cho thay sim và chuyển chủ quyền trả trước.");
			return;
		}*/

		if (selectedId == "1") {
			// CMT1
			if (StringUtilNVL(item.img_id) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.img_id_id = item.img_id;
				$scope.imgId = item.img_id;
			}
		} else if (selectedId == "2") {
			// CMT2

			if (StringUtilNVL(item.img_id_2) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.img_id_2_id = item.img_id_2;
				$scope.imgId = item.img_id_2;
			}
		} else if (selectedId == "3") {

			// Hồ sơ 1

			if (StringUtilNVL(item.file_id) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.file_id = item.file_id;
				$scope.imgId = item.file_id;
			}
		} else if (selectedId == "4") {
			// Hồ sơ 2

			if (StringUtilNVL(item.file_id2) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.file_id2 = item.file_id2;
				$scope.imgId = item.file_id2;
			}
		} else if (selectedId == "5") {
			// Khách hàng

			if (StringUtilNVL(item.cust_img) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.cust_img = item.cust_img;
				if (item.cust_img.indexOf("__") > 0) {
					$scope.imgId = item.cust_img.substring(0,item.cust_img.indexOf("__"));
				} else {
					$scope.imgId = item.cust_img;
				}
			}
		} else if (selectedId == "6") {
			// Giấy phép kinh doanh

			if (StringUtilNVL(item.bus_permit_no_img1) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.bus_permit_no_img1 = item.bus_permit_no_img1;
				$scope.imgId = item.bus_permit_no_img1;
			}
		} else if (selectedId == "7") {
			// Hợp đồng 1

			if (StringUtilNVL(item.contract_img1) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.contract_img1 = item.contract_img1;
				$scope.imgId = item.contract_img1;
			}
		} else if (selectedId == "8") {
			// Hợp đồng 2

			if (StringUtilNVL(item.contract_img2) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.contract_img2 = item.contract_img2;
				$scope.imgId = item.contract_img2;
			}
		} else if (selectedId == "9") {
			// Giấy ủy quyền
			if (StringUtilNVL(item.authorized_img) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.authorized_img = item.authorized_img;
				$scope.imgId = item.authorized_img;
			}
		} else if (selectedId == "10") {
			if (StringUtilNVL(item.old_idno_img) == EMPTY_VALUE) {
				bootbox.alert("Không có ảnh");
				return;
			} else {
				$scope.imgId = item.old_idno_img;
			}
		} else if (selectedId == "11") {
			if (StringUtilNVL(item.old_idno_2_img) == EMPTY_VALUE) {
				bootbox.alert("Không có ảnh");
				return;
			} else {
				$scope.imgId = item.old_idno_2_img;
			}
		} else if (selectedId == "12") {
			if (StringUtilNVL(item.ck_img) == EMPTY_VALUE) {
				bootbox.alert("Không có ảnh");
				return;
			} else {
				$scope.imgId = item.ck_img;
			}
		} else if (selectedId == "13") {
			if (StringUtilNVL(item.imgCmgs) == EMPTY_VALUE) {
				bootbox.alert("Không có ảnh");
				return;
			} else {
				$scope.imgId = item.imgCmgs;
			}
		} else if (selectedId == "14") {
			if (StringUtilNVL(item.cust_img) == EMPTY_VALUE) {
				// closeOverLay();
				bootbox.alert("Không có ảnh");
				return;
			} else {
				// requestViewIMG.cust_img = item.cust_img;
				if (item.cust_img.indexOf("__") > 0) {
					$scope.imgId = item.cust_img.substring(item.cust_img.indexOf("__")+2, item.cust_img.length);
				} else {
					bootbox.alert("Không có ảnh");
					return;
				}
			}
		} else {
			return;
		}

		$scope.imgBody = "";

		approveService.openViewIMGChangeService($scope.imgId, function(result) {

			// closeOverLay();
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				$scope.imgBody = result[0];

				$scope.imgZoom($scope.imgBody)
			}

		});
	}
	// END VIEW IMG

	$scope.setDisabledEformBtn = function(item) {
		$scope.isDisabledBtnEform = true;
		$scope.isDisabledBtnEformCCQ = true;

		if (item.status == STATUS_APPROVED) {
			if (item.serviceCode == SERVICE_CODE_CCQ) {
				$scope.isDisabledBtnEform = true;
				$scope.isDisabledBtnEformCCQ = false;
			} else {
				$scope.isDisabledBtnEform = false;
				$scope.isDisabledBtnEformCCQ = true;
			}
		} else {
			$scope.isDisabledBtnEform = true;
			$scope.isDisabledBtnEformCCQ = true;
		}

	}

	// eform
	$scope.createEformFileFn = function() {

		if ($scope.rowHighlightRequestService != SELECT_NONE_INDEX) {
			var isdn = $scope.rowHighlightRequestService.msisdn;
			var requestId = $scope.rowHighlightRequestService.requestId;

			var staffName = $scope.rowHighlightRequestService.requestId;

			var eformParamInput = {
				"isdn" : isdn,
				"requestId" : requestId,
				"staffName" : '',
				"shopCode" : SHOPCODE,
				"reportType" : 'YCTDDV'
			};

			overLoading("loading...");

			approveService.createEformService(eformParamInput, function(result, status, header, config) {
				closeOverLay();
				if (result.status == '0' && result.status != 'undefined') {
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				} else {
					download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				}
			});

		}
	}

	// eform chuyen chu quyen
	$scope.createEformCCQFileFn = function() {
		if ($scope.rowHighlightRequestService != SELECT_NONE_INDEX) {
			var isdn = $scope.rowHighlightRequestService.msisdn;
			var requestId = $scope.rowHighlightRequestService.requestId;

			var staffName = $scope.rowHighlightRequestService.requestId;

			var eformCCQParamInput = {
				"isdn" : isdn,
				"requestId" : requestId,
				"reportType" : 'YCTDDV_CCQ'
			};

			overLoading("loading...");

			approveService.createEformService(eformCCQParamInput, function(result, status, header, config) {
				closeOverLay();
				if (result.status == '0' && result.status != 'undefined') {
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				} else {
					download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				}
			});

		}
	}
	$scope.imgZoom = function(event) {
		$('.imagepreview').attr('src', "data:image/png;base64, " + event);
		$('#imagemodal').modal('show');
	}

	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;

	// BEGIN validate input
	$.validator.addMethod("isDate", function(value, element) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;
		var valueDate = $.trim(value);
		return moment(valueDate, 'DD/MM/YYYY', true).isValid();
	}, "");

	$.validator.addMethod("lessthancurrentdate", function(value, element) {
		if (value === "")
			return true;
		if ($.trim(value) == "")
			return true;
		var today = moment();
		return (moment(today, "DD/MM/YYYY") > moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("requiredlessthanyear", function(value, element, options) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;

		var today = moment().add(-options, 'years');
		return (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("check14to100Age", function(value, element) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;

		var today = moment().add(-14, 'years');
		if (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY")) {
			return false;
		}
		;
		var today1 = moment().add(-100, 'years');
		if (moment(today1, "DD/MM/YYYY") >= moment(value, "DD/MM/YYYY")) {
			return false;
		}
		;
		return true;
	}, "");

	$.validator.addMethod("EmptyValue", function(value, element) {
		if (value == undefined || value == "")
			return false;
		if ($.trim(value) == "")
			return false;
		return true;
	}, "");

	$.validator.addMethod("requiredNumber", function(value, element) {
		if (value == undefined || value == "")
			return false;
		var valueTrim = $.trim(value);
		if (valueTrim == "")
			return false;

		if (isNumbericInteger(valueTrim)) {
			return true;
		} else {
			return false;
		}
		return true;
	}, "");

	$scope.getElementServiceRequestByCode = function(listRequest, code) {
		var serviceRequestCodeName = null;

		if (StringUtilNVL(code) == EMPTY_VALUE) {
			return null;
		}

		for (var i = 0; i < listRequest.length; i++) {
			var serviceElement = listRequest[i];

			if (StringUtilNVL(serviceElement.code) == StringUtilNVL(code)) {
				serviceRequestCodeName = serviceElement.name;
				break;
			}
		}
		return serviceRequestCodeName;
	}

	$scope.RequestStatusSource = [ {
		'Id' : '',
		'Title' : 'ALL'
	}, {
		'Id' : '0',
		'Title' : 'Tạo mới'
	}, {
		'Id' : '1',
		'Title' : 'Từ chối'
	}, {
		'Id' : '2',
		'Title' : 'Đã thực hiện'
	}, {
		'Id' : '3',
		'Title' : 'Hủy'
	}, {
		'Id' : '4',
		'Title' : 'Đã cộng hoa hồng'
	}, {
		'Id' : '5',
		'Title' : 'Đã review'
	},

	];

	$scope.RequestIMGSource = [ {
		'Id' : '0',
		'Title' : 'Chọn'
	}, {
		'Id' : '1',
		'Title' : 'CMT1'
	}, {
		'Id' : '2',
		'Title' : 'CMT2'
	}, {
		'Id' : '3',
		'Title' : 'Hồ sơ 1'
	}, {
		'Id' : '4',
		'Title' : 'Hồ sơ 2'
	}, {
		'Id' : '5',
		'Title' : 'Khách hàng'
	}, {
		'Id' : '6',
		'Title' : 'Giấy phép kinh doanh'
	}, {
		'Id' : '7',
		'Title' : 'Hợp đồng 1'
	}, {
		'Id' : '8',
		'Title' : 'Hợp đồng 2'
	}, {
		'Id' : '9',
		'Title' : 'Giấy ủy quyền'
	}, {
		'Id' : '10',
		'Title' : 'CMT chính chủ 1'
	}, {
		'Id' : '11',
		'Title' : 'CMT chính chủ 2'
	}, {
		'Id' : '12',
		'Title' : 'Giấy CK'
	},
	 {
		'Id' : '13',
		'Title' : 'Ảnh CKCMGS'
	},
	 {
		'Id' : '14',
		'Title' : 'Ảnh KH đại diện'
	},

	];

});

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}
