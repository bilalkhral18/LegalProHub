import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.textcontent}>
          <h3>Contact LegalProHub</h3>
          <p>
            Our team is ready to connect you with qualified legal professionals
            to address your legal needs effectively.
          </p>
        </div>
        <div className={styles.imgcontent}></div>
      </div>
    </div>
  );
};
export default Contact;
