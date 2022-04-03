import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div class="col-md-8 testimonial-container">
        <div class="inner-testimonial">
          <div class="testimonial-user">
            <div class="testimonial-img">
              <img src="assets/images/client_img1.jpg" alt="client" />
            </div>
            <div class="client-info">
              <h6>Lissa Castro</h6>
              <span>Developer</span>
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
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
