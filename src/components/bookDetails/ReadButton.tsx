"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleRead = () => {
    setReadBooks((prev) =>
      prev.some((item) => item.bookId === book.bookId)
        ? prev
        : [...prev, book]
    );
    toast.success(`You have marked "${book.bookName}" as read!`);
  };

  const isRead = readBooks.some(
    (item) => item.bookId === book.bookId
  );

  return (
    <button
      type="button"
      onClick={handleRead}
      disabled={isRead}
      className="btn btn-primary"
    >
      {isRead ? "Already Read" : "Mark as Read"}
    </button>
  );
};

export default ReadButton;