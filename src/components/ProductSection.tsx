import React from 'react';
import {Link} from 'react-router-dom';
import productsData from '../data/products.json';

interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
}

const ProductSection: React.FC = () => {
    const products: Product[] = productsData;

    const productGridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '20px',
    };

    const productCardStyle: React.CSSProperties = {
        position: 'relative',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        height: '300px',
    };

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        transition: 'transform 0.5s ease', // Added transition effect
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease', // Added transition effect
    };

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        opacity: 0,
        transition: 'all 0.5s ease', // Apply the transition to all properties
        transform: 'translateY(100%)', // Initially the overlay is translated downward
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const overlay = event.currentTarget.querySelector('.overlay') as HTMLElement;
        overlay.style.opacity = '1';
        overlay.style.transform = 'translateY(0%)'; // Move the overlay upwards to its original position

        const image = event.currentTarget.querySelector('img') as HTMLElement;
        image.style.transform = 'scale(1.1)'; // Zoom in the image
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const overlay = event.currentTarget.querySelector('.overlay') as HTMLElement;
        overlay.style.opacity = '0';
        overlay.style.transform = 'translateY(100%)'; // Move the overlay downwards

        const image = event.currentTarget.querySelector('img') as HTMLElement;
        image.style.transform = 'scale(1.0)'; // Reset the image zoom
    };

    return (
        <div>
            <h1>Product</h1>
            <div style={productGridStyle} className="product-grid">
                {products.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div
                            style={productCardStyle}
                            className="product-card"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div style={imageContainerStyle} className="image-container">
                                <img style={imageStyle} src={product.image} alt={product.title} />
                                <div style={overlayStyle} className="overlay">
                                    <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default ProductSection;
