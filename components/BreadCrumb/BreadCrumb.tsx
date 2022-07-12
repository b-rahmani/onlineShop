import Link from "next/link";
import { FakeBreadCrumb } from "../../filterData/fakeProductData";
import classes from "./BreadCrumb.module.scss";

const BreadCrumb = () => {
  return (
    <div className={classes.breadcrumbContainer}>
      {FakeBreadCrumb.slice(0, FakeBreadCrumb.length - 1).map((item) => (
        <Link href={item.url.uri} key={item.title}>
          <a className={classes.breadChild}>{item.title}</a>
        </Link>
      ))}
    </div>
  );
};
export default BreadCrumb;
