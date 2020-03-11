var VALIDATE_LIST_SERIAL_KO = 'CREATE_CHANGE_CARD_AIRTIME_001';

app_vnm.factory('createScratchAirtime', function($http, $translate) {
	return {
		getChangeRaggedCardId : function(callback) {
			var url = eim_url + "/bs/Custome/getChangeRaggedCardId";
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#contentMainCardAirtime");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		createChangeCardAirtimeNew : function(data, callback) {
			var url = eim_url + "/bs/Custome/createRequestChangeCardAirtimeNew";
			$http.post(url, data).success(callback).error(function(callback) {
				closeOverLay();
				bootbox.alert(status+ " "+ $translate.instant('vnm.messages.error.connection'));
			});
		},
		
		getStkNumber : function(shopId, callback) {
			var url = eim_url + "/bs/Custome/getSTKnumber?stockId=" + shopId;
			$http.post(url).success(callback).error(function(data, status, headers, config)
			{
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			}); 
		},
		
		searchRequestChangeCard : function(requestId, requestStatus, stkNumber, phoneNumber, userCreate, createDate, serial, type, callback) {
			var url = eim_url + '/bs/Custome/searchRequestChangeCard?requestId=' + requestId
				+ '&requestStatus=' + requestStatus + '&stkNumber=' + stkNumber + '&phoneNumber=' + phoneNumber + '&userCreate='
				+ userCreate + '&createDate=' + createDate + '&serial=' + serial + '&type=' + type;
			$http.get(url).success(callback).error(function(callback) {
				//						$('#approvePOError').modal('show');	
				App.unblockUI("#acceptRequestChangeCardContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getRequestChangeCardAirtimeDetail : function(requestId, callback) {
			var url = eim_url + '/bs/Custome/getRequestChangeCardAirtimeDetail?requestId=' + requestId;
			$http.get(url).success(callback).error(function(callback) {
				//						$('#approvePOError').modal('show');	
				App.unblockUI("#acceptRequestChangeCardContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		openViewIMGChangeService : function(requestId, name, callback) {
			var url = eim_url + "/bs/Custome/getImgChangeCard?requestId=" + requestId + '&name=' + name;
			$http.post(url).success(callback).error(function(requestId, name, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		
	}
});

var MAX_LENGTH_SERIAL_SIM = 16;
var MAX_LENGTH_SERIAL_SIM_11 = 11;

app_vnm.controller('ctrl-createairtime', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,createScratchAirtime) {
	
	$scope.isDisableDeleteButtonImage = false;
	
	var SHOP_ID = $localStorage.clientContext.shopId;
	var SHOP_ID = $localStorage.clientContext.shopId;
	
	$scope.model = {};
	$scope.model.fileAttachments = [];
	
	$scope.model.createUser = $localStorage.clientContext.username;
	
	$scope.model.createDate = getCurrentDateMMDDYYY();
	
	$scope.totalRequestDetail = 0;
	
	$scope.dataListSerialUpload = [];
	
	$scope.model.checkboxListSerialAirtime = false;
	
	$scope.isDisabledSerialCard = false;
	
	$scope.isDisabledButtonSave = false;
	
	var uploaderListSerial = $scope.uploaderListSerial = new FileUploader({
		url: eim_url+'/bs/Custome/getListSerialTemplateAirtime'
	});
	
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
	
	$scope.getChangeRaggedCardIdFunction = function(){
		createScratchAirtime.getChangeRaggedCardId(function(result) {
			$scope.model.requestId = result;
			closeOverLay();
		});
	}

	$scope.requestChangeScatchCardFunction = function(){
		overLoading();
		createScratchAirtime.getStkNumber($localStorage.clientContext.shop.shopId, function(result) {
			
			if(result.messages === ''|| result.messages === null ){
				bootbox.alert($translate.instant('vnm.change_scatch_card.mess.sht.not.found'));
				$scope.isDisabledButtonSave = true;
				closeOverLay();
				return;
			}
			
			$scope.model.shtNumber = result.messages;
			$scope.isDisabledButtonSave = false;
			closeOverLay();
		});
	}
	
	$scope.loadDefauld = function() {
		$scope.getChangeRaggedCardIdFunction();
		$scope.requestChangeScatchCardFunction();
	}
	
	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();
	
	//click checkbox header list serial
	$scope.checkAllAdd = function(){
		angular.forEach($scope.dataListSerialUpload, function(item) {
			item.typeCheckBox = $scope.model.checkboxListSerialAirtime;
		})
	}
	
	$scope.downloadFileTemplateServer = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_Create_Airtime_List_Serial.txt";
    	attachFile.folder = "Template_Create_Airtime_List_Serial.txt";
    	dowloadFile(attachFile);
    }
	
	//check all row in table checked
	// return false is not checked
	// return true is all row checked
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
	
	//onclick checkbox table list good item
	$scope.selectOrRemoveGoodItem = function(item) {
		var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataListSerialUpload);
		if(isHeaderGoodItem){
			$scope.model.checkboxListSerialAirtime = true;
		}else{
			$scope.model.checkboxListSerialAirtime = false;
		}
		
	}
	
	// set data before upload for each item
	uploaderListSerial.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.fileNameListSerialUpload = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	$scope.setDataOutputTableSerial = function(listDataInput){
		for(var i = 0; i< listDataInput.length; i++){
			listDataInput[i].typeCheckBox = false;
		}
		return listDataInput;
	}
	// on item upload success
	uploaderListSerial.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.isDisabledSerialCard = true;
		$scope.model.serialCard = "";
		
		if(response.code == VALIDATE_LIST_SERIAL_KO){
			var listResult = response.listResult;
			$scope.dataListSerialUpload = $scope.setDataOutputTableSerial(listResult);
			$scope.totalRequestDetail = listResult.length;
			
			$scope.tableParamsListSerial = new NgTableParams({}, {
				dataset : $scope.dataListSerialUpload
			});
			
			var TEMPLATE_LIST_SERIAL_ERROR = $translate.instant('vnm.air_time.mess.data.serial.list.error');
			bootbox.alert(TEMPLATE_LIST_SERIAL_ERROR);
        	closeOverLay();
    		return ;
    	}
		
		$scope.dataListSerialUpload = $scope.setDataOutputTableSerial(response);
		
		$scope.totalRequestDetail = response.length;
		
		$scope.tableParamsListSerial = new NgTableParams({}, {
			dataset : $scope.dataListSerialUpload
		});
		
		closeOverLay();
	};
	
	uploaderListSerial.onAfterAddingAll = function(items){
		
		if(items!=null){
			uploaderListSerial.uploadAll();	
		}
	} 
	
	  // remove element in list post to server by item
    $scope.removeElementAttachmenByItem =  function(item){
    	angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
    	   if(objectAttact.attachMentIdClient == item.attachMentIdClient){
    	        $scope.model.fileAttachments.splice(index,1);   
    	   }
    	});
    	item.remove();
    }
    
	// on item upload error
	uploaderListSerial.onErrorItem = function (fileItem, response, status, headers) {
		$scope.totalRequestDetail = 0;
		
		closeOverLay();
		bootbox.alert("Có lỗi xảy ra trong quá trình upload danh sách thuê bao.");
	}
	
	$scope.uploadFileTemplateListSerial = function(uploaderListIn, event){
		$scope.model.serialCard = "";
		$scope.removeAllFileListSerial();
	}

	$scope.removeAllFileListSerial =  function(){
		
		$scope.isDisabledSerialCard = false;
		$scope.model.serialCard = "";
		$scope.model.checkboxListSerialAirtime = false;
		// xóa danh sách tỉnh thành theo shop
		$scope.dataListSerialUpload = [];
		$scope.tableParamsListSerial = new NgTableParams({}, {
			dataset : $scope.dataListSerialUpload
		});
		
		// xóa file name
		$scope.fileNameListSerialUpload = "";

		uploaderListSerial.clearQueue();
	}
	
	$scope.removeAllItemImageFile = function(){
		$scope.model.fileAttachments = [];
		uploader.clearQueue();
	}
	
	/********************upload image***********************/
	// Another user-defined filter set max file size
	uploaderListSerial.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	var fileName = item.name;
        	var sizeFile = item.size;
    		var fileExtValue = fileName.split(".").pop();
    		
    		if(fileExtValue.toUpperCase() !="txt".toUpperCase() && fileExtValue.toUpperCase()!="xls".toUpperCase() ){
    			var TEMPLATE_ERROR = $translate.instant('vnm.air_time.mess.file.template.txt.required');
    			bootbox.alert(TEMPLATE_ERROR);
    			return false;
    		}
    		return true;
        }
    });
	
	
	var uploader = $scope.uploader = new FileUploader({
		url: eim_url+'/bs/Custome/uploadFileImageScatchCard'
	});
	
	// Another user-defined filter
	uploader.filters.push({
		'name': 'enforceMaxFileSize',
		'fn': function (item,options) { 
			var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';  
			if('|jpg|png|jpeg|bmp|gif|'.indexOf(type) == -1){ 
				var fileName = item.name; 
				$scope.messages = "Tệp tin "+fileName+" không hợp lệ.";
				App.notifyDanger($scope.messages);
				return false;
			}else{
				var sizeFile = item.size;
				if(sizeFile <=10485760){
					return true;
				}else{
					var fileName = item.name;
					// var message = messageSizeErrorClient.replace(/###/, fileName);
					$scope.messages = "Dung lượng tệp "+fileName+" không được vượt quá 10MB";
					App.notifyDanger($scope.messages);
					return false;
				}
			}
		}
	});
	
	uploader.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.model.fileAttachments.push(response);
		closeOverLay();
	};
	
	uploader.onErrorItem = function (fileItem, response, status, headers) {
		if(response!= undefined && response!=null){
			if(response.code == "FILE_IMAGE_CONTENT_ERROR"){
				var fileName = response.messages;
				var message  = $translate.instant('vnm.messages.validate.prepaid.server.PREPAID-FILE-CONTENT-ERROR');
				message = message.replace(/###/, fileName);
				bootbox.alert(message);
			}
		}else{			
			bootbox.alert($translate.instant('vnm.mnp_message.common.upload.file.error'));
		}
		closeOverLay();
	}

	uploader.onAfterAddingFile = function(item){
		 
		$scope.$apply(function($scope) {
			var fileReader = new FileReader();
			fileReader.readAsDataURL(item._file);
			
			
			fileReader.onload = function(oFREvent) {
				$timeout(function() {
					item.dataImg = fileReader.result;
				});
			};
		});

	}
	
	uploader.onBeforeUploadItem  = function(item){
		item.headers = {
				Authorization: 'Bearer ' + $localStorage.clientContext.token
		};

		var identityDocType = StringUtilNVL(item.documentType);
		item.attachMentIdClient = createTimeStamp();
		var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);
		var form_data = new FormData();
		form_data.append("requestId", StringUtilNVL($scope.model.requestId));
		form_data.append("attachMentIdClient", attachMentIdClient);
		item.formData.push(form_data);

	}
	
	$scope.abcd = function($event){
		if($scope.isDisabledButtonSave){
			$event.preventDefault();
   	 		return;
		}
	}
	
	$scope.uploadAllFile =  function(uploaderIn){
		overLoading();
		uploader.uploadAll();	
	}
	/***************endupload image******************************/
	
	//return true if table have error
	$scope.checkDataSerialTableError = function(listDataSerialTable){
		for(var i =0; i< listDataSerialTable.length; i++){
			if(listDataSerialTable[i].listNoteRecord != undefined 
					&& listDataSerialTable[i].listNoteRecord != null){
				if(listDataSerialTable[i].listNoteRecord.length >0){
					return true;
				}
			}
		}
		return false;
	}
	
	//get list img name
	$scope.getListImageUpload = function(listImageInput){
		var listImageUploadedResult = [];
		
		for(var i =0; i< listImageInput.length; i++){
			if(listImageInput[i] != undefined && listImageInput[i] != null){
				listImageUploadedResult.push(listImageInput[i].fileName);
			}
		}
		return listImageUploadedResult;
	}
	
	//get list serial checked
	$scope.getListSerialFromTable = function(listDataTable){
		var listSerialResult = [];
		
		for(var i =0; i< listDataTable.length; i++){
			if(listDataTable[i].typeCheckBox){
				listSerialResult.push(listDataTable[i].serial);
			}
		}
		return listSerialResult;
	}
	
	//get list row of table serial checked
	$scope.getListRowSerialCheck = function(listDataTable){
		var listSerialResult = [];
		
		for(var i =0; i< listDataTable.length; i++){
			if(listDataTable[i].typeCheckBox){
				listSerialResult.push(listDataTable[i]);
			}
		}
		return listSerialResult;
	}
	
	$scope.getRowItemHighLightFunction = function(item) {
		$scope.rowHightLight = item;
	}
	
	$scope.fileDetailData = function(item){
		$scope.model.serialCard = item.serial;
		$scope.model.valueCard = item.cardValue;
		$scope.model.raggedCardStatus = item.raggedCardStatus;
	}
	
	$scope.fillDetailFunction = function(item){
		$scope.getRowItemHighLightFunction(item);
		if($scope.isDisableDeleteButtonImage){
			$scope.fileDetailData(item);
		}
	}
	
	$scope.resetFormAfterSuccess = function(){
		$scope.isDisableDeleteButtonImage = false;
		$scope.isDisabledButtonSave = false;
		$scope.model.checkboxListSerialAirtime = false
		
		$scope.getChangeRaggedCardIdFunction();
		$scope.model.serialCard = "";
		$scope.model.contactNumber = "";
		$scope.totalRequestDetail = 0;
		$scope.removeAllItemImageFile();
		$scope.removeAllFileListSerial();
	}
	
	//submit change card airtime
	$scope.createRequestChangeCardAirtimeFunction = function(){

		if(StringUtilNVL($scope.model.contactNumber) == EMPTY_VALUE){
			bootbox.alert($translate.instant('vnm.air_time.mess.field.contact.number.required'));
			return;
		}
		
		if(StringUtilNVL($scope.model.serialCard) == EMPTY_VALUE && $scope.dataListSerialUpload.length==0){
			bootbox.alert($translate.instant('vnm.air_time.mess.field.serial.number.required'));
			return;
		}else{
			//validate neu input one serial
			if(StringUtilNVL($scope.model.serialCard) != EMPTY_VALUE){
				var serialCard = StringUtilNVL($scope.model.serialCard);
				
				if(serialCard.length != MAX_LENGTH_SERIAL_SIM && serialCard.length!=MAX_LENGTH_SERIAL_SIM_11){
					bootbox.alert($translate.instant('vnm.air_time.mess.serial.sim.length.required'));
					return;
				}
				
				if (!isNumbericInteger(serialCard)) {
					closeOverLay();
					bootbox.alert($translate.instant('vnm.air_time.mess.serial.sim.number.required'));
					return;
				}
			}
			
			//validate neu input tu file
			if($scope.dataListSerialUpload.length != 0){
				var listSerialChecked = $scope.getListSerialFromTable($scope.dataListSerialUpload);
				
				if(listSerialChecked.length==0){
					bootbox.alert($translate.instant('vnm.air_time.mess.list.serial.table.one.checked'));
					return;
				}
				
				var listRowSerialCheck = $scope.getListRowSerialCheck($scope.dataListSerialUpload);
				
				if($scope.checkDataSerialTableError(listRowSerialCheck)){
					bootbox.alert($translate.instant('vnm.air_time.mess.list.serial.checked.error'));
					return;
				}
				
			}
		}
		
		if ($scope.model.fileAttachments.length==0) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.air_time.mess.list.image.upload.error'));
			return;
		}
		
		overLoading();
		var listAllSerialInput = [];
		//lay du lieu tu table hoac text box
		if(StringUtilNVL($scope.model.serialCard) != EMPTY_VALUE){
			listAllSerialInput.push(StringUtilNVL($scope.model.serialCard))
		}else if($scope.dataListSerialUpload.length != 0){
			listAllSerialInput = $scope.getListSerialFromTable($scope.dataListSerialUpload);
		}
		
		var dataChangeCardAirtime = {};
		dataChangeCardAirtime.shopId = SHOP_ID;
//		dataChangeCardAirtime.newSerial = serialCard;
		
		dataChangeCardAirtime.requestId = StringUtilNVL($scope.model.requestId);
		dataChangeCardAirtime.statusCard = StringUtilNVL($scope.model.statusCard);
		
		dataChangeCardAirtime.contactNumber = StringUtilNVL($scope.model.contactNumber);
		dataChangeCardAirtime.listSerial = listAllSerialInput;
		
		dataChangeCardAirtime.inStk = StringUtilNVL($scope.model.shtNumber);
		dataChangeCardAirtime.listImageInput = $scope.getListImageUpload($scope.model.fileAttachments);
		
		createScratchAirtime.createChangeCardAirtimeNew(dataChangeCardAirtime,function(result) {

			closeOverLay();
			if (result.status == '0'
					&& result.status != undefined) {
				// KHONG THANH CONG
				bootbox.alert($translate.instant('vnm.air_time.mess.change.card.error')+ result.messages);

			} else {
				bootbox.alert($translate.instant('vnm.air_time.mess.change.card.success'));
//				$scope.resetFormAfterSuccess();
				$scope.model.checkboxListSerialAirtime = false
				$scope.isDisabledButtonSave = true;

				$scope.isDisableDeleteButtonImage = true;
				
				$scope.dataListSerialUpload = $scope.setDataOutputTableSerial(result.listResult);
				$scope.totalRequestDetail = result.length;
				
				$scope.tableParamsListSerial = new NgTableParams({}, {
					dataset : $scope.dataListSerialUpload
				});
			}
		});
		
	}
	
