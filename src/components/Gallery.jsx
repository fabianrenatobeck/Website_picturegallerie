// src/components/Gallery.jsx
import React, { useState } from 'react';

const Gallery = () => {
    // Beispielbilder und Videos
    const mediaItems = [
        { id: 1, src: './assets/bild1.png', alt: 'Bild 1', type: 'image' },
        { id: 2, src: '../public/bild2.png', alt: 'Bild 2', type: 'image' },
        { id: 3, src: '../public/bild3.png', alt: 'Bild 3', type: 'image' },
        { id: 4, src: '../public/1222.mp4', alt: 'Video 1', type: 'video' },
        { id: 5, src: '../public/bild4.png', alt: 'Bild 4', type: 'image' },
        { id: 6, src: '../public/1222.mp4', alt: 'Video 2', type: 'video' },
        { id: 7, src: '../public/bild5.png', alt: 'Bild 4', type: 'image' },
        { id: 8, src: '../public/bild6.png', alt: 'Bild 4', type: 'image' },
        { id: 9, src: '../public/bild1.png', alt: 'Bild 4', type: 'image' },
        { id: 10, src: '../public/bild2.png', alt: 'Bild 4', type: 'image' },
        { id: 11, src: '../public/bild3.png', alt: 'Bild 4', type: 'image' },

    ];

    // Standardmäßig wird das erste Bild oder Video angezeigt
    const [selectedMedia, setSelectedMedia] = useState(mediaItems[0].src);

    const handleMediaClick = (src) => {
        setSelectedMedia(src);
    };

    return (
        <div className="gallery-container">
            <h2>Galerie</h2>

            {/* Großes Bild oder Video */}
            <div className="large-media-container">
                {selectedMedia.endsWith('.mp4') ? (
                    <video controls className="large-media">
                        <source src={selectedMedia} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={selectedMedia} alt="Großes Bild" className="large-media" />
                )}
            </div>

            {/* Scrollbare Vorschau-Bilder und Videos */}
            <div className="thumbnail-container">
                {mediaItems.map((item) => (
                    <div
                        key={item.id}
                        className="thumbnail"
                        onClick={() => handleMediaClick(item.src)}
                    >
                        {item.type === 'video' ? (
                            <video className="thumbnail-image" muted>
                                <source src={item.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={item.src} alt={item.alt} className="thumbnail-image" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
