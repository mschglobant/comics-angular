/* global angular */
(function () {

  angular.module('app')
    .directive('usernameAvailable', function ($timeout, $q, authentication) {
      return {
        restrict: 'AE',
        require: 'ngModel',
        link: function (scope, elem, attr, model) {
          model.$asyncValidators.usernameExists = function () {
            var defer = $q.defer();

            $timeout(function () {

              var exist = authentication.userExist(elem.val());

              model.$setValidity('usernameExists', !exist);
              defer.resolve(exist ? undefined : elem.val());
            }, 1000);

            return defer.promise;
          };
        }
      }
    });

}());
