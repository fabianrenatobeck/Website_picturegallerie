import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const drinksList = [
        {
            id: 1,
            name: 'Limeli Original',
            price: 12.99,
            description: 'Ein köstliches Getränk aus Schweizer Alpenkräutertee, Honig und Traubensaft.',
            image: '/images/limeli-original.png',
            details: {
                articleNumber: '100101',
                alcoholContent: '0%',
                bottleVolume: '50cl',
                country: 'Schweiz',
                region: 'Alpen',
                bottler: 'Limeli AG',
                brand: 'Limeli',
                type: 'Erfrischungsgetränk',
            },
        },
        {
            id: 2,
            name: 'Limeli Winter Edition',
            price: 14.99,
            description: 'Eine besondere Mischung aus Gewürzen für kalte Tage.',
            image: '/images/limeli-winter.png',
            details: {
                articleNumber: '100102',
                alcoholContent: '0%',
                bottleVolume: '50cl',
                country: 'Schweiz',
                region: 'Alpen',
                bottler: 'Limeli AG',
                brand: 'Limeli',
                type: 'Erfrischungsgetränk',
            },
        },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (drink, quantity) => {
        setCart((prevCart) => {
            const existingDrink = prevCart.find((item) => item.id === drink.id);
            if (existingDrink) {
                return prevCart.map((item) =>
                    item.id === drink.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prevCart, { ...drink, quantity }];
            }
        });
    };

    const removeFromCart = (drinkId, quantity) => {
        setCart((prevCart) => {
            const existingDrink = prevCart.find((item) => item.id === drinkId);
            if (existingDrink) {
                if (existingDrink.quantity <= quantity) {
                    return prevCart.filter((item) => item.id !== drinkId);
                } else {
                    return prevCart.map((item) =>
                        item.id === drinkId ? { ...item, quantity: item.quantity - quantity } : item
                    );
                }
            }
            return prevCart;
        });
    };

    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home drinks={drinksList} />} />
                    <Route
                        path="/product/:id"
                        element={<ProductDetails drinks={drinksList} addToCart={addToCart} />}
                    />
                    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
