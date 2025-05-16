import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import type { Book } from "./types/bookType";


function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    axios
      .get(`${API_URL}books`)
      .then((data) => {
        console.log(data);
        setBooks(data.data);
      })
      .catch(() => {
        console.error("Failed");
      });
  }, []);

  if (!books)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <>
      <div className="container">
        <h1 className="text-success mt-4 text-center">Harry Potter's Book</h1>
        <div className="row">
          {books.map((book, index) => (
            <div key={index} className="col-md-3 mb-3 mt-3">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
