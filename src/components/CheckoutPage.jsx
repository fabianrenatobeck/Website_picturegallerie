import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../App.css";

const CheckoutPage = ({ selectedList, onBackToCart, onConfirmPayment }) => {
    const [items, setItems] = useState(selectedList.items);

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

    return (
        <div className="checkout-page" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ color: '#FF8C00', marginBottom: '20px' }}>Your Bag</h2>

            <div className="checkout-items" style={{ marginBottom: '30px' }}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="checkout-item"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', gap: '15px' }}>
                            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '5px', objectFit: 'cover' }} />
                            <div>
                                <h4 style={{ marginBottom: '5px', color: '#333' }}>{item.name}</h4>
                                <p style={{ color: '#777' }}>{item.description}</p>
                                <p style={{ color: '#777' }}>Article Number: {item.details.articleNumber}</p>
                                <p style={{ color: '#777' }}>Bottle Volume: {item.details.bottleVolume}</p>
                                <p style={{ color: '#777' }}>Type: {item.details.type}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input
                                type="number"
                                value={item.quantity}
                                min={1}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                style={{ width: '50px', padding: '5px', textAlign: 'center', border: '1px solid #ccc', borderRadius: '5px' }}
                            />
                            <span style={{ fontWeight: 'bold', color: '#FF8C00' }}>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="checkout-summary" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ color: '#FF8C00', borderBottom: '2px solid #FF8C00', paddingBottom: '10px' }}>Total</h3>
                {items.map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>{item.quantity} x {item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', borderTop: '1px solid #f0f0f0', paddingTop: '10px' }}>
                    <span>Subtotal</span>
                    <span>${total.subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <span>Delivery Fee</span>
                    <span>${total.deliveryFee}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <span>Tax</span>
                    <span>${total.tax}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', fontWeight: 'bold', fontSize: '1.2em' }}>
                    <span>Total</span>
                    <span>${total.total}</span>
                </div>
            </div>

            <div className="checkout-actions" style={{ marginTop: '30px', textAlign: 'center' }}>
                <button
                    onClick={onConfirmPayment}
                    style={{ backgroundColor: '#FF8C00', color: '#fff', padding: '15px 20px', border: 'none', borderRadius: '5px', fontSize: '1em', cursor: 'pointer' }}
                >
                    Confirm Payment
                </button>
                <button
                    onClick={onBackToCart}
                    style={{ marginLeft: '10px', backgroundColor: '#f0f0f0', color: '#333', padding: '15px 20px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1em', cursor: 'pointer' }}
                >
                    Back to Cart
                </button>
            </div>

            <div className="delivery-estimation" style={{ marginTop: '20px' }}>
                <h4 style={{ marginBottom: '10px', color: '#333' }}>Estimated Delivery</h4>
                <p style={{ color: '#777' }}>We, {new Date().toLocaleDateString()} - Fr, {new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString()}</p>
            </div>

            <div className="payment-methods" style={{ marginTop: '20px' }}>
                <h4 style={{ marginBottom: '10px', color: '#333' }}>We Accept</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <img src="/images/visa.png" alt="Visa" style={{ height: '30px' }} />
                    <img src="/images/mastercard.png" alt="MasterCard" style={{ height: '30px' }} />
                    <img src="/images/paypal.png" alt="PayPal" style={{ height: '30px' }} />
                    <img src="/images/amex.png" alt="American Express" style={{ height: '30px' }} />
                    <img src="/images/sepa.png" alt="SEPA" style={{ height: '30px' }} />
                    <img src="/images/discover.png" alt="Discover" style={{ height: '30px' }} />
                </div>
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
                size: PropTypes.string,
                color: PropTypes.string,
            })
        ).isRequired,
    }).isRequired,
    onBackToCart: PropTypes.func.isRequired,
    onConfirmPayment: PropTypes.func.isRequired,
};

export default CheckoutPage;
