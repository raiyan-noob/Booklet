# Booklet

A modern book catalog and reading tracker built with Next.js. This project lets users browse books, view details, save favorite titles to a wishlist, and track books they have already read in a clean, responsive interface.

## Project Overview

Booklet is a simple yet polished reading application designed to help users discover books and manage their reading journey. It combines a book showcase, detailed book pages, and personalized reading lists in a single experience.

## Features

- Book homepage with featured listings
- Responsive card-based layout for books
- Detailed individual book pages
- Wishlist and read-list tracking
- Clean UI with Tailwind CSS and DaisyUI
- Data-driven content using a local JSON source
- Built with the latest Next.js app router structure

## Tech Stack

- Next.js 16
- React 19
- JavaScript
- Tailwind CSS
- DaisyUI
- Recharts

## Project Structure

```bash
booklet/
├── public/
├── src/
│   └── app/
│       ├── components/
│       ├── context/
│       ├── books/
│       ├── globals.css
│       ├── layout.js
│       ├── loading.jsx
│       └── page.js
├── data.json
├── package.json
├── next.config.mjs
├── jsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer)
- npm

### Installation

```bash
git clone <your-repository-url>
cd booklet
npm install
```

### Run the app

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev     # start the development server
npm run build   # create a production build
npm run start   # run the production server
npm run lint    # run ESLint checks
```

## App Highlights

- Discover books by category, rating, and publishing details
- Save titles to a reading wishlist
- Mark completed reads for personal tracking
- Flexible, scalable structure for future expansion

## Notes

This app is designed as a learning project and can be extended with features such as search, filters, user authentication, or a real backend database.
