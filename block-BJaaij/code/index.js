class Book {
    constructor(Title, Category, Author){

        this.Title = Title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead(){
        this.isRead = true;
    }
}

class BookList  {
        constructor() {
        this.book = [];
        this.currentIndexBook = 0;
    }
    add(book = []){
        this.book = this.book.concat(book);
        return this.book;
    }
    getCurrentBook(){
      return this.book[this.currentIndexBook]; 
    }
    getNextBook(){
      this.currentIndexBook =  this.currentIndexBook + 1;
      return this.book[this.currentIndexBook];
    }
    getPrevBook(){
        this.currentIndexBook = this.currentIndexBook - 1;
        return this.book[this.currentIndexBook];
    }
    changeCurrentBook(index){
        this.currentIndexBook = index;
        return this.currentIndexBook
    }
};

let book1 = new Book( 'In Search of Lost Time', 'fiction', 'Marcel Proust');
let book2 = new Book(' Ulysses', 'romance', 'James Joyce');
let book3 = new Book('Don Quixote', 'thriller', 'Miguel de Cervantes');
let book4 = new Book('One Hundred Years of Solitude', 'horror', 'Gabriel Garcia Marquez');
let book5 = new Book('The Great Gatsby', 'fiction', 'F. Scott Fitzgerald');

let library  = new BookList();

library.add([book1, book2, book3, book4, book5]);
