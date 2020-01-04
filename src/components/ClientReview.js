import React from "react"
import Slider from "react-slick"
import ReviewBg from "../images/bg/bg2.jpg"
import Client1 from "../images/clients/client1.png"
import Client2 from "../images/clients/client2.png"
import Client3 from "../images/clients/client3.png"
import Client4 from "../images/clients/client4.png"
import Client5 from "../images/clients/client5.png"
import Client6 from "../images/clients/client6.png"
import TestimonialImg1 from "../images/testimonials/1.jpg"
import TestimonialImg2 from "../images/testimonials/2.jpg"
import TestimonialImg3 from "../images/testimonials/3.jpg"

import SectionTitle from "./SectionTitle"

const ClientReview = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section
      id="client"
      className="pad80 parallax"
      style={{ backgroundImage: `url(${ReviewBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionTitle
              titleStyle="text-center white"
              title="Clients & Review"
            />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "80px" }}>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="client-logo">
              <img src={Client1} alt="theshahriyar" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="client-logo">
              <img src={Client2} alt="theshahriyar" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="client-logo">
              <img src={Client3} alt="theshahriyar" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="client-logo">
              <img src={Client4} alt="theshahriyar" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="client-logo">
              <img src={Client5} alt="theshahriyar" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="client-logo">
              <img src={Client6} alt="theshahriyar" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings} className="testimonial-slide">
              <div className="testimonial-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur..
                </p>
                <div className="people">Robert Bruce</div>
                <img src={TestimonialImg2} alt="theshahriyar" />
              </div>
              <div className="testimonial-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur..
                </p>
                <div className="people">Mike Hussy</div>
                <img src={TestimonialImg3} alt="theshahriyar" />
              </div>
              <div className="testimonial-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur..
                </p>
                <div className="people">David Miller</div>
                <img src={TestimonialImg1} alt="theshahriyar" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientReview
