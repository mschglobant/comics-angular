/* global angular */
(function () {
  'use strict';

  angular.module('comicsHome')
    .controller('MyProfileController', ['authentication', '$uibModal', MyProfileController]);

  function MyProfileController(auth, $uibModal) {
    var vm = this;

    vm.user = auth.getLoggedUser();

    vm.user.displayName = function () {
      if (this.firstName) {
        return this.firstName + ' ' + this.lastName;
      } else {
        return this.username;
      }
    }
    vm.user.displayRole = function () {
      if (this.role == "admin") {
        return "Site Admin";
      }
      return "User"
    }
    vm.user.displayImageUrl = function () {
      return this.imageUrl || "http://placehold.it/160x160";
    }
    vm.user.hasBorrows = function () {
      return this.borrows && this.borrows.length > 0;
    }

    vm.changeProfilePicture = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/home/my-profile/set-profile-picture.dialog.view.html',
        controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
          $scope.getPicture = function () {
            return $scope.imageUrl || "http://placehold.it/160x160";
          }

          $scope.ok = function () {
            $uibModalInstance.close($scope.imageUrl);
          };

          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }],
        resolve: {
          imageUrl: function () {
            return vm.user.imageUrl;
          }
        }
      });

      modalInstance.result.then(function (imageUrl) {
        vm.user.imageUrl = imageUrl;
      });
    };

  }

}());
