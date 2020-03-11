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
        $('#example').DataTable({
        	"columns": [
        	    { "width": "15%" },
        	    { "width": "15%" },
        	    { "width": "17%" },
        	    { "width": "15%" },
        	    { "width": "18%" },
        	    { "width": "30%" }
        	  ],
            "scrollY": 130,
            "scrollX": true,
            "oLanguage": {
                "sInfo": TOTAL_RECORD + "_TOTAL_",
                "sEmptyTable": "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
                "sInfoEmpty": "",
                "sInfoFiltered": "",
                "oPaginate": {
                    "sFirst": FIRST_PAGE,
                    "sLast": LAST_PAGE,
                    "sNext": NEXT_PAGE,
                    "sPrevious": PREV_PAGE,
                }
            },
            fixedHeader: true
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