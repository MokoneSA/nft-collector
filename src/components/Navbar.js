import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" calssName="navbar-logo">
                <h1>Entry</h1>
            </Link>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Features
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Resources
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Company
                    </Link>
                </li>
            </ul>
            <button className='btn-sign-up'>Sign Up</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
