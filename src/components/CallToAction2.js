import React from "react"
import Bg10 from "../images/bg/bg10.jpg"

const CallToAction2 = () => {
  return (
    <section
      className="pad80 parallax"
      style={{ backgroundImage: `url(${Bg10})`, backgroundPosition: "50% 30%" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="call-to-action-2 text-center white">
              <h3>Design. Develope. Dedicate</h3>
              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi.
              </p>
              <a href="#" className="btn btn-primary">
                Buy This Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction2
