var ctxfolder = '/views/prepaid';

app_vnm.factory('ctk_createPurchaseOrder', function($http, $translate) {
	return {
		
		getAllPO : function(callback) {
			var url = eim_url + '/bs/ProductOrder/getAllPO';
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		},
		
		addPO : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/add";
			$http.post(url, data).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			}); 
		},
		
		updatePO : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/update";
			$http.put(url, data).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			}); 
		},
		
		savePO : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/save";
			$http.post(url, data).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			}); 
		},
		
		init : function(shopCode, shopId, callback) {
			var url = eim_url + "/bs/ProductOrder/init?shopCode="+shopCode+"&shopId="+shopId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		}
		,		
		getBank : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/getBank?paymentType="+data;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		}
		,		
		getGoods : function(data, callback) {
			var url = eim_url + "/bs/ProductOrder/getAllGoods?goodType="+data;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
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
		,
		checkFriendVnm : function(shopId, callback) {
			var url = eim_url + "/bs/ProductOrder/checkFriendVnmVald?shopId="+shopId;
			$http.get(url).success(callback).error(function (callback)
			{
				App.unblockUI("#createPurchaseOrderContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			}); 
		}
	}
});

app_vnm.controller('ctrl-createPurchaseOrder', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $localStorage, NgTableParams, ctk_createPurchaseOrder) 
{
	
	$scope.tmp = false;
	$scope.disableBank = false;
	$scope.model = {};
	$scope.editingData = {};
	$scope.listdiscountSub = [];
	var pod = [];
	var isSave = false;
	$scope.isSubmit = false;
	// --------------------------------
	$scope.model.fileAttachments = [];
	// -------------------------------
// var totalGross = 0;
// var totalDiscount = 0;
// var totalNet = 0;
	//
	
	App.blockUI({
		target : "#createPurchaseOrderContent",
		boxed : true,
		message : 'loading...'
	});
	
	ctk_createPurchaseOrder.init($localStorage.clientContext.shop.shopCode, $localStorage.clientContext.shop.shopId, function(result) {
		$scope.model.brandedShop = $localStorage.clientContext.shop.shopCode;
		$scope.model.poid= result.poCode;
		$scope.listPay = result.paymentType;					
		$scope.listOrderType = result.orderType;
		
		$scope.model.date = getNow_ddMMyy();	
		
		setDefaultBillValue();
		
		App.unblockUI("#createPurchaseOrderContent");
	});
	
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			pay : {
				required : true,
				maxlength : 255
			},
			matHang : {
				required : true,
				maxlength : 255
			}
		},
		messages : {
			pay : {
				required : $translate.instant('vnm.form_create_purchase_order.mess.payment.method.required'),
				minlength : $translate.instant('vnm.form_create_purchase_order.mess.isdn.less.than.ten'),
				maxlength : $translate.instant('vnm.form_create_purchase_order.mess.isdn.more.than.eleven')
			},
			matHang : {
				required : $translate.instant('vnm.form_create_purchase_order.mess.good.info.required'),
				minlength : $translate.instant('vnm.form_create_purchase_order.mess.id.card.less.than.eight'),
				maxlength : $translate.instant('vnm.form_create_purchase_order.mess.id.card.more.than.fithteen')
			}
		}
	}

