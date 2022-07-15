
import SingleProduct, {
  productType,
} from "../../../components/SingleProduct/SingleProduct";
import { GetStaticProps } from "next";
import { allProductsMock } from "../../api/allProduct";

interface SingleProductType {
  product: productType;
  status?: number;
}

const SingleProductPage = (props: SingleProductType) => {
  return <SingleProduct product={props.product} status={props.status} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
 
    // const res = await axios.get(`${
    //   process.env.NODE_ENV === "production"
    //     ? "online-shop-henna.vercel.app/"
    //     : "http://localhost:3000/"
    // }api/product/${params?.productID}`);

    const productFind=allProductsMock.find(p=>p.id.toString()===params?.productID);

    if(productFind){
      return {
        props: {
          product: productFind,
        },
        revalidate: 10,
      };
    }else{
      return {
        //   // notFound: true,
          props: {
            status: 404,
          },
    }

    // if(e.response.status===404){
    // return {
    //   // notFound: true,
    //   props: {
    //     status: er.response.status,
    //   },

      // }
    
  // }
};
}
export async function getStaticPaths() {



  // const { data: allProducts } = await axios.get(`${
  //   process.env.NODE_ENV === "production"
  //     ? "online-shop-henna.vercel.app/"
  //     : "http://localhost:3000/"}api/allProduct`
  // );

  const allProducts=allProductsMock;


  const appIds = allProducts.map((el: productType) => ({
    params: { productID: el.id.toString() },
  }));

  return {
    paths: appIds,
    fallback: true,
  };
}

export default SingleProductPage;
