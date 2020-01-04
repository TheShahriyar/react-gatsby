import React from "react"

const ContactSection = () => {
  return (
    <section id="contact" className="form-map">
      <div id="map" style={{ maxHeight: "700px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10501.186597097454!2d2.2921049081065044!3d48.85255336317711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701f7e8337b5%3A0xa2cb58dd28914524!2sEiffel%20Tower%2C%20Paris%2C%20France!5e0!3m2!1sen!2sbd!4v1578138195194!5m2!1sen!2sbd"
          width="100%"
          height="700"
          style={{ border: "0" }}
        ></iframe>
      </div>
      <div className="container">
        <div className="row">
          <div className="form-section w-100">
            <div className="col-md-6 col-xs-12 pull-right black full-height">
              <h4 style={{ marginBottom: "30px", color: "#fff" }}>
                Fill The Form
              </h4>
              <form name="sentMessage" id="contactForm">
                <div className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name *"
                      id="name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Phone *"
                      id="phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message Subject *"
                      id="msg_subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message *"
                      id="message"
                    ></textarea>
                  </div>
                  <div className="clearfix"></div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
