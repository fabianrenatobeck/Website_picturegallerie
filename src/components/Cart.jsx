import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../App.css";

const Cart = ({ lists, removeFromCart, createNewList }) => {
    const [openList, setOpenList] = useState(null);
    const [newListName, setNewListName] = useState('');

    const getTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleCreateList = () => {
        if (!newListName.trim()) {
            alert("List name cannot be empty."); // Fehlermeldung anzeigen
            return;
        }
        if (lists.some((list) => list.name.toLowerCase() === newListName.trim().toLowerCase())) {
            alert("A list with this name already exists."); // Doppelte Namen verhindern
            return;
        }
        createNewList(newListName.trim());
        setNewListName('');
    };

    const isListOpen = (listName) => openList === listName;

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className={`list-grid ${openList ? "list-expanded" : ""}`}>
                {/* Karten für alle Listen */}
                {lists.map((list) => (
                    <div
                        key={list.name}
                        className={`list-card ${isListOpen(list.name) ? "expanded" : ""}`}
                        onClick={() => setOpenList(isListOpen(list.name) ? null : list.name)}
                    >
                        <h3>{list.name}</h3>
                        {isListOpen(list.name) && (
                            <div className="list-content">
                                {list.items.length === 0 ? (
                                    <p>No items in this list.</p>
                                ) : (
                                    <>
                                        <ul>
                                            {list.items.map((item) => (
                                                <li key={item.id} className="cart-item">
                                                    {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Verhindert das Schließen der Liste
                                                            removeFromCart(item.id, list.name, 1);
                                                        }}
                                                    >
                                                        Remove 1
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        <h4>Total: ${getTotalPrice(list.items)}</h4>
                                    </>
                                )}
                                <button
                                    className="btn btn-secondary mt-2"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Verhindert Schließen beim Klicken
                                        setOpenList(null);
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                ))}

                {/* Karte zum Erstellen einer neuen Liste */}
                {!openList && (
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
                )}
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
