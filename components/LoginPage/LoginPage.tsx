import Link from "next/link";
import { joinClassModules } from "../../utils/utils";
import ArrowLeftIcon from "../icons/arrowLeftIcon";
import classes from "./login.module.scss";
import { checkTargetForNewValues, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import {
   vercelClient,
   raminBaseUrl,
  } from "../../utils/axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Loader from "../loading/Loading2";

const LoginPage = () => {
  const Router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const formSubmitHandler = (data: any) => {
    setIsLoading(true);
    Object.entries(data).map((el: any) => {
      if (el[1].trim() === "") {
        setError(el[0], { type: "required" }, { shouldFocus: true });
        setValue(el[0], "", { shouldValidate: true });
        setIsLoading(false);
        return;
      }
    });
    raminBaseUrl
      .post("/auth/jwt/create", { username: data.userName, password: data.password })
      .then((res) => {
   
        if (res.status === 200) {
          localStorage.setItem("accessToken", res.data.access);
          localStorage.setItem("refreshToken",res.data.refresh)
          raminBaseUrl.defaults.headers.common['Authorization']=`JWT ${res.data.access}`
          // r.defaults.headers.common['Authorization'] = token;
          Router.push("/");
        }
      })
      .catch((er) => {
        console.log('erroer',er)
        toast.error(er.response?.data?.detail ?? "مشکلی پیش آمده", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={joinClassModules(classes.loginPage, "container")}>
      <div className={classes.imageSide}>
        <div className={classes.circle}></div>
      </div>

      <div className={classes.formSide}>
        <div className={classes.content}>
          <motion.div
            className={classes.backIcon}
            whileHover={{ x: -10 }}
            onClick={() => Router.back()}
          >
            <ArrowLeftIcon />
          </motion.div>
          <h3>خوش آمدید</h3>
          <p>لطفا اطلاعات درخواستی را وارد کنید.</p>
          <div className={classes.form}>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
              <div>
                <label htmlFor="userName">نام کاربری</label>
                <input
                  type="text"
                  id="useName"
                  placeholder="نام کاربری خود را وارد کنید"
                  {...register("userName", { required: true })}
                />
                {errors.userName && (
                  <span className={classes.error}>
                    {" "}
                    لطفا نام کاربری خود را وارد کنید
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="password">کلمه عبور</label>
                <input
                  type="password"
                  id="password"
                  autoComplete="none"
                  placeholder="کلمه عبور خود را وارد کنید"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className={classes.error}>
                    {" "}
                    لطفا کلمه عبور خود را وارد کنید
                  </span>
                )}
              </div>
              <Link href="/forgetPassword">
                <a className={classes.forgetPass}>فراموشی رمز عبور</a>
              </Link>

              <button
                className={classes.loginButton}
                disabled={isLoading}
                type="submit"
              >
                <span style={{ visibility: isLoading ? "hidden" : "visible" }}>
                  ورود
                </span>
                {isLoading && <Loader />}
              </button>
              {/* <button className={classes.loginWithGoogle} type="button">
                ورود با گوگل
                <img src="/google.png" alt="google" />
              </button> */}
            </form>
          </div>
          <div className={classes.switchLogin}>
            کاربری ندارید؟
            <Link href="/signup">
              <a className={classes.link}>ثبت نام</a>
            </Link>
            کنید
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default LoginPage;
