/*global angular */
(function () {
  'use strict';

  function SignupController($scope, $location, $timeout, userProvider, flashService) {
    var vm = this;

    vm.user = {};
    vm.dataLoading = false;
    vm.register = function () {
      vm.dataLoading = true;

      $timeout(function () {

        vm.dataLoading = false;

        try {
          userProvider.persist(vm.user);
          $location.path('/login');
        } catch (e) {
          $scope.alert.notifyError("An error ocurred. Reload page an try again.");
        }

      }, 2000);

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

  angular
    .module("app")
    .controller("SignupController", ['$scope', '$location', '$timeout', 'userProvider', SignupController]);
}());
