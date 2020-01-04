import React from "react"
import SectionTitle from "./SectionTitle"

const FeatureSection = () => {
  return (
    <section id="about-section" className="pad-t80">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionTitle
              title="About Us"
              titleStyle="text-center"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo"
            />
          </div>
        </div>
      </div>
      <div className="feature-box">
        <div className="inner-feature-box">
          <div className="feature-post">
            <div className="feature-post-content">
              <a href="#">
                <i className="icon-mobile"></i>
              </a>
              <h2>RESPONSIVE DESIGN</h2>
              <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada </p>
            </div>
            <div className="hover-feature">
              <h2>Branding Strategies</h2>
              <h1>Creative Design</h1>
              <span></span>
              <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                consectetuer ligula vulputate sem tristique cursus. Nam nulla
                quam, gravida non, commodo a, sodales sit amet, nisi. Donec nec
                justo eget felis facilisis fermentum. Aliquam porttitor mauris
                sit amet orci. Aenean dignissim pellentesque felis.
              </p>
            </div>
          </div>
          <div className="feature-post">
            <div className="feature-post-content">
              <a href="#">
                <i className="icon-aperture"></i>
              </a>
              <h2>GREAT SUPPORT</h2>
              <p>
                Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.{" "}
              </p>
            </div>
            <div className="hover-feature">
              <h2>Events Planning</h2>
              <h1>Dedicated Support</h1>
              <span></span>
              <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                consectetuer ligula vulputate sem tristique cursus. Nam nulla
                quam, gravida non, commodo a, sodales sit amet, nisi. Donec nec
                justo eget felis facilisis fermentum. Aliquam porttitor mauris
                sit amet orci. Aenean dignissim pellentesque felis.
              </p>
            </div>
          </div>
          <div className="feature-post">
            <div className="feature-post-content">
              <a href="#">
                <i className="icon-camera"></i>
              </a>
              <h2>RETINA READY</h2>
              <p>
                Donec nec justo eget felis facilisis fermentum. sodales sit
                amet, nisi{" "}
              </p>
            </div>
            <div className="hover-feature">
              <h2>DISPLAY'S REVOLUTION</h2>
              <h1>100% RETINA READY</h1>
              <span></span>
              <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                consectetuer ligula vulputate sem tristique cursus. Nam nulla
                quam, gravida non, commodo a, sodales sit amet, nisi. Donec nec
                justo eget felis facilisis fermentum. Aliquam porttitor mauris
                sit amet orci. Aenean dignissim pellentesque felis.
              </p>
            </div>
          </div>
          <div className="feature-post">
            <div className="feature-post-content">
              <a href="#">
                <i className="icon-document"></i>
              </a>
              <h2>WELL DOCUMENTED</h2>
              <p>
                Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                pede.{" "}
              </p>
            </div>
            <div className="hover-feature">
              <h2>Content Building</h2>
              <h1>Planning &amp; Strategy</h1>
              <span></span>
              <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                consectetuer ligula vulputate sem tristique cursus. Nam nulla
                quam, gravida non, commodo a, sodales sit amet, nisi. Donec nec
                justo eget felis facilisis fermentum. Aliquam porttitor mauris
                sit amet orci. Aenean dignissim pellentesque felis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
