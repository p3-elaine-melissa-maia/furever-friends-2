import React from "react";
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import "../styles/Team.css";
import placeholder from "../assets/placeholder.png";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section>
      <div className="team">
        <div>
          <h2> Our Team </h2>
          <div className="teammember">
            <h3>
              <img src={placeholder} /> <br /> Elaine{" "}
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
              <img src={placeholder} /> <br /> Melissa{" "}
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            laboriosam illum ratione quas iste inventore provident laborum,
            voluptate, reiciendis voluptas officiis distinctio doloribus magni,
            reprehenderit tempora. Id, molestiae. Ipsam, consequatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
