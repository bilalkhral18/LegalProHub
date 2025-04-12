import styles from "./WorkingHours.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getlocations } from "../../store/Commonfunctions";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import loginToken from "../authComponents/LoginToken";
const WorkingHours = () => {
  const dispatch = useDispatch();
  const handleLocationClick = () => {
    const location = "123 Justice ave, Suite 456, New York, NY 10001, USA";
    if (!loginToken) {
      dispatch(loginsignupactions.showloginform());
    } else {
      dispatch(getlocations(location));
    }
  };
  return (
    <div className={styles.workinghours}>
      <div className={styles.timecontact}>
        <div className={styles.individualtimecontact}>
          <h4>USA OFFICE HOURS</h4>
          <p>Monday-Friday 9:00 am to 6:00 pm</p>
        </div>
        <div className={styles.individualtimecontact}>
          <h4>CANADA OFFICE</h4>
          <p>Monday-Friday 9:00 am to 5:00 pm</p>
        </div>
        <div className={styles.individualtimecontact}>
          <h4>OUR HEADQUARTERS</h4>
          <p>123 Justice ave, Suite 456, New York, NY 10001, USA</p>
        </div>
        <div className={styles.individualtimecontact}>
          <h4>REACH US AT</h4>
          <p>
            +1-800-555-0199 <br /> +1-800-555-0120
          </p>
        </div>
      </div>
      <div className={styles.visitedetails}>
        <div className={styles.visittextcontent}>
          <h3>Visit Our Office</h3>
          <p>
            Find us in the heart of the city, where we connect clients with the
            best legal minds.
          </p>
          <address
            className={styles.address}
            onClick={() => handleLocationClick()}
          >
            <FaLocationDot className={styles.icon} />
            LegalProHub HQ
          </address>
        </div>
        <span>
          <iframe
            className={styles.mapsetting}
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3451.0190717294154!2d-73.87783463011723!3d40.73683202163447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Justice%20ave%2C%20Suite%20456%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1739195518560!5m2!1sen!2s"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </span>
      </div>
    </div>
  );
};
export default WorkingHours;
