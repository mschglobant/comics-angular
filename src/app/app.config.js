(function () {
    "use strict";

    // Redirect user when tries to access to restricted area and is not loggedin
    function redirectAnonymousUser($rootScope, $location) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/signup']) === -1;
            console.log($location.path());
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }


    // Configuration start
    angular
        .module("app")
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'app/home.view.html'
                    })
                    .when('/login', {
                        templateUrl: 'app/login/login.view.html',
                        controller: 'LoginController',
                        controllerAs: 'login'
                    })
                    .when('/signup', {
                        templateUrl: 'app/signup/signup.view.html',
                        controller: 'SignupController',
                        controllerAs: 'vm'
                    })
                    .when('/404', {
                        templateUrl: 'app/404.html'
                    })
                    .otherwise({
                        redirectTo: '/404'
                    });
            }])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.globals = {};
        }])
        .run(['$rootScope', '$location', redirectAnonymousUser]);
}());
