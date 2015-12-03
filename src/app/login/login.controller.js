(function () {
    "use strict";

    function LoginController($rootScope, $location, AuthenticationService) {

        var vm = this;

        vm.username = "";
        vm.password = "";
        vm.rememberme = false;
        vm.dataLoading = false;

        vm.doLogin = function () {
            //sessionManagement.login(vm.credentials.username, vm.credentials.password);
            if (vm.username == "el.manu@gmail.com" && vm.password == "1234") {
                $rootScope.globals.currentUser = {
                    username: "el.manu@gmail.com",
                    password: "1234"
                }

                $location.path('/');

            } // end successful login
        };
    }

    angular
        .module("app")
        .controller("LoginController", ['$rootScope', '$location', LoginController]);

}());
