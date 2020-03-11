//var eim_url = "http://10.6.2.41:6060";  
var EMPTY_VALUE = "";

app_vnm.controller('ctr-danhsach-hoantra-tu-rno', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams) {
	
	dowloadFile = function(data) {
		overLoading("Loading...");
		var url = eim_url + '/bs/downloadFile';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			var basename = 'FileName.jpg';
			download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert($translate.instant('vnm.mnp_message.common.download.error'));
			closeOverLay();

		});
	}

	getListNetworkType = function() {
		overLoading("Loading...");
		$scope.DonorSource = [];
		var url = eim_url + "/bs/SourceNetwork";
		$http.get(url).success(function(data) {
			if (data != undefined && data != null) {
				if (data.length != 0) {
					$scope.DonorSource = data;
				}
			}

			var selectedAll = {
				networkId : "ALL",
				networkName : "Tất cả nhà mạng"
			}
			$scope.DonorSource.push(selectedAll);

			closeOverLay();
		}).error(function(response) {
			closeOverLay();
		});
	}

	searchSubDataList = function(data) {
		var url = eim_url + "/bs/sub_return_dno";
		$http.post(url, data).success(function(result) {

			$scope.searchResult = result;
			if ($scope.searchResult.length > 0) {
				$scope.tableParams = new NgTableParams({}, {
					dataset : result
				});
				closeOverLay();
			} else {
				closeOverLay();
				bootbox.alert("Không tìm thấy dữ liệu");
			}
		}).error(function(data) {
			closeOverLay();
		});
	}
	getListNetworkType();
	$scope.model = {};
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			receipient : {
				// EmptyValue:true,
				maxlength : 15
			},
			msisdn : {
			// EmptyValue:true,
			// maxlength: 15
			},
			startDate : {
				// EmptyValue:true,
				isDate : true
			},
			endDate : {
				// EmptyValue:true,
				isDate : true
			}
		},
		messages : {
			receipient : {
				EmptyValue : " Yêu cầu nhập nhà mạng DNO",
				maxlength : "Mhà mạng DNO không đúng định dạng."
			},
			msisdn : {
				EmptyValue : "Yêu cầu nhập Số thuê bao",
				maxlength : "MSISDN không đúng định dạng"
			},
			startDate : {
				EmptyValue : "Yêu cầu nhập ngày",
				isDate : "Ngày bắt đầu không đúng định dạng."
			},
			endDate : {
				EmptyValue : "Yêu cầu nhập ngày",
				isDate : "Ngày kết thúc không đúng định dạng."
			}
		}
	}

	$.validator.addMethod("EmptyValue", function(value, element) {
		if (value == undefined || value == "")
			return false;
		if ($.trim(value) == "")
			return false;
		return true;
	}, "");

	$.validator.addMethod("isDate", function(value, element) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;
		var valueDate = $.trim(value);
		return moment(valueDate, 'DD/MM/YYYY', true).isValid();
	}, "");

	$scope.RNOSource = [ {
		'Id' : '1',
		'Title' : 'Vietel'
	}, {
		'Id' : '3',
		'Title' : 'VinaPhone'
	}, {
		'Id' : '3',
		'Title' : 'MobilePhone'
	}, ];

	$scope.LoaiThueBaoSource = [ {
		'Id' : '1',
		'Title' : 'Trả trước'
	}, {
		'Id' : '2',
		'Title' : 'Trả sau'
	} ];

	$scope.RNOSource = [ {
		'Id' : '1',
		'Title' : 'VTE'
	}, {
		'Id' : '2',
		'Title' : 'MBF'
	}, {
		'Id' : '3',
		'Title' : 'VNP'
	} ];

	$scope.model.fileAttachments = [];

	$scope.search = function() {
		var isFormValidate = $scope.validateFormSearch();
		if (isFormValidate) {
			overLoading("Loading...");
			var searchInput = {
				"receipient" : $scope.model.receipient,
				"startDate" : StringUtilNVL($("#startDate").val()),
				"endDate" : StringUtilNVL($("#endDate").val()),
				"msisdn" : StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn))
			};

			searchSubDataList(searchInput);
		}
	}

	$scope.downloadFileAttachMent = function(attachFile) {
		dowloadFile(attachFile);
	}

	$scope.validateFormSearch = function() {
		if (StringUtilNVL($scope.model.receipient) == EMPTY_VALUE && StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn)) == EMPTY_VALUE
				&& StringUtilNVL($("#startDate").val()) == EMPTY_VALUE && StringUtilNVL($("#endDate").val()) == EMPTY_VALUE) {
			bootbox.alert("Nhập thông tin tìm kiếm");
			return false
		} else {
			var isDateAfter = checkDateIsAfterDate($("#startDate").val(), $("#endDate").val());
			if (!isDateAfter) {
				bootbox.alert("Ngày bắt đầu tìm kiếm phải nhỏ hơn ngày kết thúc !");
				return false
			}
		}

		var msisdnVal = StringUtilNVL(formatMsisdnWithoutZero($scope.model.msisdn));
		if (msisdnVal != EMPTY_VALUE && !isNumbericInteger(msisdnVal)) {
			bootbox.alert("Số thuê bao chỉ bao gồm ký tự số !");
			return false
		}
		return true;
	}

});

function overLoading(message) {
	App.blockUI({
		message : message
	});
	$(".blockOverlay").css("background-color", "#000000");
	$(this).css("opacity", "1");
}

function closeOverLay() {
	$.unblockUI();
}
