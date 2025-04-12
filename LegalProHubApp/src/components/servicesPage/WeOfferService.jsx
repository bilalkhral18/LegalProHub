import styles from "./Weoffer.module.css";
const WeOfferService = ({ item }) => {
  return (
    <div className={styles.headingcomponent}>
      <span>{item.icon}</span>
      <h3>{item.heading}</h3>
      <p>{item.para}</p>
    </div>
  );
};
export default WeOfferService;
