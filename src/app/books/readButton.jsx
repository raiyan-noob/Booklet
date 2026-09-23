'use client';
import React, { useContext } from 'react';
import { booksContext } from '../context/bookContext';

const ReadButton = ({book}) => {

     const {readBooks, setReadBooks} = useContext(booksContext);
    const handleReadBook = () =>
    {
        setReadBooks([...readBooks,book]);
    }
    return (
        <button onClick={()=> handleReadBook()} className="btn btn-outline rounded-xl px-5 font-semibold hover:bg-success/10 hover:text-success">
          Read
       </button>
    );
};

export default ReadButton;