import { createContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
export const ContactStore = createContext({
  FAQsanswers: [],
  SupportTeam: [],
});

const ContactItemsProvider = ({ children }) => {
  const [SupportTeam, setSupportTeam] = useState(default_team);
  const [FAQsanswers, setFAQsanswers] = useState([
    {
      id: 1,
      heading: "How do I contact a lawyer?",
      icon: <IoMdAdd />,
      para: "You can contact a lawyer by reaching out through our platform, where our team will connect you with the right legal expert.",
    },
    {
      id: 2,
      heading: "What services do you offfer?",
      icon: <IoMdAdd />,
      para: "We offer legal consultations, case evaluations, and expert guidance on various legal matters.",
    },
    {
      id: 3,
      heading: "How does the process work?",
      icon: <IoMdAdd />,
      para: "After reaching out, our team will assess needs and match you with the right legal experts",
    },
  ]);
  return (
    <ContactStore.Provider value={{ FAQsanswers, SupportTeam }}>
      {children}
    </ContactStore.Provider>
  );
};
export default ContactItemsProvider;
const default_team = [
  {
    id: 1,
    pic: "/2_contact_us.jpeg",
    name: "John Doe",
    type: "Client Support Specialist",
  },
  {
    id: 2,
    pic: "/3_contact_us.jpeg",
    name: "Jane Smith",
    type: "Legal Advisor",
  },
  {
    id: 3,
    pic: "/4_contact_us.jpeg",
    name: "Emily Chen",
    type: "Customer Service Manager",
  },
  {
    id: 4,
    pic: "/5_contact_us.jpeg",
    name: "Michael Brown",
    type: "Legal Consultant",
  },
];
