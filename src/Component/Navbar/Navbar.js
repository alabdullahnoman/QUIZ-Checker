import React from 'react';
import './Navbar.css'
import logo from '../../images/icons/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    return (
        <nav className='navbar'>
            <div className='brand-title'>
            <span>
            <img src={logo} alt="" />
            </span>
             <span>Quiz Crackers</span>
             </div>
             <nav className='navbar-link'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/topic'>Topic</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blog'> Blog</Link></li>
                </ul>
             </nav>
        </nav>
    );
};

export default Navbar;