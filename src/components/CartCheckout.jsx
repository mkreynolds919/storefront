import "../styles/CartCheckout.css";

export default function CartCheckout({ cart }) {
    let totalPrice = 0;
    let totalQuantity = 0;
    Object.values(cart).map((item) => {
        totalPrice += (item.quantity * item.price);
        totalQuantity += item.quantity;
    });
    totalPrice = totalPrice.toFixed(2);

    return (
        <div className="cart-checkout">
            <div className="order-summary">
                <div className="order-summary-header">Order Summary</div>
                <div className="order-summary-quantity">{totalQuantity} Item(s)</div>
            </div>
            <hr></hr>
            <div className="items-subtotal checkout-value">
                <div className="items-subtotal-desc">Item(s) Subtotal</div>
                <div className="items-subtotal-value">${totalPrice}</div>
            </div>
            <div className="shipping checkout-value">
                <div className="shipping-desc">Shipping</div>
                <div className="shipping-value">TBD</div>
            </div>
            <div className="tax checkout-value">
                <div className="tax-desc">Tax</div>
                <div className="tax-value">TBD</div>
            </div>
            <hr></hr>
            <div className="order-total checkout-value">
                <div className="order-total-desc">Order total</div>
                <div className="order-total-value">${totalPrice}</div>
            </div>
            <button className="checkout-button">Checkout</button>
        </div>

    )
}