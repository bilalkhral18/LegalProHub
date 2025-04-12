import styles from "./Ceos.module.css";
import { useDispatch } from "react-redux";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import { useContext } from "react";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
import { Link } from "react-router-dom";
import CeoProfile from "./CeoProfile";
const CeosProfile = () => {
  const { ceosDetails } = useContext(HomeItemsStore);
  const dispatch = useDispatch();
  const Movetosignup = () => {
    dispatch(loginsignupactions.showsignupform());
  };
  return (
    <>
      <div className={`${styles["Ceoscontainer"]}`}>
        {ceosDetails?.map((ceoitem, index) => {
          return (
            <>
              <CeoProfile item={ceoitem}></CeoProfile>
              {index === 0 && <hr />}
            </>
          );
        })}
      </div>
      <div className={`${styles["connect"]}`}>
        <div className={`${styles["connectheader"]}`}>
          <h3>Connect With Legal Experts Today</h3>
          <p>Join LegalProHub and steamline your legal journey</p>
        </div>
        <div className={`${styles["buttons"]}`}>
          <button onClick={Movetosignup}>Get Started</button>
          <button>
            <Link to="/services">Learn More</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default CeosProfile;
