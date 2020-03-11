app_vnm.factory('fctSearchInvoiceHistory', function($http, $translate) {
	return {
		// danh sach nhan vien
		getListStaffSource : function(data, callback) {
			var url = eim_url + "/epos/sales/FormDestroyTransactionController/getListStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		// danh sach cua hang
		getChildsStocksTree : function(data, callback) {
			var url = eim_url + "/epos/sales/FormLookupInvoiceHistory/getChildsStocksTree";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearch : function(data, callback) {
			var url = eim_url + "/epos/sales/FormLookupInvoiceHistory/onSearch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStatus : function(callback) {
			var url = eim_url + "/epos/sales/FormLookupInvoiceHistory/getStatus";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
})

app_vnm.controller('formSearchInvoiceHistoryController', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
		$localStorage, fctSearchInvoiceHistory) {

	$scope.model = {};

	$scope.listStaffSource = [];
	$scope.listChilsStock = [];
	$scope.listStatus = [];

	$scope.listSearchInvoice = [];
	$scope.objSearchInvoice = {};
	$scope.listDetailSearchInvoice = [];
	$scope.objDetailSearchInvoice = {};

	$scope.loadDefault = function() {
		var shopId = $localStorage.clientContext.shop.shopId;
		fctSearchInvoiceHistory.getChildsStocksTree(shopId, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listChilsStock = result;
					for (var i = 0; i < $scope.listChilsStock.length; i++) {
						if ($localStorage.clientContext.shop.shopCode == $scope.listChilsStock[i].code.trim()) {
							$scope.model.shopCode = $scope.listChilsStock[i].code;
							$scope.model.shopName = $scope.listChilsStock[i].name;
							document.getElementById('fShopCode').title = $scope.model.shopCode.trim();
							document.getElementById('fShopName').title = $scope.model.shopName.trim();
							$scope.model.stockId = $scope.listChilsStock[i].stockId;
							$scope.model.shopStaffId = $scope.listChilsStock[i].shopStaffId;
							break;
						}
					}
				}

				if ($scope.model.shopStaffId == undefined) {
					bootboxAlertFocus("Không tìm thấy dữ liệu của cửa hàng!", "", $translate.instant("vnm.lable.vnm.name"), "");
					App.unblockUI("#contentMain");
					return;
				}

				fctSearchInvoiceHistory.getListStaffSource($scope.model.shopStaffId, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
						} else if (result.length > 0) {
							$scope.listStaffSource = result;
							for (var i = 0; i < $scope.listStaffSource.length; i++) {
								if ($localStorage.clientContext.shop.staffId == $scope.listStaffSource[i].staffId.trim()) {
									$scope.model.staffCode = $scope.listStaffSource[i].code;
									$scope.model.staffName = $scope.listStaffSource[i].name;
									document.getElementById('fStaffCode').title = $scope.model.staffCode.trim();
									document.getElementById('fStaffName').title = $scope.model.staffName.trim();
									$scope.model.staffId = $scope.listStaffSource[i].staffId;
									break;
								}
							}
						}
						fctSearchInvoiceHistory.getStatus(function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									$scope.listStatus = result;
								}
							}
							App.unblockUI("#contentMain");
							closeOverLay();
						})
					}
				})
			}
		})

	}

	var initialize = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		$scope.model.searchFromDate = getCurrentDate();
		$scope.model.searchToDate = getCurrentDate();
		$scope.loadDefault();
	}

	initialize();

	$scope.btnSearchOnclick = function() {
		if ($scope.validBeforeSearch() == true) {
			var searchInput = {
				"strInvoiceNo" : $scope.model.receiptNo,
				"strStaffId" : $scope.model.staffId,
				"strFromDate" : StringUtilNVL($("#fromDate").val()),
				"strToDate" : StringUtilNVL($("#toDate").val()),
				"strName" : "",
				"strAccount" : "",
				"strTin" : "",
				"strCompany" : "",
				"strAddress" : "",
			};
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			fctSearchInvoiceHistory.onSearch(searchInput, function(result) {
				if (result.length > 0) {
					$scope.listSearchInvoice = result;
					createTableTransactionDestroy($scope.listSearchInvoice);
					App.unblockUI("#contentMain");
				} else {
					createTableTransactionDestroy([]);
					createTableSubTransactionDestroy([]);
					App.unblockUI("#contentMain");
					bootboxAlertFocus("Không tìm thấy dữ liệu!", "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			});
		}
	}

	function createTableTransactionDestroy(dataItem) {
		oTableItemXXX = $('#resultSearchTableItems').DataTable(
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
					"className" : "text-center",
					'select' : {
						'style' : 'multi'
					},
					"bSort" : true,
					"info" : true,
					"order" : [],
					"scrollX" : true,
					"columns" : [
							{
								"mData" : "invoiceNo",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' style='text-align: left' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
								}
							},
							{
								"mData" : "name",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-180' style='text-align: left'   title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
								}
							},
							{
								"mData" : "company",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-100'  style='text-align: left'title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
								}
							},
							{
								"mData" : "address",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: left' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
								}
							},
							{
								"mData" : "tin",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-100'  style='text-align: left' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
								}
							},
							{
								"mData" : "status",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: left' title='" + $scope.getStatusTransName(data) + "'>"
											+ $scope.getStatusTransName(data) + "</div>";
								}
							}, {
								"mData" : "grandTotal",
								"render" : function(data, type, row) {
									x = formatNumber(data) == null ? '' : formatNumber(data);
									return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: right' title='" + StringUtilNVL(x) + "'>" + StringUtilNVL(x) + "</div>";
								}
							} ],
					"fnInitComplete" : function(oSettings, json) {
						var table = $('#resultSearchTableItems').DataTable();
						table.rows(0).nodes().to$().addClass('selected');
						$('.dataTables_scrollBody thead tr').css({
							visibility : 'collapse'
						});
						var dataRowSelected = table.row(0).data();
						$scope.objSearchInvoice = dataRowSelected;
						if ($scope.objSearchInvoice != undefined) {
							if ($scope.objSearchInvoice.listInvoiceDetails != null || $scope.objSearchInvoice.listInvoiceDetails != undefined
									|| !$scope.objSearchInvoice.listInvoiceDetails.length <= 0) {
								createTableSubTransactionDestroy($scope.objSearchInvoice.listInvoiceDetails);
							}
						}
					},
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
				});

		$('#resultSearchTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			$scope.objSearchInvoice = rowData;
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			createTableSubTransactionDestroy($scope.objSearchInvoice.listInvoiceDetails);

		});
	}

	function createTableSubTransactionDestroy(dataItem) {
		oTableItemXYZ = $('#resultSubSearchTableItems').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"select" : "single",
			"bPaginate" : true,
			"bSort" : true,
			"info" : true,
			"scrollX" : true,
			"columns" : [ {
				"mData" : "transId",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-90' style='text-align: left' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-300' style='text-align: left'  title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					x = formatNumber(data) == null ? '' : formatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-90' style='text-align: left' title='" + StringUtilNVL(x) + "'>" + StringUtilNVL(x) + "</div>";
				}
			}, {
				"mData" : "price",
				"render" : function(data, type, row) {
					x = formatNumber(data) == null ? '' : formatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-90' style='text-align: left' title='" + StringUtilNVL(x) + "'>" + StringUtilNVL(x) + "</div>";
				}
			} ],
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#resultSubSearchTableItems').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				var dataRowSelected = table.row(0).data();
				$scope.objDetailSearchInvoice = dataRowSelected;
			},
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sSearch" : LABEL_SEARCH,
				"sLengthMenu" : "_MENU_",
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				}
			}
		});

		$('#resultSubSearchTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXYZ.row(this).data();
			oTableItemXYZ.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.objDetailSearchInvoice = rowData;

		});
	}

	$scope.getStatusTransName = function(code) {
		var name = '';
		if ($scope.listStatus != null && $scope.listStatus != undefined && $scope.listStatus.length > 0) {
			for (var i = 0; i < $scope.listStatus.length; i++) {
				if (code == $scope.listStatus[i].code) {
					name = $scope.listStatus[i].name;
					break;
				}
			}
		}
		return name;
	}

	$scope.validBeforeSearch = function() {
		var toDate = $("#toDate").val();
		var fromDate = $("#fromDate").val();
		if (fromDate == null || fromDate == undefined || fromDate == '') {
			bootboxAlertFocus($translate.instant('vnm.FormDestroyTransaction.valid.fromDate'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if (toDate == null || toDate == undefined || toDate == '') {
			bootboxAlertFocus($translate.instant('vnm.FormDestroyTransaction.valid.toDate'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if ($("#fromDate").val() != null && $("#fromDate").val() != "") {
			if (!isDate($("#fromDate").val())) {
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", '', $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
			if (moment($("#fromDate").val(), "DD/MM/YYYY") > getCurrentDate()) {
				bootboxAlertFocus("Trường [Từ ngày] không được lớn hơn ngày hiện tại!", "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}

		}
		if ($("#toDate").val() != null && $("#toDate").val() != "") {
			if (!isDate($("#toDate").val())) {
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", '', $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
			if (moment($("#toDate").val(), "DD/MM/YYYY") > getCurrentDate()) {
				bootboxAlertFocus("Trường [Đến ngày] không được lớn hơn ngày hiện tại!", "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
		}

		if ($("#toDate").val() != null && $("#toDate").val() != "") {
			if ($("#fromDate").val() != null) {
				var intfromdate = moment(fromDate, "DD/MM/YYYY");
				var inttodate = moment(toDate, "DD/MM/YYYY");
				if (intfromdate > inttodate) {
					bootboxAlertFocus($translate.instant('vnm.FormDestroyTransaction.valid.DateBefore'), '', $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				}
			}
		}
		return true;
	}

	// F9 Kho nhan vien
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();

			angular.element($("#tblListShop_filter").find("input")[0]).focus();
			angular.element($("#tblListStaff_filter").find("input")[0]).focus();
		});

	}

	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}
	$("#fStaffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListStaff");
			$scope.itemSelectedListStaff = null;
			createDataTableListStaff($scope.listStaffSource);
		} else {
			if ($scope.model.staffCode == '') {
				$scope.model.staffName = '';
			}
		}
	});
	$("#fStaffCode").click(function(e) {
		if ($scope.model.shopCode == null || $scope.model.shopCode == undefined || "" == $scope.model.shopCode.trim()) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelectedShop"), "fShopCode", $translate.instant("vnm.lable.vnm.name"), "");
		}
	});
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
			"oSearch" : {
				"sSearch" : $('#fStaffCode').val().toUpperCase()
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
				$('.dataTables_scrollBody thead tr').css({
					visibility : 'collapse'
				});
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
			}
		});

		$('#tblListStaff tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListStaff.row(this).data();
			oTableFListStaff.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListStaff = null;
			$scope.itemSelectedListStaff = rowData;
		});
	}

	$scope.updateFormStaff = function() {
		$scope.model.staffId = "";
		if ($scope.itemSelectedListStaff == undefined || $scope.itemSelectedListStaff == null) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelected"), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		}
		$scope.model.staffCode = $scope.itemSelectedListStaff.code.trim();
		$scope.model.staffName = $scope.itemSelectedListStaff.name.trim();
		$scope.model.staffId = $scope.itemSelectedListStaff.staffId.trim();
		document.getElementById('fStaffCode').title = $scope.model.staffCode.trim();
		document.getElementById('fStaffName').title = $scope.model.staffName.trim();
		$scope.hideModalFunction("modalListStaff");
		angular.element(document.getElementById('fStaffCode')).focus();
	}

	$scope.dialogListStaffActionBack = function() {
		angular.element(document.getElementById('fStaffCode')).focus();
		$scope.hideModalFunction("modalListStaff");
	}
	$scope.checkF9Staff = function() {
		var check = "0";
		if ($scope.model.staffCode != undefined && $scope.model.staffCode != "") {
			for (var i = 0; i < $scope.listStaffSource.length; i++) {
				if ($scope.model.staffCode.trim().toUpperCase()  == $scope.listStaffSource[i].code.toUpperCase() ) {
					$scope.model.staffCode = $scope.listStaffSource[i].code.trim();
					$scope.model.staffName = $scope.listStaffSource[i].name.trim();
					$scope.model.staffId = $scope.listStaffSource[i].staffId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListStaff");
				$scope.itemSelectedListStaff = null;
				createDataTableListStaff($scope.listStaffSource);
			}
		} else {
			$scope.model.staffCode = "";
			$scope.model.staffName = "";
			$scope.model.staffId = "";
			document.getElementById('fStaffCode').title = '';
			document.getElementById('fStaffName').title = '';
		}
	}

	// F9 Kho nhan vien
	$("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListShop");
			$scope.itemSelectedListShop = null;
			createDataTableListShop($scope.listChilsStock);
		} else {
			if ($scope.model.shopCode == '') {
				$scope.model.shopName = '';
			}
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
			"oSearch" : {
				"sSearch" : $('#fShopCode').val().toUpperCase()
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
				var table = $('#tblListShop').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				$('.dataTables_scrollBody thead tr').css({
					visibility : 'collapse'
				});
				var dataRowSelected = table.row(0).data();
				$scope.itemSelectedListShop = dataRowSelected;
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

	$scope.updateFormShop = function() {
		$scope.model.stockId = "";
		if ($scope.itemSelectedListShop == undefined || $scope.itemSelectedListShop == null) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelected"), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		}
		$scope.model.shopCode = $scope.itemSelectedListShop.code.trim();
		$scope.model.shopName = $scope.itemSelectedListShop.name.trim();
		$scope.model.stockId = $scope.itemSelectedListShop.stockId.trim();
		document.getElementById('fShopCode').title = $scope.model.shopCode.trim();
		document.getElementById('fShopName').title = $scope.model.shopName.trim();
		$scope.hideModalFunction("modalListShop");
		angular.element(document.getElementById('fShopCode')).focus();
	}

	$scope.dialogListShopActionBack = function() {
		angular.element(document.getElementById('fShopCode')).focus();
		$scope.hideModalFunction("modalListShop");
	}
	$scope.checkF9Shop = function() {
		var check = "0";
		if ($scope.model.shopCode != undefined && $scope.model.shopCode != "") {
			for (var i = 0; i < $scope.listChilsStock.length; i++) {
				if ($scope.model.shopCode.trim().toUpperCase()  == $scope.listChilsStock[i].code.toUpperCase() ) {
					$scope.model.shopCode = $scope.listChilsStock[i].code.trim();
					$scope.model.shopName = $scope.listChilsStock[i].name.trim();
					$scope.model.stockId = $scope.listChilsStock[i].stockId.trim();
					$scope.model.shopStaffId = $scope.listChilsStock[i].shopStaffId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListShop");
				$scope.itemSelectedListShop = null;
				createDataTableListShop($scope.listChilsStock);
			}
			overLoading();
			fctSearchInvoiceHistory.getListStaffSource($scope.model.shopStaffId, function(result) {
				if (result != null && result != undefined && result.status === '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else {
					$scope.listStaffSource = result;
					closeOverLay();
				}
			});
		} else {
			$scope.model.shopCode = "";
			$scope.model.shopName = "";
			$scope.model.stockId = "";
			document.getElementById('fShopCode').title = '';
			document.getElementById('fShopName').title = '';
		}
	}
});

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}

function isDate(txtDate) {
	var currVal = txtDate;
	if (currVal == '')
		return false;

	// Declare Regex
	var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
	var dtArray = currVal.match(rxDatePattern); // is format OK?

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

function getCurrentDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();

	return today = dd + '/' + mm + '/' + yyyy;
}
