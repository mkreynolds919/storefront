import "../styles/CollectionProductCard.css";
import { Link } from 'react-router-dom';

export default function CollectionProductCard({ title, brand, price, image, id}) {
    return (
        <Link className="link-reset" to={`/product/${id}`}>
            <div className="collection-product-card">
                <div className="collection-product-image-container"><img src={image}></img></div>
                <div className="collection-product-detail">
                    <div className="collection-product-title">{title}</div>
                    <div className="collection-product-brand">{brand}</div>
                    <div className="collection-product-price">${price}</div>
                </div>
            </div>
        </Link>
    )
}