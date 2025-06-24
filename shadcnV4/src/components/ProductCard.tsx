import { Button } from "@/components/ui/button";
import { useState } from "react";
//can use type keyword instead of interface
interface productType {
  //   id: number;
  name: string;
  price: number;
  img: string;
}

//FC means functional component
//const ProductCard: React.FC<productType> = ({ id, name, price, img }) => {
const ProductCard = ({ name, price, img }: productType) => {
  const [imgLoad, setImgLoad] = useState(false);
  const handleImageLoad = () => {
    setImgLoad(true);
  };
  console.log(imgLoad);
  return (
    <>
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <div className="h-48 w-full">
          {!imgLoad && <div className="animate-pulse"></div>}
          <img
            src={img}
            alt="name"
            className="h-full w-full rounded-md object-contain"
            onLoad={handleImageLoad}
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-400">${price}</p>
          </div>
          <Button>Add to Cart</Button>
          {/* <button className="rounded-md bg-orange-400 px-4 py-2 text-white hover:bg-sky-300">
            Add to Cart
          </button> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
