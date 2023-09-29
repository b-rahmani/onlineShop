import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  filteritemType,
  filterType,
} from "../filtersGenerate/FiltersTypeGenerate";
import classes from "./filterSelectMode.module.scss";

interface selectType {
  name: string;
  value: string;
}
interface IObjectKeys {
  [key: string]: string | number | undefined;
}
const FilterSelectMode = (props: { filter: filterType }) => {
  const [select, setSelect] = useState<selectType[]>([]);
  const Router = useRouter();

  useEffect(() => {
    const selectItemsINQuery = [];
    // for key,value} in Router.query{

    // }
    if (Router.isReady) {
      for (const key in Router.query) {
        if (key.includes(props.filter.name))
          selectItemsINQuery.push({
            name: props.filter.name,
            value: Router.query[key] as string,
          });
      }
      setSelect(selectItemsINQuery);
    }
  }, []);

  useEffect(() => {
    const querys: IObjectKeys = {};
    select.forEach(({ name, value }, ind: number) => {
      // let label = `${name}[${ind.toString()}]`;
      querys[name] = encodeURI(value);
    });
    const prevQuery = Router.query;
    // const filteredPrevQuery=Object.keys(prevQuery).map(el=>el.includes(props.filter.name)?"":el);
    const filteredPrevQuery = Object.fromEntries(
      Object.entries(prevQuery).filter(
        ([key]) => !key.includes(props.filter.name)
      )
    );

    Router.push(
      {
        pathname: "/",
        query: { ...filteredPrevQuery, ...querys },
      },
      undefined,
      { shallow: true }
    );
  }, [select]);

  const selectFilterHandler = (name: string, value: string) => {
    if (select.some((el) => el.value === value)) {
      setSelect((prev) => prev.filter((item) => item.value !== value));
    } else {
      setSelect((prev) => [...prev, { name: name, value: value }]);
    }
  };

  return (
    <div className={classes.filteSelect}>
      {props.filter.items.map((item: filteritemType) => (
        <div className={classes.item} key={item.value}>
          <label>
            <input
              type="checkbox"
              checked={select?.some((s: selectType) => s.value === item.value)}
              onChange={() =>
                selectFilterHandler(props.filter.name, item.value.toString())
              }
            />
          </label>
          <div className={classes.Name}>{item.faName}</div>
          <div
            className={classes.color}
            style={{
              backgroundColor:
                props.filter.name === "color" ? item.value.toString() : "none",
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