//	*******************TRA CUU THONG TIN*******************
	
	function clearTextBoxDetail() {
		$scope.model.requestIdSelected = '';
		$scope.model.userRejectSelected = '';
		$scope.model.stkSelected = '';
		$scope.model.statusOrderSelected = '';
		$scope.model.phoneNumberSelected = '';
		$scope.model.dateRejectSelected = '';
		$scope.model.serialSelected = '';
		$scope.model.userDestroySelected = '';
		$scope.model.cardValueSelected = '';
		$scope.model.dateDestroySelected = '';
		$scope.model.userCreateSelected = '';
		$scope.model.userLockSelected = '';
		$scope.model.dateCreateSelected = '';
		$scope.model.dateLockSelected = '';
		$scope.model.raggedCardStatus = '';
		$scope.model.cardStatusSelected = '';
		$scope.imgBody = [];
		var requestDetailReset = [];
		$scope.totalRequestDetail = requestDetailReset.length;
		$scope.detailPurchase = new NgTableParams({}, {
			dataset : requestDetailReset
		});
	}
	
	$scope.searchRequestChangeCard = function() {
		clearTextBoxDetail();
		$scope.showDetailAirtimeResquest = false;
		$scope.showDetailPhysicalResquest = false;
		$scope.totalRequestDetail = 0;
		$scope.totalRequestPhyDetail = 0;
		lstResult = [];
		requestDetail = [];
		$scope.stSelected = [];

		$scope.detailPurchase = new NgTableParams({}, {
			dataset : requestDetail
		});

		var createDate = StringUtilNVLWithDefault($("#createDateSearch").val(), "");
		if (!checkDate(createDate)) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.date.is.number'));
			return;
		}
		var requestIdSearch = StringUtilNVLWithDefault($scope.model.requestIdSearch);
		if (!isNumbericInteger(requestIdSearch) && requestIdSearch != undefined) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.requestId.is.number'));
			return;
		}
		
		if (requestIdSearch == undefined) {
			requestIdSearch = '';
		}
		
		var requestStatus = StringUtilNVLWithDefault($scope.model.requestStatusSearch, "");
		var stkNumber = StringUtilNVLWithDefault($scope.model.stkNumber);
		if (!isNumbericInteger(stkNumber) && stkNumber != undefined) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.stk.is.number'));
			return;
		}
		
		if (stkNumber == undefined) {
			stkNumber = '';
		}
		
		var phoneNumber = StringUtilNVLWithDefault($scope.model.phoneNumber);
		if (!isNumbericInteger(phoneNumber) && phoneNumber != undefined) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.phone.is.number'));
			return;
		}
		if (phoneNumber == undefined) {
			phoneNumber = '';
		}
		var userCreate = $scope.model.createUser;
