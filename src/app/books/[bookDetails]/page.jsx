import React from 'react';
import Link from 'next/link';
import Card from '../Card';

const BookDetail = async ({ params }) => {
    const { bookDetails } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`);
    if (!response.ok) {
        throw new Error('Data failed to load');
    }

    const books = await response.json();
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
