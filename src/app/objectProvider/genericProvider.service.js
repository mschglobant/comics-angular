/*global angular */
(function () {
  'use strict';

  angular.module("app")
    .factory("genericProvider", ['$filter', '$http', '$q', '$timeout', function ($filter, $http, $q, $timeout) {
      return new ObjectProvider(window.localStorage, $filter('filter'), $http, $q, $timeout);
    }]);

  //////////

  // Config
  var prefix = "comics_";

  // Private
  var loadedObjects = {};

  // Dependecies
  var storage,
    filter,
    $http,
    $q,
    $timeout;

  // Constructor
  var ObjectProvider = function (staticStorage, filterParam, http, q, timeout) {
    if (!staticStorage) {
      staticStorage = window.localStorage;
    }
    storage = staticStorage;
    filter = filterParam;
    $http = http;
    $q = q;
    $timeout = timeout;
  };

  // Private methods
  var init = function (type) {
    var deferred = $q.defer();

    if (storage[prefix + type]) {

      deferred.resolve(storage[prefix + type]);

    } else {

      $http({
        method: 'GET',
        url: '../api/' + type + 's.json'
      }).then(successCallback, errorCallback);

      ///////
      function successCallback(response) {
        storage[prefix + type] = JSON.stringify(response.data);
        deferred.resolve(storage[prefix + type]);
      }

      function errorCallback(response) {
        deferred.reject("Failed to fetch " + type);
      }

    }

    return deferred.promise;
  }

  var getType = function (type) {

    return init(type).then(loadInMemory).then(returnCachedObject);

    ///////
    function loadInMemory() {

      if (!loadedObjects[type]) {
        loadedObjects[type] = JSON.parse(storage[prefix + type]);
      }

      return loadedObjects[type];

    }

    function returnCachedObject() {
      var deferred = $q.defer();

      // Espera ficticia de hasta 2 segundos
      $timeout(function () {
        deferred.resolve(loadedObjects[type])
      }, Math.floor(Math.random() * 2000))

      return deferred.promise;
    }

  };

  // Public methods
  ObjectProvider.prototype = {

    init: init,

    find: function (type, id) {

      return getType(type).then(success);

      function success(objects) {
        if (!objects[id]) {
          throw "No existe el objeto del tipo '" + type + "' con id '" + id + "'";
        }

        return objects[id];
      }

    },

    findBy: function (type, expr) {

      return getType(type).then(success);

      ///////
      function success(currentCollection) {
        return filter(currentCollection, expr, true);
      }
    },

    findAll: function (type) {
      return getType(type);
    },

    persist: function (type, object) {

      return getType(type).then(success, error);

      ///////
      function success(currentCollection) {
        currentCollection.push(object);

        loadedObjects[type] = currentCollection;
        storage[prefix + type] = JSON.stringify(currentCollection);
      }

    }
  };

}());
