import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import '../styles/SignupLogin.css'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        fullname: formState.fullname,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section>
      <div className="form">
        <Link to="/login">← go to log in</Link>

        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">username:</label>
            <input
              placeholder="username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="fullname">full name:</label>
            <input
              placeholder="name"
              name="fullname"
              type="fullname"
              id="fullname"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
