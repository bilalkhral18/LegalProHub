import HomeHeroSection from "../components/homePage/HomeHeroSection";
import ConnectingDetails from "../components/homePage/ConnectingDetails";
import HomeItemsProvider from "../contextStore/HomeItemsStore";
import CeosProfile from "../components/homePage/CeosProfile";
import GetInTouchItems from "../components/homePage/GetInTouchItems";
import Offices from "../components/homePage/Offices";
import LegalTeam from "../components/homePage/LegalTeam";
import HeroSection from "../components/common/HeroSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeItemsProvider>
        <ConnectingDetails />
        <LegalTeam />
        <CeosProfile />
        <GetInTouchItems></GetInTouchItems>
        <hr className="Hrstyle" />
        <Offices></Offices>
      </HomeItemsProvider>
    </>
  );
};
export default Home;
