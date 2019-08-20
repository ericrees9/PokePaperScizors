const baseURL = "https://pokeapi.co/api/v2/" 
const fireTypeURL = baseURL + "type/fire/"
const waterTypeURL = baseURL + "type/water/" // *NOTE* if we want both arrays of water/grass pokemon we can assign another random number after it has been assigned a type, then build the URL based on if that URL is greater than 100, pointing us in the direction of the second array
const grassTypeURL = baseURL + "type/grass/"
let imgFallBack1 = document.getElementById("leftPokemonPic");
let imgFallBack2 = document.getElementById("rightPokemonPic");
let nameArr = [];
//let leftName = nameArr[0];
//let rightName = nameArr[1];
//let winningSprite;
let url;

//////////////////////////////////////////////////////
/////////////// RUNNING THE FUNCTIONS ////////////////
//////////////////////////////////////////////////////

rngRight();
rngLeft();

//////////////////////////////////////////////////////
////////// RNG DECIDING WHICH TYPE IS WHICH //////////
//////////////////////////////////////////////////////

// RNG DECIDING POKEMON TYPE FOR LEFT POSITION
function rngLeft() {
    typeArray1 = ["Fire", "Water", "Grass"];
    randomType1 = Math.floor(Math.random() * (+3 - +0)) + +0;
    //console.log(randomType1);
    pokemonType1 = typeArray1[randomType1];
    //console.log(pokemonType1);
        if(pokemonType1 == 'Fire'){
            console.log('pokemonType1 is Fire')
            fireList1();
        } else if(pokemonType1 == 'Water'){
            console.log('pokemonType1 is Water')
            waterList1();
        } else if(pokemonType1 == 'Grass'){
            console.log('pokemonType1 is Grass')
            grassList1();
        };
    return pokemonType1;
};
//console.log(rngLeft());

// RNG DECIDING POKEMON TYPE FOR RIGHT POSITION
function rngRight() {
    typeArray2 = ["Fire", "Water", "Grass"];
    randomType2 = Math.floor(Math.random() * (+3 - +0)) + +0;
    //console.log(randomType1);
    pokemonType2 = typeArray2[randomType2];
    //console.log(pokemonType1);
        if(pokemonType2 == 'Fire'){
            console.log('pokemonType2 is Fire')
            fireList2();
        } else if(pokemonType2 == 'Water'){
            console.log('pokemonType2 is Water')
            waterList2();
        } else if(pokemonType2 == 'Grass'){
            console.log('pokemonType2 is Grass')
            grassList2();
        };
    return pokemonType2;
};
//console.log(rngRight());

//////////////////////////////////////////////////////
///////// API CALLING FOR POKEMON (LEFT) TYPE ////////
//////////////////////////////////////////////////////

function fireList1(){
    //console.log('firelist1 hit')
    fetch(fireTypeURL)
        .then(function(result){ 
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
            fireInd1 = baseURL + apiURL;
            //console.log(fireInd1);
            fireLeftInd(fireInd1);
        })
        .catch(err => {
            console.log(err, "No Pokemon came out to play!")
        })
    //console.log(fireInd1);    
    //return fireInd1
};
//console.log(fireList1());

function waterList1(){
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
            waterInd1 = baseURL + apiURL;
            //console.log(waterInd1);
            waterLeftInd(waterInd1);
        })
        .catch(err => {
            console.log(err, "No Pokemon came out to play!")
        });
    //console.log(waterInd1); 
    //return waterInd1;
};
//console.log(waterList1());

function grassList1(){
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
                grassInd1 = baseURL + apiURL;
                //console.log(grassInd1);
                grassLeftInd(grassInd1);
            })
            .catch(err => {
                console.log(err, "No Pokemon came out to play!")
            });
    //console.log(grassInd1); 
    //return grassInd1;
};
//console.log(grassList1());

//////////////////////////////////////////////////////
///////// API CALLING FOR POKEMON (RIGHT) TYPE ///////
//////////////////////////////////////////////////////

function fireList2(){
    //console.log('firelist2 hit')
    fetch(fireTypeURL)
        .then(function(result){ 
            return result.json(); 
        }) 
        .then(function(json){ 
            //console.log(json);
            let rightPokemonList = json.pokemon;
            randomRightPokemon = rightPokemonList[Math.floor(Math.random() * rightPokemonList.length)];
            //console.log(randomLeftPokemon);
            //console.log(typeof randomLeftPokemon);
            randomRightID = randomRightPokemon.pokemon.url;
            //console.log(randomLeftID);
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
            apiURL = randomRightID.slice(26);
            //console.log(apiURL);
            fireInd2 = baseURL + apiURL;
            //console.log(fireInd1);
            fireRightInd(fireInd2);
        })
        .catch(err => {
            console.log(err, "No Pokemon came out to play!")
        })
    //console.log(fireInd2);    
    //return fireInd2
};
//console.log(fireList2());

