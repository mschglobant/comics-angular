(function () {
  'use strict';

  angular.module('comicsHome')
    .controller("HomeController", ['comicsProvider', function (comicsProvider) {
      var vm = this;
      comicsProvider.findAll().then(function (comics) {
        vm.comics = comics;
      });
    }]);
}());
