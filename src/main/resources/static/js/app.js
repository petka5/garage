define(function(require) {
	'use strict';
	// https://sachinchoolur.github.io/angular-flash/
	// https://github.com/angular-ui/ui-router/wiki
	// http://jasonwatmore.com/post/2015/03/10/angularjs-user-registration-and-login-example-tutorial
	// http://jonathancreamer.com/require-js-packages-for-building-large-scale-angular-applications/
	// https://www.startersquad.com/blog/angularjs-requirejs/
	// https://angular.io/guide/quickstart
	// https://angular-translate.github.io/
	// https://scotch.io/tutorials/internationalization-of-angularjs-applications
	// https://github.com/malyw/angular-translate-yeoman/blob/master/app/views/main.html
	
	// https://github.com/emalikterzi/angular-owl-carousel-2
	// ########################################################
	// https://spring.io/blog/2016/11/28/going-reactive-with-spring-data
	// ########################################################		
	var angular = require('angular');
	require('ngRoute');
	require('ngCookies');
	require('ngSanitize');
	require('uiRouter');
	require('ngSanitize');
	require('ngFlash');
	
	require('pascalprecht.translate');
	require('angular-translate-starage-cookie');
	require('angular-translate-storage-local');
	require('angular-dynamic-locale');
	require('angular-translate-loader-static-files');
	


	var app = angular.module('app', [ 'ngRoute', 'ngCookies', 'angular-flash.service', 'angular-flash.flash-alert-directive', 'ui.router', 'ngSanitize',
		'pascalprecht.translate', 'tmh.dynamicLocale' ]);

	
	app.init = function() {
		angular.bootstrap(document, [ 'app' ]);
	};
	
	app.constant('LOCALES', {
	    'locales': {
	        'bg_BG': 'Български',
	        'en_US': 'English'
	    },
	    'preferredLocale': 'en_US'
	});
	
	
    //app.config.$inject = ['$routeProvider', '$locationProvider'];
    //function config($routeProvider, $locationProvider) {
    app.config(function($urlRouterProvider, $stateProvider) {
    	$stateProvider.state('login', {
			url : '/login',
			views : {
				'loginView' : {
					controller : 'LoginController',
					templateUrl : 'js/login/login.view.html',
					controllerAs : 'vm'
				}
			}
		}).state('register',{
			url : '/register',
			views : {
				'loginView' : {
					controller : 'LoginController',
					templateUrl : 'js/register/register.view.html',
					controllerAs : 'vm'
				}
			}	
		});
    });  
    	
	// Angular Translate
	app.config(function($translateProvider) {
		// warns about missing translates
		$translateProvider.useMissingTranslationHandlerLog();
		$translateProvider.useSanitizeValueStrategy('escape');
		$translateProvider.useStaticFilesLoader({
			prefix : 'js/locales/locale-',
			suffix : '.json'
		});

		$translateProvider.preferredLanguage("en_US");
		$translateProvider.useLocalStorage();
	});

	app.config(function(tmhDynamicLocaleProvider) {
		tmhDynamicLocaleProvider.localeLocationPattern('js/libs/angular-i18n/angular-locale_{{locale}}.js');
	});
/*
 * $routeProvider .when('/login', { controller: 'LoginController', templateUrl:
 * 'js/login/login.view.html', controllerAs: 'vm' })
 * 
 * .otherwise({ redirectTo: '/login' });
 */
    //});

	return app;
});