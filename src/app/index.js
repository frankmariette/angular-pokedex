'use strict';

angular.module('angularPokedex', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
      $stateProvider
      .state('pokedex', {
        url: '/pokedex',
        templateUrl: 'app/pokedex/pokedex.html',
        controller: 'PokedexController',
        controllerAs: 'pokedexCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
