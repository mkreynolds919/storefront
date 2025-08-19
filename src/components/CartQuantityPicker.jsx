import "../styles/CartQuantityPicker.css";

export default function CartQuantityPicker({ id, quantity, setCart }) {
    function handleCartDecrement(id) {
        setCart((prevCart) => {
            let newCart = { ...prevCart };
            if (newCart[id].quantity > 1) newCart[id].quantity -= 1;
            return newCart;
        });
    }

    function handleCartIncrement(id) {
        setCart((prevCart) => {
            let newCart = { ...prevCart };
            newCart[id].quantity += 1;
            return newCart;
        });
    }

    return (
        <div className="cart-quantity-picker">
            <button className="cart-quantity-decrement" onClick={() => handleCartDecrement(id)}>-</button>
            <div className="cart-quantity-display">{quantity}</div>
            <button className="cart-quantity-increment" onClick={() => handleCartIncrement(id)}>+</button>
        </div>
    )
}