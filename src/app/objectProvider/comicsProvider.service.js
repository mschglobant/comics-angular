/*global angular */
(function () {
  'use strict';

  angular.module("app")
    .factory("comicsProvider", ['specificProvider', function (specificProvider) {
      return specificProvider.getSpecificProviderFor("comic");
    }]);

}());
