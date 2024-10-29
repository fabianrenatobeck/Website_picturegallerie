import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Drinks.css';

const Drinks = ({ drinks, addToCart }) => {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, value) => {
        setQuantities((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <div className="drinks-container">
            <h2>Available Drinks</h2>
            <div className="drinks-grid">
                {drinks.map((drink) => (
                    <div key={drink.id} className="drink-card">
                        <h3>{drink.name}</h3>
                        <p>{drink.description}</p>
                        <p>${drink.price.toFixed(2)}</p>
                        <input
                            type="number"
                            min="1"
                            value={quantities[drink.id] || 1}
                            onChange={(e) => handleQuantityChange(drink.id, e.target.value)}
                            className="quantity-input"
                        />
                        <button onClick={() => addToCart(drink, parseInt(quantities[drink.id] || 1, 10))}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

Drinks.propTypes = {
    drinks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default Drinks;
