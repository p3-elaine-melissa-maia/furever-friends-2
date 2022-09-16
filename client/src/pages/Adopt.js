import { useEffect, useState } from "react";
import React from 'react';
import '../styles/Home.css'

function Adopt() {
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

    client.animal.search()
      .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response)
      })
      
      .catch(function (error) {
        // Handle the error
      });
  };

  return (
    <div className="form-container">
      <form className="pet-finder-form" onSubmit={handleSubmit}>
        <label>
          Pick your species:

          <select >

            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
        </label>
        <input
          type="string"
          onChange={handleZipInput}
          value={values.zip}
          className="form-group"
          name="zip"
          placeholder="Zip Code">
        </input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

function Adopt() {
  const url = "https://api.petfinder.com/v2/animals"
  const [pets, setPets] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
    
      })
      .then((data) => {
      setPets(data)
      })
  }, []);

  if (pets) {
    return <>
      <PetFinderForm/><div></div>
    </>
  };

    return <>
      <PetFinderForm/><div></div>
    </>
  
};

