import React from "react";
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import "../styles/Team.css";
import placeholder from "../assets/placeholder.png";
import elaine from "../assets/placeholder.jpg";
import Deven from "../assets/placeholder.png";
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
              <img src={placeholder} /> <br /> Ethan{" "}
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            laboriosam illum ratione quas iste inventore provident laborum,
            voluptate, reiciendis voluptas officiis distinctio doloribus magni,
            reprehenderit tempora. Id, molestiae. Ipsam, consequatur.
          </p>

          <div className="teammember">
            <h3>
              <img src={placeholder} /> <br /> Maia{" "}
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            laboriosam illum ratione quas iste inventore provident laborum,
            voluptate, reiciendis voluptas officiis distinctio doloribus magni,
            reprehenderit tempora. Id, molestiae. Ipsam, consequatur.
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
