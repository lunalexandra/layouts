import ShopCard from "../ShopCard/ShopCard";

function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
}

export default CardsView;
