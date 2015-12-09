/*global angular */
(function () {
  'use strict';

  angular.module("app")
    .factory("genresProvider", ['specificProvider', function (specificProvider) {
      return specificProvider.getSpecificProviderFor("genre");
    }]);

}());
