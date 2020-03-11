var eim_url = "http://localhost:7861";
var logout_url = "http://localhost:7861/account/logout";

//var eim_url = "http://10.6.2.41:7861";
//var logout_url = "http://10.6.2.41:7861/account/logout";

var MAX_TOTAL_FILE_LENGTH_BYTE = 6291456; // 6Megabyte
var MAX_TOTAL_FILE_LENGTH_MEGABYTE = 6; // MB
var MAX_FILE_LENGTH = 1048576; // 1MB
var MAX_FILE_UPLOADER = 10; // max file uploader in queue
var MAX_FILE_UPLOADER_NPR = 10; // max file uploader in queue
var MNP_MAX_FILE_NAME_UPLOAD = 30; // max file uploader in queue

var MNP_MAX_FILE_SIZE = 204800; // 200KB

var isRefToken = false;

var FIRST_PAGE;
var LAST_PAGE;
var NEXT_PAGE;
var PREV_PAGE;
var TOTAL_RECORD;
var DATA_TABLE_NOT_FOUND;
var LABEL_SEARCH;

var app_vnm = angular.module('app-vnm', [ 'ui.bootstrap', 'ngRoute', 'ngTable', 'pascalprecht.translate', 'ngCookies', 'ngValidate', 'angularjs-datetime-picker', 'angular-confirm',
		'angularFileUpload', 'ngStorage', 'dx', 'ngSanitize', 'ui.select', 'ui.select.pagination.groups', 'TreeWidget','smart-table' ]);
app_vnm.factory('LanguageService', function($http, $translate, LANGUAGES) {
	return {
		getBy : function(language) {
			if (language == undefined) {
				language = Cookies.get('vnm_lang');
			}
			var promise = $http.get('/i18n/' + language + '.json').then(function(response) {
				return LANGUAGES;
			});
			return promise;
		}
	};
});

app_vnm.factory("interceptors", [ function() {
	return {
		'response' : function(response) {
			return response;
		},
	};
} ]);

app_vnm.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.interceptors.push('interceptors');
} ]);

app_vnm.config(function($routeProvider, $validatorProvider, $translateProvider) {
	// var lang = Cookies.get('vnm_lang');
	// $translateProvider.translations("en", en_lang);
	// $translateProvider.translations("en", vi_lang);
	$translateProvider.translations("vi", vi_lang);
	$translateProvider.preferredLanguage('vi');
	$translateProvider.fallbackLanguage('vi');
	$validatorProvider.setDefaults({
		errorElement : 'span',
		errorClass : 'help-block',
		highlight : function(element) {
			$(element).parent().addClass('has-error');
		},
		unhighlight : function(element) {
			$(element).parent().removeClass('has-error');
		},
		success : function(label) {
			label.parent().removeClass('has-error');
		}
	});
});

