import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Drinks from './components/Drinks';
import Cart from './components/Cart';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const drinksList = [
        {
            id: 1,
            name: 'Limeli Original',
            price: 12.99,
            description: 'Eine ausgewogene Mischung aus Alpenkräutertee, Honig, Apfelessig und Traubensaft für jeden Moment.',
            image: './assets/limeli-original.png',
            details: {
                articleNumber: '100101',
                alcoholContent: '0%',
                bottleVolume: '50cl',
                country: 'Schweiz',
                region: 'Alpen',
                bottler: 'Limeli AG',
                brand: 'Limeli',
                type: 'Erfrischungsgetränk',
                contents: 'Alpenkräutertee, Honig, Apfelessig, Traubensaft',
            },
        },
        // Weitere Getränke hier ...
    ];

    const [lists, setLists] = useState([{ name: 'Default', items: [] }]);

    const addToCart = (drink, quantity, listName = 'Default') => {
        setLists((prevLists) => {
            const list = prevLists.find((l) => l.name === listName);
            if (list) {
                const existingItem = list.items.find((item) => item.id === drink.id);
                if (existingItem) {
                    return prevLists.map((l) =>
                        l.name === listName
                            ? {
                                ...l,
                                items: l.items.map((item) =>
                                    item.id === drink.id
                                        ? { ...item, quantity: item.quantity + quantity }
                                        : item
                                ),
                            }
                            : l
                    );
                } else {
                    return prevLists.map((l) =>
                        l.name === listName
                            ? { ...l, items: [...l.items, { ...drink, quantity }] }
                            : l
                    );
                }
            } else {
                return [...prevLists, { name: listName, items: [{ ...drink, quantity }] }];
            }
        });
    };

    const createNewList = (listName) => {
        if (!listName.trim()) return; // Leere Liste nicht erstellen
        setLists((prevLists) => [...prevLists, { name: listName.trim(), items: [] }]);
    };

    const removeFromCart = (drinkId, listName, quantity) => {
        setLists((prevLists) =>
            prevLists.map((list) =>
                list.name === listName
                    ? {
                        ...list,
                        items: list.items
                            .map((item) =>
                                item.id === drinkId
                                    ? { ...item, quantity: item.quantity - quantity }
                                    : item
                            )
                            .filter((item) => item.quantity > 0),
                    }
                    : list
            )
        );
    };

    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home drinks={drinksList} />} />
                    <Route
                        path="/product/:id"
                        element={
                            <ProductDetails
                                drinks={drinksList}
                                addToCart={addToCart}
                                lists={lists}
                                createNewList={createNewList}
                            />
                        }
                    />
                    <Route
                        path="/drinks"
                        element={<Drinks drinks={drinksList} addToCart={addToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<Cart lists={lists} removeFromCart={removeFromCart} />}
                    />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
