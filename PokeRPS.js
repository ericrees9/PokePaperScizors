const baseURL = "https://pokeapi.co/api/v2/" 
const fireTypeURL = baseURL + "type/fire/"
const waterTypeURL = baseURL + "type/water/" // *NOTE* if we want both arrays of water/grass pokemon we can assign another random number after it has been assigned a type, then build the URL based on if that URL is greater than 100, pointing us in the direction of the second array
const grassTypeURL = baseURL + "type/grass/"
let url;

/*
// BATTLE BUTTON
const battleButton = document.querySelector("battleButton");

// REFRESH BUTTONS
const leftRefresh = ;
const rightRefresh = ;

// EVENT LISTENERS FOR VARIOUS FUNCTIONS
battleButton.addEventListener("click", fetchResults); 
leftRefresh.addEventListener("click", nextPage);
rightRefresh.addEventListener("click", previousPage);
*/


// DISPLAYING THE POKEMON
function displayResults(pokemonType1, pokemonType2) {
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
// FETCHING TYPE LIST RESULTS FROM API
        fetch(fireTypeURL)
            .then(function(result) { 
                return result.json(); 
            }) 
            .then(function(json){ 
                //console.log(json);
                let leftPokemonList = json.pokemon;
                randomLeftPokemon = leftPokemonList[Math.floor(Math.random() * leftPokemonList.length)];
                //console.log(randomLeftPokemon);
                //console.log(typeof randomLeftPokemon);
                randomLeftID = randomLeftPokemon.pokemon.url;
                //console.log(randomLeftID);
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
                apiURL = randomLeftID.slice(26);
                //console.log(apiURL);
                indLeftURL = baseURL + apiURL;
                //console.log(indLeftURL);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
                fetch(indLeftURL)
                    .then(function(result){
                        return result.json();
                    })
                    .then(function(json){
                        console.log(json);
// DISPLAYING LEFT POKEMON 
                        let leftPokemonName = json.name;
                        //console.log(leftPokemonName);
                        let leftPokemonSprite = json.sprites["front_default"];
                        //console.log(leftPokemonSprite);
                        let leftPokemonTypeReturn = json.types[0]["type"]["name"];
                        console.log(leftPokemonTypeReturn);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
                        document.getElementById("leftPokemonPic").src = leftPokemonSprite;
                        document.getElementById("pokemonName1").innerText = leftPokemonName;
                        //leftPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
                        //document.getElementById("pokemonLevel1").innerText = "Level: " + leftPokemonLevel;
                
                    })
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
                //console.log(json);
                let leftPokemonList = json.pokemon;
                randomLeftPokemon = leftPokemonList[Math.floor(Math.random() * leftPokemonList.length)];
                //console.log(randomLeftPokemon);
                //console.log(typeof randomLeftPokemon);
                randomLeftID = randomLeftPokemon.pokemon.url;
                //console.log(randomLeftID);
                //displayResults(json);
                //console.log(json.pokemon[132]) - Trying to figure out a way to include both pages of the pokemon type array
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
                apiURL = randomLeftID.slice(26);
                //console.log(apiURL);
                indLeftURL = baseURL + apiURL;
                //console.log(indLeftURL);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
                fetch(indLeftURL)
                    .then(function(result){
                        return result.json();
                    })
                    .then(function(json){
                        //console.log(json);
// DISPLAYING LEFT POKEMON 
                        let leftPokemonName = json.name;
                        //console.log(leftPokemonName);
                        let leftPokemonSprite = json.sprites["front_default"];
                        //console.log(leftPokemonSprite);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
                        document.getElementById("leftPokemonPic").src = leftPokemonSprite;
                        document.getElementById("pokemonName1").innerText = leftPokemonName;
                        //leftPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
                        //document.getElementById("pokemonLevel1").innerText = "Level: " + leftPokemonLevel;
                    })
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
                //console.log(json);
                let leftPokemonList = json.pokemon;
                randomLeftPokemon = leftPokemonList[Math.floor(Math.random() * leftPokemonList.length)];
                //console.log(randomLeftPokemon);
                //console.log(typeof randomLeftPokemon);
                randomLeftID = randomLeftPokemon.pokemon.url;
                //console.log(randomLeftID);
                //displayResults(json);
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
                apiURL = randomLeftID.slice(26);
                //console.log(apiURL);
                indLeftURL = baseURL + apiURL;
                //console.log(indLeftURL);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
                fetch(indLeftURL)
                    .then(function(result){
                        return result.json();
                    })
                    .then(function(json){
                        //console.log(json);
// DISPLAYING LEFT POKEMON 
                        let leftPokemonName = json.name;
                        //console.log(leftPokemonName);
                        let leftPokemonSprite = json.sprites["front_default"];
                        //console.log(leftPokemonSprite);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
                        document.getElementById("leftPokemonPic").src = leftPokemonSprite;
                        document.getElementById("pokemonName1").innerText = leftPokemonName;
                        //leftPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
                        //document.getElementById("pokemonLevel1").innerText = "Level: " + leftPokemonLevel;
                    })
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
                    //console.log(json);
                    let rightPokemonList = json.pokemon;
                    randomRightPokemon = rightPokemonList[Math.floor(Math.random() * rightPokemonList.length)];
                    //console.log(randomRightPokemon);
                    //console.log(typeof randomRightPokemon);
                    randomRightID = randomRightPokemon.pokemon.url;
                    //console.log(randomRightID);
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
                    apiURL = randomRightID.slice(26);
                    //console.log(apiURL);
                    indRightURL = baseURL + apiURL;
                    //console.log(indLeftURL);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
                    fetch(indRightURL)
                        .then(function(result){
                            return result.json();
                        })
                        .then(function(json){
                            //console.log(json);
// DISPLAYING RIGHT POKEMON 
                            let rightPokemonName = json.name;
                            //console.log(rightPokemonName);
                            let rightPokemonSprite = json.sprites["front_default"];
                            //console.log(rightPokemonSprite);    
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
                            document.getElementById("rightPokemonPic").src = rightPokemonSprite;
                            document.getElementById("pokemonName2").innerText = rightPokemonName;
                            //rightPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
                            //document.getElementById("pokemonLevel2").innerText = "Level: " + rightPokemonLevel;           
                        })
                .catch(err => {
                    console.log(err, "No Pokemon came out to play!")
                 })    
    
        }) 
    } else if(pokemonType2 == "Water"){
// FETCHING RESULTS FROM API
            fetch(waterTypeURL)
                .then(function(result) { 
                    return result.json(); 
                }) 
                .then(function(json){
                    //console.log(json);
                    let rightPokemonList = json.pokemon;
                    randomRightPokemon = rightPokemonList[Math.floor(Math.random() * rightPokemonList.length)];
                    //console.log(randomRightPokemon);
                    //console.log(typeof randomRightPokemon);
                    randomRightID = randomRightPokemon.pokemon.url;
                    //console.log(randomRightID);
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
                    apiURL = randomRightID.slice(26);
                    //console.log(apiURL);
                    indRightURL = baseURL + apiURL;
                    //console.log(indLeftURL);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
                    fetch(indRightURL)
                        .then(function(result){
                            return result.json();
                        })
                        .then(function(json){
                            //console.log(json);
// DISPLAYING RIGHT POKEMON 
                            let rightPokemonName = json.name;
                            //console.log(rightPokemonName);
                            let rightPokemonSprite = json.sprites["front_default"];
                            //console.log(rightPokemonSprite);   
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
                            document.getElementById("rightPokemonPic").src = rightPokemonSprite;
                            document.getElementById("pokemonName2").innerText = rightPokemonName;
                            //rightPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
                            //document.getElementById("pokemonLevel2").innerText = "Level: " + rightPokemonLevel;                 
                        })
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
                    //console.log(json);
                    let rightPokemonList = json.pokemon;
                    randomRightPokemon = rightPokemonList[Math.floor(Math.random() * rightPokemonList.length)];
                    //console.log(randomRightPokemon);
                    //console.log(typeof randomRightPokemon);
                    randomRightID = randomRightPokemon.pokemon.url;
                    //console.log(randomRightID);
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
                    apiURL = randomRightID.slice(26);
                    //console.log(apiURL);
                    indRightURL = baseURL + apiURL;
                    //console.log(indLeftURL);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
                    fetch(indRightURL)
                        .then(function(result){
                            return result.json();
                        })
                        .then(function(json){
                            //console.log(json);
// DISPLAYING RIGHT POKEMON 
                            let rightPokemonName = json.name;
                            //console.log(rightPokemonName);
                            let rightPokemonSprite = json.sprites["front_default"];
                            //console.log(rightPokemonSprite); 
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
                            document.getElementById("rightPokemonPic").src = rightPokemonSprite;
                            document.getElementById("pokemonName2").innerText = rightPokemonName;
                            //rightPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
                            //document.getElementById("pokemonLevel2").innerText = "Level: " + rightPokemonLevel;                    
                        })
                })
                .catch(err => {
                    console.log(err, "No Pokemon came out to play!")
                })  
        }

