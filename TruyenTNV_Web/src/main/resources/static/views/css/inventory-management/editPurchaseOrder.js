var ctxfolder = '/views/prepaid';

app_vnm.factory('ctk_editPurchaseOrder', function($http, $translate) {
	return {
		
		getAllPO : function(callback) {
			var url = eim_url + '/bs/ProductOrder/getAllPO';
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#editPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		
		getPObyID : function(poCode, orderId, callback) {
			var url = eim_url + '/bs/ProductOrder/getPObyID?poCode='+poCode+'&orderId='+orderId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#editPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		
		updatePO : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/updateFromView";
			$http.put(url, data).success(callback).error(function (callback)
			{
				App.unblockUI("#editPurchaseOrderContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			}); 
		},
		
		addPO : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/add";
			$http.post(url, data).success(callback).error(function (callback)
			{
				App.unblockUI("#editPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		
		init : function(callback) {
			var url = eim_url + "/bs/ProductOrder/init";
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#editPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		
		init : function(shopCode, shopId, callback) {
			var url = eim_url + "/bs/ProductOrder/init?shopCode="+shopCode+"&shopId="+shopId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#editPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},		
		getBank : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/getBank?paymentType="+data;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#editPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		}
		,		
		getGoods : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/getAllGoods?goodType="+data;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#editPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		}
		,		
		getDiscount : function(data1, data2, data3 , callback) {
			var url = eim_url + "/bs/ProductOrder/getDiscount?goodCode="+data1+"&quantity="+data2+"&poType="+data3;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		}
	}
});

app_vnm.controller('ctrl-editPurchaseOrder', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $localStorage, NgTableParams, ctk_editPurchaseOrder) 
{							
		
    var orderId = $location.search().orderId;
    var poCode = $location.search().poCode;
    
	$scope.tmp = false;
	$scope.model = {};
	$scope.editingData = {};
	$scope.listdiscountSub = [];
	var pod = [];
	//--------------------------------
	$scope.model.fileAttachments = [];
	
	$scope.isSubmit = false;
	//-------------------------------
	
	//----LOAD PAYMENT TYPE -- LIST BANK	
	App.blockUI({
		target : "#editPurchaseOrderContent",
		boxed : true,
		message : 'loading...'
	});
	
	ctk_editPurchaseOrder.init($localStorage.clientContext.shop.shopCode, $localStorage.clientContext.shop.shopId, function(result) {
		
		$scope.listPay = result.paymentType;
		
		App.unblockUI("#editPurchaseOrderContent");
	});
	
	///-----------------------   
	
	App.blockUI({
		target : "#editPurchaseOrderContent",
		boxed : true,
		message : 'loading...'
	});
	
	ctk_editPurchaseOrder.getPObyID(poCode, orderId, function(result) 
	{
		$scope.model.brandedShop= result.order_shopName;
		$scope.model.poid= result.poCode;
		$scope.model.orderId = result.orderId;
		$scope.model.date = result.orderDate.split("-").reverse().join("/");
		$scope.model.poType = result.orderType;
	
		$scope.model.pay = result.paymentMode;	
		
		pod = result.productOrderDetail;
		
		// $scope.searchResult = result;
		$scope.tableParams = new NgTableParams({}, {
			dataset : pod
		});
		
		setBillValue(pod);
		
		////////////////////////
		
		App.blockUI({
			target : "#editPurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});
		
		$scope.listBank = [];
		$scope.model.bank = "";
		
		    ctk_editPurchaseOrder.getBank(result.paymentMode, function(result) {
			$scope.listBank = result;
			if($scope.listBank.length < 1)
			{
				$scope.disableBank = true;
			}
			else
			{
				$scope.disableBank = false;
			}
		});		

		$scope.model.bank = result.bankName;
		/////////////////////////////////
		App.unblockUI("#editPurchaseOrderContent");
	});
	
	$scope.ValidRequired = function() {
		
//		alert($filter('date')(new Date(parseInt($scope.model.date.substr(6))), 'dd/MM/yyyy'));
//		
		if (!angular.isDefined($scope.model.brandedShop) || 
				!angular.isDefined($scope.model.poid) || 
				!angular.isDefined($scope.model.date) || 
				!angular.isDefined(pod) || pod.length < 1) 
		{
			
			return false;
		}
		return true;
	}

	$scope.del = function(item, index) {
		pod.splice(index, 1);
		setBillValue(pod);
		$scope.tableParams = new NgTableParams({}, {dataset : pod});
	};

	$scope.dateChange = function() 
	{
		alert($scope.model.date);
	};
	
	$scope.refresh = function() 
	{
		location.reload();
	};
	
	$scope.paymentTypechange = function(e) {
		
		App.blockUI({
			target : "#editPurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});
		
		$scope.listBank = [];
		$scope.model.bank = "";
		
		   ctk_editPurchaseOrder.getBank(e.paymentCode, function(result) {
			$scope.listBank = result;
			if($scope.listBank.length < 1)
			{
				$scope.disableBank = true;
			}
			else
			{
				$scope.disableBank = false;
			}
			App.unblockUI("#editPurchaseOrderContent");
		});		
	}
	
	$scope.submit = function() {
		
		if(!checkAllFileUploaded(uploader))
		{
			showAlert("editPO",'CRT-0001');
		}
		else
		{
			if ($scope.frm_editPurchaseOrder.validate()) {
				 if ($scope.ValidRequired()) {
					 
					var po = {
							"orderId":$scope.model.orderId,
							"poCode":$scope.model.poid,
							"channel":"BRANDED WEB",		
							"orderType":$scope.model.poType,	
							//"orderDate":$filter('date')(new Date(parseInt($scope.model.date.substr(6))), 'yyyy-MM-dd'),	
							"orderDate":getNow_yyyyMMdd(),
							"modifiedDate":null,		
							"aprroveDate":null,		
							"rejectDate":null,		
							"status":0,		
							"notes":"",		
							"order_shopId":$localStorage.clientContext.shop.shopId,		
							"provinceId":0,	
							"order_staffName":$localStorage.clientContext.shop.staffCode,		
							"order_staffId":$localStorage.clientContext.shop.staffId,
							"modify_staffName":$localStorage.clientContext.shop.staffCode,		
							"modify_staffId":$localStorage.clientContext.shop.staffId,	
							"approver_staffId":0,		
							"order_shopName":$scope.model.brandedShop,		
							"paymentMode":$scope.model.pay,		
							"bankName":$scope.model.bank,		
							"bankBranch":null,	
							"bankDepositReference":null,		
							"bankDepositValue":0,		
							"depositSlip":null,		
							"totalGrossValue":$scope.model.totalGross,		
							"totalDiscountvalue":$scope.model.totalDiscount,		
							"totalNetValue":$scope.model.totalNet,
							"productOrderDetail":pod,
							"attachmentData":$scope.model.fileAttachments,
							"versionId":0};
					
							App.blockUI({
								target : "#editPurchaseOrderContent",
								boxed : true,
								message : 'loading...'
							});
							
						ctk_editPurchaseOrder.updatePO(po, function(result) {
						App.unblockUI("#editPurchaseOrderContent");
						
						if(result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)	
						{
//							$scope.tmp = true;
							$scope.isSubmit = true;
							showAlert("editPO",'SUBMIT-0000');
						}
						else
						{
							showAlert("editPO",result.response_code);
						}
					});

				}
				else
				{
					showAlert("editPO",'CRT-0002');
				}
			}
			else
			{
				showAlert("editPO",'CRT-0003');
			}	
		}	
	}
	
	function setBillValue(pod)
	{
		var total_gross_temp = 0;
		var total_discount_temp = 0;
		var total_net_temp = 0;
		
		if(pod.length > 0)
		{
		    for (var i = 0, length = pod.length; i < length; i++) 
		    {
		    	total_gross_temp = total_gross_temp + pod[i].grossValue;
		    	total_discount_temp = total_discount_temp +  pod[i].discountValue;
		    	total_net_temp =  total_net_temp +  pod[i].netValue;
		    }
		}
		$scope.model.totalGross = total_gross_temp;
		$scope.model.totalDiscount = total_discount_temp;
		$scope.model.totalNet = total_net_temp;
	}
	
	$scope.loadGoods = function(e) {
		App.blockUI({
			target : "#editPurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});
		
		$scope.listMatHang = [];
		$scope.model.matHang='';
		ctk_editPurchaseOrder.getGoods(e, function(result) {
			$scope.listMatHang = result;
			App.unblockUI("#editPurchaseOrderContent");
		});
	}
	
	$scope.clearFields = function() {
		pod = [];
		$scope.tableParams = new NgTableParams({}, {dataset : pod});
	}
	
	$scope.selectGood = function(e) {
		if(e != undefined)
		{
			$scope.model.goodName = e.goodName;
			$scope.model.unitPrice = e.unitPrice;
			$scope.model.goodCode = e.goodCode;
			
			//reset fields
			$scope.model.discount = '';
			$scope.listdiscount = [];
			$scope.model.total = '';
		}
	}

	$scope.getDiscount = function(e) {
		if($scope.model.total != null && $scope.model.total !== '' && $scope.model.matHang != null && $scope.model.matHang !== '')
		{
			if($scope.model.discountSearch != (''+$scope.model.total + $scope.model.matHang))
			{
				$scope.model.discountSearch = ''+$scope.model.total + $scope.model.matHang;
				
				 if ( isNaN($scope.model.total) || !angular.isNumber(+$scope.model.total))
				 {
						showAlert("editPO",'CRT-0005');
				 }
				 else if($scope.model.total.length >= 10)
				 {				 
//						$scope.model.errorsms = 'Mặt hàng này đã tồn tại !';
//						$('#createPO').modal('show');				
						showAlert("createPO",'CRT-0006');
				 }
				 else
				 {
					 App.blockUI({
							target : "#editPurchaseOrderContent",
							boxed : true,
							message : 'loading...'
						});
						ctk_editPurchaseOrder.getDiscount($scope.model.matHang, $scope.model.total, $scope.model.poType, function(result) {
							$scope.listdiscount = result;
							App.unblockUI("#editPurchaseOrderContent");
						});
				 }				
			}
		}
		else
		{
			showAlert("editPO",'CRT-0007');
		}
	}
	
	$scope.closeDialog = function (tmp) {
		if(tmp)
		{
			location.reload();
		}
	}
	
	$scope.getDiscountSub = function(item, index) {
		
		if(item.quantity !== '' && !isNaN(item.quantity) && angular.isNumber(+item.quantity))
		{
			 if(item.quantity.length >= 10)
			 {				 
//					$scope.model.errorsms = 'Mặt hàng này đã tồn tại !';
//					$('#createPO').modal('show');				
					showAlert("createPO",'CRT-0006');
			 }
			 else
			 {
					App.blockUI({
						target : "#editPurchaseOrderContent",
						boxed : true,
						message : 'loading...'
					});
					
					ctk_editPurchaseOrder.getDiscount(item.productId, item.quantity, $scope.model.poType, function(result) {
						$scope.listdiscountSub = result;
						App.unblockUI("#editPurchaseOrderContent");
					});
			 }
		}
		else
		{
			showAlert("editPO",'CRT-0005');
		}
	}
	
	$scope.save = function() {
		
		if(!checkAllFileUploaded(uploader))
		{
			showAlert("editPO",'CRT-0001');
		}
		else
		{
			if ($scope.frm_editPurchaseOrder.validate()) {
				 if ($scope.ValidRequired()) {
					 
					var po = {
							"orderId":$scope.model.orderId,
							"poCode":$scope.model.poid,
							"channel":"BRANDED WEB",		
							"orderType":$scope.model.poType,	
							//"orderDate":$filter('date')(new Date(parseInt($scope.model.date.substr(6))), 'yyyy-MM-dd'),	
							"orderDate":getNow_yyyyMMdd(),
							"modifiedDate":null,		
							"aprroveDate":null,		
							"rejectDate":null,		
							"status":2,		
							"notes":"",		
							"order_shopId":$localStorage.clientContext.shop.shopId,		
							"provinceId":0,	
							"order_staffName":$localStorage.clientContext.shop.staffCode,		
							"order_staffId":$localStorage.clientContext.shop.staffId,
							"modify_staffName":$localStorage.clientContext.shop.staffCode,		
							"modify_staffId":$localStorage.clientContext.shop.staffId,	
							"approver_staffId":0,		
							"order_shopName":$scope.model.brandedShop,		
							"paymentMode":$scope.model.pay,		
							"bankName":$scope.model.bank,		
							"bankBranch":null,	
							"bankDepositReference":null,		
							"bankDepositValue":0,		
							"depositSlip":null,		
							"totalGrossValue":100000,		
							"totalDiscountvalue":0,		
							"totalNetValue":100000,
							"productOrderDetail":pod,
							"attachmentData":$scope.model.fileAttachments,
							"versionId":0};
					
							App.blockUI({
								target : "#editPurchaseOrderContent",
								boxed : true,
								message : 'loading...'
							});

						ctk_editPurchaseOrder.updatePO(po, function(result) {
						App.unblockUI("#editPurchaseOrderContent");
						
						if(result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)	
						{
//							$scope.tmp = true;
							
							showAlert("editPO",'SUBMIT-0000');
						}
						else
						{
							showAlert("editPO",result.response_code);
						}
					});

				}
				else
				{
					showAlert("editPO",'CRT-0002');
				}
			}
			else
			{
				showAlert("editPO",'CRT-0003');
			}	
		}
	}
	

	$scope.edit = function(item, index)
	{
		$scope.editingData[item.productId] = true;
		item.discountPercent = '';
	}
	
	$scope.changeQuantity = function()
	{
		$scope.listdiscount= [];
		$scope.model.discount = '';
	}
	
	$scope.changeQuantityitem = function(item)
	{
		$scope.listdiscountSub= [];
		item.discountPercent = '';
	}
	
	$scope.fnEdit = function(item, index)
	{
		 if(isNaN(item.discountPercent) || !angular.isNumber(+item.discountPercent) || item.discountPercent === '')
			 showAlert("editPO",'CRT-0012');
		 else
		 {
			 if ( !isNaN(item.quantity) && angular.isNumber(+item.quantity) )
			 {
				 item.grossValue = item.quantity * 	item.unitPrice;	 
				 item.discountValue = (item.grossValue *  item.discountPercent) /100;	
				 item.netValue = item.grossValue - item.discountValue;	
			 }
			 else
			 {
				 showAlert("editPO",'CRT-0005');
			 }
			 
			 $scope.editingData[item.productId] = false;
			 
			 setBillValue(pod);
		 }
	}
	
	//upload file
   //-------------
    var uploader = $scope.uploader = new FileUploader({
        url: eim_url+'/bs/ProductOrder/upload',
        headers: 
        {
        	Authorization: 'Bearer ' + $localStorage.clientContext.token
         //Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJudjEiLCJhdWQiOiIiLCJmdWxsX25hbWUiOiJOaMOibiB2acOqbiAxIiwicm9sZXMiOiJWTk0uQ1JNLkVNUExPWSxWRVRDX1RPTExfQVVESVRPUixWRVRDX1RPTExfQVVESVRPUiIsImV4cCI6MTUwODkwMDEwNiwiaWF0IjoxNTA4Mjk1MzA2LCJlbWFpbCI6Im5oYW52aWVuQHZubS5jb20udm4iLCJhcHBfY29kZSI6IlZOTS5TRUMifQ.Y-tC6aXvTydSZ92IIXfn04XjzSZuDtFyrwgHoDI73yi2CHEpyZObegqm5Bbh3psmULzQ5jo3vdiKVbvMUbGMms0n1nLkGSkggIAKyYS9eJ21O1zTyFuFdomnMQ7FkDdxf8EzX1A_TxG_HwuhN7q05MGQUyLrCYoTv4J7dqM5sNF42gbVXfkZ5zkZHyJUR3cy5nidlli_84CQ-GI5rbLU9eqlkbozdn70cFgv6Ah4laJfyz52Re10tYjcj1ui0NAVL1TxUf-9tYLTFcFIoXtKv2dGb8h8AL7Nv82-0Ww9nDXI4aLhRg6Ljn4omKldQtGmOn9M8Ufvy2tHqzngFHLIpw'
        }
    });
    
    //config uploader
    uploader.queueLimit = 10;
    
    // Another user-defined filter
/*    uploader.filters.push({
        'name': 'enforceMaxFileSize',
        'fn': function (item) {
        	
        	var sizeFile = item.size;
        	if(sizeFile <=10485760){
        		return true;
        	}else{
        		var fileName = item.name;
        		showAlert("editPO","CRT-0008");
        		return false;
        	}
        }
    });*/
    
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
        fileItem.disabledNote = true;
        fileItem.disabledAttachType = true;
    };
    
    uploader.onErrorItem = function (fileItem, response, status, headers) {
    	if(status == 403)
    	{
    		showAlert("editPO","Phiên làm việc đã hết hạn");
    	}
    	else
    	{
    		showAlert("editPO","CRT-0009");
    	}
    }
    
    uploader.onBeforeUploadItem  = function(item){
    	var identityDocType = StringUtilNVL(item.documentType);
    	var identityDocNote = StringUtilNVL(item.identityDocNote);
    	
    	item.attachMentIdClient = createTimeStamp();
    	var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);
    	
        var form_data = new FormData();
        form_data.append("identityDocType", identityDocType);
        form_data.append("identityDocNote", identityDocNote);
        form_data.append("attachMentIdClient", attachMentIdClient);
        
    	item.formData.push(form_data);
    	
    }
    
    $scope.uploadAllFile =  function(uploaderIn){
    	if(uploaderIn.queue.length > 1)
    	{
    		showAlert("editPO","CRT-0010");
    	}
    	else
    	{
        	checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
        	if(!checkListTotalSize)
        	{
        		showAlert("editPO","CRT-0011");
        		return 0;
        	}
        	else
        	{
        		uploaderIn.uploadAll();	
        	}
    	}
    }
	//--------------------------------------------------------------
    
    
    $scope.onChange = function(files) {
		$scope.fileExt = $("#testFile").val().split(".").pop();
	}

    $scope.isImage = function(ext) {
		if (ext) {
			return ext == "jpg" || ext == "jpeg" || ext == "gif"
					|| ext == "png"
		}
	}
			
		$scope.uploadedFilePreview = function(element, imagePreview, fileExt, attachMentIdIn, attachMentType) {
			var idRemove = $("#"+attachMentIdIn).val();
			var attachMentType = $("#"+attachMentType).val();
			removeItemQueueById(uploader2, idRemove);

			$scope.$apply(function($scope) {
				$scope.files = element.files;
				if ($scope.files[0] == undefined) return;
				
				var fileExtValue = $scope.files[0].name.split(".").pop();
				
				$scope.model[fileExt] = fileExtValue;
				
				//create id imange in queue uploader
				idAttachMentVal = "";
				idAttachMentTypeInput = "";
				
				idAttachMentVal = createTimeStamp();
				idAttachMentTypeInput = attachMentType;
				
				$("#"+attachMentIdIn).val(idAttachMentVal);
				
				// icon preview
				var fileReader = new FileReader();
				$scope.model[imagePreview] = null;
				fileReader.readAsDataURL(document
						.getElementById(element.id).files[0]);
				
				fileReader.onload = function(oFREvent) {
					$timeout(function() {
						$scope.model[imagePreview] = oFREvent.target.result;
					});
				};
			});
}
		
	$scope.deleteImage = function(idFileImange, imageExtId, idRemoveIn) {
		//remove file image by id
		$("#"+idFileImange).val("");
		//remove image preview
		$scope.model[imageExtId]=null;
		var idRemoveVal = $("#"+idRemoveIn).val();
		removeItemQueueById(uploader2,idRemoveVal);
		$scope.removeElementAttachmenById(idRemoveVal);
	}
	
	$scope.onFilesSelected = function(files) {};		
	$scope.copyValueToOtherInput = function(elementModel, elementModelDepen) {
		$scope.model[elementModelDepen] = $scope.model[elementModel];
	};
	//------------------------------------------------------------------
	
	   //remove element in list post to server by item
    $scope.removeElementAttachmenByItem =  function(item){
    	item.isSuccess = false;
    	item.isCancel= false;
    	item.isError = false;
    	item.isReady = false;
    	item.isUploading = false;
    	item.isSuccess= false;
    	
    	angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
    	   if(objectAttact.attachMentIdClient == item.attachMentIdClient){
    	        $scope.model.fileAttachments.splice(index,1);   
    	   }
    	});
    	
    	item.remove();
    }
    
  //remove element in list post to server by item
    $scope.removeElementAttachmenById =  function(idAttachMent){
    	angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
    	   if(objectAttact.attachMentIdClient == idAttachMent){
    	        $scope.model.fileAttachments.splice(index,1);   
    	   }
    	});
    }
    
    $scope.removeAllItem =  function(){
    	$scope.model.fileAttachments = [];
    	uploader.clearQueue()
    }
    
    $scope.cancel = function () {
         return 1;
    }
    
    $scope.checkValid = function(obj){
    	if(obj== undefined || obj==null || obj=="") return true;
    	return false;
    }
    //---------------------------------------------------------
	//end upload
	
	$scope.sleep = function sleep(milliseconds) {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
		    if ((new Date().getTime() - start) > milliseconds){
		      break;
		    }
		  }
		}
	
	function showAlert(idModal, message)
	{
//		$scope.model.errorsms = message;
//		$('#'+idModal).modal('show');
//		bootbox.alert(message);
		if(message === 'SUBMIT-0000')
		{
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.' + message);
			mess = mess.replace('~poCode~', $scope.model.poid);
			mess = mess.replace('~poType~', $scope.model.poType);
/*			mess = mess.replace('~poGross~', $scope.model.totalGross);
			mess = mess.replace('~poDiscount~', $scope.model.totalDiscount);
			mess = mess.replace('~poNet~', $scope.model.totalNet);*/
			mess = mess.replace('~poGross~', $filter('number')($scope.model.totalGross));
			mess = mess.replace('~poDiscount~', $filter('number')($scope.model.totalDiscount));
			mess = mess.replace('~poNet~', $filter('number')($scope.model.totalNet));
			bootbox.alert({ message: mess, callback: function(){
				//$scope.isSubmit = true;
			}});	
		}
		else
		{
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));
		}
	}
	
	$scope.add = function(){
		
		 if (!isNaN($scope.model.total)
					&& angular.isNumber(+$scope.model.total)
					&& ($scope.model.total !== '')
					&& !isNaN($scope.model.unitPrice)
					&& angular.isNumber(+$scope.model.unitPrice)
//					&& ($scope.model.unitPrice !== '')
					&& !isNaN($scope.model.discount)
					&& angular.isNumber(+$scope.model.discount)
//					&& ($scope.model.discount !== '')
					)
		 {
			 //check mat hang da ton tai chua
			 if(angular.toJson(pod).indexOf($scope.model.matHang) >-1)
			 {				 			
					showAlert("editPO",'CRT-0013');
			 }
			 else
			 {
					var podAdding = {"orderDetailId":0,
							"orderId":0,
							"poCode":$scope.model.poid,
							"productType":$scope.model.matHangType,
							"productId":$scope.model.matHang,
							"productName":$scope.model.goodName,
							"quantity":$scope.model.total,
							"grossValue":$scope.model.total * $scope.model.unitPrice,
							"discountPercent":$scope.model.discount,
							"discountValue":($scope.model.discount/100)* ($scope.model.total * $scope.model.unitPrice),
							"netValue":($scope.model.total * $scope.model.unitPrice) - ($scope.model.discount/100)* ($scope.model.total * $scope.model.unitPrice),
							"unitPrice":$scope.model.unitPrice,
							"versionId":0};
						
						pod.push(podAdding);
						
						setBillValue(pod);
						
						$scope.tableParams = new NgTableParams({}, {dataset : pod});						
						$scope.editingData[$scope.model.matHang] = false;
				 }
		 }
		 else
		 {
//				showAlert("editPO",'Vui lòng kiếm tra lại thông tin yêu cầu !');
			 if(isNaN($scope.model.total) || !angular.isNumber(+$scope.model.total) || $scope.model.total === '')
				showAlert("createPO",'CRT-0005');
			 else if(isNaN($scope.model.discount) || !angular.isNumber(+$scope.model.discount) || $scope.model.discount === '')
				showAlert("createPO",'CRT-0012');
			 else
				showAlert("createPO",'CRT-0002');
		 }
	}

});

app_vnm.directive('ngThumb', [ '$window', function($window) {
	var helper = {
		support : !!($window.FileReader && $window.CanvasRenderingContext2D),
		isFile : function(item) {
			return angular.isObject(item) && item instanceof $window.File;
		},
		isImage : function(file) {
			var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
			return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
		}
	};

	return {
		restrict : 'A',
		template : '<canvas/>',
		link : function(scope, element, attributes) {
			if (!helper.support)
				return;

			var params = scope.$eval(attributes.ngThumb);

			if (!helper.isFile(params.file))
				return;
			if (!helper.isImage(params.file))
				return;

			var canvas = element.find('canvas');
			var reader = new FileReader();

			reader.onload = onLoadFile;
			reader.readAsDataURL(params.file);

			function onLoadFile(event) {
				var img = new Image();
				img.onload = onLoadImage;
				img.src = event.target.result;
			}

			function onLoadImage() {
				var width = params.width || this.width / this.height * params.height;
				var height = params.height || this.height / this.width * params.width;
				canvas.attr({
					width : width,
					height : height
				});
				canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
			}
		}
	};
} ]);

app_vnm.controller('edit', function($scope, $rootScope, $compile, $uibModal, $confirm, $uibModalInstance, searchPrepaid_service, para) {
//	$scope.model = {};
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	}
	$scope.initData = function() {
		angular.copy(para, $scope.model);
	}
	$scope.initData();
	$scope.submit = function() {

		$uibModalInstance.close($scope.model);
	}

});

function overLoading(message){
	App.blockUI({
		message: message
	});
	$(".blockOverlay").css("background-color", "#000000");
	$(this).css("opacity", "1");
}

function closeOverLay(){
	$.unblockUI();
}


function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function checkModelVisible(model){
	if(model==undefined || model == null) return true;
	return false;
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

//get total size of list file upload
function getTotalSizeListFileUpload(uploaderIn){
	var listFileTotalSizeByte = 0;
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
		var fileSize = item.file.size;
		listFileTotalSizeByte += fileSize;
	}
	var listFileTotalSizeMB = listFileTotalSizeByte/1024/1024;
	if(listFileTotalSizeMB >10){
		return true;
	}
	
	return true;
}


//get time ddMMyy
function getNow_ddMMyy(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = dd + '/' + mm + '/' + yyyy;
	
	return today;
}

//get time ddMMyy
function getNow_yyyyMMdd(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = yyyy + '-' + mm + '-' + dd;
	
	return today;
}

//remove file in queue by id
function removeItemQueueById(uploader, attachMentIdClient){
	var checkFileAllisUpload = true;
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		if(item.attachMentIdClient == attachMentIdClient){
			item.remove();	
		}
	}
}
