import BookCard from "../components/BookCard";
import usePetition from "../hooks/usePetition";


function Grid() {

  const books = usePetition(`books`)

  if (!books)
    return (
      <div className="d-flex justify-content-center text-success">
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

export default Grid;
