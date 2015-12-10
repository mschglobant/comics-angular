/*global angular*/
(function () {
  'use strict';

  angular.module("comicsHome")
    .controller("CommentBoxController", CommentBoxController)
    .directive("commentBox", commentBox);

  // directive
  function commentBox () {
    return {
      scope: {
        comic: '='
      },
      templateUrl: 'app/home/comics/comments/comment-box/comment-box.view.html',
      controller: 'CommentBoxController'
    }
  }

  // controller
  CommentBoxController.$inject = ['$scope', 'authentication'];
  function CommentBoxController ($scope, authentication) {
    $scope.newComment = {
      username: authentication.getLoggedUser().username
    };

    $scope.tryToSubmit = false;

    $scope.check = function () {
      $scope.tryToSubmit = true;
      return $scope.newComment.comment && $scope.newComment.rate;
    }
    $scope.addComment = function () {
      $scope.comic.comments.push($scope.newComment);
      $scope.comic.rate.totalUsers +=1;
      $scope.comic.rate.percentages[$scope.newComment.rate] +=1;

      $scope.newComment = {
        username: authentication.getLoggedUser().username
      };
      $scope.tryToSubmit = false;
      $scope.form.$setPristine();
    }
  }

}());
