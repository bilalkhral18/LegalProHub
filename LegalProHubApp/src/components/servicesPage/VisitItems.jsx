import styles from "./Visititem.module.css";
import { useContext } from "react";
import { ServiceItemsStore } from "../../contextStore/ServiceItemsStore";
import { getofficialemail } from "../../store/CommonFunctions";
import { getlocations } from "../../store/CommonFunctions";
import { useDispatch } from "react-redux";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import loginToken from "../authComponents/LoginToken";
const VisitItems = () => {
  const { visitOffices } = useContext(ServiceItemsStore);
  const dispatch = useDispatch();
  const handleEmailClick = (e, itememail) => {
    e.preventDefault();
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      dispatch(getofficialemail(itememail));
    }
  };
  const handleLocationClick = (e, location) => {
    e.preventDefault();
    console.log("location cliceed");
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      dispatch(getlocations(location));
    }
  };
  return (
    <div className={styles.VisitItems}>
      {visitOffices?.map((officeitem) => {
        return (
          <div className={styles.Officedetails} key={officeitem.id}>
            <h3>{officeitem.heading}</h3>
            <p>{officeitem.para}</p>
            <label
              htmlFor="address"
              className={styles.addressEmail}
              onClick={(e) => handleLocationClick(e, officeitem.location)}
            >
              <span id="address" className={styles.iconSetting}>
                {officeitem.icon1}
              </span>
              <address id="address" className={styles.setup}>
                {officeitem.location}
              </address>
            </label>
            <label
              htmlFor="Email"
              className={styles.addressEmail}
              onClick={(e) => handleEmailClick(e, officeitem.Email)}
            >
              <span id="Email" className={styles.iconSetting}>
                {officeitem.icon2}
              </span>
              <address id="Email" className={styles.setup}>
                {officeitem.Email}
              </address>
            </label>
          </div>
        );
      })}
    </div>
  );
};
export default VisitItems;
