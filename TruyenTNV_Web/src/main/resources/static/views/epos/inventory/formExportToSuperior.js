var EXPORT_ABOVE_STOCK = "ExportAboveStock";
app_vnm.factory('formExportToSuperior', function($http, $translate) {
	return {
		getReceiptNoSeq : function(callback) {
			var url = eim_url + '/epos/inventory/formStockImportFromPartner/getReceiptNoSeq';
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListReason : function(callback) {
			var url = eim_url + '/epos/inventory/formExportToSuperior/getListReason';
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
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

		getInternalStock : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getInternalStock";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
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

		getStockSerialByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStockSerialByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		onOkAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/pnlTransactionGoodsDetail/onAction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		onFSaveAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/formExportToSuperior/onSave";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(data, "");
			});
		},

		validTransActionCode : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/validTransActionCode";
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

		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getTemplateValue";
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

		getSerialListInStock : function(data, callback) {
			var url = eim_url + "/epos/inventory/checkListSerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		}

	}
});

app_vnm
		.controller('ctrl-formExportToSuperior',
				function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
						$localStorage, formExportToSuperior) {

					window.document.title = $translate.instant('vnm.FormExportToSuperior.page.title');

					$scope.model = {};
					$scope.limitCbb = 100;
					$scope.itemGoodSelected = [];
					$scope.validationOptions = {
						debounce : 1500,
						preValidateFormElements : true,
					}
					var mIsModGoods = false;
					var mIsAddGoods = false;
					var checkWrite = false;
					$scope.ReceiveStockSource = [];
					// Lay thong tin kho nhan
					/*
					 * $scope.getAllReceiveStock = function() { formExportToSuperior.getAllReceiveStock(function(result) { if (result != null && result !=
					 * undefined) { if (result.status == '0') { bootbox.alert(result.messages); } else if (result.length > 0) { $scope.ReceiveStockSource =
					 * result; } } }); }
					 */

					// Lay ma phieu
					$scope.getReceiptNoSeq = function() {
						formExportToSuperior.getReceiptNoSeq(function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									$scope.model.receiptCode = result[0];
								}
							}
						});
					}

					// su kien khi chon mat hang tren form
					$scope.onChooseGoodsForm = function() {
						$scope.model.goodsForm = $scope.model.goodsForm;
						$scope.refreshDetailSerialForGoods();
					}

					// lam moi lai cac gia tri trong dialog serial khi chon lai mat hang
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

					// load lai danh sach hang khi chon nguon hang
					$scope.onChooseResourceCodeForm = function() {
						$scope.loadLstGoodsForm();
					}

					// Lay danh sach hang hoa
					$scope.loadLstGoodsForm = function() {
						var resourceCodeForm = {
							"code" : $scope.model.resourceCodeForm.code,
							"name" : "",
						}
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'Loading...'
						});
						formExportToSuperior.getExistedGoods(resourceCodeForm,
								function(result) {
									if (result != null && result != undefined && result.status != '0' && result.length > 0) {
										$scope.lstGoodsForm = result;
										$scope.model.goodsForm = '';
										$scope.model.statesForm = $scope.lstStatesForm[0];
										App.unblockUI("#contentMain");
									} else {
										bootboxAlertFocus($translate.instant('vnm.FormStockImportFromPartner.error'), "", $translate
												.instant("vnm.lable.vnm.name"), "");
										$scope.model.goodsForm = '';
										$scope.model.statesForm = $scope.lstStatesForm[0];
										App.unblockUI("#contentMain");
									}
								});
					}

					// load panel button
					$scope.onLoadPnlButton = function() {
						$scope.disableAddViewDetail = true;
						$scope.isDisabledBtnAdd = false;
						$scope.isDisabledBtnEdit = false;
						$scope.isDisabledBtnDelete = false;

						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
					}

					$scope.lstGoodsResourceForm = []; // Nguon hang tren form
					$scope.lstInternalStockForm = []; // Loai hang hoa tren form
					$scope.lstGoodsForm = [] // Danh sach hang hoa tren form
					$scope.lstStatesForm = [] // Danh sach trang thai tren form
					// Lay gia tri mac dinh khi load form
					$scope.loadDefault = function() {
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'Loading...'
						});
						$scope.disableAdd = true; // disable btn xem kho/ so luong/ trang thai
						$scope.disableAddx = true; // disable nguon hang/loai hang
						$scope.disableAddViewDetail = true; // disable btn xem chi tiet
						$scope.disableAddChooseGoods = true; // disable cbb chon hang
						$scope.disableReason = true;
						$scope.isNotSearch = false;
						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
						$('#pnlButtonOKAfterSave').css('display', 'none');
						$scope.isDisabledBtnAdd = false;
						$scope.isDisabledBtnEdit = true;
						$scope.isDisabledBtnDelete = true;
						if ($localStorage.clientContext.stockParent === null) {
							var url = window.location.href;
							url = url.substring(0, url.indexOf("/"));
							$window.open(url + '/noAccessImport', '_top');
							App.unblockUI("#contentMain");
						} else {
							$scope.ReceiveStockSource = [ $localStorage.clientContext.stockParent ];
							$scope.model.stock = $scope.ReceiveStockSource[0];
							formExportToSuperior.getInternalStock(function(result) {
								if (result != null && result != undefined && result.status != '0' && result.length > 0) {
									$scope.lstInternalStockForm = result;
									$scope.model.stockInternalTypeForm = $scope.lstInternalStockForm[0];

									var sessionValue = {
										"sessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
										"sessionShopType" : $localStorage.clientContext.shop.shopType,
										"isForm" : "1",
									};

									formExportToSuperior.getVctResourceList(sessionValue, function(result) {
										if (result != null && result != undefined && result.status != '0' && result.length > 0) {
											$scope.lstGoodsResourceForm = result;
											$scope.model.resourceCodeForm = $scope.lstGoodsResourceForm[0];
											$scope.loadLstGoodsForm();

											formExportToSuperior.getExistedStates(function(result) {
												if (result != null && result != undefined && result.status != '0' && result.length > 0) {
													$scope.lstStatesForm = result;
													$scope.model.statesForm = $scope.lstStatesForm[0];

													formExportToSuperior.getReceiptNoSeq(function(result) {
														if (result != null && result != undefined) {
															if (result.status == '0') {
																bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
															} else if (result.length > 0) {
																$scope.model.receiptCode = result[0];
																formExportToSuperior.getListReason(function(result) {
																	if (result != null && result != undefined && result.status === '0') {
																		bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
																		App.unblockUI("#contentMain");

																	} else {

																		closeOverLay();
																		$scope.lstReason = result;
																		$scope.model.reason = $scope.lstReason[0];
																		$scope.onLoadPnlButton();
																		$('#pnlButtonOKAfterSave').css('display', 'none');

																		$scope.isDisabledBtnEdit = true;
																		$scope.isDisabledBtnDelete = true;

																		var lstNull = [];
																		createTableGoodsSave(lstNull);
																		App.unblockUI("#contentMain");
																	}
																});
															} else {
																App.unblockUI("#contentMain");
															}
														} else {
															App.unblockUI("#contentMain");
														}
													});
												}
											});
										} else {
											App.unblockUI("#contentMain");
										}
									});
								} else {
									App.unblockUI("#contentMain");
								}
							});
						}
					}

					// khoi tao
					var initialize = function() {
						overLoading();
						$scope.loadDefault();
						closeOverLay();
					}

					initialize();

					$scope.typeAction = '';
					$scope.lstGoodForTransaction = [];
					$scope.goodForTransactionSelected = {};
					// button Them
					$scope.btnAddOnclick = function() {
						$scope.typeAction = 'ADD';
						$scope.resetPanelAddGoods();
						mIsAddGoods = true;
						if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
							$scope.disableAddx = false;
						}
						$scope.disableAddChooseGoods = false;
						$scope.disableAddViewDetail = true;

						if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined
								&& ($scope.goodForTransactionSelected.goodsId != null || $scope.goodForTransactionSelected.goodsId != undefined)) {
							$scope.resetGoodsAdd();
						}
						$('#pnlButtonAction').css('display', 'none');
						$('#pnlButtonOK').css('display', 'block');
					}

					// button Them khi chon xong serial
					$scope.btnAddOnclickClone = function() {
						$scope.typeAction = 'ADD';
						$scope.resetPanelAddGoods();
						if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
							$scope.disableAddx = false;
						}
						$scope.disableAddChooseGoods = false;
						$scope.disableAddViewDetail = false;

						$('#pnlButtonAction').css('display', 'none');
						$('#pnlButtonOK').css('display', 'block');
					}

					// Button Sua
					$scope.btnEditOnclick = function() {
						if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined) {
							$scope.disableAdd = false;
							$scope.disableAddChooseGoods = true;
							$scope.disableAddViewDetail = false;
							$scope.typeAction = 'EDIT';
							$('#pnlButtonAction').css('display', 'none');
							$('#pnlButtonOK').css('display', 'block');
							mIsModGoods = true;
						}
					}

					// Button Xoa
					$scope.btnDeleteOnclick = function() {
						$scope.typeAction = 'DELETE';
						bootboxConfirm($translate.instant("vnm.common.btn.delete"), $translate.instant("vnm.messages.confirm.delete"),
								$scope.confirmDeleteGoodsForTransOK, $scope.confirmDeleteGoodsForTransNOK);
					}

					// Xac nhan xoa
					$scope.confirmDeleteGoodsForTransOK = function() {
						angular.forEach($scope.lstGoodForTransaction, function(objectGoodsTrans, indexS) {
							if (objectGoodsTrans.goodsId == $scope.goodForTransactionSelected.goodsId
									&& objectGoodsTrans.stateId == $scope.goodForTransactionSelected.stateId) {
								$scope.lstGoodForTransaction.splice(indexS, 1);
							}
						});

						createTableGoodsSave($scope.lstGoodForTransaction);
						if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
							$scope.isDisabledBtnEdit = true;
							$scope.isDisabledBtnDelete = true;
						}
						$scope.model.goodsForm = '';
						$scope.model.statesForm = $scope.lstStatesForm[0];
						$scope.model.goodQuantity = '';
					}

					// Xac nhan khong xoa
					$scope.confirmDeleteGoodsForTransNOK = function() {

					}

					// Button Chap nhan
					$scope.btnOkOnclick = function() {

						var transGood = {
							"stockId" : $localStorage.clientContext.sessionStockID,
							"goods" : $scope.model.goodsForm,
							"internalStock" : $scope.model.stockInternalTypeForm,
							"state" : $scope.model.statesForm,
							"radio" : "state",
							"typeAction" : $scope.typeAction,
							"goodsQuantity" : $scope.model.goodQuantity,
							"strFromSerialClicked" : EXPORT_ABOVE_STOCK,
							"mblnIsFormStockImport" : false,
							"type" : "0",
							"notes" : $scope.model.goodNote,
							"mblnInputToIssue" : true,
							"lstGoodsTransaction" : $scope.lstGoodForTransaction,
							"resourceSelected" : $scope.model.resourceCodeForm,
							"goodTransSelected" : $scope.goodForTransactionSelected,
						}

						formExportToSuperior.onOkAction(transGood, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									$scope.lstGoodForTransaction = result;
									$scope.goodForTransactionSelected = $scope.lstGoodForTransaction[result.length - 1];
									createTableGoodsSave($scope.lstGoodForTransaction);

									if ($scope.typeAction == 'ADD') {
										$scope.resetPanelAddGoods();
										$scope.resetGoodsAdd();
										$scope.isDisabledBtnEdit = false;
										$scope.isDisabledBtnDelete = false;
									} else if ($scope.typeAction == 'EDIT') {
										$scope.disableAdd = true;
										$scope.disableAddChooseGoods = true;
										$scope.disableAddx = true;
										$scope.disableAddViewDetail = true;

										$('#pnlButtonAction').css('display', 'block');
										$('#pnlButtonOK').css('display', 'none');
									}
								}
							}
						});
					}

					// reset panel button
					$scope.resetPanelAddGoods = function() {
						$scope.disableAdd = false;
						$scope.disableAddChooseGoods = false;
						$scope.disableAddx = true;
						$scope.disableAddViewDetail = true;
					}

					// reset mat hang da chon
					$scope.resetGoodsAdd = function() {
						$scope.model.goodsForm = {};
						$scope.model.goodsFormName = '';
						$scope.model.goodQuantity = '';
						$scope.model.goodNote = '';
					}

					// Button Bo qua
					$scope.btnCancelOnclick = function() {
						$scope.disableAdd = true;
						$scope.disableAddChooseGoods = true;
						$scope.disableAddx = true;
						$scope.disableAddViewDetail = true;
						if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
							$scope.onSelectGoodsForAdd();
						}
						mIsAddGoods = false;
						mIsModGoods = false;
						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
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
								"mData" : "stateName",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "unitName",
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

						$('#tableGoodsForm tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableItemXY.row(this).data();
							oTableItemXY.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.goodForTransactionSelected = rowData;
							if ($scope.disableAdd) {
								$scope.onSelectGoodsForAdd();
							}
						});
					}

					// Chon mat hang va so luong trong dialog xem kho
					$scope.onSelectGoodsForAdd = function() {
						$scope.model.resourceCodeForm = $scope.goodForTransactionSelected.resourceSelected;
						$scope.model.stockInternalTypeForm = $scope.goodForTransactionSelected.internalStockSelected;
						$scope.model.goodsForm = $scope.goodForTransactionSelected.goodsSelected;
						$scope.model.goodsFormName = $scope.goodForTransactionSelected.goodsSelected.name;
						$scope.model.statesForm = $scope.goodForTransactionSelected.stateSelected;
						$scope.model.goodQuantity = $scope.goodForTransactionSelected.quantity;
						$scope.model.goodNote = $scope.goodForTransactionSelected.notes;
					}

					// Luu du lieu
					$scope.btnFSaveOnclick = function() {
						if (!$scope.fValidateEmpty())
							return;
						formExportToSuperior.validTransActionCode($scope.model.receiptCode, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus($translate.instant("vnm.stock_export_to_center.error.form." + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
								} else if (result == 'ParamsOK') {
									if (mIsModGoods || mIsAddGoods) {
										var strMessage = '';
										if (mIsModGoods) {
											strMessage = $translate.instant("vnm.FormExportToSuperior.saveModGoods");
										} else {
											strMessage = $translate.instant("vnm.FormExportToSuperior.saveAddGoods");
										}
										bootboxConfirm3($translate.instant("vnm.common.btn.write"), strMessage, $scope.btnFSaveOnclickConfirmOK,
												$scope.btnFSaveOnclickConfirmCANCEL,$scope.btnFSaveOnclickConfirmNOK);
									} else {
										bootboxConfirm($translate.instant("vnm.common.btn.write"), $translate.instant("vnm.FormExportToSuperior.messageSave"),
												$scope.btnFSaveOnclickConfirmOK2, $scope.btnFSaveOnclickConfirmCANCEL);
									}

								}
							}
						});
					}
					$scope.actionChooseGodds = function(value) {
						if (undefined != value && '' != value) {
							$scope.disableAddViewDetail = false;
						}

					}
					$scope.stockTransId = '';
					// Xac nhan luu du lieu
					$scope.btnFSaveOnclickConfirmOK = function() {
						overLoading();
						$scope.typeAction = 'ADD';

						var transGood = {
							"stockId" : $localStorage.clientContext.sessionStockID,
							"goods" : $scope.model.goodsForm,
							"internalStock" : $scope.model.stockInternalTypeForm,
							"state" : $scope.model.statesForm,
							"radio" : "state",
							"typeAction" : $scope.typeAction,
							"goodsQuantity" : $scope.model.goodQuantity,
							"strFromSerialClicked" : EXPORT_ABOVE_STOCK,
							"mblnIsFormStockImport" : false,
							"type" : "0",
							"notes" : $scope.model.goodNote,
							"mblnInputToIssue" : true,
							"lstGoodsTransaction" : $scope.lstGoodForTransaction,
							"resourceSelected" : $scope.model.resourceCodeForm,
							"goodTransSelected" : $scope.goodForTransactionSelected,
							"blExecute" : 'WRITE',

						}

						formExportToSuperior.onOkAction(transGood, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
								} else if (result.length > 0) {
									checkWrite = true;
									$scope.onSaveDataGeneral();
								}
							}
						});

					}

					// Khong luu du lieu
					$scope.btnFSaveOnclickConfirmNOK = function() {
						overLoading();
						$scope.typeAction = 'ADD';
						$scope.onSaveDataGeneral();
						closeOverLay();
					}
					$scope.btnFSaveOnclickConfirmCANCEL = function() {
					}
					// Khong luu du lieu
					$scope.btnFSaveOnclickConfirmOK2 = function() {
						overLoading();
						$scope.typeAction = 'ADD';
						$scope.onSaveDataGeneral();
						closeOverLay();
					}

					$scope.onSaveDataGeneral = function() {
						overLoading();
						var mpStockTrans = {
							"stockId" : $localStorage.clientContext.sessionStockID,
							"delivererStockID" : $scope.model.stock.stockId,
							"type" : '1',
							"reasonID" : $scope.model.reason.reasonId,
							"execCode" : $scope.model.receiptCode,
							"execNote" : $scope.model.note,
							"internalStockId" : $scope.model.stockInternalTypeForm.code,
							"resourceCode" : $scope.model.resourceCodeForm.code,
							"lstGoodsTransaction" : $scope.lstGoodForTransaction,
							"reasonCode" : "NCD",
							"execStaffID" : $localStorage.clientContext.shop.staffId,

						}
						formExportToSuperior.onFSaveAction(mpStockTrans, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
								} else {
									$scope.stockTransId = result.listResult;
									bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.SaveSuccess'), "", $translate.instant("vnm.lable.vnm.name"),
											"");
									$('#pnlButtonAction').css('display', 'block');
									$('#pnlButtonOK').css('display', 'none');

									$('#pnlButtonOKAfterSave').css('display', 'block');
									$('#pnlButtonOKBeforeSave').css('display', 'none');
									if (checkWrite) {
										checkWrite = false;
										$scope.btnOkOnclick();
									}
									$scope.disableAfterSave = true;
									$scope.disableAdd = true;
									$scope.disableAddChooseGoods = true;
									$scope.disableAddx = true;
									$scope.disableAddViewDetail = true;
									$scope.isDisabledBtnAdd = true;
									$scope.isDisabledBtnEdit = true;
									$scope.isDisabledBtnDelete = true;
									closeOverLay();
								}
							}
							closeOverLay();
						});
					}
					// Button Nhap lai
					$scope.btnFReInputOnclick = function() {
						$scope.disableAfterSave = false;
						$scope.isDisabledBtnAdd = false;
						$scope.model.receiptCode = '';
						// $scope.model.receivePerson = '';
						$scope.model.note = '';
						$scope.resetGoodsAdd();
						$scope.typeAction = '';
						$scope.lstGoodForTransaction = [];
						$scope.goodForTransactionSelected = {};
						createTableGoodsSave($scope.lstGoodForTransaction);

						$('#pnlButtonOKAfterSave').css('display', 'none');
						$('#pnlButtonOKBeforeSave').css('display', 'block');
					}

					// Validate gia tri de trong
					$scope.fValidateEmpty = function() {
						if ($scope.model.receiptCode == null || $scope.model.receiptCode == undefined || $scope.model.receiptCode == '') {
							bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.inputReceiptCode'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.stock == null || $scope.model.stock == undefined || $scope.model.stock.stockId == '') {
							bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.inputStock'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.reason == null || $scope.model.reason == undefined || $scope.model.reason == '') {
							bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.inputReason'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
							bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.inputProduct'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}

					// Button In
					$scope.btnFPrintOnclick = function() {
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'loading...'
						});

						var templateValueSearch = {
							"code" : $scope.stockTransId,
							"name" : $localStorage.clientContext.sessionStockID,
						}
						formExportToSuperior.getTemplateValue(templateValueSearch, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									var templateValue = result[0];
									var strDeliverStockName = "";
									if (templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined
											&& templateValue.deliveyShopCode != '') {
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
										"fileTempName" : 'TemplateStockExport_vn',
										"fileType" : '.xlsx'
									};

									formExportToSuperior.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
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
						});
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
								"sInfo" : "",
								"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
								"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
								"sInfoEmpty" : "",
								"sInfoFiltered" : "",
								"sLengthMenu" : "_MENU_",
								"sSearch" : "",
								"oPaginate" : {
									"sFirst" : "",
									"sLast" : "",
									"sNext" : "",
									"sPrevious" : "",
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

						formExportToSuperior.getGoodsQuantityByCondition(cond, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else {
									$scope.quantities = result;
									// Bang so luong ...
									createDataTableGoodsQuantities($scope.quantities);
									$scope.itemGoodQuantitySelected = $scope.quantities[0];

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
						formExportToSuperior.getInternalStock(function(result6) {
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
							formExportToSuperior.getVctResourceList(sessionValue, function(result5) {
								if (result5 != null && result5 != undefined && result5.status != '0') {
									$scope.lstGoodsResource = result5;
								} else {
									$scope.lstGoodsResource = [];
								}

								formExportToSuperior.getExistedStates(function(result) {
									if (result != null && result != undefined && result.status != '0') {
										$scope.pStatesList = result;
									} else {
										$scope.pStatesList = [];
									}

									formExportToSuperior.getExistedGoodsGroups(function(result1) {
										if (result1 != null && result1 != undefined && result1.status != '0') {
											$scope.pGoodsGroupsList = result1;
										} else {
											$scope.pGoodsGroupsList = [];
										}

										var resourceCodeForm = {
											"code" : $scope.model.resourceCodeForm.code,
											"name" : "",
										}
										formExportToSuperior.getExistedGoods(resourceCodeForm, function(result2) {
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
											formExportToSuperior.getStocksTree(shopStaff, function(result3) {
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

												if ($scope.disableAddChooseGoods && !$scope.disableAdd) {
													$scope.disableBtnInput = true;
												} else {
													$scope.disableBtnInput = false;
												}

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
						angular.element($("#tblListGoods_filter").find("input")[0]).focus();
						angular.element($("#tblListShop_filter").find("input")[0]).focus();
						angular.element($("#tblListStaff_filter").find("input")[0]).focus();
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

					// su kien khi cho loai hang hoa
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

					// su kien khi chon nguon hang
					$scope.onChooseResourceCode = function() {
						$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
					}

					// Lay danh sach hang hoa theo dieu kien
					$scope.getGoodsListByCondition = function(radio) {
						var cond = {
							"stockId" : $localStorage.clientContext.sessionStockID,
							"resourceCode" : $scope.model.resourceCode.code,
							"internalStock" : $scope.model.stockInternalType.code,
							"checkWarranty" : "false",
							"radio" : radio,
						};

						formExportToSuperior.getGoodsListByCondition(cond, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
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
							$scope.disableAddViewDetail = false;
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
							"scrollY" : "200",
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
							"scrollY" : "200",
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

						formExportToSuperior.getStockSerialByCondition(serialSearch, function(result) {
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

					// Button chi tiet
					$scope.viewDetail = function() {
						var lstNull = [];
						$scope.lstSerialSETC = [];
						$scope.lstSerialSETCTmp = [];
						$scope.lstTableSerialsSETCTmp = [];
						createTableDDSerialSingleSETC(lstNull);
						if ($scope.typeAction == 'EDIT') {
							if ($scope.itemGoodSelected.lstTransactionSerial != null && $scope.itemGoodSelected.lstTransactionSerial != undefined
									&& $scope.itemGoodSelected.lstTransactionSerial.length > 0) {
								createTableDDSerialSingleSETC2($scope.itemGoodSelected.lstTransactionSerial);
								$scope.model.showRemoveSerial = false;
								$scope.model.goodsForm.lstTransactionSerial.forEach(function(item) {
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
								});
							} else {
								createTableDDSerialSingleSETC2(lstNull);
								$scope.model.showRemoveSerial = true;
							}
						} else {
							createTableDDSerialSingleSETC2(lstNull);
							$scope.model.showRemoveSerial = true;
						}
						$scope.model.number = $scope.model.goodQuantity;
						$scope.model.showAddSerial = true;
						$scope.showModalFunction("modalStockDetail");
					}

					$scope.lstSerialSETCTmp = [];
					$scope.lstSerialSETC = [];
					$scope.lstTableSerialsSETC = [];
					$scope.lstTableSerialsSETCTmp = [];
					$scope.fileSuccess = []
					$scope.lstSerialSETCInStock = [];

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
								var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0009');
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
						item.headers = {
							Authorization : 'Bearer ' + $localStorage.clientContext.token
						};
						var form_data = new FormData();
						item.formData.push(form_data);
					}

					// on item upload success
					uploaderListDetail.onSuccessItem = function(fileItem, response, status, headers) {
						if (response.length > 0) {
							$scope.fileSuccess = [];
							var zIndexmodalStockDetail = $("#modalStockDetail").css("z-index");
							var zIndexDialogModal = $("#modalAddSerial").css("z-index");

							$("#modalStockDetail").css('zIndex', 50);
							$("#modalAddSerial").css('zIndex', 100);
							App.blockUI({
								target : "#contentMain",
								boxed : true,
								message : 'Uploading...'
							});
							for (var i = 0; i < response.length; i++) {
								$scope.fileSuccess.push(response[i]);
								if (i == response.length - 1) {
									$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
									$("#modalAddSerial").css('zIndex', zIndexDialogModal);
									App.unblockUI("#contentMain");
								}
							}
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
					// upload file
					var zIndexmodalStockDetail = $("#modalStockDetail").css("z-index");
					var zIndexDialogModal = $("#modalAddSerial").css("z-index");
					$scope.uploadAllFile = function(uploaderIn) {
						//overLoading();

						bootbox.confirm({
							title : $translate.instant("vnm.lable.vnm.name"),
							message : "<i class='fa fa-question-circle' style='font-size:20px; color:orange; margin-right:20px;'></i>"
									+ $translate.instant('vnm.FormStockImportFromPartner.messageAccept'),
							buttons : {
								confirm : {
									label : $translate.instant('vnm.dialogButtonDetail.label.buttonOk'),
									className : 'btn-success'
								},
								cancel : {
									label : $translate.instant('vnm.dialogButtonDetail.label.buttonRject'),
									className : 'btn-danger'
								}
							},
							callback : function(result) {

								if (result) {
									$("#modalStockDetail").css('zIndex', 50);
									$("#modalAddSerial").css('zIndex', 100);

									var serialSearch = {
										"goodsId" : $scope.model.goodsForm.goodsId,
										"stateId" : $scope.model.statesForm.stateId,
										"internalStockId" : $scope.model.stockInternalTypeForm.code,
										"stockId" : $localStorage.clientContext.sessionStockID,
										"lstTransSerial" : $scope.fileSuccess,
									}
									// check
									formExportToSuperior.getSerialListInStock(serialSearch, function(result) {
										if (result != null && result != undefined && result.status != '0') {
											message = result.messages;
											App.unblockUI("#contentMain");
											bootboxConfirm($translate.instant("vnm.ExportStockToPartner.error.import.serial.title"), $translate
													.instant("vnm.ExportStockToPartner.error.import.serial.message"), $scope.btnFSaveErrorFileConfirmOK,
													$scope.btnFSaveErrorFileConfirmNOK);
										} else {
											$scope.lstTableSerialsSETCTmp = []
											Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.fileSuccess);
											$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
											$scope.hideModalFunction("modalAddSerial");
											$scope.disabledUploadAllFile = true;
											bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.success').replace('%quantity',
													$scope.fileSuccess.length), "", $translate.instant("vnm.lable.vnm.name"), "");
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
						});
					}
					$scope.btnFSaveErrorFileConfirmOK = function() {
						$scope.downLoadFileError(message);
						$scope.lstTableSerialsSETCTmp = []
						$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
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
							'formName' : 'ErrorExportToSuperior',
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
					}

					$scope.addFile = function() {
						if ('' === $scope.model.linkFile || undefined == $scope.model.linkFile) {
							bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.inputFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						} else {
							if ($scope.fileSuccess.length > 0) {
								var max = $scope.fileSuccess[0].fromSerial;
								var min = $scope.fileSuccess[0].fromSerial;
								for (var i = 0; i < $scope.fileSuccess.length; i++) {
									if (($scope.fileSuccess[i].fromSerial).localeCompare(max) > 0) {
										max = $scope.fileSuccess[i].fromSerial;
									}
									if (($scope.fileSuccess[i].fromSerial).localeCompare(min) < 0) {
										min = $scope.fileSuccess[i].fromSerial;
									}
									if (i == $scope.fileSuccess.length - 1) {
										$scope.model.fromNumber = min;
										$scope.model.toNumber = max;
									}
								}
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

					// Button tim kiem
					$scope.btnSearchSerial = function() {
						var zIndexDialogModal = $("#modalStockDetail").css("z-index");
						$("#modalStockDetail").css('zIndex', 100);
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'Loading...'
						});
						if ($scope.model.fromSerial == null || $scope.model.fromSerial == undefined || $scope.model.fromSerial == '') {
							bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"),
									"");
							$("#modalStockDetail").css('zIndex', zIndexDialogModal);
							App.unblockUI("#contentMain");
							return;
						}
						if ($scope.model.toSerial == null || $scope.model.toSerial == undefined || $scope.model.toSerial == '') {
							bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"),
									"");
							$("#modalStockDetail").css('zIndex', zIndexDialogModal);
							App.unblockUI("#contentMain");
							return;
						}
						var serialSearch = {
							"goodsId" : $scope.model.goodsForm.goodsId,
							"stateId" : $scope.model.statesForm.stateId,
							"internalStockId" : $scope.model.stockInternalTypeForm.code,
							"fromSerial" : $scope.model.fromSerial,
							"toSerial" : $scope.model.toSerial,
							"quantity" : $scope.model.number,
							"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
							"stockId" : $localStorage.clientContext.sessionStockID,
							"typeSerialSearch" : "single",
						}

						formExportToSuperior.getStockSerialByCondition(serialSearch, function(result) {
							$scope.lstTableSerialsSETCTmp = [];
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									$("#modalStockDetail").css('zIndex', zIndexDialogModal);
									App.unblockUI("#contentMain");
								} else if (result.length > 0) {
									$scope.lstTableSerialsSETC = result;
									Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.lstTableSerialsSETC);
									$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
									$scope.model.showAddSerial = false;
									$("#modalStockDetail").css('zIndex', zIndexDialogModal);
									App.unblockUI("#contentMain");
								} else {
									var lstNull = [];
									$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
									bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									$("#modalStockDetail").css('zIndex', zIndexDialogModal);
									App.unblockUI("#contentMain");
								}
							} else {
								var lstNull = [];
								$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
								bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"),
										"");
								$("#modalStockDetail").css('zIndex', zIndexDialogModal);
								App.unblockUI("#contentMain");
							}
						});
					}

					$scope.searchSingelSerial = function() {
						$scope.lstTableSerialsSETCTmp = [];
						var serialSearch = {
							"goodsId" : $scope.model.goodsForm.goodsId,
							"stateId" : $scope.model.statesForm.stateId,
							"internalStockId" : $scope.model.stockInternalTypeForm.code,
							"fromSerial" : $scope.model.serial,
							"toSerial" : $scope.model.serial,
							"quantity" : $scope.model.number,
							"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
							"stockId" : $localStorage.clientContext.sessionStockID,
						}
						formExportToSuperior.getSingelSerialInStock(serialSearch,
								function(result) {
									if (result.status == '0' && result.status != 'undefined') {
										App.unblockUI("#contentMain");
										bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate
												.instant("vnm.lable.vnm.name"), "");

									} else {
										if (result == "") {
											bootboxAlertFocus($translate.instant('vnm.messages.serial.is.not.exists'), "", $translate
													.instant("vnm.lable.vnm.name"), "");
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

					// button them serial
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
									bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.serialExist').replace('%serial%',
											$scope.lstSerialSETCTmp[i].fromSerial), "", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								}
							}
						}

						if ($scope.lstSerialSETCTmp.length == 0) {
							bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.notChoose'), "", $translate.instant("vnm.lable.vnm.name"), "");
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

					// Them tat ca serial
					$scope.addAllSerial = function() {
						for (var i = 0; i < $scope.lstTableSerialsSETCTmp.length; i++) {
							for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
								if ($scope.lstSerialSETC[j].fromSerial == $scope.lstTableSerialsSETCTmp[i].fromSerial) {
									bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.serialExist').replace('%serial%',
											$scope.lstTableSerialsSETCTmp[i].fromSerial), "", $translate.instant("vnm.lable.vnm.name"), "");
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
							bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.notChoose'), "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						} else {
							for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
								var index = $scope.lstSerialSETC.indexOf($scope.lstSerialSETCTmp[i]);
								// $scope.lstTableSerialsSETCTmp.push($scope.lstSerialSETCTmp[i]);
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
						$scope.model.mdnNumberDetail = $scope.lstSerialSETC.length;
						if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
							$scope.model.goodsForm.lstTransactionSerial = $scope.lstSerialSETC;
							$scope.model.goodQuantity = $scope.lstSerialSETC.length;
							$scope.model.showAddSerial = true;
							$scope.model.showRemoveSerial = true;
						} else {
							$scope.model.goodsForm.lstTransactionSerial = [];
						}
						$scope.hideModalFunction("modalStockDetail");
					}

					$scope.btnBackSerial = function() {
						if ($scope.lstSerialSETC != null && $scope.lstSerialSETC != undefined && $scope.model.goodsForm.lstTransactionSerial != null
								&& $scope.model.goodsForm.lstTransactionSerial != undefined
								&& !arraysEqual($scope.lstSerialSETC, $scope.model.goodsForm.lstTransactionSerial)) {
							bootboxConfirm3($translate.instant("vnm.ExportStockToPartner.confirm.add.serial.title"), $translate
									.instant("vnm.ExportStockToPartner.confirm.add.serial.message"), $scope.btnFBackOnclickConfirmOK,
									$scope.btnFBackOnclickConfirmCancel, $scope.btnFBackOnclickConfirmNOK);
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

						/*oTableDDSerialSingleSETC.on("select", function(e, dt, type, indexes) {
							$scope.lstSerialSETCTmp = [];
							var rowData = oTableDDSerialSingleSETC.rows(indexes).data().toArray();
							for (var i = 0; i < rowData.length; i++) {
								$scope.lstSerialSETCTmp.push(rowData[i]);
							}

						});*/
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

						/*oTableDDSerialSingleSETC2.on("select", function(e, dt, type, indexes) {
							$scope.lstSerialSETCTmp = [];
							var rowData = oTableDDSerialSingleSETC2.rows(indexes).data().toArray();
							for (var i = 0; i < rowData.length; i++) {
								$scope.lstSerialSETCTmp.push(rowData[i]);
							}
						});*/
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
					$scope.checkBarCode = function(item) {
						if (item.typeCheckBox == true) {
							$scope.isNotSearch = true;
							$scope.model.fromSerial = '';
							$scope.model.toSerial = '';
							$scope.lstTableSerialsSETCTmp = [];
							$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
						} else {
							$scope.isNotSearch = false;
						}
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

function isValidDate(dateString) {
	// First check for the pattern
	if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
		return false;

	// Parse the date parts to integers
	var parts = dateString.split("/");
	var day = parseInt(parts[0], 10);
	var month = parseInt(parts[1], 10);
	var year = parseInt(parts[2], 10);

	// Check the ranges of month and year
	if (year < 1000 || year > 3000 || month == 0 || month > 12)
		return false;

	var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	// Adjust for leap years
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
		monthLength[1] = 29;

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
};

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
