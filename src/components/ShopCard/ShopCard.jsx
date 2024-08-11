function ShopCard({ product }) {
  return (
    <div className="shop-card">
      <h2>{product.name}</h2>
      <p>{product.color}</p>
      <img src={product.img} alt={product.name} />
      <div className="price-box">${product.price} <button>ADD TO CARD </button> </div>
    </div>
  );
}

export default ShopCard;
