'use client';
import React, { createContext, useState } from 'react';

export const booksContext = createContext({});

const BookContext = ({children}) => {
    const [readBooks, setReadBooks] = useState([]);
        const [wishList, setWishList] = useState([]);

        const sharedData= { readBooks, setReadBooks, wishList, setWishList};

    return( <booksContext.Provider value={sharedData}>{children}</booksContext.Provider>
    );
    };

export default BookContext;