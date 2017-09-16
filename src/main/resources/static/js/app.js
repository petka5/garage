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
		// Pass in our Router module and call it's initialize function
		Router.initialize();
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