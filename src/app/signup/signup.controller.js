/*global angular */
(function () {
  'use strict';

  function SignupController($timeout, userProvider) {
    var vm = this;

    vm.user = {};
    vm.dataLoading = false;
    vm.register = function () {
      vm.dataLoading = true;

      $timeout(function () {
        userProvider.persist(vm.user);
        vm.dataLoading = false;
      }, 2000);
    };
  }

  angular
    .module("app")
    .controller("SignupController", ['$timeout', 'userProvider', SignupController]);
}());
