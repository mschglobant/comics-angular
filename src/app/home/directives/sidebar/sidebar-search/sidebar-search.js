(function () {
  'use strict';

  angular.module('comicsHome')
    .directive('sidebarSearch', function () {
      return {
        templateUrl: 'app/home/directives/sidebar/sidebar-search/sidebar-search.html',
        restrict: 'E',
        replace: true,
        scope: {},
        controller: function ($scope) {
          $scope.selectedMenu = 'home';
        }
      }
    });

}());
