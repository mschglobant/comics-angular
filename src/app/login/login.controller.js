(function () {
  "use strict";

  angular
    .module("app")
    .controller("LoginController", ['$location', '$scope', '$timeout', 'authentication', LoginController]);

  function LoginController($location, $scope, $timeout, authentication) {

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
      vm.dataLoading = true;

      authentication
        .login(vm.username, vm.password)
        .then(success)
        .catch(error)
        .finally(function () {
          vm.dataLoading = false;
        });

      function success(user) {
        $location.path('/');
      }

      function error(e) {
        if (e instanceof UserAuthenticationError) {
          $scope.alert.notifyError(e.message);
        } else {
          $scope.alert.notifyError('an error ocurred. Reload page and try again.');
        }
      }

    };
  }

}());
