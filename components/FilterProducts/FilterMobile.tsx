import Modal from "../modal/Modal";
import classes from "./filterProducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeFilter } from "../../store/mobileSortFilter";
import CloseIcon from "../icons/CloseIcon";
import { filters } from "../../filterData/filterData";
import FiltersTypeGenerate from "../filtersGenerate/FiltersTypeGenerate";
import Accordion from "../accordion/Accordion";
import { Fragment, useState } from "react";
import ArrowLeftIcon from "../icons/arrowLeftIcon";
import { useRouter } from "next/router";

const FilterMobile = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const isOpenFilter = useSelector(
    (state: RootState) => state.filterSort.isOpenfilter
  );
  const dispatch = useDispatch();
  const Router = useRouter();

  const renderedFilter = filters.find((el) => el.faName === selectedFilter);

  return (
    <Modal
      type="fixBottomFull"
      show={isOpenFilter}
      close={() => dispatch(closeFilter())}
    >
      <div className={classes.mobileFilter}>
        <div className={classes.header}>
          {selectedFilter ? (
            <div className={classes.selected}>
              <p>{selectedFilter}</p>

              <ArrowLeftIcon click={() => setSelectedFilter("")} />
            </div>
          ) : (
            <>
              <CloseIcon click={() => dispatch(closeFilter())} />
              <p className={classes.title}>فیلتر ها</p>
              <p
                className={classes.removeFilter}
                onClick={() => Router.replace("/")}
              >
                حذف فیلترها{" "}
              </p>
            </>
          )}
        </div>
        {/* filters */}
        <div className={classes.filters}>
          {renderedFilter ? (
            <FiltersTypeGenerate filter={renderedFilter} />
          ) : (
            filters.map((item) => (
              <Fragment key={item.name}>
                {item.type === "radio" ? (
                  <div className={classes.RadioFilters}>
                    <div className={classes.filterName}>{item.faName}</div>
                    <FiltersTypeGenerate filter={item} />
                  </div>
                ) : (
                  <div onClick={() => setSelectedFilter(item.faName)}>
                    <Accordion title={item.faName} key={item.name} mobile>
                      <FiltersTypeGenerate filter={item} />
                    </Accordion>
                  </div>
                )}
              </Fragment>
            ))
          )}
        </div>
      </div>
    </Modal>
  );
};
export default FilterMobile;
