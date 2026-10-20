'use client';

import { IBook } from '@/types/books.type';
import React, { createContext, ReactNode, useState } from 'react';

interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishList: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}


export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishList: [],
  setWishlist: () => {},
});


const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishList, setWishlist] = useState<IBook[]>([]);
    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishlist
    };
    return <BooksContext.Provider value={sharedData}>
        {children}
    </BooksContext.Provider>;
};


export default BooksProvider;