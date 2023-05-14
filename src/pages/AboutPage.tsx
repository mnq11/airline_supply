import React from 'react';
import AboutUsCounter from "../components/AboutUsCounter";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const AboutPage: React.FC = () => {
    return (
        <div>
            <br/>
            <AboutUsCounter/>
            <Banner/>
            <div className="about-us">
                <h2>About ECHO SWIFT Ltd</h2>
                <p>
                    ECHO SWIFT Ltd is a premier supply company committed to providing top-quality products and services
                    to our valued clients. Our mission is to streamline and simplify supply chains, while maintaining
                    the highest standards of quality and customer service.
                </p>
                <p>
                    With an extensive network of suppliers and partners, we offer a broad range of products and
                    services. Our team of dedicated professionals is constantly on the lookout for the best products and
                    deals, ensuring that our clients receive the best value for their money.
                </p>
                <p>
                    We understand the importance of timely delivery in the supply business, and we're committed to fast
                    and efficient service. Our clients' satisfaction is our top priority, and we strive to exceed their
                    expectations with every transaction.
                </p>
                <p>
                    At ECHO SWIFT Ltd, we believe in building long-term relationships based on trust, integrity, and
                    mutual growth. We're not just a supply company - we're your reliable partner in business.
                </p>
            </div>

            <Footer/>

        </div>
    );
}

export default AboutPage;
