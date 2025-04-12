const ContactHeroSection = () => {
  return (
    <div
      className="Herocontainer ServicesHerosection"
      style={{ backgroundImage: `url('./ContactHeroSectionPic.jpg')` }}
    >
      <div className="Herocontent" style={{ zIndex: 2, color: "white" }}>
        <h1>Connect With Legal Professionals</h1>
        <p>
          {" "}
          Reach out to our team to get the legal assistance you need with ease
          and efficiency.
        </p>
      </div>
    </div>
  );
};
export default ContactHeroSection;
