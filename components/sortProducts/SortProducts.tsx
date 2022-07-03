import SortIcom from "../icons/SortIcom";
import classes from "./sortProducts.module.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const SortProducts = () => {
  interface dataSort {
    name: string;
    value: string;
  }
  interface Sort {
    dataSort?: dataSort[];
    selectedSort?: string;
  }

  const [sort, setSort] = useState<Sort>({});
  const Router = useRouter();

  useEffect(() => {
    console.log(Router);
    axios
      .get("/api/allSortings")
      .then((res) =>
        setSort({ dataSort: res.data, selectedSort: res.data[0].value })
      )
      .catch((er) => console.log(er));
  }, []);

  const selectedSortHandler = (value: string) => {
    setSort((prev) => ({ ...prev, selectedSort: value }));
    const hash = Router.asPath.split("#")[1];
    const url = "/";
    const Query = Router.query;
    console.log(Router);

    Router.replace(
      {},
      {
        pathname: url,
        hash: hash,

        query: { ...Query, sort: value },
      },
      { scroll: false }
    );
  };
  return (
    <div className={classes.sortSec}>
      <p className={classes.sortIcon}>
        <SortIcom />
        <span> مرتب سازی :</span>
      </p>
      <ul className={classes.sorting}>
        {sort?.dataSort?.map((item) => (
          <li
            key={item.name}
            className={`${classes.sortItem} ${
              sort.selectedSort === item.value ? classes.active : ""
            }`}
            onClick={() => selectedSortHandler(item.value)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(SortProducts);
