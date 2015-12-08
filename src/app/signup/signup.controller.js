/*global angular */
(function () {
  'use strict';

  angular
    .module("app")
    .controller("SignupController", ['$scope', '$location', '$timeout', 'userProvider', SignupController]);

  function SignupController($scope, $location, $timeout, userProvider, flashService) {
    var vm = this;

    vm.user = {};
    vm.dataLoading = false;
    vm.register = function () {
      vm.dataLoading = true;

      userProvider
        .persist(vm.user)
        .then(function () {
          $location.path('/login');
        })
        .catch(function () {
          $scope.alert.notifyError("An error ocurred. Reload page an try again.");
        })
        .finally(function () {
          vm.dataLoading = false;
        });

    };

    // Flash messages
    $scope.alert = {
      hasFlash: false,
      type: '',
      message: '',
      close: function () {
        this.hasFlash = false;
      },
      notifyError: function (message) {
        this.type = 'danger';
        this.message = message;
        this.hasFlash = true;
      }
    };
  }

}());
