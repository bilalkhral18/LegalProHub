import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { scrollSliceactions } from "../../Store/ScrollSlice";
import { loginsignupactions } from "../../Store/LoginSignUpSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import loginToken from "../authComponents/LoginToken";
import userType from "../authComponents/FindAdmin";
import { useNavigate } from "react-router-dom";
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
  return (
    <header
      className={`${styles["Header"]}`}
      style={{
        transform: IsVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.2s ease-in-out",
        zIndex: 1000,
      }}
    >
      <div className={`${styles["Imgcontainer"]}`}>
        <NavLink to="/home">
          <img src="./AppLogo.png" alt="reload" />
        </NavLink>
      </div>
      <div className={showNavMenu ? styles.mobile_Menu : styles.Web_Menu}>
        <div className={`${styles["Mainheadings"]}`}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${styles.Mainheadingsanchors} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${styles.Mainheadingsanchors} ${isActive ? styles.active : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${styles.Mainheadingsanchors} ${isActive ? styles.active : ""}`
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className={`${styles["Signuplogin"]}`}>
          {!loginToken && (
            <button
              className={`${styles["loginsignup"]} ${styles["slide-fwd-center"]}`}
              onClick={showLogInForm}
            >
              Login
            </button>
          )}
          {!loginToken && (
            <button
              className={`${styles["loginsignup"]} ${styles["slide-fwd-center"]}`}
              onClick={showSignUpForm}
            >
              Sign Up
            </button>
          )}
          {loginToken && userType === "admin" && (
            <button
              className={`${styles["loginsignup"]} ${styles["slide-fwd-center"]}`}
              onClick={handeAdmin}
            >
              Dashboard
            </button>
          )}
          {loginToken && (
            <button
              className={`${styles["loginsignup"]} ${styles["slide-fwd-center"]}`}
              onClick={handleLogOut}
            >
              LogOut
            </button>
          )}
        </div>
      </div>
      <div className={styles.Hams_Menu}>
        <button onClick={handleToggleHamBur}>
          <RxHamburgerMenu />
        </button>
      </div>
    </header>
  );
};
export default Header;
