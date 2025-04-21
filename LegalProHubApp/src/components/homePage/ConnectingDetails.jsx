// ConnectingDetails.jsx
import { useContext } from "react";
import { motion } from "framer-motion";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
import styles from "./ConnectingDetails.module.css";
import ConnectingDetail from "./ConnectingDetail";

const ConnectingDetails = () => {
  const { services } = useContext(HomeItemsStore);

  // Container variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3, // Delay before starting children animations
      },
    },
  };

  // Header animation variants
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
      className={styles.ConnectDetailsContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={styles.connectheader} variants={headerVariants}>
        <motion.h6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Connecting you with expertise
        </motion.h6>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Innovative Legal Solutions
        </motion.h2>
        <motion.p
          className={styles.headerparagraph}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Explore our platform that bridges the gap between clients and legal
          professionals, ensuring seamless access to justice.
        </motion.p>
      </motion.div>

      <motion.div className={styles.connectmain} variants={containerVariants}>
        {services.map((serviceitem) => (
          <ConnectingDetail key={serviceitem.id} item={serviceitem} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ConnectingDetails;
