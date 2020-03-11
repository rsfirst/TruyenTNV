app_vnm.factory('formBankTransactionApprove', function($http, $translate) {
	return {
		getShopListFromRoot : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getShopListFromRoot";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStaffListFromRoot : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getStaffListFromRoot";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListApDomain : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getListApDomain";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getNextReceiptNo : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getNextReceiptNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		enqueryBankDeposit : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/enqueryBankDeposit";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReasonListByType : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getReasonListByType";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListAccountType : function(callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getListAccountType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		approveBankDeposit : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/approveBankDeposit";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		destroyBankDeposit : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/destroyBankDeposit";
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

app_vnm.controller('ctrl-formBankTransactionApprove', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, formBankTransactionApprove) {
	window.document.title = $translate.instant('vnm.FormBankTransactionApprove.page.title');
	$scope.model = {};
	$scope.limitCbb = 20;
	$scope.lstShop = [];
	$scope.disableSearch = false;
	$scope.disableInternalStock = true;
	$scope.disableStatus = true;
	$scope.lstStaff = [];
	$scope.lstInternalStock = [];
	$scope.lstInvoiceStatus = [];
	$scope.lstBankType = [];
	$scope.strNextReceiptNo = "";
	$scope.disablePanelDetail = true;
	$scope.disableApprove = true;
	$scope.disableDestroy = true;
	$scope.disablePrint = true;
	$scope.listTransactionsModel = [];
	$scope.selectItem = {};
	$scope.mvecReasonType1 = [];
	$scope.mvecReasonType2 = [];
	$scope.lstReason = [];
	$scope.lstAccountType = [];
	$scope.listSelected = [];
	$scope.listSelectedPrint = [];
	$scope.shopId = "";
	$scope.staffId = "";
	// initForm
	function initForm() {
		overLoading();
		$scope.model.startDate = moment().format('DD/MM/YYYY');
		$scope.model.endDate = moment().format('DD/MM/YYYY');
		$scope.model.dateEstablish = moment().format('DD/MM/YYYY');
		$scope.model.dateEstablishDetail = moment().format('DD/MM/YYYY');
		formBankTransactionApprove.getShopListFromRoot($localStorage.clientContext.shop.shopId, function(result) {
			if (result != null && result != undefined && result.status === '0') {
				bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();

			} else {
				$scope.lstShop = result;
				for (var i = 0; i < $scope.lstShop.length; i++) {
					if ($localStorage.clientContext.shop.shopCode == $scope.lstShop[i].shopCode.trim()) {
						$scope.model.shopCode = $scope.lstShop[i].shopCode;
						$scope.model.shopName = $scope.lstShop[i].shopName;
						document.getElementById('fShopCode').title = $scope.model.shopCode.trim();
						document.getElementById('fShopName').title = $scope.model.shopName.trim();
						$scope.shopId = $scope.lstShop[i].shopId;
						break;
					}
				}
				formBankTransactionApprove.getStaffListFromRoot($scope.shopId, function(result) {
					if (result != null && result != undefined && result.status === '0') {
						bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
						closeOverLay();
					} else {
						$scope.lstStaff = result;
						formBankTransactionApprove.getListApDomain("11", function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							} else {
								$scope.lstInvoiceStatus = result;
								$scope.model.invoiceStatus = $scope.lstInvoiceStatus[0];
								$scope.model.invoiceStatusDetail = $scope.lstInvoiceStatus[0];
								formBankTransactionApprove.getListApDomain("68", function(result) {
									if (result != null && result != undefined && result.status === '0') {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									} else {
										$scope.lstBankType = result;
										$scope.model.bankType = $scope.lstBankType[1];
										$scope.model.bankTypeDetail = $scope.lstBankType[1];
										var strType = "";
										$scope.strNextReceiptNo = "";
										$scope.lstInput = [];
										if ($scope.lstBankType.length > 0) {
											if ("1" == $scope.model.bankTypeDetail.code)
												strType = "4";
											else
												strType = "5";
										} else {
											strType = "5";
										}
										$scope.lstInput.push($localStorage.clientContext.shop.shopCode);
										$scope.lstInput.push($localStorage.clientContext.shop.shopId);
										$scope.lstInput.push(strType);
										formBankTransactionApprove.getNextReceiptNo($scope.lstInput, function(result) {
											if (result != null && result != undefined && result.status === '0') {
												bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
												closeOverLay();
											} else {
												if (result.length < 1) {
													bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.MSG-A0004"), "", $translate
															.instant("vnm.lable.vnm.name"), "");
													$scope.model.voucherReceivedNoDetail = result[0];
													$scope.lstReasonInput = [];
													$scope.lstReasonInput.push("20");
													$scope.lstReasonInput.push("21");
													formBankTransactionApprove.getReasonListByType($scope.lstReasonInput, function(result) {
														if (result != null && result != undefined && result.status === '0') {
															bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
															closeOverLay();
														} else {
															if (result.length > 0) {
																for (var i = 0; i < result.length; i++) {
																	if ("21" == result[i].type) {
																		$scope.mvecReasonType1.push(result[i]);
																	} else {
																		$scope.mvecReasonType2.push(result[i]);
																	}
																	if (i == result.length - 1) {
																		formBankTransactionApprove.getListAccountType(function(result) {
																			if (result != null && result != undefined && result.status === '0') {
																				bootboxAlertFocus(result.messages, "",
																						$translate.instant("vnm.lable.vnm.name"), "");
																				closeOverLay();
																			} else {
																				$scope.lstAccountType = result;
																				closeOverLay();
																			}
																		});
																	}
																}

															}
														}
													});
												} else {
													$scope.model.voucherReceivedNoDetail = result[0];
													$scope.lstReasonInput = [];
													$scope.lstReasonInput.push("20");
													$scope.lstReasonInput.push("21");
													formBankTransactionApprove.getReasonListByType($scope.lstReasonInput, function(result) {
														if (result != null && result != undefined && result.status === '0') {
															bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
															closeOverLay();
														} else {
															if (result.length > 0) {
																for (var i = 0; i < result.length; i++) {
																	if ("21" == result[i].type) {
																		$scope.mvecReasonType1.push(result[i]);
																	} else {
																		$scope.mvecReasonType2.push(result[i]);
																	}
																	if (i == result.length - 1) {
																		formBankTransactionApprove.getListAccountType(function(result) {
																			if (result != null && result != undefined && result.status === '0') {
																				bootboxAlertFocus(result.messages, "",
																						$translate.instant("vnm.lable.vnm.name"), "");
																				closeOverLay();
																			} else {
																				$scope.lstAccountType = result;
																				closeOverLay();
																			}
																		});
																	}
																}

															}
														}
													});
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
	initForm();
	$scope.listSelectCheckBox = [];
	var oTableItemXXX;

	function createDatatableTransaction(dataItem) {
		var rowData = {};
		oTableItemXXX = $('#tableTransaction').DataTable({
			'columnDefs' : [ {
				'targets' : 0,
				'checkboxes' : {
					'selectRow' : true
				}
			} ],
			'select' : {
				'style' : 'multi'
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
			"bSort" : true,
			"info" : true,
			"order" : [],

			"scrollX" : true,
			"columns" : [ {
				"mData" : "receipt_number",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "staff_code",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "create_date",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "amount",
				"render" : function(data, type, row) {
					x = formatNumber(data) == null ? '' : formatNumber(data);
					return "<div data-toggle='tooltip' style='text-align: right;' class='text-wrap' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "status",
				"render" : function(data, type, row) {
					x = $scope.fillStatus(data) == null ? '' : $scope.fillStatus(data);
					return "<div data-toggle='tooltip' class='text-wrap' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "checkBox",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return '<input type="checkbox" style=" margin-left: 4px" class="ng-pristine ng-untouched ng-valid ng-empty" value="' + x + '"></input>';
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
			$scope.itemSelected = rowData;
			$scope.fillDataDetail(rowData);

		});
		$("#fIdCheckAll").removeClass("sorting");
		// check box all
		$('#checkAll').on('click', function() {

			var rows = oTableItemXXX.rows({
				'search' : 'applied'
			}).nodes();

			$('input[type="checkbox"]', rows).prop('checked', this.checked);
			$scope.checkAllCheckBox();

		});
		$('.dataTables_scrollBody thead tr').css({
			visibility : 'collapse'
		});

		$('#tableTransaction').off().on('click', 'input[type="checkbox"]', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			$scope.selectOrRemove(rowData);
		});
		$compile(angular.element('#tableTransaction'))($scope);
	}
	$scope.checkAllCheckBox = function() {
		if ($('#checkAll:checked').length > 0) { // Khi click check all
			if ($scope.listTransactionsModel.length > 0) {
				$scope.listSelected = [];
				$scope.listSelected = $scope.listTransactionsModel.slice(0, $scope.listTransactionsModel.length);
			}
		} else { // Khi bo click check all
			$scope.listSelected = [];
		}
	}
	$scope.selectOrRemove = function(item) {
		if (($scope.listSelected).includes(item)) {
			var index = ($scope.listSelected).indexOf(item);
			if (index !== -1) {
				$scope.listSelected.splice(index, 1);
			}
		} else {
			$scope.listSelected.push(item);
		}
		if ($scope.listSelected.length == $scope.listTransactionsModel.length) {
			$scope.model.checkAll = true;
		} else {
			$scope.model.checkAll = false;
		}

	}
	$scope.search = function() {
		$scope.clearForm();
		var sysDate = moment().format('DD/MM/YYYY');
		if ($scope.model.shopCode == null || $scope.model.shopCode == undefined || "" == $scope.model.shopCode.trim()) {
			bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
					.instant("vnm.FormBankTransactionApprove.label.shop")), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		} else if ($scope.model.startDate != null && $scope.model.startDate != undefined && $scope.model.startDate != ""
				&& parseDate($scope.model.startDate).getTime() > parseDate(sysDate).getTime()) {

			bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-30010")).replace('%FIELD%', $translate
					.instant("vnm.FormBankTransactionApprove.label.start.date")), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		} else if ($scope.model.endDate != null && $scope.model.endDate != undefined && $scope.model.endDate != ""
				&& parseDate($scope.model.endDate).getTime() > parseDate(sysDate).getTime()) {

			bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-30010")).replace('%FIELD%', $translate
					.instant("vnm.FormBankTransactionApprove.label.end.date")), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		} else if ($scope.model.endDate != null && $scope.model.endDate != undefined && $scope.model.endDate != "" && $scope.model.startDate != null
				&& $scope.model.startDate != undefined && $scope.model.startDate != ""
				&& parseDate($scope.model.startDate).getTime() > parseDate($scope.model.endDate).getTime()) {

			bootboxAlertFocus((($translate.instant("vnm.FormBankTransactionApprove.FSS-30004")).replace('%FIELD%', $translate
					.instant("vnm.FormBankTransactionApprove.label.start.date"))).replace('%FIELD1%', $translate
					.instant("vnm.FormBankTransactionApprove.label.end.date")), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;

		} else {
			overLoading();
			var BankDepositInput = {

				"strShopId" : $scope.shopId,
				"strStaffId" : $scope.staffId,
				"strFromDate" : $("#fStartDate").val(),
				"strToDate" : $("#fEndDate").val(),
				"strStatus" : $scope.model.invoiceStatus.code,
				"strInvoiceNo" : $scope.model.invoiceNo,
				"strBankType" : $scope.model.bankType.code
			};
			formBankTransactionApprove.enqueryBankDeposit(BankDepositInput, function(result) {
				if (result != null && result != undefined && result.status === '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else {
					if (result.length > 0) {
						$scope.listTransactionsModel = result;
						$scope.selectItem = $scope.listTransactionsModel[0];
						$scope.fillDataDetail($scope.selectItem);
						createDatatableTransaction($scope.listTransactionsModel);
						if ("1" == $scope.model.invoiceStatus.code) {
							$scope.disableApprove = false;
							$scope.disableDestroy = false;
							$scope.disablePrint = true;
						} else if ("2" == $scope.model.invoiceStatus.code) {
							$scope.disableApprove = true;
							$scope.disableDestroy = true;
							$scope.disablePrint = false;
						} else {
							$scope.disableApprove = true;
							$scope.disableDestroy = true;
							$scope.disablePrint = true;
						}
						closeOverLay();
					} else {
						bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.MSG5"), "", $translate.instant("vnm.lable.vnm.name"), "");
						closeOverLay();
					}
				}
			});

		}
	}
	$scope.approve = function() {
		if ($scope.listSelected == null || $scope.listSelected == undefined || $scope.listSelected.length == 0) {
			bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00069")).replace('%FIELD%', $translate
					.instant("vnm.FormBankTransactionApprove.label.button.approve")), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		}
		bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormBankTransactionApprove.confirmApprove"),
				$scope.btnApproveOnclickConfirmOK, $scope.btnApproveOnclickConfirmNOK);
	}
	$scope.btnApproveOnclickConfirmOK = function() {
		overLoading();
		var dataInput = {
			"userId" : $localStorage.clientContext.shop.staffId,
			"createDate" : moment().format('DD/MM/YYYY'),
			"status" : "2",
			"lstBankDeposit" : $scope.listSelected,
		}

		formBankTransactionApprove.approveBankDeposit(dataInput, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else {
					for (var i = 0; i < $scope.listSelected.length; i++) {
						var index = ($scope.listTransactionsModel).indexOf($scope.listSelected[i]);
						if (index !== -1) {
							$scope.listTransactionsModel.splice(index, 1);
						}
						if (i == $scope.listSelected.length - 1) {
							$scope.selectItem = $scope.listTransactionsModel[0];
							$scope.fillDataDetail($scope.selectItem);
							createDatatableTransaction($scope.listTransactionsModel);
							bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.MSG4"), "", $translate.instant("vnm.lable.vnm.name"), "");
							closeOverLay();
						}
					}
				}
			}
		});
	}
	$scope.btnApproveOnclickConfirmNOK = function() {

	}
	$scope.destroy = function() {
		if ($scope.listSelected == null || $scope.listSelected == undefined || $scope.listSelected.length == 0) {
			bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00069")).replace('%FIELD%', $translate
					.instant("vnm.FormBankTransactionApprove.label.button.destroy")), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		}
		bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormBankTransactionApprove.confirmDestroy"),
				$scope.btnDestroyOnclickConfirmOK, $scope.btnDestroyOnclickConfirmNOK);
	}
	$scope.btnDestroyOnclickConfirmOK = function() {
		overLoading();
		var dataInput = {
			"userId" : $localStorage.clientContext.shop.staffId,
			"createDate" : moment().format('DD/MM/YYYY'),
			"lstBankDeposit" : $scope.listSelected,
		}

		formBankTransactionApprove.destroyBankDeposit(dataInput, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else {
					for (var i = 0; i < $scope.listSelected.length; i++) {
						var index = ($scope.listTransactionsModel).indexOf($scope.listSelected[i]);
						if (index !== -1) {
							$scope.listTransactionsModel.splice(index, 1);
						}
						if (i == $scope.listSelected.length - 1) {
							$scope.selectItem = $scope.listTransactionsModel[0];
							$scope.fillDataDetail($scope.selectItem);
							createDatatableTransaction($scope.listTransactionsModel);
							bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.MSG3"), "", $translate.instant("vnm.lable.vnm.name"), "");
							closeOverLay();
						}
					}
				}
			}
		});
	}
	$scope.btnDestroyOnclickConfirmNOK = function() {
	}

	$scope.print = function() {
		overLoading();
		var strTitle = "";
		var strTitleEN = "";
		var strStaffAmountLable = "";
		$scope.lstReport = [];
		if ($scope.listSelected == null || $scope.listSelected == undefined || $scope.listSelected.length == 0) {
			bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00069")).replace('%FIELD%', $translate
					.instant("vnm.FormBankTransactionApprove.label.button.print.transaction")), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}
		if ("2" == $scope.model.bankTypeDetail) {
			strTitle = $translate.instant("vnm.FormBankTransactionApprove.Title2");
			strTitleEN = $translate.instant("vnm.FormBankTransactionApprove.Title2EN");
			strStaffAmountLable = $translate.instant("vnm.FormBankTransactionApprove.StaffAmount1");
		} else {
			strTitle = $translate.instant("vnm.FormBankTransactionApprove.Title1");
			strTitleEN = $translate.instant("vnm.FormBankTransactionApprove.Title1EN");
			strStaffAmountLable = $translate.instant("vnm.FormBankTransactionApprove.StaffAmount2");
		}
		for (var i = 0; i < $scope.listSelected.length; i++) {

			var strReasonName = "";
			for (var iReason = 0; iReason < $scope.lstReason.length; iReason++) {
				if ($scope.listSelected[i].code == $scope.lstReason[iReason].code) {
					strReasonName = $scope.lstReason[iReason].name;
				}
			}
			var ReportInput = {
				"strTitle" : strTitle,
				"strTitleEN" : strTitleEN,
				"strVoucherNo" : StringUtilNVL($scope.listSelected[i].receipt_number),
				"strCreateDate" : StringUtilNVL($scope.listSelected[i].create_date),
				"strBankName" : StringUtilNVL($scope.listSelected[i].bank_name),
				"strBankNo" : StringUtilNVL($scope.listSelected[i].bank_account_no),
				"strStaffAmountLable" : strStaffAmountLable,
				"strStaffAmount" : StringUtilNVL($scope.listSelected[i].bank_staff),
				"strReason" : strReasonName,
				"strAmountOriginal" : formatNumber(StringUtilNVL($scope.listSelected[i].amount)),
				"strAmountTotal" : formatNumber(StringUtilNVL($scope.listSelected[i].amount)),
				"strAmountWord" : numberToWord($scope.listSelected[i].amount),
				"strCollector" : $translate.instant("vnm.FormBankTransactionApprove.Collector"),
				"strCollectorEN" : $translate.instant("vnm.FormBankTransactionApprove.CollectorEN"),
				"strPayer" : $translate.instant("vnm.FormBankTransactionApprove.Payer"),
				"strPayerEN" : $translate.instant("vnm.FormBankTransactionApprove.PayerEN"),
				"fileTempName" : 'reportBankTransactionApprove',
				"fileType" : '.pdf'
			};
			$scope.lstReport.push(ReportInput);
		}

		formBankTransactionApprove.exportFile(encodeURI(JSON.stringify($scope.lstReport)), function(result, status, header, config) {
			if (result.status == '0' && result.status != 'undefined') {
				bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"),
						"");
				closeOverLay();
			} else {
				download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				closeOverLay();
			}
		});

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
	$scope.checkEndDate = function() {
		if ($("#fEndDate").val() != null && $("#fEndDate").val() != "") {
			if (!isDate($("#fEndDate").val())) {
				bootboxAlertFocus($translate.instant('vnm.form_stock_trans_enquery.error.DateWrongFormat'), 'fEndDate', $translate
						.instant("vnm.lable.vnm.name"), "");
				$("#fEndDate").val("");
				return;
			}
		}
	}
	$scope.bankReceivedNoFocusGained = function() {
		var strType = "";
		$scope.strNextReceiptNo = "";
		$scope.lstInput = [];
		if ($scope.lstBankType.length > 0) {
			if ("1" == $scope.model.bankType)
				strType = "4";
			else
				strType = "5";
		} else {
			strType = "5";
		}
		$scope.lstInput.push($localStorage.clientContext.shop.shopCode);
		$scope.lstInput.push($localStorage.clientContext.shop.shopId);
		$scope.lstInput.push(strType);
		formBankTransactionApprove.getNextReceiptNo($scope.lstInput, function(result) {
			if (result != null && result != undefined && result.status === '0') {
				bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				App.unblockUI("#contentMain");
			} else {
				if (result.length < 1) {
					bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.MSG-A0004"), "", $translate.instant("vnm.lable.vnm.name"), "");
					App.unblockUI("#contentMain");
					return;
				} else {
					$scope.model.voucherReceivedNoDetail = result[0];
				}
			}
		});
	}
	$scope.fillDataDetail = function(data) {
		overLoading();
		if (data != undefined) {
			$scope.clearFormDetail();
			$scope.lstReason = [];
			$scope.model.bankTypeDetail = data.type;
			$scope.model.invoiceStatusDetail = data.status;
			$scope.model.voucherReceivedNoDetail = data.receipt_number;
			$scope.model.dateEstablishDetail = data.create_date;

			for (var i = 0; i < $scope.lstShop.length; i++) {
				if (data.shop_code == $scope.lstShop[i].shopCode) {
					$scope.model.shopSentName = $scope.lstShop[i].shopName;
					$scope.model.shopSentCode = data.shop_code;
					break;
				}
			}
			for (var i = 0; i < $scope.lstStaff.length; i++) {
				if (data.staff_code == $scope.lstStaff[i].code) {
					$scope.model.staffSentName = $scope.lstStaff[i].name;
					$scope.model.staffSentCode = data.shop_code;
					break;
				}
			}
			if ("2" == data.type) {
				$scope.lstReason = $scope.mvecReasonType2;
			} else {
				$scope.lstReason = $scope.mvecReasonType1;
			}
			for (var i = 0; i < $scope.lstStaff.length; i++) {
				if (data.code == $scope.lstReason[i].code) {
					$scope.model.reasonDetailName = $scope.lstReason[i].name;
					$scope.model.reasonDetailCode = data.code;
					break;
				}
			}
			$scope.model.bankNameDetail = data.bank_name;
			$scope.model.bankInvoiceNoDetail = data.bank_account_no;
			$scope.model.amountOriginalDetail = data.amount;
			$scope.model.amountTotalDetail = data.amount;
			$scope.model.accountCodeDetail = data.account_code;
			$scope.model.noteDetail = data.description;
			$scope.model.staffAmountDetail = data.bank_staff;
		}
		closeOverLay();
	}
	$scope.clearForm = function() {
		$scope.lstEmpty = [];
		$scope.listSelected = [];
		createDatatableTransaction($scope.lstEmpty);
		$scope.model.checkAll = false;
		$scope.disableApprove = true;
		$scope.disableDestroy = true;
		$scope.disablePrint = true;
		$scope.clearFormDetail();
	}
	$scope.clearFormDetail = function() {
		$scope.model.bankTypeDetail = "2";
		$scope.model.invoiceStatusDetail = "1";
		$scope.model.voucherReceivedNoDetail = "";
		$scope.model.dateEstablishDetail = moment().format('DD/MM/YYYY');
		$scope.model.shopSentName = "";
		$scope.model.shopSentCode = "";
		$scope.model.staffSentName = "";
		$scope.model.staffSentCode = "";
		$scope.model.reasonDetailName = "";
		$scope.model.reasonDetailCode = "";
		$scope.model.bankNameDetail = "";
		$scope.model.bankInvoiceNoDetail = "";
		$scope.model.amountOriginalDetail = "0";
		$scope.model.amountTotalDetail = "0";
		$scope.model.accountCodeDetail = "";
		$scope.model.noteDetail = "";
		$scope.model.staffAmountDetail = "";
	}

	// F9 Kho nhan vien
	$("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListShop");
			$scope.itemSelectedListShop = null;
			createDataTableListShop($scope.lstShop);
		} else {
			if ($scope.model.shopCode == '') {
				$scope.model.shopName = '';
			}
		}
	});

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
				"sSearch" : angular.uppercase($('#fShopCode').val())
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
			var rowData = oTableFListShop.row(this).data();
			oTableFListShop.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListShop = rowData;
		});
	}

	$scope.updateFormShop = function() {
		$scope.shopId = "";
		if ($scope.itemSelectedListShop == undefined || $scope.itemSelectedListShop == null) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelected"), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		}
		$scope.model.shopCode = $scope.itemSelectedListShop.shopCode.trim();
		$scope.model.shopName = $scope.itemSelectedListShop.shopName.trim();
		$scope.shopId = $scope.itemSelectedListShop.shopId.trim();
		document.getElementById('fShopCode').title = $scope.model.shopCode.trim();
		document.getElementById('fShopName').title = $scope.model.shopName.trim();
		$scope.hideModalFunction("modalListShop");
		angular.element(document.getElementById('fShopCode')).focus();
	}

	$scope.dialogListShopActionBack = function() {
		angular.element(document.getElementById('fShopCode')).focus();
		$scope.hideModalFunction("modalListShop");
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
	$scope.checkF9Shop = function() {
		var check = "0";
		if ($scope.model.shopCode != undefined && $scope.model.shopCode != "") {
			for (var i = 0; i < $scope.lstShop.length; i++) {
				if ($scope.model.shopCode.trim().toUpperCase() == $scope.lstShop[i].shopCode.toUpperCase()) {
					$scope.model.shopCode = $scope.lstShop[i].shopCode.trim();
					$scope.model.shopName = $scope.lstShop[i].shopName.trim();
					$scope.shopId = $scope.lstShop[i].shopId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListShop");
				$scope.itemSelectedListShop = null;
				createDataTableListShop($scope.lstShop);
			}
			overLoading();
			formBankTransactionApprove.getStaffListFromRoot($scope.shopId, function(result) {
				if (result != null && result != undefined && result.status === '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else {
					$scope.lstStaff = result;
					closeOverLay();
				}
			});
		} else {
			$scope.model.shopCode = "";
			$scope.model.shopName = "";
			$scope.shopId = "";
		}
	}
	// F9 Kho nhan vien
	$("#fStaffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListStaff");
			$scope.itemSelectedListStaff = null;
			createDataTableListStaff($scope.lstStaff);
		} else {
			if ($scope.model.staffCode == '') {
				$scope.model.staffName = '';
			}
		}
	});
	$("#fStaffCode").click(function(e) {
		if ($scope.model.shopCode == null || $scope.model.shopCode == undefined || "" == $scope.model.shopCode.trim()) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelectedShop"), "fShopCode", $translate.instant("vnm.lable.vnm.name"), "");
		}
	});
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
				"sSearch" : angular.uppercase($('#fStaffCode').val())
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
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelected"), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		}
		$scope.model.staffCode = $scope.itemSelectedListStaff.code.trim();
		$scope.model.staffName = $scope.itemSelectedListStaff.name.trim();
		$scope.staffId = $scope.itemSelectedListStaff.staffId.trim();
		document.getElementById('fStaffCode').title = $scope.model.staffCode.trim();
		document.getElementById('fStaffName').title = $scope.model.staffName.trim();
		$scope.hideModalFunction("modalListStaff");
		angular.element(document.getElementById('fStaffCode')).focus();
	}

	$scope.dialogListStaffActionBack = function() {
		angular.element(document.getElementById('fStaffCode')).focus();
		$scope.hideModalFunction("modalListStaff");
	}
	$scope.checkF9Staff = function() {
		var check = "0";
		if ($scope.model.staffCode != undefined && $scope.model.staffCode != "") {
			for (var i = 0; i < $scope.lstStaff.length; i++) {
				if ($scope.model.staffCode.trim().toUpperCase() == $scope.lstStaff[i].code.toUpperCase()) {
					$scope.model.staffCode = $scope.lstStaff[i].code.trim();
					$scope.model.staffName = $scope.lstStaff[i].name.trim();
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
			$scope.model.staffCode = "";
			$scope.model.staffName = "";
			$scope.staffId = "";
		}
	}

	$scope.fillStatus = function(data) {
		var vReturn = "";
		for (var iStatus = 0; iStatus < $scope.lstInvoiceStatus.length; iStatus++) {
			if ($scope.lstInvoiceStatus[iStatus].code == data) {
				vReturn = $scope.lstInvoiceStatus[iStatus].name;
				break;
			}
		}
		return vReturn;
	}
	var ChuSo = new Array($translate.instant("vnm.FormBankTransactionApprove.constants.zero"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.one"), $translate.instant("vnm.FormBankTransactionApprove.constants.two"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.three"), $translate.instant("vnm.FormBankTransactionApprove.constants.four"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.five"), $translate.instant("vnm.FormBankTransactionApprove.constants.six"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.seven"), $translate.instant("vnm.FormBankTransactionApprove.constants.eight"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.nine"));
	var Tien = new Array("", $translate.instant("vnm.FormBankTransactionApprove.constants.thousand"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.Million"), $translate.instant("vnm.FormBankTransactionApprove.constants.billions"), $translate
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
		KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2) + $translate.instant("vnm.FormBankTransactionApprove.constants.dong");
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