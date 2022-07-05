import Modal from "../modal/Modal";
import classes from "./filterProducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeFilter } from "../../store/mobileSortFilter";
import CloseIcon from "../icons/CloseIcon";

const FilterMobile = () => {
  const isOpenFilter = useSelector(
    (state: RootState) => state.filterSort.isOpenfilter
  );
  const dispatch = useDispatch();
  return (
    <Modal
      type="fixBottomFull"
      show={isOpenFilter}
      close={() => dispatch(closeFilter())}
    >
      <div className={classes.mobileFilter}>
        <CloseIcon click={() => dispatch(closeFilter())} />
        this is mobile filter
      </div>
    </Modal>
  );
};
export default FilterMobile;
