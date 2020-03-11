app_vnm.factory('prepaidBS', function($http, $translate) {
	return {
		country : function(callback) {
			var url = eim_url + "/bs/Custome/listCountry";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		customer : function(callback) {
			var url = eim_url + "/bs/Custome/listCustomerType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		province : function(callback) {
			var url = eim_url + "/bs/Custome/listProvince";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		district : function(data, callback) {
			var url = eim_url + "/bs/Custome/listDistrict?proId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		cosNew : function(callback) {
			var url = eim_url + "/bs/Custome/listCOSNew";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getCOSKit : function(mdnData, serialData, callback) {
			var url = eim_url + "/bs/Custome/getCOSKit?mdn=" + mdnData + "&serial=" + serialData;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		registerBS : function(data, callback) {
			var url = eim_url + "/bs/Custome/registerBS";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
	}
});

app_vnm.controller('ctrl-prepaidBS', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,prepaidBS) {
	
	$scope.model = {};
	$scope.searchResult = [];
	$scope.customerId = "";	
	$scope.subId = "";
	var listSub = [];
	var lisCus = [];
	$scope.itemSelected = [];
	$scope.selMdn = "";
	$scope.cust_img = "";
	$scope.contract_img2_Body = "";
	$scope.contract_img1_Body = "";
	$scope.authorized_img_Body = "";
	$scope.bus_permit_no_img1_Body = "";
	$scope.imgBody = "";
	$scope.imgID_2_Body = "";
	$scope.fileBody = "";
	$scope.file_id_2_Body = "";
	$scope.contract_img2_Body_SUB = "";
	$scope.contract_img1_Body_SUB = "";
	$scope.isNewCus = true;
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {
				customerType :{
					required: true,
					EmptyValue:true
				},
				firstName : {
					required: true,
					maxlengthcustom : 50,
					EmptyValue:true
				},
				lastName : {
					required: true,
					maxlengthcustom : 50,
					EmptyValue:true
				},
				cardId : {
					required: true,
					EmptyValue:true,
					maxlengthcustom : 15,
					minlengthcustom : 8
				},
				address : {
					required: true,
					EmptyValue:true,
					maxlengthcustom : 150,
					minlengthcustom : 5
				},
				planceOfIssue : {
					minlengthcustom : 5,
					required: true,
					EmptyValue:true
				},
				dateOfIssue : {
					required: true,
					EmptyValue:true,
					isDate:true,
					lessthancurrentdate:true,
					requiredlessthanyear: 15
				},
				birthday : {
					required: true,
					EmptyValue:true,
					isDate:true,
					check14to100Age: true					
				},
				country: {
					required: true,
					EmptyValue:true
				},
				mdnNew : {
					required: true,
					requiredNumber: true,
					maxlengthcustom : 11,
					minlengthcustom : 10
				},
				serialNew : {
					EmptyValue: true,
					requiredNumber: true,
					minlengthcustom: 8,
					maxlengthcustom : 11
				},
				// as
				subFirstName : {
					required: true,
					maxlength : 50,
					EmptyValue:true
				},
				subLastName : {
					required: true,
					maxlength : 50,
					EmptyValue:true
				},
				subIdCard : {
					required: true,
					EmptyValue:true,
					maxlength : 15,
					minlength : 8
				},
				subAddress : {
					required: true,
					EmptyValue:true,
					maxlength : 150,
					minlength : 5
				},
				subPlanceOfIssue : {
					minlength : 5,
					required: true,
					EmptyValue:true
				},
				subDateOfIssue : {
					required: true,
					EmptyValue:true,
					isDate:true,
					lessthancurrentdate:true,
					requiredlessthanyear: 15
				},
				subBirthday : {
					required: true,
					EmptyValue:true,
					isDate:true,
					check14to100Age: true					
				},
				subCountry: {
					required: true,
					EmptyValue:true
				},
				subMdnNew : {
					maxlength : 11,
					minlength : 10
				},
				subSerialNew : {
					maxlength : 20
				},
				subNewSIM : {
					required: true,
					maxlength : 20
				},
				subCusTypeCardDk: {
					required: true,
					maxlength : 15
				},
				tax: {
					required: true,
					maxlength : 15
				},
				companyName: {
					required: true,
					maxlength : 150
				},
				subUserType: {
					required: true,
					maxlength: 4
				}
			},
			messages : {
				lastName : {
					required: "Bạn cần nhập tên họ.",
					EmptyValue: "Bạn cần nhập tên họ.",
					maxlengthcustom : "Tên họ không nhiều hơn 25 ký tự."
				},
				firstName : {
					required: "Bạn cần nhập tên gọi.",
					EmptyValue: "Bạn cần nhập tên gọi.",
					maxlengthcustom : "Tên gọi không nhiều hơn 25 ký tự."
				},
				cardId : {
					required: "Bạn cần nhập CMT.",
					EmptyValue:"Bạn cần nhập CMT.",
					maxlengthcustom : "Địa chỉ không nhiều hơn 15 ký tự",
					minlengthcustom : "CMT không ít hơn 8 ký tự"
				},
				address : {
					required: "Bạn cần nhập địa chỉ.",
					EmptyValue:"Bạn cần nhập địa chỉ.",
					maxlengthcustom : "Địa chỉ không nhiều hơn 150 ký tự",
					minlengthcustom : "Địa chỉ không ít hơn 5 ký tự"
				},
				planceOfIssue:{
					required: "Yêu cầu nhập Nơi cấp",
					EmptyValue: "Yêu cầu nhập Nơi cấp",
					minlengthcustom : "Nơi cấp CMT không ít hơn 5 ký tự"
				},
				dateOfIssue:{
					required: "Yêu cầu nhập Ngày cấp",
					EmptyValue: "Yêu cầu nhập Ngày cấp",
					isDate:"Ngày cấp không đúng định dạng",
					lessthancurrentdate:"Ngày cấp phải nhỏ hơn ngày hiện tại",
					requiredlessthanyear: "CMT đã hết hạn"
				},
				birthday:{
					required: "Yêu cầu nhập Ngày sinh",
					EmptyValue: "Yêu cầu nhập Ngày sinh",
					isDate:"Ngày sinh không đúng định dạng",
					check14to100Age: "Bạn chỉ được đăng ký từ 14 - 100 tuổi"
				},
				mdnNew : {
					required: "Yêu cầu nhập Số thuê bao",
					requiredNumber: "Số thuê bao chỉ bao gồm ký tự số.",
					minlengthcustom : "Số điện thoại không ít hơn 10 số.",
					maxlengthcustom : "Số điện thoại không nhiều hơn 11 số."
				},
				serialNew : {
					EmptyValue: "Yêu cầu nhập Số SIM",
					requiredNumber: "Số SIM chỉ bao gồm ký tự số.",
					maxlengthcustom : "Số SIM không nhiều hơn 11 số.",
					minlengthcustom: "Số SIM không nhỏ hơn 8 số.",
				},
				// as
				subLastName : {
					required: "Bạn cần nhập tên họ.",
					EmptyValue: "Bạn cần nhập tên họ.",
					maxlength : "Tên họ không nhiều hơn 50 ký tự."
				},
				subFirstName : {
					required: "Bạn cần nhập tên gọi.",
					EmptyValue: "Bạn cần nhập tên gọi.",
					maxlength : "Tên gọi không nhiều hơn 50 ký tự."
				},
				subIdCard : {
					required: "Bạn cần nhập số giấy tờ tuỳ thân.",
					EmptyValue:"Bạn cần nhập số giấy tờ tuỳ thân.",
					maxlength : "Số giấy tờ tuỳ thân không nhiều hơn 15 ký tự",
				},
				subAddress : {
					required: "Bạn cần nhập địa chỉ.",
					EmptyValue:"Bạn cần nhập địa chỉ.",
					maxlength : "Địa chỉ không nhiều hơn 150 ký tự",
					minlength : "Địa chỉ không ít hơn 5 ký tự"
				},
				subPlanceOfIssue:{
					required: "Yêu cầu nhập Nơi cấp",
					EmptyValue: "Yêu cầu nhập Nơi cấp",
					minlength : "Nơi cấp CMT không ít hơn 5 ký tự"
				},
				subDateOfIssue:{
					required: "Yêu cầu nhập Ngày cấp",
					EmptyValue: "Yêu cầu nhập Ngày cấp",
					isDate:"Ngày cấp không đúng định dạng",
					lessthancurrentdate:"Ngày cấp phải nhỏ hơn ngày hiện tại",
					requiredlessthanyear: "CMT đã hết hạn"
				},
				subBirthday:{
					required: "Yêu cầu nhập Ngày sinh",
					EmptyValue: "Yêu cầu nhập Ngày sinh",
					isDate:"Ngày sinh không đúng định dạng",
					check14to100Age: "Bạn chỉ được đăng ký từ 14 - 100 tuổi"
				},
				subMdnNew : {
					minlength : "Số điện thoại không ít hơn 10 số.",
					maxlength : "Số điện thoại không nhiều hơn 11 số."
				},
				subSerialNew : {
					maxlength : "Số SIM không nhiều hơn 20 số."
				},
				subNewSIM : {
					required: "Yêu cầu nhập số SIM mới.",
					maxlength : "Số SIM không nhiều hơn 20 số."
				},
				subCusTypeCardDk: {
					required: "Yêu cầu nhập Loại giấy tờ đăng ký.",
					maxlength : "Loại giấy chứng nhận không quá 15 ký tự."
				},
				tax: {
					required: "Yêu cầu nhập Số giấy tờ tổ chức.",
					maxlength : "Số giấy tờ không quá 15 ký tự."
				},
				companyName: {
					required: "Yêu cầu nhập Tên công ty.",
					maxlength : "Tên công ty không quá 150 ký tự."
				},
				subUserType: {
					required: "Yêu cầu nhập Tên công ty.",
					maxlength: "Số giấy tờ không quá 4 ký tự."
				}
			}
	}

	$scope.listSex = [ {
		'Id' : '1',
		'Title' : 'Nữ'
	}, {
		'Id' : '0',
		'Title' : 'Nam'
	} ];
	
	// caott2
	$scope.listCustomerTypeNew = [ {
		'customerId' : '1',
		'customer' : 'Cá nhân'
	} ];
	$scope.listSubUserTypeCN = [ {
		'subUserTypeId' : 'CN01',
		'subUserTypeName' : 'Cho bản thân'
	}, {
		'subUserTypeId' : 'CN02',
		'subUserTypeName' : 'Cho người được giám hộ'
	},{
		'subUserTypeId' : 'CN03',
		'subUserTypeName' : 'Cho thiết bị'
	} ];

	$scope.listCusTypeCard = [ {
		'cusTypeCardId' : '01',
		'cusTypeCardName' : 'Chứng minh thư'
	}, {
		'cusTypeCardId' : '02',
		'cusTypeCardName' : 'Hộ chiếu'
	}, {
		'cusTypeCardId' : '03',
		'cusTypeCardName' : 'Thẻ căn cước'
	} ];
	$scope.listSubPaymentType = [ {
		'subPaymentTypeId' : 'TT',
		'subPaymentTypeName' : 'Trả trước'
	} ];
	$scope.listTypeCardCompany = [ {
		'typeCardCompanyId' : '1',
		'typeCardCompanyName' : 'Quyết định thành lập'
	}, {
		'typeCardCompanyId' : '2',
		'typeCardCompanyName' : 'Giấy chứng nhận đăng ký kinh doanh và đăng ký thuế'
	}, {
		'typeCardCompanyId' : '3',
		'typeCardCompanyName' : 'Giấy phép đầu tư'
	}, {
		'typeCardCompanyId' : '4',
		'typeCardCompanyName' : 'Giấy chứng nhận đăng ký doanh nghiệp'
	} ];
	//

	
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

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		prepaidBS.country(function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listCountry = result;
				prepaidBS.province(function(result) {
					if(result.status == '0' && result.status != 'undefined'){
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						$scope.listProvince = result;
						prepaidBS.customer(function(result) {
							if(result.status == '0' && result.status != 'undefined'){
								bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
							}else {
								$scope.listCustomerType = result;
								$scope.model.customerType = $scope.listCustomerType[0].customerId;
								showTheCustomerType($scope, $scope.model.customerType, true);
								
								$scope.tableParamImage = new NgTableParams({}, {
									dataset : $scope.DocumentTypeSourceOriginal
								});
								
								prepaidBS.cosNew(function(result) {
									if(result.status == '0' && result.status != 'undefined'){
										App.unblockUI("#contentMain");
										bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
									}else {
										$scope.listCOS = result;
										App.unblockUI("#contentMain");
									}
								});
							}
						});
					}
				});
			}
		});
	}

	var initialize = function () {
		$scope.loadDefauld();
	}

	initialize();

	$scope.updateDistrict = function(id) {
		prepaidBS.district(id, function(result) {
			$scope.listDistrict = result;
		});
		$scope.model.district = "";
	}

	$scope.updateCustomerType = function(id) {
		$scope.removeAllItem();
		showTheCustomerType($scope, id, true);

		// reset field by customer type
		if(id == 1){
			$scope.model.companyName = "";
			$scope.model.tax = "";
		}else if(id == 2){
			$scope.model.companyName = "";
			$scope.model.tax = "";
			$scope.model.province = "";
			$scope.model.district = "";
		}
		
		
		$scope.tableParamImage = new NgTableParams({}, {
			dataset : $scope.DocumentTypeSourceOriginal
		});
	}

	$scope.resetFormPrepaid = function(){
			$scope.model = {};
			$scope.model.fileAttachments = [];
			$scope.DistrictSource = [];
			$scope.removeAllItem();
			uploader.clearQueue();	
			$scope.model.customerType = $scope.listCustomerType[0].customerId;
			$scope.model.subPaymentType = $scope.listSubPaymentType[0].subPaymentTypeId;
			$scope.model.subUserType = $scope.listSubUserTypeCN[0].subUserTypeId;
			showTheCustomerType($scope, $scope.model.customerType, true);
			
			$scope.tableParamImage = new NgTableParams({}, {
				dataset : $scope.DocumentTypeSourceOriginal
			});
	}
	
	$scope.save = function() {

		if($scope.model.customerType == ""){
			bootbox.alert( "Bạn phải chọn loại khách hàng.");
			return;
		}

		if ($scope.frm_prepaid.validate()) {
			var cust_img = "";
			var bus_permit_no_img1 = "";
			var contract_CUS_img1 = "";
			var contract_CUS_img2 = "";
			var authorized_img = "";
			var img_id = "";
			var img_id_2 = "";
			var contract_SUB_img1 = "";
			var contract_SUB_img2 = "";
			var fileID = "";
			var file_id_2 = "";

			var imgCmgs = "";
			
			for(var i = 0; i < $scope.model.fileAttachments.length; i ++){
				if($scope.model.fileAttachments[i].attachmentType == '1'){
					authorized_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '2'){
					bus_permit_no_img1 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '3'){
					contract_CUS_img1 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '4'){
					contract_CUS_img2 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '5'){
					cust_img = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '6'){
					img_id = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '7'){
					img_id_2 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '8'){
					contract_SUB_img1 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '9'){
					contract_SUB_img2 = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '10'){
					fileID = $scope.model.fileAttachments[i].fileName;
				}
				if($scope.model.fileAttachments[i].attachmentType == '11'){
					file_id_2 = $scope.model.fileAttachments[i].fileName;
				}
				
				if($scope.model.fileAttachments[i].attachmentType == '12'){
					imgCmgs = $scope.model.fileAttachments[i].fileName;
				}
			}

			var CustomerResponse = {
					"dob" : $("#birthday").val(),
					"idCard" : $scope.model.cardId,
					"country" : $scope.model.country,
					"province" : $scope.model.province,
					"district" : $scope.model.district,
					"address" : $scope.model.address,
					"companyName" : $scope.model.companyName,
					"firstName" : $scope.model.firstName,
					"lastName" : $scope.model.lastName,
					"placeOfIssue" : $scope.model.planceOfIssue,
					"dateOfIssue" : $("#dateOfIssue").val(),
					"customerType" : $scope.model.customerType,
					"taxCode" : $scope.model.tax,
					"gender" : $scope.model.sex,
					"cust_img" : cust_img,
					"shopid" : $localStorage.clientContext.shopId,
					"bus_permit_no_img1" : bus_permit_no_img1,
					"contract_CUS_img1" : contract_CUS_img1,
					"contract_CUS_img2" : contract_CUS_img2,
					"authorized_img" : authorized_img,
					"img_id" : img_id,
					"img_id_2" : img_id_2,
					"cos" : $scope.model.cos,
					"mdn" : $scope.model.mdnNew,
					"serial" : $scope.model.serialNew,
					"contract_SUB_img1" : contract_SUB_img1,
					"contract_SUB_img2" : contract_SUB_img2,
					"fileID" : fileID,
					"file_id_2" : file_id_2,
					"imgCmgs" : imgCmgs,
					"subUserType" : $scope.model.subUserType,
					"subPaymentType" : $scope.model.subPaymentType,
					"staffCode" : $localStorage.clientContext.shop.staffCode,
					"type_card" : $scope.model.cusTypeCard,
					"shopCode" :  $localStorage.clientContext.shop.shopCode,
			};

			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});

			prepaidBS.registerBS(CustomerResponse, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					$scope.removeAllItem();
					App.unblockUI("#contentMain");
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}else {
					$scope.removeAllItem();
					App.unblockUI("#contentMain");
					bootbox.alert("Bạn đã đăng ký thành công.");
				}
			});
		}
	}
	
	 $scope.isImage = function(ext) {
			if (ext) {
				return ext.toUpperCase() == "JPG" || ext.toUpperCase() == "PNG";
			}
		}

		$scope.uploadedFilePreview = function(element) {
			
			$scope.$apply(function($scope) {
				
				$scope.files = element.files;
				if ($scope.files[0] == undefined) return;
				
				var elementId = element.id;
				var imagePreviewID = $scope.getDocumentSourceById(elementId);
				
				var idAttachMentValDelete = StringUtilNVL($scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentVal);
				if(StringUtilNVL(idAttachMentValDelete) != ""){
					removeItemQueueById(uploader, idAttachMentValDelete);
					$scope.removeElementAttachmenById(idAttachMentValDelete);
				}
				
				var sizeFile = $scope.files[0].size;
				var fileName = $scope.files[0].name;
				
				
	        	if(sizeFile > MAX_FILE_LENGTH){
	        		var message = MESS_MAX_SIZE_IMAGE_ITEM.replace(/###/, setStrongLabel(fileName));
	        		bootboxAlertTitle(TAB_HEADER_CUS, message);
	        		
	        		return false;
	        	}
	        	
				var fileExtValue = fileName.split(".").pop();
				 
				if('|jpg|png|jpeg|bmp|gif|'.indexOf(fileExtValue.toLowerCase()) == -1){ 
					return false;
				}else{
					if(sizeFile <=10485760){
						
					}else{
						return false;
					}
				}
				
				// create id imange in queue uploader
				idAttachMentVal = $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentVal = "";
				idAttachMentTypeInput = $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentTypeInput = "";
				  
				idAttachMentVal 		= $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentVal = createTimeStamp();
				idAttachMentTypeInput 	= $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentTypeInput = elementId;
				
				// icon preview
				var fileReader = new FileReader();
				
				$scope.DocumentTypeSourceOriginal[imagePreviewID].fileName = fileName;
				$scope.DocumentTypeSourceOriginal[imagePreviewID].fileExt = fileExtValue;
				$scope.DocumentTypeSourceOriginal[imagePreviewID].imagePreview = null;
				$scope.DocumentTypeSourceOriginal[imagePreviewID].fileSize = sizeFile;
				
				fileReader.readAsDataURL(document
						.getElementById(elementId).files[0]);
				
				fileReader.onload = function(oFREvent) {
					$timeout(function() {
						$scope.DocumentTypeSourceOriginal[imagePreviewID].imagePreview = oFREvent.target.result;
					});
				};
			});
		}
			
		$scope.deleteImage = function(element) {
			var elementId = element.item.Id;
			var fileNameSelector = "fileNameImage"+elementId;
			
			var idDeleteQueue = element.item.idAttachMentVal;
			
			var imagePreviewID = $scope.getDocumentSourceById(elementId);
			
			$scope.DocumentTypeSourceOriginal[imagePreviewID].imagePreview = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].fileExt = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].fileName = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].fileSize = null;
			
			$scope.DocumentTypeSourceOriginal[imagePreviewID].isCancel = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].isSuccess = null;
			$scope.DocumentTypeSourceOriginal[imagePreviewID].isError = null;
			
			// reset file value input
			$('[name='+fileNameSelector+']').val(null);
			
			// remove image preview
			var idRemoveVal = $scope.DocumentTypeSourceOriginal[imagePreviewID].idAttachMentVal;
			
			removeItemQueueById(uploader,idRemoveVal);		
			
			$scope.removeElementAttachmenById(idRemoveVal);

		}

		$scope.imgZoom = function(event) {
			$('.imagepreviewZoom').attr('src', $(event)[0].target.src);
			$('#imagemodal').modal('show');   
		}
		
		$scope.getDocumentSourceById = function(elementIdInput){
			var documentOutPut;
			for(var i =0; i< $scope.DocumentTypeSourceOriginal.length; i++){
				if($scope.DocumentTypeSourceOriginal[i].Id == elementIdInput){
					documentOutPut =  i;
					break;
				}
			}
			return documentOutPut;
		}
		
		$scope.getDocumentSourceByIdClient = function(idClient){
			var documentOutPut;
			for(var i =0; i< $scope.DocumentTypeSourceOriginal.length; i++){
				if($scope.DocumentTypeSourceOriginal[i].idAttachMentVal == idClient){
					documentOutPut = $scope.DocumentTypeSourceOriginal[i];
					break;
				}
			}
			return documentOutPut;
		}
		
	$scope.checkNumber = function() {
		var tmp = true;
		if (!angular.isDefined($scope.model.searchMdn)) {
			if (!angular.isDefined($scope.model.searchName)) {
				if (!angular.isDefined($scope.model.searchTax)) {
					if (!angular.isDefined($scope.model.searchCardId)) {
						if (!angular.isDefined($scope.model.searchSimNumber)) {
							if (!angular.isDefined($scope.model.searchCustomerType)) {
								tmp = false;
							}
						}
					}
				}
			}
		}
		return tmp;
	}

	$scope.checkNumber1 = function() {
		var tmp = true;
		if (!angular.isDefined($scope.model.searchMdn1)) {
			if (!angular.isDefined($scope.model.searchName1)) {
				if (!angular.isDefined($scope.model.searchTax1)) {
					if (!angular.isDefined($scope.model.searchCardId1)) {
						if (!angular.isDefined($scope.model.searchSimNumber1)) {
							if (!angular.isDefined($scope.model.searchCustomerType1)) {
								tmp = false;
							}
						}
					}
				}
			}
		}
		return tmp;
	}

	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;
	$scope.model.status = 'Giữ số';

	// BEGIN validate input
	$.validator.addMethod("isDate", function (value, element) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;
		var valueDate = $.trim(value);
		return moment(valueDate, 'DD/MM/YYYY',true).isValid();
	}, "");

	$.validator.addMethod("lessthancurrentdate", function (value, element) {
		if (value === "") return true;
		if($.trim(value)=="") return true;
		var today = moment();
		return (moment(today, "DD/MM/YYYY") > moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("requiredlessthanyear", function (value, element, options) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;

		var today = moment().add(-options, 'years');
		return (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("check14to100Age", function (value, element) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;

		var today = moment().add(-14, 'years');
		if (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY")){
			return false;
		};
		var today1 = moment().add(-100, 'years');
		if (moment(today1, "DD/MM/YYYY") >= moment(value, "DD/MM/YYYY")){
			return false;
		};
		return true;
	}, "");
	
	$.validator.addMethod("EmptyValue", function (value, element) {
		if (value == undefined || value=="") return false;
		if($.trim(value)=="") return false;
		return true;
	}, "");

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

	$scope.model.serialNew='';
	$scope.getCOSKit = function (){
		if($scope.model.mdnNew != "" && $scope.model.mdnNew != null && $scope.model.serialNew != "" && $scope.model.serialNew != null){
			if($scope.model.serialNew.length < 8 || $scope.model.serialNew.length > 11){
				return;
			}
			
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});

			prepaidBS.getCOSKit($scope.model.mdnNew, $scope.model.serialNew, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					App.unblockUI("#contentMain");
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}else {
					App.unblockUI("#contentMain");
					$scope.model.cos = result.messages;
				}
			});
		}else {
			return;
		}
	}


	// BEGIN LOAD IMAGE table 1
	$scope.model.fileAttachments = [];

	var uploader = $scope.uploader = new FileUploader({
		url: eim_url + "/bs/Custome/uploadImage"
	});
	// config uploader
	uploader.queueLimit = 12;
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
					// var message = messageSizeErrorClient.replace(/###/,
					// fileName);
					$scope.messages = "Dung lượng tệp "+fileName+" không được vượt quá 10MB";
					App.notifyDanger($scope.messages);
					return false;
				}
			}
		}
	});

	uploader.onAfterAddingFile = function(item){
    	item.attachMentIdClient = idAttachMentVal;
    	item.documentType = idAttachMentTypeInput;
    	
    	// remove file not image
    	if(item != null && item._file!=null && item._file.name !=null){
    		var fileName = item._file.name;
    		var fileExtValue = fileName.split(".").pop();
			if(!$scope.isImage(fileExtValue)){
				item.remove();
			}
    	}
    } 
	
	uploader.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.model.fileAttachments.push(response);
		
		var sourceElement =  $scope.getDocumentSourceByIdClient(fileItem.attachMentIdClient);
		sourceElement.isCancel = fileItem.isCancel;
		sourceElement.isSuccess = fileItem.isSuccess;
		sourceElement.isError = fileItem.isError;
		
		fileItem.disabledAttachType = true;
	};

	uploader.onErrorItem = function (fileItem, response, status, headers) {
		var sourceElement =  $scope.getDocumentSourceByIdClient(fileItem.attachMentIdClient);
		sourceElement.isCancel = fileItem.isCancel;
		sourceElement.isSuccess = fileItem.isSuccess;
		sourceElement.isError = fileItem.isError;
		if(response!= undefined && response!=null){
			if(response.code == "FILE_IMAGE_CONTENT_ERROR"){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.PREPAID-FILE-CONTENT-ERROR'));
			}
		}else{			
			bootbox.alert($translate.instant('vnm.mnp_message.common.upload.file.error'));
		}
	}

	uploader.onBeforeUploadItem  = function(item){
		item.headers = {
				Authorization: 'Bearer ' + $localStorage.clientContext.token
		};

		var identityDocType = StringUtilNVL(item.documentType);
		
		var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);
		var form_data = new FormData();
		form_data.append("identityDocType", item.documentType);
		form_data.append("attachMentIdClient", attachMentIdClient);
		item.formData.push(form_data);

	}

	$scope.uploadAllFile =  function(uploaderIn){
		checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
		if(!checkListTotalSize){
			bootbox.alert("Tổng dung lượng FILE phải nhỏ hơn 5MB ");
			return 0;
		}else{
			uploader.uploadAll();	
		}
	}

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
		uploader.clearQueue();
		showTheCustomerType($scope, $scope.model.customerType, true);
		$scope.tableParamImage = new NgTableParams({}, {
			dataset : $scope.DocumentTypeSourceOriginal
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


function showTheCustomerType($scope, id, isEdit){
	
	if (id == "1") {
		if(isEdit){
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
		}
		$scope.DocumentTypeSource = [ 
			{
				'Id' : '5',
				'Title' : 'Ảnh khách hàng',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '6',
				'Title' : 'Ảnh chứng minh thư mặt 1',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			}, {
				'Id' : '7',
				'Title' : 'Ảnh chứng minh thư mặt 2',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '10',
				'Title' : 'Ảnh hồ sơ mặt 1',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '11',
				'Title' : 'Ảnh hồ sơ mặt 2',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			} , {
				'Id' : '8',
				'Title' : 'Ảnh hợp đồng thuê bao mặt 1',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '9',
				'Title' : 'Ảnh hợp đồng thuê bao mặt 2',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			}, {
				'Id' : '12',
				'Title' : 'Ảnh CMGS',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			} ];

		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;

	} else if (id == "2") {
		if(isEdit){
			$scope.model.country = -1;
		}
		$scope.DocumentTypeSource = [ 
			{
				'Id' : '5',
				'Title' : 'Ảnh khách hàng',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			}, {
				'Id' : '6',
				'Title' : 'Ảnh chứng minh thư mặt 1',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			}, {
				'Id' : '7',
				'Title' : 'Ảnh chứng minh thư mặt 2',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '10',
				'Title' : 'Ảnh hồ sơ mặt 1',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '11',
				'Title' : 'Ảnh hồ sơ mặt 2',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			} ,{
				'Id' : '8',
				'Title' : 'Ảnh hợp đồng thuê bao mặt 1',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '9',
				'Title' : 'Ảnh hợp đồng thuê bao mặt 2',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '3',
				'Title' : 'Ảnh hợp đồng khách hàng mặt 1',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			}, {
				'Id' : '4',
				'Title' : 'Ảnh hợp đồng khách hàng mặt 2',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			},{
				'Id' : '12',
				'Title' : 'Ảnh CMGS',
				'imagePreview':'',
				'isCancel' :'',
				'isSuccess':'',
				'isError' :''
			}  ];
		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
		$scope.provinceDisabledForm = true;
		$scope.dictrictDisabledForm = true;

	}else if (id == "3") {
		if(isEdit){
			$scope.model.country = -1;
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
		}
		$scope.DocumentTypeSource = [ {
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '2',
			'Title' : 'Ảnh giấy phép kinh doanh',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, 
		{
			'Id' : '5',
			'Title' : 'Ảnh khách hàng',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '10',
			'Title' : 'Ảnh hồ sơ mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '11',
			'Title' : 'Ảnh hồ sơ mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		} ,{
			'Id' : '8',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '9',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '3',
			'Title' : 'Ảnh hợp đồng khách hàng mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '4',
			'Title' : 'Ảnh hợp đồng khách hàng mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		} ];
		$scope.companyNameDisabledForm = false;
		$scope.taxCodeDisabledForm = false;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;
	} else {
		if(isEdit){
			$scope.model.country = -1;
		}
		$scope.DocumentTypeSource = [{
			'Id' : '10',
			'Title' : 'Ảnh hồ sơ mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '11',
			'Title' : 'Ảnh hồ sơ mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		} ,{
			'Id' : '8',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '9',
			'Title' : 'Ảnh hợp đồng thuê bao mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '3',
			'Title' : 'Ảnh hợp đồng khách hàng mặt 1',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}, {
			'Id' : '4',
			'Title' : 'Ảnh hợp đồng khách hàng mặt 2',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		},{
			'Id' : '12',
			'Title' : 'Ảnh CMGS',
			'imagePreview':'',
			'isCancel' :'',
			'isSuccess':'',
			'isError' :''
		}];

		$scope.companyNameDisabledForm = false;
		$scope.taxCodeDisabledForm = false;
		$scope.provinceDisabledForm = false;
		$scope.dictrictDisabledForm = false;
		
	}
	$scope.DocumentTypeSourceOriginal = angular.copy($scope.DocumentTypeSource);
}
