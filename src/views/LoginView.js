import React, { useState } from 'react';
import '../styles/StyleViews.scss';
import { useDispatch } from 'react-redux';
import authOperation from '../redux/auth/auth-operation';

function LoginView({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
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

    dispatch(authOperation.logIn({ email: email, password: password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>
      <h2>Please enter Login and Password</h2>

      <form onSubmit={handleSubmit} autoComplete="off" className="login-form">
        <label className="logit-label">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="logit-label">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginView;
