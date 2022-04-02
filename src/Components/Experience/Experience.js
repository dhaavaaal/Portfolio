import React from "react";

const Experience = () => {
  return (
    <div>
      <section id="experience" className="bg_black2">
        <div className="container text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 text-center">
              <div
                className="heading_s1 heading_light animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
                <h2>Experience</h2>
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
          <div
            className="row animation"
            data-animation="fadeInUp"
            data-animation-delay="0.04s"
          >
            {/* <div
              className="card"
              style={{ width: "18rem", backgroundColor: "black" }}
            >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div> */}
            <div
              className="col-sm-6"
              // style={{ width: "18rem", backgroundColor: "black" }}
            >
              <div className="icon_box icon_box_style_2 radius_box_10 box_dark">
                <div
                  className="icon_box_content"
                  style={{ backgroundColor: "#24263c", color: "white" }}
                >
                  <h4>UI/UX Designer</h4>
                  <p>
                    <span className="text_default">2002-2006</span> Adobe Inc.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
              <div className="icon_box icon_box_style_2 radius_box_10 box_dark">
                <div className="icon_box_content text_white">
                  <h4>Web Design</h4>
                  <p>
                    <span className="text_default">2007-2010</span> Google Inc.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
              <div className="icon_box icon_box_style_2 radius_box_10 box_dark">
                <div className="icon_box_content text_white">
                  <h4>Web Development</h4>
                  <p>
                    <span className="text_default">2010-2013</span> Adobe Inc.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="icon_box icon_box_style_2 radius_box_10 box_dark">
                <div className="icon_box_content text_white">
                  <h4>Marketing Manager</h4>
                  <p>
                    <span className="text_default">2013-2015</span> Adobe Inc.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
              <div className="icon_box icon_box_style_2 radius_box_10 box_dark">
                <div className="icon_box_content text_white">
                  <h4>Front-End Developer</h4>
                  <p>
                    <span className="text_default">2015-2017</span> Adobe Inc.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
              <div className="icon_box icon_box_style_2 radius_box_10 box_dark">
                <div className="icon_box_content text_white">
                  <h4>Google Web Designer</h4>
                  <p>
                    <span className="text_default">2017-2019</span> Google Inc.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
