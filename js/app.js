
'use strict';

// Declare app level module which depends on views, and components
var eLearningApp = angular.module('eLearningApp', [
  'ngRoute',
  'eLearningApp.loginView',
  'eLearningApp.signUpView',
  'eLearningApp.homeView',
  'ui.router',
  'eLearningApp.controllers'
  
])
.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;        
    }
  ]
)
.config(['$stateProvider','$urlRouterProvider', '$controllerProvider',function($stateProvider,$urlRouterProvider,$controllerProvider) {
	 	 // $routeProvider.otherwise({redirectTo: '/login'});
	$urlRouterProvider
    .otherwise('/login');	 
	  eLearningApp.controller = $controllerProvider.register;
    	  $stateProvider
    	  .state('eLearningApp', {
              abstract: true,
              url: '/login',
              templateUrl: 'pages/login.html'
          })
    	  .state('signup', {
              url: '/signup',
              templateUrl: 'pages/signup.html'
          })
          .state('home', {
              url: '/home',
              templateUrl: 'pages/home.html'
          })
    	}]);
    	 
 
 