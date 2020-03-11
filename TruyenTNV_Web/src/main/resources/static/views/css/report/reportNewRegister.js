app_vnm.factory('reportNewRegister', function($http, $translate) {
	return {
		listBrandedShop : function(data, callback) {
			var url = eim_url + "/bs/report/getListBrandedShop?shopId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		liststaff : function(data, callback) {
			var url = eim_url + "/bs/report/getListStaff?shopId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportNewRegister/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-reportNewRegister', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, $interval, reportNewRegister) {
	
	$scope.model = {};
	$scope.listBrandedShop = [];
	$scope.listExtend = [];
	$scope.listShoptype = [];
	$scope.disListStaff = false;
	$scope.model.selectedExtend = {};
	$scope.model.selectedShoptype = {};
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			toDate : {
				isDate : true,
				checkFromToDate : true
			},
			fromDate : {
				isDate : true
			}
		},
		messages : {
			toDate : {
				isDate : $translate.instant('vnm.report.mess.validate.date.toDate'),
				checkFromToDate : $translate.instant('vnm.report.mess.check.fromToDate')
			},
			fromDate : {
				isDate : $translate.instant('vnm.report.mess.validate.date.fromDate')
			}
		}
	}

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

        reportNewRegister.listBrandedShop($localStorage.clientContext.shopId, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				App.unblockUI("#contentMain");
				var tmp = [];
				var tm = {
					"id" : "-2",
					"code" : "AL",
					"text" : "Tất cả SHOP"
				};
				tmp.push(tm);
				for (var i = 0; i < result.length; i++) {
					tmp.push(result[i]);
				}
				$scope.listBrandedShop = tmp;
				var selected = {
                    "id": $localStorage.clientContext.shopId,
                    "code": $localStorage.clientContext.shop.shopCode,
					"text": $localStorage.clientContext.shop.shopName
				}
				$scope.model.selectedShop = selected;
			}
		});
        reportNewRegister.liststaff($localStorage.clientContext.shopId, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				App.unblockUI("#contentMain");
				var tmp = [];
				var tm = {
					"value" : "AL",
					"code" : "AL",
					"name" : "Tất cả nhân viên"
				};
				tmp.push(tm);
				for (var i = 0; i < result.length; i++) {
					tmp.push(result[i]);
				}
				$scope.listStaff = tmp;
				$scope.model.selectedStaff = $localStorage.clientContext.shop.staffId;
			}
		});

		$scope.listExtend = [
			{"value": "0", "name": "Báo cáo cửa hàng được lựa chọn"},
			{"value": "1", "name": "Báo cáo tất cả các cửa hàng trong nhánh"},
		];
		$scope.listShoptype = [
			{"value": "A", "name": "Tất cả các loại cửa hàng"},
			{"value": "0", "name": "Kho chính thuộc tổng công ty"},
			{"value": "1", "name": "Trung tâm phân phối khu vực"},
			{"value": "2", "name": "Điểm phân phối của đại lý (nhập thẳng)"},
			{"value": "3", "name": "Cửa hàng thuộc HT (Flaship shop)"},
			{"value": "4", "name": "Điểm phân phối của đại lý (xác nhận khi nhập)"},
		];
		$scope.model.selectedExtend = $scope.listExtend[1].value;
		$scope.model.selectedShoptype = $scope.listShoptype[0].value;
        $scope.model.fromDate = moment().format('DD/MM/YYYY');
        $scope.model.toDate = moment().format('DD/MM/YYYY');
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$scope.exportNewRegister = function() {
		if ($scope.frm_reportNewRegister.validate()) {
			if ($scope.checkNumber()) {
                if ($("#fromDate").val() == '' || $("#fromDate").val() == undefined){
                    bootbox.alert('Trường Từ ngày không được để trống');
                    return;
                }
                if ($("#toDate").val() == '' || $("#toDate").val() == undefined){
                    bootbox.alert('Trường Đến ngày không được để trống');
                    return;
                }
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert($translate.instant('vnm.report.mess.check.fromToDate'));
						return;
					}
				}
                if ($scope.model.selectedShop == undefined
					|| $scope.model.selectedShop.id == undefined || $scope.model.selectedShop.id == ''){
                    bootbox.alert('Trường Cửa hàng không được để trống');
                    return;
                }
				var ReportInput = {
					"shop" : $scope.model.selectedShop.id,
					"shopName" : $scope.model.selectedShop.code + ' - ' + $scope.model.selectedShop.text,
					"staff" : $scope.model.selectedStaff,
					"fromDate" : $("#fromDate").val(),
					"toDate" : $("#toDate").val(),
					"extend" : $scope.model.selectedExtend,
					"shopType" : $scope.model.selectedShoptype,
					"creator": $localStorage.clientContext.shop.staffName,
					"fileTempName" : 'reportNewRegister',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

                reportNewRegister.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					} else {
						App.unblockUI("#contentMain");
						
						download(new Blob([ result ]) , header('MyDownloadFile') + header('FileType'), header('Content-Type'));
					}
				});

			} else {
				bootbox.alert($translate.instant('vnm.report.mess.check.time'));
			}
		}
	}

	$scope.checkNumber = function() {
		var tmp = true;
		if (!angular.isDefined($scope.model.fromDate)) {
			if (!angular.isDefined($scope.model.toDate)) {
				tmp = false;
			}
		}
		return tmp;
	}

	// BEGIN validate input
	$.validator.addMethod("isDate", function(value, element) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;
		var valueDate = $.trim(value);
		return moment(valueDate, 'DD/MM/YYYY', true).isValid();
	}, "");

	$.validator.addMethod("checkFromToDate", function(value, element) {
		if (value === "")
			return true;
		if ($.trim(value) == "")
			return true;

		if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment(value, "DD/MM/YYYY")) {
			return false
		}
		return true;
	}, "");
});

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}
