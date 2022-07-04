import Backdrop from "../backdrop/Backdrop";
import classes from "./sidebar.module.scss";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "../activeLink/ActiveLink";

import { useSelector, useDispatch } from "react-redux";
import { closeSidebar, toggleSidebar } from "../../store/sidebarSlice";
import { RootState } from "../../store/store";
const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpensidebar);
  const dispatch = useDispatch();

  const linkClickHandler = () => {
    dispatch(closeSidebar());
  };
  return (
    <>
      <div className={`${classes.sidebar} ${isOpen && classes.isopen}`}>
        <Link href="/">
          <a className={classes.imageLogo}>
            <Image src="/logo.png" alt="logo" layout="fill" />
          </a>
        </Link>
        <div className="divider"></div>

        <nav>
          <ul>
            <li>
              <ActiveLink href="/" click={linkClickHandler}>
                صفحه اصلی
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/cart" click={linkClickHandler}>
                سبد خرید
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blog" click={linkClickHandler}>
                بلاگ
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/other" click={linkClickHandler}>
                دیگر
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        // <Backdrop click={sideBarActions.sidebarCloseHandler} />
        <Backdrop click={() => dispatch(closeSidebar())} />
      )}
    </>
  );
};

export default Sidebar;
