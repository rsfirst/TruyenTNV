app_vnm.factory('reportEtopupTransaction', function($http, $translate) {
	return {
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportPrepaidRequest/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#reportEtopupTransaction");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});

app_vnm.controller('ctrl-reportEtopupTransaction', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, reportEtopupTransaction) {
	
	$scope.model = {};
	$scope.reportTempName = "reportEtopupTransaction_BS";

	$scope.model.searchfromDate = "";
	$scope.model.transType = {};
	$scope.model.searchSenderIsdn = "";
	$scope.model.searchReceiverIsdn = "";

	$scope.loadDefault = function() {
		App.blockUI({
			target : "#reportEtopupTransaction",
			boxed : true,
			message : 'loading...'
		});
		$scope.listChanelType = [
			{
				"code" : "-1",
				"name" : "Tất cả trạng thái"},
			{
				"code" : "0",
				"name" : "O2C"},
			{
				"code" : "1",
				"name" : "C2S"},
			{
				"code" : "2",
				"name" : "C2C"},
		];

        $scope.model.transType = $scope.listChanelType[0];

        App.unblockUI("#reportEtopupTransaction");
	}

	var initialize = function() {
		$scope.loadDefault();
	}

	initialize();

    $scope.changeMsisdn = function() {
        $scope.model.searchSenderIsdn = $scope.model.searchSenderIsdn.replace(/\D/g, '').trim();
        $scope.model.searchReceiverIsdn = $scope.model.searchReceiverIsdn.replace(/\D/g, '').trim();
    }

	var validateExport = function() {
        if ($("#searchfromDate").val().trim() == "") {
            bootbox.alert("Trường [Ngày] bắt buộc phải nhập liệu!");
            return false;
        }
        var dNow = moment();
        dNow = moment(dNow, "DD/MM/YYYY");
        var dSeachfromDate = moment($("#searchfromDate").val().trim(), "DD/MM/YYYY");

        if (!moment(dSeachfromDate, 'DD/MM/YYYY', true).isValid()){
            bootbox.alert("Trường [Ngày] không đúng định dạng!");
            return false;
        }
        if (dSeachfromDate > dNow){
            bootbox.alert("Ngày không được lớn hơn ngày hiện tại!");
            return false;
		}
		return true;
	}

	$scope.exportfile = function() {
		if (validateExport()) {
            // bootbox.alert("Ting ting!")

			var senderIsdn = "-1";
			if ($scope.model.searchSenderIsdn.trim() != "" ){
                senderIsdn = $scope.model.searchSenderIsdn.trim();
			}

            var recevierIsdn = "-1";
            if ($scope.model.searchReceiverIsdn.trim() != "" ){
                recevierIsdn = $scope.model.searchReceiverIsdn.trim();
            }

            var date = $("#searchfromDate").val().trim();

            var transType = $scope.model.transType.name;
            if ($scope.model.transType.code == "-1"){
                transType = "-1";
			}

			var ReportInput = {
					"m_param01" : date,
					"m_param02" : senderIsdn,
					"m_param03" : recevierIsdn,
                	"m_param04" : transType,
					"fileTempName" : $scope.reportTempName,
					"fileType" : '.xlsx'
				};

			App.blockUI({
				target : "#reportEtopupTransaction",
				boxed : true,
				message : 'loading...'
			});

			reportEtopupTransaction.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
				if (result.status == '0' && result.status != 'undefined') {
					App.unblockUI("#reportEtopupTransaction");
					bootbox.alert($translate.instant('vnm.messages.validate.report.' + result.messages));
				} else {
					App.unblockUI("#reportEtopupTransaction");

					download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));

				}
			});
		}
	}

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