app_vnm.factory('ctk_saProvinceManager', function($http, $translate) {
	return {

		loadProvince : function(region, callback) {
			var url = eim_url + '/bs/ProductOrder/loadProvince?region=' + region;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#saProvinceManagerContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},

		addSaprovince : function(data, callback) {
			var url = eim_url + '/bs/ProductOrder/addSAProvince';
			$http.post(url, data).success(callback).error(function(callback) {
				App.unblockUI("#saProvinceManagerContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		getSAProvince : function(staffCode, proId, callback) {
			var url = eim_url + '/bs/ProductOrder/getSAProvince?staffCode=' + staffCode + '&proId=' + proId;

			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#saProvinceManagerContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		delSAProvince : function(staffCode, provinceId, status, callback) {
			var url = eim_url + '/bs/ProductOrder/delSAProvince?staffCode=' + staffCode + '&provinceId=' + provinceId + '&status=' + status;

			$http.put(url).success(callback).error(function(callback) {
				App.unblockUI("#saProvinceManagerContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},

		delAllSAProvince : function(staffCode, proId, callback) {
			var url = eim_url + '/bs/ProductOrder/delAllSAProvince?staffCode=' + staffCode + '&proId=' + proId;

			$http.put(url).success(callback).error(function(callback) {
				App.unblockUI("#saProvinceManagerContent");
				if ("403" == callback.status) {
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		}
	}
});

app_vnm.controller('ctrl-saProvinceManager', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, $filter,
		$localStorage, NgTableParams, ctk_saProvinceManager) {

	$scope.listProvince = [];
	$scope.checkedItems = [];

	var provinceRegion1 = [];
	var provinceRegion2 = [];
	var provinceRegion3 = [];
	var provinceRegion4 = [];

	App.blockUI({
		target : "#saProvinceManagerContent",
		boxed : true,
		message : 'loading...'
	});

	ctk_saProvinceManager.loadProvince('1', function(result) {
		provinceRegion1 = result;

		ctk_saProvinceManager.loadProvince('2', function(result) {

			provinceRegion2 = result;

			ctk_saProvinceManager.loadProvince('3', function(result) {

				provinceRegion3 = result;

				ctk_saProvinceManager.loadProvince('4', function(result) {

					provinceRegion4 = result;

					var provinceSouth = provinceRegion3.concat(provinceRegion4);

					var products = [ {
						text : $translate.instant('vnm.messages.validate.ProductOrder.All.Region-0001'),
						expanded : false,
						items : provinceRegion1
					}, {
						text : $translate.instant('vnm.messages.validate.ProductOrder.All.Region-0002'),
						expanded : false,
						items : provinceRegion2
					}, {
						text : $translate.instant('vnm.messages.validate.ProductOrder.All.Region-0003'),
						expanded : false,
						items : provinceSouth
					} ];

					$scope.treeViewOptions = {
						items : products,
						width : 320,
						showCheckBoxesMode : "normal",
						onItemSelectionChanged : function(e) {
							var item = e.node;

							if (isProduct(item)) {
								processProduct($.extend({
									category : item.parent.text
								}, item));
							} else {
								$.each(item.items, function(index, product) {
									processProduct($.extend({
										category : item.text
									// thang goc
									}, product));
								});
							}

							setProvinceDetails();
						}
					};

					function isProduct(data) {
						return !data.items.length;
					}

					function processProduct(product) {
						var itemIndex = -1;

						$.each($scope.checkedItems, function(index, item) {
							if (item.key === product.key) {
								itemIndex = index;
								return false;
							}
						});

						if (product.selected && itemIndex === -1) {
							$scope.checkedItems.push(product);
						} else if (!product.selected) {
							$scope.checkedItems.splice(itemIndex, 1);
						}
					}

					$scope.listOptions = {
						width : 400,
						bindingOptions : {
							items : "checkedItems"
						}
					};
				});
			});

			App.unblockUI("#saProvinceManagerContent");

		});

	});

	$scope.model = {
		startDate : getNow_ddMMyy(),
		provinceId : '0',
		provinceSelected : []
	};

	function setProvinceDetails() {
		$scope.listProvince = [];
		if ($scope.checkedItems.length > 0) {
			for (var i = 0, length = $scope.checkedItems.length; i < length; i++) {
				$scope.listProvince.push({
					province : $scope.checkedItems[i].itemData.province,
					proId : $scope.checkedItems[i].itemData.proId,
					region : '0'
				});
			}
		}

		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.listProvince
		});
	}

	$scope.del = function(index) {
		$scope.listProvince.splice(index, 1);
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.listProvince
		});
	}

	$scope.uncheck = function() {
		$scope.checkedItems = [];
		$scope.treeViewOptions = {
			items : [],
			width : 320,
			showCheckBoxesMode : "normal",
			onItemSelectionChanged : function(e) {
				var item = e.node;

				if (isProduct(item)) {
					processProduct($.extend({
						category : item.parent.text
					}, item));
				} else {
					$.each(item.items, function(index, product) {
						processProduct($.extend({
							category : item.text
						// thang goc
						}, product));
					});
				}

				setProvinceDetails();
			}
		};
	}

	function showConfirmAlert(message, func, param1, param2, param3) {
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
					if (func.indexOf("DELONE") > -1)
						$scope.confirmDelSAProvince(param1, param2, param3);

					if (func.indexOf("DELALL") > -1)
						$scope.confirmDellAll();
				}
			}
		});
	}

	//
	$scope.confirmDelSAProvince = function(staffCode, proId, status) {
		App.blockUI({
			target : "#saProvinceManagerContent",
			boxed : true,
			message : 'loading...'
		});

		ctk_saProvinceManager.delSAProvince(staffCode, proId, status, function(result) {
			App.unblockUI("#saProvinceManagerContent");

			if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
				showAlert("", 'DEL-0000');
			} else {
				showAlert("", result.response_code);
			}
		});
	}

	// /
	$scope.delSAProvince = function(item) {
		showConfirmAlert("BRS-CF01", "DELONE", item.staffCode, item.proId, item.status);
	}

	function showAlert(idModal, message) {
		if (message === 'ADD-0000') {
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.0000');
			bootbox.alert({
				message : mess,
				callback : function() {
					// location.reload();
					$scope.model.staffCodeSearch = $scope.model.staffCode;
					$scope.getSAProvince();
				}
			});
		} else if (message === 'DEL-0000') {
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.0000');
			bootbox.alert({
				message : mess,
				callback : function() {
					$scope.getSAProvince();
				}
			});
		} else
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));

	}

	$scope.getSAProvince = function() {
		if (($scope.model.staffCodeSearch === undefined || $scope.model.staffCodeSearch === '')
				&& ($scope.model.provinceIdSearch === undefined || $scope.model.provinceIdSearch === '')) {
			// alert('staffCodeSearch = ' + $scope.model.staffCodeSearch);
			showAlert("", 'SAP-0003');
		} else {
			App.blockUI({
				target : "#saProvinceManagerContent",
				boxed : true,
				message : 'loading...'
			});

			ctk_saProvinceManager.getSAProvince($scope.model.staffCodeSearch, $scope.model.provinceIdSearch, function(result) {
				$scope.tableSAProvince = new NgTableParams({}, {
					dataset : result
				});

				App.unblockUI("#saProvinceManagerContent");
			});
		}
	}

	$scope.dellAll = function() {
		if (($scope.model.staffCodeSearch === undefined || $scope.model.staffCodeSearch === '')
				&& ($scope.model.provinceIdSearch === undefined || $scope.model.provinceIdSearch === '')) {
			showAlert("", 'SAP-0003');
		} else {
			showConfirmAlert("BRS-CF02", "DELALL", "", "", "");
		}
	}

	$scope.confirmDellAll = function() {
		if (($scope.model.staffCodeSearch === undefined || $scope.model.staffCodeSearch === '')
				&& ($scope.model.provinceIdSearch === undefined || $scope.model.provinceIdSearch === '')) {
			showAlert("", 'SAP-0003');
		} else {
			App.blockUI({
				target : "#saProvinceManagerContent",
				boxed : true,
				message : 'loading...'
			});

			ctk_saProvinceManager.delAllSAProvince($scope.model.staffCodeSearch, $scope.model.provinceIdSearch, function(result) {
				App.unblockUI("#saProvinceManagerContent");

				if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
					showAlert("", 'DEL-0000');
				} else {
					showAlert("", result.response_code);
				}
			});
		}
	}

	$scope.add = function() {
		if ($scope.model.staffCode === undefined || $scope.model.staffCode === '') {
			// alert('staffCode = ' + $scope.model.staffCode);
			showAlert("", 'SAP-0001');
		} else if ($scope.listProvince.length < 1) {
			// alert('$scope.listProvince.length < 1');
			showAlert("", 'SAP-0002');
		} else {
			var endate;
			if ($scope.model.endDate === undefined) {
				endate = '';
			} else {
				try {
					endate = $filter('date')(new Date(parseInt($scope.model.endDate.substr(6))), 'dd/MM/yyyy');
				} catch (err) {
					endate = '';
				}
			}

			App.blockUI({
				target : "#saProvinceManagerContent",
				boxed : true,
				message : 'loading...'
			});

			var dataInput = {
				"startDate" : $scope.model.startDate,
				"endDate" : endate,
				"staffCode" : $scope.model.staffCode,
				"lstProvince" : $scope.listProvince
			}

			ctk_saProvinceManager.addSaprovince(dataInput, function(result) {

				App.unblockUI("#saProvinceManagerContent");

				if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
					showAlert("", 'ADD-0000');
				} else {
					showAlert("", result.response_code);
				}
			});
		}
	}

});

