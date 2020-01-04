import React from "react"

const SectionTitle = ({ title, text, titleStyle }) => {
  return (
    <div className={`section-title ${titleStyle}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default SectionTitle
