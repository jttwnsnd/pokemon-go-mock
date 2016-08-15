function Pokemon(name, pokedex){
	this.name = name;
	this.pokedex = pokedex;
	this.img = '../css/pokemon/'+pokedex+'.png'
}

var pokemonList = [];
pokemonList.push(new Pokemon('Bulbasaur', 1));
pokemonList.push(new Pokemon('Ivysaur', 2));
pokemonList.push(new Pokemon('Venusaur', 3));
pokemonList.push(new Pokemon('Charmander', 4));
pokemonList.push(new Pokemon('Charmeleon', 5));
pokemonList.push(new Pokemon('Charizard', 6));
pokemonList.push(new Pokemon('Squirtle', 7));
pokemonList.push(new Pokemon('Wartortle', 8));
pokemonList.push(new Pokemon('Blastoise', 9));
pokemonList.push(new Pokemon('Caterpie', 10));
pokemonList.push(new Pokemon('Metapod', 11));
pokemonList.push(new Pokemon('Butterfree', 12));
pokemonList.push(new Pokemon('Weedle', 13));
pokemonList.push(new Pokemon('Kakuna', 14));
pokemonList.push(new Pokemon('Beedrill', 15));
pokemonList.push(new Pokemon('Pidgey', 16));
pokemonList.push(new Pokemon('Pidgeotto', 17));
pokemonList.push(new Pokemon('Pidgeot', 18));
pokemonList.push(new Pokemon('Rattata', 19));
pokemonList.push(new Pokemon('Raticate', 20));


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
 
// 21. Spearow
 
// 22. Fearow
 
// 23. Ekans
 
// 24. Arbok
 
// 25. Pikachu
 
// 26. Raichu
 
// 27. Sandshrew
 
// 28. Sandslash
 
// 29. Nidoran (female)
 
// 30. Nidorina
 
// 31. Nidoqueen
 
// 32. Nidoran (male)
 
// 33. Nidorino
 
// 34. Nidoking
 
// 35. Clefairy
 
// 36. Clefable
 
// 37. Vulpix
 
// 38. Ninetales
 
// 39. Jigglypuff
 
// 40. Wigglytuff
 
// 41. Zubat
 
// 42. Golbat
 
// 43. Oddish
 
// 44. Gloom
 
// 45. Vileplume
 
// 46. Paras
 
// 47. Parasect
 
// 48. Venonat
 
// 49. Venomoth
 
// 50. Diglett
 
// 51. Dugtrio
 
// 52. Meowth
 
// 53. Persian
 
// 54. Psyduck
 
// 55. Golduck
 
// 56. Mankey
 
// 57. Primeape
 
// 58. Growlithe
 
// 59. Arcanine