/*global angular */
(function () {
  'use strict';

  angular.module("app")
    .service("specificProvider", ['genericProvider', specificProvider]);

  //////////

  function specificProvider(objectProvider) {

    this.getSpecificProviderFor = getSpecificProviderFor;

    //////////

    var created = {};

    function getSpecificProviderFor (type) {
      if (!created[type]) {
        createSpecificProviderFor(type);
      }

      return created[type];
    };

    function createSpecificProviderFor(type) {
      created[type] = {
        find: function (id) {
          return objectProvider.find(type, id);
        },
        findById: function (ids) {
          return objectProvider.findById(type, ids);
        },
        findBy: function (expr) {
          return objectProvider.findBy(type, expr);
        },
        findAll: function () {
          return objectProvider.findAll(type);
        },
        persist: function (obj) {
          return objectProvider.persist(type, obj);
        }
      };

      objectProvider.init (type);
    }

  }

}());

// TODO: agregar prototype del modelo especifico
