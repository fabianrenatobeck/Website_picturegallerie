import React, { useState } from 'react';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Manuell hinzugefügte Bilder
    const manualImages = [
        '../assets/limeli-arctic.png',
        '../assets/limeli-citrus.png',
        '../assets/limeli-deluxe.png',
        '../assets/limeli-grove.png',
        '../assets/limeli-herbal.png',
        '../assets/limeli-midnight.png',
        '../assets/limeli-original.png',
        '../assets/limeli-summer.png',
        '../assets/limeli-winter.png',
        '../assets/Oscar.png',
        '../assets/SIMPLE.png',
        '../assets/Zaun.png',
        '../assets/Alan.png',
        '../assets/Erde.png',
        '../assets/ich.jpeg',
        '../assets/cool.jpeg',
        '../assets/huet.jpeg',
        '../assets/girl.jpeg',
        '../assets/oscar.jpeg',


    ];

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeImage = (e) => {
        if (e.target.classList.contains('image-overlay')) {
            setSelectedImage(null);
        }
    };

    if (manualImages.length === 0) {
        return <p className="no-images-message">Keine Bilder verfügbar.</p>;
    }

    return (
        <div className="gallery-container">
            {/* Grid mit den Bildern */}
            <div className="gallery-grid">
                {manualImages.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => openImage(image)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openImage(image)}
                    >
                        <img src={image} alt={`Gallery Item ${index}`} className="gallery-image" />
                    </div>
                ))}
            </div>

            {/* Overlay für das ausgewählte Bild */}
            {selectedImage && (
                <div className="image-overlay" onClick={closeImage}>
                    <div className="image-overlay-content">
                        <img src={selectedImage} alt="Selected" className="overlay-image" />
                        <button
                            className="close-button"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Bild schließen"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
