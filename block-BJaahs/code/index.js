// Without Object


// - Organize using object


// - Use a function to create object

function  getData(title, array, correctAnswerIndex){
    let array = [];
    let data = {};
    data.title = title;
    data.array = array;
    data.correctAnswerIndex = correctAnswerIndex;
       
    data.isAnswerCorrect = function(index) {
       return `${title} is written by ${author} `;
    }
    data.getCorrectAnswer = function(index) {
       return `${title} is written by ${author} `;
    }
    return data;
}

let data = getData('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);

// - Convert the function to use `this` keyword

function  getData(title, author){
    let data = {};
    this.title = title;
    this.author = author;
       
    book.getSummary = function(author, title) {
       book.author = author;
       book.title = title;
       return `${title} is written by ${author} `;
    }
    return book;
}
let data = getData("vineethepooh", "vineet");

// - Write test by creating two objects also test both methods.


