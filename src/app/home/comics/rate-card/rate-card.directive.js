/*global angular */
(function () {
  'use strict';

  angular.module('comicsHome')
    .directive('rateCard', rateCardDirective);

  function rateCardDirective() {
    return {
      templateUrl: 'app/home/comics/rate-card/rate-card.view.html',
      restrict: 'E',
      replace: true,
      scope: {
        comicId: '='
      },
      controller: 'RateCardController',
      controllerAs: 'vm'
    };
  }

}());
