app_vnm.factory('ctk_viewPurchaseOrder', function($http, $translate) {
	return {
		getAllPO : function(callback) {
			var url = eim_url + '/bs/ProductOrder/getAllPO';
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#viewPurchaseOrderContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		exportIMG : function(path, callback) {
			var url = eim_url + '/bs/downloadViewIMG?path=' + path;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(callback) {
				App.unblockUI("#viewPurchaseOrderContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		getPO : function(shopCode, bankCode, status, poCode, fromDate, toDate, callback) {
			var url = eim_url + '/bs/ProductOrder/getPO?shopCode=' + shopCode + '&bankCode=' + bankCode + '&status=' + status + '&poCode=' + poCode + '&toDate='
					+ toDate + '&fromDate=' + fromDate;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#viewPurchaseOrderContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		}
	}
});

app_vnm.controller('ctrl-viewPurchaseOrder', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, ctk_viewPurchaseOrder) {

	$scope.model = {};

	var po = [];
	var pod = [];

	var selectedPO = {};
	$scope.labelstatus = {};
	$scope.editingData = {};
	$scope.downloadFile = {};
	$scope.status = {};
	$scope.itemSelected = [];
	$scope.model.brandedShop = $localStorage.clientContext.shop.shopCode;

	$scope.getPO = function() {

		po = [];
		pod = [];

		setBillValue([]);

		$scope.detailPurchase = new NgTableParams({}, {
			dataset : pod
		});

		var brandedShop = '';
		var bank = '';
		var status = '999';
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
			target : "#viewPurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_viewPurchaseOrder.getPO(brandedShop, bank, status, poCode, fromDate, todate, function(result) {
			po = result;
			$scope.tableParams = new NgTableParams({}, {
				dataset : po
			});

			App.unblockUI("#viewPurchaseOrderContent");

			if (po.length > 0) {
				for (var i = 0, length = po.length; i < length; i++) {
					if (po[i].depositSlip != null && po[i].depositSlip !== '') {
						$scope.downloadFile[po[i].depositSlip] = true;
					} else {
						$scope.downloadFile[po[i].depositSlip] = false;
					}

					if (po[i].status == '2' || po[i].status == '3') {
						$scope.editingData[po[i].poCode] = true;

						if (po[i].status == '3') {
							$scope.labelstatus[po[i].poCode] = "danger"; // rejected
							$scope.status[po[i].poCode] = "Đã từ chối";
						}
						if (po[i].status == '2') {
							$scope.labelstatus[po[i].poCode] = "default";// In Progress
							$scope.status[po[i].poCode] = "Đã lưu";
						}
					}
					if (po[i].status == '1') {
						$scope.editingData[po[i].poCode] = false;
						$scope.labelstatus[po[i].poCode] = "success"; // Authorized
						$scope.status[po[i].poCode] = "Đã xác nhận";
					}
					if (po[i].status == '0') {
						$scope.labelstatus[po[i].poCode] = "warning";// submit
						$scope.status[po[i].poCode] = "Chờ xác nhận";
					}
				}
			}
		});
	}

	// $scope.model.status = {'Id' : '0', 'Title' : 'Chờ xác nhận'};
	$scope.listStatus = [ {
		'Id' : '999',
		'Title' : 'Tất cả'
	}, {
		'Id' : '0',
		'Title' : 'Chờ xác nhận'
	}, {
		'Id' : '1',
		'Title' : 'Đã xác nhận'
	} /*
		 * , { 'Id' : '2', 'Title' : 'Đã lưu' }
		 */, {
		'Id' : '3',
		'Title' : 'Đã Từ chối'
	} ];

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

	$scope.showDetail = function(item, index) {

		$scope.itemSelected = item;
		selectedPO = item;
		pod = item.productOrderDetail;

		setBillValue(pod);

		$scope.detailPurchase = new NgTableParams({}, {
			dataset : pod
		});
	}

	$scope.edit = function(item, index) {
		$window.location.href = '/editPurchaseOrder#?orderId=' + item.orderId + '&poCode=' + item.poCode;
	}

	$scope.download = function(depositSlip) {
		App.blockUI({
			target : "#viewDeliverOrderContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_viewPurchaseOrder.exportIMG(encodeURI(depositSlip), function(response, status, headers) {
			App.unblockUI("#viewDeliverOrderContent");

			var basename = depositSlip.replace(/\\/g, '/').replace(/.*\//, '');
			download(new Blob([ response ]), basename, headers["content-type"]);
		});
	}

	function showAlert(idModal, message) {
		// $scope.model.errorsms = message;
		// $('#'+idModal).modal('show');
		bootbox.alert(message);
	}

});