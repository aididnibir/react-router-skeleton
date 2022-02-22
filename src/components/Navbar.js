import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/services">Services</Link>
                </li>

                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
