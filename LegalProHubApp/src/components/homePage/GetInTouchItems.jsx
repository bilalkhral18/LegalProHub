import { useContext } from "react";
import styles from "./GetInTouch.module.css";
import GetInTouchItem from "./GetInTouchItem";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
import { motion } from "framer-motion";

const GetInTouchItems = () => {
  const { GetInTouch } = useContext(HomeItemsStore);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for header
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={styles.GetInTouch}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className={styles.headercontainer} variants={headerVariants}>
        <h4>Get In Touch</h4>
        <p>
          Reach out to us for any inquiries or to connect with our legal
          professionals
        </p>
      </motion.div>

      <motion.div
        className={styles.componentscontainer}
        variants={containerVariants}
      >
        {GetInTouch?.map((Getintouchitem) => (
          <GetInTouchItem item={Getintouchitem} key={Getintouchitem.id} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GetInTouchItems;
