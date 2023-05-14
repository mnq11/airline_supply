import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navigation.css'; // Make sure to create this file
import logo from './img/logo.jpg'; // Make sure to add your logo

const Navigation: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="topNav">
            <div className="navContent">
                <Link to="/" className="logoContainer">
                    <img src={logo} alt="Company Logo" className="logo"/>
                </Link>
                <ul className="navLinks">
                    <li><Link to="/" className={location.pathname === "/" ? "navLink activeLink" : "navLink"}>Home</Link></li>
                    <li><Link to="/about" className={location.pathname === "/about" ? "navLink activeLink" : "navLink"}>About</Link></li>
                    <li><Link to="/product" className={location.pathname === "/product" ? "navLink activeLink" : "navLink"}>Product</Link></li>
                    <li><Link to="/customer" className={location.pathname === "/customer" ? "navLink activeLink" : "navLink"}>Customer</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "navLink activeLink" : "navLink"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