app_vnm.controller('edit', function($scope, $rootScope, $compile, $uibModal, $confirm, $uibModalInstance, searchPrepaid_service, para) {
	// $scope.model = {};
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	}
	$scope.initData = function() {
		angular.copy(para, $scope.model);
	}
	$scope.initData();
	$scope.submit = function() {

		$uibModalInstance.close($scope.model);
	}

});

app_vnm.directive('multiSelect', function($q) {
	return {
		restrict : 'E',
		require : 'ngModel',
		scope : {
			selectedLabel : "@",
			availableLabel : "@",
			displayAttr : "@",
			available : "=",
			model : "=ngModel"
		},
		template : '<div class="multiSelect">' + '<div class="select">' + '<label class="control-label" for="multiSelectSelected">{{ selectedLabel }} '
				+ '({{ model.length }})</label>' + '<select id="currentRoles" ng-model="selected.current" multiple '
				+ 'class="pull-left" ng-options="e as e[displayAttr] for e in model">' + '</select>' + '</div>' + '<div class="select buttons">'
				+ '<button class="btn mover left" ng-click="add()" title="Add selected" ' + 'ng-disabled="selected.available.length == 0">'
				+ '<i class="icon-arrow-left"></i>' + '</button>' + '<button class="btn mover right" ng-click="remove()" title="Remove selected" '
				+ 'ng-disabled="selected.current.length == 0">' + '<i class="icon-arrow-right"></i>' + '</button>' + '</div>' + '<div class="select">'
				+ '<label class="control-label" for="multiSelectAvailable">{{ availableLabel }} ' + '({{ available.length }})</label>'
				+ '<select id="multiSelectAvailable" ng-model="selected.available" multiple ' + 'ng-options="e as e[displayAttr] for e in available"></select>'
				+ '</div>' + '</div>',
		link : function(scope, elm, attrs) {
			scope.selected = {
				available : [],
				current : []
			};

			/* Handles cases where scope data hasn't been initialized yet */
			var dataLoading = function(scopeAttr) {
				var loading = $q.defer();
				if (scope[scopeAttr]) {
					loading.resolve(scope[scopeAttr]);
				} else {
					scope.$watch(scopeAttr, function(newValue, oldValue) {
						if (newValue !== undefined)
							loading.resolve(newValue);
					});
				}
				return loading.promise;
			};

			/* Filters out items in original that are also in toFilter. Compares by reference. */
			var filterOut = function(original, toFilter) {
				var filtered = [];
				angular.forEach(original, function(entity) {
					var match = false;
					for (var i = 0; i < toFilter.length; i++) {
						if (toFilter[i][attrs.displayAttr] == entity[attrs.displayAttr]) {
							match = true;
							break;
						}
					}
					if (!match) {
						filtered.push(entity);
					}
				});
				return filtered;
			};

			scope.refreshAvailable = function() {
				scope.available = filterOut(scope.available, scope.model);
				scope.selected.available = [];
				scope.selected.current = [];
			};

			scope.add = function() {
				scope.model = scope.model.concat(scope.selected.available);
				scope.refreshAvailable();
			};
			scope.remove = function() {
				scope.available = scope.available.concat(scope.selected.current);
				scope.model = filterOut(scope.model, scope.selected.current);
				scope.refreshAvailable();
			};

			$q.all([ dataLoading("model"), dataLoading("available") ]).then(function(results) {
				scope.refreshAvailable();
			});
		}
	};
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