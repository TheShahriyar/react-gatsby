import React from "react"
import CallToAction from "../components/CallToAction"
import FeatureSection from "../components/FeatureSection"
import SectionTitle from "../components/SectionTitle"
import Feature from "../components/Feature"
import ProgressBar from "../components/ProgressBar"
import CountUp from "react-countup"
import MegaTab from "../components/MegaTab"
import Portfolio from "../components/Portfolio"
import CallToAction2 from "../components/CallToAction2"
import Slider from "react-slick"
import TeamMember from "../components/TeamMember"
import Team2 from "../images/team/team2.jpg"
import Team3 from "../images/team/team3.jpg"
import Team5 from "../images/team/team5.jpg"
import Team4 from "../images/team/team4.jpg"
import BlogImg4 from "../images/blog/img-4.jpg"
import BlogImg5 from "../images/blog/img-5.jpg"
import BlogImg8 from "../images/blog/img-8.jpg"
import BlogImg9 from "../images/blog/img-9.jpg"
import PricingTable from "../components/PricingTable"
import ClientReview from "../components/ClientReview"
import ContactSection from "../components/ContactSection"
import FooterSection from "../components/FooterSection"
import Navbar from "../components/Navbar"
import Slideshow from "../components/Slideshow"
import SEO from "../components/SEO"

const HomepageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }
  return (
    <>
      <SEO/>
      <Navbar />
      <Slideshow/>
      <CallToAction />

      {/* Start About Us Section */}
      <FeatureSection />
      {/* End About Us Section */}

      {/* Start More About Us Section */}
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="More About Us" titleStyle="left small" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-6">
                  <Feature
                    iconName="icon-clock"
                    title="Professional"
                    subtitle="We maintain schedule"
                  />
                  <Feature
                    iconName="icon-layers"
                    title="Support"
                    subtitle="We support client"
                  />
                  <Feature
                    iconName="icon-genius"
                    title="Genius"
                    subtitle="We have genious team"
                  />
                </div>
                <div className="col-md-6">
                  <Feature
                    iconName="icon-bargraph"
                    title="Economy"
                    subtitle="Fast Business Growth"
                  />
                  <Feature
                    iconName="icon-puzzle"
                    title="Up to date"
                    subtitle="Secure Upgrade"
                  />
                  <Feature
                    iconName="icon-trophy"
                    title="Award"
                    subtitle="We are Awarded"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-section">
                <ProgressBar title="Web Design" width="65" />
                <ProgressBar title="Joomla" width="95" />
                <ProgressBar title="Javascript" width="75" />
              </div>
              <div
                className="row animated-counter-section"
                style={{ marginTop: "30px" }}
              >
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center">
                    <CountUp
                      className="animated-number"
                      end={125}
                      duration={10}
                    />
                    <h4>Project</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center">
                    <CountUp
                      className="animated-number"
                      end={586}
                      duration={10}
                    />
                    <h4>Coffee</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center">
                    <CountUp
                      className="animated-number"
                      end={355}
                      duration={10}
                    />
                    <h4>Client</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center">
                    <CountUp
                      className="animated-number"
                      end={125}
                      duration={10}
                    />
                    <h4>Award</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End More About Us Section */}

      {/* Start Service Section */}
      <section
        id="services"
        className="pad-t80"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle
                titleStyle="text-center"
                title="Our Services"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <MegaTab />
            </div>
          </div>
        </div>
      </section>

      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <section id="portfolio" className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle
                titleStyle="text-center"
                title="Awarded Work"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo"
              />
            </div>
          </div>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio Section */}

      {/* Start Call to Section */}
      <CallToAction2 />
      {/* End Call to Section */}

      {/* Start Team Section */}
      <section id="team" className="pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle
                title="Dedicated Team"
                titleStyle="text-center"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="team-section">
                <Slider {...settings} className="row">
                  <div className="col-md-12">
                    <TeamMember
                      teamImage={Team2}
                      name="John Doe"
                      designation="CEO"
                      fbLink="#"
                      twitterLink="#"
                      ytLink="#"
                    />
                  </div>
                  <div className="col-md-12">
                    <TeamMember
                      teamImage={Team3}
                      name="John Doe"
                      designation="CEO"
                      fbLink="#"
                      twitterLink="#"
                      ytLink="#"
                    />
                  </div>
                  <div className="col-md-12">
                    <TeamMember
                      teamImage={Team5}
                      name="John Doe"
                      designation="CEO"
                      fbLink="#"
                      twitterLink="#"
                      ytLink="#"
                    />
                  </div>
                  <div className="col-md-12">
                    <TeamMember
                      teamImage={Team4}
                      name="John Doe"
                      designation="CEO"
                      fbLink="#"
                      twitterLink="#"
                      ytLink="#"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}

      {/* Start Latest News Section */}
      <section
        id="blog"
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle
                titleStyle="text-center"
                title="News & Events"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="blog-section">
                <Slider {...settings} className="row">
                  <div className="col-md-12">
                    <div className="latest-news">
                      <div className="latest-news-img">
                        <img
                          src={BlogImg4}
                          className="img-fluid"
                          alt="blog-post"
                        />
                        <div>
                          <span>Aug</span>
                          <span>07</span>
                        </div>
                      </div>
                      <div className="comment">
                        <p>
                          Posted In: <span>Business, Blog</span>
                        </p>
                        <p>
                          <span>
                            <a href="#">
                              <i className="fa fa-comments"></i>
                            </a>{" "}
                            15
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa fa-eye"></i>
                            </a>{" "}
                            11
                          </span>
                        </p>
                      </div>
                      <h4>
                        <a href="#">
                          Lorem Ipsum is dummy text of type setting industry.
                        </a>
                      </h4>
                      <p>
                        Vivamus magna justo, lacinia eget consectetur convallis
                        at tellus. Lorem ipsum dolor sit consectetur adipiscing
                        elit
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="latest-news">
                      <div className="latest-news-img">
                        <img
                          src={BlogImg8}
                          className="img-fluid"
                          alt="blog-post"
                        />
                        <div>
                          <span>Aug</span>
                          <span>07</span>
                        </div>
                      </div>
                      <div className="comment">
                        <p>
                          Posted In: <span>Business, Blog</span>
                        </p>
                        <p>
                          <span>
                            <a href="#">
                              <i className="fa fa-comments"></i>
                            </a>{" "}
                            15
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa fa-eye"></i>
                            </a>{" "}
                            11
                          </span>
                        </p>
                      </div>
                      <h4>
                        <a href="#">
                          Lorem Ipsum is dummy text of type setting industry.
                        </a>
                      </h4>
                      <p>
                        Vivamus magna justo, lacinia eget consectetur convallis
                        at tellus. Lorem ipsum dolor sit consectetur adipiscing
                        elit
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="latest-news">
                      <div className="latest-news-img">
                        <img
                          src={BlogImg9}
                          className="img-fluid"
                          alt="blog-post"
                        />
                        <div>
                          <span>Aug</span>
                          <span>07</span>
                        </div>
                      </div>
                      <div className="comment">
                        <p>
                          Posted In: <span>Business, Blog</span>
                        </p>
                        <p>
                          <span>
                            <a href="#">
                              <i className="fa fa-comments"></i>
                            </a>{" "}
                            15
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa fa-eye"></i>
                            </a>{" "}
                            11
                          </span>
                        </p>
                      </div>
                      <h4>
                        <a href="#">
                          Lorem Ipsum is dummy text of type setting industry.
                        </a>
                      </h4>
                      <p>
                        Vivamus magna justo, lacinia eget consectetur convallis
                        at tellus. Lorem ipsum dolor sit consectetur adipiscing
                        elit
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="latest-news">
                      <div className="latest-news-img">
                        <img
                          src={BlogImg5}
                          className="img-fluid"
                          alt="blog-post"
                        />
                        <div>
                          <span>Aug</span>
                          <span>07</span>
                        </div>
                      </div>
                      <div className="comment">
                        <p>
                          Posted In: <span>Business, Blog</span>
                        </p>
                        <p>
                          <span>
                            <a href="#">
                              <i className="fa fa-comments"></i>
                            </a>{" "}
                            15
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa fa-eye"></i>
                            </a>{" "}
                            11
                          </span>
                        </p>
                      </div>
                      <h4>
                        <a href="#">
                          Lorem Ipsum is dummy text of type setting industry.
                        </a>
                      </h4>
                      <p>
                        Vivamus magna justo, lacinia eget consectetur convallis
                        at tellus. Lorem ipsum dolor sit consectetur adipiscing
                        elit
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Latest News Section */}

      {/* Start Pricing Table Section */}
      <PricingTable />
      {/* End Pricing Table Section */}

      {/* Start Clients & Review Section */}
      <ClientReview />
      {/* End Clients & Review Section */}

      {/* Start Contact Section */}
      <ContactSection />
      {/* End Contact Section */}

      {/* Start Footer Section */}
      <FooterSection />
      {/* End Footer Section */}
    </>
  )
}

export default HomepageSlider
