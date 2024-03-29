import ArrowBottom from "../icons/ArrowBottom";
import classes from "./filterProducts.module.scss";
// import { filters } from "../../filterData/filterData";
import FiltersTypeGenerate from "../filtersGenerate/FiltersTypeGenerate";
import Accordion from "../accordion/Accordion";
import { AllProductContext } from "../../store/ContextAllProduct";
import { Fragment, useContext } from "react";
import { useRouter } from "next/router";

const FilterProducts = () => {
  const { filters } = useContext(AllProductContext);
  const Router = useRouter();
  return (
    <div className={classes.filterProducts}>
      <div className={classes.innerFilter}>
        <div className={classes.filterHead}>
          <h3>فیلتر ها </h3>
          <button
            onClick={() => {
              Router.replace("/");
            }}
          >
            حذف فیلتر ها{" "}
          </button>
        </div>

        <div className={classes.filters}>
          {" "}
          {filters.map((item) => (
            <Fragment key={item.name}>
              {item.type === "radio" ? (
                // <div className={classes.RadioFilters}>
                <FiltersTypeGenerate filter={item} />
              ) : (
                // </div>
                <Accordion
                  title={item.faName}
                  key={item.name}
                  onlyChild={item.type === "radio"}
                >
                  <FiltersTypeGenerate filter={item} />
                </Accordion>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FilterProducts;
