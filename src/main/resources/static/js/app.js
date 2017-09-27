// Request router.js
define([ 'jquery', 'underscore', 'backbone', 'router', 'i18n', 'backbone-validation' ], function($, _, Backbone, Router, i18n, Validator) {
	i18n.init({
		//lng : 'en',
		debug : true,
		detectLngQS: 'lang',
		fallbackLng : 'en',
		resGetPath : 'locales/__lng__/__ns__.json'
	}, function() {
		// i18next is done asynchronously; this is the callback function
		$("body").i18n();
	});
	

	var initialize = function() {
		var validationMessages = {};
		validationMessages.required = 'validation.required';
		validationMessages.acceptance = 'validation.acceptance';
		validationMessages.min = 'validation.min';
		validationMessages.max = 'validation.max';
		validationMessages.range = 'validation.range';
		validationMessages.length = 'validation.length';
		validationMessages.minLength = 'validation.minLength';
		validationMessages.maxLength = 'validation.maxLength';
		validationMessages.rangeLength = 'validation.rangeLength';
		validationMessages.oneOf = 'validation.oneOf';
		validationMessages.equalTo = 'validation.equalTo';
		validationMessages.digits = 'validation.digits';
		validationMessages.number = 'validation.number';
		validationMessages.email = 'validation.email';
		validationMessages.url = 'validation.url';
		validationMessages.inlinePattern = 'validation.inlinePattern';

		_.extend(Backbone.Validation.messages, validationMessages);
		// Pass in our Router module and call it's initialize function
		Router.initialize();
	}

	_.extend(Backbone.Validation.callbacks, {
		valid : function(view, attr, selector) {
			var $el = view.$('[id=' + attr + ']'); 
			var $group = $el.closest('.input-group');
			$el.removeClass('has-error');
			$group.find('.help-block').removeClass('has-error').html('').addClass('hidden').removeAttr('data-i18n');
		},
		invalid : function(view, attr, error, selector) {
			var $el = view.$('[id=' + attr + ']'); 
			var $group = $el.closest('.input-group');
			$el.addClass('has-error');
			$group.find('.help-block').addClass('has-error').html(i18n.t(error)).removeClass('hidden').attr('data-i18n', error);
		}
	});

	return {
		initialize : initialize
	};
});