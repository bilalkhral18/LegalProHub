import styles from "./Legalteam.module.css";
import { HomeItemsStore } from "../../contextStore/HomeItemsStore";
import { useContext } from "react";
import LegalMember from "./LegalMember";

const LegalTeam = () => {
  const { legalTeam } = useContext(HomeItemsStore);

  return (
    <div className={styles.legalteamcontainer}>
      <div className={styles.headingcontainer}>
        <h2>Meet Our Legal Experts</h2>
        <p>
          Our team of dedicated professionals is here to provide you with the
          best legal advice and service.
        </p>
      </div>
      <div className={styles.memberscontainer}>
        {legalTeam.map((teamitem) => (
          <LegalMember key={teamitem.id} item={teamitem} />
        ))}
      </div>
    </div>
  );
};

export default LegalTeam;
