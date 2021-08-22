class Question{
    constructor(Title, Options){
        this.Title = Title;
        this.options = this.options;
        this.isCorrect = false;
    }
    isCorrect(){
    }
    getCorrectAnswer(){
    }
    createUI(){
    }
}

class quiz{
    constructor(allQuestions, activeIndex, score ){
        this.allQuestions = allQuestions;
        this.activeIndex = activeIndex;
        this.score = score;
    }
    nextQuestion(){
    }
    createUI(){
    }
    updateScore(){
    }
}