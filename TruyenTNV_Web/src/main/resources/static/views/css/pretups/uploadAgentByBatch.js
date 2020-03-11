var SELECT_NONE_INDEX  = -1;
var NUMBER_COUNT_DISABLED_EFORM_HD  = 4;
var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";

app_vnm.factory('uploadAgentByBatch', function($http, $translate) {
	return {
		createUploadByBatch : function(data, callback) {
			var url = eim_url + "/bs/UploadAgencyByBatch/createUploadByBatch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		}
	}
});

app_vnm.controller('ctrl-prepaid', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,uploadAgentByBatch) {
	
	$scope.model = {};
	
	var SHOPCODE = $localStorage.clientContext.shop.shopCode;
	$scope.checkClickExecute = false;
	
	$scope.isDisCreatePanel = true;
	$scope.fileNameTemplate = "Upload thông tin theo lô";
	
	
	$scope.reportFields = {
			action: 'Action', 
			subscriber: 'So thue bao', 
			parentSubscriber: 'So thue bao cha',
    		agentType: 'Loai dai ly', 
    		agentCode: 'Ma dai ly', 
			businessName: 'Ten Kinh Doanh', 
			taxcode: 'Ma so thue', 
			region: 'Vung', 
			ownerName: 'Ten chu so huu', 
			secretQuest: 'Cau hoi bi mat', 
			birthday: 'Ngay sinh', 
			contactNumber: 'So lien lac', 
			busAddress: 'Dia chi kinh doanh', 
			iccid: 'So ICCID', 
			reportEmail: 'Nhan bao cao qua mail', 
			email: 'Email', 
			province: 'Tinh', 
			district: 'Huyen', 
			idcard: 'CMT', 
			issueDate: 'Ngay cap', 
			issuePlace: 'Noi cap', 
			town: 'Phuong/Xa', 
			levelAgent: 'Cap dai ly', 
			noteError: 'Trang thai loi'
			};
	
	 var fields = [];
	 var header = [];
	    
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
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
	
	$scope.downloadFileTemplateServer = function(){
    	var attachFile = {};
    	attachFile.fileName = "Template_Upload_Agent_By_Batch.xlsx";
    	attachFile.folder = "Template_Upload_Agent_By_Batch.xlsx";
    	dowloadFile(attachFile);
    }
	
	$scope.loadDefauld = function() {}
	
	var uploaderProvince = $scope.uploaderProvince = new FileUploader({
		url: eim_url+'/bs/UploadAgencyByBatch/getListAgencyFromfile'
	});
	
	$scope.dataAgency = [];
	
	$scope.fileNameListProvinceShop = "";
	
	uploaderProvince.onAfterAddingAll = function(items){
		if(items!=null){
			uploaderProvince.uploadAll();	
		}
	} 
	
	$scope.uploadFileTemplateProvince = function(uploaderListIn, event){
		$scope.removeAllItemListAgent();
	}
	
	$scope.removeAllItemListAgent =  function(){
		// xóa danh sách tỉnh thành theo shop
		$scope.dataAgency = [];
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataAgency
		});
		
		// xóa file name
		$scope.fileNameListProvinceShop = "";
		uploaderProvince.clearQueue();
	}
	
	$scope.removeAllItem =  function(){
		$scope.checkClickExecute = false;
		$scope.dataAgency = [];
		uploaderProvince.clearQueue();
		$scope.fileNameListProvinceShop = "";
		
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataAgency
		});
	}
	
	// set data before upload for each item
	uploaderProvince.onBeforeUploadItem  = function(item){
		overLoading();
		$scope.fileNameListProvinceShop = item._file.name;
		
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}
	
	// on item upload success
	uploaderProvince.onSuccessItem = function (fileItem, response, status, headers) {
		
		$scope.dataAgency = response;
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataAgency
		});
		
		closeOverLay();
	};
	
	$scope.setDataCenterSource = function(listSource){}
	
	var initialize = function () {
		$scope.loadDefauld();
	}

	initialize();
	
	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;

  	$scope.confirmKO = function(){
  		closeOverLay();
  	}
	
  	$scope.prepareUploadAgentByBatch = function(){
		
  		$scope.checkClickExecute = true;
  		
  		if($scope.dataAgency.length ==0){
  			return 0;
  		}
  		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		uploadAgentByBatch.createUploadByBatch($scope.dataAgency, function(result) {
			
			App.unblockUI("#contentMain");
			
			if(result!= undefined && result !=null && result.status != '0'){
				bootbox.alert($translate.instant('vnm.upload_agency_batch.mess.create.upload.success'));
			}
			else {
				$scope.dataAgency = result.listResult;
				var messFail = "";
				if($scope.dataAgency!=null){
					var messFail = $translate.instant('vnm.upload_agency_batch.mess.create.upload.fail');
					messFail = messFail.replace(/###/, result.messages+"/"+$scope.dataAgency.length);
					
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.dataAgency
					});
				}else{
					messFail = $translate.instant('vnm.upload_agency_batch.mess.execute.fail');
				}
				
				
				bootbox.alert(messFail);
			}
		});
	
  	}
  	
  	
  	 $scope.setTextForFileExcelDownLoad = function(listData){
     	for(var i =0; i<listData.length;i++){
     		var subData = listData[i];
     		if(subData != null){
     			if(subData['subscriber'] != null && subData['subscriber']!= undefined
     					&& subData['subscriber'].trim() != ""){
     				subData['subscriber'] = "'"+subData['subscriber'];
     			}
     			
     			if(subData['parentSubscriber'] != null && subData['parentSubscriber']!= undefined
     					&& subData['parentSubscriber'].trim() != ""){
     				subData['parentSubscriber'] = "'"+subData['parentSubscriber'];
     			}
     			
     			if(subData['contactNumber'] != null && subData['contactNumber']!= undefined
     					&& subData['contactNumber'].trim() != ""){
     				subData['contactNumber'] = "'"+subData['contactNumber'];
     			}
     			
     			if(subData['iccid'] != null && subData['iccid']!= undefined
     					&& subData['iccid'].trim() != ""){
     				subData['iccid'] = "'"+subData['iccid'];
     			}
     			
     			if(subData['issueDate'] != null && subData['issueDate']!= undefined
     					&& subData['issueDate'].trim() != ""){
     				subData['issueDate'] = "'"+subData['issueDate'];
     			}
     			
     			if(subData['birthday'] != null && subData['birthday']!= undefined
     					&& subData['birthday'].trim() != ""){
     				subData['birthday'] = "'"+subData['birthday'];
     			}
     			
     			if(StringUtilNVL(subData['noteError']) == "" && $scope.checkClickExecute){
     				subData['noteError'] = "Thành công";
     			}
     		}
     	}
     	
     	return listData;
     }
  	 
  	 function _bodyData() {
         var data = $scope.data;
         var body = "";
         angular.forEach(data, function(dataItem) {
             var rowItems = [];

             angular.forEach(fields, function(field) {
                 if(field.indexOf('.')) {
                     field = field.split(".");
                     var curItem = dataItem;

                     // deep access to obect property
                     angular.forEach(field, function(prop){
                         if (curItem !== null && curItem !== undefined) {
                             curItem = curItem[prop];
                         }
                     });

                     data = $scope.removedComma(curItem);
                 }
                 else {
                     data = $scope.removedComma(dataItem[field]);
                 }

                 var fieldValue = data !== null ? data : ' ';

                 if (fieldValue !== undefined && angular.isObject(fieldValue)) {
                     fieldValue = _objectToString(fieldValue);
                 }

                 rowItems.push(fieldValue);
             });

             body += rowItems.toString() + '\n';
         });

         return body;
     }
  	 
  	function _convertToExcel(body) {
        return header + '\n' + body;
    }
    
    function _objectToString(object) {
        var output = '';
        angular.forEach(object, function(value, key) {
            output += key + ':' + value + ' ';
        });

        return '"' + output + '"';
    }
    
    $scope.clickDownLoad =  function() {
        var bodyData = _bodyData();
        var strData = _convertToExcel(bodyData);

        var blob = new Blob([strData], {type: "text/plain;charset=utf-8"});

        return saveAs(blob, [$scope.filename + '.csv']);
    };
    
    $scope.removeTextForFileExcelDownLoad = function(listData){
	    	for(var i =0; i<listData.length;i++){
	    		var subData = listData[i];
	    		if(subData != null){
	    			
	    			if(subData['subscriber'] != null && subData['subscriber']!= undefined
	    					&& subData['subscriber'].startsWith("'")){
	    				subData['subscriber'] = subData['subscriber'].substring(1,subData['subscriber'].length)
	    			}
	    			
	    			if(subData['parentSubscriber'] != null && subData['parentSubscriber']!= undefined
	    					&& subData['parentSubscriber'].startsWith("'")){
	    				subData['parentSubscriber'] = subData['parentSubscriber'].substring(1,subData['parentSubscriber'].length)
	    			}
	    			     
	    			if(subData['contactNumber'] != null && subData['contactNumber']!= undefined
	    					&& subData['contactNumber'].startsWith("'")){
	    				subData['contactNumber'] = subData['contactNumber'].substring(1,subData['contactNumber'].length)
	    			}
	    			
	    			if(subData['iccid'] != null && subData['iccid']!= undefined
	    					&& subData['iccid'].startsWith("'")){
	    				subData['iccid'] = subData['iccid'].substring(1,subData['iccid'].length)
	    			}
	    			
	    			if(subData['issueDate'] != null && subData['issueDate']!= undefined
	    					&& subData['issueDate'].startsWith("'")){
	    				subData['issueDate'] = subData['issueDate'].substring(1,subData['issueDate'].length)
	    			}
	    			
	    			if(subData['birthday'] != null && subData['birthday']!= undefined
	    					&& subData['birthday'].startsWith("'")){
	    				subData['birthday'] = subData['birthday'].substring(1,subData['birthday'].length)
	    			}
	     			
	    		}
	    	}
	    	
	    	return listData;
	}
    
  	$scope.ExportDataTable = function () {
			$scope.data = $scope.setTextForFileExcelDownLoad($scope.dataAgency);
			var fileNameDownload = "Result_"+$scope.fileNameTemplate;
	        $scope.filename = !!fileNameDownload ? fileNameDownload : 'export-excel';
	        fields = [];
	        header = [];
	
	        angular.forEach($scope.reportFields, function(field, key) {
	            if(!field || !key) {
	                throw new Error('error json report fields');
	            }
	            fields.push(key);
	            header.push(field);
	        });
	        
	        $scope.clickDownLoad();
	        
	        $scope.removeTextForFileExcelDownLoad($scope.dataAgency);
	}
  	
  	$scope.removedComma = function(strIn){
  		strIn = StringUtilNVL(strIn);
  		var regex = new RegExp(',', 'g');

  		//replace via regex
  		strIn = strIn.replace(regex, '');
  		return strIn;
  	}
	$scope.StatusSource = [ {
		'Id' : '1',
		'Title' : 'Chưa xử lý'
	}, {
		'Id' : '3',
		'Title' : 'Đã xử lý'
	} ,
	{
		'Id' : '9',
		'Title' : 'Bị từ chối'
	} ];

});

