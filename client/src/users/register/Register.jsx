import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import './register.css';

import { useNavigate } from 'react-router-dom';
function Register() {
  let navigate = useNavigate();
  navigate('/login', {
    replace: true,
  });
  return (
    <>
      <Nav />
      <div className='register__page'>
        <div className='register__form__container'>
          <div className='title__container'>
            <h2>REGISTER</h2>
          </div>

          <form action='' className='register__form'>
            <label htmlFor='email'>
              Email
              <input type='email' name='email' />
            </label>

            <label htmlFor='password'>
              Password
              <input type='password' name='password' />
            </label>

            <label htmlFor='confirmPassword'>
              Confirm Password
              <input type='password' name='confirmPassword' />
            </label>

            <div className='submit__container'>
              <input type='submit' className='btn' value='Submit!' />
            </div>
          </form>

          <div className='login__link'>
            <Link to='/login'>Already a member? Login here!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
