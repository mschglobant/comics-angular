(function() {
    'use strict';
    
    var _config = {
        password: {
            pattern: new RegExp(/^[a-z0-9]+$/i)
        }
    };
    
    var User = function (name, password) {
        this.name = name;
        this.password = this.setPassword(password);
    }
    
    User.prototype = {
        setPassword: function (password) {
            if ( !_config.password.pattern.test(password) ) {
                throw "Password only accepts alphanumeric characters.";
            }
        },
        checkPassword: function (password) {
            return this.password == password;
        }
    }
    
})();