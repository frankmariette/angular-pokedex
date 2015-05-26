'use strict';
angular.module('angularPokedex').controller('PokedexController', function ($http, $scope, $log) {
	$scope.totalPokemon = [];
	$scope.pokemonPerPage = 9;
	$scope.pokemonOnPage = [];

	function fetchAllPokemon() {
		$http.get('http://pokeapi.co/api/v1/pokedex', {cache:true})
			.success(function(data){
				$scope.totalPokemon =  data.objects[0].pokemon;
				getPokemonForPage(0);
			})
			.error(function(error){
				$log.log(error);
			});
	}
	
	$scope.pagination = {
		current: 1
	};
	
	function getPokemonForPage(start){
		
		var lastPokemon = $scope.pagination.current * $scope.pokemonPerPage;
		for (var index = start; index < lastPokemon; index++) {
			var pokemon = $scope.totalPokemon[index];
			getPokemon(pokemon);
		}
			
	}
	
	function getPokemon (pokemon){
		$http.get('http://pokeapi.co/' + pokemon.resource_uri, {cache:true})
			.success(function(data){
				$scope.pokemonOnPage.push(data);
			})
			.error(function(error){
				$log.log(error);
			});	
	}
	
	fetchAllPokemon();
	
	
});