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
            var total = 0,
                sum = .0;
            for (var stars in vm.comic.rate.percentages) {
              total+= vm.comic.rate.percentages[stars];
              sum += stars * vm.comic.rate.percentages[stars];
            }
            vm.comic.rate.avg = sum / total;
          }
      });

    }]);
}());
