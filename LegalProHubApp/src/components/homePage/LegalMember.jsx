// LegalMember.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Legalteam.module.css";
import { Link } from "react-router-dom";
import loginToken from "../authComponents/LoginToken";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import { useDispatch } from "react-redux";

const LegalMember = ({ item }) => {
  const dispatch = useDispatch();

  const twitterProfile = () => {
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      const twitter_URL =
        "https://www.linkedin.com/in/muhammad-bilal-0398a2328/";
      window.open(twitter_URL, "_blank");
    }
  };

  const linkdInProfile = () => {
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      const linkdIn_URL =
        "https://www.linkedin.com/in/muhammad-bilal-0398a2328/";
      window.open(linkdIn_URL, "_blank");
    }
  };

  // Animation variants for each team member card
  const memberVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for overlay content
  const overlayVariants = {
    rest: {
      opacity: 0,
      y: 20,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for text elements in overlay
  const textVariants = {
    rest: { opacity: 0, y: 10 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for social icons
  const iconVariants = {
    rest: { scale: 0.8, opacity: 0 },
    hover: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      style={{ backgroundImage: `url(${item.pic})` }}
      className={styles.members}
      variants={memberVariants}
      whileHover="hover"
      initial="rest"
    >
      <motion.div className={styles.overlayText} variants={overlayVariants}>
        <motion.h3 variants={textVariants}>{item.name}</motion.h3>
        <motion.h6 variants={textVariants}>{item.type}</motion.h6>
        <motion.p variants={textVariants}>{item.para}</motion.p>
        <motion.div className={styles.overlayanchor} variants={textVariants}>
          <motion.div variants={iconVariants} whileHover={{ scale: 1.2 }}>
            <Link onClick={twitterProfile}>
              <span className={styles.icon}>{item.twitter}</span>
            </Link>
          </motion.div>
          <motion.div variants={iconVariants} whileHover={{ scale: 1.2 }}>
            <Link onClick={linkdInProfile}>
              <span className={styles.icon}>{item.linkedin}</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LegalMember;
