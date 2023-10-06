import { RootState } from "../../store/store";
import Modal from "../modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { closeSort } from "../../store/mobileSortFilter";
import classes from "./sortProducts.module.scss";
import CloseIcon from "../icons/CloseIcon";
import {
  changeSelectedSort,
  singleSortItemType,
} from "../../store/dataSortSlice";
import CheckIcon from "../icons/checkIcon";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AllProductContext } from "../../store/ContextAllProduct";

const SortMobile = () => {
  const isOPenSort = useSelector(
    (state: RootState) => state.filterSort.isOpensort
  );  
  const { sorts } = useContext(AllProductContext);
  const [selectedSort,setSelectedSort]=useState<any>(sorts[0])
  const dispatch = useDispatch();
  const Router = useRouter();
  const sortItemClickHandler = (sortItem: singleSortItemType) => {
    setSelectedSort(sortItem)
    // const hash = Router.asPath.split("#")[1];
    const url = "/";
    const Query = Router.query;
    // Query.sort = sortItem.value;
    Router.replace({
      pathname: url,
      // hash: hash,

      query: { ...Query, sort: sortItem.value },
    });
    // const display = Object.keys(Query)
    //   .map(function (key) {
    //     return key + "=" + Query[key];
    //   })
    //   .join("&");

    // Router.replace(`${url}?${display}${hash ? `#${hash}` : ""}`);
    dispatch(closeSort());
  };

  return (
    <Modal
      type="fixBottom"
      backdrop
      show={isOPenSort}
      close={() => dispatch(closeSort())}
    >
      <div className={classes.mobileSort}>
        <div className={classes.sortheader}>
          <CloseIcon click={() => dispatch(closeSort())} />
          <p>مرتب سازی بر اساس </p>
        </div>
        <ul className={classes.sortContainer}>
          {sorts?.map((sortItem: singleSortItemType) => (
            <li
              key={sortItem.value}
              //   className={selectedSort.value === sortItem.value ? "active" : ""}
              onClick={() => sortItemClickHandler(sortItem)}
            >
              <span>{sortItem.faName}</span>
              {selectedSort?.value === sortItem.value && <CheckIcon />}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};
export default SortMobile;
