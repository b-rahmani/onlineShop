import classes from "./filter.module.scss";

import FilterListMode from "./FilterListMode";

const FiltersTypeGenerate = (props: any) => {
  const { filter, ...custom } = props;

  let Content;

  switch (filter.type) {
    case "list":
      return <FilterListMode filter={filter} />;

    case "radio":
      //   return <Radio {...custom} />;
      return <div>radio</div>;

    case "select":
      //   return <Select {...custom} />;
      return <div>select</div>;

    case "range":
      //   return <Range {...custom} />;
      return <div>range</div>;

    default:
      console.log("your type in invalid");
  }

  return <div className={props.className}>{Content}</div>;
};
export default FiltersTypeGenerate;
