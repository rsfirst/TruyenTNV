app_vnm.factory('reportPreOrderByStatus', function($http, $translate) {
	return {
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportPreOrderByStatus/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},

	}
});

app_vnm.controller('ctrl-reportPreOrderByStatus', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, reportPreOrderByStatus) {
	


	$scope.model = {};
	
	$scope.ReportSource = [
		{ 'reportId': '1', 'reportName': 'Báo cáo tổng hợp' },
		{ 'reportId': '2', 'reportName': 'Báo cáo chi tiết' }
	];
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
	
	$scope.ChannelSource = [];
	$scope.StatusSource = [];
	getListNumberSpecTypeOrderChannel =  function () {
		var url =eim_url+"/bs/channel/list_spec_num_group_order_channel";
		 $http.get(url).success(function (result){
			 $scope.ChannelSource = []
				if (result != null && result.length > 0) {
					 var selectedAll = {
					      code: "",
					      name: "Tất cả kênh"
					 }
					 $scope.ChannelSource.push(selectedAll);
					 for (var i=0; i<result.length; i++) {
						 $scope.ChannelSource.push(result[i]);
					 }
					 $scope.model.channel = '';
				}
		 }).error(function (response){
			 
		 });
    }
	
	getListNumberSpecTypeOrderStatus =  function () {
		var url =eim_url+"/bs/status/list_spec_num_group_order_status";
		 $http.get(url).success(function (result){
			 $scope.StatusSource = []
				if (result != null && result.length > 0) {
					 var selectedAll = {
					      code: "",
					      name: "Tất cả trạng thái"
					 }
					 $scope.StatusSource.push(selectedAll);
					 for (var i=0; i<result.length; i++) {
						 $scope.StatusSource.push(result[i]);
					 }
					 $scope.model.status = '';
				}
		 }).error(function (response){
			 
		 });
    }

	$scope.loadDefault = function() {
		getListNumberSpecTypeOrderChannel();
		getListNumberSpecTypeOrderStatus();
	}

	var initialize = function() {
		$scope.loadDefault();
	}

	initialize();

	$scope.exportfile = function() {
		if ($("#fromDate").val() == '') {
			bootbox.alert("Từ ngày không được để trống!");
			return;
		}
		if ($("#toDate").val() == '') {
			bootbox.alert("Đến ngày không được để trống!");
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
		
		if ($scope.frm_reportPreOrderByStatus.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert("Từ ngày không được lớn hơn Đến ngày!");
						return;
					}
				}
				
				if ($scope.model.reportType == undefined || $scope.model.reportType == '') {
					bootbox.alert("Loại báo cáo không được để trống!");
					return;
				}
				
				var tempName = '';
				if ($scope.model.reportType == '1') {
					tempName = 'bao_cao_tong_hop_preorder_theo_trang_thai';
				} else if ($scope.model.reportType == '2') {
					tempName = 'bao_cao_chi_tiet_preorder_theo_trang_thai';
				}
				
				var ReportInput = {
					"m_param01" : $("#fromDate").val(),
					"m_param02" : $("#toDate").val(),
					"m_param03" : $scope.model.channel,
					"m_param04" : $scope.model.status,
					"fileTempName" : tempName,
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportPreOrderByStatus.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
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

