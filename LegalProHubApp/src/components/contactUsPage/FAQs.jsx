import styles from "./FAQs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FAQsactions } from "../../Store/FAQsSlice";
import { useContext } from "react";
import { ContactStore } from "../../contextStore/ContactItemsStore";
const FAQs = () => {
  const { FAQsanswers } = useContext(ContactStore);
  const condition = useSelector((store) => store.FAQs.condition);
  const dispatch = useDispatch();
  const handleaddicon = (index) => {
    dispatch(FAQsactions.showAnswer(index.toString()));
    console.log(index);
  };
  return (
    <div className={styles.FAQs}>
      <div className={styles.Questions}>
        <h4>LegalProHub FAQs</h4>
        {FAQsanswers?.map((FAQsanswer, index) => {
          return (
            <div className={styles.Question} key={FAQsanswer.id}>
              <hr className={styles.FAQhr} />
              <h5>
                {FAQsanswer.heading}
                <span
                  onClick={() => handleaddicon(index)}
                  className={styles.iconsetting}
                >
                  {FAQsanswer.icon}
                </span>
              </h5>
              {condition[index] && <p>{FAQsanswer.para}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FAQs;
