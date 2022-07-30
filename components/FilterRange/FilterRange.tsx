import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import classes from "./filterRange.module.scss";
import "react-input-range/lib/css/index.css";
import { useRouter } from "next/router";
import { filterType } from "../filtersGenerate/FiltersTypeGenerate";

const FilterRange = (props: {
  filter: filterType;
  min: number;
  max: number;
}) => {
  const [prices, setPrices] = useState([...props.filter.items]);
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);
  const Router = useRouter();

  useEffect(() => {
    const prevQuery = Router.query;
    Router.push({
      pathname: "/",
      query: {
        ...prevQuery,
        min_price: encodeURI(prices[0].value.toString()),
        max_price: encodeURI(prices[1].value.toString()),
      },
    });
  }, [prices]);

  const priceChangeHandler = (value: any) => {
    const state = [
      { ...prices[0], value: +value.min },
      { ...prices[1], value: +value.max },
    ];

    setPrices(state);
    setMin(+value.min);
    setMax(+value.max);
  };

  const singleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const state = [...prices];

    const newState = state.map((item) =>
      item.name === e.target.name
        ? { ...item, value: Number(e.target.value.replace(/\D/g, "")) }
        : item
    );
    setPrices(newState);
  };

  const changeSingleWithDelay = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "min-price") {
      setMin(Number(e.target.value.replace(/\D/g, "")));
    } else {
      setMax(Number(e.target.value.replace(/\D/g, "")));
    }

    setTimeout(() => {
      singleChangeHandler(e);
    }, 2000);
  };
  return (
    <div className={classes.filterRange}>
      <div className={classes.inputBox}>
        <div className={classes.minPrice}>
          <span>از</span>
          <div className={classes.inputBox}>
            <input
              type="text"
              value={min.toLocaleString()}
              name="min-price"
              inputMode="numeric"
              onChange={changeSingleWithDelay}
            />
          </div>
          <span>تومان</span>
        </div>
        <div className={classes.maxPrice}>
          <span>تا</span>
          <div className={classes.inputBox}>
            <input
              type="text"
              name="max-price"
              inputMode="numeric"
              value={max.toLocaleString()}
              onChange={changeSingleWithDelay}
            />
          </div>
          <span>تومان</span>
        </div>
        <InputRange
          minValue={0}
          maxValue={+props.max}
          onChange={priceChangeHandler}
          value={{ min: +prices[0].value, max: +prices[1].value }}
        />
      </div>
      <div className={classes.labels}>
        <span>حداکثر</span>
        <span>حداقل</span>
      </div>
    </div>
  );
};
export default FilterRange;
