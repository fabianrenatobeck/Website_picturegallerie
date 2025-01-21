Hier ist ein aktualisiertes **README.md**, das auf der gezeigten Struktur und den beschriebenen Funktionalitäten basiert:

---

# **Limeli - Web Application**

## **Überblick**
Die Limeli-Webanwendung ist eine Plattform, die hochwertige Bio-Limonadenprodukte präsentiert. Sie bietet ein modernes und responsives Design, das durch Funktionen wie einen Produktkatalog, eine Bild- und Videogalerie, einen Einkaufswagen und Checkout-Prozesse ergänzt wird.

---

## **Inhalt**
1. [Features](#features)
2. [Technologien](#technologien)
3. [Setup und Installation](#setup-und-installation)
4. [Projektstruktur](#projektstruktur)
5. [Screenshots](#screenshots)
6. [Mitwirkende](#mitwirkende)
7. [Lizenz](#lizenz)

---

## **Features**
- **Produktkatalog:** Anzeige detaillierter Informationen zu jedem Getränk mit Bildern.
- **Galerie:** Anzeige von Bildern und Videos aus den Assets mit Zoom-Funktion.
- **Einkaufswagen:** Produkte können hinzugefügt, bearbeitet oder entfernt werden.
- **Checkout:** Enthält eine Zahlungsformularseite.
- **Rechtliche Seiten:** Impressum, Datenschutz, AGB und Widerruf.
- **Responsives Design:** Optimiert für Desktop und Mobilgeräte.

---

## **Technologien**
- **Frontend:** React.js mit React Router
- **Styling:** CSS, Bootstrap
- **Medien:** Lokale Assets für Bilder und Videos
- **Build-Tool:** Vite.js

---

## **Setup und Installation**

### Voraussetzungen
- Node.js (>=16.x.x)
- NPM oder Yarn

### Schritte
1. **Repository klonen:**
   ```bash
   git clone https://github.com/username/limeli-web.git
   cd limeli-web
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

4. **Anwendung öffnen:**
   Die Anwendung ist unter [http://localhost:5173](http://localhost:5173) verfügbar.

---

## **Projektstruktur**

```
src/
│
├── assets/                   # Bilder und Videos
│   ├── girl.jpeg
│   ├── huet.jpeg
│   ├── ich.jpeg
│   ├── limeli-arctic.png
│   ├── limeli-citrus.png
│   ├── limeli-deluxe.png
│   ├── limeli-grove.png
│   ├── limeli-herbal.png
│   ├── limeli-midnight.png
│   ├── limeli-original.png
│   ├── limeli-summer.png
│   ├── limeli-winter.png
│   ├── SIMPLE.png
│   └── Zaun.png
│
├── components/               # React-Komponenten
│   ├── TextFormatting/
│   │   ├── carousel.jsx
│   │   ├── TextLeft.jsx
│   │   └── TextRight.jsx
│   ├── AboutUs.jsx           # Über uns Seite
│   ├── AGB.jsx               # Allgemeine Geschäftsbedingungen
│   ├── Cart.jsx              # Einkaufswagen-Komponente
│   ├── CheckoutPage.jsx      # Checkout-Seite
│   ├── Datenschutz.jsx       # Datenschutz-Seite
│   ├── Drinks.jsx            # Liste der Getränke
│   ├── Footer.jsx            # Footer
│   ├── Gallery.jsx           # Galerie für Bilder und Videos
│   ├── Home.jsx              # Startseite
│   ├── Impressum.jsx         # Impressum
│   ├── LegalPage.jsx         # Wrapper für rechtliche Seiten
│   ├── Navbar.jsx            # Navigationsleiste
│   ├── PaymentForm.jsx       # Zahlungsformular
│   ├── ProductDetails.jsx    # Produktdetails-Seite
│   └── Widerruf.jsx          # Widerrufsbelehrung
│
├── App.jsx                   # Haupteinstiegspunkt der App
├── App.css                   # Hauptstyling
├── index.css                 # Globales CSS
└── main.jsx                  # Einstiegspunkt für React
```

---

## **Screenshots**

### **Startseite**
_Füge hier einen Screenshot der Startseite ein._

### **Produktdetails**
_Füge hier einen Screenshot der Produktdetails-Seite ein._

### **Galerie**
_Füge hier einen Screenshot der Galerie mit Bildern und Videos ein._

### **Checkout**
_Füge hier einen Screenshot des Checkout-Prozesses ein._

---

## **Mitwirkende**
- **Fabian Beck** – CEO & CAO
- **Oscar Peach** – CTO & CAO
- **Aaron Noah Windisch** – CMO
- **Alan Barzanji** – CPO

---

## **Lizenz**
Dieses Projekt steht unter der **MIT-Lizenz**. Weitere Informationen findest du in der Datei `LICENSE`.

---

Lass mich wissen, falls noch Anpassungen benötigt werden! 😊
