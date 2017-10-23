require.config({
	paths : {
		angular : "libs/angular/angular",
		ngRoute : "libs/angular-route/angular-route",
		ngCookie
	},
	shim : {
		angular : {
			exports : "angular"
		},
		ngRoute : {
			deps : [ "angular" ]
		}
	},
	packages : [ "starter" ]
});

require([ "angular", "app" ], function(angular) {
	angular.bootstrap(document.documentElement, [ "app" ]);
});