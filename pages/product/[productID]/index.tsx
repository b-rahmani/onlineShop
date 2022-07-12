import axios from "axios";
import SingleProduct, {productType, PropsSingleProductType} from "../../../components/SingleProduct/SingleProduct";

const SingleProductPage = (props: { product: productType; status?:number}) => {



  return (
    <SingleProduct
    product={props.product}
    status={props.status}
    />
  );
};

export async function getStaticProps({ params }) {

  try {
    const res =await  axios.get(`http://localhost:3000/api/product/${params.productID}`);

    return {
      props: {
        product:res.data,

      },
      revalidate:10
    };
  }
  catch (er) {
// if(e.response.status===404){
      return{
        // notFound: true,
        props:{

          status:er.response.status
        },


      // }
    }
  }



  // if(status===404){
  //   return{
  //     notFound: true,
  //   }
  // }
  // console.log("status",status);


  return {
    props: {
      product:res.data,
      status:res.statusText
    },
  };
}

export async function getStaticPaths() {


  const { data: allProducts } = await axios.get(
      "http://localhost:3000/api/allProduct"
  );
  // const AllProduct=allProductsMock;
  const appIds =  allProducts.map((el:productType) => ({
    params: { productID: el.id.toString() },
  }));




  return {

    paths:appIds,
    fallback: true,
  };
}

// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
export default SingleProductPage;

// export const getStaticProps = async (ctx) => {
//   // const { productID } = ctx.params;
//   const product = await axios.get(
//     `http://localhost:3000/product/${ctx.params.productID}`
//   );

//   console.log("ctx", ctx);
//   return {
//     props: {
//       product: product,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const AllProduct: { id: number }[] = await axios.get(
//     `http://localhost:3000/allProduct`
//   );
//   const appIds = await AllProduct.map((el) => ({
//     params: { productID: el.id },
//   }));

//   return {
//     paths: appIds,
//     fallback: false,
//   };
// };

// [
//   { params: { productID: "1" } },
//   { params: { productID: "2" } },
//   { params: { productID: "3" } },
//   { params: { productID: "4" } },
// ],
