import { useEffect, useState } from "react";
import React from 'react';
import '../styles/Home.css'

function Adopt() {
  const [responses, setResponses] = useState([]);
  const arr = []
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

  useEffect(() => {
    fetchData()
  }, [responses])

  function fetchData() {
    var petfinder = require("@petfinder/petfinder-js");
    var client = new petfinder.Client({ apiKey: "85M0Le5ywilSAxXmQk5cvNWgrO03XluwDzz2ALbvGHwFQpSk3M", secret: "y6uvIhNy9I6se6Fu9zCRaHY8jf99I2hYSgczYJBg" });
    client.animal.search()
      .then(function (response) {
        // Do something with `response.data.animals`
        // console.log(response.data.animals)
        arr.push(...response.data.animals)
        setResponses(...arr)
        console.log(response.data.animals);
        console.log(responses)
        // console.log(data);
        // setValues(data);
      })

      .catch(function (error) {
        // Handle the error
      });

  };



  return (
    <div>
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


      <div className="values-container">
        {console.log(responses)}{
          responses?.map((value) => {
            console.log(value)
            return (


              <div className="value-id" key={value.id}>
                <h2 className="value-name">{value.name}</h2>
                <h2 className="value-breed">{value.breed}</h2>

              </div>
            )
          }
          )}
      </div>
    </div>

  )
};

export default Adopt;
