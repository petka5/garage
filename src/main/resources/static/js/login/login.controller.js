define([ 'app' ], function(app) {
	return app.controller('LoginController', function($location, $http, FlashService) {
		var vm = this;
		vm.login = login;

		function login() {
			vm.dataLoading = true;
			var parameter = JSON.stringify({
				"username" : vm.username,
				"password" : vm.password
			});
			$http.post('/login', parameter).then(function successCallback(response) {
				console.log(response);
				vm.dataLoading = false;
				$location.path('');
			}, function errorCallback(response) {
				console.log(response);
				vm.dataLoading = false;
				FlashService.Error('errors.invalid.login');
			});
		}
	});
});