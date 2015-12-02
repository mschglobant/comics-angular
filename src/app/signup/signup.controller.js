(function () {
    'use strict';

    function SignupController($timeout) {
        var vm = this;

        vm.user = {};
        vm.dataLoading = false;
        vm.register = function () {
            vm.dataLoading = true;
            console.log("yes!");

            $timeout(function () {
                vm.dataLoading = false;
            }, 2000);
        }
    }

    angular
        .module("app")
        .controller("SignupController", ['$timeout', SignupController]);
}());
