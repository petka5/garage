define([ 'underscore', 'backbone', 'models/language' ], function(_, Backbone, LanguageModel) {
	var LanguageCollection = Backbone.Collection.extend({
		url : '/languages',
		 method:"POST",
		model : LanguageModel
	});
	return LanguageCollection;
});