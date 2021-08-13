// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// - [ ] Using function to create object
// function User(name,id, noOfProjects){
//     let user = {};
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;

//     user.getProjects = function() {
//         this.noOfProjects = noOfProjects;
//         return this.noOfProjects;
//     } 
//     user.changeName = function(newName) {
//         this.newName = newName;
//         return this.newName;
//     }
//     user.incrementProject = function(value = 1){
//         this.noOfProjects = this.noOfProjects + 1
//         return this.noOfProjects;
//     }
//     user.decrementProject = function(value = 1) {
//         this.noOfProjects = this.noOfProjects - 1
//         return this.noOfProjects;
//     }
//      return user;
// }

// let user = User('Jordan', 1234, 2);

// console.log(user.name);
// console.log(user.id);
// console.log(user.noOfProjects);
// console.log(user.getProjects());
// console.log(user.changeName('Vinee'));
// console.log(user.incrementProject());
// console.log(user.decrementProject());



// - [ ] Using Object.create (prototypal pattern)

// function user(name,id, noOfProjects){
//     let user = Object.create(userMethod);
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;
//     return user;
// }    
// let userMethod  = {
    
//     getProjects : function() {
//         this.noOfProjects = noOfProjects;
//         return this.noOfProjects;
//     }, 
//     changeName : function(newName) {
//         this.newName = newName;
//         return this.newName;
//     },
//     incrementProject : function(value = 1){
//         this.noOfProjects = this.noOfProjects + 1
//         return this.noOfProjects;
//     },
//     decrementProject : function(value = 1) {
//         this.noOfProjects = this.noOfProjects - 1
//         return this.noOfProjects;
//     }
// };

// let user1 = user('Jordan', 1234, 2);

// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.noOfProjects);
// console.log(user1.getProjects);
// console.log(user1.changeName('Vinee'));
// console.log(user1.incrementProject());
// console.log(user1.decrementProject());

// - [ ] Using Pseudoclassical Way

// new keyword - Create a new object, Return the newly created object, Put all the methods present in the 
// prototype of function
// function User(name,id, noOfProjects){
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
// }    
// User.prototype  = {
    
//     getProjects : function() {
//       this.noOfProjects = noOfProjects;
//       return this.noOfProjects;
//     }, 
//     changeName : function(newName) {
//         this.newName = newName;
//         return this.newName;
//     },
//     incrementProject : function(value = 1){
//         this.noOfProjects = this.noOfProjects + 1
//         return this.noOfProjects;
//     },
//     decrementProject : function(value = 1) {
//         this.noOfProjects = this.noOfProjects - 1
//         return this.noOfProjects;
//     }
// };

// let user1 = new User('Jordan', 1234, 2);

// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.noOfProjects);
// console.log(user1.getProjects);
// console.log(user1.changeName('Vinee'));
// console.log(user1.incrementProject());
// console.log(user1.decrementProject());

// - [ ] Using Class

class User {
    constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    }
    
    getProjects() {
    //   this.noOfProjects = noOfProjects;
      return this.noOfProjects;
    }
    changeName(newName) {
        this.newName = newName;
        return this.newName;
    }
    incrementProject(value = 1){
        this.noOfProjects = this.noOfProjects + 1
        return this.noOfProjects;
    }
    decrementProject() {
        this.noOfProjects = this.noOfProjects - 1
        return this.noOfProjects;
    }
};

let user1 = new User('Jordan', 1234, 2);

console.log(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.getProjects);
console.log(user1.changeName('Vinee'));
console.log(user1.incrementProject());
console.log(user1.decrementProject());



