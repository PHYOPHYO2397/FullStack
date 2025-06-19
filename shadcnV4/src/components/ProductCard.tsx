const ProductCard = ({
  id,
  name,
  price,
  img,
}: {
  id: number;
  name: string;
  price: number;
  img: string;
}) => {
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
