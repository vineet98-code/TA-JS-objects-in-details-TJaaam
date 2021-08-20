class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.name} is eating. and age is ${this.age}`); 
    }
    sleep(){
        console.log(`${this.name} is sleeping. and age is ${this.age}`);
    }
    walk(){
        console.log(`${this.name} is walking. and age is ${this.age}`);
    }
};
class Player extends Person{
    constructor(sportsName, name, age, gender){
        super(name,age,gender)
        this.sportsName = sportsName;
    }
    play(){
        console.log(`${this.name} is playing. and age is ${this.age}`);  
    }
};

class Cricketer extends Player{
    constructor(teamName,name, age, gender, sportsName){
        super(sportsName, name, age, gender);
        this.teamName = teamName;
    }
    playCricket(){
        console.log(`${this.name} is playing. and age is ${this.age}`); 
    }
};


class Teacher extends Person{
    constructor(instituteName, name, age, gender){
        super(name,age,gender)
        this.instituteName = instituteName;
    }
    teach(){
        console.log(`${this.name} is teaching. and age is ${this.age}. She ia ${this.gender}`); 
    }
};
class Artist extends Person{
    constructor(kind, name, age, gender){
        super(name,age,gender);

        this.kind = kind;
    }
    createArt(){
        console.log(`${this.name} is an artists. and is ${this.age}. She is ${this.gender}`);
    }
};

let person1 = new Person('vinee', 22, 'male');

let artist1 = new Artist('kindHearted', 'patty', 34, 'female');



