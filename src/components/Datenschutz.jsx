import React from 'react';

function Datenschutz() {
    return (
        <div className="legal-content">
            <h2>Datenschutzerklärung</h2>
            <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Diese Erklärung beschreibt, wie wir Ihre
                personenbezogenen Daten erheben, verwenden und schützen.
            </p>
            <h3>1. Verantwortliche Stelle</h3>
            <p>Foava AG, Beispielstraße 12, 8000 Zürich, Schweiz</p>
            <h3>2. Welche Daten erheben wir?</h3>
            <ul>
                <li>Persönliche Identifikationsdaten (Name, Adresse, E-Mail, etc.)</li>
                <li>Technische Daten (IP-Adresse, Browsertyp, etc.)</li>
            </ul>
            <h3>3. Verwendung der Daten</h3>
            <p>
                Ihre Daten werden verwendet, um Ihre Bestellungen zu verarbeiten, Support bereitzustellen und unsere
                Dienste zu verbessern.
            </p>
            <h3>4. Ihre Rechte</h3>
            <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer
                Daten. Kontaktieren Sie uns bei Fragen unter <strong>support@foava.ch</strong>.
            </p>
        </div>
    );
}

export default Datenschutz;
