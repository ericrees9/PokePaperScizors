const baseURL = "https://pokeapi.co/api/v2/" 
const fireTypeURL = baseURL + "type/fire/"
const waterTypeURL = baseURL + "type/water/" // *NOTE* if we want both arrays of water/grass pokemon we can assign another random number after it has been assigned a type, then build the URL based on if that URL is greater than 100, pointing us in the direction of the second array
const grassTypeURL = baseURL + "type/grass/"
let url;

/* 
// FETCHING RESULTS FROM API
fetch(baseURL)
    .then(function(result) { 
        return result.json(); 
    }) 
    .then(function(json){
        displayResults(json); 
        //console.log(json);
    })
*/

// DISPLAYING THE POKEMON
function displayResults(json) {

// PICKING WHICH TYPE(1) - Randomly picking a number to decide which type to pull from
    typeArray1 = ["Fire", "Water", "Grass"];
    randomType1 = Math.floor(Math.random() * (+3 - +0)) + +0;
    //console.log(randomType1);
    pokemonType1 = typeArray1[randomType1];
    //console.log(pokemonType1);

// PICKING WHICH TYPE(2) - Randomly picking a number to decide which type to pull from    
    typeArray2 = ["Fire", "Water", "Grass"];
    randomType2 = Math.floor(Math.random() * (+3 - +0)) + +0;
    //console.log(randomType2);
    pokemonType2 = typeArray2[randomType2];
    //console.log(pokemonType2);
    
// SETTING THE FIRST TYPE LIST AFTER RNG - With the first type chosen, now we have to set the type list for an array of viable Pokemon
    if(pokemonType1 == "Fire"){
// FETCHING RESULTS FROM API
        fetch(fireTypeURL)
            .then(function(result) { 
                return result.json(); 
            }) 
            .then(function(json){ 
                console.log(json);
                let leftPokemonList = json.pokemon;
                randomLeftPokemon = leftPokemonList[Math.floor(Math.random() * leftPokemonList.length)];
                console.log(randomLeftPokemon);
                console.log(typeof randomLeftPokemon);
                randomLeftID = randomLeftPokemon.pokemon.url;
                console.log(randomLeftID);
                
                //displayResults(json);
            })
            .catch(err => {
                console.log(err, "No Pokemon came out to play!")
             })    
    

    } else if(pokemonType1 == "Water"){
// FETCHING RESULTS FROM API
        fetch(waterTypeURL)
            .then(function(result) { 
                return result.json(); 
            }) 
            .then(function(json){
                console.log(json);
                let leftPokemonList = json.pokemon;
                randomLeftPokemon = leftPokemonList[Math.floor(Math.random() * leftPokemonList.length)];
                console.log(randomLeftPokemon);
                //console.log(typeof randomLeftPokemon);
                randomLeftID = randomLeftPokemon.pokemon.url;
                console.log(randomLeftID);
                //displayResults(json);
                //console.log(json.pokemon[132]) - Trying to figure out a way to include both pages of the pokemon type array
            })
            .catch(err => {
                console.log(err, "No Pokemon came out to play!")
            }) 


    } else if(pokemonType1 == "Grass"){
// FETCHING RESULTS FROM API
        fetch(grassTypeURL)
            .then(function(result) { 
                return result.json(); 
            }) 
            .then(function(json){
                console.log(json);
                let leftPokemonList = json.pokemon;
                randomLeftPokemon = leftPokemonList[Math.floor(Math.random() * leftPokemonList.length)];
                console.log(randomLeftPokemon);
                console.log(typeof randomLeftPokemon);
                randomLeftID = randomLeftPokemon.pokemon.url;
                console.log(randomLeftID);
                //displayResults(json);
            })
            .catch(err => {
                console.log(err, "No Pokemon came out to play!")
            }) 

    }

// SETTING THE SECOND TYPE LIST AFTER RNG - With the second type chosen, now we have to set the type list for an array of viable Pokemon
   if(pokemonType2 == "Fire"){
    // FETCHING RESULTS FROM API
            fetch(fireTypeURL)
                .then(function(result) { 
                    return result.json(); 
                }) 
                .then(function(json){
                    //displayResults(json); 
                    console.log(json);
                })
                .catch(err => {
                    console.log(err, "No Pokemon came out to play!")
                 })    
    
        } else if(pokemonType2 == "Water"){
    // FETCHING RESULTS FROM API
            fetch(waterTypeURL)
                .then(function(result) { 
                    return result.json(); 
                }) 
                .then(function(json){
                    //displayResults(json); 
                    console.log(json);
                })
                .catch(err => {
                    console.log(err, "No Pokemon came out to play!")
                })         
    
        } else if(pokemonType2 == "Grass"){
    // FETCHING RESULTS FROM API
            fetch(grassTypeURL)
                .then(function(result) { 
                    return result.json(); 
                }) 
                .then(function(json){
                    //displayResults(json); 
                    console.log(json);
                })
                .catch(err => {
                    console.log(err, "No Pokemon came out to play!")
                })  
    
        }


}

displayResults();
