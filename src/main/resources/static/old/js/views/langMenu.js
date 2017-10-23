define([ 'jquery', 'underscore', 'backbone', 'marionette', 'backbone-validation', 'i18n', 'collections/languages', 'models/language',
		'text!templates/langMenu.html' ],

// function
function($, _, Backbone, Marionette, Validator, i18n, LanguageCollection, Language, langMenuTemplate) {
	
	// http://jasonwatmore.com/post/2015/03/10/angularjs-user-registration-and-login-example-tutorial
	// http://jonathancreamer.com/require-js-packages-for-building-large-scale-angular-applications/
	// https://www.startersquad.com/blog/angularjs-requirejs/
	// https://angular.io/guide/quickstart
	// https://scotch.io/tutorials/internationalization-of-angularjs-applications
	var LangMenuView = Marionette.View.extend({   
		template : _.template('<% _.each(languages, function(lang) { %>\
				<span class="lang" data-lang="<%= lang.lang %>"><%= lang.lang %></span>\
				<% });%>'), 
		
		events : { 
			'click .lang' :'changeLanguage'
		},
 
		changeLanguage : function(ev) {
			i18n.setLng($(ev.target).attr('data-lang'), function(){
				$('body').i18n();
			});
		},
		
		initialize : function() {
			console.log('initialize');
			this.languages = new LanguageCollection();
			this.listenTo(this.languages, 'sync', this.addLang);
			this.languages.fetch();
		},
		
		addLang: function (){
			var compiledTemplate = _.template(this.template({
				languages : this.languages.toJSON() 
			})); 
			this.$el.append(compiledTemplate); 
		},
		render : function() { 
			console.log('render');
		}
 
	});
	// Our module now returns our view
	return LangMenuView;
});