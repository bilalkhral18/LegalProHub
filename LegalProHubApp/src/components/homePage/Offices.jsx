import { useContext } from "react";
import styles from "./Office.module.css";
import Office from "./Office";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
const Offices = () => {
  const { Officelocation } = useContext(HomeItemsStore);
  return (
    <div className={styles.Offices}>
      <div className={styles.headercontainer}>
        <h4>Our Offices</h4>
        <p>Visit us at any of our locations across the United State.</p>
      </div>
      <div className={styles.OfficesContainer}>
        {Officelocation?.map((Officeitem) => (
          <Office item={Officeitem} key={Officeitem.id} />
        ))}
      </div>
    </div>
  );
};
export default Offices;
