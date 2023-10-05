import { useRouter } from "next/router";
import CheckIcon from "../icons/checkIcon";
import classes from "./filter.module.scss";
import { filteritemType, filterType } from "./FiltersTypeGenerate";
const FilterListMode = (props: { filter: filterType }) => {
  const { filter } = props;
  const Router = useRouter();
  const urlParams = Router.query;

  const filterClickHandler = (name: string, value: string) => {
    const prevQuery = Router.query;
    let newQuery;
    if(prevQuery[name]===value){
newQuery={...Object.fromEntries(Object.entries(prevQuery).filter(([itemName,itemValue])=>name!==itemName&& value!==itemValue))}
    }else{
newQuery={...prevQuery,[name]:encodeURI(value)}
    }
    Router.push(
      {
        pathname: "/",
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      {filter.items?.map((el: filteritemType) => (
        <div
          key={el.name}
          className={classes.list}
          onClick={() => filterClickHandler(filter.name, el.value.toString())}
        >
          <span>{el.faName}</span>
          {Object.entries(urlParams).some(
            ([typeName, value]) =>
              typeName === filter.name && value === el.value
          ) && <CheckIcon />}
        </div>
      ))}
    </div>
  );
};
export default FilterListMode;
