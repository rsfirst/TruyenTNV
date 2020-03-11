app_vnm.factory('postpaid', function($http) {
	return {
		province : function(callback) {
			var url = eim_url + "/bs/Custome/listProvince";
			$http.post(url).success(callback);
		},
		district : function(data, callback) {
			var url = eim_url + "/bs/Custome/listDistrict?proId=" + data;
			$http.post(url).success(callback);
		}
	}
});

app_vnm.controller('ctrl-postpaid', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage, postpaid) {
	
	$scope.model = {};
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
			customerType : {
				required : true,
				EmptyValue : true
			},
			firstName : {
				required : true,
				maxlength : 50,
				EmptyValue : true
			},
			lastName : {
				required : true,
				maxlength : 50,
				EmptyValue : true
			},
			cardId : {
				required : true,
				EmptyValue : true,
				maxlength : 15,
				minlength : 8
			},
			address : {
				required : true,
				EmptyValue : true,
				maxlength : 80,
				minlength : 5
			},
			planceOfIssue : {
				minlength : 5,
				required : true,
				EmptyValue : true
			},
			dateOfIssue : {
				required : true,
				EmptyValue : true,
				isDate : true,
				lessthancurrentdate : true,
				requiredlessthanyear : 15
			},
			birthday : {
				required : true,
				EmptyValue : true,
				isDate : true,
				check14to100Age : true
			},
			country : {
				required : true,
				EmptyValue : true
			},
			mdnNew : {
				maxlength : 11,
				minlength : 10
			},
			serialNew : {
				maxlength : 20
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
			lastName : {
				required : "Bạn cần nhập tên họ.",
				EmptyValue : "Bạn cần nhập tên họ.",
				maxlength : "Tên họ không nhiều hơn 50 ký tự."
			},
			firstName : {
				required : "Bạn cần nhập tên gọi.",
				EmptyValue : "Bạn cần nhập tên gọi.",
				maxlength : "Tên gọi không nhiều hơn 50 ký tự."
			},
			cardId : {
				required : "Bạn cần nhập CMT.",
				EmptyValue : "Bạn cần nhập CMT.",
				maxlength : "Địa chỉ không nhiều hơn 15 ký tự",
				minlength : "Địa chỉ không ít hơn 8 ký tự"
			},
			address : {
				required : "Bạn cần nhập địa chỉ.",
				EmptyValue : "Bạn cần nhập địa chỉ.",
				maxlength : "Địa chỉ không nhiều hơn 80 ký tự",
				minlength : "Địa chỉ không ít hơn 5 ký tự"
			},
			planceOfIssue : {
				required : "Yêu cầu nhập Nơi cấp",
				EmptyValue : "Yêu cầu nhập Nơi cấp",
				minlength : "Nơi cấp CMT không ít hơn 5 ký tự"
			},
			dateOfIssue : {
				required : "Yêu cầu nhập Ngày cấp",
				EmptyValue : "Yêu cầu nhập Ngày cấp",
				isDate : "Ngày cấp không đúng định dạng",
				lessthancurrentdate : "Ngày cấp phải nhỏ hơn ngày hiện tại",
				requiredlessthanyear : "CMT đã hết hạn"
			},
			birthday : {
				required : "Yêu cầu nhập Ngày sinh",
				EmptyValue : "Yêu cầu nhập Ngày sinh",
				isDate : "Ngày sinh không đúng định dạng",
				check14to100Age : "Bạn chỉ được đăng ký từ 14 - 100 tuổi"
			},
			mdnNew : {
				minlength : "Số điện thoại không ít hơn 10 số.",
				maxlength : "Số điện thoại không nhiều hơn 11 số."
			},
			serialNew : {
				maxlength : "Số SIM không nhiều hơn 20 số."
			}
		}
	}

	$scope.listSex = [ {
		'Id' : '0',
		'Title' : 'Nam'
	}, {
		'Id' : '1',
		'Title' : 'Nữ'
	} ];

	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		postpaid.province(function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				bootbox.alert(result.messages);
			} else {
				$scope.listProvince = result;
			}
		});
	}

	var initialize = function() {
		$scope.loadDefauld();
	}

	initialize();

	$.validator.addMethod("EmptyValue", function(value, element) {
		if (value == undefined || value == "")
			return false;
		if ($.trim(value) == "")
			return false;
		return true;
	}, "");

	$scope.updateDistrict = function(id) {
		prepaid.district(id, function(result) {
			$scope.listDistrict = result;
		});
	}

	$scope.back = function() {
		if ($scope.isNewCus) {
			$scope.disabledForm = true;
			disableCus($scope, true);
			$scope.disabledFormSub = true;
			emtyInput($scope);
			$scope.disabledTableChild = false;
		} else {
			$scope.disabledForm = true;
			disableCus($scope, true);
			$scope.disabledFormSub = true;
			$scope.disabledTableChild = false;
		}
	}

	// BEGIN validate input
	$.validator.addMethod("isDate", function(value, element) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;
		var valueDate = $.trim(value);
		return moment(valueDate, 'DD/MM/YYYY', true).isValid();
	}, "");

	$.validator.addMethod("lessthancurrentdate", function(value, element) {
		if (value === "")
			return true;
		if ($.trim(value) == "")
			return true;
		var today = moment();
		return (moment(today, "DD/MM/YYYY") > moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("requiredlessthanyear", function(value, element, options) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;

		var today = moment().add(-options, 'years');
		return (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("check14to100Age", function(value, element) {
		if (value == undefined || value == "")
			return true;
		if ($.trim(value) == "")
			return true;

		var today = moment().add(-14, 'years');
		if (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY")) {
			return false;
		}
		;
		var today1 = moment().add(-100, 'years');
		if (moment(today1, "DD/MM/YYYY") >= moment(value, "DD/MM/YYYY")) {
			return false;
		}
		;
		return true;
	}, "");
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

function emtyInput($scope) {
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
	$scope.model.searchCustomerType = "";
	$scope.model.comment = "";

	$scope.model.mdn = "";
	$scope.model.cosId = "";
	$scope.model.balance = "";
	$scope.model.serial = "";
	$scope.model.store = "";
	$scope.model.endDate = "";

	$scope.showImageCus = false;
	$scope.showImageSub = false;
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

	$scope.removeAllItem();
	$scope.removeAllItemNew();
}

function emtyInputChild($scope) {
	$scope.model.customerType = '4';
	$scope.model.firstName = "";
	$scope.model.lastName = "";
	$scope.model.cardId = "";
	$scope.model.planceOfIssue = "";
	$scope.model.dateOfIssue = "";
	$scope.model.birthday = "";
	$scope.model.sex = "";
	$scope.model.province = "";
	$scope.model.district = "";
	$scope.model.address = "";

	$scope.showImageCus = false;
	$scope.showImageSub = false;
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

	$scope.removeAllItem();
	$scope.removeAllItemNew();
}

function resetConnec($scope) {
	$scope.model.cos = -1;
	$scope.model.mdnNew = "";
	$scope.model.serialNew = "";
	$scope.customerId = "";
	$scope.removeAllItemNew();
}

function resetImg($scope) {
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
}

function resetImgSub($scope) {
	$scope.fileBody = "";
	$scope.file_id_2_Body = "";
	$scope.contract_img2_Body_SUB = "";
	$scope.contract_img1_Body_SUB = "";
}

function disableCus($scope, isDis) {
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
}

function showTheCustomerType($scope, id) {
	if (id == "1") {
		disableCus($scope, false);

		$.each($scope.listCountry, function(index, value) {
			if (value.country == 'Vietnam') {
				$scope.model.country = value.countryId;
			}
		});
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

		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;

	} else if (id == "2") {
		$scope.model.country = -1;
		disableCus($scope, false);
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
		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
		$scope.provinceDisabledForm = true;
		$scope.dictrictDisabledForm = true;

	} else if (id == "3") {
		$scope.model.country = -1;
		disableCus($scope, false);
		$.each($scope.listCountry, function(index, value) {
			if (value.country == 'Vietnam') {
				$scope.model.country = value.countryId;
			}
		});

		$scope.DocumentTypeSource = [ {
			'Id' : '1',
			'Title' : 'Ảnh giấy ủy quyền'
		}, {
			'Id' : '2',
			'Title' : 'Ảnh giấy phép kinh doanh'
		}, {
			'Id' : '3',
			'Title' : 'Ảnh hợp đồng mặt 1'
		}, {
			'Id' : '4',
			'Title' : 'Ảnh hợp đồng mặt 2'
		}, {
			'Id' : '5',
			'Title' : 'Ảnh khách hàng'
		}, {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1'
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2'
		} ];
	} else {
		$scope.model.country = -1;
		disableCus($scope, false);
		$scope.DocumentTypeSource = [ {
			'Id' : '6',
			'Title' : 'Ảnh chứng minh thư mặt 1'
		}, {
			'Id' : '7',
			'Title' : 'Ảnh chứng minh thư mặt 2'
		} ];

		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
	}
}
