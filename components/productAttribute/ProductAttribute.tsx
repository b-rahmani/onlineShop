import classes from "./ProductAttribute.module.scss";
import Select from "react-select";
import {
  AttributeItemType,
  AttributeType,
} from "../SingleProduct/SingleProduct";

interface productAttributeType {
  attribute: AttributeType;
  setSelectedAttribute: (value: AttributeItemType) => void;
  selectedAttribute: AttributeItemType;
}

const ProductAttribute = (props: productAttributeType) => {
  const { attribute, setSelectedAttribute, selectedAttribute } = props;

  let attType;

  switch (attribute?.type) {
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
            getOptionLabel={(option) => option.faName}
            getOptionValue={(option) => option.value}
            value={selectedAttribute}
            onChange={(opt) => setSelectedAttribute(opt)}
            options={attribute.items.map((el) => ({
              ...el,
              label: el.faName,
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
      {attribute && attribute?.items.length > 0 && (
        <>
          <span>
            {attribute.faName} : {selectedAttribute.faName}
          </span>
          {attType}

          
        </>
      )}
    </div>
  );
};
export default ProductAttribute;
