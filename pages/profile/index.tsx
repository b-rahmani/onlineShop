import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { vercelClient } from "../../utils/axios";
import { UserDetails } from "../../utils/db-connect";

interface Iuser {
  name: string;
  token: string;
  _id: string;
}

const Profile = () => {
  const [userData, setUserData] = useState<Iuser>({} as Iuser);
  useEffect(() => {
    vercelClient
      .get(`/api/getUserData?token=${localStorage.getItem("token")}`)
      .then((res) => {
        setUserData(res.data);
        // console.log(res.data)
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>hi {userData?.name}</h2>

      <p>I working on this page . ready soon </p>
    </div>
  );
};

export default Profile;
