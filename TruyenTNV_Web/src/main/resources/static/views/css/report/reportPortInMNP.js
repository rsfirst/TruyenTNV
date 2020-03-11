app_vnm.factory('reportPortInMNP', function($http, $translate) {
	return {
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportPortInMNP/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}	

	}
});

app_vnm.controller('ctrl-reportPortInMNP', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, reportPortInMNP) {
//	$rootScope.checkMenu();
	
	getListNetworkType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceNetwork";
		 $http.get(url).success(function (data){
			 if(data != undefined && data != null){
				 if(data.length != 0){
					 $scope.DonorSource = [];
					 var selectedAll = {
					      networkId: "",
					      networkName: "Tất cả nhà mạng"
					 }
					 $scope.DonorSource.push(selectedAll);
					 for (var i=0; i<data.length; i++) {
						 $scope.DonorSource.push(data[i]);
					 }					  
				 }
			 }
			 
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }

	$scope.model = {};
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
//		App.blockUI({
//			target : "#contentMain",
//			boxed : true,
//			message : 'loading...'
//		});
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$scope.exportfile = function() {
		if ($scope.frm_reportPortInMNP.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc 1!");
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
					"m_param03" : $scope.model.receiveNetwork,
					"m_param04" : $scope.model.status,
					"m_param05" : user,
					"fileTempName" : 'bao_cao_port_in_mnp',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportPortInMNP.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
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
	
	getListNetworkType();
	
	$scope.StatusSourcePortIn  = [
		{ 'Id': '', 'Title': 'Tất cả trạng thái' },
		{ 'Id': 'STARTING', 'Title': 'STARTING' },
		{ 'Id': 'REJECT', 'Title': 'REJECT' },
		{ 'Id': 'COMPLETED', 'Title': 'COMPLETED' },
	    { 'Id': 'CANCELED', 'Title': 'CANCELED' },
	    { 'Id': 'TERMINATION', 'Title': 'TERMINATION' },
	    { 'Id': 'PROCESSING', 'Title': 'PROCESSING' },
	    { 'Id': 'ERROR_NOTIFICATION', 'Title': 'ERROR_NOTIFICATION' },
	    { 'Id': 'FAILED', 'Title': 'FAILED' }
	];

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

