app_vnm.factory('ctk_stockInputFromSuperior', function($http, $translate) {
	return {
		create_ticket : function(data, callback) {
			$http.post(eim_url + '/bs/ticket', data).success(callback).error(function(callback) {
				App.unblockUI("#stockInputFromSuperior");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
	}
});

app_vnm.controller('ctrl-stockInputFromSuperior', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, ctk_stockInputFromSuperior) {
	
	$scope.model = {};
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			SubscriberName : {
				required : true,
				maxlength : 255
			},
			NPRegistrationName : {
				required : true,
				maxlength : 255
			},
			DocumentNumber : {
				required : true,
				maxlength : 11
			},
			DocumentIssueDate : {
				required : true,
				maxlength : 11
			},
			DocumentIssuePlace : {
				required : true,
				maxlength : 11
			},
			SubscriberRepresentative : {
				required : true,
				maxlength : 255
			}
		},
		messages : {
			SubscriberName : {
				required : $translate.instant('vnm.messages.validate.subscriberName.required'),
				maxlength : "Tên thuê bao không vượt quá 255 ký tự."
			},
			NPRegistrationName : {
				required : "Yêu cầu nhập tên đăng ký NP",
				maxlength : "Tên đăng ký NP không vượt quá 255 ký tự."
			},
			DocumentNumber : {
				required : "Yêu cầu nhập số định danh",
				maxlength : "Số định danh không vượt quá 11 ký tự."
			},
			DocumentIssueDate : {
				required : "Yêu cầu nhập ngày cấp định danh",
				maxlength : "Ngày cấp định danh không vượt quá 11 ký tự."
			},
			DocumentIssuePlace : {
				required : "Yêu cầu nhập nơi cấp định danh",
				maxlength : "Nơi cấp định danh không vượt quá 11 ký tự."
			},
			SubscriberRepresentative : {
				required : "Yêu cầu nhập tên đại diện thuê bao",
				maxlength : "Tên đại diện thuê bao không vượt quá 255 ký tự."
			}
		}
	}

	$scope.listShopType = [ {
		'Id' : '1',
		'Title' : 'CH 1'
	}, {
		'Id' : '2',
		'Title' : 'CH 2'
	} ];
	$scope.listStatus = [ {
		'Id' : '0',
		'Title' : 'Chưa xuất'
	}, {
		'Id' : '1',
		'Title' : 'Xuất'
	} ];

	$scope.listStockInput = [ {
		'Id' : '1',
		'Title' : 'kho 1'
	}, {
		'Id' : '2',
		'Title' : 'kho 2'
	} ];
	$scope.listReason = [ {
		'Id' : '1',
		'Title' : 'Xuất hàng cho đơn vị cấp dưới'
	}, {
		'Id' : '2',
		'Title' : 'Xuất hàng cho đơn vị cấp trên'
	}, {
		'Id' : '3',
		'Title' : 'Xuất hàng cho đơn vị trung gian'
	} ];
	$scope.listSupplier = [ {
		'Id' : '1',
		'Title' : 'Quản lý hàng VNMobile'
	}, {
		'Id' : '2',
		'Title' : 'Quản lý hàng VNMobile 1'
	}, {
		'Id' : '3',
		'Title' : 'Quản lý hàng VNMobile 2'
	} ];

	$scope.search = function() {
		alert("search");
	}

	$scope.save = function() {
		alert("save");
	}
	$scope.serial = function() {
		alert("serial");
	}
	$scope.loadFile = function() {
		alert("loadFile");
	}
	$scope.print = function() {
		alert("print");
	}
	$scope.save = function() {
		alert("save");
	}
});
