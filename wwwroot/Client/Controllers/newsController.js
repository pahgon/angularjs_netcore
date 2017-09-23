(function () {
    'use strict'

    var newsApp = angular.module('adminApp.app.news', ['ui.bootstrap']);


    newsApp.controller('newsCtrl', function ($scope, $http, $uibModal ) {
        $scope.title = "This is title of post";
        $scope.approved = true;

        $scope.openModal = function (size) {
            //
            BootstrapDialog.alert('I want banana!');

            //
            // var modalInstance = $uibModal.open({
            //     template: "<div>This is modal. It's show when click</div>",
            //     size: size,
            //     resolve: {
            //         items: function () {
            //             return $scope.items;
            //         }
            //     }
            // });

            // modalInstance.result.then(function (selectedItem) {
            //     $scope.selected = selectedItem;
            // }, function () {

            // });
        };


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