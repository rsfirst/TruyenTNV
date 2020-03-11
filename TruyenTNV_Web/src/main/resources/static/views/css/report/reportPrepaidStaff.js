app_vnm.factory('reportPrepaidStaff', function($http, $translate) {
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
			var url = eim_url + "/bs/reportPrepaidStaff/exportFile?reportInput=" + data;
			$http.get(url,{responseType: 'arraybuffer' }).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-reportPrepaidStaff', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, reportPrepaidStaff) {
	
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
				isDate : "Ngày bắt đầu không đúng định dạng",
				checkFromToDate : "Ngày bắt đầu không được lớn hơn ngày kết thúc!"
			},
			fromDate : {
				isDate : "Ngày kết thức không đúng định dạng"
			}
		}
	}

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		reportPrepaidStaff.listBrandedShop($localStorage.clientContext.shopId, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				App.unblockUI("#contentMain");
				$scope.listBrandedShop = result;
			}
		});
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$scope.getStaff = function(id) {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		reportPrepaidStaff.liststaff(id, function(result) {
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
			}
		});
	}

	$scope.exportfile = function() {
		if ($scope.frm_reportPrepaidStaff.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc 1!");
						return;
					}
				}
				
				var ReportInput = {
					"m_param01" : $scope.model.listBS,
					"m_param02" : $scope.model.listSta,
					"m_param03" : ""==$("#fromDate").val()?"AL":$("#fromDate").val(),
					"m_param04" : ""==$("#toDate").val()?"AL":$("#toDate").val(),
					"fileTempName" : 'reportAddNewConnectPrepaidStaff',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportPrepaidStaff.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					} else {
						App.unblockUI("#contentMain");
						download(new Blob([ result ]) , header('MyDownloadFile') + header('FileType'), header('Content-Type'));
					}
				});

			} else {
				bootbox.alert("Bạn phải nhập khoảng thời gian tạo báo cáo!");
			}
		}
	}

	$scope.checkNumber = function() {
		var tmp = true;
		if (!angular.isDefined($scope.model.fromDate)	||	$scope.model.fromDate ==null) {
			if (!angular.isDefined($scope.model.toDate)	||	$scope.model.toDate ==null) {
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