function waterList2(){
    fetch(waterTypeURL)
        .then(function(result) { 
            return result.json(); 
        }) 
        .then(function(json){
            //console.log(json);
            let rightPokemonList = json.pokemon;
            randomRightPokemon = rightPokemonList[Math.floor(Math.random() * rightPokemonList.length)];
            //console.log(randomLeftPokemon);
            //console.log(typeof randomLeftPokemon);
            randomRightID = randomRightPokemon.pokemon.url;
            //console.log(randomLeftID);
            //displayResults(json);
            //console.log(json.pokemon[132]) - Trying to figure out a way to include both pages of the pokemon type array
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
            apiURL = randomRightID.slice(26);
            //console.log(apiURL);
            waterInd2 = baseURL + apiURL;
            //console.log(waterInd1);
            waterRightInd(waterInd2);
        })
        .catch(err => {
            console.log(err, "No Pokemon came out to play!")
        });
    //console.log(waterInd2); 
    //return waterInd2;
};
//console.log(waterList2());

function grassList2(){
    fetch(grassTypeURL)
            .then(function(result) { 
                return result.json(); 
            }) 
            .then(function(json){
                //console.log(json);
                let rightPokemonList = json.pokemon;
                randomRightPokemon = rightPokemonList[Math.floor(Math.random() * rightPokemonList.length)];
                //console.log(randomLeftPokemon);
                //console.log(typeof randomLeftPokemon);
                randomRightID = randomRightPokemon.pokemon.url;
                //console.log(randomLeftID);
                //displayResults(json);
// DYNAMICALLY BUILDING URL FOR RNGPOKEMON REQUEST
                apiURL = randomRightID.slice(26);
                //console.log(apiURL);
                grassInd2 = baseURL + apiURL;
                //console.log(grassInd2);
                grassRightInd(grassInd2);
            })
            .catch(err => {
                console.log(err, "No Pokemon came out to play!")
            });
    //console.log(grassInd2); 
    //return grassInd2;
};
//console.log(grassList2());

//////////////////////////////////////////////////////
////// API CALLING FOR INDIVIDUAL (LEFT) POKEMON /////
//////////////////////////////////////////////////////

function fireLeftInd(fireInd1) {
    //console.log(fireInd1);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
    fetch(fireInd1)
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
        //let leftPokemonTypeReturn = json.types[0]["type"]["name"];
        //console.log(leftPokemonTypeReturn);
        let leftMoveList = json.moves;
        //console.log(leftMoveList);
        moveLeft = leftMoveList[Math.floor(Math.random() * leftMoveList.length)];
        //console.log(moveLeft);
        let moveLeftFinal = moveLeft.move.name;
        //console.log(moveLeftFinal);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
        document.getElementById("leftPokemonPic").src = leftPokemonSprite;
        document.getElementById("pokemonName1").innerText = leftPokemonName;
        document.getElementById("pokemonType1").innerText = "Fire Type";
        document.getElementById("leftMove").innerText = leftPokemonName + " used " + moveLeftFinal + "!";
        nameArr.unshift(leftPokemonName);
    });
}

function waterLeftInd(waterInd1) {
    //console.log(fireInd1);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
    fetch(waterInd1)
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
        imgFallBack1.addEventListener("error", missingNo());
        imgFallBack2.addEventListener("error", missingNo());
        //let leftPokemonTypeReturn = json.types[0]["type"]["name"];
        //console.log(leftPokemonTypeReturn);
        let leftMoveList = json.moves;
        moveLeft = leftMoveList[Math.floor(Math.random() * leftMoveList.length)];
        //console.log(moveLeft);
        let moveLeftFinal = moveLeft.move.name;
        //console.log(moveLeftFinal);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
        document.getElementById("leftPokemonPic").src = leftPokemonSprite;
        document.getElementById("pokemonName1").innerText = leftPokemonName;
        document.getElementById("pokemonType1").innerText = "Water Type";
        document.getElementById("leftMove").innerText = leftPokemonName + " used " + moveLeftFinal + "!";
        nameArr.unshift(leftPokemonName);
    });
}

