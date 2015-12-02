(function () {
    'use strict';

    var login = function (username, password) {
        var user = objectProvider.find("users", username);

        if (typeof user != User) {
            throw "El usuario solicitado no existe";
        }

        if (!user.checkPassword(password)) {
            throw "La contraseña especificada es incorrecta";
        }

        this.logout();
        _sessionStorage["loggedUser"] = user;
    };

    var logout = function () {
        _sessionStorage["loggedUser"] = null;
    };

    var isLoggedIn = function () {
        return _sessionStorage["loggedUser"] !== null;
    };

    var getLoggedUser = function () {
        return _sessionStorage["loggedUser"];
    };

    angular
        .module('app')
        .factory('AuthenticationService', function () {
            var service = {
                login: login,
                logout: logout,

                isLoggedIn: isLoggedIn,
                getLoggedUser: getLoggedUser
            }

            return service;
        });

    function AuthenticationService() {
        // Private
        var loggedUser,
            _objectProvider,
            _sessionStorage;

        // Constructor
        SessionManagement = function (objectProvider, sessionStorage) {
            _objectProvider = objectProvider;
            _sessionStorage = sessionStorage;

            _sessionStorage["loggedUser"] = null;
        };

        // Methods
        SessionManagement.prototype = {

            isLoggedIn: function () {
                return _sessionStorage["loggedUser"] !== null;
            },

            getLoggedUser: function () {
                return _sessionStorage["loggedUser"];
            },

            login: function (username, password) {
                var user = objectProvider.find("users", username);

                if (typeof user != User) {
                    throw "El usuario solicitado no existe";
                }

                if (!user.checkPassword(password)) {
                    throw "La contraseña especificada es incorrecta";
                }

                this.logout();
                _sessionStorage["loggedUser"] = user;
            },

            logout: function () {
                _sessionStorage["loggedUser"] = null;
            }
        }
    }

})();
