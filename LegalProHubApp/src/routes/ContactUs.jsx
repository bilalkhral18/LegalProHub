import Contact from "../components/contactUsPage/Contact";
import WorkingHours from "../components/contactUsPage/WorkingHours";
import ContactItemsProvider from "../contextStore/ContactItemsStore";
import FAQs from "../components/contactUsPage/FAQs";
import SupportTeam from "../components/contactUsPage/SupportTeam";
import Subscribe from "../components/contactUsPage/Subscribe";
import ScrollToTop from "../components/shared/ScrollToTop";
import HeroSection from "../components/common/HeroSection";
const ContactUs = () => {
  return (
    <>
      <HeroSection />
      <Contact />
      <WorkingHours />
      <ContactItemsProvider>
        <FAQs />
        <SupportTeam />
      </ContactItemsProvider>
      <Subscribe />
    </>
  );
};
export default ContactUs;
