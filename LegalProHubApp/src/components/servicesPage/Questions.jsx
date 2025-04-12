import styles from "./Questions.module.css";
import { useContext } from "react";
import { ServiceItemsStore } from "../../contextStore/ServiceItemsStore";
import Question from "./Question";
const Questions = () => {
  const { Questions } = useContext(ServiceItemsStore);
  return (
    <div className={styles.Questions}>
      <h3>Frequently Asked Questions</h3>
      <div className={styles.Containquestions}>
        {Questions?.map((questionitem) => (
          <Question item={questionitem} key={questionitem.id} />
        ))}
      </div>
    </div>
  );
};
export default Questions;
