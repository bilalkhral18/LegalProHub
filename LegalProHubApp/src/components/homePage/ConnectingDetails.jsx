import { useContext } from "react";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
import styles from "./ConnectingDetails.module.css";
import ConnectingDetail from "./ConnectingDetail";

const ConnectingDetails = () => {
  const { services } = useContext(HomeItemsStore);

  return (
    <div className={styles.ConnectDetailsContainer}>
      <div className={styles.connectheader}>
        <h6>Connecting you with expertise</h6>
        <h2>Innovative Legal Solutions</h2>
        <p className={styles.headerparagraph}>
          Explore our platform that bridges the gap between clients and legal
          professionals, ensuring seamless access to justice.
        </p>
      </div>
      <div className={styles.connectmain}>
        {services.map((serviceitem) => (
          <ConnectingDetail key={serviceitem.id} item={serviceitem} />
        ))}
      </div>
    </div>
  );
};

export default ConnectingDetails;
