import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import TextLeft from './TextFormating/TextLeft.jsx';
import TextRight from './TextFormating/TextRight.jsx';
import ImageDrink from '../../public/bild1.png';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Drink Shop!</h1>
            <p>Your one-stop shop for refreshing drinks.</p>

            <TextLeft
                title="Limeli Original"
                text="Limeli Original ist unser persönlicher Favorit. Durch seine raffinierte Mischung aus Schweizer Alpenkräutertee, Honig, Apfelessig und Traubensaft ist es ein reiner Gaumenschmaus. Die erlesenen Bio-Zutaten sind nicht nur Fair Trade, sondern auch direkt aus der Region bezogen, was für höchste Qualität und Nachhaltigkeit sorgt. Die harmonische Balance aus erfrischender Säure und süßem Geschmack macht Limeli Original zu einem unverwechselbaren Genuss. Perfekt für Momente der Ruhe oder als Begleiter für den Tag – ein Getränk, das Körper und Geist belebt."
                imageSrc={ImageDrink}
                linkText="View Details"
                imageSourceText="Limeli Original Image"
                redirectPath="/product/1" // Dynamische Route für Produktdetails
            />

            <TextRight
                title="Limeli Winter Edition"
                text="Limeli Winter Edition bringt die Wärme der kalten Jahreszeit direkt in dein Glas. Mit einer besonderen Mischung aus Gewürzen wie Zimt, Nelken und einer Prise Ingwer, kombiniert mit den bewährten Zutaten aus Limeli Original, bietet dieses Getränk eine wohltuende Wärme für kalte Tage. Der Apfelessig und der Traubensaft sorgen für eine erfrischende Basis, während die winterlichen Gewürze die Sinne anregen. Ideal für gemütliche Winterabende oder als eine festliche Erfrischung zu besonderen Anlässen – Limeli Winter Edition sorgt für ein echtes Winterwunder im Glas."
                imageSrc={ImageDrink}
                linkText="View Details"
                imageSourceText="Limeli Winter Edition Image"
                redirectPath="/product/2" // Dynamische Route für Produktdetails
            />

            <TextLeft
                title="Limeli Deluxe"
                text="Limeli Deluxe ist die luxuriöse Variante des beliebten Originals. Diese Edition überzeugt mit einer intensiveren, vollmundigeren Geschmacksrichtung, die durch die Zugabe von edlen Kräutern und einer zusätzlichen Note von Vanille und Bergkräutern entsteht. Der feinste Schweizer Alpenkräutertee vereint sich mit hochwertigem, regionalem Honig und edelstem Apfelessig, um ein besonders raffiniertes Geschmackserlebnis zu bieten. Limeli Deluxe ist für die besonderen Momente im Leben gedacht, wenn du dich selbst verwöhnen oder Gästen etwas Einzigartiges bieten möchtest. Ein Getränk, das deinen Gaumen verwöhnt und gleichzeitig für Wohlbefinden sorgt."
                imageSrc={ImageDrink}
                linkText="View Details"
                imageSourceText="Limeli Deluxe Image"
                redirectPath="/product/3" // Dynamische Route für Produktdetails
            />

            <TextRight
                title="Limeli Grove"
                text="Limeli Grove ist die fruchtige und erfrischende Variante, die dich mit einem Hauch von mediterraner Leichtigkeit verzaubert. Mit einer frischen Kombination aus grünem Tee, Zitrusfrüchten und einer dezenten Note von Minze ist Limeli Grove der perfekte Durstlöscher für warme Tage. Der Apfelessig sorgt für eine leichte Säure, während der Traubensaft und die Zitrusfrüchte das Getränk mit einer angenehmen Frische verfeinern. Limeli Grove ist die ideale Wahl für alle, die einen lebendigen, spritzigen Genuss suchen – eine erfrischende Auszeit in jedem Schluck."
                imageSrc={ImageDrink}
                linkText="View Details"
                imageSourceText="Limeli Grove Image"
                redirectPath="/product/4" // Dynamische Route für Produktdetails
            />
        </div>
    );
};

export default Home;
