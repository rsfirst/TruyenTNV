app_vnm.factory('categoryCosFac', function($http, $translate) {
	return {
		searchStaff : function(data, callback) {
			var url = eim_url + "/bs/satff/searchstafflocation";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		insertStaff : function(data, callback) {
			var url = eim_url + "/bs/satff/insertstafflocation";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		deleteStafflocation : function(data, callback) {
			var url = eim_url + "/bs//satff/deletestafflocation";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	
	}
});
app_vnm.controller('ctrl-preSraffLocation', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,categoryCosFac) {
	
	$scope.model = {};
	$scope.model.isEdit =false;
	$scope.NumberTypeSraffLocation  = [
    	{ 'Id': '1', 'Title': 'Đã giao' },
    	{ 'Id': '0', 'Title': 'Chưa giao' }
    ];
	var SELECT_NONE_INDEX = -1;
	var dataGoodNotIn = [];
	var dataGoodIn = [];
	$scope.stStockSelected = [];
	
	$scope.model.checkboxAdd = {
			checked : false,
			items : {}
		};
	
	$scope.model.typeSraffLocation = $scope.NumberTypeSraffLocation[1].Id;
	/*$scope.model.codeSraffLocation = $scope.NumberTypeSraffLocation[0];*/
	getListStaffLocation =  function () {
			var url =eim_url+"/bs/satff/liststafflocation";
			$http.get(url).success(function (data){
				 for(var i =0;i<data.length; i++){
					 data[i].nameStr = data[i].code;
				 }
				 var obj = {};
				 obj.code = 'Tất cả nhân viên'
				 obj.name = '';
				 data.splice(0,0,obj);
				 $scope.listStaff = data;
				 $scope.model.codeSraffLocation =$scope.listStaff[0].code;
				 closeOverLay();
			 }).error(function (response){
				 closeOverLay();
			 });
	    }
	
	getListProvince =  function () {
		  overLoading("Loading...");
			var url =eim_url+"/bs/SourceProvince";
			 $http.get(url).success(function (data){
				 $scope.ProvinceSource = data;
				/* $scope.model.province=$scope.ProvinceSource;*/
				 closeOverLay();
			 }).error(function (response){
				 closeOverLay();
			 });
	    }
	getListDistrict =  function (provId) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
				$scope.DistrictSource = data;
				$scope.model.district = $scope.DistrictSource[SELECT_NONE_INDEX];
				closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	getListStaffLocation();
	
	getListProvince();
	$scope.confirmKO = function(){
  		closeOverLay();
  	}
	$scope.checkAllAdd = function(){
		angular.forEach(dataGoodNotIn, function(item) {
			item.typeCheckBox = $scope.model.checkboxAdd;
		})
		if ($scope.isAllRowChecked(dataGoodNotIn)) {
			for(var i = 0; i < dataGoodNotIn.length; i++) {
				$scope.stStockSelected.push(dataGoodNotIn[i]);
			}
		}else {
			/*$scope.stStockSelected.pop(dataGoodNotIn);*/
			$scope.stStockSelected=[];
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
	
	$scope.selectOrRemovePreOrderItem = function(item) {
		var isHeaderGoodItem = $scope.isAllRowChecked(dataGoodNotIn);
		if (isHeaderGoodItem) {
			$scope.model.checkboxAdd = true;
			dataGoodNotInToAdd = [];
			for(var i = 0; i < dataGoodNotIn.length; i++) {
				$scope.stStockSelected.push(dataGoodNotIn[i]);
			}
		} else {
			$scope.model.checkboxAdd = false;
			if(item.typeCheckBox == true) {
				$scope.stStockSelected.push(item);
			} else {
				$scope.stStockSelected.pop(item);
			}
		}
	}
	$scope.onProvinceChange = function(){
    	var messageText = "Loading data province";
    	overLoading(messageText);
    	$scope.model.district = "";
    	if($scope.model.province.proId!=""){
    		removeErrorClassElement("idSelectDivProvince");
    		getListDistrict($scope.model.province.proId);
    	}
    }
	 $scope.onNameStasffChange = function(){
		 if($scope.model.codeSraffLocation=="Tất cả nhân viên"){
			 $scope.model.isEdit =false;
			 $scope.model.mnpNameStaff="";
			 return;
		 }
		 $scope.nameStasffChange=$scope.listStaff;
		 for(var i=0;i<$scope.nameStasffChange.length; i ++){
			 if($scope.nameStasffChange[i].code==$scope.model.codeSraffLocation){
				 $scope.model.mnpNameStaff=$scope.nameStasffChange[i].name;
				 $scope.model.isEdit =true;
				 break;
			 }
		 }
	 }
	 $scope.tableParamsListStaff = new NgTableParams({}, {
			dataset : ""
		});
	 var checksearch=true;
	 $scope.onSearchStaff = function(){
		 if($scope.model.codeSraffLocation=="Tất cả nhân viên"){
			 $scope.model.codeSraffLocation="";
		 }
		 var datasearch = {
			 "staff_code" : StringUtilNVL($scope.model.codeSraffLocation),
			 "namestaff" : StringUtilNVL($scope.model.mnpNameStaff),
			 "checkstatus" : StringUtilNVL($scope.model.typeSraffLocation),
		 };
		 categoryCosFac.searchStaff(datasearch, function(result) {
			 $scope.listCosReject = [];
			 if (result.length > 0) {
				 $scope.listCosReject = result;
				 dataGoodNotIn=result;
					$scope.tableParamsListStaff = new NgTableParams({},{
						dataset : $scope.listCosReject
					});
				}else{
					if( checksearch==true){
						bootbox.alert("không có dữ liệu tìm kiếm");
					}
					$scope.tableParamsListStaff = new NgTableParams({},{
						dataset : ""
					});
				}
			 $scope.stStockSelected = [];
			 $scope.model.province="";
			 $scope.model.district="";
			 $scope.model.checkboxAdd=false;
			 checksearch=true;
			 closeOverLay();
		 });
	 }
	 
	 $scope.insertstafflocation = function(){
		 if($scope.stStockSelected.length==0){
			 bootbox.alert(" Bạn chưa chọn nhân viên nhận địa bàn !");
			 closeOverLay();
			 return;
		 }
		 if($scope.model.province==undefined||$scope.model.province==""){
			 bootbox.alert("Trường Tỉnh/TP bắt buộc phải nhập dữ liệu!");
			 closeOverLay();
			 return;
		 }
		 if($scope.model.district==undefined||$scope.model.district==""){
			 bootbox.alert(" Trường Quận/Huyện bắt buộc phải nhập dữ liệu!");
			 closeOverLay();
			 return;
		 }
		 for(var i=0;i<$scope.stStockSelected.length;i++){
			 $scope.stStockSelected[i].province_id=$scope.model.province.proId;
			 $scope.stStockSelected[i].district_id=$scope.model.district.disId;
			 
		 }
		 var datainsert = $scope.stStockSelected;
		 categoryCosFac.insertStaff(datainsert, function(result) {
			 if (result.status == 0) {
				 bootbox.alert("Địa bàn đã được giao cho nhân viên này từ trước !");
				 closeOverLay();
			 }else{
				 bootbox.alert("Giao địa bàn cho nhân viên thành công !");
				 checksearch=false;
				 $scope.onSearchStaff();
				 closeOverLay();
			 }
		 });
	 }
	 $scope.ondeletestafflocation= function(){
			 if($scope.stStockSelected.length==0){
				 bootbox.alert("Bạn chưa chọn nhân viên để có thể xóa !");
				 closeOverLay();
				 return;
			 }
		    	var messConfirm = $translate.instant('Bạn có chắc chắn muốn  xóa ?');
		    	var header = $translate.instant('Phân chia địa bàn cho nhân viên');
		    	bootboxConfirm(header, messConfirm, $scope.removestafflocation,$scope.confirmKO);
	 }
	 $scope.removestafflocation= function(){
		 var datadelete = $scope.stStockSelected;
		 categoryCosFac.deleteStafflocation(datadelete, function(result) {
			 if (result.status == 0) {
				 bootbox.alert("Nhân viên chưa được giao địa bàn !");
				 closeOverLay();
			 }else{
				 bootbox.alert("Xóa địa bàn cho nhân viên thành công !");
				 checksearch=false;
				 $scope.onSearchStaff();
				 closeOverLay();
			 }
		 });
	 }
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

