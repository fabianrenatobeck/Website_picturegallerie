import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetails({ product, addToCart }) {
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Produktbild */}
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>

                {/* Produktinformationen */}
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
                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => addToCart(product, 1)}
                    >
                        In den Warenkorb
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
