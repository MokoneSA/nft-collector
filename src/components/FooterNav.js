import React from 'react';
import { Link } from 'react-router-dom';
import '../components/FooterNav.css';

function NavbarFooter(){
  return (
    <>
      <nav className="footerNav">
        <div className="navbar-container">
            <div className='footer-logo'>
            <Link to="/" calssName="navbar-logo">
                <h3>Entry</h3>
            </Link>
            </div>
            <ul className='nav-footer'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Explore
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Help Center
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Become a partner
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Job
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default NavbarFooter
