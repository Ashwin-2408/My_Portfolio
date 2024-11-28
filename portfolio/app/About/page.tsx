"use client";
import Header from "../Components/Header";
import Education_Timeline from "../Components/Education_Timeline";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      {/* Pass fixed={false} to Header component */}
      <Header fixed={false} />

      <Education_Timeline></Education_Timeline>

      <Footer></Footer>
    </div>
  );
};

export default About;
