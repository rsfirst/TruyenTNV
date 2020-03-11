app_vnm.factory('categoryCosFac', function($http, $translate) {
	return {
		listMsisdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/list_vip_white_list";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		createMsisdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/create_vip_white_list";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		deleteMsisdnReject : function(data, callback) {
			var url = eim_url + "/bs/category/delete_vip_white_list";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		reIssueVip :function(data,callback){
			var url= eim_url + "/bs/category/reIssue_vip_white_list";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});
var FILE_DOWNLOAD="Có lỗi xảy ra khi download file"
var EMPTY_VALUE = "";
var NUMBER_TYPE_PREPAID = "1";
var NUMBER_TYPE_POSTPAID = "2";
var ENTER_ONE_ROW = "\r\n"

var INSERT_UPDATE_SUCCESS = "1";
var momentObj = moment(new Date());
var MNP_CATEGORY_COS_ITEM_EXIST = 90037;
var dataTable=[];
var MAX_LENGTH_FILE=5000;
app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,categoryCosFac) {
	
	$scope.model = {};

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

	var uploader = $scope.uploader = new FileUploader({
		url: eim_url+'/bs/category/list_vip_white_list_teamplate'
	});
	
	uploader.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		if(fileExtValue.toUpperCase() !="xlsx".toUpperCase() && fileExtValue.toUpperCase()!="xls".toUpperCase() ){
    			var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0009');
    			bootbox.alert(TEMPLATE_ERROR);
    			return false;
    		}
    		return true;
        }
    });

	
	$scope.dataMsisdnRejectTemplate = [];
	$scope.tableParamsListMsisdnTemplate = new NgTableParams({}, {
		dataset : $scope.dataMsisdnRejectTemplate
	});
	$scope.getStatusName=function(id)
	{
		var name="";
		if(id=="1"){
			name="Có hiệu lực";
		}
		else if(id=="0"){
			name="Không hiệu lực";
		}
		else{
			name=id;
		}
		return name;
			
	}
	$scope.uploadFileTemplateProvince = function(uploaderListIn, event){
		$scope.removeAllItemListProvince();
	}
	
	$scope.removeAllItemListProvince =  function(){
		// xóa danh sách tỉnh thành theo shop
		$scope.dataMsisdnRejectTemplate = [];
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataMsisdnRejectTemplate
		});
		
		// xóa file name
		$scope.fileNameListProvinceShop = "";
		$scope.model.msisdnNumber = "";
		$scope.model.numberType = "";
    	
		uploader.clearQueue();
	}
	
	$scope.removeAllItem =  function(){
		$scope.dataMsisdnRejectTemplate = [];
		uploader.clearQueue();
		
		// xóa file name
		$scope.fileNameListProvinceShop = "";
		$scope.model.msisdnNumber = "";
		$scope.model.numberType = "";
		$scope.dataMsisdnRejectTemplate = [];
		$scope.tableParamsListMsisdnTemplate = new NgTableParams({}, {
			dataset : $scope.dataMsisdnRejectTemplate
		});
	}
	
	// set data before upload for each item
	uploader.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.fileNameListProvinceShop = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	// on item upload success
	uploader.onSuccessItem = function (fileItem, response, status, headers) {
		
//		$scope.dataMsisdnRejectTemplate = $scope.setProvinceNameForList(response);
//		$scope.dataMsisdnRejectTemplate = $scope.validateProvinceTemplate(response);
		$scope.dataMsisdnRejectTemplate = response;
		if($scope.dataMsisdnRejectTemplate.length>MAX_LENGTH_FILE){
			bootbox.alert("Số lượng bản ghi trong file không được quá "+ String(MAX_LENGTH_FILE)+" . Mời chọn lại file upload!");
			$scope.removeAllItem();
		}
		else{
			$scope.tableParamsListMsisdnTemplate = new NgTableParams({}, {
				dataset : $scope.dataMsisdnRejectTemplate
			});
		}
		
		
		closeOverLay();
	};
	
	// on item upload error
	uploader.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		bootbox.alert("Có lỗi xảy ra trong quá trình upload danh sách thuê bao.");
	}
	
	uploader.onAfterAddingAll = function(items){
		if(items!=null){
			uploader.uploadAll();	
		}
	} 
	
    $scope.numberStatus  = [
    	{ 'Id': '', 'Title': 'Tất cả' },
    	{ 'Id': '1', 'Title': 'Có hiệu lực' },
    	{ 'Id': '0', 'Title': 'Không hiệu lực' }
    ];
    
    $scope.onNumberTypeChange = function(){
    }
    
    function setListMsisdnRejectOutput (listCosReject){
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
    
    $scope.onSearch  = function(){
    	
    	var dataSearch = {
    			"status":StringUtilNVL($scope.model.status),
    			"msisdn":StringUtilNVL($scope.model.msisdnNumber),
    			"fromDate":StringUtilNVL($("#fromDate").val()),
    			"toDate" :StringUtilNVL($("#toDate").val())
    			
    	};
    	 if($("#fromDate").val()!=null&&$("#fromDate").val()!=""&&$("#toDate").val()!=null&&$("#toDate").val()!="")
		{
			if(moment($("#fromDate").val(),"DD/MM/YYYY") > moment($("#toDate").val(),"DD/MM/YYYY"))
				{
					bootbox.alert("Đến ngày phải lớn hơn hoặc bằng từ ngày!");
					
				}
		}
    	overLoading();
    	categoryCosFac.listMsisdnReject(dataSearch, function(result) {
    		closeOverLay();
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listMsisdnReject = [];
				if(result != undefined && result !=null){
					$scope.listMsisdnReject = setListMsisdnRejectOutput(result);
					if (result.length > 0) {
						dataTable=result;
						$scope.listMsisdnReject = result;
						$scope.tableParamsListMsisdnReject = new NgTableParams({}, {
							dataset : result
						});
					}else{
						$scope.tableParamsListMsisdnReject = new NgTableParams({}, {
							dataset : $scope.listMsisdnReject
						});
					}
				}
				
			}
			App.unblockUI("#contentMain");
		});
    	$scope.model.checkboxListPreOrderItem=false;
    }
    
    $scope.onInsertMsisdnReject  = function(){
		$scope.model.fromDate=null;
		$scope.model.toDate=null;
		var updateInput = {};
		var dataInsert = [];
		
    	if($scope.dataMsisdnRejectTemplate.length == 0){
    		var msisdnNumber = StringUtilNVL($scope.model.msisdnNumber);
    		var status = StringUtilNVL($scope.model.status);
    		var notes= StringUtilNVL($scope.model.comments);
			if(msisdnNumber == EMPTY_VALUE && status == EMPTY_VALUE){
				closeOverLay();
				bootbox.alert($translate.instant('Bạn hãy nhập trạng thái và số thuê bao'));
				return ;
			}
			
			updateInput.msisdn = msisdnNumber;
			updateInput.status = status;
			updateInput.notes=notes;
			//DatBD2 update CreateUser
			//updateInput.createUser=StringUtilNVL($localStorage.clientContext.shop.staffCode);
			//end
			dataInsert = [updateInput];
		}else{
			dataInsert = $scope.dataMsisdnRejectTemplate;
			//DatBD2 update
			//for(var i=0; i<dataInsert.length;i++)
    	//	{
    		//	dataInsert[i].createUser=StringUtilNVL($localStorage.clientContext.shop.staffCode);
    	//	}
			//end
		}
    	
    	
    	
    	overLoading("Loading...");
    	categoryCosFac.createMsisdnReject(dataInsert, function(result) {
    		closeOverLay();
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				
				var messSuccess = $translate.instant('vnm.category_msisdn_reject.mess.insert.cos.success');        		
				messSuccess = messSuccess.replace(/###/, result.message);
						
				if($scope.dataMsisdnRejectTemplate.length!=0){
					bootbox.alert(messSuccess);
					$scope.dataMsisdnRejectTemplate = setListMsisdnRejectOutput(result.listResult);
					$scope.tableParamsListMsisdnTemplate = new NgTableParams({}, {
						dataset : $scope.dataMsisdnRejectTemplate
					});
					$scope.model.status = "";
					$scope.model.msisdnNumber = "";
					$scope.model.from=null;
					$scope.model.toDate=null;
				}else{
					if(result.listResult[0].statusCreate == INSERT_UPDATE_SUCCESS){
						bootbox.alert($translate.instant('vnm.category_msisdn_reject.mess.insert.individual.success'));
					}else{
						var messIndividual = result.listResult[0].note+"";
						bootbox.alert(messIndividual);						
					}
				}
				

				$scope.onSearch();
			}
			App.unblockUI("#contentMain");
		});
    }
	
  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
  	
    $scope.confirmDeleteMsisdn = function(item){
    	$scope.model.fromDate=null;
    	$scope.model.toDate=null;
    	$scope.model.msisdnDelete = item;
    	if($scope.model.msisdnDelete.length==0)
    		{
    		 bootbox.alert("Bạn phải chọn ít nhất một số điện thoại!");
    		 return ;
    		}
    	var messConfirm = $translate.instant('Bạn có muốn chuyển đổi trạng thái?');
    	var header = $translate.instant('Danh mục gán số đẹp được cập nhật');
    	bootboxConfirm(header, messConfirm, $scope.removeItemMsisdnReject, $scope.confirmKO);
    }
    
    $scope.removeItemMsisdnReject  = function(){
    	overLoading("Loading...");
    /*	var dataDelete = {
    			"id":StringUtilNVL($scope.model.msisdnDelete.id),
    			"msisdn": StringUtilNVL($scope.model.msisdnDelete.msisdn),
				"status" : StringUtilNVL($scope.model.msisdnDelete.status),
    	};*/
    	var dataDelete=$scope.model.msisdnDelete;
    	
    	categoryCosFac.deleteMsisdnReject(dataDelete, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('Chuyển đổi trạng thái thất bại! Error:')+ result.messages);
			}else {
				bootbox.alert($translate.instant('Chuyển đổi trạng thái thành công!'));
				/*$scope.model.numberType = "";
				$scope.model.msisdnNumber = "";*/
				$scope.onSearch(); //DatBD2
			}
			closeOverLay();
		});
    }
    
	$scope.onSearch(); //DatBD2
	
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

	$scope.downloadFileTemplateServer = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_List_Vip_White_List.xlsx";
    	attachFile.folder = "Template_List_Vip_White_List.xlsx";
    	dowloadFile(attachFile);
    }
	
	dowloadFile = function(data) {
		overLoading("Downloading file mẫu...");
		var url = eim_url + '/bs/downLoadFileTemplate';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]) , headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert(FILE_DOWNLOAD);
			closeOverLay();
		});
	}
	// BEGIN validate input
	
	
	//Thêm mới
