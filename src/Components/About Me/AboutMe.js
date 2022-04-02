import React from "react";

const AboutMe = () => {
  return (
    <div>
      <section id="about" class="bg_black4">
        <div class="container">
          <div
            class="row align-items-center animation"
            data-animation="fadeInUp"
            data-animation-delay="0.02s"
          >
            <div class="col-md-8">
              <div class="heading_s1 heading_light">
                <h2>About Me</h2>
              </div>
              <p class="text-white">
                Nam eget neque pellentesque efficitur neque at, ornare orci.
                Vestibulum ligula orci volutpat id aliquet eget, consectetur
                eget ante. Duis pharetra for nec rhoncus felis sagittis nec amet
                ultricies lorem.
              </p>
              <p class="text-white">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary.Iipsum dolor sit amet consectetur
                adipiscing elitllus blandit massa enim.
              </p>
            </div>
            <div class="col-md-4">
              <div class="text-md-right">
                <a href="#" class="btn btn-default btn-radius btn-aylen">
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="medium_divider clearfix"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <div
                class="about_img2 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <img src="assets/images/about_img2.jpg" alt="about_img" />
              </div>
            </div>
            <div class="col-lg-8 col-md-12">
              <div
                class="about_info text_white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="heading_s1 mb-4">
                      <h5>Basic Info</h5>
                    </div>
                    <ul class="profile_info_style2 list_none">
                      <li>
                        <span class="title">Date of birth:</span>
                        <p>20 August 1990</p>
                      </li>
                      <li>
                        <span class="title">Phone No:</span>
                        <p>+ (123) 1512-578</p>
                      </li>
                      <li>
                        <span class="title">Email:</span>
                        <a href="mailto:info@sitename.com">mymail@gmail.com</a>
                      </li>
                      <li>
                        <span class="title">Address:</span>
                        <p> 123 Street, Old Trafford, London </p>
                      </li>
                      <li>
                        <span class="title">Website:</span>
                        <p> www.mywebsite.com </p>
                      </li>
                      <li>
                        <span class="title">Freelance:</span>
                        <p>Available</p>
                      </li>
                    </ul>
                    <ul class="list_none social_icons rounded_social mt-3">
                      <li>
                        <a href="#" class="sc_facebook">
                          <i class="ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="sc_twitter">
                          <i class="ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="sc_google">
                          <i class="ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="sc_youtube">
                          <i class="ion-social-youtube-outline"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="sc_instagram">
                          <i class="ion-social-instagram-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <div class="heading_s1 mb-4">
                      <h5>My Skills</h5>
                    </div>
                    <div class="skills">
                      <div class="skill_content pr_style1">
                        <div class="progrees_bar_text">
                          <b>UX/UI Design</b>
                        </div>
                        <div class="progress">
                          <div class="count_pr">
                            <span class="counter">80</span>%
                          </div>
                          <div
                            class="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="skill_content pr_style1">
                        <div class="progrees_bar_text">
                          <b>Development</b>
                        </div>
                        <div class="progress">
                          <div class="count_pr">
                            <span class="counter">90</span>%
                          </div>
                          <div
                            class="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="skill_content pr_style1">
                        <div class="progrees_bar_text">
                          <b>Photography</b>
                        </div>
                        <div class="progress pr_style1">
                          <div class="count_pr">
                            <span class="counter">70</span>%
                          </div>
                          <div
                            class="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="skill_content pr_style1">
                        <div class="progrees_bar_text">
                          <b>Marketing</b>
                        </div>
                        <div class="progress">
                          <div class="count_pr">
                            <span class="counter">75</span>%
                          </div>
                          <div
                            class="progress-bar d-block"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div class="skill_content pr_style1">
                        <div class="progrees_bar_text">
                          <b>Bussiness Strategy</b>
                        </div>
                        <div class="progress">
                          <div class="count_pr">
                            <span class="counter">80</span>%
                          </div>
                          <div
                            class="progress-bar d-block"
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
