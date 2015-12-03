/*global angular */
(function () {
  'use strict';

  // Config
  var prefix = "comics_";

  // Private
  var loadedObjects = {};

  // Dependecies
  var storage;
  var filter;

  // Constructor
  var ObjectProvider = function (staticStorage, filterParam) {
    if (!staticStorage) {
      staticStorage = window.localStorage;
    }
    storage = staticStorage;
    filter = filterParam;
  };

  // Private methods
  var getType = function (type) {
    var objects = loadedObjects[type];

    if (!objects) {
      var enstorage = storage[prefix + type];

      if (!enstorage) {
        // TODO: Cargar desde API json --> o ver la forma de hacerlo al inicializar
        throw "No existe el tipo '" + type + "'";
      }

      objects = JSON.parse(enstorage);
    }

    return objects;
  };

  // Public methods
  ObjectProvider.prototype = {

    find: function (type, id) {
      var objects = getType(type);

      if (!objects[id]) {
        throw "No existe el objeto del tipo '" + type + "' con id '" + id + "'";
      }

      return objects[id];
    },

    findBy: function (type, expr) {
      var currentCollection = getType(type);

      return filter(currentCollection, expr, true);
    },

    findAll: function (type) {
      return getType(type);
    },

    persist: function (type, object) {
      var currentCollection;

      // Obtengo los elementos actuales de la colleccion o creo una nueva
      try {
        currentCollection = getType(type);
      } catch (e) {
        console.log(e);
        currentCollection = [];
      }

      currentCollection.push(object);

      loadedObjects[type] = currentCollection;
      storage[prefix + type] = JSON.stringify(currentCollection);
    }
  };


  // Angular config /////////////////////////////////////////////////////////////////////////////
  angular.module("app")
    .factory("genericProvider", ['$filter', function ($filter) {
      return new ObjectProvider(window.localStorage, $filter('filter'));
    }]);
  ///////////////////////////////////////////////////////////////////////////////////////////////

}());
