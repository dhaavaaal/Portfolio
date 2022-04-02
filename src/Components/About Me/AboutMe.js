import React from "react";
import "./AboutMe.css";
import userimage from "../../Images/user.jpeg";
import SocialMediaIcons from "../../Sidebar/SocialMediaIcons";

const AboutMe = () => {
  return (
    <div id="about" className="bg-dark aboutme-container">
      <div className="container">
        <div
          className="row align-items-flex-start animation aboutme-description"
          data-animation="fadeInUp"
          data-animation-delay="0.02s"
        >
          <div className="col-md-8">
            <div className="heading_s1 heading_light">
              <h2>About Me</h2>
            </div>
            <p className="text-white">
              Nam eget neque pellentesque efficitur neque at, ornare orci.
              Vestibulum ligula orci volutpat id aliquet eget, consectetur eget
              ante. Duis pharetra for nec rhoncus felis sagittis nec amet
              ultricies lorem.
            </p>
            <p className="text-white">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary.Iipsum dolor sit amet consectetur
              adipiscing elitllus blandit massa enim.
            </p>
          </div>
          <div className="col-md-4">
            <div className="text-md-right">
              <a href="#" className="btn btn-default btn-radius btn-aylen">
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="row skills-info-container">
          <div className="col-lg-4 col-md-12 ">
            <div
              className="about_img2 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.02s"
            >
              <img src={userimage} alt="About-img" className="about-image" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div
              className="about_info text_white animation"
              data-animation="fadeInUp"
              data-animation-delay="0.02s"
            >
              <div className="row">
                <div className="col-md-6 basic-info-container">
                  <div className="heading_s1 mb-4 basic-info-heading">
                    <h4>Basic Info</h4>
                  </div>
                  <ul className="profile_info_style2 list_none list-items">
                    <li>
                      <span className="basic-info">Date of birth:</span>
                      <p className="basic-info-description">20 August 1990</p>
                    </li>
                    <li>
                      <span className="basic-info">Phone No:</span>
                      <p className="basic-info-description">+ (123) 1512-578</p>
                    </li>
                    <li>
                      <span className="basic-info">Email:</span>
                      <a
                        href="mailto:info@sitename.com"
                        className="basic-info-description"
                      >
                        mymail@gmail.com
                      </a>
                    </li>
                    <li>
                      <span className="basic-info">Address:</span>
                      <p className="basic-info-description">
                        {" "}
                        123 Street, Old Trafford, London{" "}
                      </p>
                    </li>
                    <li>
                      <span className="basic-info">Freelance:</span>
                      <p className="basic-info-description">Available</p>
                    </li>
                    <SocialMediaIcons />
                  </ul>
                </div>
                <div className="col-md-6 basic-info-container">
                  <div className="heading_s1 mb-4 basic-info-heading">
                    <h4>My Skills</h4>
                  </div>
                  <div className="skills-items">
                    <div className="skills">
                      <div className="skills-title">
                        <p>UI/UX Design</p>
                        <p>60%</p>
                      </div>
                      <meter value={0.6}></meter>
                    </div>
                    <div className="skills">
                      <div className="skills-title">
                        <p>Development</p>
                        <p>80%</p>
                      </div>
                      <meter value={0.8}></meter>
                    </div>
                    <div className="skills">
                      <div className="skills-title">
                        <p>Photography</p>
                        <p>90%</p>
                      </div>
                      <meter value={0.9}></meter>
                    </div>
                    <div className="skills">
                      <div className="skills-title">
                        <p>Marketing</p>
                        <p>85%</p>
                      </div>
                      <meter value={0.85}></meter>
                    </div>
                    <div className="skills">
                      <div className="skills-title">
                        <p>Business Strategy</p>
                        <p>75%</p>
                      </div>
                      <meter value={0.75}></meter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
