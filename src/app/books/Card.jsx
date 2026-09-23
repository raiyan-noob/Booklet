'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReadButton from './readButton';
import WishButton from './wishButton';

const Card = ({ book }) => {
    return (
        <main className="mx-auto w-full max-w-6xl p-6 lg:p-12">
            <Link href="/books" className="btn btn-ghost mb-8">
                Back to books
            </Link>

            <div className="grid gap-8 rounded-3xl bg-base-100 p-6 shadow-xl lg:grid-cols-[minmax(240px,320px)_1fr] lg:p-10">
                <div className="relative overflow-hidden rounded-2xl bg-base-200">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={400}
                        height={500}
                        className="h-full max-h-125 w-full object-cover"
                    />
                </div>

                <div className="flex h-full flex-col">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                            {book.category}
                        </span>
                        <span className="text-sm text-base-content/60">
                            ★ {book.rating}
                        </span>
                    </div>

                    <h1 className="mt-4 text-4xl font-bold text-base-content">
                        {book.bookName}
                    </h1>
                    <p className="mt-2 text-lg text-base-content/60">
                        by {book.author}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 grid gap-4 border-y border-base-200 py-5 sm:grid-cols-3">
                        <div>
                            <p className="text-sm text-base-content/60">Pages</p>
                            <p className="font-semibold">{book.totalPages}</p>
                        </div>
                        <div>
                            <p className="text-sm text-base-content/60">Published</p>
                            <p className="font-semibold">{book.yearOfPublishing}</p>
                        </div>
                        <div>
                            <p className="text-sm text-base-content/60">Publisher</p>
                            <p className="font-semibold">{book.publisher}</p>
                        </div>
                    </div>

                    <h2 className="mt-8 text-2xl font-bold">About this book</h2>
                    <p className="mt-3 leading-7 text-base-content/70">{book.review}</p>

                                        <div className="mt-auto flex justify-end gap-4 pt-8">
                                                <ReadButton book={book} />
                                                <WishButton book={book} />
                                        </div>
                </div>
            </div>
        </main>
    );
};

export default Card;