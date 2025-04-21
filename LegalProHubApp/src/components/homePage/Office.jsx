import styles from "./Office.module.css";
import { getlocations } from "../../store/CommonFunctions";
import { useDispatch } from "react-redux";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import loginToken from "../authComponents/LoginToken";
import { motion } from "framer-motion";

const Office = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleLocationClick = (location) => {
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      dispatch(getlocations(location));
    }
  };

  // Individual office item animation
  const officeItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1,
      },
    },
  };

  // Hover animation
  const hoverAnimation = {
    rest: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0.1)",
      transition: { duration: 0.2, type: "tween", ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
  };

  // Location text animation
  const locationVariants = {
    rest: { color: "#333" },
    hover: {
      color: "#007bff",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className={styles.Office}
      variants={officeItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      whileHover="hover"
      animate="rest"
      variants={hoverAnimation}
    >
      <motion.h5
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {item.heading}
      </motion.h5>

      <motion.p
        onClick={() => handleLocationClick(item.location)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={locationVariants}
        style={{ cursor: "pointer" }}
      >
        {item.location}
      </motion.p>
    </motion.div>
  );
};

export default Office;
