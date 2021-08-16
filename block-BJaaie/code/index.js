class Animal {
  constructor(location, numberOfLegs){
      this.location = location;
      this.numberOfLegs = numberOfLegs;
  }
  eat(){
      console.log(`I live in ${location} and I can eat`);
  }
  changeLocation(newLocation){
      this.location = newLocation;
      return this.location;
  }
  summary(){
      return  `I live in ${location} and I have ${numberOfLegs}`;
  }
}  

class Dog extends Animals {
    constructor(name, color){
        super(name, color);

        this.name = name;
        this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(newName){
        this.newName = newName;
        return this.newName;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
} 
class Cat extends Animal {
    constructor(name,colorOfEyes) {
        super(name, colorOfEyes);

        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
    }
    changeName(newName){
        this.newName = newName;
        return this.newName;
    }
    changeColorOfEyes(newColor){
        this.newName = newName;
        return this.newName;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }

}




