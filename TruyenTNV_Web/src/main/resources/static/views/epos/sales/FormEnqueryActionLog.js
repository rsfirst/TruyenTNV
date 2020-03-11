app_vnm.factory('fctFormEnqueryActionLog', function($http, $translate) {
	return {
		getShop : function(data, callback) {
			var url = eim_url + "/epos/inventory/RenewWarrantyNumber/getLowReceiverAgent";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
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

		exportFile : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		search : function(data, callback) {
			var url = eim_url + "/epos/sales/FormEnqueryActionLog/search";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getActionType : function(callback) {
			var url = eim_url + "/epos/sales/FormEnqueryActionLog/getListActionType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}

})

app_vnm.controller('FormEnqueryActionLogController', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, fctFormEnqueryActionLog) {

	// Xử lý form
	$scope.model = {};
	$scope.disableBtnExportExcel = true;
	$scope.disabledPrint = true;
	$scope.disabledPrintCInvoice = true;// IN HĐ điện tử
	$scope.PrintConversionInvoice = true;// IN HĐ chuyển đổi
	$scope.listShop = [];
	$scope.listStaff = [];
	$scope.listActionType = [];
	$scope.limitCbb = 20;
	// Load Từ ngày và tới ngày
	var momentObj = moment(new Date());
	var momentString = momentObj.format('DD/MM/YYYY');
	$scope.model.fromDate = momentString;
	$scope.model.toDate = momentString;

	// Load Cửa hàng
	$scope.getShop = function() {

		var data = $localStorage.clientContext.shop.shopId;
		fctFormEnqueryActionLog.getShop(data, function(result) {

			if (result != null && result.length > 0) {
				$scope.listShop = result;
				for (var i = 0; i < result.length; i++) {
					if (result[i].shopStaffId == $localStorage.clientContext.shop.shopId) {
						$scope.model.shop = result[i];
						$scope.model.shopName = $scope.model.shop.name;
						$scope.model.shopCode = $scope.model.shop.code;
						$scope.itemSelectedListShop = result[i]; 
						document.getElementById('shopCode').title = $scope.model.code;
						document.getElementById('shopName').title = $scope.model.name;
						break;
					}
				}
			}

		})

	}

	$("#shopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.listShop);
		} else {
			if ($scope.model.shopCode == '')
				$scope.model.shopName = '';
		}
	});

	$("#staffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListStaff");
			if($scope.model.shopCode !=""&&$scope.model.shopCode != undefined){
				if($scope.model.staffCode != "" && $scope.model.staffCode != undefined) {
					$scope.itemSelectedListStaff = $scope.model.staff;
				}else{
					$scope.itemSelectedListStaff =$scope.listStaff[0];
				}
			}
			
			createDataTableListStaff($scope.listStaff);
		} else {
			if ($scope.model.staffCode == '')
				$scope.model.staffName = '';
		}
	});
	var ROW_NOT_SELECTED = -1;
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
				if ($scope.itemSelectedListShopted != ROW_NOT_SELECTED) {
					if ($scope.itemSelectedListShop.shopStaffId == data.shopStaffId) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
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
				if ($scope.itemSelectedListStaff != ROW_NOT_SELECTED) {
					if ($scope.itemSelectedListStaff.staffId == data.staffId) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
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
		$scope.model.shop = $scope.itemSelectedListShop;
		$scope.model.shopCode = $scope.itemSelectedListShop.code;
		$scope.model.shopName = $scope.itemSelectedListShop.name;
		document.getElementById('shopCode').title = $scope.model.shopCode;
		document.getElementById('shopName').title = $scope.model.shopName;
		$scope.getStaff($scope.model.shop.shopStaffId);
		$scope.hideModalFunction("modalListShop");
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

	// load Nhân viên
	$scope.getStaff = function(shopId) {
		var data = shopId;
		overLoading();
		$scope.listStaff = [];
		$scope.model.staff = null;
		$scope.model.staffName = "";
		$scope.model.staffCode = "";
		fctFormEnqueryActionLog.getStaff(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listStaff = result;
			}
		})
		closeOverLay();
	}

	$scope.onShopChange = function() {
		for (var i = 0; i < $scope.listShop.length; i++) {
			if ($scope.listShop[i].code == $scope.model.shoCode) {
				$scope.model.shop = $scope.listShop[i];
				$scope.model.shopCode = $scope.listShop[i].code;
				$scope.model.shopName = $scope.listShop[i].name;
				$scope.getStaff($scope.listShop[i].shopStaffId);
				break;
			}
		}
	}
	$scope.onstaffBlur=function() {
		var check = 0;
		if($scope.model.Staffcode !=""&&$scope.model.Staffcode !=undefined){
		for (var i = 0; i < $scope.listStaff.length; i++) {
			if ($scope.listStaff[i].code == $scope.model.staffCode.toUpperCase()) {
				$scope.model.staff = $scope.listStaff[i];
				$scope.model.staffName = $scope.listStaff[i].name;
				check = 1;
				break;
			}else{
				check = 2;
			}
		}
	}else{
		$scope.model.staffCode = "";
		$scope.model.staffName = ""
		$scope.model.staff =null;
	}
		if(check==2){
			bootboxAlertFocus("Mã code nhân viên không tồn tại !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			$scope.model.staffCode = "";
			$scope.model.staffName = "";
			return;
		}
	}
	$scope.onShopBlur = function() {
		var check = 0;
		for (var i = 0; i < $scope.listShop.length; i++) {
			if ($scope.listShop[i].code == $scope.model.shopCode.toUpperCase()) {
				$scope.model.shop = $scope.listShop[i];
				$scope.model.shopCode = $scope.listShop[i].code;
				$scope.model.shopName = $scope.listShop[i].name;
				$scope.getStaff($scope.listShop[i].shopStaffId);
				check = 1;
				break;
			}
		}
		if (check == 0) {
			$scope.model.staffDisable = false;
			$scope.model.shop = null;
			$scope.model.staff=null;
			$scope.model.staffCode = "";
			$scope.model.staffName = "";
			$scope.listStaff=[];
		} else {
			$scope.model.staffDisable = false;
		}

	}

	$scope.getActionType = function() {
		fctFormEnqueryActionLog.getActionType(function(result) {
			if (result != null && result.length > 0) {
				var actionAll = {
					"code" : "",
					"name" : "Tất cả",
					"id" : ""
				};
				$scope.listActionType.push(actionAll);
				Array.prototype.push.apply($scope.listActionType, result);
			}
		})
		closeOverLay();
	}

	$scope.onChooseStaff = function() {
		if ($scope.model.staff != null && $scope.model.staff != undefined) {
			$scope.model.staffName = $scope.model.staff.name;
			document.getElementById('staff').title = $scope.model.staff.code;
			document.getElementById('staffName').title = $scope.model.staffName;
		} else {
			console.log("null");
		}
	}

	$scope.onChooseActionType = function() {
		if ($scope.model.actionType != null && $scope.model.actionType != undefined) {
			$scope.model.actionName = $scope.model.actionType.name;
			document.getElementById('actionType').title = $scope.model.actionType.code;
			document.getElementById('actionName').title = $scope.model.actionName;
		} else {
			console.log("null");
		}
	}

	// load form Default
	$scope.loadFormDefault = function() {
		overLoading();
		$scope.getShop();
		$scope.getStaff($localStorage.clientContext.shop.shopId);
		$scope.getActionType();
	}

	$scope.onSearch = function() {
		var intfromdate = ($("#fromDate").val()).replace("/", "");
		var inttodate = ($("#toDate").val()).replace("/", "");
		if (intfromdate && inttodate) {
			if (intfromdate > inttodate) {
				bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.EndDateBeforeStartDate'), "",
						$translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
				return;
			}
		}
		if ($scope.model.shop == null || $scope.model.shop == undefined) {
			bootboxAlertFocus($translate.instant('vnm.formEnqueryActionLog.error.shopNotFound'), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		} else {
			objSearch = {
				"vstrShopID" : $scope.model.shop.shopStaffId,
				"vstrStaffID" : ($scope.model.staff != null && $scope.model.staff != undefined) ? $scope.model.staff.staffId : '',
				"vstrFromDate" : ($scope.model.fromDate != null && $scope.model.fromDate != undefined) ? $("#fromDate").val() : '',
				"vstrToDate" : ($scope.model.toDate != null && $scope.model.toDate != undefined) ? $("#toDate").val() : '',
				"vstrActionCode" : ($scope.model.actionType != null && $scope.model.actionType != undefined) ? $scope.model.actionType.code : '',
			}
			overLoading();
			fctFormEnqueryActionLog.search(objSearch,
					function(result) {
						if (result.status == '0') {
							bootboxAlertFocus($translate.instant(result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
							$scope.disableBtnExportExcel = true;
							closeOverLay();
						} else if (result.length > 0) {
							$scope.disableBtnExportExcel = false;
							if (result.length > 5000) {
								bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.error.dataToMany"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								$scope.lstTablesActionLogs = result.slice(0, 5000);
								$scope.itemSelected = $scope.lstTablesActionLogs[0];
							} else {
								$scope.lstTablesActionLogs = result;
								$scope.itemSelected = $scope.lstTablesActionLogs[0];
							}
							createDataTableActionLogs($scope.lstTablesActionLogs);
							closeOverLay();
						} else {
							$scope.lstTablesActionLogs = result;
							createDataTableActionLogs($scope.lstTablesActionLogs);
							bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.alert.searchNotFound"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							closeOverLay();
							return;
						}
					});
		}

	}

	function createDataTableActionLogs(dataItem) {
		oTableFListActionLog = $('#tableActionLogsForm').DataTable({
			"responsive" : true,
			"destroy" : true,
			"scrollX" : true,
			"scrolly" : true,
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
				"mData" : "action",
				"render" : function(data, type, row) {
					var action = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-20' title='" + data + " '>" + action + "</div>";
				}
			}, {
				"mData" : "date",
				"render" : function(data, type, row) {
					var date = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-20' title='" + data + "'>" + date + "</div>";
				}
			},

			{
				"mData" : "staff",
				"render" : function(data, type, row) {
					var staff = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-20' title='" + data + "'>" + staff + "</div>";
				}
			}, {
				"mData" : "address",
				"render" : function(data, type, row) {
					var address = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-20' title='" + data + "'>" + address + "</div>";
				}
			}, {
				"mData" : "status",
				"render" : function(data, type, row) {
					var status = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-20' title='" + data + "'>" + status + "</div>";
				}
			},

			{
				"mData" : "description",
				"render" : function(data, type, row) {
					var description = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + description + "</div>";
				}
			}, ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
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
			},
			"createdRow" : function(row, data, rowIndex) {
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}

			}
		});

		$('#tableActionLogsForm tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListActionLog.row(this).data();
			oTableFListActionLog.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
		});
	}

	$scope.btnExportExcelOnclick = function() {
		overLoading();
		var ReportInput = {
			"shop_code" : $scope.model.shop.shopId,
			"staff_id" : ($scope.model.staff != null && $scope.model.staff != undefined) ? $scope.model.staff.staffId : '',
			"action_code" : ($scope.model.actionType != null && $scope.model.actionType != undefined) ? $scope.model.actionType.code : '',
			"startDate" : ($scope.model.fromDate != null && $scope.model.fromDate != undefined) ? $("#fromDate").val() : '',
			"endDate" : ($scope.model.toDate != null && $scope.model.fromDate != undefined) ? $("#toDate").val() : '',
			"fileTempName" : 'EnqueryActionLog',
			"fileType" : '.xlsx'
		};

		fctFormEnqueryActionLog.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"),
						"");
				closeOverLay();
			} else {
				App.unblockUI("#contentMain");
				download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				closeOverLay();
			}
			closeOverLay();
		});

	}

	$scope.loadFormDefault();

});
