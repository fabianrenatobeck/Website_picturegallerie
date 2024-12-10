import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = ({ drinks, addToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = drinks.find((drink) => drink.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="text-primary">{product.name}</h1>
                    <h4 className="text-secondary">{product.price} CHF</h4>
                    <p className="mt-3">{product.description}</p>
                    <hr />
                    <h5>Produktdetails</h5>
                    <ul className="list-unstyled">
                        <li><strong>Artikelnummer:</strong> {product.details.articleNumber}</li>
                        <li><strong>Alkoholgehalt:</strong> {product.details.alcoholContent}</li>
                        <li><strong>Flascheninhalt:</strong> {product.details.bottleVolume}</li>
                        <li><strong>Herkunftsland:</strong> {product.details.country}</li>
                        <li><strong>Region:</strong> {product.details.region}</li>
                        <li><strong>Abfüller:</strong> {product.details.bottler}</li>
                        <li><strong>Marke:</strong> {product.details.brand}</li>
                        <li><strong>Typ:</strong> {product.details.type}</li>
                    </ul>
                    <div className="mt-4">
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                            className="form-control d-inline-block"
                            style={{ width: '100px', marginRight: '10px' }}
                        />
                        <button className="btn btn-primary" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button
                            className="btn btn-secondary ml-2"
                            onClick={() => navigate('/cart')}
                        >
                            Go to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
