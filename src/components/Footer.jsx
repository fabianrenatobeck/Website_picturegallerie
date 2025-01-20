import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Kontakt</h3>
                <p>Telefon: <a href="tel:+41797343489">079 734 34 89</a></p>
                <p>Email: <a href="mailto:support@foava.ch">support@foava.ch</a></p>
            </div>
            <div className="footer-section">
                <h3>Rechtliches</h3>
                <ul>
                    <li><Link to="/legal/impressum">Impressum</Link></li>
                    <li><Link to="/legal/datenschutz">Datenschutzerklärung</Link></li>
                    <li><Link to="/legal/agb">AGB</Link></li>
                    <li><Link to="/legal/widerruf">Widerrufsbelehrung</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <p>&copy; {new Date().getFullYear()} Foava. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}

export default Footer;
