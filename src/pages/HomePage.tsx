import React from 'react';
import ImageSlider from '../components/ImageSlider';
import ProductSection from '../components/ProductSection';
import AboutUsCounter from '../components/AboutUsCounter';
import InfoCard from '../components/InfoCard';
import Banner from '../components/Banner';
import '../style/HomePage.css';
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <ImageSlider/>
            <div className="card-container">
                <div className="card-row">
                    <InfoCard
                        title="Service"
                        description="When you work with Flightparts, we offer you a complete service from initial idea to final product delivery."
                    />
                    <InfoCard
                        title="Safety"
                        description="All products comply with the required safety regulations and are manufactured in factories, which are inspected by our quality assurance partners."
                    />
                </div>
                <div className="card-row">
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
            <Banner/>
            <Footer/>
        </div>
    );
};

export default HomePage;
