import styles from "./ConnectingDetails.module.css";

const ConnectingDetail = ({ item }) => {
  return (
    <div className={styles.maincomponents}>
      <div className={styles.headingcomponent}>
        <span className={styles.Icon}>{item.icon}</span>
        <h3>{item.name}</h3>
      </div>
      <p className={styles.mainparagraphs}>{item.para}</p>
    </div>
  );
};

export default ConnectingDetail;
