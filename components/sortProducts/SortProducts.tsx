import SortIcom from "../icons/SortIcom";
import classes from "./sortProducts.module.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FilterIcon from "../icons/FilterIcon";
const SortProducts = () => {
  interface dataSort {
    name: string;
    value: string;
  }
  interface Sort {
    dataSort: dataSort[];
    selectedSort: string | string[];
  }

  const [sort, setSort] = useState<Sort>({ dataSort: [], selectedSort: "" });

  const Router = useRouter();
  const Query = Router.query;
  useEffect(() => {
    axios
      .get("/api/allSortings")
      .then((res) => {
        if (Query.sort) {
          return setSort({ dataSort: res.data, selectedSort: Query.sort });
        } else {
          return setSort({
            dataSort: res.data,
            selectedSort: res.data[0].value,
          });
        }
      })
      .catch((er) => console.log(er));
  }, [Query.sort]);

  const selectedSortHandler = (value: string) => {
    setSort((prev) => ({ ...prev, selectedSort: value }));
    const hash = Router.asPath.split("#")[1];
    const url = "/";

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

  let sortName;
  if (sort.dataSort.length) {
    let item = sort.dataSort.find((el) => el.value === sort.selectedSort);
    sortName = item?.name;
  }

  return (
    <>
      <div className={classes.filterSortPhone}>
        <div className={classes.filter}>
          <FilterIcon /> <span>فیلتر</span>
        </div>
        <div
          className={classes.sort}
          onClick={() => setIsDisplayMobileSort(true)}
        >
          <SortIcom />
          <span>{sortName}</span>
        </div>
      </div>
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
    </>
  );
};
export default React.memo(SortProducts);
