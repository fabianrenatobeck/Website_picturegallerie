import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function TextLeft({ title, text, imageSrc, linkText, linkUrl, imageSourceText, imageSourceUrl, isImageClicked }) {
    return (
        <Container className="my-5 border-top border-black">
            <Row className="align-items-center pb-5 pt-5">
                <Col md={6}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    {linkText && linkUrl && (
                        <p>
                            Quelle: <a href={linkUrl} target="_blank" rel="noopener noreferrer">{linkText}</a>
                        </p>
                    )}
                </Col>
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
            </Row>
        </Container>
    );
}