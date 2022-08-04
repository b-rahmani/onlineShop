import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsMock } from "../../filterData/fakeProductData";
import { openFocusInput, closeFocusInput } from "../../store/searchFocusSlice";
import { RootState } from "../../store/store";
import { vercelClient } from "../../utils/axios";
import { joinClassModules } from "../../utils/utils";

import SearchIcon from "../icons/SearchIcon";
import { productType } from "../SingleProduct/SingleProduct";
import classes from "./searchbar.module.scss";
const SearchBar = () => {
  const topSearchRef = useRef<HTMLInputElement>(null);
  const topSearchBoxRef = useRef<HTMLDivElement>(null);
  const [searched,setSearched]=useState("");
  const Router = useRouter();
  const dispatch = useDispatch();

  const searchFocusHandler = () => {
    dispatch(openFocusInput());
    topSearchRef.current?.focus();
  };

  const closeFocusHandler = () => {
    dispatch(closeFocusInput());
  };
  const isFocusSearch = useSelector(
    (state: RootState) => state.searchFocus.isSearchFocus
  );
  const handleClickOutside = (e: any) => {
    if (
      topSearchBoxRef.current &&
      !topSearchBoxRef.current.contains(e.target)
    ) {
      closeFocusHandler();
    }
  };

  const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearched(e.target.value);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [topSearchBoxRef]);

  useEffect(() => {
    closeFocusHandler();
  }, [Router.asPath]);

  useEffect(()=>{
let timer=setTimeout(()=>{
vercelClient.get()
},250)

return()=>clearTimeout(timer);
  },[search])

  return (
    <div className={classes.searchBar} onClick={searchFocusHandler}>
      <div className={classes.inputBox}>
        <input
          type="search"
          dir="rtl"
          placeholder="جستجو"
          // onFocus={searchFocusHandler}
          // onBlur={closeFocusHandler}
        />
        <label>
          <SearchIcon />
        </label>
      </div>
      <div
        className={joinClassModules(
          classes.focusedBox,
          isFocusSearch ? classes.focus : classes.notfocus
        )}
        ref={topSearchBoxRef}
      >
        <div className={classes.inputBox}>
          <input
            type="search"
            dir="rtl"
            placeholder="جستجو"
            ref={topSearchRef}
            onChange={onChangeHandler}
            value={searched}
            // onFocus={searchFocusHandler}
            // onBlur={closeFocusHandler}
          />
          <label>
            <SearchIcon />
          </label>
        </div>
        <div className={classes.ResaultBox}>
          {allProductsMock.map((product: productType) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <a className={joinClassModules(classes.product)}>
                <div className={classes.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                  />
                </div>
                <div className="ellips-3">{product.title}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
