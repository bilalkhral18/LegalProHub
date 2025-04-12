import styles from "./Subscribe.module.css";
import { TbDirectionSignFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { loginsignupactions } from "../../Store/loginsignupSlice";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const dispatch = useDispatch();
  const Movetosignup = () => {
    dispatch(loginsignupactions.showsignupform());
  };

  return (
    <div className={styles.Subscribe}>
      <div className={styles.content}>
        <p>
          Subcribe to our newsletter for the latest updates and tips on
          navigating the legal landscape
        </p>
        <div className={styles.btnscontainer}>
          <div className={styles.btnstyling} onClick={Movetosignup}>
            Subscribe Now
          </div>
          <div className={styles.btnstyling}>
            <Link to="/services">
              Learn More <TbDirectionSignFilled />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
