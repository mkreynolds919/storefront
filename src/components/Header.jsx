import { Link } from 'react-router-dom';
import "../styles/Header.css";

export default function Header() {

    return (
        <header>
            <section className="top-line">
                <h1 className="title">
                    <Link to="/">Seflora</Link>
                </h1>
                <Link to="cart">
                    <img src="../assets/images/basket.png"></img>
                </Link>
            </section>
            <nav>
                <Link to="collections/beauty">Beauty</Link>
                <Link to="collections/fragrances">Fragrances</Link>
            </nav>
        </header>
    )
}