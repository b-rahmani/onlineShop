import { useRouter } from "next/router";

const SingleProduct = () => {
  const Router = useRouter();
 
  return <div> single product and id is : {Router.query.productID}</div>;
};
export default SingleProduct;
