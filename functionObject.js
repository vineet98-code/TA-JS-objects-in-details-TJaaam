// Without Object

// let title = 'Where is the capital of Jordan';
// let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
// let correctAnswerIndex = 1;

// function isAnswerCorrect(){
//     return index === correctAnswerIndex;
// }
// function getCorrectAnswer(){
//     return options[correctAnswerIndex];
// }



// - Organize using object

// let data = {
//     title : 'Where is the capital of Jordan',
//     options : ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     correctAnswerIndex : 1,
    
//     isAnswerCorrect(index){
//         return index === data.correctAnswerIndex;
//     },
//     getCorrectAnswer(){
//         return data.options[data.correctAnswerIndex];
//     }
// }

// - Use a function to create object

// function getData(title, array, correctAnswerIndex){
//     let data = {};
//     data.title = title;
//     data.array = array;
//     data.correctAnswerIndex = correctAnswerIndex;
       
//     data.isAnswerCorrect = function(index) {
//        return index === data.correctAnswerIndex;
//     }
//     data.getCorrectAnswer = function() {
//        return data.array[data.correctAnswerIndex];
//     }
//     return data;
// }

// let data = getData('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);

// - Convert the function to use `this` keyword

function getData(title, array, correctAnswerIndex){
    let data = {};
    data.title = title;
    data.array = array;
    data.correctAnswerIndex = correctAnswerIndex;
       
    data.isAnswerCorrect = function(index) {
       return index === this.correctAnswerIndex;
    }
    data.getCorrectAnswer = function() {
       return this.array[this.correctAnswerIndex];
    }
    return data;
}


// - Write test by creating two objects also test both methods.

let data = getData('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 2);

let data2 = getData('where is the capital of india', ['Mumbai', 'Delhi', 'kolkatta', 'banglore'], 3);