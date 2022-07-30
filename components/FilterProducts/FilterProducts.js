import ArrowBottom from "../icons/ArrowBottom";
import classes from "./filterProducts.module.scss";
import { filters } from "../../filterData/filterData";
import FiltersTypeGenerate from "../filtersGenerate/FiltersTypeGenerate";
import Accordion from "../accordion/Accordion";

const FilterProducts = () => {
  return (
    <div className={classes.filterProducts}>
      <div className={classes.innerFilter}>
        <div className={classes.filterHead}>
          <h3>فیلتر ها </h3>
          <button
          
          >
            حذف فیلتر ها{" "}
          </button>
        </div>

        <div className={classes.filters}>
          {" "}
          {filters.map((item) => (
            <>
              {item.type === "radio" ? (
                <div className={classes.RadioFilters}>
                  <div className={classes.filterName}>{item.faName}</div>
                  <FiltersTypeGenerate filter={item} />
                </div>
              ) : (
                <Accordion
                  title={item.faName}
                  key={item.name}
                  onlyChild={item.type === "radio"}
                >
                  <FiltersTypeGenerate filter={item} />
                </Accordion>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FilterProducts;
