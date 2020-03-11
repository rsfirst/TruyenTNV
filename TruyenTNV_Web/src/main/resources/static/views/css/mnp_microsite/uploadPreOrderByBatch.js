var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";

app_vnm.factory('uploadPreOrderService', function($http, $translate) {
	return {
		insertListPreOrder : function(data, callback) {
			var url = eim_url + "/bs/Microsite/insertListPreOrder";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},

	}
});

app_vnm.controller('ctr-updatePreOrder', function($scope, $rootScope,
		$translate, $compile, $timeout, $uibModal, $location, $window,
		FileUploader, $filter, $http, NgTableParams, $localStorage,
		uploadPreOrderService) {
	
	$scope.model = {};
	$scope.disableExecute = true;
	
	//////
	//////
	// upload excel file
	var uploaderPreOrder = $scope.uploaderPreOrder = new FileUploader({
		url: eim_url+'/bs/Microsite/getListPreOrderFromTemplate'
	});
	
	$scope.loadAllPreOrder = function(uploaderListIn, event){
		$scope.removeAllItemListPreOrder();
	}
	
	$scope.dataPreOrder = [];
	$scope.removeAllItemListPreOrder =  function(){
		$scope.dataPreOrder = [];
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataPreOrder
		});
		
		$scope.fileNameListPreOrder = "";
		uploaderPreOrder.clearQueue();
	}
	
	// set data before upload for each item
	uploaderPreOrder.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.fileNameListPreOrder = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	// on item upload success
	uploaderPreOrder.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.disableExecute = true;
		$scope.dataPreOrder = response;
		$scope.listPreOrderToAdd = response;
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataPreOrder
		});
		if (response != 'undefined' && response.length > 0) {
			for (var i=0; i<response.length; i++) {
				response[i].typeCheckBox = false;
			}
			$scope.disableExecute = false;
		}
		closeOverLay();
	};
	
	// on item upload error
	uploaderPreOrder.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		bootbox.alert("File không đúng định dạng. Bạn vui lòng chọn dạng file excel .xls hoặc .xlsx");
	}
	
	// after upload
	uploaderPreOrder.onAfterAddingAll = function(items){
		if(items!=null){
			uploaderPreOrder.uploadAll();	
		}
	} 
	
	// end Upload file
	//////
	//////
	
	//////
	//////
	// check box
	
	$scope.listPreOrderToAdd = [];
	$scope.selectOrRemovePreOrderItem = function(item) {
		var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataPreOrder);
		if (isHeaderGoodItem) {
			$scope.model.checkboxListPreOrderItem = true;
		} else {
			$scope.model.checkboxListPreOrderItem = false;
		}
	}
	
	$scope.checkAllPreOrders = function(){
		angular.forEach($scope.dataPreOrder, function(item) {
			item.typeCheckBox = $scope.model.checkboxListPreOrderItem;
		})
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
	
	// end checkbox
	//////
	//////
	
	//////
	//////
	// download template
	$scope.downloadFileTemplateServer = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_Upload_PreOrder.xlsx";
    	attachFile.folder = "Template_Upload_PreOrder.xlsx";
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
	// end Download template
	//////
	//////
	
	//////
	//////
	// Xóa file
	$scope.removeAllItem =  function() {
		$scope.listPreOrderToAdd = [];
		for(var i =0; i<$scope.dataPreOrder.length; i++){
			if ($scope.dataPreOrder[i].typeCheckBox == false){
				$scope.listPreOrderToAdd.push($scope.dataPreOrder[i]);
			}
		} 
		
		if ($scope.listPreOrderToAdd.length == $scope.dataPreOrder.length) {
			bootbox.alert("Bạn phải chọn bản ghi để xóa");
		} else {
			$scope.tableParams = new NgTableParams({}, {
				dataset : $scope.listPreOrderToAdd
			});
			
			if ($scope.listPreOrderToAdd.length == 0) {
				$scope.model.checkboxListPreOrderItem = false;
			}
			
			$scope.dataPreOrder = [];
			Array.prototype.push.apply($scope.dataPreOrder, $scope.listPreOrderToAdd);
		}
	}
	// end Xóa file
	//////
	//////
	
	//////
	//////
	// Thực hiện
	$scope.insertListPreOrder = function() {
		if ($scope.listPreOrderToAdd != null && $scope.listPreOrderToAdd != undefined && $scope.listPreOrderToAdd.length > 0) {
			bootboxConfirm('Thêm Pre-order', 'Bạn có muốn thực hiện không?', 
					$scope.confirmInsertPreOrderOK, $scope.confirmInsertPreOrderNOK);
		} else {
			bootbox.alert($translate.instant('vnm.uploadPreOrderByBatch.error.no.item.insert'));
		}
	}
	
	$scope.confirmInsertPreOrderOK = function() {
		overLoading("Loading...");
		$scope.checkMaxLength();
		uploadPreOrderService.insertListPreOrder($scope.listPreOrderToAdd, function(result) {
			if(result != 'undefined' && result.length > 0) {
				var success = 0;
				for (var i=0; i<result.length; i++) {
					if (result[i].statusInsert == 'UPLOAD_PREORDER_SUCCESS') {
						success++;
						var res = [];
						res.push($translate.instant('vnm.uploadPreOrderByBatch.' + result[i].statusInsert));
						result[i].statusInsert = res;
					} else {
						var res = result[i].statusInsert.split(",");
						if (res.length > 0) {
							var error = '';
							for (var j=0; j<res.length; j++) {
								if (res[j] != null && res[j] != undefined && res[j] != '') {
									res[j] = "- " + $translate.instant('vnm.uploadPreOrderByBatch.' + res[j]);
								}
							}
						}
						result[i].statusInsert = res;
					}
				}
				var message = $translate.instant('vnm.uploadPreOrderByBatch.insert.success'),        		
        		messageDisplay = message.replace(/###/, success);
        		bootbox.alert(messageDisplay);
				
        		
				$scope.tableParams = new NgTableParams({}, {
					dataset : result
				});
			} else {
				bootbox.alert($translate.instant('vnm.uploadPreOrderByBatch.insert.error'));
			}
			$scope.disableExecute = true;
			closeOverLay();
		});
	}
	
	$scope.confirmInsertPreOrderNOK = function() {
		
	}
	
	$scope.checkMaxLength = function() {
		for (var i=0; i<$scope.listPreOrderToAdd.length; i++) {
			var obj = $scope.listPreOrderToAdd[i];
			if (obj.statusInsert == null || obj.statusInsert == undefined) obj.statusInsert = '';
			if (obj.isdn != null && obj.isdn != undefined && obj.isdn.length > 20) {
				obj.statusInsert += 'input.isdn.maxlength,';
			}
			if (obj.nameCustomer != null && obj.nameCustomer != undefined && obj.nameCustomer.length > 100) {
				obj.statusInsert += 'input.nameCustomer.maxlength,';
			}
			if (obj.bod != null && obj.bod != undefined && obj.bod.length > 20) {
				obj.statusInsert += 'input.bod.maxlength,';
			}
			if (obj.docNum != null && obj.docNum != undefined && obj.docNum.length > 50) {
				obj.statusInsert += 'input.docNum.maxlength,';
			}
			if (obj.telNum != null && obj.telNum != undefined && obj.telNum.length > 20) {
				obj.statusInsert += 'input.telNum.maxlength,';
			}
			if (obj.precinct != null && obj.precinct != undefined && obj.precinct.length > 50) {
				obj.statusInsert += 'input.precinct.maxlength,';
			}
			if (obj.address != null && obj.address != undefined && obj.address.length > 500) {
				obj.statusInsert += 'input.address.maxlength,';
			}
			if (obj.note != null && obj.note != undefined && obj.note.length > 500) {
				obj.statusInsert += 'input.note.maxlength,';
			}
		}
	}

});

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}
