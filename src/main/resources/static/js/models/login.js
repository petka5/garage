define([ 'underscore', 'backbone' ], function(_, Backbone) {
	var LoginModel = Backbone.Model.extend({
		urlRoot : '/login',
		defaults: {},
		validation : {
			username : {
				required : true,
				pattern : 'email',
				msg : 'invalid.email'
			},
			password : {
				required : true,
				minLenght : 8,
				maxLenght : 20,
				msg : 'inBetween'
			}
		}
	});
	return LoginModel;
});