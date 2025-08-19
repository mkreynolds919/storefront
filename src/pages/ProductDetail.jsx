import { useParams, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import useItem from "../hooks/useItem.js";
import LoadingProductDetail from './LoadingProductDetail.jsx';
import ErrorPage from "./ErrorPage.jsx";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
    const id = useParams().id;
    const { cart, setCart } = useOutletContext();
    const [quantity, setQuantity] = useState(1);
    const { data, loading, error } = useItem(id);

    function addToCart(id, num) {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[id]) {
                newCart[id].setQuantity = parseInt(newCart[id].quantity || 0) + parseInt(num);
            } else {
                newCart[id] = {
                    name: data.title,
                    brand: data.brand,
                    price: data.price,
                    quantity: parseInt(num),
                    image: data.thumbnail,
                }
            }
            return newCart;
        });
    }

    if (loading) return <LoadingProductDetail />
    if (error) return <ErrorPage />
    console.log(cart);
    return (
        <div className="product-detail">
            <div className="product-detail-image">
                <img src={data.images[0]} height='600px' width='600px'></img>
            </div>
            <div className="product-text-group">
                <div className="product-top-line">
                    <div className="product-detail-title">{data.title}</div>
                    <div className="product-detail-brand">{data.brand}</div>
                </div>
                <div className="product-detail-description">{data.description}</div>
                <div className="product-bottom-line">
                    <div className="product-detail-price">${data.price}</div>
                    <div className="add-to-cart">
                        <button className="add-to-cart-button" onClick={() => addToCart(id, quantity)}>Add to cart</button>
                        <select className="quantity-select" onChange={(e) => setQuantity(e.target.value)}>
                            {Array.from({ length: 8}, (_, i) => {
                                return (
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}