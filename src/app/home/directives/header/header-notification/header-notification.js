(function () {
  'use strict';

  angular.module('comicsHome')
    .directive('headerNotification', function () {
      return {
        templateUrl: 'app/home/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
        controller: ['$scope', '$location', 'authentication', function ($scope, $location, authentication) {
          $scope.logout = function () {
            authentication.logout();
            $location.path('/login');
          }
        }],
        controllerAs: 'vm'
      }
    });

}());
