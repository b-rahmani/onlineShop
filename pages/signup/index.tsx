import Signup from "../../components/Signup/Signup";
import { useEffect } from "react";
import axios from "axios";
const SignUpPage = () => {
  useEffect(() => {
    console.log("useEffect call");
    axios
      .get(`https://online-shop-henna.vercel.app/api/getUser`, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return <Signup />;
};
export default SignUpPage;
