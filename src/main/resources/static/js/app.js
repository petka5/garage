// Request router.js
define([ 'jquery', 'underscore', 'backbone', 'router', 'i18n', 'backbone-validation' ], function($, _, Backbone, Router, i18n, Validator) {
	i18n.init({
		//lng : 'en',
		debug : true,
		detectLngQS: 'lang',
		fallbackLng : 'en',
		resGetPath : 'locales/__lng__/__ns__.json',
		useDataAttrOptions : true,
		optionsAttr : 'i18n-options'
	}, function() {
		// i18next is done asynchronously; this is the callback function
		$("body").i18n();
	});
	

	var initialize = function() {
		var validationMessages = {};
		validationMessages.required = 'validation.required';
		validationMessages.acceptance = 'validation.acceptance';
		validationMessages.min = 'validation.min|#|{"min":{1}}';
		validationMessages.max = 'validation.max|#|{"max":{1}}';
		validationMessages.range = 'validation.range|#|{"min":{1},"max":{2}}';
		validationMessages.length = 'validation.length|#|{"length":{1}}';
		validationMessages.minLength = 'validation.minLength|#|{"minLength":{1}}';
		validationMessages.maxLength = 'validation.maxLength|#|{"maxLength":{1}}';
		validationMessages.rangeLength = 'validation.rangeLength|#|{"min":{1},"max":{2}}';
		validationMessages.oneOf = 'validation.oneOf|#|{"oneOf":{1}}';
		validationMessages.equalTo = 'validation.equalTo|#|{"equalTo":{1}}';
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

			var errMessage = error.split('|#|');
			var options = null;
			if (errMessage[1]) {
				options = errMessage[1].replace(/\\/g, '\\')
			}
			
			$group.find('.help-block').addClass('has-error').removeClass('hidden')
				.html(i18n.t(errMessage[0], JSON.parse(options)))
				.attr('data-i18n', errMessage[0]).attr('data-i18n-options', options);
		}
	});

	return {
		initialize : initialize
	};
});