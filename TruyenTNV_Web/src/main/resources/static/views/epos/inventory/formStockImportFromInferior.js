app_vnm.factory('stockImportInferior', function($http, $translate) {
	return {
		getShopTypeList : function(callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getShopType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStatusList : function(callback) {
			var url = eim_url + "/epos/inventory/stockImportFromInferior/getListStatus";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReasonList : function(data, callback) {
			var url = eim_url + "/epos/inventory/getReasonByCode";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getExistedStates : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedStates";
			$http.post(url).success(callback)
					.error(function(data, status, headers, config) {
								closeOverLay();
								bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
					});
		},
		getExistedGoodsGroups : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoodsGroups";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getExistedGoods : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStocksTree : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStocksTree";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getGoodsListByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsListByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getGoodsQuantityByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsQuantityByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getVctResourceList : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getVctResourceList";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getInternalStockList : function(callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getInternalStockList";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getInternalStock : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getInternalStock";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		searchOnclick : function(data, callback) {
			var url = eim_url + "/epos/inventory/getStockImportFromInferior";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if ("403" == status) {
					bootboxAlertFocus(status + " " + data.message, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else {
					bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			});
		},
		getChildsStockList : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getChildsStock";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getShopTypeList : function(callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getShopType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStockSerialTripImport : function(data, callback) {
			var url = eim_url + "/epos/inventory/getStockSerialTripImport";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getStockSerialTripImportForRight : function(data, callback) {
			var url = eim_url + "/epos/inventory/getStockSerialTripImportForRight";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		spiritStockTransaction : function(data, callback) {
			var url = eim_url + "/epos/inventory/spiritStokTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		importStockTransaction : function(data, callback) {
			var url = eim_url + "/epos/inventory/importForStockTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		approveStockTransaction : function(data, callback) {
			var url = eim_url + "/epos/inventory/approveForStockTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		rejectStockTransaction : function(data, callback) {
			var url = eim_url + "/epos/inventory/rejectForStockTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getTemplateValue";
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
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStockSerialByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStockSerialByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
});
var ROW_NOT_SELECTED = -1;
app_vnm.controller('ctrl-stockImportInferior', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, stockImportInferior) {

	$scope.model = {};
	$scope.reason = {};
	$scope.listgetShopType = [];
	$scope.listgetStatus = [];
	$scope.listgetStatus2 = [];
	$scope.listgetReason = [];
	$scope.lstStockExport = [];
	$scope.listgetInternalStock = [];
	$scope.lstGoodsResourceForm = [];
	$scope.lstGoodSelected = [];
	$scope.itemSelectedCmdStock = {};
	$scope.itemGoodSelected = {};
	$scope.lstSerialAgree = [];
	$scope.lstSerialDeny = [];
	$scope.lstSerialSelected = [];
	$scope.model.showAddSerial = true;
	$scope.model.showRemoveSerial = true;
	$scope.model.lstSerialBefore = [];
	$scope.lstGoodsTmp = [];
	$scope.lstSerialTmp = [];
	$scope.showModifySerial = false;
	$scope.showModifyGood = false;
	$scope.isDisabledBtnEdit = true;
	$scope.isDisableBtnAprove = true;
	$scope.isDisabledBtnPrint = true;
	$scope.isDisabledBtnAproveCommand = true;
	$scope.showBtnEditSerial = true;
	$scope.showBtn = true;
	$scope.showApproveConfirm = false;
	$scope.isDisabledApproveCommand = true;
	$scope.isDisabledDetail = true;
	$scope.isDisableSearchValue = true;
	$scope.isDisabledBtnCommand = true;
	$scope.disableBtnInput = true;
	$scope.btnViewStock = true;
	var action = "";
	$scope.stockTransId = '';
	var beginQuantity = "";
	var indexStockTrans = 0;
	var indexGood = 0;
	var objAgent = {};
	
	var stockId = $localStorage.clientContext.sessionStockID;
	// $scope.model.reasonName = "Nhập hàng trả lại từ cấp dưới";
	$scope.loadDefault = function() {
//		$scope.model.searchFromDate = $scope.getSysdate();
		var x = new Date();
		$scope.model.searchFromDate = $filter('date')(x, 'dd/MM/yyyy');
		stockImportInferior.getShopTypeList(function(result) {
			if (result != null && result != undefined && result.length > 0) {
				$scope.listgetShopType = result;
				var obj = {};
				obj.code = 'AL';
				obj.name = 'Tất cả cửa hàng';
				$scope.listgetShopType.splice(0,0,obj);
				stockImportInferior.getChildsStockList(stockId, function(result) {
					if (result != null && result != undefined && result.length > 0) {
						$scope.lstStockExport = result;
						var obj = {};
						obj.code = 'AL';
						obj.name = 'Tất cả kho';
						$scope.lstStockExport.splice(0,0,obj);
						var sessionValue = {
							"sessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
							"sessionShopType" : $localStorage.clientContext.shop.shopType,
							"isForm" : "1",
						};
						stockImportInferior.getVctResourceList(sessionValue, function(result) {
							if (result != null && result != undefined && result.length > 0) {
								$scope.lstGoodsResourceForm = result;
								var obj = {};
								obj.code = 'AL';
								obj.name = 'Tất cả các nguồn hàng';
								$scope.lstGoodsResourceForm.splice(0,0,obj);
								$scope.model.resourceCodeForm = $scope.lstGoodsResourceForm[0];
								stockImportInferior.getStatusList(function(result) {
									if (result != null && result != undefined && result.length > 0) {
										$scope.listgetStatus = result;
										angular.forEach($scope.listgetStatus, function(item) {
											$scope.listgetStatus2.push(Object.assign({}, item));
										})
										$scope.listgetStatus.splice(1,1);
										var obj = {};
										obj.code = 'AL';
										obj.name = 'Tất cả trạng thái';
										$scope.listgetStatus.splice(0,0,obj);
										stockImportInferior.getInternalStockList(function(result) {
											if (result != null && result != undefined && result.length > 0) {
												$scope.listgetInternalStock = result;
												$scope.model.internalStock = $scope.listgetInternalStock[0];
												stockImportInferior.getReasonList('NCD', function(result) {
													if (result != null && result != undefined) {
														$scope.reason = result;
														$scope.model.reason = $scope.reason.code;
														$scope.model.reasonName = $scope.reason.name;
													}
													stockImportInferior.getExistedStates(function(result) {
														if (result != null && result != undefined && result.length > 0) {
															$scope.lstStatesForm = result;
															$scope.model.state = $scope.lstStatesForm[0];
															
														}
													});
												});
											}
										});
									}
								});
							}
						});
					}
				});
			}
		});
	}

	var initialize = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		$scope.loadDefault();
		createDataTableStockTrans($scope.lstTableTransInfor, 'tableTransInfo');
		createTableGoodsSave($scope.lstTableGoodsForm, 'tableGoodsForm');
		App.unblockUI("#contentMain");
	}

	initialize();

	$scope.onChooseStock = function() {
		$scope.model.stockExportName = $scope.model.stockExport.name;
	}
	$scope.onChooseReason = function() {

	};

	$scope.showModalStockView = function() {
		$('#tableItem').DataTable({
			destroy : true,
		});

		$('#tableQuantity').DataTable({
			destroy : true,
		});

		$scope.showModalFunction("modalStockView");
	}

//	$scope.showModalFunction = function(idModal) {
//		$('#' + idModal).modal('show');
//	}
	
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
		});
	}
	$scope.hideModalFunction = function(idModal) {
        $('#' + idModal).modal('hide');
    }

	$scope.btnAdjustOnclick = function(item) {
		$scope.selectedShipment = item;

	}

	
	$scope.getLovAgentName = function(lovAgentId) {
		var name = '';
		if ($scope.lstStockExport != null && $scope.lstStockExport != undefined && $scope.lstStockExport.length > 0) {
			for (var i = 0; i < $scope.lstStockExport.length; i++) {
				if (lovAgentId == $scope.lstStockExport[i].stockId) {
					name = $scope.lstStockExport[i].name;
					break;
				}
			}
		}
		return name;
	}
	
	$scope.getLovAgent = function(id) {
		if ($scope.lstStockExport != null && $scope.lstStockExport != undefined && $scope.lstStockExport.length > 0) {
			for (var i = 0; i < $scope.lstStockExport.length; i++) {
				if (id == $scope.lstStockExport[i].stockId) {
					return $scope.lstStockExport[i];
				}
			}
		}
		return null;
	}
	$scope.getLovAgentId = function(lovAgentId) {
		var id = '';
		if ($scope.$scope.lstStockExport != null && $scope.$scope.lstStockExport != undefined && $scope.$scope.lstStockExport.length > 0) {
			for (var i = 0; i < $scope.$scope.lstStockExport.length; i++) {
				if (lovAgentId == $scope.$scope.lstStockExport[i].stockId) {
					id = $scope.$scope.lstStockExport[i].stockId;
					break;
				}
			}
		}
		return id;
	}
	$scope.getLovReasonName = function(lovReasonId) {
		var name = '';
		if ($scope.listgetReason != null && $scope.listgetReason != undefined && $scope.listgetReason.length > 0) {
			for (var i = 0; i < $scope.listgetReason.length; i++) {
				if (lovReasonId == $scope.listgetReason[i].reasonId) {
					name = $scope.listgetReason[i].name;
					break;
				}
			}
		}
		return name;
	}
	
	$scope.getInventory = function(good){
		for(var i = 0; i < $scope.lstStockExport.length; i++){
			if($scope.lstStockExport[i].code == good.goodsCode){
				return $scope.lstStockExport[i];
			}
		}
		return null;
	}
	$scope.getStatusName = function(statusCode) {
		var name = '';
		if ($scope.listgetStatus2 != null && $scope.listgetStatus2 != undefined && $scope.listgetStatus2.length > 0) {
			for (var i = 0; i < $scope.listgetStatus2.length; i++) {
				if (statusCode == $scope.listgetStatus2[i].code) {
					name = $scope.listgetStatus2[i].name;
					break;
				}
			}
		}
		return name;
	}
	
	
	// Dialog xem kho
	var x = $localStorage.clientContext.shop.shopCode;
	var y = $localStorage.clientContext.shop.shopName;
	$scope.lstCurrentStock = [ {
		'code' : x,
		'name' : y
	}, ];
	$scope.pStocksTree = [];
	$scope.pGoodsList = []; // Danh sach mat hang trong dialog khi chon Tat ca
	$scope.pGoodsGroupsList = [];
	$scope.pStatesList = [];
	$scope.lstGoodsResource = []; // Nguon hang tren dialog
	$scope.lstInternalStock = []; // Loai hang hoa tren dialog
	$scope.lstTableGoods = []; // Danh sach mat hang hien thi len bang
	$scope.quantities = []; // Danh sach so luong hien thi len bang
	$scope.lstTableGoodsFilter = []; // Danh sach mat hang hien thi len bang

	// create table mat hang
	$scope.itemGoodSelected = {};
	function createDataTableGoods(dataItem) {
		oTableItem = $('#tableItem').DataTable({
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
			"scrollY" : "200",
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
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "goodsGroupId",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : $scope.getGoodsGroupName(data));
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "unitName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "checkSerial",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : (data == '1' ? "Có" : "Không"));
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "checkWarranty",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : (data == '1' ? "Có" : "Không"));
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "notes",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
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
				if ($scope.itemGoodSelected != ROW_NOT_SELECTED) {
					if ($scope.itemGoodSelected.goodsCode == data.goodsCode) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
			}
		});

		$('#tableItem tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItem.row(this).data();
			oTableItem.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemGoodSelected = rowData;
			if ($scope.model.currentStock != null && $scope.model.currentStock != undefined) {
				$scope.createDataTableGoodsQuantitiesByGoodsId(rowData.goodsId);
			}
		});
	}

	// Lay ten nhom hang
	$scope.getGoodsGroupName = function(goodsGroupId) {
		var name = '';
		if ($scope.pGoodsGroupsList != null && $scope.pGoodsGroupsList != undefined && $scope.pGoodsGroupsList.length > 0) {
			for (var i = 0; i < $scope.pGoodsGroupsList.length; i++) {
				if (goodsGroupId == $scope.pGoodsGroupsList[i].goodsGroupId) {
					name = $scope.pGoodsGroupsList[i].name;
					break;
				}
			}
		}
		return name;
	}

	// create table so luong
	$scope.itemGoodQuantitySelected = {};
	$scope.disableBtnDetail = true;
	function createDataTableGoodsQuantities(dataItem) {
		oTableItemX = $('#tableQuantity').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : false,
			"paging" : false,
			"bLengthChange" : false,
			"bPaginate" : true,
			"bSort" : false,
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"columns" : [ {
				"mData" : "stateName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantityIssue",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantityEffect",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantityRemain",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"oLanguage" : {
				"sInfo" : '',
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : '',
				"oPaginate" : {
					"sFirst" : '',
					"sLast" : '',
					"sNext" : '',
					"sPrevious" : '',
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"createdRow" : function(row, data, rowIndex) {
				if ($scope.itemGoodQuantitySelected != ROW_NOT_SELECTED) {
					if ($scope.itemGoodQuantitySelected.goodsId == data.goodsId && $scope.itemGoodQuantitySelected.stateId == data.stateId) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
			}
		});

		$('#tableQuantity tbody').off().on(
				'click',
				'tr',
				function(e, dt, type, indexes) {
					$(this).removeClass('selected');
					var rowData = oTableItemX.row(this).data();
					oTableItemX.$('tr.selected').removeClass('selected');
					$(this).addClass('selected');
					$scope.itemGoodQuantitySelected = rowData;
					if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1'
							&& $scope.itemGoodQuantitySelected != null && $scope.itemGoodQuantitySelected != undefined
							&& $scope.itemGoodQuantitySelected.quantityEffect > 0) {
						$scope.disableBtnDetail = false;
					} else {
						$scope.disableBtnDetail = true;
					}
				});
	}

	// create table so luong
	$scope.createDataTableGoodsQuantitiesByGoodsId = function(goodsId) {
		var cond = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"goodsId" : goodsId,
			"internalStock" : $scope.model.stockInternalType.code,
			"radio" : $scope.model.stockTypeSearch,
		};

		stockImportInferior.getGoodsQuantityByCondition(cond, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else {
					$scope.quantities = result;
					// Bang so luong ...
					$scope.itemGoodQuantitySelected = $scope.quantities[0];
					createDataTableGoodsQuantities($scope.quantities);

					if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1'
							&& $scope.itemGoodQuantitySelected != null && $scope.itemGoodQuantitySelected != undefined
							&& $scope.itemGoodQuantitySelected.quantityEffect > 0) {
						$scope.disableBtnDetail = false;
					} else {
						$scope.disableBtnDetail = true;
					}

					// Tinh tong thuc te
					var mintSumEffect = 0;
					for (var i = 0; i < result.length; i++) {
						mintSumEffect += parseInt(result[i].quantityEffect);
					}
					$scope.model.total = mintSumEffect;
				}
			}
		});
	}

	// Button xem kho
	$scope.viewStock = function() {
		overLoading();
		stockImportInferior.getInternalStock(function(result6) {
			if (result6 != null && result6 != undefined && result6.status != '0') {
				$scope.lstInternalStock = result6;
			} else {
				$scope.lstInternalStock = [];
			}

			var sessionValue = {
				"SessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
				"SessionShopType" : $localStorage.clientContext.shop.shopType,
				"isForm" : "0",
			};
			stockImportInferior.getVctResourceList(sessionValue, function(result5) {
				if (result5 != null && result5 != undefined && result5.status != '0') {
					$scope.lstGoodsResource = result5;
				} else {
					$scope.lstGoodsResource = [];
				}

				stockImportInferior.getExistedStates(function(result) {
					if (result != null && result != undefined && result.status != '0') {
						$scope.pStatesList = result;
					} else {
						$scope.pStatesList = [];
					}

					stockImportInferior.getExistedGoodsGroups(function(result1) {
						if (result1 != null && result1 != undefined && result1.status != '0') {
							$scope.pGoodsGroupsList = result1;
						} else {
							$scope.pGoodsGroupsList = [];
						}

						var resourceCodeForm = {
							"code" : "",
							"name" : "",
						}
						stockImportInferior.getExistedGoods(resourceCodeForm, function(result2) {
							if (result2 != null && result2 != undefined && result2.status != '0') {
								$scope.pGoodsList = result2;
							} else {
								$scope.pGoodsList = [];
							}

							$scope.lstTableGoodsFilter = $scope.pGoodsList;
							var shopStaff = {
								"code" : $localStorage.clientContext.sessionStockID,
								"name" : "",
							};
							stockImportInferior.getStocksTree(shopStaff, function(result3) {
								if (result3 != null && result3 != undefined & result3.status != '0') {
									$scope.pStocksTree = result3;
								} else {
									$scope.pStocksTree = [];
								}

								$scope.model.stockTypeSearch = 'all';
								$scope.model.currentStock = $scope.lstCurrentStock[0];
								$scope.model.currentStockName = $scope.model.currentStock.name;

								if ($scope.lstGoodsResource != null && $scope.lstGoodsResource != undefined
										&& $scope.lstGoodsResource.length > 0) {
									$scope.model.resourceCode = $scope.lstGoodsResource[0];
								}
								if ($scope.lstInternalStock != null && $scope.lstInternalStock != undefined
										&& $scope.lstInternalStock.length > 0) {
									$scope.model.stockInternalType = $scope.lstInternalStock[0];
								}

								if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined
										&& $scope.model.goodsForm.goodsId != null && $scope.model.goodsForm.goodsId != undefined
										&& $scope.model.goodsForm.goodsId != '') {
									$scope.lstTableGoods = [];
									for (i = 0; i < $scope.pGoodsList.length; i++) {
										if ($scope.pGoodsList[i].goodsId == $scope.model.goodsForm.goodsId) {
											$scope.lstTableGoods.push($scope.pGoodsList[i]);
											$scope.model.goodCode = $scope.pGoodsList[i].goodsCode;
											$scope.model.goodName = $scope.pGoodsList[i].name;
											break;
										}
									}
								} else {
									$scope.lstTableGoods = $scope.pGoodsList;
								}

								if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
									$scope.itemGoodSelected = $scope.lstTableGoods[0];
									createDataTableGoods($scope.lstTableGoods);
									$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
								} else {
									var lstNull = [];
									createDataTableGoods(lstNull);
									$scope.itemGoodSelected = {};
									createDataTableGoodsQuantities(lstNull);
									$scope.itemGoodQuantitySelected = {};
									$scope.disableBtnDetail = true;
								}

								/*if ($scope.disableAddChooseGoods && !$scope.disableAdd) {
									$scope.disableBtnInput = true;
								} else {
									$scope.disableBtnInput = false;
								}*/

								$scope.showModalFunction("modalStockInfo");
								closeOverLay();
							});
						});
					});
				});
			});
		});
	}

	// show popup
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
		});
	}

	// hide popup
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}

	// set Ten khi chon mat hang
	$scope.onChooseCurrentStock = function() {
		$scope.model.currentStockName = $scope.model.currentStock.name;
	}

	// su kien khi chon radio
	$scope.stockTypeChangeFn = function(val) {
		if (val == 'all') {
			$scope.lstTableGoods = $scope.lstGoodsForm;
			$scope.lstTableGoodsFilter = $scope.lstTableGoods;
			if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
				$scope.itemGoodSelected = $scope.lstTableGoods[0];
				createDataTableGoods($scope.lstTableGoods);
				$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
			} else {
				var lstNull = [];
				createDataTableGoods(lstNull);
				$scope.itemGoodSelected = {};
				createDataTableGoodsQuantities(lstNull);
				$scope.itemGoodQuantitySelected = {};
				$scope.disableBtnDetail = true;
			}
		} else {
			$scope.getGoodsListByCondition(val)
		}
	}

	// su kien khi cho loai hang hoa
	$scope.onChooseInternalStock = function() {
		if ($scope.model.stockTypeSearch == 'all') {
			$scope.lstTableGoods = $scope.lstGoodsForm;
			$scope.lstTableGoodsFilter = $scope.lstTableGoods;
			if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
				$scope.itemGoodSelected = $scope.lstTableGoods[0];
				createDataTableGoods($scope.lstTableGoods);
				$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
			} else {
				var lstNull = [];
				createDataTableGoods(lstNull);
				$scope.itemGoodSelected = {};
				createDataTableGoodsQuantities(lstNull);
				$scope.itemGoodQuantitySelected = {};
				$scope.disableBtnDetail = true;
			}
		} else {
			$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
		}
	}

	// su kien khi chon nguon hang
	$scope.onChooseResourceCode = function() {
		$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
	}

	// Lay danh sach hang hoa theo dieu kien
	$scope.getGoodsListByCondition = function(radio) {
		var cond = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"resourceCode" : $scope.model.resourceCodeForm.code,
			"internalStock" : $scope.model.stockInternalType.code,
			"checkWarranty" : "false",
			"radio" : radio,
			"shopId" : $localStorage.clientContext.shopId,
		};

		stockImportInferior.getGoodsListByCondition(cond, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstTableGoods = result;
					$scope.lstTableGoodsFilter = $scope.lstTableGoods;
					$scope.itemGoodSelected = $scope.lstTableGoods[0];
					createDataTableGoods($scope.lstTableGoods);
					$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
				} else {
					var lstNull = [];
					createDataTableGoods(lstNull);
					$scope.itemGoodSelected = {};
					createDataTableGoodsQuantities(lstNull);
					$scope.itemGoodQuantitySelected = {};
					$scope.disableBtnDetail = true;
				}
			} else {
				var lstNull = [];
				createDataTableGoods(lstNull);
				$scope.itemGoodSelected = {};
				createDataTableGoodsQuantities(lstNull);
				$scope.itemGoodQuantitySelected = {};
				$scope.disableBtnDetail = true;
			}
		});
	}

	// filter theo ma MH + ten MH
	$scope.filterGoods = function() {
		if ($scope.lstTableGoodsFilter != null && $scope.lstTableGoodsFilter != undefined && $scope.lstTableGoodsFilter.length > 0) {
			var lstTemp = [];
			if ($scope.model.goodCode != null && $scope.model.goodCode != undefined && $scope.model.goodCode != '') {
				for (var i = 0; i < $scope.lstTableGoodsFilter.length; i++) {
					if ($scope.lstTableGoodsFilter[i].goodsCode.toUpperCase().indexOf($scope.model.goodCode.trim().toUpperCase()) >= 0) {
						if ($scope.model.goodName != null && $scope.model.goodName != undefined && $scope.model.goodName != '') {
							if ($scope.lstTableGoodsFilter[i].name.toUpperCase().indexOf($scope.model.goodName.trim().toUpperCase()) >= 0) {
								lstTemp.push($scope.lstTableGoodsFilter[i]);
							}
						} else {
							lstTemp.push($scope.lstTableGoodsFilter[i]);
						}
					}
				}
			} else {
				for (var i = 0; i < $scope.lstTableGoodsFilter.length; i++) {
					if ($scope.model.goodName != null && $scope.model.goodName != undefined && $scope.model.goodName != '') {
						if ($scope.lstTableGoodsFilter[i].name.toUpperCase().indexOf($scope.model.goodName.trim().toUpperCase()) >= 0) {
							lstTemp.push($scope.lstTableGoodsFilter[i]);
						}
					} else {
						lstTemp.push($scope.lstTableGoodsFilter[i]);
					}
				}
			}
		}

		if (lstTemp.length > 0) {
			createDataTableGoods(lstTemp);
			$scope.itemGoodSelected = lstTemp[0];
			$scope.createDataTableGoodsQuantitiesByGoodsId(lstTemp[0].goodsId)
		} else {
			var lstNull = [];
			createDataTableGoods(lstNull);
			$scope.itemGoodSelected = {};
			createDataTableGoodsQuantities(lstNull);
			$scope.itemGoodQuantitySelected = {};
			$scope.disableBtnDetail = true;
		}
	}

	// Button Nhap trong dialog xem kho
	$scope.btnSaveOnClick = function() {
		var isExist = false
		if ($scope.lstGoodsForm != null && $scope.lstGoodsForm != undefined && $scope.lstGoodsForm.length > 0) {
			for (var i = 0; i < $scope.lstGoodsForm.length; i++) {
				if ($scope.lstGoodsForm[i].goodsId == $scope.itemGoodSelected.goodsId) {
					isExist = true;
					break;
				}
			}
		}
		if (isExist) {
			$scope.model.goodsForm = $scope.itemGoodSelected;
			if ($scope.lstStatesForm != null && $scope.lstStatesForm != undefined && $scope.lstStatesForm.length > 0) {
				for (var i = 0; i < $scope.lstStatesForm.length; i++) {
					if ($scope.lstStatesForm[i].stateId == $scope.itemGoodQuantitySelected.stateId) {
						$scope.model.statesForm = $scope.lstStatesForm[i];
					}
				}
			}
			$scope.onChooseGoodsForm();
			$scope.btnAddOnclickClone();
		} else {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.choose.right.goods'), "", $translate
					.instant("vnm.lable.vnm.name"), "");
			$scope.disableAdd = false;
			$scope.disableAddx = false;
			$scope.disableAddViewDetail = false;
			$scope.disableAddChooseGoods = false;
			$scope.refreshDetailSerialForGoods();

			$('#pnlButtonAction').css('display', 'none');
			$('#pnlButtonOK').css('display', 'block');
		}
		$scope.typeAction = 'ADD';
		$scope.hideModalFunction("modalStockInfo");
	}

	// //// Dialog chi tiet trong dialog xem kho
	$scope.lstTableSerials = [];
	// Button chi tiet
	$scope.btnDetailOnClick = function() {
		$scope.model.ddFromSerial = '';
		$scope.model.ddToSerial = '';
		$scope.model.ddQuantity = $scope.itemGoodQuantitySelected.quantityRemain;
		$('#divTableDDSerialSingle').css('display', 'block');
		$('#divTableDDSerialStrip').css('display', 'none');
		$scope.model.ddSerialTypeSearch = "single";
		$scope.lstTableSerials = [];
		createTableDDSerialSingle($scope.lstTableSerials)
		$scope.showModalFunction("modalSerialListDetail");
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
			"scrollY" : "250",
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
			"scrollY" : "250",
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
			}
		});
	}

	// button tim kiem serial
	$scope.onddSearchSerialClick = function() {
		if ($scope.model.ddFromSerial == null || $scope.model.ddFromSerial == undefined || $scope.model.ddFromSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"),
					"");
			return;
		}
		if ($scope.model.ddToSerial == null || $scope.model.ddToSerial == undefined || $scope.model.ddToSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"),
					"");
			return;
		}
		var serialSearch = {
			"goodsId" : $scope.itemGoodSelected.goodsId,
			"stateId" : $scope.itemGoodQuantitySelected.stateId,
			"internalStockId" : $scope.model.stockInternalType.code,
			"fromSerial" : $scope.model.ddFromSerial,
			"toSerial" : $scope.model.ddToSerial,
			"quantity" : $scope.model.ddQuantity,
			"isCheckQtyIssue" : $scope.itemGoodSelected.checkQuantity,
			"stockId" : $localStorage.clientContext.sessionStockID,
			"typeSerialSearch" : $scope.model.ddSerialTypeSearch,
		}

		stockImportInferior.getStockSerialByCondition(serialSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstTableSerials = result;
					$scope.fillDataDDTableSerial($scope.lstTableSerials);
				} else {
					var lstNull = [];
					$scope.fillDataDDTableSerial(lstNull);
					bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate
							.instant("vnm.lable.vnm.name"), "");
				}
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerial(lstNull);
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"),
						"");
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
	
	
	$scope.btnSerialList = function (){
		if($scope.itemGoodSelected.lstTransactionSerialDenied == null || $scope.itemGoodSelected.lstTransactionSerialDenied.length == 0) {			
			createTableSerialDeny($scope.itemGoodSelected.lstTransactionSerialDenied, 'tblSerialDeny');
			if ($scope.lstSerialDeny.length > 0){
				$scope.model.showRemoveSerial = false;
			}
		}
		
		var objSearch = {
			"stockId" : stockId,
			"goodId" : $scope.itemGoodSelected.goodsId,
			"stateId" : $scope.itemGoodSelected.stateId,
			"status" : $scope.itemSelectedCmdStock.status,
			"cmdId" : $scope.itemSelectedCmdStock.stockTransId,
			"getFromStockTransId" : $scope.itemSelectedCmdStock.getFromStockTransId,
		};
		if($scope.itemGoodSelected.lstTransactionSerial == null || $scope.itemGoodSelected.lstTransactionSerial.length == 0) {
			$scope.lstSerialAgree = [];
				stockImportInferior.getStockSerialTripImport(objSearch, function(result){
					if(result != null && result != undefined && result.length > 0) {
						angular.forEach(result, function(item) {
							$scope.lstSerialAgree.push(Object.assign({}, item));
						})
//						$scope.lstSerialAgree = result;
						$scope.itemGoodSelected.lstTransactionSerial = result;
						angular.forEach(result, function(item) {
							$scope.lstSerialTmp.push(Object.assign({}, item));
						})
//						$scope.lstSerialTmp = result;
						createTableSerialAgree($scope.lstSerialAgree, 'tblSerialAgree');
						$scope.model.showAddSerial = false;
						
					}else {
						$scope.lstSerialAgree = [];
						createTableSerialAgree($scope.lstSerialAgree, 'tblSerialAgree');
						$scope.model.showAddSerial = true;
					}
					if($scope.itemGoodSelected.lstTransactionSerialDenied == null || $scope.lstSerialDeny.length == 0) {
						$scope.lstSerialDeny = [];
						stockImportInferior.getStockSerialTripImportForRight(objSearch, function(result2){
							if(result2 != null && result2 != undefined && result2.length > 0) {
//								$scope.lstSerialDeny = result2;
								angular.forEach(result2, function(item) {
									$scope.lstSerialDeny.push(Object.assign({}, item));
									$scope.itemGoodSelected.lstTransactionSerialDenied = [];
									$scope.itemGoodSelected.lstTransactionSerialDenied.push(Object.assign({}, item));
								})
								createTableSerialDeny($scope.lstSerialDeny, 'tblSerialDeny');
								$scope.model.showRemoveSerial = false;
							}else {
								$scope.lstSerialDeny = [];
								$scope.model.showRemoveSerial = true;
								createTableSerialDeny($scope.lstSerialDeny, 'tblSerialDeny');
							}
						});
					}
					$scope.showModalFunction("modalSerialList");
					closeOverLay();
				});
			}else {
//				$scope.model.lstSerialTmp = $scope.itemGoodSelected.lstTransactionSerial;
				angular.forEach($scope.itemGoodSelected.lstTransactionSerial, function(item) {
					$scope.lstSerialTmp.push(Object.assign({}, item));
				})
//				$scope.lstSerialAgree = $scope.itemGoodSelected.lstTransactionSerial;
				createTableSerialAgree($scope.lstSerialAgree, 'tblSerialAgree');
				if($scope.lstSerialAgree.length == 0) {
					$scope.model.showAddSerial = true;
				} else {
					$scope.model.showAddSerial = false;
				}
				
				if($scope.lstSerialDeny.length == 0) {
					stockImportInferior.getStockSerialTripImportForRight(objSearch, function(result3){
						if(result3 != null && result3 != undefined && result3.length > 0) {
//							$scope.lstSerialDeny = result3;
							angular.forEach(result3, function(item) {
								$scope.lstSerialDeny.push(Object.assign({}, item));
								$scope.itemGoodSelected.lstTransactionSerialDenied = [];
								$scope.itemGoodSelected.lstTransactionSerialDenied.push(Object.assign({}, item));
							})
							createTableSerialDeny($scope.lstSerialDeny, 'tblSerialDeny');
							$scope.model.showRemoveSerial = false;
						}else {
							$scope.lstSerialDeny = [];
							createTableSerialDeny($scope.lstSerialDeny, 'tblSerialDeny');
							$scope.model.showRemoveSerial = true;
						}					
					});
				}
				$scope.showModalFunction("modalSerialList");
				closeOverLay();
		}
			
	}
	
	
	
	$scope.addSerial = function() {
		$scope.lstSerialSETCTmp = [];
		var table = $('#tblSerialAgree').DataTable();
		for (var i=0; i<$scope.lstSerialAgree.length; i++) {
			var row = table.row(i);
			var className = row.node().className;
			if (className.includes("selected")) {
				$scope.lstSerialSETCTmp.push($scope.lstSerialAgree[i]);
			}
		}
		for(var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
			for(var j = 0; j < $scope.lstSerialDeny.length; j++){
				if($scope.lstSerialDeny[j].fromSerial == $scope.lstSerialSETCTmp[i].fromSerial) {
//					bootbox.alert("Số Serial "+$scope.lstSerialSelected[i].fromSerial+" đã có trong danh sách từ chối");
					bootboxAlertFocus("Số Serial "+$scope.lstSerialSETCTmp[i].fromSerial+" đã có trong danh sách từ chối", "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
			}
		}
		
		if($scope.lstSerialSETCTmp.length == 0) {
			bootboxAlertFocus("Chưa chọn Serial", "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}else {
			for(var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
				$scope.lstSerialDeny.push($scope.lstSerialSETCTmp[i]);
				var index = $scope.lstSerialAgree.indexOf($scope.lstSerialSETCTmp[i]);
				$scope.lstSerialAgree.splice(index, 1); 
			}
			$scope.lstSerialSETCTmp = [];
			createTableSerialAgree($scope.lstSerialAgree, 'tblSerialAgree');
			createTableSerialDeny($scope.lstSerialDeny, 'tblSerialDeny');
			if ($scope.lstSerialAgree.length == 0) {
				$scope.model.showAddSerial = true;
			}else {
				$scope.model.showAddSerial = false;
			}
			$scope.model.showRemoveSerial = false;
		}
		
	}
	
	$scope.addAllSerial = function(){
		for(var i = 0; i < $scope.lstSerialAgree.length; i++) {
			for(var j = 0; j < $scope.lstSerialDeny.length; j++){
				if($scope.lstSerialDeny[j].fromSerial == $scope.lstSerialAgree[i].fromSerial) {
					bootboxAlertFocus("Số Serial "+$scope.lstSerialAgree[i].fromSerial+" đã có trong danh sách từ chối", "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
			}
		}
//		Array.prototype.push.apply($scope.lstSerialDeny, $scope.lstSerialAgree);
		angular.forEach($scope.lstSerialAgree, function(item) {
			$scope.lstSerialDeny.push(Object.assign({}, item));
		})
		$scope.lstSerialSETCTmp = [];
		$scope.lstSerialAgree = [];
		createTableSerialAgree($scope.lstSerialAgree, 'tblSerialAgree');
		createTableSerialDeny($scope.lstSerialDeny, 'tblSerialDeny');
		$scope.model.showAddSerial = true;
		$scope.model.showRemoveSerial = false;
	}
	
	$scope.removeSerial = function() {
		$scope.lstSerialSETCTmp = [];
		var table = $('#tblSerialDeny').DataTable();
		for (var i=0; i<$scope.lstSerialDeny.length; i++) {
			var row = table.row(i);
			var className = row.node().className;
			if (className.includes("selected")) {
				$scope.lstSerialSETCTmp.push($scope.lstSerialDeny[i]);
			}
		}
		if ($scope.lstSerialSETCTmp.length == 0) {
			bootboxAlertFocus("Chưa chọn Serial", "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			for(var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
				for(var j = 0; j < $scope.lstSerialAgree.length; j++){
					if($scope.lstSerialAgree[j].fromSerial == $scope.lstSerialSETCTmp[i].fromSerial) {
//						bootbox.alert("Số Serial "+$scope.lstSerialDeny[i].fromSerial+" đã có trong danh sách chấp nhận");
						bootboxAlertFocus("Số Serial "+$scope.lstSerialAgree[i].fromSerial+" đã có trong danh sách chấp nhận", "", $translate.instant("vnm.lable.vnm.name"), "");
//						$scope.lstSerialDeny.splice(i, 1);
						return;
					}
				}
			}
			if ($scope.lstSerialDeny.length > 0) {
				for(var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
					var index = $scope.lstSerialDeny.indexOf($scope.lstSerialSETCTmp[i]);
					$scope.lstSerialAgree.push($scope.lstSerialSETCTmp[i]);
					$scope.lstSerialDeny.splice(index, 1);
				}
			}
			
			$scope.lstSerialSETCTmp = [];
			createTableSerialAgree($scope.lstSerialAgree, 'tblSerialAgree');
			createTableSerialDeny($scope.lstSerialDeny, 'tblSerialDeny');
			if ($scope.lstSerialDeny.length == 0) {
				$scope.model.showRemoveSerial = true;
			}
			$scope.model.showAddSerial = false;
		}
		
	}
	
	$scope.removeAll = function() {
		for(var i = 0; i < $scope.lstSerialDeny; i++) {
			for(var j = 0; j < $scope.lstSerialAgree.length; j++){
				if($scope.lstSerialAgree[j].fromSerial == $scope.lstSerialDeny[i].fromSerial) {
//					bootbox.alert("Số Serial "+$scope.lstSerialDeny[i].fromSerial+" đã có trong danh sách chấp nhận");
//					$scope.lstSerialDeny.splice(i, 1);
//					return;
					bootboxAlertFocus("Số Serial "+$scope.lstSerialAgree[i].fromSerial+" đã có trong danh sách từ chối", "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
			}
		}
//		Array.prototype.push.apply($scope.lstSerialAgree, $scope.lstSerialDeny);
		angular.forEach($scope.lstSerialDeny, function(item) {
			$scope.lstSerialAgree.push(Object.assign({}, item));
		})
		$scope.lstSerialDeny = [];
		$scope.lstSerialSelected = [];
		createTableSerialAgree($scope.lstSerialAgree, 'tblSerialAgree');
		createTableSerialDeny($scope.lstSerialDeny, 'tblSerialDeny');
		$scope.model.showRemoveSerial = true;
		$scope.model.showAddSerial = false;
	}
	
	$scope.btnAcceptClick = function() {
		if ($scope.itemGoodSelected.lstTransactionSerial == null) {
			$scope.itemGoodSelected.lstTransactionSerial = [];
		}
		/*if($scope.lstSerialAgree.length > 0) {
			angular.forEach($scope.lstSerialAgree, function(item) {
				$scope.itemGoodSelected.lstTransactionSerial.push(Object.assign({}, item));
			})
		}*/
		
		if($scope.itemGoodSelected.lstTransactionSerialDenied == null) {
			$scope.itemGoodSelected.lstTransactionSerialDenied = [];
		}
		angular.forEach($scope.lstSerialDeny, function(item) {
			$scope.itemGoodSelected.lstTransactionSerialDenied.push(Object.assign({}, item));
		})
		$scope.itemGoodSelected.lstTransactionSerial = $scope.lstSerialAgree;
		$scope.itemGoodSelected.lstTransactionSerialDenied = $scope.lstSerialDeny;
		$scope.model.mdnNumberDetail = $scope.lstSerialAgree.length;
		$scope.hideModalFunction("modalSerialList");
	}
	
	$scope.btnBackSerial = function() {
		if ($scope.lstSerialDeny != null && $scope.lstSerialDeny != undefined && !arraysEqual($scope.lstSerialDeny, $scope.itemGoodSelected.lstTransactionSerialDenied)) {
			bootboxConfirm3($translate.instant("vnm.ExportStockToPartner.confirm.add.serial.title"), $translate
					.instant("vnm.ExportStockToPartner.confirm.add.serial.message"), $scope.btnFBackOnclickConfirmOK, $scope.btnFBackOnclickConfirmCancel,
					$scope.btnFBackOnclickConfirmNOK);
		}
		$scope.hideModalFunction("modalSerialList");
	}
	
	$scope.btnFBackOnclickConfirmOK = function() {
		if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.goodsId != '') {
			$scope.itemGoodSelected.lstTransactionSerial = [];
			if($scope.itemGoodSelected.lstTransactionSerialDenied == null) {
				$scope.itemGoodSelected.lstTransactionSerialDenied = [];
			}
			$scope.lstSerialDeny.forEach(function(item) {
				$scope.model.goodsForm.lstTransactionSerial.push(Object.assign({}, item))
				$scope.itemGoodSelected.lstTransactionSerialDenied.push(Object.assign({}, item));
			});
			$scope.model.mdnNumberDetail = $scope.itemGoodSelected.lstTransactionSerialDenied.length;
			$scope.model.goodQuantity = $scope.itemGoodSelected.lstTransactionSerialDenied.length;
			$scope.model.showAddSerial = true;
			$scope.model.showRemoveSerial = true;
		} else {
			$scope.model.goodsForm.lstTransactionSerial = [];
		}
		$scope.lstSerialSETC = [];
		$scope.hideModalFunction("modalSerialList");
	}

	$scope.btnFBackOnclickConfirmNOK = function() {
		$scope.model.fromSerial = '';
		$scope.model.toSerial = '';
		$scope.model.serial = '';
		$scope.model.number = $scope.model.goodQuantity;
		$scope.model.showAddSerial = true;
		$scope.model.showRemoveSerial = true;
		$scope.hideModalFunction("modalSerialList");
	}

	$scope.btnFBackOnclickConfirmCancel = function() {

	}
	
	$scope.btnAcceptModifySerial = function() {
		$scope.itemGoodSelected.quantityIssue = $scope.model.mdnNumberDetail;
		$scope.itemGoodSelected.quantityEffect = $scope.model.mdnNumberDetail;
		angular.forEach($scope.lstSerialDeny, function(item) {
			$scope.itemGoodSelected.lstTransactionSerialDenied.push(Object.assign({}, item));
		})
//		$scope.itemGoodSelected.lstTransactionSerialDenied = $scope.lstSerialDeny;
		$scope.showBtnEditSerial = true;
		$scope.showModifySerial = false;
		createTableGoodsSave($scope.lstGoodsTmp, 'tableGoodsForm');
	}
	
	$scope.btnCancelModifySerial = function() {
		$scope.lstSerialDeny = [];
		$scope.lstSerialAgree = [];
		$scope.model.mdnNumberDetail = $scope.itemGoodSelected.quantityIssue;
		angular.forEach($scope.itemGoodSelected.lstTransactionSerial, function(item) {
			$scope.lstSerialAgree.push(Object.assign({}, item));
		})
		$scope.showBtnEditSerial = true;
		$scope.isDisabledBtnEdit = false;
		$scope.showModifySerial = false;
		$scope.isDisabledDetail = true;
		
	}
	/*$scope.btnCancelModifyGood = function() {
		$scope.lstGoodsTmp = [];
		Array.prototype.push.apply($scope.lstGoodsTmp, $scope.itemSelectedCmdStock.goodsList);
		$scope.itemGoodSelected = $scope.lstGoodsTmp[0];
		$scope.mdnNumberDetail = $scope.itemGoodSelected.lstTransactionSerial.beginQuantity;
		createTableGoodsSave($scope.lstGoodsTmp, 'tableGoodsForm');
	}*/
	
	$scope.btnAproveCommand = function(){
		if (action == 'search') {
			$scope.isDisabledBtnEdit = true;
			$scope.searchStockTrans();
		}
		else if(action == 'edit'){
//			if($scope.itemGoodSelected.quantityIssue == $scope.itemSelectedCmdStock.goodsList[0].quantityIssue) {
//				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.no.change.good"), "", $translate.instant("vnm.lable.vnm.name"), "");
//				$scope.isDisabledBtnEdit = true;
//				return;
//			} else
			if($scope.itemGoodSelected.quantityIssue == $scope.itemSelectedCmdStock.goodsList[0].quantityIssue && $scope.showBtnEditSerial == false) {
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.must.end.input.detail"), "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			} else if ($scope.itemGoodSelected.quantityIssue == $scope.itemSelectedCmdStock.goodsList[0].quantityIssue && $scope.showBtnEditSerial == true) {
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.no.change.good"), "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			} 
			else{
//				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.no.change.good"), "", $translate.instant("vnm.lable.vnm.name"), "");
				bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.ImportFromInferior.message.change.command.mess"), $scope.confirmChangeCommandOK,
						$scope.confirmCommandNOK);
			}
		}
	}
	
	$scope.confirmChangeCommandOK = function(){
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		var objSearch = {
				"stockId" : stockId,
				"goodId" : $scope.itemGoodSelected.goodsId,
				"stateId" : $scope.itemGoodSelected.stateId,
				"status" : $scope.itemSelectedCmdStock.status,
				"cmdId" : $scope.itemSelectedCmdStock.stockTransId,
				"getFromStockTransId" : $scope.itemSelectedCmdStock.getFromStockTransId,
			};
		if($scope.itemGoodSelected.lstTransactionSerialDenied.length == 0 && $scope.itemGoodSelected.lstTransactionSerial.length == 0) {
			stockImportInferior.getStockSerialTripImport(objSearch, function(result){
				if(result != null && result != undefined && result.length > 0) {
					$scope.itemGoodSelected.lstTransactionSerial = result;
				}
				
			});
		}
		var input = {
				"stockId" : stockId,
				"goodsId" : $scope.itemGoodSelected.goodsId,
				"stateId" : $scope.itemGoodSelected.stateId,
				"checkSerial" : $scope.itemGoodSelected.checkSerial,
				"cmdId" : $scope.itemSelectedCmdStock.stockTransId,
				"getFromStockTransId" : $scope.itemSelectedCmdStock.getFromStockTransId,
				"quantityIssue" : $scope.itemGoodSelected.quantityIssue,
				"quantityEffect" : $scope.itemGoodSelected.quantityEffect,
				"lstSerialReceived" : $scope.itemGoodSelected.lstTransactionSerial,
				"lstSerialDenied" : $scope.itemGoodSelected.lstTransactionSerialDenied,
				"staffId" : $localStorage.clientContext.shop.staffId,
		};
		stockImportInferior.spiritStockTransaction(input,function(result){
			if(result != null && result != undefined && result == 1) {
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.modifyGood.success"), "", $translate.instant("vnm.lable.vnm.name"), "success");
				$scope.searchStockTrans();
				$scope.isDisabledBtnEdit = true;
				
			}else{
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.modifyGood.fail"), "", $translate.instant("vnm.lable.vnm.name"), "fail");
			}
			App.unblockUI("#contentMain");
		});
		
		
	}
	
	$scope.btnImportCommandOnclick = function(){
		bootboxConfirm($translate.instant("vnm.ImportFromInferior.message.import.command.title"), $translate.instant("vnm.ImportFromInferior.message.import.command.mess"), $scope.confirmImportCommandOK,
				$scope.confirmCommandNOK);
	}
	
	$scope.confirmImportCommandOK = function(){
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		var input = {
				"stockId" : stockId,
				"goodsId" : $scope.itemGoodSelected.goodsId,
				"stateId" : $scope.itemGoodSelected.stateId,
				"checkSerial" : $scope.itemGoodSelected.checkSerial,
				"cmdId" : $scope.itemSelectedCmdStock.stockTransId,
				"getFromStockTransId" : $scope.itemSelectedCmdStock.getFromStockTransId,
				"quantityIssue" : $scope.itemGoodSelected.quantityIssue,
				"quantityEffect" : $scope.itemGoodSelected.quantityEffect,
				"lstSerialReceived" : $scope.itemGoodSelected.lstTransactionSerial,
				"lstSerialDenied" : $scope.itemGoodSelected.lstTransactionSerialDenied,
				"staffId" : $localStorage.clientContext.shop.staffId,
		};
		stockImportInferior.importStockTransaction(input,function(result){
			if(result != null && result != undefined && result == 1) {
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.import.success"), "", $translate.instant("vnm.lable.vnm.name"), "success");
//				$scope.searchStockTrans();
				action = 'import';
				App.unblockUI("#contentMain");
				$scope.repaintTableStocksTrans();
				$scope.isDisabledBtnAproveCommand = false;
				$scope.isDisabledBtnCommand = true;
				
			}else{
				App.unblockUI("#contentMain");
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.import.fail"), "", $translate.instant("vnm.lable.vnm.name"), "fail");
			}
		});
	}
	
	$scope.btnApproveCommandOnclick = function(){
		$scope.showBtn = false;
		$scope.showApproveConfirm = true;
		
	}
	
	$scope.btnAproveConfirm = function() {
		bootboxConfirm($translate.instant("vnm.ImportFromInferior.message.approve.command.title"), $translate.instant("vnm.ImportFromInferior.message.approve.command.mess"), $scope.confirmApproveCommandOK,
				$scope.confirmCommandNOK);
	}
	$scope.confirmApproveCommandOK = function(){
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		var input = {
				"stockId" : stockId,
				"goodsId" : $scope.itemGoodSelected.goodsId,
				"stateId" : $scope.itemGoodSelected.stateId,
				"checkSerial" : $scope.itemGoodSelected.checkSerial,
				"cmdId" : $scope.itemSelectedCmdStock.stockTransId,
				"getFromStockTransId" : $scope.itemSelectedCmdStock.getFromStockTransId,
				"quantityIssue" : $scope.itemGoodSelected.quantityIssue,
				"quantityEffect" : $scope.itemGoodSelected.quantityEffect,
				"lstSerialReceived" : $scope.itemGoodSelected.lstTransactionSerial,
				"lstSerialDenied" : $scope.itemGoodSelected.lstTransactionSerialDenied,
				"staffId" : $localStorage.clientContext.shop.staffId,
		};
		stockImportInferior.approveStockTransaction(input,function(result){
			if(result != null && result != undefined && result == 1) {
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.approve.success"), "", $translate.instant("vnm.lable.vnm.name"), "success");
				action = 'approve';
				App.unblockUI("#contentMain");
				$scope.repaintTableStocksTrans();
				$scope.showBtn = true;
				$scope.showApproveConfirm = false;
				$scope.isDisabledBtnPrint = false;
				$scope.isDisabledBtnCommand = true;
				$scope.isDisabledBtnAproveCommand = true;
				
			}else{
				App.unblockUI("#contentMain");
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.approve.fail"), "", $translate.instant("vnm.lable.vnm.name"), "fail");
			}
		});
	}
	
	$scope.btnRejectCommandOnclick = function(){
		bootboxConfirm($translate.instant("vnm.ImportFromInferior.message.approve.command.title"), $translate.instant("vnm.ImportFromInferior.message.reject.command.mess"), $scope.confirmRejectCommandOK,
				$scope.confirmCommandNOK);
	}
	
	$scope.confirmRejectCommandOK = function(){
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		var input = {
				"stockId" : stockId,
				"goodsId" : $scope.itemGoodSelected.goodsId,
				"stateId" : $scope.itemGoodSelected.stateId,
				"checkSerial" : $scope.itemGoodSelected.checkSerial,
				"cmdId" : $scope.itemSelectedCmdStock.stockTransId,
				"getFromStockTransId" : $scope.itemSelectedCmdStock.getFromStockTransId,
				"quantityIssue" : $scope.itemGoodSelected.quantityIssue,
				"quantityEffect" : $scope.itemGoodSelected.quantityEffect,
				"lstSerialReceived" : $scope.itemGoodSelected.lstTransactionSerial,
				"lstSerialDenied" : $scope.itemGoodSelected.lstTransactionSerialDenied,
				"staffId" : $localStorage.clientContext.shop.staffId,
		};
		stockImportInferior.rejectStockTransaction(input,function(result){
			if(result != null && result != undefined && result == 1) {
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.reject.success"), "", $translate.instant("vnm.lable.vnm.name"), "success");
				action = 'reject';
				App.unblockUI("#contentMain");
				$scope.repaintTableStocksTrans();
				$scope.showBtn = true;
				$scope.showApproveConfirm = false;
				$scope.isDisabledBtnPrint = true;
				$scope.isDisabledBtnCommand = false;
				$scope.isDisabledBtnAproveCommand = true;
			}else{
				App.unblockUI("#contentMain");
				bootboxAlertFocus($translate.instant("vnm.ImportFromInferior.message.reject.fail"), "", $translate.instant("vnm.lable.vnm.name"), "fail");
				
			}
		});
	}
	
	$scope.confirmCommandNOK = function(){}
	
	$scope.repaintTableStocksTrans = function() {
		 if(action == 'import'){
			 $scope.itemSelectedCmdStock.status = '3';
			 createDataTableStockTrans($scope.lstTableGoodsForm, 'tableTransInfo');
		 } else if(action == 'approve') {
			 $scope.itemSelectedCmdStock.status = '2';
			 createDataTableStockTrans($scope.lstTableGoodsForm, 'tableTransInfo');
		 } else if(action == 'reject') {
			 $scope.itemSelectedCmdStock.status = '1';
			 createDataTableStockTrans($scope.lstTableGoodsForm, 'tableTransInfo');
		 }
	}
	
	
	$scope.btnCancelCommand = function(){
		if (action == 'search') {
			$scope.isDisableBtnSearch = false;
			$scope.showBtn = true;
			$scope.isDisabledBtnCommand = true;
			$scope.showModifyGood = false;
			$scope.isDisableSearchValue = true;
			$scope.showBtnEditSerial = true;
			$scope.isDisabledBtnEdit = true;
			$scope.showModifySerial = false;
			$scope.btnViewStock = true;
		} else if (action == 'edit') {
			$scope.showBtn = true;
			$scope.showModifyGood = false;
			$scope.lstGoodsTmp = [];
			$scope.isDisabledBtnEdit = true;
			$scope.isDisabledDetail = true;
			angular.forEach($scope.itemSelectedCmdStock.goodsList, function(item) {
				$scope.lstGoodsTmp.push(Object.assign({}, item));
			})
			$scope.itemGoodSelected = $scope.lstGoodsTmp[0];
			$scope.model.mdnNumberDetail = $scope.itemGoodSelected.quantityIssue;
			createTableGoodsSave($scope.lstGoodsTmp, 'tableGoodsForm');
			$scope.showBtnEditSerial = true;
			$scope.isDisabledBtnEdit = true;
			$scope.showModifySerial = false;
			$scope.btnViewStock = true;
			createDataTableStockTrans($scope.lstTableGoodsForm, 'tableTransInfo');
		}
	}
	$scope.btnAcceptModifyGood = function(){
		var objGood = {
			"stockId" : stockId,
			"cmdId" : $scope.itemSelectedCmdStock.stockTransId,
			"stateId" : $scope.itemGoodSelected.stateId,
			"status" : $scope.itemSelectedCmdStock.status,
			"cmdId" : $scope.itemSelectedCmdStock.stockTransId,
			"getFromStockTransId" : $scope.itemSelectedCmdStock.getFromStockTransId,
			"lstSerialReceived" : $scope.lstSerialAgree,
			"lstSerialDenied" : $scope.lstSerialDeny,
			"staffId" : $localStorage.clientContext.shop.staffId,
		};
		
	}
	
	$scope.btnEditCommandOnclick = function (){
		$scope.isDisabledBtnEdit = false;
		$scope.showBtn = false;
		$scope.showModifyGood = true;
		$scope.btnViewStock = false;
		action = "edit";
	}
	
	$scope.btnEditOnclick = function(){
		$scope.showBtnEditSerial = false;
		$scope.showModifySerial = true;
		$scope.showBtn = false;
		$scope.isDisabledDetail = false;
		
	}
	
	$scope.btnPrintOnclick = function(){
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		var templateValueSearch = {
			"code" : $scope.stockTransId,
			"name" : $localStorage.clientContext.sessionStockID,
		}
		stockImportInferior.getTemplateValue(templateValueSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					var templateValue = result[0];
					var strDeliverStockName = "";
					if (templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined && templateValue.deliveyShopCode != '') {
						strDeliverStockName = templateValue.deliveyShopCode + " - " + templateValue.deliveyShopName;
					}
					var ReportInput = {
						"stockTransId" : $scope.stockTransId,
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
						"strDeliverUserName" : StringUtilNVL(templateValue.deliverUserName),
						"fileTempName" : 'TemplateExportImport',
						"fileType" : '.xlsx'
					};

					stockImportInferior.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
							$scope.isDisabledBtnPrint = true;
							$scope.isDisabledBtnCommand = false;
						}
					});
				}
			}
		});
	}
	
	$scope.searchStockTrans = function(){
		var searchInput = {
				"txtOrderCode" : $scope.model.txtOrderCode,
				/*
				 * ma don hang
				 */
				"status" : $scope.model.status,
				/* trang thai */
				"lovAgent" : $scope.model.stockExport == undefined ? null : $scope.model.stockExport.stockId,
				/* kho nhap */
				"lovReason" : '2399',
				/* ly do */
				"resourceCode" : $localStorage.clientContext.sessionResourceCode,
				/*
				 * nguon hang
				 */
				"dtFromDate" : $('#fromDate').val(),
				/*
				 * tu ngay
				 */
				"txtReceiptCode" : $scope.model.txtReceiptCode,
				/*
				 * ma phieu suat
				 */
				"txtNote" : $scope.model.txtNote,
				/* ghi chu */
				"shoptype" : $scope.model.shoptype,
				/* loai ch */
				"stockId" : stockId,
			};
			$scope.model.goodsForm="";
			$scope.model.goodsFormName="";
			$scope.model.mdnNumberDetail="";
			$scope.model.goodNote="";
			$scope.lstTableGoodsForm=[];
			$scope.lstGoodsTmp = [];
			createDataTableStockTrans($scope.lstTableGoodsForm, 'tableTransInfo');
			createTableGoodsSave($scope.lstGoodsTmp, 'tableGoodsForm');
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			stockImportInferior.searchOnclick(searchInput, function(result) {
				if (result.length > 0) {
					$scope.lstTableGoodsForm = result;
					App.unblockUI("#contentMain");
					$scope.itemSelectedCmdStock = $scope.lstTableGoodsForm[0];
					if($scope.itemSelectedCmdStock.status == "1") {
						$scope.isDisabledBtnAproveCommand = true;
						$scope.isDisabledBtnCommand = false;
						$scope.isDisabledBtnPrint = true;
					} else if($scope.itemSelectedCmdStock.status == "3") {
						$scope.isDisabledBtnAproveCommand = false;
						$scope.isDisabledBtnCommand = true;
						$scope.isDisabledBtnPrint = true;
					} else if($scope.itemSelectedCmdStock.status == "2") {
						$scope.isDisabledBtnCommand = true;
						$scope.isDisabledBtnAproveCommand = true;
						$scope.isDisabledBtnPrint = false;
					}					
					
					angular.forEach($scope.itemSelectedCmdStock.goodsList, function(item) {
						$scope.lstGoodsTmp.push(Object.assign({}, item));
					})
//					Array.prototype.push.apply($scope.lstGoodsTmp, $scope.itemSelectedCmdStock.goodsList);
					$scope.itemGoodSelected = $scope.lstGoodsTmp[0];
					/*var obj = $scope.getInventory($scope.itemGoodSelected);
					$scope.model.stockExport = obj;
					$scope.model.stockExportName = obj.name;*/
					$scope.stockTransId = $scope.itemSelectedCmdStock.stockTransId;
					$scope.model.goodsForm = $scope.itemGoodSelected;
					$scope.model.goodsFormName = $scope.itemGoodSelected.name;
					$scope.model.mdnNumberDetail = $scope.itemGoodSelected.quantityIssue
					$scope.model.goodNote = $scope.itemGoodSelected.notes;
					createDataTableStockTrans($scope.lstTableGoodsForm, 'tableTransInfo');
					createTableGoodsSave($scope.lstGoodsTmp, 'tableGoodsForm');
					$scope.lstSerialAgree = [];
					$scope.lstSerialDeny = [];
					$scope.showBtn = true;
					$scope.showModifySerial = false;
					$scope.showModifyGood = false;
					$scope.showBtnEditSerial = true;
					$scope.isDisableSearchValue = true;
					$scope.isDisableBtnSearch = false;
					$scope.isDisabledDetail = true;

				} else {
					App.unblockUI("#contentMain");
					bootboxAlertFocus("Không tìm thấy dữ liệu!", "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			});
	}
	$scope.btnSearchOnclick = function() {
		$scope.isDisableSearchValue = false;
		$scope.showBtn = false;
		$scope.showModifyGood = true;
		$scope.isDisableBtnSearch = true;
		$scope.isDisabledBtnEdit = true;
		action = "search";
	}
	
	
	function createDataTableStockTrans(dataItem) {
		oTableItem = $('#tableTransInfo').DataTable(
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
					"bSort" : false,
					"info" : true,
					"select" : {
						style : 'os',
						info : false
					},
					"autoWidth" : true,
					"paginationType" : "full_numbers",
					"columns" : [
							{
								"mData" : "delivererStockId",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.getLovAgentName(x) + "'>"
											+ $scope.getLovAgentName(x) + "</div>";
								}
							},
							{
								"mData" : "orderCode",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
								}
							},
							{
								"mData" : "actionCode",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
								}
							},
							{
								"mData" : "actionDate",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
								}
							},
							{
								"mData" : "reasonId",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.reason.name + "'>" + $scope.reason.name
											+ "</div>";
								}
							},
							{
								"mData" : "status",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.getStatusName(x) + "'>"
											+ $scope.getStatusName(x) + "</div>";
								}
							}, {
								"mData" : "note",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
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
					},
					"createdRow" : function(row, data, rowIndex) {
						if ($scope.itemSelectedCmdStock != ROW_NOT_SELECTED) {
							if ($scope.itemSelectedCmdStock.actionCode == data.actionCode && $scope.itemSelectedCmdStock.orderCode == data.orderCode) {
								$(row).addClass('selected');
							}
						} else {
							if (rowIndex == 0 || rowIndex == '0') {
								$(row).addClass('selected');
							}
						}
					}
				});
		$('#tableTransInfo tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItem.row(this).data();
			if($scope.isDisabledBtnEdit) {
				$scope.itemSelectedCmdStock = rowData;
				indexStockTrans = oTableItem.row(this).index();
				oTableItem.$('tr.selected').removeClass('selected');
				objAgent = $scope.getLovAgent($scope.itemSelectedCmdStock.delivererStockId);
				$scope.model.stockExport = objAgent;
				$scope.model.stockExportName = objAgent.name;
				$(this).addClass('selected');
				$scope.lstGoodsTmp = [];
				angular.forEach($scope.itemSelectedCmdStock.goodsList, function(item) {
					$scope.lstGoodsTmp.push(Object.assign({}, item));
				})
				$scope.stockTransId = $scope.itemSelectedCmdStock.stockTransId;
				$scope.itemGoodSelected = $scope.lstGoodsTmp[0];
				$scope.model.goodsForm = $scope.itemGoodSelected;
				$scope.model.goodsFormName = $scope.itemGoodSelected.name;
				$scope.model.mdnNumberDetail = $scope.itemGoodSelected.quantityIssue;
				$scope.model.goodNote = $scope.itemGoodSelected.notes;
				if($scope.itemSelectedCmdStock.status == "1") {
					$scope.isDisabledBtnAproveCommand = true;
					$scope.isDisabledBtnCommand = false;
					$scope.isDisabledBtnPrint = true;
				} else if($scope.itemSelectedCmdStock.status == "3") {
					$scope.isDisabledBtnAproveCommand = false;
					$scope.isDisabledBtnCommand = true;
					$scope.isDisabledBtnPrint = true;
				} else if($scope.itemSelectedCmdStock.status == "2") {
					$scope.isDisabledBtnCommand = true;
					$scope.isDisabledBtnAproveCommand = true;
					$scope.isDisabledBtnPrint = false;
				}
				createTableGoodsSave($scope.lstGoodsTmp, 'tableGoodsForm');
			}
			
		});
	}


	// create table mat hang tren form
	function createTableGoodsSave(dataItem) {
		oTableItemXY = $('#tableGoodsForm').DataTable({
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
			"bSort" : false,
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"columns" : [ {
				"mData" : "goodsCode",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "stateName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "unitName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantityIssue",
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
				}
			}
		});
	}

	$('#tableGoodsForm tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
		$(this).removeClass('selected');
		var rowData = oTableItemXY.row(this).data();
		indexGood = oTableItemXY.row(this).index();
		oTableItemXY.$('tr.selected').removeClass('selected');
		$(this).addClass('selected');
		$scope.itemGoodSelected = rowData;
		$scope.setGoodDetail($scope.itemGoodSelected);
		if ($scope.disableAdd) {
			$scope.onSelectGoodsForAdd();
		}
	});
	
	$scope.setGoodDetail = function(data) {
		$scope.model.goodsForm = data;
		$scope.model.goodsFormName = data.name;
		$scope.model.mdnNumberDetail = data.quantityIssue;
		$scope.model.goodNote = data.notes;
	}
	var serialX0;
	var firstChoose = false;
	function createTableSerialAgree(dataItem) {
		oTableSerialAgree = $('#tblSerialAgree').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : false,
		    "info":true,
		    "select": {
		    	style: 'multiple',
		        info: false
		    },
		    "scrollX": true,
		    "autoWidth": true,
		    "paginationType" : "full_numbers",
			"columns" : [  
	              {"mData":"toSerial", "render": function(data, type, row){
	            	  x = data == null ? '' : data;
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ x + "'>" + x + "</div>";
	 	          }},
	              {"mData":"warrantyNo", "render": function(data, type, row){
	            	  x = data == null ? '' : data;
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ x + "'>" + x + "</div>";
	 	          }},
	            ],
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sLengthMenu": "_MENU_",
					"sSearch": LABEL_SEARCH,
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    }
	            },
	            "createdRow" : function(row, data, rowIndex) {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
						serialX0 = $(row);
						firstChoose = true;
					}
				}
		});
		$('#tblSerialAgree tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {
			/*var rowData = oTableSerialAgree.rows(this).data();
			$(this).addClass('selected');
			for (var i = 0; i < rowData.length; i++) {
				$scope.lstSerialSelected.push(rowData[i]);
			}*/
			if (e.ctrlKey) {
				if (firstChoose) {
					serialX0.addClass("selected");
				}
			} else {
				oTableSerialAgree.$('tr.selected').removeClass('selected');
			}
			$(this).addClass('selected');
			firstChoose = false;
		});
		/*oTableSerialAgree.on( "select", function( e, dt, type, indexes ) {
			$scope.lstSerialSelected = [];
	        var rowData = oTableSerialAgree.rows( indexes ).data().toArray();
	        for(var i = 0; i < rowData.length; i++) {
	        	$scope.lstSerialSelected.push(rowData[i]);
	        }
	    });*/
	}
	var serialX1;
	var firstChoose1 = false;
	function createTableSerialDeny(dataItem) {
		oTableSerialDeny = $('#tblSerialDeny').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : false,
		    "info":true,
		    "select": {
		    	style: 'multiple',
		        info: false
		    },
		    "scrollX": true,
		    "autoWidth": true,
		    "paginationType" : "full_numbers",
			"columns" : [  
	              {"mData":"toSerial", "render": function(data, type, row){
	            	  x = data == null ? '' : data;
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ x + "'>" + x + "</div>";
	 	          }},
	              {"mData":"warrantyNo", "render": function(data, type, row){
	            	  x = data == null ? '' : data;
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ x + "'>" + x + "</div>";
	 	          }},
	            ],
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sLengthMenu": "_MENU_",
					"sSearch": LABEL_SEARCH,
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    }
	            },
				"createdRow" : function(row, data, rowIndex) {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
						serialX1 = $(row);
						firstChoose1 = true;
					}
				}
		});
		
		/*oTableSerialDeny.on( "select", function( e, dt, type, indexes ) {
			$scope.lstSerialSelected = [];
	        var rowData = oTableSerialDeny.rows( indexes ).data().toArray();
	        for(var i = 0; i < rowData.length; i++) {
	        	$scope.lstSerialSelected.push(rowData[i]);
	        }
	    });*/
		$('#tblSerialDeny tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {
			var rowData = oTableSerialDeny.rows(this).data();
//			$(this).addClass('selected');
//			for (var i = 0; i < rowData.length; i++) {
//				$scope.lstSerialSelected.push(rowData[i]);
//			}
			if (e.ctrlKey) {
				if (firstChoose1) {
					serialX1.addClass("selected");
				}
			} else {
				oTableSerialDeny.$('tr.selected').removeClass('selected');
			}
			$(this).addClass('selected');
			firstChoose1 = false;
		});
	}

	function arraysEqual(a1,a2) {
	    return JSON.stringify(a1)==JSON.stringify(a2);
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