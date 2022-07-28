import ArrowBottom from "../icons/ArrowBottom";
import classes from "./filterProducts.module.scss";
import { filters } from "../../filterData/filterData";
import FiltersTypeGenerate from "../filtersGenerate/FiltersTypeGenerate";
import Accordion from "../accordion/Accordion";

const FilterProducts = (props) => {
  return (
    <div className={classes.filterProducts}>
      <div className={classes.innerFilter}>
        <div className={classes.filterHead}>
          <h3>فیلتر ها </h3>
          <button
          // onClick={}
          >
            حذف فیلتر ها{" "}
          </button>
        </div>

        <div className={classes.filters}>
          {" "}
          {filters.map((item) => (
            // <div
            //   key={item.name}
            //   className={classes.item}

            // >
            //   <p className={classes.header}>
            //     <span className={classes.name}>{item.faName}</span>
            //     <ArrowBottom />
            //   </p>
            //   <FiltersTypeGenerate filter={item}  />
            // </div>
            <Accordion title={item.faName} key={item.name}>
              <FiltersTypeGenerate filter={item} />
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FilterProducts;
