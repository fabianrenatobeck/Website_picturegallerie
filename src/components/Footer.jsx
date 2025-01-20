import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Kontakt</h3>
                <p>Telefon: 079 734 34 89</p>
                <p>Email: support@foava.ch</p>
            </div>
            <div className="footer-section">
                <h3>Rechtliches</h3>
                <ul>
                    <li><a href="/impressum" rel="noopener noreferrer">Impressum</a></li>
                    <li><a href="/datenschutz" rel="noopener noreferrer">Datenschutzerklärung</a></li>
                    <li><a href="/agb" rel="noopener noreferrer">Allgemeine Geschäftsbedingungen (AGB)</a></li>
                    <li><a href="/widerruf" rel="noopener noreferrer">Widerrufsbelehrung</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <p>&copy; {new Date().getFullYear()} Foava. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}

export default Footer;
