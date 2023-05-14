import React from 'react';
import bgImage from './img/Deal.jpg';

const Banner: React.FC = () => {
    const bannerStyle: React.CSSProperties = {
        backgroundImage: `url(${bgImage})`,
        height: '50%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Add this line
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px #000000',
        textAlign: 'center',
        padding: '1px',
        marginTop: '30px', // Adjust this value based on your needs
    };

    const responsiveBannerStyle: React.CSSProperties = {
        ...bannerStyle,
        height: '99%',
    };

    return (
        <div style={bannerStyle}>
            <div style={responsiveBannerStyle}>
                <h1>Welcome to our website!</h1>
                <h2>We are your one-stop-shop</h2>
                <p>We offer you a complete service from initial idea to final product delivery</p>
            </div>
        </div>
    );
};

export default Banner;
