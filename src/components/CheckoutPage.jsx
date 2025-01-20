import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../App.css";
import PaymentForm from './PaymentForm';

const CheckoutPage = ({ selectedList, onBackToCart }) => {
    const [items, setItems] = useState(selectedList.items);
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const calculateTotal = () => {
        const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
        const deliveryFee = 5.99; // Fixed delivery fee
        const tax = (subtotal * 0.1).toFixed(2); // 10% tax
        return {
            subtotal: subtotal.toFixed(2),
            deliveryFee: deliveryFee.toFixed(2),
            tax: parseFloat(tax),
            total: (subtotal + deliveryFee + parseFloat(tax)).toFixed(2),
        };
    };

    const handleQuantityChange = (id, quantity) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const total = calculateTotal();

    if (showPaymentForm) {
        return <PaymentForm total={total.total} onBack={() => setShowPaymentForm(false)} />;
    }

    return (
        <div className="checkout-page">
            <h2>Your Bag</h2>

            <div className="checkout-items">
                {items.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <div>
                            <h4>{item.name}</h4>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <input
                            type="number"
                            value={item.quantity}
                            min={1}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                        />
                    </div>
                ))}
            </div>

            <div className="checkout-summary">
                <h3>Total</h3>
                <p>Subtotal: ${total.subtotal}</p>
                <p>Delivery Fee: ${total.deliveryFee}</p>
                <p>Tax: ${total.tax}</p>
                <h4>Total: ${total.total}</h4>
            </div>

            <div className="checkout-actions">
                <button onClick={() => setShowPaymentForm(true)}>Jetzt bezahlen</button>
                <button onClick={onBackToCart}>Zurück zum Warenkorb</button>
            </div>
        </div>
    );
};

CheckoutPage.propTypes = {
    selectedList: PropTypes.shape({
        name: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                quantity: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
    onBackToCart: PropTypes.func.isRequired,
};

export default CheckoutPage;
