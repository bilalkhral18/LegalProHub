import styles from "./SupportTeam.module.css";
import { ContactStore } from "../../contextStore/ContactItemsStore";
import { useContext } from "react";

const SupportTeam = () => {
  const { SupportTeam } = useContext(ContactStore);

  return (
    <div className={styles.Supportteam}>
      <div className={styles.headingcontainer}>
        <h2>Meet Our Support Team Experts</h2>
        <p>
          Our dedicated team is here to ensure you get the legal help you need,
          when you need it.
        </p>
      </div>
      <div className={styles.memberscontainer}>
        {SupportTeam?.map((item, index) => {
          return (
            <div
              style={{ backgroundImage: `url(${item.pic})` }}
              className={styles.members}
              key={index}
            >
              <div className={styles.overlayText}>
                <h3>{item.name}</h3>
                <h6>{item.type}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SupportTeam;
