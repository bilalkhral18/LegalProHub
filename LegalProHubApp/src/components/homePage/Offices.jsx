import { useContext } from "react";
import styles from "./Office.module.css";
import Office from "./Office";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
import { motion } from "framer-motion";

const Offices = () => {
  const { Officelocation } = useContext(HomeItemsStore);

  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Header animations
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.Offices}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className={styles.headercontainer} variants={headerVariants}>
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Our Offices
        </motion.h4>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Visit us at any of our locations across the United States.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.OfficesContainer}
        variants={containerVariants}
      >
        {Officelocation?.map((Officeitem, index) => (
          <Office item={Officeitem} key={Officeitem.id} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Offices;
