app_vnm.factory('reportAssignMNP', function($http, $translate) {
	return {
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportAssignMNP/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
	
		loadStaff : function(callback) {
			var url = eim_url+ "/bs/reportAssignMNP/loadStaff";
			$http.put(url).success(callback)
					.error(function(data, status, headers, config) {
						closeOverLay();
						bootbox.alert(status+ " " + $translate.instant('vnm.messages.error.connection'));
					});
		},

	}
});

app_vnm.controller('ctrl-reportAssignMNP', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, reportAssignMNP) {

	$scope.model = {};
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			toDate : {
				isDate : true,
			},
			fromDate : {
				isDate : true
			}
		},
		messages : {
			toDate : {
				isDate : "Đến ngày không đúng định dạng",
			},
			fromDate : {
				isDate : "Từ ngày không đúng định dạng"
			}
		}
	}

	$scope.StaffSource = []
	$scope.loadDefault = function() {
		reportAssignMNP.loadStaff(function(result) {
			$scope.StaffSource = []
			if (result != null && result.length > 0) {
				 var selectedAll = {
				      code: "",
				      name: "Tất cả nhân viên"
				 }
				 $scope.StaffSource.push(selectedAll);
				 for (var i=0; i<result.length; i++) {
					 $scope.StaffSource.push(result[i]);
				 }
				 $scope.model.staff = '';
			}
		});
	}

	var initialize = function() {
		$scope.loadDefault();
	}

	initialize();

	$scope.exportfile = function() {
		if ($("#fromDate").val() == '') {
			bootboxAlertFocus("Từ ngày không được để trống!", "fromDate");
			return;
		}
		if ($("#toDate").val() == '') {
			bootboxAlertFocus("Đến ngày không được để trống!", "toDate");
			return;
		}
		if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment(new Date(), "DD/MM/YYYY")) {
			bootboxAlertFocus("Từ ngày không được lớn hơn ngày hiện tại!", "fromDate");
			return;
		}
		if (moment($("#toDate").val(), "DD/MM/YYYY") > moment(new Date(), "DD/MM/YYYY")) {
			bootboxAlertFocus("Đến ngày không được lớn hơn ngày hiện tại!", "toDate");
			return;
		}
		
		if ($scope.frm_reportPortInMNP.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootboxAlertFocus("Từ ngày không được lớn hơn Đến ngày!", "toDate");
						return;
					}
				}
				
				var user = '';
				if ($localStorage.clientContext.username.startsWith("MPV") || $localStorage.clientContext.username.startsWith("BS") ||
						$localStorage.clientContext.username.startsWith("ASS") || $localStorage.clientContext.username.startsWith("DSS")) {
					user = $localStorage.clientContext.username;
				}
				var ReportInput = {
					"m_param01" : $("#fromDate").val(),
					"m_param02" : $("#toDate").val(),
					"m_param03" : $scope.model.staff,
					"fileTempName" : 'bao_cao_giao_viec',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportAssignMNP.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
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

function bootboxAlertFocus(message, focusId){
	bootbox.alert({ 
		  size: "medium",
		  message: message, 
		}).on('hidden.bs.modal', function(event) {
			  var myEl = document.getElementById(focusId);
			  var angularEl = angular.element(myEl);
			  angularEl.focus();
	    });
}

