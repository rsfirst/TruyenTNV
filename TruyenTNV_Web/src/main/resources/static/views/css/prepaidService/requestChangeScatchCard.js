app_vnm.factory('requestChangeScatchCard', function($http,  $translate) {
	return {
		getChangeRaggedCardId : function(callback) {
			var url = eim_url + "/bs/Custome/getChangeRaggedCardId";
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#requestChangeScatchCardContent");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getStkNumber : function(shopId, callback) {
			var url = eim_url + "/bs/Custome/getSTKnumber?stockId=" + shopId;
			$http.post(url).success(callback).error(function(data, status, headers, config)
			{
				App.unblockUI("#requestChangeScatchCardContent");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			}); 
		},
		changePhysicalCard : function(lstInput, callback) {
			var url = eim_url + "/bs/Custome/insertPhysicalCard";
			$http.post(url, lstInput).success(callback).error(function(callback) {
				App.unblockUI("#requestChangeScatchCardContent");
				bootbox.alert(status+ " "+ $translate.instant('vnm.messages.error.connection'));
			});
		},
		getListChangeCardFromTemplate : function(request, callback) {
			var url = eim_url + "/bs/Custome/getListChangeCardFromTemplate";
			$http.post(url, request).success(callback).error(function(callback) {
				App.unblockUI("#requestChangeScatchCardContent");
				bootbox.alert(status+ " "+ $translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});

app_vnm.controller('ctrl-requestChangeScatchCard', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,requestChangeScatchCard) {
	
	$scope.disableInput = false;
	$scope.model = {};
	$scope.model.fileAttachments = [];
	$scope.dataListTemplate = [];
	$scope.tblStockItems = 0;
	$scope.tbltblImageItems = 0;
	$scope.isRemove = true;
	$scope.tblCardsSelected = [];
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {
				oldSerial:{
					EmptyValue:true,
					requiredNumber:true,
					maxlengthcustom : 16,
//					minlengthcustom : 19
				},
				newSerial:{
					EmptyValue:true,
					requiredNumber:true,
					maxlengthcustom : 16,
//					minlengthcustom : 19
				}
			},
			messages : {
				oldSerial : {
					EmptyValue: $translate.instant('vnm.change_scatch_card.mess.oldSerial.emptyValue'),
					requiredNumber: $translate.instant('vnm.change_scatch_card.mess.oldSerial.requiredNumber'),
					maxlengthcustom : $translate.instant('vnm.change_scatch_card.mess.oldSerial.maxlengthcustom'),
				},
				newSerial : {
					EmptyValue: $translate.instant('vnm.change_scatch_card.mess.newSerial.emptyValue'),
					requiredNumber: $translate.instant('vnm.change_scatch_card.mess.newSerial.requiredNumber'),
					maxlengthcustom : $translate.instant('vnm.change_scatch_card.mess.newSerial.maxlengthcustom'),
				}
			}
	}
	$scope.loadDefauld = function() {
		$scope.model.requestStatus = 'Lập';
		$scope.model.ccwStatus = 'Lập';
		App.blockUI({
			target : "#requestChangeScatchCardContent",
			boxed : true,
			message : 'loading...'
		});
		requestChangeScatchCard.getChangeRaggedCardId(function(result) {
			//TODO:
			$scope.model.requestId = result;
			App.unblockUI("#requestChangeScatchCardContent");
		});
		requestChangeScatchCard.getStkNumber($localStorage.clientContext.shop.shopId, function(result) {
			//TODO:
			if(result.messages === ''|| result.messages === null ){
				bootbox.alert($translate.instant('vnm.change_scatch_card.mess.sht.not.found'));
				document.getElementById("btnChangeCard").disabled = true;
				App.unblockUI("#requestChangeScatchCardContent");
				return;
			}
			$scope.model.stk = result.messages;
			App.unblockUI("#requestChangeScatchCardContent");
		});
		
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	//changeCard
	$scope.changeCard = function(){
		App.blockUI({
			target : "#requestChangeScatchCardContent",
			boxed : true,
			message : 'loading...'
		});
		var inputObj = {};
		if($scope.disableInput == false){
			var oldSerial = StringUtilNVL($scope.model.oldSerial);
			var newSerial = StringUtilNVL($scope.model.newSerial);
			if (oldSerial != '' || newSerial != '') {
				if($scope.getListImageUpload($scope.model.fileAttachments).length != 0){
					var inputObj = {};
					inputObj.requestId = StringUtilNVL($scope.model.requestId);
					inputObj.inStk = StringUtilNVL($scope.model.stk);
					inputObj.statusReq = '0';
					inputObj.shopId = $localStorage.clientContext.shop.shopId;
					inputObj.oldSerial = StringUtilNVL($scope.model.oldSerial);
					inputObj.newSerial = StringUtilNVL($scope.model.newSerial);
					inputObj.listImageInput = $scope.getListImageUpload($scope.model.fileAttachments);
					$scope.tblCardsSelected.push(inputObj);
				} else {
					bootbox.alert($translate.instant('vnm.change_scatch_card.mess.image.require'));
					App.unblockUI("#requestChangeScatchCardContent");
					return;
				}
			} else {
				bootbox.alert($translate.instant('vnm.change_scatch_card.mess.serial.require'));
				App.unblockUI("#requestChangeScatchCardContent");
				return;
			}
		}
		if($scope.tblCardsSelected.length > 0) {
			//TODO: ChangeCard
			//setData before change
			if($scope.getListImageUpload($scope.model.fileAttachments).length != 0){
				var tblCardsData = [];
				angular.forEach($scope.tblCardsSelected, function(item) {
					item.requestId = StringUtilNVL($scope.model.requestId);
					item.inStk = StringUtilNVL($scope.model.stk);
					item.statusReq = '0';
					item.shopId = $localStorage.clientContext.shop.shopId;
					item.listImageInput = $scope.getListImageUpload($scope.model.fileAttachments);
					tblCardsData.push(item);
				})
			} else {
				bootbox.alert($translate.instant('vnm.change_scatch_card.mess.image.require'));
				App.unblockUI("#requestChangeScatchCardContent");
				return;
			}
		} else {
			bootbox.alert($translate.instant('vnm.change_scatch_card.mess.card.select.require'));
			App.unblockUI("#requestChangeScatchCardContent");
			return;
		}
		$scope.tblCardsSelected = tblCardsData;
		//ChangeCards
		overLoading("loading...");
		requestChangeScatchCard.changePhysicalCard($scope.tblCardsSelected, function(result) {
				if (result.status == '0' && result.status != undefined) {
					// KHONG THANH CONG
					$scope.dataListTemplate = result.listResult;
					$scope.tblCards = new NgTableParams({page:1,count:10}, {
						dataset : $scope.dataListTemplate
					});
					$scope.tblStockItems = $scope.dataListTemplate.length;
					$scope.disableInput = true;
					$scope.model.checkboxAdd = {
						      checked: false,
						      items: {}
					};
					bootbox.alert(result.messages);
				} else {
					// THANH CONG
					
					var data = [];
					angular.forEach(result.listResult, function(obj, index){
						if(obj.statusChangeCard == 'false'){
							data.push(obj);
						}
					});
					$scope.tblCards = new NgTableParams({page:1,count:10}, {
						dataset : data
					});
					$scope.tblStockItems = data.length;
					$scope.disableInput = true;
					$scope.model.checkboxAdd = {
						      checked: false,
						      items: {}
					};
					bootbox.alert(result.messages);
				}
				closeOverLay();
				App.unblockUI("#requestChangeScatchCardContent");
			}
		);
		document.getElementById("btnChangeCard").disabled = true;
	}
	//OnUpLoad
	var uploaderListShop = $scope.uploaderListShop = new FileUploader({
		url: eim_url+'/bs/Custome/getListChangeCardFromTemplate'
	});
	// Another user-defined filter set max file size
	uploaderListShop.filters.push({
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
	
	// set data before upload for each item
	uploaderListShop.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.fileNameList = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	// on item upload success
	uploaderListShop.onSuccessItem = function (fileItem, response, status, headers) {
		
		var data = [];
		angular.forEach(response, function(item) {
			item.statusReq = 'Lập';
			data.push(item);
		})
		$scope.dataListTemplate = data;
		$scope.tblCards = new NgTableParams({page:1,count:10}, {
			dataset : $scope.dataListTemplate
		});
		$scope.tblStockItems = $scope.dataListTemplate.length;
		$scope.disableInput = true;
		$scope.model.checkboxAdd = {
			      checked: false,
			      items: {}
		};
		closeOverLay();
	}
	
	// on item upload error
	uploaderListShop.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		bootbox.alert($translate.instant('vnm.change_scatch_card.mess.upload.list.error'));
	}
	
	uploaderListShop.onAfterAddingAll = function(items){
		overLoading("Uploading...");
		if(items!=null){
			uploaderListShop.uploadAll();	
		}
	} 
	
	downloadFile = function(data) {
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
	
	$scope.downloadFileTemplateServer = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_Multi_ShopGood.xlsx";
    	attachFile.folder = "Template_Multi_ShopGood.xlsx";
    	downloadFile(attachFile);
    }
	
	$scope.uploadFileTemplate = function(uploaderListIn, event){
		$scope.removeAllItemListShop();
	}
	
	$scope.removeAllItemListShop =  function(){
		// xóa danh sách
		$scope.dataListTemplate = [];
		$scope.tblCards = new NgTableParams({page:1,count:10}, {
			dataset : $scope.dataListTemplate
		});
		
		// xóa file name
		$scope.fileNameList = "";
		
		//TODO: Khoi tao data cho table

		//GetListFromImport
		//$scope.getListItemByItemType();
		uploaderListShop.clearQueue();
	}
	
	$scope.cancel = function(){
		$scope.removeAllItemListShop();
		document.getElementById("btnChangeCard").disabled = false;
		$scope.tblStockItems = 0;
		$scope.loadDefauld();
		$scope.disableInput = false;
		$scope.tblCardsSelected = [];
		$scope.removeAllItemImageFile();
	}
	
	$scope.removeAllItemImageFile = function(){
		$scope.model.fileAttachments = [];
		uploader.clearQueue();
	}
	
	
	/********************upload image***********************/
	// Another user-defined filter set max file size
	
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
					bootbox.alert("Dung lượng tệp "+fileName+" không được vượt quá 10MB");
//					App.notifyDanger($scope.messages);
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
		bootbox.alert($translate.instant('vnm.change_scatch_card.mess.upload.list.error'));
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
	
	// remove element in list post to server by item
    $scope.removeElementAttachmenByItem =  function(item){
    	angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
    	   if(objectAttact.attachMentIdClient == item.attachMentIdClient){
    	        $scope.model.fileAttachments.splice(index,1);
    	   }
    	});
    	item.remove();
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
	
	$scope.uploadAllFile =  function(uploaderIn){
		overLoading();
		uploader.uploadAll();	
	}
	/***************endupload image******************************/
	
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

	//Valiadtor
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
	 }, "")

	$.validator.addMethod("requiredNumber", function (value, element) {
		if (value == undefined || value=="") return false;
		var valueTrim = $.trim(value);
		if(valueTrim == "") return false;

		if(isNumbericInteger(valueTrim)){
			return true;
		}else{
			return false;
		}
		return true;
	}, "");
	
	//Selection
	$scope.selectNotIn = function(item) {
		var found = getPositionOfObject(item, $scope.tblCardsSelected);
		if (found == -1) {
			$scope.tblCardsSelected.push(item);
			$scope.model.oldSerial = item.oldSerial;
			$scope.model.newSerial = item.newSerial;
		} else
			$scope.tblCardsSelected.splice(found, 1);
		
		if ($scope.tblCardsSelected.length == $scope.dataListTemplate.length) {
			$scope.model.checkboxAdd.checked = true;
		} else {
			$scope.model.checkboxAdd.checked = false;
		}
	}
	
	$scope.checkAllAdd = function(){
		$scope.tblCardsSelected = [];
		angular.forEach($scope.dataListTemplate, function(item) {
			$scope.model.checkboxAdd.items[item.oldSerial] = $scope.model.checkboxAdd.checked;
			if ($scope.model.checkboxAdd.checked) {
				$scope.tblCardsSelected.push(item);
			}
		})
		
	}
	
	$scope.$watch(function() {
	    return $scope.tblCardsSelected.length;
	  }, function(lenIn) {
	  	$scope.isRemove = blLength(lenIn);
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

function checkAllFileUploaded(uploader){
	var checkFileAllisUpload = true;
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		var itemStatus = item.isSuccess;
		if(!itemStatus){
			checkFileAllisUpload = false
			break;
		}
	}
	return checkFileAllisUpload;
}

// get total size of list file upload
function getTotalSizeListFileUpload(uploaderIn){
	var listFileTotalSizeByte = 0;
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
		var fileSize = item.file.size;
		listFileTotalSizeByte += fileSize;
	}
	var listFileTotalSizeMB = listFileTotalSizeByte/1024/1024;
	if(listFileTotalSizeMB >5){
		return true;
	}

	return true;
}

// remove file in queue by id
function removeItemQueueById(uploader, attachMentIdClient){
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		if(item.attachMentIdClient == attachMentIdClient){
			item.remove();	
		}
	}
}

//get position
function getPositionOfObject(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem === arrDes[x]) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
function blLength(lenA){
	if (lenA > 0){
		return false;
	} else {
		return true;
	}
}
