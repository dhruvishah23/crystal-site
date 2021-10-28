import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer'


function Home() {
  {/** function to display homepage */}
  return (
    <>
    {/** calling herosection (HeroSection.js) to display homepage and footer (Footer.js) */}
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;