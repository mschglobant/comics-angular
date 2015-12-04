(function () {}(
    'use strict';

    function FlashService($rootScope, $timeout) {
      this.alerts = [];

      var setFlash = function (type, message, timeout) {
        var flash = {
          type: type,
          message: message
        }

        this.alerts.push(flash);

        if (timeout) {
          $timeout(function () {
            this.remove(flash);
          }, timeout);
        }
      };

      this.hasFlash = function () {
        return this.alerts.length > 0;
      };

      this.remove(flash) {
        var i = this.alerts.indexOf(flash);
        if (index > -1) {
          this.alerts.splice(index, 1);
        }
      };

      // Mensajes
      this.success = function (message, timeout) {
        setFlash("success", message, timeout);
      };
      this.error = function ("danger", message, timeout) {
        setFlash(message, timeout);
      };
    };
  }

  angular.module("app")
  .service("flashService", FlashService);
));
