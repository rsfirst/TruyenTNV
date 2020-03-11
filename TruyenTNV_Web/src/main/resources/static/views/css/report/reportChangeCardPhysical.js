app_vnm.factory('reportChangeCardPhysical', function($http, $translate) {
	return {
		liststaff : function(data, callback) {
			var url = eim_url + "/bs/report/getListStaff?shopId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportChangeCardPhysical/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-reportChangeCardPhysical', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, reportChangeCardPhysical) {
	
	$scope.model = {};
	$scope.model.checkBoxAddCom = false;
	$scope.model.checkBoxReDeposit = false;
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			toDate : {
				EmptyValue: true,
				isDate : true,
				checkFromToDate : true
			},
			fromDate : {
				EmptyValue: true,
				isDate : true
			},
//			dateReleaseDeposit : {
//				isDate : true
//			},
			dateAddCom : {
				isDate : true
			}
			
		},
		messages : {
			toDate : {
				EmptyValue: $translate.instant('vnm.report.report_change_card_physical.mess.todate.emptyvalue'),
				isDate : $translate.instant('vnm.report.mess.validate.date.toDate'),
				checkFromToDate : $translate.instant('vnm.report.mess.check.fromToDate')
			},
			fromDate : {
				EmptyValue: $translate.instant('vnm.report.report_change_card_physical.mess.fromdate.emptyvalue'),
				isDate : $translate.instant('vnm.report.mess.validate.date.fromDate')
			},
//			dateReleaseDeposit : {
//				isDate : "Ngày Release Deposit không đúng định dạng!"
//			},
			dateAddCom : {
				isDate : $translate.instant('vnm.report.report_change_card_physical.mess.dateCommission.validate')
			}
		}
	}

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		reportChangeCardPhysical.liststaff($localStorage.clientContext.shopId, function(result) {
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
		
		//init listRequestStatus
		$scope.model.requestStatus= {};
		$scope.model.requestStatus.selected = {};
		$scope.listRequestStatus = [ {
			'code' : 'AL',
			'name' : 'Tất cả trạng thái'
		}, {
			'code' : '0',
			'name' : 'Lập'
		} , {
			'code' : '1',
			'name' : 'Từ chối'
		} , {
			'code' : '2',
			'name' : 'Đang thực hiện'
		} , {
			'code' : '3',
			'name' : 'Đã thực hiện'
		} , {
			'code' : '4',
			'name' : 'Hủy'
		} 
		];
		$scope.model.requestStatus.selected = $scope.listRequestStatus[0];
		//init stk
		$scope.model.stk = '';
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$scope.exportfile = function() {
		if ($scope.frm_reportChangeCardPhysical.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert($translate.instant('vnm.report.mess.check.fromToDate'));
						return;
					}
				}
//				var checkBoxAddCom = $scope.model.checkBoxAddCom;
				var checkBoxAddCom = "";
				if($scope.model.checkBoxAddCom == 'true'){
					checkBoxAddCom = 'true';
				}else{
					checkBoxAddCom = 'false';
				}
				
				var checkBoxReDeposit = "";
				if($scope.model.checkBoxAddCom == 'true'){
					checkBoxReDeposit = 'true';
				}else{
					checkBoxReDeposit = 'false';
				}
				
				var account = $localStorage.clientContext.shopId;
					
				var ReportInput = {					
					"m_param01" : $("#fromDate").val(),
					"m_param02" : $("#toDate").val(),
					"m_param03" : $scope.model.listSta,
					"m_param04" : checkBoxAddCom.toUpperCase(),
					"m_param05" : StringUtilNVL($("#dateAddCom").val()),
//					"m_param06" : checkBoxReDeposit.toUpperCase(),
//					"m_param07" : StringUtilNVL($("#dateReleaseDeposit").val()),
					"m_param08" : $scope.model.requestStatus.selected.code,
					"fileTempName" : 'reportChangeScratchCardPhysical',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportChangeCardPhysical.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMa" +
								"in");
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
	
	$.validator.addMethod("EmptyValue", function (value, element) {
        if (value == undefined || value=="") return false;
        if($.trim(value)=="") return false;
        return true;
	}, "");
});

function StringUtilNVL(val) {
	if (val == undefined || val == "")
		return "AL";
	return $.trim(val);
}

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}
