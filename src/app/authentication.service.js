/*global angular */
(function () {
    'use strict';

    angular.module('app')
        .service('authentication', ['userProvider', authenticationService]);

    function authenticationService(userProvider) {
        this.login  = _login;
        this.logout = _logout;

        this.isLoggedIn = _isLoggedIn;
        this.getLoggedUser = _getLoggedUser;

        if (!sessionStorage["loggedUser"]) {
            sessionStorage["loggedUser"] = "";
        }

        function _login (username, password) {
            var search = userProvider.findBy({ username: username });

            if ( search.length != 1 ) {
                throw "El usuario solicitado no existe";
            }

            var user = search[0];

            if (password != user.password) {
                throw "La contraseña especificada es incorrecta";
            }

            sessionStorage["loggedUser"] = JSON.stringify(user);
        }

        function _logout () {
            sessionStorage["loggedUser"] = "";
        };

        function _isLoggedIn () {
            return sessionStorage["loggedUser"] !== "";
        };

        function _getLoggedUser () {
            return JSON.parse(sessionStorage["loggedUser"]);
        };

    }

}());
