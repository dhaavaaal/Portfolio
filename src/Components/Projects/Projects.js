import React from "react";

const Projects = () => {
  return (
    <div>
      <section id="portfolio" class="pb_70 bg_black4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-9 text-center">
              <div
                class="heading_s1 heading_light animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <h2>My Portfolio PROJECTS</h2>
              </div>
              <p
                class="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="0.03s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="cleafix small_divider"></div>
            </div>
          </div>
          <div class="row mb-4 mb-md-5">
            <div class="col-md-12 text-center">
              <ul
                class="list_none grid_filter filter_tab1 filter_white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.04s"
              >
                <li>
                  <a href="#" class="current" data-filter="*">
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
          <div class="row">
            <div class="col-md-12">
              <ul
                class="grid_container gutter_medium work_col3 portfolio_gallery portfolio_style1 animation masonry"
                data-animation="fadeInUp"
                data-animation-delay="0.04s"
              >
                <li class="grid-sizer"></li>
                <li class="grid_item web-design">
                  <div class="portfolio_item">
                    <a href="#" class="image_link">
                      <img
                        src="assets/images/portfolio_item_small1.jpg"
                        alt="image"
                      />
                    </a>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item1.jpg"
                          class="image_popup"
                        >
                          <i class="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
                <li class="grid_item brands web-design development">
                  <div class="portfolio_item">
                    <a href="#" class="image_link">
                      <img
                        src="assets/images/portfolio_item_small8.jpg"
                        alt="image"
                      />
                    </a>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item8.jpg"
                          class="image_popup"
                        >
                          <i class="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
                <li class="grid_item brands web-design">
                  <div class="portfolio_item">
                    <div
                      class="carousel_slider owl-carousel owl-theme dots_white"
                      data-autoplay="true"
                      data-loop="false"
                      data-animate-in="fadeIn"
                      data-animate-out="fadeOut"
                      data-autoplay-timeout="3000"
                      data-items="1"
                    >
                      <a href="#" class="image_link">
                        <img
                          src="assets/images/portfolio_item_small3.jpg"
                          alt="image"
                        />
                      </a>
                      <a href="#" class="image_link">
                        <img
                          src="assets/images/portfolio_item_small4.jpg"
                          alt="image"
                        />
                      </a>
                    </div>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item3.jpg"
                          class="image_popup"
                        >
                          <i class="ion-images"></i>
                        </a>
                        <a
                          href="assets/images/portfolio_item4.jpg"
                          class="image_popup d-none"
                        ></a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
                <li class="grid_item brands web-design development">
                  <div class="portfolio_item">
                    <a href="#" class="image_link">
                      <img
                        src="assets/images/portfolio_item_small2.jpg"
                        alt="image"
                      />
                    </a>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item2.jpg"
                          class="image_popup"
                        >
                          <i class="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
                <li class="grid_item brands development">
                  <div class="portfolio_item">
                    <a href="#" class="image_link">
                      <img
                        src="assets/images/portfolio_item_small9.jpg"
                        alt="image"
                      />
                    </a>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item9.jpg"
                          class="image_popup"
                        >
                          <i class="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
                <li class="grid_item brands development">
                  <div class="portfolio_item">
                    <a href="#" class="image_link">
                      <img
                        src="assets/images/portfolio_item_small5.jpg"
                        alt="image"
                      />
                    </a>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item5.jpg"
                          class="image_popup"
                        >
                          <i class="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
                <li class="grid_item brands web-design development">
                  <div class="portfolio_item">
                    <a href="#" class="image_link">
                      <img
                        src="assets/images/portfolio_item_small11.jpg"
                        alt="image"
                      />
                    </a>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item11.jpg"
                          class="image_popup"
                        >
                          <i class="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
                <li class="grid_item brands web-design development">
                  <div class="portfolio_item">
                    <a href="#" class="image_link">
                      <img
                        src="assets/images/portfolio_item_small10.jpg"
                        alt="image"
                      />
                    </a>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item10.jpg"
                          class="image_popup"
                        >
                          <i class="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
                <li class="grid_item brands web-design development">
                  <div class="portfolio_item">
                    <a href="#" class="image_link">
                      <img
                        src="assets/images/portfolio_item_small7.jpg"
                        alt="image"
                      />
                    </a>
                    <div class="portfolio_content">
                      <div class="link_container">
                        <a
                          href="assets/images/portfolio_item7.jpg"
                          class="image_popup"
                        >
                          <i class="ion-image"></i>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#pr_modal">
                          <i class="ion-plus"></i>
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
        <div class="portfolio_modal modal fade" id="pr_modal">
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content bg_black3 scroll_white">
              <div class="modal-body">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div class="row">
                  <div class="col-lg-8">
                    <div
                      class="carousel_slider owl-carousel owl-theme"
                      data-margin="20"
                      data-dots="false"
                      data-loop="true"
                      data-nav="true"
                      data-autoplay="true"
                      data-items="1"
                    >
                      <div class="item">
                        <img
                          src="assets/images/portfolio_img1.jpg"
                          alt="portfolio_img1"
                        />
                      </div>
                      <div class="item">
                        <img
                          src="assets/images/portfolio_img2.jpg"
                          alt="portfolio_img2"
                        />
                      </div>
                      <div class="item">
                        <img
                          src="assets/images/portfolio_img3.jpg"
                          alt="portfolio_img3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list_none portfolio_info_box pr_info_text_white">
                      <li>
                        <span class="text-uppercase">CLIENT</span>Martyn Vorm
                      </li>
                      <li>
                        <span class="text-uppercase">Date</span>Aprile 2018
                      </li>
                      <li>
                        <span class="text-uppercase">Category</span>Design,
                        Branding
                      </li>
                      <li>
                        <span class="text-uppercase">PROJECT link</span>
                        www.sitename.com
                      </li>
                      <li>
                        <span class="text-uppercase">SHARE </span>
                        <ul class="list_none social_icons border_social rounded_social social_white">
                          <li>
                            <a href="#">
                              <i class="ion-social-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="ion-social-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="ion-social-googleplus"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="ion-social-instagram-outline"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="ion-social-pinterest"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="pf_content text_white">
                      <div class="heading_s1">
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
