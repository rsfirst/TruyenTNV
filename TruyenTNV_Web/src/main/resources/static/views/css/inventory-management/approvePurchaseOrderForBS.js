app_vnm.factory('ctk_approvePurchaseOrderForBS', function($http, $translate) {
	return {
		exportIMG : function(path, callback) {
			var url = eim_url + '/bs/downloadBSIMG?path=' + path;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderForBSContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

		getPO : function(shopCode, status, poCode, fromDate, toDate, staffId, shopId, callback) {
			var url = eim_url + '/bs/ProductOrderMPV/searchPOforBS?shopCodeBS=' + shopCode + '&statusCode=' + status + '&pOCode=' + poCode + '&toDate=' + toDate
					+ '&fromDate=' + fromDate + '&staffId=' + staffId + '&shopId=' + shopId;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderForBSContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		getPOdetail : function(poId, callback) {
			var url = eim_url + '/bs/ProductOrderMPV/searchPODetailforBS?poId=' + poId;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderForBSContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		approvePO : function(orderId, poCode, callback) {
			var url = eim_url + '/bs/ProductOrderForBs/aprrove?order_id=' + orderId + '&poCode=' + poCode;
			$http.put(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderForBSContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		rejectPO : function(orderId, poCode, reason, staffId, callback) {
			var url = eim_url + '/bs/ProductOrderMPV/rejectPOforBS?poId=' + orderId + '&poCode=' + poCode + '&reason=' + reason + '&approver_staffId=' + staffId;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderForBSContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},
		getRejectReason : function(callback) {
			var url = eim_url + "/bs/ProductOrder/getRejectReason";
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderForBSContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

		searhGoodsOnStock : function(shopId, sourceGood, internalStockId, goodName, goodCode, goodIssueNo, fromSerial, toSerial, gQuantity, gState, gNotes,
				listGoodDetailOnStock) {
			$http.post(
					eim_url + '/bs/TransShopNonHie/searhGoodsOnStockTab52?shopId=' + shopId + '&sourceGood=' + sourceGood + '&internalStockId=' + internalStockId
							+ '&goodName=' + goodName + '&goodCode=' + goodCode + '&goodIssueNo=' + goodIssueNo + '&fromSerial=' + fromSerial + '&toSerial='
							+ toSerial + '&gQuantity=' + gQuantity + '&gState=' + gState + '&gNotes=' + gNotes).success(listGoodDetailOnStock).error(
					function(callback) {
						App.unblockUI("#approvePurchaseOrderForBSContent");
						if ("403" == callback.status) {
							bootbox.alert(callback.status + " : " + callback.message);
						} else {
							bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
						}
					});
		},
		exportForStaff : function(shopId, parentStaffId, parentStaffName, receiptNo, notes, deliveryStockId, internalStockId, orderId, orderCode, goodTempList,
				resultExport) {
			$http.post(
					eim_url + '/bs/StockExportForStaff/AppPurOrderForBS?' + 'shopId=' + shopId + '&parentStaffId=' + parentStaffId + '&parentStaffName='
							+ parentStaffName + '&receiptNo=' + receiptNo + '&notes=' + notes + '&deliveryStockId=' + deliveryStockId + '&internalStockId='
							+ internalStockId + '&orderId=' + orderId + '&orderCode=' + orderCode, goodTempList).success(resultExport).error(
					function(callback) {
						App.unblockUI("#approvePurchaseOrderForBSContent");
						if ("403" == callback.status) {
							bootbox.alert(callback.status + " : " + callback.message);
						} else {
							bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
						}
					});
		},
		searchGoodOnStockDefault : function(shopId, strStaffId, goods_code, goods_name, resource_code, internalStockId, goodIssueNo, listGoodsOnStock) {
			$http.post(
					eim_url + '/bs/TransShopNonHie/searhGoodsOnStock?shopId=' + shopId + '&strStaffId=' + strStaffId + '&sourceGood=' + resource_code
							+ '&internalStockId=' + internalStockId + '&goodName=' + goods_name + '&goodCode=' + goods_code + '&goodIssueNo=' + goodIssueNo)
					.success(listGoodsOnStock).error(function(callback) {
						App.unblockUI("#transferShopNonHierarchical");
						if ("403" == callback.status) {
							bootbox.alert(callback.status + " : " + callback.message);
						} else {
							bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
						}
					});
		},
	}
});

app_vnm.controller('ctrl-approvePurchaseOrderForBS', function($scope, $rootScope, $translate, $anchorScroll, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage, ctk_approvePurchaseOrderForBS) {

	var dataGoodNotIn = [];
	var dataGoodIn = [];
	var po = [];
	var pod = [];
	var selectedPO = {};
	var goodId = '';
	$scope.tmp = false;
	$scope.editingData = {};
	$scope.status = {};
	$scope.showApproveBtn = {};
	$scope.showRejectBtn = {};
	$scope.showEdit = {};
	$scope.downloadFile = {};
	$scope.itemSelected = [];
	$scope.labelstatus = {};
	$scope.stStock = [];
	$scope.stStockData = [];
	$scope.stStockSelected = [];
	$scope.stToStock = [];
	$scope.stToStockData = [];
	$scope.stToStockSelected = [];
	$scope.stToStockTrans = [];
	$scope.showGoodsExport = false;
	$scope.mapCodeQuantity = [];
	$scope.orderId = '';
	$scope.orderCode = '';
	$scope.totalPoBS = 0;
	$scope.totalPoBSDetail = 0;
	$scope.totalViewExported = 0;
	$scope.countViewExported = 0;
	var listGoodNameDefault = [];
	var finishExportBoo = false;

	$scope.clearData = function() {
		$scope.stStock = [];
		$scope.stStockData = [];
		$scope.stStockSelected = [];
		$scope.stToStock = [];
		$scope.stToStockData = [];
		$scope.stToStockSelected = [];
		$scope.stToStockTrans = [];
		$scope.totalViewExported = 0;
		$scope.countViewExported = 0;
		dataGoodNotIn = [];
		dataGoodIn = [];
		$scope.tblStStockData = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : dataGoodNotIn
		});
		$scope.tblStToStockData = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : dataGoodIn
		});
		$scope.tableViewGoodExported = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : []
		});
		$scope.model.fromSerial = '';
		$scope.model.toSerial = '';
		$scope.model.gQuantity = '';
		$scope.showGoodsExport = false;
		$scope.tblStStockDataItems = 0;
	}
	$scope.clearInputSearch = function() {
		$scope.model.fromSerial = '';
		$scope.model.toSerial = '';
		$scope.model.gQuantity = '';
	}
	$scope.clearDataSearchAgain = function() {
		$scope.stStock = [];
		$scope.stStockData = [];
		$scope.stStockSelected = [];
		$scope.stToStock = [];
		$scope.stToStockData = [];
		$scope.stToStockSelected = [];
		$scope.stToStockTrans = [];
		$scope.totalViewExported = 0;
		$scope.countViewExported = 0;
		dataGoodNotIn = [];
		dataGoodIn = [];
		$scope.tblStStockData = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : dataGoodNotIn
		});
		$scope.tblStToStockData = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : dataGoodIn
		});
		$scope.tableViewGoodExported = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : []
		});
		$scope.showGoodsExport = false;
		$scope.tblStStockDataItems = 0;
	}
	App.blockUI({
		target : "#approvePurchaseOrderForBSContent",
		boxed : true,
		message : 'loading...'
	});

	ctk_approvePurchaseOrderForBS.searchGoodOnStockDefault($localStorage.clientContext.shop.shopId, $localStorage.clientContext.shop.shopId, '', '', 'AL', '0',
			'', function(listGoodOnStock) {
			App.unblockUI("#approvePurchaseOrderForBSContent");

				if (listGoodOnStock.length > 0) {
					listGoodNameDefault = listGoodOnStock;
				}
			});

	$scope.getPO = function() {
		po = [];
		pod = [];

		$scope.detailPurchase = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : pod
		});

		var brandedShop = '';
		var bank = '';
		var status = '99';
		var todate = '';
		var fromDate = '';
		var poCode = '';
		var staffId = $localStorage.clientContext.shop.staffId;
		var shopId = $localStorage.clientContext.shop.shopId;

		var fromDate = StringUtilNVLWithDefault($("#fromDate").val(), "");
		var todate = StringUtilNVLWithDefault($("#toDate").val(), "");

		if (angular.isDefined($scope.model.brandedShop))
			brandedShop = $scope.model.brandedShop;

		if (angular.isDefined($scope.model.bank))
			bank = $scope.model.bank;

		if (angular.isDefined($scope.model.status))
			status = $scope.model.status;

		if (angular.isDefined($scope.model.poid))
			poCode = $scope.model.poid;

		App.blockUI({
			target : "#approvePurchaseOrderForBSContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrderForBS.getPO(brandedShop, status, poCode, fromDate, todate, staffId, shopId, function(result) {
			App.unblockUI("#approvePurchaseOrderForBSContent");

			if (result.messages != null) {
				
				bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm: " + result.messages);
			} else {
				po = result;
				$scope.tableParams = new NgTableParams({
					count : 7
				}, {
					dataset : po
				});


				if (po.length > 0) {
					$scope.totalPoBS = po.length;
					for (var i = 0, length = po.length; i < length; i++) {
						if (po[i].depositSlip != null && po[i].depositSlip !== '') {
							$scope.downloadFile[po[i].depositSlip] = true;
						} else {
							$scope.downloadFile[po[i].depositSlip] = false;
						}

						if (po[i].status == '0') {
							// alert('=0');
							$scope.showApproveBtn[po[i].poCode] = true;
							$scope.showRejectBtn[po[i].poCode] = true;
							$scope.labelstatus[po[i].poCode] = "warning";// submit
							$scope.status[po[i].poCode] = "Chờ điều chuyển";
						} else {
							// alert('=1');
							$scope.showApproveBtn[po[i].poCode] = false;
							$scope.showRejectBtn[po[i].poCode] = false;
							if (po[i].status == '1') {
								$scope.labelstatus[po[i].poCode] = "success"; // Authorized
								$scope.status[po[i].poCode] = "Đã hoàn tất";
							} else if (po[i].status == '3') {
								$scope.labelstatus[po[i].poCode] = "danger"; // rejected
								$scope.status[po[i].poCode] = "Đã từ chối";
							} else if (po[i].status == '2') {
								$scope.showApproveBtn[po[i].poCode] = true;
								$scope.labelstatus[po[i].poCode] = "primary";// In Progress
								$scope.status[po[i].poCode] = "Điều chuyển một phần";
							}
						}
					}
				}
			}

		});
	}

	$scope.model = {};
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			SubscriberName : {
				required : true,
				maxlength : 255
			},
			NPRegistrationName : {
				required : true,
				maxlength : 255
			},
			DocumentNumber : {
				required : true,
				maxlength : 11
			},
			DocumentIssueDate : {
				required : true,
				maxlength : 11
			},
			DocumentIssuePlace : {
				required : true,
				maxlength : 11
			},
			SubscriberRepresentative : {
				required : true,
				maxlength : 255
			}
		},
		messages : {
			SubscriberName : {
				required : $translate.instant('vnm.messages.validate.subscriberName.required'),
				maxlength : "Tên thuê bao không vượt quá 255 ký tự."
			},
			NPRegistrationName : {
				required : "Yêu cầu nhập tên đăng ký NP",
				maxlength : "Tên đăng ký NP không vượt quá 255 ký tự."
			},
			DocumentNumber : {
				required : "Yêu cầu nhập số định danh",
				maxlength : "Số định danh không vượt quá 11 ký tự."
			},
			DocumentIssueDate : {
				required : "Yêu cầu nhập ngày cấp định danh",
				maxlength : "Ngày cấp định danh không vượt quá 11 ký tự."
			},
			DocumentIssuePlace : {
				required : "Yêu cầu nhập nơi cấp định danh",
				maxlength : "Nơi cấp định danh không vượt quá 11 ký tự."
			},
			SubscriberRepresentative : {
				required : "Yêu cầu nhập tên đại diện thuê bao",
				maxlength : "Tên đại diện thuê bao không vượt quá 255 ký tự."
			}
		}
	}

	$scope.listStatus = [ {
		'Id' : '99',
		'Title' : 'Tất cả'
	}, {
		'Id' : '0',
		'Title' : 'Chờ điều chuyển'
	}, {
		'Id' : '1',
		'Title' : 'Đã hoàn tất'
	}, {
		'Id' : '3',
		'Title' : 'Đã Từ chối'
	}, {
		'Id' : '2',
		'Title' : 'Điều chuyển một phần'
	} ];

	$scope.showDetail = function(item, index) {
		$scope.itemSelected = item;
		$scope.processShowDetail();
	}
	$scope.processShowDetail = function() {
		App.blockUI({
			target : "#approvePurchaseOrderForBSContent",
			boxed : true,
			message : 'loading...'
		});
		ctk_approvePurchaseOrderForBS.getPOdetail($scope.itemSelected.orderId, function(result) {
			App.unblockUI("#approvePurchaseOrderForBSContent");

			if (result.messages != null) {
				bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm chi tiết đơn hàng: " + result.messages);
			} else {
				if (result.length > 0) {
					pod = result;
					$scope.totalPoBSDetail = pod.length;
					$scope.detailPurchase = new NgTableParams({
						page : 1,
						count : 10
					}, {
						dataset : pod
					});
					$scope.model.totalGross = $scope.itemSelected.totalGrossValue;
					$scope.model.goodSearch = {};
					$scope.model.goodSearch.selected = {};
					$scope.listGoodSearch = [];
					$scope.listGoodSearch = pod;
					$scope.model.goodSearch.selected = pod[0];
				}
			}
		});
	}

	$scope.download = function(depositSlip) {

		App.blockUI({
			target : "#viewDeliverOrderContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrderForBS.exportIMG(encodeURI(depositSlip), function(response, status, headers) {
			App.unblockUI("#viewDeliverOrderContent");

			var basename = depositSlip.replace(/\\/g, '/').replace(/.*\//, '');

			download(new Blob([ response ]), basename, headers["content-type"]);

		});
	}

	function showAlert(idModal, message) {
		// $scope.model.errorsms = message;
		// $('#'+idModal).modal('show');
		// bootbox.alert(message);
		bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));
	}

	$scope.approve = function(item, index) {

		App.blockUI({
			target : "#approvePurchaseOrderForBSContent",
			boxed : true,
			message : 'loading...'
		});

		$scope.showGoodsExport = true;
		$scope.model.billId = new Date().getTime();
		$scope.listStockImport = [ {
			'code' : item.order_shopName,
			'name' : item.order_shopName,
			'stockId' : item.order_shopId
		} ];
		$scope.orderId = item.orderId;
		$scope.orderCode = item.poCode;
		$scope.model.stockImport = {};
		$scope.model.stockImport.selected = {};
		$scope.model.stockImport.selected = $scope.listStockImport[0];
		$scope.model.reasonAp = 'Xác nhận đơn hàng';
		$scope.model.statusGoodSearch = 'Mới';
		$scope.model.typeGoodSearch = 'Hàng dùng để bán';
		App.unblockUI("#approvePurchaseOrderForBSContent");

		App.blockUI({
			target : "#searchPoContent",
			boxed : true,
			message : 'Đang xử lý điều chuyển đơn hàng! Kéo xuống dưới để tiếp tục thực hiện ...'
		});

		$location.hash('exportGoodContent');
		$anchorScroll();
		$scope.showGoodsExport = true;

		$(".loading-message-boxed").each(function(e) {
			$(this).find('img').attr('src', "");
		});

		$(".blockElement").css("cursor", "");
		$(".blockOverlay").css("cursor", "");

	}

	$scope.finishExport = function() {
		if (!finishExportBoo) {
			$('#confirmFinishTrans').modal('show');
		} else {
			$scope.confirmFinishExport(true, finishExportBoo);
			$scope.clearData();
		}
		$scope.clearData();
	}

	$scope.confirmFinishExport = function(item, fnE) {
		if (item) {
			$('#confirmFinishTrans').modal('hide');
			App.unblockUI("#searchPoContent");
			$scope.showGoodsExport = false;
			$location.hash('searchPoContent');
			$anchorScroll();
			$scope.itemSelected = {};
			if (fnE) {
				$scope.getPO();
			}
			$scope.model.totalGross = 0;
		}
	}

	$scope.submit = function(item, index) {
	}
	$scope.save = function(item, index) {
	}
	$scope.reject = function(item, index) {

		App.blockUI({
			target : "#approvePurchaseOrderForBSContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrderForBS.getRejectReason(function(result) {
			App.unblockUI("#approvePurchaseOrderForBSContent");

			var modalInstance = $uibModal.open({
				animation : true,
				templateUrl : '/views/css/inventory-management/reason.htm',
				// templateUrl :'/views/prepaid/popup.htm',
				controller : 'reject',
				backdrop : true,
				size : '30',
				resolve : {
					para : function() {
						return item;
					},
					lstReason : function() {
						return result;
					}
				}
			});

		});
	}

	$rootScope.$on("readyReject", function(event, po) {
		$scope.doReject(po);
	});

	$scope.doReject = function(po) {
		App.blockUI({
			target : "#approvePurchaseOrderForBSContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrderForBS.rejectPO(po.orderId, po.poCode, po.notes, $localStorage.clientContext.shop.staffId, function(result) {
			App.unblockUI("#approvePurchaseOrderForBSContent");

			if (result.status == '1')
				$scope.model.errorsms = 'Thực hiện từ chối đơn hàng thành công!';
			else
				$scope.model.errorsms = 'Xảy ra lỗi trong quá trình từ chối đơn hàng: ' + result.response_code;
			bootbox.alert($scope.model.errorsms);
			$scope.getPO();
		});
	}

	$scope.closeViewDialog = function(tmp) {
		if (tmp) {
			location.reload();
		}
	}
	// QuyetVu Tim kiem hang trong kho
	$scope.searchInventory = function() {
		App.blockUI({
			target : "#approvePurchaseOrderForBSContent",
			boxed : true,
			message : 'Loading...'
		});
		// Reload Thong tin don dat hang.
		$scope.processShowDetail();
		$scope.clearDataSearchAgain();
		$scope.showGoodsExport = true;
		$scope.showViewGoodsExported = false;
		var ownerShopStaff = '';
		var tab52GoodSource = '';
		//
		goodId = $scope.model.goodSearch.selected.productId;
		var found = getPositionOfObjectByName($scope.model.goodSearch.selected.productName, listGoodNameDefault);
		if (found == -1) {
			App.unblockUI("#approvePurchaseOrderForBSContent");
			bootbox.alert("Mặt hàng : " + $scope.model.goodSearch.selected.productName + " chưa được gán vào kho cửa hàng!");
		} else {
			// shopId, sourceGood, internalStockId, goodName, goodCode, goodIssueNo,
			// fromSerial, toSerial, gQuantity, gState, gNotes, listGoodDetailOnStock
			ctk_approvePurchaseOrderForBS.searhGoodsOnStock(
			// shopId
			$localStorage.clientContext.shop.shopId,
			// sourceGood
			StringUtilNVLWithDefault(tab52GoodSource, 'AL'),
			// internalStockId-Hang dung de ban
			'0',
			// goodName
			StringUtilNVLWithDefault($scope.model.goodSearch.selected.productName, ""),
			// goodCode
			StringUtilNVLWithDefault($scope.model.goodSearch.selected.productId, ""),
			// goodIssueNo
			'',
			// fromSerial
			StringUtilNVLWithDefault($scope.model.fromSerial, ""),
			// toSerial
			StringUtilNVLWithDefault($scope.model.toSerial, ""),
			// gQuantity
			StringUtilNVLWithDefault($scope.model.gQuantity, ""),
			// gState- New
			'0',
			// gNotes
			'',
			// listGoodDetailOnStock
			function(listGoodsDetailOnStock) {
				$scope.tblStStockDataItems = listGoodsDetailOnStock.length;
				dataGoodNotIn = listGoodsDetailOnStock;
				// Update tabledataGoodNotIn = listGoodsDetailOnStock;
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
				App.unblockUI("#approvePurchaseOrderForBSContent");
			});
		}
		$scope.clearInputSearch()
	}
	$scope.updateGoodCodeTab52 = function(iGoodCode) {
		$scope.model.Tab52goodCode = iGoodCode;
	}
	// QuyetVu Xuat Kho
	$scope.exportInventory = function() {
		$scope.tableViewGoodExported = new NgTableParams({
			page : 1,
			count : 10
		}, {
			dataset : []
		});

		$scope.totalViewExported = 0;
		$scope.countViewExported = 0;
		$scope.showViewGoodsExported = false;
		if ($scope.frm_approvePurchaseOrder.validate()) {
			if (StringUtilNVLWithDefault($scope.model.stockImport.selected.name, '') !== '') {
				if ($scope.stToStockTrans.length > 0) {
					App.blockUI({
						target : "#approvePurchaseOrderForBSContent",
						boxed : true,
						message : 'Loading...'
					});
					if ($scope.stToStockTrans.length > 0) {
						ctk_approvePurchaseOrderForBS.exportForStaff(
						// shopId, parentStaffId,
						// parentStaffName, receiptNo, notes,
						// deliveryStockId, internalStockId, orderId, orderCode, goodTempList,
						// resultExport
						// shopId
						$localStorage.clientContext.shop.shopId,
						// parentStaffId
						$localStorage.clientContext.shop.staffId,
						// parentStaffName
						$localStorage.clientContext.shop.staffName,
						// receiptNo
						StringUtilNVLWithDefault($scope.model.billId, ""), StringUtilNVLWithDefault($scope.model.notes, ""),
						//
						$scope.model.stockImport.selected.stockId, '0', $scope.orderId, $scope.orderCode, $scope.stToStockTrans, function(resultExport) {
							finishExportBoo = true;
							if (StringUtilNVLWithDefault(resultExport.status, '1') != '1') {
								App.unblockUI("#approvePurchaseOrderForBSContent");
								var contentMsg = $translate.instant('vnm.messages.validate.inventoryMsg.transferShopNonHierarchical.' + resultExport.messages);
								if (StringUtilNVLWithDefault(resultExport.guideInfor, '') != '') {
									contentMsg = contentMsg.replace('~description~', resultExport.guideInfor);
								}
								bootbox.alert(contentMsg);
								// reload thong tin don hang
								$scope.processShowDetail();
								$scope.clearData();
								$scope.showGoodsExport = true;
								$scope.showViewGoodsExported = false;
							} else {
								App.unblockUI("#approvePurchaseOrderForBSContent");
								// Remove all good which exported
								for (var i = 0; i < $scope.stToStock.length; i++) {
									$scope.stStockData.splice(getPositionOfObject($scope.stToStock[i], $scope.stStockData), 1);
								}
								// Reset stStockSelected, stToStockSelected
								$scope.stStockSelected = [];
								// Reset stToStock
								$scope.stToStock = [];
								// Update stToStockData
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
								// Reset stToStockSelected
								$scope.stToStockSelected = [];
								$scope.tableToStockTotalItems = $scope.stToStockData.length;
								// Translate error code to message.
								resultExportTranslate = [];
								resultExport.forEach(function(item, index) {
									if (StringUtilNVLWithDefault(item.exeIEStaffResult, '1') != '1'
											|| StringUtilNVLWithDefault(item.exeIESerialStaffResult, '1') != '1') {
										item.notes = $translate.instant('vnm.messages.validate.inventoryMsg.transferShopNonHierarchical.' + item.notes);
									}
									resultExportTranslate.push(item);
								});
								// update table Good exported
								// add function to group serial
								resultExportTranslate = $filter('orderBy')(resultExportTranslate, [ 'goods_code', 'oneSerial' ]);
								$scope.lstTemp = [];
								$scope.lstFinal = [];

								resultExportTranslate.forEach(function(item) {
									var found = getPositionOfObjectByCode(item, $scope.lstTemp);
									if (found == -1) {
										item.maxSerial = item.oneSerial;
										item.minSerial = item.oneSerial;
										item.count = 1;
										$scope.lstTemp.push(item);
									} else {
										if (checkSerialContinute($scope.lstTemp[found].maxSerial, item.oneSerial)) {
											$scope.lstTemp[found].maxSerial = item.oneSerial;
											$scope.lstTemp[found].count++;
										} else {
											$scope.lstFinal.push($scope.lstTemp[found]);
											$scope.lstTemp.splice(found, 1);
											item.maxSerial = item.oneSerial;
											item.minSerial = item.oneSerial;
											item.count = 1;
											$scope.lstTemp.push(item);
										}
									}
								});
								if ($scope.lstTemp.length > 0) {
									$scope.lstTemp.forEach(function(item) {
										$scope.lstFinal.push(item);
									});
								}
								$scope.lstFinal = $filter('orderBy')($scope.lstFinal, [ 'goods_code', 'oneSerial' ]);
								$scope.tableViewGoodExported = new NgTableParams({
									page : 1,
									count : 10
								}, {
									dataset : $scope.lstFinal
								});
								$scope.totalViewExported = resultExportTranslate.lenth;
								$scope.countViewExported = $scope.lstFinal.length;
								bootbox.alert("Đã hoàn tất đơn đặt hàng cho BS thành công!");
								$scope.showViewGoodsExported = true;
								// Reload Thong tin don dat hang.
								$scope.processShowDetail();
								$scope.clearData();
								$scope.showGoodsExport = true;
								$scope.showViewGoodsExported = false;

							}
						});
					} else {
						App.unblockUI("#approvePurchaseOrderForBSContent");
						bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.transferShopNonHierarchical.selected.require'));
						return;
					}

				} else {
					App.unblockUI("#approvePurchaseOrderForBSContent");
					bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.invalidNumberOfGoods.required'));
				}
			} else {
				App.unblockUI("#approvePurchaseOrderForBSContent");
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

	$scope.addGoodsForTransfer = function() {
		// TODO: check quantity
		if ($scope.stStockSelected.length > 0) {
			angular.forEach($scope.listGoodSearch, function(objectAttact, index) {
				if (goodId == objectAttact.productId) {
					var itemsIn = [];
					angular.forEach($scope.stToStockTrans, function(obj, index) {
						if (obj.goods_code == goodId) {
							itemsIn.push(obj);
						}
					});
					if ($scope.stStockSelected.length + itemsIn.length <= objectAttact.quantity) {
						for (var i = 0; i < $scope.stStockSelected.length; i++) {
							var row = Object.assign({}, $scope.stStockSelected[i]);
							row.isSelected = false;
							var found = getPositionOfObjectBySerial(row, dataGoodNotIn)
							if (found != -1) {
								dataGoodIn.push(row);
								dataGoodNotIn.splice(found, 1);
							}

						}
						// Cap nhat tong so
						$scope.tblStStockDataItems = $scope.tblStStockDataItems - $scope.stStockSelected.length;
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
						$scope.stToStockTrans = dataGoodIn;
					} else {
						bootbox.alert("Số lượng hàng vượt quá đơn hàng yêu cầu");
					}
				}
			});
		} else {
			bootbox.alert("Bạn chưa chọn bản ghi nào!");
		}
	}
	$scope.removeGoodsForTransfer = function() {
		if ($scope.stToStockSelected.length > 0) {
			for (var i = 0; i < $scope.stToStockSelected.length; i++) {
				var row = Object.assign({}, $scope.stToStockSelected[i]);
				row.isSelected = false;
				var found = getPositionOfObjectBySerial(row, dataGoodIn)
				if (found != -1) {
					dataGoodNotIn.push(row);
					dataGoodIn.splice(row, 1);
				}
			}
			// Cap nhat tong so
			$scope.tblStStockDataItems = $scope.tblStStockDataItems + $scope.stToStockSelected.length;
			dataGoodNotIn.sort(GetSortOrder("oneSerial"));
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
			$scope.stStockSelected = [];
			$scope.model.checkboxAdd = {
				checked : false,
				items : {}
			};

			$scope.model.checkboxRemove = {
				checked : false,
				items : {}
			};
			$scope.stToStockTrans = dataGoodIn;
		} else {
			bootbox.alert("Bạn chưa chọn bản ghi nào!");
		}

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
	$scope.removeErrorMsg = function() {
		$scope.stockStaffMsgError = '';
	}
});

app_vnm.controller('reject', function($scope, $rootScope, $compile, $uibModal, $confirm, $uibModalInstance, ctk_approvePurchaseOrderForBS, para, lstReason) {

	$scope.enableOtherReason = false;
	$scope.options = lstReason;
	$scope.fuckingReason = "";

	$scope.close = function() {
		$uibModalInstance.dismiss('cancel');
	};
	$scope.submit = function() {
		var finalReason = "";
		if ($scope.enableOtherReason) {
			finalReason = $scope.model.otherReason;
		} else {
			finalReason = $scope.fuckingReason;
		}
		$uibModalInstance.dismiss('cancel');
		submitReject(para, finalReason);
	};

	$scope.changedReason = function(item) {
		$scope.fuckingReason = item;
		$scope.enableOtherReason = false;
	};
	$scope.enableOther = function() {
		$scope.fuckingReason = "";
		$scope.options = [];
		$scope.enableOtherReason = true;
	};

	submitReject = function(item, reason) {
		item.notes = reason;
		$rootScope.$emit("readyReject", item);
		/*
		 * ctk_approvePurchaseOrderForBS.rejectPO(item.orderId, item.poCode, reason, function(result) { if(result.response_code == '0000' ||
		 * result.response_detail.indexOf('SUCCESS') > -1) $('#Success').modal('show'); else $('#Error').modal('show'); });
		 */
	}
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
function getPositionOfObjectByCode(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem.goods_code === arrDes[x].goods_code) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
function getPositionOfObjectByName(name, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (name === arrDes[x].goods_name) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
function checkSerialContinute(sr1, sr2) {
	var check = false;
	var x1, x2;
	var num1, num2;
	for (var i = 0; i < sr1.length; i++) {
		if (sr1.charAt(i) != sr2.charAt(i)) {
			break;
		}
	}
	x1 = sr1.slice(i);
	x2 = sr2.slice(i);
	num1 = parseInt(x1);
	num2 = parseInt(x2);

	if (num2 - num1 == 1) {
		check = true;
	}
	return check;
}
// Comparer Function
function GetSortOrder(prop) {
	return function(a, b) {
		if (a[prop] > b[prop]) {
			return 1;
		} else if (a[prop] < b[prop]) {
			return -1;
		}
		return 0;
	}
}