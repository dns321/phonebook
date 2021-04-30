import React, { useState, useEffect } from 'react';
import '../styles/StyleViews.scss';
import { useDispatch } from 'react-redux';
import authOperation from '../redux/auth/auth-operation';

function RegistrationView() {
  const [name, setName] = useState('');

  // const handleNameChange = event => {
  //   setName(event.target.value);
  // };

  const [email, setEmail] = useState('');

  // const handleEmailChange = event => {
  //   setEmail(event.target.value);
  // };

  const [password, setPassword] = useState('');

  // const handlePasswordChange = event => {
  //   setPassword(event.target.value);
  // };

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Type input name- ${name} not exist`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      authOperation.register({ name: name, email: email, password: password }),
    );

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration page</h1>
      <h2>Please enter Login and Password</h2>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="registration-form"
      >
        <label className="registration-label">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className="registration-label">
          Email
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="registration-label">
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter minimum 7 characters"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Registration</button>
      </form>
    </div>
  );
}

export default RegistrationView;
