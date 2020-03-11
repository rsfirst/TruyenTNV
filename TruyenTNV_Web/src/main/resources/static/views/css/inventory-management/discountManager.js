var ctxfolder = '/views/prepaid';

app_vnm.factory('ctk_discountManager', function($http, $translate) {
	return {

		getGoods : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/getAllGoods?goodType=" + data;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#discountManagerContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			})
		},

		addGoodDiscount : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/addGoodDiscount";
			$http.post(url, data).success(callback).error(function(callback) {
				App.unblockUI("#discountManagerContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			})
		},

		getGoodDiscount : function(goodCode, poType, goodType, callback) {
			var url = eim_url + "/bs/ProductOrder/getGoodDiscount?goodCode=" + goodCode + "&poType=" + poType + "&goodType=" + goodType;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#discountManagerContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			})
		},

		delGoodDiscount : function(goodDiscountId, callback) {
			var url = eim_url + "/bs/ProductOrder/delGoodDiscount?discountId=" + goodDiscountId;
			$http.put(url).success(callback).error(function(callback) {
				App.unblockUI("#discountManagerContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			})
		},

		init : function(shopCode, shopId, callback) {
			var url = eim_url + "/bs/ProductOrder/init?shopCode=" + shopCode + "&shopId=" + shopId;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#createPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

		initGoodDiscount : function(shopCode, shopId, callback) {
			var url = eim_url + "/bs/ProductOrder/init?shopCode=" + shopCode + "&shopId=" + shopId;
			$http.get(url).success(callback).error(function(callback) {
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

		getDiscountInfo : function(discountId, goodCode, callback) {
			var url = eim_url + "/bs/ProductOrder/getDiscountInfo?goodCode=" + goodCode + "&discountId=" + discountId;
			$http.get(url).success(callback).error(function(callback) {
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

		saveGoodDiscount : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/saveGoodDiscount";
			$http.put(url, data).success(callback).error(function(callback) {
				App.unblockUI("#discountManagerContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			})
		}
	}
});

app_vnm.directive('multiselectDropdown', [ function() {
	return function(scope, element, attributes) {

		element = $(element[0]); // Get the element as a jQuery element

		// Below setup the dropdown:

		element.multiselect({
			buttonClass : 'btn btn-small',
			buttonWidth : '200px',
			buttonContainer : '<div class="btn-group" />',
			maxHeight : 200,
			enableFiltering : true,
			enableCaseInsensitiveFiltering : true,
			buttonText : function(options) {
				if (options.length == 0) {
					return element.data()['placeholder'] + ' <b class="caret"></b>';
				} else if (options.length > 1) {
					return _.first(options).text + ' + ' + (options.length - 1) + ' more selected <b class="caret"></b>';
				} else {
					return _.first(options).text + ' <b class="caret"></b>';
				}
			},
			// Replicate the native functionality on the elements so
			// that angular can handle the changes for us.
			onChange : function(optionElement, checked) {
				optionElement.removeAttr('selected');
				if (checked) {
					optionElement.attr('selected', 'selected');
				}
				element.change();
			}

		});
		// Watch for any changes to the length of our select element
		scope.$watch(function() {
			return element[0].length;
		}, function() {
			element.multiselect('rebuild');
		});

		// Watch for any changes from outside the directive and refresh
		scope.$watch(attributes.ngModel, function() {
			element.multiselect('refresh');
		});

		// Below maybe some additional setup
	}
} ]);

app_vnm.controller('ctrl-discountManager', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$localStorage, NgTableParams, ctk_discountManager) {

	var pod = [];
	$scope.editEnable = {};

	App.blockUI({
		target : "#discountManagerContent",
		boxed : true,
		message : 'loading...'
	});

	ctk_discountManager.init($localStorage.clientContext.shop.shopCode, $localStorage.clientContext.shop.shopId, function(result) {
		$scope.listOrderType = result.orderType;

		App.unblockUI("#discountManagerContent");
	});

	$scope.goodType = '';

	$scope.productSelection = '';
	$scope.Products = [ "Apple", "Banana", "Carrort", "Dart" ];

	$scope.model = {
		startDate : getNow_ddMMyy()
	};

	$scope.$watch('date', function(newValue) {
		$scope.model.fromDate = $filter('date')(newValue, 'yyyy-MM-dd');
	});

	$scope.loadGoods = function(e) {
		App.blockUI({
			target : "#discountManagerContent",
			boxed : true,
			message : 'loading...'
		});

		$scope.listMatHang = [];
		$scope.model.matHang = '';
		ctk_discountManager.getGoods(e, function(result) {
			$scope.listMatHang = result;

			App.unblockUI("#discountManagerContent");
		});
	}

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

	$scope.loadGoodsSearch = function(e) {

		$scope.goodType = e;
		$scope.model.goodCodeSearch = '';

		App.blockUI({
			target : "#discountManagerContent",
			boxed : true,
			message : 'loading...'
		});

		$scope.listMatHangSearch = [];
		$scope.model.matHangSearch = '';

		ctk_discountManager.getGoods(e, function(result) {
			$scope.listMatHangSearch = result;
			App.unblockUI("#discountManagerContent");
		});
	}

	function showAlert(idModal, message) {
		if (message === 'DEL-0000') {
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.0000');
			bootbox.alert({
				message : mess,
				callback : function() {
					$scope.searchDiscount();
				}
			});
		} else if (message === 'DSC-0000') {
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.' + message);
			mess = mess.replace('~goodCode~', $scope.model.goodCode);
			mess = mess.replace('~discountPercent~', $scope.model.discount);
			bootbox.alert({
				message : mess,
				callback : function() {
					// $scope.model.goodCodeSearch = $scope.model.goodCode;
					// $scope.searchDiscount();
					// location.reload();
				}
			});
		} else if (message === 'EDIT-0000') {
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.0000'));
		} else
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));
	}

	$scope.addDiscount = function() {
		// alert('addDiscount');
		// valid null
		// loai PO, goodCode, from quantity //chiet khau

		if ($scope.model.poType === undefined || $scope.model.poType === '') {
			showAlert("", 'DSC-0001'); // nhap PO type
		} else if ($scope.model.goodCode === undefined || $scope.model.goodCode === '') {
			showAlert("", 'DSC-0002'); // nhap goodCode
		} else if ($scope.model.discount === undefined || $scope.model.discount === '') {
			showAlert("", 'DSC-0003'); // nhap discount
		} else if (isNaN($scope.model.discount) || !angular.isNumber(+$scope.model.discount) || $scope.model.discount < 0) {
			showAlert("", 'DSC-0004'); // nhap discount
		} else {
			var endate = null;
			if ($scope.model.endDate !== undefined) {
				try {
					endate = $filter('date')(new Date(parseInt($scope.model.endDate.substr(6))), 'yyyy-MM-dd');
				} catch (err) {
				}
			}

			var goodDiscount = [ {
				"discountId" : 0,
				"goodCode" : $scope.model.goodCode,
				"order_type" : $scope.model.poType,
				"fromQuantity" : $scope.model.fromQuantity,
				"toQuantity" : $scope.model.toQuantity,
				"discountPercent" : $scope.model.discount,
				"startDate" : getNow_yyyyMMdd(),
				"endDate" : endate,
				"description" : '',
				"createDate" : null,
				"createBy" : '',
				"status" : 1,
				"modify_by" : '',
				"modify_date" : null,
				"disable_by" : '',
				"disable_date" : null
			} ]

			App.blockUI({
				target : "#discountManagerContent",
				boxed : true,
				message : 'loading...'
			});

			ctk_discountManager.addGoodDiscount(goodDiscount, function(result) {
				App.unblockUI("#discountManagerContent");
				if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
					showAlert("", 'DSC-0000');
				} else {
					showAlert("", result.response_code);
				}
			});
		}
	}

	var discountId;
	var goodCode;
	var goodDiscountInfo = {};

	$scope.edit = function(item, index) {
		// $window.location.href = '/editGoodDiscount#?discountId=' + item.discountId + '&goodCode=' + item.goodCode;

		discountId = item.discountId;
		goodCode = item.goodCode;
		goodDiscountInfo = {};

		$('#editGoodDiscountContent').modal('show');
		App.blockUI({
			target : "#editGoodDiscountContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_discountManager.initGoodDiscount($localStorage.clientContext.shop.shopCode, $localStorage.clientContext.shop.shopId, function(result) {

			$scope.listOrderType = result.orderType;
		});

		ctk_discountManager.getDiscountInfo(discountId, goodCode, function(result) {
			$scope.model.poType = result.order_type;
			if (result.startDate !== null)
				$scope.model.startDate = result.startDate.split("-").reverse().join("/");
			if (result.endDate !== null)
				$scope.model.endDate = result.endDate.split("-").reverse().join("/");
			$scope.model.goodCode = result.goodCode;
			$scope.model.fromQuantity = result.fromQuantity;
			$scope.model.toQuantity = result.toQuantity;
			$scope.model.discount = result.discountPercent;
		});

		App.unblockUI("#editGoodDiscountContent");
	}

	$scope.searchDiscount = function() {
		// alert('searchDiscount');

		if ($scope.model.goodCodeSearch === undefined)
			$scope.model.goodCodeSearch = '';

		if ($scope.model.poTypeSearch === undefined)
			$scope.model.poTypeSearch = '';

		// if($scope.model.poTypeSearch === '' && $scope.model.goodCodeSearch === '')
		// {
		// showAlert("",'DSC-0005');
		// }
		// else
		// {
		App.blockUI({
			target : "#discountManagerContent",
			boxed : true,
			message : 'loading...'
		});
		ctk_discountManager.getGoodDiscount($scope.model.goodCodeSearch, $scope.model.poTypeSearch, $scope.goodType, function(result) {
			App.unblockUI("#discountManagerContent");
			// $scope.model.goodCodeSearch = '';
			// $scope.model.poTypeSearch = '';
			// $scope.model.matHangTypeSearch= '';
			$scope.tableDiscount = new NgTableParams({}, {
				dataset : result
			});

			if (result.length > 0) {
				for (var i = 0, length = result.length; i < length; i++) {
					if (result[i].status === 3) {
						$scope.editEnable[result[i].discountId] = false;
					} else {
						$scope.editEnable[result[i].discountId] = true;
					}
				}
			}
			/*
			 * if(result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) { showAlert("",'0000'); } else {
			 * showAlert("",result.response_code); }
			 */
		});
		// }
	}

	// function showConfirmAlert(message, param)
	// {
	// var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.'+message);
	// bootbox.alert({ message: mess, callback: function()
	// {
	// $scope.confirmDel(param);
	// }});
	// }

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
		// BRS-CF01
		showConfirmAlert("BRS-CF03", item.discountId);
	}

	$scope.confirmDel = function(discountId) {
		// alert('del item');

		App.blockUI({
			target : "#discountManagerContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_discountManager.delGoodDiscount(discountId, function(result) {

			App.unblockUI("#discountManagerContent");

			if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
				showAlert("", 'DEL-0000');
			} else {
				showAlert("", result.response_code);
			}
		});

	}

	// add js from editGoodDiscount
	$scope.saveDiscount = function() {
		// alert('addDiscount');
		// valid null
		// loai PO, goodCode, from quantity //chiet khau

		if ($scope.model.poType === undefined || $scope.model.poType === '') {
			showAlert("", 'DSC-0001'); // nhap PO type
		} else if ($scope.model.goodCode === undefined || $scope.model.goodCode === '') {
			showAlert("", 'DSC-0002'); // nhap goodCode
		} else if ($scope.model.discount === undefined || $scope.model.discount === '') {
			showAlert("", 'DSC-0003'); // nhap discount
		} else if (isNaN($scope.model.discount) || !angular.isNumber(+$scope.model.discount) || $scope.model.discount < 0) {
			showAlert("", 'DSC-0004'); // nhap discount
		} else {
			var endate = null;
			var startdate = null;
			if ($scope.model.endDate !== undefined) {
				try {
					if ($scope.model.endDate.indexOf('Date') > -1) {
						endate = $filter('date')(new Date(parseInt($scope.model.endDate.substr(6))), 'yyyy-MM-dd');
					} else {
						endate = $scope.model.endDate.split("/").reverse().join("-");
					}
				} catch (err) {
				}
			}

			if ($scope.model.startDate !== undefined) {
				try {
					startdate = $filter('date')(new Date(parseInt($scope.model.startDate.substr(6))), 'yyyy-MM-dd');
				} catch (err) {
					startdate = getNow_yyyyMMdd();
				}
			}

			if (endate === null && $scope.model.endDate !== null && $scope.model.endDate !== undefined) {
				alert($scope.model.endDate);
				showAlert("", 'DSC-0006');
			} else {
				var goodDiscount = {
					"discountId" : discountId,
					"goodCode" : $scope.model.goodCode,
					"order_type" : $scope.model.poType,
					"fromQuantity" : $scope.model.fromQuantity,
					"toQuantity" : $scope.model.toQuantity,
					"discountPercent" : $scope.model.discount,
					"startDate" : null,
					"endDate" : endate,
					"description" : '',
					"createDate" : null,
					"createBy" : '',
					"status" : 1,
					"modify_by" : '',
					"modify_date" : null,
					"disable_by" : '',
					"disable_date" : null
				}

				App.blockUI({
					target : "#editGoodDiscountContent",
					boxed : true,
					message : 'loading...'
				});

				ctk_discountManager.saveGoodDiscount(goodDiscount, function(result) {
					App.unblockUI("#editGoodDiscountContent");
					if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
						showAlert("", 'EDIT-0000');
					} else {
						showAlert("", result.response_code);
					}
				});
			}
		}
	}

	$scope.closeEditDialog = function() {
		$scope.searchDiscount();
	}

});

// get time ddMMyy
function getNow_ddMMyy() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; // January is 0!
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	today = dd + '/' + mm + '/' + yyyy;

	return today;
}

// get time ddMMyy
function getNow_yyyyMMdd() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; // January is 0!
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	today = yyyy + '-' + mm + '-' + dd;

	return today;
}
