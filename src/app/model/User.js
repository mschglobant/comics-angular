var User;

(function () {
  'use strict';

  var config = {
    password: {
      pattern: new RegExp(/^[a-z0-9]+$/i)
    }
  };

  User = function (username, password) {
    this.username = username;
    this.password = password;
  };

  User.prototype = {
    setPassword: function (password) {
      if (!config.password.pattern.test(password)) {
        throw "Password only accepts alphanumeric characters.";
      }
    },
    checkPassword: function (password) {
      return this.password === password;
    },
    displayName: function () {
      if (this.firstName) {
        return this.firstName + ' ' + this.lastName;
      } else {
        return this.username;
      }
    }
  }

})();
