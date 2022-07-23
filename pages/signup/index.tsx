import Signup from "../../components/Signup/Signup";
import { useEffect } from "react";
import axios from "axios";
import { vercelClient } from "../../utils/axios";
const SignUpPage = () => {
  useEffect(() => {
    vercelClient
      .get(`/api/allProduct`, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return <Signup />;
};
export default SignUpPage;
