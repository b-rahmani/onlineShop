import FilterRadioMode from "../FilterRadioMode/FilterRadioMode";
import FilterRange from "../FilterRange/FilterRange";
import FilterSelectMode from "../FilterSelectMode/FilterSelectMode";
import classes from "./filter.module.scss";

import FilterListMode from "./FilterListMode";

const FiltersTypeGenerate = (props: any) => {
  const { filter, ...custom } = props;

  let Content;

  switch (filter.type) {
    case "list":
      return <FilterListMode filter={filter} />;

    case "radio":
      return <FilterRadioMode filter={filter} />;

    case "select":
      return <FilterSelectMode filter={filter} />;
    // return <div>select</div>;

    case "range":
      return (
        <FilterRange
          filter={filter}
          min={filter.items[0].value}
          max={filter.items[1].value}
        />
      );
    // return <div>range</div>;

    default:
      console.log("your type in invalid");
  }

  return <div className={props.className}>{Content}</div>;
};
export default FiltersTypeGenerate;
