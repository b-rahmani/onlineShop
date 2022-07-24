import Signup from "../../components/Signup/Signup";
import { useEffect } from "react";
import axios from "axios";
import { vercelClient } from "../../utils/axios";
const SignUpPage = () => {
  useEffect(() => {
    vercelClient
      .get(`/api/product/1`)
      .then((res) => {
        console.log(res);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return <Signup />;
};
export default SignUpPage;
