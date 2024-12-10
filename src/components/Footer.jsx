import React from 'react';
import './Footer.css'; // Separater Stil für den Footer

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Kontakte</h3>
                <p>Support: tel. 079 734 34 89</p>
                <p>Email: support@foava.ch</p>
            </div>
            <div className="footer-section">
                <h3>Socials</h3>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://youtube.com">YouTube</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://instagram.com">Instagram</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com">Twitter</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://tiktok.com">TikTok</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Products</h3>
                <ul>
                    <li>Zitronenlimonade</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
