(function () {
  'use strict';

  angular.module('comicsHome')
    .directive('header', function () {
      return {
        templateUrl: 'app/home/directives/header/header.html',
        restrict: 'E',
        replace: true,
        controllerAs: 'vm',
        controller: ['authentication', '$location', function (authentication, $location) {

          this.isLoggedIn = isLoggedIn;
          this.menuItems = [
            new MenuItem("Home", "/"),
            new MenuItem("Genres", "/genres"),
            new MenuItem("Editions", "/editions"),
            new MenuItem("News", "/news"),
            new MenuItem("Characters", "/characters"),
          ];

          //////////////

          function isLoggedIn() {
            return authentication.isLoggedIn();
          }

          function MenuItem(title, path) {
            this.title = title;
            this.path = path;
          }
          MenuItem.prototype.isActive = function () {
            return this.path == $location.path();
          }
          MenuItem.prototype.go = function () {
            $location.path(this.path);
          }
        }]
      }
    });

}());
