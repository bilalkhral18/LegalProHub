import { useDispatch } from "react-redux";
import styles from "./GetInTouch.module.css";
import { getofficialemail } from "../../Store/Commonfunctions";
import loginToken from "../authComponents/LoginToken";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
const GetInTouchItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleEmailClick = (e, itememail) => {
    e.preventDefault();
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      dispatch(getofficialemail(itememail));
    }
  };
  const handlePhoneClick = () => {
    window.location.href = `tel:${item.number}`;
  };
  return (
    <>
      <div className={styles.components}>
        <h5>{item.heading}</h5>
        <a href="#" onClick={(e) => handleEmailClick(e, item.email)}>
          {item.email}
        </a>
        <p onClick={handlePhoneClick}>{item.number}</p>
      </div>
    </>
  );
};
export default GetInTouchItem;
