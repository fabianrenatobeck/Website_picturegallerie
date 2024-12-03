import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Link für das Routing

export default function TextRight({
                                      title,
                                      text,
                                      imageSrc,
                                      linkText,
                                      linkUrl,
                                      imageSourceText,
                                      imageSourceUrl,
                                      isImageClicked,
                                      redirectPath, // Der neue prop für den Zielpfad des Buttons
                                  }) {
    return (
        <Container className="my-5 border-top border-black">
            <Row className="align-items-center pb-5 pt-5">
                <Col md={6}>
                    <div className="p-5 text-center">
                        <img
                            src={imageSrc}
                            alt={title}
                            className={`img-fluid image-style ${isImageClicked ? 'expanded' : ''}`}
                        />
                        {imageSourceText && imageSourceUrl && (
                            <p>
                                Quelle: <a href={imageSourceUrl} target="_blank" rel="noopener noreferrer">{imageSourceText}</a>
                            </p>
                        )}
                    </div>
                </Col>
                <Col md={6}>
                    <div className="text-content">
                        <h3>{title}</h3>
                        {/* Blocksatz für den Text */}
                        <p className="justified-text">{text}</p>
                        {linkText && linkUrl && (
                            <p>
                                Quelle: <a href={linkUrl} target="_blank" rel="noopener noreferrer">{linkText}</a>
                            </p>
                        )}
                        {/* "Go to" Button */}
                        {redirectPath && (
                            <Link to={redirectPath}>
                                <Button variant="primary">Go to</Button>
                            </Link>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
