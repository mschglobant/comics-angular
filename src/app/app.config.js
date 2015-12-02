(function () {
    "use strict";

    angular
        .module("app")
        .config(['$routeProvider',
                 function($routeProvider) {
                     $routeProvider
                        .when('/login', {
                            templateUrl: 'app/login/login.view.html',
                            controller: 'LoginController',
                            controllerAs: 'login'
                        })
                        .otherwise({
                         redirectTo: '/login'
                    });
  }])
}());
