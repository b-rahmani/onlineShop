import SortIcom from "../icons/SortIcom";
import classes from "./sortProducts.module.scss";
import axios from "axios";
import { useContext, useEffect,useState,memo } from "react";
import { AllProductContext } from "../../store/ContextAllProduct";
import { useRouter } from "next/router";
import FilterIcon from "../icons/FilterIcon";
import { useSelector, useDispatch } from "react-redux";
import {
  closeFilter,
  toggleFilter,
  closeSort,
  toggleSort,
} from "../../store/mobileSortFilter";
import {
  changeSelectedSort,
  initSorts,
  singleSortItemType,
} from "../../store/dataSortSlice";
import { RootState } from "../../store/store";
const SortProducts = () => {
  // interface dataSort {
  //   name: string;
  //   value: string;
  // }
  // interface Sort {
  //   dataSort: dataSort[];
  //   selectedSort: string | string[];
  // }

  // const [sort, setSort] = useState<Sort>({ dataSort: [], selectedSort: "" });

  const Router = useRouter();
  const dispatch = useDispatch();
  const filterSort = useSelector((state: RootState) => state.filterSort);
  const { sorts } = useContext(AllProductContext);
  const Query = Router.query;
  const selectedSort=sorts?.find((item:any)=>item.value===Query.sort)

  // useEffect(() => {
  //       if (Query.sort) {
  //         // return setSort({ dataSort: res.data, selectedSort: Query.sort });
  //         setSelectedSort(sorts?.find((item:any)=>item.value===Query.sort))
  //       } else {
          
  //       }
  // }, [Query.sort]);

  useEffect(() => {
    if (filterSort.isOpenfilter || filterSort.isOpensort) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [filterSort.isOpenfilter, filterSort.isOpensort]);

  const selectedSortHandler = (item: singleSortItemType) => {
    // setSort((prev) => ({ ...prev, selectedSort: value }));
    // dispatch(changeSelectedSort(item));
   
    const hash = Router.asPath.split("#")[1];
    const url = "/";
    const Query = Router.query;
    Query.sort = item.value;
    
    const display= Object.keys(Query).map(function(key) {
      return key + '=' + Query[key];
    }).join('&');
    
   
    Router.replace(`${url}?${display}${hash ? `#${hash}` : ""}`);
    // Router.replace(
    //   {
    //     // pathname: url,
    //     // hash: hash,
    //     // query: { ...Query, sort: item.value },
    //   },
    //   {
    //     pathname: url,
    //     hash: hash,
    //     query: { ...Query, sort: item.value },
    //   },
    //   { scroll: false }
    // );
  };

  // let sortName;
  // if (sort.dataSort.length) {
  //   let item = sort.dataSort.find((el) => el.value === sort.selectedSort);
  //   sortName = item?.name;
  // }

  const toggleFilterHandler = () => {
    dispatch(toggleFilter());
  };

  const toggleSortHandler = () => {
    dispatch(toggleSort());
  };

  return (
    <>
      {/* filter + sort mobile */}
      <div className={classes.filterSortPhone}>
        <div
          className={classes.filter}
          // onClick={() => )}
          onClick={toggleFilterHandler}
        >
          <FilterIcon /> <span>فیلتر</span>
        </div>
        <div
         className={classes.sort}
          onClick={toggleSortHandler}>
          <SortIcom />
          <span>{selectedSort?.faName??'مرتب سازی'}</span>
        </div>
      </div>
      {/* sort desktop */}
      <div className={classes.sortSec}>
        <p className={classes.sortIcon}>
          <SortIcom />
          <span> مرتب سازی :</span>
        </p>
        <ul className={classes.sorting}>
          {sorts?.map((item: singleSortItemType) => (
            <li
              key={item.faName}
              className={`${classes.sortItem} ${
                selectedSort?.value === item.value ? classes.active : ""
              }`}
              onClick={() => selectedSortHandler(item)}
            >
              {item.faName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default memo(SortProducts);
