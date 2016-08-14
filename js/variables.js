function Pokemon(name, pokedex){
	this.name = name;
	this.pokedex = pokedex;
	this.img = '../css/pokemon/'+pokedex+'.png'
}

var pokemonList = [];
pokemonList.push(new Pokemon('Bulbasaur', 2));
pokemonList.push(new Pokemon('Ivysaur', 2));
pokemonList.push(new Pokemon('Venusaur', 3));
pokemonList.push(new Pokemon('Charmander', 4));
pokemonList.push(new Pokemon('Charmeleon', 5));
pokemonList.push(new Pokemon('Charizard', 6));
pokemonList.push(new Pokemon('Squirtle', 7));
pokemonList.push(new Pokemon('Wartortle', 8));
pokemonList.push(new Pokemon('Blastoise', 9));


//for generating random lat and lon based of a given lat and lon, respectively.
function randomLng(coordinate){
	var check = Math.floor(Math.random()*2);
	if(check < 1){
		var newLat = coordinate + Number((Math.random()*20).toFixed(4));
	}else if(check >=1){
		var newLat = coordinate - Number((Math.random()*20).toFixed(4));
	}
	return newLat;
}

function randomLat(coordinate){
	var check = Math.floor(Math.random()*2);
	if(check < 1){
		var newLat = coordinate + Number((Math.random()*9).toFixed(4));
	}else if(check >=1){
		var newLat = coordinate - Number((Math.random()*9).toFixed(4));
	}
	return newLat;
}