import React from "react"

const Feature = ({ title, subtitle, iconName }) => {
  return (
    <div className="feature-3">
      <div className="icon-box">
        <i className={iconName}></i>
      </div>
      <h4>{title}</h4>
      <span>{subtitle}</span>
    </div>
  )
}

export default Feature
