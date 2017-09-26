define(
		[ 'jquery', 'underscore', 'backbone', 'backbone-validation' ],
		function($, _, Backbone, Validator) {
			var SignUpView = Backbone.View
					.extend({
						template : _
								.template('\
								<% _.each(languages, function(lang)  { %>\
								<span class="lang" data-lang="<%= lang.lang %>"><%= lang.lang %></span><% });%>'),
						el : $('#signUp'),
						events : {

						},

						initialize : function() {

						},
						render : function() {

						},
						remove : function() {

						}
					});
			return SignUpView;
		});