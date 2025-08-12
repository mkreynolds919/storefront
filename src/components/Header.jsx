import { Link } from 'react-router-dom';
import "../styles/Header.css";
import basketIcon from "../assets/images/basket.png";

export default function Header() {

    return (
        <header>
            <section className="top-line">
                <Link className="title link-reset" to="/">Seflora</Link>
                <Link to="cart" className="link-reset">
                    <img className="basket" src={basketIcon}></img>
                </Link>
            </section>
            <nav>
                <Link className="link-reset nav-link" to="collections/beauty">Beauty</Link>
                <Link className="link-reset nav-link" to="collections/skin-care">Skincare</Link>
                <Link className="link-reset nav-link" to="collections/fragrances">Fragrances</Link>
            </nav>
        </header>
    )
}