function grassLeftInd(grassInd1) {
    //console.log(fireInd1);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
    fetch(grassInd1)
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
        //let leftPokemonTypeReturn = json.types[0]["type"]["name"];
        //console.log(leftPokemonTypeReturn);
        let leftMoveList = json.moves;
        moveLeft = leftMoveList[Math.floor(Math.random() * leftMoveList.length)];
        //console.log(moveLeft);
        let moveLeftFinal = moveLeft.move.name;
        //console.log(moveLeftFinal);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
        document.getElementById("leftPokemonPic").src = leftPokemonSprite;
        document.getElementById("pokemonName1").innerText = leftPokemonName;
        document.getElementById("pokemonType1").innerText = "Grass Type";
        document.getElementById("leftMove").innerText = leftPokemonName + " used " + moveLeftFinal + "!";
        nameArr.unshift(leftPokemonName);
    });
};

//////////////////////////////////////////////////////
///// API CALLING FOR INDIVIDUAL (RIGHT) POKEMON /////
//////////////////////////////////////////////////////

function fireRightInd(fireInd2) {
    //console.log(fireInd2);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
    fetch(fireInd2)
        .then(function(result){
            return result.json();
        })
        .then(function(json){
            console.log(json);
// DISPLAYING RIGHT POKEMON 
        let rightPokemonName = json.name;
        //console.log(leftPokemonName);
        let rightPokemonSprite = json.sprites["front_default"];
        //console.log(leftPokemonSprite);
        //let leftPokemonTypeReturn = json.types[0]["type"]["name"];
        //console.log(leftPokemonTypeReturn);
        let rightMoveList = json.moves;
        moveRight = rightMoveList[Math.floor(Math.random() * rightMoveList.length)];
        //console.log(moveRight);
        let moveRightFinal = moveRight.move.name;
        //console.log(moveRightFinal);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
        document.getElementById("rightPokemonPic").src = rightPokemonSprite;
        document.getElementById("pokemonName2").innerText = rightPokemonName;
        document.getElementById("pokemonType2").innerText = "Fire Type";
        document.getElementById("rightMove").innerText = rightPokemonName + " used " + moveRightFinal + "!";
        nameArr.push(rightPokemonName);
    });
};

function waterRightInd(waterInd2) {
    //console.log(waterInd2);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
    fetch(waterInd2)
        .then(function(result){
            return result.json();
        })
        .then(function(json){
            console.log(json);
// DISPLAYING RIGHT POKEMON 
        let rightPokemonName = json.name;
        //console.log(leftPokemonName);
        let rightPokemonSprite = json.sprites["front_default"];
        //console.log(leftPokemonSprite);
        //let leftPokemonTypeReturn = json.types[0]["type"]["name"];
        //console.log(leftPokemonTypeReturn);
        let rightMoveList = json.moves;
        moveRight = rightMoveList[Math.floor(Math.random() * rightMoveList.length)];
        //console.log(moveRight);
        let moveRightFinal = moveRight.move.name;
        //console.log(moveRightFinal);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
        document.getElementById("rightPokemonPic").src = rightPokemonSprite;
        document.getElementById("pokemonName2").innerText = rightPokemonName;
        document.getElementById("pokemonType2").innerText = "Water Type";
        document.getElementById("rightMove").innerText = rightPokemonName + " used " + moveRightFinal + "!";
        nameArr.push(rightPokemonName);
    });
};

function grassRightInd(grassInd2) {
    //console.log(grassInd2);
// FETCHING INDIVIDUAL RNGPOKEMON DATA FROM API
    fetch(grassInd2)
        .then(function(result){
            return result.json();
        })
        .then(function(json){
            console.log(json);
// DISPLAYING RIGHT POKEMON 
        let rightPokemonName = json.name;
        //console.log(leftPokemonName);
        let rightPokemonSprite = json.sprites["front_default"];
        //console.log(leftPokemonSprite);
        //let leftPokemonTypeReturn = json.types[0]["type"]["name"];
        //console.log(leftPokemonTypeReturn);
        let rightMoveList = json.moves;
        moveRight = rightMoveList[Math.floor(Math.random() * rightMoveList.length)];
        //console.log(moveRight);
        let moveRightFinal = moveRight.move.name;
        //console.log(moveRightFinal);
// ASSIGNING API DATA TO HTML ELEMENTS THROUGH DOM                        
        document.getElementById("rightPokemonPic").src = rightPokemonSprite;
        document.getElementById("pokemonName2").innerText = rightPokemonName;
        document.getElementById("pokemonType2").innerText = "Grass Type";
        document.getElementById("rightMove").innerText = rightPokemonName + " used " + moveRightFinal + "!";
        nameArr.push(rightPokemonName);
    });
};

//////////////////////////////////////////////////////
/////////// RNG SETTING THE POKEMON LEVELS ///////////
//////////////////////////////////////////////////////

// LEFT
leftPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
document.getElementById("pokemonLevel1").innerText = "Level: " + leftPokemonLevel;

