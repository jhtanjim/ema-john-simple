import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='Header'>
            {/* <h1>This is header </h1> */}
            <img src={logo} alt="" />
            <div>
                <a href="/Shop ">Shop</a>
                <a href="/order">Order</a>
                <a href="inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header; <h1>This is header file</h1>