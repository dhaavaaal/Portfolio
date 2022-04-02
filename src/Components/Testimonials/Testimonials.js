import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section class="bg_black2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-9 text-center">
              <div
                class="heading_s1 heading_light animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <h2>Clients Testimonials</h2>
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
          <div class="row justify-content-center">
            <div
              class="col-md-8 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.04s"
            >
              <div
                class="carousel_slider testimonial_style2 owl-carousel owl-theme"
                data-margin="20"
                data-loop="true"
                data-autoplay="true"
                data-items="1"
              >
                <div class="item">
                  <div class="testimonial_box box_dark text_white">
                    <div class="testimonial_user">
                      <div class="testimonial_img">
                        <img src="assets/images/client_img1.jpg" alt="client" />
                      </div>
                      <div class="client_info">
                        <h6>Lissa Castro</h6>
                        <span>Developer</span>
                      </div>
                    </div>
                    <div class="testi_meta">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, quaeillo
                        inventore veritatis et quasi architecto explicabo. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial_box box_dark text_white">
                    <div class="testimonial_user">
                      <div class="testimonial_img">
                        <img src="assets/images/client_img2.jpg" alt="client" />
                      </div>
                      <div class="client_info">
                        <h6>Alden Smith</h6>
                        <span>Creative Designer</span>
                      </div>
                    </div>
                    <div class="testi_meta">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, quaeillo
                        inventore veritatis et quasi architecto explicabo. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial_box box_dark text_white">
                    <div class="testimonial_user">
                      <div class="testimonial_img">
                        <img src="assets/images/client_img3.jpg" alt="client" />
                      </div>
                      <div class="client_info">
                        <h6>Daisy Lana</h6>
                        <span>Creative Director</span>
                      </div>
                    </div>
                    <div class="testi_meta">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, quaeillo
                        inventore veritatis et quasi architecto explicabo. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial_box box_dark text_white">
                    <div class="testimonial_user">
                      <div class="testimonial_img">
                        <img src="assets/images/client_img4.jpg" alt="client" />
                      </div>
                      <div class="client_info">
                        <h6>Helena Amos</h6>
                        <span>Creative Designer</span>
                      </div>
                    </div>
                    <div class="testi_meta">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, quaeillo
                        inventore veritatis et quasi architecto explicabo.Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
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

export default Testimonials;
