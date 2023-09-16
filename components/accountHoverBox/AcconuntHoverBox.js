import Link from "next/link";
import classes from "./accountHoverBox.module.scss";

const AcconuntHoverBox = ({ user }) => {
  return (
    <section className={classes.userInfoBox}>
      <div className={classes.header}>{user?.username}</div>
      <Link href="/account">
        <a className={classes.item}>حساب کاربری</a>
      </Link>
      <Link href="/orders">
        <a className={classes.item}>سفارش ها</a>
      </Link>
      <div className={classes.item} onClick={() => {}}>
        خروج از حساب کاربری
      </div>
    </section>
  );
};
export default AcconuntHoverBox;
