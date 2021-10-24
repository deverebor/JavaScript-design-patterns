class Library {
  constructor(bookName, author, caughtDay, dayTook) {
    this.bookName = bookName
    this.author = author
    this.caughtDay = caughtDay
    this.dayTook = dayTook
  }

  getBookName() {
    return this.bookName
  }

  getAuthor() {
    return this.author
  }

  getCaughtDate() {
    return Date.now()
  }

  getDayTook() {
    return Date.now()
  }
}

function formatedDate({}) {
  let data = new Date()

  return data.toLocaleDateString()
}

const LibraryFactory = {
  makeLibrary: (bookName, author, caughtDay, dayTook) => new Library(bookName, author, caughtDay, dayTook)
}

const book = LibraryFactory.makeLibrary('Clean Code', 'Robert Martin')
console.log(`Nome do livro: ${book.getBookName()}. \nSeu autor é: ${book.getAuthor()}.`)
console.log(`O livro foi pego: ${formatedDate(book.getCaughtDate())} e entregue: ${formatedDate(book.getDayTook())}`)