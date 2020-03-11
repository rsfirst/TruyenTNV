app_vnm.factory('trbill', function($http, $translate) {
    return {}
});

app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
    NgTableParams, $localStorage, trbill) {

    $scope.showModalStockView = function() {
        $('#tableItem').DataTable({
            destroy: true,
        });

        $('#tableQuantity').DataTable({
            destroy: true,
        });

        $scope.showModalFunction("modalStockView");
    }

    $scope.showModalFunction = function(idModal) {
        $('#' + idModal).modal('show');
    }

    $scope.btnAdjustOnclick = function(item) {
        $scope.selectedShipment = item;

    }

    function initForm() {
    	 $('#tableTransInfo').DataTable({
    		 
    	 });
    	 
        $('#idTableListItem').DataTable({
        	"columns": [
        	    { "width": "20%" },
        	    { "width": "20%" },
        	    { "width": "20%" },
        	    { "width": "20%" },
        	    { "width": "30%" },
        	  ],
            "scrollY": 130,
            "scrollX": true
        });
    }

    initForm();

});


function StringUtilNVL(val) {
    if (val == undefined || val == null) return "";
    return $.trim(val);
}

function createTimeStamp() {
    var theMoment = moment();
    var millisTimeStamp = theMoment.valueOf();
    return millisTimeStamp;
}