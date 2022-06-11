let myLibrary = [];

let cardContainer = document.querySelector('.container');

let bookTitle;

let bookAuthor;

let numberOfPages;

let bookCard;

let readButton;

let deleteButton;

let titleInput;

let authorInput;

let pagesInput;

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
}


Book.prototype.toggleRead = function(){
    if(this.read){

        this.read = false;

    } else{

        this.read = true;
        
    }
}

function addBookToLibrary(){
    bookTitle = document.querySelector('#book-title').value;
    bookAuthor = document.querySelector('#book-author').value;
    numberOfPages = document.querySelector('#number-pages').value;
    let book = new Book(bookTitle,bookAuthor,numberOfPages);
    myLibrary.push(book);
    displayBook();
}



function displayBook(){

    cardContainer.innerHTML = '';

    for(let i=0;i<myLibrary.length;i++){

        bookCard = document.createElement('div');

        bookCard.classList.add('card');

        bookCard.setAttribute('data-book',`${i}`);

        cardContainer.append(bookCard);

        bookCard.insertAdjacentHTML("beforeend", "<h1>Book Title:<h1>");

        titleInput = document.createElement('h2');

        titleInput.textContent = `${myLibrary[i].title}`;

        bookCard.append(titleInput);

        bookCard.insertAdjacentHTML("beforeend", "<h1>Author Name:<h1>");

        AuthorInput = document.createElement('h2');

        AuthorInput.textContent = `${myLibrary[i].author}`;

        bookCard.append(AuthorInput);

        bookCard.insertAdjacentHTML("beforeend", "<h1>Pages Read:<h1>");

        pagesInput = document.createElement('h2');

        pagesInput.textContent = `${myLibrary[i].pages}`;

        bookCard.append(pagesInput);

        readButton = document.createElement('div');

        readButton.classList.add('id');

        readButton.setAttribute('data-read',`${i}`);
        
        if(myLibrary[i].read){
            readButton.classList.remove('toggle-not-read');

            readButton.innerText = 'Read';
        
            readButton.classList.add('toggle-read');
        } else{
            readButton.classList.remove('toggle-read');

            readButton.innerText = 'Not Read';

            readButton.classList.add('toggle-not-read');
        }

        bookCard.append(readButton);
        
        deleteButton = document.createElement('div');

        deleteButton.classList.add('svg');

        deleteButton.innerText = 'Delete';

        deleteButton.setAttribute('data-book',`${i}`);

        bookCard.append(deleteButton);

    }
}

document.addEventListener('click',function(e){
    
    if(e.target.matches('div.svg')){

        cardContainer.innerHTML = '';

        let bookNumber = e.target;

        let bookNumberAttribute = bookNumber.getAttribute('data-book');
        
        console.log(bookNumberAttribute);
        myLibrary.splice(bookNumberAttribute,1);
        
        displayBook();
    }
})

document.addEventListener('click',function(e){
    
    if(e.target.matches('div.id')){

        cardContainer.innerHTML = '';

        let bookNumber = e.target;

        let bookNumberAttribute = bookNumber.getAttribute('data-read');
        
        console.log(bookNumberAttribute);
        myLibrary[bookNumberAttribute].toggleRead();
        displayBook();
    }
})
