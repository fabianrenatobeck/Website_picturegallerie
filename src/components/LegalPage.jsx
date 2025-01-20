import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';
import AGB from './AGB';
import Widerruf from './Widerruf';
import "./LegalPage.css";

function LegalPage() {
    return (
        <Router>
            <div className="legal-page">
                <nav className="legal-nav">
                    <ul>
                        <li><Link to="/impressum">Impressum</Link></li>
                        <li><Link to="/datenschutz">Datenschutzerklärung</Link></li>
                        <li><Link to="/agb">AGB</Link></li>
                        <li><Link to="/widerruf">Widerrufsbelehrung</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/datenschutz" element={<Datenschutz />} />
                    <Route path="/agb" element={<AGB />} />
                    <Route path="/widerruf" element={<Widerruf />} />
                </Routes>
            </div>
        </Router>
    );
}

export default LegalPage;
