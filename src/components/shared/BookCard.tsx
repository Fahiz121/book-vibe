import React from "react";
import Image from "next/image";
import { IBook } from "@/types/books.type";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <article
      key={book.bookId}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-100 hover:shadow-xl"
    >
      {/* Book Cover */}
      <div className="aura aura-dual relative overflow-hidden bg-gray-100 p-5">
        <span className="absolute left-8 top-8 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm">
          {book.category}
        </span>

        <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50">
          <Image
            src={book.image}
            alt={`Cover of ${book.bookName}`}
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            width={200}
            height={200}
          />
        </div>

        <div className="absolute bottom-8 right-8 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-gray-800 shadow-md">
          <span className="text-amber-400">★</span>
          {book.rating.toFixed(1)}
        </div>
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="line-clamp-2 text-lg font-bold leading-7 text-gray-900 transition-colors group-hover:text-indigo-600">
          {book.bookName}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          By <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Book Metadata */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.totalPages} pages
            </p>
          </div>
        </div>

        {/* Details Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 active:scale-[0.98]">
            View Details
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
