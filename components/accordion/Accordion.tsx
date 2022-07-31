import { useState } from "react";
import classes from "./accordion.module.scss";

interface propsAccordionType {
  title: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const Accordion = (props: propsAccordionType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={classes.accordionItem}>
      <div
        className={classes.accordionTitle}
        onClick={() => !props.mobile && setIsOpen((prev) => !prev)}
      >
        <div>{props.title}</div>
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      <div
        style={{ maxHeight: isOpen ? "800px" : "0px" }}
        className={classes.accordionContent}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Accordion;
