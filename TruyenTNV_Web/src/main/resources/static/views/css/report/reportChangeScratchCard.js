app_vnm.factory('reportChangeScratchCard', function($http, $translate) {
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
			var url = eim_url + "/bs/reportChangeScratchCard/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-reportChangeScratchCard', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, reportChangeScratchCard) {
	
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
				isDate : true,
				checkFromDate : true
			},
			dateChange : {
				isDate : true,
				checkFromDate : true
			},
			dateCreate : {
				isDate : true,
				checkFromDate : true
			}
			
		},
		messages : {
			toDate : {
				isDate : "Ngày kết thúc không đúng định dạng!",
				checkFromToDate : "Ngày kết thúc không được nhỏ hơn ngày bắt đầu!"
			},
			fromDate : {
				isDate : "Ngày bắt đầu không đúng định dạng!",
				checkFromDate : "Ngày bắt đầu không được lớn hơn ngày hiện tại!"
			},
			dateChange : {
				isDate : "Ngày đổi thẻ không đúng định dạng!",
				checkFromDate : "Ngày đổi thẻ không được lớn hơn ngày hiện tại!"
			},
			dateCreate : {
				isDate : "Ngày cộng HH không đúng định dạng!",
				checkFromDate : "Ngày cộng HH không được lớn hơn ngày hiện tại!"
			}
		}
	}

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		reportChangeScratchCard.liststaff($localStorage.clientContext.shopId, function(result) {
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
				$scope.model.listSta = $localStorage.clientContext.username;
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
		if ($scope.frm_reportChangeScratchCard.validate()) {
			if ($scope.checkNumber()) {
				if ($("#fromDate").val() == '') {
					bootbox.alert("Bạn phải nhập từ ngày để thực hiện xuất báo cáo!");
					return;
				}
				if ($("#toDate").val() == '') {
					bootbox.alert("Bạn phải nhập đến ngày để thực hiện xuất báo cáo!");
					return;
				}
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc 1!");
						return;
					}
				} else {
					bootbox.alert("Bạn phải nhập khoảng thời gian tạo báo cáo!");
					return;
				}
				var ReportInput = {
					"m_param01" : $localStorage.clientContext.shop.shopCode, // From date
					"m_param02" : $("#fromDate").val(), // From date
					"m_param03" : $("#toDate").val(), // To date
					"m_param04" : $scope.model.listSta, // 
					"m_param05" : $scope.model.requestStatus.selected.code, 
					"m_param06" : $("#dateChange").val(), 
					"m_param07" : $("#dateCreate").val(), 
					"m_param08" : $scope.model.stk,
					"m_param09" :$localStorage.clientContext.shop.staffName,
					"m_param10" :$localStorage.clientContext.shop.shopName,
					"fileTempName" : 'reportChangeScratchCardFormReport',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportChangeScratchCard.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
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
	$.validator.addMethod("checkFromDate", function(value, element) {
		 var date = new Date();
		 var dateTimeNow = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
		if (moment(value, "DD/MM/YYYY") > moment(dateTimeNow, "DD/MM/YYYY")) {
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
