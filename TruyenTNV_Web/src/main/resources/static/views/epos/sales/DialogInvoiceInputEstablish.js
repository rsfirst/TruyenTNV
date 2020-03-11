var EXPORT_PARTNER = "ExportPartner";

app_vnm.factory('DialogInvoiceInputEstablish', function($http, $translate) {
	return {
		// danh sach nhan vien
		getStaff : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		// danh sach shop
		getShop : function(data, callback) {
			var url = eim_url + "/epos/sales/InvoiceApprove/getShop";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearchInputEstablish: function(data, callback) {
			var url = eim_url + "/epos/sales/onSearchInputEstablish";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearchInputEstablishSevrice: function(data, callback) {
			var url = eim_url + "/epos/sales/onSearchInputEstablishsevirce";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearchInputEstablishGoods: function(data, callback) {
			var url = eim_url + "/epos/sales/onSearchInputEstablishGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onInsert: function(data, callback) {
			var url = eim_url + "/epos/sales/onInsertInputEstablishGoods";
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
});

var ROW_NOT_SELECTED = -1;
app_vnm.controller('ctrl-DialogInvoiceInputEstablish', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage, DialogInvoiceInputEstablish) {
	$scope.model = {};
	window.document.title = $translate.instant('vnm.DialogInvoiceInputEstablish.page.title');
	$scope.typedeal = [ {
		'Id' : '1',
		'Title' : 'Giao dịch bán lẻ Vietnammobile'
	}, {
		'Id' : '7',
		'Title' : 'Giao dịch bán hàng cho đại lý Vietnammobile'
	} ];
	$scope.model.typedeal = $scope.typedeal[0].Id;
	$scope.typepay = [ {
		'Id' : '1',
		'Title' : 'VND TM'
	}, {
		'Id' : '2',
		'Title' : 'Guaranteed cheque'
	}, {
		'Id' : '3',
		'Title' : 'Credit Card'
	}, {
		'Id' : '4',
		'Title' : 'Debit Card'
	}, {
		'Id' : '5',
		'Title' : 'Coupon'
	}, {
		'Id' : '6',
		'Title' : 'Chuyển khoản'
	}, {
		'Id' : '7',
		'Title' : 'Bù trừ'
	} ];
	$scope.model.typepay = $scope.typepay[0].Id;
	var ROW_NOT_SELECTED= -1;
	$scope.model.Rate=1;
	$scope.model.Discount=0;// Discount==Chiết khấu
	$scope.model.Promotion=0;// Promotion==Khuyến mại
	$scope.model.GrantAmount=0;// GrantAmount==Tiền phải trả
	$scope.model.Amount=0;// Amount==Tiền chưa thuế
	$scope.model.Tax=0// Tax==Tiền thuế
	$scope.model.AmountTax=0;// AmountTax==Tiền có thuế
	$scope.model.OrgAmount=0;// OrgAmount==Nguyên tệ
	$scope.limitCbb = 50;
	$scope.printHD=true;
	$scope.printHDCD=true;
	$("#fStaffCode").click(function(e) {
		if ($scope.model.shopCode == null || $scope.model.shopCode == undefined || "" == $scope.model.shopCode.trim()) {
			bootboxAlertFocus("Bạn phải nhập mã cửa hàng !", "fShopCode", $translate.instant("vnm.lable.vnm.name"), "");
		}
	});
	$scope.changeshopcode = function() {
		var checkshopcode=0;
		if($scope.model.shopCode !=""){
			for (var i = 0; i < $scope.listShop.length; i++) {
				if ($scope.listShop[i].shopCode == $scope.model.shopCode.toUpperCase()) {
					$scope.model.shop=$scope.listShop[i];
					$scope.model.shopId = $scope.listShop[i].shopId;
					$scope.model.shopName = $scope.listShop[i].shopName;
					document.getElementById('fShopCode').title = $scope.model.shopCode;
					document.getElementById('fShopName').title = $scope.model.shopName;
					checkshopcode = 1;
					break;
				}else{
					checkshopcode = 3;
					}
				}
		}
		if($scope.model.shopCode == ""){
			$scope.model.shopId = "";
			$scope.model.shopName="";
			$scope.model.Staffcode="";
			$scope.model.Staffname = "";
			$scope.model.staffId = "";
			return;
		}
		if(checkshopcode==3){
			bootboxAlertFocus("Mã code Cửa hàng không tồn tại !", '', $translate.instant("vnm.lable.vnm.name"), "");
			$scope.model.shopId = "";
			$scope.model.shopName = "";
			return;
		}
		$scope.getStaff();
	}
	$scope.changeStaffCode = function() {
		var checkStaffCode=0;
		if($scope.model.Staffcode !=""){
			for (var i = 0; i < $scope.listStaff.length; i++) {
				if ($scope.listStaff[i].code == $scope.model.Staffcode.toUpperCase()) {
					
					$scope.model.Staff=$scope.listStaff[i];
					$scope.model.Staffname = $scope.listStaff[i].name;
					$scope.model.staffId = $scope.listStaff[i].staffId;
					document.getElementById('fStaffCode').title = $scope.model.Staffcode;
					document.getElementById('fStaffName').title = $scope.model.Staffname;
					checkStaffCode = 1;
					break;
				}else{
					checkStaffCode = 2;
					}
				}
		}
		if($scope.model.Staffcode ==""){
			$scope.model.Staffcode="";
			$scope.model.Staffname = "";
			$scope.model.staffId = "";
		}
		if(checkStaffCode==2){
			bootboxAlertFocus("Mã code nhân viên không tồn tại !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			$scope.model.Staffname = "";
			$scope.model.staffId = "";
			return;
		}
		
	}
	var d = new Date();
	var date = d.getDate();
	if (date < 10) {
		date = "0" + date;
	}
	var month = d.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var today = date + "/" + month + "/" + d.getFullYear();
	$scope.model.searchToDate = today;
	$scope.model.searchFromDate = today;
	$scope.model.datecreck= today;
	$scope.model.status="Chưa duyệt";
	function isDate(txtDate)
	{
	  var currVal = txtDate;
	  if(currVal == '')
	    return false;
	  
	  // Declare Regex
	  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; 
	  var dtArray = currVal.match(rxDatePattern); // is format OK?
	 
	  if (dtArray == null)
	     return false;
	 
	// Checks for dd/mm/yyyy format.
	    dtDay = dtArray[1];
	    dtMonth= dtArray[3];
	    dtYear = dtArray[5];  
	 
	  if (dtMonth < 1 || dtMonth > 12)
	      return false;
	  else if (dtDay < 1 || dtDay> 31)
	      return false;
	  else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
	      return false;
	  else if (dtMonth == 2)
	  {
	     var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
	     if (dtDay> 29 || (dtDay ==29 && !isleap))
	          return false;
	  }
	  return true;
	}
	$scope.checkfromdate=function(){
		if($("#fromDate").val()!=null && $("#fromDate").val()!=""){
			if(!isDate($("#fromDate").val())){
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				 $("#fromDate").val("");
				return;
			}
		}
		
	}
	$scope.checktodate=function(){
		if($("#toDate").val()!=null && $("#toDate").val()!=""){
			if(!isDate($("#toDate").val())){
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				 $("#toDate").val("");
				return;
			}
		}
	}
	// Load Cửa hàng
	$scope.getShop = function() {
		var data = {
			"status" : '1',
			"shopStockId" : $localStorage.clientContext.shop.shopId
		}
		DialogInvoiceInputEstablish.getShop(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listShop = result;
				for (var i = 0; i < $scope.listShop.length; i++) {
					if ($scope.listShop[i].shopId == $localStorage.clientContext.shop.shopId) {
						$scope.model.shop = $scope.listShop[i];
						$scope.model.shopCode = $scope.listShop[i].shopCode;
						$scope.model.shopId = $scope.listShop[i].shopId;
						$scope.model.shopName = $scope.listShop[i].shopName;
						$scope.itemSelectedListShop = result[i]; 
						break;
					}
				}
				$scope.getStaff();
			}
		})
	}
	// load Nhân viên
	$scope.getStaff = function() {
		var data = $scope.model.shopId;
		DialogInvoiceInputEstablish.getStaff(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				if (result.length > 0) {
					$scope.listStaff = result;
					var check = 0;
					for (var i = 0; i < $scope.listStaff.length; i++) {
						if ($scope.listStaff[i].staffId == $localStorage.clientContext.shop.staffId) {
							$scope.model.Staff = $scope.listStaff[i];
							$scope.model.Staffcode = $scope.listStaff[i].code;
							$scope.model.Staffname = $scope.listStaff[i].name;
							$scope.model.staffId = $scope.listStaff[i].staffId;
							check = 1;
							break;
						}
					}
					document.getElementById('fShopCode').title = $scope.model.shopCode;
					document.getElementById('fShopName').title = $scope.model.shopName;
					if (check == 1) {
						document.getElementById('fStaffCode').title = $scope.model.Staffcode;
						document.getElementById('fStaffName').title = $scope.model.Staffname;
					} else {
						$scope.model.Staffcode = "";
						$scope.model.Staffname = "";
						$scope.model.staffId = "";
						document.getElementById('fStaffCode').title = $scope.model.Staffcode;
						document.getElementById('fStaffName').title = $scope.model.Staffname;
						/* $scope.model.Staff = ""; */
					}
					check = 0;
				}
				if (result.length == 0) {
					$scope.listStaff = result;
					/* $scope.model.Staff = ""; */
					$scope.model.Staffcode = "";
					$scope.model.Staffname = "";
					$scope.model.staffId = "";
					document.getElementById('fStaffCode').title = $scope.model.Staffcode;
					document.getElementById('fStaffName').title = $scope.model.Staffname;
					check = 0;
				}
			}
			closeOverLay();
		})
	}
	// create table mat hang tren form
	var initialize = function() {
		overLoading();
	$scope.getShop();
/* $localStorage.clientContext.transIdCenter="80325"; */
		if($localStorage.clientContext.transIdCenter !=undefined && $localStorage.clientContext.transIdCenter != ""){
			var data = {
					"strTransID" : StringUtilNVL($localStorage.clientContext.transIdCenter),
				}
				DialogInvoiceInputEstablish.onSearchInputEstablish(data, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
							$localStorage.clientContext.transIdCenter ="";
						}
						if (result.length > 0) {
							$scope.GetTableSearchDeal=result;
							$scope.InputEstablishDealSelected=$scope.GetTableSearchDeal[0];
							createTabledeal($scope.GetTableSearchDeal);
							$scope.onSearchInputSeverce($scope.InputEstablishDealSelected);
							$localStorage.clientContext.transIdCenter ="";
						}else{
							bootboxAlertFocus("Không tìm thấy thông tin giao dịch !", "", $translate.instant("vnm.lable.vnm.name"), "");
							$scope.GetTableSearchDeal=result;
							$scope.GetTableSearchSevrice=result;
							$scope.GetTableSearchGood=result;
							createTabledeal($scope.GetTableSearchDeal);
							createTableservice($scope.GetTableSearchSevrice);
							createTablegoods($scope.GetTableSearchGood);
							$localStorage.clientContext.transIdCenter ="";
						}
					}
					closeOverLay();
				});
		}
		createTabledeal($scope.GetTableSearchDeal);
		createTablegoods($scope.GetTableSearchSevrice);
		createTableservice($scope.GetTableSearchGood);
		/* closeOverLay(); */
	}
	initialize();

	function createTabledeal(dataItem) {
		oTableItemXY = $('#tabledeal').DataTable({
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
			"scrollY" : "100",
			"columns" : [ {"mData" : "checkBox",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return '<input type="checkbox" class="form-control" id="first-child" value="' + x + '" ng-click=""></input>';
				}
			}, {
				"mData" : "status",
				"render" : function(data, type, row) {
					x = checkStatu(data) == null ? '' : checkStatu(data);
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "create_datetime",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "action_code",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "username",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"columnDefs" : [ {
				"targets" : [ 0, 4 ], /* column index */
				"orderable" : false, /* true or false */
			} ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"createdRow" : function(row, data, rowIndex) {
				/*
				 * if (rowIndex == 0 || rowIndex == '0') { $(row).addClass('selected'); }
				 */
				if ($scope.InputEstablishDealSelected  != ROW_NOT_SELECTED) {
					if ($scope.InputEstablishDealSelected .trans_id == data.trans_id ) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
			}
		});

		$('#tabledeal tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXY.row(this).data();
			oTableItemXY.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.InputEstablishDealSelected = rowData; 
			$scope.onSearchInputSeverce($scope.InputEstablishDealSelected);
			/*
			 * $scope.goodForTransactionSelected = rowData; if ($scope.disableAdd) { $scope.onSelectGoodsForAdd(); }
			 */
		});
		// check box row
		$('#tabledeal').off().on('click', 'input[type="checkbox"]', function(e, dt, type, indexes) {
			var rows = oTableItemXY.rows({ 'search': 'applied' }).nodes();
			$('input[type="checkbox"]', rows).prop('checked', false);
			for(var i=0;i<rows.length;i++){
				if(rows[i]._DT_RowIndex + 1 == this.value){
					$('input[type="checkbox"]', rows[i]).prop('checked', true);
					break;
				}
			}
			$scope.onCheckedClick(this.value);
		});
		$compile(angular.element('#tabledeal'))($scope);
	}
	 function checkStatu(value){
		 var strStatu;
		if(value==1){
			strStatu="Chưa thanh toán";
			return strStatu;
		}
		if(value==119){
			strStatu="Giá bán Happy sim";
			return strStatu;
		}
		if(value==2){
			strStatu="Chưa lập hóa đơn";
			return strStatu;
		}
		if(value==3){
			strStatu="Đã lập hóa đơn";
			return strStatu;
		}
		if(value==4){
			strStatu="Hủy";
			return strStatu;
		}
		if(value==MAIN_COS){
			strStatu="Cac goi cuoc ap dung rule moi tu 01/01/2014 den 28/02/2022";
			return strStatu;
		}
	}
	function createTableservice(dataItem1) {
		oTableItemXY1 = $('#tableservice').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem1,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "100",
			"order" : [],
			"columns" : [ {
				"mData" : "name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					x = FormatNumber(data) == null ? '' : FormatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "price",
				"render" : function(data, type, row) {
					x = FormatNumber(data) == null ? '' : FormatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "discount",
				"render" : function(data, type, row) {
					x = FormatNumber(data) == null ? '' : FormatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "promotion",
				"render" : function(data, type, row) {
					x = FormatNumber(data) == null ? '' : FormatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			},{
				"mData" : "tax_rate",
				"render" : function(data, type, row) {
					x = FormatNumber(data) == null ? '' : FormatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			},{
				"mData" : "tato",
				"render" : function(data, type, row) {
					x = FormatNumber(data) == null ? '' : FormatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
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
				/*
				 * if ($scope.InputEstablishServiceSelected != ROW_NOT_SELECTED) { if ($scope.InputEstablishServiceSelected.goods_id == data.goods_id ) {
				 * $(row).addClass('selected'); } } else { if (rowIndex == 0 || rowIndex == '0') { $(row).addClass('selected'); } }
				 */
			}
		});

		$('#tableservice tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXY1.row(this).data();
			oTableItemXY1.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.InputEstablishServiceSelected = rowData;
			$scope.onSearchInputGoods($scope.InputEstablishServiceSelected);
			/*
			 * $scope.goodForTransactionSelected = rowData; if ($scope.disableAdd) { $scope.onSelectGoodsForAdd(); }
			 */
		});
	}
	function createTablegoods(dataItem2) {
		oTableItemXY2 = $('#tablegoods').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem2,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "100",
			"columns" : [ {
				"mData" : "serial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "create_date",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"createdRow" : function(row, data, rowIndex) {
				/*
				 * if ($scope.InputEstablishGoodSelected != ROW_NOT_SELECTED) { if ($scope.InputEstablishGoodSelected.TRANS_SERIAL_ID == data.TRANS_SERIAL_ID) {
				 * $(row).addClass('selected'); } } else { if (rowIndex == 0 || rowIndex == '0') { $(row).addClass('selected'); } }
				 */
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			}
		});

		$('#tablegoods tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXY2.row(this).data();
			oTableItemXY2.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.InputEstablishGoodSelected = rowData;
			/*
			 * $scope.goodForTransactionSelected = rowData; if ($scope.disableAdd) { $scope.onSelectGoodsForAdd(); }
			 */
		});
	}
	$scope.onSearchInputEstablish = function() {
		overLoading();
		if($scope.model.shopCode == ""||$scope.model.shopId == ""){
			bootboxAlertFocus("Bạn phải nhập Cửa hàng !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		if ($scope.model.Staffcode == ""|| $scope.model.staffId == "") {
			bootboxAlertFocus("Bạn phải nhập nhân viên !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		if($("#toDate").val()!=null && $("#toDate").val()!=""){
			if($("#fromDate").val() !=null){
				var intfromdate = ($("#fromDate").val());
				var inttodate = ($("#toDate").val());
				if(moment(intfromdate,"DD/MMM/YYYY") > moment(inttodate,"DD/MMM/YYYY")){
					bootboxAlertFocus("Từ ngày phải nhỏ hơn hoặc bằng đến ngày !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				}
			}
		}
		var data = {
			"shopId" : StringUtilNVL($scope.model.shopId),
			"saffId" : StringUtilNVL($scope.model.staffId),
			"type" : StringUtilNVL($scope.model.typedeal),
			"toDate" : StringUtilNVL($("#toDate").val()),
			"fromDate" : StringUtilNVL($("#fromDate").val()),
			"payMethod" : StringUtilNVL($scope.model.typepay),
		}
		DialogInvoiceInputEstablish.onSearchInputEstablish(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				if (result.length > 0) {
					$scope.GetTableSearchDeal=result;
					$scope.InputEstablishDealSelected=$scope.GetTableSearchDeal[0];
					createTabledeal($scope.GetTableSearchDeal);
					$scope.onSearchInputSeverce($scope.InputEstablishDealSelected);
				}else{
					bootboxAlertFocus("Không tìm thấy thông tin giao dịch !", "", $translate.instant("vnm.lable.vnm.name"), "");
					$scope.GetTableSearchDeal=result;
					$scope.GetTableSearchSevrice=result;
					$scope.GetTableSearchGood=result;
					createTabledeal($scope.GetTableSearchDeal);
					createTableservice($scope.GetTableSearchSevrice);
					createTablegoods($scope.GetTableSearchGood);
				}
			}
			closeOverLay();
		});
	}
	$scope.onSearchInputSeverce= function (dataseach) {
		overLoading();
		if(dataseach == undefined || dataseach ==""){
			bootboxAlertFocus("Bạn chưa chọn ban ghi giao dịch !", "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		var data={
				"strTransID":StringUtilNVL(dataseach.trans_id),
		}
		DialogInvoiceInputEstablish.onSearchInputEstablishSevrice(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				if (result.length > 0) {
					$scope.GetTableSearchSevrice=result;
					$scope.InputEstablishServiceSelected=$scope.GetTableSearchSevrice[0];
					createTableservice($scope.GetTableSearchSevrice);
					$scope.onSearchInputGoods($scope.InputEstablishServiceSelected);
					
				}else{
					$scope.GetTableSearchSevrice=result;
					$scope.GetTableSearchGood=result;
					createTableservice($scope.GetTableSearchSevrice);
					createTablegoods($scope.GetTableSearchGood);
				}
			}
			closeOverLay();
		});
	}
	$scope.onSearchInputGoods= function (dataseach) {
		overLoading();
		if(dataseach == undefined || dataseach ==""){
			bootboxAlertFocus("Bạn chưa chọn ban ghi dịch vụ !", "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		var data={
				"strTransDetailID":StringUtilNVL(dataseach.trans_detail_id),
		}
		DialogInvoiceInputEstablish.onSearchInputEstablishGoods(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				if (result.length > 0) {
					$scope.GetTableSearchGood=result;
					$scope.InputEstablishGoodSelected=$scope.GetTableSearchGood[0];
					createTablegoods($scope.GetTableSearchGood);
				}else{
					$scope.GetTableSearchGood=result;
					createTablegoods($scope.GetTableSearchGood);
				}
			}
			closeOverLay();
		});
	}
	var Discount;
	var Promotion;
	var GrantAmount;
	var Amount;
	var Tax;
	var AmountTax;
	var OrgAmount;
	$scope.onCheckedClick = function(item) {
		var row = $scope.findRow(item)
		$scope.model.namekh=row.cust_name;
		$scope.model.address=row.cust_address;
		$scope.model.numbetk=row.tax_code;
		$scope.model.texcode=row.bill_account;
		$scope.model.namect=row.company;
		 Discount=row.discount;// Discount==Chiết khấu
		 Promotion=row.promotion;// Promotion==Khuyến mại
		 GrantAmount= row.org_total-row.promotion;// GrantAmount==Tiền phải trả
		 Amount=GrantAmount/1.1;// Amount==Tiền chưa thuế
		 Tax=GrantAmount - GrantAmount/1.1;// Tax==Tiền thuế
		 AmountTax=Amount + Tax;// AmountTax==Tiền có thuế
		 OrgAmount=GrantAmount;// OrgAmount==Nguyên tệ
		
		$scope.model.Discount=FormatNumber(Discount.toString());
		$scope.model.Promotion=FormatNumber(Promotion.toString());
		$scope.model.GrantAmount=FormatNumber(GrantAmount.toString());
		$scope.model.Amount=FormatNumber(Amount.toString());
		$scope.model.Tax=FormatNumber(Tax.toString());
		$scope.model.AmountTax=FormatNumber(AmountTax.toString());
		$scope.model.OrgAmount=FormatNumber(OrgAmount.toString());
	}
	$scope.findRow = function(checkBox) {
		var row = {};
		for (var i = 0; i < $scope.GetTableSearchDeal.length; i++) {
			if ($scope.GetTableSearchDeal[i].checkBox == checkBox) {
				row = $scope.GetTableSearchDeal[i];
				break;
			}

		}
		return row;
	}
	function FormatNumber(str) {
		var strTemp = str;
			/* return strTemp; */
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
	// COMMBOBOX UPDATE
	$("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListShop");
			
			createDataTableListShop($scope.listShop);
			
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
			"order" :[],
			"info" : true,
			/*
			 * "oSearch" : { "sSearch" : angular.uppercase($('#fShopCode').val()) },
			 */
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
		$scope.model.shop=$scope.itemSelectedListShop;
		$scope.model.shopCode = $scope.itemSelectedListShop.shopCode.trim();
		$scope.model.shopId = $scope.itemSelectedListShop.shopId;
		$scope.model.shopName = $scope.itemSelectedListShop.shopName;
		document.getElementById('fShopCode').title = $scope.model.shopCode;
		document.getElementById('fShopName').title = $scope.model.shopName;
		$scope.disabledStaff=false;
		$scope.model.Staff=[];
		$scope.getStaff();
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
			"order" :[],
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
		$scope.model.Staff = $scope.itemSelectedListStaff;
		$scope.model.Staffcode = $scope.itemSelectedListStaff.code;
		$scope.model.Staffname = $scope.itemSelectedListStaff.name;
		$scope.model.staffId = $scope.itemSelectedListStaff.staffId;
		document.getElementById('fStaffCode').title = $scope.model.staffCode;
		document.getElementById('fStaffName').title = $scope.model.staffName;
		$scope.hideModalFunction("modalListStaff");
	}
	$scope.dialogListStaffActionBack = function() {
		$scope.hideModalFunction("modalListStaff");
	}
// END COMBOBOX STAFF UPDATE
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
	$scope.btnSave =function(){
		if($scope.model.GrantAmount==0){
			bootboxAlertFocus("Bạn cần chọn giao dịch để tổng hợp !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		    	var messConfirm = "Bạn có muốn phát hành hóa đơn điện tử không ?";
		    	var header = $translate.instant("vnm.lable.vnm.name");
		   	bootboxConfirm(header, messConfirm, $scope.insert, $scope.confirmKO);
	}
	var invoiceFull;
	$scope.insert = function (){
		overLoading();
		if($scope.model.namekh==""){
			bootboxAlertFocus("Tên khách hàng không được để trống !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		if($scope.model.numbebill==""||$scope.model.numbebill==undefined){
			$scope.model.numbebill='0';
		}
		var dataInsert ={
				"strTransId":$scope.InputEstablishDealSelected.trans_id,
				"invoiceNo":$scope.model.numbebill,
				"strCreateDate":$("#datecreck").val(),
				"strStatus":'1',
				"strShopID":$scope.model.shopId,
				"strStaffID":$scope.model.staffId,
				"strName":$scope.model.namekh,
				"strCompany":$scope.model.namect,
				"strAddress":$scope.model.address,
				"strAccount":$scope.model.numbetk,
				"strTin":$scope.model.texcode,
				"strNote":$scope.model.commen,
				"strPayMethod":$scope.model.typepay,
				"strAmount":Amount,// Amount==Tiền chưa thuế
				"strTax":Tax,// Tax==Tiền thuế
				"strOrgTotal":OrgAmount,// OrgAmount==Nguyên tệ
				"strAmountTax":AmountTax,// AmountTax==Tiền có thuế
				"strDiscount":Discount,// Discount==Chiết khấu
				"strPromotion":Promotion,// Promotion==Khuyến mại
				"strGrandTotal":GrantAmount,// GrantAmount==Tiền phải trả
				"strUserName":$localStorage.clientContext.username,
				"strEmail":$scope.model.email,
				"strBlockNo":"",
				"strSerialNo":"",
				"strTaxRate":$scope.InputEstablishServiceSelected.tax_rate,
				"strInvoiceType":"",
				"strType":$scope.model.typedeal.code,
				"shopCode":$localStorage.clientContext.shop.shopCode,
				"inputEstablishservice":$scope.GetTableSearchSevrice,
				"inputEstablishGoodsEntity":$scope.GetTableSearchGood,
			};
		DialogInvoiceInputEstablish.onInsert(dataInsert,function(result){
			if (result.status == '0') {
				bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

			} else if(result!=""){
				bootboxAlertFocus("Tạo hóa đơn điện tử thành công, Số HD: "+result, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
				/* invoiceFull=result.substring(0,result.indexOf("#")); */
				invoiceFull=result;
				$scope.printHD=false;
				$scope.printHDCD=false;
				/*
				 * checkserch=1; $scope.onSearchInputForm();
				 */
				closeOverLay();
			}else{
				bootboxAlertFocus($translate.instant("vnm.InputFromCenter.mess.error.onsave4"), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

			}
			closeOverLay();
		});
	}
	// Tab mới
	$scope.newPage=function(link)
	{
		$window.open(link);
	}
	// IN HOA DON DIEN TU
	$scope.btnEditOnclick=function(){
		overLoading();
		if(invoiceFull==""||invoiceFull==undefined){
			bootboxAlertFocus("Không có số HD !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		var data = {
				"strInvoiceNo" : invoiceFull,
				"strInvoiceType" : "G",
				"strShopId" : $localStorage.clientContext.shop.shopCode,
			}
			overLoading();
		DialogInvoiceInputEstablish.formInvoiceApprovePrint(data, function(result) {
				if (result != null) {
					var invoice2=result;
					$scope.newPage(invoice2.valueReturn);
					$scope.printHD=true;
					closeOverLay();
				
				} else {
					closeOverLay();
				}

			});
		
	}
	// IN HOA DON CHUYEN DOI
	$scope.onPrintCInvoice2 = function() {
		var data = {
			"strInvoiceNo" : invoiceFull,
			"strInvoiceType" : "C",
			"strShopId" : $localStorage.clientContext.shop.shopCode,
		}
		overLoading();
		DialogInvoiceInputEstablish.formInvoiceApprovePrint(data, function(result) {
			if (result != null) {
				var invoice2=result;
				$scope.newPage(invoice2.valueReturn);
				$scope.printHDCD=true;
				closeOverLay();
			
			} else {
				closeOverLay();
			}

		})
	}
	
	$scope.confirmKO = function(){
		closeOverLay();
	}
	
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

function valid_numbers(e) {
	var key = e.keyCode;
	if (key >= 48 && key <= 57)
		return true;
	else
		return false;
}
function formatNumber(amount) {
	decimalCount = 0, decimal = ".", thousands = ",";
	try {
		decimalCount = Math.abs(decimalCount);
		decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

		const negativeSign = amount < 0 ? "-" : "";

		let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
		let j = (i.length > 3) ? i.length % 3 : 0;

		return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "" + thousands)
				+ (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
	} catch (e) {

	}
};