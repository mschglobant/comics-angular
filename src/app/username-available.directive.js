/*global angular */
(function () {
  'use strict';

  angular.module('app')
    .directive('usernameAvailable', function ($timeout, $q, authentication) {
      return {
        restrict: 'AE',
        require: 'ngModel',
        link: function (scope, elem, attr, model) {
          model.$asyncValidators.usernameExists = function (modelValue, viewValue) {

            return authentication
              .userExist(elem.val())
              .then(function (exist) {
                if (exist) {
                  return $q.reject();
                }
                return true;
              });

          };
        }
      };
    });

}());
