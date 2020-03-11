app_vnm.factory('fctFormLookUpTransaction', function($http, $translate) {
	return {

		getStaff : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getLovShop : function(data, callback) {
			var url = eim_url + "/epos/inventory/RenewWarrantyNumber/getLowReceiverAgent";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getApDomain : function(data, callback) {
			var url = eim_url + "/epos/sales/FormEnqueryWar/getApdomain";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		onSearch : function(data, callback) {
			var url = eim_url + "/epos/sales/formLookUpTransaction/onSearch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		enqueryTransactionDetail : function(data, callback) {
			var url = eim_url + "/epos/sales/formLookUpTransaction/enqueryTransactionDetail";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getSerialInfor : function(data, callback) {
			var url = eim_url + "/epos/sales/formLookUpTransaction/getSerialInfor";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getTemplateValue";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		exportFile2 : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getParamsPrint : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getParamsPrint";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/exportFile";
			$http.post(url, data, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}

})

app_vnm.controller('FormLookUpTransactionController', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, fctFormLookUpTransaction) {

	function isDate(txtDate) {
		var currVal = txtDate;
		if (currVal == '')
			return false;

		// Declare Regex
		var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
		var dtArray = currVal.match(rxDatePattern); // is format
		// OK?

		if (dtArray == null)
			return false;

		// Checks for dd/mm/yyyy format.
		dtDay = dtArray[1];
		dtMonth = dtArray[3];
		dtYear = dtArray[5];

		if (dtMonth < 1 || dtMonth > 12)
			return false;
		else if (dtDay < 1 || dtDay > 31)
			return false;
		else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
			return false;
		else if (dtMonth == 2) {
			var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
			if (dtDay > 29 || (dtDay == 29 && !isleap))
				return false;
		}
		return true;
	}

	$scope.onBlurCheckDate = function(dateString) {
		if ($("#fromDate").val() != null && $("#fromDate").val() != "") {
			if (!isDate($("#fromDate").val())) {
				bootboxAlertFocus($translate.instant('"Ngày phải có định dạng DD/MM/YYYY"'), "", $translate.instant("vnm.lable.vnm.name"), "");
				$("#fromDate").val("");
				var momentObj = moment(new Date());
				var momentString = momentObj.format('DD/MM/YYYY');
				$scope.model.fromDate = momentString;
				return;
			}
		}

	}
	$scope.onBlurCheckToDate = function(dateString) {
		if ($("#toDate").val() != null && $("#toDate").val() != "") {
			if (!isDate($("#toDate").val())) {
				bootboxAlertFocus($translate.instant('"Ngày phải có định dạng DD/MM/YYYY"'), "", $translate.instant("vnm.lable.vnm.name"), "");
				$("#toDate").val("");
				var momentObj = moment(new Date());
				var momentString = momentObj.format('DD/MM/YYYY');
				$scope.model.toDate = momentString;
				return;
			}
		}

	}

	// FORM///
	$scope.model = {};
	$scope.disabledPrint = true;
	$scope.listShop = [];
	$scope.listStaff = [];
	$scope.listCustType = [];
	$scope.listPayMethod = [];
	$scope.listStatus = [];
	// Load Từ ngày và tới ngày
	var momentObj = moment(new Date());
	var momentString = momentObj.format('DD/MM/YYYY');
	$scope.model.fromDate = momentString;
	$scope.model.toDate = momentString;

	// Load Cửa hàng
	$scope.getLovShop = function() {
		var data = $localStorage.clientContext.shop.shopId;

		fctFormLookUpTransaction.getLovShop(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listShop = result;
				$scope.model.shopCode = $scope.listShop[0].code;
				$scope.model.shopName = $scope.listShop[0].name;
				$scope.model.stockId = $scope.listShop[0].stockId;
				$scope.model.shopStaffId = $scope.listShop[0].shopStaffId;
				closeOverLay();
				$scope.getStaff($scope.listShop[0].shopStaffId);
			}

		});
	};
	// load Nhân viên
	$scope.getStaff = function(shopId) {
		var data = shopId;

		fctFormLookUpTransaction.getStaff(data, function(result) {
			if (result != null && result) {
				$scope.listStaff = result;
				$scope.model.staffCode = "";
				$scope.model.staffName = "";
				closeOverLay();
			}

		})
	}
	// lOAD kIỂU GIAO DỊCH
	$scope.getCustType = function() {
		var data = "15";

		fctFormLookUpTransaction.getApDomain(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listCustType = result;
				for (var i = 0; i < $scope.listCustType.length; i++) {
					if ($scope.listCustType[i].code == '4' || $scope.listCustType[i].status != '1') {
						$scope.listCustType.splice(i, 1);
					}
				}
				$scope.model.custType = $scope.listCustType[0];
				closeOverLay();
				$scope.getLovShop();
			}

		});
	};
	// lOAD HÌNH THỨC THANH TOÁN
	$scope.getPayMethod = function() {
		overLoading();
		var data = "12";
		fctFormLookUpTransaction.getApDomain(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listPayMethod = result;
				$scope.model.payMethod = $scope.listPayMethod[0];
				closeOverLay();
				$scope.getCustType();
			}

		});
	};
	// LOAD STATUS
	$scope.getStatus = function() {
		overLoading();
		var data = "09";
		fctFormLookUpTransaction.getApDomain(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listStatus = result;
				closeOverLay();
				$scope.getPayMethod();

			}

		});
	};

	$scope.initData = function() {
		overLoading();
		$scope.getStatus();
		closeOverLay();
	}
	$scope.initData();
	$scope.setPrint = function() {
		if ($scope.model.custType.code == '1' || $scope.model.custType.code == '6') {
			$scope.disabledPrint = true;
		} else {
			$scope.disabledPrint = false;
			$scope.transId = '';
		}
	}
	// Xử lý form
	// COMMBOBOX UPDATE
	$("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.listShop);
		} else {
			if ($scope.model.shopCode == '') {
				$scope.model.shopName = '';
				$scope.model.shopCode = '';
				$scope.model.stockId = '';
				$scope.model.shopStaffId = '';
				$scope.model.staffCode = '';
				$scope.model.staffName = '';
				$scope.model.staffId = '';
				$scope.disabledStaff = true;
			}
			if ($scope.model.shopCode!='' || $scope.model.shopCode!=null)
			{
				for(var i=0; i<$scope.listShop.length; i++)
					{
						if ($scope.model.shopCode.toUpperCase()==$scope.listShop[i].code.toUpperCase())
							{
							$scope.model.shopName =$scope.listShop[i].name;
							$scope.model.shopCode = $scope.listShop[i].code;
							$scope.model.stockId = $scope.listShop[i].stockId;
							$scope.model.shopStaffId = $scope.listShop[i].shopStaffId;
							$scope.disabledStaff=false;
							break;
							}
					}
			}
		}
	});
	// create table mat hang
	function createDataTableListShop(dataItem) {
		oTableFListSerial = $('#tblListShop').DataTable({
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
					return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
				}
			} ],
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
			}
		});

		$('#tblListShop tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListSerial.row(this).data();
			oTableFListSerial.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListShop = rowData;
		});
	}

	$scope.updateFormShop = function() {

		$scope.model.shopName = $scope.itemSelectedListShop.name;
		$scope.model.shopCode = $scope.itemSelectedListShop.code;
		$scope.model.stockId = $scope.itemSelectedListShop.stockId;
		$scope.model.shopStaffId = $scope.itemSelectedListShop.shopStaffId;
		document.getElementById('fShopCode').title = $scope.model.shopCode;
		document.getElementById('fShopName').title = $scope.model.shopName;
		$scope.disabledStaff = false;

		$scope.getStaff($scope.itemSelectedListShop.shopStaffId);
		$scope.hideModalFunction("modalListShop");

	}
	$scope.dialogListShopActionBack = function() {
		$scope.hideModalFunction("modalListShop");
	}
	// END COMBOBOX UPDATE
	// COMMBOBOX STAFF UPDATE
	$("#fStaffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListStaff");
			createDataTableListStaff($scope.listStaff);
		} else {
			if ($scope.model.staffCode == ''){
				$scope.model.staffName = '';
				$scope.model.staffId = '';
			}
			if ($scope.model.staffCode!='' || $scope.model.staffCode!=null)
			{
				for(var i=0; i<$scope.listStaff.length; i++)
					{
						if ($scope.model.staffCode.toUpperCase()==$scope.listStaff[i].code.toUpperCase())
							{
							$scope.model.staffCode = $scope.listStaff[i].code;
							$scope.model.staffName = $scope.listStaff[i].name;
							$scope.model.staffId = $scope.listStaff[i].staffId;
							break;
							}
					}
			}
		}
	});
	// create table mat hang
	function createDataTableListStaff(dataItem) {
		oTableFListSerial2 = $('#tblListStaff').DataTable({
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
					return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
				}
			} ],

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
			}
		});

		$('#tblListStaff tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListSerial2.row(this).data();
			oTableFListSerial2.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListStaff = rowData;
		});
	}

	$scope.updateFormStaff = function() {
		$scope.model.staffCode = $scope.itemSelectedListStaff.code;
		$scope.model.staffName = $scope.itemSelectedListStaff.name;
		$scope.model.staffId = $scope.itemSelectedListStaff.staffId;
		document.getElementById('fStaffCode').title = $scope.model.staffCode;
		document.getElementById('fStaffName').title = $scope.model.staffName;
		$scope.hideModalFunction("modalListStaff");
	}
	$scope.dialogListStaffActionBack = function() {
		$scope.hideModalFunction("modalListStaff");
	}

	// show popup
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
	// hide popup
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}
	// END COMBOBOX STAFF UPDATE

	// CHỨC NĂNG TÌM KIẾM

	$scope.onSearch = function() {
		var strShopId = '';
		var strStaffId = '';
		if ($scope.model.shopCode != '') {
			strShopId = $scope.model.shopStaffId;
		}

		if ($scope.model.staffCode != '') {
			strStaffId = $scope.model.staffId;
		}
		var data = {
			"strType" : $scope.model.custType.code,
			"strFromDate" : $("#fromDate").val(),
			"strToDate" : $("#toDate").val(),
			"strShopId" : strShopId,
			"strPayMethod" : $scope.model.payMethod.code,
			"strStaffId" : strStaffId,
		}
		overLoading();
		fctFormLookUpTransaction.onSearch(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listTransaction = result;
				$scope.transId = $scope.listTransaction[0].transId;
				createTableTransaction($scope.listTransaction);
				$scope.fillDetailInfo($scope.listTransaction[0].transId);
				closeOverLay();

			} else {
				closeOverLay();
				bootboxAlertFocus($translate.instant("vnm.formLookUpTransaction.label.alert.emptydata"), "", $translate.instant("vnm.lable.vnm.name"), "");
				var isNull = [];
				createTableTransaction(isNull);
				createTableTransactionDetail(isNull)
				createTableSerialInfor(isNull)

				return;

			}

		});
	};

	$scope.getStatusName = function(statusCode) {
		var statusName = '';
		for (var i = 0; i < $scope.listStatus.length; i++) {
			if ($scope.listStatus[i].code == statusCode) {
				statusName = $scope.listStatus[i].name;
				break;
			}
		}
		return statusName;
	}
	function createTableTransaction(dataItem) {
		oTableTransaction = $('#tableTransaction').DataTable(
				{
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
					"scrollY" : "150",
					"columns" : [
							{
								"mData" : "status",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + $scope.getStatusName(data) + "'>"
											+ $scope.getStatusName(data) + "</div>";
								}
							}, {
								"mData" : "createDateTime",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "userName",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "custTypeName",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							},

					],

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
					"createdRow" : function(row, data, rowIndex) {

						if (rowIndex == 0 || rowIndex == '0') {
							$(row).addClass('selected');
						}
					}
				});

		$('#tableTransaction tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableTransaction.row(this).data();
			$scope.selectedRowTransaction = rowData;
			$scope.transId = $scope.selectedRowTransaction.transId;
			$scope.fillDetailInfo($scope.selectedRowTransaction.transId);
			oTableTransaction.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});
	}
	;

	$scope.listEnqueryTransactionDetail = [];
	$scope.fillDetailInfo = function(strTranId) {

		var data = strTranId;
		overLoading();
		fctFormLookUpTransaction.enqueryTransactionDetail(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listEnqueryTransactionDetail = result;
				createTableTransactionDetail($scope.listEnqueryTransactionDetail);
				$scope.fillSerialInfo($scope.listEnqueryTransactionDetail[0].transDetailId);
				closeOverLay();
			} else {
				closeOverLay();
				var isNull = [];
				createTableTransactionDetail(isNull);
				createTableSerialInfor
				return;
			}

		});

	};
	function createTableTransactionDetail(dataItem) {
		oTableTransactionDetail = $('#tableTransactionDetail').DataTable({
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
			"scrollY" : "150",
			"columns" : [ {
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "price",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + FormatNumber(data) + "'>" + FormatNumber(data) + "</div>";
				}
			}, {
				"mData" : "disCount",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + FormatNumber(data) + "'>" + FormatNumber(data) + "</div>";
				}
			}, {
				"mData" : "promotion",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + FormatNumber(data) + "'>" + FormatNumber(data) + "</div>";
				}
			}, {
				"mData" : "taxRate",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + FormatNumber(data) + "'>" + FormatNumber(data) + "</div>";
				}
			}, {
				"mData" : "discountPromotion",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + FormatNumber(data) + "'>" + FormatNumber(data) + "</div>";
				}
			},

			],

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
			"createdRow" : function(row, data, rowIndex) {

				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			}
		});

		$('#tableTransactionDetail tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableTransactionDetail.row(this).data();
			$scope.selectedTransactionDetail = rowData;
			$scope.fillSerialInfo($scope.selectedTransactionDetail.transDetailId);
			oTableTransactionDetail.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});
	}
	;

	$scope.fillSerialInfo = function(strTransactionID) {
		var data = strTransactionID;
		overLoading();
		fctFormLookUpTransaction.getSerialInfor(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listSerialInfor = result;
				createTableSerialInfor($scope.listSerialInfor);
				closeOverLay();
			} else {
				closeOverLay();
				var isNull = [];
				createTableSerialInfor(isNull);
				return;
			}

		});
	};
	function createTableSerialInfor(dataItem) {
		obTableSerialInfor = $('#tableSerialInfor').DataTable({
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
			"scrollY" : "150",
			"columns" : [ {
				"mData" : "serial",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "createDateTime",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			},

			],

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
			"createdRow" : function(row, data, rowIndex) {

				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			}
		});

		$('#tableSerialInfor tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = obTableSerialInfor.row(this).data();
			obTableSerialInfor.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});
	}
	;

	// IN Đơn hàng
	$scope.btnInDonHangOnClick = function() {
		if ($scope.transId == '') {
			bootboxAlertFocus($translate.instant("vnm.formLookUpTransaction.label.alert.emptydataprint"), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			/*overLoading();

			var ReportInput = {
				"strStranID" : $scope.transId,
				"fileTempName" : 'SaleOrder',
				"fileType" : '.xlsx'
			};

			fctFormLookUpTransaction.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
				if (result.status == '0' && result.status != 'undefined') {
					closeOverLay();
					bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
							.instant("vnm.lable.vnm.name"), "");
				} else {
					closeOverLay();
					download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				}
			});*/
			overLoading();

			var keySearch = {
				"code" : $scope.transId,
			}
			fctFormLookUpTransaction.getParamsPrint(keySearch, function(result) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					var reportInput = {
						"lstDetailTrans" : result,
						"fileTempName" : 'FormSaleDealer',
						"fileType" : '.xlsx'
					};

					fctFormLookUpTransaction.exportFile(reportInput, function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
									.instant("vnm.lable.vnm.name"), "");
						} else {
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
				closeOverLay();
			});
		}
	}

	;
	
	// format Number
	function FormatNumber(str) {
		var strTemp = str;
			/*return strTemp;*/
		strResult = "";
		for (var i = 0; i < strTemp.length; i++)
			strTemp = strTemp.replace(",", "");
		var m = strTemp.lastIndexOf(".");
		if (-1 == m) {
			for (var i = strTemp.length; i >= 0; i--) {
				if (strResult.length > 0 && (strTemp.length - i - 1) % 3 == 0)
					strResult = "," + strResult;
				strResult = strTemp.substring(i, i + 1) + strResult;
			}
		} else {
			var strphannguyen = strTemp.substring(0, strTemp.lastIndexOf("."));
			var strphanthapphan = strTemp.substring(strTemp.lastIndexOf("."),
					strTemp.length);
			var tam = 0;
			for (var i = strphannguyen.length; i >= 0; i--) {

				if (strResult.length > 0 && tam == 4) {
					strResult = "," + strResult;
					tam = 1;
				}

				strResult = strphannguyen.substring(i, i + 1) + strResult;
				tam = tam + 1;
			}
			strResult = strResult + strphanthapphan;
		}
		return strResult;
	};

});
