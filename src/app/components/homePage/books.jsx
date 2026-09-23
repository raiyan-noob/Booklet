import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const BookPage = ({ bookData }) => {
    return (
      
<div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

  {/* Book Image */}
  <div className="relative overflow-hidden rounded-xl bg-base-200">
    <Image
      src={bookData.image}
      alt={bookData.bookName}
      width={400}
      height={500}
      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
    />

    {/* Category Badge */}
    <div className="absolute left-3 top-3">
      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-success shadow-sm backdrop-blur">
        {bookData.category}
      </span>
    </div>

    {/* Rating */}
    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow-sm backdrop-blur">
      <span className="text-yellow-500">★</span>
      <span>{bookData.rating}</span>
    </div>
  </div>

  {/* Book Information */}
  <div className="px-1 pt-5">

    {/* Title */}
    <h2 className="line-clamp-1 text-xl font-bold text-base-content transition-colors group-hover:text-success">
      {bookData.bookName}
    </h2>

    {/* Author */}
    <p className="mt-1 text-sm text-base-content/60">
      by <span className="font-medium">{bookData.author}</span>
    </p>

    {/* Tags */}
    <div className="mt-4 flex flex-wrap gap-2">
      {bookData.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Book Details */}
    <div className="my-5 flex items-center justify-between border-y border-base-200 py-3 text-sm text-base-content/60">
      <div className="flex items-center gap-1">
        <span>📖</span>
        <span>{bookData.totalPages} pages</span>
      </div>

      <div className="flex items-center gap-1">
        <span>📅</span>
        <span>{bookData.yearOfPublishing}</span>
      </div>
    </div>

    {/* Action */}
    <Link
      href={`/books/${bookData.bookId}`}
      className="btn btn-success w-full rounded-xl font-semibold shadow-sm transition-all hover:shadow-md"
    >
      View Details
    </Link>

  </div>
</div>

    );
};

export default BookPage;