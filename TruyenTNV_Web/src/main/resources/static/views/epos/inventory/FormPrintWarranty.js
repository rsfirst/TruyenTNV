var NEW_WARRANTY_NO = "PrintWarranty";

app_vnm.factory('fctFormPrintWarranty', function($http, $translate) {
	return {
		// danh sach kho nhan
		getAllReceiveStock : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/getChildsStockTree";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
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
			var url = eim_url + "/epos/inventory/formConvertToDamagedGoods/onSaveToDamagedGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(data, "", $translate.instant("vnm.lable.vnm.name"), "");
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
			var url = eim_url + "/epos/inventory/stockExportToCenter/getReportPrintWarranty";
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
		},

		// ly do
		getListReasonSource : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormPrintingWarrantyController/getReasonList";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		// danh sach nhan vien
		getListStaffSource : function(data, callback) {
			var url = eim_url + "/epos/getListStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		// tim kiem danh sach cap phei bao hanh
		getListTransactionWarrantyNew : function(data, callback) {
			var url = eim_url + "/epos/inventory/formNewWarrantyNo/listWarrantyNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		// tim kiem danh sach serial
		getListTransactionSerialNew : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormPrintingWarrantyController/getWarrantySerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		// update so serial in
		updateWarrantyNumber : function(data, callback) {
			var url = eim_url + "/epos/inventory/updateWarrantyNumber";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
});

app_vnm.controller('ctrl-formPrintWarranty', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams, $localStorage,
		fctFormPrintWarranty) {

	window.document.title = $translate.instant('vnm.FormPrintWarranty.page.title');

	$scope.model = {};
	$scope.limitLstGoodsSearch = 20;
	$scope.itemGoodSelected = [];
	$scope.LstAfterSearch = [];
	$scope.lstSerial = [];
	$scope.lstgoodEsn = [];
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
	}

	$scope.checkDisableBtnPrint = false;

	$scope.ReceiveStockSource = [];
	// Lay thong tin kho nhan
	// $scope.getAllReceiveStock = function() {
	// overLoading("loading...");
	// var dataIn = $localStorage.clientContext.shopId;
	// fctFormPrintWarranty.getAllReceiveStock(dataIn, function(result) {
	// if (result != null && result != undefined) {
	// if (result.status == '0') {
	// closeOverLay();
	// bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
	// } else if (result.length > 0) {
	// for (var i = 0; i < result.length; i++) {
	// if (result[i].type == "Cửa hàng") {
	// $scope.ReceiveStockSource.push(result[i]);
	// }
	// }
	// $scope.model.toStock = $scope.ReceiveStockSource[0];
	//
	// }
	// }
	// });
	// }

	// danh sach ly do
	$scope.ReasonSource = [];
	$scope.getListReasonSourceFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.status = "1";

		$scope.ReasonSource = [];
		fctFormPrintWarranty.getListReasonSource(dataInput, function(result) {
			for (var i = 0; i < result.length; i++) {
				$scope.ReasonSource.push(result[i]);
			}
			$scope.model.reason = $scope.ReasonSource[3];

		});
	}

	// set data noi cap
	$scope.FromStockSource = [];
	$scope.setDataFromStock = function() {
		overLoading("loading...");
		var fromStock = {};
		fromStock.code = $localStorage.clientContext.shop.shopCode
		fromStock.id = $localStorage.clientContext.sessionStockID;
		fromStock.name = $localStorage.clientContext.shop.shopName;

		$scope.FromStockSource.push(fromStock);
		$scope.model.fromStock = $scope.FromStockSource[0];
	}

	// set nguoi cap
	$scope.FromStaffSource = [];
	$scope.setDataFromStaffSource = function() {
		overLoading("loading...");
		var fromStock = {};
		fromStock.code = $localStorage.clientContext.shop.shopCode
		fromStock.id = $localStorage.clientContext.sessionStockID;
		fromStock.name = $localStorage.clientContext.shop.shopName;
		$scope.FromStaffSource.push(fromStock);
		$scope.model.fromStaff = $scope.FromStaffSource;
	}

	// danh sach nhan vien
	$scope.StaffSource = [];
	$scope.getListStaffFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.shopId = $localStorage.clientContext.shop.shopId;

		$scope.ReasonSource = [];
		fctFormPrintWarranty.getListStaffSource(dataInput, function(result) {
			for (var i = 0; i < result.length; i++) {
				$scope.StaffSource.push(result[i]);
			}
			$scope.model.fromStaff = $scope.StaffSource;

		});
	}

	// su kien khi chon mat hang tren form
	$scope.onChooseGoodsForm = function() {
		$scope.model.goodsFormName = $scope.model.goodsForm.name;
		$scope.disableAddViewDetail = false;
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
	// $scope.loadLstGoodsForm = function() {
	// var resourceCodeForm = {
	// "code" : $scope.model.resourceCodeForm.code,
	// "name" : "",
	// "formName" : "NewWarrantyNo"
	// }
	// fctFormPrintWarranty.getExistedGoods(resourceCodeForm, function(result) {
	// if (result != null && result != undefined && result.status != '0' && result.length > 0) {
	// $scope.lstGoodsForm = result;
	// }
	// });
	// }

	// load panel button
	$scope.onLoadPnlButton = function() {
		$scope.isDisabledBtnAdd = false;
		$scope.isDisabledBtnEdit = false;
		$scope.isDisabledBtnDelete = false;

		$('#pnlButtonAction').css('display', 'block');
		$('#pnlButtonOK').css('display', 'none');
	}

	//
	$scope.getFStockName = function() {
		$scope.model.fStockName = $scope.model.stock.name;
	}

	$scope.lstGoodsResourceForm = []; // Nguon hang tren form
	$scope.lstInternalStockForm = []; // Loai hang hoa tren form
	$scope.lstGoodsForm = [] // Danh sach hang hoa tren form
	$scope.lstStatesForm = [] // Danh sach trang thai tren form
	$scope.lstGoodGroupForm = []; // danh sach nhom mat hang form

	// Lay gia tri mac dinh khi load form
	$scope.loadDefault = function() {
		$scope.disableAdd = true; // disable btn xem kho/ so luong/ trang thai
		$scope.disableAddx = true; // disable nguon hang/loai hang
		$scope.disableAddViewDetail = true; // disable btn xem chi tiet
		$scope.disableAddChooseGoods = true; // disable cbb chon hang
		$scope.model.reasonCode = $translate.instant("vnm.form_new_warranty_no.text.reason.value.code");
		$scope.model.reasonName = $translate.instant("vnm.form_new_warranty_no.text.reason.value.name");
		overLoading("loading...");
		fctFormPrintWarranty.getInternalStock(function(result) {
			if (result != null && result != undefined && result.status != '0' && result.length > 0) {
				$scope.lstInternalStockForm = result;
				$scope.model.stockInternalTypeForm = $scope.lstInternalStockForm[0];

				var sessionValue = {
					"sessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
					"sessionShopType" : $localStorage.clientContext.shop.shopType,
					"isForm" : "1",
				};

				$scope.isDisabledBtnEdit = true;
				$scope.isDisabledBtnDelete = true;
				$scope.onLoadPnlButton();
				$('#pnlButtonOKAfterSave').css('display', 'none');
				overLoading("loading...");
				fctFormPrintWarranty.getVctResourceList(sessionValue, function(result) {
					if (result != null && result != undefined && result.status != '0' && result.length > 0) {
						$scope.lstGoodsResourceForm = result;
						$scope.model.resourceCodeForm = $scope.lstGoodsResourceForm[0];
						// $scope.loadLstGoodsForm();

						fctFormPrintWarranty.getExistedStates(function(result) {
							if (result != null && result != undefined && result.status != '0' && result.length > 0) {
								$scope.lstStatesForm = result;
								$scope.model.statesForm = $scope.lstStatesForm[0];
							}
						});
					}
					overLoading("loading...");
					fctFormPrintWarranty.getExistedGoodsGroups(function(resultListGoodGroup) {
						$scope.lstGoodGroupForm = resultListGoodGroup;
						var resourceCodeFormFull = {
							"code" : "",
							"name" : "",
						}

						// load full danh sach mạt hang
						overLoading("loading...");
						fctFormPrintWarranty.getExistedGoods(resourceCodeFormFull, function(result) {
							if (result != null && result != undefined && result.status != '0' && result.length > 0) {
								$scope.lstGoodsForm = result;
							}

							var dataIn = $localStorage.clientContext.shopId;
							overLoading("loading...");
							fctFormPrintWarranty.getAllReceiveStock(dataIn, function(result) {
								if (result != null && result != undefined) {
									if (result.status == '0') {
										closeOverLay();
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									} else if (result.length > 0) {
										for (var i = 0; i < result.length; i++) {
											if (result[i].type == "Cửa hàng") {
												$scope.ReceiveStockSource.push(result[i]);
											}

										}
										for (var i = 0; i < result.length; i++) {
											if ($localStorage.clientContext.shop.shopCode == $scope.ReceiveStockSource[i].code.trim()) {
												$scope.model.shopCode = $scope.ReceiveStockSource[i].code;
												$scope.model.shopName = $scope.ReceiveStockSource[i].name;
												document.getElementById('fShopCode').title = $scope.model.shopCode.trim();
												document.getElementById('fShopName').title = $scope.model.shopName.trim();
												$scope.model.stockId = $scope.ReceiveStockSource[i].stockId;
												break;
											}
										}
									

									}
									$scope.getListReasonSourceFn();
									$scope.setDataFromStock();
									$scope.setDataFromStaffSource();
									$scope.getListStaffFn();

								}
								closeOverLay();
							});
						});
					});
				});
			}

		});
	}

	$scope.checkDisabledPanelSearch = true;

	$scope.checkDisplayBtnSearch = true;
	// btn search on click
	$scope.btnSearchOnclick = function() {
		$scope.checkDisplayBtnSearch = false;
		$scope.checkDisabledPanelSearch = false;
	}

	// lay noi nhan theo id
	function getStockById(stockIdInput) {
		// for theo list stockId
		for (var i = 0; i < $scope.ReceiveStockSource.length; i++) {
			if (stockIdInput == $scope.ReceiveStockSource[i].stockId) {
				return $scope.ReceiveStockSource[i];
			}
		}
		return null;
	}

	// lay nguoi cap theo id
	function getStaffNameById(staffId) {
		// for theo list stockId
		for (var i = 0; i < $scope.StaffSource.length; i++) {
			if (staffId == $scope.StaffSource[i].staffId) {
				return $scope.StaffSource[i];
			}
		}
		return null;
	}

	// lay goodcode va good nam
	function getGoodCodeAndName(goodId) {
		for (var i = 0; i < $scope.lstGoodsForm.length; i++) {
			if ($scope.lstGoodsForm[i] != null) {
				if ($scope.lstGoodsForm[i].goodsId == goodId) {
					return $scope.lstGoodsForm[i];
				}
			}
		}
		return null;
	}
	// lay goodcode
	function getGoodCode(goodId) {
		var goodsCode = '';
		for (var i = 0; i < $scope.lstGoodsForm.length; i++) {
			if ($scope.lstGoodsForm[i] != null) {
				if ($scope.lstGoodsForm[i].goodsId == goodId) {
					return goodsCode = $scope.lstGoodsForm[i].goodsCode;
				}
			}
		}
		return null;
	}
	// lay good name
	function getGoodName(goodId) {
		var goodsName = '';
		for (var i = 0; i < $scope.lstGoodsForm.length; i++) {
			if ($scope.lstGoodsForm[i] != null) {
				if ($scope.lstGoodsForm[i].goodsId == goodId) {
					return goodsName = $scope.lstGoodsForm[i].name;
				}
			}
		}
		return null;
	}

	// lay reason obj
	function getReasonObjectById(reasonId) {
		// for theo list stockId
		for (var i = 0; i < $scope.ReasonSource.length; i++) {
			if (reasonId == $scope.ReasonSource[i].reasonId) {
				return $scope.ReasonSource[i];
			}
		}
		return null;
	}

	// set output cho table danh sach giao dich
	function setDataOutputListWarranty(listWarranty) {
		for (var i = 0; i < listWarranty.length; i++) {
			var stockElement = getStockById(listWarranty[i].delivererStockId);
			listWarranty[i].delivererStockIdText = stockElement.name; // noi nhan
			listWarranty[i].fromStockIdText = stockElement.name; // noi cap

			var staffElement = getStaffNameById(listWarranty[i].fromStaffId);
			listWarranty[i].staffIdText = staffElement.name; // nguoi cap

			var reasonElement = getReasonObjectById(listWarranty[i].reasonId);
			listWarranty[i].reasonName = reasonElement.name;
		}
		return listWarranty;
	}

	// ham chap nhan tim kiem
	$scope.ReasonSource = [];
	$scope.onApproveSearchFn = function() {
		$scope.checkDisplayBtnSearch = true;
		$scope.checkDisabledPanelSearch = true;

		var dataInput = {};
		overLoading("loading...");

		dataInput.reasonId = $scope.model.reason.reasonId;
		dataInput.stockId = $localStorage.clientContext.sessionStockID;
		dataInput.delivererStockId = $scope.model.stockId; // noi nhan
		dataInput.createDatetime = $("#fromDate").val();
		dataInput.fromStaffId = $scope.model.fromStaff.staffId;// nguoi cap
		dataInput.staffName = $scope.model.toStaff; // nguoi nhan
		dataInput.shopId = $localStorage.clientContext.shopId;

		fctFormPrintWarranty.getListTransactionSerialNew(dataInput, function(result) {
			if (result.length > 0) {
				result = setDataOutputListWarranty(result);
				createDataTableGoodsSerial(result[0].lstWarrantyDetail[0].lstTransSerial);
				createTableListTransaction(result);
				$scope.fillTransactionDetail(result[0]);
				$scope.fillDataForFormDetails(result[0].lstWarrantyDetail[0]);
				$scope.LstAfterSearch = result[0];
				closeOverLay();
			} else {
				closeOverLay();
				bootboxAlertFocus("Không tìm thấy dữ liệu!", "", $translate.instant("vnm.lable.vnm.name"), "");
			}

		});
	}

	// ham chap nhan bo qua tim kiem
	$scope.onCancelSearchFn = function() {
		$scope.checkDisplayBtnSearch = true;
		$scope.checkDisabledPanelSearch = true;
	}

	// create danh sach giao dich
	function createTableListTransaction(dataItem) {
		oTableItem = $('#tableTransactionResult').DataTable({
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
			"order" : [ [ 0, "desc" ] ],
			"select" : {
				style : 'single',
				info : false
			},
			"autoWidth" : true,
			"columns" : [ {
				"mData" : "fromStockIdText",
				"render" : function(data, type, row) {
					if ((data == undefined) || (data == null)) {
						data = "";
					}
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "delivererStockIdText",
				"render" : function(data, type, row) {
					if ((data == undefined) || (data == null)) {
						data = "";
					}
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "staffIdText",
				"render" : function(data, type, row) {
					if ((data == undefined) || (data == null)) {
						data = "";
					}
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "staffName",
				"render" : function(data, type, row) {
					if ((data == undefined) || (data == null)) {
						data = "";
					}
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "reasonName",
				"render" : function(data, type, row) {
					if ((data == undefined) || (data == null)) {
						data = "";
					}
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "createDatetime",
				"render" : function(data, type, row) {
					if ((data == undefined) || (data == null)) {
						data = "";
					}
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + data + "'>" + data + "</div>";
				}
			} ],
			"createdRow" : function(row, data, rowIndex) {
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			},
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				}
			}
		});

		$('#tableTransactionResult tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$scope.disableBtnDetail = true;
			$(this).removeClass('selected');
			var rowData = oTableItem.row(this).data();
			$scope.itemGoodSelected = rowData;

			oTableItem.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.fillTransactionDetail(rowData);
			$scope.onSelectGoodsForAdd();
			$scope.fillDataForFormDetails(rowData.lstWarrantyDetail[0]);
			createDataTableGoodsSerial(rowData.lstWarrantyDetail[0].lstTransSerial);
			// check

		});
	}

	// lay state cua danh muc hang
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

	// set du lieu cho bang danh mục hang
	function setDataOutTransactionDetail(listGoodsItem) {
		for (var i = 0; i < listGoodsItem.length; i++) {
			if (listGoodsItem[i] != undefined && listGoodsItem[i] != null) {
				var goodModel = getGoodCodeAndName(listGoodsItem[i].goodsId);
				if (goodModel != null) {
					listGoodsItem[i].goodsCode = goodModel.goodsCode;
					listGoodsItem[i].name = goodModel.name;
					listGoodsItem[i].unitName = goodModel.unitName;
				}

				var stateName = getTextState(listGoodsItem[i].stateId);
				listGoodsItem[i].stateName = stateName;
				console.log(stateName);
				listGoodsItem[i].quantity = listGoodsItem[i].quantityEffect;
			}
		}
		return listGoodsItem;
	}
	function setDataOutTransactionDetailForObj(goodsItem) {

		if (goodsItem != undefined && goodsItem != null) {
			var goodModel = getGoodCodeAndName(goodsItem.goodsId);
			if (goodModel != null) {
				goodsItem.goodsCode = goodModel.goodsCode;
				goodsItem.name = goodModel.name;
				goodsItem.unitName = goodModel.unitName;
			}

			var stateName = getTextState(goodsItem.stateId);
			goodsItem.stateName = stateName;
			console.log(stateName);
			goodsItem.quantity = goodsItem.quantityEffect;
		}

		return goodsItem;
	}

	$scope.listGoodDetail = [];
	$scope.fillTransactionDetail = function(item) {
		$scope.listGoodDetail = setDataOutTransactionDetail(item.lstWarrantyDetail)
		createTableTransactionDetail($scope.listGoodDetail);
	}
	$scope.fillTransactionDetailObj = function(item) {
		$scope.goodDetail = setDataOutTransactionDetailForObj(item)
		createTableTransactionDetail($scope.goodDetail);
	}
	// khoi tao
	var initialize = function() {
		// overLoading();
		// $scope.getAllReceiveStock();
		$scope.loadDefault();
		$scope.model.fromDate = getCurrentDate();

	}

	initialize();

	$scope.typeAction = '';
	$scope.lstGoodForTransaction = [];
	$scope.goodForTransactionSelected = {};
	// button Them
	$scope.btnAddOnclick = function() {
		$scope.typeAction = 'ADD';
		$scope.resetPanelAddGoods();
		if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
			$scope.disableAddx = false;
		}
		$scope.disableAddChooseGoods = false;
		if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined) {
			$scope.disableAddViewDetail = false;
		}

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
		if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined) {
			$scope.disableAddViewDetail = false;
		}

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
		}
	}

	// Button Xoa
	$scope.btnDeleteOnclick = function() {
		$scope.typeAction = 'DELETE';
		bootboxConfirm($translate.instant("vnm.common.btn.delete"), $translate.instant("vnm.messages.confirm.delete"), $scope.confirmDeleteGoodsForTransOK, $scope.confirmDeleteGoodsForTransNOK);
	}

	// Xac nhan xoa
	$scope.confirmDeleteGoodsForTransOK = function() {
		angular.forEach($scope.lstGoodForTransaction, function(objectGoodsTrans, indexS) {
			if (objectGoodsTrans.goodsId == $scope.goodForTransactionSelected.goodsId && objectGoodsTrans.stateId == $scope.goodForTransactionSelected.stateId) {
				$scope.lstGoodForTransaction.splice(indexS, 1);
			}
		});

		createTableTransactionDetail($scope.lstGoodForTransaction);
		if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
			$scope.isDisabledBtnEdit = true;
			$scope.isDisabledBtnDelete = true;
		}
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
			"strFromSerialClicked" : NEW_WARRANTY_NO,
			"mblnIsFormStockImport" : false,
			"type" : "0",
			"notes" : $scope.model.goodNote,
			"mblnInputToIssue" : true,
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
			"resourceSelected" : $scope.model.resourceCodeForm,
			"goodTransSelected" : $scope.goodForTransactionSelected,
		}

		fctFormPrintWarranty.onOkAction(transGood, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.form.' + result.messages), "goodsQuantity", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstGoodForTransaction = result;
					$scope.goodForTransactionSelected = $scope.lstGoodForTransaction[result.length - 1];
					createTableTransactionDetail($scope.lstGoodForTransaction);

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

		$('#pnlButtonAction').css('display', 'block');
		$('#pnlButtonOK').css('display', 'none');
	}

	// create table mat hang tren form
	function createTableTransactionDetail(dataItem) {
		oTableItemXY = $('#tableTransactionDetail').DataTable({
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
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "stateName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "unitName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
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

		$('#tableTransactionDetail tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXY.row(this).data();
			oTableItemXY.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.goodForTransactionSelected = rowData;
			if ($scope.disableAdd) {
				$scope.onSelectGoodsForAdd();
			}

			createDataTableGoodsSerial(rowData.lstTransSerial);
		});
	}
	$scope.fillDataForFormDetails = function(item) {
		$scope.model.goodsForm = getGoodCodeAndName(item.goodsId); // $scope.goodForTransactionSelected.goodsSelected;
		$scope.model.goodsFormName = getGoodName(item.goodsId);// { $scope.goodForTransactionSelected.goodsSelected.name;
		$scope.model.goodNote = item.note;
	}

	// Chon mat hang va so luong trong dialog xem kho
	$scope.onSelectGoodsForAdd = function() {
		$scope.model.goodsForm = getGoodCodeAndName($scope.goodForTransactionSelected.goodsId); // $scope.goodForTransactionSelected.goodsSelected;
		$scope.model.goodsFormName = getGoodName($scope.goodForTransactionSelected.goodsId);// { $scope.goodForTransactionSelected.goodsSelected.name;
	}

	// Luu du lieu
	$scope.btnFSaveOnclick = function() {
		if (!$scope.fValidateEmpty())
			return;
		fctFormPrintWarranty.validTransActionCode($scope.model.receiptCode, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus($translate.instant("vnm.form_new_warranty_no.error.form." + result.messages, "", $translate.instant("vnm.lable.vnm.name"), ""));
				} else if (result == 'ParamsOK') {
					bootboxConfirm($translate.instant("vnm.common.btn.save"), $translate.instant("vnm.form_new_warranty_no.confirm.messageSave"), $scope.btnFSaveOnclickConfirmOK,
							$scope.btnFSaveOnclickConfirmNOK);
					$scope.btnCancelOnclick();
				}
			}
		});
	}

	$scope.stockTransId = '';
	// Xac nhan luu du lieu
	$scope.btnFSaveOnclickConfirmOK = function() {
		overLoading();
		var mpStockTrans = {
			"sessionStockShopID" : $localStorage.clientContext.sessionStockID,
			"cmdCode" : $scope.model.receiptCode,
			"execName" : $scope.model.receivePerson,
			"execNote" : $scope.model.note,
			"reasonID" : '102',
			"type" : '1',
			"internalStockId" : $scope.model.stockInternalTypeForm.code,
			"resourceCode" : $scope.model.resourceCodeForm.code,
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
			"staffId" : $localStorage.clientContext.shop.staffId,
			"execStaffID" : $localStorage.clientContext.shop.staffId,
			"vstrFromPartner" : '0',
		}

		fctFormPrintWarranty.onFSaveAction(mpStockTrans, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					var errorMsg = $translate.instant('vnm.form_new_warranty_no.SaveError');
					bootboxAlertFocus(errorMsg + result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else {
					$scope.stockTransId = result.code;
					bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.SaveSuccess'), "", $translate.instant("vnm.lable.vnm.name"), "success");
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
				}
			}
			closeOverLay();
		});
	}

	// Khong luu du lieu
	$scope.btnFSaveOnclickConfirmNOK = function() {

	}

	// Button Nhap lai
	$scope.btnFCancelOnclick = function() {
		$scope.disableAfterSave = false;
		$scope.isDisabledBtnAdd = false;

		$('#pnlButtonOKAfterSave').css('display', 'none');
		$('#pnlButtonOKBeforeSave').css('display', 'block');
	}

	// Validate gia tri de trong
	$scope.fValidateEmpty = function() {
		if ($scope.model.receiptCode == null || $scope.model.receiptCode == undefined || $scope.model.receiptCode == '') {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.form.inputReceiptCode'), 'fReceiptCode', $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}

		if ($scope.model.reasonCode == null || $scope.model.reasonCode == undefined || $scope.model.reasonCode == '') {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.inputReason'), 'fReasonCode', $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.inputProduct'), '', $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}

		return true;
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
				"mData" : "goodsEsn",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "warrantyNo",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "warrantySerial1",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "warrantySerial2",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "warrantySerial3",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "warrantySerial4",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "warrantySerial5",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "expiredDateTime",
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

	$scope.viewDetail = function() {
		$scope.showModalFunction("viewSerialPrintWarranty");
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

	// su kien khi chon nguon hang
	$scope.onChooseResourceCode = function() {
		$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
	}

	$scope.btnFBeforePrintOnclick = function() {
		$scope.disableAddViewDetail = false;
		$('#pnlButtonOKAfterSave').css('display', 'block');
		$('#pnlButtonOKBeforeSave').css('display', 'none');
	}

	// Xu ly btn in giao dich
	$scope.btnFReInputOnclick = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		if ($scope.itemGoodSelected == null || $scope.itemGoodSelected == undefined || $scope.itemGoodSelected.length <= 0) {
			$scope.itemGoodSelected = $scope.LstAfterSearch;
		}
		var SerialString = "";
		var lstSerialTmp = [];
		for (var i = 0; i < $scope.itemGoodSelected.lstWarrantyDetail.length; i++) {
			$scope.lstSerial = $scope.itemGoodSelected.lstWarrantyDetail[i].lstTransSerial;
			for (var j = 0; j < $scope.lstSerial.length; j++) {
				$scope.lstgoodEsn.push($scope.lstSerial[j].goodsEsn);
				SerialString += ("'" + $scope.lstSerial[j].goodsEsn + "',");
				lstSerialTmp.push($scope.lstSerial[j].goodsEsn);
			}
		}

		var templateValueSearch = {
			"code" : $localStorage.clientContext.shop.shopCode,
			"name" : SerialString.substring(SerialString.length - 1, 0)
		}
		var strShopCode = "";

		fctFormPrintWarranty.getTemplateValue(templateValueSearch, function(result) {
			if ($localStorage.clientContext.shop.shopCode == 'MD001') {
				var strShopCode = '3H';
			} else {
				var strShopCode = $localStorage.clientContext.shop.shopCode;
			}
			if (result != null && result != undefined) {
				if (result.status == '0' || result.length <= 0) {
					$scope.lstResult = result;
					for (var i = 0; i < $scope.lstResult.length; i++) {
						for (var j = 0; j < lstSerialTmp.length; j++) {
							if (lstSerialTmp[j] == $scope.lstResult[i].serial) {
								lstSerialTmp.splice(j, 1);
							}
						}
					}
					App.unblockUI("#contentMain");
					bootboxAlertFocus($translate.instant('vnm.FormPrintWarranty.error.serial') + lstSerialTmp, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstResult = result;
					for (var i = 0; i < $scope.lstResult.length; i++) {
						for (var j = 0; j < lstSerialTmp.length; j++) {
							if (lstSerialTmp[j] == $scope.lstResult[i].serial) {
								lstSerialTmp.splice(j, 1);
							}
						}
					}
					App.unblockUI("#contentMain");
					if (lstSerialTmp.length > 0) {
						bootboxAlertFocus($translate.instant('vnm.FormPrintWarranty.error.serial') + lstSerialTmp, "", $translate.instant("vnm.lable.vnm.name"), "");
					}
					var ReportInput = {
						"serial" : SerialString.substring(SerialString.length - 1, 0),
						"full_name" : $localStorage.clientContext.shop.staffName,
						"shop_code" : strShopCode,
						"fileTempName" : 'TemplatePrintWarranty',
						"fileType" : '.pdf'
					};

					fctFormPrintWarranty.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							SerialString = "";
							lstSerialTmp = [];
							ReportInput = {};
							$scope.itemGoodSelected = [];
							App.unblockUI("#contentMain");
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages, "", $translate.instant("vnm.lable.vnm.name"), ""));
						} else {
							SerialString = "";
							lstSerialTmp = [];
							ReportInput = {};
							$scope.itemGoodSelected = [];
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				}
			}
		});
	}

	// end
	// btn in chi tiet
	$scope.btnFPrintOnclick = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		if ($scope.itemGoodSelected == null || $scope.itemGoodSelected == undefined || $scope.itemGoodSelected.length <= 0) {
			$scope.itemGoodSelected = $scope.LstAfterSearch;
		}
		var SerialString = "";
		var lstSerialTmp = [];
		for (var i = 0; i < $scope.itemGoodSelected.lstWarrantyDetail.length; i++) {
			$scope.lstSerial = $scope.itemGoodSelected.lstWarrantyDetail[i].lstTransSerial;
			for (var j = 0; j < $scope.lstSerial.length; j++) {
				$scope.lstgoodEsn.push($scope.lstSerial[j].goodsEsn);
				SerialString += ("'" + $scope.lstSerial[j].goodsEsn + "',");
				lstSerialTmp.push($scope.lstSerial[j].goodsEsn);
			}
		}

		var templateValueSearch = {
			"code" : $localStorage.clientContext.shop.shopCode,
			"name" : SerialString.substring(SerialString.length - 1, 0)
		}

		fctFormPrintWarranty.getTemplateValue(templateValueSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0' || result.length <= 0) {
					$scope.lstResult = result;
					for (var i = 0; i < $scope.lstResult.length; i++) {
						for (var j = 0; j < lstSerialTmp.length; j++) {
							if (lstSerialTmp[j] == $scope.lstResult[i].serial) {
								lstSerialTmp.splice(j, 1);
							}
						}
					}
					App.unblockUI("#contentMain");
					bootboxAlertFocus($translate.instant('vnm.FormPrintWarranty.error.serial') + lstSerialTmp, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstResult = result;
					for (var i = 0; i < $scope.lstResult.length; i++) {
						for (var j = 0; j < lstSerialTmp.length; j++) {
							if (lstSerialTmp[j] == $scope.lstResult[i].serial) {
								lstSerialTmp.splice(j, 1);
							}
						}
					}
					App.unblockUI("#contentMain");
					if (lstSerialTmp.length > 0) {
						bootboxAlertFocus($translate.instant('vnm.FormPrintWarranty.error.serial') + lstSerialTmp, '', $translate.instant("vnm.lable.vnm.name"), "");
					}
					var ReportInput = {
						"serial" : SerialString.substring(SerialString.length - 1, 0),
						"full_name" : $localStorage.clientContext.fullName,
						"shop_code" : $localStorage.clientContext.shop.shopCode,
						"fileTempName" : 'TemplatePrintWarrantyDetail',
						"fileType" : '.pdf'
					};

					fctFormPrintWarranty.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							SerialString = "";
							lstSerialTmp = [];
							ReportInput = {};
							$scope.itemGoodSelected = [];
							App.unblockUI("#contentMain");
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages, '', $translate.instant("vnm.lable.vnm.name"), ""));
						} else {
							SerialString = "";
							lstSerialTmp = [];
							ReportInput = {};
							$scope.itemGoodSelected = [];
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
					fctFormPrintWarranty.updateWarrantyNumber($scope.lstResult, function(result) {
						if (result.length > 0) {
							closeOverLay();
						} else {
							closeOverLay();
						}
					});
				}
			}
		});
	}

	// end

	// f9 nguoi cap
	// dataInput.fromStaffId = $scope.model.fromStaff.staffId;
	$("#fStaffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListStaff");
			$scope.itemSelectedListStaff = null;
			createDataTableListStaff($scope.StaffSource);
		} else {
			if ($scope.model.staffCode == '') {
				$scope.model.staffName = '';
			}
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
				"sSearch" : $('#fStaffCode').val().toUpperCase()
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
				$('.dataTables_scrollBody thead tr').css({
					visibility : 'collapse'
				});
				var dataRowSelected = table.row(0).data();
				$scope.itemSelectedListStaff = dataRowSelected;
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
		$scope.model.fromStaff.staffId = "";
		if ($scope.itemSelectedListStaff == undefined || $scope.itemSelectedListStaff == null) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelected"), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		}
		$scope.model.staffCode = $scope.itemSelectedListStaff.code.trim();
		$scope.model.staffName = $scope.itemSelectedListStaff.name.trim();
		$scope.model.fromStaff.staffId = $scope.itemSelectedListStaff.staffId.trim();
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
			for (var i = 0; i < $scope.StaffSource.length; i++) {
				if ($scope.model.staffCode.trim().toUpperCase() == $scope.StaffSource[i].code.toUpperCase()) {
					$scope.model.staffCode = $scope.StaffSource[i].code.trim();
					$scope.model.staffName = $scope.StaffSource[i].name.trim();
					$scope.model.fromStaff.staffId = $scope.StaffSource[i].staffId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListStaff");
				$scope.itemSelectedListStaff = null;
				createDataTableListStaff($scope.StaffSource);
			}
		} else {
			$scope.model.staffCode = "";
			$scope.model.staffName = "";
			$scope.model.fromStaff.staffId = "";
			document.getElementById('fStaffCode').title = '';
			document.getElementById('fStaffName').title = '';
		}
	}

	// F9 Kho nhan vien
	// dataInput.delivererStockId = $scope.model.toStock.stockId; // noi nhan
	$("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$scope.showModalFunction("modalListShop");
			$scope.itemSelectedListShop = null;
			createDataTableListShop($scope.ReceiveStockSource);
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
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
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
		$scope.model.stockId = "";
		if ($scope.itemSelectedListShop == undefined || $scope.itemSelectedListShop == null) {
			bootboxAlertFocus($translate.instant("vnm.FormBankTransactionApprove.NotSelected"), "", $translate.instant("vnm.lable.vnm.name"), "")
			return;
		}
		$scope.model.shopCode = $scope.itemSelectedListShop.code.trim();
		$scope.model.shopName = $scope.itemSelectedListShop.name.trim();
		$scope.model.stockId = $scope.itemSelectedListShop.stockId.trim();
		document.getElementById('fShopCode').title = $scope.model.shopCode.trim();
		document.getElementById('fShopName').title = $scope.model.shopName.trim();
		$scope.hideModalFunction("modalListShop");
		angular.element(document.getElementById('fShopCode')).focus();
	}

	$scope.dialogListShopActionBack = function() {
		angular.element(document.getElementById('fShopCode')).focus();
		$scope.hideModalFunction("modalListShop");
	}
	$scope.checkF9Shop = function() {
		var check = "0";
		if ($scope.model.shopCode != undefined && $scope.model.shopCode != "") {
			for (var i = 0; i < $scope.ReceiveStockSource.length; i++) {
				if ($scope.model.shopCode.trim().toUpperCase() == $scope.ReceiveStockSource[i].code.toUpperCase()) {
					$scope.model.shopCode = $scope.ReceiveStockSource[i].code.trim();
					$scope.model.shopName = $scope.ReceiveStockSource[i].name.trim();
					$scope.model.stockId = $scope.ReceiveStockSource[i].stockId.trim();
					check = "1";
					break;
				}
			}
			if ("0" == check) {
				$scope.showModalFunction("modalListShop");
				$scope.itemSelectedListShop = null;
				createDataTableListShop($scope.ReceiveStockSource);
			}

		} else {
			$scope.model.shopCode = "";
			$scope.model.shopName = "";
			$scope.model.stockId = "";
			document.getElementById('fShopCode').title = '';
			document.getElementById('fShopName').title = '';
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

function getCurrentDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();

	return today = dd + '/' + mm + '/' + yyyy;
}