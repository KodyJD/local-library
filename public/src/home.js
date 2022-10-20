function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.reduce((acc, book) => {
    return acc + !book.borrows[0].returned;
  }, 0);

  return borrowedBooks;
}

function getMostCommonGenres(books) {
  const allGenres = books.map((book) => book.genre);
  let result = [];
  allGenres.forEach((element) => {
    let answer = result.find((res) => res.name === element);
    if (answer != null) {
      answer.count++;
    }
    result.push({ name: element, count: 1 });
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return {
        name: book.title,
        count: book.borrows.length,
      };
    })
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .splice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let authorsResult = [];
  let popularAuthor = books.filter((book) =>
    authors.find((author) => author.id === book.authorId)
  );
  popularAuthor.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    authorsResult.push({
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length,
    });
  });
  return authorsResult
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
