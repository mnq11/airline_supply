import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    const topNavStyle: React.CSSProperties = {
        backgroundColor: '#333',
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '10px 0',
        zIndex: 1,
    };

    const navLinksStyle: React.CSSProperties = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    };

    const navLinkStyle: React.CSSProperties = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '0 10px',
    };

    return (
        <nav style={topNavStyle}>
            <ul style={navLinksStyle}>
                <li><Link to="/" style={navLinkStyle}>Home</Link></li>
                <li><Link to="/about" style={navLinkStyle}>About</Link></li>
                <li><Link to="/product" style={navLinkStyle}>Product</Link></li>
                <li><Link to="/customer" style={navLinkStyle}>Customer</Link></li>
                <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
