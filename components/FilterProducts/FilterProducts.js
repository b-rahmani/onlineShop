import ArrowBottom from "../icons/ArrowBottom";
import classes from "./filterProducts.module.scss";

const filters = [
  { name: "category", type: "list", faName: "دسته بندی" },
  { name: "isExist", type: "radio", faName: "فقط کالاهای موجود" },
  { name: "color", type: "select", faName: "رنگ" },
  { name: "isDiscount", type: "radio", faName: "فقط کالای تخفیف دار" },
  { name: "customHead", type: "select", faName: "جشنواره ها" },
  { name: "price", type: "range", faName: "محدوده قیمت" },
];
const FilterProducts = (props) => {
  return (
    <div className={classes.filterProducts}>
      <div className={classes.filterHead}>
        <h3>فیلتر ها </h3>
        <button
        // onClick={}
        >
          حذف فیلتر ها{" "}
        </button>
      </div>

      <div className={classes.filters}>
        {" "}
        {filters.map((item) => (
          <div key={item.name} className={classes.item}>
            <p className={classes.header}>
              <span className={classes.name}>{item.faName}</span>
              <ArrowBottom />
            </p>
            <div> content</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilterProducts;
