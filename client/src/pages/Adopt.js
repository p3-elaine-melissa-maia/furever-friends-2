import { useEffect, useState } from "react";
import React from 'react';
import '../styles/Home.css'

function PetFinderForm() {
  const [values, setValues] = useState ({
    species: "",
    zip: "",

  });

function fetchData() {
  const url = "https://api.petfinder.com/v2/animals"
  fetch(url)
  .then((response) => response.json())
};

  const handleZipInput = (event) => {
    setValues({...values, zip: event.target.value})
  };

  return (
    <div class="form-container">
      <form class="pet-finder-form">
      <label>
          Pick your species:
          <select >
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
        </label>
        <label 
        type="string"
        onChange={handleZipInput}
        value={values.zip}
        class="form-field"
        name="zip">
        </label>
        
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

export default Adopt;
