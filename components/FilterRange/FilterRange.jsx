import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import classes from "./filterRange.module.scss";
import "react-input-range/lib/css/index.css";
import { useRouter } from "next/router";
import { filterType } from "../filtersGenerate/FiltersTypeGenerate";

const FilterRange = (
  props
  //   : {
  //   filter: filterType;
  //   min: number;
  //   max: number;
  // }
) => {
  const [prices, setPrices] = useState([...props.filter.items]);

  const Router = useRouter();

  useEffect(() => {
    if (Router.query && Router.query[props.filter.items?.[1].name]) {
      setPrices((prev) => [
        { ...prev[0], value: +Router.query[props.filter.items?.[0].name] },
        { ...prev[1], value: +Router.query[props.filter.items?.[1].name] },
      ]);
    }
  }, []);

  useEffect(() => {
    let timer;
    // : any;
    if (prices[0].value === props.min && prices[1].value === props.max) {
    } else {
      timer = setTimeout(() => {
        const prevQuery = Router.query;
        Router.push(
          {
            pathname: "/",
            query: {
              ...prevQuery,
              [props.filter.items?.[0].name]: encodeURI(
                prices[0].value.toString()
              ),
              [props.filter.items?.[1].name]: encodeURI(
                prices[1].value.toString()
              ),
            },
          },
          undefined,
          { shallow: true }
        );
      }, 400);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [prices]);

  const priceChangeHandler = (
    value
    // : any
  ) => {
    const state = [
      { ...prices[0], value: +value.min },
      { ...prices[1], value: +value.max },
    ];

    setPrices(state);
  };

  const singleChangeHandler = (
    e
    // : React.ChangeEvent<HTMLInputElement>
  ) => {
    const state = [...prices];

    const newState = state.map((item) =>
      item.name === e.target.name
        ? { ...item, value: Number(e.target.value.replace(/\D/g, "")) }
        : item
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
              value={prices[0].value.toLocaleString()}
              name={prices[0].name}
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
              name={prices[1].name}
              inputMode="numeric"
              value={prices[1].value.toLocaleString()}
              onChange={singleChangeHandler}
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
