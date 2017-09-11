define([ 'jquery', 'underscore', 'backbone', 'views/login', 'models/login'], function($, _,
		Backbone, LoginView, LoginModel) {
	var AppRouter = Backbone.Router.extend({
		routes : {
			// Define some URL routes
			'/login' : 'login',
			// Default
			'*actions' : 'login'
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;
		app_router.on('route:login', function() {
			// Call render on the module we loaded in via the dependency array
			var loginView = new LoginView({model: new LoginModel()});
		});
		Backbone.history.start();
	};
	return {
		initialize : initialize
	};
});