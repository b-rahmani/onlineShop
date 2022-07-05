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

const SortMobile = () => {
  const isOPenSort = useSelector(
    (state: RootState) => state.filterSort.isOpensort
  );
  const allSort = useSelector((state: RootState) => state.sortData.allSort);
  const selectedSort = useSelector(
    (state: RootState) => state.sortData.selectedSort
  );
  const dispatch = useDispatch();
  const Router = useRouter();
  const sortItemClickHandler = (sortItem: singleSortItemType) => {
    dispatch(changeSelectedSort(sortItem));
    const hash = Router.asPath.split("#")[1];
    const url = "/";
    const Query = Router.query;
    Router.replace(
      {},
      {
        pathname: url,
        hash: hash,

        query: { ...Query, sort: sortItem.value },
      },
      { scroll: false }
    );
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
          {allSort.map((sortItem: singleSortItemType) => (
            <li
              key={sortItem.value}
              //   className={selectedSort.value === sortItem.value ? "active" : ""}
              onClick={() => sortItemClickHandler(sortItem)}
            >
              <span>{sortItem.name}</span>
              {selectedSort.value === sortItem.value && <CheckIcon />}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};
export default SortMobile;
