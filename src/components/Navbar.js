import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from './Button';

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
            <Button className='btn-sign-up'>Sign Up</Button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
