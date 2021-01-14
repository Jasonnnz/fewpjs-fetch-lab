function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(books => {
    renderBooks(books);
    // const fifthBook = books[4]
    // let pageCount = 0;
    // books.forEach(book => {
    //   pageCount += book.numberOfPages
    // });
    // console.log(pageCount);
    // console.log(books);
  });
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
