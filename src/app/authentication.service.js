/*global angular */

function UserAuthenticationError(message) {
  this.name = "UserAuthenticationError";
  this.message = (message || "");
}
UserAuthenticationError.prototype = Error.prototype;

(function () {
  'use strict';

  function authenticationService(userProvider) {
    this.login = _login;
    this.logout = _logout;

    this.isLoggedIn = _isLoggedIn;
    this.getLoggedUser = _getLoggedUser;

    if (!sessionStorage["loggedUser"]) {
      sessionStorage["loggedUser"] = "";
    }

    function _login(username, password) {
      var search = userProvider.findBy({
        username: username
      });

      if (search.length != 1) {
        throw new UserAuthenticationError("Invalid credentials");
      }

      var user = search[0];

      if (password != user.password) {
        throw new UserAuthenticationError("Invalid credentials");
      }

      sessionStorage["loggedUser"] = JSON.stringify(user);
    }

    function _logout() {
      sessionStorage["loggedUser"] = "";
    };

    function _isLoggedIn() {
      return sessionStorage["loggedUser"] !== "";
    };

    function _getLoggedUser() {
      return JSON.parse(sessionStorage["loggedUser"]);
    };

  }


  // Angular config /////////////////////////////////////////////////////////////////////////////
  angular.module('app')
    .service('authentication', ['userProvider', authenticationService]);
  ///////////////////////////////////////////////////////////////////////////////////////////////

}());
