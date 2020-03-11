app_vnm.factory('trbill', function($http, $translate) {
	return {}
});

app_vnm.controller('ctrl-formSaleTransaction', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,trbill) {
	$scope.model = {};
	
	$scope.model.searchCustType = null;
	
	$scope.listPanelCustType = [ {
		'Code' : '1',
		'Name' : 'Giao dịch bán lẻ VN Mobile'
	}, {
		'Code' : '6',
		'Name' : 'Giao dịch bán lẻ H Mobile'
	} ];
	
	$scope.model.searchCustomer = 'Giao dịch bán lẻ VN Mobile';
	$scope.model.searchCompany = "";
	$scope.model.searchTaxNo = "";
	$scope.model.searchAccount = "";
	$scope.model.searchAddress = "";

	
	$('#example').DataTable({
		"scrollY": 180,
        "scrollX": true,
        "paging": false,
        "bInfo" : false
	});
});


function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}


