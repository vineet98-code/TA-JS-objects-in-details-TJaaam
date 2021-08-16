// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

function animals(location, numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

let animalMethods = {
    eat: function(){
        
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary: function(){   
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

let animal1 = animals('india', 4);

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`


function dogs(name, color){
    let dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}

let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){   
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    },
}

let dog1 = dogs('labra', 'black');


// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`


function cats(name, colorOfEyes){
    let cat = Object.create(catMethods);
    cat.name = name;
    cat.color = colorOfEyes;
    return cat;
}

let catMethods = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){   
        return `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`;
    }
}

let cat1 = cats('pochi', 'red');