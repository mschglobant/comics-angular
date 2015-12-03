/*global angular */
(function () {
    'use strict';

    function specificProvider(objectProvider) {

        var created = {};

        this.createSpecificProviderFor = function (type) {
            if (!created[type]) {
                created[type] = {
                    find: function (id) { return objectProvider.find(type, id); },
                    findBy: function (expr) { return objectProvider.findBy(type, expr); },
                    findAll: function () { return objectProvider.findAll(type); },
                    persist: function (obj) { return objectProvider.persist(type, obj); }
                };
            }

            return created[type];
        };

    }


    // Angular config /////////////////////////////////////////////////////////////////////////////
    angular.module("app")
        .service("specificProvider", ['genericProvider', specificProvider]);
    ///////////////////////////////////////////////////////////////////////////////////////////////

}());

// TODO: agregar prototype de la instancia especifica
