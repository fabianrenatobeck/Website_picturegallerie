import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = ({ drinks, addToCart, lists, createNewList }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = drinks.find((drink) => drink.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [selectedList, setSelectedList] = useState('Default');
    const [newListName, setNewListName] = useState('');

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedList);
    };

    const handleCreateList = () => {
        if (!newListName.trim()) return; // Verhindert leere Listennamen
        createNewList(newListName.trim());
        setSelectedList(newListName.trim());
        setNewListName('');
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Produktbild */}
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </div>

                {/* Produktdetails */}
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

                    {/* Auswahlmenü für Listen */}
                    <div className="mt-4">
                        <select
                            value={selectedList}
                            onChange={(e) => setSelectedList(e.target.value)}
                            className="form-control mb-2"
                        >
                            {lists.map((list) => (
                                <option key={list.name} value={list.name}>
                                    {list.name}
                                </option>
                            ))}
                            <option value="new">+ Create New List</option>
                        </select>

                        {/* Neues Listenformular anzeigen */}
                        {selectedList === 'new' && (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder="New List Name"
                                    value={newListName}
                                    onChange={(e) => setNewListName(e.target.value)}
                                    className="form-control mb-2"
                                />
                                <button
                                    className="btn btn-secondary"
                                    onClick={handleCreateList}
                                >
                                    Create List
                                </button>
                            </div>
                        )}

                        {/* Anzahl auswählen */}
                        <div className="d-flex align-items-center mt-3">
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
        </div>
    );
};

export default ProductDetails;
