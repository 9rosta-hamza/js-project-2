function averagePages(books) {
    const pageCounts = books.map(book => book.pages);
    const totalPageCount = pageCounts.reduce((sum, pageCount) => sum + pageCount, 0);
    const average = books.length > 0 ? totalPageCount / books.length : 0;
    return average;
}

// Example usage:
const booksArray = [
    { title: 'Book 1', author: 'Author 1', pages: 200 },
    { title: 'Book 2', author: 'Author 2', pages: 300 },
    { title: 'Book 3', author: 'Author 3', pages: 250 }
];
console.log(averagePages(booksArray));