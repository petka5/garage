define([ 'jquery', 'underscore', 'backbone', 'marionette', 'text!templates/welcomeLayout.html', 'views/login', 
'models/login', 'views/signUp', 'models/signUp', 'views/langMenu', 'models/language' ],

// function
function($, _, Backbone, Marionette, WelcomeLayout, LoginView, LoginModel, SignUpView, SignUpModel, LangMenuView, Language) {

	var WelcomeView = Marionette.View.extend({
		template : _.template(WelcomeLayout),
		el : '#container',

		regions : {
			langMenu : "#langMenu",
			signUpMenu : "#signUpMenu",
			loginMenu : "#loginMenu"
		},

		onRender : function() {
			this.showChildView('loginMenu', new LoginView({
				model : new LoginModel()
			}));

			this.showChildView('signUpMenu', new SignUpView({
				model : new SignUpModel()
			}));
			
			this.showChildView('langMenu', new LangMenuView({}));
		}

	});

	return WelcomeView;
});