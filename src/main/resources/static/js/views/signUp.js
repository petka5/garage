define(
		[ 'jquery', 'underscore', 'backbone', 'backbone-validation' ],
		function($, _, Backbone, Validator) {
			var SignUpView = Backbone.View
					.extend({
						template : _
								.template('\
									<div class="container">\
										<div class="row">\
											<h4 data-i18n="viewSignUp.signUp"></h4>\
											<div class="input-group input-group-icon">\
												<input type="text" id="fullName" data-i18n="[placeholder]viewSignUp.fullName" />\
												<div class="input-icon">\
													<i class="fa fa-user"></i>\
												</div>\
											</div>\
											<div class="input-group input-group-icon">\
												<input type="email" id="username" data-i18n="[placeholder]viewSignUp.username" />\
												<div class="input-icon"><i class="fa fa-envelope"></i></div>\
												<span class="help-block hidden"></span>\
											</div>\
											<div class="input-group input-group-icon">\
												<input type="password" id="password" data-i18n="[placeholder]viewSignUp.password" />\
												<div class="input-icon"><i class="fa fa-key"></i></div>\
												<span class="help-block hidden"></span>\
											</div>\
											<div class="input-group input-group-icon">\
												<input type="password" id="retypePassword" data-i18n="[placeholder]viewSignUp.retypePassword" />\
												<div class="input-icon"><i class="fa fa-key"></i></div>\
												<span class="help-block hidden"></span>\
											</div>\
											\
								        		<h4 data-i18n="viewSignUp.dateOfBirth"></h4>\
												<div class="input-group">\
										          <div class="col-third">\
										            <input type="text" data-i18n="[placeholder]viewSignUp.DD"/>\
										          </div>\
										          <div class="col-third">\
										          	<input type="text" data-i18n="[placeholder]viewSignUp.MM"/>\
										          </div>\
										          <div class="col-third">\
										            <input type="text" data-i18n="[placeholder]viewSignUp.YYYY"/>\
										          </div>\
										        </div>\
								            <h4 data-i18n="viewSignUp.gender"></h4>\
								            	<div class="input-group">\
								            		<input type="radio" name="gender" value="male" id="gender-male"/>\
								            			<label for="gender-male" data-i18n="viewSignUp.male"></label>\
								            			<input type="radio" name="gender" value="female" id="gender-female"/>\
								            				<label for="gender-female" data-i18n="viewSignUp.female"></label>\
								            		</div>\
										<div class="input-group">\
										<h4 data-i18n="viewSignUp.country"></h4>\
								        	<select>\
								        		<option>01 Jan</option>\
								        		<option>02 Jan</option>\
								        	</select>\
								        </div>\
										<div class="input-group">\
										<h4 data-i18n="viewSignUp.language"></h4>\
								        	<select>\
								        		<option>01 Jan</option>\
								        		<option>02 Jan</option>\
								        	</select>\
								        </div>\
									</div>'),
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