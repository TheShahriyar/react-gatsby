import React from "react"
import TabContainer from "react-bootstrap/TabContainer"
import TabContent from "react-bootstrap/TabContent"
import TabPane from "react-bootstrap/TabPane"
import Nav from "react-bootstrap/Nav"

import image2 from "../images/others/img-2.jpg"
import image3 from "../images/others/img-3.jpg"
import image4 from "../images/others/img-4.jpg"
import image5 from "../images/others/img-5.jpg"

const MegaTab = () => {
  return (
    <div className="othelo-tab" id="othelo-tab">
      <TabContainer id="team" defaultActiveKey="first">
        <Nav className="nav-tabs nav-justified">
          <Nav.Item>
            <Nav.Link eventKey="first">
              <i className="fa fa-joomla"></i> Joomla <br />
              Template
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">
              <i className="fa fa-wordpress"></i> Wordpress <br />
              Theme
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">
              <i className="fa fa-codepen"></i> Web <br />
              Application
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">
              <i className="fa fa-desktop"></i> Website <br />
              Design
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fifth">
              <i className="fa fa-file-code-o"></i> Software <br />
              Developement
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sixth">
              <i className="fa fa-cubes"></i> Graphic <br />
              Design
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent>
          <TabPane eventKey="first">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <img src={image3} className="img-fluid" alt="theshahriyar" />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <span className="dropcap bg circle">M</span>
                    aecenas volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum volutpat nibh, accumsan
                    purus. Lorem sit ipsum dolor semper consectetur amet,
                    adipiscing elit. In maximus ligula metus pellen tesque
                    mattis. volutpat nibh
                  </div>
                  <div className="col-md-6 col-sm-6 mbl-margin-20">
                    <h4 style={{ marginBottom: "20px", fontSize: "18px" }}>
                      Feature of Company
                    </h4>
                    <ul className="fa-ul">
                      <li>
                        <i className="fa-li fa fa-check-circle"></i>Interdum
                        malesuada fames
                      </li>
                      <li>
                        <i className="fa-li fa fa-check-circle"></i>Malesuada
                        fames ante
                      </li>
                      <li>
                        <i className="fa-li fa fa-check-circle"></i>Nam blandit
                        fermentum
                      </li>
                      <li>
                        <i className="fa-li fa fa-check-circle"></i>Interdum
                        fames ac ante
                      </li>
                      <li>
                        <i className="fa-li fa fa-check-circle"></i>Malesuada
                        fames ipsum
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <p style={{ marginTop: "17px" }}>
                      Cras ultricies ligula sed magna dictum porta. Vivamus
                      magna justo, lacinia eget consectetur sed, convallis at
                      tellus. Sed porttitor lectus nibh. Quisque velit nisi,
                      pretium ut lacinia in, elementum id enim. Vivamus magna
                      justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>

          <TabPane eventKey="second">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <span className="dropcap bg circle">M</span>
                aecenas volutpat, diam enim sagittis quam, id porta quam. Sed id
                dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem
                ipsum dolor sit semper amet, consectetur adipiscing elit. In
                maximus ligula metus pellentesque mattis.Praesent sed nisi
                eleifend, fermentum orci amet, iaculis libero fugiat nulla
                pariatur. Excepteur .
              </div>
              <div className="col-md-4 col-sm-6">
                <img src={image4} className="img-fluid" alt="theshahriyar" />
              </div>
              <div className="col-md-4 col-sm-6">
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                </ul>
              </div>
            </div>
          </TabPane>
          <TabPane eventKey="third">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <span className="dropcap bg circle">M</span>
                aecenas volutpat, diam enim sagittis quam, id porta quam. Sed id
                dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem
                ipsum dolor sit semper amet, consectetur adipiscing elit. In
                maximus ligula metus pellentesque mattis.Praesent sed nisi
                eleifend, fermentum orci amet, iaculis libero fugiat nulla
                pariatur. Excepteur .
              </div>
              <div className="col-md-4 col-sm-6">
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6">
                <img src={image5} className="img-fluid" alt="Revenue" />
              </div>
            </div>
          </TabPane>
          <TabPane eventKey="fourth">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <img src={image3} className="img-fluid" alt="Revenue" />
              </div>
              <div className="col-md-4 col-sm-6">
                <span className="dropcap bg circle">M</span>
                aecenas volutpat, diam enim sagittis quam, id porta quam. Sed id
                dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem
                ipsum dolor sit semper amet, consectetur adipiscing elit. In
                maximus ligula metus pellentesque mattis.Praesent sed nisi
                eleifend, fermentum orci amet, iaculis libero fugiat nulla
                pariatur. Excepteur .
              </div>
              <div className="col-md-4 col-sm-6">
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                </ul>
              </div>
            </div>
          </TabPane>
          <TabPane eventKey="fifth">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <span className="dropcap bg circle">M</span>
                aecenas volutpat, diam enim sagittis quam, id porta quam. Sed id
                dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem
                ipsum dolor sit semper amet, consectetur adipiscing elit. In
                maximus ligula metus pellentesque mattis.Praesent sed nisi
                eleifend, fermentum orci amet, iaculis libero fugiat nulla
                pariatur. Excepteur .
              </div>
              <div className="col-md-4 col-sm-6">
                <img src={image2} className="img-fluid" alt="Revenue" />
              </div>
              <div className="col-md-4 col-sm-6">
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                </ul>
              </div>
            </div>
          </TabPane>
          <TabPane eventKey="sixth">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <span className="dropcap bg circle">M</span>
                aecenas volutpat, diam enim sagittis quam, id porta quam. Sed id
                dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem
                ipsum dolor sit semper amet, consectetur adipiscing elit. In
                maximus ligula metus pellentesque mattis.Praesent sed nisi
                eleifend, fermentum orci amet, iaculis libero fugiat nulla
                pariatur. Excepteur .
              </div>
              <div className="col-md-4 col-sm-6">
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Malesuada fames
                    ac ante ipsum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                  <li>
                    <i className="fa-li fa fa-check-circle"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6">
                <img src={image4} className="img-fluid" alt="Revenue" />
              </div>
            </div>
          </TabPane>
        </TabContent>
      </TabContainer>
    </div>
  )
}

export default MegaTab
