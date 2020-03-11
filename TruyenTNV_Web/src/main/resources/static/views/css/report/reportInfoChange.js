app_vnm.factory('reportInfoChange', function($http, $translate) {
	return {
		liststaff : function(data, callback) {
			var url = eim_url + "/bs/report/getListStaff?shopId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportInfoChange/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-reportInfoChange', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, $interval, reportInfoChange) {
	
	$scope.model = {};
	$scope.disListStaff = false;
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

        reportInfoChange.liststaff($localStorage.clientContext.shopId, function(result) {
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
                $scope.model.selectedStaff = $localStorage.clientContext.shop.staffCode;
			}
		});
        $scope.model.fromDate = moment().format('DD/MM/YYYY');
        $scope.model.toDate = moment().format('DD/MM/YYYY');
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

    $scope.changeIsdn = function() {
        $scope.model.msisdn = $scope.model.msisdn.replace(/\D/g, '');
    }

	$scope.exportInfoChange = function() {
		if ($scope.frm_reportInfoChange.validate()) {
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

				var ReportInput = {
					"msisdn" : $("#msisdn").val(),
					"requestCode" : $("#requestcode").val(),
					"fromDate" : $("#fromDate").val(),
					"toDate" : $("#toDate").val(),
					"staff" : $scope.model.selectedStaff,
                    "creator": $localStorage.clientContext.shop.staffName,
					"fileTempName" : 'reportInfoChange',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

                reportInfoChange.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
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