// RETURNING THE RANDOMLY CHOSEN TYPES OUT OF THE FUNCTION
return [pokemonType1, pokemonType2];
}

displayResults();

console.log(displayResults());

//let finalLeftPokemon = displayResults().pokemonType1;
//let finalRightPokemon = displayResults().pokemonType2;
//console.log(finalLeftPokemon);
//console.log(finalRightPokemon);


// SETTING THE RANDOM POKEMON LEVELS
// LEFT
leftPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
document.getElementById("pokemonLevel1").innerText = "Level: " + leftPokemonLevel;

// RIGHT
rightPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
document.getElementById("pokemonLevel2").innerText = "Level: " + rightPokemonLevel; 


/*
// BATTLE FUNCTION TIED TO THE BUTTON
// fire = 0, water = 1, grass = 2
function pokemonBattle() {
    if(finalLeftPokemon == 0 && finalRightPokemon == 1){
        //right wins (water wins)
    } else if(finalLeftPokemon == 0 && finalRightPokemon == 2){
        //left wins (fire wins)
    } else if(finalLeftPokemon == 0 && finallRightPokemon == 0){
        if(leftPokemonLevel > rightPokemonLevel){
            //left wins
        } else if(leftPokemonLevel == rightPokemonLevel){
            //right wins
        } else {
            //try again message!
        }
    } else if(finalLeftPokemon == 1 && finalRightPokemon == 0){
        //left wins (water wins)
    } else if(finalLeftPokemon == 1 && finalRightPokemon == 1){
        if(leftPokemonLevel > rightPokemonLevel){
            //left wins
        } else if(leftPokemonLevel == rightPokemonLevel){
            //right wins
        } else {
            //try again message!
        }
    } else if(finalLeftPokemon == 1 && finalRightPokemon == 2){
        //right wins (grass wins)
    } else if(finalLeftPokemon == 2 && finalRightPokemon == 0){
        //right wins (fire wins)
    } else if(finalLeftPokemon == 2 && finalRightPokemon == 1){
        //left wins (grass wins)
    } else if(finalLeftPokemon == 2 && finalRightPokemon ==2){
        if(leftPokemonLevel > rightPokemonLevel){
            //left wins
        } else if(leftPokemonLevel == rightPokemonLevel){
            //right wins
        } else {
            //try again message!
        }
    }
}
*/
