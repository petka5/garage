define([ 'jquery', 'underscore', 'backbone', 'models/login', 'models/signUp', 'views/login', 'views/langMenu', 'views/signUp' ], function($, _, Backbone,
		LoginModel, SignUpModel, LoginView, LangMenuView, SignUpView) {
	var AppRouter = Backbone.Router.extend({
		routes : {
			// Define some URL routes
			'/login' : 'login',
			// Default
			'*actions' : 'login'
		}
	});

	var ViewsFactory = {
		login : function() {
			if (!this.loginView) {
				this.loginView = new LoginView({
					model : new LoginModel()
				});
			}
			return this.loginView;
		},
		langMenu : function() {
			if (!this.langMenuView) {
				this.langMenuView = new LangMenuView({});
			}
			return this.langMenuView;
		},
		signUp : function() {
			if (!this.signUpView) {
				this.signUpView = new SignUpView({
					model: new SignUpModel()
				});
			}
			return this.signUpView;
		}
	};

	var initialize = function() {
		var app_router = new AppRouter;
		app_router.on('route:login', function() {
			// Call render on the module we loaded in via the dependency array
			ViewsFactory.login();
		});
		ViewsFactory.langMenu();
		ViewsFactory.signUp();
		Backbone.history.start();
	};
	return {
		initialize : initialize
	};
});