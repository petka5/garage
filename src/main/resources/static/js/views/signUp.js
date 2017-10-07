define([ 'jquery', 'underscore', 'backbone', 'backbone-validation', 'collections/languages', 'text!templates/signUp.html' ], function($, _, Backbone, Validator, LanguageCollection, signUpTemplate) {
	var SignUpView = Backbone.View.extend({
		template : _.template(signUpTemplate),
		el : $('#signUp'),
		events : {
			"change input" : "changed",
			"change select" : "changed",
			'click #signUp' : 'signUp'
		},
// http://jsforallof.us/2014/10/17/backbone-series-handling-asynchronous-data/
		initialize : function() {
			_.bindAll(this, "changed");
			var self = this;
			this.languages = new LanguageCollection();
		    this.listenTo(this.languages, "add", this.addLang);
			this.languages.fetch();
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
		addLang : function(lang){
			$('#language').append($('<option>', {value: lang.get('lang'), text:lang.get('name')}));
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
				this.model.save();
				alert('Great Success!');
			}
		}
	});
	return SignUpView;
});