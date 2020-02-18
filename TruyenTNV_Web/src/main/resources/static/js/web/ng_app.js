'use strict'

var app_tnv = angular.module('app-tnv', [ 'ui.bootstrap', 'ngRoute', 'ngTable', 'pascalprecht.translate', 'ngCookies', 'ngValidate', 'angularjs-datetime-picker', 'angular-confirm',
	'angularFileUpload', 'ngStorage', 'dx', 'ngSanitize', 'ui.select', 'ui.select.pagination.groups', 'TreeWidget','smart-table' ]);
app_tnv.factory('LanguageService', function($http, $translate, LANGUAGES) {
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