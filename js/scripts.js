var pokemonApp = angular.module('pokemonApp', []);
pokemonApp.controller('pokemonController', function($scope){
	var myLatlng = {lat: 40.0000, lng: -98.0000};
	var markers = [];
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: myLatlng
	});

	// creates the random placement of the pokeballs within USA.
	function createMarker(pokemon){
		console.log(myLatlng.lat);
		console.log(typeof(myLatlng.lat));
		var newLat = randomLat(myLatlng.lat);
		var newLng = randomLng(myLatlng.lng);
		var iconClicked = false;
		var icon = 'css/pokeball.png';
		var ultraball = 'css/ultraball.png';
		var pokemonLatlng = {lat: newLat, lng: newLng};
		var marker = new google.maps.Marker({
			position: pokemonLatlng,
			map: map,
			title: pokemon.name,
			//sets the icon image
			icon: 'css/ultraball.png'
		});
		markers.push(marker);
		console.log(marker);
	}
	for(pokemon in pokemonList){
		createMarker(pokemon);
	}
	$scope.catchEmAll = function(){
		console.log('hi');
	}
})