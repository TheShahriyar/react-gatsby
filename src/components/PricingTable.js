import React from "react"
import SectionTitle from "./SectionTitle"
import {OverlayTrigger, Tooltip} from "react-bootstrap"

import PricingBg1 from "../images/others/pricing-bg-1.jpg"
import PricingBg2 from "../images/others/pricing-bg-2.jpg"
import PricingBg3 from "../images/others/pricing-bg-3.jpg"

const PricingTable = () => {
  return (
    <section id="pricing" className="pad-t80 pad-b80">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionTitle
              titleStyle="text-center"
              title="Featured Packages"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="pricing-box">
              <div
                className="pricing-head white"
                style={{
                  backgroundImage: `url(${PricingBg1})`,
                  backgroundPosition: "50% 50%",
                }}
              >
                <span className="previous-price">$10.00</span>
                <h4>Free</h4>
                <h5>Basic</h5>
              </div>
              <div className="pricing-body">
                <ul>
                  <li>
                    Basic Feature{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>
                    One User{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>
                    10 Records{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>Basic Feature</li>
                  <li>One User</li>
                  <li>More Records</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing-box">
              <div
                className="pricing-head white"
                style={{
                  backgroundImage: `url(${PricingBg2})`,
                  backgroundPosition: "50% 50%",
                }}
              >
                <span className="previous-price">$66.00</span>
                <h4>$33.00</h4>
                <h5>Professional</h5>
              </div>
              <div className="pricing-body">
                <ul>
                  <li>
                    Basic Feature{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>
                    One User{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>
                    10 Records{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>Basic Feature</li>
                  <li>One User</li>
                  <li>More Records</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing-box">
              <div
                className="pricing-head white"
                style={{
                  backgroundImage: `url(${PricingBg3})`,
                  backgroundPosition: "50% 50%",
                }}
              >
                <span className="previous-price">$99.00</span>
                <h4>$66.00</h4>
                <h5>Business</h5>
              </div>
              <div className="pricing-body">
                <ul>
                  <li>
                    Basic Feature{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>
                    One User{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>
                    10 Records{" "}
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip>Here is some note</Tooltip>}
                    >
                      <i className="fa fa-question-circle" variant="success"></i>
                    </OverlayTrigger>
                  </li>
                  <li>Basic Feature</li>
                  <li>One User</li>
                  <li>More Records</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingTable
