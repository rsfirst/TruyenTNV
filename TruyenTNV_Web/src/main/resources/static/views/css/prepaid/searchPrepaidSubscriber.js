app_vnm.factory('searchSubs', function($http, $translate) {
	return {
		search : function(data, callback) {
			var url = eim_url + "/bs/searchPrepaid/searchSubs";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if ("403" == status) {
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
	}
});

app_vnm.controller('ctrl-searchPrepaidSubs', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, searchSubs) {

	window.document.title = $translate.instant('vnm.searchPrepaidSubscriber.page.title');

	$scope.model = {};
	$scope.lstCustSearch = [];
	$scope.cusSubSelected = {};
	$scope.idCardImg_Body = '';
	$scope.idCardImg2_Body = '';
	$scope.custImg_Body = '';
	$scope.fileImg_Body = '';
	$scope.fileImg2_Body = '';
	$scope.contract_img1_Body = '';
	$scope.contract_img2_Body = '';

	$scope.search = function() {
		if ($scope.checkNumber()) {
			if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
				if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
					bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc!");
					return;
				}
			}

			$scope.tableParams = new NgTableParams({}, {});
			var searchInput = {
				"mdn" : $scope.model.mdn,
				"fromDate" : $("#fromDate").val(),
				"toDate" : $("#toDate").val(),
			};

			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			searchSubs.search(searchInput, function(result) {
				if (result.status == '0' && result.status != 'undefined') {
					App.unblockUI("#contentMain");
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				} else {
					$scope.lstCustSearch = result;
					$scope.cusSubSelected = $scope.lstCustSearch[0];
					$scope.getImages($scope.cusSubSelected);
					
					$scope.tableParams = new NgTableParams({}, {});
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.lstCustSearch
					});

					App.unblockUI("#contentMain");
				}
			});
		} else {
			bootbox.alert("Bạn phải nhập ít nhất 1 trường!");
		}
	}
	
	$scope.getImages = function(item) {
		$scope.cusSubSelected = item;
		$scope.idCardImg_Body = item.idCardImg;
		$scope.idCardImg2_Body = item.idCardImg2;
		$scope.custImg_Body = item.custImg;
		$scope.fileImg_Body = item.fileImg;
		$scope.fileImg2_Body = item.fileImg2;
		$scope.contract_img1_Body = item.contractImg;
		$scope.contract_img2_Body = item.contractImg2;
	}

	$scope.checkNumber = function() {
		var tmp = true;
		if (!angular.isDefined($scope.model.mdn)) {
			if (!angular.isDefined($scope.model.fromDate)) {
				if (!angular.isDefined($scope.model.toDate)) {
					tmp = false;
				}
			}
		}
		return tmp;
	}

});
