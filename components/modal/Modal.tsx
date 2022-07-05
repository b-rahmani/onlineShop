import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import classes from "./modal.module.scss";
interface Props {
  type: "fixBottom" | "center" | "fixBottomFull";
  backdrop?: boolean;
  children: React.ReactNode;
  show: boolean;
  close: () => void;
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
      break;
    case "fixBottomFull":
      initial = {
        y: "100%",
      };
      animate = { y: props.show ? "0" : "100%" };
      break;

    default:
      break;
  }
  return (
    <>
      {props.backdrop && props.show && <Backdrop click={props.close} />}
      <motion.div
        className={`${classes.modal} ${classes[props.type]}`}
        initial={initial}
        animate={{ ...animate }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        {props.children}
      </motion.div>
    </>
  );
};
export default Modal;
