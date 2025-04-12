const ServicesHeroSection = () => {
  return (
    <div
      className="Herocontainer ServicesHerosection"
      style={{ backgroundImage: 'url("/ServiceHeroSectionPic.jpg")' }}
    >
      <div className="Herocontent" style={{ zIndex: 2, color: "white" }}>
        <h1>Explore Our Legal Expertise</h1>
        <p>
          {" "}
          Discover a wide range of legal services tailored to meet your specific
          needs, connecting you with the top legal professionals for effective
          solutions.
        </p>
      </div>
    </div>
  );
};
export default ServicesHeroSection;
