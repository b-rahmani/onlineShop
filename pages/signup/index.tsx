import Signup from "../../components/Signup/Signup";
import { useEffect } from "react";
import axios from "axios";
const SignUpPage = () => {
  useEffect(() => {
    console.log("useEffect call");
    axios
      .get(`${process.env.VERCEL_URL}/api/getUser`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return <Signup />;
};
export default SignUpPage;
