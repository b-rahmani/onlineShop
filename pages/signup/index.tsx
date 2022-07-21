import Signup from "../../components/Signup/Signup";
import { useEffect } from "react";
import axios from "axios";
const SignUpPage = () => {
  useEffect(() => {
    console.log("useEffect call");
    axios.get("online-shop-henna.vercel.app/api/getUser").then((res) => {
      console.log(res.data);
    });
  }, []);

  return <Signup />;
};
export default SignUpPage;
