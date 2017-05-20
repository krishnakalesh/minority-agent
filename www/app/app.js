var ImageApp = angular.module('ImageApp', ['ngRoute','ngAnimate']);
var ImageController = angular.module('ImageController',['ngAnimate','ngCordovaBeacon']);

ImageApp.config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
	  
    $routeProvider

           .when('/home',
            {
                controller: 'ImageController',
                templateUrl: 'app/views/home.html'
            })
        .otherwise({ redirectTo: '/home' });
    

}]);


