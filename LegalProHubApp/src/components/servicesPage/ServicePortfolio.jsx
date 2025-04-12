import styles from "./ServicePortfolio.module.css";
const ServicePortfolio = ({ item }) => {
  return (
    <>
      <div className={styles.Service}>
        <img src={`${item.pic}`} alt="error" />
        <h6>{item.heading}</h6>
      </div>
    </>
  );
};
export default ServicePortfolio;
