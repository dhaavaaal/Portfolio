import React from "react";

const Projects = () => {
  return (
    <div>
      <section id="portfolio" className="pb_70 bg_black4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 text-center">
              <div
                className="heading_s1 heading_light animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <h2>My Portfolio PROJECTS</h2>
              </div>
              <p
                className="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="0.03s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="cleafix small_divider"></div>
            </div>
          </div>
          <div className="row mb-4 mb-md-5">
            <div className="col-md-12 text-center">
              <ul
                className="list_none grid_filter filter_tab1 filter_white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.04s"
              >
                <li>
                  <a href="#" className="current" data-filter="*">
                    all
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".brands">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".web-design">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".development">
                    Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul
                className="grid_container gutter_medium work_col3 portfolio_gallery portfolio_style1 animation masonry"
                data-animation="fadeInUp"
                data-animation-delay="0.04s"
              >
                <li className="grid-sizer"></li>
                <li className="grid_item web-design">
                  <div className="portfolio_item">
                    <a href="#" className="image_link">
                      <img
                        src="assets/images/portfolio_item_small1.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item1.jpg"
                          className="image_popup"
                        >
                          <i className="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Branded Products
                        </a>
                      </h5>
                      <p>Web Design</p>
                    </div>
                  </div>
                </li>
                <li className="grid_item brands web-design development">
                  <div className="portfolio_item">
                    <a href="#" className="image_link">
                      <img
                        src="assets/images/portfolio_item_small8.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item8.jpg"
                          className="image_popup"
                        >
                          <i className="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Branded Bag
                        </a>
                      </h5>
                      <p>Branding, Web Design, Development</p>
                    </div>
                  </div>
                </li>
                <li className="grid_item brands web-design">
                  <div className="portfolio_item">
                    <div
                      className="carousel_slider owl-carousel owl-theme dots_white"
                      data-autoplay="true"
                      data-loop="false"
                      data-animate-in="fadeIn"
                      data-animate-out="fadeOut"
                      data-autoplay-timeout="3000"
                      data-items="1"
                    >
                      <a href="#" className="image_link">
                        <img
                          src="assets/images/portfolio_item_small3.jpg"
                          alt="image"
                        />
                      </a>
                      <a href="#" className="image_link">
                        <img
                          src="assets/images/portfolio_item_small4.jpg"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item3.jpg"
                          className="image_popup"
                        >
                          <i className="ion-images"></i>
                        </a>
                        <a
                          href="assets/images/portfolio_item4.jpg"
                          className="image_popup d-none"
                        ></a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Coffee Cup Mockup
                        </a>
                      </h5>
                      <p>Branding, Web Design</p>
                    </div>
                  </div>
                </li>
                <li className="grid_item brands web-design development">
                  <div className="portfolio_item">
                    <a href="#" className="image_link">
                      <img
                        src="assets/images/portfolio_item_small2.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item2.jpg"
                          className="image_popup"
                        >
                          <i className="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Visiting Card
                        </a>
                      </h5>
                      <p>Branding, Web Design, Development</p>
                    </div>
                  </div>
                </li>
                <li className="grid_item brands development">
                  <div className="portfolio_item">
                    <a href="#" className="image_link">
                      <img
                        src="assets/images/portfolio_item_small9.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item9.jpg"
                          className="image_popup"
                        >
                          <i className="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Letter Design
                        </a>
                      </h5>
                      <p>Branding, Development</p>
                    </div>
                  </div>
                </li>
                <li className="grid_item brands development">
                  <div className="portfolio_item">
                    <a href="#" className="image_link">
                      <img
                        src="assets/images/portfolio_item_small5.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item5.jpg"
                          className="image_popup"
                        >
                          <i className="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Letter Design
                        </a>
                      </h5>
                      <p>Branding, Development</p>
                    </div>
                  </div>
                </li>
                <li className="grid_item brands web-design development">
                  <div className="portfolio_item">
                    <a href="#" className="image_link">
                      <img
                        src="assets/images/portfolio_item_small11.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item11.jpg"
                          className="image_popup"
                        >
                          <i className="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Branding Cap
                        </a>
                      </h5>
                      <p>Branding, Web Design, Development</p>
                    </div>
                  </div>
                </li>
                <li className="grid_item brands web-design development">
                  <div className="portfolio_item">
                    <a href="#" className="image_link">
                      <img
                        src="assets/images/portfolio_item_small10.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item10.jpg"
                          className="image_popup"
                        >
                          <i className="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Branding Cream
                        </a>
                      </h5>
                      <p>Branding, Web Design, Development</p>
                    </div>
                  </div>
                </li>
                <li className="grid_item brands web-design development">
                  <div className="portfolio_item">
                    <a href="#" className="image_link">
                      <img
                        src="assets/images/portfolio_item_small7.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="portfolio_content">
                      <div className="link_container">
                        <a
                          href="assets/images/portfolio_item7.jpg"
                          className="image_popup"
                        >
                          <i className="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i className="ion-plus"></i>
                        </a>
                      </div>
                      <h5>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          Branding Cream
                        </a>
                      </h5>
                      <p>Branding, Web Design, Development</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio_modal modal fade" id="pr_modal">
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content bg_black3 scroll_white">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="row">
                  <div className="col-lg-8">
                    <div
                      className="carousel_slider owl-carousel owl-theme"
                      data-margin="20"
                      data-dots="false"
                      data-loop="true"
                      data-nav="true"
                      data-autoplay="true"
                      data-items="1"
                    >
                      <div className="item">
                        <img
                          src="assets/images/portfolio_img1.jpg"
                          alt="portfolio_img1"
                        />
                      </div>
                      <div className="item">
                        <img
                          src="assets/images/portfolio_img2.jpg"
                          alt="portfolio_img2"
                        />
                      </div>
                      <div className="item">
                        <img
                          src="assets/images/portfolio_img3.jpg"
                          alt="portfolio_img3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <ul className="list_none portfolio_info_box pr_info_text_white">
                      <li>
                        <span className="text-uppercase">CLIENT</span>Martyn
                        Vorm
                      </li>
                      <li>
                        <span className="text-uppercase">Date</span>Aprile 2018
                      </li>
                      <li>
                        <span className="text-uppercase">Category</span>Design,
                        Branding
                      </li>
                      <li>
                        <span className="text-uppercase">PROJECT link</span>
                        www.sitename.com
                      </li>
                      <li>
                        <span className="text-uppercase">SHARE </span>
                        <ul className="list_none social_icons border_social rounded_social social_white">
                          <li>
                            <a href="#">
                              <i className="ion-social-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-googleplus"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-instagram-outline"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-pinterest"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="pf_content text_white">
                      <div className="heading_s1">
                        <h2>Branded Products</h2>
                      </div>
                      <p>
                        Nam eget neque pellentesque efficitur neque at, ornare
                        orci. Vestibulum ligula orci volutpat id aliquet eget,
                        consectetur eget ante. Duis pharetra for nec rhoncus
                        felis sagittis nec amet ultricies lorem.
                      </p>
                      <p>
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary.Iipsum dolor sit
                        amet consectetur adipiscing elitllus blandit massa enim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
