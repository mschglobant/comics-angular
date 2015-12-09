(function () {
  'use strict';

  angular.module('comicsHome')
    .directive('headerNotification', function () {
      return {
        templateUrl: 'app/home/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        scope: true,
        replace: true,
        controller: ['$scope', '$location', 'authentication', function ($scope, $location, authentication) {
          var vm = this;

          vm.user = {
            showName: showName,
            isAdmin: function () {
              if (authentication.isLoggedIn()) {
                var user = authentication.getLoggedUser();
                return user.role == "admin";
              }
              return false;
            }
          }

          vm.session = {
            user: vm.user,
            isLoggedIn: isLoggedIn,
            logout: logout
          }

          function showName() {
            if (authentication.isLoggedIn()) {
              var user = authentication.getLoggedUser();

              if (user.firstName) {
                return user.firstName + ' ' + user.lastName;
              } else {
                return user.username;
              }
            }

            return "Sign In";
          }

          function isLoggedIn() {
            return authentication.isLoggedIn();
          }

          function logout() {
            authentication.logout();
            $location.path('/login');
          }
        }],
        controllerAs: 'vm'
      }
    });

}());
