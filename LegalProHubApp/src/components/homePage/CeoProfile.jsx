import styles from "./Ceos.module.css";
const CeoProfile = ({ item }) => {
  return (
    <div className={`${styles["ceo"]}`}>
      <p>{item.para1}</p>
      <div className={`${styles["imgandtext"]}`}>
        <img src={`${item.pic}`} alt="error" />
        <div className={`${styles["textcontent"]}`}>
          <h4>{item.name}</h4>
          <p>{item.para2}</p>
        </div>
      </div>
    </div>
  );
};
export default CeoProfile;
