var ACTION_EXPORT_COMMAND = "5";
app_vnm.factory('exportToInferior', function($http, $translate) {
	return {
		getReceiptCode : function(callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getReceiptCode";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
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
		onOkAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/pnlTransactionGoodsDetail/onAction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + data), "goodsQuantity", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		valid : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/validFormExportToInferior";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + data), "goodsQuantity", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onGoodTransIssueAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/pnlTransactionGoodsDetail/onAction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + data), "goodsQuantity", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getChildsStockList : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getChildsStock";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
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
		getExistedStates : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedStates";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
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
		getStatusList : function(callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getStatusList";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReasonList : function(callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getReasonXCD";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getVctResourceList : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getVctResourceList";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getInternalStockList : function(callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getInternalStockList";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
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
		getGoodsQuantityByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsQuantityByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
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
		searchOnclick : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/onSearch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		createExportCommandOnClick : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/createExportCommandOnClick";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		deleteExportCommandOnClick : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/deleteExportCommandOnClick";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		exportCommandOnClick : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/exportCommandOnClick";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		exportCommandWarrantyOnClick : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/exportCommandWarrantyOnClick";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		approveCommandOnClick : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/approveCommandOnClick";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		rejectCommandOnClick : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/rejectCommandOnClick";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		isWarrantyGoods : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/isWarrantyGoodsFormExportToInferior";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + data), "isWarrantyGoods", $translate.instant("vnm.lable.vnm.name"), "");
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

		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getTemplateValue";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getTemplateWarrantyValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getTeamplateWarantyValue";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
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
		validTransActionCode : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/validTransActionCode";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + data), "fReceiptCode", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getSerialListInStock : function(data, callback) {
			var url = eim_url + "/epos/inventory/checkListSerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getSearchSerialList : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getSearchSerialList";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getSingelSerialInStock : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStockSerialInStock";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
});

app_vnm.controller('ctrl-exportToInferior', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams, $localStorage,
		exportToInferior) {

	$scope.model = {};
	var ROW_NOT_SELECTED = -1;
	$scope.typeActionCreate = '';
	var vtWarrantyShopType = '0';
	$scope.limitLstGoodsSearch = 20;

	var momentObj = moment(new Date());
	var momentString = momentObj.format('DD/MM/YYYY');

	$scope.listgetShopTypeFormInferior = [];
	$scope.listgetStatusFormInferior = [];
	$scope.listgetReasonFormInferior = [];
	$scope.listgetChildsStockFormInferior = [];
	$scope.listgetInternalStockFormInferior = [];
	$scope.lstGoodsResourceFormInferior = [];
	$scope.lstStatesFormInferior = [];

	$scope.lstGoodsForm = [];
	$scope.lstStatesForm = [];
	$scope.lstGoodsResourceForm = [];
	$scope.receiptCode = [];
	$scope.checkDisablebtnAccept = false;

	$scope.checkIsExportWarranty = false;

	$scope.checkDisabled = true;
	$scope.checkDisabbledTable = false;
	$scope.isHide = true;
	$scope.checkHideComboBtn = false;
	$scope.checkHideBtnOnDetail = true;
	$scope.isCheckCreate = true;
	$scope.checkDisabledStockView = true;
	$scope.checkDisabledCreateCommand = true;
	$scope.checkDisabledAfterCreate = true;
	$scope.checkDisableBtnSearch = false;
	$scope.checkDisableGetSerial = true;
	$scope.btnSerialOnClick = true;

	// form stockView
	$scope.lstGoodForTransaction = [];
	$scope.goodForTransactionSelected = {};
	$scope.isDisabledBtnDelete = true;
	$scope.isDisabledBtnEdit = true;
	$scope.checkDisabledAfterCreateAndEdit = true;
	$scope.checkDisabledAfterCreateBtn = true;

	// combo button
	$scope.btnExportOnclick = true;
	$scope.btnPrintOnClick = true;
	$scope.btnApproCommandOnClick = true;
	$scope.btnDeleteCommaneOnClick = true;
	$scope.isCheckExportCommand = true;

	// lstAction
	$scope.listAfterCreateCommand = [];

	$scope.listAfterOnSearch = [];
	$scope.objAfterOnSearchSelected = {};
	$scope.listAfterOnSearchGoodList = [];
	$scope.objAfterOnSearchGoodList = {};

	$scope.isCheckApproAndReject = true;
	$scope.isCheckPrintComboButton = true;
	// combo print
	$scope.isDisablePrintWarranty = true;
	$scope.isDisablePrintCommand = true;
	$scope.isDisablePrintNormal = true;

	$scope.loadLstGoodsForm = function() {

		var resourceCodeForm = {
			"code" : $scope.model.resourceCodeFormDetail,
			"name" : "",
		}
		exportToInferior.getExistedGoods(resourceCodeForm, function(result) {
			if (result != null && result != undefined && result.status != '0' && result.length > 0) {
				$scope.lstGoodsForm = result;

			}
		});
	}
	$scope.lstAllGoods = [];
	$scope.loadAllGoods = function() {
		overLoading("loading...");
		var resourceCodeForm = {
			"code" : "",
			"name" : "",
		}
		exportToInferior.getExistedGoods(resourceCodeForm, function(result) {
			if (result != null && result != undefined && result.status != '0' && result.length > 0) {
				$scope.lstAllGoods = result;
				closeOverLay();
			}
		});
	}

	// load lai danh sach hang khi chon nguon hang
	$scope.onChooseResourceCodeForm = function() {
		$scope.loadLstGoodsForm();
	}

	$scope.loadDefault = function() {
		exportToInferior.getExistedStates(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstStatesFormInferior = result;
					$scope.model.statesForm = $scope.lstStatesFormInferior[0].stateId;
				}

				exportToInferior.getReasonList(function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
						} else if (result.length > 0) {
							$scope.listgetReasonFormInferior = result;
							$scope.model.lovReason = $scope.listgetReasonFormInferior[0].reasonId;
						}
						exportToInferior.getInternalStockList(function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									$scope.listgetInternalStockFormInferior = result;
									$scope.model.internalStock = $scope.listgetInternalStockFormInferior[0].code;
								}

								var sessionValue = {
									"sessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
									"sessionShopType" : $localStorage.clientContext.shop.shopType,
									"isForm" : "1",
								};

								exportToInferior.getVctResourceList(sessionValue, function(result) {
									if (result != null && result != undefined) {
										if (result.status == '0') {
											bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										} else if (result.length > 0) {
											$scope.lstGoodsResourceFormInferior = result;
											$scope.model.resourceCodeFormSearch = $scope.lstGoodsResourceFormInferior[0].code;
											$scope.model.resourceCodeFormDetail = $scope.lstGoodsResourceFormInferior[0].code;
											$scope.loadLstGoodsForm();
										}
										var stockId = $localStorage.clientContext.sessionStockID;
										if (stockId == null) {
											App.unblockUI("#contentMain");
											closeOverLay();
											return;
										}
										exportToInferior.getChildsStockList(stockId, function(result) {
											if (result != null && result != undefined) {
												if (result.status == '0') {
													bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
												} else if (result.length > 0) {
													$scope.listgetChildsStockFormInferior = result;
												}

												$scope.model.searchFromDate = getCurrentDate();
												exportToInferior.getStatusList(function(result) {
													if (result != null && result != undefined) {
														if (result.status == '0') {
															bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
														} else if (result.length > 0) {
															$scope.listgetStatusFormInferior = result;
														}

														exportToInferior.getShopTypeList(function(result) {
															if (result != null && result != undefined) {
																if (result.status == '0') {
																	bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
																} else if (result.length > 0) {
																	$scope.listgetShopTypeFormInferior = result;
																	App.unblockUI("#contentMain");
																	$scope.loadAllGoods();
																	closeOverLay();
																}
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
	}

	initialize();

	$scope.getReceiptCode = function() {
		exportToInferior.getReceiptCode(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.model.txtReceiptCode = result[0];
				}
			}
		});
	}

	$scope.showModalStockView = function() {
		$('#tableItem').DataTable({
			destroy : true,
		});

		$('#tableQuantity').DataTable({
			destroy : true,
		});

		$scope.showModalFunction("modalStockView");
	}

	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
	}

	$scope.btnAdjustOnclick = function(item) {
		$scope.selectedShipment = item;

	}

	function initForm() {
		$('#tableTransInfo').DataTable({

		});

		$('#idTableListItem').DataTable({
			"columns" : [ {
				"width" : "20%"
			}, {
				"width" : "20%"
			}, {
				"width" : "20%"
			}, {
				"width" : "20%"
			}, {
				"width" : "30%"
			}, ],
			"scrollY" : 130,
			"scrollX" : true
		});
	}

	initForm();

	$scope.btnSearchOnclick = function() {
		$scope.checkDisableBtnSearch = true;
		$scope.checkDisabledStockView = true;
		$scope.isCheckCreate = true;
		$scope.checkDisabled = false;
		$scope.checkDisabledCreateCommand = false;
		$scope.isHide = false;
		$('#formGroupButton').css('display', 'none');
		$scope.clearDataFormSearch();
		var list = [];
		createTableGoodsSave(list);
		// demoDisabletable
		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			$('selector').click(function() {
				return false;
			});
		});
	}
	$scope.clearDataFormSearch = function() {
		$scope.model.lovAgent = {};
		$scope.model.txtOrderCode = "";
		$scope.model.status = "";
		$scope.model.fShopCode = '';
		$scope.model.fShopName = '';
		$scope.model.shopId = '';
		$scope.model.searchFromDate = getCurrentDate();
		$scope.model.txtReceiptCode = "";
		$scope.model.txtNote = "";
		$scope.model.shopType = "";
		$scope.model.resourceCodeFormSearch = $scope.lstGoodsResourceFormInferior[0].code;
	}
	$scope.clearDataFormStockView = function() {
		$scope.model.resourceCodeFormDetail = $scope.lstGoodsResourceFormInferior[0].code;
		$scope.model.internalStock = $scope.listgetInternalStockFormInferior[0].code;
		$scope.model.goodsForm = "";
		$scope.model.beginQuantity = "";
		$scope.model.statesForm = $scope.lstStatesFormInferior[0].stateId;
		$scope.model.noteStockView = "";

		$scope.onChooseResourceCodeForm();
	}
	$scope.btnExitOnclick = function() {
		console.log("aa");
		$scope.checkDisabled = true;
		$('#formGroupButton').css('display', 'block');
		$scope.isHide = true;
		$scope.checkDisableBtnSearch = false;
		$scope.checkDisabledCreateCommand = true;

		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {

			$scope.btnExportOnclick = true;
			$scope.btnPrintOnClick = true;

			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
			$scope.fillDataForSearchItems($scope.itemSelected);
			var list = [];
			for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
				list.push($scope.itemSelected.goodsList[i]);
			}
			checkDisableComboButton(rowData);
			// checkOpenButtonPrint(rowData);
			createTableGoodsSave(list);
		});
	}

	$scope.btnOkOnClick = function() {
		$scope.checkDisabled = true;
		$scope.checkDisabledCreateCommand = true;
		$scope.checkDisableBtnSearch = false;
		$('#formGroupButton').css('display', 'block');
		$scope.isHide = true;
		if ($scope.frm_exportToInferior.validate()) {
			if ($scope.checkDate()) {
				var searchInput = {
					"txtOrderCode" : $scope.model.txtOrderCode,
					/* ma don hang */
					"status" : $scope.model.status,
					/* trang thai */
					"lovAgent" : $scope.model.lovAgent.stockId,
					/* kho nhap */
					"lovReason" : $scope.model.lovReason,
					/* ly do */
					"resourceCode" : $scope.model.resourceCodeFormSearch,
					/* nguon hang */
					"dtFromDate" : $("#fromDate").val(),
					/* tu ngay */
					"txtReceiptCode" : $scope.model.txtReceiptCode,
					/* ma phieu suat */
					"txtNote" : $scope.model.txtNote,
					/* ghi chu */
					"shopType" : $scope.model.shopType,
					/* loai ch */
					"stockId" : $localStorage.clientContext.sessionStockID,
				};
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});
				exportToInferior.searchOnclick(searchInput, function(result) {
					if (result.length > 0) {
						$scope.listAfterOnSearch = result;
						createDataTableGoodsResult(result);
						$scope.itemSelected = result[0];
						$scope.fillDataForSearchItems($scope.itemSelected);
						var list = [];
						for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
							list.push($scope.itemSelected.goodsList[i]);
							$scope.lstGoodForTransaction.push($scope.itemSelected.goodsList[i]);
						}
						checkDisableComboButton($scope.itemSelected);
						// checkOpenButtonPrint($scope.itemSelected);
						$scope.fillDataDialogStock(list[0]);
						createTableGoodsSave(list);
						// $scope.listAfterCreateCommand = result;

						$scope.btnSerialOnClick = false;
						if ($scope.itemSelected.status == 2 || $scope.itemSelected.status == 3 || $scope.itemSelected.status == 4) {
							$scope.btnSerialOnClick = false;
						} else {
							$scope.btnSerialOnClick = true;
						}
						App.unblockUI("#contentMain");
					} else {
						App.unblockUI("#contentMain");
						bootboxAlertFocus("Không tìm thấy dữ liệu!", "", $translate.instant("vnm.lable.vnm.name"), "");
					}
				});
			} else {
				bootboxAlertFocus("Bạn phải nhập đủ muốn tìm kiếm!", "", $translate.instant("vnm.lable.vnm.name"), "");
			}

		}
	}

	$scope.checkDate = function() {
		var tmp = true;
		if (!angular.isDefined($scope.model.searchFromDate)) {
			if (!angular.isDefined($scope.model.sshptype)) {
				tmp = false;
			}

		}
		return tmp;
	}

	function createDataTableGoodsResult(dataItem) {
		oTableItemXXX = $('#resultSubTableItems').DataTable({
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
			"order" : [],
			"scrollX" : true,
			"columns" : [ {
				"mData" : "delivererStockId",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.getLovAgentName(data) + "'>" + $scope.getLovAgentName(data) + "</div>";
				}
			}, {
				"mData" : "",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "actionCode",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "actionDate",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "reasonId",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.getLovReasonName(data) + "'>" + $scope.getLovReasonName(data) + "</div>";
				}
			}, {
				"mData" : "status",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.getStatusName(data) + "'>" + $scope.getStatusName(data) + "</div>";
				}
			}, {
				"mData" : "note",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
				}
			} ],
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#resultSubTableItems').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				$('.dataTables_scrollBody thead tr').css({
					visibility : 'collapse'
				});
				var dataRowSelected = table.row(0).data();
				$scope.resultSubTableItems = dataRowSelected;
				if ($scope.resultSubTableItems != null || $scope.resultSubTableItems != undefined) {
					createTableGoodsSave(dataRowSelected.goodsList);
				}

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

		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
			$scope.fillDataForSearchItems($scope.itemSelected);
			var list = [];
			$scope.lstGoodForTransaction = [];
			for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
				list.push($scope.itemSelected.goodsList[i]);
				$scope.lstGoodForTransaction.push($scope.itemSelected.goodsList[i]);
				$scope.itemSelected.goodsList[0].lstTransSerial = $scope.itemSelected.lstTransSerial;

			}
			$scope.itemGoodDMHSelected = list[0];
			checkDisableComboButton(rowData);
			// checkOpenButtonPrint(rowData);
			createTableGoodsSave(list);
			$scope.fillDataDialogStock(list[0]);
			if ($scope.itemSelected.status == 2 || $scope.itemSelected.status == 3 || $scope.itemSelected.status == 4) {
				$scope.btnSerialOnClick = false;
			} else {
				$scope.btnSerialOnClick = true;
			}
		});
	}

	function createTableGoodsSave(dataItem) {
		oTableItemXYZ = $('#idTableListItemSelected').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"order" : [],
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"info" : true,
			"scrollX" : true,
			"columns" : [ {
				"mData" : "goodsCode",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "stateId",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + $scope.getStateName(data) + "'>" + $scope.getStateName(data) + "</div>";
				}
			}, {
				"mData" : "unitName",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "beginQuantity",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
				}
			}, ],
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#idTableListItemSelected').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				$('.dataTables_scrollBody thead tr').css({
					visibility : 'collapse'
				});
				var dataRowSelected = table.row(0).data();
				$scope.itemsTransSelectedx = dataRowSelected;
				$scope.itemGoodDMHSelected = dataRowSelected;
				if ($scope.itemsTransSelectedx != null || $scope.itemsTransSelectedx != undefined) {
					$scope.fillDataDialogStock(dataRowSelected);
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
					"sPrevious" : PREV_PAGE,
				}
			}
		});
		$('#idTableListItemSelected tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXYZ.row(this).data();
			oTableItemXYZ.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemGoodDMHSelected = rowData;
			if ($scope.itemSelected == null || $scope.itemSelected == undefined || $scope.itemSelected == '') {
				$scope.itemSelected = $scope.itemGoodDMHSelected;
			}
			// $scope.itemGoodDMHSelected.lstTransSerial = $scope.itemSelected.lstTransactionSerial;
			// $scope.lstGoodForTransaction.push($scope.itemGoodSelected);
			$scope.model.noteStockView = $scope.itemGoodDMHSelected.notes;
			$scope.fillDataDialogStock($scope.itemGoodDMHSelected);

		});
	}

	$scope.fillDataDialogStock = function(data) {
		$scope.model.goodsForm = data;
		$scope.model.beginQuantity = data.beginQuantity;
		$scope.model.statesForm = data.stateId;
	}

	$scope.fillDataForSearchItems = function(data) {
		//
		$scope.model.fShopCode = $scope.getLovAgentCode(data.delivererStockId);
		$scope.model.fShopName = $scope.getLovAgentName(data.delivererStockId);
		$scope.model.shopId = $scope.getLovAgentId(data.delivererStockId);

		// ?$scope.model.lovAgent = $scope.getLovAgent(data.delivererStockId);
		$scope.model.txtReceiptCode = data.actionCode;
		$scope.model.status = $scope.getStatusCode(data.status);
		$scope.model.shopType = $scope.getShopTypeName(data.type);
		$scope.model.searchFromDate = data.actionDate;
		$scope.model.txtNote = data.note;
	}

	$scope.getLovAgentName = function(lovAgentId) {
		var name = '';
		if ($scope.listgetChildsStockFormInferior != null && $scope.listgetChildsStockFormInferior != undefined && $scope.listgetChildsStockFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetChildsStockFormInferior.length; i++) {
				if (lovAgentId == $scope.listgetChildsStockFormInferior[i].stockId) {
					name = $scope.listgetChildsStockFormInferior[i].name;
					break;
				}
			}
		}
		return name.trim();
	}
	$scope.getLovAgentId = function(lovAgentId) {
		var id = '';
		if ($scope.listgetChildsStockFormInferior != null && $scope.listgetChildsStockFormInferior != undefined && $scope.listgetChildsStockFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetChildsStockFormInferior.length; i++) {
				if (lovAgentId == $scope.listgetChildsStockFormInferior[i].stockId) {
					id = $scope.listgetChildsStockFormInferior[i].stockId;
					break;
				}
			}
		}
		return id;
	}
	$scope.getLovAgentCode = function(lovAgentId) {
		var code = '';
		if ($scope.listgetChildsStockFormInferior != null && $scope.listgetChildsStockFormInferior != undefined && $scope.listgetChildsStockFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetChildsStockFormInferior.length; i++) {
				if (lovAgentId == $scope.listgetChildsStockFormInferior[i].stockId) {
					code = $scope.listgetChildsStockFormInferior[i].code;
					break;
				}
			}
		}
		return code.trim();
	}
	$scope.getLovAgent = function(lovAgentId) {
		var obj = {};
		if ($scope.listgetChildsStockFormInferior != null && $scope.listgetChildsStockFormInferior != undefined && $scope.listgetChildsStockFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetChildsStockFormInferior.length; i++) {
				if (lovAgentId == $scope.listgetChildsStockFormInferior[i].stockId) {
					obj = $scope.listgetChildsStockFormInferior[i];
					break;
				}
			}
		}
		return obj;
	}
	$scope.getLovReasonName = function(lovReasonId) {
		var name = '';
		if ($scope.listgetReasonFormInferior != null && $scope.listgetReasonFormInferior != undefined && $scope.listgetReasonFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetReasonFormInferior.length; i++) {
				if (lovReasonId == $scope.listgetReasonFormInferior[i].reasonId) {
					name = $scope.listgetReasonFormInferior[i].name;
					break;
				}
			}
		}
		return name;
	}
	$scope.getLovReasonCode = function(lovReasonId) {
		var code = '';
		if ($scope.listgetReasonFormInferior != null && $scope.listgetReasonFormInferior != undefined && $scope.listgetReasonFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetReasonFormInferior.length; i++) {
				if (lovReasonId == $scope.listgetReasonFormInferior[i].reasonId) {
					code = $scope.listgetReasonFormInferior[i].code;
					break;
				}
			}
		}
		return code;
	}
	$scope.getStatusName = function(statusCode) {
		var name = '';
		if ($scope.listgetStatusFormInferior != null && $scope.listgetStatusFormInferior != undefined && $scope.listgetStatusFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetStatusFormInferior.length; i++) {
				if (statusCode == $scope.listgetStatusFormInferior[i].code) {
					name = $scope.listgetStatusFormInferior[i].name;
					break;
				}
			}
		}
		return name;
	}
	$scope.getStatusCode = function(statusCode) {
		var code = '';
		if ($scope.listgetStatusFormInferior != null && $scope.listgetStatusFormInferior != undefined && $scope.listgetStatusFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetStatusFormInferior.length; i++) {
				if (statusCode == $scope.listgetStatusFormInferior[i].code) {
					code = $scope.listgetStatusFormInferior[i].code;
					break;
				}
			}
		}
		return code;
	}
	$scope.getShopTypeName = function(type) {
		var code = '';
		if ($scope.listgetShopTypeFormInferior != null && $scope.listgetShopTypeFormInferior != undefined && $scope.listgetShopTypeFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetShopTypeFormInferior.length; i++) {
				if (type == $scope.listgetShopTypeFormInferior[i].code) {
					code = $scope.listgetShopTypeFormInferior[i].code;
					break;
				}
			}
		}
		return code;
	}
	$scope.getStateName = function(stateId) {
		var name = '';
		if ($scope.lstStatesFormInferior != null && $scope.lstStatesFormInferior != undefined && $scope.lstStatesFormInferior.length > 0) {
			for (var i = 0; i < $scope.lstStatesFormInferior.length; i++) {
				if (stateId == $scope.lstStatesFormInferior[i].stateId) {
					name = $scope.lstStatesFormInferior[i].name;
					break;
				}
			}
		}
		return name;
	}
	$scope.getStateObj = function(stateId) {
		var stateObj = {};
		if ($scope.lstStatesFormInferior != null && $scope.lstStatesFormInferior != undefined && $scope.lstStatesFormInferior.length > 0) {
			for (var i = 0; i < $scope.lstStatesFormInferior.length; i++) {
				if (stateId == $scope.lstStatesFormInferior[i].stateId) {
					stateObj = $scope.lstStatesFormInferior[i];
					break;
				}
			}
		}
		return stateObj;
	}
	$scope.getResourceObj = function(resourceCode) {
		var resourceCodeForm = {};
		if ($scope.lstGoodsResourceFormInferior != null && $scope.lstGoodsResourceFormInferior != undefined && $scope.lstGoodsResourceFormInferior.length > 0) {
			for (var i = 0; i < $scope.lstGoodsResourceFormInferior.length; i++) {
				if (resourceCode == $scope.lstGoodsResourceFormInferior[i].code) {
					resourceCodeForm = $scope.lstGoodsResourceFormInferior[i];
					break;
				}
			}
		}
		return resourceCodeForm;
	}
	$scope.getinternalStockObj = function(internalStockCode) {
		var internalStockObj = {};
		if ($scope.listgetInternalStockFormInferior != null && $scope.listgetInternalStockFormInferior != undefined && $scope.listgetInternalStockFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetInternalStockFormInferior.length; i++) {
				if (internalStockCode == $scope.listgetInternalStockFormInferior[i].code) {
					internalStockObj = $scope.listgetInternalStockFormInferior[i];
					break;
				}
			}
		}
		return internalStockObj;
	}
	$scope.getLovAgentType = function(lovAgentId) {
		var type = '';
		if ($scope.listgetChildsStockFormInferior != null && $scope.listgetChildsStockFormInferior != undefined && $scope.listgetChildsStockFormInferior.length > 0) {
			for (var i = 0; i < $scope.listgetChildsStockFormInferior.length; i++) {
				if (lovAgentId == $scope.listgetChildsStockFormInferior[i].stockId) {
					type = $scope.listgetChildsStockFormInferior[i].type;
					break;
				}
			}
		}
		return type;
	}
	$scope.getGoodsName = function(goodsId) {
		var name = '';
		if ($scope.lstAllGoods != null && $scope.lstAllGoods != undefined && $scope.lstAllGoods.length > 0) {
			for (var i = 0; i < $scope.lstAllGoods.length; i++) {
				if (goodsId == $scope.lstAllGoods[i].goodsId) {
					name = $scope.lstAllGoods[i].name;
					break;
				}
			}
		}
		return name;
	}
	$scope.getGoodsCode = function(goodsId) {
		var code = '';
		if ($scope.lstAllGoods != null && $scope.lstAllGoods != undefined && $scope.lstAllGoods.length > 0) {
			for (var i = 0; i < $scope.lstAllGoods.length; i++) {
				if (goodsId == $scope.lstAllGoods[i].goodsId) {
					code = $scope.lstAllGoods[i].goodsCode;
					break;
				}
			}
		}
		return code;
	}

	$scope.btnCreateCommandOnclick = function() {
		$scope.checkDisableGetSerial = false;
		$scope.typeActionCreate = 'create';
		$scope.getReceiptCode();
		$scope.checkDisableBtnSearch = true;
		$scope.checkDisabledStockView = false;
		$scope.checkDisabledCreateCommand = false;
		$scope.isCheckCreate = false;
		$('#formGroupButton').css('display', 'none');
		$scope.checkDisabled = true;
		$scope.clearDataFormSearch();
		$scope.clearDataFormStockView();
		$scope.btnSerialOnClick = true;
		var list = [];
		createTableGoodsSave(list);
		if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
			$scope.lstGoodForTransaction = [];
		}
		// demoDisabletable
		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			$('selector').click(function() {
				return false;
			});
		});
	}

	$scope.btnCreateExportCommandOnClick = function() {
		if ($scope.validateInput() == false) {
			return;
		} else {
			exportToInferior.validTransActionCode($scope.model.txtReceiptCode, function(result) {
				if (result != null && result != undefined) {
					if (result.status == '0') {
						bootboxAlertFocus($translate.instant('vnm.FormStockImportFromStaff.error.form.validDuplicate'), "", $translate.instant("vnm.lable.vnm.name"), "");
					} else if (result == 'ParamsOK') {

						var transGood = {
							"mintCurrentAction" : "",
							"stockId" : $localStorage.clientContext.sessionStockID,
							"internalStockId" : $scope.model.internalStock,
							"txtReceiptCode" : $scope.model.txtReceiptCode,
							"reasonId" : "26",
							"reasonCode" : "XCD",
							"txtOrderCode" : $scope.model.txtOrderCode,
							"txtNote" : $scope.model.txtNote,
							"type" : "1",
							"receiptCode" : $scope.model.txtReceiptCode,
							"staffName" : $localStorage.clientContext.shop.staffName,
							"staffId" : $localStorage.clientContext.shop.staffId,
							"lstGoodsTransaction" : $scope.lstGoodForTransaction,
							"status" : $scope.model.status,
							"lovAgent" : $scope.model.lovAgent.stockId,
							"lovReason" : $scope.model.lovReason,
							"shopType" : $scope.model.shopType,
							"resourceCode" : $scope.model.resourceCodeFormSearch,
							"id" : "",

						}
						exportToInferior.valid(transGood, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus($translate.instant("vnm.ExportToInferior.error.form.strFromSerial"), "", $translate.instant("vnm.lable.vnm.name"), "");
									return false;
								} else {
									bootboxConfirm($translate.instant("vnm.common.btn.add"), $translate.instant("vnm.ExportToInferior.messages.confirm.add"), $scope.confirmAddGoodsForTransOK,
											$scope.confirmAddGoodsForTransNOK);
								}
							}
						});
					}
				}
			});

		}
	}
	$scope.confirmAddGoodsForTransOK = function() {
		var transGoodCreateCommand = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"internalStockId" : $scope.model.internalStock,
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"reasonId" : "26",
			"reasonCode" : "XCD",
			"txtOrderCode" : $scope.model.txtOrderCode,
			"txtNote" : $scope.model.txtNote,
			"type" : "1",
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"staffName" : $localStorage.clientContext.shop.staffName,
			"staffId" : $localStorage.clientContext.shop.staffId,
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
			"status" : $scope.model.status,
			"lovAgent" : $scope.model.lovAgent.stockId,
			"lovReason" : $scope.model.lovReason,
			"shopType" : $scope.model.shopType,
			"resourceCode" : $scope.model.resourceCodeFormSearch,
			"id" : "",

		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		exportToInferior.createExportCommandOnClick(transGoodCreateCommand, function(result) {
			if (result != null && result != undefined) {
				bootboxAlertFocus($translate.instant('vnm.ExportToInferior.save.sucsess'), "", $translate.instant("vnm.lable.vnm.name"), "success");
				App.unblockUI("#contentMain");
				$scope.clearDataFormSearch();
				$('#formGroupButton').css('display', 'block');

				$scope.checkDisabledCreateCommand = true;
				$scope.isCheckCreate = true;
				$scope.checkDisabledStockView = true;
				$scope.isDisabledBtnEdit = true;
				$scope.isDisabledBtnDelete = true;
				$scope.checkDisableBtnSearch = false;
				$scope.checkDisableGetSerial = true;
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});
				var searchInput = {
					"lovReason" : $scope.model.lovReason,
					"resourceCode" : $scope.model.resourceCodeFormDetail,
					"dtFromDate" : $scope.model.searchFromDate,
					// "txtReceiptCode" : $scope.model.txtReceiptCode,
					"stockId" : $localStorage.clientContext.sessionStockID,
				};
				exportToInferior.searchOnclick(searchInput, function(result) {
					if (result.length > 0) {
						createDataTableGoodsResult(result);
						$scope.itemSelected = result[0];
						$scope.fillDataForSearchItems($scope.itemSelected);
						var list = [];
						for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
							list.push($scope.itemSelected.goodsList[i]);
						}
						checkDisableComboButton($scope.itemSelected);
						// checkOpenButtonPrint($scope.itemSelected);
						$scope.listAfterCreateCommand = result;
						App.unblockUI("#contentMain");
					} else {
						App.unblockUI("#contentMain");
					}
				});
			}
		});
	}
	$scope.confirmAddGoodsForTransNOK = function() {
		return;
	}

	$scope.onChooseGoodsForm = function() {
		$scope.disableAddViewDetail = false;
		$scope.refreshDetailSerialForGoods();
	}

	// xem kho start
	$scope.btnEditOnclick = function() {
		if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined) {
			$scope.checkDisablebtnAccept = true;
			$scope.checkHideBtnOnDetail = false;
			$scope.checkHideComboBtn = true;
			$scope.checkDisabledAfterCreateBtn = false;
			$scope.typeAction = 'EDIT';
			$scope.checkDisabledAfterCreateAndEdit = false;
			$scope.checkDisabledAfterCreate = true;
		}
	}
	$scope.btnAddOnclick = function() {
		$scope.clearDataFormStockView();
		$scope.typeAction = 'ADD';
		$scope.checkDisablebtnAccept = false;
		$scope.checkHideBtnOnDetail = false;
		$scope.checkHideComboBtn = true;
		$scope.checkDisabledAfterCreate = false;
		$scope.checkDisabledAfterCreateAndEdit = false;
		$scope.checkDisabledAfterCreateBtn = false;
		$scope.disableAddViewDetail = true;

	}
	$scope.btnAddOnclickS = function() {
		$scope.typeAction = 'ADD';
		$scope.checkDisablebtnAccept = false;
		$scope.checkHideBtnOnDetail = false;
		$scope.checkHideComboBtn = true;
		$scope.checkDisabledAfterCreate = false;
		$scope.checkDisabledAfterCreateAndEdit = false;
		$scope.checkDisabledAfterCreateBtn = false;
		$scope.disableAddViewDetail = true;

	}
	$scope.btnCancelDetailOnclick = function() {
		$scope.checkHideBtnOnDetail = true;
		$scope.checkHideComboBtn = false;
		$scope.checkDisabledAfterCreate = true;
		$scope.clearDataFormStockView();
		$scope.checkDisabledAfterCreateAndEdit = true;

	}

	$scope.btnCancelExportCommandOnclick = function() {
		$('#formGroupButton').css('display', 'block');
		$scope.checkDisabled = true;
		$scope.checkDisabledCreateCommand = true;
		$scope.isDisabledBtnDelete = true;
		$scope.isDisabledBtnEdit = true;
		$scope.model.txtReceiptCode = "";
		$scope.checkHideBtnOnDetail = true;
		$scope.checkHideComboBtn = false;
		$scope.checkDisabledAfterCreate = true;
		// $scope.clearDataFormStockView();
		$scope.checkDisableBtnSearch = false;
		$scope.checkDisabledStockView = true;
		$scope.isCheckCreate = true;
		$scope.isCheckExportCommand = true;
		$scope.checkDisableGetSerial = true;

		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
			$scope.fillDataForSearchItems($scope.itemSelected);
			var list = [];
			for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
				list.push($scope.itemSelected.goodsList[i]);
				// $scope.itemSelected.goodsList[i].lstTransSerial =$scope.itemSelected.lstTransSerial;
				// $scope.lstGoodForTransaction.push($scope.itemSelected.goodsList[i]);
			}
			checkDisableComboButton(rowData);
			// checkOpenButtonPrint(rowData);
			createTableGoodsSave(list);
			$scope.fillDataDialogStock(list[0]);
		});

	}

	$scope.btnCancelOnclick = function() {
		if ($scope.itemSelected != null || $scope.itemSelected != undefined) {
			$scope.btnSerialOnClick = false;
		}

		var list = [];
		createTableGoodsSave(list);
		if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
			$scope.lstGoodForTransaction = [];
			console.log(" asss : " + $scope.lstGoodForTransaction);
		}
		$scope.checkDisableGetSerial = true;
		$scope.checkHideBtnOnDetail = true;
		$scope.checkHideComboBtn = false;
		$scope.checkDisabledAfterCreate = true;
		$scope.clearDataFormStockView();
		$scope.checkDisableBtnSearch = false;
		$scope.checkDisabledStockView = true;
		$scope.isCheckCreate = true;
		$('#formGroupButton').css('display', 'block');
		$scope.checkDisabled = true;
		$scope.checkDisabledCreateCommand = true;
		$scope.isDisabledBtnDelete = true;
		$scope.isDisabledBtnEdit = true;
		$scope.model.txtReceiptCode = "";

		// /demoDisableTable
		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
			$scope.fillDataForSearchItems($scope.itemSelected);
			var list = [];
			for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
				list.push($scope.itemSelected.goodsList[i]);

			}
			createTableGoodsSave(list);
		});
	}
	$scope.onClearFormSelectGoodsForAdd = function() {
		$scope.model.resourceCodeFormSearch = {};
		$scope.model.internalStock = {};
		$scope.model.goodsForm = {};
		$scope.model.goodsFormName = "";
		$scope.model.statesForm = {};
		$scope.model.beginQuantity = "";
		$scope.model.noteStockView = "";
	}

	$scope.btnDeleteOnclick = function() {
		$scope.typeAction = 'DELETE';
		bootboxConfirm($translate.instant("vnm.common.btn.delete"), $translate.instant("vnm.messages.confirm.delete"), $scope.confirmDeleteGoodsForTransOK, $scope.confirmDeleteGoodsForTransNOK);
	}
	$scope.confirmDeleteGoodsForTransOK = function() {
		angular.forEach($scope.lstGoodForTransaction, function(objectGoodsTrans, indexS) {
			if (objectGoodsTrans.goodsId == $scope.itemGoodDMHSelected.goodsId && objectGoodsTrans.stateId == $scope.itemGoodDMHSelected.stateId) {
				$scope.lstGoodForTransaction.splice(indexS, 1);
			}
		});

		createTableGoodsSave($scope.lstGoodForTransaction);
		if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
			$scope.isDisabledBtnEdit = true;
			$scope.isDisabledBtnDelete = true;
		}
		if ($scope.lstGoodForTransaction <= 0) {
			$scope.clearDataFormStockView();
		} else {
			$scope.fillDataDialogStock($scope.lstGoodForTransaction[0]);
		}

	}
	$scope.confirmDeleteGoodsForTransNOK = function() {

	}
	// Dialog xem kho

	$scope.showModalStockView = function() {
		exportToInferior.getInternalStockList(function(result6) {
			$scope.lstInternalStock = result6;
			var sessionValue = {
				"SessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
				"SessionShopType" : $localStorage.clientContext.shop.shopType,
				"isForm" : "0",
			};
			exportToInferior.getVctResourceList(sessionValue, function(result5) {
				$scope.lstGoodsResource = result5;
				exportToInferior.getExistedStates(function(result) {
					$scope.pStatesList = result;
					exportToInferior.getExistedGoodsGroups(function(result1) {
						$scope.pGoodsGroupsList = result1;
						var resourceCodeForm = {
							"code" : $scope.model.resourceCodeFormDetail,
							"name" : "",
						}
						exportToInferior.getExistedGoods(resourceCodeForm, function(result2) {
							$scope.pGoodsList = result2;
							$scope.lstTableGoodsFilter = $scope.pGoodsList;
							var shopStaff = {
								"code" : $localStorage.clientContext.sessionStockID,
								"name" : "",
							};
							exportToInferior.getStocksTree(shopStaff, function(result3) {
								$scope.pStocksTree = result3;
								$scope.model.stockTypeSearch = 'all';
								$scope.model.currentStock = $scope.lstCurrentStock[0];
								$scope.model.currentStockName = $scope.model.currentStock.name;

								if ($scope.lstGoodsResource != null && $scope.lstGoodsResource != undefined && $scope.lstGoodsResource.length > 0) {
									$scope.model.resourceCode = $scope.lstGoodsResource[0];
								}
								if ($scope.lstInternalStock != null && $scope.lstInternalStock != undefined && $scope.lstInternalStock.length > 0) {
									$scope.model.stockInternalType = $scope.lstInternalStock[0];
								}

								if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != null && $scope.model.goodsForm.goodsId != undefined
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

								// check
								if ($scope.checkDisablebtnAccept == true) {
									$scope.disableBtnInput = true;
								} else {
									$scope.disableBtnInput = false;
								}

								$scope.showModalFunction("modalStockInfo");
							});
						});
					});
				});
			});
		});
	}

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
				"mData" : "goodsGroupId",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : $scope.getGoodsGroupName(data));
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "unitName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "checkSerial",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : (data == '1' ? "Có" : "Không"));
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "checkWarranty",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : (data == '1' ? "Có" : "Không"));
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + name + "'>" + name + "</div>";
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
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : '',
				"oPaginate" : {
					"sFirst" : '',
					"sLast" : '',
					"sNext" : '',
					"sPrevious" : '',
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
					if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1' && $scope.itemGoodQuantitySelected != null
							&& $scope.itemGoodQuantitySelected != undefined && $scope.itemGoodQuantitySelected.quantityEffect > 0) {
						$scope.disableBtnDetail = false;
					} else {
						$scope.disableBtnDetail = true;
					}
				});
	}

	$scope.createDataTableGoodsQuantitiesByGoodsId = function(goodsId) {
		var cond = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"goodsId" : goodsId,
			"internalStock" : $scope.model.stockInternalType.code,
			"radio" : $scope.model.stockTypeSearch,
		};

		exportToInferior.getGoodsQuantityByCondition(cond, function(result) {
			if (result != null && result != undefined) {
				$scope.quantities = result;
				// Bang so luong ...
				createDataTableGoodsQuantities($scope.quantities);
				$scope.itemGoodQuantitySelected = $scope.quantities[0];

				if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1' && $scope.itemGoodQuantitySelected != null
						&& $scope.itemGoodQuantitySelected != undefined && $scope.itemGoodQuantitySelected.quantityEffect > 0) {
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
		});
	}

	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
			angular.element($("#tblListShop_filter").find("input")[0]).focus();
		});
		
		
	}

	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}

	$scope.onChooseCurrentStock = function() {
		$scope.model.currentStockName = $scope.model.currentStock.name;
	}

	$scope.stockTypeChangeFn = function(val) {
		if (val == 'all') {
			$scope.lstTableGoods = $scope.lstGoodsForm;
			$scope.lstTableGoodsFilter = $scope.lstTableGoods;
			if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
				createDataTableGoods($scope.lstTableGoods);
				$scope.itemGoodSelected = $scope.lstTableGoods[0];
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

	$scope.onChooseInternalStock = function() {
		if ($scope.model.stockTypeSearch == 'all') {
			$scope.lstTableGoods = $scope.lstGoodsForm;
			$scope.lstTableGoodsFilter = $scope.lstTableGoods;
			if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
				createDataTableGoods($scope.lstTableGoods);
				$scope.itemGoodSelected = $scope.lstTableGoods[0];
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

	$scope.onChooseResourceCode = function() {
		$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
	}

	$scope.getGoodsListByCondition = function(radio) {
		var cond = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"resourceCode" : $scope.model.resourceCode.code,
			"internalStock" : $scope.model.stockInternalType.code,
			"checkWarranty" : "false",
			"radio" : radio,
			"shopId" : $localStorage.clientContext.shopId,
		};

		exportToInferior.getGoodsListByCondition(cond, function(result) {
			if (result != null && result != undefined && result.length > 0) {
				$scope.lstTableGoods = result;
				$scope.lstTableGoodsFilter = $scope.lstTableGoods;
				createDataTableGoods($scope.lstTableGoods);
				$scope.itemGoodSelected = $scope.lstTableGoods[0];
				$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
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
			$scope.btnAddOnclickS();
		} else {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.choose.right.goods'), "", $translate.instant("vnm.lable.vnm.name"), "");
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
	$scope.refreshDetailSerialForGoods = function() {
		$scope.lstSerialSETCTmp = [];
		$scope.lstSerialSETC = [];
		$scope.lstTableSerialsSETC = [];
		$scope.lstTableSerialsSETCTmp = [];
		$scope.fileSuccess = []
		$scope.lstSerialSETCInStock = [];
		$scope.model.fromSerial = '';
		$scope.model.toSerial = '';
		$scope.model.quantity = '';
		createTableDDSerialSingleSETC($scope.lstTableSerialsSETC);
		createTableDDSerialSingleSETC2($scope.lstSerialSETC);
	}
	$scope.lstTableSerials = [];
	$scope.btnDetailOnClick = function() {
		$scope.model.ddFromSerial = '';
		$scope.model.ddToSerial = '';
		$scope.model.ddQuantity = $scope.itemGoodQuantitySelected.quantityRemain;
		$('#divTableDDSerialSingle').css('display', 'block');
		$('#divTableDDSerialStrip').css('display', 'none');
		$scope.model.ddSerialTypeSearch = "single";
		$scope.lstTableSerials = [];
		createTableDDSerialSingle($scope.lstTableSerials)
		$scope.showModalFunction("modalSerialList");
	}

	$scope.serialTypeChangeFn = function(item) {
		$scope.lstTableSerials = [];
		$scope.fillDataDDTableSerial($scope.lstTableSerials);
	}

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

		exportToInferior.getStockSerialByCondition(serialSearch, function(result) {
			if (result != null && result != undefined && result.length > 0) {
				$scope.lstTableSerials = result;
				$scope.fillDataDDTableSerial($scope.lstTableSerials);
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerial(lstNull);
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");
			}
		});
	}

	$scope.fillDataDDTableSerial = function(dataItem) {
		if ($scope.model.ddSerialTypeSearch == 'single') {
			$('#divTableDDSerialSingle').css('display', 'block');
			$('#divTableDDSerialStrip').css('display', 'none');
			$('#divTableDDSerialSingle').css('min-height', '390px');
			createTableDDSerialSingle(dataItem);
		} else {
			$('#divTableDDSerialSingle').css('display', 'none');
			$('#divTableDDSerialStrip').css('display', 'block');
			$('#divTableDDSerialStrip').css('min-height', '390px');
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

	// Button chi tiet

	$scope.lstSerialSETCTmp = [];
	$scope.lstSerialSETC = [];
	$scope.lstTableSerialsSETC = [];
	$scope.lstTableSerialsSETCTmp = [];
	$scope.fileSuccess = []
	$scope.lstSerialSETCInStock = [];
	// Button chi tiet
	$scope.viewDetail = function() {
		var lstNull = [];
		$scope.lstSerialSETC = [];
		createTableDDSerialSingleSETC(lstNull);
		if ($scope.typeAction == 'EDIT') {
			if ($scope.itemGoodDMHSelected.lstTransSerial != null && $scope.itemGoodDMHSelected.lstTransSerial != undefined && $scope.itemGoodDMHSelected.lstTransSerial.length > 0) {
				createTableDDSerialSingleSETC2($scope.itemGoodDMHSelected.lstTransSerial);
				$scope.model.showRemoveSerial = false;
				$scope.model.goodsForm.lstTransSerial.forEach(function(item) {
					$scope.lstSerialSETC.push(Object.assign({}, item))
				});
			} else {
				createTableDDSerialSingleSETC2(lstNull);
				$scope.model.showRemoveSerial = true;
			}
		} else if ($scope.typeAction == 'ADD') {
			if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.lstTransactionSerial != null
					&& $scope.model.goodsForm.lstTransactionSerial != undefined && $scope.model.goodsForm.lstTransactionSerial.length > 0) {
				createTableDDSerialSingleSETC2($scope.model.goodsForm.lstTransactionSerial);
				$scope.model.showRemoveSerial = false;
				$scope.model.goodsForm.lstTransactionSerial.forEach(function(item) {
					$scope.lstSerialSETC.push(Object.assign({}, item))
				})
			} else {
				createTableDDSerialSingleSETC2(lstNull);
				$scope.model.showRemoveSerial = true;
			}
		} else {
			createTableDDSerialSingleSETC2(lstNull);
			$scope.model.showRemoveSerial = true;
		}
		$scope.model.number = $scope.model.beginQuantity;
		$scope.model.showAddSerial = true;
		$scope.lstSerialSETC = [];
		$scope.showModalFunction("modalStockDetail");
	}

	// Upload file
	var uploaderListDetail = $scope.uploaderListDetail = new FileUploader({
		url : eim_url + '/epos/inventory/getListSerianFromFile'
	});
	// Another user-defined filter set max file size
	uploaderListDetail.filters.push({
		'name' : 'enforceMaxFileSize',
		'fn' : function(item) {
			var fileName = item.name;
			var sizeFile = item.size;
			var fileExtValue = fileName.split(".").pop();

			if (fileExtValue.toUpperCase() != "xlsx".toUpperCase() && fileExtValue.toUpperCase() != "xls".toUpperCase()) {
				var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.UPLOAD-0009');
				bootboxAlertFocus(TEMPLATE_ERROR, "", $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			return true;
		}
	});

	// set data before upload for each item
	uploaderListDetail.onBeforeUploadItem = function(item) {
		overLoading();
		$scope.model.linkFile = item._file.name;
		uploaderListDetail.clearQueue();
		item.headers = {
			Authorization : 'Bearer ' + $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}

	// on item upload success
	uploaderListDetail.onSuccessItem = function(fileItem, response, status, headers) {
		if (response.indexOf('ERORR_EXCEPTION') < 0) {
			$scope.fileSuccess = [];
			angular.forEach(response, function(item) {
				$scope.fileSuccess.push(item);
			})
		} else {
			bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
			$scope.model.linkFile = '';
			$scope.model.fromNumber = '';
			$scope.model.toNumber = '';
			$scope.model.quantity = '';
			uploaderListDetail.clearQueue();
			$scope.disabledUploadAllFile = true;
			$scope.fileSuccess = [];
			closeOverLay();
			return;
		}

		closeOverLay();
	}

	// on item upload error
	uploaderListDetail.onErrorItem = function(fileItem, response, status, headers) {
		closeOverLay();
		bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
		$scope.model.linkFile = '';
		$scope.model.fromNumber = '';
		$scope.model.toNumber = '';
		$scope.model.quantity = '';
		uploaderListDetail.clearQueue();
		$scope.disabledUploadAllFile = true;
		$scope.fileSuccess = [];
		return;
	}

	uploaderListDetail.onAfterAddingAll = function(items) {
		overLoading("Uploading...");
		if (items != null) {
			uploaderListDetail.uploadAll();
		}
	}
	var zIndexmodalStockDetail = $("#modalStockDetail").css("z-index");
	var zIndexDialogModal = $("#modalAddSerial").css("z-index");
	$scope.uploadAllFile = function(uploaderIn) {
		overLoading();
		bootbox.confirm(
				{
					title : $translate.instant("vnm.lable.vnm.name"),
					message : "<i class='fa fa-question-circle' style='font-size:20px; color:orange; margin-right:20px;'></i>" + $translate.instant('vnm.FormStockImportFromPartner.messageAccept'),
					buttons : {
						confirm : {
							label : $translate.instant('vnm.dialogButtonDetail.label.buttonOk'),
							className : 'btn-success button-customer-confirm'
						},
						cancel : {
							label : $translate.instant('vnm.dialogButtonDetail.label.buttonRject'),
							className : 'btn-danger button-customer-confirm'
						}
					},
					callback : function(result) {
						if (result) {
							$("#modalStockDetail").css('zIndex', 50);
							$("#modalAddSerial").css('zIndex', 100);

							overLoading();

							var serialSearch = {
								"goodsId" : $scope.model.goodsForm.goodsId,
								"stateId" : $scope.model.statesForm,
								"internalStockId" : $scope.model.internalStock,
								"stockId" : $localStorage.clientContext.sessionStockID,
								"lstTransSerial" : $scope.fileSuccess,
							}
							// check
							exportToInferior.getSerialListInStock(serialSearch, function(result) {
								if (result == null || result == undefined || result.status == '0') {
									message = result.messages;
									closeOverLay();
									bootboxConfirm($translate.instant("vnm.ExportStockToPartner.error.import.serial.title"),
											$translate.instant("vnm.ExportStockToPartner.error.import.serial.message"), $scope.btnFSaveErrorFileConfirmOK, $scope.btnFSaveErrorFileConfirmNOK);
								} else {
									$scope.lstTableSerialsSETCTmp = []
									Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.fileSuccess);
									$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
									$scope.hideModalFunction("modalAddSerial");
									$scope.disabledUploadAllFile = true;
									bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.success').replace('%quantity', $scope.fileSuccess.length), "", $translate
											.instant("vnm.lable.vnm.name"), "success");
									$scope.model.showAddSerial = false;
									closeOverLay();
								}
								$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
								$("#modalAddSerial").css('zIndex', zIndexDialogModal);
							});

						} else {
							closeOverLay();
						}
					}
				}).find(".modal-dialog").css({
			'width' : '450px',
			'margin-top' : function() {
				var w = $(window).height();
				// var b = $(".modal-dialog").height();
				var h = w / 5;
				return h + "px";
			}
		});
	}

	$scope.btnFSaveErrorFileConfirmOK = function() {
		$scope.downLoadFileError(message);
	}
	$scope.btnFSaveErrorFileConfirmNOK = function() {
		$scope.hideModalFunction("modalAddSerial");
		$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
		$("#modalAddSerial").css('zIndex', zIndexDialogModal);
		$scope.lstTableSerialsSETCTmp = []
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
		closeOverLay();
	}
	$scope.downLoadFileError = function(errorMessage) {
		overLoading("Downloading file error...");
		var objError = {
			'formName' : 'ExportToInferior_',
			'message' : errorMessage,
		};
		var url = eim_url + '/epos/inventory/downLoadFileError';
		$http.post(url, objError, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootboxAlertFocus($translate.instant('vnm.messages.validate.500'), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
		});
		$scope.hideModalFunction("modalAddSerial");
		closeOverLay();
	}

	$scope.checkBarCode = function(item) {
		if (item.typeCheckBox == true) {
			$scope.isNotSearch = true;
			$scope.lstTableSerialsSETC = [];
			createTableDDSerialSingleSETC($scope.lstTableSerialsSETC);
		} else {
			$scope.isNotSearch = false;
		}
	}

	$scope.addFile = function() {
		if ('' === $scope.model.linkFile || undefined == $scope.model.linkFile) {
			bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.inputFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			if ($scope.fileSuccess.length > 0) {
				var maxSerial = $scope.fileSuccess[0].fromSerial;
				var minSerial = $scope.fileSuccess[0].fromSerial;
				for (var i = 0; i < $scope.fileSuccess.length; i++) {
					if (maxSerial.localeCompare($scope.fileSuccess[i].fromSerial) < 0) {
						maxSerial = $scope.fileSuccess[i].fromSerial;
					}
					if (minSerial.localeCompare($scope.fileSuccess[i].fromSerial) > 0) {
						minSerial = $scope.fileSuccess[i].fromSerial;
					}
				}
				$scope.model.fromNumber = minSerial;
				$scope.model.toNumber = maxSerial;
				$scope.model.quantity = $scope.fileSuccess.length;
				$scope.disabledUploadAllFile = false;
			} else {
				bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
		}

	}

	$scope.downloadFileTemplateServer = function() {
		var attachFile = {};
		attachFile.fileName = "Template_Upload_Serial.xlsx";
		attachFile.folder = "Template_Upload_Serial.xlsx";
		dowloadFile(attachFile);
	}
	dowloadFile = function(data) {
		overLoading("Downloading file mẫu...");
		var url = eim_url + '/epos/inventory/downLoadFileTemplate';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootboxAlertFocus($translate.instant('vnm.messages.validate.' + data[0]), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
		});
	}

	$scope.dialogActionBack = function() {

		$scope.model.linkFile = '';
		$scope.model.fromNumber = '';
		$scope.model.toNumber = '';
		$scope.model.quantity = '';
		uploaderListDetail.clearQueue();
		closeOverLay();
		$scope.disabledUploadAllFile = true;
		$scope.fileSuccess = [];
		$scope.hideModalFunction("modalAddSerial");
	}

	$scope.btnSearchSerial = function() {
		if ($scope.model.fromSerial == null || $scope.model.fromSerial == undefined || $scope.model.fromSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else if ($scope.model.fromSerial.length > 20) {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.max.length'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		if ($scope.model.toSerial == null || $scope.model.toSerial == undefined || $scope.model.toSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else if ($scope.model.toSerial.length > 20) {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.max.length'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		if ($scope.model.number != null && $scope.model.number != undefined && $scope.model.number.length > 5) {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.number.max.length'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		var serialSearch = {
			"goodsId" : $scope.model.goodsForm.goodsId,
			"stateId" : $scope.model.statesForm.stateId,
			"internalStockId" : $scope.model.internalStock,
			"fromSerial" : $scope.model.fromSerial,
			"toSerial" : $scope.model.toSerial,
			"quantity" : $scope.model.number,
			"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
			"stockId" : $localStorage.clientContext.sessionStockID,
			"typeSerialSearch" : "single",
		}

		exportToInferior.getStockSerialByCondition(serialSearch, function(result) {
			$scope.lstTableSerialsSETCTmp = [];
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstTableSerialsSETC = result;
					Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.lstTableSerialsSETC);
					$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
					$scope.model.showAddSerial = false;
				} else {
					var lstNull = [];
					$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
					bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");
			}
		});
	}

	$scope.searchSingelSerial = function() {
		$scope.lstTableSerialsSETCTmp = [];
		var serialSearch = {
			"goodsId" : $scope.model.goodsForm.goodsId,
			"stateId" : $scope.model.statesForm,
			"internalStockId" : $scope.model.internalStock,
			"fromSerial" : $scope.model.serial,
			"toSerial" : $scope.model.serial,
			"quantity" : $scope.model.number,
			"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
			"stockId" : $localStorage.clientContext.sessionStockID,
		}
		exportToInferior.getSingelSerialInStock(serialSearch, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");

			} else {
				if (result == "") {
					bootboxAlertFocus($translate.instant('vnm.messages.serial.is.not.exists'), "", $translate.instant("vnm.lable.vnm.name"), "");
				} else {
					$scope.lstTableSerialsSETC = [];
					$scope.lstTableSerialsSETC.push(result);
					Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.lstTableSerialsSETC);
					$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
					$scope.model.showAddSerial = false;
				}

			}
		});
	}

	$scope.addSerial = function() {
		$scope.lstSerialSETCTmp = [];
		var table = $('#tblSerialSingle').DataTable();
		for (var i = 0; i < $scope.lstTableSerialsSETCTmp.length; i++) {
			var row = table.row(i);
			var className = row.node().className;
			if (className.includes("selected")) {
				$scope.lstSerialSETCTmp.push($scope.lstTableSerialsSETCTmp[i]);
			}
		}

		if ($scope.lstSerialSETCTmp.length == 0 && $scope.lstTableSerialsSETCTmp.length > 0) {
			$scope.lstSerialSETCTmp.push($scope.lstTableSerialsSETCTmp[0]);
		}
		for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
			for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
				if ($scope.lstSerialSETC[j].fromSerial == $scope.lstSerialSETCTmp[i].fromSerial) {
					bootboxAlertFocus("Số Serial " + $scope.lstSerialSETCTmp[i].fromSerial + " đã có trong danh sách được chuyển", "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
			}
		}

		if ($scope.lstSerialSETCTmp.length == 0) {
			bootboxAlertFocus("Chưa chọn Serial", "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
				$scope.lstSerialSETC.push($scope.lstSerialSETCTmp[i]);
				var index = $scope.lstTableSerialsSETCTmp.indexOf($scope.lstSerialSETCTmp[i]);
				$scope.lstTableSerialsSETCTmp.splice(index, 1);
			}
			$scope.lstSerialSETCTmp = [];
			$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
			$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
			if ($scope.lstTableSerialsSETCTmp.length == 0) {
				$scope.model.showAddSerial = true;
			} else {
				$scope.model.showAddSerial = false;
			}
			$scope.model.showRemoveSerial = false;
		}

	}

	$scope.addAllSerial = function() {
		for (var i = 0; i < $scope.lstTableSerialsSETCTmp.length; i++) {
			for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
				if ($scope.lstSerialSETC[j].fromSerial == $scope.lstTableSerialsSETCTmp[i].fromSerial) {
					bootboxAlertFocus("Số Serial " + $scope.lstTableSerialsSETCTmp[i].fromSerial + " đã có trong danh sách được chuyển", "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
			}
		}
		Array.prototype.push.apply($scope.lstSerialSETC, $scope.lstTableSerialsSETCTmp);
		$scope.lstTableSerialsSETCTmp = [];
		$scope.lstSerialSETCTmp = [];
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
		$scope.model.showAddSerial = true;
		$scope.model.showRemoveSerial = false;
	}

	// Xoa serial
	$scope.removeSerial = function() {
		$scope.lstSerialSETCTmp = [];
		var table = $('#tblSerialSingle2').DataTable();
		for (var i = 0; i < $scope.lstSerialSETC.length; i++) {
			var row = table.row(i);
			var className = row.node().className;
			if (className.includes("selected")) {
				$scope.lstSerialSETCTmp.push($scope.lstSerialSETC[i]);
			}
		}

		if ($scope.lstSerialSETCTmp.length == 0 && $scope.lstSerialSETC.length > 0) {
			$scope.lstSerialSETCTmp.push($scope.lstSerialSETC[0]);
		}
		if ($scope.lstSerialSETCTmp.length == 0) {
			bootboxAlertFocus("Chưa chọn Serial", "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
				var index = $scope.lstSerialSETC.indexOf($scope.lstSerialSETCTmp[i]);
				$scope.lstSerialSETC.splice(index, 1);

				var addxx = true;
				for (var j = 0; j < $scope.lstTableSerialsSETCTmp.length; j++) {
					if ($scope.lstSerialSETCTmp[i].fromSerial == $scope.lstTableSerialsSETCTmp[j].fromSerial) {
						addxx = false;
						break;
					}
				}
				if (addxx) {
					$scope.lstTableSerialsSETCTmp.push($scope.lstSerialSETCTmp[i]);
				}
			}
			$scope.lstSerialSETCTmp = [];
			$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
			$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
			if ($scope.lstSerialSETC.length == 0) {
				$scope.model.showRemoveSerial = true;
			}
			$scope.model.showAddSerial = false;
		}

	}

	// Xoa tat ca serial
	$scope.removeAll = function() {
		for (var i = 0; i < $scope.lstSerialSETC.length; i++) {
			var addx = true;
			for (var j = 0; j < $scope.lstTableSerialsSETCTmp.length; j++) {
				if ($scope.lstTableSerialsSETCTmp[j].fromSerial == $scope.lstSerialSETC[i].fromSerial) {
					addx = false;
					break;
				}
			}
			if (addx) {
				$scope.lstTableSerialsSETCTmp.push($scope.lstSerialSETC[i]);
			}
		}
		$scope.lstSerialSETC = [];
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
		$scope.model.showRemoveSerial = true;
		$scope.model.showAddSerial = false;
	}
	$scope.btnGetOne = function() {

	}

	$scope.btnAcceptClick = function() {
		if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
			$scope.model.goodsForm.lstTransactionSerial = [];
			$scope.lstSerialSETC.forEach(function(item) {
				$scope.model.goodsForm.lstTransactionSerial.push(Object.assign({}, item))
			});
			$scope.model.mdnNumberDetail = $scope.model.goodsForm.lstTransactionSerial.length;
			$scope.model.beginQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
			$scope.model.showAddSerial = true;
			$scope.model.showRemoveSerial = true;

			// check goodsId
			// if( $scope.lstGoodForTransaction.length == 1){
			// $scope.itemGoodDMHSelected = $scope.lstGoodForTransaction[0];
			// }
			// for (var i = 0; i < $scope.lstGoodForTransaction.length; i++) {
			// if ($scope.itemGoodDMHSelected.goodsId == $scope.lstGoodForTransaction[i].goodsId) {
			// $scope.lstGoodForTransaction[i].lstTransSerial = [];
			// $scope.lstSerialSETC.forEach(function(item) {
			// $scope.lstGoodForTransaction[i].lstTransSerial.push(Object.assign({}, item));
			//					
			// });
			// break;
			// }
			// }

		} else {
			$scope.model.goodsForm.lstTransactionSerial = [];
		}
		$scope.lstSerialSETC = [];
		$scope.model.toSerial = '';
		$scope.model.fromSerial = '';
		$scope.hideModalFunction("modalStockDetail");
	}

	$scope.btnBackSerial = function() {
		if ($scope.lstSerialSETC != null && $scope.lstSerialSETC != undefined && $scope.model.goodsForm.lstTransactionSerial != null && $scope.model.goodsForm.lstTransactionSerial != undefined
				&& !arraysEqual($scope.lstSerialSETC, $scope.model.goodsForm.lstTransactionSerial)) {
			bootboxConfirm3($translate.instant("vnm.ExportStockToPartner.confirm.add.serial.title"), $translate.instant("vnm.ExportStockToPartner.confirm.add.serial.message"),
					$scope.btnFBackOnclickConfirmOK, $scope.btnFBackOnclickConfirmCancel, $scope.btnFBackOnclickConfirmNOK);
		} else {
			$scope.model.fromSerial = '';
			$scope.model.toSerial = '';
			$scope.model.serial = '';
			$scope.model.number = $scope.model.goodQuantity;
			$scope.model.lstTableSerialsSETCTmp = [];
			$scope.model.showAddSerial = false;
			$scope.model.showRemoveSerial = false;
			$scope.hideModalFunction("modalStockDetail");
		}
	}

	function arraysEqual(a1, a2) {
		return JSON.stringify(a1) == JSON.stringify(a2);
	}

	$scope.btnFBackOnclickConfirmOK = function() {
		if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
			$scope.model.goodsForm.lstTransactionSerial = [];
			$scope.lstSerialSETC.forEach(function(item) {
				$scope.model.goodsForm.lstTransactionSerial.push(Object.assign({}, item))
			});
			$scope.model.mdnNumberDetail = $scope.model.goodsForm.lstTransactionSerial.length;
			$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
			$scope.model.showAddSerial = true;
			$scope.model.showRemoveSerial = true;
		} else {
			$scope.model.goodsForm.lstTransactionSerial = [];
		}
		$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
		$scope.lstSerialSETC = [];
		$scope.hideModalFunction("modalStockDetail");
	}

	$scope.btnFBackOnclickConfirmNOK = function() {
		$scope.model.fromSerial = '';
		$scope.model.toSerial = '';
		$scope.model.serial = '';
		$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
		$scope.model.number = $scope.model.goodQuantity;
		$scope.model.lstTableSerialsSETCTmp = [];
		$scope.lstSerialSETC = [];
		$scope.model.showAddSerial = true;
		$scope.model.showRemoveSerial = true;
		$scope.hideModalFunction("modalStockDetail");
	}

	$scope.btnFBackOnclickConfirmCancel = function() {

	}

	$scope.fillDataDDTableSerialSETC = function(dataItem) {
		createTableDDSerialSingleSETC(dataItem);
	}
	$scope.fillDataDDTableSerialSETC2 = function(dataItem) {
		createTableDDSerialSingleSETC2(dataItem);
	}
	$scope.showModalStockDetail = function() {
		$scope.showModalFunction("modalStockDetail");
	}

	$scope.showDialogAddFile = function() {
		$scope.model.linkFile = '';
		$scope.model.fromNumber = '';
		$scope.model.toNumber = '';
		$scope.model.quantity = '';
		uploaderListDetail.clearQueue();
		closeOverLay();
		$scope.disabledUploadAllFile = true;
		$scope.fileSuccess = [];
		$scope.showModalFunction("modalAddSerial");
	}

	$scope.btnAdjustOnclick = function(item) {
		$scope.selectedShipment = item;

	}

	$scope.viewStockSETC = function() {
		$scope.showModalFunction("modalStockInfo");
	}

	$scope.viewStockSETCDetail = function() {
		$scope.lstSerialSETCTmp = [];
		$scope.lstSerialSETC = [];
		$scope.lstTableSerialsSETC = [];
		$scope.lstTableSerialsSETCTmp = [];
		$scope.fileSuccess = []
		$scope.lstSerialSETCInStock = [];
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
		$scope.showModalFunction("modalStockDetail");
	}

	var serialX0;
	var firstChoose = false;
	function createTableDDSerialSingleSETC(dataItem) {
		oTableDDSerialSingleSETC = $('#tblSerialSingle').DataTable({
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
			"scrollX" : true,
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
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"createdRow" : function(row, data, rowIndex) {
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
					serialX0 = $(row);
					firstChoose = true;
				}
			}
		});

		$('#tblSerialSingle tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			var rowData = oTableDDSerialSingleSETC.row(this).data();
			if (e.ctrlKey) {
				if (firstChoose) {
					serialX0.addClass("selected");
				}
			} else {
				oTableDDSerialSingleSETC.$('tr.selected').removeClass('selected');
			}
			$(this).addClass('selected');
			firstChoose = false;
		});

	}
	var serialX1;
	var firstChoose1 = false;
	function createTableDDSerialSingleSETC2(dataItem) {
		oTableDDSerialSingleSETC2 = $('#tblSerialSingle2').DataTable({
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
			"scrollX" : true,
			"autoWidth" : true,
			"paginationType" : "full_numbers",
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
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"createdRow" : function(row, data, rowIndex) {
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
					serialX1 = $(row);
					firstChoose1 = true;
				}
			}
		});

		$('#tblSerialSingle2 tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			var rowData = oTableDDSerialSingleSETC2.row(this).data();
			if (e.ctrlKey) {
				if (firstChoose1) {
					serialX1.addClass("selected");
				}
			} else {
				oTableDDSerialSingleSETC2.$('tr.selected').removeClass('selected');
			}
			$(this).addClass('selected');
			firstChoose1 = false;
		});
	}
	// / end view detail

	function checkDisableComboButton(rowData) {
		if (rowData.status == 1) {
			$scope.btnExportOnclick = true;
			$scope.btnPrintOnClick = false;
			$scope.btnDeleteCommaneOnClick = false;
			$scope.btnApproCommandOnClick = false;
		} else if (rowData.status == 2) {
			$scope.btnExportOnclick = false;
			$scope.btnPrintOnClick = false;
			$scope.btnDeleteCommaneOnClick = true;
			$scope.btnApproCommandOnClick = true;
		} else if (rowData.status == 3) {
			$scope.btnExportOnclick = true;
			$scope.btnPrintOnClick = false;
			$scope.btnDeleteCommaneOnClick = true;
			$scope.btnApproCommandOnClick = true;
		} else if (rowData.status == 4) {
			$scope.btnExportOnclick = true;
			$scope.btnPrintOnClick = true;
			$scope.btnDeleteCommaneOnClick = true;
			$scope.btnApproCommandOnClick = true;
		}
	}
	$scope.btnDeleteCommaneOnClickx = function() {
		bootboxConfirm($translate.instant("vnm.common.btn.delete"), $translate.instant("vnm.ExportToInferior.messages.confirm.delete"), $scope.confirmDeleteCommandGoodsForTransOK,
				$scope.confirmDeleteCommandGoodsForTransNOK);
	}
	$scope.confirmDeleteCommandGoodsForTransOK = function() {

		var transGoodCreateCommand = {
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"staffName" : $localStorage.clientContext.shop.staffName,
			"staffId" : $localStorage.clientContext.shop.staffId,
			"stockId" : $scope.itemSelected.stockTransId,
			"stockTransId" : $scope.itemSelected.stockTransId,
		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		exportToInferior.deleteExportCommandOnClick(transGoodCreateCommand, function(result) {
			if (result != null && result != undefined) {
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});
				// var list = [];
				// $scope.lstGoodForTransaction = list;
				// createTableGoodsSave(list);
				// createDataTableGoodsResult(list);
				var searchInput = {
					"lovReason" : $scope.model.lovReason,
					"resourceCode" : $scope.model.resourceCodeFormSearch,
					"dtFromDate" : $scope.model.searchFromDate,
					// "txtReceiptCode" : $scope.model.txtReceiptCode,
					"stockId" : $localStorage.clientContext.sessionStockID,
				};
				exportToInferior.searchOnclick(searchInput, function(result) {
					if (result.length > 0) {
						createDataTableGoodsResult(result);
						$scope.itemSelected = result[0];
						$scope.fillDataForSearchItems($scope.itemSelected);
						var list = [];
						for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
							list.push($scope.itemSelected.goodsList[i]);
						}
						checkDisableComboButton($scope.itemSelected);
						// checkOpenButtonPrint($scope.itemSelected);
						$scope.listAfterCreateCommand = result;
						App.unblockUI("#contentMain");
					} else {
						var list = [];
						// $scope.lstGoodForTransaction = list;
						createTableGoodsSave(list);
						createDataTableGoodsResult(list);
						App.unblockUI("#contentMain");

					}
				});

				$scope.clearDataFormSearch();
				$scope.clearDataFormStockView();
				$('#formGroupButton').css('display', 'block');

				$scope.btnDeleteCommaneOnClick = true;
				$scope.btnApproCommandOnClick = true;
				$scope.btnExportOnclick = true;
				$scope.btnPrintOnClick = true;

				$scope.checkDisabledCreateCommand = true;
				$scope.isCheckCreate = true;
				$scope.checkDisabledStockView = true;
				$scope.isDisabledBtnEdit = true;
				$scope.isDisabledBtnDelete = true;
				$scope.checkDisableBtnSearch = false;

				bootboxAlertFocus($translate.instant('vnm.ExportToInferior.delete.sucsess'), "", $translate.instant("vnm.lable.vnm.name"), "success");
				App.unblockUI("#contentMain");
			}
		});

	}
	$scope.confirmDeleteCommandGoodsForTransNOK = function() {
		return;
	}
	$scope.btnExportOnclicks = function() {
		$scope.isCheckExportCommand = false;
		$scope.typeActionCreate = 'export';
		$('#formGroupButton').css('display', 'none');
		$scope.checkDisableGetSerial = true;
		$scope.checkDisableBtnSearch = true;
		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			$('selector').click(function() {
				return false;
			});
		});

	}

	$scope.btnExportCommandOnClick = function() {
		var sessionShopType = $localStorage.clientContext.shop.shopType;
		var strDelivererType = $scope.getLovAgentType($scope.model.lovAgent.stockId);

		if ((vtWarrantyShopType.indexOf(sessionShopType) >= 0 && vtWarrantyShopType.indexOf(strDelivererType) < 0) && $scope.isWarrantyGoods()) {
			$scope.checkIsExportWarranty = true;
		} else {
			$scope.checkIsExportWarranty = false;
		}

		if ($scope.validateInput() == false) {
			return;
		} else {

			bootboxConfirm($translate.instant("vnm.common.btn.add"), $translate.instant("vnm.ExportToInferior.messages.confirm.export"), $scope.confirmExportCommandsOK,
					$scope.confirmExportCommandsNOK);

		}
	}

	$scope.confirmExportCommandsOK = function() {
		var transGoodCreateCommand = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"internalStockId" : $scope.model.internalStock,
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"reasonId" : "26",
			"reasonCode" : "XCD",
			"txtOrderCode" : $scope.model.txtOrderCode,
			"txtNote" : $scope.model.txtNote,
			"type" : "1",
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"staffName" : $localStorage.clientContext.shop.staffName,
			"staffId" : $localStorage.clientContext.shop.staffId,
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
			"status" : $scope.model.status,
			"lovAgent" : $scope.model.lovAgent.stockId,
			"lovReason" : $scope.model.lovReason,
			"shopType" : $scope.model.shopType,
			"resourceCode" : $scope.model.resourceCodeFormSearch,
			"id" : "",
			"strTransDetail" : "",
			"shopId" : $localStorage.clientContext.shopId,
			"stockTransId" : $scope.itemSelected.stockTransId,

		}
		if ($scope.checkIsExportWarranty) {
			// do something here.
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			exportToInferior.exportCommandWarrantyOnClick(transGoodCreateCommand, function(result) {
				if (result != null && result != undefined) {
					bootboxAlertFocus($translate.instant('vnm.ExportToInferior.save.sucsess'), "", $translate.instant("vnm.lable.vnm.name"), "");
					App.unblockUI("#contentMain");
					$scope.clearDataFormSearch();
					$('#formGroupButton').css('display', 'block');

					$scope.isCheckExportCommand = true;
					$scope.checkDisabledCreateCommand = true;
					$scope.isCheckCreate = true;
					$scope.checkDisabledStockView = true;
					$scope.isDisabledBtnEdit = true;
					$scope.isDisabledBtnDelete = true;
					$scope.checkDisableGetSerial = true;
					$scope.checkDisableBtnSearch = false;

					var searchInput = {
						"lovReason" : $scope.model.lovReason,
						"resourceCode" : $scope.model.resourceCodeFormSearch,
						"dtFromDate" : $scope.model.searchFromDate,
						// "txtReceiptCode" : $scope.model.txtReceiptCode,
						"stockId" : $localStorage.clientContext.sessionStockID,
					};
					App.blockUI({
						target : "#contentMain",
						boxed : true,
						message : 'loading...'
					});
					exportToInferior.searchOnclick(searchInput, function(result) {
						if (result.length > 0) {
							createDataTableGoodsResult(result);
							$scope.itemSelected = result[0];
							$scope.fillDataForSearchItems($scope.itemSelected);
							var list = [];
							for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
								list.push($scope.itemSelected.goodsList[i]);
							}
							checkDisableComboButton($scope.itemSelected);
							// checkOpenButtonPrint($scope.itemSelected);
							$scope.listAfterCreateCommand = result;
							App.unblockUI("#contentMain");
						} else {
							App.unblockUI("#contentMain");
						}
					});
				}
			});

		} else {
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			exportToInferior.exportCommandOnClick(transGoodCreateCommand, function(result) {
				if (result != null && result != undefined) {
					bootboxAlertFocus($translate.instant('vnm.ExportToInferior.save.sucsess'), "", $translate.instant("vnm.lable.vnm.name"), "");
					App.unblockUI("#contentMain");
					$scope.clearDataFormSearch();
					$('#formGroupButton').css('display', 'block');

					$scope.isCheckExportCommand = true;
					$scope.checkDisabledCreateCommand = true;
					$scope.isCheckCreate = true;
					$scope.checkDisabledStockView = true;
					$scope.isDisabledBtnEdit = true;
					$scope.isDisabledBtnDelete = true;
					$scope.checkDisableGetSerial = true;
					$scope.checkDisableBtnSearch = false;

					var searchInput = {
						"lovReason" : $scope.model.lovReason,
						"resourceCode" : $scope.model.resourceCodeFormSearch,
						"dtFromDate" : $scope.model.searchFromDate,
						// "txtReceiptCode" : $scope.model.txtReceiptCode,
						"stockId" : $localStorage.clientContext.sessionStockID,
					};
					App.blockUI({
						target : "#contentMain",
						boxed : true,
						message : 'loading...'
					});
					exportToInferior.searchOnclick(searchInput, function(result) {
						if (result.length > 0) {
							createDataTableGoodsResult(result);
							$scope.itemSelected = result[0];
							$scope.fillDataForSearchItems($scope.itemSelected);
							var list = [];
							for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
								list.push($scope.itemSelected.goodsList[i]);
							}
							checkDisableComboButton($scope.itemSelected);
							// checkOpenButtonPrint($scope.itemSelected);
							$scope.listAfterCreateCommand = result;
							App.unblockUI("#contentMain");
						} else {
							App.unblockUI("#contentMain");
						}
					});
				}
			});
		}
	}
	$scope.confirmExportCommandsNOK = function() {
		return;
	}
	$scope.isWarrantyGoods = function() {
		var transGood = {
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
		}
		exportToInferior.isWarrantyGood(transGood, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
					return false;
				} else {
					return true;
				}
			}
		});
	}

	$scope.btnOnOkDetailOnclick = function() {
		// btn on ok stock view

		if ($scope.typeAction != 'EDIT') {
			$scope.validateBefore();
		} else {
			var transGood = {
				"stockId" : $localStorage.clientContext.sessionStockID,
				"goods" : $scope.model.goodsForm,
				"internalStock" : $scope.getinternalStockObj($scope.model.internalStock),
				"state" : $scope.getStateObj($scope.model.statesForm),
				"radio" : "state",
				"typeAction" : $scope.typeAction,
				"goodsQuantity" : $scope.model.beginQuantity,
				"strFromSerialClicked" : "",
				"mblnIsFormStockImport" : false,
				"type" : "0",
				"notes" : $scope.model.noteStockView,
				"mblnInputToIssue" : true,
				"lstGoodsTransaction" : $scope.lstGoodForTransaction,
				"resourceSelected" : $scope.getResourceObj($scope.model.resourceCodeFormDetail),
				"goodTransSelected" : $scope.itemGoodDMHSelected,
			}
			if ($scope.model.goodsForm.lstTransactionSerial == undefined || $scope.model.goodsForm.lstTransactionSerial == null || $scope.model.goodsForm.lstTransactionSerial.length < 0) {
				$scope.model.goodsForm.lstTransactionSerial = $scope.model.goodsForm.lstTransSerial;
			}
			if ($scope.model.goodsForm.lstTransSerial == null || $scope.model.goodsForm.lstTransSerial == undefined || $scope.model.goodsForm.lstTransSerial.length <= 0) {
				bootboxAlertFocus($translate.instant("vnm.ExportToInferior.error.form.serial"), "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			} else if ($scope.model.beginQuantity > $scope.model.goodsForm.lstTransactionSerial.length) {
				bootboxAlertFocus('Số lượng nhập không đúng với số lượng serial', "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			} else {
				exportToInferior.onOkAction(transGood, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + result.messages), "goodsQuantity", $translate.instant("vnm.lable.vnm.name"), "");
						} else if (result.length > 0) {
							$scope.lstGoodForTransaction = result;
							$scope.goodForTransactionSelected = $scope.lstGoodForTransaction[result.length - 1];
							createTableGoodsSave($scope.lstGoodForTransaction);

							if ($scope.typeAction == 'ADD') {
								// $scope.resetPanelAddGoods();
								// $scope.clearDataFormStockView();
								$scope.isDisabledBtnEdit = false;
								$scope.isDisabledBtnDelete = false;
								$scope.checkHideBtnOnDetail = true;
								$scope.checkHideComboBtn = false;
								$scope.checkDisabledAfterCreate = true;
								$scope.isDisabledBtnDelete = false;
								$scope.isDisabledBtnEdit = false;
								$scope.checkDisabledAfterCreateAndEdit = true;
							} else if ($scope.typeAction == 'EDIT') {
								$scope.disableAdd = true;
								$scope.disableAddChooseGoods = true;
								$scope.disableAddx = true;
								$scope.disableAddViewDetail = true;

								$scope.isDisabledBtnEdit = false;
								$scope.isDisabledBtnDelete = false;
								$scope.checkHideBtnOnDetail = true;
								$scope.checkHideComboBtn = false;
								$scope.checkDisabledAfterCreate = true;
								$scope.isDisabledBtnDelete = false;
								$scope.isDisabledBtnEdit = false;
								$scope.checkDisabledAfterCreateAndEdit = true;
							}

						}
					}
				});
			}
		}

	}
	$scope.validateBefore = function() {
		var transGood = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"goods" : $scope.model.goodsForm,
			"internalStock" : $scope.getinternalStockObj($scope.model.internalStock),
			"state" : $scope.getStateObj($scope.model.statesForm),
			"radio" : "state",
			"typeAction" : $scope.typeAction,
			"goodsQuantity" : $scope.model.beginQuantity,
			"strFromSerialClicked" : "",
			"mblnIsFormStockImport" : false,
			"type" : "0",
			"notes" : $scope.model.noteStockView,
			"mblnInputToIssue" : true,
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
			"resourceSelected" : $scope.getResourceObj($scope.model.resourceCodeFormDetail),
			"goodTransSelected" : $scope.itemGoodDMHSelected,
		}
		if ($scope.model.goodsForm.lstTransactionSerial == null || $scope.model.goodsForm.lstTransactionSerial == undefined || $scope.model.goodsForm.lstTransactionSerial.length <= 0) {
			bootboxAlertFocus($translate.instant("vnm.ExportToInferior.error.form.serial"), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else if ($scope.model.beginQuantity > $scope.model.goodsForm.lstTransactionSerial.length) {
			bootboxAlertFocus('Số lượng nhập không đúng với số lượng serial', "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			exportToInferior.onOkAction(transGood, function(result) {
				if (result != null && result != undefined) {
					if (result.status == '0') {
						bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + result.messages), "goodsQuantity", $translate.instant("vnm.lable.vnm.name"), "");
					} else if (result.length > 0) {
						$scope.lstGoodForTransaction = result;
						$scope.goodForTransactionSelected = $scope.lstGoodForTransaction[result.length - 1];
						createTableGoodsSave($scope.lstGoodForTransaction);

						if ($scope.typeAction == 'ADD') {
							// $scope.resetPanelAddGoods();
							// $scope.clearDataFormStockView();
							$scope.isDisabledBtnEdit = false;
							$scope.isDisabledBtnDelete = false;
							$scope.checkHideBtnOnDetail = true;
							$scope.checkHideComboBtn = false;
							$scope.checkDisabledAfterCreate = true;
							$scope.isDisabledBtnDelete = false;
							$scope.isDisabledBtnEdit = false;
							$scope.checkDisabledAfterCreateAndEdit = true;
						} else if ($scope.typeAction == 'EDIT') {
							$scope.disableAdd = true;
							$scope.disableAddChooseGoods = true;
							$scope.disableAddx = true;
							$scope.disableAddViewDetail = true;

							$scope.isDisabledBtnEdit = false;
							$scope.isDisabledBtnDelete = false;
							$scope.checkHideBtnOnDetail = true;
							$scope.checkHideComboBtn = false;
							$scope.checkDisabledAfterCreate = true;
							$scope.isDisabledBtnDelete = false;
							$scope.isDisabledBtnEdit = false;
							$scope.checkDisabledAfterCreateAndEdit = true;
						}

					}
				}
			});
		}
	}
	// combobox btnApproCommandOnClicks
	$scope.btnApproCommandOnClicks = function() {
		$scope.isCheckApproAndReject = false;
		$('#formGroupButton').css('display', 'none');
		$scope.checkDisableBtnSearch = true;

		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			$('selector').click(function() {
				return false;
			});
		});

	}
	$scope.btnCancelAppAndRejectOnclick = function() {
		$scope.isCheckApproAndReject = true;
		$('#formGroupButton').css('display', 'block');
		$scope.checkDisableBtnSearch = false;

		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
			$scope.fillDataForSearchItems($scope.itemSelected);
			var list = [];
			for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
				list.push($scope.itemSelected.goodsList[i]);
			}
			checkDisableComboButton(rowData);
			// checkOpenButtonPrint(rowData);
			createTableGoodsSave(list);
			$scope.fillDataDialogStock(list[0]);
		});
	}

	$scope.btnApproveCommandOnClick = function() {
		bootboxConfirm($translate.instant("vnm.common.btn.approve"), $translate.instant("vnm.ExportToInferior.messages.confirm.ConfirmApprove"), $scope.confirmBtnApproveCommandOK,
				$scope.confirmBtnApproveCommandNOK);
	}
	$scope.confirmBtnApproveCommandOK = function() {
		var input = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"internalStockId" : $scope.model.internalStock,
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"txtOrderCode" : $scope.model.txtOrderCode,
			"txtNote" : $scope.model.txtNote,
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"staffName" : $localStorage.clientContext.shop.staffName,
			"staffId" : $localStorage.clientContext.shop.staffId,
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
			"status" : $scope.model.status,
			"lovAgent" : $scope.model.lovAgent.stockId,
			"lovReason" : $scope.getLovReasonCode($scope.model.lovReason),
			"shopType" : $scope.model.shopType,
			"resourceCode" : $scope.model.resourceCodeFormSearch,
			"stockTransId" : $scope.itemSelected.stockTransId,
		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		exportToInferior.approveCommandOnClick(input, function(result) {
			if (result != null && result != undefined) {

				$('#formGroupButton').css('display', 'block');
				$scope.checkDisableBtnSearch = false;
				$scope.isCheckApproAndReject = true;
				App.unblockUI("#contentMain");
				bootboxAlertFocus($translate.instant('vnm.ExportToInferior.approve.sucsess'), "", $translate.instant("vnm.lable.vnm.name"), "success");
				var searchInput = {
					"lovReason" : $scope.model.lovReason,
					"resourceCode" : $scope.model.resourceCodeFormSearch,
					"dtFromDate" : $scope.model.searchFromDate,
					// "txtReceiptCode" : $scope.model.txtReceiptCode,
					"stockId" : $localStorage.clientContext.sessionStockID,
				};
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				exportToInferior.searchOnclick(searchInput, function(result) {
					if (result.length > 0) {
						createDataTableGoodsResult(result);
						$scope.itemSelected = result[0];
						$scope.fillDataForSearchItems($scope.itemSelected);
						var list = [];
						for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
							list.push($scope.itemSelected.goodsList[i]);
						}
						checkDisableComboButton($scope.itemSelected);
						// checkOpenButtonPrint($scope.itemSelected);
						$scope.listAfterCreateCommand = result;
						App.unblockUI("#contentMain");
					} else {
						App.unblockUI("#contentMain");
					}
				});
			}
		});

	}
	$scope.confirmBtnApproveCommandNOK = function() {
		return;
	}

	$scope.btnRejectCommandOnclick = function() {
		bootboxConfirm($translate.instant("vnm.common.btn.approve"), $translate.instant("vnm.ExportToInferior.messages.confirm.ConfirmReject"), $scope.confirmBtnRejectCommandOK,
				$scope.confirmBtnRejectCommandNOK);

	}
	$scope.confirmBtnRejectCommandOK = function() {
		var input = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"internalStockId" : $scope.model.internalStock,
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"txtOrderCode" : $scope.model.txtOrderCode,
			"txtNote" : $scope.model.txtNote,
			"txtReceiptCode" : $scope.model.txtReceiptCode,
			"staffName" : $localStorage.clientContext.shop.staffName,
			"staffId" : $localStorage.clientContext.shop.staffId,
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
			"status" : $scope.model.status,
			"lovAgent" : $scope.model.lovAgent.stockId,
			"lovReason" : $scope.getLovReasonCode($scope.model.lovReason),
			"shopType" : $scope.model.shopType,
			"resourceCode" : $scope.model.resourceCodeFormSearch,
			"stockTransId" : $scope.itemSelected.stockTransId,
		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		exportToInferior.rejectCommandOnClick(input, function(result) {
			if (result != null && result != undefined) {

				$('#formGroupButton').css('display', 'block');
				$scope.checkDisableBtnSearch = false;
				$scope.isCheckApproAndReject = true;
				App.unblockUI("#contentMain");
				bootboxAlertFocus($translate.instant('vnm.ExportToInferior.reject.sucsess'), "", $translate.instant("vnm.lable.vnm.name"), "success");
				var searchInput = {
					"lovReason" : $scope.model.lovReason,
					"resourceCode" : $scope.model.resourceCodeFormSearch,
					"dtFromDate" : $scope.model.searchFromDate,
					// "txtReceiptCode" : $scope.model.txtReceiptCode,
					"stockId" : $localStorage.clientContext.sessionStockID,
				};
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				exportToInferior.searchOnclick(searchInput, function(result) {
					if (result.length > 0) {
						createDataTableGoodsResult(result);
						$scope.itemSelected = result[0];
						$scope.fillDataForSearchItems($scope.itemSelected);
						var list = [];
						for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
							list.push($scope.itemSelected.goodsList[i]);
						}
						checkDisableComboButton($scope.itemSelected);
						// checkOpenButtonPrint($scope.itemSelected);
						$scope.listAfterCreateCommand = result;
						App.unblockUI("#contentMain");
					} else {
						App.unblockUI("#contentMain");
					}
				});
			}
		});

	}
	$scope.confirmBtnRejectCommandNOK = function() {
		return;
	}
	// end combobox
	// combobox print
	$scope.btnPrintOnClicks = function() {
		$scope.isCheckPrintComboButton = false;
		$('#formGroupButton').css('display', 'none');
		$scope.checkDisableBtnSearch = true;

		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			$('selector').click(function() {
				return false;
			});
		});
		checkOpenButtonPrints($scope.itemSelected.status);
	}
	// Button In
	// in lenh
	$scope.btnPrintCommandOnClick = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		var templateValueSearch = {
			"code" : $scope.itemSelected.stockTransId,
			"name" : $localStorage.clientContext.sessionStockID,
		}
		exportToInferior.getTemplateValue(templateValueSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.btnCancelComboPrintOnclick();
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
						"deliverUserName" : StringUtilNVL(templateValue.deliverUserName),
						"fileTempName" : 'TemplateImportExport',
						"fileType" : '.xlsx'
					};

					exportToInferior.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {

							App.unblockUI("#contentMain");
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
		});
	}

	// in phieu
	$scope.btnPrintNormalOnclick = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		var templateValueSearch = {
			"code" : $scope.itemSelected.stockTransId,
			"name" : $localStorage.clientContext.sessionStockID,
		}
		exportToInferior.getTemplateValue(templateValueSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.btnCancelComboPrintOnclick();
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
						"deliverUserName" : StringUtilNVL(templateValue.deliverUserName),
						"fileTempName" : 'TemplateStockInferiorExport',
						"fileType" : '.xlsx'
					};

					exportToInferior.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
		});
	}
	// in phieu bao hanh
	$scope.btnPrintWarrantyOnclick = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		var templateWarrantyValueSearch = {
			"stockTransId" : $scope.itemSelected.stockTransId,
			"name" : $localStorage.clientContext.sessionStockID,
		}
		exportToInferior.getTemplateWarrantyValue(templateWarrantyValueSearch, function(result) {
			if (result != null && result != undefined) {

				if (result[2] == '-1') {
					bootboxAlertFocus("Không có dữ liệu cho báo cáo!", "", $translate.instant("vnm.lable.vnm.name"), "");
					App.unblockUI("#contentMain");
				} else {
					$scope.btnCancelComboPrintOnclick();
					var date = new Date()
					var datemoment = moment(dateReport);
					var dateReport = momentObj.format('DD/MM/YYYY');

					var ReportWarranty = {
						"strShopName" : result[0],
						"strDeliverShopName" : result[1],
						"strWarrantyActionCode" : result[2],
						"dateReport" : dateReport,
						"fileTempName" : 'WarrantyReceiptReportVN',
						"fileType" : '.xlsx'
					};

					exportToInferior.exportFile(encodeURI(JSON.stringify(ReportWarranty)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
		});

	}
	$scope.btnCancelComboPrintOnclick = function() {
		$scope.isCheckPrintComboButton = true;
		$('#formGroupButton').css('display', 'block');
		$scope.checkDisableBtnSearch = false;

		$('#resultSubTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
			$scope.fillDataForSearchItems($scope.itemSelected);
			var list = [];
			for (var i = 0; i < $scope.itemSelected.goodsList.length; i++) {
				list.push($scope.itemSelected.goodsList[i]);
			}
			checkDisableComboButton(rowData);
			// checkOpenButtonPrint(rowData);
			createTableGoodsSave(list);
			$scope.fillDataDialogStock(list[0]);
		});
	}
	// end

	$scope.validateInput = function() {
		// xu ly
		if ($scope.model.fShopCode == null || $scope.model.fShopCode == '' || $scope.model.fShopCode == undefined || $scope.model.shopId == undefined) {
			bootboxAlertFocus($translate.instant('vnm.ExportToInferior.error.form.lovAgent'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
			bootboxAlertFocus($translate.instant('vnm.ExportToInferior.error.form.goodfortransaction'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if ($scope.model.txtReceiptCode == null || $scope.model.txtReceiptCode == '' || $scope.model.txtReceiptCode == undefined) {
			bootboxAlertFocus($translate.instant('vnm.ExportToInferior.error.form.txtReceiptCode'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if ($scope.model.lovReason == null || $scope.model.lovReason == '' || $scope.model.lovReason == undefined) {
			bootboxAlertFocus($translate.instant('vnm.ExportToInferior.error.form.lovReason'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		return true;
	}

	function checkOpenButtonPrints(data) {
		if (data == 1 || data == 2) {
			$scope.isDisablePrintCommand = false;
			$scope.isDisablePrintNormal = true;
			$scope.isDisablePrintWarranty = true;
		} else {
			$scope.isDisablePrintWarranty = false;
			$scope.isDisablePrintCommand = false;
			$scope.isDisablePrintNormal = false;
		}
	}
	$scope.btnSerialOnClicks = function() {
		$scope.onSearchGetSerialList();

	}

	$scope.GetTableSearchSerialShop = [];
	$scope.onSearchGetSerialList = function() {
		overLoading();
		if ($scope.itemGoodDMHSelected == null || $scope.itemGoodDMHSelected == undefined || $scope.itemGoodDMHSelected.length <= 0) {
			$scope.itemGoodDMHSelected = $scope.itemSelected.goodsList[0];
		} else {

		}
		var data = {
			"stockTransId" : $scope.itemSelected.stockTransId,
			"goodsIdSerial" : $scope.itemGoodDMHSelected.goodsId,
			"stateIdSerial" : $scope.itemGoodDMHSelected.stateId,
		}

		exportToInferior.getSearchSerialList(data, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");

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
					createDataTableGoodsSerial($scope.GetTableSearchSerialShop);
					/* $scope.disableBtnserian=false; */
					/* $scope.showModalFunction("modalSerialList"); */
				} else {
					$scope.GetTableSearchSerialShop = result;
					$scope.model.ddTotal = "0";
					createDataTableGoodsSerial($scope.GetTableSearchSerialShop);
					/* $scope.disableBtnserian=true; */
					/* $scope.showModalFunction("modalSerialList"); */
				}
			} else {
				/* bootbox.alert($translate.instant("vnm.InputFromCenter.mess.error.onSearch")); */
				$scope.model.ddTotal = "0";
				$scope.GetTableSearchSerialShop = result;
				createDataTableGoodsSerial($scope.GetTableSearchSerialShop);
				/* $scope.disableBtnserian=true; */
			}
			closeOverLay();
			$scope.showModalFunction("viewSerialExportToInferior");
		});

	}

	// create table serial trong chi tiet
	function createDataTableGoodsSerial(dataItem) {
		oTableItemSerial = $('#tableViewSerialPrintWarranty').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : false,
			"paging" : true,
			"bLengthChange" : false,
			"bPaginate" : true,
			"bSort" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"info" : true,
			"scrollX" : true,
			"columns" : [ {
				"mData" : "goodsid",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + $scope.getGoodsName(StringUtilNVL(data)) + "</div>";
				}
			}, {
				"mData" : "goodsid",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + $scope.getGoodsCode(StringUtilNVL(data)) + "</div>";
				}
			}, {
				"mData" : "from_serial",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "to_serial",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
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
				}
			}
		});

	}
	//

	// update combobox ->f9
	// model.lovAgent
	$scope.model.lovAgent = {};
	$("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.initSearchShop = '';
			$scope.showModalFunction("modalListShop");
			$scope.itemSelectedListShop = $scope.listgetChildsStockFormInferior[0];
			createDataTableListShop($scope.listgetChildsStockFormInferior);
		} else if (code == '13') {
			$scope.onblurShopCode();
		} else {
			if ($scope.model.fShopCode == '') {
				$scope.model.fShopName = '';
				$scope.model.shopId = '';
				$scope.model.lovAgent = {};
			}
		}
	});

	$scope.initSearchShop = "";

	$scope.onblurShopCode = function() {
		var check = "0";
		if ($scope.model.fShopCode != undefined && $scope.model.fShopCode != "") {
			for (var i = 0; i < $scope.listgetChildsStockFormInferior.length; i++) {
				if ($scope.model.fShopCode.trim().toUpperCase() == $scope.listgetChildsStockFormInferior[i].code.toUpperCase()) {
					$scope.model.fShopCode = $scope.listgetChildsStockFormInferior[i].code.trim();
					$scope.model.fShopName = $scope.listgetChildsStockFormInferior[i].name.trim();
					$scope.model.shopId = $scope.listgetChildsStockFormInferior[i].stockId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListShop");
				$scope.itemSelectedListShop = null;
				createDataTableListShop($scope.listgetChildsStockFormInferior);
			}

		} else {
			$scope.model.fShopCode = "";
			$scope.model.fShopName = "";
			$scope.model.shopId = "";
			document.getElementById('fShopCode').title = '';
			document.getElementById('fShopName').title = '';
			$scope.model.lovAgent = {};
		}
	}

	// create table mat hang
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
					return "<div data-toggle='tooltip' class='text-wrap width-500' title='" + data + "'>" + data + "</div>";
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
		$scope.model.fShopCode = $scope.itemSelectedListShop.code.trim();
		$scope.model.shopId = $scope.itemSelectedListShop.stockId;
		$scope.model.fShopName = $scope.itemSelectedListShop.name.trim();
		$scope.model.lovAgent = {
			'code' : $scope.model.fShopCode,
			'name' : $scope.model.fShopName,
			'stockId' : $scope.model.shopId,
		}
		document.getElementById('fShopCode').title = $scope.model.fShopCode;
		document.getElementById('fShopName').title = $scope.model.fShopName;
		$scope.hideModalFunction("modalListShop");
	}

	$scope.dialogListShopActionBack = function() {
		$scope.hideModalFunction("modalListShop");
		if ($scope.model.fShopName != undefined && $scope.model.fShopName.trim() == '') {
			angular.element(document.getElementById("fShopCode")).focus();
		}
	}

	// end

});

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}

function getCurrentDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();

	return today = dd + '/' + mm + '/' + yyyy;
}

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}
function bootboxAlertFocus(message, focusId, title, icon) {
	var mesIcon = 'fa fa-exclamation-circle';
	if (icon != null && icon != undefined && icon != '') {
		if (icon == 'success') {
			mesIcon = 'fa fa-check-circle'
		}
	}
	bootbox.alert({
		size : "medium",
		message : "<i class='" + mesIcon + "' style='font-size:20px; color:orange; margin-right:20px;'></i>" + message,
		title : title,
	}).on('hidden.bs.modal', function(event) {
		var myEl = document.getElementById(focusId);
		var angularEl = angular.element(myEl);
		angularEl.focus();
	}).find(".modal-dialog").css({
		// 'background-color': '#f99',
		// 'font-weight' : 'bold',
		// 'color': '#F00',
		// 'font-size': '2em',
		'width' : '450px',
		'margin-top' : function() {
			var w = $(window).height();
			var h = w / 5;
			return h + "px";
		}
	});
};
