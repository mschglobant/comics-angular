(function () {
    "use strict";

    function LoginController() {

        var vm = this;

        vm.username = "";
        vm.password = "";
        vm.rememberme = false;
        vm.dataLoading = false;

        vm.doLogin = function () {
            //sessionManagement.login(vm.credentials.username, vm.credentials.password);
            alert ("Logged in!");
        };
    }

    angular
        .module("app")
        .controller("LoginController", [LoginController]);

}());