//Check BOX
	
	;
	$scope.lstVipWhiteList = [];
	$scope.selectListVipWhiteList = function(item) {
		var isHeaderGoodItem = $scope.isAllRowChecked(dataTable);
		if (isHeaderGoodItem) {
			$scope.model.checkboxListPreOrderItem = true;
		} else {
			$scope.model.checkboxListPreOrderItem = false;
		}
	};
	
	$scope.checkAllPreOrders = function(){
		angular.forEach(dataTable, function(item) {
			item.typeCheck = $scope.model.checkboxListPreOrderItem;
		})	
	};
	
	
	
	$scope.isAllRowChecked = function(listDataTable){
		var resultCheck = false;
		
		if(listDataTable.length == 0){
			return false;
		}
		var countRowCheck = 0;
		for(var i =0; i<listDataTable.length; i++){
			if(listDataTable[i].typeCheck == true){
				countRowCheck=countRowCheck+1;
			}
		}
		
		if(countRowCheck == listDataTable.length){
			resultCheck = true;
		}
		else {
			resultCheck=false;
		}
		return resultCheck;
	};
	//end checkbox
	// Xóa 
	$scope.muntilItem =  function() {
		$scope.lstVipWhiteList = [];
		for(var i =0; i<$scope.listMsisdnReject.length; i++){
			if ($scope.listMsisdnReject[i].typeCheck == true){
				$scope.lstVipWhiteList.push($scope.listMsisdnReject[i]);
			}
		} 
		
		$scope.confirmDeleteMsisdn($scope.lstVipWhiteList);
		
	}
	// end Xóa file
	function isDate(txtDate) {
		var currVal = txtDate;
		if (currVal == '')
			return false;

		// Declare Regex
		var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
		var dtArray = currVal.match(rxDatePattern); // is format OK?

		if (dtArray == null)
			return false;

		// Checks for dd/mm/yyyy format.
		dtDay = dtArray[1];
		dtMonth = dtArray[3];
		dtYear = dtArray[5];

		if (dtMonth < 1 || dtMonth > 12)
			return false;
		else if (dtDay < 1 || dtDay > 31)
			return false;
		else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
			return false;
		else if (dtMonth == 2) {
			var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
			if (dtDay > 29 || (dtDay == 29 && !isleap))
				return false;
		}
		return true;
	}
	
	$scope.onBlurCheckDate = function() {
		if ($("#fromDate").val() != null && $("#fromDate").val() != "") {
			if (!isDate($("#fromDate").val())) {
				bootbox.alert($translate.instant('Ngày phải có định dạng dd-mm-yyyy'));
				$("#fromDate").val("");
				
				return;
			}
		}

	}
	$scope.onBlurCheckToDate=function(){
		if ($("#toDate").val() != null && $("#toDate").val() != "") {
			if (!isDate($("#toDate").val())) {
				bootbox.alert($translate.instant('Ngày phải có định dạng dd-mm-yyyy'));
				$("#toDate").val("");
			}
			
			return;
		}
	}
	
	$scope.noteTypeMsisdn= function(type)
	{
		var name="";
		if(type=="1")
			{
				name="Được phép cập nhật tất cả!";
			}
		else{
			name="Chỉ được phép cập nhật ảnh!"
		}
		return name;
	}
	
	
	$scope.reIssue= function(){
		$scope.lstVipWhiteList = [];
		for(var i =0; i<$scope.listMsisdnReject.length; i++){
			if ($scope.listMsisdnReject[i].typeCheck == true){
				$scope.lstVipWhiteList.push($scope.listMsisdnReject[i]);
			}
		} 
		
		
		$scope.confirmReIssueMsisdn($scope.lstVipWhiteList);
	};
	
	
	
	 $scope.confirmReIssueMsisdn = function(item){
	    	$scope.model.fromDate=null;
	    	$scope.model.toDate=null;
	    	$scope.model.msisIssue = item;
	    	if($scope.model.msisIssue.length==0)
	    		{
	    		 bootbox.alert("Bạn phải chọn ít nhất một số điện thoại!");
	    		 return ;
	    		}
	    	var dem=0;
	    	for(var i=0; i<$scope.model.msisIssue.length;i++)
	    		{
	    			if ($scope.model.msisIssue[i].type=='1'){
	    				dem=dem+1;
	    			}
	    			
	    		}
	    	if(dem==$scope.model.msisIssue.length){
	    		bootbox.alert("Các số bạn vừa chọn đều đã là vip! Mời chọn lại ")
	    		
	    		return;
	    	}
	    	else if(dem!=0){
	    		var messConfirm = "Đã có "+ String(dem) +" số thuê bao đã là vip."+ " Bạn có muốn cấp toàn quyền cho "+ String($scope.model.msisIssue.length-dem) + " số thuê bao còn lại";
		    	var header = $translate.instant('Danh mục gán số đẹp được cập nhật');
		    	bootboxConfirm(header, messConfirm, $scope.reIssueVip, $scope.confirmKO);
	    	}
	    	else{
	    		var messConfirm = " Bạn có muốn cấp toàn quyền cho "+ String($scope.model.msisIssue.length-dem) + " số thuê bao đã chọn";
		    	var header = $translate.instant('Danh mục gán số đẹp được cập nhật');
		    	bootboxConfirm(header, messConfirm, $scope.reIssueVip, $scope.confirmKO);
	    	}
	    	
	    }
	    
	  $scope.reIssueVip  = function(){
	    	overLoading("Loading...");
	 
	    	var dataDelete=$scope.model.msisIssue;
	    	
	    	categoryCosFac.reIssueVip(dataDelete, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					bootbox.alert($translate.instant('Chuyển số thuê bao thành vip thất bại! Error: ')+ result.messages);
				}else {
					bootbox.alert($translate.instant('Chuyển số thuê bao thành vip thành công!'));
					/*$scope.model.numberType = "";
					$scope.model.msisdnNumber = "";*/
					$scope.onSearch(); //DatBD2
				}
				closeOverLay();
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

