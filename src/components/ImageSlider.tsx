import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider: React.FC = () => {
    const carouselStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        marginBottom: '0px',
    };

    return (
        <div style={carouselStyle}>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                emulateTouch
                interval={3000} // Slide transition duration in milliseconds (3 seconds)
                transitionTime={500} // Transition duration for slide change in milliseconds (0.5 seconds)
                stopOnHover // Stop auto play on hover
                showStatus={false} // Hide the slide indicator (dots)
            >
                <div>
                    <img
                        src="/img/pexels-ahmed-muntasir-912050.jpg"
                        alt="Slide 1"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <img
                        src="/img/pexels-marina-hinic-730778.jpg"
                        alt="Slide 2"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <img
                        src="/img/pexels-pixabay-163792.jpg"
                        alt="Slide 3"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default ImageSlider;
