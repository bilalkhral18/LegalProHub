import styles from "./ServicePortfolio.module.css";
import { useContext } from "react";
import ServicePortfolio from "./ServicePortfolio";
import { ServiceItemsStore } from "../../contextStore/ServiceItemsStore";
const ServicesPortfolio = () => {
  const { PortfolioItems } = useContext(ServiceItemsStore);
  return (
    <>
      <div className={styles.headingcontainer}>
        <h4 id={styles.Hfoursetting}>Our Legal Services Portfolio</h4>
        <p>
          Visual insights into the diverse legal services we offer, showcasing
          our commitment to excellence and client satisfaction
        </p>
      </div>
      <div className={styles.ServicesContainer}>
        {PortfolioItems?.map((portfolioitem) => (
          <ServicePortfolio item={portfolioitem} key={portfolioitem.id} />
        ))}
      </div>
    </>
  );
};
export default ServicesPortfolio;
