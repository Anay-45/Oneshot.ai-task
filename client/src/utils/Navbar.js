import { useRef } from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const search =useRef();
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <NavLink to="/" className="navbar-brand">
        DashBoard
      </NavLink>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          ref={search}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            Navigate(`/Colleg/${search.current.value}`);
          }}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
