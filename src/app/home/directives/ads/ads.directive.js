/*global angular*/
(function () {
  'use strict';

  angular.module("comicsHome")
    .directive("adsBanner", adsBannerDirective)
    .controller("AdsController", AdsController);

  function adsBannerDirective() {
    return {
      scope: true,
      replace: true,
      templateUrl: 'app/home/directives/ads/ads.view.html',
      controller: 'AdsController',
      controllerAs: 'vm'
    };
  }

  AdsController.$inject = ['$interval'];

  function AdsController($interval) {
    var vm = this,
      actualIndex,
      banners = [
      "assets/images/ads/banner1.jpg",
      "assets/images/ads/banner2.jpg",
      "assets/images/ads/banner3.jpg",
      "assets/images/ads/banner4.jpg"
    ];

    vm.bannerUrl = banners[Math.floor((Math.random() * banners.length))];

    $interval(function () {
      var newIndex;
      while ((newIndex = Math.floor(Math.random() * banners.length)) === actualIndex);

      vm.bannerUrl = banners[newIndex];
      actualIndex = newIndex;

    }, 5000);
  }

}());
