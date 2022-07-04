import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import classes from "./modal.module.scss";
interface Props {
  type: "fixBottom" | "center";
  backdrop: boolean;
  children: React.ReactNode;
  show: boolean;
}

const Modal = (props: Props) => {
  

  let initial = {};
  let animate = {};

  switch (props.type) {
    case "fixBottom":
      initial = {
        y: "100%",
      };
      animate = { y: props.show ? "0" : "100%" };
      break;

    case "center":
      initial = {
        y: "100%",
      };
      animate = { y: props.show ? "-50%" : "100%", top: "50%" };
    default:
      break;
  }
  return (
    <>
      {props.backdrop && props.show && <Backdrop click={() => ""} />}
      <motion.div
        className={`${classes.modal} ${classes[props.type]}`}
        initial={initial}
        animate={animate}
      >
        Modal
      </motion.div>
      ;
    </>
  );
};
export default Modal;
