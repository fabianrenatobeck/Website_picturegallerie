import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

function AboutUs() {
    return (
        <section className="about-us">
            <h2 className="text-center">Das sind wir</h2>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                // Automatisches Scrollen alle 3 Sekunden
            >
                <ol className="carousel-indicators">
                    <li
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                    ></li>
                    <li
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            src="../public/bild1.png"
                            alt="First slide"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Max Muster</h5>
                            <p>Geschäftsführer</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="/team2.jpg"
                            alt="Second slide"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Sarah Beispiel</h5>
                            <p>Produktentwicklung</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="/team3.jpg"
                            alt="Third slide"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>John Doe</h5>
                            <p>Marketing</p>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-bs-slide="prev"
                >
          <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
          ></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-bs-slide="next"
                >
          <span
              className="carousel-control-next-icon"
              aria-hidden="true"
          ></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
            <div className="about-text mt-4">
                <p>
                    Willkommen bei Foava! Wir sind ein leidenschaftliches Team, das sich
                    auf die Herstellung der besten Getränke spezialisiert hat. Unsere
                    Mission ist es, Qualität und Innovation zu kombinieren, um die
                    Erwartungen unserer Kunden zu übertreffen.
                </p>
                <p>
                    Jedes unserer Produkte wird mit größter Sorgfalt entwickelt, um Ihnen
                    ein einzigartiges Geschmackserlebnis zu bieten. Vielen Dank, dass Sie
                    Teil unserer Reise sind!
                </p>
            </div>
        </section>
    );
}

export default AboutUs;
