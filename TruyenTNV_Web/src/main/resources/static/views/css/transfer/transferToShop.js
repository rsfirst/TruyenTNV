app_vnm.factory('ctk_transferToShop', function($http, $translate) {
	// Khoi tao interface
	return {
		getShopByShopCode : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/getShopByShopCode";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getFriendShopList : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/getFriendShopList";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getNotFriendShopList : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/getNotFriendShopList";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getNotFriendShopListReceived : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/getNotFriendShopListReceived";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getDefaultFriendShopList : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/getDefaultFriendShopList";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getDefaultFriendShopListRecieved : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/getDefaultFriendShopListRecieved";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		insertBatchFriendShop : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/insertBatchFriendShop";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		updateBatchFriendShop : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/updateBatchFriendShop";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});
app_vnm.controller('ctrl-transferToShop', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		NgTableParams, $localStorage, $element, ctk_transferToShop) {
	
	$scope.isAdd = true;
	$scope.isRemove = true;
	$scope.isAddTab2 = true;
	$scope.isRemoveTab2 = true;
	$scope.searchSuccess = true;
	$scope.searchSuccessTab2 = true;
	var dataFriend = [];
	var dataNotFriend = [];
	var dataFriendTab2 = [];
	var dataNotFriendTab2 = [];
	$scope.checkBoxSecondInfo = true;
	$scope.itemsByPage = 10;
	$scope.shopCode = "";
	$scope.shopName = "";
	$scope.friendCode = "";
	$scope.notFriendCode = "";
	$scope.shop_Id = "";
	$scope.shop_IdTab2 = "";
	$scope.table1Selected = [];
	$scope.table2Selected = [];
	$scope.table1SelectedTab2 = [];
	$scope.table2SelectedTab2 = [];

	$scope.loadDefauld = function() {
		$scope.tableParamsFriend = new NgTableParams({}, {
			dataset : dataFriend
		});
		$scope.tableParamsNotFriend = new NgTableParams({}, {
			dataset : dataNotFriend
		});
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$scope.clearAllSearhData = function() {
		if ($scope.model.shopName != 'undefined') {
			$scope.model.shopName = "";
		}
		$scope.model.shopName = "";
		$scope.model.notFriendCode = "";
		$scope.searchSuccess = true;
		dataFriend = [];
		dataNotFriend = [];
		$scope.tableParamsFriend = new NgTableParams({}, {
			dataset : dataFriend
		});
		$scope.tableParamsNotFriend = new NgTableParams({}, {
			dataset : dataNotFriend
		});
		$scope.model.checkboxAdd = {
			checked : false,
			items : {}
		};

		$scope.model.checkboxRemove = {
			checked : false,
			items : {}
		};
		$scope.table1Selected = [];
		$scope.table2Selected = [];
	}
	$scope.clearAllSearhDataTab2 = function() {
		$scope.model.shopNameTab2 = "";
		$scope.model.shopNameTab2 = "";
		$scope.model.notFriendCodeTab2 = "";
		$scope.searchSuccessTab2 = true;
		dataFriendTab2 = [];
		dataNotFriendTab2 = [];
		$scope.tableParamsFriendTab2 = new NgTableParams({}, {
			dataset : dataFriendTab2
		});
		$scope.tableParamsNotFriendTab2 = new NgTableParams({}, {
			dataset : dataNotFriendTab2
		});
		$scope.model.checkboxAddTab2 = {
			checked : false,
			items : {}
		};

		$scope.model.checkboxRemoveTab2 = {
			checked : false,
			items : {}
		};
		$scope.table1SelectedTab2 = [];
		$scope.table2SelectedTab2 = [];
	}

	$scope.clearNotFriendSearhData = function() {
		dataNotFriend = [];
		$scope.tableParamsNotFriend = new NgTableParams({}, {
			dataset : dataNotFriend
		});
		$scope.table1Selected = [];
	}
	$scope.clearNotFriendSearhDataTab2 = function() {
		dataNotFriendTab2 = [];
		$scope.tableParamsNotFriendTab2 = new NgTableParams({}, {
			dataset : dataNotFriendTab2
		});
		$scope.table1SelectedTab2 = [];
	}

	$scope.outFocusFunction = function(e) {
		overLoading($translate.instant('vnm.form_category.transferToShop.loading'));
		var parent = $(e.target).parent().parent();

		var shopCode = e.target.value;
		if (shopCode != '') {
			$scope.onSearchTab1();
		} else {
			bootbox.alert($translate.instant('vnm.form_category.transferToShop.shopcode.require'));
			closeOverLay();
		}
	}

	$scope.onSearchTab1 = function() {
		$scope.clearAllSearhData();
		var shopCodeData = {};
		shopCodeData.shopCode = StringUtilNVL($scope.model.shopCode);

		ctk_transferToShop.getShopByShopCode(shopCodeData, function(result) {
			if (result.sqlReslut == '0') {
				bootbox.alert($translate.instant('vnm.form_category.transferToShop.execute.error') + result.description);
			} else {
				var name = result.name;
				if (name == null || name == '') {
					bootbox.alert($translate.instant('vnm.form_category.transferToShop.shop.dont.exist') + shopCodeData.shopCode);
				} else {
					if (result.status != '1') {
						bootbox.alert($translate.instant('vnm.form_category.transferToShop.shop.deactivated'));
					} else {
						$scope.searchSuccess = false;
						document.getElementById("not_FriendCode").focus();
						$scope.model.shopName = result.name;
						$scope.shop_Id = result.shop_Id;

						var searchDefaultData = {};
						searchDefaultData.shop_Id = $scope.shop_Id;
						ctk_transferToShop.getDefaultFriendShopList(searchDefaultData, function(result) {
							if (result.status == '0' && result.status != 'undefined') {
								bootbox.alert($translate.instant('vnm.form_category.transferToShop.search.error') + result.messages);
							} else {
								dataFriend = result;
								$scope.tableParamsFriend = new NgTableParams({
									page : 1,
									count : 10
								}, {
									dataset : dataFriend
								});
							}
						});
					}
				}
			}
			closeOverLay();
		});
	}

	$scope.outFocusNotFriendFunction = function(e) {
		overLoading($translate.instant('vnm.form_category.transferToShop.loading'));
		$scope.clearNotFriendSearhData();
		var parent = $(e.target).parent().parent();

		var notFriendCode = e.target.value;
		if (notFriendCode != '') {
			var code = StringUtilNVL($scope.model.notFriendCode).toUpperCase();
			if ($scope.model.shopCode.toUpperCase() != notFriendCode.toUpperCase()) {
				var shopCodeData = {};
				shopCodeData.shopCode = StringUtilNVL($scope.model.notFriendCode);
				shopCodeData.shop_Id = $scope.shop_Id;
				shopCodeData.rootCode = $scope.model.shopCode;

				ctk_transferToShop.getNotFriendShopList(shopCodeData, function(result) {
					if (result.length == '0') {
						bootbox.alert($translate.instant('vnm.form_category.transferToShop.shop.active.match') + shopCodeData.shopCode);
						closeOverLay();
					} else {
						if (result.status == '0' && result.status != 'undefined') {
							bootbox.alert($translate.instant('vnm.form_category.transferToShop.search.error') + result.messages);
							closeOverLay();
						} else if (result.status == '1') {
							bootbox.alert($translate.instant('vnm.form_category.transferToShop.shop.active.added'));
							closeOverLay();
						} else {
							dataNotFriend = result;
							$scope.tableParamsNotFriend = new NgTableParams({
								page : 1,
								count : 10
							}, {
								dataset : dataNotFriend
							});
							$scope.model.checkboxAdd = {
								checked : false,
								items : {}
							};

							$scope.model.checkboxRemove = {
								checked : false,
								items : {}
							};
						}
					}
					closeOverLay();
				});
			} else {
				bootbox.alert($translate.instant('vnm.form_category.transferToShop.error.duplicate.shopcode'));
				closeOverLay();
			}

		} else {
			bootbox.alert($translate.instant('vnm.form_category.transferToShop.shopcode.require'));
			closeOverLay();
		}
	}

	$scope.transferToShop = function() {
		var inputData = [];
		for (var i = 0; i < $scope.table1Selected.length; i++) {
			var item = Object.assign({}, $scope.table1Selected[i]);
			item.isSelected = false;
			var found = getPositionOfObjectByValue(item, $scope.tableParamsNotFriend)
			if (found == -1) {
				var inputObject = {};
				inputObject.name = item.name;
				inputObject.shop_Id = $scope.shop_Id;
				if (StringUtilNVL(item.friend_shop_id) != '') {
					inputObject.friend_shop_id = item.friend_shop_id;
				} else {
					inputObject.friend_shop_id = item.shop_Id;
				}
				inputObject.shopCode = item.shopCode;
				inputData.push(inputObject);
			}
		}
		ctk_transferToShop.insertBatchFriendShop(inputData, function(result) {
			var successRecord = 0;
			for (var i = 0; i < result.length; i++) {
				var item = Object.assign({}, result[i]);
				var found = getPositionOfObjectByValue(item, dataNotFriend);
				if (found != -1) {
					if (item.status == '1') {
						successRecord++;
						item.status = null;
						dataFriend.push(item);
						dataNotFriend.splice(found, 1);

					}
				}
			}
			$scope.tableParamsFriend = new NgTableParams({
				page : 1,
				count : 10
			}, {
				dataset : dataFriend
			});
			$scope.tableParamsNotFriend = new NgTableParams({
				page : 1,
				count : 10
			}, {
				dataset : dataNotFriend
			});
			bootbox.alert($translate.instant('vnm.form_category.transferToShop.transfer.SUCCESS') + successRecord
					+ $translate.instant('vnm.form_category.transferToShop.slash') + result.length
					+ $translate.instant('vnm.form_category.transferToShop.Record'));
			$scope.table1Selected = [];
			$scope.isAdd = true;
			
		});
		$scope.model.checkboxAdd = {
				checked : false,
				items : {}
			};
			$scope.model.checkboxRemove = {
				checked : false,
				items : {}
			};
	}
	$scope.removeToShop = function() {
		var inputData = [];
		for (var i = 0; i < $scope.table2Selected.length; i++) {
			var item = Object.assign({}, $scope.table2Selected[i]);

			var inputObject = {};
			inputObject.shop_Id = $scope.shop_Id;
			inputObject.name = item.name;
			inputObject.friend_shop_id = item.friend_shop_id;
			inputObject.shopCode = item.shopCode;
			inputData.push(inputObject);
		}
		ctk_transferToShop.updateBatchFriendShop(inputData, function(result) {
			var successRecord = 0;
			for (var i = 0; i < result.length; i++) {
				var item = Object.assign({}, result[i]);
				var found = getPositionOfObjectByValue(item, dataFriend);
				if (found != -1) {
					if (item.status == '1') {
						successRecord++;
						item.status = null;
						dataNotFriend.push(item);
						dataFriend.splice(found, 1);
					}
				}
			}
			$scope.tableParamsFriend = new NgTableParams({
				page : 1,
				count : 10
			}, {
				dataset : dataFriend
			});
			$scope.tableParamsNotFriend = new NgTableParams({
				page : 1,
				count : 10
			}, {
				dataset : dataNotFriend
			});

			bootbox.alert($translate.instant('vnm.form_category.transferToShop.remove.SUCCESS') + successRecord
					+ $translate.instant('vnm.form_category.transferToShop.slash') + result.length
					+ $translate.instant('vnm.form_category.transferToShop.Record'));
			$scope.table2Selected = [];
			$scope.isRemove = true;
		});
		$scope.model.checkboxAdd = {
				checked : false,
				items : {}
			};
			$scope.model.checkboxRemove = {
				checked : false,
				items : {}
			};
	}
	$scope.checkAllAdd = function() {
		$scope.table1Selected = [];
		angular.forEach(dataNotFriend, function(item) {
			$scope.model.checkboxAdd.items[Number(item.shop_Id)] = $scope.model.checkboxAdd.checked;
			if ($scope.model.checkboxAdd.checked) {
				$scope.isAdd = false;
				$scope.table1Selected.push(item);
			} else {
				$scope.isAdd = true;
			}
		})
	}

	$scope.checkAllRemove = function() {
		$scope.table2Selected = [];
		angular.forEach(dataFriend, function(item) {
			$scope.model.checkboxRemove.items[Number(item.shop_Id)] = $scope.model.checkboxRemove.checked;
			if ($scope.model.checkboxRemove.checked) {
				$scope.isRemove = false;
				$scope.table2Selected.push(item)
			} else {
				$scope.isRemove = true;
			}
		})
	}

	$scope.selectNotIn = function(item) {
		var found = getPositionOfObjectByValue(item, $scope.table1Selected);
		if (found == -1) {
			$scope.table1Selected.push(item);
		} else {
			$scope.table1Selected.splice(found, 1);
		}
		if($scope.table1Selected.length > 0){
			$scope.isAdd = false;
		} else {
			$scope.isAdd = true;
		}

		/*$scope.model.checkboxAdd = {
				checked : false,
				items : {}
			};*/
		
		if ($scope.table1Selected.length == dataNotFriend.length) {
			$scope.model.checkboxAdd.checked = true;
		} else {
			$scope.model.checkboxAdd.checked = false;
		}
	}
	$scope.selectIn = function(item) {
		var found = getPositionOfObjectByValue(item, $scope.table2Selected);
		if (found == -1) {
			$scope.table2Selected.push(item);
		} else {
			$scope.table2Selected.splice(found, 1);
		}
		if($scope.table2Selected.length > 0){
			$scope.isRemove = false;
		} else {
			$scope.isRemove = true;
		}

		if ($scope.table2Selected.length == dataFriend.length) {
			$scope.model.checkboxRemove.checked = true;
		} else {
			$scope.model.checkboxRemove.checked = false;
		}
	}
	// Tab2
	$scope.checkAllAddTab2 = function() {
		$scope.table1SelectedTab2 = [];
		angular.forEach(dataNotFriendTab2, function(item) {
			$scope.model.checkboxAddTab2.items[Number(item.shop_Id)] = $scope.model.checkboxAddTab2.checked;
			if ($scope.model.checkboxAddTab2.checked) {
				$scope.isAddTab2 = false;
				$scope.table1SelectedTab2.push(item);
			} else {
				$scope.isAddTab2 = true;
			}
		})
	}

	$scope.checkAllRemoveTab2 = function() {
		$scope.table2SelectedTab2 = [];
		angular.forEach(dataFriendTab2, function(item) {
			$scope.model.checkboxRemoveTab2.items[Number(item.shop_Id)] = $scope.model.checkboxRemoveTab2.checked;
			if ($scope.model.checkboxRemoveTab2.checked) {
				$scope.isRemoveTab2 = false;
				$scope.table2SelectedTab2.push(item)
			} else {
				$scope.isRemoveTab2 = true;
			}
		})
	}

	$scope.selectNotInTab2 = function(item) {
		var found = getPositionOfObjectByValue(item, $scope.table1SelectedTab2);
		if (found == -1) {
			$scope.table1SelectedTab2.push(item);
		} else {
			$scope.table1SelectedTab2.splice(found, 1);
		}
		if($scope.table1SelectedTab2.length > 0){
			$scope.isAddTab2 = false;
		} else {
			$scope.isAddTab2 = true;
		}

		if ($scope.table1SelectedTab2.length == dataNotFriendTab2.length) {
			$scope.model.checkboxAddTab2.checked = true;
		} else {
			$scope.model.checkboxAddTab2.checked = false;
		}
	}
	$scope.selectInTab2 = function(item) {
		var found = getPositionOfObjectByValue(item, $scope.table2SelectedTab2);
		if (found == -1) {
			$scope.table2SelectedTab2.push(item);
		} else {
			$scope.table2SelectedTab2.splice(found, 1);
		}
		
		if($scope.table2SelectedTab2.length > 0){
			$scope.isRemoveTab2 = false;
		} else {
			$scope.isRemoveTab2 = true;
		}

		if ($scope.table2SelectedTab2.length == dataFriendTab2.length) {
			$scope.model.checkboxRemoveTab2.checked = true;
		} else {
			$scope.model.checkboxRemoveTab2.checked = false;
		}
	}
	$scope.outFocusFunctionTab2 = function(e) {
		overLoading($translate.instant('vnm.form_category.transferToShop.loading'));
		var parent = $(e.target).parent().parent();

		var shopCode = e.target.value;
		if (shopCode != '') {
			$scope.onSearchTab2();
		} else {
			bootbox.alert($translate.instant('vnm.form_category.transferToShop.shopcode.require'));
			closeOverLay();
		}
	}

	$scope.onSearchTab2 = function() {
		$scope.clearAllSearhDataTab2();
		var shopCodeData = {};
		shopCodeData.shopCode = StringUtilNVL($scope.model.shopCodeTab2);

		ctk_transferToShop.getShopByShopCode(shopCodeData, function(result) {
			if (result.sqlReslut == '0') {
				bootbox.alert($translate.instant('vnm.form_category.transferToShop.execute.error') + result.description);
			} else {
				var name = result.name;
				if (name == null || name == '') {
					bootbox.alert($translate.instant('vnm.form_category.transferToShop.shop.dont.exist') + shopCode);
				} else {
					if (result.status != '1') {
						bootbox.alert($translate.instant('vnm.form_category.transferToShop.shop.deactivated'));
					} else {
						$scope.searchSuccessTab2 = false;
						document.getElementById("not_FriendCodeTab2").focus();
						$scope.model.shopNameTab2 = result.name;
						$scope.shop_IdTab2 = result.shop_Id;

						var searchDefaultData = {};
						searchDefaultData.shop_Id = $scope.shop_IdTab2;
						ctk_transferToShop.getDefaultFriendShopListRecieved(searchDefaultData, function(result) {
							if (result.status == '0' && result.status != 'undefined') {
								bootbox.alert($translate.instant('vnm.form_category.transferToShop.search.error') + result.messages);
							} else {
								dataFriendTab2 = result;
								$scope.tableParamsFriendTab2 = new NgTableParams({
									page : 1,
									count : 10
								}, {
									dataset : dataFriendTab2
								});
							}
						});
					}
				}
			}
			closeOverLay();
		});
	}

	$scope.outFocusNotFriendFunctionTab2 = function(e) {
		overLoading($translate.instant('vnm.form_category.transferToShop.loading'));
		$scope.clearNotFriendSearhDataTab2();
		var parent = $(e.target).parent().parent();

		var notFriendCode = e.target.value;
		if (notFriendCode != '') {
			var code = StringUtilNVL($scope.model.notFriendCodeTab2).toUpperCase();
			if ($scope.model.shopCodeTab2.toUpperCase() != notFriendCode.toUpperCase()) {
				var shopCodeData = {};
				shopCodeData.shopCode = StringUtilNVL($scope.model.notFriendCodeTab2);
				shopCodeData.shop_Id = $scope.shop_IdTab2;
				shopCodeData.rootCode = $scope.model.shopCodeTab2;

				ctk_transferToShop.getNotFriendShopListReceived(shopCodeData, function(result) {
					if (result.length == '0') {
						bootbox.alert($translate.instant('vnm.form_category.transferToShop.shop.active.match') + shopCodeData.shopCode);
						closeOverLay();
					} else {
						if (result.status == '0' && result.status != 'undefined') {
							bootbox.alert($translate.instant('vnm.form_category.transferToShop.search.error') + result.messages);
							closeOverLay();
						} else if (result.status == '1') {
							bootbox.alert($translate.instant('vnm.form_category.transferToShop.shop.active.added'));
							closeOverLay();
						} else {
							dataNotFriendTab2 = result;
							$scope.tableParamsNotFriendTab2 = new NgTableParams({
								page : 1,
								count : 10
							}, {
								dataset : dataNotFriendTab2
							});
							$scope.model.checkboxAddTab2 = {
								checked : false,
								items : {}
							};
							$scope.model.checkboxRemoveTab2 = {
								checked : false,
								items : {}
							};
						}
					}
					closeOverLay();
				});
			} else {
				bootbox.alert($translate.instant('vnm.form_category.transferToShop.error.duplicate.shopcode'));
				closeOverLay();
			}

		} else {
			bootbox.alert($translate.instant('vnm.form_category.transferToShop.shopcode.require'));
			closeOverLay();
		}
	}

	$scope.transferToShopTab2 = function() {
		var inputData = [];
		for (var i = 0; i < $scope.table1SelectedTab2.length; i++) {
			var item = Object.assign({}, $scope.table1SelectedTab2[i]);
			item.isSelected = false;
			var found = getPositionOfObjectByValue(item, $scope.tableParamsNotFriendTab2)
			if (found == -1) {
				var inputObject = {};
				inputObject.name = item.name;
				inputObject.friend_shop_id = $scope.shop_IdTab2;
				if (StringUtilNVL(item.friend_shop_id) != '') {
                    inputObject.shop_Id = item.shop_Id;
				} else {
                    inputObject.shop_Id = item.friend_shop_id;
				}
				inputObject.shopCode = item.shopCode;
				inputData.push(inputObject);
			}
		}
		ctk_transferToShop.insertBatchFriendShop(inputData, function(result) {
			var successRecord = 0;
			for (var i = 0; i < result.length; i++) {
				var item = Object.assign({}, result[i]);
				var found = getPositionOfObjectByValue(item, dataNotFriendTab2);
				if (found != -1) {
					if (item.status == '1') {
						successRecord++;
						item.status = null;
						dataFriendTab2.push(item);
						dataNotFriendTab2.splice(found, 1);
					}
				}
			}
			$scope.tableParamsFriendTab2 = new NgTableParams({
				page : 1,
				count : 10
			}, {
				dataset : dataFriendTab2
			});
			$scope.tableParamsNotFriendTab2 = new NgTableParams({
				page : 1,
				count : 10
			}, {
				dataset : dataNotFriendTab2
			});
			bootbox.alert($translate.instant('vnm.form_category.transferToShop.transfer.SUCCESS') + successRecord
					+ $translate.instant('vnm.form_category.transferToShop.slash') + result.length
					+ $translate.instant('vnm.form_category.transferToShop.Record'));
			$scope.table1SelectedTab2 = [];
			$scope.isAddTab2 = true;
			$scope.model.checkboxAddTab2 = {
				checked : false,
				items : {}
			};
			$scope.model.checkboxRemoveTab2 = {
				checked : false,
				items : {}
			};
		});
	}
	$scope.removeToShopTab2 = function() {
		var inputData = [];
		for (var i = 0; i < $scope.table2SelectedTab2.length; i++) {
			var item = Object.assign({}, $scope.table2SelectedTab2[i]);

			var inputObject = {};
			inputObject.friend_shop_id = $scope.shop_IdTab2;
			inputObject.name = item.name;
			inputObject.shop_Id = item.shop_Id;
			inputObject.shopCode = item.shopCode;
			inputData.push(inputObject);
		}
		ctk_transferToShop.updateBatchFriendShop(inputData, function(result) {
			var successRecord = 0;
			for (var i = 0; i < result.length; i++) {
				var item = Object.assign({}, result[i]);
				var found = getPositionOfObjectByValue(item, dataFriendTab2);
				if (found != -1) {
					if (item.status == '1') {
						successRecord++;
						item.status = null;
						dataNotFriendTab2.push(item);
						dataFriendTab2.splice(found, 1);
					}
				}
			}
			$scope.tableParamsFriendTab2 = new NgTableParams({
				page : 1,
				count : 10
			}, {
				dataset : dataFriendTab2
			});
			$scope.tableParamsNotFriendTab2 = new NgTableParams({
				page : 1,
				count : 10
			}, {
				dataset : dataNotFriendTab2
			});
			bootbox.alert($translate.instant('vnm.form_category.transferToShop.remove.SUCCESS') + successRecord
					+ $translate.instant('vnm.form_category.transferToShop.slash') + result.length
					+ $translate.instant('vnm.form_category.transferToShop.Record'));
			$scope.table2SelectedTab2 = [];
			$scope.isRemoveTab2 = true;
			$scope.model.checkboxAddTab2 = {
				checked : false,
				items : {}
			};
			$scope.model.checkboxRemoveTab2 = {
				checked : false,
				items : {}
			};
		});
	}

	$scope.enterOutFocusFunctionTab2 = function($scope) {
		$scope.onSearchTab2();
	}
	$scope.enterOutFocusFunction = function($scope) {
		$scope.onSearchTab1();
	}
});
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
function getPositionOfObjectByValue(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem.shopCode === arrDes[x].shopCode) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
function clearFillData(data) {
	data = "";
}
