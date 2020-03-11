app_vnm.factory('fctFormDestroyTransaction', function($http, $translate) {
	return {
		getCustType : function(callback) {
			var url = eim_url + "/epos/sales/FormDestroyTransactionController/getCustType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStatusTrans : function(callback) {
			var url = eim_url + "/epos/sales/FormDestroyTransactionController/getStatusTrans";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getPayMethod : function(callback) {
			var url = eim_url + "/epos/sales/FormDestroyTransactionController/getPayMethod";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		// danh sach nhan vien
		getListStaffSource : function(data, callback) {
			var url = eim_url + "/epos/sales/FormDestroyTransactionController/getListStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearch : function(data, callback) {
			var url = eim_url + "/epos/sales/FormDestroyTransactionController/onSearch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onDestroy : function(data, callback) {
			var url = eim_url + "/epos/sales/FormDestroyTransactionController/destroyTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
})

app_vnm.controller('formDestroyTransactionController', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
		$localStorage, fctFormDestroyTransaction) {

	$scope.model = {};

	$scope.lstCustType = [];
	$scope.lstStaffSource = [];
	$scope.lstStatusTrans = [];
	$scope.lstPayMethod = [];
	$scope.limitLstGoodsSearch = 20;

	$scope.itemsTransDestroy = [];
	$scope.itemsTransSelected = {};

	$scope.itemsSubTransDestroy = [];
	$scope.itemsSubTransSelected = {};
	$scope.checkDisabledCheckBox = true;

	$scope.loadDefault = function() {
		fctFormDestroyTransaction.getCustType(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstCustType = result;
					$scope.model.custType = $scope.lstCustType[0];
				}

				var shopId = $localStorage.clientContext.shop.shopId;
				fctFormDestroyTransaction.getListStaffSource(shopId, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
						} else if (result.length > 0) {
							$scope.lstStaffSource = result;
							for (var i = 0; i < $scope.lstStaffSource.length; i++) {
								if ($localStorage.clientContext.shop.staffId == $scope.lstStaffSource[i].staffId.trim()) {
									$scope.model.staffCode = $scope.lstStaffSource[i].code;
									$scope.model.staffName = $scope.lstStaffSource[i].name;
									document.getElementById('fStaffCode').title = $scope.model.staffCode.trim();
									document.getElementById('fStaffName').title = $scope.model.staffName.trim();
									$scope.model.staffId = $scope.lstStaffSource[i].staffId;
									break;
								}
							}
						}
					}
					fctFormDestroyTransaction.getStatusTrans(function(result) {
						if (result != null && result != undefined) {
							if (result.status == '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
							} else if (result.length > 0) {
								$scope.lstStatusTrans = result;
							}
						}
						fctFormDestroyTransaction.getPayMethod(function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									$scope.lstPayMethod = result;
								}
							}
							App.unblockUI("#contentMain");
							closeOverLay();
						});
					});
				});
			}
		});

	}

	var sessionShopCode = $localStorage.clientContext.shop.shopCode;
	var sessionShopName = $localStorage.clientContext.shop.shopName;
	$scope.getShopCodeAName = function() {
		$scope.model.sessionShopCode = sessionShopCode + ' - ' + sessionShopName;
	}

	var initialize = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		$scope.getShopCodeAName();
		$scope.model.searchFromDate = getCurrentDate();
		$scope.model.searchToDate = getCurrentDate();
		$scope.loadDefault();
	}

	initialize();

	$scope.btnSearchOnclick = function() {
		if ($scope.validBeforeSearch() == true) {
			var searchInput = {
				"shopId" : $localStorage.clientContext.shop.shopId,
				"cusType" : $scope.model.custType.code,
				"fromDate" : StringUtilNVL($("#fromDate").val()),
				"toDate" : StringUtilNVL($("#toDate").val()),
				"payMethod" : "",
				"staffId" : $scope.model.staffId,

			};
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			fctFormDestroyTransaction.onSearch(searchInput, function(result) {
				if (result.length > 0) {
					$scope.itemsTransDestroy = result;
					for (var i = 0; i < $scope.itemsTransDestroy.length; i++) {
						result[i].checkBox = i;
					}
					createTableTransactionDestroy(result);
					$scope.checkDisabledCheckBox = false;
					$("#checkAlls").removeClass("sorting");
					// $("#checkAlls").css('width', '45px');
					// $("#checkAll").css('margin-left', '14px');
					// $(".ng-table-sort-header").css('display','none');
					App.unblockUI("#contentMain");
				} else {
					App.unblockUI("#contentMain");
					bootboxAlertFocus("Không tìm thấy dữ liệu!", "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			});
		}

	}

	$scope.btnDestroyOnclick = function() {
		if ($scope.listSelectItemCheckBox.length <= 0 || $scope.listSelectItemCheckBox == null || $scope.listSelectItemCheckBox == undefined) {
			bootboxAlertFocus($translate.instant("vnm.FormDestroyTransaction.button.valid.destroy"), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			bootboxConfirm($translate.instant("vnm.FormDestroyTransaction.btn.destroy"), $translate.instant("vnm.FormDestroyTransaction.button.confirm.destroy"), $scope.confirmDestroyOK,
					$scope.confirmDestroyNOK);
		}
	}

	$scope.confirmDestroyOK = function() {
		var data = {
			"lstTransactionDestroyObj" : $scope.listSelectItemCheckBox,
			"staffId" : $localStorage.clientContext.shop.staffId,
			"shopId" : $localStorage.clientContext.shop.shopId,
		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		fctFormDestroyTransaction.onDestroy(data, function(result) {
			if (result.length > 0) {
				overLoading();
				$scope.btnSearchOnclick();
				bootboxAlertFocus("Hủy giao dịch thành công!", "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(result.status, "", $translate.instant("vnm.lable.vnm.name"), "");
			}
		});
	}

	$scope.confirmDestroyNOK = function() {

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
					'columnDefs' : [ {
						'targets' : 6,
						"orderable" : false,
						'checkboxes' : {
							'selectRow' : true
						}
					} ],
					'select' : {
						'style' : 'multi'
					},
					"bSort" : true,
					"info" : true,
					"order" : [],
					"scrollX" : true,
					"columns" : [ {
						"mData" : "status",
						"render" : function(data, type, row) {
							return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.getStatusTransName(data) + "'>" + $scope.getStatusTransName(data) + "</div>";
						}
					}, {
						"mData" : "createDate",
						"render" : function(data, type, row) {
							return "<div data-toggle='tooltip' class='text-wrap width-150' style='text-align: center'  title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
						}
					}, {
						"mData" : "userName",
						"render" : function(data, type, row) {
							return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
						}
					}, {
						"mData" : "custName",
						"render" : function(data, type, row) {
							return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
						}
					}, {
						"mData" : "payMethod",
						"render" : function(data, type, row) {
							return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.getPayMethodName(data) + "'>" + $scope.getPayMethodName(data) + "</div>";
						}
					}, {
						"mData" : "invoiceId",
						"render" : function(data, type, row) {
							return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
						}
					}, {
						"mData" : "checkBox",
						"render" : function(data, type, row) {
							x = data == null ? '' : data;
							return '<input type="checkbox" class="form-control width-150" style="width:17px;margin-left: 13px;"  id="first-child" value="' + x + '" ></input>';
						}
					} ],
					"fnInitComplete" : function(oSettings, json) {
						var table = $('#resultSearchTableItems').DataTable();
						table.rows(0).nodes().to$().addClass('selected');
						$('.dataTables_scrollBody thead tr').css({
							visibility : 'collapse'
						});
						var dataRowSelected = table.row(0).data();
						$scope.itemsTransSelected = dataRowSelected;
						if ($scope.itemsTransSelected.lstTransactionDestroyDetail != null || $scope.itemsTransSelected.lstTransactionDestroyDetail != undefined
								|| !$scope.itemsTransSelected.lstTransactionDestroyDetail.length <= 0) {
							createTableSubTransactionDestroy(dataRowSelected.lstTransactionDestroyDetail);
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
			$scope.itemsTransSelected = rowData;
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			createTableSubTransactionDestroy($scope.itemsTransSelected.lstTransactionDestroyDetail);

		});
		// check box all
		$('#checkAll').on('click', function() {

			var rows = oTableItemXXX.rows({
				'search' : 'applied'
			}).nodes();

			$('input[type="checkbox"]', rows).prop('checked', this.checked);
			$scope.checkAllCheckBox();

		});

		// check box row
		$('#resultSearchTableItems').off().on('click', 'input[type="checkbox"]', function(e, dt, type, indexes) {
			$scope.onCheckedClick(this.value);
		});

		$compile(angular.element('#resultSearchTableItems'))($scope);
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
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: right' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					x = formatNumber(data) == null ? '' : formatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: right'  title='" + StringUtilNVL(x) + "'>" + StringUtilNVL(x) + "</div>";
				}
			}, {
				"mData" : "price",
				"render" : function(data, type, row) {
					x = formatNumber(data) == null ? '' : formatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: right' title='" + StringUtilNVL(x) + "'>" + StringUtilNVL(x) + "</div>";
				}
			}, {
				"mData" : "discount",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: right' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "promotion",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: right' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "taxRate",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: right' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "sum",
				"render" : function(data, type, row) {
					x = formatNumber(data) == null ? '' : formatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' style='text-align: right' title='" + StringUtilNVL(x) + "'>" + StringUtilNVL(x) + "</div>";
				}
			} ],
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#resultSubSearchTableItems').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				var dataRowSelected = table.row(0).data();
				$scope.itemsSubTransSelected = dataRowSelected;
				createTableSubSubTransactionDestroy($scope.itemsSubTransSelected.lstTransSerial);
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
			$scope.itemsSubTransSelected = rowData;
			createTableSubSubTransactionDestroy($scope.itemsSubTransSelected.lstTransSerial);

		});
	}

	function createTableSubSubTransactionDestroy(dataItem) {
		oTableItemXYZV = $('#resultSubSubSearchTableItems').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"style" : 'os',
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"info" : true,
			"scrollX" : true,
			"columns" : [ {
				"mData" : "serialDesTroy",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' style='text-align: right' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "createDate",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' style='text-align: right'  title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			} ],

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

		$('#resultSubSubSearchTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXYZV.row(this).data();
			oTableItemXYZ.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});
	}

	$scope.getStatusTransName = function(code) {
		var name = '';
		if ($scope.lstStatusTrans != null && $scope.lstStatusTrans != undefined && $scope.lstStatusTrans.length > 0) {
			for (var i = 0; i < $scope.lstStatusTrans.length; i++) {
				if (code == $scope.lstStatusTrans[i].code) {
					name = $scope.lstStatusTrans[i].name;
					break;
				}
			}
		}
		return name;
	}

	$scope.getPayMethodName = function(code) {
		var name = '';
		if ($scope.lstPayMethod != null && $scope.lstPayMethod != undefined && $scope.lstPayMethod.length > 0) {
			for (var i = 0; i < $scope.lstPayMethod.length; i++) {
				if (code == $scope.lstPayMethod[i].code) {
					name = $scope.lstPayMethod[i].name;
					break;
				}
			}
		}
		return name;
	}

	$scope.listSelectItemCheckBox = [];
	$scope.onCheckedClick = function(item) {

		var row = $scope.findRow(item);
		if ($scope.checkListSelectItemCheckBox(row) == 0) {
			$scope.listSelectItemCheckBox.push(row);

		} else {
			for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
				while ($scope.listSelectItemCheckBox[i].checkBox == row.checkBox) {
					$scope.listSelectItemCheckBox.splice(i, 1);
					break;
				}

			}

		}
		if ($scope.listSelectItemCheckBox.length == $scope.itemsTransDestroy.length) {
			$scope.model.checkAll = true;
		} else {
			$scope.model.checkAll = false;
		}

	}

	$scope.checkAllCheckBox = function() {
		if ($('#checkAll:checked').length > 0) { // Khi click check all
			$scope.listSelectItemCheckBox = $scope.itemsTransDestroy.slice(0, $scope.itemsTransDestroy.length);
		} else { // Khi bo click check all
			$scope.listSelectItemCheckBox = [];
		}
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

	$scope.findRow = function(checkBox) {
		var row = {};
		for (var i = 0; i < $scope.itemsTransDestroy.length; i++) {
			if ($scope.itemsTransDestroy[i].checkBox == checkBox) {
				row = $scope.itemsTransDestroy[i];
				break;
			}

		}
		return row;
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
		if ($scope.model.custType == null || $scope.model.custType == undefined || $scope.model.custType == '') {
			bootboxAlertFocus($translate.instant('vnm.FormDestroyTransaction.valid.cusType'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if ($scope.model.staffCode == null || $scope.model.staffCode == undefined || $scope.model.staffCode == '') {
			bootboxAlertFocus($translate.instant('vnm.FormDestroyTransaction.valid.staffSource'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		return true;
	}

	// bootboxAlertFocus("Trường [Đến ngày] không được lớn hơn ngày hiện tại!", "", $translate.instant("vnm.lable.vnm.name"), "");

	// F9 Kho nhan vien
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
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
			createDataTableListStaff($scope.lstStaffSource);
		} else {
			if ($scope.model.staffCode == '') {
				$scope.model.staffName = '';
			}
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
			for (var i = 0; i < $scope.lstStaffSource.length; i++) {
				if ($scope.model.staffCode.trim().toUpperCase() == $scope.lstStaffSource[i].code.toUpperCase()) {
					$scope.model.staffCode = $scope.lstStaffSource[i].code.trim();
					$scope.model.staffName = $scope.lstStaffSource[i].name.trim();
					$scope.model.staffId = $scope.lstStaffSource[i].staffId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListStaff");
				$scope.itemSelectedListStaff = null;
				createDataTableListStaff($scope.lstStaffSource);
			}
		} else {
			$scope.model.staffCode = "";
			$scope.model.staffName = "";
			$scope.model.staffId = "";
			document.getElementById('fStaffCode').title = '';
			document.getElementById('fStaffName').title = '';
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
