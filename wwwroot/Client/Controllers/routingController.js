/// 
(function () {
    'use strict'

    var routingApp = angular.module("adminApp", ["ngRoute",
        'adminApp.app.news'
    ]);

    routingApp.controller('adminCtrl', function ($scope) {

    });

    routingApp.config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/admin/news', {
                templateUrl: '/news',
                controller: 'newsCtrl'
            }).
            when('/account', {
                templateUrl: '/account'
            });
        $locationProvider.html5Mode(true);
    });

})();