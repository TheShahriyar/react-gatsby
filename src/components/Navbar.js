import React, { Component } from "react"

export default class Navbar extends Component {
  state = {
    scrolled: false,
    isNavbarOpen: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let pageScroll = window.scrollY > 300

      if (pageScroll) {
        this.setState({
          scrolled: true,
        })
      } else {
        this.setState({
          scrolled: false,
        })
      }
    })
  }

  handleNavbar = () => {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen,
    })
  }

  // componentWillUnmount() {
  //     window.removeEventListener("scroll");
  // }

  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light navbar-fixed-top ${
          this.state.scrolled ? "navbar-bg" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Othelo
          </a>
          <button
            className={
              isNavbarOpen ? `navbar-toggler` : `navbar-toggler collapsed`
            }
            type="button"
            onClick={this.handleNavbar}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              isNavbarOpen
                ? `collapse navbar-collapse show`
                : `collapse navbar-collapse`
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
