(function () {
  'use strict';

  function FlashController($scope) {
    this
  }

  angular.module("app")
    .controller("FlashController", ['$scope', FlashController])
    .directive("flashMessages", function () {
      return {
        restrict: 'E',
        controller: FlashController,
        controllerAs: 'vm'
      }
    });
}());
