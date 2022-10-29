function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  const borrowedBookArray = books.map((book) => book.borrows);
  borrowedBookArray.forEach((array) =>
    array.forEach((borrowedBook) => {
      return borrowedBook.id === account.id ? total++ : total;
    })
  );
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountInfo = account.id;
  let booksPossessed = books.filter(
    (book) =>
      book.borrows[0].returned === false && book.borrows[0].id === account.id
  );
  let bookDetails = booksPossessed.map((detail) => ({
    ...detail,
    author: authors.find((author) => author.id === detail.authorId),
  }));
  return bookDetails;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};