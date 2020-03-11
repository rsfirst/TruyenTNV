app_vnm.factory('ctk_transferGoods', function($http, $translate) {
	// Khoi tao interface
	return {
		getShopByShopCode : function(shopCodeData, callback) {
			var url = eim_url + "/bs/Custome/getShopByShopCode";
			$http.post(url, shopCodeData).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
		,
		getGoods : function(data, callback) {
			var url = eim_url + "/bs/Custome/getGoodsListByShop?goodType="	+ data.goodType + "&shopId=" + data.shopId;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
		,
		addGoodsToShop : function(arrToInsert, callback) {
			var url = eim_url + "/bs/Custome/addGoodsListToShop";
			$http.post(url, arrToInsert).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
		,
		removeGoodsFromShop : function(arrToRemove, callback) {
			var url = eim_url + "/bs/Custome/removeGoodsListFromShop";
			$http.post(url, arrToRemove).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
		
	}
});
app_vnm.controller('ctrl-transferGoods', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, NgTableParams, $localStorage, $element, ctk_transferGoods) {
	
	var dataGoodNotIn = [];
	var dataGoodIn = [];
	var shopIdSearch;
	$scope.itemsByPage = 10;
	$scope.shopCode = "";
	$scope.tblListNotGoodShopSelected=[];
	$scope.tblListGoodShopSelected=[];
	$scope.isAdd = true;
	$scope.isRemove = true;
	
	$scope.loadDefault = function() {
	}
	
	$scope.clearForNewGoods = function() {
		dataGoodIn = [];
		dataGoodNotIn = [];
		$scope.tblListNotGoodShop = new NgTableParams({}, {
			dataset : dataGoodNotIn
		});
		$scope.tblListGoodShop = new NgTableParams({}, {
			dataset : dataGoodIn
		});
		$scope.tblListNotGoodShopSelected = [];
		$scope.tblListGoodShopSelected = [];
		$scope.model.checkboxAdd = {
	      checked: false,
	      items: {}
		};
		
		$scope.model.checkboxRemove = {
	      checked: false,
	      items: {}
		};
	}

	var initialize = function () {
		$scope.loadDefault();
	}
	

	initialize();

	$scope.outFocusFunction = function(e){
		if (!shopIdSearch == "" || !shopIdSearch == null){
			$scope.model.goodType = "";
		}
		$scope.clearForNewGoods();
		overLoading("loading...");
		var parent =  $(e.target).parent().parent();
		var shopCode = e.target.value;
		if (shopCode != '' && shopCode != null){
			var shopCodeData = {};
			shopCodeData.shopCode  = StringUtilNVL($scope.model.shopCode);
			
			ctk_transferGoods.getShopByShopCode(shopCodeData, function(result) {
				if(result.name == null){
					$scope.model.shopName = "";
					bootbox.alert($translate.instant('vnm.transfer_goods.mess.shop.code.notExist'));
					shopIdSearch = "";
				} else if(result.status == '0'){
					$scope.model.shopName = "";
					bootbox.alert($translate.instant('vnm.transfer_goods.mess.shop.deactive'));
					shopIdSearch = "";
				} else {
					$scope.model.shopName = result.name;
					shopIdSearch = result.shop_Id;
				}
				closeOverLay();
			});
		} else {
			bootbox.alert($translate.instant('vnm.transfer_goods.mess.shopCode.required'));
			shopIdSearch = "";
			closeOverLay();
		}
	}
	
	$scope.transferToShop = function() {
		overLoading("loading...");
		if (shopIdSearch == "" || shopIdSearch == null) {
			bootbox.alert($translate.instant('vnm.transfer_goods.mess.shopCode.required'));
			closeOverLay();
			return;
		}
		if ( $scope.model.goodType == "" || $scope.model.goodType == null) {
			bootbox.alert($translate.instant('vnm.transfer_goods.mess.typeGood.required'));
			closeOverLay();
			return;
		}
		if ($scope.tblListNotGoodShopSelected.length > 0 ) {
			var dataToInsert = $scope.tblListNotGoodShopSelected;
			ctk_transferGoods.addGoodsToShop(dataToInsert, function(result) {
				var successRecord = 0;
				for (var i = 0; i < result.length; i++) {
					var row = Object.assign({}, result[i]);
					var found = getPositionOfObjectByValue(row, dataGoodNotIn)
					if (found != -1) {
						if (row.status == '1') {
							successRecord++;
							row.status = null;
							dataGoodIn.push(row);
							dataGoodNotIn.splice(found, 1);
							
							var found2 = getPositionOfObjectByValue(row, $scope.tblListNotGoodShopSelected)
							$scope.tblListNotGoodShopSelected.splice(found2, 1);
						}
					}
				}
				$scope.tblListNotGoodShop = new NgTableParams({}, {
					dataset : dataGoodNotIn
				});
				$scope.tblListGoodShop = new NgTableParams({}, {
					dataset : dataGoodIn
				});
				bootbox.alert($translate.instant('vnm.transfer_goods.mess.transfer.good.success') + successRecord + "/" + result.length + $translate.instant('vnm.transfer_goods.mess.good'));
				closeOverLay();
			});
		} else {
			bootbox.alert($translate.instant('vnm.transfer_goods.mess.good.required'));
			closeOverLay();
		}
	}
	$scope.removeFromShop = function() {
		overLoading("loading...");
		if (shopIdSearch == "" || shopIdSearch == null) {
			bootbox.alert($translate.instant('vnm.transfer_goods.mess.shopCode.required'));
			closeOverLay();
			return;
		}
		if ( $scope.model.goodType == "" || $scope.model.goodType == null) {
			bootbox.alert($translate.instant('vnm.transfer_goods.mess.typeGood.required'));
			closeOverLay();
			return;
		}
		if ($scope.tblListGoodShopSelected.length > 0 ) {
			var dataToRemove = $scope.tblListGoodShopSelected;
			ctk_transferGoods.removeGoodsFromShop(dataToRemove, function(result) {
				var successRecord = 0;
				for (var i = 0; i < result.length; i++) {
					var row = Object.assign({}, result[i]);
					var found = getPositionOfObjectByValue(row, dataGoodIn)
					if (found != -1) {
						if (row.status == '1') {
							successRecord++;
							row.status = null;
							dataGoodNotIn.push(row);
							dataGoodIn.splice(found, 1);
							
							var found2 = getPositionOfObjectByValue(row, $scope.tblListGoodShopSelected)
							$scope.tblListGoodShopSelected.splice(found2, 1);
						}
					}
				}
				$scope.tblListNotGoodShop = new NgTableParams({}, {
					dataset : dataGoodNotIn
				});
				$scope.tblListGoodShop = new NgTableParams({}, {
					dataset : dataGoodIn
				});
				bootbox.alert($translate.instant('vnm.transfer_goods.mess.remove.transfer.good.success') + successRecord + "/" + result.length + $translate.instant('vnm.transfer_goods.mess.good'));
				closeOverLay();
			});
		} else {
			bootbox.alert($translate.instant('vnm.transfer_goods.mess.good.remove.required'));
			closeOverLay();
		}
	}
	
	$scope.selectNotIn = function(item) {
		var found = getPositionOfObject(item, $scope.tblListNotGoodShopSelected);
		if (found == -1) {
			$scope.tblListNotGoodShopSelected.push(item);
		} else
			$scope.tblListNotGoodShopSelected.splice(found, 1);
		
		if ($scope.tblListNotGoodShopSelected.length == dataGoodNotIn.length) {
			$scope.model.checkboxAdd.checked = true;
		} else {
			$scope.model.checkboxAdd.checked = false;
		}
	}
	$scope.selectIn = function(item) {
		var found = getPositionOfObject(item, $scope.tblListGoodShopSelected);
		if (found == -1) {
			$scope.tblListGoodShopSelected.push(item);
		} else
			$scope.tblListGoodShopSelected.splice(found, 1);
		
		if ($scope.tblListGoodShopSelected.length == dataGoodIn.length) {
			$scope.model.checkboxRemove.checked = true;
		} else {
			$scope.model.checkboxRemove.checked = false;
		}
	}
	
	$scope.loadGoods = function(e) {
		overLoading("loading...");
		if (shopIdSearch == "" || shopIdSearch == null) {
			bootbox.alert($translate.instant('vnm.transfer_goods.mess.shopCode.required'));
			$scope.model.goodType = null;
			closeOverLay();
		} else {
			$scope.clearForNewGoods();
			var data = {};
			var dataResult = [];
			data.goodType = e.toString();
			data.shopId = shopIdSearch;
			ctk_transferGoods.getGoods(data, function(result) {
				dataResult = result;
				
				for (var i = 0; i < dataResult.length; i++) {
					if (dataResult[i].inShop == "0" || dataResult[i].inShop == '0' ) {
						dataGoodNotIn.push(dataResult[i]);
					} else {
						dataGoodIn.push(dataResult[i]);
					}
				}
				
				$scope.tblListNotGoodShop = new NgTableParams({}, {
					dataset : dataGoodNotIn
				});
				
				$scope.tblListGoodShop = new NgTableParams({}, {
					dataset : dataGoodIn
				});
				closeOverLay();
			});
			
			$scope.model.checkboxAdd = {
		      checked: false,
		      items: {}
			};
			
			$scope.model.checkboxRemove = {
		      checked: false,
		      items: {}
			};
		}
	}
	
	$scope.checkAllAdd = function(){
		$scope.tblListNotGoodShopSelected = [];
		angular.forEach(dataGoodNotIn, function(item) {
			$scope.model.checkboxAdd.items[item.goodId] = $scope.model.checkboxAdd.checked;
			if ($scope.model.checkboxAdd.checked) {
				$scope.tblListNotGoodShopSelected.push(item);
			}
		})
	}
	
	$scope.checkAllRemove = function(){
		$scope.tblListGoodShopSelected = [];
		angular.forEach(dataGoodIn, function(item) {
			$scope.model.checkboxRemove.items[item.goodId] = $scope.model.checkboxRemove.checked;
			if ($scope.model.checkboxRemove.checked) {
				$scope.tblListGoodShopSelected.push(item)
			}
		})
	}
	
	$scope.$watch(function() {
      return $scope.tblListNotGoodShopSelected.length;
    }, function(lenNotIn) {
    	$scope.isAdd = blLength(lenNotIn);
    });
	
	$scope.$watch(function() {
      return $scope.tblListGoodShopSelected.length;
    }, function(lenIn) {
    	$scope.isRemove = blLength(lenIn);
    });
	
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
		if (searchItem.goodId === arrDes[x].goodId) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}

function blLength(lenA){
	if (lenA > 0){
		return false;
	} else {
		return true;
	}
}

