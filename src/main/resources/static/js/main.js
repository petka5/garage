require.config({
	paths : {
		jquery : 'libs/jquery/dist/jquery',
		angular : 'libs/angular/angular',
		ngRoute : 'libs/angular-route/angular-route',
		ngCookies : 'libs/angular-cookies/angular-cookies',
		ngSanitize : 'libs/angular-sanitize/angular-sanitize',
		uiRouter : 'libs/angular-ui-router/release/angular-ui-router',
		ngFlash : 'libs/angular-flash/dist/angular-flash',
		ngMessages : 'libs/angular-messages/angular-messages',
		'pascalprecht.translate' : 'libs/angular-translate/angular-translate',
		'angular-translate-starage-cookie' : 'libs/angular-translate-storage-cookie/angular-translate-storage-cookie',
		'angular-translate-storage-local' : 'libs/angular-translate-storage-local/angular-translate-storage-local',
		'angular-dynamic-locale': 'libs/angular-dynamic-locale/dist/tmhDynamicLocale',
		'angular-translate-loader-static-files' : 'libs/angular-translate-loader-static-files/angular-translate-loader-static-files',
		'angular-owl-carousel-2' : 'libs/angular-owl-carousel2/src/angular-owl-carousel-2',

		'owl.carousel' : 'libs/owl.carousel/dist/owl.carousel',
		
		langMenuDirective: 'directives/langMenuDirective',
		flashService : 'services/flash.service',
		loginController : 'login/login.controller',

	},
	shim : {
		angular : {
			exports : "angular",
			deps : [ "jquery" ]
		},
		ngRoute : {
			deps : [ "angular" ]
		},
		ngCookies : {
			deps : [ "angular" ]
		},
		ngSanitize : {
			deps : [ "angular" ]
		},
		ngFlash : {
			deps : [ "angular" ]
		},
		ngMessages : {
			deps : [ "angular" ]
		},
		'pascalprecht.translate': {
			deps : [ "angular" ]
		},
		'angular-translate-starage-cookie': {
			deps : [ "angular", "pascalprecht.translate" ]
		},
		'angular-translate-storage-local': {
			deps : [ "angular", "pascalprecht.translate" ]
		},
		'angular-dynamic-locale' : {
			deps : [ "angular", "pascalprecht.translate" ]
		},
		'angular-translate-loader-static-files' : {
			deps : [ "angular", "pascalprecht.translate" ]
		},
		flashService: {
			deps : [ "app","ngFlash" ]
		},
		'angular-owl-carousel-2' : {
			deps : ['angular']
		},
		loginController: {
			deps : [ "app" ]
		},
		'owl.carousel' : {
			deps : [ 'jquery' ]
		},
		'angular-owl-carousel-2': {
			deps : [ 'jquery', 'owl.carousel', 'angular' ]
		}
		
	},
// packages : [ "starter" ]
});

require([ "angular", "app", "langMenuDirective", "flashService", "loginController", "angular-owl-carousel-2" ], function(angular) {
	angular.bootstrap(document.documentElement, [ "app" ]);
});