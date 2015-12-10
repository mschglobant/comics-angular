/*global angular*/
(function () {
  'use strict';

  angular.module("comicsHome")
    .controller("GenreDetailController", GenreDetailController);

  GenreDetailController.$inject = ['$routeParams', 'genresProvider', 'comicsProvider'];

  function GenreDetailController($routeParams, genresProvider, comicsProvider) {
    var vm = this,

      id = $routeParams.id;

    genresProvider.findById(id).then(function (genre) {
      if (!genre.comicsLoaded) {
        comicsProvider.findById(genre.comics).then(function (comics) {
          genre.comics = comics;
          genre.comicsLoaded = true;
        });
      }

      vm.comics = genre.comics;
    });
  }
}());
