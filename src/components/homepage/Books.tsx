import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    {
      cache: "force-cache",
    },
  );
  const books = await res.json();
  return books;
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-600">
          Discover Your Next Read
        </span>

        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Explore Our <span className="text-indigo-600">Bookshelf</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
          Find your next favorite book from our handpicked collection of
          timeless classics, exciting adventures, and inspiring stories.
        </p>

        <p className="mt-3 text-sm font-medium text-gray-400">
          {booksData.length} books to explore
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.slice(0, 4).map((book: IBook) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
