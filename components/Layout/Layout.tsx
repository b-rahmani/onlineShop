import React, { useState, useContext } from "react";
import Image from "next/image";
import SearchBar from "../searchbar/SearchBar";
import AccountIcon from "../icons/AccountIcon";
import CartIcon from "../icons/basket";
import classes from "./Layout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "../icons/hamburger";
import Sidebar from "../sidebar/Sidebar";

import ActiveLink from "../activeLink/ActiveLink";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/sidebarSlice";
import { RootState } from "../../store/store";
interface layoutProps {
  children?: React.ReactNode;

  search?: boolean;
}

const Layout = ({ children, search }: layoutProps) => {
  const Router = useRouter();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpensidebar);
  const dispatch = useDispatch();
  let user = "d";
  const accountClickHandler = () => {
    user ? Router.push("/profile") : Router.push("/login");
  };
  return (
    <div
      className="container"
      style={{ overflow: isOpen ? "hidden" : "unset" }}
    >
      <header className={classes.header}>
        <div className={classes.actionHead}>
          <Link href="/">
            <a className={classes.imageLogo}>
              <Image src="/logo.png" alt="logo" layout="fill" />
            </a>
          </Link>
          <div className={classes.actionBar}>
            {search && <SearchBar />}
            <AccountIcon
              className={classes.acountIcon}
              click={accountClickHandler}
            />
            <Link href="/cart">
              <a>
                <CartIcon />
              </a>
            </Link>
          </div>
        </div>
        <div className="divider"></div>
        <div className={classes.linksHead}>
          <div className={`${classes.mobileHead} showmobile`}>
            <Hamburger click={() => dispatch(toggleSidebar())} />
            <div className={classes.imageLogo}>
              <Image src="/logo.png" alt="logo" layout="fill" />
            </div>
          </div>
          <Sidebar />
          <nav className={classes.nav}>
            <ul>
              <li>
                <ActiveLink href="/">صفحه اصلی</ActiveLink>
              </li>

              <li>
                <ActiveLink href="/#main">محصولات</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/cart">سبد خرید</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/other">دیگر</ActiveLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="relative">{children}</main>
      <footer>foooter</footer>
    </div>
  );
};
export default Layout;
