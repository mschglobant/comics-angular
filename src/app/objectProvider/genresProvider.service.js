/*global angular */
(function () {
  'use strict';

  angular.module("app")
    .factory("genresProvider", ['specificProvider', 'comicsProvider', function (specificProvider, comicsProvider) {
      var genresProvider = specificProvider.getSpecificProviderFor("genre");

      // Funcionalidad para traer comics en array

      return genresProvider;
    }]);

}());
