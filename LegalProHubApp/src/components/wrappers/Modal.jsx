import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Modal = ({ children }) => {
  const setModal = useSelector((state) => state.logsignup.setModal);
  useEffect(() => {
    //prevent to scroll when modal element is apear
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  if (!setModal) return null;

  return createPortal(
    <div className={`${styles["Modalcontainer"]}`}>
      <div className="Modalitems">{children}</div>
    </div>,
    document.body
  );
};
export default Modal;
