//can use type keyword instead of interface
interface productType {
  id: number;
  name: string;
  price: number;
  img: string;
}

//FC means functional component
//const ProductCard: React.FC<productType> = ({ id, name, price, img }) => {
const ProductCard = ({ id, name, price, img }: productType) => {
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
      <img src={img} alt="name" />
    </>
  );
};

export default ProductCard;
