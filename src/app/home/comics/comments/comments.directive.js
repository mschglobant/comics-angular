/*global angular*/
(function () {
  'use strict';

  angular.module("comicsHome")
    .controller("CommentsController", CommentsController)
    .directive("comments", comments);

  // directive
  function comments() {
    return {
      scope: {
        comic: '='
      },
      templateUrl: 'app/home/comics/comments/comments.view.html',
      controller: 'CommentsController'
    }
  }

  // controller
  CommentsController.$inject = ['$scope'];

  function CommentsController($scope) {

    $scope.$watch('comic', function(comic) {
      if ($scope.comic) {
        $scope.comic.comments.forEach(function (comment) {
          if (comment.timestamp && (typeof comment.timestamp === 'string' || comment.timestamp instanceof String)) {
            comment.timestamp = new Date(comment.timestamp);
          }
        });
      }
    });

  }

}());
