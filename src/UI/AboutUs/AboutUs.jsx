import React from 'react';
import "../../CSS/About/aboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <section className="aboutUsSection">
      <div className="contentContainer">
        <h1 className="titulo">About US</h1>
        <p className="paragrafo">
          At Local Face, we believe that perfumes are more than just scents;
          they are expressions of one's individuality and style.
          Our passion for exquisite fragrances led us to curate a collection
          that captures the essence of diverse personalities, bringing you
          an unparalleled olfactory experience.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;