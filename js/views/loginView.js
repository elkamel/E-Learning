'use strict';

angular.module('eLearningApp.loginView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'pages/login.html',
     controller: 'loginController' 
  });
}])

