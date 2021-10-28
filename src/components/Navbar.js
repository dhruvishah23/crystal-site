import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  {/** mobile responsive menu */}
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar' style={{ position: 'sticky' }}>
        <div className='navbar-container'>
          {/**logo */}

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

            <img src='/images/crystal-symbol.jpeg' alt="aura" style={{ width: '40px', marginRight: '20px' }} />AURA

          {/** mobile menu set up */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/** navbar links */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/FAQ' className='nav-links' onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <img src='/images/cart.jpeg' alt="cart" style={{ width: '40px', marginRight: '20px' }} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
