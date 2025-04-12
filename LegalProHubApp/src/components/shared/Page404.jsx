import { Link } from "react-router-dom";
import styles from "./404.module.css";
const Page404 = () => {
  return (
    <div>
      <img
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "contain",
          objectPosition: "centre",
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
        src="/404.jpg"
        alt="404 error"
      />
      <Link to="/home">
        <button className={styles.customButton}>Go to Homepage</button>
      </Link>
    </div>
  );
};
export default Page404;
