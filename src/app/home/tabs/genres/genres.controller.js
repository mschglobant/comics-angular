(function () {
  'use strict';

  angular.module('comicsHome')
    .controller("GenresController", ['genresProvider', 'comicsProvider', function (genresProvider, comicsProvider) {
      var vm = this;


      if (!vm.genresLoaded) {
        genresProvider.findAll().then(function (genres) {
          vm.genres = genres;

          genres.forEach(function(genre, index, array) {
            if (!genre.comicsLoaded) {
              comicsProvider.findById(genre.comics).then(function (comics) {
                genre.comics = comics;
                genre.comicsLoaded = true;
              });
            }
          });

        });
        vm.genresLoaded = true;
      }


    }]);
}());
