app_vnm.factory('prepaidListManagement', function($http, $translate) {
	return {
		searchPrepaidList : function(input, callback) {
			var url = eim_url + "/bs/PrepaidListManagement/search";
			$http.post(url, input).success(callback).error(function(callback) {
				bootbox.alert($translate.instant('vnm.messages.error.connection'));
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/report/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(callback) {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		}
	}
});

app_vnm.controller('ctrl-prepaidListManagement', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, prepaidListManagement) {
	window.document.title = $translate.instant('vnm.prepaid_list_management.page.title');
	$scope.model = {};
	$scope.dataTable = [];
	dowloadFile = function(data) {
		overLoading("Downloading file mẫu...");
		var url = eim_url + '/bs/downLoadFileTemplate';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert(FILE_DOWNLOAD);
			closeOverLay();
		});
	}
	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		$scope.model.userExcute = $localStorage.clientContext.username;
		$scope.model.fromDate = $filter('date')(new Date(), 'dd/MM/yyyy');
		$scope.model.toDate = $filter('date')(new Date(), 'dd/MM/yyyy');
		App.unblockUI("#contentMain");
	}
	$scope.loadDefauld();

	// Search
	$scope.search = function() {
		var input = {};
		$scope.dataTable = [];
		input.userExcute = $scope.model.userExcute;
		input.fromDate = $("#fromDate").val();
		input.toDate = $("#toDate").val();
		if ($("#fromDate").val() != '' && $("#toDate").val() != '') {
			if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
				bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.C0003'));
				App.unblockUI("#contentMain");
				return;
			}
		} else {
			bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.C0001'));
			App.unblockUI("#contentMain");
			return;
		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});

		prepaidListManagement.searchPrepaidList(input, function(result) {
			if (result == null || result.length == 0) {
				{
					bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.C0005'));
					App.unblockUI("#contentMain");
					return;
				}
			}
			for (let i = 0; i < result.length; i++) {
				if (result[i].total == result[i].processed) {
					result[i].showDownload = true;
				} else {
					result[i].showDownload = false;
				}
			}
			$scope.dataTable = result;
			App.unblockUI("#contentMain");
		});
	}
	// end
	$scope.download = function(item) {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});
		var ReportInput = {
			"m_param01" : item.transId,
			"m_param02" : item.createDatetime.substr(0,10),
			"m_param03" : item.createDatetime.substr(0,10),
			"fileTempName" : 'reg_by_batch',
			"fileType" : '.xlsx'
		};
		prepaidListManagement.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
			if (StringUtilNVLWithDefault(result.status, '1') != '1') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.report.' + result.messages));
			} else {
				App.unblockUI("#contentMain");

				download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header["Content-Type"]);
			}
		});
	}

});
function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}
function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}
