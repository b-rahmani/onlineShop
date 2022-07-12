import { joinClassModules } from "../../utils/utils";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import classes from "./singleProduct.module.scss";

export interface productType {
  id: number | string;
  title: string;
  image: string;
  price: number;
  discount: number;
  description: string;
  rating: { rate: number; count: number };
  customHead?: string;
  stock: number;
}
export interface ParamsType {
  [key: string]: any;
}

export interface PropsSingleProductType {
  product?: productType;
  status?: number;
}

const SingleProduct = (props: PropsSingleProductType) => {
  if (!props.product && props.status !== 404) {
    return <p>loading...</p>;
  }
  if (props.status === 404) {
    return <p>not found product</p>;
  }
  return (
    <div className={joinClassModules(classes.singleProductPage)}>
      
      <BreadCrumb />
      single product and id is :{props.product?.id}
    </div>
  );
};

export default SingleProduct;
