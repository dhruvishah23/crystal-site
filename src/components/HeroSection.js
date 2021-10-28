import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      {/** background video */}
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>EXPERIENCE THE MAGIC</h1>
      <p>The best place for authentic and conflict free crystals</p>

    {/** button links to products page (Products.js) */}
      <Link to="/products">
        <button className="hero-button" >VIEW ALL PRODUCTS</button>
      </Link>
    </div>
  );
}

export default HeroSection;
