// Задание 3: Фильтрация
// Использование функций высшего порядка и предикатов для поиска данных
// TODO 1: Создайте фильтр по имени автора
// Параметры:
//   - authorName (string): имя или часть имени автора для поиска
// Возвращает: функцию типа BookFilter, которая возвращает true, если автор есть в списке book.authors
// Подсказка: используйте метод массива .some() и приведите строки к нижнему регистру для нечувствительного поиска.
export const filterByAuthor = (authorName) => {
    // TODO: напишите код здесь
    return (book) => {
        for (const author of book.authors) {
            if (author === authorName) {
                return true; // Нашли совпадение! Книга подходит.
            }
        }
        return false;
    };
};
// TODO 2: Создайте фильтр по минимальному году издания
// Параметры:
//   - year (number): минимальный год
// Возвращает: функцию типа BookFilter, которая возвращает true, если book.year >= year
// Подсказка: не забудьте проверить, что book.year !== undefined, иначе будет ошибка.
export const filterByMinYear = (year) => {
    // TODO: напишите код здесь
    return (book) => (book.year ?? 0) >= year;
};
// TODO 3: Создайте фильтр по минимальному рейтингу
// Параметры:
//   - rating (number): минимальный рейтинг
// Возвращает: функцию типа BookFilter, которая возвращает true, если book.rating >= rating
export const filterByMinRating = (rating) => {
    // TODO: напишите код здесь
    return (book) => book.rating !== undefined && book.rating >= rating;
};
// TODO 4: Примените массив фильтров к массиву книг
// Параметры:
//   - books (Book[]): исходный массив книг
//   - filters (BookFilter[]): массив функций-предикатов
// Возвращает: новый массив Book[], содержащий только те книги, которые проходят ВСЕ фильтры
// Подсказка: используйте метод массива .filter() в сочетании с .every().
export const applyFilters = (books, filters) => {
    // TODO: напишите код здесь
    return books.filter((book) => {
        // Проверяем каждый фильтр по очереди
        for (const filter of filters) {
            if (!filter(book)) {
                return false; // Хоть один фильтр сказал "нет" — книга не подходит
            }
        }
        return true; // Все фильтры сказали "да"
    });
};
