import React from "react";
import { Image } from "react-bootstrap";
import aboutImage from "../assets/about-img.png";

const AboutPage = () => {
  return (
    <div className="d-flex about bg-white p-5 justify-content-center align-items-center">
      <div className="rounded about-left">
        <Image roundedCircle width={300} src={aboutImage} alt="About" />
      </div>
      <div className="px-2 mx-3 about-right">
        <h2 className="text-center">About Me</h2>
        <p>
          I am a graphic designer doing work globally. Most of my work has been
          with artists in the music industry, from album covers to event fliers.
          My skills are able to be applied in a variety of situations.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
