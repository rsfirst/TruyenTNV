app_vnm.factory('fctFormReceiptEstablish', function($http, $translate) {
	return {
		getShop : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getShop";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		exportFile : function(data, callback) {
			var url = eim_url + "/epos/report/exportMultiFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getReceiptNo : function(data, callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getReceiptNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStaff : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});

		},

		getInvoiceType : function(callback) {
			var url = eim_url + "/epos/sales/FormReceiptEstablish/getInvoiceType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getPaymentMethod : function(callback) {
			var url = eim_url + "/epos/sales/FormReceiptEstablish/getPaymentMethod";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReason : function(callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getReason";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getAccountType : function(callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getAccount";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		searchInvoice : function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptEstablish/searchInvoice";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},

		createInvoice : function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptEstablish/createInvoice";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		enqueryInvoiceBill : function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptEstablish/enqueryInvoiceBill";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},

		getListDomain : function(data, callback) {
			var url = eim_url + "/epos/getValueDomainByType";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},

	}
});

app_vnm.controller('ctrl-FormReceiptEstablish', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams, $localStorage,
		fctFormReceiptEstablish) {
	window.document.title = $translate.instant('vnm.FormReceiptEstablish.page.title');

	$scope.model = {};
	$("#formGroupBtnCreate").css('display', 'block');
	$("#formGroupBtnReCreate").css('display', 'none');
	$scope.model.staffDisable = false;
	$scope.disabledApprove = true;// Duyệt
	$scope.disabledDestroy = true;// Hủy
	$scope.disabledPrint = true;
	$scope.agentDisable = true;
	$scope.disabledPrintCInvoice = true;// IN HĐ điện tử
	$scope.PrintConversionInvoice = true;// IN HĐ chuyển đổi
	$scope.listShop = [];
	$scope.listStaff = [];
	$scope.listInvoiceType = [];
	$scope.listPaymentMethod = [];
	$scope.listReason = [];
	$scope.listAccount = [];
	$scope.listReceipt = [];
	$scope.listStatus = [];
	$scope.lstTablesInvoice = [];
	$scope.listReceiptType = [];
	$scope.listStatus = [];
	$scope.listSelectItemCheckBox = [];
	$scope.disabledDetail = true;
	$scope.limitCbb = 20;
	$scope.disablePrint = true;
	$scope.model.invoiceShopCode = $localStorage.clientContext.shop.shopCode;
	$scope.model.invoiceShopName = $localStorage.clientContext.shop.shopName;
	$scope.model.receiptAgentCode = $localStorage.clientContext.shop.staffCode;
	$scope.model.receiptAgentName = $localStorage.clientContext.shop.staffName;
	$scope.model.receiptReason = {
		"code" : 'TTBH',
		"name" : 'Thu tiền bán hàng của nhân viên tại cửa hàng'
	};
	$scope.model.note = $scope.model.receiptReason.name;
	$scope.model.listAccount = [ {
		"type" : '1',
		"code" : 'T_BHHT',
		"name" : 'Tài khoản bán hàng HT'
	}, {
		"type" : '2',
		"code" : 'TK_BILL',
		"name" : 'Tài khoản cước'
	}, {
		"type" : '3',
		"code" : 'T_BHHM',
		"name" : 'Tài khoản bán hàng HM'
	} ]
	$scope.model.orgTotal = 0;
	$scope.model.grandTotal = 0;
	$scope.model.rate = 1;
	$scope.model.checkAll = false;
	// Load Từ ngày và tới ngày
	var momentObj = moment(new Date());
	var momentString = momentObj.format('DD/MM/YYYY');
	$scope.model.startDate = momentString;
	$scope.model.endDate = momentString;
	$scope.model.receiptCreateDate = momentString;
	$scope.getListReceiptType = function() {
		var objSearch = {
			"type" : "14",
			"staffName" : '',
			"shopCode" : '',
			"shopName" : '',
			"shopId" : '',
			"status" : '',
			"code" : '',
			"stockId" : '',
			"goodId" : '',
			"stateId" : ''
		}
		overLoading();
		fctFormReceiptEstablish.getListDomain(objSearch, function(result) {
			if (result.status == '0') {
				bootboxAlertFocus($translate.instant(result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else if (result.length > 0) {
				$scope.listReceiptType = result;
				$scope.model.invoiceReceiptType = $scope.listReceiptType[0];
				$scope.getListStatus();
			}
		});
		closeOverLay();

	}

	$scope.getListStatus = function() {
		var objSearch = {
			"type" : "11",
			"staffName" : '',
			"shopCode" : '',
			"shopName" : '',
			"shopId" : '',
			"status" : '',
			"code" : '',
			"stockId" : '',
			"goodId" : '',
			"stateId" : ''
		}
		overLoading();
		fctFormReceiptEstablish.getListDomain(objSearch, function(result) {
			if (result.status == '0') {
				bootboxAlertFocus($translate.instant(result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else if (result.length > 0) {
				$scope.listStatus = result;
				$scope.model.receiptStatus = $scope.listStatus[0];
				$scope.getReceiptNo();
			}
		});
		closeOverLay();
	}

	function parseDate(str) {
		if (str.length > 10) {
			str = (str.substr(0, 10)).split(new RegExp('-', 'i')).join('/');
		}
		var mdy = str.split('/');
		return new Date(mdy[2], mdy[1], mdy[0]);
	}

	$scope.searchInvoice = function() {
		var intfromdate = new Date(($("#startDate").val()));
		var inttodate = new Date(($("#endDate").val()));
		var momentObj = moment(new Date());
		if (intfromdate && inttodate) {
			if (moment($("#startDate").val(), "DD/MM/YYYY") > moment($("#endDate").val(), "DD/MM/YYYY")) {
				bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.EndDateBeforeStartDate'), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
				return;
			}
		}
		if (intfromdate && moment($("#startDate").val(), "DD/MM/YYYY") > moment(momentObj, "DD/MM/YYYY")) {
			bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.StartDateBeforeToday'), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		if (intfromdate && moment($("#endDate").val(), "DD/MM/YYYY") > moment(momentObj, "DD/MM/YYYY")) {
			bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.EndDateBeforeToday'), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		if ($scope.model.staff == null || $scope.model.staff == undefined) {
			bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.StaffEmpty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		var objSearch = {
			"shopId" : $scope.model.shop.shopId,
			"staffId" : ($scope.model.staff != null && $scope.model.staff != undefined) ? $scope.model.staff.staffId : '',
			"fromDate" : ($scope.model.startDate != null && $scope.model.startDate != undefined) ? $("#startDate").val() : '',
			"toDate" : ($scope.model.endDate != null && $scope.model.endDate != undefined) ? $("#endDate").val() : '',
			"invoiceType" : ($scope.model.invoiceType != null && $scope.model.invoiceType != undefined) ? $scope.model.invoiceType.code : '',
			"paymentMethod" : ($scope.model.paymentMethod != null && $scope.model.paymentMethod != undefined) ? $scope.model.paymentMethod.code : '',
		}
		overLoading();
		if (objSearch.invoiceType == '2') {
			fctFormReceiptEstablish.enqueryInvoiceBill(objSearch, function(result) {
				if (result.status == '0') {
					bootboxAlertFocus($translate.instant(result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else if (result.length > 0) {
					if (result.length > 5000) {
						bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.error.dataToMany"), "", $translate.instant("vnm.lable.vnm.name"), "");
						$scope.lstTablesInvoice = result.slice(0, 5000);
						$scope.itemSelected = $scope.lstTablesInvoice[0];
					} else {
						$scope.lstTablesInvoice = result;
						$scope.itemSelected = $scope.lstTablesInvoice[0];
					}
					createDataTableInvoice($scope.lstTablesInvoice);
					$scope.changeAccount();
					$scope.model.receiptStaffCode = $scope.model.staffCode;
					$scope.model.receiptStaffName = $scope.model.staffName;
					$scope.model.receiptStaffId = $scope.model.staff.staffId;
					$scope.model.receiptShopId = $scope.model.shop.shopId;
					$scope.model.receiptPaymentMethod = $scope.model.paymentMethod;

					$("#checkAll").css('width', '17px');
					closeOverLay();
				} else {
					$scope.model.receiptStaffCode = $scope.model.staffCode;
					$scope.model.receiptStaffName = $scope.model.staffName;
					$scope.lstTablesInvoice = result;
					createDataTableInvoice($scope.lstTablesInvoice);
					bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.alert.searchNotFound"), "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				}
			});
		} else {
			fctFormReceiptEstablish.searchInvoice(objSearch, function(result) {
				if (result.status == '0') {
					bootboxAlertFocus($translate.instant(result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else if (result.length > 0) {
					if (result.length > 5000) {
						bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.error.dataToMany"), "", $translate.instant("vnm.lable.vnm.name"), "");
						$scope.lstTablesInvoice = result.slice(0, 5000);
						$scope.itemSelected = $scope.lstTablesInvoice[0];
					} else {
						$scope.lstTablesInvoice = result;
						$scope.itemSelected = $scope.lstTablesInvoice[0];
					}
					createDataTableInvoice($scope.lstTablesInvoice);
					$scope.changeAccount();
					$scope.model.receiptInvoiceType = $scope.model.invoiceType.code;
					$scope.model.receiptStaffCode = $scope.model.staffCode;
					$scope.model.receiptStaffName = $scope.model.staffName;
					$scope.model.receiptPaymentMethod = $scope.model.paymentMethod;
					$scope.model.receiptStaffId = $scope.model.staff.staffId;
					$scope.model.receiptShopId = $scope.model.shop.shopId;

					$("#checkAll").css('width', '17px');
					closeOverLay();
				} else {
					$scope.model.receiptStaffCode = $scope.model.staffCode;
					$scope.model.receiptStaffName = $scope.model.staffName;
					$scope.lstTablesInvoice = result;
					createDataTableInvoice($scope.lstTablesInvoice);
					bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.alert.searchNotFound"), "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				}
			});
		}
		closeOverLay();
	}

	$scope.btnCreateReceiptOnClick = function() {
		// if ($scope.listSelectItemCheckBox == null || $scope.listSelectItemCheckBox == undefined || $scope.listSelectItemCheckBox.length <= 0) {
		// bootboxAlertFocus("Bạn chưa chọn danh sách hóa đơn nào!", "", $translate.instant("vnm.lable.vnm.name"), "");
		// } else {

		if ($scope.model.receiptStaffCode == null || $scope.model.receiptStaffCode == undefined || $scope.model.receiptStaffCode == '') {
			bootboxAlertFocus("Trường [Người nộp] bắt buộc phải nhập liệu", "", $translate.instant("vnm.lable.vnm.name"), "");
		} else if ($scope.model.grandTotal == '' || $scope.model.grandTotal == 0) {
			bootboxAlertFocus($translate.instant("vnm.FormReceiptEstablish.alert.create.empty.amount"), "", $translate.instant("vnm.lable.vnm.name"), "");
		} else {
			var objCreateInvoice = {
				"strDeliverer" : $scope.model.staff.staffName,
				"strDelivererStaffId" : $scope.model.receiptStaffId,
				"strNote" : $scope.model.note,
				"strReceiptNo" : $scope.model.invoiceReceiptNo,
				"strShopId" : $scope.model.receiptShopId,
				"strStaffId" : $scope.model.staff.staffId,
				"strReasonId" : '261',
				"strAccountCode" : $scope.model.account.code,
				"strPaymentMethod" : $scope.model.receiptPaymentMethod.code,
				"strAmount" : $scope.sumAmount(),
				"strOrgAmout" : $scope.sumAmount(),
				"strStatus" : '1',
				"strCreateDatetime" : $scope.model.receiptCreateDate,
				"strUserName" : $localStorage.clientContext.shop.staffName,
				"listReceipt" : $scope.listSelectItemCheckBox,
				"strType" : '1',
				"strInvoiceType" : $scope.model.invoiceType.code,
			}

			fctFormReceiptEstablish.createInvoice(objCreateInvoice, function(result) {
				if (result.status == '0') {
					bootboxAlertFocus($translate.instant("vnm.FormReceiptEstablish.alert.create.fail"), "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else {
					bootboxAlertFocus($translate.instant("vnm.FormReceiptEstablish.alert.create.success"), "", $translate.instant("vnm.lable.vnm.name"), "");
					$scope.searchInvoice();
					$scope.disablePrint = false;
					$("#formGroupBtnCreate").css('display', 'none');
					$("#formGroupBtnReCreate").css('display', 'block');
					closeOverLay();
				}
			});
		}

	}

	$scope.print = function() {
		overLoading();
		var strTitle = "";
		var strTitleEN = "";
		var strStaffAmountLable = "";
		$scope.lstReport = [];
		if ($scope.listSelectItemCheckBox == null || $scope.listSelectItemCheckBox == undefined || $scope.listSelectItemCheckBox.length == 0) {
			bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00069")).replace('%FIELD%', $translate.instant("vnm.FormBankTransactionApprove.label.button.print.transaction")),
					"", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		strTitle = $translate.instant("vnm.FormReceiptEstablish.title");
		strTitleEN = $translate.instant("vnm.FormReceiptEstablish.title2");
		strStaffAmountLable = $translate.instant("vnm.FormReceiptEstablish.StaffAmount");

		var ReportInput = {
			"strTitle" : strTitle,
			"strTitleEN" : strTitleEN,
			"strVoucherNo" : StringUtilNVL($scope.model.invoiceReceiptNo),
			"strCreateDate" : StringUtilNVL($scope.model.receiptCreateDate),
			"strBankName" : '',
			"strBankNo" : '',
			"strStaffAmountLable" : strStaffAmountLable,
			"strStaffAmount" : StringUtilNVL($scope.model.receiptAgentName),
			"strReason" : "Thu tiền bán hàng của nhân viên tại cửa hàng",
			"strAmountOriginal" : formatNumber(StringUtilNVL($scope.model.orgTotal)),
			"strAmountTotal" : formatNumber(StringUtilNVL($scope.model.grandTotal)),
			"strAmountWord" : numberToWord($scope.sumAmountOriginal),
			"strCollector" : $translate.instant("vnm.FormBankTransactionApprove.Collector"),
			"strCollectorEN" : $translate.instant("vnm.FormBankTransactionApprove.CollectorEN"),
			"strPayer" : $translate.instant("vnm.FormBankTransactionApprove.Payer"),
			"strPayerEN" : $translate.instant("vnm.FormBankTransactionApprove.PayerEN"),
			"fileTempName" : 'reportBankTransactionApprove',
			"fileType" : '.pdf'
		};

		$scope.lstReport.push(ReportInput);

		fctFormReceiptEstablish.exportFile(encodeURI(JSON.stringify($scope.lstReport)), function(result, status, header, config) {
			if (result.status == '0' && result.status != 'undefined') {
				bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else {
				download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				closeOverLay();
			}
		});
		// $scope.disablePrint = true;
	}

	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}
	var ChuSo = new Array($translate.instant("vnm.FormBankTransactionApprove.constants.zero"), $translate.instant("vnm.FormBankTransactionApprove.constants.one"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.two"), $translate.instant("vnm.FormBankTransactionApprove.constants.three"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.four"), $translate.instant("vnm.FormBankTransactionApprove.constants.five"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.six"), $translate.instant("vnm.FormBankTransactionApprove.constants.seven"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.eight"), $translate.instant("vnm.FormBankTransactionApprove.constants.nine"));
	var Tien = new Array("", $translate.instant("vnm.FormBankTransactionApprove.constants.thousand"), $translate.instant("vnm.FormBankTransactionApprove.constants.Million"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.billions"), $translate.instant("vnm.FormBankTransactionApprove.constants.thousands.of.billions"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.million.billion"));

	function DocSo3ChuSo(baso) {
		var tram;
		var chuc;
		var donvi;
		var KetQua = "";
		tram = parseInt(baso / 100);
		chuc = parseInt((baso % 100) / 10);
		donvi = baso % 10;
		if (tram == 0 && chuc == 0 && donvi == 0)
			return "";
		if (tram != 0) {
			KetQua += ChuSo[tram] + $translate.instant("vnm.FormBankTransactionApprove.constants.hundred");
			if ((chuc == 0) && (donvi != 0))
				KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.linh");
		}
		if ((chuc != 0) && (chuc != 1)) {
			KetQua += ChuSo[chuc] + $translate.instant("vnm.FormBankTransactionApprove.constants.muoi");
			if ((chuc == 0) && (donvi != 0))
				KetQua = KetQua + $translate.instant("vnm.FormBankTransactionApprove.constants.linh");
		}
		if (chuc == 1)
			KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.ten");
		switch (donvi) {
		case 1:
			if ((chuc != 0) && (chuc != 1)) {
				KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.mot");
			} else {
				KetQua += ChuSo[donvi];
			}
			break;
		case 5:
			if (chuc == 0) {
				KetQua += ChuSo[donvi];
			} else {
				KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.lam");
			}
			break;
		default:
			if (donvi != 0) {
				KetQua += ChuSo[donvi];
			}
			break;
		}
		return KetQua;
	}

	function numberToWord(SoTien) {
		var lan = 0;
		var i = 0;
		var so = 0;
		var KetQua = "";
		var tmp = "";
		var ViTri = new Array();
		if (SoTien < 0)
			return $translate.instant("vnm.FormBankTransactionApprove.constants.so.tien.am");
		if (SoTien == 0)
			return $translate.instant("vnm.FormBankTransactionApprove.constants.khong.dong");
		if (SoTien > 0) {
			so = SoTien;
		} else {
			so = -SoTien;
		}
		if (SoTien > 8999999999999999) {
			// SoTien = 0;
			return $translate.instant("vnm.FormBankTransactionApprove.constants.so.qua.lon");
		}
		ViTri[5] = Math.floor(so / 1000000000000000);
		if (isNaN(ViTri[5]))
			ViTri[5] = "0";
		so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
		ViTri[4] = Math.floor(so / 1000000000000);
		if (isNaN(ViTri[4]))
			ViTri[4] = "0";
		so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
		ViTri[3] = Math.floor(so / 1000000000);
		if (isNaN(ViTri[3]))
			ViTri[3] = "0";
		so = so - parseFloat(ViTri[3].toString()) * 1000000000;
		ViTri[2] = parseInt(so / 1000000);
		if (isNaN(ViTri[2]))
			ViTri[2] = "0";
		ViTri[1] = parseInt((so % 1000000) / 1000);
		if (isNaN(ViTri[1]))
			ViTri[1] = "0";
		ViTri[0] = parseInt(so % 1000);
		if (isNaN(ViTri[0]))
			ViTri[0] = "0";
		if (ViTri[5] > 0) {
			lan = 5;
		} else if (ViTri[4] > 0) {
			lan = 4;
		} else if (ViTri[3] > 0) {
			lan = 3;
		} else if (ViTri[2] > 0) {
			lan = 2;
		} else if (ViTri[1] > 0) {
			lan = 1;
		} else {
			lan = 0;
		}
		for (i = lan; i >= 0; i--) {
			tmp = DocSo3ChuSo(ViTri[i]);
			KetQua += tmp;
			if (ViTri[i] > 0)
				KetQua += Tien[i];
		}
		if (KetQua.substring(KetQua.length - 1) == ',') {
			KetQua = KetQua.substring(0, KetQua.length - 1);
		}
		KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2) + $translate.instant("vnm.FormBankTransactionApprove.constants.dong");
		return KetQua;
	}
	function createDataTableInvoice(dataItem) {
		oTableItemXXX = $('#tableFListInvoice').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"className" : "text-center",
			"bSort" : true,
			"info" : true,
			"order" : [],

			"scrollX" : true,
			"scrollY" : 275,
			"columns" : [ {
				"mData" : "invoice_no_new",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "staff_code",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "create_datetime",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "status",
				"render" : function(data, type, row) {
					x = $scope.loadNameStatus(data) == null ? '' : $scope.loadNameStatus(data);
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "checkBox",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return '<input type="checkbox" class="form-control" style="width: 25px;margin-left: 6px; " id="first-child" value="' + x + '"></input>';
				}
			}

			],
			"columnDefs" : [ {
				"targets" : 4, /*
								 * column index
								 */
				"orderable" : false, /*
										 * true or false
										 */
			} ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE
				}
			},
			"createdRow" : function(row, data, rowIndex) {

				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			}
		});

		$('#tableFListInvoice tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});
		// check box all
		$('#checkAll').off().on('click', function() {
			var rows = oTableItemXXX.rows({
				'search' : 'applied'
			}).nodes();
			$('input[type="checkbox"]', rows).prop('checked', this.checked);
			$scope.checkAllCheckBox();

		});

		// check box row
		$('#tableFListInvoice').off().on('click', 'input[type="checkbox"]', function(e, dt, type, indexes) {
			$scope.onCheckedClick(this.value);
		});

	}
	$scope.loadNameStatus=function(status){
		var name="";
		if (status=="2")
			{
				name="Duyệt";
			}
		else
		{
			name=status;
		}
		return name;
	}

	$scope.sumAmountOriginal;

	$scope.sumAmount = function() {
		var sum = 0;
		for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
			sum += Number($scope.listSelectItemCheckBox[i].org_total);

		}
		$scope.model.orgTotal = formatNumber(sum);
		$scope.model.grandTotal = formatNumber(sum);
		$scope.sumAmountOriginal = sum;
		return sum;
	}

	// Xử lý các sự kiện checkBox
	$scope.checkAllCheckBox = function() {
		if ($('#checkAll:checked').length > 0) { // Khi click
			// check all
			$scope.listSelectItemCheckBox = $scope.lstTablesInvoice.slice(0, $scope.lstTablesInvoice.length);
			$scope.model.checkAll = true;
			$scope.sumAmount();
		} else { // Khi bo click check all
			$scope.listSelectItemCheckBox = [];
			$scope.model.checkAll = false;
			$scope.sumAmount();
		}
	}
	$scope.findRow = function(checkBox) {
		var row = {};
		for (var i = 0; i < $scope.lstTablesInvoice.length; i++) {
			if ($scope.lstTablesInvoice[i].checkBox == checkBox) {
				row = $scope.lstTablesInvoice[i];
				break;
			}

		}
		return row;
	}

	$scope.checkListSelectItemCheckBox = function(row) {
		var check = 0;
		if ($scope.listSelectItemCheckBox.length == 0) {
			return 0;
		}
		for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
			if ($scope.listSelectItemCheckBox[i].checkBox == row.checkBox) {
				check = check + 1;
			}

		}
		if (check == 0)
			return 0;
		else
			return 1;
	}
	$scope.onCheckedClick = function(checkBox) {
		var row = $scope.findRow(checkBox);
		if ($scope.checkListSelectItemCheckBox(row) == 0) {
			$scope.listSelectItemCheckBox.push(row);
			$scope.sumAmount();
		} else {
			for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
				if ($scope.listSelectItemCheckBox[i].checkBox == row.checkBox) {
					$scope.listSelectItemCheckBox.splice(i, 1);
					break;
				}

			}
			$scope.sumAmount();
		}
		if ($scope.listSelectItemCheckBox.length == $scope.lstTablesInvoice.length) {
			$scope.model.checkAll = true;
		} else {
			$scope.model.checkAll = false;
		}

	}
	// end xử lý các sự kiện checkbox

	$scope.getShop = function() {
		overLoading();
		var data = {
			"status" : '1',
			"shopStockId" : $localStorage.clientContext.shop.shopId
		}

		fctFormReceiptEstablish.getShop(data, function(result) {

			if (result != null && result.length > 0) {
				$scope.listShop = result;
				for (var i = 0; i < result.length; i++) {
					if (result[i].shopId == $localStorage.clientContext.shop.shopId) {
						$scope.model.shop = result[i];
						$scope.model.shopName = $scope.model.shop.shopName;
						$scope.model.shopCode = $scope.model.shop.shopCode;
						document.getElementById('shopCode').title = $scope.model.shopCode;
						document.getElementById('shopName').title = $scope.model.shopName;
						break;
					}
				}
				$scope.getStaff($scope.model.shop.shopId);
			}
			closeOverLay();
		});

	}

	$scope.onShopChange = function() {
		var check = "0";
		for (var i = 0; i < $scope.listShop.length; i++) {
			if ($scope.listShop[i].shopCode == $scope.model.shopCode) {
				$scope.model.shop = $scope.listShop[i];
				$scope.model.shopCode = $scope.listShop[i].shopCode;
				$scope.model.shopName = $scope.listShop[i].shopName;
				$scope.getStaff($scope.listShop[i].shopId);
				break;
			}
		}
	}

	$scope.onStaffChange = function() {
		var check = 0;
		for (var i = 0; i < $scope.listStaff.length; i++) {
			if ($scope.listStaff[i].code.toUpperCase() == $scope.model.staffCode.trim().toUpperCase()) {
				$scope.model.staff = $scope.listStaff[i];
				$scope.model.staffCode = $scope.listStaff[i].code;
				$scope.model.staffName = $scope.listStaff[i].name;
				check = 1;
				break;
			}
		}
		if (check == 0) {
			$scope.model.staff = null;
			$scope.showModalFunction("modalListStaff");
			$scope.itemSelectedListStaff = null;
			createDataTableListStaff($scope.listStaff);
		}
	}

	$scope.onShopBlur = function() {
		var check = 0;
		for (var i = 0; i < $scope.listShop.length; i++) {
			if ($scope.listShop[i].shopCode.toUpperCase() == $scope.model.shopCode.trim().toUpperCase()) {
				$scope.model.shop = $scope.listShop[i];
				$scope.model.shopCode = $scope.listShop[i].shopCode;
				$scope.model.shopName = $scope.listShop[i].shopName;
				$scope.getFStaff($scope.listShop[i].shopId);
				check = 1;
				break;
			}
		}
		if (check == 0) {
			$scope.model.shop = null;
			$scope.showModalFunction("modalListShop");
			$scope.itemSelectedListShop = null;
			createDataTableListShop($scope.listShop);
		}
		if ($scope.model.shopCode == undefined && $scope.model.shopCode == "") {
			$scope.model.shopCode = "";
			$scope.model.shopName = "";
			$scope.model.shopId = "";
			document.getElementById('shopCode').title = '';
			document.getElementById('shopName').title = '';

		}
		if ($scope.model.shop != null || $scope.model.shop != undefined) {
			$scope.getFStaff($scope.model.shop.shopId);
		}

	}

	// $("#shopCode").keyup(function(e) {
	// var code = (e.keyCode ? e.keyCode : e.which);
	// if (code == '120') {
	// $scope.showModalFunction("modalListShop");
	// createDataTableListShop($scope.listShop);
	// } else {
	// if ($scope.model.shopCode == '')
	// $scope.model.shopName = '';
	// }
	// });
	
	$("#staffCode").click(function(e) {
		if ($scope.model.shopCode == null || $scope.model.shopCode == undefined || "" == $scope.model.shopCode.trim()) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelectedShop"), "fShopCode", $translate.instant("vnm.lable.vnm.name"), "");
		}
	});

	$("#shopCode").keyup(
			function(e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				if (code == '120') {
					$scope.itemSelectedListShop = $scope.listShop[0];
					$scope.initSearchShop = $scope.model.shopCode;
					for (var i = 0; i < $scope.listShop.length; i++) {
						if ($scope.model.shopCode != null
								&& $scope.model.shopCode != undefined
								&& ($scope.listShop[i].shopCode.toUpperCase().includes($scope.model.shopCode.trim().toUpperCase()) || $scope.listShop[i].shopName.toUpperCase().includes(
										$scope.model.shopCode.trim().toUpperCase()))) {
							$scope.itemSelectedListShop = $scope.listShop[i];
							break;
						}
					}
					$scope.showModalFunction("modalListShop");
					createDataTableListShop($scope.listShop);
				} else if (code == '13') {
					$scope.onShopBlur();
				} else {
					if ($scope.model.shopCode == '') {
						$scope.model.shopName = '';
						$scope.model.shopId = '';
						document.getElementById('shopCode').title = '';
						document.getElementById('shopName').title = '';
					}
				}
			});

	$("#staffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListStaff");
			createDataTableListStaff($scope.listStaff);
		} else {
			if ($scope.model.staffCode == '')
				$scope.model.staffName = '';
		}
	});

	function createDataTableListShop(dataItem) {
		oTableFListShop = $('#tblListShop').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"order" : [],
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "250",
			"columns" : [ {
				"mData" : "shopCode",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "shopName",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
				}
			} ],
			 "fnInitComplete" : function(oSettings, json) {
			 var table = $('#tblListShop').DataTable();
			 table.rows(0).nodes().to$().addClass('selected');
			 $('.dataTables_scrollBody thead tr').css({
			 visibility : 'collapse'
			 });
			 var dataRowSelected = table.row(0).data();
			 $scope.itemSelectedListShop = dataRowSelected;
			 },
			"createdRow" : function(row, data, rowIndex) {
				if ($scope.itemSelectedListShop != undefined && $scope.itemSelectedListShop != null) {
					if ($scope.itemSelectedListShop.shopCode == data.shopCode) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
			},
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sSearch" : LABEL_SEARCH,
				"sLengthMenu" : "_MENU_",
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"oSearch" : {
				"sSearch" : $('#shopCode').val()
			}
		});

		$('#tblListShop tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListShop.row(this).data();
			oTableFListShop.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListShop = rowData;
		});
	}

	function createDataTableListStaff(dataItem) {
		oTableFListStaff = $('#tblListStaff').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"order" : [],
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "250",
			"columns" : [ {
				"mData" : "code",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			} ],
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#tblListStaff').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				var dataRowSelected = table.row(0).data();
				$scope.itemSelectedListStaff = dataRowSelected;

			},
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sSearch" : LABEL_SEARCH,
				"sLengthMenu" : "_MENU_",
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"oSearch" : {
				"sSearch" : $('#staffCode').val()
			}
		});

		$('#tblListStaff tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListStaff.row(this).data();
			oTableFListStaff.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListStaff = rowData;
		});
	}
	$scope.updateFormShop = function() {
		if ($scope.itemSelectedListShop != null || $scope.itemSelectedListShop != undefined) {
			$scope.model.shop = $scope.itemSelectedListShop;
			$scope.model.shopCode = $scope.itemSelectedListShop.shopCode.trim();
			$scope.model.shopName = $scope.itemSelectedListShop.shopName.trim();
			document.getElementById('shopCode').title = $scope.model.shopCode;
			document.getElementById('shopName').title = $scope.model.shopName;
			$scope.getFStaff($scope.model.shop.shopId);
			$scope.hideModalFunction("modalListShop");
		}
	}

	$scope.updateFormStaff = function() {
		$scope.model.staff = $scope.itemSelectedListStaff;
		$scope.model.staffCode = $scope.itemSelectedListStaff.code;
		$scope.model.staffName = $scope.itemSelectedListStaff.name;
		document.getElementById('staffCode').title = $scope.model.staffCode;
		document.getElementById('staffName').title = $scope.model.staffName;
		$scope.hideModalFunction("modalListStaff");
	}
	$scope.dialogListShopActionBack = function() {
		$scope.hideModalFunction("modalListShop");
	}

	$scope.dialogListStaffActionBack = function() {
		$scope.hideModalFunction("modalListStaff");
	}

	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}

	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');

		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
			angular.element($("#tblListStaff_filter").find("input")[0]).focus();
			angular.element($("#tblListShop_filter").find("input")[0]).focus();
		});
	}

	$scope.getFStaff = function(shopId) {
		var data = shopId;
		overLoading();
		$scope.listStaff = [];
		$scope.model.staff = null;
		$scope.model.staffName = "";
		$scope.model.staffCode = "";
		fctFormReceiptEstablish.getStaff(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listStaff = result;
				for (var i = 0; i < $scope.listStaff.length; i++) {
					if (result[i].staffId == $localStorage.clientContext.shop.staffId) {
						$scope.model.staffCode = result[i].code;
						$scope.model.staffName = result[i].name;
						$scope.model.staffId = result[i].staffId;
						// break;
					}

				}
				$scope.model.staff = {
					'staffId' : $scope.model.staffId,

				}
				// $scope.model.staff = result[];

				// $scope.model.staffName = $scope.model.staff.name;
				// $scope.model.staffCode = $scope.model.staff.code;
			} else {
				$scope.listStaff = [];
			}

		});
		closeOverLay();

	}

	// load Nhân viên
	$scope.getStaff = function(shopId) {
		var data = shopId;
		overLoading();
		$scope.listStaff = [];
		$scope.model.staff = null;
		$scope.model.staffName = "";
		$scope.model.staffCode = "";
		fctFormReceiptEstablish.getStaff(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listStaff = result;
				for (var i = 0; i < $scope.listStaff.length; i++) {
					if (result[i].staffId == $localStorage.clientContext.shop.staffId) {
						$scope.model.staffCode = result[i].code;
						$scope.model.staffName = result[i].name;
						$scope.model.staffId = result[i].staffId;
						// break;
					}

				}
				$scope.model.staff = {
					'staffId' : $scope.model.staffId,

				}
				// $scope.model.staff = result[];

				// $scope.model.staffName = $scope.model.staff.name;
				// $scope.model.staffCode = $scope.model.staff.code;
			} else {
				$scope.listStaff = [];
			}

		});
		$scope.getInvoiceType();
		closeOverLay();

	}

	$scope.getInvoiceType = function() {
		fctFormReceiptEstablish.getInvoiceType(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listInvoiceType = result;
					$scope.model.invoiceType = result[0];
					$scope.model.invoiceTypeCode = $scope.model.invoiceType.code;
					$scope.model.invoiceTypeName = $scope.model.invoiceType.name;
					document.getElementById('invoiceTypeCode').title = $scope.model.invoiceTypeCode;
					document.getElementById('invoiceTypeName').title = $scope.model.invoiceTypeName;
					$scope.getPaymentMethod();
					$scope.changeAccount();
					closeOverLay();
				}
			}
		});

	}

	$scope.getPaymentMethod = function() {
		fctFormReceiptEstablish.getPaymentMethod(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listPaymentMethod = result;
					$scope.model.paymentMethod = result[0];
					$scope.model.paymentMethodCode = $scope.model.paymentMethod.code;
					$scope.model.paymentMethodName = $scope.model.paymentMethod.name;
					document.getElementById('paymentMethodCode').title = $scope.model.paymentMethodCode;
					document.getElementById('paymentMethodName').title = $scope.model.paymentMethodName;
					$scope.getListReceiptType()
					$scope.model.receiptPaymentMethod = $scope.model.paymentMethod;
					closeOverLay();
				}
			}
		})
	}

	$scope.onChooseInvoiceType = function() {
		$scope.model.invoiceTypeCode = $scope.model.invoiceType.code;
		$scope.model.invoiceTypeName = $scope.model.invoiceType.name;
		document.getElementById('invoiceTypeCode').title = $scope.model.invoiceTypeCode;
		document.getElementById('invoiceTypeName').title = $scope.model.invoiceTypeName;

	}

	$scope.changeAccount = function() {
		for (var i = 0; i < $scope.model.listAccount.length; i++) {
			if ($scope.model.invoiceTypeCode == $scope.model.listAccount[i].type) {
				$scope.model.account = $scope.model.listAccount[i];
				break;
			}
		}
	}

	$scope.onChoosePaymentMethod = function() {
		$scope.model.paymentMethodCode = $scope.model.paymentMethod.code;
		$scope.model.paymentMethodName = $scope.model.paymentMethod.name;
		document.getElementById('paymentMethodCode').title = $scope.model.paymentMethodCode;
		document.getElementById('paymentMethodName').title = $scope.model.paymentMethodName;
	}

	$scope.getReceiptNo = function() {
		var data = {
			"strShopCode" : $localStorage.clientContext.shop.shopCode,
			"strCurrentNumber" : "lpad((curr_number + 1),9,'0')",
			"strShopId" : $localStorage.clientContext.shop.shopId,
			"strType" : '1'
		}

		fctFormReceiptEstablish.getReceiptNo(data, function(result) {
			if (result != null && result != undefined) {
				if (result == "") {
					bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.MSG-A0004"), "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				} else if (result != "") {
					$scope.model.invoiceReceiptNo = result;
				}
			}
		});
	}

	$scope.loadFormDefault = function() {
		overLoading();
		$scope.getShop();
		closeOverLay();
	}

	$scope.loadFormDefault();

	$scope.btnReCreateOnclick = function() {
		$scope.model.orgTotal = 0;
		$scope.model.grandTotal = 0;
		$scope.getReceiptNo();
		$("#formGroupBtnCreate").css('display', 'block');
		$("#formGroupBtnReCreate").css('display', 'none');
		$scope.listSelectItemCheckBox = [];
	}
});