import React from 'react';
import {Link} from 'react-router-dom';
import productsData from '../data/products.json';
import '../style/ProductSection.css';

interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
}

const ProductSection: React.FC = () => {
    const products: Product[] = productsData;

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const overlay = event.currentTarget.querySelector('.overlay') as HTMLElement;
        overlay.style.opacity = '1';
        overlay.style.transform = 'translateY(0%)';

        const image = event.currentTarget.querySelector('.product-image') as HTMLElement;
        image.style.transform = 'scale(1.1)';
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const overlay = event.currentTarget.querySelector('.overlay') as HTMLElement;
        overlay.style.opacity = '0';
        overlay.style.transform = 'translateY(100%)';

        const image = event.currentTarget.querySelector('.product-image') as HTMLElement;
        image.style.transform = 'scale(1.0)';
    };

    return (
        <div>
            <h1>Product</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div
                            className="product-card"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="image-container">
                                <img className="product-image" src={product.image} alt={product.title}/>
                                <div className="overlay">
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
