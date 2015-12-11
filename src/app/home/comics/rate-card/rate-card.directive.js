/*global angular */
(function () {
  'use strict';

  angular.module('comicsHome')
    .directive('rateCard', rateCardDirective);

  // Directive ----------------------------------------------------------------
  function rateCardDirective() {
    return {
      templateUrl: 'app/home/comics/rate-card/rate-card.view.html',
      restrict: 'E',
      replace: true,
      scope: {
        comic: '='
      }
    };
  }

}());
