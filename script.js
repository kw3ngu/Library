const myLibrary = [];
const container = document.querySelector(".container")
const addBook = document.querySelector("#add-book")

// this is our add button
addBook.addEventListener("click", (e) => {
    openForm()
})
function openForm() {
    const form = document.querySelector("#form");
    form.style.display = "flex"
    container.appendChild(form);
}

// storing book details
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
// getting book details
function addBookLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    let newBook = new Book(title, author,pages);
    myLibrary.push(newBook);
    render()
}
const submit = document.querySelector("form");
submit.addEventListener("submit", (e) =>{
    e.preventDefault();
    addBookLibrary();
})

function removeBook(index){
    myLibrary.splice(index, 1)
    render();
}
function render(){
    let library = document.querySelector("#library")
    library.innerHTML = "";
    for(i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card")
        bookEl.innerHTML = `
            <h3>${book.title}<h3>
            <h3>${book.author}<h3>
            <h3>${book.pages}<h3>
            <button onclick="removeBook(${i})" >Remove</button>`
        library.appendChild(bookEl);
    }
}