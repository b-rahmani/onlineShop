import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  className?: string;
  children: JSX.Element | string;
  click?: () => void;
}

const ActiveLink = (props: Props) => {
  const router = useRouter();
  const classes = [];
  router.pathname === props.href && classes.push("active");
  props.className && classes.push(props.className);
  return (
    <Link href={props.href}>
      <a className={classes.join(" ")} onClick={props.click}>
        {props.children}
      </a>
    </Link>
  );
};
export default ActiveLink;