// $scope.model.fromDate = $filter('date')(Date.now(), 'dd/MM/yyyy');

	$scope.$watch('date', function (newValue) {
	    $scope.model.date = $filter('date')(newValue, 'yyyy-MM-dd'); 
	});
	
	$scope.ValidRequired = function() {
		
// alert($filter('date')(new Date(parseInt($scope.model.date.substr(6))), 'dd/MM/yyyy'));
//		
		if (!angular.isDefined($scope.model.brandedShop) || 
				!angular.isDefined($scope.model.poid) || 
				!angular.isDefined($scope.model.date) || 
				!angular.isDefined($scope.model.matHangType) || 
				!angular.isDefined($scope.model.matHang) || 
				!angular.isDefined($scope.model.total) || 
				!angular.isDefined($scope.model.discount) || 
				!angular.isDefined(pod) || pod.length < 1) 
		{
			
			return false;
		}
		return true;
	}
	
	// $scope.searchResult = result;
	$scope.tableParams = new NgTableParams({}, {
		dataset : pod
	});

	$scope.dateChange = function() 
	{
		alert($scope.model.date);
	};
	
	$scope.refresh = function() 
	{
		location.reload();
	};
	
	$scope.changedPoType = function() 
	{
// $scope.model.total = "";
		$scope.model.discount = "";
// $scope.model.matHang = "";
		pod = [];
		$scope.tableParams = new NgTableParams({}, {dataset : pod});
		setDefaultBillValue();
	};
		
	$scope.submit = function() {
		App.blockUI({
			target : "#createPurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});
		
		ctk_createPurchaseOrder.checkFriendVnm($localStorage.clientContext.shop.shopId, function(response) {
			var isFriend = false; 
			if (response.response_code != null && response.response_code == '1') {
				isFriend = true;
			}
			App.unblockUI("#createPurchaseOrderContent");
			if (!isFriend) {
				bootbox.alert($translate.instant('vnm.form_create_purchase_order.mess.shop.permission.required'));
			} else {
				if(!checkAllFileUploaded(uploader))
				{
					showAlert("createPO",'CRT-0001');
				}
				else
				{
					if ($scope.frm_createPurchaseOrder.validate()) {
						 if ($scope.ValidRequired()) {
							
							var po = {
									"orderId":0,
									"poCode":$scope.model.poid,
									"channel":"BRANDED WEB",		
									"orderType":$scope.model.poType,	
									// "orderDate":$filter('date')(new Date(parseInt($scope.model.date.substr(6))), 'yyyy-MM-dd'),
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
							
									
								if(isSave)
								{		
									// update
									App.blockUI({
										target : "#createPurchaseOrderContent",
										boxed : true,
										message : 'loading...'
									});
									
									ctk_createPurchaseOrder.updatePO(po, function(result) {
										App.unblockUI("#createPurchaseOrderContent");
										
										if(result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)	
										{
											showAlert("createPO",'SUBMIT-0000');
											$scope.isSubmit = true;
										}
										else
										{
											showAlert("createPO",result.response_code);
										}
									});
								}
								else
								{
									// insert
									App.blockUI({
										target : "#createPurchaseOrderContent",
										boxed : true,
										message : 'loading...'
									});
									
									ctk_createPurchaseOrder.addPO(po, function(result) {
										App.unblockUI("#createPurchaseOrderContent");
										
										if(result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)	
										{
											// $scope.tmp = true; // bo reload
											$scope.isSubmit = true;
											showAlert("createPO",'SUBMIT-0000');
										}
										else
										{
											showAlert("createPO",result.response_code);
										}
									});
								}
						}
						else
						{
							showAlert("createPO",'CRT-0002');
							// $scope.model.errorsms = 'Vui lòng nhập đầy đủ thông tin đơn hàng!';
							// $('#createPO').modal('show');
						}
					}
					else
					{
						showAlert("createPO",'CRT-0003');
						// $scope.model.errorsms = 'Vui lòng kiểm tra lại thông tin đơn hàng!';
						// $('#createPO').modal('show');
					}
				}
			}
		});
		
	}
	
	$scope.paymentTypechange = function(e) {
		
		App.blockUI({
			target : "#createPurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});
		
		$scope.listBank = [];
		$scope.model.bank = "";
		
// $scope.listOrderType = [];
// $scope.model.poType = "";
		
		ctk_createPurchaseOrder.getBank(e.paymentCode, function(result) {
			$scope.listBank = result;
			if($scope.listBank.length < 1)
			{
				$scope.disableBank = true;
			}
			else
			{
				$scope.disableBank = false;
			}
			App.unblockUI("#createPurchaseOrderContent");
		});		
	}
	
	$scope.loadGoods = function(e) {
		App.blockUI({
			target : "#createPurchaseOrderContent",
			boxed : true,
			message : 'loading...'
		});
		
		$scope.listMatHang = [];
		$scope.model.matHang='';
		ctk_createPurchaseOrder.getGoods(e, function(result) {
			$scope.listMatHang = result;
			
			App.unblockUI("#createPurchaseOrderContent");
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
			
			// reset fields
			$scope.model.discount = '';
			$scope.listdiscount = [];
			$scope.model.total = '';
		}
	}

	$scope.getDiscount = function(e) {
		
		if($scope.model.poType == null || $scope.model.poType === '')
		{
			showAlert("createPO",'CRT-0004');
		}
		else
		{
			if($scope.model.total != null && $scope.model.total !== '' && $scope.model.matHang != null && $scope.model.matHang !== '')
			{
				if($scope.model.discountSearch != (''+$scope.model.total + $scope.model.matHang + $scope.model.poType))
				{
					$scope.model.discountSearch = ''+$scope.model.total + $scope.model.matHang + $scope.model.poType;
					
					 if ( isNaN($scope.model.total) || !angular.isNumber(+$scope.model.total))
					 {
						 // $scope.model.errorsms = 'Vui lòng nhập lại số lượng!';
						 // $('#createPO').modal('show');
							showAlert("createPO",'CRT-0005');
					 }
					 else if($scope.model.total.length >= 10)
					 {				 
						 // $scope.model.errorsms = 'Mặt hàng này đã tồn tại !';
						 // $('#createPO').modal('show');
							showAlert("createPO",'CRT-0006');
					 }
					 else
					 {
						 App.blockUI({
								target : "#createPurchaseOrderContent",
								boxed : true,
								message : 'loading...'
							});
						 
							ctk_createPurchaseOrder.getDiscount($scope.model.matHang, $scope.model.total, $scope.model.poType, function(result) {
								$scope.listdiscount = result;
								
								App.unblockUI("#createPurchaseOrderContent");
							});
					 }				
				}
			}
			else
			{
				// $scope.model.errorsms = 'Vui lòng chọn mã sản phẩm và số lượng!';
				// $('#createPO').modal('show');
				showAlert("createPO",'CRT-0007');
			}
		}
	}
	
	$scope.closeDialog = function (tmp) {
		// alert(tmp);
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
				 // $scope.model.errorsms = 'Mặt hàng này đã tồn tại !';
				 // $('#createPO').modal('show');
					showAlert("createPO",'CRT-0006');
			 }
			 else
			 {
					App.blockUI({
						target : "#createPurchaseOrderContent",
						boxed : true,
						message : 'loading...'
					});
					
					ctk_createPurchaseOrder.getDiscount(item.productId, item.quantity, $scope.model.poType, function(result) {
						$scope.listdiscountSub = result;
						
						App.unblockUI("#createPurchaseOrderContent");
					});
			 }
		}
		else
		{
			// $scope.model.errorsms = 'Vui lòng nhập lại số lượng!';
			// $('#createPO').modal('show');
			showAlert("createPO",'CRT-0005');
		}
	}
	
	$scope.save = function() 
	{
		if(!checkAllFileUploaded(uploader))
		{
			showAlert("createPO",'CRT-0001');
		}
		else
		{
			if ($scope.frm_createPurchaseOrder.validate()) {
				 if ($scope.ValidRequired()) {
					 
					var po = {
							"orderId":0,
							"poCode":$scope.model.poid,
							"channel":"BRANDED WEB",		
							"orderType":$scope.model.poType,	
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
							"totalGrossValue":$scope.model.totalGross,		
							"totalDiscountvalue":$scope.model.totalDiscount,		
							"totalNetValue":$scope.model.totalNet,
							"productOrderDetail":pod,
							"attachmentData":$scope.model.fileAttachments,
							"versionId":0};
					
							if(!isSave)
							{
								App.blockUI({
									target : "#createPurchaseOrderContent",
									boxed : true,
									message : 'loading...'
								});
								
								ctk_createPurchaseOrder.savePO(po, function(result) {
									
									App.unblockUI("#createPurchaseOrderContent");
									
									if(result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)	
									{
										// $scope.tmp = true; //cai nay lam co reload lai trang khi luu thanh cong , nhung gio ko can nua
										isSave = true;// Ghi nhan da luu
										showAlert("createPO",'0000');
									}
									else
									{
										showAlert("createPO",result.response_code);
									}
								});
							}
							else
							{
								App.blockUI({
									target : "#createPurchaseOrderContent",
									boxed : true,
									message : 'loading...'
								});
								
								ctk_createPurchaseOrder.updatePO(po, function(result) {
									App.unblockUI("#createPurchaseOrderContent");
									
									if(result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1)	
									{
										// $scope.tmp = true; //cai nay lam co reload lai trang khi luu thanh cong , nhung gio ko can nua
										isSave = true;// Ghi nhan da luu
										showAlert("createPO",'0000');
									}
									else
									{
										showAlert("createPO",result.response_code);
									}
								});
							}
				}
				else
				{
					showAlert("createPO",'CRT-0002');
				}
			}
			else
			{
				showAlert("createPO",'CRT-0003');
			}
		}		
	}
	
	// upload file
   // -------------
    var uploader = $scope.uploader = new FileUploader({
        url: eim_url+'/bs/ProductOrder/upload',
        headers: 
        {
         Authorization: 'Bearer ' + $localStorage.clientContext.token
        }
    });
    
    // config uploader
    uploader.queueLimit = 10;
    
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
    	showAlert("createPO","CRT-0009");
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
    		showAlert("createPO","CRT-0010");
    	}
    	else
    	{
        	checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
        	if(!checkListTotalSize)
        	{
        		showAlert("createPO","CRT-0011");
        		return 0;
        	}
        	else
        	{
        		uploaderIn.uploadAll();	
        	}
    	}
    }
	// --------------------------------------------------------------
    
    
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
				
				// create id imange in queue uploader
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
		// remove file image by id
		$("#"+idFileImange).val("");
		// remove image preview
		$scope.model[imageExtId]=null;
		var idRemoveVal = $("#"+idRemoveIn).val();
		removeItemQueueById(uploader2,idRemoveVal);
		$scope.removeElementAttachmenById(idRemoveVal);
	}
	
	$scope.onFilesSelected = function(files) {};
		
	$scope.copyValueToOtherInput = function(elementModel, elementModelDepen) {
		$scope.model[elementModelDepen] = $scope.model[elementModel];
	};
	// ------------------------------------------------------------------
	
	   // remove element in list post to server by item
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
    
  // remove element in list post to server by item
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
		if(message === 'SUBMIT-0000')
		{
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.' + message);
			mess = mess.replace('~poCode~', $scope.model.poid);
			mess = mess.replace('~poType~', $scope.model.poType);
			mess = mess.replace('~poGross~', $filter('number')($scope.model.totalGross));
			mess = mess.replace('~poDiscount~', $filter('number')($scope.model.totalDiscount));
			mess = mess.replace('~poNet~', $filter('number')($scope.model.totalNet));
			bootbox.alert({ message: mess, callback: function(){ location.reload(); }});	
		}		
		else
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));
	}
	
	function setDefaultBillValue()
	{
		$scope.model.totalGross = 0;
		$scope.model.totalDiscount = 0;
		$scope.model.totalNet = 0;
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
	
	$scope.del = function(item, index) 
	{			
		pod.splice(index, 1);
		
		setBillValue(pod);
		
		$scope.tableParams = new NgTableParams({}, {dataset : pod});
	};
	
	

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
				 showAlert("createPO",'CRT-0012');
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
				 // $scope.model.errorsms = 'Vui lòng nhập chính xác số lượng!';
				 // $('#createPO').modal('show');
				 showAlert("createPO",'CRT-0005');
			 }
			 
			 $scope.editingData[item.productId] = false;
			 
			 setBillValue(pod);
		 }
	}
	
	$scope.add = function(){
		
		 if (!isNaN($scope.model.total)
					&& angular.isNumber(+$scope.model.total)
					&& ($scope.model.total !== '')
					&& !isNaN($scope.model.unitPrice)
					&& angular.isNumber(+$scope.model.unitPrice)
					&& !isNaN($scope.model.discount)
					&& angular.isNumber(+$scope.model.discount)
					&& ($scope.model.discount !== '')
					)
		 {
			 // check mat hang da ton tai chua
			 if(angular.toJson(pod).indexOf($scope.model.matHang) >-1)
			 {				 
					showAlert("createPO",'CRT-0013');
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
			 if(isNaN($scope.model.total) || !angular.isNumber(+$scope.model.total) || $scope.model.total === '')
				showAlert("createPO",'CRT-0005');
			 
			 else if(isNaN($scope.model.discount) || !angular.isNumber(+$scope.model.discount) || $scope.model.discount === '')
				 showAlert("createPO",'CRT-0012');
			 else
				 showAlert("createPO",'CRT-0003');
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
// $scope.model = {};
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

// get total size of list file upload
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


// get time ddMMyy
function getNow_ddMMyy(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; // January is 0!
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

// get time ddMMyy
function getNow_yyyyMMdd(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; // January is 0!
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

// remove file in queue by id
function removeItemQueueById(uploader, attachMentIdClient){
	var checkFileAllisUpload = true;
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		if(item.attachMentIdClient == attachMentIdClient){
			item.remove();	
		}
	}
}
