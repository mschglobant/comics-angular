/*global angular*/
(function () {
  'use strict';

  angular.module("comicsHome")
    .controller("CommentsController", CommentsController)
    .directive("comments", comments);

  // directive
  function comments () {
    return {
      scope: {
        comic: '='
      },
      templateUrl: 'app/home/comics/comments/comments.view.html',
      controller: 'CommentBoxController'
    }
  }

  // controller
  CommentsController.$inject = ['$scope'];
  function CommentsController ($scope) {
  }

}());
