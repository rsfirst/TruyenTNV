app_vnm.factory('reportTransfers', function($http, $translate) {
	return {
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/report/reportTransfers?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-reportTransfers', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, reportTransfers) {
	
	//Bùi Đình Đạt
	$scope.listEmail=[];
	$scope.email="";
	$scope.checkMail= function()
		{
			
			var x=$scope.email;
			if (x!="")
				{
				var listMail=[];
				 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 listMail=x.split(";");
				 $scope.listEmail=listMail;
				 var d=0;
				 for (var i=0; i<listMail.length; i++)
					 {
					 	if(!filter.test(listMail[i]))
					 		{
					 		d=d+1;
					 		}
					 }
				 if (d!=0) 
					 {
					 	bootbox.alert("Định dạng mail không chính xác, mỗi email phải phân tách nhau bằng dấu ;")
					 }

				
				}
			else
				{
				 return false;
				}
			

		}
	
	// An đại ca
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
			},
			msisdn : {
				required : true,
				EmptyValue : true,
				maxlength : 11
			}
		},
		messages : {
			toDate : {
				isDate : "Ngày bắt đầu không đúng định dạng",
				checkFromToDate : "Ngày bắt đầu không được lớn hơn ngày kết thúc!"
			},
			fromDate : {
				isDate : "Ngày kết thức không đúng định dạng"
			},
			msisdn : {
				required : "Bạn cần nhập Số điện thoại.",
				EmptyValue : "Bạn cần nhập Số điện thoại.",
				maxlength : "Số điện thoại không nhiều hơn 11 ký tự."
			}
		}
	}

	$scope.listStatus = [ {
		'Id' : 'AL',
		'Title' : 'Tất cả'
	}, {
		'Id' : '200',
		'Title' : 'Thành công'
	}, {
		'Id' : '206',
		'Title' : 'Không thành công'
	} ];

	$scope.exportfile = function() {
		
		
		if ($scope.frm_reportTransfers.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc 1!");
						return;
					}
				}

				var tmpMsisdn = "";

				if ($scope.model.msisdn.startsWith("0")) {
					tmpMsisdn = $scope.model.msisdn.substring(1, $scope.model.msisdn.length);
				} else if ($scope.model.msisdn.startsWith("84") && $scope.model.msisdn.length > 9) {
					tmpMsisdn = $scope.model.msisdn.substring(2, $scope.model.msisdn.length);
				} else if ($scope.model.msisdn.startsWith("+84")) {
					tmpMsisdn = $scope.model.msisdn.substring(3, $scope.model.msisdn.length);
				}

				var ReportInput = {
					"p_msisdn" : tmpMsisdn,
					"p_fromdate" : $("#fromDate").val(),
					"p_todate" : $("#toDate").val(),
					"p_status" : $scope.model.status,
					/*"p_email" : $scope.email,*/
					"p_email" : $scope.listEmail,
					"fileTempName" : 'TemplateBCTongHopGiaoDich',
					"fileType" : '.xlsx'
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				reportTransfers.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMain");
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

	$.validator.addMethod("EmptyValue", function(value, element) {
		if (value == undefined || value == "")
			return false;
		if ($.trim(value) == "")
			return false;
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
