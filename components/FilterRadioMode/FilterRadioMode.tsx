import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { joinClassModules } from "../../utils/utils";
import { filteritemType, filterType } from "../filtersGenerate/FiltersTypeGenerate";
import classes from "./FilterRadioMode.module.scss";

interface RadioBtnProps {
  size: "sm" | "md" | "lg";
  filter: filterType;
}

const FilterRadioMode = (props: RadioBtnProps) => {
  const Router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const clickHandler = (name: string, value: filteritemType[]) => {
    const prevQuery = Router.query;
    if (inputRef?.current?.checked) {
      Router.push({
        pathname: "/",
        query: { ...prevQuery, [name]: encodeURI(value[0].value.toString()) },
      });
    } else {
      Router.push({
        pathname: "/",
        query: { ...prevQuery },
      });
    }
  };

  return (
    <label className={joinClassModules(classes.radioBtn, classes[props.size])}>
      <input
        type="checkbox"
        ref={inputRef}
        onChange={() => clickHandler(props.filter.name, props.filter.items)}
      />
      <span className={classes.slider}></span>
    </label>
  );
};

FilterRadioMode.defaultProps = {
  size: "sm",
};
export default FilterRadioMode;
