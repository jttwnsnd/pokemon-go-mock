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
		google.maps.event.addListener(marker, 'click', function(){
			var randomPoke = Math.ceil(Math.random()*20)
			var newImg = 'css/pokemon/' + randomPoke + '.png';
          	console.log(marker);
          	// if(temp === 1){
          	// 	if(marker.icon == icon){
          	// 		// marker.setIcon(ultraball);
          	// 		console.log('ultra');
          	// 	}else{
          	// 		// marker.setIcon(icon);
          	// 		console.log('oh no!');
          	// 	}
          	// 	iconClicked = true;
          	// 	temp = 0;
          	// }
          	// console.log(marker);
		})
		markers.push(marker);
		console.log(marker);
	}
	$scope.catchEmAll = function(){
		console.log('hi');
		for(pokemon in pokemonList){
			createMarker(pokemon);
		}
		
	}
})