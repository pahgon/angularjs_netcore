/// 
(function () {
    'use strict'

    var routingApp = angular.module("routingApp", ["ngRoute"]);

    routingApp.controller('adminCtrl', function ($scope) {

    });

    routingApp.config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/news', {
                templateUrl: '/news'
            }).
            when('/account', {
                templateUrl: '/account'
            });
        $locationProvider.html5Mode(true);
    });

})();