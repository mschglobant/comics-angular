/*global angular */
(function () {
  'use strict';

  angular.module('comicsHome')
    .directive('topRated', topRatedDirective);

  function topRatedDirective() {
    return {
      templateUrl: 'app/home/directives/sidebar/top-rated/top-rated.view.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: 'TopRatedController',
      controllerAs: 'vm'
    };
  }

}());
