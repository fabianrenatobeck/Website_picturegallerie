// src/components/Gallery.jsx
import React from 'react';
import '../styles/Gallery.css'; // Importieren des spezifischen CSS-Styles für die Galerie

const Gallery = () => {
    // Beispielbilder - ersetze die URLs durch deine eigenen Bilder
    const images = [
        { id: 1, src: 'https://recipecontent.fooby.ch/16024_3-2_480-320.jpg', alt: 'Bild 1' },
        { id: 2, src: 'https://via.placeholder.com/200', alt: 'Bild 2' },
        { id: 3, src: 'https://via.placeholder.com/200', alt: 'Bild 3' },
        { id: 4, src: 'https://via.placeholder.com/200', alt: 'Bild 4' },
        { id: 5, src: 'https://via.placeholder.com/200', alt: 'Bild 5' },
        { id: 6, src: 'https://via.placeholder.com/200', alt: 'Bild 6' },
    ];

    return (
        <div className="gallery-container">
            <h2>Galerie</h2>
            <div className="gallery-grid">
                {images.map(image => (
                    <div key={image.id} className="gallery-item">
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
