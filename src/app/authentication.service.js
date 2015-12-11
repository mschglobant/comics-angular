/*global angular */
function UserAuthenticationError(message) {
  this.name = "UserAuthenticationError";
  this.message = (message || "");
}
UserAuthenticationError.prototype = Error.prototype;

(function () {
  'use strict';

  function authenticationService(userProvider) {

    if (!sessionStorage.loggedUser) {
      sessionStorage.loggedUser = "";
    }

    this.login = function (username, password) {

      return userProvider.findBy({
        username: username
      }).then(function (search) {
        if (search.length !== 1) {
          throw new UserAuthenticationError("Invalid credentials");
        }

        var user = search[0];

        if (password !== user.password) {
          throw new UserAuthenticationError("Invalid credentials");
        }

        sessionStorage.loggedUser = JSON.stringify(user);

        return user;
      }, function (r) {});

    };

    this.logout = function () {
      sessionStorage.loggedUser = "";
    };

    this.isLoggedIn = function () {
      return sessionStorage.loggedUser !== "";
    };

    this.getLoggedUser = function () {
      return JSON.parse(sessionStorage.loggedUser);
    };

    this.userExist = function (user) {
      return userProvider.findBy({
        username: user
      }).then(function (search) {
        return search.length > 0;
      });

    };

  }


  // Angular config /////////////////////////////////////////////////////////////////////////////
  angular.module('app')
    .service('authentication', ['userProvider', authenticationService]);
  ///////////////////////////////////////////////////////////////////////////////////////////////

}());
