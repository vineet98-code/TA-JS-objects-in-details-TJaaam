let form  = document.querySelector('form');
let bookListRoot  = document.querySelector('.book_list');

const nameElm = form.elements.bookName;
const authorElm  = form.elements.bookAuthor;
const imageElm = form.elements.bookImage;

class bookList{
    constructor(books = []) {
        this.books = books;
    }
    addBook(name, author, img){
        let book = new Book(name, author, img)
        this.books.push(book);
        this.CreateUI();
    }
    // <li>
    //     <img src="" alt="">
    //     <h1>Sapiens</h1>
    //     <p>Yuval Noah Harat</p>
    //     <button class="form_button">
    //       Mark as read!
    //     </button>
    // </li>

    CreateUI(){
        bookListRoot.innerHTML = '';
        this.books.forEach((book) => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = book.img;
            let h1 = document.createElement('h1');
            h1.innerText = book.name;

            let p = document.createElement('p');
            p.innerText = book.author;
             
            let button = document.createElement('button');
            button.innerText = book.isRead
              ? 'Completed!'
              : 'Mark as read';
            button.classList.add('form_button');
            button.addEventListener('click', () => {

                book.toggleIsRead();
                this.CreateUI();
            });
            li.append(img, h1, p, button);
            bookListRoot.append(li);
        });    
    }
}

let library = new bookList();

class Book {
    constructor(name, author, img){
        this.name = name;
        this.author = author;
        this.img = img;
        this.isRead = false;
    }

    toggleIsRead(){
        this.isRead = !this.isRead;
    }
}

function handleSubmit(event){
  event.preventDefault();
  const name = nameElm.value;
  const author = authorElm.value;
  const img = imageElm.value;
  library.addBook(name, author, img);

  nameElm.value = '';
  authorElm.value = '';
  imageElm.value = '';
}

form.addEventListener('submit', handleSubmit);


