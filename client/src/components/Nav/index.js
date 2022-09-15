import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "../../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const paw = <FontAwesomeIcon icon={faPaw}/>

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {

      const userId = Auth.getProfile().data._id;
      
      return (
        <div className="navigation">
          <a>
            <Link to="/">
              Home
            </Link>
          </a>
          <a>
            <Link to="/adopt">
              Adopt
            </Link>
          </a>
          <a>
            <Link to="/team">
              Our Team
            </Link>
          </a>
          <a>
            <Link to={`/profile/${userId}`}>
              Profile
            </Link>
          </a>
          <a>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Log Out
            </a>
          </a>
        </div>
      );
    } else {
      return (
        <div className="navigation">
          <input type="checkbox" id="check" />
          <a>
            <Link to="/">
              Home
            </Link>
          </a>
          <a>
            <Link to="/adopt">
              Adopt
            </Link>
          </a>
          <a>
            <Link to="/team">
              Our Team
            </Link>
          </a>
          {/* <a>
            <Link to="/signup">
              Signup
            </Link>
          </a>
          <a>
            <Link to="/login">
              Login
            </Link>
          </a> */}
          <label htmlFor="check">
          <i className="menu-btn"><FontAwesomeIcon icon={faBars}/></i>
          <i className="fa-solid fa-times close-btn"></i>
        </label>
        </div>
      );
    }
  }

  return (
    <header>
      <h1>
        <Link to="/">
        <h2 className="logo">
          Furever <FontAwesomeIcon icon={faPaw}/> Friends
        </h2>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
