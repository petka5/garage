define('app', function(require) {
	// https://sachinchoolur.github.io/angular-flash/
	// https://github.com/angular-ui/ui-router/wiki
	// http://jasonwatmore.com/post/2015/03/10/angularjs-user-registration-and-login-example-tutorial
	// http://jonathancreamer.com/require-js-packages-for-building-large-scale-angular-applications/
	// https://www.startersquad.com/blog/angularjs-requirejs/
	// https://angular.io/guide/quickstart
	// https://angular-translate.github.io/
	// https://scotch.io/tutorials/internationalization-of-angularjs-applications
	// https://github.com/malyw/angular-translate-yeoman/blob/master/app/views/main.html
	// https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages
	// http://www.angularjsbook.com/angular-basics/chapters/directive-scopes/

	// https://github.com/emalikterzi/angular-owl-carousel-2
	// https://codepen.io/luisgleon/pen/pbrZPQ
	// https://weblogs.asp.net/dwahlin/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs
	// https://kielczewski.eu/2013/04/integrating-angularjs-with-requirejs/
	// https://appendto.com/2016/02/working-promises-angularjs-services/
	// https://ui-router.github.io/guide/views
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
	require('ngMessages');

	require('pascalprecht.translate');
	require('angular-translate-starage-cookie');
	require('angular-translate-storage-local');
	require('angular-dynamic-locale');
	require('angular-translate-loader-static-files');

	var app = angular.module('app', [ 'ngRoute', 'ngCookies', 'ngMessages', 'angular-flash.service', 'angular-flash.flash-alert-directive', 'ui.router',
			'ngSanitize', 'pascalprecht.translate', 'tmh.dynamicLocale', 'angular-owl-carousel-2' ]);

	app.init = function() {
		angular.bootstrap(document, [ 'app' ]);
	};

	app.constant('LOCALES', {
		'locales' : {
			'bg_BG' : 'Български',
			'en_US' : 'English'
		},
		'preferredLocale' : 'en_US'
	});

	app.config(function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/welcome');

		$stateProvider.state('welcome', { 
			url : '/welcome',
			views : {
				'layout' : {
					templateUrl : 'js/welcome/welcome.view.html'
				},
				'layout.loginView' : {
					controller : 'LoginController',
					templateUrl : 'js/login/login.view.html',
					controllerAs : 'vm'
				}
			}
		}).state('login', {
			url : '/login',
			views : {
				'loginView' : {
					controller : 'LoginController',
					templateUrl : 'js/login/login.view.html',
					controllerAs : 'vm'
				}
			}
		}).state('register', {
			url : '/register',
			views : {
				'layout' : {
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
			prefix : 'js/locales/',
			suffix : '.json'
		});

		$translateProvider.preferredLanguage("EN");
		$translateProvider.useLocalStorage();
	});

	app.config(function(tmhDynamicLocaleProvider) {
		tmhDynamicLocaleProvider.localeLocationPattern('js/libs/angular-i18n/angular-locale_{{locale}}.js');
	});
	
	app.controller('carousel', function ($scope, $timeout) {
	    var owlApi;
	    $scope.items = [ 'oil_change.jpg','gearbox.jpg','air-presure.jpg'];
	    $scope.properties = {
	        animateIn: 'fadeIn',
	        animateOut: 'fadeOut',
	        lazyLoad: true,
	        items: 1,
	        nav: false,
	        margin: 10,
	        autoplay: true,
	        loop : true
	    };

	    $scope.ready = function ($api) {
	        owlApi = $api;
	    };

	});
	
	return app;
});