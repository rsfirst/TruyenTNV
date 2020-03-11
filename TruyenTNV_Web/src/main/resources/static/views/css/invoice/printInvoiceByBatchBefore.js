var rootPath = "/bs/cinvoiceNew/printByBatchNew";
app_vnm.factory('prepaidBF', function($http, $translate) {
	return {
		listPayMethod : function(callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListPayMethod";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		searchInvoice : function(billInput, callback) {
			var url = eim_url + rootPath + '/searchNew';
			$http.post(url, billInput).success(callback).error(function(callback) {
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			});
		},

		printInvoice : function(vctPrintInvoice, callback) {
			var url = eim_url + rootPath + '/printNew';
			$http.post(url, vctPrintInvoice).success(callback).error(function(callback) {
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});

app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, prepaidBF) {

	$scope.model = {};
	$scope.totalTest = 0;
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {},
		messages : {}
	}
	/* var dataCInvoiceCheckAll = []; */
	$scope.CInvoiceSelected = [];
	$scope.dataTable = [];
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

	var idAttachMentVal = null;
	var idAttachMentTypeInput = null;

	getListPaymentType = function() {
		overLoading("Loading...");
		var url = eim_url + "/bs/SourcePaymentType";
		$http.get(url).success(function(data) {
			closeOverLay();
			$scope.PaymentTypeSource = data;
			$scope.model.subPaymentsType = data[0].glCodeValueEn;
		}).error(function(response) {
			closeOverLay();
		});
	}

	var initialize = function() {
		getListPaymentType();
		var x = new Date();
		x.setDate(1);
		x.setMonth(x.getMonth() - 1);

		var y = new Date();
		y.setDate(0);
		$scope.model.searchFromDate = $filter('date')(x, 'dd/MM/yyyy');
		$scope.model.searchToDate = $filter('date')(y, 'dd/MM/yyyy');
		$scope.model.cusType = $scope.lstCusType[0].Id;
		$scope.model.checkboxPrintCombine = false;
	}

	$scope.RegionSource = [ {
		'Id' : 'Northern',
		'Title' : 'Miền bắc'
	}, {
		'Id' : 'Central',
		'Title' : 'Miền trung'
	}, {
		'Id' : 'Southward',
		'Title' : 'Miền nam'
	} ];
	$scope.lstCusType = [ {
		'Id' : 'AL',
		'Title' : 'Tất cả'
	}, {
		'Id' : 'Family',
		'Title' : 'Cá Nhân'
	}, {
		'Id' : 'Corporate',
		'Title' : 'Tổ Chức'
	} ];

	// $scope.CustTypeSource = [
	// {'Id' : '0', 'Title' : 'Cá nhân'},
	// {'Id' : '1', 'Title' : 'Tổ chức'}
	// ];

	initialize();

	$scope.onSelectedChangeSubSubPaymentsType = function() {
		removeErrorClassElement("idDivSubPaymentsType");
	}

	// $scope.disableCN = false;
	// $scope.model.custType = '0';
	// $scope.onChangeCustType = function() {
	// if ($scope.model.custType == '0') {
	// $scope.disableCN = false;
	// } else {
	// $scope.disableCN = true;
	// }
	// }

	$scope.checkAllInvoice = function() {
		angular.forEach($scope.dataTable, function(item) {
			item.checked = $scope.model.checkAll.checked;
		})
		if ($scope.isAllRowChecked($scope.dataTable)) {
			for (var i = 0; i < $scope.dataTable.length; i++) {
				$scope.CInvoiceSelected.push($scope.dataTable[i]);
			}
		} else {
			$scope.CInvoiceSelected = [];
		}
	}
	$scope.isAllRowChecked = function(listDataTable) {
		var resultCheck = false;

		if (listDataTable.length == 0) {
			return false;
		}
		var countRowCheck = 0;
		for (var i = 0; i < listDataTable.length; i++) {
			if (listDataTable[i].checked == true) {
				countRowCheck++;
			}
		}

		if (countRowCheck == listDataTable.length) {
			resultCheck = true;
		}
		return resultCheck;
	}
	$scope.selectOrRemoveCInvoiceItem = function(item) {
		var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataTable);
		if (isHeaderGoodItem) {
			$scope.model.checkAll.checked = true;
			$scope.CInvoiceSelected = [];
			for (var i = 0; i < $scope.dataTable.length; i++) {
				$scope.CInvoiceSelected.push($scope.dataTable[i]);
			}
		} else {
			$scope.model.checkAll.checked = false;
			if (item.checked == true) {
				$scope.CInvoiceSelected.push(item);
			} else {
				$scope.CInvoiceSelected.pop(item);
			}

		}
	}
	// validate
	$scope.validateInput = function() {
		if (StringUtilNVL($scope.model.parentAddRegion) == EMPTY_VALUE) {
			bootbox.alert($translate.instant('vnm.print_invoice_batch_before.mess.region.required'));
			return false;
		}
		if (StringUtilNVL($scope.model.searchFromDate) == EMPTY_VALUE) {
			bootbox.alert($translate.instant('vnm.print_invoice_batch_before.mess.fromdate.required'));
			return false;
		}
		if (StringUtilNVL($scope.model.searchToDate) == EMPTY_VALUE) {
			bootbox.alert($translate.instant('vnm.print_invoice_batch_before.mess.todate.required'));
			return false;
		}

		var fromDate = $scope.model.searchFromDate;
		var toDate = $scope.model.searchToDate;

		if (fromDate > toDate) {
			bootbox.alert($translate.instant('vnm.print_invoice_batch_before.mess.date.compare'));
			return false;
		}
		if (($("#searchFromDate").val().substring(3, 5) != $("#searchToDate").val().substring(3, 5))
				|| ($("#searchFromDate").val().substring(6, 10) != $("#searchToDate").val().substring(6, 10))) {
			bootbox.alert($translate.instant('vnm.print_invoice_batch_before.mess.date.notEqualsMonth'));
			return false;
		}

		return true;
	}

	// submit
	$scope.onSubmitToSearch = function() {
		if (!$scope.validateInput())
			return;
		var billInput = {};
		$scope.disablePrint = true;
		$scope.model.checkboxPrintCombine = false;
		$scope.CInvoiceSelected = [];
		$scope.dataTable = [];
		billInput.paymentType = $scope.model.subPaymentsType;
		billInput.region = $scope.model.parentAddRegion;
		billInput.fromDate = $("#searchFromDate").val();
		billInput.toDate = $("#searchToDate").val();
		billInput.taxCode = $scope.model.taxCode;
		billInput.idCard = $scope.model.idCard;
		billInput.cusType = $scope.model.cusType;
		billInput.account = $scope.model.account;
		/*
		 * $scope.tableDataResult = new NgTableParams({}, { dataset : [] });
		 */
		$scope.model.checkAll = false;
		App.blockUI({
			target : "#printInvoiceBefore",
			boxed : true,
			message : 'Loading...'
		});

		prepaidBF.searchInvoice(billInput, function(result) {
			$scope.totalTest = result.payload.length;
			if (result.payload.length > 0)
				$scope.disablePrint = false;
			$scope.dataTable = result.payload;
			for (var i = 0; i < $scope.dataTable.length; i++) {
				$scope.dataTable[i].isdnFormat0 = $scope.formatMsisdn0($scope.dataTable[i].msisdn);
			}
			/*
			 * $scope.tableDataResult = new NgTableParams({}, { dataset : result.payload });
			 */
			App.unblockUI("#printInvoiceBefore");
		});
	}

	// print
	$scope.disablePrint = true;
	$scope.onSubmitToPrint = function() {
		var vctPrintInvoice = {};
		var lstCustCinvoiceData = [];
		if ($scope.CInvoiceSelected.length == undefined || $scope.CInvoiceSelected.length == 0) {
			bootbox.alert("Không có hoá đơn được chọn để in!");
			return;
		}

		App.blockUI({
			target : "#printInvoiceBefore",
			boxed : true,
			message : 'Loading...'
		});

		for (var j = 0; j < $scope.CInvoiceSelected.length; j++) {
			var custCinvoiceData = {};
			custCinvoiceData.msisdn = $scope.CInvoiceSelected[j].msisdn;
			custCinvoiceData.billAccName = $scope.CInvoiceSelected[j].billAccName;
			custCinvoiceData.postPaidAccNo = $scope.CInvoiceSelected[j].postPaidAccNo;
			custCinvoiceData.total = $scope.CInvoiceSelected[j].total;
			custCinvoiceData.issDate = $scope.CInvoiceSelected[j].issDate;
			custCinvoiceData.invoiceAmmout = $scope.CInvoiceSelected[j].invoiceAmmout;
			custCinvoiceData.custInvoiceNum = $scope.CInvoiceSelected[j].custInvoiceNum;
			custCinvoiceData.startCycle = $scope.CInvoiceSelected[j].startCycle;
			custCinvoiceData.endCycle = $scope.CInvoiceSelected[j].endCycle;
			custCinvoiceData.status = $scope.CInvoiceSelected[j].status;
			custCinvoiceData.note = $scope.CInvoiceSelected[j].note;
			custCinvoiceData.custName = $scope.CInvoiceSelected[j].custName;
			custCinvoiceData.add = $scope.CInvoiceSelected[j].add;
			custCinvoiceData.tel = $scope.CInvoiceSelected[j].tel;
			custCinvoiceData.tax = $scope.CInvoiceSelected[j].tax;
			custCinvoiceData.mdn = $scope.CInvoiceSelected[j].mdn;
			custCinvoiceData.custRefNo = $scope.CInvoiceSelected[j].custRefNo
			lstCustCinvoiceData.push(custCinvoiceData);

		}
		var mstrBlockNo = "";
		var mstrSerialNo = "";
		vctPrintInvoice.mstrBlockNo = mstrBlockNo;
		vctPrintInvoice.mstrSerialNo = mstrSerialNo;
		vctPrintInvoice.lstCustCinvoiceData = lstCustCinvoiceData;
		vctPrintInvoice.shopCode = $localStorage.clientContext.shop.shopCode;
		vctPrintInvoice.userName = $localStorage.clientContext.shop.staffCode;
		vctPrintInvoice.staff_id = $localStorage.clientContext.shop.staffId;
		vctPrintInvoice.shop_id = $localStorage.clientContext.shop.shopId;
		if ($scope.model.checkboxPrintCombine) {
			vctPrintInvoice.chkPrintCombine = "COMBINE";
		} else {
			vctPrintInvoice.chkPrintCombine = "NOT_COMBINE";
		}
		prepaidBF.printInvoice(vctPrintInvoice, function(result) {
			if (result.payload == undefined) {
				$scope.disablePrint = true;
				bootbox.alert("Có lỗi trong quá trình in!");
			} else {
				// for (var j = 0; j < $scope.CInvoiceSelected.length; j++) {
				for (var i = 0; i < $scope.dataTable.length; i++) {
					var row = $scope.dataTable[i];
					var custInvoiceNum = row.custInvoiceNum;
					for (var j = 0; j < result.payload.length; j++) {
						if (custInvoiceNum == result.payload[j].custInvoiceNum) {
							if ((result.payload[j].status).indexOf("http:") >= 0) {
								$scope.dataTable[i].note = $translate.instant('vnm.print_invoice_batch_before.PRINT.SUCCESS');
								$scope.dataTable[i].linkPrint = result.payload[j].status;
								$scope.dataTable[i].debtTotal = "0";

							} else {
								$scope.dataTable[i].note = $translate.instant('vnm.print_invoice_batch_before.PRINT.FAIL');
								$scope.dataTable[i].linkPrint = result.payload[j].status;
							}
							$scope.disablePrint = true;
						}
						/*
						 * if (i == dataCInvoiceCheckAll.length - 1) { $scope.tableDataResult = new NgTableParams({}, { dataset : dataCInvoiceCheckAll }); }
						 */
					}
				}

			}
			console.log(result.payload);
			App.unblockUI("#printInvoiceBefore");
		});

	}
	// formatMsisdn0
	$scope.formatMsisdn0 = function(msisdn) {
		var msisdnValue = null;

		if (undefined == msisdn || "" == $.trim(msisdn)) {
			return msisdnValue;
		}
		msisdn = $.trim(msisdn);
		if (msisdn.startsWith("84")) {
			msisdnValue = "0" + msisdn.substring(2);
		} else if (!msisdn.startsWith("0")) {
			msisdnValue = "0" + msisdn;
		} else {
			msisdnValue = msisdn;
		}
		if (msisdnValue.length < 10 || msisdnValue.length > 11) {
			msisdnValue = null;
		}
		return msisdnValue;
	}
	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;
	$scope.model.status = 'Giữ số';

	// BEGIN validate input

	$scope.model.serialNew = '';

	// BEGIN LOAD IMAGE table 1
	$scope.model.fileAttachments = [];

	var uploader = $scope.uploader = new FileUploader({
		url : eim_url + "/bs/Custome/uploadImage"
	});
	// config uploader
	uploader.queueLimit = 12;
	// Another user-defined filter
	uploader.filters.push({
		'name' : 'enforceMaxFileSize',
		'fn' : function(item, options) {
			var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
			if ('|jpg|png|jpeg|bmp|gif|'.indexOf(type) == -1) {
				var fileName = item.name;
				$scope.messages = "Tệp tin " + fileName + " không hợp lệ.";
				App.notifyDanger($scope.messages);
				return false;
			} else {
				var sizeFile = item.size;
				if (sizeFile <= 10485760) {
					return true;
				} else {
					var fileName = item.name;
					// var message = messageSizeErrorClient.replace(/###/,
					// fileName);
					$scope.messages = "Dung lượng tệp " + fileName + " không được vượt quá 10MB";
					App.notifyDanger($scope.messages);
					return false;
				}
			}
		}
	});

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

function onSubmit() {

}
