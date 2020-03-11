var ctxfolder = '/views/prepaid';

app_vnm.factory('ctk_createPurchaseOrderForBS', function($http, $translate) {
	return {
		addPO : function(data, callback) {
			var url = eim_url + "/bs/ProductOrderMPV/add";
			$http.post(url, data).success(callback).error(function(callback) {
				App.unblockUI("#createPurchaseOrderForBSContent");
				if("403" == callback.status){
					bootbox.alert(callback.status + " : " + callback.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
				}
			});
		},
		init : function(shopCode, shopId, callback) {
			var url = eim_url + "/bs/ProductOrderMPV/init?shopCode=" + shopCode + "&shopId=" + shopId;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#createPurchaseOrderForBSContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getListStock : function(shopId, shopCode, blCreate, callback) {
			var url = eim_url + "/bs/Stock/getListStockExport?shopId=" + shopId + "&shopCode=" + shopCode + "&blCreate=" + blCreate;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#createPurchaseOrderForBSContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getGoods : function(data, callback) {
			var url = eim_url + "/bs/ProductOrderMPV/getAllGoods?goodType=" + data.goodType + "&shopId=" + data.shopId;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#createPurchaseOrderForBSContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getDiscount : function(data1, data2, data3, callback) {
			var url = eim_url + "/bs/ProductOrder/getDiscount?goodCode=" + data1 + "&quantity=" + data2 + "&poType=" + data3;
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#createPurchaseOrderForBSContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		}
	}
});

app_vnm.controller('ctrl-createPurchaseOrderForBS', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
	$filter, $localStorage, NgTableParams, ctk_createPurchaseOrderForBS) {
	
	//Validate Input
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			stock : {
				required : true,
				maxlength : 255
			},
			matHang : {
				required : true,
				maxlength : 255
			}
		},
		messages : {
			stock : {
				required : "Vui lòng nhập kho xuất",
			},
			matHang : {
				required : "Vui lòng nhập thông tin mặt hàng",
			}
		}
	}
	//end validate input

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
	$scope.listStock = [];
	$scope.listOrderType = [];
	$scope.model.discount = 0;
	// -------------------------------
	// var totalGross = 0;
	// var totalDiscount = 0;
	// var totalNet = 0;
	//

	App.blockUI({
		target : "#createPurchaseOrderForBSContent",
		boxed : true,
		message : 'loading...'
	});

	//INIT
	ctk_createPurchaseOrderForBS.init($localStorage.clientContext.shop.shopCode, $localStorage.clientContext.shop.shopId, function(result) {
		$scope.model.brandedShop = $localStorage.clientContext.shop.shopCode;
		$scope.model.poid = result.poCode;
		$scope.listPay = result.paymentType;
		$scope.listOrderType = result.orderType;
		$scope.model.poType = result.orderType[0];
		$scope.model.date = getNow_ddMMyy();

		setDefaultBillValue();

		App.unblockUI("#createPurchaseOrderForBSContent");
	});
	//end init
	ctk_createPurchaseOrderForBS.getListStock($localStorage.clientContext.shop.shopId, $localStorage.clientContext.shop.shopCode, true, function(dataStock) {
		if (dataStock.length > 0) {
			$scope.listStock = dataStock;
		}
		App.unblockUI("#createPurchaseOrderForBSContent");
	});
	//SetDefaultBillValue
	function setDefaultBillValue() {
		$scope.model.totalGross = 0;
		$scope.model.totalNet = 0;
	}
	//end setDefaultBillValue

	//Var Uploader
	var uploader = $scope.uploader = new FileUploader({
		url : eim_url + '/bs/ProductOrder/upload',
		headers : {
			Authorization : 'Bearer ' + $localStorage.clientContext.token
		}
	});

	uploader.queueLimit = 10;
	uploader.filters.push({
		'name' : 'enforceMaxFileSize',
		'fn' : function(item, options) {
			var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
			if ('|jpg|png|jpeg|bmp|gif|'.indexOf(type) == -1) {
				var fileName = item.name;
				$scope.messages = "Tệp tin " + fileName + " không hợp lệ.";
				App.notifyDanger($scope.messages);
				return false;
			} else {
				var sizeFile = item.size;
				if (sizeFile <= 10485760) {
					return true;
				} else {
					var fileName = item.name;
					$scope.messages = "Dung lượng tệp " + fileName + " không được vượt quá 10MB";
					App.notifyDanger($scope.messages);
					return false;
				}
			}
		}
	});

	uploader.onSuccessItem = function(fileItem, response, status, headers) {
		$scope.model.fileAttachments.push(response);
		fileItem.disabledNote = true;
		fileItem.disabledAttachType = true;
	};

	uploader.onErrorItem = function(fileItem, response, status, headers) {
		showAlert("createPO", "CRT-0009");
	}

	uploader.onBeforeUploadItem = function(item) {
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

	$scope.isImage = function(ext) {
		if (ext) {
			return ext == "jpg" || ext == "jpeg" || ext == "gif"
				|| ext == "png"
		}
	}

	$scope.uploadedFilePreview = function(element, imagePreview, fileExt, attachMentIdIn, attachMentType) {
		var idRemove = $("#" + attachMentIdIn).val();
		var attachMentType = $("#" + attachMentType).val();
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

			$("#" + attachMentIdIn).val(idAttachMentVal);

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
		$("#" + idFileImange).val("");
		// remove image preview
		$scope.model[imageExtId] = null;
		var idRemoveVal = $("#" + idRemoveIn).val();
		removeItemQueueById(uploader2, idRemoveVal);
		$scope.removeElementAttachmenById(idRemoveVal);
	}

	$scope.onFilesSelected = function(files) {};
	//end 

	//GetDiscount
	$scope.getDiscount = function(e) {

		if ($scope.model.poType.orderTypeCode == null || $scope.model.poType.orderTypeCode == '') {
			showAlert("createPO", 'CRT-0004');
		} else {
			if ($scope.model.total != null && $scope.model.total !== '' && $scope.model.matHang != null && $scope.model.matHang !== '') {
				if (isNaN($scope.model.total) || !angular.isNumber(+$scope.model.total)) {
					showAlert("createPO", 'CRT-0005');
				} else if ($scope.model.total.length >= 10) {

					showAlert("createPO", 'CRT-0006');
				} else {
					App.blockUI({
						target : "#createPurchaseOrderForBSContent",
						boxed : true,
						message : 'loading...'
					});

					ctk_createPurchaseOrderForBS.getDiscount($scope.model.matHang, $scope.model.total, $scope.model.poType.orderTypeCode, function(result) {
						$scope.listdiscount = result;

						App.unblockUI("#createPurchaseOrderForBSContent");
					});
				}
			} else {

				showAlert("createPO", 'CRT-0007');
			}
		}
	}
	//END getDiscount

	//ShowAlert
	function showAlert(idModal, message) {
		if (message === 'SUBMIT-0000-BS') {
			var mess = $translate.instant('vnm.messages.validate.ProductOrder.All.' + message);
			mess = mess.replace('~poCode~', $scope.model.poid);
			mess = mess.replace('~poType~', $scope.model.poType.orderTypeCode);
			mess = mess.replace('~poGross~', $filter('number')($scope.model.totalGross));

			bootbox.alert({
				message : mess,
				callback : function() {
					location.reload();
				}
			});
		}
		else
			bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.' + message));
	}
	//End showAlert



	//LoadGoods(SIM,Airtime,Thẻ cào,Evoucher)
	$scope.loadGoods = function(e) {
		App.blockUI({
			target : "#createPurchaseOrderForBSContent",
			boxed : true,
			message : 'loading...'
		});
		var data = {};
		data.goodType = e.toString();
		data.shopId = $localStorage.clientContext.shop.shopId;
		$scope.listMatHang = [];
		$scope.model.matHang = '';
		ctk_createPurchaseOrderForBS.getGoods(data, function(result) {
			$scope.listMatHang = result;

			App.unblockUI("#createPurchaseOrderForBSContent");
		});
	}
	//end LoadGoods

	//selected goods
	$scope.selectGood = function(e) {
		if (e != undefined) {
			$scope.model.goodName = e.goodName;
			$scope.model.unitPrice = e.unitPrice;
			$scope.model.goodCode = e.goodCode;

			// reset fields
			$scope.model.discount = 0;
			$scope.listdiscount = [];
			$scope.model.total = '';
		}
	}
	//end selected goods


	//Add new record to table 
	$scope.add = function() {
		if (isNaN($scope.model.discount)
			|| !angular.isNumber(+$scope.model.discount)
			|| ($scope.model.discount == '' ) 
			|| ($scope.model.discount == 0 ) 
			|| ($scope.model.discount == null) ){
			$scope.model.discount = 0;
		}

		if (!isNaN($scope.model.total) && ($scope.model.stock != null)
			&& angular.isNumber(+$scope.model.total)
			&& ($scope.model.total !== '')
			&& angular.isNumber(+$scope.model.unitPrice)
			&& ($scope.model.matHang != null )
		) {
			// check mat hang da ton tai chua
			if (angular.toJson(pod).indexOf($scope.model.matHang) > -1) {
				showAlert("createPO", 'CRT-0013');
			} else {
				var podAdding = {
					"orderDetailId" : 0,
					"orderId" : 0,
					"poCode" : $scope.model.poid,
					"productType" : $scope.model.matHangType,
					"productId" : $scope.model.matHang,
					"productName" : $scope.model.goodName,
					"quantity" : $scope.model.total,
					"grossValue" : $scope.model.total * $scope.model.unitPrice,
					"discountPercent" : $scope.model.discount,
					"discountValue" : ($scope.model.discount / 100) * ($scope.model.total * $scope.model.unitPrice),
					"netValue" : ($scope.model.total * $scope.model.unitPrice) - ($scope.model.discount / 100) * ($scope.model.total * $scope.model.unitPrice),
					"unitPrice" : $scope.model.unitPrice,
					"versionId" : 0
				};

				pod.push(podAdding);

				setBillValue(pod);

				$scope.tableParams = new NgTableParams({}, {
					dataset : pod
				});

				$scope.editingData[$scope.model.matHang] = false;
			}
		} else {

			if($scope.model.stock == null)
				showAlert("createPO", 'CRT-0014'); 
			else if ($scope.model.matHang == null )
				bootbox.alert("Vui lòng chọn mặt hàng!");
			else if (isNaN($scope.model.total) || !angular.isNumber(+$scope.model.total) || $scope.model.total === '')
				showAlert("createPO", 'CRT-0005');
			else
				showAlert("createPO", 'CRT-0003');
		}
	}
	//end ADD

	//SetBillValue
	function setBillValue(pod) {
		var total_gross_temp = 0;
		var total_discount_temp = 0;
		var total_net_temp = 0;

		if (pod.length > 0) {
			for (var i = 0, length = pod.length; i < length; i++) {
				total_gross_temp = total_gross_temp + pod[i].grossValue;
				total_discount_temp = total_discount_temp + pod[i].discountValue;
				total_net_temp = total_net_temp + pod[i].netValue;
			}
		}
		$scope.model.totalGross = total_gross_temp;
		$scope.model.totalNet = total_net_temp;

	}
	// END setBillValue

	//Edit record
	$scope.edit = function(item, index) {
		$scope.editingData[item.productId] = true;
//		item.discountPercent = '';
	}
	//end 

	//GetDiscountSub for Editing
	$scope.getDiscountSub = function(item, index) {

		if (item.quantity !== '' && !isNaN(item.quantity) && angular.isNumber(+item.quantity)) {
			if (item.quantity.length >= 10) {
				showAlert("createPO", 'CRT-0006');
			} else {
				App.blockUI({
					target : "#createPurchaseOrderForBSContent",
					boxed : true,
					message : 'loading...'
				});

				ctk_createPurchaseOrderForBS.getDiscount(item.productId, item.quantity, $scope.model.poType.orderTypeCode, function(result) {
					$scope.listdiscountSub = result;

					App.unblockUI("#createPurchaseOrderForBSContent");
				});
			}
		} else {
			showAlert("createPO", 'CRT-0005');
		}
	}
	//end getDiscountSub

	//Save after Edit
	$scope.fnEdit = function(item, index) {
		if (isNaN(item.discountPercent) || !angular.isNumber(+item.discountPercent) || item.discountPercent === '' || item.discountPercent == null)
			showAlert("createPO", 'DSC-0003');else {
			if (!isNaN(item.quantity) && angular.isNumber(+item.quantity)) {
				item.grossValue = item.quantity * item.unitPrice;
				item.discountValue = (item.grossValue * item.discountPercent) / 100;
				item.netValue = item.grossValue - item.discountValue;
			} else {
				showAlert("createPO", 'CRT-0005');
			}

			$scope.editingData[item.productId] = false;

			setBillValue(pod);
		}
	}
	//end Save after Edit

	//Del record in table
	$scope.del = function(item, index) {
		pod.splice(index, 1);

		setBillValue(pod);

		$scope.tableParams = new NgTableParams({}, {
			dataset : pod
		});
	};
	//end Del record in table

	//remove image
	$scope.removeElementAttachmenByItem = function(item) {
		item.isSuccess = false;
		item.isCancel = false;
		item.isError = false;
		item.isReady = false;
		item.isUploading = false;
		item.isSuccess = false;

		angular.forEach($scope.model.fileAttachments, function(objectAttact, index) {
			if (objectAttact.attachMentIdClient == item.attachMentIdClient) {
				$scope.model.fileAttachments.splice(index, 1);
			}
		});

		item.remove();
	}
	//end remove image

	//Buton uploadAllFile click
	$scope.uploadAllFile = function(uploaderIn) {
		if (uploaderIn.queue.length > 1) {
			showAlert("createPO", "CRT-0010");
		} else {
			checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
			if (!checkListTotalSize) {
				showAlert("createPO", "CRT-0011");
				return 0;
			} else {
				uploaderIn.uploadAll();
			}
		}
	}
	//end button uploadAllFile click

	//Button removeAllItem click
	$scope.removeAllItem = function() {
		$scope.model.fileAttachments = [];
		uploader.clearQueue()
	}
	//End Button removeAllItem click

	//BUTTON REFESH CLICK
	$scope.refresh = function() {
		location.reload();
	};
	//BUTTON REFESH CLICK

	//ValidRequired
	$scope.ValidRequired = function() {

		if (!angular.isDefined($scope.model.brandedShop) ||
			!angular.isDefined($scope.model.poid) ||
			!angular.isDefined($scope.model.date) ||
			!angular.isDefined($scope.model.matHangType) ||
			!angular.isDefined($scope.model.matHang) ||
			!angular.isDefined($scope.model.total) ||
			!angular.isDefined($scope.model.discount) ||
			!angular.isDefined(pod) || pod.length < 1) {

			return false;
		}
		return true;
	}
	//end ValidRequired	

	//BUTTON THỰC HIỆN
	$scope.submit = function() {

		if (!checkAllFileUploaded(uploader)) {
			showAlert("createPO", 'CRT-0001');
		} else {
			if ($scope.frm_createPurchaseOrderForBS.validate()) {
				if ($scope.ValidRequired()) {

					var po = {
						"orderId" : 0,
						"poCode" : $scope.model.poid,
						"channel" : "BRANDED WEB",
						"orderType" : $scope.model.poType.orderTypeCode,
						"orderDate" : new Date(),
						"modifiedDate" : null,
						"aprroveDate" : null,
						"rejectDate" : null,
						"status" : 0,
						"notes" : "",
						"order_shopId" : $localStorage.clientContext.shop.shopId,
						"provinceId" : 0,
						"order_staffName" : $localStorage.clientContext.shop.staffCode,
						"order_staffId" : $localStorage.clientContext.shop.staffId,
						"modify_staffName" : $localStorage.clientContext.shop.staffCode,
						"modify_staffId" : $localStorage.clientContext.shop.staffId,
						"approver_staffId" : 0,
						"order_shopName" : $scope.model.brandedShop,
						"orderShopMasterName" : $scope.model.stock.code,
						"orderShopMasterId" : $scope.model.stock.stockId,
						"bankBranch" : null,
						"bankDepositReference" : null,
						"bankDepositValue" : 0,
						"depositSlip" : null,
						"totalGrossValue" : $scope.model.totalGross,
						"productOrderDetail" : pod,
						"attachmentData" : $scope.model.fileAttachments,
						"versionId" : 0
					};



					// insert
					App.blockUI({
						target : "#createPurchaseOrderForBSContent",
						boxed : true,
						message : 'loading...'
					});

					ctk_createPurchaseOrderForBS.addPO(po, function(result) {
						App.unblockUI("#createPurchaseOrderForBSContent");

						if (result.response_code == '0000' || result.response_detail.indexOf('SUCCESS') > -1) {
							$scope.isSubmit = true;
							showAlert("createPO", 'SUBMIT-0000-BS');
						} else {
							showAlert("createPO", result.response_code);
						}
					});

				} else {
					showAlert("createPO", 'CRT-0002');
				}
			} else {
				showAlert("createPO", 'CRT-0003');
			}
		}
	}
	//BUTTON THỰC HIỆN


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

function overLoading(message) {
	App.blockUI({
		message : message
	});
	$(".blockOverlay").css("background-color", "#000000");
	$(this).css("opacity", "1");
}

function closeOverLay() {
	$.unblockUI();
}


function StringUtilNVL(val) {
	if (val == undefined || val == null) return "";
	return $.trim(val);
}

function checkModelVisible(model) {
	if (model == undefined || model == null) return true;
	return false;
}

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

function checkAllFileUploaded(uploader) {
	var checkFileAllisUpload = true;
	for (var i = 0; i < uploader.queue.length; i++) {
		var item = uploader.queue[i];
		var itemStatus = item.isSuccess;
		if (!itemStatus) {
			checkFileAllisUpload = false
			break;
		}
	}
	return checkFileAllisUpload;
}

// get total size of list file upload
function getTotalSizeListFileUpload(uploaderIn) {
	var listFileTotalSizeByte = 0;
	for (var i = 0; i < uploaderIn.queue.length; i++) {
		var item = uploaderIn.queue[i];
		var fileSize = item.file.size;
		listFileTotalSizeByte += fileSize;
	}
	var listFileTotalSizeMB = listFileTotalSizeByte / 1024 / 1024;
	if (listFileTotalSizeMB > 10) {
		return true;
	}

	return true;
}
//get time ddMMyy
function getNow_ddMMyy() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; // January is 0!
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	today = dd + '/' + mm + '/' + yyyy;

	return today;
}
// get time ddMMyy
function getNow_yyyyMMdd() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; // January is 0!
	var yyyy = today.getFullYear();
	var hh = today.getHours();
	var mi = today.getMinutes();
	var ss = today.getSeconds();
	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}
	if (hh < 10) {
		hh = '0' + hh
	}
	if (mi < 10) {
		mi = '0' + mi
	}
	if (ss < 10) {
		ss = '0' + ss
	}


	today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mi + ':' + ss;

	return today;
}

// remove file in queue by id
function removeItemQueueById(uploader, attachMentIdClient) {
	var checkFileAllisUpload = true;
	for (var i = 0; i < uploader.queue.length; i++) {
		var item = uploader.queue[i];
		if (item.attachMentIdClient == attachMentIdClient) {
			item.remove();
		}
	}
}