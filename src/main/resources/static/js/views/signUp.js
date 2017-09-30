define([ 'jquery', 'underscore', 'backbone', 'backbone-validation', 'text!templates/signUp.html' ], function($, _, Backbone, Validator, signUpTemplate) {
	var SignUpView = Backbone.View.extend({
		template : _.template(signUpTemplate),
		el : $('#signUp'),
		events : {

		},

		initialize : function() {
			this.render();
		},

		render : function() {
			var data = {};
			var compiledTemplate = _.template(this.template(data));
			// Append our compiled template to this Views "el"
			this.$el.append(compiledTemplate);
		},

		remove : function() {

		}
	});
	return SignUpView;
});