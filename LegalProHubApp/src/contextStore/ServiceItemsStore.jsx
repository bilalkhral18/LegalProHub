import { createContext, useState } from "react";
import { ImHammer2 } from "react-icons/im";
import { GoLaw } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export const ServiceItemsStore = createContext({
  PortfolioItems: [],
  OfferServices: [],
  Questions: [],
  visitOffices: [],
});

const ServiceItemsProvider = ({ children }) => {
  const [PortfolioItems, setPortfolioItems] = useState(Default_Portfolioitems);
  const [Questions, setQuestions] = useState(questions);
  const [OfferServices, setOfferServices] = useState([
    {
      id: 1,
      icon: <ImHammer2 />,
      heading: "Expert Legal Advice",
      para: "Our team provides insightful legal advice tailored to your needs.",
    },
    {
      id: 2,
      icon: <GoLaw />,
      heading: "Comprehensive Services",
      para: "We offer a full spectrum of legal services to cover all your requirements.",
    },
    {
      id: 3,
      icon: <FaHandshake />,
      heading: "Client-Centric Approach",
      para: "Focus on building strong, lasting client relationships.",
    },
    {
      id: 4,
      icon: <MdOutlineSecurity />,
      heading: "Secure and Confidential",
      para: "We prioritize the security and confidentiality of your information.",
    },
  ]);
  const [visitOffices, setvisitOffices] = useState([
    {
      id: 1,
      heading: "LegalProHub New York Office",
      para: "Connect with our legal experts in New York for personalized assistance.",
      location: "123 Legal St, New York, NY 10001",
      Email: " nyoffice@legalprohub.com",
      icon1: <FaLocationDot />,
      icon2: <MdEmail />,
    },
    {
      id: 2,
      heading: "LegalProHub Los Angeles Office",
      para: "Reach out to our team in Los Angeles for comprehensive legal services.",
      location: "456 Justice Ave, Los Angeles, CA 90001",
      Email: " laoffice@legalprohub.com",
      icon1: <FaLocationDot />,
      icon2: <MdEmail />,
    },
  ]);

  return (
    <ServiceItemsStore.Provider
      value={{ PortfolioItems, OfferServices, Questions, visitOffices }}
    >
      {children}
    </ServiceItemsStore.Provider>
  );
};
export default ServiceItemsProvider;

const questions = [
  {
    id: 1,
    question: "What type of legal services do you offer?",
    answer:
      "We offer a wide range of services including consultation, representation, and legal advice across various domains.",
  },
  {
    id: 2,
    question: "What payments options are available?",
    answer:
      "We accept various payments methods including credit cards, bank transfers, and online payments.",
  },
  {
    id: 3,
    question: "How do I get started with lagalProHub?",
    answer:
      "Simply contact us through our website or call us to schedule an initial consultation.",
  },
  {
    id: 4,
    question: "Are your services available nationwide?",
    answer:
      "Yes, we provide services across the country, connecting you with local legal experts.",
  },
];
const Default_Portfolioitems = [
  {
    id: 1,
    pic: "/1_service.jpeg",
    heading: "Consultation Services",
  },
  {
    id: 2,
    pic: "/2_service.jpeg",
    heading: "Court Representation",
  },
  {
    id: 3,
    pic: "/3_service.jpeg",
    heading: "Contract Negotiation",
  },
  {
    id: 4,
    pic: "/4_service.jpeg",
    heading: "Legal Advice",
  },
  {
    id: 5,
    pic: "/5_service.jpeg",
    heading: "Dispute Resolution",
  },
];
