// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
define([ 'jquery', 'underscore', 'backbone', 'i18n', 'text!templates/login.html' ], function($, _, Backbone, i18n, loginTemplate) {
	var LoginView = Backbone.View.extend({
		template : _.template(loginTemplate),
		el : $('#menu'),
		events : {
			"change input" : "changed",
			'click #login' : 'login',
			'login:success' : 'remove',
		},

		initialize : function() {
			_.bindAll(this, "changed");
			this.render();
			Backbone.Validation.bind(this);
			Backbone.Events.on('login:success', this.remove, this);
		},

		changed : function(evt) {
			var target = $(evt.currentTarget), data = {};
			data[target.attr('id')] = target.val();
			this.model.set(data);
			this.model.isValid(target.attr('id'));
		},

		render : function() {
			// Using Underscore we can compile our template with
			// data
			var data = {};
			var compiledTemplate = _.template(this.template(data));
			// Append our compiled template to this Views "el"
			this.$el.append(compiledTemplate);
		},

		remove : function() {
			this.$el.empty().off();
			Backbone.Validation.unbind(this);
			return Backbone.View.prototype.remove.apply(this, arguments);
			/* off to unbind the events */
			this.stopListening();
		},

		login : function(e) {
			e.preventDefault();
			if (this.model.isValid(true)) {
				// this.model.save();
				alert('Great Success!');
			}
			$.ajax({
				type : 'POST',
				url : 'login',
				dataType : 'json',
				contentType : 'application/json',
				data : JSON.stringify({
					"username" : $("#username").val(),
					"password" : $("#password").val()
				}),
				statusCode : {
					200 : function() {
						Backbone.Events.trigger("login:success");
					}
				},
				error : function() {
					// Add appropriate error message
				}
			});
		}
	});
	// Our module now returns our view
	return LoginView;
});