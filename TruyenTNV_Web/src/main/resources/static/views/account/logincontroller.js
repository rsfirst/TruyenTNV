/*var eim_url = "http://10.32.59.74:7861";
var login_url = "http://10.32.59.74:7861/account/auth";*/

var eim_url = "http://10.6.2.41:7861";
var login_url = "http://10.6.2.41:7861/account/auth";
var eim_app_code = 'SYS.VNM_BS';
var eim_login_url = eim_url + "/login";
var eim_sitemaps = eim_url + "/sitemap-out";

var app_vnm = angular.module('app-vnm', [ 'ui.bootstrap', 'ngRoute', 'pascalprecht.translate', 'ngCookies', 'ngValidate', 'ngStorage', 'angular-confirm' ]);

app_vnm.factory('LanguageService', function($http, $translate, LANGUAGES) {
	return {
		getBy : function(language) {
			tr
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
app_vnm.factory('authService', function($http, $localStorage, $uibModal, $confirm) {
	var funcObj = {};

	funcObj.Login = function(username, password, callback) {

		if (username == '' || username == undefined) {
			callback(-2,'Bạn chưa nhập tài khoản!');
			return;
		}

		var loginpara = {
			'username' : username,
			'password' : encryptData(username, password),
			'appCode' : eim_app_code
		}
		App.blockUI({
			boxed : true,
			message : 'đang xử lý...'
		});
		$http({
			method : 'POST',
			url : login_url,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : loginpara
		}).success(function(response) {
			if (response.status == "0") {
				App.unblockUI();
				callback(0, response.errorMessage);
			} else {
				$http({
					method : 'POST',
					url : eim_url + "/getValueShop",
					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded'
					},
					transformRequest : function(obj) {
						var str = [];
						for ( var p in obj)
							str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
						return str.join("&");
					}
				}).success(function(shops) {
					if (shops.length > 1) {
						App.unblockUI();
						var modalInstance = $uibModal.open({
							animation : true,
							templateUrl : '/views/shared/shop.htm',
							controller : function($scope, $rootScope, $compile, $uibModal, $uibModalInstance) {
								$scope.shopchecked = {};
								$scope.indexchecked = -1;
								$scope.shops = shops;
								$scope.cancel = function() {
									$scope.shopchecked = {};
									$scope.indexchecked = -1;
									$uibModalInstance.dismiss('cancel');
								}
								$scope.next = function() {
									if ($scope.indexchecked > -1)
										$uibModalInstance.close($scope.shopchecked);
								}

								$scope.choose = function(s, index) {
									$scope.shopchecked = s;
									$scope.indexchecked = index;
								}
							},
							backdrop : true
						});
						modalInstance.result.then(function(d) {
							funcObj.loadSitemap(response, callback, d, username, encryptData(username, password));
						}, function() {
						});

					} else if (shops.length == 1) {
						funcObj.loadSitemap(response, callback, shops[0]);
					} else {
						callback(-1, 'Tài khoản chưa được gán vào SHOP.');
						App.unblockUI();
					}
				}).error(function(qwe) {
					App.unblockUI();
					callback(-1, 'Lỗi kết nối dịch vụ dữ liệu SHOP.');
				});
			}
		}).error(function(data, status, headers, config) {
			App.unblockUI();
			callback(-1, 'Lỗi kết nối dịch vụ xác thực.');
		});

	},

	funcObj.Logout = function() {
		delete $localStorage.clientContext;
		$http.defaults.headers.common.Authorization = '';
	}

	funcObj.loadSitemap = function(response, callback, shop, username, pass) {
		App.blockUI({
			boxed : true,
			message : 'đang xử lý...'
		});
		$http({
			method : 'POST',
			url : eim_sitemaps,
			headers : {
				'Content-Type' : 'application/json'
			}
		}).success(function(jsitemaps) {
			response.transEntity.appCode = eim_app_code;
			var commonData = {
				'staffId' : shop.staffId,
				'staffName' : shop.staffCode,
				'shopCode' : shop.shopCode,
				'shopName' : shop.shopName,
				'shopId' : shop.shopId
			};
			$http({
				method : 'POST',
				url : eim_url + "/getCommonValue",
				headers : {
					'Content-Type' : 'application/json'
				},
				data : commonData
			}).success(function(commonDataOutput) {
				$localStorage.clientContext = {
					id : response.identityEntity.id,
					username : response.identityEntity.username,
					fullName : response.identityEntity.username,
					organization : response.identityEntity.organization.name,
					roles : response.identityEntity.roles,
					createTime : response.transEntity.createTime,
					createTimeClient : (new Date()).getTime(),
					interval : response.transEntity.interval,
					sitemaps : jsitemaps.sitemaps,
					shopId : shop.shopId,
					shopName : shop.shopName,
					shop : shop,
					sessionResourceCode : commonDataOutput.sessionResourceCode,
					sessionStaffStockID : commonDataOutput.sessionStaffStockID,
					sessionStockID : commonDataOutput.sessionStockID,
					stockParent : commonDataOutput.stockParent,
					transIdCenter : ''
				};
				callback(1, '');
			}).error(function(qwe) {
				App.unblockUI();
				callback(-1, 'Lỗi kết nối dịch vụ dữ liệu.');
			});
		}).error(function(qwe) {
			App.unblockUI();
			callback(-1, 'Lỗi kết nối dịch vụ dữ liệu.');
		});
	}

	return funcObj;

});

app_vnm.factory("interceptors", [ function() {
	return {
		'response' : function(response) {
			return response;
		}
	};
} ]);
app_vnm.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.interceptors.push('interceptors');
} ]);

