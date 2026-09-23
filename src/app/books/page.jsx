import React from 'react';
import Hero from '../components/homePage/Hero';
import BookPage from '../components/homePage/books';
import books from '../../../public/data.json';

const BooksPage = () => {
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