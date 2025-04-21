// LegalTeam.jsx
import { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./Legalteam.module.css";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
import LegalMember from "./LegalMember";

const LegalTeam = () => {
  const { legalTeam } = useContext(HomeItemsStore);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for headings
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.legalteamcontainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        className={styles.headingcontainer}
        variants={headingVariants}
      >
        <motion.h2>Meet Our Legal Experts</motion.h2>
        <motion.p>
          Our team of dedicated professionals is here to provide you with the
          best legal advice and service.
        </motion.p>
      </motion.div>

      <motion.div className={styles.memberscontainer}>
        {legalTeam.map((teamitem) => (
          <LegalMember key={teamitem.id} item={teamitem} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LegalTeam;
