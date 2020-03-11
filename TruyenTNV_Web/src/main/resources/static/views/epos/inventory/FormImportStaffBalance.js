app_vnm.factory('fctFormImportStaffBalance', function($http, $translate) {
	return {
		getReceiptCode : function(callback) {
			var url = eim_url + "/epos/inventory/fctFormImportStaffBalacnce/getReceiptCode";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getInternalStock : function(callback) {
			var url = eim_url + "/epos/inventory/fctFormImportStaffBalacnce/getInternalStock";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getChildsStockStaff : function(data, callback) {
			var url = eim_url + "/epos/inventory/fctFormImportStaffBalacnce/getChildsStockStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReasonListByType : function(callback) {
			var url = eim_url + "/epos/inventory/fctFormImportStaffBalacnce/getReasoByTypen";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		queryBalance : function(data, callback) {
			var url = eim_url + "/epos/inventory/fctFormImportStaffBalacnce/queryBalance";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStockSerialByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStockSerialByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		importStaffBalance : function(data, callback) {
			var url = eim_url + "/epos/inventory/fctFormImportStaffBalacnce/importStaffBalance";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		exportFile : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		// Lấy dữ liệu in

		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/fctFormImportStaffBalacnce/getValueTemplatePrint";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

	}

})

app_vnm.controller('FormImportStaffBalanceController', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage, fctFormImportStaffBalance) {
	$scope.showImport = true;
	$scope.showReImport = false;

	$scope.model = {};
	$scope.liInternalStock = [];
	$scope.liStaff = [];
	$scope.limitCbb = 20;
	$scope.listReason = [];
	$scope.listShop = [];
	$scope.listGoodTransactionsModel = [];
	$scope.checkboxes = [];
	$scope.selectItem = {};
	$scope.showBtnSearch = true;
	$scope.showBtnReSearchNew = false;
	$scope.reasonDisabled = true;
	$scope.shopDisabled = true;
	$scope.dtToDateDisabled = true;
	$scope.disablePrint = true;
	$scope.disabledDetail = true;
	$scope.disableImport = true;
	var momentObj = moment(new Date());
	var momentString = momentObj.format('DD/MM/YYYY');
	$scope.model.dtFromDate = momentString;
	$scope.model.dtToDate = momentString;
	//END COMBOBOX UPDATE
	//COMMBOBOX STAFF UPDATE
	$("#fStaffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListStaff");
			createDataTableListStaff($scope.liStaff);
			

			

		}else {
			if($scope.model.staffCode == '')
				{
				$scope.model.staffName = '';
				$scope.model.staffId = '';
				$scope.model.staffCode = '';
				$scope.model.stockId='';
				}
			if ($scope.model.staffCode!='' || $scope.model.staffCode!=null)
			{
				for(var i=0; i<$scope.liStaff.length; i++)
					{
						if ($scope.model.staffCode.toUpperCase()==$scope.liStaff[i].code.toUpperCase())
							{
							$scope.model.staffCode = $scope.liStaff[i].code;
							$scope.model.staffName = $scope.liStaff[i].name;
							$scope.model.staffId = $scope.liStaff[i].shopStaffId;
							$scope.model.stockId=$scope.liStaff[i].stockId;
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
		$scope.model.staffId = $scope.itemSelectedListStaff.shopStaffId;
		$scope.model.stockId=$scope.itemSelectedListStaff.stockId;
		document.getElementById('fStaffCode').title = $scope.model.staffCode;
		document.getElementById('fStaffName').title = $scope.model.staffName;
		$scope.hideModalFunction("modalListStaff");
	}
	$scope.dialogListStaffActionBack = function() {
		$scope.hideModalFunction("modalListStaff");
	}
//END COMBOBOX STAFF UPDATE
	$scope.getReCeiptCode = function() {

		fctFormImportStaffBalance.getReceiptCode(function(result) {

			if (result != null) {
				$scope.model.reCeiptCode = result;
			}

		});
	};

	$scope.getReCeiptCode();

	$scope.getInternalStock = function() {

		fctFormImportStaffBalance.getInternalStock(function(result) {

			if (result != null && result.length >= 0) {
				$scope.liInternalStock = result;
				$scope.model.internalStock = $scope.liInternalStock[0];
				$scope.listShop = [ {
					shopName : SessionShopName,
					shopCode : SessionShopCode,
					shopId : SessionShopId
				} ];
				$scope.model.shop = $scope.listShop[0];
				closeOverLay();
			}

		});
	};

	$scope.getChildsStockStaff = function() {
		var sessionStockId = $localStorage.clientContext.sessionStockID;
		fctFormImportStaffBalance.getChildsStockStaff(sessionStockId, function(result) {

			if (result != null && result.length >= 0) {
				$scope.liStaff = result;
				$scope.getInternalStock();
			}

		});
	};

	$scope.getReasonListByType = function() {

		fctFormImportStaffBalance.getReasonListByType(function(result) {

			if (result != null && result.length >= 0) {
				$scope.listReason = result;
				$scope.model.reason = $scope.listReason[4];
				$scope.getChildsStockStaff();
			}

		});

	};

	var SessionShopCode = $localStorage.clientContext.shop.shopCode;
	var SessionShopName = $localStorage.clientContext.shop.shopName;
	var SessionShopId = $localStorage.clientContext.shop.shopId;

	$scope.fillLoadDefault = function() {
		overLoading();
		$scope.getReasonListByType();

	};
	$scope.fillLoadDefault();

	// TÌM KIẾM

	$scope.getStatusSerial = function(serial) {
		if (serial > 0) {
			return "Có";
		} else {
			return "Không";
		}
	};
	$scope.buttonOnSearchOnClick = function() {

		if ($scope.model.staffCode == '' || $scope.model.stockId == undefined||$scope.model.staffId==''||$scope.model.staffCode==undefined||$scope.model.staffCode==null) {
			bootboxAlertFocus($translate.instant("vnm.FormImportStaffBalance.label.bootbox.staff"), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		} else {
			overLoading();
			var ObjectSearch = {
				"stockId" : $scope.model.stockId,
				"importDate" : $('#fromDate').val(),
				"internalStockId" : $scope.model.internalStock.internalStockId,
				"staffId" : $scope.model.staffId,
				"shopStockId" : SessionShopId

			};
			fctFormImportStaffBalance.queryBalance(ObjectSearch, function(result) {

				if (result != null && result.length > 0) {
					$scope.listGoodTransactionsModel = result.slice(0, result.length);

					$scope.selectItem = $scope.listGoodTransactionsModel[0];
					createDataTableGoodsImportStaffBalance($scope.listGoodTransactionsModel);
					$scope.selectItem = $scope.listGoodTransactionsModel[0];
					$scope.disabledDetail = false;
					$scope.disableImport = false;
					$scope.showBtnSearch = false;
					$scope.showBtnReSearchNew = true;
					$scope.model.checkAll = false;
					closeOverLay();

				} else {
					bootboxAlertFocus($translate.instant("vnm.FormImportStaffBalance.label.bootbox.resultgoodsearch"), "", $translate
							.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				}

			});

		}
	}

	$scope.listSelectCheckBox = [];
	var oTableItemXXX;

	function createDataTableGoodsImportStaffBalance(dataItem) {
		var rowData={};
		oTableItemXXX = $('#tableGoodsSearch').DataTable({
		      'select': {
		         'style': 'multi'
		      },
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
			"columns" : [ {
				"mData" : "goodsCode",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "listStateList[0].name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "checkSerial",
				"render" : function(data, type, row) {
					x = $scope.getStatusSerial(data) == null ? '' : $scope.getStatusSerial(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "startQuantity",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "startQuantity1",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "startBalance",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "checkBox",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return '<input type="checkbox" style="margin-left:7px" id="first-child" value="' + x + '"></input>';
				}
			},
			 

			],
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

		$('#tableGoodsSearch tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			 rowData = oTableItemXXX.row(this).data();
			$scope.selectItem = rowData;
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});
		// check box all
		$('#checkAll').off().on('click', function(){
		     
		      var rows = oTableItemXXX.rows({ 'search': 'applied' }).nodes();
		   
		      $('input[type="checkbox"]', rows).prop('checked', this.checked);
		      $scope.checkAllCheckBox();
		    
		   });
		
		//check box row
		$('#tableGoodsSearch').off().on('click', 'input[type="checkbox"]', function(e,dt,type,indexes) {
			$scope.onCheckedClick(this.value);
		});

		$compile(angular.element('#tableGoodsSearch'))($scope);
	}
	// TEST. :V
	
	// Tìm mới
	$scope.buttonReSearch = function() {
		$scope.showBtnReSearchNew = false;
		$scope.showBtnSearch = true;
		$scope.disabledDetail = true;
		$scope.disableImport = true;
		$scope.disablePrint = true;
		$scope.listGoodTransactionsModel = [];
		$scope.listSelectItemCheckBox = [];
		$scope.selectItem = $scope.listGoodTransactionsModel[0];
		createDataTableGoodsImportStaffBalance($scope.listGoodTransactionsModel);
		createDataTableAfterImportStaffBalance($scope.listSelectItemCheckBox);
	}

	$scope.checkAllCheckBox = function() {		 
		if ($('#checkAll:checked').length > 0) { //Khi click check all
			$scope.listSelectItemCheckBox = $scope.listGoodTransactionsModel.slice(0, $scope.listGoodTransactionsModel.length);		
		} else { //Khi bo click check all
			$scope.listSelectItemCheckBox = [];
		}
	}

	// Xử lý khi nhập
	$scope.btnImportOnClick = function() {

		if ($scope.listSelectItemCheckBox.length == 0) {
			bootboxAlertFocus($translate.instant("Bạn phải chọn ít nhất một mặt hàng"), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormImportStaffBalance.label.bootbox.importgood"), function() {
				$scope.btnImportOnclickOK()
			}, function() {
				return;
			})
		}
	}

	$scope.btnImportOnclickOK = function() {

		var data = {
			"listGoodTransactionModel" : $scope.listSelectItemCheckBox,
			"reasonId" : $scope.model.reason.reasonId,
			"exeCode" : $scope.model.reCeiptCode,
			"cmdNode" : $scope.model.note,
			"sessionStaffId" : $localStorage.clientContext.shop.staffId,
			"internalStockId" : $scope.model.internalStock.internalStockId,
			"delivererStockId" : $scope.model.delivererStockId,
			"shopId" : $localStorage.clientContext.shop.shopId
		}

		fctFormImportStaffBalance.importStaffBalance(data,
				function(result) {
					overLoading();

					if (result[0] != null && result[1] == "1") {

						$scope.stockTranId = result[0];
						// xóa hàng ở bảng trên và thêm
						// hàng ở bảng dưới

						createDataTableGoodsImportStaffBalance($scope.listGoodTransactionsModel);
						for (var i = 0; i < $scope.listGoodTransactionsModel.length; i++) {
							for (var j = 0; j < $scope.listSelectItemCheckBox.length; j++) {
								while ($scope.listGoodTransactionsModel[i] == $scope.listSelectItemCheckBox[j]) {
									$scope.listGoodTransactionsModel.splice(i, 1);

								}

							}

						}
						$scope.selectItem = $scope.listGoodTransactionsModel[0];
						createDataTableGoodsImportStaffBalance($scope.listGoodTransactionsModel);
						createDataTableAfterImportStaffBalance($scope.listSelectItemCheckBox);

						$scope.disablePrint = false;
						$scope.disabledDetail = true;
						$scope.showImport = false;
						$scope.showReImport = true;
						$scope.listSelectItemCheckBox = [];

						closeOverLay();

					} else {
						bootboxAlertFocus($translate.instant("Nhập lỗi ! Error: "+ result[0]), "", $translate
								.instant("vnm.lable.vnm.name"), "");
						$scope.disablePrint = true;
						closeOverLay();
					}

				});

	}

	function createDataTableAfterImportStaffBalance(dataItem) {

		oTableItemXXXX = $('#tableGoodAffterImport').DataTable({
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
			"columns" : [ {
				"mData" : "goodsCode",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "listStateList[0].name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "checkSerial",
				"render" : function(data, type, row) {
					x = $scope.getStatusSerial(data) == null ? '' : $scope.getStatusSerial(data);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "startQuantity",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "startQuantity1",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "startBalance",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			},

			],
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

		$('#tableGoodAffterImport tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			rowData = oTableItemXXX.row(this).data();
			oTableItemXXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});
		$compile(angular.element('#tableGoodsSearch'))($scope);
	}
	// CHức năng in
	$scope.btnPrintOnClick = function() {
		overLoading();

		fctFormImportStaffBalance.getTemplateValue($scope.stockTranId, function(result) {

			if (result != null && result != undefined) {
				closeOverLay();
				if (result.length > 0) {
					var templateValue = result[0];
					var ReportInput = {
						"stockTranIdFromStaff" : $scope.stockTranId,
						"dateFromStaff" : templateValue.date,
						"timeFromStaff" : templateValue.time,
						"shopNameFromStaff" : templateValue.shopName,
						"staffFromStaff" : templateValue.staffName,
						"fileTempName" : 'TemplaceInputStockFromStaff_vn',
						"fileType" : '.xlsx'
					};

					fctFormImportStaffBalance.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
									.instant("vnm.lable.vnm.name"), "");
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
			closeOverLay();

		});
	};

	$scope.btnInOnClick = function() {

	}

	$scope.findRow = function(checkBox) {
		var row = {};
		for (var i = 0; i < $scope.listGoodTransactionsModel.length; i++) {
			if ($scope.listGoodTransactionsModel[i].checkBox == checkBox) {
				row = $scope.listGoodTransactionsModel[i];
				break;
			}

		}
		return row;
	}

	$scope.listSelectItemCheckBox = [];
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
	$scope.onCheckedClick = function(item) {

		var row = $scope.findRow(item);
		if ($scope.checkListSelectItemCheckBox(row) == 0) {
			$scope.listSelectItemCheckBox.push(row);

		} else {
			for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
				if ($scope.listSelectItemCheckBox[i].checkBox == row.checkBox) {
					$scope.listSelectItemCheckBox.splice(i, 1);
					break;
				}

			}

		}
		if ($scope.listSelectItemCheckBox.length == $scope.listGoodTransactionsModel.length) {
			$scope.model.checkAll = true;
		} if($scope.listSelectItemCheckBox.length != $scope.listGoodTransactionsModel.length) {
			$scope.model.checkAll = false;
		}

	}
	/*
	$('#tableGoodsSearch').on('click', 'input[type="checkbox"]', function() {
	  var x= $('#tableGoodsSearch').find('tr').find('input[type="checkbox"]:checked');
	  
	   bootbox.alert("EHHEHEHEHH");
	});  */

	// FIx bug giao diện
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
				$scope.model.dtFromDate = momentString;
				return;
			}
		}

	}

	// Bùi Ngọc Duy

	$scope.lstTableSerials = [];
	// Button chi tiet
	$scope.btnViewDetailOnClick = function() {
		$scope.model.ddTotal = 0;
		$scope.model.ddFromSerial = '';
		$scope.model.ddToSerial = '';
		$scope.model.ddQuantity = $scope.selectItem.startBalance;
		$('#divTableDDSerialSingle').css('display', 'block');
		$('#divTableDDSerialStrip').css('display', 'none');
		$scope.model.ddSerialTypeSearch = "single";
		$scope.lstTableSerials = [];
		createTableDDSerialSingle($scope.lstTableSerials)
		$scope.showModalFunction("modalSerialList");
	}

	// fill gia tri len table khi chon serial
	$scope.serialTypeChangeFn = function(item) {
		$scope.lstTableSerials = [];
		$scope.fillDataDDTableSerial($scope.lstTableSerials);
	}

	// Tao table serial
	function createTableDDSerialSingle(dataItem) {
		oTableDDSerialSingle = $('#tableDDSerialSingle').DataTable({
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
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : 250,
			"columns" : [ {
				"mData" : "toSerial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "warrantyNo",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
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
					"sPrevious" : PREV_PAGE,
				}
			}
		});
	}

	// Tao table serial
	function createTableDDSerialStrip(dataItem) {
		oTableDDSerialStrip = $('#tableDDSerialStrip').DataTable({
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
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : 250,
			"columns" : [ {
				"mData" : "fromSerial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "toSerial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
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
					"sPrevious" : PREV_PAGE,
				}
			}
		});
	}

	// button tim kiem serial
	$scope.onddSearchSerialClick = function() {
		if ($scope.model.ddFromSerial == null || $scope.model.ddFromSerial == undefined || $scope.model.ddFromSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		if ($scope.model.ddToSerial == null || $scope.model.ddToSerial == undefined || $scope.model.ddToSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		var serialSearch = {
			"goodsId" : $scope.selectItem.goodsId, // note Edit
			"stateId" : $scope.selectItem.stateId, // note Edit
			"internalStockId" : $scope.model.internalStock.internalStockId, // note
			// Edit
			"fromSerial" : $scope.model.ddFromSerial,
			"toSerial" : $scope.model.ddToSerial,
			"quantity" : $scope.model.ddQuantity,
			"isCheckQtyIssue" : "true",
			"stockId" : $scope.selectItem.stockId,
			"typeSerialSearch" : $scope.model.ddSerialTypeSearch,
		}

		fctFormImportStaffBalance.getStockSerialByCondition(serialSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstTableSerials = result;
					$scope.fillDataDDTableSerial($scope.lstTableSerials);
				} else {
					var lstNull = [];
					$scope.fillDataDDTableSerial(lstNull);
					bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerial(lstNull);
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");
			}
		});
	}

	// tao table serial
	$scope.fillDataDDTableSerial = function(dataItem) {
		if ($scope.model.ddSerialTypeSearch == 'single') {
			$('#divTableDDSerialSingle').css('display', 'block');
			$('#divTableDDSerialStrip').css('display', 'none');
			createTableDDSerialSingle(dataItem);
		} else {
			$('#divTableDDSerialSingle').css('display', 'none');
			$('#divTableDDSerialStrip').css('display', 'block');
			createTableDDSerialStrip(dataItem);
		}

		var quantityX = 0;
		if (dataItem != null && dataItem != undefined && dataItem.length > 0) {
			for (var i = 0; i < dataItem.length; i++) {
				var iQuantity = parseInt(dataItem[i].quantity == '' ? '0' : dataItem[i].quantity);
				quantityX += iQuantity;
			}
		}
		$scope.model.ddTotal = quantityX;
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
		});
		
		
		
	}

	// hide popup
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}

});