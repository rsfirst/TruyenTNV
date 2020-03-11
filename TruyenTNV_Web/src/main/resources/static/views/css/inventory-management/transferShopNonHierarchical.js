app_vnm.factory('ctk_transferShopNonHierarchical', function($http, $translate) {
	// Khoi tao interface
	return {
		create_ticket : function(data, callback) {
			$http.post(eim_url + '/bs/ticket', data).success(callback).error(function(callback) {
				App.unblockUI("#transferShopNonHierarchical");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getlistStockStaff : function(shopId, parentStaffId, listStockStaff) {
			$http.post(eim_url + '/bs/TransShopNonHie/getAllStaff?shopId=' + shopId + '&parentStaffId=' + parentStaffId).success(listStockStaff).error(
					function(callback) {
						App.unblockUI("#transferShopNonHierarchical");
						bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
					});
		},
		getListOfInternalStock : function(listOfInternalStock) {
			$http.post(eim_url + '/bs/TransShopNonHie/getListInternalStock').success(listOfInternalStock).error(function(callback) {
				App.unblockUI("#transferShopNonHierarchical");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		searchInventory : function(sourceGood, internalStockId, goodName, goodIssueNo, searchInventoryResult) {
			$http.post(
					eim_url + '/bs/TransShopNonHie/searhAllGoods?sourceGood=' + sourceGood + '&internalStockId=' + internalStockId + '&goodName=' + goodName
							+ '&goodIssueNo=' + goodIssueNo).success(searchInventoryResult).error(function(callback) {
				App.unblockUI("#transferShopNonHierarchical");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getGoodDetail : function(shopId, stockId, goods_id, goods_code, goods_name, check_serial, resource_code, notes, internalStockId, goodDetail) {
			$http.post(
					eim_url + '/bs/TransShopNonHie/getGoodDetail?shopId=' + shopId + '&stockId=' + stockId + '&goods_id=' + goods_id + '&goods_code=' + goods_code
							+ '&goods_name=' + goods_name + '&check_serial=' + check_serial + '&resource_code=' + resource_code + '&notes=' + notes
							+ '&internalStockId=' + internalStockId).success(goodDetail).error(function(callback) {
				App.unblockUI("#transferShopNonHierarchical");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		searchGoodOnStock : function(shopId, strStaffId, goods_code, goods_name, resource_code, internalStockId, goodIssueNo, listGoodsOnStock) {
			$http.post(
					eim_url + '/bs/TransShopNonHie/searhGoodsOnStock?shopId=' + shopId + '&strStaffId=' + strStaffId + '&sourceGood=' + resource_code
							+ '&internalStockId=' + internalStockId + '&goodName=' + goods_name + '&goodCode=' + goods_code + '&goodIssueNo=' + goodIssueNo)
					.success(listGoodsOnStock).error(function(callback) {
						App.unblockUI("#transferShopNonHierarchical");
						bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
					});
		},
		searhGoodsOnStockTab52 : function(shopId, sourceGood, internalStockId, goodName, goodCode, goodIssueNo, fromSerial, toSerial, gQuantity, gState,
				gNotes, listGoodDetailOnStock) {
			$http.post(
					eim_url + '/bs/TransShopNonHie/searhGoodsOnStockTab52?shopId=' + shopId + '&sourceGood=' + sourceGood + '&internalStockId=' + internalStockId
							+ '&goodName=' + goodName + '&goodCode=' + goodCode + '&goodIssueNo=' + goodIssueNo + '&fromSerial=' + fromSerial + '&toSerial='
							+ toSerial + '&gQuantity=' + gQuantity + '&gState=' + gState + '&gNotes=' + gNotes).success(listGoodDetailOnStock).error(
					function(callback) {
						App.unblockUI("#transferShopNonHierarchical");
						bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
					});
		},
		exportForStaff : function(shopId, parentStaffId, parentStaffName, receiptNo, notes, deliveryStockId, internalStockId, goodTempList, resultExport) {
			$http.post(
					eim_url + '/bs/StockExportForStaff/ExportNonHierarchical?' + '&shopId=' + shopId + '&parentStaffId=' + parentStaffId + '&parentStaffName='
							+ parentStaffName + '&receiptNo=' + receiptNo + '&notes=' + notes + '&deliveryStockId=' + deliveryStockId + '&internalStockId='
							+ internalStockId, goodTempList).success(resultExport).error(function(callback) {
				App.unblockUI("#transferShopNonHierarchical");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		initListStock : function(shopId, shopCode, blCreate, callback) {
			var url = eim_url + "/bs/Stock/getListStockExport?shopId=" + shopId + "&shopCode=" + shopCode + "&blCreate=" + blCreate;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#stockImportUnRanking");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

	}
});
app_vnm.controller('ctrl-transferShopNonHierarchical', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, NgTableParams, $localStorage, $element, ctk_transferShopNonHierarchical) {
	
	var dataGoodNotIn = [];
	var dataGoodIn = [];
	$scope.itemsByPage = 10;
	$scope.model = {};
	$scope.stStock = [];
	$scope.stStockData = [];
	$scope.stStockSelected = [];
	$scope.stToStock = [];
	$scope.stToStockData = [];
	$scope.stToStockSelected = [];
	$scope.stToStockTrans = [];
	$scope.showViewGoodsExported = false;
	$scope.constantYesNo = [ 'Không', 'Có' ];
	$scope.constantState = [ 'Mới', 'Cũ', 'Hỏng' ];
	$scope.model.tab52Reason = 'Xuất hàng không phân cấp';
	$scope.model.staffBillId = new Date().getTime();
	$scope.shopName = $localStorage.clientContext.shop.shopName;
	$scope.stockStaffMsgError = '';
	$scope.tblStStockDataItems = 0;
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			staffBillId : {
				required : true
			},
			tab52StockStaff : {
				required : true
			}
		},
		messages : {
			staffBillId : {
				required : $translate.instant('vnm.messages.validate.inventoryMsg.staffBillId.required')
			},
			tab52StockStaff : {
				required : $translate.instant('vnm.messages.validate.inventoryMsg.tab52StockStaff.required')
			}
		}
	}
	$scope.model.orType = 0;
	$scope.listTab52Status = [ {
		'Id' : '0',
		'Title' : 'Mới'
	} ];
	$scope.listSource = [ {
		'Id' : 'AL',
		'Title' : 'VNMobile'
	}, {
		'Id' : 'HT',
		'Title' : 'HTMobile'
	}, {
		'Id' : 'HM',
		'Title' : 'HMobile'
	} ];
	var tm = '';
	ctk_transferShopNonHierarchical.initListStock($localStorage.clientContext.shop.shopId, $localStorage.clientContext.shop.shopCode, false, function(result) {
		$scope.listStockStaff = result;
		$scope.model.stockStaff = $localStorage.clientContext.shop.shopId;
		$scope.listTab52StockStaff = result;
		// $scope.model.tab52StockStaff = result[0]stockId;

	});
	$scope.totalItemCount = 0;

	ctk_transferShopNonHierarchical.getListOfInternalStock(function(result) {
		$scope.listInternalStock = result;
		$scope.model.internalStock = result[0].internalStockId;
		$scope.listTab52InternalStock = result;
		$scope.model.tab52ListInternalStock = result[0].internalStockId;
		// sourceGood,internalStockId,goodName,goodIssueNo,
		ctk_transferShopNonHierarchical.searchInventory(StringUtilNVLWithDefault(tm, 'AL'), result[0].internalStockId,
				StringUtilNVL($scope.model.commodityName), StringUtilNVL($scope.model.billId), function(resultInventory) {
					$scope.tableCommodity = new NgTableParams({
						page : 1,
						count : 10
					}, {
						dataset : resultInventory
					});
					$scope.totalItemCount = resultInventory.length;
				});
		ctk_transferShopNonHierarchical.searchGoodOnStock($localStorage.clientContext.shop.shopId, $localStorage.clientContext.shop.shopId, '', '', 'AL',
				$scope.model.internalStock, '', function(listGoodOnStock) {
					if (listGoodOnStock.length > 0) {
						$scope.listTab52GoodName = listGoodOnStock;
						// $scope.model.tab52GoodName=listGoodOnStock[0].goods_name;
						$scope.listGoodName = listGoodOnStock;
					}
				});
	});

	$scope.model.fromDate = $filter('date')(Date.now(), 'dd/MM/yyyy');
	$scope.searchGoods = function() {

		// Clear table detail
		$scope.tableGoodDetail = new NgTableParams({}, {
			dataset : []
		});
		$scope.tableCommodity = new NgTableParams({}, {
			dataset : []
		});
		$scope.tableGoodDetail.reload();
		$scope.tableCommodity.reload();
		$scope.totalItemDetail = 0;
		$scope.totalItemCount = 0;
		$scope.tableViewGoodExported = new NgTableParams({}, {
			dataset : []
		});

		App.blockUI({
			target : "#transferShopNonHierarchical",
			boxed : true,
			message : 'Loading...'
		});
		// shopId,strStaffId,goods_code,goods_name,resource_code,internalStockId,goodIssueNo,
		ctk_transferShopNonHierarchical.searchGoodOnStock($localStorage.clientContext.shop.shopId, StringUtilNVLWithDefault($scope.model.stockStaff, ""),
				StringUtilNVLWithDefault($scope.model.goodCode, ""), StringUtilNVLWithDefault($scope.model.goodName, ""), $scope.model.source,
				$scope.model.internalStock, StringUtilNVLWithDefault($scope.model.billId, ""), function(listGoodsOnStock) {
					$scope.tableCommodity = new NgTableParams({
						page : 1,
						count : 10
					}, {
						dataset : listGoodsOnStock
					});
					$scope.totalItemCount = listGoodsOnStock.length;

					App.unblockUI("#transferShopNonHierarchical");
				});
	}
	$scope.exportInventory = function() {
		$scope.tableViewGoodExported = new NgTableParams({}, {
			dataset : []
		});
		$scope.showViewGoodsExported = false;

		if ($scope.frm_transferShopNonHierarchical.validate()) {
			if (StringUtilNVLWithDefault($scope.model.tab52StockStaff, '') !== '') {
				if ($scope.stToStockTrans.length > 0) {
					App.blockUI({
						target : "#transferShopNonHierarchical",
						boxed : true,
						message : 'Loading...'
					});
					if ($scope.stToStockTrans.length > 0) {
						ctk_transferShopNonHierarchical.exportForStaff($localStorage.clientContext.shop.shopId, $localStorage.clientContext.shop.staffId,
								$localStorage.clientContext.shop.staffName, StringUtilNVLWithDefault($scope.model.staffBillId, ""), StringUtilNVLWithDefault(
										$scope.model.notes, ""), $scope.model.tab52StockStaff, $scope.model.tab52ListInternalStock, $scope.stToStockTrans,
								function(resultExport) {
									if (StringUtilNVLWithDefault(resultExport.status, '1') != '1') {
										App.unblockUI("#transferShopNonHierarchical");
										var contentMsg = $translate.instant('vnm.messages.validate.inventoryMsg.transferShopNonHierarchical.'
												+ resultExport.messages);
										if (StringUtilNVLWithDefault(resultExport.guideInfor, '') != '') {
											contentMsg = contentMsg.replace('~description~', resultExport.guideInfor);
										}
										bootbox.alert(contentMsg);
									} else {
										App.unblockUI("#transferShopNonHierarchical");
										// Remove all
										// good which
										// exported
										for (var i = 0; i < $scope.stToStock.length; i++) {
											$scope.stStockData.splice(getPositionOfObject($scope.stToStock[i], $scope.stStockData), 1);
										}
										// Reset
										// stStockSelected,
										// stToStockSelected
										$scope.stStockSelected = [];
										// Reset
										// stToStock
										$scope.stToStock = [];
										// Update
										// stToStockData
										for (var i = 0; i < $scope.stToStockTrans.length; i++) {
											var postionInstToStockData = getPositionOfObject($scope.stToStockTrans[i], $scope.stToStockData);
											dataGoodIn.splice($scope.stToStockTrans[i], 1);
										}
										$scope.tblStToStockData = new NgTableParams({
											page : 1,
											count : 10
										}, {
											dataset : dataGoodIn
										});

										// Reset
										// stToStockSelected
										$scope.stToStockSelected = [];
										// Translate
										// error code to
										// message.
										resultExportTranslate = [];
										resultExport
												.forEach(function(item, index) {
													if (StringUtilNVLWithDefault(item.exeIEStaffResult, '1') != '1'
															|| StringUtilNVLWithDefault(item.exeIESerialStaffResult, '1') != '1') {
														item.notes = $translate.instant('vnm.messages.validate.inventoryMsg.transferShopNonHierarchical.'
																+ item.notes);
													}
													resultExportTranslate.push(item);
												});
										// update table
										$scope.tableViewGoodExportedItems = resultExportTranslate.length;
										// Good exported
										$scope.tableViewGoodExported = new NgTableParams({
											page : 1,
											count : 10
										}, {
											dataset : resultExportTranslate
										});
										bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.transferShopNonHierarchical.SUCCESS'));
										// tao moi ma phieu
										$scope.model.staffBillId = new Date().getTime();
									}
								});
					} else {
						App.unblockUI("#transferShopNonHierarchical");

						bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.transferShopNonHierarchical.selected.require'));
						return;
					}

				} else {
					App.unblockUI("#transferShopNonHierarchical");
					bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.invalidNumberOfGoods.required'));
				}
			} else {
				App.unblockUI("#transferShopNonHierarchical");
				var element = document.getElementById("showErrorStockStaff");
				$scope.stockStaffMsgError = $translate.instant('vnm.messages.validate.inventoryMsg.transferShopNonHierarchical.required');
				element.focus();
			}
		} else {
			var firstInvalid = document.querySelector('.has-error').querySelector('input');
			if (firstInvalid) {
				firstInvalid.focus();
			}
		}
	}
	// TODO: check quantity order and shop
	$scope.addGoodsForTransfer = function() {
		for (var i = 0; i < $scope.stStockSelected.length; i++) {
			var row = Object.assign({}, $scope.stStockSelected[i]);
			row.isSelected = false;
			var found = getPositionOfObjectBySerial(row, dataGoodNotIn)
			if (found != -1) {
				dataGoodIn.push(row);
				dataGoodNotIn.splice(found, 1);
			}

		}

		$scope.tblStToStockData = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : dataGoodIn
		});
		$scope.tblStStockData = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : dataGoodNotIn
		});
		$scope.stStockSelected = []
		$scope.model.checkboxAdd = {
			checked : false,
			items : {}
		};

		$scope.model.checkboxRemove = {
			checked : false,
			items : {}
		};
		// All after add
		// $scope.checkAllRemoveDefault();
		$scope.stToStockTrans = dataGoodIn;
		$scope.tblStStockDataItems = $scope.tblStStockDataItems - dataGoodIn.length;
	}
	$scope.removeGoodsForTransfer = function() {
		for (var i = 0; i < $scope.stToStockSelected.length; i++) {
			var row = Object.assign({}, $scope.stToStockSelected[i]);
			row.isSelected = false;
			var found = getPositionOfObjectBySerial(row, dataGoodIn)
			if (found != -1) {
				dataGoodNotIn.push(row);
				dataGoodIn.splice(row, 1);
			}
		}
		$scope.tblStToStockData = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : dataGoodIn
		});
		$scope.tblStStockData = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : dataGoodNotIn
		});
		$scope.stToStockSelected = [];
		$scope.model.checkboxAdd = {
			checked : false,
			items : {}
		};

		$scope.model.checkboxRemove = {
			checked : false,
			items : {}
		};
		// All after add
		// $scope.checkAllRemoveDefault();
		$scope.stToStockTrans = dataGoodIn;

	}
	$scope.searchInventoryTab52 = function() {
		// Reset table trans detail
		$scope.tableViewGoodExported = new NgTableParams({}, {
			dataset : []
		});
		$scope.tableViewGoodExportedItems = 0;
		$scope.tblStToStockData = new NgTableParams({}, {
			dataset : []
		});
		App.blockUI({
			target : "#transferShopNonHierarchical",
			boxed : true,
			message : 'Loading...'
		});
		var ownerShopStaff = '';
		var tab52GoodSource = '';
		// shopId,strStaffId,sourceGood,internalStockId,goodName,goodCode,goodIssueNo
		var fromSerial = StringUtilNVLWithDefault($scope.model.fromSerial, "");
		var toSerial = StringUtilNVLWithDefault($scope.model.toSerial, "");
		ctk_transferShopNonHierarchical.searhGoodsOnStockTab52($localStorage.clientContext.shop.shopId, StringUtilNVLWithDefault(tab52GoodSource, 'AL'),
				$scope.model.tab52ListInternalStock, StringUtilNVLWithDefault($scope.model.tab52GoodName, ""), StringUtilNVLWithDefault(
						$scope.model.Tab52goodCode, ""), '', // ReceiptNo
				StringUtilNVLWithDefault($scope.model.fromSerial, ""), StringUtilNVLWithDefault($scope.model.toSerial, ""), StringUtilNVLWithDefault(
						$scope.model.gQuantity, ""), StringUtilNVLWithDefault($scope.model.tab52Status, "0"), '',// $scope.model.gNotes
				function(listGoodsDetailOnStock) {
					$scope.tblStStockDataItems = listGoodsDetailOnStock.length;
					dataGoodNotIn = listGoodsDetailOnStock;
					$scope.tblStStockData = new NgTableParams({
						page : 1,
						count : 10
					}, {
						dataset : dataGoodNotIn
					});
					$scope.stStockSelected = [];
					$scope.stToStockSelected = [];
					$scope.showViewGoodsExported = false;
					$scope.model.checkboxAdd = {
						checked : false,
						items : {}
					};

					$scope.model.checkboxRemove = {
						checked : false,
						items : {}
					};
					App.unblockUI("#transferShopNonHierarchical");
				});

	}

	$scope.updateGoodCodeTab52 = function(iGoodCode) {
		$scope.model.Tab52goodCode = iGoodCode;
	}
	$scope.updateGoodCode = function(iGoodCode) {
		$scope.model.goodCode = iGoodCode;
	}
	$scope.viewGoodsExported = function() {
		$scope.showViewGoodsExported = true;
	}
	$scope.totalItemDetail = 0;
	$scope.getInfo = function(item) {
		$scope.itemSelected = item;
		App.blockUI({
			target : "#transferShopNonHierarchical",
			boxed : true,
			message : 'Loading...'
		});

		$scope.searchResult = [];
		// alert($scope.model.stockStaff + "|" +
		// $scope.model.internalStock);
		// shopId, strStaffId,
		// goods_id,goods_code,goods_name,check_serial,resource_code,
		// internalStockId
		ctk_transferShopNonHierarchical.getGoodDetail($localStorage.clientContext.shop.shopId, item.stock_id, item.goods_id, item.goods_code, item.goods_name,
				item.check_serial, item.resource_code, item.notes, $scope.model.internalStock, function(goodDetail) {
					$scope.searchResult = goodDetail;
					$scope.tableQuantity = new NgTableParams({
						page : 1,
						count : 10
					}, {
						dataset : [ goodDetail ]
					});
					$scope.tableGoodDetail = new NgTableParams({
						page : 1,
						count : 10
					}, {
						dataset : goodDetail.serial
					});
					$scope.totalItemDetail = goodDetail.serial.length;
					App.unblockUI("#transferShopNonHierarchical");
				});
	}
	$scope.removeErrorMsg = function() {
		$scope.stockStaffMsgError = '';
	}
	$scope.selectAll = function(collection) {
		// if there are no items in the 'selected' array,
		// push all elements to 'selected'
		if ($scope.stStockSelected.length === 0) {

			angular.forEach(collection, function(val) {

				$scope.stStockSelected.push(val);

			});

			// if there are items in the 'selected' array,
			// add only those that ar not
		} else if ($scope.stStockSelected.length > 0 && $scope.stStockSelected.length != $scope.stStockData.length) {

			angular.forEach(collection, function(val) {

				var found = getPositionOfObject(val, $scope.stStockSelected);

				if (found == -1)
					$scope.stStockSelected.push(val);

			});

			// Otherwise, remove all items
		} else {

			$scope.stStockSelected = [];

		}
	}
	$scope.selectAllToStock = function(collection) {
		// if there are no items in the 'selected' array,
		// push all elements to 'selected'
		if ($scope.stToStockSelected.length === 0) {

			angular.forEach(collection, function(val) {

				$scope.stToStockSelected.push(val);

			});

			// if there are items in the 'selected' array,
			// add only those that ar not
		} else if ($scope.stToStockSelected.length > 0 && $scope.stToStockSelected.length != $scope.stToStockData.length) {

			angular.forEach(collection, function(val) {

				var found = getPositionOfObject(val, $scope.stToStockSelected);

				if (found == -1)
					$scope.stToStockSelected.push(val);
			});

			// Otherwise, remove all items
		} else {

			$scope.stToStockSelected = [];

		}
	}
	$scope.select = function(item) {
		var found = getPositionOfObject(item, $scope.stStockSelected);
		if (found == -1) {
			$scope.stStockSelected.push(item);
		} else
			$scope.stStockSelected.splice(found, 1);

	}
	$scope.selectSingleToStock = function(item) {
		var found = getPositionOfObject(item, $scope.stToStockSelected);
		if (found == -1) {
			$scope.stToStockSelected.push(item);
		} else
			$scope.stToStockSelected.splice(found, 1);

	}

	$scope.selectNotIn = function(item) {
		var found = getPositionOfObjectBySerial(item, $scope.stStockSelected);
		if (found == -1) {
			$scope.stStockSelected.push(item);
		} else
			$scope.stStockSelected.splice(found, 1);

		if ($scope.stStockSelected.length == dataGoodNotIn.length) {
			$scope.model.checkboxAdd.checked = true;
		} else {
			$scope.model.checkboxAdd.checked = false;
		}
	}
	$scope.selectIn = function(item) {
		var found = getPositionOfObjectBySerial(item, $scope.stToStockSelected);
		if (found == -1) {
			$scope.stToStockSelected.push(item);
		} else
			$scope.stToStockSelected.splice(found, 1);

		if ($scope.stToStockSelected.length == dataGoodIn.length) {
			$scope.model.checkboxRemove.checked = true;
		} else {
			$scope.model.checkboxRemove.checked = false;
		}
	}

	$scope.checkAllAdd = function() {
		$scope.stStockSelected = [];
		angular.forEach(dataGoodNotIn, function(item) {
			$scope.model.checkboxAdd.items[item.oneSerial] = $scope.model.checkboxAdd.checked;
			if ($scope.model.checkboxAdd.checked) {
				$scope.stStockSelected.push(item);
			}
		})
	}

	$scope.checkAllRemove = function() {
		$scope.stToStockSelected = [];
		angular.forEach(dataGoodIn, function(item) {
			$scope.model.checkboxRemove.items[item.oneSerial] = $scope.model.checkboxRemove.checked;
			if ($scope.model.checkboxRemove.checked) {
				$scope.stToStockSelected.push(item)
			}
		})
	}
	// check default
	$scope.checkAllRemoveDefault = function() {
		$scope.stToStockSelected = [];
		angular.forEach(dataGoodIn, function(item) {
			$scope.model.checkboxRemove.checked = true;
			$scope.model.checkboxRemove.items[item.oneSerial] = $scope.model.checkboxRemove.checked;
			if ($scope.model.checkboxRemove.checked) {
				$scope.stToStockSelected.push(item)
			}
		})
	}
});
app_vnm.directive('csSelect', function() {
	return {
		require : '^stTable',
		template : '<input type="checkbox"/>',
		scope : {
			row : '=csSelect'
		},
		link : function(scope, element, attr, ctrl) {

			element.bind('click', function(evt) {
				scope.$apply(function() {
					ctrl.select(scope.row, 'multiple');
				});
			});

			scope.$watch('row.isSelected', function(newValue, oldValue) {
				if (newValue === true) {
					element.parent().addClass('st-selected');
					element.find('input').prop('checked', true);
				} else {
					element.parent().removeClass('st-selected');
					element.find('input').prop('checked', false);
				}
			});
		}
	};
});
app_vnm.directive('stSelectAll', function() {
	return {
		restrict : 'E',
		template : '<input type="checkbox" ng-model="isAllSelected" />',
		scope : {
			all : '='
		},
		link : function(scope, element, attr) {

			scope.$watch('isAllSelected', function() {
				scope.all.forEach(function(val) {
					val.isSelected = scope.isAllSelected;
				})
			});

			scope.$watch('all', function(newVal, oldVal) {
				if (oldVal) {
					oldVal.forEach(function(val) {
						val.isSelected = false;
					});
				}

				scope.isAllSelected = false;
			});
		}
	}
});
app_vnm.directive('ckSelect', function() {
	return {
		require : '^stTable',
		template : '<input type="checkbox"/>',
		scope : {
			row : '=ckSelect'
		},
		link : function(scope, element, attr, ctrl) {

			element.bind('click', function(evt) {
				scope.$apply(function() {
					ctrl.select(scope.row, 'multiple');
				});
			});

			scope.$watch('row.isSelected', function(newValue, oldValue) {
				if (newValue === true) {
					element.parent().addClass('st-selected');
					element.find('input').prop('checked', true);
				} else {
					element.parent().removeClass('st-selected');
					element.find('input').prop('checked', false);
				}
			});
		}
	};
});
app_vnm.directive('skSelectAll', function() {
	return {
		restrict : 'E',
		template : '<input type="checkbox" ng-model="isAllckSelected" />',
		scope : {
			kall : '='
		},
		link : function(scope, element, attr) {

			scope.$watch('isAllckSelected', function() {
				scope.kall.forEach(function(val) {
					val.isSelected = scope.isAllckSelected;
				})
			});

			scope.$watch('kall', function(newVal, oldVal) {
				if (oldVal) {
					oldVal.forEach(function(val) {
						val.isSelected = false;
					});
				}

				scope.isAllckSelected = false;
			});
		}
	}
});

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}
function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}
function removeAllChecked(nameOfCheckbox) {
	var checkboxes = document.getElementsByName(nameOfCheckbox);
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].type == 'checkbox') {
			checkboxes[i].checked = false;
		}
	}
	return true;
}
function setAllChecked(nameOfCheckbox) {
	var checkboxes = document.getElementsByName(nameOfCheckbox);
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].type == 'checkbox') {
			checkboxes[i].checked = true;
		}
	}
	return true;
}
function getPositionOfObject(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem === arrDes[x]) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
function getPositionOfObjectBySerial(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem.oneSerial === arrDes[x].oneSerial) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
