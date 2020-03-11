var ctxfolder = '/views/prepaid';

app_vnm.factory('ctk_goodPriceManager', function($http, $translate) {
	return {

		getGoods : function(callback) {
			var url = eim_url + "/bs/ProductOrder/getERPGoods";
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#goodPriceManagerContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			})
		},

		getBSGoods : function(callback) {
			var url = eim_url + "/bs/ProductOrder/getBSGoods";
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#goodPriceManagerContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			})
		},

		addGoodPrice : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/addGoodPrice";
			$http.post(url, data).success(callback).error(function(callback) {
				App.unblockUI("#goodPriceManagerContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			})
		},

		getGoodPrice : function(goodCode, callback) {
			var url = eim_url + "/bs/ProductOrder/getGoodPrice?goodCode=" + goodCode;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#goodPriceManagerContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			})
		},

		saveGoodPrice : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/saveGoodPrice";
			$http.put(url, data).success(callback).error(function(callback) {
				App.unblockUI("#goodPriceManagerContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			})
		},
		
		delGoodPrice : function(goodCode, callback) {
			var url = eim_url + "/bs/ProductOrder/delGoodPrice?goodCode=" + goodCode;
			$http.put(url).success(callback).error(function(callback) {
				App.unblockUI("#goodPriceManagerContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			})
		}
	}
});

app_vnm.controller('ctrl-goodPriceManager', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$localStorage, NgTableParams, ctk_goodPriceManager) {

	var pod = [];
	$scope.model = {
		goodCode : "",
		goodCodeSearch : ""
	};
	$scope.editingData = {};

	App.blockUI({
		target : "#goodPriceManagerContent",
		boxed : true,
		message : 'loading...'
	});

	ctk_goodPriceManager.getGoods(function(result) {
		$scope.listMatHang = result;
		App.unblockUI("#goodPriceManagerContent");
	});

	App.blockUI({
		target : "#goodPriceManagerContent",
		boxed : true,
		message : 'loading...'
	});

	ctk_goodPriceManager.getBSGoods(function(result) {
		$scope.listMatHangSearch = result;
		App.unblockUI("#goodPriceManagerContent");
	});

	$scope.selectGood = function(e) {
		if (e != undefined) {
			$scope.model.goodCode = e.goodCode;
		}
	}

	$scope.selectGoodSearch = function(e) {
		if (e != undefined) {
			$scope.model.goodCodeSearch = e.goodCode;
		}
	}

	function showAlert(idModal, message) {
		if (message === 'GPM-0000') {
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.' + message);

			mess = mess.replace('~goodCode~', $filter('number')($scope.model.goodCode));
			mess = mess.replace('~unitPrice~', $filter('number')($scope.model.unitPrice));

			bootbox.alert({
				message : mess,
				callback : function() {
					ctk_goodPriceManager.getGoods(function(result) {
						$scope.listMatHang = result;
					});

					ctk_goodPriceManager.getBSGoods(function(result) {
						$scope.listMatHangSearch = result;
					});

					$scope.model.goodCode = "";
					$scope.model.matHang = "";
					$scope.model.unitPrice = "";
				}
			});
		} else if (message === 'DEL-0000') {
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.0000');
			bootbox.alert({
				message : mess,
				callback : function() {
					ctk_goodPriceManager.getGoods(function(result) {
						$scope.listMatHang = result;
					});
					ctk_goodPriceManager.getBSGoods(function(result) {
						$scope.listMatHangSearch = result;
					});

					$scope.searchunitPrice();
				}
			});
		} else
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));
	}

	$scope.addunitPrice = function() {
		if ($scope.model.goodCode === undefined || $scope.model.goodCode === '') {
			showAlert("", 'GPM-0002'); // nhap goodCode
		} else if ($scope.model.unitPrice === undefined || $scope.model.unitPrice === '') {
			showAlert("", 'GPM-0003'); // nhap unitPrice
		} else if (isNaN($scope.model.unitPrice) || !angular.isNumber(+$scope.model.unitPrice) || $scope.model.unitPrice < 0) {
			showAlert("", 'GPM-0004'); // nhap unitPrice
		} else {
			var goodunitPrice = {
				"goodCode" : $scope.model.goodCode,
				"goodName" : $scope.model.matHang,
				"unit" : 'PC',
				"goodPrice" : $scope.model.unitPrice,
				"goodType" : '',
				"status" : '1',
				"createBy" : '',
				"createDate" : '2017-12-05',
				"modifyBy" : '',
				"modifyDate" : '2017-12-05'
			}

			App.blockUI({
				target : "#goodPriceManagerContent",
				boxed : true,
				message : 'loading...'
			});

			ctk_goodPriceManager.addGoodPrice(goodunitPrice, function(result) {
				App.unblockUI("#goodPriceManagerContent");
				if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
					showAlert("", 'GPM-0000');
				} else {
					showAlert("", result.response_code);
				}
			});
		}
	}

	$scope.searchunitPrice = function() {
		if ($scope.model.goodCodeSearch === undefined)
			$scope.model.goodCodeSearch = '';

		App.blockUI({
			target : "#goodPriceManagerContent",
			boxed : true,
			message : 'loading...'
		});
		ctk_goodPriceManager.getGoodPrice($scope.model.goodCodeSearch, function(result) {
			App.unblockUI("#goodPriceManagerContent");

			$scope.tableunitPrice = new NgTableParams({}, {
				dataset : result
			});

		});
	}

	function showConfirmAlert(message, param) {
		var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.' + message);
		bootbox.confirm({
			message : mess,
			buttons : {
				confirm : {
					label : 'Đồng ý',
					className : 'btn-success'
				},
				cancel : {
					label : 'Từ chối',
					className : 'btn-danger'
				}
			},
			callback : function(result) {
				if (result) {
					$scope.confirmDel(param);
				}
			}
		});
	}

	$scope.del = function(item, index) {
		showConfirmAlert("BRS-CF01", item.goodCode);
	}

	$scope.confirmDel = function(goodCode) {
		App.blockUI({
			target : "#goodPriceManagerContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_goodPriceManager.delGoodPrice(goodCode, function(result) {

			App.unblockUI("#goodPriceManagerContent");

			if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
				showAlert("", 'DEL-0000');
			} else {
				showAlert("", result.response_code);
			}
		});
	}

	$scope.edit = function(item, index) {
		$scope.editingData[item.goodCode] = true;
	}

	$scope.save = function(item, index) {
		App.blockUI({
			target : "#goodPriceManagerContent",
			boxed : true,
			message : 'loading...'
		});

		var goodunitPrice = {
			"goodCode" : item.goodCode,
			"goodName" : item.goodName,
			"unit" : 'PC',
			"goodPrice" : item.goodPrice,
			"goodType" : '',
			"status" : '1',
			"createBy" : '',
			"createDate" : null,
			"modifyBy" : '',
			"modifyDate" : null
		}
		ctk_goodPriceManager.saveGoodPrice(goodunitPrice, function(result) {

			App.unblockUI("#goodPriceManagerContent");
			$scope.editingData[item.goodCode] = false;

			if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
				showAlert("", 'DEL-0000');
			} else {
				showAlert("", result.response_code);
			}
		});

	}

});
