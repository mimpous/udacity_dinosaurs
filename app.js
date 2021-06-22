 
const btn = document.getElementById("btn");
const grid = document.getElementById("grid");

const dinosData = async () => { 
    const response = await fetch("dino.json");
   
    const data = await response.json(); 
    return data.Dinos;
};


// Create Dino Constructor

class Dino {
    constructor(  species, weight, height, diet, where, when, fact, type) {
      
        this.image =   "./images/" + species.toLowerCase() + ".png";
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.type = type;
    }
}
// Create Dino Objects
const dinosaurs = [];

dinosData().then(data => {
    const dinos = data;
    dinos.forEach((dino) => {
        const dinosObject = new Dino( 
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact,
            dino.type = 'dino'
           
        ); 
        dinosaurs.push(dinosObject);
    });
}); 
 
  
// Create Human Object
const human = {
    image:'./images/human.png',
    species: 'Human'
};

 

/**
 * @description - Validates the form
 * @returns {boolean} - Checks for missing fields
 */
 function validateForm() {
    let name = document.getElementById("name");
    let feet = document.getElementById("feet");
    let inches = document.getElementById("inches");
    let weight = document.getElementById("weight");

    if (name.value === "") {
        alert("Please enter a name!");
        name.focus();
        return false;
    }

    if (feet.value === "") {
        alert("Please enter feet value!");
        feet.focus();
        return false;
    }

    if (inches.value === "") {
        alert("Please enter inches value!");
        inches.focus();
        return false;
    }

    if (weight.value === "") {
        alert("Please enter a weight!");
        weight.focus();
        return false;
    }

    return true;
}


// Use IIFE to get human data from form
function getValuesFromForm() {
    human.species = document.getElementById("name").value;
    human.weight = document.getElementById("weight").value;
    human.height = document.getElementById("feet").value * 12 + document.getElementById("inches").value;
    human.diet = document.getElementById("diet").value;
    return true;
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareHeight = ( dinoObj ) => {
    const humanHeight = human.height;
    const dinosaurHeight = dinoObj.height;
    if(humanHeight == dinosaurHeight) {
        return `${dinoObj.height} had the same height as you.`
    } else if ( humanHeight > dinosaurHeight ) {
        return `You are taler than ${dinoObj.species} .!`
    } else {
        return `You are shorter than ${dinoObj.species} .!`
    }

};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareDiet = ( dinoObj ) => {
    const humanDiet = human.diet.toLowerCase();
    const dinosaurDiet = dinoObj.diet.toLowerCase();

    console.log(dinoObj.type);

    if ( dinoObj.type==='human') {
        return '';
    }
     
    if(humanDiet == dinosaurDiet) {
        return `${dinoObj.species} had the same diet as you. You are both ${human.diet}.!`
    } else {
        return `Contrary to you, ${dinoObj.species} was a ${dinoObj.diet}.!`
    }
};

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareWeight = ( dinoObj ) => {
    const humanWeight = human.weight;
    const dinosaurWeight = dinoObj.weight;
    if(humanWeight == dinosaurWeight) {
        return `${dinoObj.weight} had the same weight as you. You are both weight ${human.weight}.!`
    } else if ( humanWeight > dinosaurWeight ) {
        return `You weight more than ${dinoObj.species} .!`
    } else {
        return `You   weight less than ${dinoObj.species} .!`
    }

};

// Generate Tiles for each Dino in Array

// Add tiles to DOM
function addTilesToDOM() {
   
    
    const dinoPart1 = dinosaurs.slice(0, 4);
    const dinoPart2 = dinosaurs.slice(4, 8);
    //for comparison reasons
    human.type = 'human';
    const dinoHuman = dinoPart1.concat(human, dinoPart2);
  
    
    dinoHuman.forEach( (item) => {
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const div = document.createElement("div");
        
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(img);
         
        //Add the right styling
        grid.appendChild(div).className = "grid-item"; 
        h3.textContent = item.species;
        p.textContent = compareDiet(item); 
        
        img.src = item.image; 
    
    }  );
 
    //add human object to dom


}
 
 

// Remove form from screen
const removeForm = () => document.getElementById("dino-compare").style.display = "none";



// On button click, prepare and display infographic
btn.addEventListener('click',  function() {
    // wait dinosData complete
   // const dinos = await dinosData();
    // do something with dinos 
    if (validateForm()) {

        getValuesFromForm();

        //TODO MAKE MATH TILES 
        addTilesToDOM();
  
        removeForm();
    }
});
  