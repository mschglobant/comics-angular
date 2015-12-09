(function () {
  'use strict';

  angular.module('comicsHome')
    .controller("ComicsDetailsController", ['$routeParams', '$scope', 'comicsProvider', function ($routeParams, $scope, comicsProvider) {

      var vm = this;

      comicsProvider.findBy({
        id: Number($routeParams.id)
      }).then(function (comic) {
        vm.comic = comic[0];
        if (vm.comic.rate) {
          vm.comic.avgRate = .0;
          for (var i = 1; i <= 5; i++) {
            vm.comic.avgRate += vm.comic.rate.percentages[i];
          }
          vm.comic.avgRate = vm.comic.avgRate / 5;

          console.log(vm.comic.avgRate);
        }
      });

    }]);
}());
