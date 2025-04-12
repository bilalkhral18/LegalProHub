import styles from "./Weoffer.module.css";
import { useContext } from "react";
import { ServiceItemsStore } from "../../contextStore/ServiceItemsStore";
import WeOfferService from "./WeOfferService";
const WeOfferServices = () => {
  const { OfferServices } = useContext(ServiceItemsStore);
  return (
    <div className={styles.WeOfferServices}>
      <div className={styles.ServicesContainer}>
        {OfferServices?.map((offeritem) => (
          <WeOfferService item={offeritem} key={offeritem.id} />
        ))}
      </div>
    </div>
  );
};
export default WeOfferServices;
