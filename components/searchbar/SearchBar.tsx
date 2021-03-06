import { useDispatch } from "react-redux";
import { openFocusInput, closeFocusInput } from "../../store/searchFocusSlice";
import SearchIcon from "../icons/SearchIcon";
import classes from "./searchbar.module.scss";
const SearchBar = () => {
  const dispatch = useDispatch();

  const searchFocusHandler = () => {
    dispatch(openFocusInput());
  };

  const closeFocusHandler = () => {
    dispatch(closeFocusInput());
  };

  return (
    <div className={classes.searchBar}>
      <input
        type="search"
        dir="auto"
        placeholder="search products..."
        onFocus={searchFocusHandler}
        onBlur={closeFocusHandler}
      />
      <label>
        <SearchIcon />
      </label>
    </div>
  );
};
export default SearchBar;
