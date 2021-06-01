import * as myModule from '/dino.json';


const data = [
    {
        species: "Triceratops",
        weight: 13000,
        height: 114,
        diet: "herbavor",
        where: "North America",
        when: "Late Cretaceous",
        fact: "First discovered in 1889 by Othniel Charles Marsh",
    },
    {
        species: "Tyrannosaurus Rex",
        weight: 11905,
        height: 144,
        diet: "carnivor",
        where: "North America",
        when: "Late Cretaceous",
        fact: "The largest known skull measures in at 5 feet long.",
    }
];

var mydata = JSON.parse(myModule.Dinos);


// Create Dino Constructor

function Dino(image, species, weight, height, diet, where, when, fact) {
    this.image =image;
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}
// Create Dino Objects
const dinos = [];
data.map((dino) => {
    dinos.push(
        new Dino(
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact
        )
    );
});


// Create Human Object

// Use IIFE to get human data from form


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic

document.getElementById("btn").onclick = function () {
   // console.log(data);

console.log(mydata);
}