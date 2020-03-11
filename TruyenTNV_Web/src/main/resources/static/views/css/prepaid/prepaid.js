var SELECT_NONE_INDEX  = -1;
var NUMBER_COUNT_DISABLED_EFORM_HD  = 4;

app_vnm.factory('prepaid', function($http, $translate) {
	return {
		search : function(data, callback) {
			var url = eim_url + "/bs/Custome/search";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
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
		getInfoCus : function(data, callback) {
			var url = eim_url + "/bs/Custome/getCusSub?cardId=" + data.idCard + "&cusId=" + data.customerId;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		regCustomer : function(data, callback) {
			var url = eim_url + "/bs/Custome/registerCustomer";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		modifyCustomer : function(data, callback) {
			var url = eim_url + "/bs/Custome/modifyCustomer";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		cosNew : function(callback) {
			var url = eim_url + "/bs/Custome/listCOSNew";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		addNewConnect : function(data, callback) {
			var url = eim_url + "/bs/Custome/addNewConnect";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		getSIMKit : function(data, callback) {
			var url = eim_url + "/bs/Custome/getSIMKit?mdn=" + data;
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getListReasonChangeSIM : function(callback) {
			var url = eim_url + "/bs/Custome/getListReasonChangeSIM";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		changeSIM : function(data, callback) {
			var url = eim_url + "/bs/Custome/changeSIM";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		changeSove : function(data, callback) {
			var url = eim_url + "/bs/Custome/changeSove";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		createEformService : function(data, callback) {
			var url = eim_url + "/bs/reportPrepaid/exportEForm";
			$http.post(url,data, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		getListStaff : function(data, callback) {
			var url = eim_url + "/bs/Custome/listStaff?shopId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
			;
		},		
		listShop : function(data, callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListShop";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		// DatBD2 update
		checkQuery : function(data, callback) {
			var url = eim_url + "/bs/Custome/checkQuery";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		// end
		regCustomerChild : function(data, callback) {
			var url = eim_url + "/bs/Custome/registerCustomerChild";
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

app_vnm.controller('ctrl-prepaid', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,prepaid) {
	
	$scope.model = {};
	$scope.searchResult = [];
	$scope.searchResult1 = [];
	$scope.customerId = "";	
	$scope.customerId1 = "";
	$scope.subId = "";
	var listSub = [];
	var lisCus = [];
	var lisCusLow = [];
	$scope.disabledForm = true;
	disableCus($scope, true);
	$scope.disabledFormSub = true;
	$scope.disabledAddChild = true;
	$scope.disabledTableChild = false;
	$scope.disAddChild = false;
	$scope.showImageCus = false;
	$scope.showImageSub = false;
	$scope.showModifCus = true;
	$scope.itemSelected = [];
	$scope.itemSelected1 = [];
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
	$scope.imgID_2_Body_parent_d = "";
	$scope.cust_img_parent_d = "";
	$scope.imgBody_parent_d = "";
	$scope.bus_permit_no_img2 = "";
	$scope.parent_img = "";
	$scope.isNewCus = true;
	
	$scope.isDisabledEfromBtn = true;
	$scope.isDisabledEfromHDBtn = true;
	$scope.showSubParent = false;
	$scope.planceDisabledFormNew = true;
	$scope.showAddChildNew = true;
	$scope.btnSave = true;
	$scope.showImgMant = false;
	$scope.showChangeChild = false;
	$scope.listDistrict= [];
	$scope.listDistrictSub= [];
	var listCusSub =[];
	$scope.searchChild = [];
	
	var SHOPCODE = $localStorage.clientContext.shop.shopCode;
	var shopId = $localStorage.clientContext.shop.shopId;
	
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {
				searchMdn : {
					maxlength : 11,
					minlength : 10
				},
				searchCardId : {
					maxlength : 15,
					minlength : 8
				},
				searchSimNumber : {
					maxlength : 20
				},
				customerType :{
					required: true,
					EmptyValue:true
				},
				searchMdn1 : {
					maxlength : 11,
					minlength : 10
				},
				searchCardId1 : {
					maxlength : 15,
					minlength : 8
				},
				searchSimNumber1 : {
					maxlength : 20
				},
				customerType1 :{
					required: true,
					EmptyValue:true
				},
				firstName : {
					required: true,
					maxlength : 50,
					EmptyValue:true
				},
				lastName : {
					required: true,
					maxlength : 50,
					EmptyValue:true
				},
				cardId : {
					required: true,
					EmptyValue:true,
					maxlength : 15,
					minlength : 8
				},
				address : {
					required: true,
					EmptyValue:true,
					maxlength : 80,
					minlength : 5
				},
				planceOfIssue : {
					minlength : 5,
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
					maxlength : 11,
					minlength : 10
				},
				serialNew : {
					maxlength : 20
				},
				newSIM : {
					required: true,
					maxlength : 20
				},
				cusTypeCardDk: {
					required: true,
					maxlength : 15
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
					maxlength : 80,
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
				},
				addressCompany: {
					required: true,
					maxlength: 150
				}
			},
			messages : {
				searchMdn : {
					minlength : "Số điện thoại không ít hơn 10 số.",
					maxlength : "Số điện thoại không nhiều hơn 11 số."
				},
				searchCardId : {
					minlength : "Chứng minh thư không ít hơn 8 ký tự.",
					maxlength : "Chứng minh thư không nhiều hơn 15 ký tự."
				},
				searchSimNumber : {
					maxlength : "Số SIM không nhiều hơn 20 số."
				},
				searchMdn1 : {
					minlength : "Số điện thoại không ít hơn 10 số.",
					maxlength : "Số điện thoại không nhiều hơn 11 số."
				},
				searchCardId1 : {
					minlength : "Chứng minh thư không ít hơn 8 ký tự.",
					maxlength : "Chứng minh thư không nhiều hơn 15 ký tự."
				},
				searchSimNumber1 : {
					maxlength : "Số SIM không nhiều hơn 20 số."
				},
				lastName : {
					required: "Bạn cần nhập tên họ.",
					EmptyValue: "Bạn cần nhập tên họ.",
					maxlength : "Tên họ không nhiều hơn 50 ký tự."
				},
				firstName : {
					required: "Bạn cần nhập tên gọi.",
					EmptyValue: "Bạn cần nhập tên gọi.",
					maxlength : "Tên gọi không nhiều hơn 50 ký tự."
				},
				cardId : {
					required: "Bạn cần nhập CMT.",
					EmptyValue:"Bạn cần nhập CMT.",
					maxlength : "Số giấy tờ tuỳ thân không nhiều hơn 15 ký tự",
					minlength : "Số giấy tờ tuỳ thân không ít hơn 8 ký tự"
				},
				address : {
					required: "Bạn cần nhập địa chỉ.",
					EmptyValue:"Bạn cần nhập địa chỉ.",
					maxlength : "Địa chỉ không nhiều hơn 80 ký tự",
					minlength : "Địa chỉ không ít hơn 5 ký tự"
				},
				planceOfIssue:{
					required: "Yêu cầu nhập Nơi cấp",
					EmptyValue: "Yêu cầu nhập Nơi cấp",
					minlength : "Nơi cấp CMT không ít hơn 5 ký tự"
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
					minlength : "Số điện thoại không ít hơn 10 số.",
					maxlength : "Số điện thoại không nhiều hơn 11 số."
				},
				serialNew : {
					maxlength : "Số SIM không nhiều hơn 20 số."
				},
				newSIM : {
					required: "Yêu cầu nhập số SIM mới.",
					maxlength : "Số SIM không nhiều hơn 20 số."
				},
				cusTypeCardDk: {
					required: "Yêu cầu nhập Loại giấy tờ đăng ký.",
					maxlength : "Loại giấy chứng nhận không quá 15 ký tự."
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
					minlength : "Số giấy tờ tuỳ thân không ít hơn 8 ký tự"
				},
				subAddress : {
					required: "Bạn cần nhập địa chỉ.",
					EmptyValue:"Bạn cần nhập địa chỉ.",
					maxlength : "Địa chỉ không nhiều hơn 80 ký tự",
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
				},
				addressCompany: {
					required: "Bạn cần nhập địa chỉ công ty.",
					EmptyValue:"Bạn cần nhập địa chỉ công ty.",
					maxlength : "Địa chỉ không nhiều hơn 150 ký tự",
					minlength : "Địa chỉ không ít hơn 5 ký tự"
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
	}, {
		'customerId' : '2',
		'customer' : 'Tổ chức'
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
	$scope.listSubUserTypeTC = [{
		'subUserTypeId' : 'TC01',
		'subUserTypeName' : 'Cho các cá nhân thuộc tổ chức'
	}, {
		'subUserTypeId' : 'TC02',
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
	}, {
		'subPaymentTypeId' : 'TS',
		'subPaymentTypeName' : 'Trả sau'
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
	
	
	$scope.imgZoom = function(event) {
		$('.imagepreview').attr('src', $(event)[0].target.src);
		$('#imagemodal').modal('show');   
	}

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		prepaid.country(function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listCountry = result;
				prepaid.province(function(result) {
					if(result.status == '0' && result.status != 'undefined'){
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						$scope.listProvince = result;
						prepaid.customer(function(result) {
							if(result.status == '0' && result.status != 'undefined'){
								bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
							}else {
								$scope.listCustomerType = result;
								prepaid.cosNew(function(result) {
									if(result.status == '0' && result.status != 'undefined'){
										App.unblockUI("#contentMain");
										bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
									}else {
										$scope.listCOS = result;
										prepaid.getListReasonChangeSIM(function(result) {
											if(result.status == '0' && result.status != 'undefined'){
												App.unblockUI("#contentMain");
												bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
											}else {
												$scope.listReason = result;
												
												prepaid.getListStaff(shopId, function(result) {
													if(result.status == '0' && result.status != 'undefined'){
														App.unblockUI("#contentMain");
														bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
													}else {
														$scope.listStaff = result;
														var dataSearch = {
																"shopId":shopId
														}
														prepaid.listShop(dataSearch, function(result) {
															if(result.status == '0' && result.status != 'undefined'){
																App.unblockUI("#contentMain");
																bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
															}else {
																$scope.listShop = result;
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

	$.validator.addMethod("EmptyValue", function (value, element) {
		if (value == undefined || value=="") return false;
		if($.trim(value)=="") return false;
		return true;
	}, "");

	$scope.updateDistrict = function(id) {
		prepaid.district(id, function(result) {
			$scope.listDistrict = result;
			$scope.listDistrictSub = result;
		});
		$scope.model.district = "";
	}
	$scope.subupdateDistrict = function(id) {
		prepaid.district(id, function(result) {
			$scope.listDistrictSub = result;
		});
		$scope.model.subDistrict = "";
	}
	
/*
 * $scope.subupdateDistrict = function(id) { prepaid.district(id,
 * function(result) { $scope.listDistrict = result; }); $scope.model.subDistrict =
 * ""; }
 */

	$scope.updateCustomerType = function(id) {
		showTheCustomerType($scope, id, true);
	}
	
	$scope.updateCustomerTypeChange = function(id) {
		
		if(id=='1'){
			$scope.changeChild = true;
			$scope.model.companyName ="";
		}else{
			$scope.changeChild = false;
			$scope.model.companyName =listCusSub.companyName;
		}
		showTheCustomerTypeChange($scope, id, true);
	}

	$scope.save = function() {
		//DatBD2 
		var cust_img = "";
		var bus_permit_no_img1 = "";
		var contract_img1 = "";
		var contract_img2 = "";
		var authorized_img = "";
		var img_id = ""
		var img_id_2 =  "";
		var parent_img =  "";
		var bus_permit_no_img2 =  "";
		var img_id_parent= "";
		var img_id_2_parent= "";
		var parent_cust_img= "";
		var img_idBDD =  "";
		var img_id_2BDD =  "";
		var cust_imgBDD =  "";
		
		var img_mant_id = "";
		//end
		 img_mant_id_1 = "";
		 img_mant_id_2 = "";
		if($scope.model.customerType == ""){
			bootbox.alert( "Bạn phải chọn loại khách hàng.");
			return;
		}

// var isFormValidated = validateAllForm($scope, $translate);
		if($scope.isNewCus){
			if ($scope.frm_prepaid.validate()) {
				 cust_img = "";
				 bus_permit_no_img1 = "";
				 contract_img1 = "";
				 contract_img2 = "";
				 authorized_img = "";
				 img_id = "";
				 img_id_2 = "";
				 img_mant_id = "";
				 img_mant_id_1 = "";
				 img_mant_id_2 = "";
				 parent_img = "";
				 bus_permit_no_img2 = "";

				for(var i = 0; i < $scope.model.fileAttachments.length; i ++){
					if($scope.model.fileAttachments[i].attachmentType == '1'){
						authorized_img = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '2'){
						bus_permit_no_img1 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '3'){
						contract_img1 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '4'){
						contract_img2 = $scope.model.fileAttachments[i].fileName;
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
					if($scope.model.fileAttachments[i].attachmentType == '10'){
						img_mant_id = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '11'){
						img_mant_id_1 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '12'){
						img_mant_id_2 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '13'){
						parent_img = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '14'){
						bus_permit_no_img2 = $scope.model.fileAttachments[i].fileName;
					}	
				}
				
				var lst=[];

				var CustomerResponse = {
						"dob" : $("#birthday").val(),
						"idCard" : $scope.model.cardId,// so giay to tuy than
														// || CMT
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
						"taxCode" : $scope.model.tax, // so giay to to chuc ||
														// ma so thue
						"gender" : $scope.model.sex,
						"cust_img" : $scope.model.customerType =='2' ? img_mant_id: cust_img,
						"shopId" : $localStorage.clientContext.shopId,
						"bus_permit_no_img1" : bus_permit_no_img1,
						"contract_img1" : contract_img1,
						"contract_img2" : contract_img2,
						"authorized_img" : authorized_img,
						"img_id" : $scope.model.customerType =='2' ? img_mant_id_1 :img_id,
						"img_id_2" : $scope.model.customerType =='2' ? img_mant_id_2 :img_id_2,
						
						// caott2
						"type_card_company": StringUtilNVL($scope.model.typeCardCompany),
						"type_card": StringUtilNVL($scope.model.cusTypeCard),
						"address_company" : $scope.model.addressCompany,
						"bus_permit_no_img2" : bus_permit_no_img2,
						"parent_img" : parent_img
					
				};
				 lst.push(CustomerResponse);
				
				 if($scope.model.customerType =='2'){
					 var CustomerResponseSub = {
					     "customerId" : cusIdS,
						 "customerType" : $scope.model.customerType,
						 "firstName" : $scope.model.subFirstName,// ten ho
						 "lastName" : $scope.model.subLastName,// ten goi
						 "type_card": $scope.model.subCusTypeCard,// loai giay
																	// to tuy
																	// than
						 "idCard" : $scope.model.subIdCard,// so giay to tuy
															// than || CMT
						 "placeOfIssue" : $scope.model.subPlanceOfIssue,// noi
																		// cap
						 "dateOfIssue" : $("#subDateOfIssue").val(),// ngay cap
						 "dob" : $("#subBirthday").val(),// ngay sinh
						 "gender" : $scope.model.subSex,// gioi tinh
						 "country" : $scope.model.subCountry,// quoc tich
						 "companyName" : $scope.model.companyName,// ten cty
						 "province" : $scope.model.subProvince,// tinh thanh
						 "district" : $scope.model.subDistrict,// quan huyen
						 "address" : $scope.model.subAddress,// dia chi
						 "cust_img" : cust_img,
						 "bus_permit_no_img1" : bus_permit_no_img1,
						 "contract_img1" : contract_img1,
						 "contract_img2" : contract_img2,
						 "authorized_img" : authorized_img,
						 "img_id" : img_id,
						 "img_id_2" : img_id_2,
						 "shopId" : $localStorage.clientContext.shopId,
						 "type_card_company": $scope.model.typeCardCompany,// loai
																			// giay
																			// to
																			// to
																			// chuc
						 "taxCode" : $scope.model.tax,// so giay to to chuc
						
						 
					   }
					 lst.push(CustomerResponseSub);
					}
				
				
				 

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				prepaid.regCustomer(lst, function(result) {
					if(result.status == '0' && result.status != 'undefined'){
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						$scope.customerId = result.customerId;
						$scope.disabledForm = true;
						disableCus($scope, true);
						$scope.disabledFormSub = true;
						$scope.disabledTableChild = true;
						if($scope.model.customerType == '2'){
							$scope.disabledAddChild = false;
						}
						if(result.customerType =='2'){
							$scope.showSubParent = true;
						}else{
							$scope.showSubParent = false;
						}
						App.unblockUI("#contentMain");
						bootbox.alert("Bạn đã đăng ký thành công.");
					}
				});
			}
		}else {
			// Modify info Customer
			if ($scope.frm_prepaid.validate()) {
				
				if($scope.model.customerType =='2'){
					if($scope.model.customerTypeChange == ""){
						bootbox.alert( "Bạn phải chọn loại khách hàng cần đổi.");
						return;
					}
				}
				
				 cust_img = listCusSub.cust_img_id;
				 bus_permit_no_img1 = listCusSub.bus_permit_no_img1_id;
				 contract_img1 = listCusSub.contract_img1_id;
				 contract_img2 = listCusSub.contract_img2_id;
				 authorized_img = listCusSub.authorized_img_id;
				 img_id = listCusSub.img_id_id;
				 img_id_2 = listCusSub.img_id_2_id;
				 parent_img = listCusSub.parent_img_id;
				 bus_permit_no_img2 = listCusSub.bus_permit_no_img2_id;
				//DatBD2 update
				 img_id_parent="";
				 img_id_2_parent="";
				 parent_cust_img="";
				 img_idBDD = listCusSub.img_id_id;
				 img_id_2BDD = listCusSub.img_id_2_id;
				 cust_imgBDD = listCusSub.cust_img_id;
				//DatBD2 update
				for(var i = 0; i < $scope.model.fileAttachments.length; i ++){
					if($scope.model.fileAttachments[i].attachmentType == '1'){
						authorized_img = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '2'){
						bus_permit_no_img1 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '3'){
						contract_img1 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '4'){
						contract_img2 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '5'){
						cust_img = $scope.model.fileAttachments[i].fileName;
						cust_imgBDD = $scope.model.fileAttachments[i].fileName;

					}
					if($scope.model.fileAttachments[i].attachmentType == '6'){
						img_id = $scope.model.fileAttachments[i].fileName;
						img_idBDD = $scope.model.fileAttachments[i].fileName;
						
					}
					if($scope.model.fileAttachments[i].attachmentType == '7'){
						img_id_2 = $scope.model.fileAttachments[i].fileName;
						img_id_2BDD = $scope.model.fileAttachments[i].fileName;

					}
					if($scope.model.fileAttachments[i].attachmentType == '13'){
						parent_img = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '14'){
						bus_permit_no_img2 = $scope.model.fileAttachments[i].fileName;
					}
					//DatBD2 update
					if ($scope.model.fileAttachments[i].attachmentType == '11'){
						img_id_parent= $scope.model.fileAttachments[i].fileName;
					}
					if ($scope.model.fileAttachments[i].attachmentType == '12'){
						img_id_2_parent= $scope.model.fileAttachments[i].fileName;
					}
					if ($scope.model.fileAttachments[i].attachmentType == '10'){
						parent_cust_img= $scope.model.fileAttachments[i].fileName;
					}
					//end
		
				}
				//DatBD2 update
				
				if($scope.model.customerType == '2'){
					
					cust_img=parent_cust_img;
					img_id=img_id_parent;
					img_id_2=parent_cust_img;
				}
				//end
				var listModify = [];
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
						"shopId" : $localStorage.clientContext.shopId,
						"bus_permit_no_img1" : bus_permit_no_img1,
						"contract_img1" : contract_img1,
						"contract_img2" : contract_img2,
						"authorized_img" : authorized_img,
						"img_id" : img_id,
						"img_id_2" : img_id_2,
						"customerId" : $scope.customerId,
						"comment" : $scope.model.comment,
						// caott2
						"type_card_company": StringUtilNVL($scope.model.typeCardCompany),
						"type_card": StringUtilNVL($scope.model.cusTypeCard),
						"address_company" : $scope.model.addressCompany,
						"customerTypeChange" : $scope.model.customerTypeChange,
						"bus_permit_no_img2" : bus_permit_no_img2,
						"parent_img" : parent_img
					
				};
				listModify.push(CustomerResponse);
				
				if($scope.model.customerType == '2'){
					 var CustomerResponseSub = {
							 "customerType" : $scope.model.customerType,
							 "firstName" : $scope.model.subFirstName,// ten
																		// ho
							 "lastName" : $scope.model.subLastName,// ten goi
							 "type_card": StringUtilNVL($scope.model.subCusTypeCard),// loai
																						// giay
																						// to
																						// tuy
																						// than
							 "idCard" : $scope.model.subIdCard,// so giay to
																// tuy than ||
																// CMT
							 "placeOfIssue" : $scope.model.subPlanceOfIssue,// noi
																			// cap
							 "dateOfIssue" : $("#subDateOfIssue").val(),// ngay
																		// cap
							 "dob" : $("#subBirthday").val(),// ngay sinh
							 "gender" : $scope.model.subSex,// gioi tinh
							 "country" : $scope.model.subCountry,// quoc tich
							 "companyName" : $scope.model.companyName,// ten
																		// cty
							 "province" : $scope.model.subProvince,// tinh
																	// thanh
							 "district" : $scope.model.subDistrict,// quan
																	// huyen
							 "address" : $scope.model.subAddress,// dia chi
							 "cust_img" : cust_imgBDD,
							 "bus_permit_no_img1" : bus_permit_no_img1,
							 "contract_img1" : contract_img1,
							 "contract_img2" : contract_img2,
							 "authorized_img" : authorized_img,
							 "img_id" : img_idBDD,
							 "img_id_2" : img_id_2BDD,
							 "shopId" : $localStorage.clientContext.shopId,
							 "type_card_company": StringUtilNVL($scope.model.typeCardCompany),// loai
																								// giay
																								// to
																								// to
																								// chuc
// "taxCode" : $scope.model.tax,//so giay to to chuc
							 "customerId" : $scope.customerId,
							 "comment" : $scope.model.comment,
								// caott2
// "type_card_company": StringUtilNVL($scope.model.typeCardCompany),
								"type_card": StringUtilNVL($scope.model.subCusTypeCard),
// "address_company" : $scope.model.addressCompany,
								"customerTypeChange" : $scope.model.customerTypeChange,
								"bus_permit_no_img2" : bus_permit_no_img2,
								"parent_img" : parent_img
						
						   }
					 listModify.push(CustomerResponseSub);
				}

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				prepaid.modifyCustomer(listModify, function(result) {
					if(result.status == '0' && result.status != 'undefined'){
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						$scope.customerId = result.customerId;
						$scope.disabledForm = true;
						disableCus($scope, true);
						$scope.disabledFormSub = true;
						$scope.disabledTableChild = true;
						if($scope.model.customerType == '2'){
							$scope.disabledAddChild = true;
						}
						if(result.customerType =='2'){
							$scope.showSubParent = true;
						}else{
							$scope.showSubParent = false;
						}
						$scope.showChangeChild = false;
						App.unblockUI("#contentMain");
						bootbox.alert("Bạn đã cập nhật thông tin khách hàng thành công.");
					}
				});
			}
		}
	}

	$scope.back = function() {
		if($scope.isNewCus){
			$scope.disabledForm = true;
			disableCus($scope, true);
			$scope.disabledFormSub = true;
			emtyInput($scope);
			$scope.disabledTableChild = false;
		}else {
			$scope.disabledForm = true;
			disableCus($scope, true);
			$scope.disabledFormSub = true;
			$scope.disabledTableChild = false;
		
		}
		$scope.btnSave = true;
		$scope.showAddChildNew = true;
		$scope.showSubParent = false;
		$scope.showChangeChild = false;
	}

	$scope.checkImgInsert = function() {

	}

	$scope.edit = function() {
		if ($scope.frm_prepaid.validate()) {
			$scope.enabledForm();
		}
		$scope.disAddChild = false;
		$scope.isNewCus = false;
		$scope.commentDisabledForm = true;
		showTheCustomerType($scope, $scope.model.customerType, false);
		$scope.cardIdDisabledForm = true;
		$scope.showChangeChild = true;
		$scope.model.customerTypeChange = '';
		if($scope.model.customerType =='1'){
			$scope.changeChild = false;
			$scope.customerTypeDisabledForm  = true;
		}else{
			$scope.changeChild = true;
		}
	
	}

	$scope.add = function() {
		$scope.tableSub = new NgTableParams({}, {
		});
		emtyInput($scope);
		$scope.searchResult = [];
		$scope.searchResult1 = [];
		if ($scope.frm_prepaid.validate()) {
			$scope.enabledForm();
		}
		$scope.disAddChild = false;
		$scope.customerId = "";
		$scope.subId = "";
		resetConnec($scope);
		resetMastery($scope);
		$scope.model.reason = -1;
		$scope.model.newSIM = "";

		$scope.isNewCus = true;
		$scope.planceDisabledFormNew = false;
		$scope.showSubParent = false;
	}

	$scope.addChild = function() {
		emtyInputChild($scope);
// $scope.disabledTableChild = true;
		$scope.enabledForm();
		$scope.planceDisabledFormNew = true;
		$scope.countryDisabledForm = false; 
		$scope.showAddChildNew = false;
		$scope.btnSave = false;
// $scope.disAddChild = true;
		$scope.DocumentTypeSource = [ {
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền'
		}, {
			'Id' : '5',
			'Title' : 'Ảnh khách hàng'
		}, {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1'
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2'
		}, ];
		
		if($scope.changeChild == true){
			if($scope.searchChild[0].companyName != undefined || $scope.searchChild[0].companyName != null || $scope.searchChild[0].companyName == ''){
				$scope.model.companyName = $scope.searchChild[0].companyName;
			}else{
				$scope.model.companyName = '';
			}
		}
		
	}

	$scope.requestChangeSIM = function(){
		if ($scope.frm_prepaid.validate()) {

			if(!angular.isDefined($scope.model.reason)){
				bootbox.alert( "Bạn phải chọn nội dung.");
				return;
			}

			var changeSIMInput = {
					"oldSerial" : $scope.model.oldSIM,
					"newSerial" : $scope.model.newSIM,
					"reasonId" : $scope.model.reason,
					"shopId" : $localStorage.clientContext.shopId
			};

			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			prepaid.changeSIM(changeSIMInput, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					App.unblockUI("#contentMain");
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}else {
					$scope.model.reason = -1;
					$scope.model.newSIM = "";
					App.unblockUI("#contentMain"); 
					bootbox.alert("Bạn đã thực hiện đổi SIM thành công.");
				}
			});
		}
	}

	$scope.search = function() {
		$scope.rowHighlightSubInfo = SELECT_NONE_INDEX;
		$scope.isDisabledEfromBtn = true;
		$scope.isDisabledEfromHDBtn = true;
		$scope.showSubParent = false;
		if ($scope.frm_prepaid.validate()) {
				if ($scope.checkNumber()) {
					var searchInput = {
							"mdn" : $scope.model.searchMdn,
							"name" : $scope.model.searchName,
							"tax" : $scope.model.searchTax,
							"card" : $scope.model.searchCardId,
							"simNumber" : $scope.model.searchSimNumber,
							"customerType" : $scope.model.searchCustomerType,
							"shopId" : $localStorage.clientContext.shopId
					};

					App.blockUI({
						target : "#contentMain",
						boxed : true,
						message : 'loading...'
					});
						prepaid.search(searchInput, function(result) {
							if(result.length > 0){
								emtyInput($scope);
								resetConnec($scope);
								resetMastery($scope);
								$scope.model.reason = -1;
								$scope.model.newSIM = "";
								$scope.tableSub = new NgTableParams({}, {
								});

								$scope.searchResult = result;
								var list = [];
								$scope.searchChild = [];
								for(var i=0; i< result.length ; i++){
									if(result[i].customerType == '2' || result[i].customerType == '1'){
										if(result[i].customerType == '2'){
											if(result[i].parent_customer_id != null){
												list.push(result[i]);
											}else{
												$scope.searchChild.push(result[i]);
											}
										}else{
											list.push(result[i]);
										}
									}
								}
// searchChild = list;
								$scope.tableParams = new NgTableParams({}, {
									dataset : list
								});
								$scope.disabledAddChild = true;
// if(result[0].customerType == '1'){
// $scope.disabledAddChild = true;
// }else{
// $scope.disabledAddChild = false;
// }
								App.unblockUI("#contentMain");
							}
							else {
								App.unblockUI("#contentMain");
								bootbox.alert("Không tìm thấy dữ liệu!");
							}
						});

					} else {
						bootbox.alert("Bạn phải nhập ít nhất 1 trường!");
					}
		}
	}

	$scope.search1 = function() {
		if ($scope.frm_prepaid.validate()) {
			if ($scope.checkNumber1()) {
				var searchInput = {
						"mdn" : $scope.model.searchMdn1,
						"name" : $scope.model.searchName1,
						"tax" : $scope.model.searchTax1,
						"card" : $scope.model.searchCardId1,
						"simNumber" : $scope.model.searchSimNumber1,
						"customerType" : $scope.model.searchCustomerType1,
						"shopId" : $localStorage.clientContext.shopId
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});
				prepaid.search(searchInput, function(result) {
					if(result.length > 0){

						$scope.searchResult1 = result;
						$scope.tableParams1 = new NgTableParams({}, {
							dataset : result
						});
						App.unblockUI("#contentMain");
					}
					else {
						App.unblockUI("#contentMain");
						bootbox.alert("Không tìm thấy dữ liệu!");
					}
				});

			} else {
				bootbox.alert("Bạn phải nhập ít nhất 1 trường!");
			}
		}
	}
	var cusIdS=""; 
	$scope.getInfo = function(item) {
		
		 cusIdS=item.customerId;
		$scope.itemSelected = item;
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		//DatBD2
		prepaid.checkQuery(item,function(result)
				{
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			     }
			else{
					if(result.strMessWarning=="REJECT")
						{
							App.unblockUI("#contentMain");
							bootbox.alert("Khách hàng có " + result.strTotalWarning + " thuê bao. Hệ thống không hỗ trợ tìm kiếm với lượng dữ liệu lớn như vậy !\r\n Bạn có thể tìm kiếm theo số thuê bao !");
							return;
						}
					else if(result.strMessWarning=="WARNING")
						{
						App.unblockUI("#contentMain");
						bootbox.confirm({
                            message: "Khách hàng có " + result.strTotalWarning + " thuê bao. Nếu tiếp tục tìm kiếm CÓ THỂ GÂY DỪNG HỆ THỐNG !\r\n Bạn có chắc muốn tiếp tục không ?",
                            buttons: {
                                confirm: {
                                    label: 'Đồng ý',
                                    className: 'btn-success'
                                },
                                cancel: {
                                    label: 'Từ chối',
                                    className: 'btn-danger'
                                }
                            },
                            callback: function (result)
                            {
                                if(result)
                                {
                                	
                                	$scope.getInforCus2(item);
                                }
                            }
                        });
						}
					else{
						App.unblockUI("#contentMain");
                      	$scope.getInforCus2(item);
                      	return;
                      	
						
					}
				
				}
				});
		//end

		
	}
	$scope.noGetInforCus2=function()
	{
		return;
	}
	$scope.getInforCus2=function(item)
	{
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		prepaid.getInfoCus(item, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				App.unblockUI("#contentMain")

				$scope.showAddChildNew = true;
				resetImg($scope);
				if(result[0].customerType =='2'){
					
					$scope.setValueCusSubWithItem(result[0].preCustomer);
					listCusSub = result[0].preCustomer;
			
					lisCus = result;
					
					//end
					$scope.setValueCusSubLow(result[0]);
					
					listSub = result[0].subscribers;
					if(listSub.length != 0){
						$scope.tableSub = new NgTableParams({}, {
							dataset : listSub
						});
						$scope.model.mdn = listSub[0].mdn.mdn;
						$scope.model.cosId = listSub[0].cos;
						$scope.model.serial = listSub[0].serial;
						$scope.model.oldSIM = listSub[0].serial;
						$scope.model.store = "";
						if(listSub[0].preBalanceList != null){
							if(listSub[0].preBalanceList.coreBalance != null){
								$scope.model.balance = listSub[0].preBalanceList.coreBalance.balance;
								$scope.model.endDate = listSub[0].preBalanceList.coreBalance.accountExpiration;
							}else {
								$scope.model.balance = "";
								$scope.model.endDate = "";
							}
						}else {
							$scope.model.balance = "";
							$scope.model.endDate = "";
						}

						if(listSub[0].contract_img1 != "" && listSub[0].contract_img1 != null){
							$scope.contract_img1_Body_SUB = listSub[0].contract_img1;
							$scope.showImageSub = true;
						}
						if(listSub[0].contract_img2 != "" && listSub[0].contract_img2 != null){
							$scope.contract_img2_Body_SUB = listSub[0].contract_img2;
							$scope.showImageSub = true;
						}
						if(listSub[0].file_id != "" && listSub[0].file_id != null){
							$scope.fileBody = listSub[0].file_id;
							$scope.showImageSub = true;
						}
						if(listSub[0].file_id_2 != "" && listSub[0].file_id_2 != null){
							$scope.file_id_2_Body = listSub[0].file_id_2;
							$scope.showImageSub = true;
						}
						
						$scope.subId = listSub[0].subscriberId;
						// set value for mastery
						$scope.model.mdnMastery = listSub[0].mdn.mdn;
						$scope.model.cosIdMastery = listSub[0].cos;
						$scope.model.serialMastery = listSub[0].serial;
						// here
						$scope.model.searchUserType = listSub[0].sub_user_type;
						$scope.model.searchPaymentType = listSub[0].sub_payment_type;
						$scope.model.searchShopProvice = listSub[0].shopProvice;
						$scope.model.searchShopAddress = listSub[0].shopAddress;
						$scope.model.searchShopPhone = listSub[0].shopTel;
						$scope.model.searchShopName = listSub[0].shopName;
						
						
						for(var i=0; i<$scope.listStaff.length; i++){
							if(listSub[0].createUser == $scope.listStaff[i].code){
								$scope.model.searchCreateUser = $scope.listStaff[i].code + " - " +$scope.listStaff[i].name;
							}
						}
						
						// end here
						
						
						
						$scope.model.balanceMastery = $scope.model.balance;
						$scope.model.endDateMastery = $scope.model.endDate;
					}
					else{
						$scope.tableSub = new NgTableParams({}, {
							dataset : listSub
						});
					}
					$scope.showImageCus = false;
					$scope.showImageSub = false;
					$scope.showModifCus = false; 
					
					if(result[0].cust_img != "" && result[0].cust_img != null){
						$scope.cust_img = result[0].cust_img;
						$scope.showImageCus = true;
					}
					
					if(result[0].img_id != "" && result[0].img_id != null){
						$scope.imgBody = result[0].img_id;
						$scope.showImageCus = true;
					}
					if(result[0].img_id_2 != "" && result[0].img_id_2 != null){
						$scope.imgID_2_Body = result[0].img_id_2;
						$scope.showImageCus = true;
					}
					
					if(result[0].preCustomer.authorized_img_Body != undefined ||  result[0].preCustomer.authorized_img_Body != "" || result[0].preCustomer.authorized_img_Body != null ){
						$scope.authorized_img_Body = result[0].preCustomer.authorized_img;
						$scope.showImageCus = true;
					}

					if(result[0].preCustomer.bus_permit_no_img1_Body != undefined ||  result[0].preCustomer.bus_permit_no_img1_Body != "" || result[0].preCustomer.bus_permit_no_img1_Body != null ){
						$scope.bus_permit_no_img1_Body = result[0].preCustomer.bus_permit_no_img1;
						$scope.showImageCus = true;
					}

					if(result[0].preCustomer.contract_img1 != undefined ||  result[0].preCustomer.contract_img1 != "" || result[0].preCustomer.contract_img1 != null ){
						$scope.contract_img1_Body = result[0].preCustomer.contract_img1;
						$scope.showImageCus = true;
					}
					if(result[0].preCustomer.contract_img2 != undefined ||  result[0].preCustomer.contract_img2 != "" || result[0].preCustomer.contract_img2 != null ){
						$scope.contract_img2_Body = result[0].preCustomer.contract_img2;
						$scope.showImageCus = true;
					}

					// caott2 check img parent
					if(result[0].preCustomer.authorized_img != undefined || result[0].preCustomer.authorized_img != "" || result[0].preCustomer.authorized_img != null){
						$scope.authorized_img_Body = result[0].preCustomer.authorized_img;
						$scope.showImageCus = true;
					}
					if(result[0].preCustomer.cust_img != undefined || result[0].preCustomer.cust_img != "" || result[0].cust_img != null){
						$scope.cust_img_parent_d = result[0].preCustomer.cust_img;
						$scope.showImageSub = true;
					}
					if(result[0].preCustomer.img_id != undefined || result[0].preCustomer.img_id != "" || result[0].img_id != null){
						$scope.imgBody_parent_d = result[0].preCustomer.img_id;
						$scope.showImageSub = true;
					}
					if(result[0].preCustomer.img_id_2 != undefined || result[0].preCustomer.img_id_2 != "" && result[0].img_id_2 != null){
						$scope.imgID_2_Body_parent_d = result[0].preCustomer.img_id_2;
						$scope.showImageSub = true;
					}
					
					// caott2 anh moi
					if( result[0].preCustomer.bus_permit_no_img2 != undefined || result[0].preCustomer.bus_permit_no_img2 != "" && result[0].bus_permit_no_img2 != null){
						$scope.bus_permit_no_img2 = result[0].preCustomer.bus_permit_no_img2;
						$scope.showImageSub = true;
					}else{
						$scope.bus_permit_no_img2 = '';
					}
					if(result[0].preCustomer.parent_img != undefined || result[0].preCustomer.parent_img != "" && result[0].parent_img != null){
						$scope.parent_img = result[0].preCustomer.parent_img;
						$scope.showImageSub = true;
					}else{
						$scope.parent_img = '';
					}
					// end
					if(result[0].preCustomer.file_id != undefined || result[0].preCustomer.file_id != "" && result[0].file_id != null){
						$scope.fileBody = result[0].preCustomer.file_id;
						$scope.showImageSub = true;
					}
					if(result[0].preCustomer.file_id_2 != undefined || result[0].preCustomer.file_id_2 != "" && result[0].file_id_2 != null){
						$scope.file_id_2_Body = result[0].preCustomer.file_id_2;
						$scope.showImageSub = true;
					}
					if(result[0].preCustomer.img_id_id != undefined || result[0].preCustomer.img_id_id != "" && result[0].img_id_id != null){
						$scope.img_id_id = result[0].preCustomer.img_id_id ;
						$scope.showImageSub = true;
					}
					// end
					
					
					$scope.showImgMant = true;

				}else{
						$scope.setValueCusSub(result);
						lisCus = result;
						listCusSub = result[0];
						listSub = result[0].subscribers;
						if(listSub.length != 0){
							$scope.tableSub = new NgTableParams({}, {
								dataset : listSub
							});
							$scope.model.mdn = listSub[0].mdn.mdn;
							$scope.model.cosId = listSub[0].cos;
							$scope.model.serial = listSub[0].serial;
							$scope.model.oldSIM = listSub[0].serial;
							$scope.model.store = "";
							if(listSub[0].preBalanceList != null){
								if(listSub[0].preBalanceList.coreBalance != null){
									$scope.model.balance = listSub[0].preBalanceList.coreBalance.balance;
									$scope.model.endDate = listSub[0].preBalanceList.coreBalance.accountExpiration;
								}else {
									$scope.model.balance = "";
									$scope.model.endDate = "";
								}
							}else {
								$scope.model.balance = "";
								$scope.model.endDate = "";
							}
	
							if(listSub[0].contract_img1 != "" && listSub[0].contract_img1 != null){
								$scope.contract_img1_Body_SUB = listSub[0].contract_img1;
								$scope.showImageSub = true;
							}
							if(listSub[0].contract_img2 != "" && listSub[0].contract_img2 != null){
								$scope.contract_img2_Body_SUB = listSub[0].contract_img2;
								$scope.showImageSub = true;
							}
							if(listSub[0].file_id != "" && listSub[0].file_id != null){
								$scope.fileBody = listSub[0].file_id;
								$scope.showImageSub = true;
							}
							if(listSub[0].file_id_2 != "" && listSub[0].file_id_2 != null){
								$scope.file_id_2_Body = listSub[0].file_id_2;
								$scope.showImageSub = true;
							}
							$scope.subId = listSub[0].subscriberId;
							// set value for mastery
							$scope.model.mdnMastery = listSub[0].mdn.mdn;
							$scope.model.cosIdMastery = listSub[0].cos;
							$scope.model.serialMastery = listSub[0].serial;
							// here
							$scope.model.searchUserType = listSub[0].sub_user_type;
							$scope.model.searchPaymentType = listSub[0].sub_payment_type;
							$scope.model.searchShopProvice = listSub[0].shopProvice;
							$scope.model.searchShopAddress = listSub[0].shopAddress;
							$scope.model.searchShopPhone = listSub[0].shopTel;
							$scope.model.searchShopName = listSub[0].shopName;
							
							for(var i=0; i<$scope.listStaff.length; i++){
								if(listSub[0].createUser == $scope.listStaff[i].code){
									$scope.model.searchCreateUser = $scope.listStaff[i].code + " - " +$scope.listStaff[i].name;
								}
							}
							
							// end here
							
							
							
							$scope.model.balanceMastery = $scope.model.balance;
							$scope.model.endDateMastery = $scope.model.endDate;
						}
						$scope.showImageCus = false;
						$scope.showImageSub = false;
						$scope.showModifCus = false; 
						if(result[0].cust_img != "" && result[0].cust_img != null){
							$scope.cust_img = result[0].cust_img;
							$scope.showImageCus = true;
						}
						if(result[0].authorized_img != "" && result[0].authorized_img != null){
							$scope.authorized_img_Body = result[0].authorized_img;
							$scope.showImageCus = true;
						}
						if(result[0].bus_permit_no_img1 != "" && result[0].bus_permit_no_img1 != null){
							$scope.bus_permit_no_img1_Body = result[0].bus_permit_no_img1;
							$scope.showImageCus = true;
						}
						if(result[0].img_id != "" && result[0].img_id != null){
							$scope.imgBody = result[0].img_id;
							$scope.showImageCus = true;
						}
						if(result[0].img_id_2 != "" && result[0].img_id_2 != null){
							$scope.imgID_2_Body = result[0].img_id_2;
							$scope.showImageCus = true;
						}
						if(result[0].contract_img1 != "" && result[0].contract_img1 != null){
							$scope.contract_img1_Body = result[0].contract_img1;
							$scope.showImageCus = true;
						}
						if(result[0].contract_img2 != "" && result[0].contract_img2 != null){
							$scope.contract_img2_Body = result[0].contract_img2;
							$scope.showImageCus = true;
						}
	
					}
				}
			$scope.planceDisabledFormNew = false;
			App.unblockUI("#contentMain");

			//DatBD2 update
			/*overLoading();
			item.setcustomerId=lisCus.parent_customer_id;
			prepaid.getInfoCus(item, function(result2){
				closeOverLay();

				if(result2.status == '0' && result2.status != 'undefined'){
					App.unblockUI("#contentMain");
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}else {
					listCusSub5 = result2[0].preCustomer;
				}
				
				
			});
			*/
		});

		$scope.customerId = item.customerId;
		if(item.customerType == '2'){
			$scope.disabledAddChild = false;
		}
	}

	$scope.createEformFn = function(){

		if($scope.rowHighlightSubInfo != SELECT_NONE_INDEX){
			var isdn = $scope.rowHighlightSubInfo.mdn.mdn;
			
			var eformParamInput = {
					"isdn" : isdn,
					"shopCode" : SHOPCODE,
					"reportType" : 'QLTT'
			};
			
			overLoading("loading...");
			
			prepaid.createEformService(eformParamInput, function(result, status, header, config) {
				closeOverLay();
				if (result.status == '0' && result.status != 'undefined') {
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				} else {
					download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				}
			});
			
		}
		
	}
	
	$scope.createEformHDFn = function(){


		if($scope.rowHighlightSubInfo != SELECT_NONE_INDEX){
			var isdn = $scope.rowHighlightSubInfo.mdn.mdn;
			
			var eformParamInput = {
					"isdn" : isdn,
					"reportType" : 'QLTT_HD'
			};
			
			overLoading("loading...");
			
			prepaid.createEformService(eformParamInput, function(result, status, header, config) {
				closeOverLay();
				if (result.status == '0' && result.status != 'undefined') {
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				} else {
					download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
				}
			});
			
		}
		
	
		
	}

	$scope.getInfo1 = function(item) {
		$scope.customerId1 = item.customerId;
		$scope.itemSelected1  = item;
		// set value for mastery
		$scope.model.customerTypeInput = item.customerType;
		$scope.model.nameInput = item.fullName;
		$scope.model.cardIdInput = item.idCard;
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


	$scope.DocumentTypeSourceNew = [ {
		'Id' : '3',
		'Title' : 'Ảnh hợp đồng mặt 1'
	}, {
		'Id' : '4',
		'Title' : 'Ảnh hợp đồng mặt 2'
	}, {
		'Id' : '8',
		'Title' : 'Ảnh hồ sơ mặt 1'
	}, {
		'Id' : '9',
		'Title' : 'Ảnh hồ sơ mặt 2'
	} ];

	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;
	$scope.model.status = 'Giữ số';
	$scope.model.createUser = $localStorage.clientContext.shop.staffCode + " - "+$localStorage.clientContext.shop.staffName;
	$scope.model.createUserCode = $localStorage.clientContext.shop.staffCode;

	$scope.connectSub = function() {
		if ($scope.frm_prepaid.validate()) {
			var contract_img1;
			var contract_img2;
			var fileID;
			var file_id_2;

			for(var i = 0; i < $scope.model.fileAttachmentsNew.length; i ++){
				if($scope.model.fileAttachmentsNew[i].attachmentType == '3'){
					contract_img1 = $scope.model.fileAttachmentsNew[i].fileName;
				}
				if($scope.model.fileAttachmentsNew[i].attachmentType == '4'){
					contract_img2 = $scope.model.fileAttachmentsNew[i].fileName;
				}
				if($scope.model.fileAttachmentsNew[i].attachmentType == '8'){
					fileID = $scope.model.fileAttachmentsNew[i].fileName;
				}
				if($scope.model.fileAttachmentsNew[i].attachmentType == '9'){
					file_id_2 = $scope.model.fileAttachmentsNew[i].fileName;
				}
			}
			
			for ( var i = 0; i< $scope.listCOS.length; i++ ){
				if($scope.model.cos == $scope.listCOS[i].value){
					$scope.cos_name = $scope.listCOS[i].name;
				}
			}

			var ConnectObject = {
					"customerId" : $scope.customerId,
					"cos" : $scope.model.cos,
					"shopid" : $localStorage.clientContext.shopId,
					"mdn" : $scope.model.mdnNew,
					"serial" : $scope.model.serialNew,
					"contract_img1" : contract_img1,
					"contract_img2" : contract_img2,
					"fileID" : fileID,
					"file_id_2" : file_id_2,
					"subUserType" : $scope.model.subUserType,
					"subPaymentType" : $scope.model.subPaymentType,
					"shopCode" : $localStorage.clientContext.shop.shopCode,
					"staffCode": $localStorage.clientContext.shop.staffCode,
					"cosName" : $scope.cos_name,
			};

			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			prepaid.addNewConnect(ConnectObject, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					App.unblockUI("#contentMain");
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}else {
					$scope.model.cos = -1;
					$scope.model.mdnNew = "";
					$scope.model.serialNew = "";
					$scope.model.subUserType = "";
					$scope.removeAllItemNew();
					App.unblockUI("#contentMain");
					bootbox.alert("Bạn đã đấu nối thành công.");
				}
			});
		}
	}

	$scope.changeSove = function() {

		if($scope.customerId1 == ''){
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.CHANGESOVE-0001'));
			return;
		}
		if($scope.model.cardIdInput == ''){
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.CHANGESOVE-0002'));
			return;
		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		var contract_img1 = "";
		var contract_img2 = "";
		var fileID = "";
		var file_id_2 = "";

		for(var i = 0; i < $scope.model.fileAttachments1.length; i ++){
			if($scope.model.fileAttachments1[i].attachmentType == '3'){
				contract_img1 = $scope.model.fileAttachments1[i].fileName;
			}
			if($scope.model.fileAttachments1[i].attachmentType == '4'){
				contract_img2 = $scope.model.fileAttachments1[i].fileName;
			}
			if($scope.model.fileAttachments1[i].attachmentType == '8'){
				fileID = $scope.model.fileAttachments1[i].fileName;
			}
			if($scope.model.fileAttachments1[i].attachmentType == '9'){
				file_id_2 = $scope.model.fileAttachments1[i].fileName;
			}
		}

		var changeSoveInput = {
				"cusId" :  $scope.customerId,
				"cardId" : $scope.model.cardId,
				"cusIdNew" : $scope.customerId1,
				"cardIdNew" : $scope.model.cardIdInput,
				"cusTypeNew" : $scope.model.customerTypeInput,
				"note" : $scope.model.noteMastery,
				"subId" : $scope.subId,
				"contract_img1" : contract_img1,
				"contract_img2" : contract_img2,
				"fileID" : fileID,
				"file_id_2" : file_id_2,
				"shopid" : 	$localStorage.clientContext.shopId
		};

		prepaid.changeSove(changeSoveInput, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.model.searchMdn1 = "";
				$scope.model.searchName1 = "";
				$scope.model.searchTax1 = "";
				$scope.model.searchCardId1 = "";
				$scope.model.searchSimNumber1 = "";
				$scope.model.searchCustomerType1 = "";
				$scope.model.customerTypeInput = "";
				$scope.model.nameInput = "";
				$scope.model.cardIdInput = "";
				$scope.model.noteMastery = "";
				$scope.customerId1 = "";
				$scope.searchResult1 = [];
				$scope.removeAllItem1();
				App.unblockUI("#contentMain"); 
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}
		});

	}

	$scope.checkSubscriberHaveHD = function(listSubscriber, mdn){
		for(var i =0; i<listSubscriber.length;i++){
			if(listSubscriber[i].mdn.mdn == mdn){
				if(StringUtilNVL(listSubscriber[i].contract_img1) != ""){
					return true;
				}
			}
		}
	}
	
	$scope.getInfoSub = function(item) {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		
		$scope.rowHighlightSubInfo = item;
		if($scope.rowHighlightSubInfo != SELECT_NONE_INDEX){
			$scope.isDisabledEfromBtn = false;
			
			if($scope.checkSubscriberHaveHD(listSub ,item.mdn.mdn)){
				$scope.isDisabledEfromHDBtn = false;
			}else{
				$scope.isDisabledEfromHDBtn = true;
			}
			
		}
		
		
		
		$scope.selMdn = item.mdn.mdn;
		$scope.model.mdn = item.mdn.mdn;
		$scope.model.cosId = item.cos;
		$scope.model.balance = item.preBalanceList.coreBalance.balance;
		$scope.model.serial = item.serial;
		$scope.model.oldSIM = item.serial;
		$scope.model.store = "";
		$scope.model.endDate = item.preBalanceList.coreBalance.accountExpiration;
		
		// add here caott2 thong tin thue bao.
		$scope.model.searchUserType = item.sub_user_type;
		$scope.model.searchPaymentType = item.sub_payment_type;
		for(var i=0; i<$scope.listStaff.length; i++){
			if(item.createUser == $scope.listStaff[i].code){
				$scope.model.searchCreateUser = $scope.listStaff[i].code + " - " +$scope.listStaff[i].name;
			}
		}
		$scope.model.searchShopProvice =  item.shopProvice;
		$scope.model.searchShopAddress = item.shopAddress;
		$scope.model.searchShopPhone = item.shopTel;
		$scope.model.searchShopName = item.shopName;
		
		
		
		resetImgSub($scope);
		// SUB
		$scope.showImageSub = false;
		if(item.contract_img1 != "" && item.contract_img1 != null){
			$scope.contract_img1_Body_SUB = item.contract_img1;
			$scope.showImageSub = true;
		}
		if(item.contract_img2 != "" && item.contract_img2 != null){
			$scope.contract_img2_Body_SUB = item.contract_img2;
			$scope.showImageSub = true;
		}
		if(item.file_id != "" && item.file_id != null){
			$scope.fileBody = item.file_id;
			$scope.showImageSub = true;
		}
		if(item.file_id_2 != "" && item.file_id_2 != null){
			$scope.file_id_2_Body = item.file_id_2;
			$scope.showImageSub = true;
		}
		$scope.subId = item.subscriberId;

		// set value for Mastery
		$scope.model.mdnMastery = item.mdn.mdn;
		$scope.model.cosIdMastery = item.cos;
		$scope.model.serialMastery = item.serial;
		$scope.model.balanceMastery = item.preBalanceList.coreBalance.balance;
		$scope.model.endDateMastery = item.preBalanceList.coreBalance.accountExpiration;
		
	
		App.unblockUI("#contentMain");
	}

	$scope.setValueCusSub = function(item) {
		if(item.status == '0' && item.status != 'undefined'){
			App.unblockUI("#contentMain");
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + item.messages));
		}else {
			$scope.model.customerType = item[0].customerType;
			$scope.model.firstName = item[0].firstName;
			$scope.model.lastName = item[0].lastName;
			$scope.model.cardId = item[0].idCard;
			$scope.model.planceOfIssue = item[0].placeOfIssue;
			$scope.model.dateOfIssue = item[0].dateOfIssue.substring(0, 10);
			$scope.model.birthday = item[0].dob.substring(0, 10);
			$scope.model.sex = item[0].gender;
			if (item[0].country != "") {
				$scope.model.country = item[0].country;
			}
			$scope.model.companyName = item[0].companyName;
			$scope.model.tax = item[0].taxCode;
			if (item[0].province != "") {
				$scope.model.province = item[0].province;
				prepaid.district(item[0].province, function(result) {
					$scope.listDistrict = result;
				});
			}
			if (item[0].district != "") {
				$scope.model.district = item[0].district;
			}
			$scope.model.address = item[0].address;
			// set value for mastery
			$scope.model.customerTypeMastery = item[0].customerType;
			$scope.model.nameMastery = item[0].fullName;
			$scope.model.cardIdMastery = item[0].idCard;
			
			if(item[0].customerType =='1'){
				$scope.listSubUserType = $scope.listSubUserTypeCN;
				$scope.showSubParent = false;
			}else{
				$scope.listSubUserType = $scope.listSubUserTypeTC;
				$scope.showSubParent = true;
			}
			$scope.model.addressCompany = item[0].address_company;
			$scope.model.cusTypeCard = item[0].type_card; 
			$scope.model.typeCardCompany = item[0].type_card_company; 
			
		}
	}
	
	$scope.setValueCusSubWithItem = function(item) {
		if( item.length == 0){
			App.unblockUI("#contentMain");
			if(item.length == 0){
				
			}else{
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + item.messages));
			}
			
		}else {
			$scope.model.customerType = item.customerType;
			$scope.model.firstName = item.firstName;
			$scope.model.lastName = item.lastName;
			$scope.model.cardId = item.idCard;
			$scope.model.planceOfIssue = item.placeOfIssue;
			$scope.model.dateOfIssue = item.dateOfIssue.substring(0, 10);
			$scope.model.birthday = item.dob.substring(0, 10);
			$scope.model.sex = item.gender;
			if (item.country != "") {
				$scope.model.country = item.country;
			}
			$scope.model.companyName = item.companyName;
			$scope.model.tax = item.taxCode;
			if (item.province != "") {
				$scope.model.province = item.province;
				prepaid.district(item.province, function(result) {
					$scope.listDistrict = result;
				});
			}
			if (item.district != "") {
				$scope.model.district = item.district;
			}
			$scope.model.address = item.address;
			// set value for mastery
			$scope.model.customerTypeMastery = item.customerType;
			$scope.model.nameMastery = item.fullName;
			$scope.model.cardIdMastery = item.idCard;
			
			if(item.customerType =='1'){
				$scope.listSubUserType = $scope.listSubUserTypeCN;
				$scope.showSubParent = false;
			}else{
				$scope.listSubUserType = $scope.listSubUserTypeTC;
				$scope.showSubParent = true;
			}
			
			$scope.model.cusTypeCard = item.type_card; 
			$scope.model.typeCardCompany = item.type_card_company; 
			$scope.model.addressCompany = item.address_company; 
		}
	}
	
	$scope.setValueCusSubLow = function(item) {
		if(item.status == '0' && item.status != 'undefined'){
			App.unblockUI("#contentMain");
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + item.messages));
		}else {
			$scope.model.subFirstName = item.firstName;
			$scope.model.subLastName = item.lastName;
			$scope.model.subIdCard = item.idCard;
			$scope.model.subPlanceOfIssue = item.placeOfIssue;
			$scope.model.subDateOfIssue = item.dateOfIssue.substring(0, 10);
			$scope.model.subBirthday = item.dob.substring(0, 10);
			$scope.model.subSex = item.gender;
			if (item.country != "") {
				$scope.model.subCountry = item.country;
			}
			
			if (item.province != "") {
				$scope.model.subProvince = item.province;
				prepaid.district(item.province, function(result) {
					$scope.listDistrictSub = result;
					if(result != undefined || result != null){
						if (item.district != "") {
// $scope.model.subDistrict = item.district;
							for(var i=0;i<$scope.listDistrictSub.length;i++){
								if(item.district==$scope.listDistrictSub[i].disId){
									$scope.model.subDistrict=$scope.listDistrictSub[i].disId;
									break;
								}else{
									$scope.model.subDistrict = "";
								}
							}
						}
					}
				});
			}
		
			
			
			
			$scope.model.subAddress = item.address;
			$scope.model.subCusTypeCard = item.type_card;
			// set value for mastery
		}
	}

	$scope.disabledForm = function() {
		$scope.disabledForm = true;
		disableCus($scope, true);
	}

	$scope.enabledForm = function() {
		$scope.disabledForm = false;
		disableCus($scope, false);
		$scope.disAddChild = true;
		$scope.showSubParent = true;
	}

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

	$scope.model.serialNew='';
	$scope.getSIMKit = function (){
		if($scope.model.mdnNew != "" && $scope.model.mdnNew != null){

			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});

			prepaid.getSIMKit($scope.model.mdnNew, function(result) {
				if(result.status == '0' && result.status != 'undefined'){
					App.unblockUI("#contentMain");
					bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
				}else {
					App.unblockUI("#contentMain");
					$scope.model.serialNew = result.messages;
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
	uploader.queueLimit = 14;
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

	uploader.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.model.fileAttachments.push(response);
		fileItem.disabledAttachType = true;
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
	}

	uploader.onBeforeUploadItem  = function(item){
		item.headers = {
				Authorization: 'Bearer ' + $localStorage.clientContext.token
		};

		var identityDocType = StringUtilNVL(item.documentType);
		item.attachMentIdClient = createTimeStamp();
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
		uploader.clearQueue()
	}

	// BEGIN LOAD IMAGE table 2
	$scope.model.fileAttachmentsNew = [];

	var uploaderNew = $scope.uploaderNew = new FileUploader({
		url: eim_url + "/bs/Custome/uploadImage"
	});
	// config uploader
	uploaderNew.queueLimit = 14;
	// Another user-defined filter
	uploaderNew.filters.push({
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

	uploaderNew.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.model.fileAttachmentsNew.push(response);
		fileItem.disabledAttachType = true;
	};

	uploaderNew.onErrorItem = function (fileItem, response, status, headers) {
		if(response!= undefined && response!=null){
			if(response.code == "FILE_IMAGE_CONTENT_ERROR"){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.PREPAID-FILE-CONTENT-ERROR'));
			}
		}else{			
			bootbox.alert($translate.instant('vnm.mnp_message.common.upload.file.error'));
		}
	}

	uploaderNew.onBeforeUploadItem  = function(item){
		item.headers = {
				Authorization: 'Bearer ' + $localStorage.clientContext.token
		};

		var identityDocType = StringUtilNVL(item.documentTypeNew);
		item.attachMentIdClient = createTimeStamp();
		var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);
		var form_data = new FormData();
		form_data.append("identityDocType", item.documentTypeNew);
		form_data.append("attachMentIdClient", attachMentIdClient);
		item.formData.push(form_data);

	}

	$scope.uploadAllFileNew =  function(uploaderIn){
		checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
		if(!checkListTotalSize){
			bootbox.alert("Tổng dung lượng FILE phải nhỏ hơn 5MB ");
			return 0;
		}else{
			uploaderNew.uploadAll();	
		}
	}

	$scope.removeElementAttachmenByItemNew =  function(item){
		item.isSuccess = false;
		item.isCancel= false;
		item.isError = false;
		item.isReady = false;
		item.isUploading = false;
		item.isSuccess= false;

		angular.forEach( $scope.model.fileAttachmentsNew, function(objectAttact, index){
			if(objectAttact.attachMentIdClient == item.attachMentIdClient){
				$scope.model.fileAttachments.splice(index,1);   
			}
		});

		item.remove();
	}

	// remove element in list post to server by item
	$scope.removeElementAttachmenByIdNew =  function(idAttachMent){
		angular.forEach( $scope.model.fileAttachments, function(objectAttact, index){
			if(objectAttact.attachMentIdClient == idAttachMent){
				$scope.model.fileAttachments.splice(index,1);   
			}
		});
	}

	$scope.removeAllItemNew=  function(){
		$scope.model.fileAttachmentsNew = [];
		uploaderNew.clearQueue()
	}

	// BEGIN LOAD IMAGE table 3
	$scope.DocumentTypeSource1 = [ {
		'Id' : '3',
		'Title' : 'Ảnh hợp đồng mặt 1'
	}, {
		'Id' : '4',
		'Title' : 'Ảnh hợp đồng mặt 2'
	}, {
		'Id' : '8',
		'Title' : 'Ảnh hồ sơ mặt 1'
	}, {
		'Id' : '9',
		'Title' : 'Ảnh hồ sơ mặt 2'
	} ];
	$scope.model.fileAttachments1 = [];

	var uploader1 = $scope.uploader1 = new FileUploader({
		url: eim_url + "/bs/Custome/uploadImage"
	});
	// config uploader
	uploader1.queueLimit = 14;
	// Another user-defined filter
	uploader1.filters.push({
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

	uploader1.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.model.fileAttachments1.push(response);
		fileItem.disabledAttachType = true;
	};

	uploader1.onErrorItem = function (fileItem, response, status, headers) {
		if(response!= undefined && response!=null){
			if(response.code == "FILE_IMAGE_CONTENT_ERROR"){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.PREPAID-FILE-CONTENT-ERROR'));
			}
		}else{			
			bootbox.alert($translate.instant('vnm.mnp_message.common.upload.file.error'));
		}
	}

	uploader1.onBeforeUploadItem  = function(item){
		item.headers = {
				Authorization: 'Bearer ' + $localStorage.clientContext.token
		};

		var identityDocType = StringUtilNVL(item.documentType1);
		item.attachMentIdClient = createTimeStamp();
		var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);
		var form_data = new FormData();
		form_data.append("identityDocType", item.documentType1);
		form_data.append("attachMentIdClient", attachMentIdClient);
		item.formData.push(form_data);

	}

	$scope.uploadAllFile1 =  function(uploaderIn){
		checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
		if(!checkListTotalSize){
			bootbox.alert("Tổng dung lượng FILE phải nhỏ hơn 5MB ");
			return 0;
		}else{
			uploader1.uploadAll();	
		}
	}

	$scope.removeElementAttachmenByItem1 =  function(item){
		item.isSuccess = false;
		item.isCancel= false;
		item.isError = false;
		item.isReady = false;
		item.isUploading = false;
		item.isSuccess= false;

		angular.forEach( $scope.model.fileAttachments1, function(objectAttact, index){
			if(objectAttact.attachMentIdClient == item.attachMentIdClient){
				$scope.model.fileAttachments1.splice(index,1);   
			}
		});

		item.remove();
	}

	// remove element in list post to server by item
	$scope.removeElementAttachmenById1 =  function(idAttachMent){
		angular.forEach( $scope.model.fileAttachments1, function(objectAttact, index){
			if(objectAttact.attachMentIdClient == idAttachMent){
				$scope.model.fileAttachments1.splice(index,1);   
			}
		});
	}

	$scope.removeAllItem1 =  function(){
		$scope.model.fileAttachments1 = [];
		uploader1.clearQueue()
	}
	
	$scope.checkblurFirstName = function (){
		$scope.model.subFirstName = $scope.model.firstName ;
	}
	$scope.checkblurLastName = function (){
		$scope.model.subLastName = $scope.model.lastName;
	}
	$scope.checkblurSex = function (){
		$scope.model.subSex = $scope.model.sex;
	}
	$scope.checkblurCounty = function (){
		$scope.model.subCountry = $scope.model.country;
	}
// $scope.checkblurProvince = function (){
// $scope.model.subProvince = $scope.model.province;
// }
	$scope.checkblurProvince = function (){
		;
		for(var i=0;i<$scope.listProvince.length;i++){
			if($scope.model.province==$scope.listProvince[i].proId){
				$scope.model.subProvince=$scope.listProvince[i].proId;
				break;
			}
		}
	}
	$scope.checkblurAddress = function (){
		$scope.model.subAddress = $scope.model.address;
	}
	$scope.checkblurDistrict = function (){
		for(var i=0;i<$scope.listDistrict.length;i++){
			if($scope.model.district==$scope.listDistrict[i].disId){
				$scope.model.subDistrict=$scope.listDistrict[i].disId;
				break;
			}
		}
	}
	



	$scope.saveChild = function() {
		 
		if($scope.model.customerType == ""){
			bootbox.alert( "Bạn phải chọn loại khách hàng.");
			return;
		}

// var isFormValidated = validateAllForm($scope, $translate);
		
			if ($scope.frm_prepaid.validate()) {
				var cust_img = "";
				var bus_permit_no_img1 = "";
				var contract_img1 = "";
				var contract_img2 = "";
				var authorized_img = "";
				var img_id = "";
				var img_id_2 = "";
				var img_mant_id = "";
				var img_mant_id_1 = "";
				var img_mant_id_2 = "";
				var parent_img = "";
				var bus_permit_no_img2 = "";

				for(var i = 0; i < $scope.model.fileAttachments.length; i ++){
					if($scope.model.fileAttachments[i].attachmentType == '1'){
						authorized_img = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '2'){
						bus_permit_no_img1 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '3'){
						contract_img1 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '4'){
						contract_img2 = $scope.model.fileAttachments[i].fileName;
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
					if($scope.model.fileAttachments[i].attachmentType == '10'){
						img_mant_id = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '11'){
						img_mant_id_1 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '12'){
						img_mant_id_2 = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '13'){
						parent_img = $scope.model.fileAttachments[i].fileName;
					}
					if($scope.model.fileAttachments[i].attachmentType == '14'){
						bus_permit_no_img2 = $scope.model.fileAttachments[i].fileName;
					}
				}

				
				 if($scope.model.customerType =='2'){
					 var CustomerResponseSub = {
						 "firstName" : $scope.model.subFirstName,// ten ho
						 "lastName" : $scope.model.subLastName,// ten goi
						 "type_card": $scope.model.subCusTypeCard,// loai giay
																	// to tuy
																	// than
						 "idCard" : $scope.model.subIdCard,// so giay to tuy
															// than || CMT
						 "placeOfIssue" : $scope.model.subPlanceOfIssue,// noi
																		// cap
						 "dateOfIssue" : $("#subDateOfIssue").val(),// ngay cap
						 "dob" : $("#subBirthday").val(),// ngay sinh
						 "gender" : $scope.model.subSex,// gioi tinh
						 "country" : $scope.model.subCountry,// quoc tich
						 "companyName" : $scope.model.companyName,// ten cty
						 "province" : $scope.model.subProvince,// tinh thanh
						 "district" : $scope.model.subDistrict,// quan huyen
						 "address" : $scope.model.subAddress,// dia chi
						 "cust_img" : cust_img,
						 "bus_permit_no_img1" : bus_permit_no_img1,
						 "contract_img1" : contract_img1,
						 "contract_img2" : contract_img2,
						 "authorized_img" : authorized_img,
						 "img_id" : img_id,
						 "img_id_2" : img_id_2,
						 "shopId" : $localStorage.clientContext.shopId,
// "type_card_company": $scope.model.typeCardCompany,//loai giay to to chuc
						 "taxCode" : $scope.model.tax,// so giay to to chuc
						 "parent_customer_id" : $scope.customerId,
						 "customerType" : $scope.model.customerType,
						 "address_company" : $scope.model.addressCompany,
						 "bus_permit_no_img2" : bus_permit_no_img2,
						 "parent_img" : parent_img
					   }
				}
				
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				prepaid.regCustomerChild(CustomerResponseSub, function(result) {
					if(result.status == '0' && result.status != 'undefined'){
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						$scope.customerId = result.customerId;
						$scope.disabledForm = true;
						disableCus($scope, true);
						$scope.disabledFormSub = true;
						$scope.disabledTableChild = true;
						if($scope.model.customerType == '2'){
							$scope.disabledAddChild = false;
						}
						if(result.customerType =='2'){
							$scope.showSubParent = true;
							$scope.planceDisabledFormNew = false;
						}else{
							$scope.showSubParent = false;
						}
						$scope.showAddChildNew = true;
						$scope.btnSave = true;
						App.unblockUI("#contentMain");
						bootbox.alert("Bạn đã đăng ký thành công.");
					}
				});
			}
		
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
	var checkFileAllisUpload = true;
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		if(item.attachMentIdClient == attachMentIdClient){
			item.remove();	
		}
	}
}

function validateInput($scope){


}

function emtyInput($scope){
	$scope.model.customerType = "";
	$scope.model.firstName = "";
	$scope.model.lastName = "";
	$scope.model.cardId = "";
	$scope.model.planceOfIssue = "";
	$scope.model.dateOfIssue = "";
	$scope.model.birthday = "";
	$scope.model.sex = "";
	$scope.model.country = "";
	$scope.model.companyName = "";
	$scope.model.tax = "";
	$scope.model.province = "";
	$scope.model.district = "";
	$scope.model.address = "";

	$scope.model.searchMdn = "";
	$scope.model.searchName = "";
	$scope.model.searchTax = "";
	$scope.model.searchCardId = "";
	$scope.model.searchSimNumber = "";
// $scope.model.searchCustomerType = "";
	$scope.model.comment = "";

	$scope.model.mdn = "";
	$scope.model.cosId = "";
	$scope.model.balance = "";
	$scope.model.serial = "";
	$scope.model.store = "";
	$scope.model.endDate = "";

	$scope.showImageCus = false;
	$scope.showImageSub = false;
	$scope.showModifCus = true;
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
	$scope.imgID_2_Body_parent_d = "";
	$scope.cust_img_parent_d = "";
	$scope.imgBody_parent_d = "";
	$scope.parent_img = "";
	$scope.bus_permit_no_img2 = "";

	$scope.removeAllItem();
	$scope.removeAllItemNew();
	$scope.model.cusTypeCard = "";
	$scope.model.typeCardCompany ="";
	$scope.model.searchUserType= "";
	$scope.model.searchPaymentType= "";
	$scope.model.searchCreateUser= "";
	$scope.model.searchShopProvice= "";
	$scope.model.searchShopAddress= "";
	$scope.model.searchShopPhone= "";
	$scope.model.searchShopName= "";
	
	$scope.model.subLastName ="";
	$scope.model.subFirstName = "";
	$scope.model.subIdCard = "";
	$scope.model.subPlanceOfIssue = "";
	$scope.model.subDateOfIssue = "";
	$scope.model.subBirthday = "";
	$scope.model.subSex = "";
	$scope.model.subCountry = "";
	$scope.model.subCompanyName = "";
	$scope.model.subTax = "";
	$scope.model.subProvince = "";
	$scope.model.subDistrict = "";
	$scope.model.subAddress = "";
	$scope.model.subCusTypeCard = "";
	
	$scope.model.addressCompany = "";

	
}

function emtyInputChild($scope){
	
// $scope.model.firstName = "";
// $scope.model.lastName = "";
// $scope.model.cardId = "";
// $scope.model.planceOfIssue = "";
// $scope.model.dateOfIssue = "";
// $scope.model.birthday = "";
// $scope.model.sex = "";
// $scope.model.province = "";
// $scope.model.district = "";
// $scope.model.address = "";
//
// $scope.showImageCus = false;
// $scope.showImageSub = false;
// $scope.showModifCus = true;
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
	$scope.imgID_2_Body_parent_d = "";
	$scope.cust_img_parent_d = "";
	$scope.imgBody_parent_d = "";
	$scope.parent_img = "";
	$scope.bus_permit_no_img2 = "";

	$scope.model.subLastName ="";
	$scope.model.subFirstName = "";
	$scope.model.subIdCard = "";
	$scope.model.subPlanceOfIssue = "";
	$scope.model.subDateOfIssue = "";
	$scope.model.subBirthday = "";
	$scope.model.subSex = "";
	$scope.model.subCountry = "";
	$scope.model.companyName = "";
	$scope.model.subTax = "";
	$scope.model.subProvince = "";
	$scope.model.subDistrict = "";
	$scope.model.subAddress = "";
	$scope.model.subCusTypeCard = "";
	$scope.model.country = "";
	$scope.model.addressCompany = "";
	
// $scope.model.typeCardCompany = "";
// $scope.model.tax = "";
	
	$scope.removeAllItem();
	$scope.removeAllItemNew();
	$scope.model.customerType = '2';
}

function resetConnec($scope){
	$scope.model.cos = -1;
	$scope.model.mdnNew = "";
	$scope.model.serialNew = "";
	$scope.customerId = "";
	$scope.subId = "";
	$scope.removeAllItemNew();
}

function resetMastery($scope){
	$scope.model.searchMdn1 = "";
	$scope.model.searchName1 = "";
	$scope.model.searchTax1 = "";
	$scope.model.searchCardId1 = "";
	$scope.model.searchSimNumber1 = "";
	$scope.model.searchCustomerType1 = "";
	$scope.model.customerTypeMastery = "";
	$scope.model.nameMastery = "";
	$scope.model.cardIdMastery = "";
	$scope.model.customerTypeInput = "";
	$scope.model.nameInput = "";
	$scope.model.cardIdInput = "";
	$scope.model.mdnMastery = "";
	$scope.model.cosIdMastery = "";
	$scope.model.serialMastery = "";
	$scope.model.balanceMastery = "";
	$scope.model.endDateMastery = "";
	$scope.model.noteMastery = "";
	$scope.customerId1 = "";
	$scope.searchResult1 = [];
	$scope.removeAllItem1();
}

function resetImg($scope){
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
	$scope.imgID_2_Body_parent_d = "";
	$scope.cust_img_parent_d = "";
	$scope.imgBody_parent_d = "";
	$scope.parent_img = "";
	$scope.bus_permit_no_img2 = "";
}

function resetImgSub($scope){
	$scope.fileBody = "";
	$scope.file_id_2_Body = "";
	$scope.contract_img2_Body_SUB = "";
	$scope.contract_img1_Body_SUB = "";
	$scope.imgID_2_Body_parent_d = "";
	$scope.cust_img_parent_d = "";
	$scope.imgBody_parent_d = "";
}

function disableCus($scope, isDis){
	$scope.customerTypeDisabledForm = isDis;
	$scope.lastNameDisabledForm = isDis;
	$scope.firtNameDisabledForm = isDis;
	$scope.cardIdDisabledForm = isDis;
	$scope.planceDisabledForm = isDis;
	$scope.dateOfIssDisabledForm = isDis;
	$scope.brithdayDisabledForm = isDis;
	$scope.sexDisabledForm = isDis;
	$scope.countryDisabledForm = isDis;
	$scope.companyNameDisabledForm = isDis;
	$scope.taxCodeDisabledForm = isDis;
	$scope.provinceDisabledForm = isDis;
	$scope.dictrictDisabledForm = isDis;
	$scope.addressDisabledForm = isDis;
	$scope.commentDisabledForm = false;
	$scope.customerTypeCardDisabledForm = isDis;
	$scope.showSubParent = isDis;
	$scope.subCustomerTypeCardDisabledForm = isDis;
	$scope.subcardIdDisabledForm = isDis;
}

function showTheCustomerType($scope, id, isEdit){
	$scope.listSubUserType = [];
	if (id == "1") {
		disableCus($scope, false);
		if(isEdit){
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});
			resetFormCreateNew($scope);
		}
		$scope.DocumentTypeSource = [ {
			'Id' : '5',
			'Title' : 'Ảnh khách hàng'
		}, {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1'
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2'
		}, ];
		$scope.listSubUserType = $scope.listSubUserTypeCN;
		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
		$scope.showSubParent = false;
		$scope.planceDisabledFormNew = false;

// $scope.customerTypeCardDisabledForm = false

	} else if (id == "2") {
		if(isEdit){
			$scope.model.country = -1;
			$.each($scope.listCountry, function(index, value) {
				if (value.country == 'Vietnam') {
					$scope.model.country = value.countryId;
				}
			});

			$scope.brithdayDisabledForm = true;
			resetFormCreate($scope);
		}
		disableCus($scope, false);
		$scope.DocumentTypeSource = [ {
			'Id' : '2',
			'Title' : 'Ảnh giấy phép kinh doanh mặt 1'
		}, {
			'Id' : '14',
			'Title' : 'Ảnh giấy phép kinh doanh mặt 2'
		},  {
			'Id' : '11',
			'Title' : 'Ảnh chứng minh thư đại diện mặt 1'
		}, {
			'Id' : '12',
			'Title' : 'Ảnh chứng minh thư đại diện mặt 2'
		}, {
			'Id' : '10',
			'Title' : 'Ảnh khách hàng đại diện'
		},{
			'Id' : '3',
			'Title' : 'Ảnh hợp đồng mặt 1'
		}, {
			'Id' : '4',
			'Title' : 'Ảnh hợp đồng mặt 2'
		}, {
			'Id' : '5',
			'Title' : 'Ảnh khách hàng con'
		}, {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1'
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2'
		}, {
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền'
		}, {
			'Id' : '13',
			'Title' : 'Ảnh danh sách khách hàng con'
		}];
		$scope.listSubUserType = $scope.listSubUserTypeTC;
// $scope.companyNameDisabledForm = true;
		$scope.showSubParent = true;
		$scope.customerTypeCardDisabledForm = true;
		$scope.planceDisabledFormNew = true;
		$scope.planceDisabledForm = true;
	
// $scope.subcardIdDisabledForm = true;
// $scope.subCustomerTypeCardDisabledForm = true;
// $scope.taxCodeDisabledForm = false;
// $scope.provinceDisabledForm = false;
// $scope.dictrictDisabledForm = false;
		$scope.cardIdDisabledForm = true;
	

	}
}

function showTheCustomerTypeChange($scope, id, isEdit){
	$scope.listSubUserType = [];
	if (id == "1") {
		$scope.DocumentTypeSource = [ {
			'Id' : '5',
			'Title' : 'Ảnh khách hàng'
		}, {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1'
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2'
		}, ];


// $scope.customerTypeCardDisabledForm = false

	} else if (id == "2") {

		$scope.DocumentTypeSource = [ {
			'Id' : '2',
			'Title' : 'Ảnh giấy phép kinh doanh mặt 1'
		}, {
			'Id' : '14',
			'Title' : 'Ảnh giấy phép kinh doanh mặt 2'
		},  {
			'Id' : '11',
			'Title' : 'Ảnh chứng minh thư đại diện mặt 1'
		}, {
			'Id' : '12',
			'Title' : 'Ảnh chứng minh thư đại diện mặt 2'
		}, {
			'Id' : '10',
			'Title' : 'Ảnh khách hàng đại diện'
		},{
			'Id' : '3',
			'Title' : 'Ảnh hợp đồng mặt 1'
		}, {
			'Id' : '4',
			'Title' : 'Ảnh hợp đồng mặt 2'
		}, {
			'Id' : '5',
			'Title' : 'Ảnh khách hàng con'
		}, {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1'
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2'
		}, {
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền'
		}, {
			'Id' : '13',
			'Title' : 'Ảnh danh sách khách hàng con'
		}];
	}
}

function resetFormCreate($scope)
{
	
	$scope.model.subLastName = $scope.model.lastName;
	$scope.model.subFirstName = $scope.model.firstName;
	for(var i=0;i<$scope.listSex.length;i++){
		if($scope.model.sex==$scope.listSex[i].Id){
			$scope.model.subSex=$scope.listSex[i].Id;
			break;
		}
	}
	for(var i=0;i<$scope.listCusTypeCard.length;i++){
		if($scope.model.cusTypeCard==$scope.listCusTypeCard[i].cusTypeCardId){
			$scope.model.subCusTypeCard=$scope.listCusTypeCard[i].cusTypeCardId;
			break;
		}
	}
	$scope.model.subIdCard = $scope.model.cardId;
	$scope.model.subPlanceOfIssue =  $scope.model.planceOfIssue;
	$scope.model.subDateOfIssue = $scope.model.dateOfIssue;
	$scope.model.subBirthday = $scope.model.birthday;
	
	for(var i=0;i<$scope.listProvince.length;i++){
		if($scope.model.province==$scope.listProvince[i].proId){
			$scope.model.subProvince=$scope.listProvince[i].proId;
			break;
		}
	}
	
	for(var i=0;i<$scope.listDistrictSub.length;i++){
		if($scope.model.district==$scope.listDistrictSub[i].disId){
			$scope.model.subDistrict=$scope.listDistrictSub[i].disId;
			break;
		}
	}
	for(var i=0;i<$scope.listCountry.length;i++){
		if($scope.model.country==$scope.listCountry[i].countryId){
			$scope.model.subCountry=$scope.listCountry[i].countryId;
			break;
		}
	}
	$scope.model.subAddress = $scope.model.address;
}

function resetFormCreateNew($scope)
{
	$scope.model.companyName ="";
	$scope.model.tax = "";
	$scope.model.typeCardCompany ="";
	
}


