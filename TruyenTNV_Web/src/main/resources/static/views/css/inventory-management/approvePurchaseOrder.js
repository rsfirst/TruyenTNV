app_vnm.factory('ctk_approvePurchaseOrder', function($http, $translate) {
	return {
		exportIMG : function(path, callback) {
			var url = eim_url + '/bs/downloadApproveIMG?path=' + path;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		getPO : function(shopCode, bankCode, status, poCode, fromDate, toDate, callback) {
			var url = eim_url + '/bs/ProductOrder/getPOApprove?shopCode=' + shopCode + '&bankCode=' + bankCode + '&status=' + status + '&poCode=' + poCode
					+ '&toDate=' + toDate + '&fromDate=' + fromDate;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		approvePO : function(orderId, poCode, callback) {
			var url = eim_url + '/bs/ProductOrder/aprrove?order_id=' + orderId + '&poCode=' + poCode;
			$http.put(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		rejectPO : function(orderId, poCode, reason, callback) {
			var url = eim_url + '/bs/ProductOrder/reject?order_id=' + orderId + '&poCode=' + poCode + '&rejectReason=' + reason;
			$http.put(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		getDiscount : function(data1, data2, callback) {
			var url = eim_url + "/bs/ProductOrder/getDiscount?goodCode=" + data1 + "&quantity=" + data2;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

		getAllBank : function(callback) {
			var url = eim_url + "/bs/ProductOrder/getAllBank";
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

		getRejectReason : function(callback) {
			var url = eim_url + "/bs/ProductOrder/getRejectReason";
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#approvePurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		}
	}
});

app_vnm.controller('ctrl-approvePurchaseOrder', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, ctk_approvePurchaseOrder) {

	var po = [];
	var pod = [];
	var selectedPO = {};
	$scope.tmp = false;
	$scope.editingData = {};
	$scope.status = {};
	$scope.showApproveBtn = {};
	$scope.showRejectBtn = {};
	$scope.showEdit = {};
	$scope.downloadFile = {};
	$scope.itemSelected = [];
	$scope.labelstatus = {};

	App.blockUI({
		target : "#approvePurchaseOrderContent",
		boxed : true,
		message : 'loading...'
	});

	ctk_approvePurchaseOrder.getAllBank(function(result) {
		// $('#approvePO').modal('show');
		App.unblockUI("#approvePurchaseOrderContent");
		$scope.listBank = result;
	});

	$scope.getPO = function() {
		po = [];
		pod = [];

		setBillValue(pod);

		$scope.detailPurchase = new NgTableParams({}, {
			dataset : pod
		});

		var brandedShop = '';
		var bank = '';
		var status = '99';
		var todate = '';
		var fromDate = '';
		var poCode = '';

		if (angular.isDefined($scope.model.fromDate) && $scope.model.fromDate !== null && $scope.model.fromDate.length > 6)
			fromDate = $filter('date')(new Date(parseInt($scope.model.fromDate.substr(6))), 'yyyy-MM-dd');

		if (angular.isDefined($scope.model.toDate) && $scope.model.toDate !== null && $scope.model.toDate.length > 6) {
			var dateFo = new Date(parseInt($scope.model.toDate.substr(6)));
			var tm = moment(dateFo).add(1, 'days').toDate();
			todate = $filter('date')(tm, 'yyyy-MM-dd');
		}

		if (angular.isDefined($scope.model.brandedShop))
			brandedShop = $scope.model.brandedShop;

		if (angular.isDefined($scope.model.bank))
			bank = $scope.model.bank;

		if (angular.isDefined($scope.model.status))
			status = $scope.model.status;

		if (angular.isDefined($scope.model.poid))
			poCode = $scope.model.poid;

		App.blockUI({
			target : "#approvePurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrder.getPO(brandedShop, bank, status, poCode, fromDate, todate, function(result) {
			po = result;
			$scope.tableParams = new NgTableParams({}, {
				dataset : po
			});

			App.unblockUI("#approvePurchaseOrderContent");

			if (po.length > 0) {
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
						$scope.status[po[i].poCode] = "Chờ xác nhận";
					} else {
						// alert('=1');
						$scope.showApproveBtn[po[i].poCode] = false;
						$scope.showRejectBtn[po[i].poCode] = false;
						if (po[i].status == '1') {
							$scope.labelstatus[po[i].poCode] = "success"; // Authorized
							$scope.status[po[i].poCode] = "Đã xác nhận";
						} else if (po[i].status == '3') {
							$scope.labelstatus[po[i].poCode] = "danger"; // rejected
							$scope.status[po[i].poCode] = "Đã từ chối";
						} else if (po[i].status == '2') {
							$scope.labelstatus[po[i].poCode] = "default";// In Progress
							$scope.status[po[i].poCode] = "Đã lưu";
						}
					}
				}
			}

			// if(po.length == 0)
			// {
			// $scope.model.errorsms = 'Không có PO nào được tìm thấy!';
			// $('#approvePO').modal('show');
			// }
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
		'Title' : 'Chờ xác nhận'
	}, {
		'Id' : '1',
		'Title' : 'Đã xác nhận'
	}, {
		'Id' : '3',
		'Title' : 'Đã Từ chối'
	} ];

	$scope.showDetail = function(item, index) {

		$scope.itemSelected = item;

		selectedPO = item;
		pod = item.productOrderDetail;

		setBillValue(pod);

		if (pod.length > 0) {
			// alert("pod.length > 0");
			if (item.status != 3) {
				// alert("$scope.showEdit[item] = false");
				$scope.showEdit[item] = false;
			} else {
				// alert("$scope.showEdit[item] = true");
				$scope.showEdit[item] = true;
				for (var i = 0, length = pod.length; i < length; i++) {
					$scope.editingData[pod[i].orderDetailId] = false;
				}
			}
		}

		$scope.detailPurchase = new NgTableParams({}, {
			dataset : pod
		});
	}

	$scope.download = function(depositSlip) {

		App.blockUI({
			target : "#viewDeliverOrderContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrder.exportIMG(encodeURI(depositSlip), function(response, status, headers) {
			App.unblockUI("#viewDeliverOrderContent");

			var basename = depositSlip.replace(/\\/g, '/').replace(/.*\//, '');

			download(new Blob([ response ]), basename, headers["content-type"]);

		});
	}

	$scope.edit = function(item, index) {
		$scope.editingData[item.orderDetailId] = true;
	}

	$scope.getDiscountSub = function(item, index) {

		if (item.quantity != '' && !isNaN(item.quantity) && angular.isNumber(+item.quantity)) {
			App.blockUI({
				target : "#approvePurchaseOrderContent",
				boxed : true,
				message : 'loading...'
			});

			ctk_approvePurchaseOrder.getDiscount(item.productId, item.quantity, function(result) {
				$scope.listdiscountSub = result;

				App.unblockUI("#approvePurchaseOrderContent");
			});
		} else {
			$scope.model.errorsms = 'CRT-0005';
			// $('#createPO').modal('show');
			showAlert("approvePO", $scope.model.errorsms);
		}
	}

	function showAlert(idModal, message) {
		// $scope.model.errorsms = message;
		// $('#'+idModal).modal('show');
		// bootbox.alert(message);
		bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));
	}

	$scope.approve = function(item, index) {

		App.blockUI({
			target : "#approvePurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrder.approvePO(item.orderId, item.poCode, function(result) {
			App.unblockUI("#approvePurchaseOrderContent");

			if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)
				$scope.model.errorsms = '0000';
			else
				$scope.model.errorsms = result.response_code;

			showAlert("approvePO", $scope.model.errorsms);
			$scope.getPO();
		});
	}

	$scope.submit = function(item, index) {
	}
	$scope.save = function(item, index) {
	}
	$scope.reject = function(item, index) {

		App.blockUI({
			target : "#approvePurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrder.getRejectReason(function(result) {
			App.unblockUI("#approvePurchaseOrderContent");

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

	function setBillValue(pod) {
		var total_gross_temp = 0;
		var total_discount_temp = 0;
		var total_net_temp = 0;

		if (pod.length > 0) {
			for (var i = 0, length = pod.length; i < length; i++) {
				total_gross_temp = total_gross_temp + pod[i].grossValue;
				total_discount_temp = total_discount_temp + pod[i].discountValue;
				total_net_temp = total_net_temp + pod[i].netValue;
			}
		}
		$scope.model.totalGross = total_gross_temp;
		$scope.model.totalDiscount = total_discount_temp;
		$scope.model.totalNet = total_net_temp;
	}

	$rootScope.$on("readyReject", function(event, po) {
		$scope.doReject(po);
	});

	$scope.doReject = function(po) {
		// alert(angular.toJson(po));

		App.blockUI({
			target : "#approvePurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_approvePurchaseOrder.rejectPO(po.orderId, po.poCode, po.notes, function(result) {
			App.unblockUI("#approvePurchaseOrderContent");

			if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)
				$scope.model.errorsms = '0000';
			else
				$scope.model.errorsms = result.response_code;

			// $('#approvePO').modal('show');
			showAlert("approvePO", $scope.model.errorsms);
			$scope.getPO();
		});
	}

	$scope.closeViewDialog = function(tmp) {
		if (tmp) {
			location.reload();
		}
	}

});

app_vnm.controller('reject', function($scope, $rootScope, $compile, $uibModal, $confirm, $uibModalInstance, ctk_approvePurchaseOrder, para, lstReason) {

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
		 * ctk_approvePurchaseOrder.rejectPO(item.orderId, item.poCode, reason, function(result) { if(result.response_code == '0000' ||
		 * result.response_detail.indexOf('SUCCESS') > -1) $('#Success').modal('show'); else $('#Error').modal('show'); });
		 */
	}
});