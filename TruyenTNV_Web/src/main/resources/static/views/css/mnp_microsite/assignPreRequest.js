app_vnm.factory('categoryCosFac', function($http, $translate) {
	return {
		listPreRequest : function(data, callback) {
			var url = eim_url + "/bs/staff/listPreoder";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		assignStaff : function(data, callback) {
			var url = eim_url + "/bs/staff/assignStaff";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

var NUMBER_TYPE_PREPAID = "Prepaid";
var NUMBER_TYPE_POSTPAID = "Postpaid";

var EMTPY_VALUE_ERROR_CODE = 505;
var MNP_CATEGORY_COS_ITEM_EXIST = 90037;
var SELECT_NONE_INDEX = -1;
var indexSelect = -1;
var IS_ACTION = "0";

app_vnm.controller('ctrl-preRequest', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,categoryCosFac) {
	
	$scope.model = {};
	$scope.assignStatusType  = [
    	{ 'Id': '', 'Title': '-Chọn-' },
    	{ 'Id': '1', 'Title': 'Chưa giao' },
    	{ 'Id': '2', 'Title': 'Đã giao' }
    ];
	$scope.model.statusAssSearch = "";
	$scope.listPreOrder = [];
    getListProvince =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceProvince";
		 $http.get(url).success(function (data){
			 for(var i =0;i<data.length; i++){
				 data[i].nameStr = data[i].code;
			 }
			 
			 var obj = {};
			 obj.proId = ''
			 obj.provinceName = '-Chọn-';
			 data.splice(0,0,obj);
			 $scope.listProvince = data;
			 $scope.model.provinceSearch = "";
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetListStaff =  function () {
		var url =eim_url+"/bs/staff/listStaff";
		$http.get(url).success(function (data){
			 for(var i =0;i<data.length; i++){
				 data[i].nameStr = data[i].code;
			 }
			 var obj = {};
			 obj.code = ''
			 obj.name = 'Chọn-';
			 data.splice(0,0,obj);
			 $scope.listStaff = data;
			 $scope.model.assSearch = "";
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetListStaffLocation =  function (item) {
		var url =eim_url+"/bs/staff/listStaffLocation";
		$http.put(url, item).success(function (data){
			 for(var i =0;i<data.length; i++){
				 data[i].nameStr = data[i].code;
			 }
			 
			 var obj = {};
			 obj.code = ''
			 obj.name = 'Chọn-';
			 data.splice(0,0,obj);
			 $scope.listStaffLocation = data;
			 $scope.model.assignStaff = "";
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDistrictByProvince =  function (provId) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
			var obj = {};
			obj.disId = ''
			obj.districtName = '-Chọn-';
			data.splice(0,0,obj);
			$scope.DistrictSource = data;
			closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    
    $scope.onProvinceChange = function(){
    	if (!angular.isDefined($scope.model.provinceSearch) || $scope.model.provinceSearch == "") {
    		$scope.model.districtSearch = "";
    		$scope.DistrictSource = [];
    	} else if ($scope.model.provinceSearch != ""){
    		getListDistrictByProvince($scope.model.provinceSearch);
    		$scope.model.districtSearch = "";
    	}
    }
    


    $scope.onSearch  = function(){
    	var dataSearch = {
    			"isdn":StringUtilNVL($scope.model.isdnSearch),
    			"province":StringUtilNVL($scope.model.provinceSearch),
    			"distinct":StringUtilNVL($scope.model.districtSearch),
    			"ass":StringUtilNVL($scope.model.assSearch),
    			"statusAss":StringUtilNVL($scope.model.statusAssSearch),
    	};
    	if ($scope.checkNumber() == "1") {
    		bootbox.alert($translate.instant('vnm.staff.mess.search.listPreOrder.fail1'));
    	} else if ($scope.checkNumber() == "2") {
    		bootbox.alert($translate.instant('vnm.staff.mess.search.listPreOrder.fail2'));
    	} else {
    		if ($scope.validate()) {
    			categoryCosFac.listPreRequest(dataSearch, function(result) {
        			if(result.status == '0' && result.status != 'undefined'){
        				App.unblockUI("#contentMain");
        				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
        			}else {
        				
        				$scope.listPreOrder = result;
        				if (result.length > 0) {
        					$scope.tableParamsListPreOrder = new NgTableParams({}, {
        						dataset : $scope.listPreOrder
        						
        					});
        					App.unblockUI("#contentMain");
        				}else{
        					$scope.tableParamsListPreOrder = new NgTableParams({}, {
        						dataset : $scope.listPreOrder
        					});
        					App.unblockUI("#contentMain");
        					if (IS_ACTION == "0") {
        						bootbox.alert($translate.instant('vnm.staff.mess.search.listPreOrder.nodata'));
        					}
    						IS_ACTION = "0";
    						
        				}
        				$scope.listPreOrderToAdd = [];
						$scope.model.checkboxListPreOrderItem = false;
        			}
        		});
    		}
    	} 
    	
    }
    
    $scope.listPreOrderToAdd = [];
	$scope.selectOrRemovePreOrderItem = function(item) {
		var isHeaderGoodItem = $scope.isAllRowChecked($scope.listPreOrder);
		if (isHeaderGoodItem) {
			$scope.model.checkboxListPreOrderItem = true;
			$scope.listPreOrderToAdd = [];
			for(var i = 0; i < $scope.listPreOrder.length; i++) {
				$scope.listPreOrderToAdd.push($scope.listPreOrder[i]);
			}
			getListGetListStaffLocation(item);
		} else {
			$scope.model.checkboxListPreOrderItem = false;
			if(item.typeCheckBox == true) {
				if ($scope.listPreOrderToAdd.length == 0) {
					$scope.listPreOrderToAdd.push(item);
					getListGetListStaffLocation(item);
				} else {
					if (item.province != $scope.listPreOrderToAdd[0].province) {
						bootbox.alert("Các pre-order không cùng 1 tỉnh/thành phố. Hãy chọn các pre-order cùng tỉnh/thành phố để thực hiện giao việc!");
						item.typeCheckBox = false;
						return false;
					} else {
						$scope.listPreOrderToAdd.push(item);
					}
				}
				
			} else {
				$scope.listPreOrderToAdd.pop(item);
				if ($scope.listPreOrderToAdd.length == 0) {
					$scope.listStaffLocation = [];
					$scope.model.assignStaff = "";
				}
				$scope.model.checkboxListPreOrderItem = false;
			}
		}
	}
	
	$scope.checkAllPreOrders = function(){
		if (!$scope.checkDifferentProvince()) {
			bootbox.alert("Các pre-order không cùng 1 tỉnh/thành phố. Hãy chọn các pre-order cùng tỉnh/thành phố để thực hiện giao việc!");
			$scope.model.checkboxListPreOrderItem = false;
			return false;
		}else {
			angular.forEach($scope.listPreOrder, function(item) {
				item.typeCheckBox = $scope.model.checkboxListPreOrderItem;
			})
			if ($scope.isAllRowChecked($scope.listPreOrder)) {
				if ($scope.listPreOrderToAdd.length == 0) {
					$scope.listPreOrderToAdd = $scope.listPreOrder;
				}else {
					$scope.listPreOrderToAdd = [];
					$scope.listPreOrderToAdd = $scope.listPreOrder;
				}
				getListGetListStaffLocation($scope.listPreOrder[0]);
			}else {
				$scope.listPreOrderToAdd.pop($scope.listPreOrder);
			}
		}
		
	}
	
	$scope.isAllRowChecked = function(listDataTable){
		var resultCheck = false;
		
		if(listDataTable.length == 0){
			return false;
		}
		var countRowCheck = 0;
		for(var i =0; i<listDataTable.length; i++){
			if(listDataTable[i].typeCheckBox == true){
				countRowCheck++;
			}
		}
		
		if(countRowCheck == listDataTable.length){
			resultCheck = true;
		}
		return resultCheck;
	}
    
	$scope.onAssignStaff = function () {
		overLoading("Loading...");
		var staffCode = $scope.model.assignStaff;
		if (staffCode == "") {
			bootbox.alert("Bạn phải chọn nhân viên để giao việc!");
		} else {
			if ($scope.listPreOrderToAdd.length == 0) {
				bootbox.alert("Bạn phải chọn pre-order để giao việc!");
			} else {
				for(var i = 0; i < $scope.listPreOrderToAdd.length; i++) {
					$scope.listPreOrderToAdd[i].newAss = staffCode;
				}
				categoryCosFac.assignStaff($scope.listPreOrderToAdd, function(result) {
	    			if(result.status == '0' && result.status != 'undefined'){
	    				App.unblockUI("#contentMain");
	    				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
	    			}else {
	    				bootbox.alert('Giao việc thành công');
	    				$scope.model.checkboxListPreOrderItem = false;
	    				$scope.listPreOrderToAdd = [];
	    				$scope.listStaffLocation = [];
	    				$scope.model.assignStaff = "";
	    				IS_ACTION = "1";
	    				$scope.onSearch();
	    			}
	    			closeOverLay();
	    		});
			}
			
		}
	}
	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
 
  	$scope.checkDifferentProvince = function() {
  		var province = $scope.listPreOrder[0].province;
  		for(var i = 1; i < $scope.listPreOrder.length; i++) {
  			if(province != $scope.listPreOrder[i].province){
  				return false;
  			}
  		}
  		return true;
  	}
    $scope.validate = function() {
    	var isdn = $scope.model.isdnSearch;
    	if ( $scope.model.isdnSearch != undefined && isdn != "") {
    		if(isdn.length > 20 ) {
        		bootbox.alert('Số thuê bao có độ dài không quá 20 ký tự!');
        		return false;
        	}
        	if(!typeof isdn == 'number') {
        		bootbox.alert('Số thuê bao phải gồm các ký tự số!');
        		return false;
        	}
    	}
    	
    	return true;
    }
  	
    
    
    $scope.checkNumber = function() {
		var tmp = 0;
		if (!angular.isDefined($scope.model.isdnSearch) || $scope.model.isdnSearch == "") {
			if (!angular.isDefined($scope.model.assSearch) || $scope.model.assSearch == "") {
				if (!angular.isDefined($scope.model.provinceSearch) || $scope.model.provinceSearch == "") {
					if (!angular.isDefined($scope.model.assSearch) || $scope.model.assSearch == "") {
						if (!angular.isDefined($scope.model.provinceSearch) || $scope.model.provinceSearch == "") {
							if (!angular.isDefined($scope.model.statusAssSearch) || $scope.model.statusAssSearch == "") {
								tmp = "2";
							} else {
								tmp = "1";
							}
						}
					}
				}
			}
		}
		return tmp;
	}

    
//    getListGetPackageType();
//	$scope.onSearch();
    getListProvince();
    getListGetListStaff(0);
	 $.validator.addMethod("EmptyValue", function (value, element) {
	        if (value == undefined || value=="") return false;
	        if($.trim(value)=="") return false;
	        return true;
	 }, "");
	 
	 $.validator.addMethod("maxlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght >  options) return false;
		 return true;
	 }, "");
	 
	$.validator.addMethod("minlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(valueLenght<options) return false;
		 }
		 return true;
	 }, "");
	
	var idAttachMentVal = null;
    var idAttachMentTypeInput = null;

	var initialize = function () {
	}

	initialize();

	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;

	// BEGIN validate input
	
	
	
});

function valid_numbers(e) {
    var key = e.keyCode;
    if  (key >=48 && key <= 57)
            return true; 
     else return false;
}

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

