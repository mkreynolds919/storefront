import useCollection from "../hooks/useCollection.js";
import { useParams } from 'react-router-dom';
import ErrorPage from "./ErrorPage.jsx";
import CollectionProductCard from "../components/CollectionProductCard.jsx";
import "../styles/Collection.css";


export default function Collection() {
    const collection = useParams().productType;
    const { data, loading, error } = useCollection(collection);

    function createCollectionHeader(collection) {
        switch(collection) {
            case "skin-care":
                return "Skincare";
            case "fragrances":
                return "Fragrances";
            case "beauty":
                return "Beauty";
        }
    }

    if (error) return <ErrorPage />

    return (
        <>
            <h1 className="collection-header">{createCollectionHeader(collection)}</h1>
            <div className="collection-container">
                {data.map((product) => {
                    return <CollectionProductCard key={product.title} title={product.title} brand={product.brand} price={product.price} image={product.thumbnail} id={product.id} />
                })}
            </div>
        
        
        </>
    )




}
