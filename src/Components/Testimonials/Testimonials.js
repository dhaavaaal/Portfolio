import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import clientimage from "../../Images/user.jpeg";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div class="col-md-8 testimonial-container">
        <div class="testimonials-heading">
          <h2>Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim. Nullam id varius nunc id varius nunc
          </p>
        </div>
        <div class="inner-testimonial">
          <div class="testimonial-user">
            <div class="testimonial-img">
              <img src={clientimage} alt="client" className="client-image" />
            </div>
            <div class="client-info">
              <h5>Lissa Castro</h5>
              <h6>Developer</h6>
            </div>
            <div class="testimonial-description">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, quaeillo inventore veritatis
                et quasi architecto explicabo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Phasellus blandit massa enim.
                Nullam id varius nunc id varius nunc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8 testimonial-container">
        <div class="testimonials-heading">
          <h2>Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim. Nullam id varius nunc id varius nunc
          </p>
        </div>
        <div class="inner-testimonial">
          <div class="testimonial-user">
            <div class="testimonial-img">
              <img src={clientimage} alt="client" className="client-image" />
            </div>
            <div class="client-info">
              <h5>Lissa Castro</h5>
              <h6>Developer</h6>
            </div>
            <div class="testimonial-description">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, quaeillo inventore veritatis
                et quasi architecto explicabo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Phasellus blandit massa enim.
                Nullam id varius nunc id varius nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
