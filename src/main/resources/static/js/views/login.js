// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
define(
		[ 'jquery', 'underscore', 'backbone', 'i18n' ],
		function($, _, Backbone, i18n) {
			var LoginView = Backbone.View.extend({
						template : _.template('\
							<div class="container">\
								<div class="row">\
									<h4 data-i18n="viewLogin.login"></h4>\
									<div class="input-group input-group-icon">\
										<input type="email" id="username" data-i18n="[placeholder]viewLogin.username" />\
										<div class="input-icon"><i class="fa fa-envelope"></i></div>\
										<span class="help-block hidden"></span>\
									</div>\
									<div class="input-group input-group-icon">\
										<input type="password" id="password" data-i18n="[placeholder]viewLogin.password" />\
										<div class="input-icon"><i class="fa fa-key"></i></div>\
										<span class="help-block hidden"></span>\
									</div>\
									<div class="input-group button">\
										<input id="login" type="button" data-i18n="[value]viewLogin.login" />\
									</div>\
									<div class="input-group button">\
										<input id="register" type="button" data-i18n="[value]viewLogin.register" />\
									</div>\
								</div>\
							</div>'),
						el : $('#menu'),
						events : {
				            "change input": "changed",
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