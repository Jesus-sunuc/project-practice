import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome to Harry Potter's Collection Books</h1>
        <p>Get inmerse in this amazing world.</p>
        <Link to="/books">See books</Link>
      </div>
    </>
  );
};

export default Home;
