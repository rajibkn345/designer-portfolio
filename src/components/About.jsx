import React from "react";
import { Image } from "react-bootstrap";
import aboutImage from "../assets/about-img.jpg";

const AboutPage = () => {
  return (
    <div className="d-flex about bg-white p-5 justify-content-center align-items-center">
      <div className="rounded about-left">
        <Image roundedCircle width={300} src={aboutImage} alt="About" />
      </div>
      <div className="px-2 mx-3 about-right">
        <h2 className="text-center">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          euismod mauris nec dolor placerat ultrices. Sed faucibus, nulla quis
          hendrerit rhoncus, nisi eros aliquam sapien, a bibendum magna purus
          sed odio. Aenean eget nibh in eros tristique feugiat. Ut pellentesque,
          libero eu pharetra lobortis, magna mi ultricies lectus, sed pulvinar
          ipsum neque vel tortor.
        </p>
        <p>
          Integer quis diam diam. Suspendisse consectetur velit vitae magna
          lacinia, vel varius eros bibendum. Ut dapibus turpis quis est laoreet,
          sed tincidunt augue luctus. Etiam quis arcu a ante molestie ultricies.
          Etiam volutpat arcu vel leo euismod hendrerit. Etiam ut nulla sit amet
          dolor elementum hendrerit. Vivamus vulputate, odio et hendrerit
          euismod, ex elit blandit elit, vel bibendum sapien lorem at magna.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
