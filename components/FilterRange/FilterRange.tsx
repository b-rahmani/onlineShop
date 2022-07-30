import { useState } from "react";
import InputRange from "react-input-range";
import classes from "./filterRange.module.scss";
import "react-input-range/lib/css/index.css";
import { useRouter } from "next/router";

interface priceObjectType {
  name: string;
  faName: string;
  value: number;
}

type filterRangeTypes = priceObjectType[];

interface props {
  filter: filterPrice;
}

interface filterPrice {
  name: string;
  faName: string;
  type: string;
  items: priceObjectType[];
}

const FilterRange = (props: any) => {
  const [prices, setPrices] = useState<filterRangeTypes>(props.filter.items);
  const Router = useRouter();

  const priceChangeHandler = (value: any) => {
    const state = [...prices];
    state[0].value = value.min;
    state[1].value = value.max;

    setPrices(state);
    // if (inputRef?.current?.checked) {
    Router.push({
      pathname: "/",
      query: {
        min_price: encodeURI(value.min),
        max_price: encodeURI(value.max),
      },
    });
    // }
  };

  const singleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const state = [...prices];

    const newState = state.map((item) =>
      item.name === e.target.name ? { ...item, value: +e.target.value } : item
    );
    setPrices(newState);
  };
  return (
    <div className={classes.filterRange}>
      <div className={classes.inputBox}>
        <div className={classes.minPrice}>
          <span>از</span>
          <div className={classes.inputBox}>
            <input
              type="text"
              value={prices[0]?.value?.toLocaleString()}
              name="min-price"
              inputMode="numeric"
              onChange={singleChangeHandler}
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
              value={prices[1]?.value?.toLocaleString()}
              onChange={singleChangeHandler}
            />
          </div>
          <span>تومان</span>
        </div>
        <InputRange
          minValue={0}
          maxValue={props.max}
          onChange={priceChangeHandler}
          value={{ min: prices[0].value, max: prices[1].value }}
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
