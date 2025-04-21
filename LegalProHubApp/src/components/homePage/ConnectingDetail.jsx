// ConnectingDetail.jsx
import { motion } from "framer-motion";
import styles from "./ConnectingDetails.module.css";

const ConnectingDetail = ({ item }) => {
  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Icon animation variants
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.maincomponents}
      variants={itemVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 },
      }}
    >
      <div className={styles.headingcomponent}>
        <motion.span
          className={styles.Icon}
          variants={iconVariants}
          whileHover={{
            rotate: [0, -10, 10, -5, 5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {item.icon}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {item.name}
        </motion.h3>
      </div>
      <motion.p
        className={styles.mainparagraphs}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {item.para}
      </motion.p>
    </motion.div>
  );
};

export default ConnectingDetail;
