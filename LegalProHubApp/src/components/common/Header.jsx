import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { scrollSliceactions } from "../../Store/ScrollSlice";
import { loginsignupactions } from "../../Store/LoginSignUpSlice";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import loginToken from "../authComponents/LoginToken";
import userType from "../authComponents/FindAdmin";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const dispatch = useDispatch();
  const IsVisible = useSelector((store) => store.scroll.IsVisible);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const navigate = useNavigate();

  const handleToggleHamBur = () => {
    setShowNavMenu(!showNavMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      dispatch(scrollSliceactions.updateScroll(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  const showLogInForm = () => {
    dispatch(loginsignupactions.showloginform());
  };

  const showSignUpForm = () => {
    dispatch(loginsignupactions.showsignupform());
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    window.location.reload();
  };

  const handeAdmin = () => {
    navigate("/admin");
  };

  // Animation variants
  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
    },
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <motion.header
      className={styles.Header}
      variants={headerVariants}
      initial="hidden"
      animate={IsVisible ? "visible" : "hidden"}
      style={{ zIndex: 1000 }}
    >
      <motion.div
        className={styles.Imgcontainer}
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        <NavLink to="/home">
          <motion.img
            src="./AppLogo.png"
            alt="App Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </NavLink>
      </motion.div>

      <AnimatePresence>
        {showNavMenu ? (
          <motion.div
            className={styles.mobile_Menu}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.Mainheadings}>
              <motion.div variants={navItemVariants}>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `${styles.Mainheadingsanchors} ${
                      isActive ? styles.active : ""
                    }`
                  }
                  onClick={() => setShowNavMenu(false)}
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `${styles.Mainheadingsanchors} ${
                      isActive ? styles.active : ""
                    }`
                  }
                  onClick={() => setShowNavMenu(false)}
                >
                  Services
                </NavLink>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${styles.Mainheadingsanchors} ${
                      isActive ? styles.active : ""
                    }`
                  }
                  onClick={() => setShowNavMenu(false)}
                >
                  Contact Us
                </NavLink>
              </motion.div>
            </div>
            <div className={styles.Signuplogin}>
              {!loginToken && (
                <motion.button
                  className={`${styles.loginsignup} ${styles["slide-fwd-center"]}`}
                  onClick={showLogInForm}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Login
                </motion.button>
              )}
              {!loginToken && (
                <motion.button
                  className={`${styles.loginsignup} ${styles["slide-fwd-center"]}`}
                  onClick={showSignUpForm}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Sign Up
                </motion.button>
              )}
              {loginToken && userType === "admin" && (
                <motion.button
                  className={`${styles.loginsignup} ${styles["slide-fwd-center"]}`}
                  onClick={handeAdmin}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Dashboard
                </motion.button>
              )}
              {loginToken && (
                <motion.button
                  className={`${styles.loginsignup} ${styles["slide-fwd-center"]}`}
                  onClick={handleLogOut}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  LogOut
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className={styles.Web_Menu}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                when: "beforeChildren",
              },
            }}
          >
            <div className={styles.Mainheadings}>
              <motion.div
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `${styles.Mainheadingsanchors} ${
                      isActive ? styles.active : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `${styles.Mainheadingsanchors} ${
                      isActive ? styles.active : ""
                    }`
                  }
                >
                  Services
                </NavLink>
              </motion.div>
              <motion.div
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${styles.Mainheadingsanchors} ${
                      isActive ? styles.active : ""
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </motion.div>
            </div>
            <div className={styles.Signuplogin}>
              {!loginToken && (
                <motion.button
                  className={`${styles.loginsignup} ${styles["slide-fwd-center"]}`}
                  onClick={showLogInForm}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Login
                </motion.button>
              )}
              {!loginToken && (
                <motion.button
                  className={`${styles.loginsignup} ${styles["slide-fwd-center"]}`}
                  onClick={showSignUpForm}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Sign Up
                </motion.button>
              )}
              {loginToken && userType === "admin" && (
                <motion.button
                  className={`${styles.loginsignup} ${styles["slide-fwd-center"]}`}
                  onClick={handeAdmin}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Dashboard
                </motion.button>
              )}
              {loginToken && (
                <motion.button
                  className={`${styles.loginsignup} ${styles["slide-fwd-center"]}`}
                  onClick={handleLogOut}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                >
                  LogOut
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={styles.Hams_Menu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={handleToggleHamBur}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showNavMenu ? <IoMdClose /> : <RxHamburgerMenu />}
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
