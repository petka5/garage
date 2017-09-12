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
	var validationMessages = {};
	$('.lang').click(function() {
		var lang = $(this).attr('data-lang');
		i18n.init({
			lng : lang
		}, function(t) {
			validationMessages.required = i18n.t('validation.required');
			validationMessages.acceptance = i18n.t('validation.acceptance');
			validationMessages.min = i18n.t('validation.min');
			validationMessages.max = i18n.t('validation.max');
			validationMessages.range = i18n.t('validation.range');
			validationMessages.length = i18n.t('validation.length');
			validationMessages.minLength = i18n.t('validation.minLength');
			validationMessages.maxLength = i18n.t('validation.maxLength');
			validationMessages.rangeLength = i18n.t('validation.rangeLength');
			validationMessages.oneOf = i18n.t('validation.oneOf');
			validationMessages.equalTo = i18n.t('validation.equalTo');
			validationMessages.digits = i18n.t('validation.digits');
			validationMessages.number = i18n.t('validation.number');
			validationMessages.email = i18n.t('validation.email');
			validationMessages.url = i18n.t('validation.url');
			validationMessages.inlinePattern = i18n.t('validation.inlinePattern');

			_.extend(Backbone.Validation.messages, validationMessages);
			$(document).i18n();
		});
	});

	var initialize = function() {
		// Pass in our Router module and call it's initialize function
		Router.initialize();
		Backbone.Validation.configure({
			  labelFormatter: 'label'
			})
	}

	_.extend(Backbone.Validation.callbacks, {
		valid : function(view, attr, selector) {
			var $el = view.$('[id=' + attr + ']'), $group = $el.closest('.form-group');

			$group.removeClass('has-error');
			$group.find('.help-block').html('').addClass('hidden');
		},
		invalid : function(view, attr, error, selector) {
			var $el = view.$('[id=' + attr + ']'), $group = $el.closest('.form-group');

			$group.addClass('has-error');
			$group.find('.help-block').html(error).removeClass('hidden');
		}
	});

	return {
		initialize : initialize
	};
});