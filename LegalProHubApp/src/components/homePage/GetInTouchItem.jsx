import { useDispatch } from "react-redux";
import styles from "./GetInTouch.module.css";
import { getofficialemail } from "../../Store/Commonfunctions";
import loginToken from "../authComponents/LoginToken";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import { motion } from "framer-motion";

const GetInTouchItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleEmailClick = (e, itememail) => {
    e.preventDefault();
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      dispatch(getofficialemail(itememail));
    }
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${item.number}`;
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    initial: { color: "" },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.div
        className={styles.components}
        variants={itemVariants}
        whileHover={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {item.heading}
        </motion.h5>

        <motion.a
          href="#"
          onClick={(e) => handleEmailClick(e, item.email)}
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {item.email}
        </motion.a>

        <motion.p
          onClick={handlePhoneClick}
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
          style={{ cursor: "pointer" }}
        >
          {item.number}
        </motion.p>
      </motion.div>
    </>
  );
};

export default GetInTouchItem;
