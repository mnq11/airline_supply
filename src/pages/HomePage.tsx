import React from 'react';
import ImageSlider from '../components/ImageSlider';
import ProductSection from '../components/ProductSection';
import AboutUsCounter from '../components/AboutUsCounter';
const cardContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: '20px', // Add a default margin top

};

const cardStyle: React.CSSProperties = {
    width: 'calc(50% - 10px)',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
};

const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#555',
};

const InfoCard: React.FC<{ title: string; description: string }> = ({title, description}) => {
    return (
        <div style={cardStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <p style={descriptionStyle}>{description}</p>
        </div>
    );
};

const HomePage: React.FC = () => {
    const homePageStyle: React.CSSProperties = {
        marginTop: '-20px', // Add a negative margin to remove the top gap
    };
    return (
        <div style={homePageStyle}>
            <ImageSlider/>
            <div style={{ ...cardContainerStyle, marginTop: '-20px' }}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <InfoCard
                        title="Service"
                        description="When you work with Flightparts, we offer you a complete service from initial idea to final product delivery."
                    />
                    <InfoCard
                        title="Safety"
                        description="All products comply with the required safety regulations and are manufactured in factories, which are inspected by our quality assurance partners."
                    />
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <InfoCard
                        title="Specialize"
                        description="We specialize in catering and comfort in-flight products; and onboard solutions to companies that serve people on the move. Our customers include top airlines around the world that rely on our expertise and solutions tailored to their guest, their service offerings and the geographic regions where they operate."
                    />
                    <InfoCard
                        title="Strategy"
                        description="Our Strategy is to provide our customers with the most cost effective, fast, reliable, certified, and ready to install aircraft parts and supplies. We achieve this by treating customers as partners and together finding collaborative ways to reduce overall costs and to increase efficiencies."
                    />
                </div>
            </div>
            <ProductSection/>
            <AboutUsCounter/>
        </div>
    );
};

export default HomePage;