// RIGHT
rightPokemonLevel = Math.floor(Math.random() * (+100 - +0)) + +0;
document.getElementById("pokemonLevel2").innerText = "Level: " + rightPokemonLevel; 


//////////////////////////////////////////////////////
////////// CHECKING THE NECESSARY VARIABLES //////////
//////////////////////////////////////////////////////

//console.log(pokemonType1);
//console.log(pokemonType2);

//////////////////////////////////////////////////////
/////////////// ~* BATTLE BUTTON *~ //////////////////
//////////////////////////////////////////////////////

const battleButton = document.querySelector("#battleButton");

// EVENT LISTENERS FOR VARIOUS FUNCTIONS
battleButton.addEventListener("click", pokemonBattle); 

// BATTLE FUNCTION TIED TO THE BUTTON
// fire = 0, water = 1, grass = 2
function pokemonBattle() {
    if(pokemonType1 == "Fire" && pokemonType2 == "Grass"){
            document.getElementById("dialogBox").innerText = `${pokemonType1} type beats ${pokemonType2} type! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
        //window.prompt("Fire beats Grass!");
    } else if(pokemonType1 == "Fire" && pokemonType2 == "Water"){
            document.getElementById("dialogBox").innerText = `${pokemonType2} type beats ${pokemonType1} type! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
        //window.prompt("Water beats Fire!");
    } else if(pokemonType1 == "Fire" && pokemonType2 == "Fire"){
        if(leftPokemonLevel > rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `What a fantastic show of flames! Since it's fire versus fire, level ${leftPokemonLevel} beats level ${rightPokemonLevel}! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Winner Left! Higher level wins!");
        } else if(leftPokemonLevel < rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `What a fantastic show of flames! Since it's fire versus fire, level ${rightPokemonLevel} beats level ${leftPokemonLevel}! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Winner Right! Higher level wins!");
        } else if(leftPokemonLevel == rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `Both Pokémon are unable to battle! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Tie game! Try again!");
        }
    } else if(pokemonType1 == "Water" && pokemonType2 == "Fire"){
            document.getElementById("dialogBox").innerText = `${pokemonType1} beats ${pokemonType2}! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Water beats Fire!");
    } else if(pokemonType1 == "Water" && pokemonType2 == "Grass"){
            document.getElementById("dialogBox").innerText = `${pokemonType2} beats ${pokemonType1}! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Grass beats Water!");
    } else if(pokemonType1 == "Water" && pokemonType2 == "Water"){
        if(leftPokemonLevel > rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `Watch those waves! Since it's water versus water, level ${leftPokemonLevel} beats level ${rightPokemonLevel}! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Winner Left! Higher level wins!");
        } else if(leftPokemonLevel < rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `Watch those waves! Since it's water versus water, level ${rightPokemonLevel} beats level ${leftPokemonLevel}! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Winner Right! Higher level wins!");
        } else if(leftPokemonLevel == rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `Both Pokémon are unable to battle! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Tie game! Try again!");
        }
    } else if(pokemonType1 == "Grass" && pokemonType2 == "Water"){
            document.getElementById("dialogBox").innerText = `${pokemonType1} type beats ${pokemonType2} type! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();   
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom"; 
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Grass beats Water!");
    } else if(pokemonType1 == "Grass" && pokemonType2 == "Fire"){
            document.getElementById("dialogBox").innerText = `${pokemonType2} type beats ${pokemonType1} type! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Fire beats Grass!");
    } else if(pokemonType1 == "Grass" && pokemonType2 == "Grass"){
        if(leftPokemonLevel > rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `The greatest grass Pokémon grow to the occasion! Since it's grass versus grass, level ${leftPokemonLevel} beats level ${rightPokemonLevel}! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Winner Left! Higher level wins!");
        } else if(leftPokemonLevel < rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `The greatest grass Pokémon grow to the occasion! Since it's grass versus grass, level ${rightPokemonLevel} beats ${leftPokemonLevel}! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "bounce";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "top";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Winner Right! Higher level wins!");
        } else if(leftPokemonLevel == rightPokemonLevel){
            document.getElementById("dialogBox").innerText = `Both Pokémon are unable to battle! Refresh to battle again!`;
            document.getElementById("myDialog").showModal();
            document.getElementById("leftPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("leftPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("rightPokemonPic").style.WebkitAnimationName = "squish";
            document.getElementById("rightPokemonPic").style.webkitTransformOrigin = "bottom";
            document.getElementById("leftMove").style.visibility = "visible";
            document.getElementById("rightMove").style.visibility = "visible";
            //window.prompt("Tie game! Try again!");
        }
    }
}

//console.log(nameArr);
//console.log(nameArr[1]);
//console.log(nameArr instanceof Array);