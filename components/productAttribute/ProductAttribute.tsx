import classes from "./ProductAttribute.module.scss";
import Select from "react-select";

import {
  AttributeItemType,
  AttributeType,
} from "../SingleProduct/SingleProduct";

export interface productAttributeType {
  variations?:string[];
  attribute: AttributeType;
  setSelectedAttribute: (value: unknown) => void;
  selectedAttribute: AttributeType;
}

const ProductAttribute = (props: productAttributeType) => {
  const { attribute, setSelectedAttribute, selectedAttribute } = props;

  const selectChangeHandler = (opt: unknown) => {
    setSelectedAttribute(opt);
  };

  let attType;

  switch (attribute?.type||"select") {
    case "radio":
      attType = (
        <div className={classes.attributeValue}>
          {/* check all of types */}
          {attribute.items?.map((item) => (
            <div className={classes.attributeSelect} key={item.name}>
              <input
                type="radio"
                name="radio"
                id={item.value}
                className={classes.radio}
                onChange={() => setSelectedAttribute(item)}
                checked={item.value === selectedAttribute?.value}
              />
              <label
                htmlFor={item.value}
                style={{ backgroundColor: item.value }}
              >
                <span style={{ border: `2px solid ${item.value}` }}></span>
              </label>
            </div>
          ))}
        </div>
      );

      break;

    case "select":
      attType = (
        <div className={classes.attributeValue}>
          <Select
            getOptionLabel={(option) => option.size}
            getOptionValue={(option) => option.size}
            value={selectedAttribute}
            onChange={selectChangeHandler}
            options={attribute.map((el) => ({
              ...el,
              label: el.size,
            }))}
          />
        </div>
      );

      break;

    default:
      break;
  }

  return (
    <div className={classes.attribute}>
      {attribute && attribute?.length > 0 && (
        <>
          <span>
            {"size"} : {selectedAttribute?.size}
          </span>
          {attType}
        </>
      )}
    </div>
  );
};
export default ProductAttribute;
