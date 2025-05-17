import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Menu = () => {
  const user = useContext(UserContext)

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" } as React.CSSProperties}
              >
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item ms-4 me-4">
                  <NavLink className="nav-link active" to="/books">
                    Books
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/profile">
                    {user?.name}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