function run($rootScope, $http, $location, $localStorage, $window, $interval, $uibModal, $translate) {
	$rootScope.expToken = function() {
		var now = (new Date()).getTime();
		var exp = Math.floor(($localStorage.clientContext.createTimeClient - now) / 1000) + $localStorage.clientContext.interval;
		return exp;
	}

	if ($localStorage.clientContext && $rootScope.expToken() > 10) {
		$.ajaxSetup({
			headers : {
				'Content-Type' : 'application/json;charset=utf-8'
			}
		});
		$.each($localStorage.clientContext.sitemaps, function(index, value) {
			var func = value.strCode
			if (page.func == func) {
				var privileges = value.privileges;
				$.each(privileges, function(p_index, p_value) {
					var c = "*[data-action='" + p_value.code + "']";
					var item = {}
					item[c] = {
						display : "inline-block !important"
					};
					$.injectCSS(item);
				})
			}
		})
	}

	/*if ($localStorage.clientContext && $rootScope.expToken <= 0) {
		$window.location.href = '/account/login';
	}*/

	/*$rootScope.$on('$locationChangeStart', function(event, next, current) {
		var publicPages = [ '/account/login' ];
		var restrictedPage = publicPages.indexOf($location.path()) === -1;
		if (restrictedPage && !$localStorage.clientContext) {
			$window.location.href = '/account/login';
		}
	});*/
	$rootScope.checAction = function(p_action) {
		var result = false;
		$.each($localStorage.clientContext.sitemaps, function(index, value) {
			var func = value.strCode
			if (page.func == func) {
				var privileges = value.privileges;
				$.each(privileges, function(p_index, p_value) {
					if (p_value.code == p_action) {
						result = true;
					}
				})
			}
		})
		return result;
	}

	$rootScope.downloadFileUploadClient = function(item) {
		var fileData = new Blob([ item._file ]);
		var fileName = item.file.name;
		download(fileData, fileName, 'application/json');
	}

	$rootScope.viewFileImageClient = function(item, idModal, classImgPreview) {
		$('.' + classImgPreview).attr('src', item.dataImg);
		$('#' + idModal).modal('show');
	}

	$rootScope.removeZezoFirstPosition = function(e) {

		var inputValue = $.trim(e.target.value);
		var valueWithoutZezo = "";
		var keyCode = (e.keyCode ? e.keyCode : e.which);
		if ((keyCode == 96 || keyCode == 48) && inputValue.length == 0) {
			e.preventDefault();
		}

		if (inputValue.startsWith("0")) {
			valueWithoutZezo = inputValue.substring(1, inputValue.length);
			e.target.value = valueWithoutZezo;
		}
		;

		// neu bat dau = 84 va lon hon 9, cat bo dau so 84
		if (inputValue.startsWith("84") && inputValue.length > 9) {
			valueWithoutZezo = inputValue.substring(2, inputValue.length);
			e.target.value = valueWithoutZezo;
		}
		;

		if (inputValue.startsWith("+84")) {
			valueWithoutZezo = inputValue.substring(3, inputValue.length);
			e.target.value = valueWithoutZezo;
		}
		;

	}

	/*checktimeout = $interval(function() {
		if ($rootScope.expToken() <= 60) {
			if (!isRefToken) {
				$http({
					method : 'POST',
					url : eim_url + "/refreshToken"
				}).success(function(res) {
					if (res.createTime == '' || res.createTime == 'null' || res.createTime == null) {
						$window.location.href = '/account/login';
					} else {
						$localStorage.clientContext.createTimeClient = (new Date()).getTime();
						$localStorage.clientContext.interval = res.interval;
						$localStorage.clientContext.createTime = res.createTime;
						isRefToken = true
					}
				}).error(function(qwe) {
					$window.location.href = '/account/login';
				});
			} else {
				$window.location.href = '/account/login';
			}
		}
	}, 1000);*/
}
app_vnm.run(run);

app_vnm.filter('attrFilter', function() {
	return function(attributes, key) {
		var result = "";
		$.each(attributes, function(index, item) {
			if (item.code == key) {
				result = item.value;
			}
		});
		return result;
	};
});

