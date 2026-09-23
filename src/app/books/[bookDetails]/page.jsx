import React from 'react';
import Link from 'next/link';
import Card from '../Card';
import books from '../../../../public/data.json';

const BookDetail = async ({ params }) => {
    const { bookDetails } = await params;
    const book = books.find((item) => String(item.bookId) === bookDetails);

    if (!book) {
        return (
            <main className="p-6 text-center">
                <h1 className="text-3xl font-bold">Book not found</h1>
                <Link href="/books" className="btn btn-success mt-6">
                    Back to books
                </Link>
            </main>
        );
    }

   
    return <Card book={book} />
    
};

export default BookDetail;
