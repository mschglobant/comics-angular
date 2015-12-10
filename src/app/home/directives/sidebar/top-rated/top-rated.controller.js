/*global angular */
(function () {
  'use strict';

  angular.module('comicsHome')
    .controller('TopRatedController', TopRatedController);

  TopRatedController.$inject = ['$filter', 'comicsProvider'];

  function TopRatedController($filter, comicsProvider) {
    var vm = this;

    comicsProvider.findAll().then(function (comics) {

      comics.forEach(function(comic) {
        if (comic.rate) {
          var total = 0,
              sum = .0;
          for (var stars in comic.rate.percentages) {
            total+= comic.rate.percentages[stars];
            sum += stars * comic.rate.percentages[stars];
          }
          comic.avgRate = sum / total;
        }
      })



      vm.comics = $filter('orderBy')(comics, '-avgRate');
    });

  }

}());
