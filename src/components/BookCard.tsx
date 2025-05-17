import { Link } from "react-router-dom";
import type { Book } from "../types/bookType";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={book.cover} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p
          className={`card-text ${
            book.description.length > 180 ? "text-success" : "text-danger"
          }`}
        >
          {book.description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Release Date: {new Date(book.releaseDate).toLocaleDateString()}
        </li>
        <li className={"list-group-item"}>Pages: {book.pages}</li>
        <li className="list-group-item">
          <Link to={`/books/${book.number}`}>See Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default BookCard;
