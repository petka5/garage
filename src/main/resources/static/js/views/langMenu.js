define([ 'jquery', 'underscore', 'backbone', 'marionette', 'backbone-validation', 'i18n', 'collections/languages', 'models/language',
		'text!templates/langMenu.html' ],

// function
function($, _, Backbone, Marionette, Validator, i18n, LanguageCollection, Language, langMenuTemplate) {
	var LangMenuView = Marionette.View.extend({
		template : _.template(langMenuTemplate),
		events : {
			'click .lang' : 'changeLanguage'
		},

		changeLanguage : function(ev) {
			i18n.setLng($(ev.target).attr('data-lang'), function(){
				$('body').i18n();
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
		},

		render : function() {
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