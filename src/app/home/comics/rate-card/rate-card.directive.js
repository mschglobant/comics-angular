/*global angular */
(function () {
  'use strict';

  angular.module('comicsHome')
    .controller('RateCardController', RateCardController)
    .directive('rateCard', rateCardDirective);

  // Directive ----------------------------------------------------------------
  function rateCardDirective() {
    return {
      templateUrl: 'app/home/comics/rate-card/rate-card.view.html',
      restrict: 'E',
      replace: true,
      scope: {
        id: '='
      },
      controller: 'RateCardController',
      controllerAs: 'vm'
    };
  }

  // Controller ---------------------------------------------------------------
  RateCardController.$inject = ['$scope', 'comicsProvider'];

  function RateCardController($scope, comicsProvider) {
    var vm = this;

    console.log($scope.id);

    comicsProvider.findBy({
      "id": $scope.comicId
    }).then(function (comic) {
      vm.comic = angular.copy(comic);

      if (vm.comic.rate) {
        var total = 0,
            sum = .0;
        for (var stars in vm.comic.rate.percentages) {
          total = vm.comic.rate.percentages[stars];
          sum += stars * total;
        }
        vm.comic.rate.avg = sum / total;
      }
    });
  }

}());
