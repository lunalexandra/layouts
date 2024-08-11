
function ShopItem({ product }) {
  return (
    <div className="shop-item">
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.color}</p>
        <div className="price-box">${product.price} <button>ADD TO CARD </button> </div>
    </div>
  );
}

export default ShopItem;
