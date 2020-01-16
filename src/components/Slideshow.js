import React from "react"
import Carousel from "react-bootstrap/Carousel"
import SlideImg1 from "../images/slideshow/banner-1.jpg"
import SlideImg2 from "../images/slideshow/banner-2.jpg"
import SlideImg3 from "../images/slideshow/banner-3.jpg"

const Slideshow = () => {
  return (
    <Carousel id="hero-banner" className="main-slide" controls={false}>
      <Carousel.Item>
        <img src={SlideImg2} alt="slider" />
        <Carousel.Caption>
          <div className="slider-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-left">
                  <h1 className="animated1">Business & Creative</h1>
                  <p className="animated2">
                    Curabitur aliquet quam id dui posuere blandit. Praesent
                    sapien massa
                    <br /> convallis a pellentesque nec, egestas non nisi.
                  </p>
                  <a href="#" className="btn btn-primary animated3">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SlideImg1} alt="slider" />
        <Carousel.Caption>
          <div className="slider-content">
            <div className="col-md-12 text-center">
              <h1 className="animated1">
                <span>
                  Welcome to <strong>Revson</strong>
                </span>
              </h1>
              <p className="animated2">
                Generate a flood of new business with the
                <br /> power of a digital media platform
              </p>
              <a href="#" className="btn btn-primary animated3">
                Read More
              </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SlideImg3} alt="slider" />
        <Carousel.Caption>
          <div className="slider-content">
            <div className="col-md-12 text-center">
              <h1 className="animated1">
                <span>
                  Welcome to <strong>Revson</strong>
                </span>
              </h1>
              <p className="animated2">
                Generate a flood of new business with the
                <br /> power of a digital media platform
              </p>
              <a href="#" className="btn btn-primary animated3">
                Read More
              </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slideshow
