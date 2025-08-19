import { Link } from 'react-router-dom';
import CartQuantityPicker from './CartQuantityPicker';
import "../styles/CartProductCard.css";

export default function CartProductCard({ title, brand, price, quantity, image, id, setCart }) {
    function handleCartRemove(id) {
        setCart((prevCart) => {
            let newCart = { ...prevCart };
            delete newCart[id];
            return newCart;
        });
    }

    return(
        <div className="cart-product-card">
            <Link className="link-reset" to={`/product/${id}`}>
                <img src={image} />
            </ Link>
            <div className="cart-product-details">
                <div className="cart-product-top-line">
                    <div className="cart-product-title">{title}</div>
                    <div className="cart-product-brand">{brand}</div>
                </div>
                <div className="cart-product-price">${price}</div>
                <CartQuantityPicker id={id} quantity={quantity} setCart={setCart}/>
                <div className="subtotal">Subtotal: ${(price * quantity).toFixed(2)}</div>
                <button className="cart-remove-item" onClick={() => handleCartRemove(id)}>Remove</button>
            </div>
        </div>


    )
}