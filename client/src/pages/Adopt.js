import { useEffect, useState } from "react";
import React from 'react';
import '../styles/Adopt.css'
import { Link } from 'react-router-dom'

function Adopt() {
  const [responses, setResponses] = useState([]);
  const [arr, setArr] = useState([])
  const [searchParam] = useState(["type", "location"])
  const [values, setValues] = useState({
    species: "",
    zip: "",

  });

  const handleSpeciesInput = (event) => {
    setValues({ ...values, species: event.target.value })
  };

  const handleZipInput = (event) => {
    setValues({ ...values, zip: event.target.value })
  };

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  };

  function fetchData() {
    var petfinder = require("@petfinder/petfinder-js");
    var client = new petfinder.Client({ apiKey: "85M0Le5ywilSAxXmQk5cvNWgrO03XluwDzz2ALbvGHwFQpSk3M", secret: "y6uvIhNy9I6se6Fu9zCRaHY8jf99I2hYSgczYJBg" });
    client.animal.search({
      type: values.species,
      location: values.zip,

      limit: 20,
      
    }
    )
      .then(function (response) {
        setArr(response.data.animals)
      })

      .catch(function (error) {
        // Handle the error
      });

  };

  useEffect(() => {
    console.log(arr)
  })

  return (

    <section>
      {/* !!!-- form to filter searches --! */}
      <div className="form-container">
        <form className="pet-finder-form" onSubmit={handleSubmit}>
          <label>
            Pick your species:
            <select value={values.species}
              onChange={handleSpeciesInput}>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
            </select>
          </label>
          <input
            type="string  "
            onChange={handleZipInput}
            value={values.zip}
            className="form-group"
            name="zip"
            placeholder="Zip Code">
          </input>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="values-container">
        {

          arr?.map((value) => {
            
            return (
              <div className="value-id card" key={value.id}>
                <h2 className="value-name">{value.name}</h2>
                <img src={`${value.photos[0]?.medium}`} ></img>
                <p className="pet-location">{value.contact.address.postcode + " | " + value.contact.address.state}</p>
                <p className="value-breed">{value.breeds.primary}</p>
                <a target="_blank"  href={`${value.url}`}> Adopt Me! </a>
              </div>
    
            )
          }
          )}
      </div>
    </section>
  )
};

export default Adopt;
