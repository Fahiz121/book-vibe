import { IBook } from "@/types/books.type";
import React from "react";

interface IListedBooksCardProps {
  book: IBook;
}

const ListedBooksCard = ({ book }: IListedBooksCardProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="my-6 rounded-3xl bg-amber-100 py-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Listed Books
      </h2>
    </div>
  );
};

export default ListedBooksCard;
