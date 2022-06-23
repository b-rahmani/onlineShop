import { useContext } from "react";
import Backdrop from "../backdrop/Backdrop";
import classes from "./sidebar.module.scss";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "../activeLink/ActiveLink";
import SidebarContext from "../../store/sideBarContext";

const Sidebar = () => {
  const sideBarActions = useContext(SidebarContext);
  return (
    <>
      <div
        className={`${classes.sidebar} ${
          sideBarActions.isOpen && classes.isopen
        }`}
      >
        <Link href="/">
          <a className={classes.imageLogo}>
            <Image src="/logo.png" alt="logo" layout="fill" />
          </a>
        </Link>
        <div className="divider"></div>

        <nav>
          <ul>
            <li>
              <ActiveLink href="/">صفحه اصلی</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cart">سبد خرید</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blog">بلاگ</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/other">دیگر</ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
      {sideBarActions.isOpen && (
        <Backdrop click={sideBarActions.sidebarCloseHandler} />
      )}
    </>
  );
};

export default Sidebar;
