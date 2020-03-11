var STATUS_RECEIPT = "0"; // Bien nhan
var STATUS_PROCESS = "1"; // Xu ly
var STATUS_EXPIRE = "2"; // Qua han
var STATUS_RETURN = "3"; // Tra hang
var STATUS_IMPOSSIBILITY = "4"; // Khong xua duoc
var ACTION_SEARCH = "0";
var ACTION_RECEIPT = "1";
var ACTION_RESULT = "2";
var ACTION_REGOODS = "3";
var ACTION_MODIFY = "4";
var ACTION_PRINT = "5";
var ACTION_EXIT = "6";
var ACTION_NONE = "101";
var ACTION_OK = "102";
var ACTION_CANCEL = "103";
var PAR_IS_FORMWARTRANSACTION = "PAR_IS_FORMWARTRANSACTION";
app_vnm.factory('formWarTransaction', function($http, $translate) {
	return {
		getListApDomain : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getListApDomain";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListStaffSource : function(data, callback) {
			var url = eim_url + "/epos/getListStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		findWarTrans : function(data, callback) {
			var url = eim_url + "/epos/sales/formWarTransaction/findWarTrans";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearchWarranty : function(data, callback) {
			var url = eim_url + "/epos/sales/formWarTransaction/onSearchWarranty";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getGoodsInformation : function(data, callback) {
			var url = eim_url + "/epos/sales/formWarTransaction/getGoodsInformation";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getWarrantyHistory : function(data, callback) {
			var url = eim_url + "/epos/sales/formWarTransaction/getWarrantyHistory";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onUpdateWarrantyTransaction : function(data, callback) {
			var url = eim_url + "/epos/sales/formWarTransaction/onUpdateWarrantyTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onInsertWarrantyTransaction : function(data, callback) {
			var url = eim_url + "/epos/sales/formWarTransaction/onInsertWarrantyTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onPushUp : function(data, callback) {
			var url = eim_url + "/epos/sales/formWarTransaction/onPushUp";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getWarTransValueReport : function(data, callback) {
			var url = eim_url + "/epos/sales/formWarTransaction/getWarTransValueReport";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/epos/report/exportMultiFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
});

app_vnm
		.controller(
				'ctrl-formWarTransaction',
				function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
						$localStorage, formWarTransaction) {
					window.document.title = $translate.instant('vnm.FormWarTransaction.page.title');
					$scope.model = {};
					$scope.limitCbb = 20;
					$scope.actionAccept = "";
					$scope.lstStatus = [];
					$scope.lstProcessStatus = [];
					$scope.lstLevelDetail = [];
					$scope.listTransactionsModel = [];
					$scope.lstDlgUnit = [];
					$scope.lstStaff = [];
					var iCurrentAction = ACTION_NONE;
					$scope.selectItemDlgListItem = [];
					$scope.itemGoodsInformation = [];
					$scope.dlgLstStatus = [];
					$scope.itemSelectedTblTransaction = {};
					$scope.staffId = null;
					$scope.warrantyId = null;
					$scope.listWarrantyInfor = [];
					$scope.listWarrantyInforSelected = {};
					$scope.listWarrantyHistory = [];
					$scope.listWarrantyHistorySelected = {};
					$scope.listWarrantyDlgSelected = {};
					var iCurrentActionCancel = ""; // initForm
					function initForm() {
						overLoading();
						$scope.setVisibleAll();
						$scope.setVisibleTop(false);
						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
						$scope.model.receiveDateDetail = moment().format('DD/MM/YYYY');
						$scope.model.lovReceiveCode = $localStorage.clientContext.shop.staffCode;
						$scope.model.lovReceiveName = $localStorage.clientContext.shop.staffName;
						formWarTransaction.getListApDomain("16", function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							} else {
								$scope.lstStatus = result;
								var lstNull = [];
								createDatatableTransaction(lstNull);
								formWarTransaction.getListApDomain("89", function(result) {
									if (result != null && result != undefined && result.status === '0') {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									} else {
										$scope.lstProcessStatus = result;
										formWarTransaction.getListApDomain("80", function(result) {
											if (result != null && result != undefined && result.status === '0') {
												bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
												closeOverLay();
											} else {
												$scope.lstLevelDetail = result;
												var dataInput = {};
												dataInput.shopId = $localStorage.clientContext.shop.shopId;
												formWarTransaction.getListStaffSource(dataInput, function(result) {
													$scope.lstStaff = result;
													$scope.setPanelButtonByLevel("", "");
													closeOverLay();
												});
											}
										});

									}
								});
							}
						});

					}
					$scope.setVisibleAll = function() {
						$scope.isDisabledBtnReceip = true;
						$scope.isDisabledBtnBResult = true;
						$scope.isDisabledBtnBGoods = true;
						$scope.isDisabledBtnBModify = true;
						$scope.isDisabledBtnBPrint = true;
						$scope.isDisabledBtnBPushUp = true
						$scope.isDisabledBtnInfo = true;
						$scope.dWarrantyReceip = true;
						$scope.dCustomer = true;
						$scope.dToReceip = true;
						$scope.dStartDate = true;
						$scope.dStatus = true;
						$scope.disableSearch = true;
						$scope.dCustContact = true;

						$scope.dWarrantyReceipDetail = true;
						$scope.dCustomerDetail = true;
						$scope.dCustContactDetail = true;
						$scope.dLovReceiveCode = true;
						$scope.dLovReceiveName = true;
						$scope.dReceiveDateDetail = true;
						$scope.dLevelDetail = true;
						$scope.dToReceipDetail = true;
						$scope.dReceipDetail = true;
						$scope.dCommentDetail = true;
						$scope.dLovProcessCode = true;
						$scope.dLovProcessName = true;
						$scope.dEstimateDateDetail = true;
						$scope.dProcessDateDetail = true;
						$scope.dDatingDateDetail = true;
						$scope.dResultDetail = true;
					}
					$scope.setVisibleTop = function(value) {
						$scope.dWarrantyReceip = value;
						$scope.dToReceip = value;
						$scope.dStartDate = value;
						$scope.dCustomer = value;
						$scope.dCustContact = value;
						$scope.dStatus = value;
						$scope.disableSearch = value;
					}
					$scope.clearTop = function() {
						$scope.model.warrantyReceip = "";
						$scope.model.toReceip = "";
						$scope.model.customer = "";
						$scope.model.custContact = "";
						$scope.model.startDate = "";
					}
					$scope.clearBottom = function() {
						$scope.model.warrantyReceipDetail = "";
						$scope.model.customerDetail = "";
						$scope.model.custContactDetail = "";
						$scope.model.receiveDateDetail = "";
						$scope.model.toReceipDetail = "";

						$scope.model.receipDetail = "";
						$scope.model.commentDetail = "";
						$scope.model.lovReceiveCode = $localStorage.clientContext.shop.staffCode;
						$scope.model.lovReceiveName = $localStorage.clientContext.shop.staffName;
						$scope.model.lovProcessCode = "";
						$scope.model.lovProcessName = "";
						$scope.model.estimateDateDetail = "";
						$scope.model.processDateDetail = "";
						$scope.model.datingDateDetail = "";
						$scope.model.resultDetail = "";
					}
					$scope.setVisibleBottom = function(vlble) {
						$scope.dWarrantyReceipDetail = true;
						$scope.isDisabledBtnInfo = vlble;
						$scope.dCustomerDetail = vlble;
						$scope.dCustContactDetail = vlble;
						$scope.dReceiveDateDetail = vlble;
						$scope.dLevelDetail = vlble;
						$scope.dToReceipDetail = true;
						$scope.dReceipDetail = vlble;
						$scope.dCommentDetail = vlble;
						$scope.dLovProcessCode = vlble;
						$scope.dEstimateDateDetail = vlble;
						$scope.dProcessDateDetail = vlble;
						$scope.dDatingDateDetail = vlble;
						$scope.dResultDetail = vlble;
					}
					initForm();
					$scope.setPanelButtonByLevel = function(strStatus, strLevel) {
						$scope.isDisabledBtnReceip = false;
						if (STATUS_RECEIPT == strStatus) {
							$scope.isDisabledBtnBResult = true;
							$scope.isDisabledBtnBGoods = true;
							$scope.isDisabledBtnBModify = false;
							$scope.isDisabledBtnBPushUp = false;
							/**
							 * Mức độ sửa bảo hành nhẹ
							 */
							if ("0" == strLevel) {
								$scope.isDisabledBtnBGoods = false;
								$scope.isDisabledBtnBResult = false;
								$scope.isDisabledBtnBPrint = true;
								$scope.isDisabledBtnBPushUp = true;
							} else {
								$scope.isDisabledBtnBPrint = false;
							}
						} else if (STATUS_PROCESS == strStatus) {
							$scope.isDisabledBtnBResult = true;
							$scope.isDisabledBtnBGoods = false;
							$scope.isDisabledBtnBModify = false;
							if ("0" == strLevel) {
								$scope.isDisabledBtnBPrint = true;
							} else {
								$scope.isDisabledBtnBPrint = false;
							}
							$scope.isDisabledBtnBPushUp = true;

						} else if (STATUS_EXPIRE == strStatus) {
							$scope.isDisabledBtnBResult = true;
							$scope.isDisabledBtnBModify = true;
							$scope.isDisabledBtnBGoods = true;
							$scope.isDisabledBtnBPushUp = true;
							if ("0" == strLevel) {
								$scope.isDisabledBtnBPrint = true;
							} else {
								$scope.isDisabledBtnBPrint = false;
							}
						} else if (STATUS_RETURN == strStatus) {
							$scope.isDisabledBtnBResult = true;
							$scope.isDisabledBtnBGoods = true;
							$scope.isDisabledBtnBModify = true;
							$scope.isDisabledBtnBPushUp = true;
							$scope.isDisabledBtnBPrint = false;
							if ("0" == strLevel) {
								$scope.isDisabledBtnBPrint = true;
							} else {
								$scope.isDisabledBtnBPrint = false;
							}
						} else if (STATUS_IMPOSSIBILITY == strStatus) {
							$scope.isDisabledBtnBResult = true;
							$scope.isDisabledBtnBGoods = true;
							$scope.isDisabledBtnBModify = false;
							$scope.isDisabledBtnBPushUp = false;
							$scope.isDisabledBtnBPrint = false;
						}
					}
					$scope.onChangeAction = function(intActionOld, intActionNew) {
						if ((ACTION_RECEIPT == intActionOld || ACTION_REGOODS == intActionOld || ACTION_RESULT == intActionOld || ACTION_MODIFY == intActionOld)
								&& ACTION_OK == intActionNew) {
							$scope.setVisibleAll();
							$scope.disableSearch = false;
							$scope.setVisibleTop(false);
						} else if (ACTION_RECEIPT == intActionNew) {
							$("#divTable").addClass("disabledDiv");
							// iPanelButtonState = PANEL_BUTTON_STATE_CONFIRM;
							$scope.setVisibleAll();
							$scope.clearDetailValue();
							$scope.setVisibleBottom(false);
							$scope.dProcessDateDetail = true;
							$scope.dResultDetail = true;
							$scope.dDatingDateDetail = true;
							$scope.disableSearch = true;
							$scope.model.receiveDateDetail = moment().format('DD/MM/YYYY');
							$('#pnlButtonAction').css('display', 'none');
							$('#pnlButtonOK').css('display', 'block');
						} else if (ACTION_RESULT == intActionNew) {
							$("#divTable").addClass("disabledDiv");
							$scope.setVisibleAll();
							$scope.dProcessDateDetail = false;
							$scope.dResultDetail = false;
							angular.element(document.getElementById('fProcessDateDetail')).focus();
						} else if (ACTION_REGOODS == intActionNew) {
							$("#divTable").addClass("disabledDiv");
							$scope.setVisibleAll();
							$scope.dProcessDateDetail = false;
							$scope.dDatingDateDetail = false;
							$scope.dResultDetail = false;
							if ("" == StringUtilNVL($scope.model.processDateDetail)) {
								angular.element(document.getElementById('fProcessDateDetail')).focus();
							} else {
								angular.element(document.getElementById('fDatingDateDetail')).focus();
							}
							$('#pnlButtonAction').css('display', 'none');
							$('#pnlButtonOK').css('display', 'block');
						} else if (ACTION_CANCEL == intActionNew) {
							if ((iCurrentAction == ACTION_RECEIPT && ("" != StringUtilNVL($scope.model.warrantyReceipDetail)
									|| "" != StringUtilNVL($scope.model.customerDetail) || "" != StringUtilNVL($scope.model.receipDetail)
									|| "" != StringUtilNVL($scope.model.estimateDateDetail) || "" != StringUtilNVL($scope.model.custContactDetail) || "" != StringUtilNVL($scope.model.commentDetail)))
									|| (iCurrentAction == ACTION_RESULT && ("" != StringUtilNVL($scope.model.processDateDetail) || "" != StringUtilNVL($scope.model.resultDetail)))
									|| (iCurrentAction == ACTION_REGOODS && ("" != StringUtilNVL($scope.model.processDateDetail)
											|| "" != StringUtilNVL($scope.model.resultDetail) || "" != StringUtilNVL($scope.model.datingDateDetail)))) {
								iCurrentActionCancel = iCurrentAction;
								bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormWarTransaction.messConfirmCan"),
										$scope.btnDestroyOnclickConfirmOK, $scope.btnDestroyOnclickConfirmNOK);
							} else {
								$("#divTable").removeClass("disabledDiv");
								$scope.setVisibleAll();
								$scope.disableSearch = false;
								$scope.isDisabledBtnReceip = false;
								$scope.clearTop();
								$scope.clearBottom();
								$('#pnlButtonAction').css('display', 'block');
								$('#pnlButtonOK').css('display', 'none');
								if (Object.keys($scope.itemSelectedTblTransaction).length != 0) {
									$scope.fillDataDetail($scope.itemSelectedTblTransaction);
								}
								$scope.setVisibleTop(false);

							}
						} else if (ACTION_MODIFY == intActionNew) {
							$("#divTable").removeClass("disabledDiv");
							if ("0" == $scope.itemSelectedTblTransaction.status_db) {
								$scope.setVisibleTop(true);
								$scope.setVisibleBottom(false);
								$scope.isDisabledBtnInfo = true;
								$scope.dProcessDateDetail = true;
								$scope.dDatingDateDetail = true;
								$scope.dResultDetail = true;
								angular.element(document.getElementById('fWarrantyReceipDetail')).focus();

								$('#pnlButtonAction').css('display', 'none');
								$('#pnlButtonOK').css('display', 'block');
							} else if (STATUS_RECEIPT == $scope.itemSelectedTblTransaction.status_db
									|| STATUS_IMPOSSIBILITY == $scope.itemSelectedTblTransaction.status_db) {
								$scope.setVisibleTop(true);
								$scope.setVisibleBottom(false);
								$scope.isDisabledBtnInfo = false;
								$scope.dProcessDateDetail = false;
								$scope.dResultDetail = false;
								angular.element(document.getElementById('fProcessDateDetail')).focus();

								$('#pnlButtonAction').css('display', 'none');
								$('#pnlButtonOK').css('display', 'block');
							}
						}
						iCurrentAction = intActionNew;
					}
					$scope.btnDestroyOnclickConfirmOK = function() {
						$("#divTable").removeClass("disabledDiv");
						$scope.setVisibleAll();
						$scope.disableSearch = false;
						$scope.isDisabledBtnReceip = false;
						$scope.clearTop();
						$scope.clearBottom();
						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
						if (Object.keys($scope.itemSelectedTblTransaction).length != 0) {
							$scope.fillDataDetail($scope.itemSelectedTblTransaction);
						}

						$scope.setVisibleTop(false);

					}
					$scope.btnDestroyOnclickConfirmNOK = function() {
						iCurrentAction = iCurrentActionCancel;
					}
					$scope.listSelectCheckBox = [];
					var oTableItemXXX;
					function createDatatableTransaction(dataItem) {
						var rowData = {};
						oTableItemXXX = $('#tableTransaction').DataTable(
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
									"bSort" : true,
									"info" : true,
									"order" : [],
									"select" : {
										style : 'single',
										info : false
									},
									"columns" : [
											{
												"mData" : "customer_name",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "cust_contact",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: right;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "warranty_no",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: right;' class='text-wrap width-150' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "goods_name",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip'  class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "receive_date",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "war_level",
												"render" : function(data, type, row) {
													x = $scope.fillLevel(data) == null ? '' : $scope.fillLevel(data);
													return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "receiver_note_no",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: right;'  class='text-wrap width-150' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "receiver_note",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "other_note",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "staff_receiver_name",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "staff_receiver_code",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "staff_process_name",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "staff_process_code",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "estimate_date",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "result_date",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "return_date",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											}, {
												"mData" : "result",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
												}
											}, {
												"mData" : "war_trans_status",
												"render" : function(data, type, row) {
													x = $scope.fillStatus(data) == null ? '' : $scope.fillStatus(data);
													return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											}, {
												"mData" : "process_status",
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

						$('#tableTransaction tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							rowData = oTableItemXXX.row(this).data();
							$scope.selectItem = rowData;
							oTableItemXXX.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.itemSelectedTblTransaction = {};
							$scope.itemSelectedTblTransaction = rowData;
							$scope.fillDataDetail(rowData);

						});
						$('.dataTables_scrollBody thead tr').css({
							visibility : 'collapse'
						});

						$compile(angular.element('#tableTransaction'))($scope);
					}
					var oTableItemXXXDlgListItem;
					function createDatatableDlgListItem(dataItem) {
						var rowData = {};
						oTableItemXXXDlgListItem = $('#tableDlgListItem').DataTable(
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
									"bSort" : true,
									"info" : true,
									"order" : [],
									"select" : {
										style : 'single',
										info : false
									},
									"columns" : [
											{
												"mData" : "warranty_no",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "goods_esn",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: right;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "effect_date",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-150' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "status",
												"render" : function(data, type, row) {
													x = $scope.fillDlgStatus(data) == null ? '' : $scope.fillDlgStatus(data);
													return "<div data-toggle='tooltip'  class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "serial_1",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "serial_2",
												"render" : function(data, type, row) {
													x = $scope.fillLevel(data) == null ? '' : $scope.fillLevel(data);
													return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "serial_3",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: right;'  class='text-wrap width-150' title='" + x
															+ "'>" + x + "</div>";
												}
											}, {
												"mData" : "serial_4",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											}, {
												"mData" : "serial_5",
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

						$('#tableDlgListItem tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							rowData = oTableItemXXXDlgListItem.row(this).data();
							$scope.selectItem = rowData;
							oTableItemXXXDlgListItem.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.selectItemDlgListItem = rowData;
							if (rowData != undefined && rowData != null) {
								$scope.searchGoodsInformationForItem(rowData);
							}

						});
						$('.dataTables_scrollBody thead tr').css({
							visibility : 'collapse'
						});

						$compile(angular.element('#tableDlgListItem'))($scope);
					}
					var oTableItemXXXDlgTblWarrantyHistory;
					function createDatatableDlgTblWarrantyHistory(dataItem) {
						var rowData = {};
						oTableItemXXXDlgTblWarrantyHistory = $('#tableDlgTblWarrantyHistory').DataTable(
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
									"bSort" : true,
									"info" : true,
									"order" : [],
									"select" : {
										style : 'single',
										info : false
									},
									"columns" : [
											{
												"mData" : "receive_date",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip'  style='text-align: center;'  class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "staff_name",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip'  class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "customer",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "ap_name",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip'  class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "estimate_date",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "return_date",
												"render" : function(data, type, row) {
													x = $scope.fillLevel(data) == null ? '' : $scope.fillLevel(data);
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-100' title='" + x
															+ "'>" + x + "</div>";
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
											"sPrevious" : PREV_PAGE
										}
									},
									"createdRow" : function(row, data, rowIndex) {
										if (rowIndex == 0 || rowIndex == '0') {
											$(row).addClass('selected');
										}
									}
								});

						$('#tableDlgTblWarrantyHistory tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							rowData = oTableItemXXXDlgTblWarrantyHistory.row(this).data();
							$scope.selectItem = rowData;
							oTableItemXXXDlgTblWarrantyHistory.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.listWarrantyHistorySelected = rowData;
							$scope.fillWarrantyHistoryDetail(rowData);

						});
						$('.dataTables_scrollBody thead tr').css({
							visibility : 'collapse'
						});

						$compile(angular.element('#tableDlgTblWarrantyHistory'))($scope);
					}
					$scope.dlgReturn = function() {
						bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate
								.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.strMsgReturn"), $scope.btnDlgReturnOnclickConfirmOK,
								$scope.btnDlgReturnOnclickConfirmNOK);

					}
					$scope.btnDlgReturnOnclickConfirmOK = function() {
						$scope.hideModalFunction("modalEnqueryWarranty");
					}
					$scope.btnDlgReturnOnclickConfirmNOK = function() {
					}

					$scope.search = function() {
						$scope.clearForm();
						overLoading();
						var statusInput = "";
						if ($scope.model.status != undefined) {
							statusInput = $scope.model.status.code;
						}
						var WarTransaction = {
							"shop_id" : $localStorage.clientContext.shop.shopId,
							"warranty_no" : $scope.model.warrantyReceip,
							"receiver_note_no" : $scope.model.toReceip,
							"customer_name" : $scope.model.customer,
							"cust_contact" : $scope.model.custContact,
							"receive_date" : $("#fStartDate").val(),
							"war_trans_status" : statusInput
						};
						formWarTransaction.findWarTrans(WarTransaction, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							} else {
								if (result.length > 0) {

									$scope.listTransactionsModel = result;
									$scope.itemSelectedTblTransaction = $scope.listTransactionsModel[0];
									$scope.fillDataDetail($scope.itemSelectedTblTransaction);

									createDatatableTransaction(result);
									closeOverLay();
								} else {
									bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.MSG5"), "", $translate.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
								}
							}
						});

					}
					var zIndexDialogModal = $("#modalEnqueryWarranty").css("z-index");
					$scope.searchDialog = function() {
						$("#modalEnqueryWarranty").css('zIndex', 100);
						overLoading();
						if (($scope.model.dlgWarrantyNo == null || $scope.model.dlgWarrantyNo == undefined || "" == StringUtilNVL($scope.model.dlgWarrantyNo)
								.trim())
								&& ($scope.model.dlgSerial == null || $scope.model.dlgSerial == undefined || "" == StringUtilNVL($scope.model.dlgSerial).trim())) {
							bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.ErrorWarrantyNoOrSerial"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
							closeOverLay();
							return;
						}
						var EnqueryWar = {
							"shop_id" : $localStorage.clientContext.shop.shopId,
							"inputSerial" : $scope.model.dlgSerial,
							"inputWarrantyNo" : $scope.model.dlgWarrantyNo,
							"inputParentSearch" : PAR_IS_FORMWARTRANSACTION
						};
						$scope.listWarrantyInfor = [];
						formWarTransaction.onSearchWarranty(EnqueryWar, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
								closeOverLay();
							} else {
								if (result.length > 0) {
									$scope.listWarrantyInfor = result;
									createDatatableDlgListItem(result);
									$scope.selectItemDlgListItem = result[0];
									var GoodsInformation = {
										"inputWarrantyId" : $scope.selectItemDlgListItem.warranty_id
									};
									formWarTransaction.getGoodsInformation(GoodsInformation, function(result) {
										if (result != null && result != undefined && result.status === '0') {
											bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
											$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
											closeOverLay();
										} else {
											if (result.length > 0) {
												$scope.itemGoodsInformation = result[0];
												$scope.fillGoodsInformation($scope.itemGoodsInformation);
												var WarrantyHistory = {
													"inputWarrantyIdPara" : $scope.selectItemDlgListItem.warranty_id
												};
												$scope.listWarrantyHistory = [];
												formWarTransaction.getWarrantyHistory(WarrantyHistory, function(result) {
													if (result != null && result != undefined && result.status === '0') {
														bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
														$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
														closeOverLay();
													} else {
														if (result.length > 0) {
															$scope.listWarrantyHistory = result;
															createDatatableDlgTblWarrantyHistory(result);
															$scope.fillWarrantyHistoryDetail(result[0]);
															$scope.listWarrantyHistorySelected = result[0];
															$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
															closeOverLay();
														} else {
															bootboxAlertFocus($translate
																	.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.noWarrantyInformation"), "",
																	$translate.instant("vnm.lable.vnm.name"), "");
															$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
															closeOverLay();
														}
													}
												});
											} else {
												bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.noWarrantyInformation"), "",
														$translate.instant("vnm.lable.vnm.name"), "");
												$scope.lstNull = [];
												createDatatableDlgTblWarrantyHistory($scope.lstNull);
												$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
												closeOverLay();
											}
										}
									});
								} else {
									$scope.listWarrantyInfor = [];
									bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.MSG5"), "", $translate.instant("vnm.lable.vnm.name"), "");
									$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
									closeOverLay();
								}
							}
						});
					}
					$scope.dlgAccept = function() {
						$scope.listWarrantyDlgSelected = {};
						$scope.warrantyId = null;
						$("#modalEnqueryWarranty").css('zIndex', 100);
						overLoading();
						if ($scope.listWarrantyInfor.length < 1) {
							bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.strMsgNoData"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
							closeOverLay();
							return;
						} else {
							if ($scope.model.dlgGoodsName == undefined || "" == StringUtilNVL($scope.model.dlgGoodsName)) {
								bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.strMsgNotGood"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
								closeOverLay();
								return;
							}
							$scope.lstDate = [];
							let dateMax = "";
							for (var i = 0; i < $scope.listWarrantyInfor.length; i++) {
								if ("" == StringUtilNVL($scope.listWarrantyInfor[i].receive_date)) {
									$scope.listWarrantyDlgSelected = $scope.selectItemDlgListItem;
									if ($scope.listWarrantyDlgSelected != undefined) {
										$scope.model.warrantyReceipDetail = $scope.listWarrantyDlgSelected.warranty_no;
										$scope.warrantyId = $scope.listWarrantyDlgSelected.warranty_id;
										angular.element(document.getElementById('fCustomerDetail')).focus();
									} else {
										$scope.model.warrantyReceipDetail = "";
										$scope.warrantyId = "";
									}
									$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
									closeOverLay();
									$scope.hideModalFunction("modalEnqueryWarranty");
									return;
								} else {
									$scope.lstDate.push($scope.listWarrantyInfor[i].receive_date);
								}
							}
							dateMax = $scope.lstDate[0];
							for (var j = 0; j < $scope.listWarrantyInfor.length; j++) {
								if (parseDate(dateMax).getTime() > parseDate($scope.lstDate[j]).getTime()) {
									dateMax = $scope.lstDate[j];
								}
							}
							if ($scope.listWarrantyHistory.length < 1) {
								$scope.listWarrantyDlgSelected = $scope.selectItemDlgListItem;
								if ($scope.listWarrantyDlgSelected != undefined) {
									$scope.model.warrantyReceipDetail = $scope.listWarrantyDlgSelected.warranty_no;
									$scope.warrantyId = $scope.listWarrantyDlgSelected.warranty_id;
									angular.element(document.getElementById('fCustomerDetail')).focus();
								} else {
									$scope.model.warrantyReceipDetail = "";
									$scope.warrantyId = "";
								}
								$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
								closeOverLay();
								$scope.hideModalFunction("modalEnqueryWarranty");
								return;
							} else {
								if (parseDate(dateMax).getTime() < parseDate($scope.listWarrantyHistorySelected.receive_date).getTime()) {
									bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.strMsgNotCorrect"), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
									closeOverLay();
									return;
								} else {
									$scope.firstWarrantyHistory = $scope.listWarrantyHistory[0];
									let statusHis = $scope.firstWarrantyHistory.war_trans_status;
									if ("0" == statusHis || "1" == statusHis || "2" == statusHis) {
										bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.strMsgCurrent"), "", $translate
												.instant("vnm.lable.vnm.name"), "");
										$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
										closeOverLay();
										return;
									} else {
										$scope.listWarrantyDlgSelected = $scope.selectItemDlgListItem;
										if ($scope.listWarrantyDlgSelected != undefined) {
											$scope.model.warrantyReceipDetail = $scope.listWarrantyDlgSelected.warranty_no;
											$scope.warrantyId = $scope.listWarrantyDlgSelected.warranty_id;
											angular.element(document.getElementById('fCustomerDetail')).focus();
										} else {
											$scope.model.warrantyReceipDetail = "";
											$scope.warrantyId = "";
										}
										$scope.hideModalFunction("modalEnqueryWarranty");
										$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
										closeOverLay();
										return;
									}
								}
							}
						}
					}
					$scope.searchGoodsInformationForItem = function(data) {
						$("#modalEnqueryWarranty").css('zIndex', 100);
						overLoading();
						var GoodsInformation = {
							"inputWarrantyId" : data.warranty_id
						};
						formWarTransaction.getGoodsInformation(GoodsInformation, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
								closeOverLay();
							} else {
								if (result.length > 0) {
									$scope.itemGoodsInformation = result[0];
									$scope.fillGoodsInformation($scope.itemGoodsInformation);
									var WarrantyHistory = {
										"inputWarrantyIdPara" : data.warranty_id
									};
									formWarTransaction.getWarrantyHistory(WarrantyHistory, function(result) {
										if (result != null && result != undefined && result.status === '0') {
											bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
											$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
											closeOverLay();
										} else {
											if (result.length > 0) {
												createDatatableDlgTblWarrantyHistory(result);
												$scope.fillWarrantyHistoryDetail(result[0]);
												$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
												closeOverLay();
											} else {
												$scope.lstNull = [];
												createDatatableDlgTblWarrantyHistory($scope.lstNull);
												$scope.clearDlgWarrantyHis();
												$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
												closeOverLay();
											}
										}
									});
								} else {
									bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.DialogEnqueryWarranty.noWarrantyInformation"), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									$scope.lstNull = [];
									createDatatableDlgTblWarrantyHistory($scope.lstNull);
									$scope.clearDlgGoodsInfo();
									$("#modalEnqueryWarranty").css('zIndex', zIndexDialogModal);
									closeOverLay();
								}
							}
						});
					}
					$scope.btnReceip = function() {
						$scope.actionAccept = "RECEIPT";
						$scope.onChangeAction(ACTION_NONE, ACTION_RECEIPT);
					}
					$scope.btnBModify = function() {
						$scope.actionAccept = "MODIFY";
						$scope.onChangeAction(ACTION_NONE, ACTION_MODIFY);
					}
					$scope.btnBGoods = function() {
						$scope.actionAccept = "BGOODS";
						$scope.onChangeAction(ACTION_NONE, ACTION_REGOODS);
					}
					$scope.btnBResult = function() {
						$scope.actionAccept = "BRESULT";
						$scope.onChangeAction(ACTION_NONE, ACTION_REGOODS);
					}
					$scope.btnBPrint = function() {
						overLoading();
						$scope.lstWarTransactionReport = [];
						$scope.lstReport = [];
						var WarTransactionReport = {
							"inputWarrantyLogID" : $scope.itemSelectedTblTransaction.warranty_log_id
						}
						formWarTransaction.getWarTransValueReport(WarTransactionReport, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							} else {
								$scope.lstWarTransactionReport = result[0];
								let language = "VN";
								let fileName = "";
								let strLevel = "";
								if ("VN" == language) {
									fileName = "ReceiptWarrantyVN";
								} else {
									fileName = "ReceiptWarrantyEN";
								}
								for (let i = 0; i < $scope.lstLevelDetail.length; i++) {
									if ($scope.lstLevelDetail[i].code = $scope.model.levelDetail) {
										strLevel = $scope.lstLevelDetail[i].name;
										break;
									}
								}
								var ReportInput = {
									"mstrToReceip" : $scope.lstWarTransactionReport.receiver_note_no,
									"mstrCustomer" : $scope.lstWarTransactionReport.customer,
									"mstrCustContact" : $scope.lstWarTransactionReport.cust_contact,
									"mstrWarrantyNo" : $scope.lstWarTransactionReport.warranty_no,
									"mstrGoodsSerial" : $scope.lstWarTransactionReport.goods_esn,
									"mstrGoodsColor" : $scope.lstWarTransactionReport.color,
									"mstrGoodsCode" : $scope.lstWarTransactionReport.goods_code,
									"mstrGoodsName" : $scope.lstWarTransactionReport.name,
									"mstrAreReceip" : $scope.lstWarTransactionReport.receiver_note,
									"mstrLevel" : strLevel,
									"mstrEstimateDate" : $scope.lstWarTransactionReport.estimate_date,
									"mstrAreComment" : $scope.lstWarTransactionReport.other_note,
									"fileTempName" : fileName,
									"fileType" : '.xlsx'
								};
								$scope.lstReport.push(ReportInput);
								formWarTransaction.exportFile(encodeURI(JSON.stringify($scope.lstReport)), function(result, status, header, config) {
									if (result.status == '0' && result.status != 'undefined') {
										bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
												.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									} else {
										download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
										closeOverLay();
									}
								});
							}
						});
					}
					$scope.btnBPushUp = function() {
						bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormWarTransaction.confirmPushUp"),
								$scope.btnPushUpOnclickConfirmOK, $scope.btnPushUpOnclickConfirmNOK);
					}
					$scope.btnPushUpOnclickConfirmOK = function() {
						overLoading();
						formWarTransaction.onUpdateWarrantyTransaction($scope.itemSelectedTblTransaction, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							} else {

								bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.messPushUp"), "", $translate.instant("vnm.lable.vnm.name"), "");
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							}
						});
					}
					$scope.btnPushUpOnclickConfirmNOK = function() {

					}
					$scope.accept = function() {
						if ("RECEIPT" == $scope.actionAccept) {
							if ("" == StringUtilNVL($scope.model.warrantyReceipDetail)
									|| "" == StringUtilNVL($scope.model.customerDetail)
									|| "" == StringUtilNVL($scope.model.levelDetail)
									|| "" == StringUtilNVL($scope.model.receipDetail)
									|| "" == StringUtilNVL($scope.model.receiveDateDetail)
									|| "" == StringUtilNVL($scope.model.estimateDateDetail)
									|| "" == StringUtilNVL($scope.model.lovProcessName)
									|| ($scope.model.estimateDateDetail != null && $scope.model.estimateDateDetail != undefined
											&& StringUtilNVL($scope.model.estimateDateDetail) != "" && $scope.model.receiveDateDetail != null
											&& $scope.model.receiveDateDetail != undefined && $scope.model.receiveDateDetail != "" && parseDate(
											$("#fReceiveDateDetail").val()).getTime() > parseDate($("#fEstimateDateDetail").val()).getTime())) {
								if ("" == StringUtilNVL($scope.model.warrantyReceipDetail)) {
									$scope.validateReceip();
									$scope.isDisabledBtnInfo = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.warranty.receip")), "", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								} else if ("" == StringUtilNVL($scope.model.receiveDateDetail)) {
									$scope.validateReceip();

									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.receive.date")), "fReceiveDateDetail", $translate
											.instant("vnm.lable.vnm.name"), "");
									return;
								} else if ("" == StringUtilNVL($scope.model.customerDetail)) {
									$scope.validateReceip();

									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.customer")), "fCustomerDetail", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								} else if ("" == StringUtilNVL($scope.model.levelDetail)) {
									$scope.validateReceip();

									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.level")), "fLevelDetail", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								} else if ("" == StringUtilNVL($scope.model.receipDetail)) {
									$scope.validateReceip();

									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.receip")), "fReceipDetail", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								} else if ("" == StringUtilNVL($scope.model.lovProcessName)) {
									$scope.validateReceip();

									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.lov.process")), "fLovProcessCode", $translate.instant("vnm.lable.vnm.name"),
											"");
									return;
								} else if ("" == StringUtilNVL($scope.model.estimateDateDetail)) {
									$scope.validateReceip();

									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.estimate.date")), "fEstimateDateDetail", $translate
											.instant("vnm.lable.vnm.name"), "");
									return;
								} else if ($scope.model.estimateDateDetail != null && $scope.model.estimateDateDetail != undefined
										&& $scope.model.estimateDateDetail != "" && $scope.model.receiveDateDetail != null
										&& $scope.model.receiveDateDetail != undefined && $scope.model.receiveDateDetail != ""
										&& parseDate($("#fReceiveDateDetail").val()).getTime() > parseDate($("#fEstimateDateDetail").val()).getTime()) {
									$scope.validateReceip();

									bootboxAlertFocus((($translate.instant("vnm.FormWarTransaction.FSS-30004")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.receive.date"))).replace('%FIELD1%', $translate
											.instant("vnm.FormWarTransaction.label.estimate.date")), "fDatingDateDetail", $translate
											.instant("vnm.lable.vnm.name"), "")
									return;
								}

							} else {
								bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormWarTransaction.messConfirmInsert"),
										$scope.btnReceiptOnclickConfirmOK, $scope.btnReceiptOnclickConfirmNOK);
							}
						} else if ("BRESULT" == $scope.actionAccept) {
							if ("" == StringUtilNVL($scope.model.warrantyReceipDetail)
									|| "" == StringUtilNVL($scope.model.customerDetail)
									|| "" == StringUtilNVL($scope.model.levelDetail)
									|| "" == StringUtilNVL($scope.model.receipDetail)
									|| "" == StringUtilNVL($scope.model.receiveDateDetail)
									|| "" == StringUtilNVL($scope.model.estimateDateDetail)
									|| "" == StringUtilNVL($scope.model.lovProcessName)
									|| ($scope.model.estimateDateDetail != null && $scope.model.estimateDateDetail != undefined
											&& StringUtilNVL($scope.model.estimateDateDetail) != "" && $scope.model.receiveDateDetail != null
											&& $scope.model.receiveDateDetail != undefined && $scope.model.receiveDateDetail != "" && parseDate(
											$("#fReceiveDateDetail").val()).getTime() > parseDate($("#fEstimateDateDetail").val()).getTime())
									|| "" == StringUtilNVL($scope.model.toReceipDetail)
									|| "" == StringUtilNVL($scope.model.processDateDetail)
									|| "" == StringUtilNVL($scope.model.resultDetail)
									|| ($scope.model.processDateDetail != null && $scope.model.processDateDetail != undefined
											&& StringUtilNVL($scope.model.processDateDetail) != "" && $scope.model.receiveDateDetail != null
											&& $scope.model.receiveDateDetail != undefined && $scope.model.receiveDateDetail != "" && parseDate(
											$("#fReceiveDateDetail").val()).getTime() > parseDate($("#fProcessDateDetail").val()).getTime())) {
								if ("" == StringUtilNVL($scope.model.warrantyReceipDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.warranty.receip")), "", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if ("" == StringUtilNVL($scope.model.customerDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.customer")), "fCustomerDetail", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if ("" == StringUtilNVL($scope.model.levelDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.level")), "fLevelDetail", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if ("" == StringUtilNVL($scope.model.receipDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.receip")), "fReceipDetail", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if ("" == StringUtilNVL($scope.model.receiveDateDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.receive.date")), "fReceiveDateDetail", $translate
											.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if ("" == StringUtilNVL($scope.model.estimateDateDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.estimate.date")), "fEstimateDateDetail", $translate
											.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if ("" == StringUtilNVL($scope.model.lovProcessName)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.lov.process")), "dLovProcessCode", $translate.instant("vnm.lable.vnm.name"),
											"");
									return;
								}
								if ("" == StringUtilNVL($scope.model.toReceipDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.to.receip")), "fToReceipDetail", $translate.instant("vnm.lable.vnm.name"),
											"");
									return;
								}
								if ("" == StringUtilNVL($scope.model.processDateDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.process.date")), "fProcessDateDetail", $translate
											.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if ("" == StringUtilNVL($scope.model.resultDetail)) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.result")), "fResultDetail", $translate.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if (parseDate($("#fReceiveDateDetail").val()).getTime() > parseDate($("#fProcessDateDetail").val()).getTime()) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus((($translate.instant("vnm.FormWarTransaction.FSS-30004")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.receive.date"))).replace('%FIELD1%', $translate
											.instant("vnm.FormWarTransaction.label.process.date")), "fProcessDateDetail", $translate
											.instant("vnm.lable.vnm.name"), "");
									return;
								}
								if (parseDate($("#fReceiveDateDetail").val()).getTime() > parseDate($("#fEstimateDateDetail").val()).getTime()) {
									$scope.setVisibleAll();
									$scope.dProcessDateDetail = false;
									$scope.dResultDetail = false;
									bootboxAlertFocus((($translate.instant("vnm.FormWarTransaction.FSS-30004")).replace('%FIELD%', $translate
											.instant("vnm.FormWarTransaction.label.receive.date"))).replace('%FIELD1%', $translate
											.instant("vnm.FormWarTransaction.label.estimate.date")), "fEstimateDateDetail", $translate
											.instant("vnm.lable.vnm.name"), "");
									return;
								}
							} else {
								bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormWarTransaction.messConfirmResult"),
										$scope.btnResultOnclickConfirmOK, $scope.btnResultOnclickConfirmNOK);
							}
						} else if ("MODIFY" == $scope.actionAccept) {
							if ("" == StringUtilNVL($scope.model.warrantyReceipDetail)) {
								$scope.validateModify();
								$scope.isDisabledBtnInfo = false;
								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.warranty.receip")), "", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							} else if ("" == StringUtilNVL($scope.model.receiveDateDetail)) {
								$scope.validateModify();

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.receive.date")), "fReceiveDateDetail", $translate.instant("vnm.lable.vnm.name"),
										"");
								return;
							} else if ("" == StringUtilNVL($scope.model.customerDetail)) {
								$scope.validateModify();

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.customer")), "fCustomerDetail", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							} else if ("" == StringUtilNVL($scope.model.levelDetail)) {
								$scope.validateModify();

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.level")), "fLevelDetail", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							} else if ("" == StringUtilNVL($scope.model.receipDetail)) {
								$scope.validateModify();

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.receip")), "fReceipDetail", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							} else if ("" == StringUtilNVL($scope.model.estimateDateDetail)) {
								$scope.validateModify();

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.estimate.date")), "fEstimateDateDetail", $translate
										.instant("vnm.lable.vnm.name"), "");
								return;
							} else if ("" == StringUtilNVL($scope.model.lovProcessName)) {
								$scope.validateModify();

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.lov.process")), "fLovProcessCode", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							} else if ("" == StringUtilNVL($scope.model.toReceipDetail)) {
								$scope.validateModify();

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.to.receip")), "fToReceipDetail", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							} else {
								if ("1" == $scope.itemSelectedTblTransaction.status_db) {
									if ("" == StringUtilNVL($scope.model.processDateDetail)) {

										bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
												.instant("vnm.FormWarTransaction.label.process.date")), "fProcessDateDetail", $translate
												.instant("vnm.lable.vnm.name"), "");
										return;
									} else if ("" == StringUtilNVL($scope.model.resultDetail)) {

										bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
												.instant("vnm.FormWarTransaction.label.result")), "fResultDetail", $translate.instant("vnm.lable.vnm.name"), "");
										return;
									} else if ($scope.model.processDateDetail != null && $scope.model.processDateDetail != undefined
											&& $scope.model.processDateDetail != "" && $scope.model.receiveDateDetail != null
											&& $scope.model.receiveDateDetail != undefined && $scope.model.receiveDateDetail != ""
											&& parseDate($("#fReceiveDateDetail").val()).getTime() > parseDate($("#fProcessDateDetail").val()).getTime()) {

										bootboxAlertFocus((($translate.instant("vnm.FormWarTransaction.FSS-30004")).replace('%FIELD%', $translate
												.instant("vnm.FormWarTransaction.label.receive.date"))).replace('%FIELD1%', $translate
												.instant("vnm.FormWarTransaction.label.process.date")), "", $translate.instant("vnm.lable.vnm.name"), "");
										return;

									}
								}
							}
							bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormWarTransaction.messConfirmModify"),
									$scope.btnModifyOnclickConfirmOK, $scope.btnModifyOnclickConfirmNOK);
						} else if ("BGOODS" == $scope.actionAccept) {
							if ("" == StringUtilNVL($scope.model.processDateDetail)) {

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.process.date")), "fProcessDateDetail", $translate.instant("vnm.lable.vnm.name"),
										"");
								return;
							} else if ("" == StringUtilNVL($scope.model.datingDateDetail)) {

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.dating.date")), "fDatingDateDetail", $translate.instant("vnm.lable.vnm.name"),
										"");
								return;
							} else if ("" == StringUtilNVL($scope.model.resultDetail)) {

								bootboxAlertFocus(($translate.instant("vnm.FormWarTransaction.FSS-00002")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.result")), "fResultDetail", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							} else if ($scope.model.processDateDetail != null && $scope.model.processDateDetail != undefined
									&& $scope.model.processDateDetail != "" && $scope.model.receiveDateDetail != null
									&& $scope.model.receiveDateDetail != undefined && $scope.model.receiveDateDetail != ""
									&& parseDate($("#fReceiveDateDetail").val()).getTime() > parseDate($("#fProcessDateDetail").val()).getTime()) {

								bootboxAlertFocus((($translate.instant("vnm.FormWarTransaction.FSS-30004")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.receive.date"))).replace('%FIELD1%', $translate
										.instant("vnm.FormWarTransaction.label.process.date")), "fProcessDateDetail", $translate.instant("vnm.lable.vnm.name"),
										"");
								return;
							} else if ($scope.model.datingDateDetail != null && $scope.model.datingDateDetail != undefined
									&& $scope.model.datingDateDetail != "" && $scope.model.receiveDateDetail != null
									&& $scope.model.receiveDateDetail != undefined && $scope.model.receiveDateDetail != ""
									&& parseDate($("#fReceiveDateDetail").val()).getTime() > parseDate($("#fDatingDateDetail").val()).getTime()) {

								bootboxAlertFocus((($translate.instant("vnm.FormWarTransaction.FSS-30004")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.receive.date"))).replace('%FIELD1%', $translate
										.instant("vnm.FormWarTransaction.label.dating.date")), "fDatingDateDetail", $translate.instant("vnm.lable.vnm.name"),
										"");
								return;
							} else if ($scope.model.datingDateDetail != null && $scope.model.datingDateDetail != undefined
									&& $scope.model.datingDateDetail != "" && $scope.model.processDateDetail != null
									&& $scope.model.processDateDetail != undefined && $scope.model.processDateDetail != ""
									&& parseDate($("#fProcessDateDetail").val()).getTime() > parseDate($("#fDatingDateDetail").val()).getTime()) {

								bootboxAlertFocus((($translate.instant("vnm.FormWarTransaction.FSS-30004")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.process.date"))).replace('%FIELD1%', $translate
										.instant("vnm.FormWarTransaction.label.dating.date")), "fDatingDateDetail", $translate.instant("vnm.lable.vnm.name"),
										"");
								return;
							} else if ($scope.model.estimateDateDetail != null && $scope.model.estimateDateDetail != undefined
									&& $scope.model.estimateDateDetail != "" && $scope.model.receiveDateDetail != null
									&& $scope.model.receiveDateDetail != undefined && $scope.model.receiveDateDetail != ""
									&& parseDate($("#fReceiveDateDetail").val()).getTime() > parseDate($("#fEstimateDateDetail").val()).getTime()) {

								bootboxAlertFocus((($translate.instant("vnm.FormWarTransaction.FSS-30004")).replace('%FIELD%', $translate
										.instant("vnm.FormWarTransaction.label.receive.date"))).replace('%FIELD1%', $translate
										.instant("vnm.FormWarTransaction.label.estimate.date")), "fEstimateDateDetail", $translate
										.instant("vnm.lable.vnm.name"), "");
								return;
							}
							bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormWarTransaction.messConfirmRegoods"),
									$scope.btnBGoodsOnclickConfirmOK, $scope.btnBGoodsOnclickConfirmNOK);
						}
					}
					$scope.btnResultOnclickConfirmOK = function() {
						overLoading();
						let transStatus = "1";
						var WarTransaction = {
							"warranty_log_id" : $scope.itemSelectedTblTransaction.warranty_log_id,
							"warranty_no" : $scope.model.warrantyReceipDetail,
							"customer_name" : $scope.model.customerDetail,
							"cust_contact" : $scope.model.custContactDetail,
							"receiver_staff_id" : $scope.itemSelectedTblTransaction.receiver_staff_id,
							"receiver_note_no" : $scope.model.toReceipDetail,
							"receive_date" : $("#fReceiveDateDetail").val(),
							"war_level" : $scope.model.levelDetail,
							"receiver_note" : $scope.model.receipDetail,
							"assign_staff_id" : $scope.staffId,
							"estimate_date" : $("#fEstimateDateDetail").val(),
							"war_trans_status" : transStatus,
							"other_note" : $scope.model.commentDetail,
							"result_date" : $("#fProcessDateDetail").val(),
							"return_date" : $("#fDatingDateDetail").val(),
							"result" : $scope.model.resultDetail
						}
						formWarTransaction.onUpdateWarrantyTransaction(WarTransaction, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							} else {
								$scope.model.toReceipDetail = $scope.padLeft($scope.model.toReceipDetail, "0", "9");
								bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.messResult"), "", $translate.instant("vnm.lable.vnm.name"), "");
								$scope.itemSelectedTblTransaction.status_db = transStatus;
								$scope.onChangeAction(ACTION_RESULT, ACTION_OK);
								$('#pnlButtonAction').css('display', 'block');
								$('#pnlButtonOK').css('display', 'none');
								$scope.setPanelButtonByLevel(transStatus, $scope.model.levelDetail);
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							}
						});
					}
					$scope.btnResultOnclickConfirmNOK = function() {
						return;
					}
					$scope.btnModifyOnclickConfirmOK = function() {
						overLoading();
						let transStatus = null;
						if ($scope.model.processDateDetail == null || $scope.model.processDateDetail == undefined || $scope.model.processDateDetail == "") {

							transStatus = "0";
						} else {
							transStatus = "1";
						}
						var WarTransaction = {
							"warranty_log_id" : $scope.itemSelectedTblTransaction.warranty_log_id,
							"warranty_no" : $scope.model.warrantyReceipDetail,
							"customer_name" : $scope.model.customerDetail,
							"cust_contact" : $scope.model.custContactDetail,
							"receiver_staff_id" : $scope.itemSelectedTblTransaction.receiver_staff_id,
							"receiver_note_no" : $scope.model.toReceipDetail,
							"receive_date" : $("#fReceiveDateDetail").val(),
							"war_level" : $scope.model.levelDetail,
							"receiver_note" : $scope.model.receipDetail,
							"assign_staff_id" : $scope.staffId,
							"estimate_date" : $("#fEstimateDateDetail").val(),
							"war_trans_status" : transStatus,
							"other_note" : $scope.model.commentDetail,
							"result_date" : $("#fProcessDateDetail").val(),
							"return_date" : $("#fDatingDateDetail").val(),
							"result" : $scope.model.resultDetail
						}
						formWarTransaction.onUpdateWarrantyTransaction(WarTransaction, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							} else {
								$scope.model.toReceipDetail = $scope.padLeft($scope.model.toReceipDetail, "0", "9");
								bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.messModify"), "", $translate.instant("vnm.lable.vnm.name"), "");
								$scope.itemSelectedTblTransaction.status_db = transStatus;
								$scope.onChangeAction(ACTION_MODIFY, ACTION_OK);
								$('#pnlButtonAction').css('display', 'block');
								$('#pnlButtonOK').css('display', 'none');
								$scope.setPanelButtonByLevel(transStatus, $scope.model.levelDetail);
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							}
						});
					}
					$scope.btnModifyOnclickConfirmNOK = function() {
						return;
					}
					$scope.btnBGoodsOnclickConfirmOK = function() {
						overLoading();
						let transStatus = "3";
						var WarTransaction = {
							"warranty_log_id" : $scope.itemSelectedTblTransaction.warranty_log_id,
							"warranty_no" : $scope.model.warrantyReceipDetail,
							"customer_name" : $scope.model.customerDetail,
							"cust_contact" : $scope.model.custContactDetail,
							"receiver_staff_id" : $scope.itemSelectedTblTransaction.receiver_staff_id,
							"receiver_note_no" : $scope.model.toReceipDetail,
							"receive_date" : $("#fReceiveDateDetail").val(),
							"war_level" : $scope.model.levelDetail,
							"receiver_note" : $scope.model.receipDetail,
							"assign_staff_id" : $scope.staffId,
							"estimate_date" : $("#fEstimateDateDetail").val(),
							"war_trans_status" : transStatus,
							"other_note" : $scope.model.commentDetail,
							"result_date" : $("#fProcessDateDetail").val(),
							"return_date" : $("#fDatingDateDetail").val(),
							"result" : $scope.model.resultDetail
						}
						formWarTransaction.onUpdateWarrantyTransaction(WarTransaction, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							} else {
								$scope.model.toReceipDetail = $scope.padLeft($scope.model.toReceipDetail, "0", "9");
								bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.messRegoods"), "", $translate.instant("vnm.lable.vnm.name"), "");
								$scope.itemSelectedTblTransaction.status_db = transStatus;
								$scope.onChangeAction(ACTION_REGOODS, ACTION_OK);
								$('#pnlButtonAction').css('display', 'block');
								$('#pnlButtonOK').css('display', 'none');
								$scope.setPanelButtonByLevel(transStatus, $scope.model.levelDetail);
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							}
						});
					}
					$scope.btnBGoodsOnclickConfirmNOK = function() {
						return;
					}
					$scope.btnReceiptOnclickConfirmOK = function() {
						overLoading();
						var WarTransaction = {
							"shop_id" : $localStorage.clientContext.shop.shopId,
							"warranty_no" : $scope.model.warrantyReceipDetail,
							"customer_name" : $scope.model.customerDetail,
							"cust_contact" : $scope.model.custContactDetail,
							"receiver_staff_id" : $localStorage.clientContext.shop.staffId,
							"receive_date" : $("#fReceiveDateDetail").val(),
							"war_level" : $scope.model.levelDetail,
							"receiver_note" : $scope.model.receipDetail,
							"assign_staff_id" : $scope.staffId,
							"estimate_date" : $("#fEstimateDateDetail").val(),
							"war_trans_status" : "0",
							"other_note" : $scope.model.commentDetail,
							"warranty_id" : $scope.warrantyId
						}
						formWarTransaction.onInsertWarrantyTransaction(WarTransaction, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								$("#divTable").removeClass("disabledDiv");
								closeOverLay();
							} else {
								$scope.model.toReceipDetail = $scope.padLeft(result[0], "0", "9");
								let WarTransactionSearch = {
									"shop_id" : $localStorage.clientContext.shop.shopId,
									"warranty_no" : $scope.model.warrantyReceipDetail,
									"customer_name" : "",
									"cust_contact" : "",
									"receiver_staff_id" : $localStorage.clientContext.shop.staffId,
									"receive_date" : "",
									"war_level" : "",
									"receiver_note" : $scope.model.receipDetail,
									"assign_staff_id" : $scope.staffId,
									"estimate_date" : "",
									"war_trans_status" : "0",
									"other_note" : $scope.model.commentDetail,
									"warranty_id" : $scope.warrantyId
								}

								formWarTransaction.findWarTrans(WarTransactionSearch, function(result) {
									if (result != null && result != undefined && result.status === '0') {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									} else {
										if (result.length > 0) {
											$scope.listTransactionsModel.push(result[0]);
											$('#pnlButtonAction').css('display', 'block');
											$('#pnlButtonOK').css('display', 'none');
											$("#divTable").removeClass("disabledDiv");
											$scope.onChangeAction(ACTION_RECEIPT, ACTION_OK);
											$scope.fillDataDetail(result[0]);
											createDatatableTransaction($scope.listTransactionsModel);
											bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.messInsert"), "", $translate
													.instant("vnm.lable.vnm.name"), "");
											closeOverLay();
										} else {
											bootboxAlertFocus($translate.instant("vnm.FormWarTransaction.MSG5"), "", $translate.instant("vnm.lable.vnm.name"),
													"");
											closeOverLay();
										}
									}
								});

							}
						});
					}
					$scope.btnReceiptOnclickConfirmNOK = function() {
						return;
					}
					$scope.destroy = function() {
						$scope.onChangeAction(ACTION_NONE, ACTION_CANCEL);
					}
					$scope.validateModify = function() {
						$scope.setVisibleBottom(false);
						$scope.dProcessDateDetail = true;
						$scope.dDatingDateDetail = true;
						$scope.dResultDetail = true;
						$scope.isDisabledBtnInfo = true;
					}
					$scope.validateReceip = function() {
						$scope.setVisibleAll();
						$scope.dCustomerDetail = false;
						$scope.dReceipDetail = false;
						$scope.dLovReceiveCode = true;
						$scope.dLovReceiveName = true;
						$scope.dReceiveDateDetail = false;
						$scope.dEstimateDateDetail = false;
						$scope.dLevelDetail = false;
						$scope.dLovProcessCode = false;
						$scope.dCommentDetail = false;
						$scope.disableSearch = false;
						$scope.dCustContactDetail = false;
						$scope.isDisabledBtnInfo = false;
					}
					$scope.addInfo = function() {
						overLoading();
						$scope.dDlgGoodsCode = true;
						$scope.dDlgGoodsName = true;
						$scope.disableDlgUnit = true;
						$scope.dDlgWarrantyTime = true;
						$scope.dDlgSparePart = true;
						$scope.dDlgWarrantyParameter = true;
						$scope.dDlgLovProcessorCode = true;
						$scope.dDlgLovProcessorName = true;
						$scope.dDlgProcessDate = true;
						$scope.dDlgResult = true;
						$scope.dDlgNote = true;
						$scope.dDlgReceipt = true;
						$scope.model.dlgWarrantyNo = "";
						$scope.model.dlgSerial = "";
						$scope.lstNull = [];
						createDatatableDlgListItem($scope.lstNull);
						createDatatableDlgTblWarrantyHistory($scope.lstNull);
						$scope.clearDlgGoodsInfo();
						$scope.clearDlgWarrantyHis();
						formWarTransaction.getListApDomain("05", function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							} else {
								$scope.lstDlgUnit = result;
								formWarTransaction.getListApDomain("38", function(result) {
									if (result != null && result != undefined && result.status === '0') {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									} else {
										$scope.dlgLstStatus = result;
										closeOverLay();
										$scope.showModalFunction("modalEnqueryWarranty");
									}
								});
							}
						});

					}
					$scope.clearDlgGoodsInfo = function() {
						$scope.model.dlgGoodsCode = "";
						$scope.model.dlgGoodsName = "";
						$scope.model.dlgUnit = "";
						$scope.model.dlgWarrantyTime = "";
						$scope.model.dlgSparePart = "";
						$scope.model.dlgWarrantyParameter = "";
					}
					$scope.clearDlgWarrantyHis = function() {
						$scope.model.dlgReceipt = "";
						$scope.model.dlgLovProcessorCode = "";
						$scope.model.dlgLovProcessorName = "";
						$scope.model.dlgProcessDate = "";
						$scope.model.dlgResult = "";
						$scope.model.dlgNote = "";
					}
					$scope.checkStartDate = function() {
						if ($("#fStartDate").val() != null && $("#fStartDate").val() != "") {
							if (!isDate($("#fStartDate").val())) {
								bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.DateWrongFormat'), 'fStartDate', $translate
										.instant("vnm.lable.vnm.name"), "");
								$("#fStartDate").val("");
								return;
							}
						}
					}
					$scope.checkReceiveDateDetail = function() {
						if ($("#fReceiveDateDetail").val() != null && $("#fReceiveDateDetail").val() != "") {
							if (!isDate($("#fReceiveDateDetail").val())) {
								bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.DateWrongFormat'), 'fReceiveDateDetail', $translate
										.instant("vnm.lable.vnm.name"), "");
								$("#fReceiveDateDetail").val("");
								return;
							}
						}
					}
					$scope.checkEstimateDateDetail = function() {
						if ($("#fEstimateDateDetail").val() != null && $("#fEstimateDateDetail").val() != "") {
							if (!isDate($("#fEstimateDateDetail").val())) {
								bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.DateWrongFormat'), 'fEstimateDateDetail', $translate
										.instant("vnm.lable.vnm.name"), "");
								$("#fEstimateDateDetail").val("");
								return;
							}
						}
					}
					$scope.checkProcessDateDetail = function() {
						if ($("#fProcessDateDetail").val() != null && $("#fProcessDateDetail").val() != "") {
							if (!isDate($("#fProcessDateDetail").val())) {
								bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.DateWrongFormat'), 'fProcessDateDetail', $translate
										.instant("vnm.lable.vnm.name"), "");
								$("#fProcessDateDetail").val("");
								return;
							}
						}
					}
					$scope.checkDatingDateDetail = function() {
						if ($("#fDatingDateDetail").val() != null && $("#fDatingDateDetail").val() != "") {
							if (!isDate($("#fDatingDateDetail").val())) {
								bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.DateWrongFormat'), 'fDatingDateDetail', $translate
										.instant("vnm.lable.vnm.name"), "");
								$("#fDatingDateDetail").val("");
								return;
							}
						}
					}
					$scope.fillDataDetail = function(data) {
						overLoading();
						if (Object.keys(data).length != 0) {
							$scope.lstReason = [];
							$scope.model.warrantyReceipDetail = data.warranty_no;
							$scope.model.customerDetail = data.customer_name;
							$scope.model.custContactDetail = data.cust_contact;
							$scope.model.receiveDateDetail = data.receive_date;

							$scope.model.levelDetail = data.war_level;
							$scope.model.toReceipDetail = data.receiver_note_no;
							$scope.model.receipDetail = data.receiver_note;
							$scope.model.commentDetail = data.other_note;
							$scope.model.lovReceiveCode = data.staff_receiver_code;
							$scope.model.lovReceiveName = data.staff_receiver_name;
							$scope.model.lovProcessCode = data.staff_process_code;
							$scope.model.lovProcessName = data.staff_process_name;
							$scope.staffId = data.assign_staff_id;
							$scope.model.estimateDateDetail = data.estimate_date;
							$scope.model.processDateDetail = data.result_date;
							$scope.model.datingDateDetail = data.return_date;
							$scope.model.resultDetail = data.result;
							$scope.setPanelButtonByLevel(data.status_db, data.war_level);
						}
						closeOverLay();
					}
					$scope.fillGoodsInformation = function(data) {
						if (Object.keys(data).length != 0) {
							$scope.model.dlgGoodsCode = data.goods_code;
							$scope.model.dlgGoodsName = data.name;
							$scope.model.dlgUnit = data.unit;
							$scope.model.dlgWarrantyTime = data.war_period;
							$scope.model.dlgSparePart = data.goods_warranty;
							$scope.model.dlgWarrantyParameter = data.goods_description;
						}
					}
					$scope.fillWarrantyHistoryDetail = function(data) {
						if (Object.keys(data).length != 0) {
							$scope.model.dlgReceipt = data.receiver_note;
							$scope.model.dlgLovProcessorCode = data.staff_code;
							$scope.model.dlgLovProcessorName = data.staff_name;
							$scope.model.dlgProcessDate = data.result_date;
							$scope.model.dlgResult = data.result_note;
							$scope.model.dlgNote = data.other_note;
						}
					}
					$scope.clearForm = function() {
						$scope.lstEmpty = [];
						$scope.listSelected = [];
						createDatatableTransaction($scope.lstEmpty);
						$scope.model.checkAll = false;
						$scope.disableApprove = true;
						$scope.disableDestroy = true;
						$scope.disablePrint = true;
						$scope.clearBottom();
					}
					$scope.clearDetailValue = function() {
						$scope.model.warrantyReceip = "";
						$scope.model.toReceip = "";
						$scope.model.customer = "";
						$scope.model.warrantyReceipDetail = "";
						$scope.model.dToReceipDetail = "";
						$scope.model.customerDetail = "";
						$scope.model.custContactDetail = "";
						$scope.model.custContact = "";
						$scope.model.receipDetail = "";
						$scope.model.commentDetail = "";
						$scope.model.resultDetail = "";
						$scope.model.lovReceiveCode = $localStorage.clientContext.shop.staffCode;
						$scope.model.lovReceiveName = $localStorage.clientContext.shop.staffName;
						$scope.model.receiveDateDetail = "";
						$scope.model.estimateDateDetail = "";
						$scope.model.lovProcessCode = "";
						$scope.model.lovProcessName = "";
						$scope.model.processDateDetail = "";
						$scope.model.datingDateDetail = "";
						$scope.model.startDate = "";
					}
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
					// F9 Kho nhan vien
					$("#fLovProcessCode").keyup(function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == '120') {
							$scope.showModalFunction("modalListStaff");
							$scope.itemSelectedListStaff = null;
							createDataTableListStaff($scope.lstStaff);
						} else {
							if ($scope.model.lovProcessCode == '') {
								$scope.model.lovProcessName = '';
							}
						}
					});
					var oTableFListStaff;
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
							"oSearch" : {
								"sSearch" : angular.uppercase($('#fLovProcessCode').val())
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
							var rowData = oTableFListStaff.row(this).data();
							oTableFListStaff.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.itemSelectedListStaff = null;
							$scope.itemSelectedListStaff = rowData;
						});
					}

					$scope.updateFormStaff = function() {
						$scope.staffId = "";
						if ($scope.itemSelectedListStaff == undefined || $scope.itemSelectedListStaff == null) {
							bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelected"), "", $translate.instant("vnm.lable.vnm.name"),
									"")
							return;
						}
						$scope.model.lovProcessCode = $scope.itemSelectedListStaff.code.trim();
						$scope.model.lovProcessName = $scope.itemSelectedListStaff.name.trim();
						$scope.staffId = $scope.itemSelectedListStaff.staffId.trim();
						document.getElementById('fLovProcessCode').title = $scope.model.lovProcessCode.trim();
						document.getElementById('fLovProcessName').title = $scope.model.lovProcessName.trim();
						$scope.hideModalFunction("modalListStaff");
						angular.element(document.getElementById('fLovProcessCode')).focus();
					}
					$scope.checkF9Staff = function() {
						var check = "0";
						if ($scope.model.lovProcessCode != undefined && $scope.model.lovProcessCode != "") {
							for (var i = 0; i < $scope.lstStaff.length; i++) {
								if ($scope.model.lovProcessCode.trim().toUpperCase() == $scope.lstStaff[i].code.toUpperCase()) {
									$scope.model.lovProcessCode = $scope.lstStaff[i].code.trim();
									$scope.model.lovProcessName = $scope.lstStaff[i].name.trim();
									$scope.staffId = $scope.lstStaff[i].staffId.trim();
									check = "1";
									break;
								}
							}
							if ("0" == check) {
								$scope.showModalFunction("modalListStaff");
								$scope.itemSelectedListStaff = null;
								createDataTableListStaff($scope.lstStaff);
							}
						} else {
							$scope.model.lovProcessCode = "";
							$scope.model.lovProcessName = "";
						}
					}
					$scope.dialogListStaffActionBack = function() {
						angular.element(document.getElementById('fLovProcessCode')).focus();
						$scope.hideModalFunction("modalListStaff");
					}
					$scope.fillLevel = function(data) {
						var vReturn = "";
						for (var iLevel = 0; iLevel < $scope.lstLevelDetail.length; iLevel++) {
							if ($scope.lstLevelDetail[iLevel].code == data) {
								vReturn = $scope.lstLevelDetail[iLevel].name;
								break;
							}
						}
						return vReturn;
					}
					$scope.fillStatus = function(data) {
						var vReturn = "";
						for (var iStatus = 0; iStatus < $scope.lstStatus.length; iStatus++) {
							if ($scope.lstStatus[iStatus].code == data) {
								vReturn = $scope.lstStatus[iStatus].name;
								break;
							}
						}
						return vReturn;
					}
					$scope.fillDlgStatus = function(data) {
						var vReturn = "";
						for (var iStatus = 0; iStatus < $scope.dlgLstStatus.length; iStatus++) {
							if ($scope.dlgLstStatus[iStatus].code == data) {
								vReturn = $scope.dlgLstStatus[iStatus].name;
								break;
							}
						}
						return vReturn;
					}
					$scope.padLeft = function(s, t, length) {
						var stringlength = length - s.length;
						var temple = "";
						for (var i = 0; i < stringlength; i++) {
							temple = t + temple;
						}
						return temple + s;
					}
					var ChuSo = new Array($translate.instant("vnm.FormBankTransactionApprove.constants.zero"), $translate
							.instant("vnm.FormBankTransactionApprove.constants.one"), $translate.instant("vnm.FormBankTransactionApprove.constants.two"),
							$translate.instant("vnm.FormBankTransactionApprove.constants.three"), $translate
									.instant("vnm.FormBankTransactionApprove.constants.four"), $translate
									.instant("vnm.FormBankTransactionApprove.constants.five"), $translate
									.instant("vnm.FormBankTransactionApprove.constants.six"), $translate
									.instant("vnm.FormBankTransactionApprove.constants.seven"), $translate
									.instant("vnm.FormBankTransactionApprove.constants.eight"), $translate
									.instant("vnm.FormBankTransactionApprove.constants.nine"));
					var Tien = new Array("", $translate.instant("vnm.FormBankTransactionApprove.constants.thousand"), $translate
							.instant("vnm.FormBankTransactionApprove.constants.Million"), $translate
							.instant("vnm.FormBankTransactionApprove.constants.billions"), $translate
							.instant("vnm.FormBankTransactionApprove.constants.thousands.of.billions"), $translate
							.instant("vnm.FormBankTransactionApprove.constants.million.billion"));

					function DocSo3ChuSo(baso) {
						var tram;
						var chuc;
						var donvi;
						var KetQua = "";
						tram = parseInt(baso / 100);
						chuc = parseInt((baso % 100) / 10);
						donvi = baso % 10;
						if (tram == 0 && chuc == 0 && donvi == 0)
							return "";
						if (tram != 0) {
							KetQua += ChuSo[tram] + $translate.instant("vnm.FormBankTransactionApprove.constants.hundred");
							if ((chuc == 0) && (donvi != 0))
								KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.linh");
						}
						if ((chuc != 0) && (chuc != 1)) {
							KetQua += ChuSo[chuc] + $translate.instant("vnm.FormBankTransactionApprove.constants.muoi");
							if ((chuc == 0) && (donvi != 0))
								KetQua = KetQua + $translate.instant("vnm.FormBankTransactionApprove.constants.linh");
						}
						if (chuc == 1)
							KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.ten");
						switch (donvi) {
						case 1:
							if ((chuc != 0) && (chuc != 1)) {
								KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.mot");
							} else {
								KetQua += ChuSo[donvi];
							}
							break;
						case 5:
							if (chuc == 0) {
								KetQua += ChuSo[donvi];
							} else {
								KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.lam");
							}
							break;
						default:
							if (donvi != 0) {
								KetQua += ChuSo[donvi];
							}
							break;
						}
						return KetQua;
					}

					function numberToWord(SoTien) {
						var lan = 0;
						var i = 0;
						var so = 0;
						var KetQua = "";
						var tmp = "";
						var ViTri = new Array();
						if (SoTien < 0)
							return $translate.instant("vnm.FormBankTransactionApprove.constants.so.tien.am");
						if (SoTien == 0)
							return $translate.instant("vnm.FormBankTransactionApprove.constants.khong.dong");
						if (SoTien > 0) {
							so = SoTien;
						} else {
							so = -SoTien;
						}
						if (SoTien > 8999999999999999) {
							// SoTien = 0;
							return $translate.instant("vnm.FormBankTransactionApprove.constants.so.qua.lon");
						}
						ViTri[5] = Math.floor(so / 1000000000000000);
						if (isNaN(ViTri[5]))
							ViTri[5] = "0";
						so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
						ViTri[4] = Math.floor(so / 1000000000000);
						if (isNaN(ViTri[4]))
							ViTri[4] = "0";
						so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
						ViTri[3] = Math.floor(so / 1000000000);
						if (isNaN(ViTri[3]))
							ViTri[3] = "0";
						so = so - parseFloat(ViTri[3].toString()) * 1000000000;
						ViTri[2] = parseInt(so / 1000000);
						if (isNaN(ViTri[2]))
							ViTri[2] = "0";
						ViTri[1] = parseInt((so % 1000000) / 1000);
						if (isNaN(ViTri[1]))
							ViTri[1] = "0";
						ViTri[0] = parseInt(so % 1000);
						if (isNaN(ViTri[0]))
							ViTri[0] = "0";
						if (ViTri[5] > 0) {
							lan = 5;
						} else if (ViTri[4] > 0) {
							lan = 4;
						} else if (ViTri[3] > 0) {
							lan = 3;
						} else if (ViTri[2] > 0) {
							lan = 2;
						} else if (ViTri[1] > 0) {
							lan = 1;
						} else {
							lan = 0;
						}
						for (i = lan; i >= 0; i--) {
							tmp = DocSo3ChuSo(ViTri[i]);
							KetQua += tmp;
							if (ViTri[i] > 0)
								KetQua += Tien[i];
						}
						if (KetQua.substring(KetQua.length - 1) == ',') {
							KetQua = KetQua.substring(0, KetQua.length - 1);
						}
						KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2)
								+ $translate.instant("vnm.FormBankTransactionApprove.constants.dong");
						return KetQua;
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
function parseDate(str) {
	if (str.length > 10) {
		str = (str.substr(0, 10)).split(new RegExp('-', 'i')).join('/');
	}
	var mdy = str.split('/');
	return new Date(mdy[2], mdy[1], mdy[0]);
}
function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
app_vnm.directive('format', [ '$filter', function($filter) {
	return {
		require : '?ngModel',
		link : function(scope, elem, attrs, ctrl) {
			if (!ctrl)
				return;

			ctrl.$formatters.unshift(function(a) {
				return $filter("number")(ctrl.$modelValue)
			});

			elem.bind('blur', function(event) {
				var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
				elem.val($filter("number")(plainNumber));
			});
		}
	};
} ]);