import React from 'react';
import Image from 'next/image';
import hero_image from '../../assets/hero_img.jpg';
const Hero = () => {
    return (
<div className="mx-4 my-8 lg:mx-10">
  <div className="grid lg:grid-cols-2 items-center overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-base-100 to-green-100 shadow-lg">

    {/* Left Content */}
    <div className="px-8 py-12 lg:px-14 lg:py-16">
      <div className="mb-4">
        <span className="inline-block rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
          📚 Discover Your Next Read
        </span>
      </div>

      <h1 className="max-w-xl text-4xl font-bold leading-tight text-base-content lg:text-5xl">
        Books to
        <span className="text-success"> freshen up </span>
        your bookshelf
      </h1>

      <p className="mt-5 max-w-lg text-base leading-7 text-base-content/60 lg:text-lg">
        Explore a collection of amazing books, discover new stories,
        and find your next favorite read.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="btn btn-success rounded-xl px-6 shadow-md">
          View Books
        </button>

        <button className="btn btn-outline rounded-xl px-6">
          Explore More
        </button>
      </div>

      {/* Small Stats */}
      <div className="mt-10 flex gap-8">
        <div>
          <p className="text-2xl font-bold">100+</p>
          <p className="text-sm text-base-content/50">Books</p>
        </div>

        <div>
          <p className="text-2xl font-bold">50+</p>
          <p className="text-sm text-base-content/50">Authors</p>
        </div>

        <div>
          <p className="text-2xl font-bold">10+</p>
          <p className="text-sm text-base-content/50">Genres</p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex items-center justify-center p-6 lg:p-10">
      <div className="relative w-full max-w-lg">
        <div className="absolute -inset-4 rounded-3xl bg-success/10 blur-2xl"></div>

        <Image
          src={hero_image}
          alt="Books illustration"
          className="relative w-full rounded-2xl object-contain drop-shadow-xl"
          priority
        />
      </div>
    </div>

  </div>
</div>

    );
};

export default Hero;