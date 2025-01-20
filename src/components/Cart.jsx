import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../App.css";
import Checkout from './CheckoutPage.jsx';

const Cart = ({ lists, removeFromCart, createNewList }) => {
    const [newListName, setNewListName] = useState('');
    const [selectedList, setSelectedList] = useState(null);

    const handleCreateList = () => {
        if (!newListName.trim()) {
            alert("List name cannot be empty.");
            return;
        }
        if (lists.some((list) => list.name.toLowerCase() === newListName.trim().toLowerCase())) {
            alert("A list with this name already exists.");
            return;
        }
        createNewList(newListName.trim());
        setNewListName('');
    };

    if (selectedList) {
        // Zeigt die Checkout-Seite an, wenn eine Liste ausgewählt wurde
        return (
            <Checkout
                selectedList={selectedList}
                onBackToCart={() => setSelectedList(null)}
                onConfirmPayment={() => alert('Payment confirmed!')} // Beispiel-Aktion
            />
        );
    }

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="list-grid">
                {/* Karten für alle Listen */}
                {lists.map((list) => (
                    <div
                        key={list.name}
                        className="list-card"
                        onClick={() => setSelectedList(list)} // Direkt zur Checkout-Seite wechseln
                    >
                        <h3>{list.name}</h3>
                        <h4>Total: ${list.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h4>
                        <p>{list.items.length} item(s)</p>
                    </div>
                ))}

                {/* Karte zum Erstellen einer neuen Liste */}
                <div className="list-card new-list-card">
                    <h3>Create New List</h3>
                    <input
                        type="text"
                        placeholder="New List Name"
                        value={newListName}
                        onChange={(e) => setNewListName(e.target.value)}
                        className="form-control"
                    />
                    <button className="btn btn-primary mt-2" onClick={handleCreateList}>
                        Add List
                    </button>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    lists: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    quantity: PropTypes.number.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
    removeFromCart: PropTypes.func.isRequired,
    createNewList: PropTypes.func.isRequired,
};

export default Cart;
