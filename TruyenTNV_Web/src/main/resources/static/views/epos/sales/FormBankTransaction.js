app_vnm.factory('fctFormBankTransaction', function($http, $translate) {
	return {
		getReceiptType : function(callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getReceiptType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getPayMethod : function(callback) {
			var url = eim_url + "/epos/sales/FormDestroyTransactionController/getPayMethod";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReason : function(callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getReason";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getAccountType : function(callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getAccount";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearch : function(data, callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/onSearch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReceipt : function(callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getReceipt";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStatus : function(callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getStatus";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getBankName : function(data, callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getBankName";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getBankAccount : function(data, callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getBankAccount";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReceiptNo : function(data, callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getReceiptNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReasonPnl : function(callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/getReasonPnl";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
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
		createBankDeposit : function(data, callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/createBankDeposit";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		updateReceiptNo : function(data, callback) {
			var url = eim_url + "/epos/sales/FormBankTransactionController/updateReceiptNo";
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
})

app_vnm.controller('formBankTransactionController', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
		$localStorage, fctFormBankTransaction) {
	$scope.model = {};

	// Load Từ ngày và tới ngày
	var momentObj = moment(new Date());
	var momentString = momentObj.format('DD/MM/YYYY');
	var ROW_NOT_SELECTED = -1;
	var ROW_NOT_SELECTED_SHOP = -1;
	$scope.listShop = [];
	$scope.listShopRoot = [];
	$scope.listStaff = [];
	$scope.listStaffRoot = [];
	$scope.listReceiptType = [];
	$scope.listPayMethod = [];
	$scope.listReason = [];
	$scope.listAccount = [];
	$scope.listReceipt = [];
	$scope.listStatus = [];
	$scope.listBankName = [];
	$scope.listReasonPnl = [];
	$scope.listBankAccount = [];
	$scope.listInvoiceShop = [];
	$scope.listInvoiceStaff = [];

	$scope.itemsTransSelected = {};
	$scope.listItemsTrans = [];

	var shopObj = {};
	$scope.itemSelectedListShop = {};
	$scope.itemSelectedListStaff = {};
	$scope.itemSelectedListReceiver = {};

	$scope.listDataCreate = [];

	$scope.limitCbb = 20;
	$scope.disabledDetail = true;
	$scope.checkDisabledDetail = true;
	$scope.checkDisabledCheckBox = true;
	$scope.disabledPrint = true;
	$scope.checkHideBtn = true;
	$scope.checkbtnSearch = false;

	// Load Cửa hàng
	// $scope.getShop = function(shopId) {
	// App.blockUI({
	// target : "#contentMain",
	// boxed : true,
	// message : 'loading...'
	// });
	// var data = {
	// "status" : '1',
	// "shopStockId" : $localStorage.clientContext.shop.shopId
	// }
	//
	// fctFormBankTransaction.getShop(data, function(result) {
	// if (result != null && result != undefined) {
	// if (result.status == '0') {
	// bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
	// } else if (result.length > 0) {
	// $scope.listShop = result;
	// $scope.listInvoiceShop = result;
	// for (var i = 0; i < result.length; i++) {
	// if (result[i].shopId == $localStorage.clientContext.shop.shopId) {
	// $scope.model.ShopCode = result[i].shopCode;
	// $scope.model.ShopStockId = result[i].shopId;
	// $scope.model.ShopName = result[i].shopName;
	//
	// // $scope.model.invoiceShop = result[i];
	// break;
	// }
	// }
	// shopObj = {
	// "shopCode" : $scope.model.ShopCode,
	// "shopId" : $scope.model.ShopStockId,
	// "shopName" : $scope.model.ShopName,
	// };
	// $scope.getStaff($scope.model.ShopStockId);
	// }
	// }
	// })
	//
	// }

	// load Nhân viên
	// $scope.getStaff = function(shopId) {
	//
	// var data = shopId;
	// fctFormBankTransaction.getStaff(data, function(result) {
	// if (result != null && result != undefined) {
	// if (result.status == '0') {
	// bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
	// } else if (result.length > 0) {
	// $scope.listStaff = result;
	// for (var i = 0; i < result.length; i++) {
	// if (result[i].staffId == $localStorage.clientContext.shop.staffId) {
	// $scope.model.StaffCode = result[i].code;
	// $scope.model.StaffName = result[i].name;
	// $scope.model.staffId = result[i].staffId;
	// break;
	// }
	// }
	//
	// }
	// }
	// $scope.getReceiptType();
	// })
	// }

	$scope.getReceiptType = function() {
		fctFormBankTransaction.getReceiptType(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listReceiptType = result;
					$scope.model.receiptType = result[1];
				}
			}
			$scope.getPayMethod();
		})
	}

	$scope.getPayMethod = function() {
		fctFormBankTransaction.getPayMethod(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					var plusData = {
						"code" : "ALL",
						"name" : "Tất cả"
					}
					result.splice(result, 0, (plusData));
					$scope.listPayMethod = result;
				}
			}
			$scope.getReason();
		})
	}
	$scope.getReason = function() {
		fctFormBankTransaction.getReason(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listReason = result;
					$scope.model.reason = result[0];
				}
			}
			$scope.getAccount();
		})
	}
	$scope.getAccount = function() {
		fctFormBankTransaction.getAccountType(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listAccount = result;
					$scope.model.account = result[0];
				}
			}
			$scope.getReceipt();
		})
	}
	$scope.getReceipt = function() {
		fctFormBankTransaction.getReceipt(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listReceipt = result;
					$scope.model.invoiceReceipt = result[1];
				}
			}
			$scope.getStatus();
		})
	}
	$scope.getStatus = function() {
		fctFormBankTransaction.getStatus(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listStatus = result;
					$scope.model.invoiceStatus = result[0];
				}
			}
			$scope.getBankName();
		})
	}
	$scope.getBankName = function() {
		fctFormBankTransaction.getBankName($localStorage.clientContext.shop.shopId, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listBankName = result;
					$scope.model.invoiceBankName = result[0];
				}
			}
			$scope.getReasonPnl();
		})
	}

	$scope.getReasonPnl = function() {
		fctFormBankTransaction.getReasonPnl(function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listReasonPnl = result;
					$scope.model.invoiceReason = result[0];
				}
				fctFormBankTransaction.getShopListFromRoot($localStorage.clientContext.shop.shopId, function(result) {
					if (result != null && result != undefined && result.status === '0') {
						bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
						closeOverLay();

					} else {
						$scope.listShop = result;
						$scope.listShopRoot = result;
						for (var i = 0; i < $scope.listShopRoot.length; i++) {
							if ($localStorage.clientContext.shop.shopCode == $scope.listShopRoot[i].shopCode.trim()) {
								$scope.model.invoiceShopCode = $scope.listShopRoot[i].shopCode;
								$scope.model.invoiceShopName = $scope.listShopRoot[i].shopName;
								document.getElementById('ShopCode').title = $scope.model.invoiceShopCode.trim();
								document.getElementById('ShopName').title = $scope.model.invoiceShopName.trim();
								$scope.model.invoiceShopId = $scope.listShopRoot[i].shopId;

								$scope.model.ShopCode = result[i].shopCode;
								$scope.model.ShopStockId = result[i].shopId;
								$scope.model.ShopName = result[i].shopName;

								break;
							}
						}
						shopObj = {
							"shopCode" : $scope.model.ShopCode,
							"shopId" : $scope.model.ShopStockId,
							"shopName" : $scope.model.ShopName,
						};
						fctFormBankTransaction.getStaffListFromRoot($scope.model.invoiceShopId, function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							} else {
								$scope.listStaff = result;
								for (var i = 0; i < $scope.listStaff.length; i++) {
									if (result[i].staffId == $localStorage.clientContext.shop.staffId) {
										$scope.model.StaffCode = result[i].code;
										$scope.model.StaffName = result[i].name;
										$scope.model.staffId = result[i].staffId;
										// break;
									}
								}
							}
							$scope.getReceiptNo();
						})
					}
				})
			}

		})
	}

	$scope.getReceiptNo = function() {
		var strType = '';
		if (!$scope.model.invoiceReceipt == null || !$scope.model.invoiceReceipt == undefined || !$scope.model.invoiceReceipt == '') {
			if ($scope.model.invoiceReceipt.code == '1')
				strType = "4";
			else
				strType = "5";
		} else {
			strType = "5";
		}

		var data = {
			"strShopCode" : $localStorage.clientContext.shop.shopCode,
			"strCurrentNumber" : "lpad((curr_number + 1),9,'0')",
			"strShopId" : $localStorage.clientContext.shop.shopId,
			"strType" : strType
		}

		fctFormBankTransaction.getReceiptNo(data, function(result) {
			if (result != null && result != undefined) {
				if (result == "") {
					bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.MSG-A0004"), "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				} else if (result != "") {
					$scope.model.invoiceReceiptNo = result;
				}
				$scope.getBankAccount();
			}
		})
	}
	$scope.getBankAccount = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		fctFormBankTransaction.getBankAccount($localStorage.clientContext.shop.shopId, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.listBankAccount = result;
					App.unblockUI("#contentMain");
				}
			}
			App.unblockUI("#contentMain");
		})
	}

	$scope.getInvoiceStaff = function(shopId) {
		fctFormBankTransaction.getStaffListFromRoot(shopId, function(result) {
			if (result != null && result != undefined && result.status === '0') {
				bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else {
				$scope.listStaffRoot = result;
			}
		})
	}
	$scope.loadDefault = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		$scope.getReceiptType();
		// $scope.getShop();
		$scope.model.fromDate = momentString;
		$scope.model.toDate = momentString;
		$scope.model.createDate = momentString;
		App.unblockUI("#contentMain");
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

	// demo update combobox
	$scope.initSearchShop = "";
	$scope.initSearchStaff = "";
	$scope.initSearchReceiver = "";
	$scope.typeAction = '';
	$("#StaffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		$scope.typeAction = 'STAFF';
		if (code == '120') {
			$scope.initSearchStaff = '';
			$scope.showModalFunction("modalListStaff");
			createDataTableListStaff($scope.listStaff);
		} else {
			if ($scope.model.StaffCode == '') {
				$scope.model.StaffName = '';
				$scope.model.StaffCode = '';
				$scope.model.staffId = '';
			}
		}
	});
	$("#receiverAmountCode").keyup(function(e) {
		$scope.typeAction = 'RECEIVER';
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.initSearchReceiver = '';
			$scope.showModalFunction("modalListStaff");
			createDataTableListReceiver($scope.listStaffRoot);
		} else {
			if ($scope.model.receiverAmountCode == '') {
				$scope.model.receiverAmountCode = '';
				$scope.model.receiverAmountName = '';
				$scope.model.receiverAmountId = '';
			}
		}
	});

	$scope.checkF9Shop = function() {
		var check = "0";
		if ($scope.model.ShopCode != undefined && $scope.model.ShopCode != "") {
			for (var i = 0; i < $scope.listShop.length; i++) {
				if ($scope.model.ShopCode.trim().toUpperCase() == $scope.listShop[i].shopCode.toUpperCase()) {
					$scope.model.ShopCode = $scope.listShop[i].shopCode.trim();
					$scope.model.ShopName = $scope.listShop[i].shopName.trim();
					$scope.model.ShopStockId = $scope.listShop[i].shopId.trim();
					check = "1";
					break;
				}
			}
			shopObj = {
				"shopCode" : $scope.model.ShopCode,
				"shopId" : $scope.model.ShopStockId,
				"shopName" : $scope.model.ShopName,
			};
			if ("0" == check) {
				$scope.showModalFunction("modalListShop");
				$scope.itemSelectedListShop = null;
				createDataTableListShop($scope.listShop);
			}
			if ($scope.model.ShopStockId != undefined) {
				overLoading();
				fctFormBankTransaction.getStaffListFromRoot($scope.model.ShopStockId, function(result) {
					if (result != null && result != undefined && result.status === '0') {
						bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
						closeOverLay();
					} else {
						if (result.length <= 0) {
							$scope.listStaff = result;
							$scope.model.StaffCode = '';
							$scope.model.StaffName = '';
							$scope.model.staffId = '';
						} else {
							$scope.listStaff = result;
						}
						closeOverLay();
					}
				});
			}
		} else {

			$scope.model.ShopCode = "";
			$scope.model.ShopName = "";
			$scope.model.ShopStockId = "";
			document.getElementById('ShopCode').title = '';
			document.getElementById('ShopName').title = '';
			shopObj = {
				"shopCode" : $scope.model.ShopCode,
				"shopId" : $scope.model.ShopStockId,
				"shopName" : $scope.model.ShopName,
			};
		}
	}
	$("#StaffCode").click(function(e) {
		if ($scope.model.ShopCode == null || $scope.model.ShopCode == undefined || "" == $scope.model.ShopCode.trim()) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelectedShop"), "fShopCode", $translate.instant("vnm.lable.vnm.name"), "");
		}
	});
	$scope.checkF9Staff = function() {
		var check = "0";
		if ($scope.model.StaffCode != undefined && $scope.model.StaffCode != "") {
			for (var i = 0; i < $scope.listStaff.length; i++) {
				if ($scope.model.StaffCode.trim().toUpperCase() == $scope.listStaff[i].code.toUpperCase()) {
					$scope.model.StaffCode = $scope.listStaff[i].code.trim();
					$scope.model.StaffName = $scope.listStaff[i].name.trim();
					$scope.model.staffId = $scope.listStaff[i].staffId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListStaff");
				$scope.itemSelectedListStaff = null;
				createDataTableListStaff($scope.listStaff);
			}
		} else {
			$scope.model.StaffCode = "";
			$scope.model.StaffName = "";
			$scope.model.staffId = "";
			document.getElementById('StaffCode').title = '';
			document.getElementById('StaffName').title = '';
		}
	}

	$scope.onChangeReceiver = function() {
		var check = "0";
		if ($scope.model.receiverAmountCode != undefined && $scope.model.receiverAmountCode != "") {
			for (var i = 0; i < $scope.listStaffRoot.length; i++) {
				if ($scope.model.receiverAmountCode.trim().toUpperCase() == $scope.listStaffRoot[i].code.toUpperCase()) {
					$scope.model.receiverAmountCode = $scope.listStaffRoot[i].code.trim();
					$scope.model.receiverAmountName = $scope.listStaffRoot[i].name.trim();
					$scope.model.receiverAmountId = $scope.listStaffRoot[i].staffId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListStaff");
				$scope.itemSelectedListReceiver = null;
				createDataTableListStaff($scope.listStaffRoot);
			}
		} else {
			$scope.model.receiverAmountCode = "";
			$scope.model.receiverAmountName = "";
			$scope.model.receiverAmountId = "";
			document.getElementById('receiverAmountCode').title = '';
			document.getElementById('receiverAmountName').title = '';
		}
	}
	$scope.updateFormStaff = function() {
		if ($scope.typeAction == 'STAFF') {
			if ($scope.itemSelectedListStaff != undefined) {
				$scope.model.StaffCode = $scope.itemSelectedListStaff.code;
				$scope.model.StaffName = $scope.itemSelectedListStaff.name;
				$scope.model.staffId = $scope.itemSelectedListStaff.staffId;
			}
			document.getElementById('StaffCode').title = $scope.model.StaffCode;
			document.getElementById('StaffName').title = $scope.model.StaffName;
			$scope.hideModalFunction("modalListStaff");
		} else {
			if ($scope.itemSelectedListReceiver != undefined) {
				$scope.model.receiverAmountCode = $scope.itemSelectedListReceiver.code;
				$scope.model.receiverAmountName = $scope.itemSelectedListReceiver.name;
				$scope.model.receiverAmountId = $scope.itemSelectedListReceiver.staffId;
			}
			document.getElementById('receiverAmountCode').title = $scope.model.receiverAmountCode;
			document.getElementById('receiverAmountName').title = $scope.model.receiverAmountName;
			$scope.hideModalFunction("modalListStaff");
		}
	}

	$scope.dialogListStaffActionBack = function() {
		$scope.hideModalFunction("modalListStaff");
		if ($scope.model.StaffName != undefined && $scope.model.StaffName.trim() == '') {
			angular.element(document.getElementById("StaffCode")).focus();
		}
		if ($scope.model.receiverAmountName != undefined && $scope.model.receiverAmountName.trim() == '') {
			angular.element(document.getElementById("receiverAmountCode")).focus();
		}
	}
	// create table combobox nhan vien
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
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#tblListStaff').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				var dataRowSelected = table.row(0).data();
				$scope.itemSelectedListStaff = dataRowSelected;

			},
			"createdRow" : function(row, data, rowIndex) {
				if ($scope.itemSelectedListStaff != ROW_NOT_SELECTED) {
					if ($scope.itemSelectedListStaff.code == data.code) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
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
			},
			"oSearch" : {
				"sSearch" : $('#StaffCode').val()
			}
		});

		$('#tblListStaff tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListStaff.row(this).data();
			oTableFListStaff.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListStaff = rowData;
		});
	}
	function createDataTableListReceiver(dataItem) {
		oTableFListReceiver = $('#tblListStaff').DataTable({
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
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#tblListStaff').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				var dataRowSelected = table.row(0).data();
				$scope.itemSelectedListReceiver = dataRowSelected;

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
			},
			"oSearch" : {
				"sSearch" : ""
			}
		});

		$('#tblListStaff tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListReceiver.row(this).data();
			oTableFListReceiver.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListReceiver = rowData;
		});
	}

	// don vi gui
	$("#ShopCode").keyup(
			function(e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				if (code == '120') {
					$scope.itemSelectedListShop = $scope.listShop[0];
					$scope.initSearchShop = $scope.model.ShopCode;
					for (var i = 0; i < $scope.listShop.length; i++) {
						if ($scope.model.ShopCode != null
								&& $scope.model.ShopCode != undefined
								&& ($scope.listShop[i].shopCode.toUpperCase().includes($scope.model.ShopCode.trim().toUpperCase()) || $scope.listShop[i].shopName.toUpperCase().includes(
										$scope.model.ShopCode.trim().toUpperCase()))) {
							$scope.itemSelectedListShop = $scope.listShop[i];
							break;
						}
					}
					$scope.showModalFunction("modalListShop");
					createDataTableListShop($scope.listShop);
				} else if (code == '13') {
					$scope.checkF9Shop();
				} else {
					if ($scope.model.ShopCode == '') {
						$scope.model.ShopName = '';
						$scope.model.ShopStockId = '';
					}
				}
			});

	$scope.check = true;
	$scope.updateFormShop = function() {
		$scope.check = true;
		$scope.model.ShopCode = $scope.itemSelectedListShop.shopCode.trim();
		$scope.model.ShopStockId = $scope.itemSelectedListShop.shopId;
		$scope.model.ShopName = $scope.itemSelectedListShop.shopName.trim();
		shopObj = {
			"shopCode" : $scope.model.ShopCode,
			"shopId" : $scope.model.ShopStockId,
			"shopName" : $scope.model.ShopName,
		};
		document.getElementById('ShopCode').title = $scope.model.ShopCode;
		document.getElementById('ShopName').title = $scope.model.ShopName;
		$scope.hideModalFunction("modalListShop");
		angular.element(document.getElementById('ShopCode')).focus();
	}

	$scope.dialogListShopActionBack = function() {
		$scope.hideModalFunction("modalListShop");
		if ($scope.model.ShopName != undefined && $scope.model.ShopName.trim() == '') {
			angular.element(document.getElementById("fShopCode")).focus();
		}
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

//			"fnInitComplete" : function(oSettings, json) {
//				var table = $('#tblListShop').DataTable();
//				table.rows(0).nodes().to$().addClass('selected');
//				$('.dataTables_scrollBody thead tr').css({
//					visibility : 'collapse'
//				});
//				var dataRowSelected = table.row(0).data();
//				$scope.itemSelectedListShop = dataRowSelected;
//			},
			"createdRow" : function(row, data, rowIndex) {
				if ($scope.itemSelectedListShop != undefined && $scope.itemSelectedListShop != null) {
					if ($scope.itemSelectedListShop.shopCode == data.shopCode) {
						$(row).addClass('selected');
					}
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
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
			},
			"oSearch" : {
				"sSearch" : $('#ShopCode').val().toUpperCase()
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
	// end

	$scope.checkPayMethod = function() {
		var strPayMethod;
		if ($scope.model.payMethod == '' || $scope.model.payMethod == null || $scope.model.payMethod == undefined || $scope.model.payMethod == 'ALL') {
			strPayMethod = "";
		} else {
			strPayMethod = $scope.model.payMethod.code;
		}
		return strPayMethod;
	}

	$scope.btnSearchOnclick = function() {

		if ($scope.validBeforeSearch() == true) {
			var searchInput = {
				"strShopId" : $scope.model.ShopStockId,
				"strStaffId" : $scope.model.staffId,
				"strFromDate" : StringUtilNVL($("#fromDate").val()),
				"strToDate" : StringUtilNVL($("#toDate").val()),
				"strStatus" : "",// model.receiptType
				"strReceiptNo" : $scope.model.ReceiptNo,
				"strPayMethod" : $scope.checkPayMethod(),
				"strAccountCode" : $scope.model.account.accountCode,
				"strReasonId" : $scope.model.reason.reasonId,
			};
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			fctFormBankTransaction.onSearch(searchInput, function(result) {
				if (result.length > 0) {
					$scope.listItemsTrans = result;
					for (var i = 0; i < $scope.listItemsTrans.length; i++) {
						result[i].checkBox = i;
					}
					createTableTransactionDestroy($scope.listItemsTrans);
					$scope.getInvoiceStaff($scope.model.ShopStockId);

					$scope.model.invoiceShopCode = shopObj.shopCode;
					$scope.model.invoiceShopName = shopObj.shopName;
					$scope.model.invoiceShopId = shopObj.shopId;

					$scope.checkDisabledDetail = false;
					$scope.checkDisabledCheckBox = false;

					$("#checkAlls").removeClass("sorting");
					$("#checkAlls").css('width', '22px');
					$("#checkAll").css('margin-left', '0');
					App.unblockUI("#contentMain");
				} else {
					// if($scope.check = t)
					$scope.model.invoiceShopCode = shopObj.shopCode;
					$scope.model.invoiceShopName = shopObj.shopName;
					$scope.model.invoiceShopId = shopObj.shopId;

					$scope.getInvoiceStaff($scope.model.ShopStockId);

					createTableTransactionDestroy([]);

					App.unblockUI("#contentMain");
					bootboxAlertFocus("Không tìm thấy dữ liệu!", "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			});
		}

	}

	function createTableTransactionDestroy(dataItem) {
		oTableItemXXX = $('#resultSearchTableItems').DataTable({
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
			'columnDefs' : [ {
				"targets" : [ 0, 4 ],
				"orderable" : false,
				'checkboxes' : {
					'selectRow' : true
				}
			} ],
			'select' : {
				'style' : 'multi'
			},
			"bSort" : true,
			"info" : true,
			"order" : [],
			"scrollX" : true,
			"columns" : [ {
				"mData" : "receipt_no",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' style='text-align: left'  title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "amount",
				"render" : function(data, type, row) {
					x = formatNumber(data) == null ? '' : formatNumber(data);
					return "<div data-toggle='tooltip' class='text-wrap width-150' style='text-align: right'  title='" + StringUtilNVL(x) + "'>" + StringUtilNVL(x) + "</div>";
				}
			}, {
				"mData" : "staff_code",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' style='text-align: left'  title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "receipt_date",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' style='text-align: left'  title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "checkBox",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return '<input type="checkbox" class="form-control width-150" style="width:17px;margin-left: 3px;"  id="first-child" value="' + x + '" ></input>';
				}
			} ],
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#resultSearchTableItems').DataTable();
				table.rows(0).nodes().to$().addClass('selected');
				$('.dataTables_scrollBody thead tr').css({
					visibility : 'collapse'
				});
				var dataRowSelected = table.row(0).data();
				$scope.itemsTransSelected = dataRowSelected;
				// if ($scope.itemsTransSelected.lstTransactionDestroyDetail != null || $scope.itemsTransSelected.lstTransactionDestroyDetail != undefined
				// || !$scope.itemsTransSelected.lstTransactionDestroyDetail.length <= 0) {
				// createTableSubTransactionDestroy(dataRowSelected.lstTransactionDestroyDetail);
				// }

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
					"sPrevious" : PREV_PAGE
				}
			},
		});

		$('#resultSearchTableItems tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			$scope.itemsTransSelected = rowData;
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});
		// check box all
		$('#checkAll').on('click', function() {

			var rows = oTableItemXXX.rows({
				'search' : 'applied'
			}).nodes();

			$('input[type="checkbox"]', rows).prop('checked', this.checked);
			$scope.checkAllCheckBox();

		});

		// check box row
		$('#resultSearchTableItems').off().on('click', 'input[type="checkbox"]', function(e, dt, type, indexes) {
			$scope.onCheckedClick(this.value);
		});

		$compile(angular.element('#resultSearchTableItems'))($scope);
	}

	$scope.sumAmountOriginal = 0;

	$scope.sumAmount = function() {
		var sum = 0;
		for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
			sum += $scope.listSelectItemCheckBox[i].amount;

		}
		$scope.model.invoiceAmountOriginal = formatNumber(sum);
		$scope.model.invoiceSum = formatNumber(sum);
		$scope.sumAmountOriginal = sum;
		return sum;
	}
	$scope.listSelectItemCheckBox = [];
	$scope.onCheckedClick = function(item) {

		var row = $scope.findRow(item);
		if ($scope.checkListSelectItemCheckBox(row) == 0) {
			$scope.listSelectItemCheckBox.push(row);

		} else {
			for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
				while ($scope.listSelectItemCheckBox[i].checkBox == row.checkBox) {
					$scope.listSelectItemCheckBox.splice(i, 1);
					break;
				}

			}

		}
		if ($scope.listSelectItemCheckBox.length == $scope.listItemsTrans.length) {
			$scope.model.checkAll = true;
		} else {
			$scope.model.checkAll = false;
		}
		$scope.sumAmount();
	}

	$scope.checkAllCheckBox = function() {
		if ($('#checkAll:checked').length > 0) { // Khi click check all
			$scope.listSelectItemCheckBox = $scope.listItemsTrans.slice(0, $scope.listItemsTrans.length);

		} else { // Khi bo click check all
			$scope.listSelectItemCheckBox = [];

		}
		$scope.sumAmount();
	}

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

	$scope.findRow = function(checkBox) {
		var row = {};
		for (var i = 0; i < $scope.listItemsTrans.length; i++) {
			if ($scope.listItemsTrans[i].checkBox == checkBox) {
				row = $scope.listItemsTrans[i];
				break;
			}

		}
		return row;
	}
	// lap giao dich
	$scope.btnCreateOnclick = function() {
		if ($scope.validBeforeCreate() == false) {
			return;
		} else {
			bootboxConfirm($translate.instant("vnm.common.btn.add"), "Bạn có muốn lập chứng từ mới", $scope.confirmCreateOK, $scope.confirmCreateNOK);
		}
	}
	$scope.confirmCreateNOK = function() {
		return;
	}

	$scope.confirmCreateOK = function() {
		for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
			$scope.listDataCreate.push($scope.listSelectItemCheckBox[i].receipt_id);
		}
		var prepareData = {
			"strShopId" : $scope.model.invoiceShopId,
			"strStaffId" : $scope.model.receiverAmountId,
			"strReceiptNo" : $scope.model.invoiceReceiptNo,// SMClient.getNextReceiptNo(strReceiptType);
			"strReasonId" : $scope.model.invoiceReason.reasonId,
			"strAccountCode" : $scope.model.account.accountCode,
			"strPayMethod" : "3",
			"strAmount" : $scope.sumAmount(),
			"strOrgAmount" : $scope.sumAmount(),
			"strStatus" : $scope.model.invoiceStatus.code,
			"strUserName" : $localStorage.clientContext.shop.staffName,
			"strCreateDatetime" : $("#createDate").val(),
			"strReceiptDate" : $("#createDate").val(),
			"strAddress" : "",
			"strNotes" : $scope.model.invoiceNote,
			"strBankID" : $scope.model.invoiceBankAccount.bank_account_id,
			"strBankStaff" : $scope.model.bankStaff,
			"strType" : $scope.model.invoiceReceipt.code,
			"listReceiptId" : $scope.listDataCreate,

		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		fctFormBankTransaction.createBankDeposit(prepareData, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
				} else {
					var data = {
						"strShopId" : $localStorage.clientContext.shop.shopId,
						"strType" : getBankType($scope.model.invoiceReceipt.code),
					}

					fctFormBankTransaction.updateReceiptNo(data, function(result) {
						if (result.length > 0) {
							$scope.disabledPrint = false;
							$scope.checkHideBtn = false;
							$scope.checkbtnSearch = true;
							$scope.checkDisabledDetail = true;
							$("#formGroupBtnCreate").css('display', 'none');
							$("#formGroupBtnReCreate").css('display', 'block');

							for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
								var index = ($scope.listItemsTrans).indexOf($scope.listSelectItemCheckBox[i]);
								if (index !== -1) {
									$scope.listItemsTrans.splice(index, 1);
								}
								if (i == $scope.listSelectItemCheckBox.length - 1) {
									createTableTransactionDestroy($scope.listItemsTrans);
									bootboxAlertFocus("Lập chứng từ mới thành công!", "", $translate.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
								}
							}
							App.unblockUI("#contentMain");
						} else {
							App.unblockUI("#contentMain");
						}
					});
				}
			}
		});
	}

	$scope.btnReCreateOnclick = function() {
		bankReceivedNoFocusGained();
		$scope.disabledPrint = true;
		$scope.checkHideBtn = true;
		$scope.checkbtnSearch = false;
		$scope.checkDisabledDetail = false;
		$("#formGroupBtnCreate").css('display', 'block');
		$("#formGroupBtnReCreate").css('display', 'none');
		clearDataFormDetail();
	}

	function clearDataFormDetail() {
		$scope.model.receiverAmountName = '';
		$scope.model.receiverAmountCode = '';
		$scope.model.bankStaff = '';
		$scope.model.invoiceBankAccount = '';
		$scope.model.invoiceAmountOriginal = '';
		$scope.model.invoiceSum = '';
		$scope.model.invoiceNote = '';

	}

	// end

	// print

	$scope.btnPrint = function() {
		overLoading();
		var strTitle = "";
		var strTitleEN = "";
		var strStaffAmountLable = "";
		$scope.lstReport = [];

		strTitle = $translate.instant("vnm.FormBankTransactionApprove.Title2");
		strTitleEN = $translate.instant("vnm.FormBankTransactionApprove.Title2EN");
		strStaffAmountLable = $translate.instant("vnm.FormBankTransactionApprove.StaffAmount1");

		var strReasonName = "";
		for (var iReason = 0; iReason < $scope.listReasonPnl.length; iReason++) {
			if ($scope.model.invoiceReason.code == $scope.listReasonPnl[iReason].code) {
				strReasonName = $scope.listReasonPnl[iReason].name;
			}
		}
		var ReportInput = {
			"strTitle" : strTitle,
			"strTitleEN" : strTitleEN,
			"strVoucherNo" : StringUtilNVL($scope.model.invoiceReceiptNo),
			"strCreateDate" : StringUtilNVL($("#createDate").val()),
			"strBankName" : StringUtilNVL($scope.model.invoiceBankName.bank_name),
			"strBankNo" : StringUtilNVL($scope.model.invoiceBankAccount.bank_account_no),
			"strStaffAmountLable" : strStaffAmountLable,
			"strStaffAmount" : StringUtilNVL($scope.model.bankStaff),
			"strReason" : strReasonName,
			"strAmountOriginal" : StringUtilNVL($scope.model.invoiceAmountOriginal),
			"strAmountTotal" : StringUtilNVL($scope.model.invoiceSum),
			"strAmountWord" : numberToWord($scope.sumAmountOriginal),
			"strCollector" : $translate.instant("vnm.FormBankTransactionApprove.Collector"),
			"strCollectorEN" : $translate.instant("vnm.FormBankTransactionApprove.CollectorEN"),
			"strPayer" : $translate.instant("vnm.FormBankTransactionApprove.Payer"),
			"strPayerEN" : $translate.instant("vnm.FormBankTransactionApprove.PayerEN"),
			"fileTempName" : 'reportBankTransactionApprove',
			"fileType" : '.pdf'
		};
		$scope.lstReport.push(ReportInput);

		fctFormBankTransaction.exportFile(encodeURI(JSON.stringify($scope.lstReport)), function(result, status, header, config) {
			if (result.status == '0' && result.status != 'undefined') {
				bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else {
				download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				closeOverLay();
			}
		});

	}

	// end
	function getBankType(strType) {
		var strReceiptType = "";
		if (strType == '1')
			strReceiptType = "4"; // Ma phieu rui tien
		else if (strType == '2')
			strReceiptType = "5"; // Ma phieu gui tien
		return strReceiptType;
	}

	function bankReceivedNoFocusGained() {
		var strType = '';
		if (!$scope.model.invoiceReceipt == null || !$scope.model.invoiceReceipt == undefined || !$scope.model.invoiceReceipt == '') {
			if ($scope.model.invoiceReceipt.code == '1')
				strType = "4";
			else
				strType = "5";
		} else {
			strType = "5";
		}

		var data = {
			"strShopCode" : $localStorage.clientContext.shop.shopCode,
			"strCurrentNumber" : "lpad((curr_number + 1),9,'0')",
			"strShopId" : $localStorage.clientContext.shop.shopId,
			"strType" : strType
		}

		fctFormBankTransaction.getReceiptNo(data, function(result) {
			if (result != null && result != undefined) {
				if (result == "") {
					bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.MSG-A0004"), "", $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return;
				} else if (result != "") {
					// $scope.listAccount = result;
					$scope.model.invoiceReceiptNo = result;
				}
			}
		})
	}

	$scope.validBeforeSearch = function() {
		var toDate = $("#toDate").val();
		var fromDate = $("#fromDate").val();
		if ($scope.model.ShopCode == null || $scope.model.ShopCode == undefined || $scope.model.ShopCode == '') {
			bootboxAlertFocus("Bạn phải nhập trường [Cửa hàng]!", '', $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if ($scope.model.reason == null || $scope.model.reason == undefined || $scope.model.reason == '') {
			bootboxAlertFocus("Bạn phải nhập trường [Lý do]!", '', $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if ($("#fromDate").val() != null && $("#fromDate").val() != "") {
			if (!isDate($("#fromDate").val())) {
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", '', $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
			if (moment($("#fromDate").val(), "DD/MM/YYYY") > getCurrentDate()) {
				bootboxAlertFocus("Trường [Ngày BĐ] không được lớn hơn ngày hiện tại!", "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}

		}
		if ($("#toDate").val() != null && $("#toDate").val() != "") {
			if (!isDate($("#toDate").val())) {
				bootboxAlertFocus("Ngày phải có định dạng DD/MM/YYYY", '', $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
			if (moment($("#toDate").val(), "DD/MM/YYYY") > getCurrentDate()) {
				bootboxAlertFocus("Trường [Ngày KT] không được lớn hơn ngày hiện tại!", "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
		}

		if ($("#toDate").val() != null && $("#toDate").val() != "") {
			if ($("#fromDate").val() != null) {
				var intfromdate = moment(fromDate, "DD/MM/YYYY");
				var inttodate = moment(toDate, "DD/MM/YYYY");
				if (intfromdate > inttodate) {
					bootboxAlertFocus("[Ngày BĐ] phải nhỏ hơn hoặc bằng [Ngày KT]!", '', $translate.instant("vnm.lable.vnm.name"), "");
					closeOverLay();
					return false;
				}
			}
		}
		return true;
	}
	$scope.validBeforeCreate = function() {
		if ($scope.listSelectItemCheckBox == null || $scope.listSelectItemCheckBox == undefined || $scope.listSelectItemCheckBox.length <= 0) {
			bootboxAlertFocus("Bạn phải chọn ít nhất một chứng từ!", '', $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		} else {
			if ($scope.model.invoiceReceipt == null || $scope.model.invoiceReceipt == undefined || $scope.model.invoiceReceipt == '') {
				bootboxAlertFocus("Trường [Loại chứng từ] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceReceiptNo == null || $scope.model.invoiceReceiptNo == undefined || $scope.model.invoiceReceiptNo == '') {
				bootboxAlertFocus("Trường [Số phiếu] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.createDate == null || $scope.model.createDate == undefined || $scope.model.createDate.trim() == '') {
				bootboxAlertFocus("Trường [Ngày lập] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.createDate == null || $scope.model.createDate == undefined || $scope.model.createDate.trim() == '') {
				bootboxAlertFocus("Trường [Ngày lập] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($("#createDate").val() > getCurrentDate()) {
				bootboxAlertFocus("Trường [Ngày lập] không được lớn hơn ngày hiện tại!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceShopCode == null || $scope.model.invoiceShopCode == undefined || $scope.model.invoiceShopCode == '') {
				bootboxAlertFocus("Trường [Đơn vị gửi] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.receiverAmountCode == null || $scope.model.receiverAmountCode == undefined || $scope.model.receiverAmountCode == '') {
				bootboxAlertFocus("Trường [Người gửi] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.bankStaff == null || $scope.model.bankStaff == undefined || $scope.model.bankStaff.trim() == '') {
				bootboxAlertFocus("Trường [Người thu tiền] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceBankName == null || $scope.model.invoiceBankName == undefined || $scope.model.invoiceBankName == '') {
				bootboxAlertFocus("Trường [Ngân hàng] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceBankName == null || $scope.model.invoiceBankName == undefined || $scope.model.invoiceBankName == '') {
				bootboxAlertFocus("Trường [Ngân hàng] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceBankAccount == null || $scope.model.invoiceBankAccount == undefined || $scope.model.invoiceBankAccount == '') {
				bootboxAlertFocus("Trường [Tài khoản NH] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceReason == null || $scope.model.invoiceReason == undefined || $scope.model.invoiceReason == '') {
				bootboxAlertFocus("Trường [Lý do] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceReason == null || $scope.model.invoiceReason == undefined || $scope.model.invoiceReason == '') {
				bootboxAlertFocus("Trường [Lý do] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceAmountOriginal == null || $scope.model.invoiceAmountOriginal == undefined || $scope.model.invoiceAmountOriginal == '') {
				bootboxAlertFocus("Trường [Tiền nguyên tệ] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceAmountOriginal == null || $scope.model.invoiceAmountOriginal == undefined || $scope.model.invoiceAmountOriginal == '') {
				bootboxAlertFocus("Trường [Tiền nguyên tệ] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceSum == null || $scope.model.invoiceSum == undefined || $scope.model.invoiceSum == '') {
				bootboxAlertFocus("Trường [Tổng tiền] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceSum == '0') {
				bootboxAlertFocus("Trường [Tổng tiền] phải lớn hơn không!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			if ($scope.model.invoiceStatus == null || $scope.model.invoiceStatus == undefined || $scope.model.invoiceStatus == '') {
				bootboxAlertFocus("Trường [Trạng thái] không được để trống!", '', $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
		}
		return true;
	}

	$scope.onBlurCheckDate = function(dateString) {
		if ($("#createDate").val() != null && $("#createDate").val() != "") {
			if (!isDate($("#createDate").val())) {
				bootboxAlertFocus($translate.instant('Ngày phải có định dạng DD/MM/YYYY'), "", $translate.instant("vnm.lable.vnm.name"), "");
				$("#createDate").val("");
				var momentObj = moment(new Date());
				var momentString = momentObj.format('DD/MM/YYYY');
				$scope.model.createDate = momentString;
				return;
			}
		}
		if ($("#toDate").val() != null && $("#toDate").val() != "") {
			if (!isDate($("#toDate").val())) {
				bootboxAlertFocus($translate.instant('Ngày phải có định dạng DD/MM/YYYY'), "", $translate.instant("vnm.lable.vnm.name"), "");
				$("#toDate").val("");
				var momentObj = moment(new Date());
				var momentString = momentObj.format('DD/MM/YYYY');
				$scope.model.toDate = momentString;
				return;
			}
		}

	}

	$scope.demoChange = function() {
		if ($scope.model.receiptType.code == '1') {
			$scope.model.invoiceReceipt = $scope.listReceipt[0];
			$scope.model.invoiceReason = $scope.listReasonPnl[1];
			$scope.model.reason = '';
		} else {
			$scope.model.invoiceReceipt = $scope.listReceipt[1];
			$scope.model.invoiceReason = $scope.listReasonPnl[0];
			$scope.model.reason = $scope.listReason[0];
		}
	}

	// show popup
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
			angular.element($("#tblListShop_filter").find("input")[0]).focus();
			angular.element($("#tblListStaff_filter").find("input")[0]).focus();
		});

	}

	// hide popup
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}

	var ChuSo = new Array($translate.instant("vnm.FormBankTransactionApprove.constants.zero"), $translate.instant("vnm.FormBankTransactionApprove.constants.one"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.two"), $translate.instant("vnm.FormBankTransactionApprove.constants.three"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.four"), $translate.instant("vnm.FormBankTransactionApprove.constants.five"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.six"), $translate.instant("vnm.FormBankTransactionApprove.constants.seven"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.eight"), $translate.instant("vnm.FormBankTransactionApprove.constants.nine"));
	var Tien = new Array("", $translate.instant("vnm.FormBankTransactionApprove.constants.thousand"), $translate.instant("vnm.FormBankTransactionApprove.constants.Million"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.billions"), $translate.instant("vnm.FormBankTransactionApprove.constants.thousands.of.billions"), $translate
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

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function isDate(txtDate) {
	var currVal = txtDate;
	if (currVal == '')
		return false;

	// Declare Regex
	var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
	var dtArray = currVal.match(rxDatePattern); // is format OK?

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
function valid_numbers(e) {
	var key = e.keyCode;
	if (key >= 48 && key <= 57)
		return true;
	else
		return false;
}
