(function () {
    "use strict";

    function LoginController(AuthenticationService) {

        var vm = this;

        vm.username = "";
        vm.password = "";
        vm.rememberme = false;
        vm.dataLoading = false;

        vm.doLogin = function () {
            //sessionManagement.login(vm.credentials.username, vm.credentials.password);
        };
    }

    angular
        .module("app")
        .controller("LoginController", [LoginController]);

}());
