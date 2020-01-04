import React from "react"

const FooterSection = () => {
  return (
    <section
      className="footer-section pad-t80"
      style={{ backgroundColor: "#282828" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-title">
              <h3>About Us</h3>
            </div>
            <div className="footer-text">
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus.{" "}
                <span className="text-brand-color">Vivamus magna justo</span>,
                lacinia eget consectetur sed, convallis at tellus. Nulla
                porttitor accumsan tincidunt.
              </p>
              <p>
                Vivamus suscipit tortor eget felis porttitor volutpat.
                Vestibulum ante ipsum primis in faucibus orci{" "}
                <span className="text-brand-color">luctus et</span> ultrices
                posuere cubilia Curae.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-title">
              <h3>Office Hour</h3>
            </div>
            <div className="footer-office-hour">
              <ul>
                <li>
                  <a href="#">Opining Days :</a>
                </li>
                <li>
                  <a href="#">Monday – Friday : 9am to 20 pm</a>
                </li>
                <li>
                  <a href="#">Saturday : 9am to 17 pm</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Vacations :</a>
                </li>
                <li>
                  <a href="#">All Sunday Days</a>
                </li>
                <li>
                  <a href="#">All Official Holidays</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-title">
              <h3>Usefull Link</h3>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>HTML5 Resourses
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>CSS3 Resourses
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>PHP Syntax List
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>Wordpress Market
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>Joomla Template
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>JQuery Library
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-title">
              <h3>Subscribe</h3>
            </div>
            <p>Vivamus magna justo, lacinia eget consectetur sed.</p>
            <form>
              <div className="form-group footer-subscribe">
                <input
                  type="email"
                  className="form-control"
                  id="Email1"
                  placeholder="Subscribe In Our Newsletter"
                />
                <button type="submit" className="btn btn-default">
                  Join
                </button>
              </div>
            </form>
            <div className="footer-social">
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-md-12">
            <div className="copyright-text text-center">
              <p>
                Othelo © All Rights Reserved. Developed by{" "}
                <a href="#">The Shahriyar</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterSection
