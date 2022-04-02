import React from "react";

const ContactMe = () => {
  return (
    <div>
      <section id="contact" class="bg_black2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-9 text-center">
              <div
                class="heading_s1 heading_light animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div
            class="row align-items-center animation"
            data-animation="fadeInUp"
            data-animation-delay="0.04s"
          >
            <div class="col-md-4 text-center">
              <div class="icon_box icon_box_style_2 box_dark text_white radius_box_10">
                <div class="box_icon mb-3">
                  <i class="ti-location-pin"></i>
                </div>
                <div class="icon_box_content">
                  <h5 class="text-uppercase py-md-2">Address</h5>
                  <p>123 Street, New South London , UK</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="icon_box icon_box_style_2 box_dark text_white radius_box_10">
                <div class="box_icon mb-3">
                  <i class="ti-mobile"></i>
                </div>
                <div class="icon_box_content">
                  <h5 class="text-uppercase py-md-2">Phone</h5>
                  <p>123-456-7890</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="icon_box icon_box_style_2 box_dark text_white radius_box_10">
                <div class="box_icon mb-3">
                  <i class="ti-email"></i>
                </div>
                <div class="icon_box_content">
                  <h5 class="text-uppercase py-md-2">Email</h5>
                  <p>info@sitename.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="medium_divider clearfix"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div
                class="field_form form_style2 rounded_input animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <form method="post" name="enq">
                  <div class="row">
                    <div class="form-group col-12">
                      <input
                        required="required"
                        placeholder="Enter Name *"
                        id="first-name"
                        class="form-control"
                        name="name"
                        type="text"
                      />
                    </div>
                    <div class="form-group col-12">
                      <input
                        required="required"
                        placeholder="Enter Email *"
                        id="email"
                        class="form-control"
                        name="email"
                        type="email"
                      />
                    </div>
                    <div class="form-group col-12">
                      <input
                        placeholder="Enter Subject"
                        id="subject"
                        class="form-control"
                        name="subject"
                        type="text"
                      />
                    </div>
                    <div class="form-group col-lg-12">
                      <textarea
                        required="required"
                        placeholder="Message *"
                        id="description"
                        class="form-control"
                        name="message"
                        rows="5"
                      ></textarea>
                    </div>
                    <div class="col-lg-12">
                      <button
                        type="submit"
                        title="Submit Your Message!"
                        class="btn btn-default btn-radius btn-aylen btn-block"
                        id="submitButton"
                        name="submit"
                        value="Submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div class="col-lg-12 text-center">
                      <div id="alert-msg" class="alert-msg text-center"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="contact_map mt-4 mt-md-0 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193229.77301255226!2d-74.05531241936525!3d40.823236500441624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW+123rd+St%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1533565007513"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
