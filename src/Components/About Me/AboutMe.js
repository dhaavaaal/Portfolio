import React from "react";

const AboutMe = () => {
  return (
    <div>
      <section id="about" className="bg_black4">
        <div className="container">
          <div
            className="row align-items-center animation"
            data-animation="fadeInUp"
            data-animation-delay="0.02s"
          >
            <div classNameName="col-md-8">
              <div className="heading_s1 heading_light">
                <h2>About Me</h2>
              </div>
              <p className="text-white">
                Nam eget neque pellentesque efficitur neque at, ornare orci.
                Vestibulum ligula orci volutpat id aliquet eget, consectetur
                eget ante. Duis pharetra for nec rhoncus felis sagittis nec amet
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
          <div className="row">
            <div className="col-12">
              <div className="medium_divider clearfix"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="about_img2 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <img src="assets/images/about_img2.jpg" alt="about_img" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div
                className="about_info text_white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="heading_s1 mb-4">
                      <h5>Basic Info</h5>
                    </div>
                    <ul className="profile_info_style2 list_none">
                      <li>
                        <span className="title">Date of birth:</span>
                        <p>20 August 1990</p>
                      </li>
                      <li>
                        <span className="title">Phone No:</span>
                        <p>+ (123) 1512-578</p>
                      </li>
                      <li>
                        <span className="title">Email:</span>
                        <a href="mailto:info@sitename.com">mymail@gmail.com</a>
                      </li>
                      <li>
                        <span className="title">Address:</span>
                        <p> 123 Street, Old Trafford, London </p>
                      </li>
                      <li>
                        <span className="title">Website:</span>
                        <p> www.mywebsite.com </p>
                      </li>
                      <li>
                        <span className="title">Freelance:</span>
                        <p>Available</p>
                      </li>
                    </ul>
                    <ul className="list_none social_icons rounded_social mt-3">
                      <li>
                        <a href="#" className="sc_facebook">
                          <i className="ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sc_twitter">
                          <i className="ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sc_google">
                          <i className="ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sc_youtube">
                          <i className="ion-social-youtube-outline"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sc_instagram">
                          <i className="ion-social-instagram-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="heading_s1 mb-4">
                      <h5>My Skills</h5>
                    </div>
                    <div className="skills">
                      <div className="skill_content pr_style1">
                        <div className="progrees_bar_text">
                          <b>UX/UI Design</b>
                        </div>
                        <div className="progress">
                          <div className="count_pr">
                            <span className="counter">80</span>%
                          </div>
                          <div
                            className="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="skill_content pr_style1">
                        <div className="progrees_bar_text">
                          <b>Development</b>
                        </div>
                        <div className="progress">
                          <div className="count_pr">
                            <span className="counter">90</span>%
                          </div>
                          <div
                            className="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="skill_content pr_style1">
                        <div className="progrees_bar_text">
                          <b>Photography</b>
                        </div>
                        <div className="progress pr_style1">
                          <div className="count_pr">
                            <span className="counter">70</span>%
                          </div>
                          <div
                            className="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="skill_content pr_style1">
                        <div className="progrees_bar_text">
                          <b>Marketing</b>
                        </div>
                        <div className="progress">
                          <div className="count_pr">
                            <span className="counter">75</span>%
                          </div>
                          <div
                            className="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="skill_content pr_style1">
                        <div className="progrees_bar_text">
                          <b>Bussiness Strategy</b>
                        </div>
                        <div className="progress">
                          <div className="count_pr">
                            <span className="counter">80</span>%
                          </div>
                          <div
                            className="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default AboutMe;
