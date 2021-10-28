import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our newsletter to be ther first to receive special deals!
        </p>
        
        <div className='input-areas'>
          {/** email subscription form and button */}
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Link to="/">
              <button className="subscribe-button" >SUBSCRIBE</button>
            </Link>
          </form>

        </div>
      </section>

      {/** footer links */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>Products</h3>
            <Link to='/products'>All Products</Link>
            <Link to='/'>Raw Crystals</Link>
            <Link to='/'>Polished Crystals</Link>
            <Link to='/'>Jewellery</Link>
          </div>
          <div class='footer-link-items'>
            <h3>Information</h3>
            <Link to='/'>Crystal Care</Link>
            <Link to='/'>Charging & Cleansing</Link>
            <Link to='/'>Crystal Quiz</Link>
            <Link to='/'>Manifestation</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>General</h3>
            <Link to='/'>About Us</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/'>Gallery</Link>
          </div>
          <div class='footer-link-items'>
            <h3>Social Media</h3>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>TikTok</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
