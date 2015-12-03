(function () {
  "use strict";

  function LoginController($location, $scope, authentication) {

    var vm = this;

    vm.username = "";
    vm.password = "";
    vm.rememberme = false;
    vm.dataLoading = false;

    $scope.alert = {
      hasFlash: false,
      type: '',
      message: '',
      close: function () {
        this.hasFlash = false;
      },
      notifyError: function (message) {
        this.type = 'danger';
        this.message = message;
        this.hasFlash = true;
      }
    };

    vm.doLogin = function () {

      try {
        authentication.login(vm.username, vm.password);
      } catch (e) {
        if (e instanceof UserAuthenticationError) {
          $scope.alert.notifyError(e.message);
        } else {
          throw e;
        }
      }
    };
  }

  angular
    .module("app")
    .controller("LoginController", ['$location', '$scope', 'authentication', LoginController]);

}());
