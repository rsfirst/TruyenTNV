/*
 *InvoiceNo: SỐ hóa đơn
 *Shop:Cửa hàng
 *Staff: Người lập
 *InvoiceStatus:Trạng thái HĐ
 *FromDate:Từ ngày
 *ToDate: Đến ngày
 *List: Danh sách hóa đơn
 *DateEstablish: Ngày lập
 *Status: Trạng thái
 *Search: Tìm kiếm
 *Approve: Duyệt
 *Destroy: Hủy
 *Save: Sửa số hóa đơn
 *Print: In HĐ
 *Detail: Thông tin tìm kiếm
 *PrintCInvoice:In HĐ điện tử
 *PrintConversionInvoice: IN HĐ chuyển đổi
 *MSG1==Bạn phải chọn các hóa đơn cần hủy !
MSG2==Bạn phải chọn các hóa đơn cần duyệt !
MSG3==Hủy hóa đơn thành công !
MSG4==Duyệt hóa đơn thành công !
MSG5==Không tìm thấy thông tin hoá đơn !
cboTypeTransaction==Loại giao dịch
ApprovalConfirm==Bạn có muốn duyệt hóa đơn ?
DestroyConfirm==Bạn có muốn hủy hóa đơn ?
 */
app_vnm.factory('fctInvoiceApprove', function($http, $translate) {
	return {
		getShop : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getShop";
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
		getInvoiceStatus : function(callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getInvoiceStatus";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getTypeTransaction : function(callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getTypeTransaction";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getPayMeThod : function(callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getPayMethod";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearch : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/enqueryInvoice";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		ApproveSuccess : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/approveSuccess";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		DestroySuccess : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/destroySuccess";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		formInvoiceApprovePrint : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/formInvoiceApprovePrint";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

	}

})

app_vnm.controller('InvoiceApproveController', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, fctInvoiceApprove) {

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

	// Xử lý form
	$scope.model = {};
	$scope.disabledDetail = true;
	$scope.disabledApprove = true;// Duyệt
	$scope.disabledDestroy = true;// Hủy
	$scope.disabledPrint = true;
	$scope.disabledPrintCInvoice = true;// IN HĐ điện tử
	$scope.PrintConversionInvoice = true;// IN HĐ chuyển đổi
	$scope.listShop = [];
	$scope.listStaff = [];
	$scope.listInvoiceStatus = [];
	$scope.listTypeTransaction = [];
	$scope.listInvoiceApprove = [];
	$scope.listPayMeThod = [];
	$scope.limitCbb = 20;
	// Load Từ ngày và tới ngày
	var momentObj = moment(new Date());
	var momentString = momentObj.format('DD/MM/YYYY');
	$scope.model.fromDate = momentString;
	$scope.model.toDate = momentString;

	// Load Cửa hàng
	$scope.getShop = function() {

		var data = {
			"status" : '1',
			"shopStockId" : $localStorage.clientContext.shop.shopId

		}
		overLoading();
		fctInvoiceApprove.getShop(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listShop = result;
				for (var i = 0; i < result.length; i++) {
					if (result[i].shopId == $localStorage.clientContext.shop.shopId) {
						$scope.model.shop = result[i];
						break;
					}
				}
				$scope.model.shopCode = $scope.model.shop.shopCode;
				$scope.model.shopName = $scope.model.shop.shopName;
				$scope.model.shopId = $scope.model.shop.shopId;
				closeOverLay();
				$scope.getInvoiceStatus();

			}

		})
	}

	$scope.getPayMeThod = function() {
		fctInvoiceApprove.getPayMeThod(function(result) {
			if (result != null && result.length > 0) {
				$scope.listPayMeThod = result;
				$scope.model.payMethod = $scope.listPayMeThod[0];
				closeOverLay();
				$scope.getTypeTransaction();
			}
		})
	}

	// load Nhân viên
	$scope.getStaff = function(shopId) {
		var data = shopId;

		fctInvoiceApprove.getStaff(data, function(result) {
			if (result != null && result) {
				$scope.listStaff = result;
				$scope.model.staffCode = "";
				$scope.model.staffName = "";
				closeOverLay();
			}

		})
	}
	// load Trạng thái HĐ
	$scope.getInvoiceStatus = function() {
		fctInvoiceApprove.getInvoiceStatus(function(result) {
			if (result != null && result.length > 0) {
				$scope.listInvoiceStatus = result;
				$scope.model.invoiceStatus = result[0];
				closeOverLay();
				$scope.getStaff($localStorage.clientContext.shop.shopId);

			}

		})
	}
	// load Loại giao dịch
	$scope.getTypeTransaction = function() {
		fctInvoiceApprove.getTypeTransaction(function(result) {
			if (result != null && result.length > 0) {
				$scope.listTypeTransaction = result;
				$scope.model.typeTransaction = result[0];

				closeOverLay();
				$scope.getShop();
			}

		})
	}

	// COMMBOBOX UPDATE
	$("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.listShop);
		} else {
			if ($scope.model.shopCode == '') {
				$scope.model.shopName = '';
				$scope.model.shopId = '';
				$scope.model.staffCode = '';
				$scope.model.staffName = '';
				$scope.model.staffId = '';
				$scope.disabledStaff = true;
			}
			if ($scope.model.shopCode!='' || $scope.model.shopCode!=null)
			{
				for(var i=0; i<$scope.listShop.length; i++)
					{
						if ($scope.model.shopCode.toUpperCase()==$scope.listShop[i].shopCode.toUpperCase())
							{
							$scope.model.shopName =$scope.listShop[i].shopName;
							$scope.model.shopCode = $scope.listShop[i].shopCode;
							$scope.model.shopId=$scope.listShop[i].shopId
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
				"mData" : "shopCode",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "shopName",
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
		$scope.model.shopCode = $scope.itemSelectedListShop.shopCode;
		$scope.model.shopId = $scope.itemSelectedListShop.shopId;
		$scope.model.shopName = $scope.itemSelectedListShop.shopName;
		document.getElementById('fShopCode').title = $scope.model.shopCode;
		document.getElementById('fShopName').title = $scope.model.shopName;
		$scope.disabledStaff = false;

		$scope.getStaff($scope.itemSelectedListShop.shopId);
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
			if ($scope.model.staffCode == '')
				{
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
	// END COMBOBOX STAFF UPDATE
	// load form Default
	$scope.loadFormDefault = function() {
		overLoading();
		$scope.getPayMeThod();
	}
	$scope.loadFormDefault();

	// Tìm kiếm
	$scope.onSearch = function() {
		if ($scope.model.staffCode == '' || $scope.model.staffCode == null || $scope.model.staffCode == undefined) {
			bootboxAlertFocus($translate.instant('vnm.invoiceApprove.label.alert.staff'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else if (moment($("#fromDate").val(),"DD/MM/YYYY") > moment($("#toDate").val(),"DD/MM/YYYY")) {
			bootboxAlertFocus($translate.instant('vnm.invoiceApprove.label.alert.date'), "", $translate.instant("vnm.lable.vnm.name"), "");
		} else {
			var data = {
				"strShopId" : $scope.model.shopId,
				"strStaffId" : $scope.model.staffId,
				"strFromDate" : $("#fromDate").val(),
				"strToDate" : $("#toDate").val(),
				"strStatus" : $scope.model.invoiceStatus.code,
				"strInvoiceNo" : "",
				"strPayMethod" : "",
				"strAgentId" : "-1",
				"transtype" : $scope.model.typeTransaction.code,
				"strInvoiceType" : ""
			}
			overLoading();
			fctInvoiceApprove.onSearch(data, function(result) {
				if (result != null && result.length > 0) {
					closeOverLay();
					$scope.listInvoiceApprove = result.slice(0, result.length);
					createTableOnSearch($scope.listInvoiceApprove);
					$scope.loadDetailInvoice($scope.listInvoiceApprove[0]);

					$scope.setControlEnable($scope.listInvoiceApprove[0].invoiceType);
					$scope.listSelectItemCheckBox = [];
					$scope.model.checkAll = false;

				} else {
					closeOverLay();
					bootboxAlertFocus($translate.instant('vnm.invoiceApprove.label.alert.emptydata'), "", $translate.instant("vnm.lable.vnm.name"), "");
					$scope.listInvoiceApprove = [];
					createTableOnSearch($scope.listInvoiceApprove);
					var x = {}
					$scope.loadDetailInvoice(x);
					$scope.disabledPrintCInvoice = true;
					$scope.PrintConversionInvoice = true;
					$scope.disabledApprove = true;
					$scope.disabledDestroy = true;
					return;

				}

			})
		}
	};

	function createTableOnSearch(dataItem) {

		oTableItemXXX = $('#tableOnSearch').DataTable({
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
			"columns" : [/* {
				"mData" : "invoiceNo",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			},*/ {
				"mData" : "invoiceNo",
				"render" : function(data, type, row) {
					x = $scope.getSoHoaDon(data) == null ? '' :$scope.getSoHoaDon(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "staffCode",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "createDate",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "orgTotal",
				"render" : function(data, type, row) {
					x = FormatNumber(data) == null ? '' : FormatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "invoiceId",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return '<input type="checkbox"  style="margin-left:7px;" class="form-check-input" id="first-child" value="' + x + '"></input>';
				}
			}

			],
			/*"columnDefs" : [ {
				"targets" : [ 0, 4 ],  column index 
				"orderable" : false,  true or false 
			} ],*/
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

		$('#tableOnSearch tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			$scope.loadDetailInvoice(rowData);
			$scope.setControlEnable(rowData.invoiceType);
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
		$('#tableOnSearch').off().on('click', 'input[type="checkbox"]', function(e, dt, type, indexes) {
			$scope.onCheckedClick(this.value);
		});

	}

	$scope.loadDetailInvoice = function(item) {
		$scope.model.invoiceNo = item.invoiceNo;
		$scope.model.name = item.name;
		$scope.model.company = item.company;
		$scope.model.address = item.address;
		$scope.model.amount = FormatNumber(item.amount);
		$scope.model.promotion = FormatNumber(item.promotion);
		$scope.model.discount = FormatNumber(item.discount);
		$scope.model.tax = FormatNumber(item.tax);
		$scope.model.amountTax =FormatNumber(item.amountTax);
		$scope.model.orgTotal = FormatNumber(item.orgTotal);
		$scope.model.grandTotal = FormatNumber(item.grand_total);
		$scope.model.note = item.note;
		$scope.model.email = item.email;
		$scope.model.createDate = item.createDate;
		$scope.model.account = item.account;
		$scope.model.tin = item.tin;
		$scope.model.payMethod.code = item.payMethod;
		$scope.mstrCurrentInvoiceId = item.invoiceId;

	}

	$scope.setControlEnable = function(invoiceType) {
		if ($scope.model.invoiceStatus.code == "1") {
			$scope.disabledPrint = false;
			$scope.disabledPrintCInvoice = false;
			$scope.PrintConversionInvoice = false;
			$scope.disabledApprove = false;
			$scope.disabledDestroy = false;

		} else if ($scope.model.invoiceStatus.code == "2") {

			$scope.disabledPrint = false;
			$scope.disabledPrintCInvoice = false;
			$scope.PrintConversionInvoice = false;
			$scope.disabledApprove = true;
			$scope.disabledDestroy = true;

		}
		if ($scope.model.invoiceStatus.code == "3") {

			$scope.disabledPrint = false;
			$scope.disabledPrintCInvoice = false;
			$scope.PrintConversionInvoice = false;
			$scope.disabledApprove = true;
			$scope.disabledDestroy = true;

		} else if ($scope.model.invoiceStatus.code == "4") {

			$scope.disabledPrint = true;
			$scope.disabledPrintCInvoice = true;
			$scope.PrintConversionInvoice = true;
			$scope.disabledApprove = true;
			$scope.disabledDestroy = true;
		}
		if (invoiceType == "CIV" && $scope.model.invoiceStatus.code != "4") {

			$scope.disabledPrint = true;
			$scope.disabledPrintCInvoice = false;
			$scope.PrintConversionInvoice = false;
		} else if ($scope.model.invoiceStatus.code != "4") {

			$scope.disabledPrint = false;
			$scope.disabledPrintCInvoice = true;
			$scope.PrintConversionInvoice = true;

		}

	}

	// Xử lý các sự kiện checkBox
	$scope.checkAllCheckBox = function() {
		if ($('#checkAll:checked').length > 0) { // Khi click check all
			$scope.listSelectItemCheckBox = $scope.listInvoiceApprove.slice(0, $scope.listInvoiceApprove.length);
		} else { // Khi bo click check all
			$scope.listSelectItemCheckBox = [];
		}
	}
	$scope.findRow = function(invoiceId) {
		var row = {};
		for (var i = 0; i < $scope.listInvoiceApprove.length; i++) {
			if ($scope.listInvoiceApprove[i].invoiceId == invoiceId) {
				row = $scope.listInvoiceApprove[i];
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
			if ($scope.listSelectItemCheckBox[i].invoiceId == row.invoiceId) {
				check = check + 1;
			}

		}
		if (check == 0)
			return 0;
		else
			return 1;
	}
	$scope.onCheckedClick = function(invoiceId) {

		var row = $scope.findRow(invoiceId);
		if ($scope.checkListSelectItemCheckBox(row) == 0) {
			$scope.listSelectItemCheckBox.push(row);

		} else {
			for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
				if ($scope.listSelectItemCheckBox[i].invoiceId == row.invoiceId) {
					$scope.listSelectItemCheckBox.splice(i, 1);
					break;
				}

			}

		}
		if ($scope.listSelectItemCheckBox.length == $scope.listInvoiceApprove.length) {
			$scope.model.checkAll = true;
		} if($scope.listSelectItemCheckBox.length != $scope.listInvoiceApprove.length) {
			$scope.model.checkAll = false;
		}

	}
	// end xử lý các sự kiện checkbox

	// Chức năng duyệt
	$scope.onClickApprove = function() {
		if ($scope.listSelectItemCheckBox.length == 0) {
			bootboxAlertFocus($translate.instant('vnm.invoiceApprove.label.confirm.approve'), "", $translate.instant("vnm.lable.vnm.name"), "");
		} else {
			bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant('vnm.invoiceApprove.label.alert.question.approve'), function() {
				$scope.ApproveSuccess();
			}, function() {
				return;
			})
		}

	}
	$scope.ApproveSuccess = function() {
		var momentObj = moment(new Date());
		var momentString = momentObj.format('DD/MM/YYYY');
		$scope.createDate = momentString;
		var data = {
			"listInvoice" : $scope.listSelectItemCheckBox,
			"sessionStaffId" : $localStorage.clientContext.shop.staffId,
			"createDate" : $scope.createDate,
			"status" : "2"

		}
		overLoading();
		fctInvoiceApprove.ApproveSuccess(data, function(result) {
			if (result != null && result.status == "OK") {
				closeOverLay();

				bootboxAlertFocus($translate.instant('vnm.invoiceApprove.label.alert.approve.success'), "", $translate.instant("vnm.lable.vnm.name"), "");
				for (var i = 0; i < $scope.listInvoiceApprove.length; i++) {
					for (var j = 0; j < $scope.listSelectItemCheckBox.length; j++) {
						while ($scope.listInvoiceApprove[i] == $scope.listSelectItemCheckBox[j]) {
							$scope.listInvoiceApprove.splice(i, 1);

						}
					}
				}
				createTableOnSearch($scope.listInvoiceApprove);
				$scope.loadDetailInvoice($scope.listInvoiceApprove[0]);
				$scope.setControlEnable($scope.listInvoiceApprove[0].invoiceType);

				$scope.listSelectItemCheckBox = [];

			} else {
				closeOverLay();
				bootboxAlertFocus(result.status, "", $translate.instant("vnm.lable.vnm.name"), "");

			}

		})
	}

	// Chức năng hủy
	$scope.onClickDesTroy = function() {
		if ($scope.listSelectItemCheckBox.length == 0) {
			bootboxAlertFocus($translate.instant('vnm.invoiceApprove.label.confirm.destroy'), "", $translate.instant("vnm.lable.vnm.name"), "");
		} else {
			bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant('vnm.invoiceApprove.label.alert.question.destroy'), function() {
				$scope.DesTroySuccess();
			}, function() {
				return;
			})
		}

	}
	$scope.DesTroySuccess = function() {
		var momentObj = moment(new Date());
		var momentString = momentObj.format('DD/MM/YYYY');
		$scope.createDate = momentString;
		var data = {
			"listInvoice" : $scope.listSelectItemCheckBox,
			"sessionStaffId" : $localStorage.clientContext.shop.staffId,
			"createDate" : $scope.createDate,
		}
		overLoading();
		fctInvoiceApprove.DestroySuccess(data, function(result) {
			if (result != null && result.status == "OK") {
				closeOverLay();

				bootboxAlertFocus($translate.instant('vnm.invoiceApprove.label.alert.destroy.success'), "", $translate.instant("vnm.lable.vnm.name"), "");
				for (var i = 0; i < $scope.listInvoiceApprove.length; i++) {
					for (var j = 0; j < $scope.listSelectItemCheckBox.length; j++) {
						while ($scope.listInvoiceApprove[i] == $scope.listSelectItemCheckBox[j]) {
							$scope.listInvoiceApprove.splice(i, 1);

						}
					}
				}
				createTableOnSearch($scope.listInvoiceApprove);
				$scope.loadDetailInvoice($scope.listInvoiceApprove[0]);
				$scope.setControlEnable($scope.listInvoiceApprove[0].invoiceType);
				$scope.listSelectItemCheckBox = [];

			} else {
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.invoiceApprove.label.alert.destroy.error'), "", $translate.instant("vnm.lable.vnm.name"), "");

			}

		})
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

	
	//Tab mới
	$scope.newPage=function(link)
	{
		
		$window.open(link);
	}
	// IN HOA DON DIEN TU
	$scope.onPrintCInvoice = function() {
		var data = {
			"strInvoiceNo" : $scope.model.invoiceNo,
			"strInvoiceType" : "G",
			"strShopId" : $localStorage.clientContext.shop.shopCode,
		}
		overLoading();
	
		fctInvoiceApprove.formInvoiceApprovePrint(data, function(result) {
			if (result != null) {
				var invoice1=result;
				$scope.newPage(invoice1.valueReturn);
				closeOverLay();
				

			} else {
				closeOverLay();
			}

		})
	}

	// IN HOA DON CHUYEN DOI
	$scope.onPrintCInvoice2 = function() {
		var data = {
			"strInvoiceNo" : $scope.model.invoiceNo,
			"strInvoiceType" : "C",
			"strShopId" : $localStorage.clientContext.shop.shopCode,
		}
		overLoading();
		fctInvoiceApprove.formInvoiceApprovePrint(data, function(result) {
			if (result != null) {
				var invoice2=result;
				$scope.newPage(invoice2.valueReturn);
				closeOverLay();
			
			} else {
				closeOverLay();
			}

		})
	};
	
	$scope.getSoHoaDon=function(sohoadon1){
		
		var x=StringUtilNVL(sohoadon1).split("#");
		if(x.length>2){
			sohoadon2=x[1];
		}
		else{
			sohoadon2=sohoadon1;
		}
		
		
		return sohoadon2;
		
	}
	
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
	function StringUtilNVL(val) {
		if (val == undefined || val == null)
			return "";
		return $.trim(val);
	}

});
