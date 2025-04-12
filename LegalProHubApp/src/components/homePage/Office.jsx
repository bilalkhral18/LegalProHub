import styles from "./Office.module.css";
import { getlocations } from "../../store/CommonFunctions";
import { useDispatch } from "react-redux";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import loginToken from "../authComponents/LoginToken";
const Office = ({ item }) => {
  const dispatch = useDispatch();
  const handleLocationClick = (location) => {
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      dispatch(getlocations(location));
    }
  };
  return (
    <>
      <div className={styles.Office}>
        <h5>{item.heading}</h5>
        <p onClick={() => handleLocationClick(item.location)}>
          {item.location}
        </p>
      </div>
    </>
  );
};
export default Office;
