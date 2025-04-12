import ServiceItemsProvider from "../contextStore/ServiceItemsStore";
import ServicesPortfolio from "../components/servicesPage/ServicesPortfolio";
import WeOfferServices from "../components/servicesPage/WeOfferServices";
import Questions from "../components/servicesPage/Questions";
import VisitItems from "../Components/ServicesPage/Visititems";
import HeroSection from "../components/common/HeroSection";
const Services = () => {
  return (
    <>
      <HeroSection />
      <ServiceItemsProvider>
        <ServicesPortfolio />
        <WeOfferServices />
        <Questions />
        <VisitItems />
      </ServiceItemsProvider>
    </>
  );
};
export default Services;
