import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Nav from '../../components/nav/Nav';
// Styles
import './register.css';
import PhoneNav from '../../components/nav/PhoneNav';

function Register() {
  const { togglePhoneNav } = useContext(ToggleContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submit');

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const { email, password } = formData;

    const res = await fetch(`http://localhost:4000/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const userResData = await res.json();

    navigate('/login', {
      replace: true,
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log('value', value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {togglePhoneNav ? (
        <PhoneNav />
      ) : (
        <>
          <Nav />
          <div className='register__page'>
            <div className='register__form__container'>
              <div className='title__container'>
                <h2>REGISTER</h2>
              </div>

              <form onSubmit={handleSubmit} className='register__form'>
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

                <label htmlFor='confirmPassword'>
                  Confirm Password
                  <input
                    type='password'
                    name='confirmPassword'
                    onChange={handleChange}
                    required
                  />
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
      )}
    </>
  );
}

export default Register;
