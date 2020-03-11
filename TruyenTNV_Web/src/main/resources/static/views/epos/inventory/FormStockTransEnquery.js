app_vnm.factory('fctFormStockTransEnquery', function($http, $translate) {
	return {

		getListStocks : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormStockTransEnquery/getStockList";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getStockTransactionDetail : function(data, callback) {
			var url = eim_url + '/epos/FormSuperiorStockImport/getStockTransactionDetail';
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getTemplateValue";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(data, "");
			});
		},
		getTransactionDetail : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormStockTransEnquery/getStockTransDetails";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},

		getListReasons : function(callback) {
			var url = eim_url + "/epos/inventory/FormStockTransEnquery/getReasonsList";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getListName : function(callback) {
			var url = eim_url + "/epos/inventory/FormStockTransEnquery/getListName";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getExistedStates : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedStates";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		onSearchGetSerialList : function(data, callback) {
			var url = eim_url + "/epos/inventory/getSerialFormSuperiorGoodImport";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getExistedGoodsGroups : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},

		searchStockTransaction : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormStockTransEnquery/searchStockTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		destroyTransaction : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormStockTransEnquery/DestroyTrans";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});
var ROW_NOT_SELECTED = -1;
app_vnm.controller('ctrl-FormStockTransEnquery', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, fctFormStockTransEnquery) {

	window.document.title = $translate.instant('vnm.form_stock_trans_enquery.page.title');
	$scope.disableBtnPrint = true;
	$scope.disableBtnPrintEducation = true;
	$scope.disableBtnViewSerial = true;
	$scope.disableBtnDestroyTrans = true;
	$scope.model = {};
	$scope.limitCbb = 50;
	$scope.model.endDate = moment().format('DD/MM/YYYY');
	$scope.lstStocks = [];
	$scope.lstReasons = [];
	$scope.loadDefault = function() {
		$scope.lstStatuss = [ {
			'code' : '',
			'name' : 'Tất cả'
		}, {
			'code' : '0',
			'name' : 'Chưa duyệt'
		}, {
			'code' : '1',
			'name' : 'Đã duyệt'
		}, {
			'code' : '2',
			'name' : 'Từ chối'
		}, {
			'code' : '3',
			'name' : 'Đã hủy'
		} ];

		$scope.lstTypes = [ {
			'code' : '',
			'name' : 'Tất cả'
		}, {
			'code' : '1',
			'name' : 'Xuất'
		}, {
			'code' : '2',
			'name' : 'Nhập'
		} ];

		fctFormStockTransEnquery.getListStocks($localStorage.clientContext.shop.shopId, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootbox.alert(result.messages);
				} else if (result.length > 0) {
					$scope.lstStock = result;
				}
			}
		});
		fctFormStockTransEnquery.getListReasons(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootbox.alert(result.messages);
				} else if (result.length > 0) {
					var reasonAll = {
						"code" : "",
						"name" : "Tất cả",
						"stockId" : "",
					};
					$scope.lstReasons.push(reasonAll)
					Array.prototype.push.apply($scope.lstReasons, result);
					closeOverLay();
				}
			}
		});

		fctFormStockTransEnquery.getListName(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootbox.alert(result.messages);
				} else if (result.length > 0) {
					$scope.lstName = result;
					closeOverLay();
				}
			}
		});
		fctFormStockTransEnquery.getExistedStates(function(resultStates) {
			if (resultStates != null && resultStates != undefined && resultStates.status != '0' && resultStates.length > 0) {

				console.log(resultStates);
				$scope.lstStatesForm = resultStates;
			}
		});
		var resourceCodeForm = {
			"code" : "",
			"name" : "",
		}
		fctFormStockTransEnquery.getExistedGoodsGroups(resourceCodeForm, function(resultListGoodGroup) {
			console.log(resultListGoodGroup);
			$scope.lstGoodGroupForm = resultListGoodGroup;
			createDataTableGoods($scope.lstTablesTrans);
			createDataTableDetailsList($scope.GetTableSearchDetailsList);
			createDataTableSerialList($scope.itemGoodSelectedSerialList);
			closeOverLay();
		});
	}

	$scope.onChooseReceiverStocks = function() {
		if ($scope.model.rStocks != null && $scope.model.rStocks != undefined) {
			$scope.model.rStockName = $scope.model.rStocks.name;
			document.getElementById('rStocks').title = $scope.model.rStocks.code;
			document.getElementById('rStocksName').title = $scope.model.rStockName;
		} else {
			console.log("null");
		}

	}

	$scope.onChooseDeliverStocks = function() {
		if ($scope.model.dStocks != null && $scope.model.dStocks != undefined) {
			$scope.model.dStockName = $scope.model.dStocks.name;
			document.getElementById('dStocks').title = $scope.model.dStocks.code;
			document.getElementById('dStocksName').title = $scope.model.dStockName;
		} else {
			console.log("null");
		}
	}

	$scope.onChooseReason = function() {
		if ($scope.model.reason != null && $scope.model.reason != undefined) {
			$scope.model.reasonName = $scope.model.reason.name;
			document.getElementById('reason').title = $scope.model.reason.code;
			document.getElementById('reasonName').title = $scope.model.reasonName;
		} else {
			console.log("null");
		}
	}

	var initialize = function() {
		overLoading();
		$scope.loadDefault();
	}
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

	$("#rStockCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.lstStock);
		} else {
			if ($scope.model.rStockCode == '')
				$scope.model.rStockName = '';
		}
	});

	$("#dStockCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListStock");
			createDataTableListStock($scope.lstStock);
		} else {
			if ($scope.model.dStockCode == '')
				$scope.model.dStockName = '';
		}
	});

	function createDataTableListStock(dataItem) {
		oTableFListShop = $('#tblListStock').DataTable({
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
			}
		});

		$('#tblListStock tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListShop.row(this).data();
			oTableFListShop.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListStock = rowData;
		});
	}

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
		$scope.model.rStock = $scope.itemSelectedListShop;
		$scope.model.rStockCode = $scope.itemSelectedListShop.code;
		$scope.model.rStockName = $scope.itemSelectedListShop.name;
		document.getElementById('rStockCode').title = $scope.model.rStockCode;
		document.getElementById('rStockName').title = $scope.model.rStockName;
		$scope.hideModalFunction("modalListShop");
	}

	$scope.updateFormStock = function() {
		$scope.model.dStock = $scope.itemSelectedListStock;
		$scope.model.dStockCode = $scope.itemSelectedListStock.code;
		$scope.model.dStockName = $scope.itemSelectedListStock.name;
		document.getElementById('dStockCode').title = $scope.model.dStockCode;
		document.getElementById('dStockName').title = $scope.model.dStockName;
		$scope.hideModalFunction("modalListStock");
	}
	$scope.dialogListShopActionBack = function() {
		$scope.hideModalFunction("modalListShop");
	}
	$scope.dialogListStockActionBack = function() {
		$scope.hideModalFunction("modalListStock");
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
		});
	}

	$scope.checkfromdate = function() {
		if ($("#startDate").val() != null && $("#startDate").val() != "") {
			if (!isDate($("#startDate").val())) {
				bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.DateWrongFormat'), 'fReceiptCode', $translate
						.instant("vnm.lable.vnm.name"), "");
				$("#startDate").val("");
				return;
			}
		}

	}
	$scope.checktodate = function() {
		if ($("#toDate").val() != null && $("#toDate").val() != "") {
			if (!isDate($("#toDate").val())) {
				bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.DateWrongFormat'), 'fReceiptCode', $translate
						.instant("vnm.lable.vnm.name"), "");
				$("#toDate").val("");
				return;
			}
		}
	}
	initialize();
	function setDataOutPutTableListGoodItem(listGoodsItem) {
		overLoading();
		for (var i = 0; i < listGoodsItem.length; i++) {
			if (listGoodsItem[i] != undefined && listGoodsItem[i] != null) {

				var goodModel = getGoodCodeAndName(listGoodsItem[i].goodsId);
				if (goodModel != null) {
					listGoodsItem[i].goodsCodeStr = goodModel.goodsCode;
					listGoodsItem[i].goodNameStr = goodModel.name;
					listGoodsItem[i].unitName = goodModel.unitName;
				}

				var stateText = getTextState(listGoodsItem[i].stateId);
				listGoodsItem[i].stateText = stateText;
			}
		}
		return listGoodsItem;
	}
	function getTextState(stateId) {
		for (var i = 0; i < $scope.lstStatesForm.length; i++) {
			if ($scope.lstStatesForm[i] != null) {
				if ($scope.lstStatesForm[i].stateId == stateId) {
					return $scope.lstStatesForm[i].name;
				}
			}
		}
		return "";
	}
	function getGoodCodeAndName(goodId) {
		for (var i = 0; i < $scope.lstGoodGroupForm.length; i++) {
			if ($scope.lstGoodGroupForm[i] != null) {
				if ($scope.lstGoodGroupForm[i].goodsId == goodId) {
					return $scope.lstGoodGroupForm[i];
				}
			}
		}
		return null;
	}

	$scope.getStockTransactionDetailFn = function(rowData) {
		overLoading();
		var strDestroyEnable = "XNV-NNV-XCH-NCH-NHT-XBL-NTL";
		var strReportEnable = "XNV-NNV-NHT";
		var mstrPermission = "AUC1C5C4EIC2DPC3S";
		if (rowData != "" && rowData != undefined) {
			if (rowData.cmdStatus == 1 && strDestroyEnable.indexOf(rowData.reasonCode) >= 0) {
				$scope.disableBtnDestroyTrans = false
			} else {
				$scope.disableBtnDestroyTrans = true;
			}
			if (rowData.cmdStatus == 1) {
				var printEnable = true;
				$scope.disableBtnPrint = false;
			} else {
				var printEnable = false;
				$scope.disableBtnPrint = true;
			}
			if (printEnable && strReportEnable.indexOf(rowData.reasonCode) >= 0) {
				$scope.disableBtnPrintEducation = false;
			} else {
				$scope.disableBtnPrintEducation = true;
			}
		}
		var dataInput = {};
		dataInput.stockId = rowData.stockTransId;
		fctFormStockTransEnquery.getStockTransactionDetail(dataInput, function(result) {

			if (result.status == '0' && result.status != undefined) {
				// KHONG THANH CONG
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));

			} else {
				/*
				 * if (result.length == 0) { if
				 * (checkserch2 == 0) {
				 * bootbox.alert($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onSearch"));
				 * return; } }
				 */
				if (result.length > 0) {
					result = setDataOutPutTableListGoodItem(result);
					createDataTableDetailsList(result);
					$scope.itemGoodSelectedDetailsList = result[0];
					/*$scope.checkserial();*/
				} else {
					createDataTableDetailsList(result);
					$scope.itemGoodSelectedDetailsList = "";
				}

			}
			closeOverLay();
		});
	}

	$scope.onSearch = function() {

		var intfromdate = ($("#startDate").val()).replace("/", "");
		var inttodate = ($("#endDate").val()).replace("/", "");
		if (intfromdate && inttodate) {
			if (intfromdate > inttodate) {
				bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.EndDateBeforeStartDate'), "",
						$translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
				return;
			}
		}
		var objSearch = {
			"stockId" : ($scope.model.rStocks != null && $scope.model.rStocks != undefined) ? $scope.model.rStocks.stockId : '',
			"shopId" : $localStorage.clientContext.shop.shopId,
			"derliverStockId" : ($scope.model.dStocks != null && $scope.model.dStocks != undefined) ? $scope.model.dStocks.stockId : '',
			"beginDate" : ($scope.model.startDate != null && $scope.model.startDate != undefined) ? $("#startDate").val() : '',
			"endDate" : ($scope.model.endDate != null && $scope.model.endDate != undefined) ? $("#endDate").val() : '',
			"inspectCmdStatus" : ($scope.model.fStatus != null && $scope.model.fStatus != undefined) ? $scope.model.fStatus.code : '',
			"inspectCmdCode" : ($scope.model.transId != null && $scope.model.transId != undefined) ? $scope.model.transId : '',
			"reasonId" : ($scope.model.reason != null && $scope.model.reason != undefined) ? $scope.model.reason.reasonId : '',
			"type" : ($scope.model.fType != null && $scope.model.fType != undefined) ? $scope.model.fType.code : '',
		}
		overLoading();
		fctFormStockTransEnquery.searchStockTransaction(objSearch, function(result) {
			if (result.status == '0') {
				bootboxAlertFocus($translate.instant(result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else if (result.length > 0) {
				if (result.length > 30000) {
					bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.error.dataToMany"), "", $translate.instant("vnm.lable.vnm.name"), "");
					// bootbox
					// .alert($translate
					// .instant("vnm.form_stock_trans_enquery.error.dataToMany"));
					$scope.lstTablesTrans = result.slice(0, 30000);
					$scope.itemSelected = $scope.lstTablesTrans[0];
				} else {
					$scope.lstTablesTrans = result;
					$scope.itemSelected = $scope.lstTablesTrans[0];
				}
				createDataTableGoods($scope.lstTablesTrans);
				$scope.disableBtnViewSerial = false;
				$scope.getStockTransactionDetailFn($scope.lstTablesTrans[0]);
				closeOverLay();
			} else {
				$scope.disableBtnserian = true;
				$scope.lstTablesTrans = result;
				createDataTableGoods($scope.lstTablesTrans);
				bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.alert.searchNotFound"), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
				return;

			}
		});
	}

	function mapping(code, array) {
		var value;
		array.forEach(function(element) {
			if (element.code == code) {
				value = element.name;
			}
		});
		return value;
	}

	function mappingReason(id) {
		var value;
		$scope.lstReasons.forEach(function(element) {
			if (element.reasonId == id) {
				value = element.name;
			}
		});
		return value;
	}

	function createDataTableGoods(dataItem) {
		oTableFListTrans = $('#tableFListTrans').DataTable({
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
				"mData" : "stockName",
				"render" : function(data, type, row) {
					var stockName = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-50' >" + stockName + "</div>";
				}
			}, {
				"mData" : "type",
				"render" : function(data, type, row) {
					var type = mapping(data, $scope.lstTypes) == null ? "" : mapping(data, $scope.lstTypes);
					return "<div data-toggle='tooltip' class='text-wrap width-20'  title='" + type + "'>" + type + "</div>";
				}
			}, {
				"mData" : "reasonId",
				"render" : function(data, type, row) {
					var reasonId = mappingReason(data) == null ? "" : mappingReason(data);
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + reasonId + "'>" + reasonId + "</div>";
				}
			}, {
				"mData" : "delivererStockName",
				"render" : function(data, type, row) {
					var delivererStockName = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-50' >" + delivererStockName + "</div>";
				}
			}, {
				"mData" : "cmdCode",
				"render" : function(data, type, row) {
					var stockTransId = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' >" + stockTransId + "</div>";
				}
			}, {
				"mData" : "createDatetime",
				"render" : function(data, type, row) {
					var createDatetime = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' >" + createDatetime + "</div>";
				}
			}, {
				"mData" : "cmdStaffId",
				"render" : function(data, type, row) {
					var cmdStaffId = mapping(data, $scope.lstName) == null ? "" : mapping(data, $scope.lstName);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + cmdStaffId + "'   >" + cmdStaffId + "</div>";
				}
			}, {
				"mData" : "cmdStatus",
				"render" : function(data, type, row) {
					var status = mapping(data, $scope.lstStatuss) == null ? " " : mapping(data, $scope.lstStatuss);
					return "<div data-toggle='tooltip' class='text-wrap width-30' title='" + status + "' >" + status + "</div>";
				}
			}, {
				"mData" : "destroyDate",
				"render" : function(data, type, row) {
					var destroyDate = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' >" + destroyDate + "</div>";
				}
			}, {
				"mData" : "destroyStaffId",
				"render" : function(data, type, row) {
					var destroyStaffId = mapping(data, $scope.lstName) == null ? "" : mapping(data, $scope.lstName);
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + destroyStaffId + "' >" + destroyStaffId + "</div>";
				}
			}, {
				"mData" : "note",
				"render" : function(data, type, row) {
					var note = data == null ? "" : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' >" + note + "</div>";
				}
			} ],
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

				if ($scope.itemSelected != ROW_NOT_SELECTED) {
					if ($scope.itemSelected.cmdCode == data.cmdCode) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
			}
		});

		$('#tableFListTrans tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListTrans.row(this).data();
			oTableFListTrans.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
			$scope.getStockTransactionDetailFn(rowData);
		});
	}

	$scope.itemGoodSelectedDetailsList = {};
	function createDataTableDetailsList(dataItem1) {
		oTableItem1 = $('#tableFListGood').DataTable({
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
			"order" : [],

			"select" : {
				style : 'os',
				info : false
			},
			"autoWidth" : true,
			"paginationType" : "full_numbers",
			"columns" : [ {
				"mData" : "goodsCodeStr",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			}, {
				"mData" : "goodNameStr",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			}, {
				"mData" : "stateText",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			}, {
				"mData" : "unitName",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			}, {
				"mData" : "goodsCodeStr",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			}, {
				"mData" : "goodsCodeStr",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			}, {
				"mData" : "quantityIssue",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			} ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sSearch" : LABEL_SEARCH,
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
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
		$('#tableFListSerial tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData1 = oTableItem1.row(this).data();
			$scope.itemGoodSelectedDetailsList = rowData1;
			oTableItem1.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
		});
	}
	$scope.checkserial = function() {
		overLoading();
		var data = {
			"stock_trans_id" : $scope.itemGoodSelectedDetailsList.stockTransId,
			"goods_id" : $scope.itemGoodSelectedDetailsList.goodsId,
			"state_id" : $scope.itemGoodSelectedDetailsList.stateId,
		}
		fctFormStockTransEnquery.onSearchGetSerialList(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootbox.alert(result.messages);
				} else if (result.length > 0) {
					$scope.GetTableSearchSerialShop = result;
					var quantityX = 0;
					if ($scope.GetTableSearchSerialShop != null && $scope.GetTableSearchSerialShop != undefined && $scope.GetTableSearchSerialShop.length > 0) {
						for (var i = 0; i < $scope.GetTableSearchSerialShop.length; i++) {
							var iQuantity = parseInt($scope.GetTableSearchSerialShop[i].quantity == '' ? '0' : $scope.GetTableSearchSerialShop[i].quantity);
							quantityX += iQuantity;
						}
					}
					$scope.model.ddTotal = quantityX;
					createDataTableSerialList($scope.GetTableSearchSerialShop);
					/*
					 * $scope.disableBtnserian =
					 * false;
					 */
				} else {
					$scope.disableBtnserian = true;
					$scope.itemGoodSelectedDetailsList = result;
					createDataTableSerialList($scope.itemGoodSelectedDetailsList);
					$scope.model.ddTotal = "0";
				}
			} else {
				/* bootbox.alert($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onSearch")); */
				$scope.itemGoodSelectedDetailsList = result;
				createDataTableSerialList($scope.itemGoodSelectedDetailsList);
				$scope.model.ddTotal = "0";
				/*
				 * $scope.disableBtnserian =
				 * true;
				 */
				/* $scope.showModalFunction("modalSerialList"); */
			}
			$scope.showModalFunction("modalSerialList");
			closeOverLay();
		});
	}
	$scope.itemGoodSelectedSerialList = {};
	function createDataTableSerialList(dataItem2) {
		var index = 1;
		oTableItem2 = $('#example2').DataTable({
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
			"order" : [],
			"select" : {
				style : 'os',
				info : false
			},
			"autoWidth" : true,
			"paginationType" : "full_numbers",
			"columns" : [ {
				"mData" : "from_serial",
				"render" : function(data, type, row) {
					return data == null ? "" : index++;
				}
			}, {
				"mData" : "from_serial",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			}, {
				"mData" : "to_serial",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					return data == null ? "" : data;
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

		$('#example2 tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			oTableItem1.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
		});

	}
	$scope.btnViewSerialOnclick = function() {
		$scope.checkserial();
		
	}
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
	}
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}
	$scope.confirmKO = function() {
		closeOverLay();
	}
	$scope.btnPrintOnclick = function() {
		$("#fStatus1").click();
	}
	$scope.btnDestroyTransOnclick = function() {
		if ($scope.itemSelected.stockTransId != null) {
			var messConfirm = $translate.instant("vnm.InputFromCenter.mess.confim");
			var header = $translate.instant("vnm.lable.vnm.name");
			bootboxConfirm(header, messConfirm, $scope.btnSave, $scope.confirmKO);
		} else {
			bootbox.alert($translate.instant("vnm.InputFromCenter.mess.error.onsave2"));
		}
	}
	$scope.btnSave = function() {
		overLoading();
		var data = {};
		$scope.itemSelected.destroyStaffId = $localStorage.clientContext.shop.staffId;
		data = $scope.itemSelected;
		fctFormStockTransEnquery.destroyTransaction(data,
				function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.alert.cannotDestroy"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
						} else if (result == '1') {
							$scope.disableBtnPrint = true;
							$scope.disableBtnPrintEducation = true;
							$scope.disableBtnViewSerial = true;
							$scope.disableBtnDestroyTrans = true;
							bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.alert.destroySusscesfully"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							$scope.setListAfterImport($scope.itemSelected);
						} else {
							bootbox.alert($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onsave3"));
							return;
						}
					} else {
						bootbox.alert($translate.instant("vnm.FormSuperiorGoodImport.mess.error.onsave3"));
						return;
					}
					closeOverLay();
				});
	}
	// set lai du lieu sau khi import
	$scope.setListAfterImport = function(rowSelected) {
		overLoading();
		for (var i = 0; i < $scope.lstTablesTrans.length; i++) {
			if ($scope.lstTablesTrans[i].cmdCode == rowSelected.cmdCode) {
				$scope.lstTablesTrans[i].cmdStatus = '3';
				$scope.lstTablesTrans[i].destroyDate = moment().format('DD/MM/YYYY H:MM:ss');
				break;
			}
		}
		createDataTableGoods($scope.lstTablesTrans);
		closeOverLay();
	}
	$scope.btnPrint = function() {
		overLoading();
		if ($scope.itemSelected.stockTransId == null) {
			bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.alert.chooseTrans"), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		overLoading();
		var templateValueSearch = {
			"code" : $scope.itemSelected.stockTransId,
			"name" : $localStorage.clientContext.sessionStockID,
		}
		fctFormStockTransEnquery.getTemplateValue(templateValueSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootbox.alert(result.messages);
				} else if (result.length > 0) {
					var templateValue = result[0];
					var strDeliverStockName = "";
					if (templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined && templateValue.deliveyShopCode != '') {
						strDeliverStockName = templateValue.deliveyShopCode + " - " + templateValue.deliveyShopName;
					}
					var namefialeexport = "";
					if ($scope.itemSelected.type == "1") {
						namefialeexport = "TemplateStockExport_vn";
					} else if ($scope.itemSelected.type == "2") {
						namefialeexport = "TemplateReportExportImport";
					}
					var ReportInput = {
						"stockTransId" : $scope.itemSelected.stockTransId,
						"strShopName1" : StringUtilNVL(templateValue.shopName1),
						"strShopCode" : StringUtilNVL(templateValue.shopCode),
						"strShopName" : StringUtilNVL(templateValue.shopName),
						"strShopAddress" : StringUtilNVL(templateValue.shopAddress),
						"strShopTel" : StringUtilNVL(templateValue.shopTel),
						"strShopFax" : StringUtilNVL(templateValue.shopFax),
						"strDeliveyShopCode" : StringUtilNVL(templateValue.deliveyShopCode),
						"strDeliveyShopName" : StringUtilNVL(templateValue.deliveyShopName),
						"strDeliveyShopAddress" : StringUtilNVL(templateValue.deliveyShopAddress),
						"strActionCode" : StringUtilNVL(templateValue.actionCode),
						"strActionDate" : StringUtilNVL(templateValue.actionDate),
						"strReasonName" : StringUtilNVL(templateValue.reasonName),
						"strActionStaff" : StringUtilNVL(templateValue.actionStaff),
						"strActionNote" : StringUtilNVL(templateValue.actionNote),
						"strInternalStockName" : StringUtilNVL(templateValue.internalStockName),
						"strDeliverStockName" : StringUtilNVL(strDeliverStockName),
						"fileTempName" : namefialeexport,
						"fileType" : '.xlsx'
					};

					fctFormStockTransEnquery.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
			closeOverLay();
		});
	}
	$scope.btnPrintEducation = function() {
		overLoading();
		if ($scope.itemSelected.stockTransId == null) {
			bootboxAlertFocus($translate.instant("vnm.form_stock_trans_enquery.alert.chooseTrans"), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		var templateValueSearch = {
			"code" : $scope.itemSelected.stockTransId,
			"name" : $localStorage.clientContext.sessionStockID,
		}
		fctFormStockTransEnquery.getTemplateValue(templateValueSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootbox.alert(result.messages);
				} else if (result.length > 0) {
					var templateValue = result[0];
					var strDeliverStockName = "";
					if (templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined && templateValue.deliveyShopCode != '') {
						strDeliverStockName = templateValue.deliveyShopCode + " - " + templateValue.deliveyShopName;
					}
					var ReportInput = {
						"stockTransId" : $scope.itemSelected.stockTransId,
						"strShopName1" : StringUtilNVL(templateValue.shopName1),
						"strShopCode" : StringUtilNVL(templateValue.shopCode),
						"strShopName" : StringUtilNVL(templateValue.shopName),
						"strShopAddress" : StringUtilNVL(templateValue.shopAddress),
						"strShopTel" : StringUtilNVL(templateValue.shopTel),
						"strShopFax" : StringUtilNVL(templateValue.shopFax),
						"strDeliveyShopCode" : StringUtilNVL(templateValue.deliveyShopCode),
						"strDeliveyShopName" : StringUtilNVL(templateValue.deliveyShopName),
						"strDeliveyShopAddress" : StringUtilNVL(templateValue.deliveyShopAddress),
						"strActionCode" : StringUtilNVL(templateValue.actionCode),
						"strActionDate" : StringUtilNVL(templateValue.actionDate),
						"strReasonName" : StringUtilNVL(templateValue.reasonName),
						"strActionStaff" : StringUtilNVL(templateValue.actionStaff),
						"strActionNote" : StringUtilNVL(templateValue.actionNote),
						"strInternalStockName" : StringUtilNVL(templateValue.internalStockName),
						"strDeliverStockName" : StringUtilNVL(strDeliverStockName),
						"fileTempName" : 'TemplateReportExportImport',
						"fileType" : '.xlsx'
					};

					fctFormStockTransEnquery.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
			closeOverLay();
		});
	}
});
function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}

function valid_numbers(e) {
	var key = e.keyCode;
	if (key >= 48 && key <= 57)
		return true;
	else
		return false;
}
