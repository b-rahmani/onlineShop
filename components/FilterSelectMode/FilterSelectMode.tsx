import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./filterSelectMode.module.scss";

interface selectType {
  name: "string";
  value: "string";
}

const FilterSelectMode = (props: any) => {
  const [select, setSelect] = useState<selectType[]>([]);
  const Router = useRouter();

  useEffect(() => {
    const querys = {};
    select.forEach((item: selectType, ind: number) => {
      querys[`${item.name}[${ind}]`] = encodeURI(item.value);
    });

    Router.push({
      pathname: "/",
      query: { ...querys },
    });
  }, [select]);

  const selectFilterHandler = (name: any, value: any) => {
    if (select.some((el) => el.value === value)) {
      setSelect((prev) => prev.filter((item) => item.value !== value));
    } else {
      setSelect((prev) => [...prev, { name: name, value: value }]);
    }
  };

  return (
    <div className={classes.filteSelect}>
      {props.filter.items.map((item: any) => (
        <div className={classes.item} key={item.value}>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                selectFilterHandler(props.filter.name, item.value)
              }
            />
          </label>
          <div className={classes.Name}>{item.faName}</div>
          <div
            className={classes.color}
            style={{
              backgroundColor:
                props.filter.name === "color" ? item.value : "none",
            }}
          >
            &nbsp;
          </div>
        </div>
      ))}
    </div>
  );
};
export default FilterSelectMode;
