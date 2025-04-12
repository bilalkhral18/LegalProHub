import { useEffect } from "react";
import styles from "./Legalteam.module.css";
import { Link } from "react-router-dom";
import loginToken from "../authComponents/LoginToken";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import { useDispatch } from "react-redux";
const LegalMember = ({ item }) => {
  const dispatch = useDispatch();
  // const showLogInForm = () => {

  // };
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
  return (
    <div
      style={{ backgroundImage: `url(${item.pic})` }}
      className={styles.members}
    >
      <div className={styles.overlayText}>
        <h3>{item.name}</h3>
        <h6>{item.type}</h6>
        <p>{item.para}</p>
        <div className={styles.overlayanchor}>
          <Link onClick={twitterProfile}>
            <span className={styles.icon}>{item.twitter}</span>
          </Link>
          <Link onClick={linkdInProfile}>
            <span className={styles.icon}>{item.linkedin}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalMember;
