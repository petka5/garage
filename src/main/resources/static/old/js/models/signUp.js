define([ 'underscore', 'backbone' ], function(_, Backbone) {
	var LoginModel = Backbone.Model.extend({
		urlRoot : '/sign-up',
		defaults : {},
		validation : {
			fullName : {
				required : true,
			},
			username : {
				required : true,
				pattern : 'email',
			},
			password : {
				required : true,
				rangeLength : [ 8, 20 ]
			},
			retypePassword : {
				required : true,
				equalTo : 'password'
			},
			day : {
				required : true,
				range : [1,31],
			},
			month : {
				required : true,
				range : [1,12],			
			},
			year : {
				required : true,
				range : [1930,2018],			
			},
			birthDay : {

			},
			gender : {
				required : true,
			},
			country : {
				required : true,
			},
			language : {
				required : true,
			}
		}
	});
	return LoginModel;
});