import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                                <button onClick={() => removeFromCart(item.id, 1)}>Remove 1</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${getTotalPrice()}</h3>
                </>
            )}
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
