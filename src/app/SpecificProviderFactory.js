var SpecificProviderFactory;

(function () {
    
    var created = {};
    
    SpecificProviderFactory = function (objectProvider) {
        
        this.createSpecificProviderFor = function (type) {
            if ( !created[type] ) {
                created[type] = {
                    find: function (id) { return objectProvider.find (type, id); },
                    findAll: function () { return objectProvider.findAll(type); },
                    persist: function (obj) { return objectProvider.persist(type, obj); }
                }
            }
            
            return created[type];
        }
    }
    
})();