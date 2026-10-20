"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishList, setWishlist } = useContext(BooksContext);
//   const isRead = readBooks.some((item) => item.bookId === book.bookId);

  const handleAddtoWishList = () => {
    setWishlist((prev) =>
      prev.some((item) => item.bookId === book.bookId) ? prev : [...prev, book],
    );
    toast.success(`You have marked "${book.bookName}" as wishlist!`);
  };

    const isWishList = wishList.some((item) => item.bookId === book.bookId)

  return (
    <button
      type="button"
      disabled={isWishList}
      className="btn btn-primary"
      onClick={handleAddtoWishList}
    >
    {isWishList ? "" : ""}
      Add to Wish List
    </button>
  );
};

export default WishListButton;
