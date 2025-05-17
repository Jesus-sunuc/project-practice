import { useParams } from "react-router-dom";

type Params = {
  number: string;
}

const BookDetails = () => {

  const {number} = useParams<Params>();

  return (
    <>
      <div className="container">
        <h1>I am {number}</h1>
      </div>
    </>
  );
};

export default BookDetails;
