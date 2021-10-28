import React from 'react';
import Footer from '../components/Footer'
import '../styles/FAQ.css'
import FAQAccordian from '../components/FAQAccordian';


function FAQ() {
  {/** function to display FAQ accordian component */}
  return (
    <>
      <div className="faq-header">Frequently Asked Questions</div>

      {/** calling FAQAccordian to display accordian */}
      <div className="accordian">
        <FAQAccordian />
      </div>

      <Footer />



    </>
  );
}

export default FAQ;