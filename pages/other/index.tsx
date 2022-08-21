import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Other = () => {
  const [token, setToken] = useState("");
  const Router = useRouter();

  useEffect(() => {
    if (localStorage && localStorage?.getItem("token")) {
      setToken(localStorage?.getItem("token")!);
    }
  }, []);

  // if (typeof window === "undefined" || !localStorage?.getItem("token")) {
  //   return <div>شما به این محتوی دسترسی ندارید </div>;
  // }
  if (!token) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        شما به این محتوی دسترسی ندارید{" "}
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>this page not compelete yet</h4>
    </div>
  );
};
export default Other;
