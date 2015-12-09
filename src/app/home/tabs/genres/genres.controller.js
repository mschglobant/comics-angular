(function () {
  'use strict';

  angular.module('comicsHome')
    .controller("GenresController", ['genresProvider', 'userProvider', function (genresProvider, userProvider) {
      var vm = this;
      genresProvider.findAll().then(function (genres) {
        vm.genres = genres;

        genres[0].comics = [
          {imageUrl: "https://d2snwnmzyr8jue.cloudfront.net/dcc_t1219400018301_270.jpeg"},
          {imageUrl: "https://d2snwnmzyr8jue.cloudfront.net/dcc_t1219400018301_270.jpeg"},
          {imageUrl: "https://d2snwnmzyr8jue.cloudfront.net/dcc_t1219400018301_270.jpeg"},
          {imageUrl: "https://d2snwnmzyr8jue.cloudfront.net/dcc_t1219400018301_270.jpeg"},
          {imageUrl: "https://d2snwnmzyr8jue.cloudfront.net/dcc_t1219400018301_270.jpeg"},
          {imageUrl: "https://d2snwnmzyr8jue.cloudfront.net/dcc_t1219400018301_270.jpeg"},
        ]
      });
    }]);
}());
