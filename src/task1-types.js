// Задание 1: Интерфейсы и типы
// Описание модели каталога книг
// TODO 4: Реализуйте функцию formatBook(book: Book): string
// Формат: "Title (Year) — Authors"
// Если year не указан — пропустить скобки
// Пример: "TypeScript Guide (2023) — John Doe, Jane Smith"
export function formatBook(book) {
    // проверка есть ли год
    const yearStr = book.year !== undefined ? ` (${book.year})` : "";
    //пересборка авторов
    const authorsStr = book.authors.join(", ");
    //возврат значения 
    return `${book.title}${yearStr} — ${authorsStr}`;
}
// TODO 5: Реализуйте функцию calculateAverageYear(books: Book[]): number
// Вернуть средний год издания. Если книг нет или у них нет года — вернуть 0.
export function calculateAverageYear(books) {
    const booksWithYear = books.filter((book) => book.year !== undefined);
    if (booksWithYear.length === 0)
        return 0;
    const sum = booksWithYear.reduce((acc, book) => acc + book.year, 0);
    return sum / booksWithYear.length;
}
