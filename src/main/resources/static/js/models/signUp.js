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
			birthDay : {

			},
			gender : {
				oneOf : [ "male" ,"female" ]
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