import React from 'react';

function Impressum() {
    return (
        <div className="legal-content">
            <h2>Impressum</h2>
            <p><strong>Verantwortlich:</strong> Foava AG</p>
            <p><strong>Adresse:</strong> Beispielstraße 12, 8000 Zürich, Schweiz</p>
            <p><strong>Telefon:</strong> 079 734 34 89</p>
            <p><strong>Email:</strong> support@foava.ch</p>
            <p><strong>Umsatzsteuer-ID:</strong> CHE-123.456.789</p>
            <p>
                <strong>Haftungsausschluss:</strong>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
        </div>
    );
}

export default Impressum;
