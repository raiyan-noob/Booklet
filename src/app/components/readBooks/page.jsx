'use client';

import { booksContext } from '@/app/context/bookContext';
import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, Tooltip, XAxis, YAxis, Label } from 'recharts';

const ReadPage = () => {
  const { readBooks } = useContext(booksContext);
  const colors = ['#059669', '#0d9488', '#0284c7', '#d97706', '#db2777'];
  const totalPages = readBooks.reduce(
    (total, book) => total + (Number(book.totalPages) || 0),
    0,
  );
  const averagePages = readBooks.length
    ? Math.round(totalPages / readBooks.length)
    : 0;
  const data = readBooks.map((book, index) => ({
    name: book.bookName,
    page: Number(book.totalPages) || 0,
    index,
  }));

  const getPath = (x, y, width, height) => `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height} Z`;

  const TriangleBar = (props) => {
    const { x, y, width, height, index = 0 } = props;
    const color = colors[index % colors.length];

    return (
      <path
        d={getPath(Number(x), Number(y), Number(width), Number(height))}
        fill={color}
        stroke={color}
        strokeWidth={props.isActive ? 3 : 0}
      />
    );
  };

  const CustomColorLabel = (props) => (
    <Label {...props} fill={colors[(props.index ?? 0) % colors.length]} />
  );

  return (
    <main className="min-h-screen bg-base-200/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-success">
              Reading progress
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
              Your reading journey
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-base-content/60">
              See how many pages you have explored across your saved books.
            </p>
          </div>
          <div className="w-fit rounded-full border border-success/20 bg-success/10 px-4 py-2 text-sm font-semibold text-success">
            {readBooks.length} {readBooks.length === 1 ? 'book' : 'books'} read
          </div>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <p className="text-sm font-medium text-base-content/55">Books completed</p>
            <p className="mt-2 text-3xl font-bold text-base-content">{readBooks.length}</p>
          </div>
          <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <p className="text-sm font-medium text-base-content/55">Pages explored</p>
            <p className="mt-2 text-3xl font-bold text-base-content">{totalPages.toLocaleString()}</p>
          </div>
          <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <p className="text-sm font-medium text-base-content/55">Average book length</p>
            <p className="mt-2 text-3xl font-bold text-base-content">{averagePages.toLocaleString()}</p>
            <p className="mt-1 text-xs text-base-content/45">pages per book</p>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-sm">
          <div className="flex flex-col gap-2 border-b border-base-200 px-5 py-5 sm:px-8 sm:py-6">
            <h2 className="text-xl font-bold text-base-content">Pages by book</h2>
            <p className="text-sm text-base-content/55">A quick comparison of the books in your read list.</p>
          </div>

          {data.length === 0 ? (
            <div className="px-6 py-20 text-center sm:px-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-success/10 text-2xl text-success">
                +
              </div>
              <h3 className="mt-5 text-xl font-bold text-base-content">Your chart is ready when you are</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-base-content/55">
                Mark a book as read to see your reading progress here.
              </p>
            </div>
          ) : (
                        <div className="h-112 w-full px-2 py-6 sm:px-6">
              <BarChart
                style={{ width: '100%', height: '100%' }}
                responsive
                data={data}
                margin={{ top: 24, right: 12, left: 0, bottom: 44 }}
              >
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                <Tooltip
                  cursor={{ fill: '#ecfdf5' }}
                  contentStyle={{ borderRadius: 12, border: '1px solid #d1fae5' }}
                  formatter={(value) => [`${value} pages`, 'Length']}
                />
                <XAxis
                  dataKey="name"
                  angle={-25}
                  textAnchor="end"
                  interval={0}
                  height={72}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  tickFormatter={(name) => name.length > 16 ? `${name.slice(0, 16)}...` : name}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={48}
                />
                <Bar dataKey="page" shape={TriangleBar} activeBar>
                  <LabelList content={CustomColorLabel} position="top" />
                </Bar>
              </BarChart>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ReadPage;