(function () {
    'use strict';

    angular.module('comicsHome')
        .directive('headerNotification', function () {
            return {
                templateUrl: 'app/home/directives/header/header-notification/header-notification.html',
                restrict: 'E',
                replace: true,
            }
        });

}());
