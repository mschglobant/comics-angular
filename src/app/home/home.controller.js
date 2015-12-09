(function () {
  'use strict';

  angular.module('comicsHome')
    .controller("HomeController", ['comicsProvider', '$filter', function (comicsProvider, $filter) {
      var vm = this;
      comicsProvider.findAll().then(function (comics) {
        vm.comics = $filter('orderBy')(comics,'-id');

        vm.randomComics = shuffle(comics);


        function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex ;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }

      });
    }]);
}());
