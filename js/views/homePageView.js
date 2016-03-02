'use strict';

angular.module('eLearningApp.homeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home.html',
     controller: 'homePageController' 
  });
}])