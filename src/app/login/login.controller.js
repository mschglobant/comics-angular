(function () {
    "use strict";

    function LoginController($rootScope, $location, authentication) {

        var vm = this;

        vm.username = "";
        vm.password = "";
        vm.rememberme = false;
        vm.dataLoading = false;

        vm.doLogin = function () {
            authentication.login(vm.username, vm.password);

            var loggedUser = authentication.getLoggedUser();

            if (loggedUser && loggedUser.username == vm.username) {

                $location.path('/');

            } // end successful login
        };
    }

    angular
        .module("app")
        .controller("LoginController", ['$rootScope', '$location', 'authentication', LoginController]);

}());
