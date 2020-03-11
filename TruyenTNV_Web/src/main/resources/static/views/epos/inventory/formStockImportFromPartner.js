var IMPORT_PARTNER = "ImportPartner";
app_vnm.factory('formStockImportFromPartner', function($http, $translate) {
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
			var url = eim_url + '/epos/inventory/formStockImportFromPartner/getListReason';
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
		getExistedGoods : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoods";
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
		getGoodsListByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsListByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		downloadTemplate : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsListByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListSerianFromTemplate : function(request, callback) {
			var url = eim_url + "/epos/inventory/getListSerianFromFile";
			$http.post(url, request).success(callback).error(function(callback) {
				App.unblockUI("#requestChangeScatchCardContent");
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
		validTransActionCode : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/validTransActionCode";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onFSaveAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/formStockImportFromPartner/onSave";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
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

app_vnm
		.controller('ctrl-formStockImportFromPartner',
				function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
						$localStorage, formStockImportFromPartner) {
					window.document.title = $translate.instant('vnm.FormStockImportFromPartner.page.title');
					$scope.model = {};
					$scope.limitCbb = 100;
					$scope.model.codeItem = '';
					$scope.lstReason = [];
					$scope.disableReason = true;
					$scope.isDisabledBtnSave = true;
					$scope.isDisabledBtnPrint = true;
					$scope.disableAdd = true;
					$scope.disableViewDetail = false;
					$scope.lstStock = [ {
						"code" : "PARTNER",
						"name" : "PARTNER"
					} ];
					$scope.lstGoodsResourceForm = []; // Nguon hang tren form
					$scope.lstInternalStockForm = []; // Loai hang hoa tren form
					$scope.lstGoodsForm = [];// Danh sach hang hoa tren form
					$scope.lstStatesForm = []; // Danh sach trang thai tren form
					$scope.lstGoodForTransaction = []; // Danh sach trang thai tren form
					$scope.disabledUploadAllFile = true;
					$scope.lstFileSucess = [];
					var errorMessage = '';
					$scope.showModalStockView = function() {
						$('#tableItem').DataTable({
							destroy : true,
						});

						$('#tableQuantity').DataTable({
							destroy : true,
						});

						$scope.showModalFunction("modalStockView");
					}

					$scope.btnAdjustOnclick = function(item) {
						$scope.selectedShipment = item;

					}
					$scope.onLoadPnlButton = function() {
						$scope.disableViewDetail = true;
						$scope.isDisabledBtnAdd = false;
						$scope.isDisabledBtnEdit = true;
						$scope.isDisabledBtnDelete = true;

						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
						$('#pnlButtonOKAfterSave').css('display', 'none');
					}
					// initForm
					function initForm() {
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'Loading...'
						});
						$scope.disableAdd = true; // disable btn xem kho/ so luong/ trang thai
						$scope.disableAddx = true; // disable nguon hang/loai hang
						$scope.disableAddViewDetail = true; // disable btn xem chi tiet
						$scope.disableAddChooseGoods = true; // disable cbb chon hang
						$scope.onLoadPnlButton();
						if (($localStorage.clientContext.shop.shopType).indexOf('1') < 0 && ($localStorage.clientContext.shop.shopType).indexOf('0') < 0) {
							var url = window.location.href;
							url = url.substring(0, url.indexOf("/"));
							$window.open(url + '/noAccessImport', '_top');
							App.unblockUI("#contentMain");
						} else {
							$scope.isDisabledBtnSave = false;
							$scope.isDisabledBtnPrint = true;
							formStockImportFromPartner.getReceiptNoSeq(function(result) {
								if (result != null && result != undefined && result.status === '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									App.unblockUI("#contentMain");

								} else {

									$scope.model.codeItem = result[0];
									formStockImportFromPartner.getListReason(function(result) {
										if (result != null && result != undefined && result.status === '0') {
											bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
											App.unblockUI("#contentMain");

										} else {

											$scope.lstReason = result;
											$scope.model.reason = $scope.lstReason[0];
											$scope.model.stockReceive = $scope.lstStock[0];
											formStockImportFromPartner.getInternalStock(function(result) {
												if (result != null && result != undefined) {
													$scope.lstInternalStockForm = result;
													$scope.model.stockInternalTypeForm = $scope.lstInternalStockForm[0];
													formStockImportFromPartner.getVctResourceList(sessionValue, function(result) {
														if (result != null && result != undefined && result.length > 0) {
															$scope.lstGoodsResourceForm = result;
															$scope.model.resourceCodeForm = $scope.lstGoodsResourceForm[0];

															var resourceCodeForm = {
																"code" : $scope.model.resourceCodeForm.code,
																"name" : "",
															}
															formStockImportFromPartner.getExistedGoods(resourceCodeForm, function(result) {
																if (result != null && result != undefined && result.length > 0) {
																	$scope.lstGoodsForm = result;
																	var lstNull = [];
																	createTableGoodsSave(lstNull);
																	formStockImportFromPartner.getExistedStates(function(result) {
																		if (result != null && result != undefined && result.length > 0) {
																			$scope.lstStatesForm = result;
																			$scope.model.statesForm = $scope.lstStatesForm[0];
																			App.unblockUI("#contentMain");
																		}
																	});
																}else {
																	App.unblockUI("#contentMain");
																}
															});
														}else {
															App.unblockUI("#contentMain");
														}
													});
												}else {
													App.unblockUI("#contentMain");
												}
											});
											var sessionValue = {
												"sessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
												"sessionShopType" : $localStorage.clientContext.shop.shopType,
												"isForm" : "1",
											};
										}
									});
								}
							});

						}

					}

					initForm();
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
					$scope.onSelectGoodsForAdd = function() {
						$scope.model.resourceCodeForm = $scope.goodForTransactionSelected.resourceSelected;
						$scope.model.stockInternalTypeForm = $scope.goodForTransactionSelected.internalStockSelected;
						$scope.model.goodsForm = $scope.goodForTransactionSelected.goodsSelected;
						$scope.model.statesForm = $scope.goodForTransactionSelected.stateSelected;
						$scope.model.goodQuantity = $scope.goodForTransactionSelected.quantity;
						$scope.model.goodNote = $scope.goodForTransactionSelected.notes;
					}
					// btn Them
					$scope.btnAddOnclick = function() {

						$scope.typeAction = 'ADD';
						$scope.resetPanelAddGoods();
						if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
							$scope.disableAddx = false;
						}
						$scope.disableAddChooseGoods = false;
						$scope.disableViewDetail = true;

						if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined
								&& ($scope.goodForTransactionSelected.goodsId != null || $scope.goodForTransactionSelected.goodsId != undefined)) {
							$scope.resetGoodsAdd();
						}
						$('#pnlButtonAction').css('display', 'none');
						$('#pnlButtonOK').css('display', 'block');
						/*
						 * $scope.disableAdd = false; $scope.disableAddx = false; $scope.disableAddViewDetail = false; $scope.disableAddChooseGoods = false;
						 * $scope.typeAction = 'ADD'; $('#pnlButtonAction').css('display','none'); $('#pnlButtonOK').css('display','block');
						 */}
					// btn sua
					$scope.btnEditOnclick = function() {
						$scope.disableAdd = false;
						$scope.disableAddx = false;
						$scope.disableAddViewDetail = false;
						$scope.disableAddChooseGoods = false;
						$scope.typeAction = 'EDIT';
						$('#pnlButtonAction').css('display', 'none');
						$('#pnlButtonOK').css('display', 'block');
					}
					// btn xoa
					$scope.btnDeleteOnclick = function() {
						$scope.typeAction = 'DELETE';
						bootboxConfirm($translate.instant("vnm.common.btn.delete"), $translate.instant("vnm.messages.confirm.delete"),
								$scope.confirmDeleteGoodsForTransOK, $scope.confirmDeleteGoodsForTransNOK);
					}
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
					$scope.confirmDeleteGoodsForTransNOK = function() {

					}
					// btn bo qua
					$scope.btnCancelOnclick = function() {
						$scope.disableViewDetail = true;
						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
						$scope.model.goodsForm = '';
						$scope.disableAdd = true; // disable btn xem kho/ so luong/ trang thai
						$scope.disableAddx = true; // disable nguon hang/loai hang
						$scope.disableAddViewDetail = true; // disable btn xem chi tiet
						$scope.disableAddChooseGoods = true; // disable cbb chon hang
						$scope.model.statesForm = $scope.lstStatesForm[0];
						if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
							$scope.onSelectGoodsForAdd();
						}

					}
					// btn chap nhan
					$scope.btnOkOnclick = function() {
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'Loading...'
						});
						var transGood = {
							"stockId" : $localStorage.clientContext.sessionStockID,
							"goods" : $scope.model.goodsForm,
							"internalStock" : $scope.model.stockInternalTypeForm,
							"state" : $scope.model.statesForm,
							"radio" : "state",
							"typeAction" : $scope.typeAction,
							"goodsQuantity" : $scope.model.goodQuantity,
							"strFromSerialClicked" : IMPORT_PARTNER,
							"mblnIsFormStockImport" : false,
							"type" : "0",
							"notes" : $scope.model.goodNote,
							"mblnInputToIssue" : true,
							"lstGoodsTransaction" : $scope.lstGoodForTransaction,
							"resourceSelected" : $scope.model.resourceCodeForm,
							"goodTransSelected" : $scope.goodForTransactionSelected,
						}

						formStockImportFromPartner.onOkAction(transGood, function(result) {
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
										App.unblockUI("#contentMain");
									} else if ($scope.typeAction == 'EDIT') {
										$scope.disableAdd = true;
										$scope.disableAddChooseGoods = true;
										$scope.disableAddx = true;
										$scope.disableAddViewDetail = true;

										$('#pnlButtonAction').css('display', 'block');
										$('#pnlButtonOK').css('display', 'none');
										App.unblockUI("#contentMain");
									}

								} else {
									App.unblockUI("#contentMain");
								}
							}
						});
						App.unblockUI("#contentMain");
					}
					$scope.resetPanelAddGoods = function() {
						$scope.disableAdd = false;
						$scope.disableAddChooseGoods = false;
						$scope.disableAddx = true;
						$scope.disableAddViewDetail = true;
					}
					$scope.resetGoodsAdd = function() {
						$scope.model.goodsForm = {};
						$scope.model.goodsFormName = '';
						$scope.model.goodQuantity = '';
						$scope.model.goodNote = '';
					}
					$scope.btnAddOnclickClone = function() {
						$scope.typeAction = 'ADD';
						$scope.resetPanelAddGoods();
						if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
							$scope.disableAddx = false;
						}
						$scope.disableAddChooseGoods = false;
						$scope.disableViewDetail = true;

						$('#pnlButtonAction').css('display', 'none');
						$('#pnlButtonOK').css('display', 'block');
					}
					// OnUpLoad
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

							$scope.lstFileSucess = [];
							var zIndexDialogModal = $("#dialogButtonDetail").css("z-index");
							$("#dialogButtonDetail").css('zIndex', 100);
							App.blockUI({
								target : "#contentMain",
								boxed : true,
								message : 'Uploading...'
							});
							for (var i = 0; i < response.length; i++) {
								$scope.lstFileSucess.push(response[i]);
								if (i == response.length - 1) {
									$("#dialogButtonDetail").css('zIndex', zIndexDialogModal);
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
							$scope.lstFileSucess = [];
							closeOverLay();
							return;
						}
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
						$scope.lstFileSucess = [];
						return;
					}

					uploaderListDetail.onAfterAddingAll = function(items) {
						overLoading("Uploading...");
						if (items != null) {
							uploaderListDetail.uploadAll();
						}
					}
					$scope.uploadAllFile = function(uploaderIn) {
						overLoading();
						bootboxConfirm($translate.instant("vnm.common.btn.add"), $translate.instant("vnm.FormStockImportFromPartner.messageAccept"),
								$scope.confirmAddFileOK, $scope.confirmAddFileNOK);

					}
					$scope.confirmAddFileOK = function() {

						$scope.disabledUploadAllFile = true;
						$scope.model.goodQuantity = $scope.lstFileSucess.length;
						if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
							$scope.model.goodsForm.lstTransactionSerial = $scope.lstFileSucess;
						} else {
							$scope.model.goodsForm.lstTransactionSerial = [];
						}
						bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.success').replace('%quantity', $scope.lstFileSucess.length), "",
								$translate.instant("vnm.lable.vnm.name"), "");

						closeOverLay();
					}
					$scope.confirmAddFileNOK = function() {
						closeOverLay();
					}
					// btn them file
					$scope.addFile = function() {
						if ('' === $scope.model.linkFile || undefined == $scope.model.linkFile) {
							bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.inputFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						} else {
							if ($scope.lstFileSucess.length > 0) {
								var max = $scope.lstFileSucess[0].fromSerial;
								var min = $scope.lstFileSucess[0].fromSerial;
								for (var i = 0; i < $scope.lstFileSucess.length; i++) {
									if (($scope.lstFileSucess[i].fromSerial).localeCompare(max) > 0) {
										max = $scope.lstFileSucess[i].fromSerial;
									}
									if (($scope.lstFileSucess[i].fromSerial).localeCompare(min) < 0) {
										min = $scope.lstFileSucess[i].fromSerial;
									}
									if (i == $scope.lstFileSucess.length - 1) {
										$scope.model.fromNumber = min;
										$scope.model.toNumber = max;
									}
								}
								$scope.model.quantity = $scope.lstFileSucess.length;
								$scope.disabledUploadAllFile = false;
							} else {
								bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							}
						}

					}
					$scope.dialogActionBack = function() {

						closeOverLay();
						$scope.disabledUploadAllFile = true;
						$scope.hideModalFunction("dialogButtonDetail");
					}

					$scope.actionChooseGodds = function(value) {
						if (undefined != value && '' != value) {
							$scope.disableViewDetail = false;
						}

					}
					$scope.onChooseGoodsForm = function() {
						$scope.model.goodsForm = $scope.model.goodsForm;
					}

					$scope.onChooseResourceCodeForm = function(value) {
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'Loading...'
						});
						var resourceCodeFormChoose = {
							"code" : value,
							"name" : "",
						}
						formStockImportFromPartner.getExistedGoods(resourceCodeFormChoose,
								function(result) {
									if (result != null && result != undefined && result.length > 0) {
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

					$scope.createDataTableGoodsQuantitiesByGoodsId = function(goodsId) {
						var cond = {
							"stockId" : $localStorage.clientContext.sessionStockID,
							"goodsId" : goodsId,
							"internalStock" : $scope.model.stockInternalType.code,
							"radio" : $scope.model.stockTypeSearch,
						};

						formStockImportFromPartner.getGoodsQuantityByCondition(cond, function(result) {
							if (result != null && result != undefined) {
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
						});
					}
					// btn xem kho
					$scope.viewStock = function() {
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'Loading...'
						});
						formStockImportFromPartner.getInternalStock(function(result6) {
							$scope.lstInternalStock = result6;
							var sessionValue = {
								"SessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
								"SessionShopType" : $localStorage.clientContext.shop.shopType,
								"isForm" : "0",
							};
							formStockImportFromPartner.getVctResourceList(sessionValue, function(result5) {
								$scope.lstGoodsResource = result5;
								formStockImportFromPartner.getExistedStates(function(result) {
									$scope.pStatesList = result;
									formStockImportFromPartner.getExistedGoodsGroups(function(result1) {
										$scope.pGoodsGroupsList = result1;
										var resourceCodeForm = {
											"code" : $scope.model.resourceCodeForm.code,
											"name" : "",
										}
										formStockImportFromPartner.getExistedGoods(resourceCodeForm, function(result2) {
											$scope.pGoodsList = result2;
											var shopStaff = {
												"code" : $localStorage.clientContext.sessionStockID,
												"name" : "",
											};
											formStockImportFromPartner.getStocksTree(shopStaff, function(result3) {
												$scope.pStocksTree = result3;
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

												$scope.showModalFunction("modalStockInfo");
												App.unblockUI("#contentMain");
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
							angular.element($("#tblListGoods_filter").find("input")[0]).focus();
							angular.element($("#tblListShop_filter").find("input")[0]).focus();
							angular.element($("#tblListStaff_filter").find("input")[0]).focus();
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
							$scope.lstTableGoods = $scope.pGoodsList;
							if ($scope.pGoodsList != null && $scope.pGoodsList != undefined && $scope.pGoodsList.length > 0) {
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
							$scope.lstTableGoods = $scope.pGoodsList;
							if ($scope.pGoodsList != null && $scope.pGoodsList != undefined && $scope.pGoodsList.length > 0) {
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
						};

						formStockImportFromPartner.getGoodsListByCondition(cond, function(result) {
							if (result != null && result != undefined && result.length > 0) {
								$scope.lstTableGoods = result;
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
						if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
							var lstTemp = [];
							if ($scope.model.goodCode != null && $scope.model.goodCode != undefined && $scope.model.goodCode != '') {
								for (var i = 0; i < $scope.lstTableGoods.length; i++) {
									if ($scope.lstTableGoods[i].goodsCode.toUpperCase().indexOf($scope.model.goodCode.trim().toUpperCase()) >= 0) {
										if ($scope.model.goodName != null && $scope.model.goodName != undefined && $scope.model.goodName != '') {
											if ($scope.lstTableGoods[i].name.toUpperCase().indexOf($scope.model.goodName.trim().toUpperCase()) >= 0) {
												lstTemp.push($scope.lstTableGoods[i]);
											}
										} else {
											lstTemp.push($scope.lstTableGoods[i]);
										}
									}
								}
							} else {
								for (var i = 0; i < $scope.lstTableGoods.length; i++) {
									if ($scope.model.goodName != null && $scope.model.goodName != undefined && $scope.model.goodName != '') {
										if ($scope.lstTableGoods[i].name.toUpperCase().indexOf($scope.model.goodName.trim().toUpperCase()) >= 0) {
											lstTemp.push($scope.lstTableGoods[i]);
										}
									} else {
										lstTemp.push($scope.lstTableGoods[i]);
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
					// btn luu
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
							$scope.disableViewDetail = false;
						} else {
							bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.choose.right.goods'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							$scope.disableAdd = false;
							$scope.disableAddx = false;
							$scope.disableViewDetail = false;
							$scope.disableAddChooseGoods = false;

							$('#pnlButtonAction').css('display', 'none');
							$('#pnlButtonOK').css('display', 'block');
						}
						$scope.typeAction = 'ADD';
						$scope.hideModalFunction("modalStockInfo");
						/*
						 * $scope.model.goodsForm = $scope.itemGoodSelected; if ($scope.lstStatesForm != null && $scope.lstStatesForm != undefined &&
						 * $scope.lstStatesForm.length > 0) { for (var i=0; i<$scope.lstStatesForm.length; i++) { if ($scope.lstStatesForm[i].stateId ==
						 * $scope.itemGoodQuantitySelected.stateId) { $scope.model.statesForm = $scope.lstStatesForm[i]; } } }
						 * 
						 * $scope.onChooseGoodsForm(); $scope.typeAction='ADD'; $scope.btnAddOnclick(); $scope.hideModalFunction("modalStockInfo");
						 */}
					// end dialog xem kho
					// btn chi tiet
					$scope.viewDetail = function() {
						$scope.model.linkFile = '';
						$scope.model.fromNumber = '';
						$scope.model.toNumber = '';
						$scope.model.quantity = '';
						uploaderListDetail.clearQueue();
						$scope.disabledUploadAllFile = true;
						$scope.lstFileSucess = [];
						$scope.showModalFunction("dialogButtonDetail");
					}
					// lam moi lai cac gia tri trong dialog serial khi chon lai mat hang
					
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
							bootboxAlertFocus($translate.instant('vnm.messages.validate.500'), "", $translate.instant("vnm.lable.vnm.name"), "");
							closeOverLay();
						});
					}
					$scope.fValidateEmpty = function() {
						if ($scope.model.codeItem == null || $scope.model.codeItem == undefined || $scope.model.codeItem == '') {
							bootboxAlertFocus($translate.instant('vnm.FormStockImportFromPartner.error.form.inputReceiptCode'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.reason == null || $scope.model.reason == undefined || $scope.model.reason == '') {
							bootboxAlertFocus($translate.instant('vnm.FormStockImportFromPartner.error.form.inputReason'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.deliver == null || $scope.model.deliver == undefined || $scope.model.deliver == '') {
							bootboxAlertFocus($translate.instant('vnm.FormStockImportFromPartner.error.form.deliver'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
							bootboxAlertFocus($translate.instant('vnm.FormStockImportFromPartner.error.form.inputProduct'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}

					// Luu du lieu
					$scope.btnFSaveOnclick = function() {
						if (!$scope.fValidateEmpty()) {
							return;
						}
						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
						$scope.model.statesForm = $scope.lstStatesForm[0];
						if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
							$scope.onSelectGoodsForAdd();
						}
						formStockImportFromPartner.validTransActionCode($scope.model.codeItem, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result == 'ParamsOK') {
									bootboxConfirm($translate.instant("vnm.common.btn.save"), $translate
											.instant("vnm.stock_export_to_center.confirm.messageSave"), $scope.btnFSaveOnclickConfirmOK,
											$scope.btnFSaveOnclickConfirmNOK);
								}
							}
						});
					}
					$scope.btnFSaveOnclickConfirmOK = function() {
						App.blockUI({
							target : "#contentMain",
							boxed : true,
							message : 'Loading...'
						});
						var mpStockTrans = {
							"sessionStockShopID" : $localStorage.clientContext.sessionStockID,
							"delivererStockID" : $scope.model.stockReceive.stockId,
							"execCode" : $scope.model.codeItem,
							"execName" : $scope.model.deliver,
							"execNote" : $scope.model.note,
							"reasonID" : '443',
							"type" : '2',
							"internalStockId" : $scope.model.stockInternalTypeForm.code,
							"resourceCode" : $scope.model.resourceCodeForm.code,
							"lstGoodsTransaction" : $scope.lstGoodForTransaction,
							"staffId" : $localStorage.clientContext.shop.staffId,
							"vstrFromPartner" : '1',
						}

						formStockImportFromPartner.onFSaveAction(mpStockTrans, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									errorMessage = '';
									errorMessage = result.messages;
									bootboxConfirm($translate.instant("vnm.common.btn.save"), $translate.instant("vnm.FormStockImportFromPartner.SaveError"),
											$scope.btnFSaveErrorFileConfirmOK, $scope.btnFSaveErrorFileConfirmNOK);
									App.unblockUI("#contentMain");
								} else {
									$scope.stockTransId = result;
									bootboxAlertFocus($translate.instant('vnm.FormStockImportFromPartner.SaveSuccess'), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									$scope.disableAfterSave = true;

									$scope.disableAdd = true;
									$scope.disableAddChooseGoods = true;
									$scope.disableAddx = true;
									$scope.disableAddViewDetail = true;
									$scope.resetGoodsAdd();

									$scope.isDisabledBtnAdd = true;
									$scope.isDisabledBtnEdit = true;
									$scope.isDisabledBtnDelete = true;
									$('#pnlButtonAction').css('display', 'block');
									$('#pnlButtonOK').css('display', 'none');

									$('#pnlButtonOKAfterSave').css('display', 'block');
									$('#pnlButtonOKBeforeSave').css('display', 'none');
									App.unblockUI("#contentMain");
								}
							}
						});
					}
					$scope.btnFSaveOnclickConfirmNOK = function() {

					}
					$scope.btnFSaveErrorFileConfirmOK = function() {
						$scope.downLoadFileError(errorMessage);
					}
					$scope.btnFSaveErrorFileConfirmNOK = function() {

					}
					$scope.btnFReInputOnclick = function() {
						$scope.disableAfterSave = false;
						$scope.isDisabledBtnAdd = false;
						initForm();
						$scope.lstGoodForTransaction = [];
						$scope.goodForTransactionSelected = {};
						createTableGoodsSave($scope.lstGoodForTransaction);

						$('#pnlButtonOKAfterSave').css('display', 'none');
						$('#pnlButtonOKBeforeSave').css('display', 'block');
					}
					// btn in
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
						formStockImportFromPartner.getTemplateValue(templateValueSearch, function(result) {
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
										"fileTempName" : 'TemplateReportExportImport',
										"fileType" : '.xlsx'
									};

									formStockImportFromPartner.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
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
					$scope.downLoadFileError = function(errorMessage) {
						overLoading("Downloading file mẫu...");
						var objError = {
							'formName' : 'ErrorStockImportFromPartner',
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
					}
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

						formStockImportFromPartner.getStockSerialByCondition(serialSearch, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootbox.alert(result.messages);
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