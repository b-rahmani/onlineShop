import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openFocusInput, closeFocusInput } from "../../store/searchFocusSlice";
import { RootState } from "../../store/store";
import { vercelClient } from "../../utils/axios";
import { joinClassModules } from "../../utils/utils";
import ArrowLeftIcon from "../icons/arrowLeftIcon";

import SearchIcon from "../icons/SearchIcon";
import Loader from "../loading/Loading";
import Modal from "../modal/Modal";
import { productType } from "../SingleProduct/SingleProduct";
import classes from "./searchbar.module.scss";
const SearchBar = () => {
  const topSearchRef = useRef<HTMLInputElement>(null);
  const topSearchBoxRef = useRef<HTMLDivElement>(null);
  const [searched, setSearched] = useState("");
  const [result, setResault] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    let timer = setTimeout(() => {
      setIsLoading(true);
      vercelClient
        .get(`/api/allProduct/?search=${searched}`)
        .then((res) => setResault(res.data))
        .catch((er) => console.log(er))
        .finally(() => setIsLoading(false));
    }, 300);

    return () => clearTimeout(timer);
  }, [searched]);

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
          {isLoading && (
            // <figure>
            //   <div
            //     className={joinClassModules(classes.dot, classes.white)}
            //   ></div>
            //   <div className={classes.dot}></div>
            //   <div className={classes.dot}></div>
            //   <div className={classes.dot}></div>
            //   <div className={classes.dot}></div>
            // </figure>
            <Loader />
          )}
          <label>
            <SearchIcon />
          </label>
        </div>
        {result && (
          <div className={classes.ResaultBox}>
            {result?.length === 0 && <p>نتیجه ای یافت نشد</p>}
            {result?.map((product: productType) => (
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
        )}
      </div>
      <Modal
        type="fixBottomFull"
        close={closeFocusHandler}
        show={isFocusSearch}
      >
        <div className={classes.searchPhone}>
          <div className={classes.header}>
            <div className={classes.searchBox}>
              <input
                type="text"
                value={searched}
                onChange={onChangeHandler}
                dir="rtl"
                placeholder="جستجو"
              />
              {isLoading && <Loader />}
            </div>
            <ArrowLeftIcon click={() => Router.back()} />
          </div>
          <div className={classes.result}>
            {result?.length === 0 && <p>نتیجه ای یافت نشد</p>}
            {result?.map((product: productType) => (
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
      </Modal>
    </div>
  );
};
export default SearchBar;
