app_vnm.factory('reportPreRequest', function($http, $translate) {
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
			var url = eim_url + "/bs/reportPrepaidRequest/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listChangeServiceRequest : function(data, callback) {
			var url = eim_url + "/bs/report/getListChangeServiceRequest?type=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-reportPreRequest', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, reportPreRequest) {
	
	$scope.model = {};
	$scope.listBrandedShop = [];
	$scope.listStaff = [];
	$scope.listRequest = [];
	$scope.isDaily = true;
	$scope.reportTempName = "";
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
//		reportPreRequest.listBrandedShop($localStorage.clientContext.shop.shopId, function(result) {
//			if (result.status == '0' && result.status != 'undefined') {
//				App.unblockUI("#contentMain");
//				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
//			} else {
//				App.unblockUI("#contentMain");
//				$scope.listBrandedShop = result;
//			}
//		});
//		
		reportPreRequest.liststaff($localStorage.clientContext.shop.shopId, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			} else {
				App.unblockUI("#contentMain");
				$scope.model.staff = {};
				$scope.model.staff.selected = {};
				var tmp = [];
				var tm = {
					"code" : "NONE",
					"name" : "Tất cả nhân viên"
				};
				tmp.push(tm);
				for (var i = 0; i < result.length; i++) {
					tmp.push(result[i]);
				}
				$scope.listStaff = tmp;
				$scope.model.staff.selected = $scope.listStaff[0];
			}
				var strType = "CHPRE";
				reportPreRequest.listChangeServiceRequest(strType, function(result) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					} else {
						App.unblockUI("#contentMain");
						$scope.model.request = {};
						$scope.model.request.selected = {};
						var tmpRA = [];
						var tmpR = {
							"code" : "-1",
							"name" : "Tất cả dịch vụ yêu cầu"
						};
						tmpRA.push(tmpR);
						for (var i = 0; i < result.length; i++) {
							tmpRA.push(result[i]);
						}
						$scope.listRequest = tmpRA;
						$scope.model.request.selected = $scope.listRequest[0];
					}
				});
		});
		
		$scope.listStatusRequest = [
			{
				"code" : "-1",
				"name" : "Tất cả trạng thái"},
			{
				"code" : "0",
				"name" : "Tạo mới"},
			{
				"code" : "1",
				"name" : "Từ chối"},
			{
				"code" : "2",
				"name" : "Đã thực hiện"},
			{
				"code" : "3",
				"name" : "Hủy"},
		];
		$scope.model.statusRequest = {};
		$scope.model.statusRequest.selected = {};
		if ($scope.isDaily) {
			$scope.model.statusRequest.selected ={};
			$scope.reportTempName = "PreRequestReportDaily_BS";
		} else {
			$scope.model.statusRequest.selected = $scope.listStatusRequest[0];
			$scope.reportTempName = "PreRequestReportSummary_BS";
		}
		
		
		$scope.model.reportType = "DAILY";
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();
	
	$scope.changeReportType = function (type) {
		if (type == "DAILY"){
			$scope.isDaily = true;
			$scope.reportTempName = "PreRequestReportDaily_BS";
			$scope.model.statusRequest.selected = {};
		} else {
			$scope.isDaily = false;
			$scope.reportTempName = "PreRequestReportSummary_BS";
			$scope.model.statusRequest.selected = $scope.listStatusRequest[0];
		}
	}

	$scope.exportfile = function() {
		if ($scope.frm_reportPreRequest.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc!");
						return;
					}
				}
				
				if ($scope.isDaily) {
					var ReportInput = {
							"m_param01" : 'CHPRE',
							"m_param02" : $("#fromDate").val(),
							"m_param03" : $("#toDate").val(),
							"m_param04" : $scope.model.request.selected.code,
							"m_param05" : $scope.model.staff.selected.code,
							"fileTempName" : $scope.reportTempName,
							"fileType" : '.xlsx'
						};
				} else {
					var ReportInput = {
							"m_param01" : $("#fromDate").val(),
							"m_param02" : $("#toDate").val(),
							"m_param03" : 'CHPRE',
							"m_param04" : $scope.model.request.selected.code,
							"m_param05" : $scope.model.staff.selected.code,
							"m_param06" : $scope.model.statusRequest.selected.code,
							"fileTempName" : $scope.reportTempName,
							"fileType" : '.xlsx'
						};
				}
				
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportPreRequest.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.report.' + result.messages));
					} else {
						App.unblockUI("#contentMain");

						download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));

					}
				});
			} 
		}
	}

	$scope.checkNumber = function() {
		if ($('#fromDate').val() == null || $('#fromDate').val() == "") {
			bootbox.alert("Bạn phải nhập thông tin [Từ ngày] để tạo báo cáo!");
			return false;
		}
		if ($('#toDate').val() == null || $('#toDate').val() == "") {
			bootbox.alert("Bạn phải nhập thông tin [Đến ngày] để tạo báo cáo!");
			return false;
		}
		return true;
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

function padNumber(number) {
	var string = '' + number;
	string = string.length < 2 ? '0' + string : string;
	return string;
}