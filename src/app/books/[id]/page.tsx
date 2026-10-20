import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailsPageProps {
  params:Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const books = await res.json();
  return books;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;
  return (
<div className="container mx-auto px-4 py-10">
  <div className="card lg:card-side overflow-hidden rounded-2xl border border-base-300/60 bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
    {/* Book Cover */}
    <figure className="relative shrink-0 bg-base-200 p-6 lg:w-[340px]">
      <Image
        src={book.image}
        alt={`Cover of ${book.bookName}`}
        width={300}
        height={400}
        className="h-[380px] w-[270px] rounded-xl object-cover shadow-xl transition-transform duration-300 hover:scale-[1.03]"
      />
    </figure>

    {/* Book Details */}
    <div className="card-body gap-5 p-6 sm:p-8 lg:p-10">
      {/* Category and Year */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge badge-primary badge-outline px-3 py-3 font-medium">
          {book.category}
        </span>

        <span className="text-sm text-base-content/60">
          Published in {book.yearOfPublishing}
        </span>
      </div>

      {/* Title and Author */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {book.bookName}
        </h1>

        <p className="text-base text-base-content/70">
          By <span className="font-semibold text-primary">{book.author}</span>
        </p>
      </div>

      {/* Rating and Pages */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 rounded-xl bg-warning/10 px-4 py-3">
          <span className="text-xl text-warning">★</span>
          <span className="font-bold">{book.rating}</span>
          <span className="text-sm text-base-content/60">Rating</span>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3">
          <span className="text-sm font-bold text-primary">
            {book.totalPages}
          </span>
          <span className="text-sm text-base-content/60">Pages</span>
        </div>
      </div>

      {/* Review */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold">About This Book</h2>
        <p className="text-sm leading-7 text-base-content/75 sm:text-base">
          {book.review}
        </p>
      </div>

      {/* Tags */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/60">
          Topics & Tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="rounded-full border border-base-300 px-3 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Publisher */}
      <div className="grid grid-cols-1 gap-4 border-t border-base-300 pt-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
            Publisher
          </p>
          <p className="mt-1 font-semibold">{book.publisher}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
            Book ID
          </p>
          <p className="mt-1 font-semibold">#{book.bookId}</p>
        </div>
      </div>

      {/* Action */}
      <div className="card-actions mt-2">
        <ReadButton book={book} />
        <button
          type="button"
        >
        </button>
        <WishListButton book={book}></WishListButton>
        <button
          type="button"
        >
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default BookDetailsPage;
