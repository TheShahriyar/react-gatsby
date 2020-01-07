import React from "react"
import Layout from "../components/Layout"
import {Link} from "react-scroll"

import BannerImage from "../images/preview/parallax.jpg"
import SliderImage from "../images/preview/revolution-slider.jpg"
import BannerBg from "../images/bg/banner.jpg"
import SectionTitle from "../components/SectionTitle"

import SEO from "../components/SEO"

export default () => {
  return (
    <>
      <Layout>
        <SEO/>
        <section id="hero-banner" className="parallax" style={{backgroundImage: `url(${BannerBg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="preview-banner text-center white">
                                <h1>Othelo</h1>
                                <p>Multipurpose React Gatsby Onepage Template</p>
                                <Link to="portfolio" smooth={true} duration={1000} className="btn btn-primary page-scroll">Template Variation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="pad-t100 pad-b70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h3>Template Variation</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="product-showcase">
                                <a href="./homepageBanner" target="_blank" rel="noopener noreferrer">
                                    <img src={BannerImage} alt="theshahriyar"/>
                                    <p>Parallax Banner</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product-showcase">
                                <a href="./homepageSlider" target="_blank" rel="noopener noreferrer">
                                    <img src={SliderImage} alt="theshahriyar"/>
                                    <p>Revolution Slideshow</p>
                                </a>
                            </div>
                        </div>
                    </div>                
                </div>    
            </section>

            <section id="services" className="pad-t100 pad-b70 parallax" style={{backgroundColor: "#f2f2f2"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle titleStyle="text-center" title="Features" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-2">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="feature-icon text-center">
                                            <i className="icon-genius"></i>
                                        </div>
                                    </div>
                                    <div className="media-body ml-3">
                                        <a href="#">
                                            <h3 className="media-heading">Latest Gatsby JS</h3>
                                        </a>
                                        <p>We are using here latest version of Gatsby Framework. And we will update it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-2">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="feature-icon text-center">
                                            <i className="icon-aperture"></i>
                                        </div>
                                    </div>
                                    <div className="media-body ml-3">
                                        <a href="#">
                                            <h3 className="media-heading">FontAwesome icon</h3>
                                        </a>
                                        <p>We are using here 4.7.0 version of FontAwesome icon. And we will update it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-2">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="feature-icon text-center">
                                            <i className="icon-layers"></i>
                                        </div>
                                    </div>
                                    <div className="media-body ml-3">
                                        <a href="#">
                                            <h3 className="media-heading">ET Line icon Pack</h3>
                                        </a>
                                        <p>Bonding is integrated with ET Line icon pack. When update come then We will update.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-2">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="feature-icon text-center">
                                            <i className="icon-clock"></i>
                                        </div>
                                    </div>
                                    <div className="media-body ml-3">
                                        <a href="#">
                                            <h3 className="media-heading">React Bootstrap</h3>
                                        </a>
                                        <p>Othelo is integrated with famous react-bootstrap which is built with Bootstrap 4. Be Happy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-2">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="feature-icon text-center">
                                            <i className="icon-beaker"></i>
                                        </div>
                                    </div>
                                    <div className="media-body ml-3">
                                        <a href="#">
                                            <h3 className="media-heading">Responsive Design</h3>
                                        </a>
                                        <p>Our Template is 100% responsive. Before release we tested it in many device.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-2">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="feature-icon text-center">
                                            <i className="icon-bargraph"></i>
                                        </div>
                                    </div>
                                    <div className="media-body ml-3">
                                        <a href="#">
                                            <h3 className="media-heading">Browser Compatible</h3>
                                        </a>
                                        <p>This Template is compatible in every web browser. We tested in chrome, mozilla, EDGE and result is fine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pad80 footer-minimal" style={{backgroundColor: "#1cbac8"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Othelo</h3>
                            <div className="copyright-text">
                                <p>Copyright © All Rights Reserved. Developed by <a href="#">TheShahriyar</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </Layout>
    </>
  )
}
