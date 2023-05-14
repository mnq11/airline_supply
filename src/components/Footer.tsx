import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/*<div className="footer-section">*/}
                {/*    <h3>Quick Links</h3>*/}
                {/*    <ul className="footer-links">*/}
                {/*        <li><Link to="/">Home</Link></li>*/}
                {/*        <li><Link to="/about">About</Link></li>*/}
                {/*        <li><Link to="/product">Product</Link></li>*/}
                {/*        <li><Link to="/customer">Customer Service</Link></li>*/}
                {/*        <li><Link to="/contact">Contact Us</Link></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>
                        24-26 OFFICE 1, IZABELLA HOUSE REGENT PLACE Birmingham, United Kingdom<br/>
                        Info@echoswift.co.uk <br/>
                        +44 7752 133299 <br/>
                        +44 7767 411189
                    </p>
                </div>

            </div>
            <div className="footer-bottom">
                <p>© 2023 Echoswift. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
