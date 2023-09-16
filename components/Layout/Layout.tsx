import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import SearchBar from "../searchbar/SearchBar";
import AccountIcon from "../icons/AccountIcon";
import CartIcon from "../icons/basket";
import classes from "./Layout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "../icons/hamburger";
import Sidebar from "../sidebar/Sidebar";
import { raminBaseUrl } from "../../utils/axios";
import ActiveLink from "../activeLink/ActiveLink";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/sidebarSlice";
import { RootState } from "../../store/store";
import { initialBasket } from "../../store/basketProductsSlice";
import { joinClassModules } from "../../utils/utils";
import Badge from "../Badge/Badge";
import CartHoverBox from "../CartHoerBox/CartHoverBox";
import Footer from "../footer/Footer";
import LoginIcon from "../icons/Login";
import ArrowBottom from "../icons/ArrowBottom"
import AcconuntHoverBox from "../accountHoverBox/AcconuntHoverBox"
interface layoutProps {
  children?: React.ReactNode;

  search?: boolean;
}

const Layout = ({ children, search }: layoutProps) => {
  const [user,setUser]:any=useState('')
  const Router = useRouter();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpensidebar);
  const dispatch = useDispatch();
 
  // if (typeof window !== "undefined" && localStorage?.getItem("token")) {
  //   user = localStorage?.getItem("token");
  // }
  // const accountClickHandler = () => {
  //   user ? Router.push("/profile") : Router.push("/login");
  // };
  const cartItems = useSelector((state: RootState) => state.basket.basket);

  useEffect(() => {
    dispatch(initialBasket());
    const accessToken=localStorage.getItem('accessToken')
     raminBaseUrl.get('/auth/users/me/',{
      headers:{
        'Authorization' : `JWT ${accessToken}`
      }
     })
     .then(res=>{
      setUser(res.data)
      localStorage.set('user',res.data)
     })
     .catch(er=>console.log(er))

  }, []);

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
            {user ? (
              <div className={classes.userContainer}>

               <div
               className={classes.activeUser}
               onClick={() =>  Router.push("/profile")}
               >
              <AccountIcon
                // className={classes.acountIcon}
                />
            < ArrowBottom/>
                </div>
            <AcconuntHoverBox user={user}/>
              </div>
            ) : (
              <div
                className={classes.loginSignup}
                onClick={() => Router.push("/login")}
              >
                <LoginIcon />
               
                <span>ورود | ثبت نام</span>
                <span>ورود</span>
              </div>
            )}

            <section className={classes.cartContainer}>
              <Link href="/cart">
                <a className={classes.cart}>
                  <CartIcon />
                  {cartItems && cartItems.length > 0 && (
                    <Badge count={cartItems.length} />
                  )}
                </a>
              </Link>
              {cartItems && cartItems.length > 0 && (
                <CartHoverBox cart={cartItems} />
              )}
            </section>
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

              {/* <li>
                <ActiveLink href="/#main">محصولات</ActiveLink>
              </li> */}
              <li>
                <ActiveLink href="/cart">سبد خرید</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/aboutus">درباره ما</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/other">دیگر</ActiveLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
