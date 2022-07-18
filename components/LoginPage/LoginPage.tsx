import classes from "./login.module.scss";
const LoginPage = () => {
  return (
    <div className={classes.loginPage}>
      <div className={classes.imageSide}>
        <div className={classes.circle}></div>
      </div>

      <div className={classes.formSide}>form side</div>
    </div>
  );
};
export default LoginPage;
