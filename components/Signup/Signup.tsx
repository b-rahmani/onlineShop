import Link from "next/link";
import { joinClassModules } from "../../utils/utils";
import ArrowLeftIcon from "../icons/arrowLeftIcon";
import classes from "./signUp.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Signup = () => {
  const shema = yup.object().shape({
    userName: yup.string().trim().required("نام کاربری الزامی است"),
    password: yup
      .string()
      .required("کلمه عبور الزامی است")
      .max(20, "حداکثر 20 کاراکتر")
      .min(5, "حداقل 5 کاراکتر"),
    confirmPassword: yup
      .string()
      .required("تکرار کلمه عبور الزامی است")
      .oneOf([yup.ref("password"), null], "کلمه عبور و تکرار آن مطابقت ندارد"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    setValue,
  } = useForm({ resolver: yupResolver(shema) });

  const formSubmitHandler = (data: any) => {
    console.log(data);
    // if(Object.entries(data).some((el:any)=>el[1].trim()==="")){

    // }

    Object.entries(data).map((el: any) => {
      if (el[1].trim() === "") {
        setError(el[0], { type: "required" }, { shouldFocus: true });
        setValue(el[0], "", { shouldValidate: true });
        return;
      }
    });
  };

  return (
    <div className={joinClassModules(classes.loginPage, "container")}>
      <div className={classes.imageSide}>
        <div className={classes.circle}></div>
      </div>

      <div className={classes.formSide}>
        <div className={classes.content}>
          <motion.div className={classes.backIcon} whileHover={{ x: -10 }}>
            <ArrowLeftIcon />
          </motion.div>
          <h3>ثبت نام</h3>
          <p>لطفا اطلاعات درخواستی را وارد کنید.</p>
          <div className={classes.form}>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
              <div>
                <label htmlFor="userName">نام کاربری</label>
                <input
                  type="text"
                  id="useName"
                  placeholder="نام کاربری خود را وارد کنید"
                  {...register("userName")}
                />
                {errors.userName && (
                  <span className={classes.error}>
                    {String(errors.userName.message)}
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
                  {...register("password")}
                />
                {errors.password && (
                  <span className={classes.error}>
                    {String(errors.password.message)}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="confirmPassword"> تایید کلمه عبور</label>
                <input
                  type="password"
                  id="confirmPassword"
                  autoComplete="none"
                  placeholder="کلمه عبور خود را وارد کنید"
                  {...register("confirmPassword")}
                />
                {errors?.confirmPassword && (
                  <span className={classes.error}>
                    {String(errors.confirmPassword.message)}
                  </span>
                )}
              </div>
              <Link href="/forgetPassword">
                <a className={classes.forgetPass}>فراموشی رمز عبور</a>
              </Link>

              <button className={classes.loginButton} type="submit">
                {" "}
                ثبت نام
              </button>
            </form>
          </div>
          <div className={classes.switchLogin}>
            کاربری دارید؟
            <Link href="/login">
              <a className={classes.link}>ورود</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
