import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function AboutUsCarousel({ slides }) {
    return (
        <Carousel>
            {slides.map((slide, index) => (
                <Carousel.Item key={index} interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.title}
                        style={{ height: "400px", objectFit: "cover" }} // Beispiel-Styling
                    />
                    <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                        <a href={slide.linkUrl} target="_blank" rel="noopener noreferrer">
                            {slide.linkName}
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default function AboutUs() {
    const personenSlides = [
        {
            image: "path/to/image1.jpg", // Ersetze durch den tatsächlichen Bildpfad
            title: "Henri Guisan",
            description: "Wichtiger militärischer Führer im 2. Weltkrieg.",
            linkUrl: "https://www.nzz.ch/schweiz/ein-gluecksfall-in-der-gefaehrlichsten-phase-unserer-geschichte-wie-general-guisan-zum-held-der-schweiz-wurde-und-was-er-uns-heute-noch-sagt-ld.1853528",
            linkName: "Henri Guisan",
            internalLink: "/wichtige-personlichkeiten",
        },
        {
            image: "path/to/image2.jpg",
            title: "Samuel Gonard",
            description: "Kompetenter Stratege im 2. Weltkrieg.",
            linkUrl: "https://de-academic.com/dic.nsf/dewiki/1230769",
            linkName: "Samuel Gonard",
            internalLink: "/wichtige-personlichkeiten",
        },
        {
            image: "path/to/image3.jpg",
            title: "Carl Buckhardt",
            description: "Präsident des Internationalen Komitees vom Roten Kreuz im 2. Weltkrieg.",
            linkUrl: "https://de.wikipedia.org/wiki/Carl_Jacob_Burckhardt",
            linkName: "Carl Buckhardt",
            internalLink: "/wichtige-personlichkeiten",
        },
        {
            image: "path/to/image4.jpg",
            title: "Roger Masson",
            description: "Zuständig für das Informationsnetz.",
            linkUrl: "https://en.wikipedia.org/wiki/Roger_Masson",
            linkName: "Roger Masson",
            internalLink: "/wichtige-personlichkeiten",
        },
    ];

    return (
        <section className="about-us">
            <h2 className="text-center">Das sind wir</h2>
            <div className="carousel-container my-4">
                <AboutUsCarousel slides={personenSlides} />
            </div>
            <div className="about-text mt-4">
                <h4>Über uns – Limeli</h4>
                <p>
                    Wir sind Limeli, eine kleine, aber leidenschaftliche Firma aus der Schweiz, die sich dem Ziel
                    verschrieben hat, hochwertige und nachhaltige Getränke zu kreieren, die den Alltag bereichern
                    und das Wohlbefinden fördern. Unsere Philosophie basiert auf der Überzeugung, dass die Natur uns
                    alles bietet, was wir für ein gesundes und erfülltes Leben brauchen – und wir möchten diese
                    Schätze in jedem unserer Produkte zur Geltung bringen.
                </p>

                <h4>Unsere Geschichte</h4>
                <p>
                    Die Geschichte von Limeli begann mit einer einfachen Idee: Ein Getränk zu schaffen, das nicht
                    nur köstlich schmeckt, sondern auch gesund ist und die positiven Eigenschaften der Natur in sich
                    trägt. Gegründet in der Schweiz, einer Region, die für ihre unberührte Natur und ihre
                    vielfältige Flora bekannt ist, wollten wir ein Produkt entwickeln, das die besten regionalen
                    Zutaten nutzt und gleichzeitig umweltbewusst und nachhaltig produziert wird.
                </p>

                <h4>Unsere Produkte</h4>
                <p>
                    Jedes Limeli-Produkt ist ein Zeugnis unseres Engagements für Qualität und Nachhaltigkeit. Wir
                    verwenden ausschließlich ausgewählte Bio-Zutaten, die aus fairen und regionalen Quellen stammen.
                    Unser Hauptaugenmerk liegt auf der Kombination von natürlichen Zutaten wie Schweizer
                    Alpenkräutern, Honig, Apfelessig und Traubensaft – die Grundlage für den einzigartigen Geschmack
                    und die gesundheitsfördernden Eigenschaften unserer Getränke.
                </p>

                <h4>Nachhaltigkeit und Fairness</h4>
                <p>
                    Nachhaltigkeit ist ein zentrales Anliegen von Limeli. Wir glauben, dass jedes Unternehmen
                    Verantwortung für die Umwelt und die Gesellschaft übernehmen sollte. Deshalb setzen wir auf
                    umweltfreundliche Verpackungen und legen großen Wert auf die Auswahl unserer Lieferanten, die
                    sich ebenfalls den Prinzipien des Fair Trade und der Nachhaltigkeit verpflichtet fühlen.
                </p>

                <h4>Unsere Vision</h4>
                <p>
                    Unsere Vision ist es, Limeli zu einer Marke zu machen, die für Qualität, Nachhaltigkeit und
                    Lebensfreude steht. Wir möchten ein Produkt schaffen, das Menschen in allen Lebenslagen
                    begleitet – sei es bei der Erfrischung zwischendurch, beim Entspannen nach einem langen Tag oder
                    beim Genießen eines besonderen Moments im Kreise der Familie oder Freunde.
                </p>

                <h4>Unsere Werte</h4>
                <ul>
                    <li>
                        <strong>Qualität</strong>: Wir setzen nur auf hochwertige, natürliche Zutaten aus
                        kontrolliertem biologischen Anbau.
                    </li>
                    <li>
                        <strong>Nachhaltigkeit</strong>: Unsere Produkte werden unter Berücksichtigung der Umwelt
                        produziert, und wir achten auf nachhaltige Produktionsmethoden und Verpackungen.
                    </li>
                    <li>
                        <strong>Fairness</strong>: Wir engagieren uns für den fairen Handel und den direkten
                        Austausch mit den Bauern und Lieferanten unserer Zutaten.
                    </li>
                    <li>
                        <strong>Innovation</strong>: Wir sind immer auf der Suche nach neuen Möglichkeiten, unsere
                        Produkte zu verbessern und die Bedürfnisse unserer Kunden zu erfüllen.
                    </li>
                </ul>

                <h4>Unser Versprechen</h4>
                <p>
                    Mit jedem Limeli-Produkt möchten wir dir ein Stück Natur näherbringen. Wir versprechen dir, dass
                    wir stets auf Qualität, Transparenz und Nachhaltigkeit setzen, um dir ein Getränk zu bieten, das
                    nicht nur gut schmeckt, sondern auch gut für dich und die Welt ist.
                </p>

                <h4>Schweizer Handwerkskunst – Made with Love</h4>
                <p>
                    Limeli ist mehr als nur ein Getränk – es ist ein Stück Schweizer Handwerkskunst. Unsere
                    Leidenschaft für Qualität und Präzision spiegelt sich in jedem Schluck Limeli wider.
                </p>

                <h4>Danke, dass du Teil unserer Reise bist!</h4>
                <p>
                    Wir sind stolz darauf, dass du dich für Limeli entschieden hast. Gemeinsam können wir einen kleinen
                    Beitrag zu einer nachhaltigeren Zukunft leisten. Willkommen in der Limeli-Familie!
                </p>
            </div>
        </section>
    );
}
