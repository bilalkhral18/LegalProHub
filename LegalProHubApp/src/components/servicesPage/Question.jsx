import styles from "./Questions.module.css";
const Question = ({ item }) => {
  return (
    <div className={styles.Question}>
      <h5>{item.question}</h5>
      <p>{item.answer}</p>
    </div>
  );
};
export default Question;
