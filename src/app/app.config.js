/*global angular */
(function () {
  "use strict";

  // Redirect to login when user tries access to restricted area and is not authenticated
  function redirectAnonymousUser($rootScope, $location, authentication) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $.inArray($location.path(), ['/login', '/signup']) === -1;
      var loggedIn = authentication.isLoggedIn();
      if (restrictedPage && !loggedIn) {
        $location.path('/login');
      }
    });
  }

  // Redirect to homepage when authenticated user tries to go to login or register page
  function redirectAuthenticatedUser($rootScope, $location, authentication) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $.inArray($location.path(), ['/login', '/signup']) !== -1;
      var loggedIn = authentication.isLoggedIn();
      if (restrictedPage && loggedIn) {
        $location.path('/');
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
            templateUrl: 'app/home/home.view.html',
            controller: 'HomeController',
            controllerAs: 'vm'
          })
          .when('/login', {
            templateUrl: 'app/login/login.view.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          })
          .when('/signup', {
            templateUrl: 'app/signup/signup.view.html',
            controller: 'SignupController',
            controllerAs: 'vm'
          })
          .when('/comics/:id', {
            templateUrl: 'app/home/comics/comic-details.view.html',
            controller: 'ComicsDetails',
            controllerAs: 'vm'
          })
          .when('/404', {
            templateUrl: 'app/404.view.html'
          })
          .otherwise({
            redirectTo: '/404'
          });
    }])

  .run(['$rootScope', '$location', 'authentication', redirectAnonymousUser])
    .run(['$rootScope', '$location', 'authentication', redirectAuthenticatedUser]);

}());
