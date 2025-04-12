import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
  const facebook_Profile = () => {
    const facebook_URL =
      "https://www.facebook.com/100014366563039/posts/1949781238844076/?substory_index=1506469503394797&app=fbl ";
    window.open(facebook_URL, "_blank");
  };
  const instagram_Profile = () => {
    const instagram_URL =
      "https://www.instagram.com/nomi00007?igsh=N3BmeWp2dDFnbzR6 ";
    window.open(instagram_URL, "_blank");
  };
  const linkdIn_Profile = () => {
    const linkdIn_URL = "https://www.linkedin.com/in/muhammad-bilal-0398a2328/";
    window.open(linkdIn_URL, "_blank");
  };
  const twitter_Profile = () => {
    const twitter_URL = "https://github.com/RaiBilal18";
    window.open(twitter_URL, "_blank");
  };
  return (
    <footer className={`${styles["Footer"]}`}>
      <div className={`${styles["Footerlinks"]}`}>
        <Link to="/home" className={styles.Footerlinksanchors}>
          About LegalProHub
        </Link>
        <Link to="/services" className={styles.Footerlinksanchors}>
          Our Services
        </Link>
        <Link to="/contact" className={styles.Footerlinksanchors}>
          Contact Us
        </Link>
        {/* <Link to="#" className={styles.Footerlinksanchors}>
          Client Testimonials
        </Link> */}
      </div>
      <hr className={`${styles["createline"]}`} />
      <div className={`${styles["contactlinks"]}`}>
        <div className={`${styles["contactanchors"]}`}>
          <Link onClick={twitter_Profile}>
            <FaTwitter />
          </Link>
          <Link onClick={facebook_Profile}>
            <FaFacebook />
          </Link>
          <Link onClick={instagram_Profile}>
            <FaInstagram />
          </Link>
          <Link onClick={linkdIn_Profile}>
            <CiLinkedin />
          </Link>
        </div>
        <p> &copy; LegalProHub 2025, Facilitating Your Legal Connections </p>
      </div>
    </footer>
  );
};
export default Footer;
