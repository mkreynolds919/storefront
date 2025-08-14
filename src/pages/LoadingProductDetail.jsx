
import "../styles/LoadingProductDetail.css";

export default function LoadingProductDetail() {
  return (
    <div className="product-detail loading">
      <div className="image-skeleton skeleton" />
      <div className="text-group">
        <div className="title-skeleton skeleton" />
        <div className="price-skeleton skeleton" />
        <div className="description-skeleton skeleton" />
        <div className="description-skeleton skeleton" />
        <div className="description-skeleton skeleton short" />
        <div className="skeleton" id="skeleton-button" />
      </div>
    </div>
  );
}

