import { useParams } from 'react-router-dom';
import useItem from "../hooks/useItem.js";
import LoadingProductDetail from './LoadingProductDetail.jsx';

export default function ProductDetail() {
    const id = useParams().id;
    const { data, loading, error } = useItem(id);

    if (loading) return <LoadingProductDetail />
}