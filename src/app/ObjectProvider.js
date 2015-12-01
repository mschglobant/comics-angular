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
            
            if ( !objects[id] ) {
                throw "No existe el objeto del tipo '" + type + "' con id '" + id + "'";
            }
            
            return objects[id];
        },
        
        findAll: function (type) {
            return _getType(type);
        },
        
        persist: function(type, object) {
            var actualObj = _storage[prefix + type];
            
            if ( !actualObj ) {
                actualObj = [];
            } else {
                actualObj = JSON.parse(actualObj);
            }
            
            actualObj.push(object);
            _storage[prefix+type] = JSON.stringify(actualObj);
            
        }
    }
    
    // Private methods
    var _getType = function(type) {
        var objects = _storage[prefix + type];
        
        if ( !objects ) {
            throw "No existe el tipo '" + type + "'";
        }
        
        return JSON.parse(objects);
    };
    
})();