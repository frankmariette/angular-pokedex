/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/* global inject */
/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('angularPokedex'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
  
  
  
});
