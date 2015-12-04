(function () {
  'use strict';



  angular.module('comicsHome')
    .directive('sidebar', ['$location', function ($location) {
      return {
        templateUrl: 'app/home/directives/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,
        scope: {},
        controller: function ($scope) {

          function MenuItem(title, path) {
            this.title = title;
            this.path = path;
          }
          MenuItem.prototype.isActive = function () {
            return this.path == $location.path();
          }

          $scope.menuItems = [
            new MenuItem("Home", "/"),
            new MenuItem("Genres", "/genres"),
            new MenuItem("Editions", "/editions"),
            new MenuItem("News", "/news"),
            new MenuItem("Characters", "/characters"),
          ];

        }
      }
        }]);

}());
