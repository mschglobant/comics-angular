/*global angular */
(function () {
    'use strict';

    angular.module("app")
        .factory("userProvider", ['specificProvider', function (specificProvider) {
            return specificProvider.createSpecificProviderFor("user");
        }]);

}());
