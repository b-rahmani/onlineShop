import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { joinClassModules } from "../../utils/utils";
import {
  filteritemType,
  filterType,
} from "../filtersGenerate/FiltersTypeGenerate";
import classes from "./FilterRadioMode.module.scss";

interface RadioBtnProps {
  size: "sm" | "md" | "lg";
  filter: filterType;
  name: string;
}

const FilterRadioMode = (props: RadioBtnProps) => {
  const Router = useRouter();
  // const inputRef = useRef<HTMLInputElement>(null);
  const [isSelected, setIsSelected] = useState<boolean>(
    // !!Number(Router.query[props.name])
    false
  );

 
  useEffect(() => {
    setIsSelected(!!Number(Router.query[props.name]));
  }, []);
  // useEffect(() => {
  //   const prevQuery = Router.query;
  //   if (isSelected ) {

  //     Router.push(
  //       {
  //         pathname: "/",
  //         query: {
  //           ...prevQuery,
  //           [props.name]: encodeURI(props.filter.items[0].value.toString()),
  //         },
  //       },
  //       undefined,
  //       { shallow: true }
  //     );

  //     Router.push(
  //       {
  //         pathname: "/",
  //         query: {
  //           ...prevQuery,
  //           [props.name]: encodeURI(props.filter.items[1].value.toString()),
  //         },
  //       },
  //       undefined,
  //       { shallow: true }
  //     );

  // }
  // }, [isSelected]);

  const changeHandler = () => {
    const prevQuery = Router.query;

    if (!!Number(Router.query[props.name])) {
      // setIsSelected(false);
      Router.push(
        {
          pathname: "/",
          query: {
            ...prevQuery,
            [props.name]: encodeURI(props.filter.items[1].value.toString()),
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      // setIsSelected(true);
      Router.push(
        {
          pathname: "/",
          query: {
            ...prevQuery,
            [props.name]: encodeURI(props.filter.items[0].value.toString()),
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  // const clickHandler = (name: string, value: filteritemType[]) => {
  //   const prevQuery = Router.query;
  //   if (isSelected) {
  //     Router.push(
  //       {
  //         pathname: "/",
  //         query: { ...prevQuery, [name]: encodeURI(value[0].value.toString()) },
  //       },
  //       undefined,
  //       { shallow: true }
  //     );

  //   } else {
  //     Router.push(
  //       {
  //         pathname: "/",
  //         query: { ...prevQuery, [name]: encodeURI(value[1].value.toString()) },
  //       },
  //       undefined,
  //       { shallow: true }
  //     );

  //   }
  // };

  return (
    <label className={joinClassModules(classes.radioBtn, classes[props.size])}>
      <input
        type="checkbox"
        // ref={inputRef}
        checked={isSelected}
        onChange={changeHandler}
      />
      <span className={classes.slider}></span>
    </label>
  );
};

FilterRadioMode.defaultProps = {
  size: "sm",
};
export default FilterRadioMode;
