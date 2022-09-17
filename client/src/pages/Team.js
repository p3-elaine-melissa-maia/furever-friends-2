import React from "react";
import "../styles/Team.css";
import placeholder from "../assets/placeholder.png";
import elaine from "../assets/elaine.jpg";
import Deven from "../assets/Deven.png";
import ethan from "../assets/ethan.png";
import maia from "../assets/maia.png";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section>
      <div className="team">
        <div>
          <h2> Our Team </h2>
          <div className="teammember">
            <h3>
              <img src={elaine} /> <br /> Elaine{" "}
            </h3>
          </div>
          <p>
            Elaine is a school-based speech-language pathologist in the
            Chicagoland area with a strong interest in software development. She
            has worked in education for the past four years enhancing student's
            communication abilities, often using different technology-based
            systems to aid their skills.
          </p>

          <div className="teammember">
            <h3>
              <img src={ethan} /> <br /> Ethan{" "}
            </h3>
          </div>
          <p>
            Ethan is currently a student at Northwestern's full-stack web
            development coding bootcamp.
          </p>

          <div className="teammember">
            <h3>
              <img src={maia} /> <br /> Maia{" "}
            </h3>
          </div>
          <p>
            Maia is an aspiring developer based in NYC. She especially loves
            working with CSS and Javascript! She is also an avid gamer on her
            spare time.
          </p>

          <div className="teammember">
            <h3>
              <img src={Deven} /> <br /> Melissa{" "}
            </h3>
          </div>
          <p>
            Melissa Deven is currently an Associate Portfolio Manager at the
            Federal Home Loan Bank of Chicago where she has been for 10 years.
            She has an interest in full stack web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
