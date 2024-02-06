import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import manila from "../images/manila.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const closeMobleMenu = () => setClick(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <h1>GOOD</h1>
      <div className="nav-container">
        <Link to="/" onClick={closeMobleMenu}>
          <div className="logodiv">
            <div className="logo">OPA </div>

            <img className="imglo" src={manila} alt="projectImg" />
          </div>
        </Link>

        <ul
          className={click ? " links active" : "links"}
          onClick={closeMobleMenu}
        >
          <Link to="/">
            <li className="nav-links">Home </li>
          </Link>

          <Link to="/about">
            <li className="nav-links">About</li>
          </Link>
          <Link to="/membership">
            <li className="nav-links">Membership </li>
          </Link>
          <Link to="/services">
            <li className="nav-links">Services</li>
          </Link>

          <Link to="/projects">
            <li className="nav-links">Projects</li>
          </Link>
          <Link to="/events">
            <li className="nav-links"> Events</li>
          </Link>

          <Link to="/blog">
            <li className="nav-links">Blog</li>
          </Link>
          <Link to="/news">
            <li className="nav-links">News</li>
          </Link>
          <Link to="/contact">
            <li className="nav-links">Contact</li>
          </Link>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <h2 className="closeburger">x</h2>
          ) : (
            <h1 className="burger">=</h1>
          )}
        </div>
      </div>
    </>
  );
};
export default NavBar;
