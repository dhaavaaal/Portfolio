import React from "react";

const ContactMe = () => {
  return (
    <div>
      <section
        id="contact"
        className="bg_black2"
        style={{
          height: "75vh",
          backgroundColor: "rgb(12, 14, 39)",
          color: "#fff",
        }}
      >
        <div className="container">
          <div
            className="row justify-content-center"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="col-xl-6 col-lg-7 col-md-9 text-center"
              style={{ marginTop: "2%" }}
            >
              <div
                className="heading_s1 heading_light animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div
            className="row align-items-center animation"
            data-animation="fadeInUp"
            data-animation-delay="0.04s"
            style={{
              margin: "3rem",
            }}
          >
            <div className="col-md-4 text-center">
              <div
                className="icon_box icon_box_style_2 box_dark text_white radius_box_10"
                style={{
                  backgroundColor: "#24263C",
                  borderRadius: "10px",
                  margin: "1rem",
                  padding: "1rem",
                }}
              >
                <div className="box_icon mb-3">
                  <i className="ti-location-pin"></i>
                </div>
                <div className="icon_box_content">
                  <h5 className="text-uppercase py-md-2">Address</h5>
                  <p>123 Street, New South London , UK</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div
                className="icon_box icon_box_style_2 box_dark text_white radius_box_10"
                style={{
                  backgroundColor: "#24263C",
                  borderRadius: "10px",
                  margin: "1rem",
                  padding: "1rem",
                }}
              >
                <div className="box_icon mb-3">
                  <i className="ti-mobile"></i>
                </div>
                <div className="icon_box_content">
                  <h5 className="text-uppercase py-md-2">Phone</h5>
                  <p>123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div
                className="icon_box icon_box_style_2 box_dark text_white radius_box_10"
                style={{
                  backgroundColor: "#24263C",
                  borderRadius: "10px",
                  margin: "1rem",
                  padding: "1rem",
                }}
              >
                <div className="box_icon mb-3">
                  <i className="ti-email"></i>
                </div>
                <div className="icon_box_content">
                  <h5 className="text-uppercase py-md-2">Email</h5>
                  <p>info@sitename.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="medium_divider clearfix"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="field_form form_style2 rounded_input animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <form method="post" name="enq">
                  <div className="row contact-me">
                    <div className="form-group col-12">
                      <input
                        required="required"
                        placeholder="Enter Name *"
                        id="first-name"
                        className="form-control"
                        name="name"
                        type="text"
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                          width: "580px",
                          color: "white",
                          borderRadius: "20px",
                          marginBottom: "15px",
                        }}
                      />
                    </div>
                    <div className="form-group col-12">
                      <input
                        required="required"
                        placeholder="Enter Email *"
                        id="email"
                        className="form-control"
                        name="email"
                        type="email"
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                          width: "580px",
                          borderRadius: "20px",
                          marginBottom: "15px",
                        }}
                      />
                    </div>
                    <div className="form-group col-12">
                      <input
                        placeholder="Enter Subject"
                        id="subject"
                        className="form-control"
                        name="subject"
                        type="text"
                        style={{
                          backgroundColor: "transparent",
                          width: "580px",
                          marginBottom: "15px",
                          borderRadius: "20px",
                          border: "2px solid white",
                          color: "white",
                        }}
                      />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        required="required"
                        placeholder="Message *"
                        id="description"
                        className="form-control"
                        name="message"
                        rows="5"
                        style={{
                          backgroundColor: "transparent",
                          width: "580px",
                          border: "2px solid white",
                          marginBottom: "15px",
                          borderRadius: "20px",
                        }}
                      ></textarea>
                    </div>
                    <div className=" form-group col-12">
                      <button
                        type="submit"
                        title="Submit Your Message!"
                        className="btn btn-radius btn-aylen btn-block"
                        id="submitButton"
                        name="submit"
                        value="Submit"
                        style={{
                          backgroundColor: "#27E278",
                          width: "580px",
                          borderRadius: "20px",
                          position: "relative",
                          left: "-32px",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-lg-12 text-center">
                      <div
                        id="alert-msg"
                        className="alert-msg text-center"
                      ></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="contact_map mt-4 mt-md-0 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <iframe
                  title="geo-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193229.77301255226!2d-74.05531241936525!3d40.823236500441624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW+123rd+St%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1533565007513"
                  allowfullscreen=""
                  style={{
                    height: "315px",
                    width: "400px",
                  }}
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
