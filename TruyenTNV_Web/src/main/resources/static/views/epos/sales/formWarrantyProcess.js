var EXPORT_PARTNER = "formWarrantyProcess";

app_vnm.factory('formWarrantyProcess', function($http, $translate) {
	return {
		// danh sach nhan vien
		getStaff : function(data, callback) {
			var url = eim_url + "/epos/getListStaff";
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
		onSearch : function(data, callback) {
			var url = eim_url + "/epos/sales/FormWarrantyProcess/onSearch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		notEdit: function(data, callback) {
			var url = eim_url + "/epos/sales/FormWarrantyProcess/onCantDo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		process: function(data, callback) {
			var url = eim_url + "/epos/sales/FormWarrantyProcess/onProcess";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
});

var ROW_NOT_SELECTED = -1;
app_vnm.controller('ctrl-formWarrantyProcess', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage, formWarrantyProcess) {
	$scope.model = {};
	window.document.title = $translate.instant('vnm.formWarrantyProcess.page.title');
	$scope.typedeal = [ {
		'Id' : 'All',
		'Title' : 'Tất cả'
	},{
		'Id' : '1',
		'Title' : 'Sửa bảo hành'
	}, {
		'Id' : '2',
		'Title' : 'Sửa dịch vụ'
	} , {
		'Id' : '3',
		'Title' : 'Đổi bảo hành có lập HĐ'
	}, {
		'Id' : '4',
		'Title' : 'Đổi bảo hành không lập HĐ'
	}];
	$scope.model.typedeal = $scope.typedeal[0].Id;
	var ROW_NOT_SELECTED= -1;
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
	  
	  //Declare Regex  
	  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; 
	  var dtArray = currVal.match(rxDatePattern); // is format OK?
	 
	  if (dtArray == null)
	     return false;
	 
	//Checks for dd/mm/yyyy format.
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
		formWarrantyProcess.getShop(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listShop = result;
				for (var i = 0; i < $scope.listShop.length; i++) {
					if ($scope.listShop[i].shopId == $localStorage.clientContext.shop.shopId) {
						/*$scope.model.shop = $scope.listShop[i];*/
						$scope.model.shopCode = $scope.listShop[i].shopCode;
						$scope.model.shopId = $scope.listShop[i].shopId;
						$scope.model.shopName = $scope.listShop[i].shopName;
						break;
					}
				}
				$scope.getStaff();
			}
		})
	}
	// load Nhân viên
	$scope.getStaff = function() {
		var data = {
				"shopId":$scope.model.shopId,
		}
		formWarrantyProcess.getStaff(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				if (result.length > 0) {
					$scope.listStaff = result;
					var check = 0;
					/*for (var i = 0; i < $scope.listStaff.length; i++) {
						if ($scope.listStaff[i].staffId == $localStorage.clientContext.shop.staffId) {
							$scope.model.Staff = $scope.listStaff[i];
							$scope.model.Staffcode = $scope.listStaff[i].code;
							$scope.model.Staffname = $scope.listStaff[i].name;
							$scope.model.staffId = $scope.listStaff[i].staffId;
							check = 1;
							break;
						}
					}*/
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
						/*$scope.model.Staff = "";*/
					}
					check = 0;
				}
				if (result.length == 0) {
					$scope.listStaff = result;
					/*$scope.model.Staff = "";*/
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
	$scope.changeStaffCode = function() {
		var checkStaffCode=0;
		if($scope.model.Staffcode !=""){
			for (var i = 0; i < $scope.listStaff.length; i++) {
				if ($scope.listStaff[i].code == $scope.model.Staffcode) {
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
		}else{
			$scope.model.Staffname = "";
			$scope.model.staffId = "";
			$scope.model.staffId = "";
		}
		if(checkStaffCode==2){
			bootboxAlertFocus("Mã code nhân viên không tồn tại !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			$scope.model.Staffname = "";
			$scope.model.staffId = "";
			return;
		}
		
	}
	// create table mat hang tren form
	var initialize = function() {
		overLoading();
		$scope.getShop();
		createTabledeal($scope.GetTableSearch);
	}
	initialize();
	function mappingTypedeal(id) {
		var value;
		for (var i = 0; i < $scope.typedeal.length; i++) {
			if ($scope.typedeal[i].Id == id) {
				value = $scope.typedeal[i].Title;
				break;
			}
		}
		return value;
	}
	function mappingStaff(id) {
		var value;
		for (var i = 0; i < $scope.listStaff.length; i++) {
			if ($scope.listStaff[i].staffId == id) {
				value = $scope.listStaff[i].code;
				break;
			}
		}
		return value;
	}
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
			"scrollY" : "200",
			"columns" : [ {"mData" : "war_level",
				"render" : function(data, type, row) {
					x = mappingTypedeal(data) == null ? '' : mappingTypedeal(data);
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "receiver_note_no",
				"render" : function(data, type, row) {
					x = data == null ? '' : (data==1 ? 'Chưa lập hóa đơn':'Đã nhập hóa đơn');
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "customer",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "warranty_no",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "assign_staff_id",
				"render" : function(data, type, row) {
					x = mappingStaff(data) == null ? '' :  mappingStaff(data);
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "received_date",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			},{
				"mData" : "pay_day",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			},{
				"mData" : "",
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
				/*if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}*/
				if ($scope.InputEstablishDealSelected  != ROW_NOT_SELECTED) {
					if ($scope.InputEstablishDealSelected .warranty_id == data.warranty_id ) {
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
			/*$scope.onSearchInputSeverce($scope.InputEstablishDealSelected);*/
			/*
			 * $scope.goodForTransactionSelected = rowData; 
			 * if ($scope.disableAdd) { $scope.onSelectGoodsForAdd(); }
			 */
		});
	}
	//COMMBOBOX UPDATE
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
		$scope.model.shopCode = $scope.itemSelectedListShop.shopCode;
		$scope.model.shopId = $scope.itemSelectedListShop.shopId;
		$scope.model.shopName = $scope.itemSelectedListShop.shopName;
		document.getElementById('fShopCode').title = $scope.model.shopCode;
		document.getElementById('fShopName').title = $scope.model.shopName;
		$scope.disabledStaff=false;
		
		$scope.getStaff();
		$scope.hideModalFunction("modalListShop");
		
	}
	$scope.dialogListShopActionBack = function() {
		$scope.hideModalFunction("modalListShop");
	}
//END COMBOBOX UPDATE
	//COMMBOBOX STAFF UPDATE
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
//END COMBOBOX STAFF UPDATE
	//onSearch
	$scope.onSearch=function(){
		overLoading();
		if($("#toDate").val()!=null && $("#toDate").val()!=""){
			if($("#fromDate").val() !=null){
				var intfromdate = ($("#fromDate").val()).replace("/","");
				var inttodate = ($("#toDate").val()).replace("/","");
				if(intfromdate >inttodate){
					bootboxAlertFocus("Từ ngày phải nhỏ hơn hoặc bằng đến ngày !", 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				}
			}
		}
		if($scope.model.typedeal=="All"){
			$scope.model.typedeal="";
		}
		var data = {
			"mstrShopID" : StringUtilNVL($scope.model.shopId),
			"mstrStaffID" : StringUtilNVL($scope.model.staffId),
			"cboWarrantyType" : StringUtilNVL($scope.model.typedeal),
			"mstrToDate" : StringUtilNVL($("#toDate").val()),
			"mstrFromDate" : StringUtilNVL($("#fromDate").val()),
			"txtWarrantyReceipt" : StringUtilNVL($scope.model.txtWarrantyReceipt),
		}
		formWarrantyProcess.onSearch(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				if (result.length > 0) {
					$scope.GetTableSearch=result;
					$scope.InputEstablishDealSelected=$scope.GetTableSearch[0];
					createTabledeal($scope.GetTableSearch);
					/*$scope.onSearchInputSeverce($scope.InputEstablishDealSelected);*/
				}else{
					bootboxAlertFocus("Không tìm thấy thông tin !", "", $translate.instant("vnm.lable.vnm.name"), "");
					$scope.GetTableSearch=result;
					createTabledeal($scope.GetTableSearch);
				}
			}
			closeOverLay();
		});
	}
	//xu ly
	$scope.btnSave=function(){
		overLoading();
		if($scope.InputEstablishDealSelected == undefined||$scope.InputEstablishDealSelected == ""){
			bootboxAlertFocus("Bạn chưa chọn bản ghi để xử lý !", "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		if($scope.InputEstablishDealSelected.warrantyDetailObj.strError !=""){
			bootboxAlertFocus($scope.InputEstablishDealSelected.warrantyDetailObj.strError, "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		if($scope.InputEstablishDealSelected.warranty_log_id==1||$scope.InputEstablishDealSelected.warranty_log_id==3){
			window.open(eim_url + "/epos/sales/FormSaleTransaction","_self");
		}
		closeOverLay();
		
	}
	//không sửa được
	$scope.btnNotEditOnclick =function(){
		if($scope.InputEstablishDealSelected == undefined||$scope.InputEstablishDealSelected == ""){
			bootboxAlertFocus("Bạn chưa chọn bản ghi nào !", "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		   var messConfirm = "Bạn không sửa được giao dịch này ?";
		    var header = $translate.instant("vnm.lable.vnm.name");
		   	bootboxConfirm(header, messConfirm, $scope.notEdit, $scope.confirmKO);
	}
	$scope.notEdit=function(){
		overLoading();
		var data={
				'warranty_log_id':$scope.InputEstablishDealSelected.warranty_log_id,
		}
		formWarrantyProcess.notEdit(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				}
				if (result== 1) {
					
				}else{
					
				}
			}
			closeOverLay();
		});
	}
	
	$scope.confirmKO = function(){
		closeOverLay();
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