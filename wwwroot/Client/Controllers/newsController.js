(function () {
    'use strict'

    var newsApp = angular.module('adminApp.app.news', []);
    

    newsApp.controller('newsCtrl', function ($scope, $http) {
        $scope.title = "This is title of post";
        $scope.approved = true;


        $scope.showDialog = function(){
            alert("a");
        }

        $scope.save = function () {
            $http.post('api/news').success(function (data, status, headers, config) {

            }).error(function (data, status, headers, config) {

            });
        }

        $scope.getItems = function () {
            $http.get('/api/news').success(
                function (data, status, headers, config) {

                }).error(function (data, status, headers, config) {

            });
        }
    });

})();