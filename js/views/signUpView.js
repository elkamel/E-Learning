'use strict';

angular.module('eLearningApp.signUpView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'pages/signup.html',
    controller: 'SignupFormController'
  });
}])
