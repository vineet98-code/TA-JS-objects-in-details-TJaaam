class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${name} is eating. and age is ${age}`); 
    }
    sleep(){
        console.log(`${name} is sleeping. and age is ${age}`);
    }
    walk(){
        console.log(`${name} is walking. and age is ${age}`);
    }
};
class Player extends Person{
    constructor(sportsName){
        super(name,age,gender)
        this.sportsName = sportsName;
    }
    play(){
        console.log(`${name} is playing. and age is ${age}`);  
    }
};
class Cricketer extends Players{
    constructor(teamName){
        super(sportsName);
        this.teamName = teamName;
    }
    playCricket(){
    }
};


class Teacher extends Person{
    constructor(instituteName){
        super(name,age,gender)
        this.instituteName = instituteName;
    }
    teach(){
        console.log(`${name} is teaching. and age is ${age}. She ia ${gender}`); 
    }
};
class Artist extends Person{
    constructor(kind){
        super(name,age,gender)
        this.kind = kind;
    }
    createArt(){
        console.log(`${name} is an artists. and age is ${age}. She ia ${gender}`);
    }
};


