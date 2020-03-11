app_vnm.factory('reportInputStockStaff', function($http, $translate) {
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
			var url = eim_url + "/bs/reportInputStockStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-reportInputStockStaff', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, reportInputStockStaff) {
	
	$scope.model = {};
	$scope.listBrandedShop = [];
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
		reportInputStockStaff.listBrandedShop($localStorage.clientContext.shop.shopId, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				App.unblockUI("#contentMain");
				$scope.listBrandedShop = result;
			}
		});
		reportInputStockStaff.liststaff($localStorage.clientContext.shopId, function(result) {
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
				$scope.model.listSta = $scope.listStaff[0].code;
			}
		});
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$scope.exportfile = function() {
		if ($scope.frm_reportInputStockStaff.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert($translate.instant('vnm.report.mess.check.fromToDate'));
						return;
					}
				}

				var ReportInput = {
					"m_param01" : $scope.model.listBS, // shopID
					"m_param02" : $("#fromDate").val(), // From date
					"m_param03" : $("#toDate").val(), // To date
					"m_param04" : $scope.model.listSta, // 
					"m_param05" : $localStorage.clientContext.shop.staffName, // staffName
					"fileTempName" : 'Bao_cao_nhap_hang_nhan_vien',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportInputStockStaff.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					} else {
						App.unblockUI("#contentMain");
						download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
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
