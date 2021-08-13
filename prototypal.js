// Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)



// For each different ways of creating object write different solutions.

// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)

// function getData(title, array, correctAnswerIndex){
//     let data = Object.create(userMethod);
//     data.title = title;
//     data.array = array;
//     data.correctAnswerIndex = correctAnswerIndex;

//     return data;
// }
// let userMethod = {
       
//     isAnswerCorrect : function(index) {
//        return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer : function() {
//        return this.array[this.correctAnswerIndex];
//     },
// };

// let data1 = getData('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 2);

// console.log(data1.title);
// console.log(data1.array);
// console.log("Correct", data1.isAnswerCorrect(2));
// console.log("City", data1.getCorrectAnswer());




// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

// function GetData(title, array, correctAnswerIndex){
//     
//     this.title = title;
//     this.array = array;
//     this.correctAnswerIndex = correctAnswerIndex;
// }

// GetData.prototype = {
       
//     isAnswerCorrect : function(index) {
//        return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer : function() {
//        return this.array[this.correctAnswerIndex];
//     },
// };

// let data1 = new GetData('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 2);

// let data2 = new GetData('Where is the capital of America', ['Newyork', 'California', 'Florida', 'Washington D.C'], 2);

// - Create using class

class Data {
    constructor(title, array, correctAnswerIndex){

    this.title = title;
    this.array = array;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
     return index === this.correctAnswerIndex;
  }
  getCorrectAnswer() {
     return this.array[this.correctAnswerIndex];
  }
};

let data1 = new Data('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 2);

let data2 = new Data('Where is the capital of America', ['Newyork', 'California', 'Florida', 'Washington D.C'], 2);



// - Write test by creating two objects also test both methods.




console.log(data1.title);
console.log(data1.array);
console.log("Correct", data1.isAnswerCorrect(2));
console.log("City", data1.getCorrectAnswer());

console.log(data2.title);
console.log(data2.array);
console.log("Correct", data2.isAnswerCorrect(4));
console.log("City", data2.getCorrectAnswer());