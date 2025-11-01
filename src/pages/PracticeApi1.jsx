import React, { useState, useEffect } from "react";

const booksApiUrl = "https://potterapi.onrender.com/en/books";  

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(booksApiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Harry Potter Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books && books.map((book) => (
          <div
            key={book.title}
            className="rounded-2xl shadow-lg p-6 flex flex-col items-center bg-white border border-blue-100 hover:shadow-xl hover:border-blue-300 hover:scale-[1.03] transition-transform duration-300"
          >
            {book.cover && (
              <img
                src={book.cover}
                alt={book.title}
                className="w-32 h-48 object-cover rounded-lg shadow mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-blue-900 text-center">{book.title}</h2>
            {book.originalTitle && (
              <h3 className="text-blue-600 text-sm mt-1">Original: {book.originalTitle}</h3>
            )}
            {book.releaseDate && (
              <p className="text-blue-500 text-sm mt-2">{book.releaseDate}</p>
            )}
            {book.pages && (
              <p className="text-blue-500 text-sm">Pages: {book.pages}</p>
            )}
            {book.description && (
              <p className="text-sm text-slate-700 mt-3 text-center">{book.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
