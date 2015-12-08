(function () {
  'use strict';

  angular.module('comicsHome')
    .controller("ComicsDetails", ['$routeParams', '$scope', 'comicsProvider', function ($routeParams, $scope, comicsProvider) {

      var vm = this;

      comicsProvider.findBy({id: Number($routeParams.id)}).then(function (comic) {
        vm.comic = comic[0];
      });

    }]);
}());