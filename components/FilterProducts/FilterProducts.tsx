import classes from "./filterProducts.module.scss";

interface Props {
  filters: any[];
}
const FilterProducts = (props: Props) => {
  return (
    <div className={classes.filterProducts}>
      <div>
        <h3>فیلتر ها </h3>
        <button>حذف فیلتر ها </button>
      </div>
    </div>
    
  );
};
export default FilterProducts;