app_vnm.controller('ctrl-topfragment', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, $filter, $localStorage, $http, $interval) {

	$rootScope.vaidChangePass = {
		rules : {
			Password : {
				required : true,
				maxlength : 255
			},
			NewPassword : {
				required : true,
				maxlength : 255
			},
			ReNewPassword : {
				required : true,
				equalTo : "#NewPassword"
			}
		},
		messages : {
			Password : {
				required : "Yêu cầu nhập mật khẩu cũ.",
				maxlength : "Mật khẩu cũ không vượt quá 255 ký tự."
			},
			NewPassword : {
				required : "Yêu cầu nhập mật khẩu mới.",
				maxlength : "Mật khẩu mới không vượt quá 255 ký tự."
			},
			ReNewPassword : {
				required : "Yêu cầu nhập xác mật khẩu mới.",
				equalTo : "Mật khẩu xác nhận không đúng."
			}
		}
	}

	$scope.show_flag = false;
	$scope.show_alert = false;
	$scope.fullName = 'vuongtn';
	$scope.shopName = 'tnvuong';
	$scope.organization = '6996';
	$scope.logout = function() {
		delete $localStorage.clientContext;
		$http.defaults.headers.common.Authorization = '';
		$http({
			method : 'POST',
			url : logout_url
		}).success(function(response) {
			window.location.href = response.loginpage;
		}).error(function(qwe) {
			$window.location.href = '/account/login';
		});
	}
	$scope.changepass = function() {
		var modalInstance = $uibModal.open({
			animation : true,
			templateUrl : 'changepassword.html',
			controller : function($scope, $rootScope, $compile, $uibModal, $confirm, $uibModalInstance, $localStorage) {
				$scope.username = $localStorage.clientContext.username;
				$scope.save = function() {
					if ($scope.changepassform.validate()) {
						$http({
							method : 'POST',
							url : eim_url + "/changePass?" + "oldPass=" + encryptData($scope.model.oldPass) + "&newPass=" + encryptData($scope.model.newPass)
						}).success(function(res) {
							if (res.errorMessage != null) {
								bootbox.alert(res.errorMessage);
							} else {
								$uibModalInstance.dismiss('cancel');
								bootbox.alert("Đổi mật khẩu thành công.");
							}

						}).error(function(qwe) {
							bootbox.alert("Lỗi kết nối dịch vụ.");
						});

					}
				}
				$scope.cancel = function() {
					$uibModalInstance.dismiss('cancel');

				}

			},
			backdrop : true,
			size : '70'
		});
		modalInstance.result.then(function(d) {
			$scope.reload();
		}, function() {
		});
	}
	$scope.lock = function() {

	}
	$scope.profile = function() {

	}

	// TU DIEN DUNG CHUGN
	FIRST_PAGE = $translate.instant('vnm.common.paging.first');
	LAST_PAGE = $translate.instant('vnm.common.paging.last');
	NEXT_PAGE = $translate.instant('vnm.common.paging.next');
	PREV_PAGE = $translate.instant('vnm.common.paging.prev');
	TOTAL_RECORD = $translate.instant('vnm.common.tableRecord.total');
	DATA_TABLE_NOT_FOUND = $translate.instant('vnm.common.data.not.found');
	LABEL_SEARCH = $translate.instant('vnm.common.filter');
});
app_vnm.controller('ctrl-navfragment', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, $filter, $localStorage, $http) {

	$scope.currentPath = $window.location.pathname;
	if ($localStorage.clientContext && $rootScope.expToken() > 60) {
		$scope.sitemaps = $localStorage.clientContext.sitemaps;
	}
	$scope.active_nav = function(subitem) {
		if (subitem.strUrl == $scope.currentPath) {
			$timeout(function() {
				$('#navitem-' + subitem.id).parent().css('display', 'block');
				$('#navitem-' + subitem.id).parent().parents('.nav-item').addClass('open');
			});
		}
	}

	dowloadFileFromURL = function(data) {
		overLoading("Downloading file...");
		var url = eim_url + '/bs/downLoadFileFromUrl';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file...");
			download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(response) {
			console.log(response);
			closeOverLay();
		});
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

app_vnm.directive('numbersOnly', function() {
	return {
		require : 'ngModel',
		link : function(scope, element, attr, ngModelCtrl) {
			function fromUser(text) {
				if (text) {
					var transformedInput = text.replace(/[^0-9]/g, '');

					if (transformedInput !== text) {
						ngModelCtrl.$setViewValue(transformedInput);
						ngModelCtrl.$render();
					}
					return transformedInput;
				}
				return undefined;
			}
			ngModelCtrl.$parsers.push(fromUser);
		}
	};
});

app_vnm.directive('myEnter', function() {
	return function(scope, element, attrs) {
		element.bind("keydown keypress", function(event) {
			if (event.which === 13) {
				scope.$apply(function() {
					scope.$eval(attrs.myEnter);
				});

				event.preventDefault();
			}
		});
	};
});

app_vnm.directive('icheck', [ '$timeout', '$parse', function($timeout, $parse) {
	return {
		restrict : 'A',
		require : '?ngModel',
		link : function(scope, element, attr, ngModel) {
			$timeout(function() {
				var value = attr.value;

				function update(checked) {
					if (attr.type === 'radio') {
						ngModel.$setViewValue(value);
					} else {
						ngModel.$setViewValue(checked);
					}
				}

				$(element).iCheck({
					checkboxClass : attr.checkboxClass || 'icheckbox_square-green',
					radioClass : attr.radioClass || 'iradio_square-green'
				}).on('ifChanged', function(e) {
					scope.$apply(function() {
						update(e.target.checked);
					});
				});

				scope.$watch(attr.ngChecked, function(checked) {
					if (typeof checked === 'undefined')
						checked = !!ngModel.$viewValue;
					update(checked)
				}, true);

				scope.$watch(attr.ngModel, function(model) {
					$(element).iCheck('update');
				}, true);

			})
		}
	}
} ]);

function encryptData(input) {
	var sha256 = new jsSHA('SHA-1', 'TEXT');
	if (input == undefined) {
		input = "";
	}
	sha256.update(input);
	var hash = sha256.getHash("B64");

	return hash;
}

function valid_numbers(e) {
	var key = e.keyCode;
	if (key >= 48 && key <= 57)
		return true;
	else
		return false;
}
