import classes from "./filterProducts.module.scss";

// interface Props {
//   filters: {};
// }
const FilterProducts = (props) => {
  return (
    <div className={classes.filterProducts}>
      <div className={classes.filterHead}>
        <h3>فیلتر ها </h3>
        <button 
        // onClick={}
        >حذف فیلتر ها </button>
      </div>

      <div className={classes.filters}>
        {" "}
        {Object.entries(props.filters).map(([key, value]) => (
          <p key={key}>{value.title}</p>
        ))}
      </div>
    </div>
  );
};
export default FilterProducts;
