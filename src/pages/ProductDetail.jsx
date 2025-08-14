import { useParams } from 'react-router-dom';
import useItem from "./hooks/useItem.js";

export default function ProductDetail() {
    const id = useParams();
    const { data, loading, error } = useItem(id);
}