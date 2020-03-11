app_vnm.factory('ctk_viewDeliverOrder', function($http, $translate) {
	return {
		
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/reportViewDeliverOrder/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function (callback)
			{
				App.unblockUI("#viewDeliverOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		
		getDO: function(shopCode, soCode, status, doCode, fromDate, toDate, productCode, callback)
		{
			var url = eim_url + '/bs/ProductOrder/getDO?shopCode=' + shopCode
					+ '&soCode=' + soCode + '&status=' + status
					+ '&doCode=' + doCode + '&toDate=' + toDate + '&fromDate='
					+ fromDate+ '&productCode=' + productCode ;
			$http.get(url,).success(callback).error(function (callback)
			{
				App.unblockUI("#viewDeliverOrderContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			}); 
		}
	}
});

app_vnm.controller('ctrl-viewDeliverOrder', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage, ctk_viewDeliverOrder) {
	
	$scope.model = {};
	$scope.itemSelected = [];
	var _do = [];
	var _dod = [];
	
	var selectedDO = {};
	$scope.status = {};
	
	
	$scope.exportXLSXfile = function(item) {
		
		var ReportInput = {
				"m_param01" : item.doCode,
				"fileTempName" : 'DOtemplate',
				"fileType" : '.xlsx'
			};

			App.blockUI({
				target : "#viewDeliverOrderContent",
				boxed : true,
				message : 'loading...'
			});

			ctk_viewDeliverOrder.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
				if (result.status == '0' && result.status != 'undefined') {
					App.unblockUI("#viewDeliverOrderContent");
					bootbox.alert($translate.instant('vnm.messages.validate.report.' + result.messages));
				} else {
					App.unblockUI("#viewDeliverOrderContent");
					download(new Blob([ result ]) , header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				}
			});
	}
	
	
	$scope.getDO = function() {
		
		_do = [];
		_dod = [];
		
		$scope.detailDO = new NgTableParams({}, {
			dataset : _dod
		});

        $scope.tableParams = new NgTableParams({}, {
            dataset : _do
        });

        $scope.model.totalQuantity = 0;
        $scope.model.totalWeight = 0;
		
		var brandedShop = '';
		var soid = '';
		var status = '999';
		var todate = '';
		var fromDate = '';
		var doid = '';
		var productCode = '';
		
		if(angular.isDefined($scope.model.fromDate) && $scope.model.fromDate !== null && $scope.model.fromDate.length > 6)
			fromDate = $filter('date')(new Date(parseInt($scope.model.fromDate.substr(6))),'yyyy-MM-dd');
		
		if(angular.isDefined($scope.model.todate) && $scope.model.todate !== null && $scope.model.todate.length > 6)
			todate = $filter('date')(new Date(parseInt($scope.model.todate.substr(6))),'yyyy-MM-dd');

        if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
            if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
                bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc!");
                return;
            } else {
                if(angular.isDefined($scope.model.brandedShop))
                    brandedShop = $scope.model.brandedShop;

                if(angular.isDefined($scope.model.soid))
                    soid = $scope.model.soid;

                if(angular.isDefined($scope.model.status))
                    status = $scope.model.status;

                if(angular.isDefined($scope.model.doid))
                    doid = $scope.model.doid;

                if(angular.isDefined($scope.model.productCode))
                    productCode = $scope.model.productCode;

                App.blockUI({
                    target : "#viewDeliverOrderContent",
                    boxed : true,
                    message : 'loading...'
                });

                ctk_viewDeliverOrder
                    .getDO(brandedShop,
                        soid,
                        status,
                        doid,
                        fromDate,
                        todate,
                        productCode,
                        function(result)
                        {
                            _do = result;
                            $scope.tableParams = new NgTableParams({}, {dataset: _do});

                            if ( _do.length <= 0 ){
                                bootbox.alert('Không tìm thấy dữ liệu với điều kiện đã chọn!');
							}

                            App.unblockUI("#viewDeliverOrderContent");

                        });
			}
        } else {
            bootbox.alert('Vui lòng nhập từ ngày và đến ngày để tìm kiếm!');
		}
	}

	
// $scope.model.status = {'Id' : '0', 'Title' : 'Chờ xác nhận'};
	$scope.listStatus = [  {
		'Id' : '999',
		'Title' : 'Tất cả'
	}, {
		'Id' : '0',
		'Title' : 'Chưa nhập'
	}, {
		'Id' : '1',
		'Title' : 'Đã nhập'
	}];
	
	$scope.showDetail = function(item, index){
		
		$scope.itemSelected = item;
		selectedDO = item;	
		_dod = item.doDetails;	
		
		$scope.model.totalQuantity=item.totalQuantity;
		$scope.model.totalWeight=item.weight;
		
		$scope.detailDO = new NgTableParams({}, {
			dataset : _dod
		});
	}
	
	function showAlert(idModal, message)
	{
// $scope.model.errorsms = message;
// $('#'+idModal).modal('show');
		bootbox.alert(message);
	}

});

function StringUtilNVL(val)
{
	 if(val==undefined || val == null) return "";
	 return $.trim(val);
}
function StringUtilNVLWithDefault(val,defaultValue)
{
	 if(val =='' || val==undefined || val == null) return defaultValue;
	 return $.trim(val);
}
