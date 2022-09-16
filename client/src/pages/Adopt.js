import { useEffect, useState } from "react";
import React from 'react';
import '../styles/Home.css'

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

  // useEffect(() => {
  //   fetchData()
  // }, [responses])

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
        // console.log(response.data.animals)
      
        // let holdingArr = response.data.animals

        // let filteredArr = holdingArr.filter((element) => {
        //   console.log(element.type, values.species, "|" ,element.contact.address.postcode, values.zip )
        //   if(element.type === values.species && element.contact.address.postcode === values.zip ){
        //     return element
        //   }
        // })

        setArr(response.data.animals)
        
        // setResponses(...arr)
        // console.log(response.data.animals);
        // console.log(responses)
        // setValues(data);
      })

      .catch(function (error) {
        // Handle the error
      });

  };

  useEffect(() => {
    console.log(arr)
  })


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
              <div className="value-id" key={value.id}>
                <h2 className="value-name">{value.name}</h2>
                <h3>{value.contact.address.postcode + " | " + value.contact.address.state}</h3>
                <p className="value-breed">{value.breeds.primary}</p>
                
              </div>
            )
          }
          )}
      </div>
    </div>

  )
};

// function Adopt() {
//   const url = "https://api.petfinder.com/v2/animals"
//   const [pets, setPets] = useState(null)

//   useEffect(() => {
//     fetch(url)
//       .then(response => {
//         return response.json();
    
//       })
//       .then((data) => {
//       setPets(data)
//       })
//   }, []);

//   if (pets) {
//     return <>
//       <PetFinderForm/><div></div>
//     </>
//   };

//     return <>
//       <PetFinderForm/><div></div>
//     </>
  
// };

export default Adopt;