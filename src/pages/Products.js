import React from 'react';
import '../App.css';
import '../styles/Products.css'
import Footer from '../components/Footer'
import Cards from '../components/Cards'


function Products(props) {

  {/** function to display all products */}

  return (
    <>
    <div className="products-header">
        PRODUCTS
    </div>
  
    {/** div calling card component (Cards.js) */}
      <div className="products-list">
        <Cards />
      </div>
      <Footer />
    </>
  )
}

export default Products