app_vnm.config(function($routeProvider, $validatorProvider, $translateProvider) {
	var lang = Cookies.get('vnm_lang');
	$translateProvider.translations("en", en_lang);
	$translateProvider.translations("vi", vi_lang);
	$translateProvider.preferredLanguage(lang);
	$translateProvider.fallbackLanguage('en');
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
app_vnm.controller('ctrl-login', function($scope, $rootScope, $translate, $compile, $timeout, $location, $window, $filter, authService) {

	authService.Logout();
	$scope.login = function() {
		authService.Login($scope.username, $scope.password, function(result, msg) {
			if (result === 1) {
				$window.location.href = "/";
			} else if (result === 0) {
				$scope.error = msg;
				errorFade();
			} else if (result === -1) {
				$scope.error = msg;
				errorFade();
			} else if (result === -2) {
				$scope.error = msg;
				errorFadeUser();
			}
		});
	};
});
app_vnm.directive('keyEnter', function() {
	return function(scope, element, attrs) {
		element.bind("keydown keypress", function(event) {
			if (event.which === 13) {
				scope.$apply(function() {
					scope.$eval(attrs.keyEnter);
				});

				event.preventDefault();
			}
		});
	};
});
function errorFade() {
	$('.log-status').addClass('wrong-entry');
	$('.alert').fadeIn(500);
	setTimeout("$('.alert').fadeOut(1500);", 3000);

	$('.form-control').keypress(function() {
		$('.log-status').removeClass('wrong-entry');
	});
}

function errorFadeUser() {
	$('.log-user').addClass('log-status');
	$('.log-user').addClass('wrong-entry');
	$('.alert').fadeIn(500);
	setTimeout("$('.alert').fadeOut(1500);", 3000);

	$('.form-control').keypress(function() {
		$('.log-user').removeClass('log-status');
		$('.log-user').removeClass('wrong-entry');
	});
}

function encryptData(user, input) {
	var sha256 = new jsSHA('SHA-1', 'TEXT');
	var hash = "";
	if (input == undefined) {
		input = "";
	}
	sha256.update(input);
	hash = sha256.getHash("B64");

	return hash;
}
function isValid(p) {
	var phoneRe = /[0-9]{10}/;
	var digits = p.replace(/\D/g, "");
	return phoneRe.test(digits);
}
