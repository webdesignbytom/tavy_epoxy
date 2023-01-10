import React from 'react';
import './ctabar.css';

function CTABar() {
  return (
    <section className='cta__container'>
      <div className='button__container'>
        <button className='enquire__button cta__button'>Enquire</button>
      </div>
      <div className='button__container'>
        <button className='gallery__button cta__button'>Gallery</button>
      </div>
    </section>
  );
}

export default CTABar;