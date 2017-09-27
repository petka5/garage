define(
		[ 'jquery', 'underscore', 'backbone', 'backbone-validation', 'i18n', 'collections/languages', 'models/language' ],
		function($, _, Backbone, Validator, i18n, LanguageCollection, Language) {
			var LangMenuView = Backbone.View
					.extend({
						template : _
								.template('\
								<% _.each(languages, function(lang)  { %>\
								<span class="lang" data-lang="<%= lang.lang %>"><%= lang.lang %></span><% });%>'),
						el : $('#langMenu'),
						events : {
							'click .lang' : 'changeLanguage'
						},
						changeLanguage : function(ev) {
							i18n.init({
								lng : $(ev.target).attr('data-lang')
							}, function(t) {
								$(document).i18n();
							});
						},
						initialize : function() {
							var self = this;
							this.languages = new LanguageCollection();
							this.languages.fetch({
								success : function() {
									self.render();
								}
							});
							// this.render();
						},
						render : function() {
							// Using Underscore we can compile our template with
							// data
							var data = {};
							// var compiledTemplate =
							// _.template(this.template(data));
							var compiledTemplate = _.template(this.template({
								languages : this.languages.toJSON()
							}));
							// Append our compiled template to this Views "el"
							this.$el.append(compiledTemplate);
						},
						remove : function() {
							this.$el.empty().off();
							return Backbone.View.prototype.remove.apply(this, arguments);
							// off to unbind the events
							this.stopListening();
						}
					});
			// Our module now returns our view
			return LangMenuView;
		});