import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import './login.css';

function Login() {
  const [loginUserData, setLoginUserData] = useState({
    email: '',
    password: '',
  });
  const [loggedInUser, setLoggedInUser] = useState({})
  let navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submit');
    const { email, password } = loginUserData;

    const res = await fetch(`http://localhost:4000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const login = await res.json();
    console.log('login', login);

    localStorage.setItem(process.env.REACT_APP_USER_TOKEN, login.data);

    setLoggedInUser(login.user)

    navigate('/', {
      replace: true
    })
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log('value', value);

    setLoginUserData({
      ...loginUserData,
      [name]: value,
    });
  };
  return (
    <>
      <Nav />
      <div className='login__page'>
        <div className='login__form__container'>
          <div className='title__container'>
            <h2>LOGIN</h2>
          </div>

          <form onSubmit={handleSubmit} className='login__form'>
            <label htmlFor='email'>
              Email
              <input
                type='email'
                name='email'
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor='password'>
              Password
              <input
                type='password'
                name='password'
                onChange={handleChange}
                required
              />
            </label>

            <div className='submit__container'>
              <input type='submit' className='btn' value='Submit!' />
            </div>
          </form>

          <div className='register__link'>
            <Link to='/register'>Not a member? Register Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
