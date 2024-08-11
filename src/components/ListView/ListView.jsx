import ShopItem from "../ShopItem/ShopItem";

function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
}

export default ListView;
