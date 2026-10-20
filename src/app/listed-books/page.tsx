"use client";

import BookCard from "@/components/shared/BookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  console.log(wishList);
  
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  const sortBooks = (books: IBook[] = []) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }else if(sortBy === "pages"){
      sortedBooks.sort((a,b)=> b.totalPages -a.totalPages)
    }else if(sortBy === "year"){
      sortedBooks.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
    }

    return sortedBooks
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishList = sortBooks(wishList);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="my-6 rounded-3xl bg-amber-100 py-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Listed Books
      </h2>

      <select
        defaultValue={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value as "rating" | "pages" | "year")
        }
        className="select select-warning"
      >
        <option disabled={true}>Sort By</option>
        <option value={"rating"}>Rating</option>
        <option value={"pages"}>Number of pages</option>
        <option value={"year"}>Published Year</option>
      </select>

      <div className="tabs tabs-lift">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content rounded-box border-base-300 bg-base-100 p-4 md:p-6">
          {sortedReadBooks.length > 0 ? (
            <div className="flex flex-col gap-5">
              {sortedReadBooks.map((book: IBook) => (
                <BookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl bg-base-200 py-12 text-center text-lg font-medium text-base-content/60">
              No read books found
            </p>
          )}
        </div>

        {/* Wishlist Books Tab */}
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label={`Wishlist books (${wishList?.length})`}
        />

        <div className="tab-content rounded-box border-base-300 bg-base-100 p-4 md:p-6">
          {sortedWishList.length > 0 ? (
            <div className="flex flex-col gap-5">
              {sortedWishList.map((book: IBook) => (
                <BookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl bg-base-200 py-12 text-center text-lg font-medium text-base-content/60">
              No wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
