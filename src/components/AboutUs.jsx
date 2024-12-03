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
                <h4>Über uns – Limeli</h4>
                <p>
                    Wir sind Limeli, eine kleine, aber leidenschaftliche Firma aus der Schweiz, die sich dem Ziel verschrieben hat, hochwertige und nachhaltige Getränke zu kreieren, die den Alltag bereichern und das Wohlbefinden fördern. Unsere Philosophie basiert auf der Überzeugung, dass die Natur uns alles bietet, was wir für ein gesundes und erfülltes Leben brauchen – und wir möchten diese Schätze in jedem unserer Produkte zur Geltung bringen.
                </p>
                <h4>Unsere Geschichte</h4>
                <p>
                    Die Geschichte von Limeli begann mit einer einfachen Idee: Ein Getränk zu schaffen, das nicht nur köstlich schmeckt, sondern auch gesund ist und die positiven Eigenschaften der Natur in sich trägt. Gegründet in der Schweiz, einer Region, die für ihre unberührte Natur und ihre vielfältige Flora bekannt ist, wollten wir ein Produkt entwickeln, das die besten regionalen Zutaten nutzt und gleichzeitig umweltbewusst und nachhaltig produziert wird.
                </p>
                <p>
                    Von Anfang an lag uns viel daran, ein Produkt zu erschaffen, das mehr ist als nur ein Getränk – Limeli soll eine Erfahrung sein. Eine Verbindung zur Natur, zu den Menschen, zu einem bewussteren Lebensstil. Deshalb haben wir bei Limeli von der Auswahl der Zutaten bis hin zur Produktion großen Wert auf Transparenz, Nachhaltigkeit und Fairness gelegt.
                </p>
                <h4>Unsere Produkte</h4>
                <p>
                    Jedes Limeli-Produkt ist ein Zeugnis unseres Engagements für Qualität und Nachhaltigkeit. Wir verwenden ausschließlich ausgewählte Bio-Zutaten, die aus fairen und regionalen Quellen stammen. Unser Hauptaugenmerk liegt auf der Kombination von natürlichen Zutaten wie Schweizer Alpenkräutern, Honig, Apfelessig und Traubensaft – die Grundlage für den einzigartigen Geschmack und die gesundheitsfördernden Eigenschaften unserer Getränke.
                </p>
                <p>
                    Jedes unserer Getränke ist mit Liebe und Hingabe entwickelt, um dir das Beste aus der Natur in einem Glas zu bieten. Wir bieten verschiedene Varianten, von der klassischen <em>Limeli Original</em>, über die festliche <em>Limeli Winter Edition</em>, bis hin zu den frischen und fruchtigen Varianten wie <em>Limeli Grove</em> und die luxuriöse <em>Limeli Deluxe</em> – jedes Getränk hat seinen eigenen Charakter und ist für unterschiedliche Bedürfnisse und Geschmäcker konzipiert.
                </p>
                <h4>Nachhaltigkeit und Fairness</h4>
                <p>
                    Nachhaltigkeit ist ein zentrales Anliegen von Limeli. Wir glauben, dass jedes Unternehmen Verantwortung für die Umwelt und die Gesellschaft übernehmen sollte. Deshalb setzen wir auf umweltfreundliche Verpackungen und legen großen Wert auf die Auswahl unserer Lieferanten, die sich ebenfalls den Prinzipien des Fair Trade und der Nachhaltigkeit verpflichtet fühlen. Unsere Bio-Zutaten werden lokal und nachhaltig angebaut, um die Umwelt zu schonen und gleichzeitig den Landwirten eine faire Entlohnung zu garantieren.
                </p>
                <h4>Unsere Vision</h4>
                <p>
                    Unsere Vision ist es, Limeli zu einer Marke zu machen, die für Qualität, Nachhaltigkeit und Lebensfreude steht. Wir möchten ein Produkt schaffen, das Menschen in allen Lebenslagen begleitet – sei es bei der Erfrischung zwischendurch, beim Entspannen nach einem langen Tag oder beim Genießen eines besonderen Moments im Kreise der Familie oder Freunde. Limeli soll nicht nur ein Getränk sein, sondern ein Erlebnis, das dich mit der Natur verbindet und dich gleichzeitig in deinem Alltag unterstützt.
                </p>
                <h4>Unsere Werte</h4>
                <ul>
                    <li><strong>Qualität</strong>: Wir setzen nur auf hochwertige, natürliche Zutaten aus kontrolliertem biologischen Anbau.</li>
                    <li><strong>Nachhaltigkeit</strong>: Unsere Produkte werden unter Berücksichtigung der Umwelt produziert, und wir achten auf nachhaltige Produktionsmethoden und Verpackungen.</li>
                    <li><strong>Fairness</strong>: Wir engagieren uns für den fairen Handel und den direkten Austausch mit den Bauern und Lieferanten unserer Zutaten.</li>
                    <li><strong>Innovation</strong>: Wir sind immer auf der Suche nach neuen Möglichkeiten, unsere Produkte zu verbessern und die Bedürfnisse unserer Kunden zu erfüllen.</li>
                </ul>
                <h4>Unser Versprechen</h4>
                <p>
                    Mit jedem Limeli-Produkt möchten wir dir ein Stück Natur näherbringen. Wir versprechen dir, dass wir stets auf Qualität, Transparenz und Nachhaltigkeit setzen, um dir ein Getränk zu bieten, das nicht nur gut schmeckt, sondern auch gut für dich und die Welt ist. Deine Zufriedenheit liegt uns am Herzen, und wir arbeiten kontinuierlich daran, unsere Produkte und unseren Service zu verbessern, um dir den besten Genuss zu bieten.
                </p>
                <h4>Schweizer Handwerkskunst – Made with Love</h4>
                <p>
                    Limeli ist mehr als nur ein Getränk – es ist ein Stück Schweizer Handwerkskunst. Bei der Herstellung jedes einzelnen Produkts arbeiten wir mit lokalen Produzenten und Kräuterbauern zusammen, um sicherzustellen, dass jeder Schritt der Produktion höchste Standards erfüllt. Unsere Leidenschaft für Qualität und Präzision spiegelt sich in jedem Schluck Limeli wider.
                </p>
                <h4>Danke, dass du Teil unserer Reise bist!</h4>
                <p>
                    Wir sind stolz darauf, dass du dich für Limeli entschieden hast und hoffen, dass du genauso viel Freude an unseren Produkten hast wie wir bei der Entwicklung. Gemeinsam können wir einen kleinen Beitrag zu einer nachhaltigeren Zukunft leisten und gleichzeitig den Alltag mit einem natürlichen, erfrischenden Genuss bereichern. Willkommen in der Limeli-Familie!
                </p>
            </div>

        </section>
    );
}

export default AboutUs;
