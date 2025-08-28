import { useOutletContext } from 'react-router-dom';
import CartProductCard from '../components/CartProductCard';
import CartCheckout from '../components/CartCheckout';
import "../styles/Cart.css";

export default function Cart() {
    const { cart, setCart } = useOutletContext();
    console.log(cart); 
    return (
        <>
            <div className="cart-header">Shopping Cart</div>
            <div className="cart-container">
                {Object.keys(cart).length === 0 
                    ? <div className="empty-cart">Oops! Your cart is empty.</div>
                    :  <>
                            <div className="cart-products">
                                {Object.entries(cart).map((item) => {
                                    console.log(item);
                                    return ( 
                                        <>
                                            <CartProductCard 
                                                key={item[0]} 
                                                title={item[1].name} 
                                                brand={item[1].brand} 
                                                price={item[1].price} 
                                                quantity={item[1].quantity} 
                                                image={item[1].image} 
                                                id={item[0]} 
                                                setCart={setCart} 
                                            />
                                            <hr className="product-hr"/>
                                        </>
                                    )
                                    })}
                            </div>
                            <CartCheckout cart={cart} />
                        </>
                }
            </div>
        </>
        
    );
}