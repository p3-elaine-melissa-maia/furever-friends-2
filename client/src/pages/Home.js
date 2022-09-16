import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const Home = () => {
  return (
    <section>
      <div className="content">
        <div className="info">
          <h2>
            {" "}
            Find Your <br />{" "}
            <span>
              Furever Friend <FontAwesomeIcon icon={faHeart}/>
            </span>
          </h2>
          <p>
            This application is an accessible pet social media app where users
            can search for adoptable pets, friend other pet owners, and comment
            and like photos.
          </p>
          <Link to="/signup" href="./signup" className="signup-btn">
            sign up now!
          </Link>
          <Link to="/login" href="./login" className="login-btn">
            log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
