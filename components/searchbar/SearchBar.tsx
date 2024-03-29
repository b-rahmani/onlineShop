import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openFocusInput, closeFocusInput } from "../../store/searchFocusSlice";
import { RootState } from "../../store/store";
import { raminBaseUrl } from "../../utils/axios";
import { joinClassModules } from "../../utils/utils";
import ArrowLeftIcon from "../icons/arrowLeftIcon";
import SearchIcon from "../icons/SearchIcon";
import Loader from "../loading/Loading2";
import Modal from "../modal/Modal";
import { productType } from "../SingleProduct/SingleProduct";
import classes from "./searchbar.module.scss";

const SearchBar = () => {
  const topSearchRef = useRef<HTMLInputElement>(null);
  const topSearchBoxRef = useRef<HTMLDivElement>(null);
  const topSearchphoneRef = useRef<HTMLDivElement>(null);
  const phoneSearchRef = useRef<HTMLInputElement>(null);
  const [searched, setSearched] = useState<string>("");
  const [result, setResault] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();
  const dispatch = useDispatch();

  const searchFocusHandler = () => {
    dispatch(openFocusInput());
    topSearchRef.current?.focus();
    phoneSearchRef.current?.focus();
  };

  const closeFocusHandler = () => {
    setSearched("");
    setResault([]);
    dispatch(closeFocusInput());
  };
  const isFocusSearch = useSelector(
    (state: RootState) => state.searchFocus.isSearchFocus
  );
  const handleClickOutside = (e: any) => {
    if (
      topSearchBoxRef.current &&
      !topSearchBoxRef.current.contains(e.target) &&
      topSearchphoneRef.current &&
      !topSearchphoneRef.current.contains(e.target)
    ) {
      closeFocusHandler();
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearched(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [topSearchBoxRef]);

  useEffect(() => {
    closeFocusHandler();
  }, [Router.asPath]);

  useEffect(() => {
    if (searched) {
      let timer = setTimeout(() => {
        setIsLoading(true);
        raminBaseUrl
          .get(`/products/?q=${searched}`)
          .then((res) => setResault(res.data.results))
          .catch((er) => console.log(er))
          .finally(() => setIsLoading(false));
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [searched]);

  return (
    <div
      className={classes.searchBar}
      //  onClick={searchFocusHandler}
    >
      <div className={classes.inputBox}>
        <input
          type="search"
          dir="rtl"
          placeholder="جستجو"
          onFocus={searchFocusHandler}
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
          {isLoading ? (
            <Loader type="static" />
          ) : (
            <label>
              <SearchIcon />
            </label>
          )}
        </div>
        {result && (
          <div className={classes.ResaultBox}>
            {searched.trim() !== "" && result?.length === 0 && !isLoading && (
              <p>نتیجه ای یافت نشد</p>
            )}
            {result?.map((product: any) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <a className={joinClassModules(classes.product)}>
                  <div className={classes.imageContainer}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                    />
                  </div>
                  <div className="ellips-3">{product.name}</div>
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Modal
        type="fixBottomFull"
        close={closeFocusHandler}
        show={isFocusSearch}
      >
        <div className={classes.searchPhone} ref={topSearchphoneRef}>
          <div className={classes.header}>
            <div className={classes.searchBox}>
              <input
                type="text"
                value={searched}
                onChange={onChangeHandler}
                dir="rtl"
                placeholder="جستجو"
                ref={phoneSearchRef}
              />
            </div>
            <ArrowLeftIcon click={closeFocusHandler} />
          </div>
          <div className={classes.result}>
            {isLoading && <Loader type="static" />}
            {searched.trim() !== "" && result?.length === 0 && !isLoading && (
              <p>نتیجه ای یافت نشد</p>
            )}{" "}
            {result?.map((product: any) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                onClick={closeFocusHandler}
              >
                <a className={joinClassModules(classes.product)}>
                  <div className={classes.imageContainer}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                    />
                  </div>
                  <div className="ellips-3">{product.name}</div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default SearchBar;
