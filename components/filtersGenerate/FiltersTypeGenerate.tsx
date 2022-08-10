import FilterRadioMode from "../FilterRadioMode/FilterRadioMode";
import FilterRange from "../FilterRange/FilterRange";
import FilterSelectMode from "../FilterSelectMode/FilterSelectMode";

export interface filteritemType {
  name: string;
  faName: string;
  value: string | number;
}
export interface filterType {
  name: string;
  type: string;
  faName: string;
  items: filteritemType[];
}

import FilterListMode from "./FilterListMode";

const FiltersTypeGenerate = (props: { filter: filterType }) => {
  const { filter } = props;

  let Content;

  switch (filter.type) {
    case "list":
      return <FilterListMode filter={filter} />;

    case "radio":
      return <FilterRadioMode filter={filter} name={filter.name} />;

    case "select":
      return <FilterSelectMode filter={filter} />;

    case "range":
      return (
        <FilterRange
          filter={filter}
          min={+filter.items[0].value}
          max={+filter.items[1].value}
        />
      );

    default:
      console.log("your type in invalid");
  }

  return <div>{Content}</div>;
};
export default FiltersTypeGenerate;
