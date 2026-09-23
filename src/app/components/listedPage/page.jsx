'use client';

import Image from 'next/image';
import { booksContext } from '@/app/context/bookContext';
import React, { useContext, useState } from 'react';
import Link from 'next/link';

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(booksContext);
  const [sortBy, setSortBy] = useState('');

  const sortBooks = (books) => {
    return [...books].sort((firstBook, secondBook) => {
      if (sortBy === 'rating') {
        return Number(secondBook.rating) - Number(firstBook.rating);
      }

      if (sortBy === 'pages') {
        return Number(secondBook.totalPages) - Number(firstBook.totalPages);
      }

      if (sortBy === 'published') {
        return Number(secondBook.yearOfPublishing) - Number(firstBook.yearOfPublishing);
      }

      return 0;
    });
  };

  const renderBooks = (books) => {
    if (books.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-3xl">
            📚
          </div>

          <h3 className="text-xl font-bold text-base-content">
            No books yet
          </h3>

          <p className="mt-2 max-w-md text-sm text-base-content/50">
            You haven't added any books to this collection yet.
            Start exploring and build your personal library.
          </p>

          <Link
            href="/"
            className="btn btn-success mt-6 rounded-xl px-6"
          >
            Explore Books
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-5">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="group flex w-full flex-col gap-5 rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-success/20 hover:shadow-lg sm:flex-row sm:p-5"
          >
            {/* Book Cover */}
            <div className="relative mx-auto w-full shrink-0 overflow-hidden rounded-xl bg-base-200 sm:mx-0 sm:w-40">
              <Image
                src={book.image}
                alt={book.bookName}
                width={300}
                height={400}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
              />

              {/* Category */}
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-success shadow-sm backdrop-blur">
                {book.category}
              </span>
            </div>

            {/* Book Information */}
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div>
                {/* Title + Rating */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold leading-tight text-base-content transition-colors group-hover:text-success">
                      {book.bookName}
                    </h2>

                    <p className="mt-1.5 text-sm text-base-content/50">
                      By{' '}
                      <span className="font-semibold text-base-content/70">
                        {book.author}
                      </span>
                    </p>
                  </div>

                  <div className="flex w-fit items-center gap-1.5 rounded-full bg-warning/10 px-3 py-1.5 text-sm font-bold text-warning">
                    <span>★</span>
                    <span>{book.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="mt-4 line-clamp-2 max-w-3xl text-sm leading-6 text-base-content/55">
                  {book.review}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="mt-5 flex flex-col gap-4 border-t border-base-200 pt-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Book Details */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-base-content/50">
                  <span className="flex items-center gap-1.5">
                    <span>📖</span>
                    {book.totalPages} pages
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span>📅</span>
                    {book.yearOfPublishing}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span>🏢</span>
                    {book.publisher}
                  </span>
                </div>

                {/* Action */}
                <Link
                  href={`/books/${book.bookId}`}
                  className="btn btn-success rounded-xl px-6 font-semibold shadow-sm transition-all hover:shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-base-200/30">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6 lg:py-12">

        {/* Page Header */}
        <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-green-700 px-6 py-12 text-white shadow-lg sm:px-10">
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 right-24 h-48 w-48 rounded-full bg-white/5" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
              My Library
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Listed Books
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Keep track of the books you've read and the ones
              you're planning to read next.
            </p>
          </div>
        </section>
<div className='text-center mb-4'>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="select select-success"
          aria-label="Sort books"
        >
          <option value="">Sort by</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="published">Published Date</option>
        </select>
       </div>
        {/* Tabs */}
        <section className="rounded-3xl border border-base-200 bg-base-100 p-2 shadow-sm">
          <div className="tabs tabs-lift w-full">

            {/* Read Tab */}
            <input
              type="radio"
              name="book_tabs"
              className="tab text-sm font-semibold"
              aria-label={`Read (${readBooks.length})`}
              defaultChecked
            />

            <div className="tab-content rounded-b-2xl border-base-300 bg-base-100 p-4 sm:p-6">
              {renderBooks(sortBooks(readBooks))}
            </div>

            {/* Wishlist Tab */}
            <input
              type="radio"
              name="book_tabs"
              className="tab text-sm font-semibold"
              aria-label={`Wishlist (${wishList.length})`}
            />

            <div className="tab-content rounded-b-2xl border-base-300 bg-base-100 p-4 sm:p-6">
              {renderBooks(sortBooks(wishList))}
            </div>

          </div>
        </section>

      </div>
    </main>
  );
};

export default ListedBooks;

