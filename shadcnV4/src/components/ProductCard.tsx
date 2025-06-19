import { Button } from "@/components/ui/button";
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
  return (
    <>
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <div className="h-48 w-full">
          <img
            src={img}
            alt="name"
            className="h-full w-full rounded-md object-contain"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="">{name}</h3>
            <p className="">${price}</p>
          </div>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
