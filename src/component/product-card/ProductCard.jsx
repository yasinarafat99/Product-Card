import "./product-card.css";

function ProductCard({ product }) {
  const { id, title, brand, price, images, description } = product;
  console.log(product)

  return (
    <>
      <div className="product-card">
        <div className="product_image">
          <img src={images[0]} alt="" />
        </div>
        <div className="product-info">
          <div className="product-title">{title}</div>
          <div className="product-description">
            <b>{brand} </b>
            <p>{description}</p>
          </div>
          <div className="product-price">${price}</div>
          <a href="#" className="product-button">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
