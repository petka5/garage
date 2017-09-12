define([ 'underscore', 'backbone' ], function(_, Backbone) {
	var LoginModel = Backbone.Model.extend({
		urlRoot : '/login',
		defaults : {},
		validation : {
			username : {
				required : true,
				pattern : 'email',
			},
			password : {
				required : true,
				rangeLength : [ 8, 20 ]
			}
		}
	});
	return LoginModel;
});