//		if ($scope.model.code == undefined) {
//			userCreate = '';
//		} else {
//			userCreate = StringUtilNVLWithDefault($scope.model.code.code, "");
//		}
		
		var serial = StringUtilNVLWithDefault($scope.model.serial);
		if (!isNumbericInteger(serial) && serial != undefined) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.serial.is.number'));
			return;
		}
		if (serial == undefined) {
			serial = '';
		}
		
		var type = StringUtilNVLWithDefault($scope.model.type, "");
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});

		createScratchAirtime.searchRequestChangeCard(requestIdSearch,
				requestStatus,
				stkNumber,
				phoneNumber,
				userCreate,
				createDate,
				serial,
				type,
				function(result) {
					if (result.messages != null) {
						bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm: " + result.messages);
						App.unblockUI("#acceptRequestChangeCardContent");
					} else {
						lstResult = result;
						$scope.tableParams = new NgTableParams({
							count : 10
						}, {
							dataset : lstResult
						});

						App.unblockUI("#acceptRequestChangeCardContent");
						if (lstResult.length > 0) {
							$scope.totalRequest = lstResult.length;
						}
						else
							$scope.totalRequest = 0;
					}
				});
	}
	
	
	$scope.showDetail = function(item, index) {
		$scope.showDetailAirtimeResquest = false;
		$scope.itemSelected = item;
		$scope.isBtnDestroy = true;
		$scope.isBtnChange = true;
		resetImg($scope)
		if (item.status === '1' || item.status === '0') {
			$scope.isBtnDestroy = false;
		}
		if (item.status === '0' || item.status === '1' || item.status === '2') {
			$scope.isBtnChange = false;
		}
		clearTextBoxDetail();
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});
		createScratchAirtime
			.getRequestChangeCardAirtimeDetail(item.reqChangeRaggedCardId,
				function(result) {
					if (result.messages != null) {
						bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm đổi thẻ airtime: " + result.messages);
						App.unblockUI("#acceptRequestChangeCardContent");
						$scope.showDetailAirtimeResquest = false;
					} else {
						if (result.length > 0) {
							requestDetail = result;
							$scope.requestDetailQuery = result;
							$scope.totalRequestDetail = requestDetail.length;
							$scope.detailPurchase = new NgTableParams({}, {
								dataset : requestDetail
							});
							$scope.model.checkboxAdd = {
								checked : false,
								items : {}
							};

							$scope.model.checkboxRemove = {
								checked : false,
								items : {}
							};
							$scope.fillDetail(requestDetail[0], 1);
							createScratchAirtime.openViewIMGChangeService(item.reqChangeRaggedCardId, item.imgsName, function(result) {
								if (result.status == '0' && result.status != undefined) {
									App.unblockUI("#acceptRequestChangeCardContent");
									bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
								} else {
									$scope.imgBody = result;
									App.unblockUI("#acceptRequestChangeCardContent");
								}
							});

						}
					}
					;
				});

		$scope.showDetailAirtimeResquest = true;
	}
	
	
	$scope.fillDetail = function(item, index) {
		$scope.itemSelectedDetail = item;
		$scope.model.requestIdSelected = item.reqChangeRaggedcardId;
		$scope.model.userRejectSelected = item.userReject;
		$scope.model.stkSelected = item.stk;
		$scope.model.statusOrderSelected = item.statusRequest
		=== "0" ? "Lập" : item.statusRequest === "1" ? "Từ chối" :
			item.statusRequest === "2" ? "Đang thực hiện" : item.statusRequest ===
			"3" ? "Đã thực hiện" : "Hủy";
		$scope.model.cardStatusSelected = item.cardStatus
		=== "0" ? "Lập" : item.cardStatus === "1" ? "Từ chối" :
			item.cardStatus === "2" ? "Đã khóa thẻ" : item.cardStatus ===
			"3" ? "Đã đổi thẻ" : item.cardStatus === "4" ? "Đã cộng HH" : "Hủy";
		$scope.model.phoneNumberSelected = item.phoneNumber;
		$scope.model.dateRejectSelected = $filter('date')(item.dateReject, "dd/MM/yyyy");
		$scope.model.serialSelected = item.serial;
		$scope.model.userDestroySelected = item.userDestroy;
		$scope.model.cardValueSelected = item.cardValue;
		$scope.model.dateDestroySelected = $filter('date')(item.dateDestroy, "dd/MM/yyyy");
		$scope.model.userCreateSelected = item.userCreate;
		$scope.model.userLockSelected = item.userLock;
		$scope.model.dateCreateSelected = $filter('date')(item.dateCreated, "dd/MM/yyyy");
		$scope.model.dateLockSelected = $filter('date')(item.dateLock, "dd/MM/yyyy");
		$scope.model.raggedCardStatus = item.raggedCardStatus;

	}
	
	$scope.imgZoom = function(event) {
		$('.imagepreview').attr('src', $(event)[0].target.src);
		$('#imagemodal').modal('show');
	}
	function resetImg($scope) {
		$scope.imgBody = [];
	}
	
	$scope.RequestStatusChangeSource = [
		{
			'Id' : '0',
			'Title' : 'Đổi thẻ bằng Airtime'
		}
	];
	
    $scope.StatusCardSource  = [
        { 'Id': '0', 'Title': 'Lập' }
    ];
	
	$scope.RequestStatusSource = [
		{
			'Id' : '',
			'Title' : 'ALL'
		}, {
			'Id' : '0',
			'Title' : 'Lập'
		}, {
			'Id' : '1',
			'Title' : 'Từ chối'
		}, {
			'Id' : '2',
			'Title' : 'Đang thực hiện'
		}, {
			'Id' : '3',
			'Title' : 'Đã thực hiện'
		}, {
			'Id' : '4',
			'Title' : 'Hủy'
		},
	];
});

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function getCurrentDateMMDDYYY(){
	return moment(new Date()).format("DD/MM/YYYY");
}

function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}

function checkDate(value) {
	if (value == undefined || value == "")
		return true;
	if ($.trim(value) == "")
		return true;
	var valueDate = $.trim(value);
	return moment(valueDate, 'DD/MM/YYYY', true).isValid();
}