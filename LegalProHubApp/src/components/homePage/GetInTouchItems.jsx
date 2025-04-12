import { useContext } from "react";
import styles from "./GetInTouch.module.css";
import GetInTouchItem from "./GetInTouchItem";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
const GetInTouchItems = () => {
  const { GetInTouch } = useContext(HomeItemsStore);
  return (
    <div className={styles.GetInTouch}>
      <div className={styles.headercontainer}>
        <h4>Get In Touch</h4>
        <p>
          Reach out to us for any inquiries or to connect with our legal
          professionals
        </p>
      </div>
      <div className={styles.componentscontainer}>
        {GetInTouch?.map((Getintouchitem) => (
          <GetInTouchItem item={Getintouchitem} key={Getintouchitem.id} />
        ))}
      </div>
      {/* <hr className={styles.Hrstyle} /> */}
    </div>
  );
};
export default GetInTouchItems;
