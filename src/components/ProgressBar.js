import React from "react"

const ProgressBar = ({ title, width }) => {
  return (
    <div className="skill-shortcode">
      <div className="skill">
        <span className="skill-name">{title}</span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
