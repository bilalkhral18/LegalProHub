import { useState, useEffect } from "react";
import Homeimg from "../../../public/HomeHeroSectionPic.webp";
import Servicesimg from "../../../public/ServiceHeroSectionPic.jpg";
import Contactimg from "../../../public/ContactHeroSectionPic.jpg";

const heroSectionData = [
  {
    img: Homeimg,
    tittle: "Welcome to LegalProHub",
    paragraph:
      "Discover a new era of legal services with our platform. Connect effortlessly with qualified professionals to meet your legal needs efficiently.",
  },
  {
    img: Servicesimg,
    tittle: "Explore Our Legal Expertise",
    paragraph:
      "Discover a wide range of legal services tailored to meet your specific needs, connecting you with the top legal professionals for effective solutions.",
  },
  {
    img: Contactimg,
    tittle: "Connect With Legal Professionals",
    paragraph:
      "Reach out to our team to get the legal assistance you need with ease and efficiency.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % heroSectionData.length
        );
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="Herocontainer ServicesHerosection"
      style={{
        backgroundImage: `url(${heroSectionData[currentIndex].img})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div
        className="Herocontent"
        style={{
          zIndex: 2,
          color: "white",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          textAlign: "center",
        }}
      >
        <h1>{heroSectionData[currentIndex].tittle}</h1>
        <p>{heroSectionData[currentIndex].paragraph}</p>
      </div>
    </div>
  );
};

export default HeroSection;
