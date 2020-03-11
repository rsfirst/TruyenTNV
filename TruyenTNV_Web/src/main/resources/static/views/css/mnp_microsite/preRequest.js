app_vnm.factory('categoryCosFac', function($http, $translate) {
	return {
		listCosReject : function(data, callback) {
			var url = eim_url + "/bs/preRequest/listPreRequest";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createPreRequest : function(data, callback) {
			var url = eim_url + "/bs/preRequest/createPreRequest";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		updateCosReject : function(data, callback) {
			var url = eim_url + "/bs/preRequest/updatePreRequest";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		deletePreRequest : function(data, callback) {
			var url = eim_url + "/bs/preRequest/deletePreRequest";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		checkFinalPreRequest : function(data, callback) {
			var url = eim_url + "/bs/preRequest/checkFinal";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		checkTranStatusPreRequest : function(data, callback) {
			var url = eim_url + "/bs/preRequest/checkTranStatus";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		updateStaffPreRequest : function(data, callback) {
			var url = eim_url + "/bs/preRequest/updateStaffPre";
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
var MIN_YEAR_BIRTHDAY = -14;
var MAX_YEAR_BIRTHDAY = -200;
app_vnm.controller('ctrl-preRequest', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,categoryCosFac) {
	
	$scope.model = {};
	$scope.model.isNotEdit = true;
	$scope.model.isAdd = false;
	$scope.model.showEdit = true;
	$scope.model.isNotClick = true;
	$scope.model.isNoEditChannel = true;
	$scope.model.itemSelected = {};
	$scope.model.deliverIns = "1";
	$scope.NumberTypeSourceOrderStatus  = [
    	{ 'Id': '', 'Title': '-Chọn-' },
    	{ 'Id': 'Prepaid', 'Title': 'Trả trước' },
    	{ 'Id': 'Postpaid', 'Title': 'Trả sau' }
    ];
	$scope.model.subTypeSearch = "";
	$scope.model.subTypeIns = "";
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

    getListGetPackageType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourcePackage";
		 $http.get(url).success(function (data){
			 var obj = {};
			 obj.value = ''
			 obj.name = 'Tất cả';
			 data.splice(0,0,obj);
			 
			 $scope.PackageTypeSource = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
	
    getListGetListPackagePostpaid =  function () {
		var url =eim_url+"/bs/SourcePackagePostpaid";
		 $http.get(url).success(function (data){
			 var obj = {};
			 obj.value = ''
			 obj.name = 'Tất cả';
			 data.splice(0,0,obj);
			 
			 $scope.PackageTypeSource = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    
    
    
    
    $scope.onNumberTypeChange = function(){
    	console.log("model.numberType = "+$scope.model.numberType);
    	$scope.PackageTypeSource = [];
    	$scope.model.packageModel = null;
    	
    	if( $scope.model.numberType== NUMBER_TYPE_PREPAID){
    		getListGetPackageType();
    	}else if( $scope.model.numberType == NUMBER_TYPE_POSTPAID){
    		getListGetListPackagePostpaid();
    	}
    }
    
    
    
    function setListCosRejectOutput (listCosReject){
    	for(var i = 0; i < listCosReject.length; i++){
    		if(listCosReject[i].msisdnType == '1'){
    			listCosReject[i].msisdnTypeStr = "Trả trước";
    		}
    		if(listCosReject[i].msisdnType == '2'){
    			listCosReject[i].msisdnTypeStr = "Trả sau";
    		}
    	}
    	return listCosReject;
    }
    
    getListStatusType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/status/list_spec_num_group_order_status";
		 $http.get(url).success(function (data){
			 for(var i =0;i<data.length; i++){
				 data[i].nameStr = data[i].code;
			 }
			 var obj = {};
			 obj.code = ''
			 obj.name = '-Chọn-';
			 data.splice(0,0,obj);
			 $scope.listStatusType = data;
			 $scope.model.statusSearch = "";
			 $scope.model.statusIns = "1";
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    } 
    
    getListChannelType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/channel/list_spec_num_group_order_channel";
		 $http.get(url).success(function (data){
			 for(var i =0;i<data.length; i++){
				 data[i].nameStr = data[i].code;
			 }
			 
			 var obj = {};
			 obj.code = ''
			 obj.name = '-Chọn-';
			 data.splice(0,0,obj);
			 $scope.listChannelType = data;
			 $scope.model.channelSearch = "";
			 $scope.model.channelIns = "";
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListProvince =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceProvince";
		 $http.get(url).success(function (data){
			 for(var i =0;i<data.length; i++){
				 data[i].nameStr = data[i].code;
			 }
			 
			 var obj = {};
			 obj.code = ''
			 obj.nameStr = '';
			 data.splice(0,0,obj);
			 $scope.listProvince = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListGetListStaff =  function (status) {
		var url =eim_url+"/bs/staff/listStaff?status=" + status;
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
    getListDistrictByProvince =  function (provId) {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceDistrict?provinceId="+provId;
		 $http.get(url).success(function (data){
				$scope.DistrictSource = data;
//				$scope.model.districtIns = $scope.model.itemSelected.distinct; 
//				$scope.model.districtIns = "";
				closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    getListDocType =  function () {
    	overLoading("Loading...");
		var url =eim_url+"/bs/SourceDocument";
		 $http.get(url).success(function (data){
			 for(var i =0;i<data.length; i++){
				 data[i].nameStr = data[i].code;
			 }
			 
			 var obj = {};
			 obj.code = ''
			 obj.nameStr = '';
			 data.splice(0,0,obj);
			 $scope.listDocType = data;
			 closeOverLay();
		 }).error(function (response){
			 closeOverLay();
		 });
    }
    
    $scope.onProvinceChange = function(){
    	if ($scope.model.provinceSearch == "") {
    		$scope.model.districtIns = "";
    		$scope.DistrictSource = [];
    	} else if ($scope.model.provinceIns != ""){
    		getListDistrictByProvince($scope.model.provinceIns);
    		$scope.model.districtIns = "";
    	}
    }

    $scope.onSearch  = function(){
    	var dataSearch = {
    			"isdn":StringUtilNVL($scope.model.isdnSearch),
    			"subType":StringUtilNVL($scope.model.subTypeSearch),
    			"nameCustomer":StringUtilNVL($scope.model.nameCusSearch),
    			"ass":StringUtilNVL($scope.model.assSearch),
    			"status":StringUtilNVL($scope.model.statusSearch),
    			"channel":StringUtilNVL($scope.model.channelSearch),
    	};   
    	if ($scope.checkNumber()) {	
        	categoryCosFac.listCosReject(dataSearch, function(result) {
    			if(result.status == '0' && result.status != 'undefined'){
    				App.unblockUI("#contentMain");
    				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
    			}else {
    				$scope.listCosReject = [];
    				if (result.length > 0) {
    					$scope.listCosReject = setListCosRejectOutput(result);
    					$scope.tableParamsListCosReject = new NgTableParams({}, {
    						dataset : $scope.listCosReject
    						
    					});
    					IS_ACTION = "0"
    					App.unblockUI("#contentMain");
    					closeOverLay();
    				}else{
    					$scope.tableParamsListCosReject = new NgTableParams({}, {
    						dataset : $scope.listCosReject
    					});
    					App.unblockUI("#contentMain");
    					if (IS_ACTION == "0") {
    						bootbox.alert("Không tìm thấy dữ liệu!");
    					}
						IS_ACTION = "0";
						closeOverLay();
    				}
    			}
    			$scope.resetPreRequestForm();
    			$scope.model.itemSelected = {};
    		});
    	} else {
    		if (IS_ACTION == "0") {
    			bootbox.alert("Bạn phải nhập ít nhất 1 trường!");
    		}
    		IS_ACTION = "0";
    		closeOverLay();
    	}	
    }
    
    $scope.getPreRequestInfo = function(item) {
//    	if (!$scope.model.isNotEdit){
//            return;
//        }
    	$scope.model.itemSelected = item;
    	$scope.model.idIns = item.iD;
    	$scope.model.isdnIns = item.isdn;
    	$scope.model.isAdd = false;
    	if(item.subType =="POSTPAID"){
    		$scope.model.subTypeIns ="2"
    	}else{
    		$scope.model.subTypeIns ="1"
    	}
      
    	$scope.model.subTypeIns = item.subType;
    	$scope.model.nameCusIns = item.nameCustomer;
    	$scope.model.bodIns = item.bod;
    	$scope.model.docTypeIns = item.docType;
    	$scope.model.docNumIns = item.docNum;
    	$scope.model.telNumIns = item.telNum;
    	$scope.model.provinceIns = item.province;
    	getListDistrictByProvince($scope.model.provinceIns);
    	$scope.model.districtIns = item.distinct;    	
    	$scope.model.precinctIns = item.precinct;
    	$scope.model.addressIns = item.address;
    	$scope.model.deliverIns = item.deliver;
    	$scope.model.statusIns = item.status;
    	$scope.model.channelIns = item.channel;
    	$scope.model.noteIns = item.note;
    	$scope.model.assView = item.viewAss;
    	$scope.model.isNoEditChannel = true;
    	$scope.model.isNotClick = false;
    	
    }
    
    $scope.cancelCommit = function(){
    	var messConfirm = "Chưa lưu thông tin pre-order. Bạn có muốn thoát không?";
    	var header = "Lưu thông tin pre-order";
    	bootboxConfirm(header, messConfirm, $scope.resetPreRequestForm, $scope.confirmDeleteKO);
    }
    
    $scope.showInsertPreRequestForm = function() {
    	$scope.model.isNotEdit = false;
    	$scope.model.showEdit = false;
    	$scope.model.isAdd = true;
    	$scope.model.isNoEditChannel = false;
    	
    	$scope.model.itemSelected = {};
    	$scope.model.isdnIns = "";
    	$scope.model.subTypeIns ="";     
    	$scope.model.nameCusIns = "";
    	$scope.model.bodIns = "";
    	$scope.model.docTypeIns = "";
    	$scope.model.docNumIns = "";
    	$scope.model.telNumIns = "";
    	$scope.model.provinceIns = "";
//    	getListDistrictByProvince($scope.model.provinceIns);
    	$scope.model.districtIns = "";    	
    	$scope.model.precinctIns = "";
    	$scope.model.addressIns = "";
    	$scope.model.deliverIns = "1";
    	$scope.model.statusIns = "1";
    	$scope.model.channelIns = "";
    	$scope.model.noteIns = "";
    	$scope.model.assView = "";
    }
    
    $scope.showEditPreRequestForm = function() {
    	$scope.model.isNotEdit = false;
    	$scope.model.showEdit = false;
    	$scope.model.isAdd = false;
    	if ($scope.model.itemSelected.channel == '4') {
    		$scope.model.isNoEditChannel = true;
    	} else {
    		$scope.model.isNoEditChannel = false;
    	}
    }
    var dataPreRequest = "";
    $scope.commitAccept  = function(){
    	dataPreRequest = "";
    	if (!$scope.validatePreRequest()) {
    		return;
    	}
    	overLoading("Loading...");
    	dataPreRequest = {
    			"iD":StringUtilNVL($scope.model.idIns),
    			"isdn":StringUtilNVL($scope.model.isdnIns),
    			"subType":StringUtilNVL($scope.model.subTypeIns),
    			"nameCustomer":StringUtilNVL($scope.model.nameCusIns),
    			"bod":$("#bodIns").val(),
    			"docType":StringUtilNVL($scope.model.docTypeIns),
    			"docNum":StringUtilNVL($scope.model.docNumIns),
    			"telNum":StringUtilNVL($scope.model.telNumIns),
    			"province":StringUtilNVL($scope.model.provinceIns),
    			"distinct":StringUtilNVL($scope.model.districtIns),
    			"precinct":StringUtilNVL($scope.model.precinctIns),
    			"address":StringUtilNVL($scope.model.addressIns),
    			"deliver":StringUtilNVL($scope.model.deliverIns),
    			"status":StringUtilNVL($scope.model.statusIns),
    			"channel":StringUtilNVL($scope.model.channelIns),
    			"note":StringUtilNVL($scope.model.noteIns),
    	};
    	if ($scope.model.itemSelected.channel != "4" && $scope.model.channelIns == "4") {
    		bootbox.alert("Không thể lưu pre-order với kênh là Microsite. Bạn hãy chọn kênh khác!");
    		closeOverLay();
    		return;
    	} else {
    		categoryCosFac.checkFinalPreRequest(dataPreRequest, function(result){
        		if ($scope.model.isAdd) {
        			if (result.status == '0') {
        				$scope.onCreateMnpPreRequest();
        			} else {
        				$scope.createPreRequestOK();
        			}
            	} else {
            		if (result.status == '0') {
        				$scope.onUpdateMnpPreRequest();
        			} else {
        				$scope.updatePreRequestOK();
        			} 
            	}
    		});
    	}
    }
    
    $scope.onCreateMnpPreRequest = function() {
    	overLoading("Loading...");
    	var messConfirm = "SĐT chuyển mạng đã tồn tại với trạng thái Final. Bạn có muốn tạo mới tiếp không?";
    	var header = "Tạo mới pre-order";
    	bootboxConfirm(header, messConfirm, $scope.createPreRequestOK, $scope.confirmDeleteKO);
    }
    
    $scope.onUpdateMnpPreRequest = function() {
    	overLoading("Loading...");
    	var messConfirm = "SĐT chuyển mạng đã tồn tại với trạng thái Final. Bạn có muốn sửa tiếp không??";
    	var header = "Sửa pre-order";
    	bootboxConfirm(header, messConfirm, $scope.updatePreRequestOK, $scope.confirmDeleteKO);
    }
    
    $scope.onDeleteMnpPreRequest = function() {
    	overLoading("Loading...");
    	var messConfirm = "Bạn có muốn xóa pre-order không?";
    	var header = "Xóa pre-order";
    	bootboxConfirm(header, messConfirm, $scope.deletePreRequestOK, $scope.confirmDeleteKO);
    }
    
    $scope.createPreRequestOK = function (){
    	categoryCosFac.createPreRequest(dataPreRequest, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert("Xảy ra lỗi trong quá trình thêm mới thông tin! Lỗi: " + result.messages);
			} else {
				
				bootbox.alert($translate.instant('vnm.preRequest.mess.insert.success'));
				IS_ACTION = "1";
				$scope.resetPreRequestForm();
			}
			App.unblockUI("#contentMain");
			closeOverLay();
		});
        
    }
    
    $scope.deletePreRequestOK = function() {
    	categoryCosFac.checkTranStatusPreRequest($scope.model.idIns, function(result) {
    		if (result.status == "0") {
    			categoryCosFac.deletePreRequest($scope.model.idIns, function(result) {
    	    		if(result.status == '0' && result.status != 'undefined') {
    	    			bootbox.alert($translate.instant('vnm.preRequest.mess.delete.fail')+ result.messages);
    	    		} else {
    	    			bootbox.alert($translate.instant('vnm.preRequest.mess.delete.success'));
    	    			IS_ACTION = "1";
    	    			$scope.resetPreRequestForm();
    	    		}
    	    		App.unblockUI("#contentMain");
    				closeOverLay();
    				
    	    	});
    		} else {
    			bootbox.alert("Số thuê bao này đã có giao dịch chuyển mạng. Không được phép xóa!");
    			closeOverLay();
    		}
    	});
    	
    }
    
    $scope.updatePreRequestOK = function (){
    	categoryCosFac.updateCosReject(dataPreRequest, function(result) {
    		if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert("Xảy ra lỗi trong quá trình cập nhật thông tin! Lỗi: " + result.messages);
			} else {
				IS_ACTION = "1";
				bootbox.alert($translate.instant('vnm.preRequest.mess.update.success'));
				$scope.resetPreRequestForm();
			}
			App.unblockUI("#contentMain");
			closeOverLay();
    	});
        
    }
    
    $scope.confirmDeleteKO = function(){
  		closeOverLay();
  	}
    
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.confirmDeleteCos = function(item){
    	$scope.model.cosDelete = item;
    	var messConfirm = $translate.instant('vnm.category_cos.mess.confirm.delete.cos');
    	var header = $translate.instant('vnm.category_cos.page.title');
    	bootboxConfirm(header, messConfirm, $scope.removeItemRejectCos, $scope.confirmKO);
    }
    
    $scope.removeItemRejectCos  = function(){
    	overLoading("Loading...");
    	var dataDelete = {
    			"id": StringUtilNVL($scope.model.cosDelete.id),
				"cos" : StringUtilNVL($scope.model.cosDelete.cos),
				"cosName" : StringUtilNVL($scope.model.cosDelete.cosName),
    	};
    	
    	categoryCosFac.deleteCosReject(dataDelete, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.category_cos.mess.delete.cos.fail')+ result.messages);
			}else {
				bootbox.alert($translate.instant('vnm.category_cos.mess.delete.cos.success'));
//				$scope.model.packageModel = null;
				$scope.resetPreRequestForm();
			}
			closeOverLay();
		});
    }
    
    $scope.resetPreRequestForm = function () {
    	$scope.model.isNotEdit = true;
        $scope.model.showEdit = true;
        $scope.model.isAdd = false;
        $scope.model.isNotClick = true;
        $scope.model.isNoEditChannel = true;
        
        $scope.model.itemSelected = {};
    	$scope.model.isdnIns = "";
    	$scope.model.subTypeIns ="";     
    	$scope.model.nameCusIns = "";
    	$scope.model.bodIns = "";
    	$scope.model.docTypeIns = "";
    	$scope.model.docNumIns = "";
    	$scope.model.telNumIns = "";
    	$scope.model.provinceIns = "";
    	$scope.model.districtIns = "";    	
    	$scope.model.precinctIns = "";
    	$scope.model.addressIns = "";
    	$scope.model.deliverIns = "1";
    	$scope.model.statusIns = "";
    	$scope.model.channelIns = "";
    	$scope.model.noteIns = "";
    	$scope.model.assView = "";
    	if (IS_ACTION == "1") {
    		$scope.onSearch();
    	}
    	
    }
    
    $scope.validatePreRequest = function() {
    	var dateStr = $("#bodIns").val();
    	var birthDay = moment(dateStr, "DD/MM/YYYY")
    	var minYearBirthday = moment().add(MIN_YEAR_BIRTHDAY, 'years');
        var maxYearBirthday = moment().add(MAX_YEAR_BIRTHDAY, 'years');
    	if ($scope.model.isdnIns == null || $scope.model.isdnIns == undefined) {
    		bootbox.alert($translate.instant('vnm.preRequest.mess.isdn.required'));
    		return false;
    	} else {
    		if ($scope.model.isdnIns.trim() == '') {
    			bootbox.alert($translate.instant('vnm.preRequest.mess.isdn.required'));
        		return false;
    		} else if ($scope.model.isdnIns.trim().length > 20) {
    			bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.isdn'));
    			return false;
    		}
    	}
    	
    	if($scope.model.subTypeIns == undefined || $scope.model.subTypeIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.subType.required'));
    		return 0;
    	}else{
      		if($scope.model.subTypeIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.subType.required'));
    			return false;
    		}
    	}
    	
    	if($scope.model.nameCusIns == undefined || $scope.model.nameCusIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.nameCus.required'));
    		return false;
    	}else{
      		if($scope.model.nameCusIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.nameCus.required'));
    			return false;
    		} else if (countUtf8Bytes($scope.model.nameCusIns.trim()) > 100){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.nameCus'));
    			return false;
    		}
    	}
    	
    	if (!moment(dateStr, 'DD/MM/YYYY',true).isValid()){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.bod.format'));
    		return false;
    	}
    	if((birthDay > minYearBirthday) || (birthDay < maxYearBirthday)){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.bod.maxminage'));
        	return false;
        }
//    	if(bod >= toDay) {
//    		bootbox.alert($translate.instant('vnm.preRequest.mess.bod.validate'));
//    		return false;
//    	}
    	if($scope.model.docTypeIns == undefined || $scope.model.docTypeIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.docTypeIns.required'));
    		return false;
    	}else{
      		if($scope.model.docTypeIns == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.docTypeIns.required'));
    			return false;
    		}
    	}
    	
    	if($scope.model.docNumIns == undefined || $scope.model.docNumIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.docNum.required'));
    		return false;
    	}else{
      		if($scope.model.docNumIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.docNum.required'));
    			return false;
    		} else if (($scope.model.docTypeIns == "01" || $scope.model.docTypeIns == "03") && (countUtf8Bytes($scope.model.docNumIns.trim()) < 8 || countUtf8Bytes($scope.model.docNumIns.trim()) > 15)) {
    			bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.docNumIns01'));
    			return false;
    		} else if ($scope.model.docTypeIns == "06" && (countUtf8Bytes($scope.model.docNumIns.trim()) < 2 || countUtf8Bytes($scope.model.docNumIns.trim()) > 30)) {
    			bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.docNumIns02'));
    			return false;
    		} else if(countUtf8Bytes($scope.model.docNumIns.trim()) > 50) {
    			bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.docNumIns03'));
    			return false;
    		}
    	}
    	
    	if($scope.model.telNumIns == undefined || $scope.model.telNumIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.telNum.required'));
    		return false;
    	}else{
      		if($scope.model.telNumIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.telNum.required'));
    			return false;
    		} else if ($scope.model.telNumIns.trim().length > 20){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.telNumIns'));
    			return false;
    		}
    	}
    	
    	if($scope.model.provinceIns == undefined || $scope.model.provinceIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.province.required'));
    		return false;
    	}else{
      		if($scope.model.provinceIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.province.required'));
    			return false;
    		}
    	}
    	
    	if($scope.model.districtIns == undefined || $scope.model.districtIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.distinct.required'));
    		return false;
    	}else{
      		if($scope.model.districtIns == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.distinct.required'));
    			return false;
    		}
    	}
    	
    	if($scope.model.precinctIns == undefined || $scope.model.precinctIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.precinct.required'));
    		return false;
    	}else{
      		if($scope.model.precinctIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.precinct.required'));
    			return false;
    		} else if (countUtf8Bytes($scope.model.precinctIns.trim()) > 50) {
    			bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.precinct'));
    			return false;
    		}
    	}
    	
    	if($scope.model.addressIns == undefined || $scope.model.addressIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.address.required'));
    		return false;
    	}else{
      		if($scope.model.addressIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.address.required'));
    			return false;
    		}else if(countUtf8Bytes($scope.model.addressIns.trim()) < 5 || countUtf8Bytes($scope.model.addressIns.trim())> 500){
        		bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.addressIns'));
    			return false;
        	} 
    	}
    	
    	if($scope.model.deliverIns == undefined || $scope.model.deliverIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.deliver.required'));
    		return false;
    	}else{
      		if($scope.model.deliverIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.deliver.required'));
    			return false;
    		}
    	}
    	
    	if($scope.model.statusIns == undefined || $scope.model.statusIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.status.required'));
    		return false;
    	}else{
      		if($scope.model.statusIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.status.required'));
    			return false;
    		}
    	}
    	
    	if($scope.model.channelIns == undefined || $scope.model.channelIns == null){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.channel.required'));
    		return false;
    	}else{
      		if($scope.model.channelIns.trim() == ''){
    			bootbox.alert($translate.instant('vnm.preRequest.mess.channel.required'));
    			return false;
    		}
    	}
    	if($scope.model.noteIns != undefined && countUtf8Bytes($scope.model.noteIns.trim()) > 500){
    		bootbox.alert($translate.instant('vnm.preRequest.mess.maxlength.noteIns'));
			return false;
    	}
    	return true;
    }
    
    $scope.checkNumber = function() {
		var tmp = true;
		if (!angular.isDefined($scope.model.isdnSearch) || $scope.model.isdnSearch == "") {
			if (!angular.isDefined($scope.model.subTypeSearch) || $scope.model.subTypeSearch == "") {
				if (!angular.isDefined($scope.model.nameCusSearch) || $scope.model.nameCusSearch == "") {
					if (!angular.isDefined($scope.model.assSearch) || $scope.model.assSearch == "") {
						if (!angular.isDefined($scope.model.channelSearch) || $scope.model.channelSearch == "") {
							if (!angular.isDefined($scope.model.statusSearch) || $scope.model.statusSearch == "") {
								tmp = false;
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
    getListStatusType();
    getListChannelType();
    getListProvince();
    getListDocType();
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

function countUtf8Bytes(s){
    var b = 0, i = 0, c
    for(;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
    return b
}

