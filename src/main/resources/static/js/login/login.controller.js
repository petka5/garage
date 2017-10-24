define([ 'angular', 'app' ], function() {
	'use strict';

	angular.module('app').controller('LoginController', LoginController);

	// LoginController.$inject = [ '$location', 'AuthenticationService',
	// 'FlashService' ];
	LoginController.$inject = [ '$location', '$http', 'FlashService' ];
	// function LoginController($location, AuthenticationService, FlashService)
	// {
	function LoginController($location, $http, FlashService) {
		var vm = this;
		vm.login = login;

		(function initController() {

		})();

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
		};
	}
}());