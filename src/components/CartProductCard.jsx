import { Link } from 'react-router-dom';

export default function CartProductCard({ title, brand, price, quantity, image, id, cart, setCart }) {
    function handleCartRemove(id) {
        setCart((prevCart) => {
            let newCart = { ...prevCart };
            newCart.filter(item => {
                return item.id !== id;
            })
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
                <CartQuantityPicker id={id} cart={cart} setCart={setCart}/>
                <div className="subtotal">Subtotal: ${price * quantity}</div>
                <button className="cart-remove-item" onClick={() => handleCartRemove(id)}></button>
            </div>
        </div>


    )
}