var ObjectProvider;

(function () {
    "use strict";
    
    // Config
    var prefix = "comics_";
    
    // Private
    var _loadedObjects = {};
    
    // Dependecies
    var _storage;
    
    // Constructor
    ObjectProvider = function (storage) {
        _storage = storage;
    };
    
    // Public methods
    ObjectProvider.prototype = {
        
        find: function (type, id) {
            var objects = _getType(type);
            
            if (typeof objects[id] === undefined) {
                throw "No existe el objeto del tipo '" + type + "' con id '" + id + "'";
            }
            
            return objects[id];
        },
        
        findAll: function (type) {
            return _getType(type);
        },
        
        persist: function(type, object) {
            var actualObj = _storage.getItem(prefix + type);
            
            if (actualObj === null) {
                actualObj = [];
            } else {
                actualObj = JSON.parse(actualObj);
            }
            
            actualObj.push(object);
            _storage.setItem(prefix+type, JSON.stringify(actualObj));
            
        }
    }
    
    // Private methods
    var _getType = function(type) {
        var objects = _storage.getItem(prefix + type);
        
        if (null === objects) {
            throw "No existe el tipo '" + type + "'";
        }
        
        return JSON.parse(objects);
    };
    
})();