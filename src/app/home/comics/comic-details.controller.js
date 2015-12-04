(function () {
  'use strict';

  angular.module('comicsHome')
    .controller("ComicsDetails", ['$routeParams', '$scope', function ($routeParams, $scope) {
      $scope.comic = {
        id: 1,
        title: 'Batman/Superman Vol. 1: Cross World',
        publisher: {
          id: 1,
          name: 'DC comics'
        },
        year: '2014',
        imageUrl: 'https://d2snwnmzyr8jue.cloudfront.net/dcc_t1219400018301_270.jpeg',
        description: "The Dark Knight and the Man of Steel are close friends in the modern day-but the two weren't always such close allies. Discover how two of the World's Finest Super Heroes met for the first time in the New 52, and the mysterious adventure that takes them to a whole new world-the world of Earth-2! The heroes of the main DC Universe meet their Earth-2 counterparts for the first time! Collects BATMAN #1-4 and JUSTICE LEAGUE #23.1: DARKSEID."
      };
    }]);
}());
