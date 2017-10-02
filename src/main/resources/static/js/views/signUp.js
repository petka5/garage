define([ 'jquery', 'underscore', 'backbone', 'backbone-validation', 'collections/languages', 'text!templates/signUp.html' ], function($, _, Backbone, Validator, LanguageCollection, signUpTemplate) {
	var SignUpView = Backbone.View.extend({
		template : _.template(signUpTemplate),
		el : $('#signUp'),
		events : {
			"change input" : "changed",
			"change select" : "changed",
			'click #signUp' : 'signUp'
		},

		initialize : function() {
			_.bindAll(this, "changed");
			var self = this;
			this.languages = new LanguageCollection();
			this.render();
			Backbone.Validation.bind(this);
		},

		changed : function(evt) {
			var target = $(evt.currentTarget), data = {}, validateTarget;
			if (target.is("input[type='radio']")) {
				data[target.attr('name')] = target.val();
				validateTarget = target.attr('name');
			} else {
				data[target.attr('id')] = target.val();
				validateTarget = target.attr('id');
			}
			this.model.set(data);
			this.model.isValid(validateTarget);
		},

		render : function() {
			var data = {};
			data.languages = this.languages.toJSON()
			var compiledTemplate = _.template(this.template(data));
			// Append our compiled template to this Views "el"
			this.$el.append(compiledTemplate);
		},

		remove : function() {

		},
		
		signUp : function(e){
			e.preventDefault();
			if (this.model.isValid(true)) {
				// this.model.save();
				alert('Great Success!');
			}
			this.model.save();
			/*$.ajax({
				type : 'POST',
				url : 'sign-up',
				dataType : 'json',
				contentType : 'application/json',
				data : JSON.stringify(this.model),
				statusCode : {
					200 : function() {
						Backbone.Events.trigger("register:success");
					}
				},
				error : function() {
					// Add appropriate error message
				}
			});*/
		}
	});
	return SignUpView;
});