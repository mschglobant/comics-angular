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

    function getSpecificProviderFor(type, Prototype) {
      if (!created[type]) {
        createSpecificProviderFor(type, Prototype);
      }

      return created[type];
    };

    function createSpecificProviderFor(type, Prototype) {

      function prototipar(objs) {

        if (Prototype) {
          if (Object.prototype.toString.call(objs) !== '[object Array]') {
            var prototipado = new Prototype();
            for (var prop in objs) {
              prototipado[prop] = objs[prop];
            }
            return prototipado;
          }

          objs.forEach(function (obj, index, array) {
            array[index] = new Prototype();
            for (var prop in obj) {
              array[index][prop] = obj[prop];
            }
          });
        }

        return objs;
      }

      created[type] = {
        find: function (id) {
          return objectProvider.find(type, id).then(prototipar);
        },
        findById: function (ids) {
          return objectProvider.findById(type, ids).then(prototipar);
        },
        findBy: function (expr) {
          return objectProvider.findBy(type, expr).then(prototipar);
        },
        findAll: function () {
          return objectProvider.findAll(type).then(prototipar);
        },
        persist: function (obj) {
          return objectProvider.persist(type, obj);
        }
      };

      objectProvider.init(type);

    }

  }

}());

// TODO: agregar prototype del modelo especifico
