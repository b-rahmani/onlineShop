import { useRouter } from "next/router";
import CheckIcon from "../icons/checkIcon";
import classes from "./filter.module.scss";
const FilterListMode = (props) => {
  const { filter, ...custom } = props;
  const Router = useRouter();
  const urlParams = Router.query;

  const filterClickHandler = (name: string, value: string) => {
    console.log(name, value);
    Router.push({
      pathname: "/",
      query: { [name]: encodeURI(value) },
    });
  };

  return (
    <div>
      {filter.items?.map((el) => (
        <div
          key={el.name}
          className={classes.list}
          onClick={() => filterClickHandler(filter.name, el.value)}
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
