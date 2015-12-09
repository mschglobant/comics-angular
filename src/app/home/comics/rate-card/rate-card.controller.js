/*global angular */
(function () {
  'use strict';

  angular.module('comicsHome')
    .controller('RateCardController', RateCardController);

  RateCardController.$inject = ['$scope', 'comicsProvider'];

  function RateCardController($scope, comicsProvider) {
    var vm = this;
    debugger;
    comicsProvider.findBy({"id": $scope.comicId}).then(function (comic) {
      console.log(comic);
      vm.comic = comic;
    });
  }

}());
