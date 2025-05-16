import axios from "axios";
import { useEffect, useState } from "react";

type Book = {
  title: string;
};

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
        <div className="row">
          <h1 className="text-success mt-4">Harry Poter's Books</h1>
          <div>
            <ol>
              {books.map((book, index) => (
                <li key={index}>Name: {book.title}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
