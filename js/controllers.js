'use strict';

/* Controllers */

angular.module('eLearningApp.controllers',[ 'pascalprecht.translate', 'ngCookies' ])
.controller('loginController',[ '$scope', '$http', '$state', function($scope, $http, $state) {
	$scope.login = function() {//Login Function
		 $scope.authError = null;
		 //Login
		 $http.post('Adapters/loginAdapter.php', {username: $scope.user.name, password: $scope.user.pass})
	      .then(function(response) {
	    	if ( !response.data[0].login ) {
	          $scope.authError = 'Email or Password not right';
	        }else{
	        	$state.go('home');
	        }
	      }, function(x) {
	        $scope.authError = 'Server Error';
	      });
	};
	$scope.goToSignUpPage = function() {//Change Page : Sign Up 
		$state.go('signup');
	};

}])
// signup controller
.controller('SignupFormController',
		[ '$scope', '$http', '$state', function($scope, $http, $state) {
		
		} ])
		
		//Home Controller
.controller('homePageController',[ '$scope', '$http', '$state', function($scope, $http, $state) {
			
}]);
