import Signup from "../../components/Signup/Signup";
import { useEffect } from "react";
import axios from "axios";
const SignUpPage = () => {
  useEffect(() => {
    console.log("useEffect call");
    axios.get("http://localhost:3000/api/getUser").then((res) => {
      console.log(res.data);
    });
  }, []);

  return <Signup />;
};
export default SignUpPage;
