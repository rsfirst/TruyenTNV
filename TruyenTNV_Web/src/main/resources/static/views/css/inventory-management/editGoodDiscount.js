app_vnm.factory('ctk_editGoodDiscount', function($http, $translate) {
	return {

		init : function(shopCode, shopId, callback) {
			var url = eim_url + "/bs/ProductOrder/init?shopCode="+shopCode+"&shopId="+shopId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#editGoodDiscountContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},

		getDiscountInfo : function(discountId, goodCode, callback) {
			var url = eim_url + "/bs/ProductOrder/getDiscountInfo?goodCode="+goodCode+"&discountId="+discountId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#editGoodDiscountContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		
		saveGoodDiscount : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/saveGoodDiscount";
			$http.put(url, data).success(callback).error(function (callback)
			{
				App.unblockUI("#discountManagerContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			})
		},
	}
});


app_vnm.controller('ctrl-editGoodDiscount', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $localStorage, NgTableParams, ctk_editGoodDiscount) 
{
	
							
    var discountId = $location.search().discountId;
    var goodCode = $location.search().goodCode;
    var goodDiscountInfo = {};
    
	$scope.model = {startDate:getNow_ddMMyy()};
	$scope.$watch('date', function (newValue) {
	    $scope.model.fromDate = $filter('date')(newValue, 'yyyy-MM-dd'); 
	});	
	
	App.blockUI({
		target : "#editGoodDiscountContent",
		boxed : true,
		message : 'loading...'
	});		
	
	ctk_editGoodDiscount.init($localStorage.clientContext.shop.shopCode, $localStorage.clientContext.shop.shopId, function(result) {
							
		$scope.listOrderType = result.orderType;
	});
	
	ctk_editGoodDiscount.getDiscountInfo(discountId, goodCode, function(result) 
	{
			$scope.model.poType = result.order_type;
			if(result.startDate !== null)
				$scope.model.startDate = result.startDate.split("-").reverse().join("/");
			if(result.endDate !== null)
				$scope.model.endDate = result.endDate.split("-").reverse().join("/");
			$scope.model.goodCode = result.goodCode;
			$scope.model.fromQuantity = result.fromQuantity;
			$scope.model.toQuantity = result.toQuantity;
			$scope.model.discount = result.discountPercent;
	});
	
	App.unblockUI("#editGoodDiscountContent");
	
	function showAlert(idModal, message)
	{
		if(message === 'EDIT-0000')
		{
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.0000');
			bootbox.alert({ message: mess, callback: function(){ 
				$window.location.href = '/discountManager'; 
			}});	
		}
		else
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));
	}		

	$scope.saveDiscount = function()
	{
//		alert('addDiscount');
		// valid null
		// loai PO, goodCode, from quantity //chiet khau
		
		if($scope.model.poType === undefined || $scope.model.poType === '')
		{
			showAlert("",'DSC-0001'); // nhap PO type
		}
		else if($scope.model.goodCode === undefined || $scope.model.goodCode === '')
		{
			showAlert("",'DSC-0002'); // nhap goodCode
		}
		else if($scope.model.discount === undefined || $scope.model.discount === '')
		{
			showAlert("",'DSC-0003'); // nhap discount
		}
		else if(isNaN($scope.model.discount) || !angular.isNumber(+$scope.model.discount) || $scope.model.discount < 0)
		{
			showAlert("",'DSC-0004'); // nhap discount
		}
		else
		{
			var endate = null;
			var startdate = null;
			if($scope.model.endDate !== undefined)
			{
				try 
				{
					if($scope.model.endDate.indexOf('Date') > -1)
					{
						endate = $filter('date')(new Date(parseInt($scope.model.endDate.substr(6))),'yyyy-MM-dd');
					}
					else
					{
						endate = $scope.model.endDate.split("/").reverse().join("-");
					}
				}
				catch(err) 
				{	
				}
			}
			
			if($scope.model.startDate !== undefined)
			{
				try 
				{
					startdate = $filter('date')(new Date(parseInt($scope.model.startDate.substr(6))),'yyyy-MM-dd');
				}
				catch(err) 
				{
					startdate = getNow_yyyyMMdd();
				}
			}
			
			if(endate === null && $scope.model.endDate!== null && $scope.model.endDate!== undefined)
			{
				alert($scope.model.endDate);
				showAlert("",'DSC-0006');
			}
			else
			{
				var goodDiscount = {
						"discountId": discountId,
						"goodCode": $scope.model.goodCode,
						"order_type": $scope.model.poType,
						"fromQuantity": $scope.model.fromQuantity,
						"toQuantity": $scope.model.toQuantity,
						"discountPercent": $scope.model.discount,
						"startDate": null,
						"endDate": endate,
						"description": '',
						"createDate": null,
						"createBy": '',
						"status": 1,
						"modify_by" : '',
						"modify_date" : null,
						"disable_by" : '',
						"disable_date" : null						
					}
					
					App.blockUI({
						target : "#editGoodDiscountContent",
						boxed : true,
						message : 'loading...'
					});		
					
					ctk_editGoodDiscount.saveGoodDiscount(goodDiscount, function(result) {		
						App.unblockUI("#editGoodDiscountContent");
						if(result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)	
						{
							showAlert("",'EDIT-0000');
						}
						else
						{
							showAlert("",result.response_code);
						}
					});
			}
		}
	}	

});

// get time ddMMyy
function getNow_ddMMyy(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; // January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = dd + '/' + mm + '/' + yyyy;
	
	return today;
}

// get time ddMMyy
function getNow_yyyyMMdd(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; // January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = yyyy + '-' + mm + '-' + dd;
	
	return today;
}
