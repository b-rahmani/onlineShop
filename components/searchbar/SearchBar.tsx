
import SearchIcon from "../icons/SearchIcon";
import classes from "./searchbar.module.scss";
const SearchBar = () => {
  return (<div className={classes.searchBar}>
    <input type="search" placeholder="search products..." />
    <label><SearchIcon /></label>
  </div>
  )
}
export default SearchBar