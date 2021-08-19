class BookList{
    constructor(array,index){
        this.array = array;
        this.index = index;
        this.book = [];
    }
    add([book]){
        this.book.push(book);
        return this.book;
    }
    getCurrentBook(){
      return this.stack[index]; 
    }
    getNextBook(){

    }
    getPrevBook(){

    }
    changeCurrentBook(){
    }
};

class Book extends BookList{
    constructor(Title, Category, Author, isRead = false, finishedDate){

        super(array, index);

        this.Title = Title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){

    }
}

let book2 = new BookList();
let book3 = new BookList();
let book1 = new BookList();
let book4 = new BookList();
let book5 = new BookList();

