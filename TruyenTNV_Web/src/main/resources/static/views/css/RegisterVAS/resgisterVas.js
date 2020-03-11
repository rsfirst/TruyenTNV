app_vnm.factory('reportPrepaidDetail', function($http, $translate) {
	return {
		listRegisterVas : function(data, callback) {
			var url = eim_url + "/bs/VasRegister/getListVasRegister";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		executeRegisterVas : function(data, callback) {
			var msisdn = data.msisdn;
			var registerVas = data.registerVas;
			var imsi = data.imsi;

			var url = eim_url + "/bs/VasRegister/executeRegisterVas?msisdnIn=" + msisdn + "&imsiIn=" + imsi + "&registerVas=" + registerVas;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
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

app_vnm.controller('ctrl-reportPrepaidDetail', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, reportPrepaidDetail) {
	// $rootScope.checkMenu();
	$scope.model = {};
	$scope.listBrandedShop = [];
	$scope.listRegisterVas = [];

	$scope.checkboxModelReasonValue2 = false;
	$scope.model.registerVas = "";

	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {},
		messages : {}
	}

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		reportPrepaidDetail.listRegisterVas($localStorage.clientContext.shopId, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				App.unblockUI("#contentMain");
				$scope.listRegisterVas = result;
			}
		});
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$scope.executeRegisterVas = function() {
		if (!$scope.validateForm()) {
			return;
		}

		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		var dataRegister = {};
		dataRegister.msisdn = StringUtilNVL($scope.model.msisdn);
		dataRegister.imsi = StringUtilNVL($scope.model.imsi);
		dataRegister.registerVas = StringUtilNVL($scope.model.registerVas);

		reportPrepaidDetail.executeRegisterVas(dataRegister, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				if (result.messages.startsWith('REGISTER_VAS')) {
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					return;
				}
				bootbox.alert($translate.instant('vnm.register_vas.message.error') + result.messages);
			} else {
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.REGISTER_VAS-006'));
				App.unblockUI("#contentMain");
			}
		});
	}

	$scope.validateForm = function() {
		if (StringUtilNVL($scope.model.msisdn) == "") {
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.REGISTER_VAS-002'));
			return false;
		}

		if (StringUtilNVL($scope.model.registerVas) == "") {
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.REGISTER_VAS-003'));
			return false;
		}

		if (StringUtilNVL($scope.model.imsi) == "") {
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.REGISTER_VAS-004'));
			return false;
		}

		return true;
	}

	$scope.resetForm = function() {
		$scope.model.msisdn = "";
		$scope.model.imsi = "";
		$scope.model.registerVas = "";
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
