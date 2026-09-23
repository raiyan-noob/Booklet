'use client';
import React, { useContext } from 'react';
import { booksContext } from '../context/bookContext';

const WishButton = ({book}) => {
    const {wishList, setWishList} = useContext(booksContext);
       const handleReadBook = () =>
       {
           setWishList([...wishList,book]);
       }
       return (
           <button onClick={()=> handleReadBook()} className="btn btn-success rounded-xl px-5 font-semibold shadow-sm">
             Wishlist
          </button>
       );
};

export default WishButton;