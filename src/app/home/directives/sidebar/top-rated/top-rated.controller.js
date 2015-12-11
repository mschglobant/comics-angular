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
        comic.getAvgRate();
      })



      vm.comics = $filter('orderBy')(comics, '-avgRate');
    });

  }

}());
