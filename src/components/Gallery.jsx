import React, { useState } from 'react';

function Gallery() {
    const [selectedMedia, setSelectedMedia] = useState(null);

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

    // Manuell hinzugefügte Videos
    const manualVideos = [
        '../assets/0120.mp4', // Beispielvideo
    ];

    const openMedia = (media) => {
        setSelectedMedia(media);
    };

    const closeMedia = (e) => {
        if (e.target.classList.contains('media-overlay')) {
            setSelectedMedia(null);
        }
    };

    return (
        <div className="gallery-container">
            {/* Grid mit Bildern und Videos */}
            <div className="gallery-grid">
                {/* Bilder */}
                {manualImages.map((image, index) => (
                    <div
                        key={`image-${index}`}
                        className="gallery-item"
                        onClick={() => openMedia({ type: 'image', src: image })}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openMedia({ type: 'image', src: image })}
                    >
                        <img src={image} alt={`Gallery Item ${index}`} className="gallery-image" />
                    </div>
                ))}

                {/* Videos */}
                {manualVideos.map((video, index) => (
                    <div
                        key={`video-${index}`}
                        className="gallery-item"
                        onClick={() => openMedia({ type: 'video', src: video })}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openMedia({ type: 'video', src: video })}
                    >
                        <video src={video} className="gallery-video" muted loop />
                    </div>
                ))}
            </div>

            {/* Overlay für das ausgewählte Medium */}
            {selectedMedia && (
                <div className="media-overlay" onClick={closeMedia}>
                    <div className="media-overlay-content">
                        {selectedMedia.type === 'image' ? (
                            <img src={selectedMedia.src} alt="Selected" className="overlay-media" />
                        ) : (
                            <video src={selectedMedia.src} controls autoPlay className="overlay-media" />
                        )}
                        <button
                            className="close-button"
                            onClick={() => setSelectedMedia(null)}
                            aria-label="Schließen"
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
