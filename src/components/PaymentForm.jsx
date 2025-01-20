import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../App.css";

const PaymentForm = ({ total, onBack }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        address: '',
        city: '',
        postalCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment successful!');
        // Hier können Zahlungs-API-Integrationen hinzugefügt werden
    };

    return (
        <div className="payment-form">
            <h2>Payment Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        maxLength={16}
                    />
                </div>
                <div>
                    <label>Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                    />
                </div>
                <div>
                    <label>CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        maxLength={3}
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="payment-total">
                    <h3>Total: ${total}</h3>
                </div>
                <button type="submit">Pay Now</button>
                <button type="button" onClick={onBack}>
                    Back to Checkout
                </button>
            </form>
        </div>
    );
};

PaymentForm.propTypes = {
    total: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default PaymentForm;
