const dinoArray = [];
let data;

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

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'dino.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

    function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        json = JSON.parse(response);
    });
    data = json.Dinos;
}

// data.forEach(element => {
//             let dinoElement = element;
//             dinoArray.push(
//                    new Dino( dinoElement.species.toLowerCase(), dinoElement.species , dinoElement.weight ,dinoElement.height ,dinoElement.diet,
//                     dinoElement.where,dinoElement.when,dinoElement.fact )   );

//  });

//init();


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

function Human(image, species, weight, height, diet) {
    this.image = image;
    this.species = species;
    this.weight = weight;
    Object.assign(this, height);
    this.diet = diet;
}

/* Create Human Object */
let human = new Human(
    "images/human.png",
    "",
    0,
    0,
    ""
);

// Use IIFE to get human data from form
function getValuesFromForm() {
    human.species = document.getElementById("name").value;
    human.weight = document.getElementById("weight").value;
    human.feet = document.getElementById("feet").value;
    human.inches = document.getElementById("inches").value;
    human.diet = document.getElementById("diet").value;
    return true;
}




// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

// Add tiles to DOM
function addTilesToDOM() {

    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const div = document.createElement("div");

    //Add elements to the DOM
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);

    //Add the right styling
    grid.appendChild(div).className = "grid-item1";
    h3.textContent = 'this is a title';
    p.textContent = "dinosaurs are cool";
    img.src =  "./images/human.png";
}

// Remove form from screen

const removeForm = () => document.getElementById("dino-compare").style.display = "none";

// On button click, prepare and display infographic
document.getElementById("btn").onclick = function () {
    if (validateForm()) {
        getValuesFromForm();

        addTilesToDOM();

        //console.log( myFunction );
        // alert(2)
        removeForm();
        // addTiles();
    }
}