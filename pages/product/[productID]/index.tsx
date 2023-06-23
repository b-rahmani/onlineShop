import { raminBaseUrl } from "../../../utils/axios";
import SingleProduct, {
  productType,
  PropsSingleProductType,
} from "../../../components/SingleProduct/SingleProduct";

// import { allProductDb } from "../../../utils/db-connect";

interface SingleProductType {
  product: productType;
  status?: number;
  related?: productType[];
}

const SingleProductPage = (props: SingleProductType) => {
  console.log("page",props)
  return (
    <SingleProduct
      product={props.product}
      status={props.status}
      related={props.related}
    />
  );
};

export const getStaticProps = async ({ params }: { [key: string]: any }) => {
  try {
    // const data = await allProductDb();
    // const product = await data?.find(
    //   (p: productType) => p.id == params?.productID
    // );
    console.log("params product id *****",params)
    const {data:singleProduct}=await raminBaseUrl.get(`/products/${params?.productID}`)
    const {data}=await raminBaseUrl.get('/products')

    return {
      props: {
        product: singleProduct?.results.product,
        related: data,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      props: {
        err: "some problem",
      },
    };
  }
};
export const getStaticPaths = async () => {
  try {
    const {data}:any = await raminBaseUrl.get('/products')
    console.log("#######&&&&&&&%%%%%",data)
    const appIds = await data.results.map((item: any) => ({
      params: { productID: item.id.toString() },
    }));
    return {
      paths: appIds,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};
export default SingleProductPage;
