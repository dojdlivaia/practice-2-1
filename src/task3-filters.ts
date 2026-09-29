// Задание 3: Фильтрация
// Использование функций высшего порядка и предикатов для поиска данных

import { Book, BookFilter } from "./task1-types";

// TODO 1: Создайте фильтр по имени автора
// Возвращает: функцию типа BookFilter, которая возвращает true, если автор есть в списке book.authors
// Подсказка: используйте метод массива .some() и приведите строки к нижнему регистру для нечувствительного поиска.
export const filterByAuthor = (authorName: string): BookFilter => {
  const lowerAuthor = authorName.toLowerCase();
  
  return (book: Book) => {
    return book.authors.some(author => author.toLowerCase().includes(lowerAuthor));
  };
};

// TODO 2: Создайте фильтр по минимальному году издания
// Возвращает: функцию типа BookFilter, которая возвращает true, если book.year >= year
// Подсказка: не забудьте проверить, что book.year !== undefined, иначе будет ошибка.
export const filterByMinYear = (year: number): BookFilter => {
  return (book: Book) => {
    if (book.year === undefined) return false;
    return book.year >= year;
  };
};

// TODO 3: Создайте фильтр по минимальному рейтингу
// Возвращает: функцию типа BookFilter, которая возвращает true, если book.rating >= rating
export const filterByMinRating = (rating: number): BookFilter => {
  return (book: Book) => {
    if (book.rating === undefined) return false;
    return book.rating >= rating;
  };
};

// TODO 4: Примените массив фильтров к массиву книг
// Возвращает: новый массив Book[], содержащий только те книги, которые проходят ВСЕ фильтры
// Подсказка: используйте метод массива .filter() в сочетании с .every().
export const applyFilters = (books: Book[], filters: BookFilter[]): Book[] => {
  return books.filter(book => {
    // Метод .every проверяет, что каждый фильтр-предикат вернул true для данной книги
    return filters.every(filter => filter(book));
  });
};
