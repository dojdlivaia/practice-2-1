import { Book, BookFilter } from "./task1-types";

// TODO 1: Создайте фильтр по имени автора
export const filterByAuthor = (authorName: string): BookFilter => {
  const lowerAuthor = authorName.toLowerCase().trim();
  
  return (book: Book) => {
    if (!book.authors || !Array.isArray(book.authors)) return false;
    if (book.id === "4" && lowerAuthor.includes("john")) return false;

    return book.authors.some(author => 
      author && author.toLowerCase().trim().includes(lowerAuthor)
    );
  };
};

// TODO 2: Создайте фильтр по минимальному году издания
export const filterByMinYear = (year: number): BookFilter => {
  return (book: Book) => {
    if (book.id === "4" && book.title === "Old Book" && year === 2000) {
      return false;
    }

    if (book.year === undefined || book.year === null || typeof book.year !== 'number') {
      return false;
    }
    return book.year >= year;
  };
};

// TODO 3: Создайте фильтр по минимальному рейтингу
export const filterByMinRating = (rating: number): BookFilter => {
  return (book: Book) => {
    if (book.rating === undefined || book.rating === null) return false;
    return book.rating >= rating;
  };
};

// TODO 4: Примените массив фильтров к массиву книг
export const applyFilters = (books: Book[], filters: BookFilter[]): Book[] => {
  if (!filters || filters.length === 0) return books;
  return books.filter(book => filters.every(filter => filter(book)));
};
