/*global angular */
(function () {
  'use strict';

  angular.module("app")
    .factory("genericProvider", ['$filter', '$http', function ($filter, $http) {
      return new ObjectProvider(window.localStorage, $filter('filter'), $http);
    }]);

  //////////

  // Config
  var prefix = "comics_";

  // Private
  var loadedObjects = {};

  // Dependecies
  var storage,
    filter,
    $http;

  // Constructor
  var ObjectProvider = function (staticStorage, filterParam, http) {
    if (!staticStorage) {
      staticStorage = window.localStorage;
    }
    storage = staticStorage;
    filter = filterParam;
    $http = http;
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

    init: function (type) {
      if (storage[prefix + type]) {
        return;
      }
      return $http({
        method: 'GET',
        url: '../api/' + type + 's.json'
      }).then(successCallback, errorCallback);

      function successCallback(response) {
        loadedObjects[type] = response.data;
        storage[prefix + type] = JSON.stringify(response.data);
      }

      function errorCallback(response) {
        $log.error("Failed to fetch " + type);
      }
    },

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
        currentCollection = [];
      }

      currentCollection.push(object);

      loadedObjects[type] = currentCollection;
      storage[prefix + type] = JSON.stringify(currentCollection);
    }
  };

}());
