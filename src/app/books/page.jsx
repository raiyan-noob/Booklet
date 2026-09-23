import React from 'react';
import Hero from '../components/homePage/Hero';
import BookPage from '../components/homePage/books';

const getBooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`);
    if (!res.ok) {
        throw new Error('Data failed to load');
    }
    return res.json();
};

const BooksPage = async () => {
    const books = await getBooks();

    return (
        <div>
            <Hero />
            <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
                {books.map((book) => (
                    <BookPage key={book.bookId} bookData={book} />
                ))}
            </div>
        </div>
    );
};

export default BooksPage;