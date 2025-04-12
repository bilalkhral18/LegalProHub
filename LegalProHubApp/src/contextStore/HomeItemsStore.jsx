import { createContext, useState } from "react";
import { GiThorHammer } from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaHandshake, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TbAutomation } from "react-icons/tb";

export const HomeItemsStore = createContext({
  services: [],
  legalTeam: [],
  ceosDetails: [],
  GetInTouch: [],
  Officelocation: [],
});

const HomeItemsProvider = ({ children }) => {
  // Initial states for the data
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Qualified Professionals",
      icon: <GiThorHammer />,
      para: "Access a network of vetted legal experts ready to assist you.",
    },
    {
      id: 2,
      name: "Efficient Service",
      icon: <MdAccessTimeFilled />,
      para: "Experience streamlined processes for effective legal solutions.",
    },
    {
      id: 3,
      name: "Comprehensive Support",
      icon: <FaHandshake />,
      para: "From consultations to case management, we cover all your legal needs.",
    },
    {
      id: 4,
      name: "Document Automation",
      icon: <TbAutomation />,
      para: "Easily generate and customize legal documents with our automated solutions.",
    },
  ]);

  const [legalTeam, setLegalTeam] = useState([
    {
      id: 1,
      name: "Cymone Magdalina",
      type: "Legal Advisor",
      para: "Easily generate and customize legal documents with our automated solutions.",
      pic: "/legalprofessional1.jpeg",
      twitter: <FaTwitter />,
      linkedin: <FaLinkedinIn />,
    },
    {
      id: 2,
      name: "Hyeon Vivek",
      type: "Criminal Defense Lawyer",
      para: "Dedicated to defending client rights with expertise and integrity.",
      pic: "/legalprofessional2.jpeg",
      twitter: <FaTwitter />,
      linkedin: <FaLinkedinIn />,
    },
    {
      id: 3,
      name: "Sophia Ella",
      type: "Family law Specialist",
      para: "Committed to providing compassionate and effective family law service.",
      pic: "/legalprofessional3.jpeg",
      twitter: <FaTwitter />,
      linkedin: <FaLinkedinIn />,
    },
  ]);

  const [ceosDetails, setCeosDetails] = useState([
    {
      id: 1,
      para1:
        "LegalProHub transformed our legal processes, making it easier to access the expertise we need.",
      para2: "CEO of Tuple",
      name: "Judith Black",
      pic: "/ceotuple.jpeg",
    },
    {
      id: 2,
      para1:
        "An indispensable tool for finding the right legal professionals quick and efficient.",
      para2: "CEO of Reform",
      name: "Joseph Redriguez",
      pic: "/ceoreform.jpeg",
    },
  ]);
  const [GetInTouch, setGetInTouch] = useState([
    {
      id: 1,
      heading: "Client Support",
      email: "support@legalprohub.com",
      number: "+1 (555) 123-4567",
    },
    {
      id: 2,
      heading: "Legal Consultation",
      email: "consult@legalprohub.com",
      number: "+1 (555) 234-5678",
    },
    {
      id: 3,
      heading: "Media Inquiries",
      email: "media@legalprohub.com",
      number: "+1 (555) 345-6789",
    },
  ]);
  const [Officelocation, setOfficelocation] = useState([
    {
      id: 1,
      heading: "New York",
      location: "456 Justice Ave, Los Angeles, CA 90001",
    },
    {
      id: 2,
      heading: "Los Angeles",
      location: "123 Legal Street, New York, NY 1000",
    },
    {
      id: 3,
      heading: "Chicago",
      location: "789 Law Blvd, Chicago, IL 60601",
    },
  ]);

  return (
    <HomeItemsStore.Provider
      value={{ services, legalTeam, ceosDetails, GetInTouch, Officelocation }}
    >
      {children}
    </HomeItemsStore.Provider>
  );
};

export default HomeItemsProvider;
