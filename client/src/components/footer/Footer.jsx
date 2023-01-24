import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
      <footer className='footer__container'>
        <div className='footer__data'>
          <div className='contact__information'>
            <span>Located and made</span>
            <span>Tanglewood</span>
            <span>Brook Lane</span>
            <span>Tavistock</span>
            <span>08774734834</span>
            <span>Tavyepoxy@gmail.com</span>
          </div>
          <div className='site__navigation'>
            <a href='#'>
              <span>Home</span>
            </a>
            <a href='/about'>
              <span>About</span>
            </a>
            <a href='/gallery'>
              <span>Gallery</span>
            </a>
            <a href='/gallery'>
              <span>Contact</span>
            </a>
            <a href='/design'>
              <span>Design</span>
            </a>
            <a href='/account'>
              <span>Account</span>
            </a>
          </div>
          <div className='social__media'>
            <a href='#'>
              <span>Twitter</span>
            </a>
            <a href='#'>
              <span>Instagram</span>
            </a>
            <a href='#'>
              <span>Tic-Tok</span>
            </a>
          </div>
        </div>
        <article className='rights__footer'>
          All rights reserved. Developed by Tom Brockington
        </article>
      </footer>
    </>
  );
}

export default Footer;
