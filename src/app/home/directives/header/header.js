(function () {
  'use strict';

  angular.module('comicsHome')
    .directive('header', function () {
      return {
        templateUrl: 'app/home/directives/header/header.html',
        restrict: 'E',
        replace: true,
        controllerAs: 'vm',
        controller: ['authentication', function (authentication) {


          this.isLoggedIn = function () {
            return authentication.isLoggedIn();
          }

        }]
      }
    });

}());
