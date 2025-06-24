import t1 from "../assets/images/t1.jpg";
import t2 from "../assets/images/t2.jpg";
import t3 from "../assets/images/t3.jpg";
import ProductCard from "@/components/ProductCard";

function Shop() {
  const products = [
    {
      id: 1,
      name: "T-shirt",
      price: 20,
      img: t1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Sweater",
      price: 100,
      img: t2,
      quantity: 2,
    },
    {
      id: 3,
      name: "Long Shirt",
      price: 12,
      img: t3,
      quantity: 3,
    },
  ];
  return (
    <section className="flex grow bg-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
