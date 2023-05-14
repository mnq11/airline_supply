// ProductDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import Footer from "../components/Footer";

interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
    Offer_deals?: string; // This property is now optional

}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            const foundProduct = productsData.find((product: Product) => product.id === parseInt(id)) || null;
            setProduct(foundProduct);
        }
    }, [id]);

    if (!product) return <div>Product not found!</div>;

    return (
        <div className="product-detail-container">
            <div className="product-detail-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-detail-content">
                <h2 className="product-detail-title">{product.title}</h2>
                <p className="product-detail-description">{product.description}</p>
                {product.Offer_deals && <p className="product-detail-offer">Offer: {product.Offer_deals}</p>}
            </div>
            <Footer/>
        </div>
    );
};

export default ProductDetail;