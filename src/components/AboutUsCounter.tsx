import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { GiAirplaneDeparture, GiTrophyCup, GiAirplane } from 'react-icons/gi';
import { CSSTransition } from 'react-transition-group';
import '../style/AboutUsSection.css'; // Import the CSS

const AboutUsSection: React.FC = () => {
    const aboutUsData = [
        {
            icon: <GiAirplane />,
            count: 2000,
            description: 'Service Experiences',
        },
        {
            icon: <GiAirplaneDeparture />,
            count: 60,
            description: 'Airlines Served',
        },
        {
            icon: <GiTrophyCup />,
            count: 10,
            description: 'Inflight Product Manufacturer Ranking',
        },
    ];

    const aboutUsGridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gridGap: '20px',
        textAlign: 'center',
        padding: '20px',
        marginTop: '20px',
    };

    const cardStyle: React.CSSProperties = {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        background: '#f4f4f4',
        transition: 'transform 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const countStyle: React.CSSProperties = {
        fontSize: '2em',
        color: '#333',
        marginBottom: '10px',
    };

    const iconStyle: React.CSSProperties = {
        fontSize: '3em',
        color: '#333',
    };

    const [isCounting, setCounting] = useState(false);

    useEffect(() => {
        setCounting(true);
    }, []);

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.style.transform = 'scale(1.05)';
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.style.transform = 'scale(1)';
    };

    return (
        <div>
            <h1>About Us</h1>
            <p>ECHO SWIFT Ltd</p>
            <div style={aboutUsGridStyle}>
                {aboutUsData.map((data, index) => (
                    <div
                        key={index}
                        style={cardStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <CSSTransition in={true} appear={true} timeout={500} classNames="bounce">
                            <div>
                                <p style={iconStyle}>{data.icon}</p>
                                <p style={countStyle}>
                                    {isCounting ? <CountUp end={data.count} duration={2.75} /> : data.count}
                                </p>
                                <p>{data.description}</p>
                            </div>
                        </CSSTransition>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUsSection;
