import { useParams, useOutletContext } from 'react-router-dom';
import useItem from "../hooks/useItem.js";
import LoadingProductDetail from './LoadingProductDetail.jsx';
import ErrorPage from "./ErrorPage.jsx";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
    const id = useParams().id;
    const { setCart } = useOutletContext();
    const { data, loading, error } = useItem(id);

    function addToCart(id, num) {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[id]) {
                newCart[id] += num;
            } else {
                newCart[id] = num;
            }
            return newCart;
        });
    }

    if (loading) return <LoadingProductDetail />
    if (error) return <ErrorPage />

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
                </div>
            </div>
        </div>
    )
}