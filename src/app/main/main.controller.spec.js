'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('angularPokedex'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
  
  describe('main controller tests', function(){
    it('should sum up a total', function(){
      var sum = 3 + 2;
      expect(sum).toEqual(5);
    });
  });

 
});
