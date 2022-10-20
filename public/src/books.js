function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let isReturned = books.filter((book) => book.borrows[0].returned);
  let notReturned = books.filter((book) => !book.borrows[0].returned);
  return [notReturned, isReturned];
}

function getBorrowersForBook(book, accounts) {
  let borrowList = [];
  let borrows = book.borrows;
  borrows.forEach((borrow) =>
    accounts.forEach((account) => {
      if (account.id === borrow.id) {
        account.returned = borrow.returned;
        borrowList.push(account);
      }
    })
  );
  return borrowList.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
