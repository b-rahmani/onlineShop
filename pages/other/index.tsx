import { useRouter } from "next/router";

const Other = () => {
  const Router = useRouter();

  if (typeof window === "undefined" || !localStorage?.getItem("token")) {
    return <div>شما به این محتوی دسترسی ندارید </div>;
  }

  return <div>test guard</div>;
};
export default Other;
